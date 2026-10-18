/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "gm-q1-fy25",
    "company": "GM",
    "period": "Q1 FY25",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/gm-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 44,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 39.9,
          "notes": [
            "+2% Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 37.4,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 2.4,
              "notes": [
                "(21%) Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.046,
              "notes": [
                "+44% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "cruise",
          "label": "Cruise",
          "value": 0.001,
          "notes": [
            "(96%) Y/Y"
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 4.2,
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
        "value": 35.2
      },
      "operatingExpenses": {
        "total": 5.5,
        "items": [
          {
            "id": "other",
            "label": "Other",
            "value": 3.5
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2
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
      "total": 0.2,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
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
        "value": 8.8,
        "notes": [
          "20% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.4,
        "notes": [
          "8% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.9,
        "notes": [
          "6% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 +2%"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 (21%)"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 +44%"
                  ]
                }
              ]
            },
            {
              "id": "cruise",
              "label": "Cruise 自动驾驶",
              "notes": [
                "同比 (96%)"
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
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
                "id": "other",
                "label": "其他"
              },
              {
                "id": "sga",
                "label": "销售及管理（SG&A）"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 20%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "gm-fy25",
    "company": "GM",
    "period": "FY25",
    "periodNote": "Year ended Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/gm-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 185,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 168,
          "notes": [
            "(2%) Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 154.3,
              "notes": [
                "(2%) Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 13.4,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.2,
              "notes": [
                "+10% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 17.1,
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
        "value": 159.1
      },
      "operatingExpenses": {
        "total": 23,
        "items": [
          {
            "id": "other",
            "label": "Other",
            "value": 14.3
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 8.7
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
          "id": "interest",
          "label": "Interest",
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
        "value": 25.9,
        "notes": [
          "14% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.9,
        "notes": [
          "2% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.8,
        "notes": [
          "2% margin",
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
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 (2%)"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 (2%)"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 (3%)"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 +10%"
                  ]
                }
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
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
                "id": "other",
                "label": "其他"
              },
              {
                "id": "sga",
                "label": "销售及管理"
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
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "gm-q1-fy26",
    "company": "GM",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/gm-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 43.6,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 39.3,
          "notes": [
            "(1%) Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 36.4,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 2.9,
              "notes": [
                "+18% Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.1,
              "notes": [
                "+96% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 4.3,
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
        "value": 35
      },
      "operatingExpenses": {
        "total": 5.7,
        "items": [
          {
            "id": "other_expense",
            "label": "Other",
            "value": 3.6
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.1
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
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.6,
        "notes": [
          "20% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.9,
        "notes": [
          "7% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.7,
        "notes": [
          "6% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月的季度",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 (1%)"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 (3%)"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 +18%"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 +96%"
                  ]
                }
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
              "notes": [
                "同比 +3%"
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
                "id": "other_expense",
                "label": "其他"
              },
              {
                "id": "sga",
                "label": "销售及管理"
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
              "利润率 20%",
              "同比 (0 个百分点)"
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
              "利润率 6%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "gm-q2-fy26",
    "company": "GM",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/gm-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 48,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 43.8,
          "notes": [
            "+2% Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 39.9,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 3.7,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.2,
              "notes": [
                "+179% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 4.3,
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
        "value": 40.7
      },
      "operatingExpenses": {
        "total": 5.9,
        "items": [
          {
            "id": "other_expense",
            "label": "Other",
            "value": 3.7
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.2
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
        "value": 1.5,
        "notes": [
          "3% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "notes": [
          "3% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月的季度",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 +2%"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 +179%"
                  ]
                }
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
              "notes": [
                "同比 +0%"
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
                "id": "other_expense",
                "label": "其他"
              },
              {
                "id": "sga",
                "label": "销售及管理"
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
              "利润率 15%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 (1 个百分点)"
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
    }
  },
  {
    "key": "gm-q2-fy24",
    "company": "GM",
    "period": "Q2 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/gm-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 48,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 44.1,
          "notes": [
            "+7% Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 40.7,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 3.3,
              "notes": [
                "(17%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "cruise",
          "label": "Cruise",
          "value": 0.025,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 3.9,
          "notes": [
            "+12% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 38.6
      },
      "operatingExpenses": {
        "total": 5.5,
        "items": [
          {
            "id": "other",
            "label": "Other",
            "value": 3.1
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.4
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
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 9.4,
        "notes": [
          "19% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.9,
        "notes": [
          "8% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.9,
        "notes": [
          "6% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 +7%"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 (17%)"
                  ]
                }
              ]
            },
            {
              "id": "cruise",
              "label": "Cruise 自动驾驶",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
              "notes": [
                "同比 +12%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other",
                "label": "其他"
              },
              {
                "id": "sga",
                "label": "销售及管理（SG&A）"
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 19%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
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
    "key": "gm-q3-fy25",
    "company": "GM",
    "period": "Q3 FY25",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/gm-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 48.6,
      "notes": [
        "(0%) Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 44.3,
          "notes": [
            "(1%) Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 40.6,
              "notes": [
                "(1%) Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 3.6,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.1,
              "notes": [
                "(3%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 4.3,
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
        "value": 41.9
      },
      "operatingExpenses": {
        "total": 5.6,
        "items": [
          {
            "id": "other",
            "label": "Other",
            "value": 3.5
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2
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
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
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
        "value": 6.7,
        "notes": [
          "14% margin",
          "(6pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "2% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "3% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "revenue": {
          "notes": [
            "同比 (0%)"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 (1%)"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 (1%)"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 (3%)"
                  ]
                }
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
              "notes": [
                "同比 +8%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other",
                "label": "其他"
              },
              {
                "id": "sga",
                "label": "销售及管理（SG&A）"
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
              "id": "interest",
              "label": "利息收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 14%",
              "同比 (6 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "gm-q4-fy23",
    "company": "GM",
    "period": "Q4 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/gm-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 43,
      "notes": [
        "(0%) Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 39.3,
          "notes": [
            "(1%) Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 35.2,
              "notes": [
                "(1%) Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 3.9,
              "notes": [
                "(9%) Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.1,
              "notes": [
                "+118% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "cruise",
          "label": "Cruise",
          "value": 0.025,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 3.7,
          "notes": [
            "+14% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 36.6
      },
      "operatingExpenses": {
        "total": 5.5,
        "items": [
          {
            "id": "other_expense",
            "label": "Other",
            "value": 3.1
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.4
          }
        ]
      },
      "tax": {
        "label": "Tax expense",
        "value": 0,
        "notes": [
          "Source displays a $0.8B tax benefit as a green inflow to net profit."
        ]
      }
    },
    "otherIncome": {
      "total": 1.1,
      "items": [
        {
          "id": "tax",
          "label": "Tax",
          "value": 0.8,
          "notes": [
            "Source-presented tax benefit."
          ]
        },
        {
          "id": "other_income",
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
        "value": 6.4,
        "notes": [
          "15% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.9,
        "notes": [
          "2% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2,
        "notes": [
          "5% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 (0%)"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 (1%)"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 (1%)"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 (9%)"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 +118%"
                  ]
                }
              ]
            },
            {
              "id": "cruise",
              "label": "Cruise 业务",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
              "notes": [
                "同比 +14%"
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
                "id": "other_expense",
                "label": "其他"
              },
              {
                "id": "sga",
                "label": "销售及管理（SG&A）"
              }
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax",
              "label": "税项收益"
            },
            {
              "id": "other_income",
              "label": "其他收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 15%",
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "gm-q4-fy22",
    "company": "GM",
    "period": "Q4 FY22",
    "currency": "$",
    "unit": "B",
    "decimals": 4,
    "sourceImage": "input/processing/gm-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 43.1,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 39.8,
          "notes": [
            "+31% Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 35.5,
              "notes": [
                "+32% Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 4.3,
              "notes": [
                "+25% Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.044,
              "notes": [
                "+19% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "cruise",
          "label": "Cruise",
          "value": 0.025,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 3.3,
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
        "value": 34.6
      },
      "operatingExpenses": {
        "total": 5.9,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3.4
          },
          {
            "id": "other",
            "label": "Other",
            "value": 2.5,
            "notes": [
              "Source typo: ($2.5M); corrected to ($2.5B) by operator confirmation on 2026-10-18."
            ]
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
        "value": 8.5,
        "notes": [
          "20% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "6% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2,
        "notes": [
          "5% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +28%"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 +31%"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用汽车北美",
                  "notes": [
                    "同比 +32%"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用汽车国际",
                  "notes": [
                    "同比 +25%"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司总部",
                  "notes": [
                    "同比 +19%"
                  ]
                }
              ]
            },
            {
              "id": "cruise",
              "label": "Cruise 自动驾驶",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用汽车金融",
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
                "id": "sga",
                "label": "销售及管理费用"
              },
              {
                "id": "other",
                "label": "其他",
                "notes": [
                  "原图笔误：($2.5M)；经操作员于 2026-10-18 确认为 ($2.5B)。"
                ]
              }
            ]
          },
          "tax": {
            "label": "所得税"
          }
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
    "key": "gm-q2-fy23",
    "company": "GM",
    "period": "Q2 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/gm-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 44.7,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 41.3,
          "notes": [
            "+26% Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 37.2,
              "notes": [
                "+29% Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 4,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.1,
              "notes": [
                "+68% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "cruise",
          "label": "Cruise",
          "value": 0.026,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 3.4,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 36.6,
        "notes": []
      },
      "operatingExpenses": {
        "total": 5.3,
        "items": [
          {
            "id": "other",
            "label": "Other",
            "value": 2.8,
            "notes": []
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.6,
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
        "value": 8.1,
        "notes": [
          "18% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.8,
        "notes": [
          "6% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.5,
        "notes": [
          "6% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 +26%"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 +29%"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 +68%"
                  ]
                }
              ]
            },
            {
              "id": "cruise",
              "label": "Cruise 自动驾驶",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
              "notes": [
                "同比 +11%"
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
                "id": "other",
                "label": "其他",
                "notes": []
              },
              {
                "id": "sga",
                "label": "销售及管理（SG&A）",
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
            "label": "毛利润",
            "notes": [
              "利润率 18%",
              "同比 +0 个百分点"
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
              "利润率 6%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "gm-q4-fy24",
    "company": "GM",
    "period": "Q4 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/gm-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 47.7,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 43.6,
          "notes": [
            "+11% Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 39.5,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 4,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.1,
              "notes": [
                "(21%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "cruise",
          "label": "Cruise",
          "value": 0.1,
          "notes": [
            "NM"
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 4.1,
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
        "value": 39.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 6.7,
        "items": [
          {
            "id": "other_opex",
            "label": "Other",
            "value": 3.4,
            "notes": []
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3.3,
            "notes": []
          }
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 4.4,
      "items": [
        {
          "id": "other_net",
          "label": "Other",
          "value": 4.4,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.3,
        "notes": [
          "17% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "3% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -2.9,
        "notes": []
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 +11%"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 (21%)"
                  ]
                }
              ]
            },
            {
              "id": "cruise",
              "label": "Cruise 自动驾驶",
              "notes": [
                "无可比意义"
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
              "notes": [
                "同比 +10%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_opex",
                "label": "其他",
                "notes": []
              },
              {
                "id": "sga",
                "label": "销售及管理（SG&A）",
                "notes": []
              }
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_net",
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
              "利润率 17%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_loss",
            "label": "净亏损",
            "notes": []
          }
        },
        "period": "2024 财年第四季度"
      }
    }
  },
  {
    "key": "gm-q3-fy23",
    "company": "GM",
    "period": "Q3 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/gm-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 44.1,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 40.5,
          "notes": [
            "+5% Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 36.1,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 4.3,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.1,
              "notes": [
                "+109% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "cruise",
          "label": "Cruise",
          "value": 0.025,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 3.6,
          "notes": [
            "+14% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 35.8
      },
      "operatingExpenses": {
        "total": 5.3,
        "items": [
          {
            "id": "other",
            "label": "Other",
            "value": 2.9
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.3
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
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 8.3,
        "notes": [
          "19% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3,
        "notes": [
          "6% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3,
        "notes": [
          "7% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 +5%"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 +109%"
                  ]
                }
              ]
            },
            {
              "id": "cruise",
              "label": "Cruise 自动驾驶",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
              "notes": [
                "同比 +14%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_sales",
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other",
                "label": "其他费用"
              },
              {
                "id": "sga",
                "label": "销售及管理"
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
              "label": "其他收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 19%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "gm-q3-fy24",
    "company": "GM",
    "period": "Q3 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/gm-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 48.8,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 44.7,
          "notes": [
            "+10% Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 41.2,
              "notes": [
                "+14% Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 3.5,
              "notes": [
                "(19%) Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.1,
              "notes": [
                "(7%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "cruise",
          "label": "Cruise",
          "value": 0.026,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 4,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 39,
        "notes": []
      },
      "operatingExpenses": {
        "total": 6.1,
        "items": [
          {
            "id": "other",
            "label": "Other",
            "value": 3.4,
            "notes": []
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.7,
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
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
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
        "value": 9.8,
        "notes": [
          "20% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.7,
        "notes": [
          "7% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3,
        "notes": [
          "6% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 +10%"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 +14%"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 (19%)"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 (7%)"
                  ]
                }
              ]
            },
            {
              "id": "cruise",
              "label": "Cruise 自动驾驶",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
              "notes": [
                "同比 +11%"
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
                "id": "other",
                "label": "其他",
                "notes": []
              },
              {
                "id": "sga",
                "label": "销售及管理（SG&A）",
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
              "id": "interest",
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 20%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 +1 个百分点"
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
    "key": "gm-q1-fy24",
    "company": "GM",
    "period": "Q1 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/gm-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 43,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 39.2,
          "notes": [
            "+7% Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 36.1,
              "notes": [
                "+10% Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 3.1,
              "notes": [
                "(17%) Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.032,
              "notes": [
                "+3% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "cruise",
          "label": "Cruise",
          "value": 0.025,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 3.8,
          "notes": [
            "+14% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 34
      },
      "operatingExpenses": {
        "total": 5.3,
        "items": [
          {
            "id": "other",
            "label": "Other",
            "value": 3.1,
            "notes": []
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.2,
            "notes": []
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
      "total": 0.022,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.022
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 9,
        "notes": [
          "21% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.7,
        "notes": [
          "9% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3,
        "notes": [
          "7% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 +7%"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 +10%"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 (17%)"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 +3%"
                  ]
                }
              ]
            },
            {
              "id": "cruise",
              "label": "Cruise 自动驾驶",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
              "notes": [
                "同比 +14%"
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
                "id": "other",
                "label": "其他",
                "notes": []
              },
              {
                "id": "sga",
                "label": "销售及管理（SG&A）",
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
              "id": "interest",
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 21%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 9%",
              "同比 +3 个百分点"
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
    "key": "gm-q1-fy23",
    "company": "GM",
    "period": "Q1 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/gm-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 40,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "auto",
          "label": "Auto",
          "value": 36.6,
          "notes": [
            "+12% Y/Y"
          ],
          "children": [
            {
              "id": "gm_north_america",
              "label": "GM North America",
              "value": 32.9,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "gm_international",
              "label": "GM International",
              "value": 3.7,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "corporate",
              "label": "Corporate",
              "value": 0.031,
              "notes": [
                "(42%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "cruise",
          "label": "Cruise",
          "value": 0.025,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "gm_financial",
          "label": "GM Financial",
          "value": 3.3,
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
        "value": 32.2,
        "notes": []
      },
      "operatingExpenses": {
        "total": 5.2,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 2.5,
            "notes": []
          },
          {
            "id": "other",
            "label": "Other",
            "value": 2.6,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4,
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
        "value": 7.7,
        "notes": [
          "19% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "6% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.3,
        "notes": [
          "6% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "auto",
              "label": "汽车业务",
              "notes": [
                "同比 +12%"
              ],
              "children": [
                {
                  "id": "gm_north_america",
                  "label": "通用北美",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "gm_international",
                  "label": "通用国际",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "corporate",
                  "label": "公司及其他",
                  "notes": [
                    "同比 (42%)"
                  ]
                }
              ]
            },
            {
              "id": "cruise",
              "label": "Cruise 自动驾驶",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "gm_financial",
              "label": "通用金融",
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
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售及管理（SG&A）",
                "notes": []
              },
              {
                "id": "other",
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
              "利润率 19%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  }
]);
})(window);
