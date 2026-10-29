/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "match-group-q3-fy25",
    "company": "Match Group",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q3-fy25.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 914,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 491,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 185,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 69,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 152,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 18,
          "notes": [
            "+8% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 247
      },
      "operatingExpenses": {
        "total": 446,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 169,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 148,
            "notes": [
              "16% of revenue",
              "+5pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 105,
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 24,
            "notes": [
              "3% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 33
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 28,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 28
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 667,
        "notes": [
          "73% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 221,
        "notes": [
          "24% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 161,
        "notes": [
          "18% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": "常青与新兴品牌",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "indirect",
              "label": "间接收入",
              "notes": [
                "同比 +8%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
                  "同比 +5 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 11%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "da",
                "label": "折旧及摊销",
                "notes": [
                  "占收入 3%",
                  "同比 (0 个百分点)"
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 73%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 24%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q4-fy25",
    "company": "Match Group",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q4-fy25.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 878,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 464,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 187,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 66,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 145,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 18,
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
        "value": 222
      },
      "operatingExpenses": {
        "total": 371,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 151,
            "notes": [
              "17% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 109,
            "notes": [
              "12% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 89,
            "notes": [
              "10% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 12,
            "notes": [
              "1% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "other_operating",
            "label": "Other",
            "value": 9
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 45
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 30,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 30,
          "notes": [
            "Net of $43M interest expense and $13M other income"
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 656,
        "notes": [
          "75% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 285,
        "notes": [
          "32% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 210,
        "notes": [
          "24% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": "常青与新兴品牌",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "indirect",
              "label": "间接收入",
              "notes": [
                "同比 +19%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 17%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 12%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "da",
                "label": "折旧及摊销",
                "notes": [
                  "占收入 1%",
                  "同比 (0 个百分点)"
                ]
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
              "id": "other_non_operating",
              "label": "其他",
              "notes": [
                "由 4,300 万美元利息费用与 1,300 万美元其他收入净额构成"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 32%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 24%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q1-fy26",
    "company": "Match Group",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q1-fy26.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 864,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 455,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 194,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 60,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 139,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 16,
          "notes": [
            "(14%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 211
      },
      "operatingExpenses": {
        "total": 417,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 163,
            "notes": [
              "19% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 117,
            "notes": [
              "14% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 89,
            "notes": [
              "10% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 48,
            "notes": [
              "6% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 34
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 36,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 36
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 653,
        "notes": [
          "76% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 236,
        "notes": [
          "27% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 167,
        "notes": [
          "19% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": "常青与新兴品牌",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "indirect",
              "label": "间接收入",
              "notes": [
                "同比 (14%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 19%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 14%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "da",
                "label": "折旧及摊销",
                "notes": [
                  "占收入 6%",
                  "同比 +2 个百分点"
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 27%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q2-fy26",
    "company": "Match Group",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q2-fy26.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 853,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 469,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 204,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 182,
          "notes": [
            "(17%) Y/Y"
          ]
        },
        {
          "id": "elimination",
          "label": "Elimination",
          "value": -2
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 204
      },
      "operatingExpenses": {
        "total": 403,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 158,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 115,
            "notes": [
              "13% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 106,
            "notes": [
              "12% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 24,
            "notes": [
              "3% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 44
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 31,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 31
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 649,
        "notes": [
          "76% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 245,
        "notes": [
          "29% margin",
          "+6pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 171,
        "notes": [
          "20% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": [
                "常青与",
                "新兴品牌"
              ],
              "notes": [
                "同比 (17%)"
              ]
            },
            {
              "id": "elimination",
              "label": "抵销"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 13%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "da",
                "label": "折旧及摊销",
                "notes": [
                  "占收入 3%",
                  "同比 (1 个百分点)"
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 29%",
              "同比 +6 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 +5 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q1-fy23",
    "company": "Match Group",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q1-fy23.png",
    "roundingTolerance": 2.5,
    "revenue": {
      "total": 787,
      "notes": [
        "(1%) Y/Y",
        "+3% Y/Y FXN"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 441,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 83,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 76,
          "notes": [
            "(13%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 175,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 13,
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
        "value": 240
      },
      "operatingExpenses": {
        "total": 349,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 137,
            "notes": [
              "19% of revenue"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 98,
            "notes": [
              "12% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 91,
            "notes": [
              "12% of revenue"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 23,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 42
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 36,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 36
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 547,
        "notes": [
          "70% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 198,
        "notes": [
          "25% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 121,
        "notes": [
          "15% margin",
          "(7pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 (1%)",
            "固定汇率同比 +3%"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +27%"
              ]
            },
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (13%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": [
                "常青与",
                "新兴品牌"
              ],
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "indirect",
              "label": "间接收入",
              "notes": [
                "同比 (8%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 19%"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 12%"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%"
                ]
              },
              {
                "id": "da",
                "label": [
                  "折旧及",
                  "摊销"
                ],
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
          "items": []
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_non_operating",
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
              "利润率 70%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 25%",
              "同比 (1 个百分点)"
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
        }
      }
    }
  },
  {
    "key": "match-group-q1-fy24",
    "company": "Match Group",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q1-fy24.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 860,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 481,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 124,
          "notes": [
            "+50% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 71,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 169,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 14,
          "notes": [
            "+13% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 257,
        "notes": []
      },
      "operatingExpenses": {
        "total": 418,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 165,
            "notes": [
              "19% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 116,
            "notes": [
              "13% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 106,
            "notes": [
              "12% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "Amortization & Depreciation",
            "value": 31,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 31,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 31,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 31,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 603,
        "notes": [
          "70% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 185,
        "notes": [
          "21% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 123,
        "notes": [
          "14% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +50%"
              ]
            },
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": [
                "常青与",
                "新兴品牌"
              ],
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "indirect",
              "label": "间接收入",
              "notes": [
                "同比 +13%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 19%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 13%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "da",
                "label": [
                  "摊销及",
                  "折旧"
                ],
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 70%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q1-fy25",
    "company": "Match Group",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q1-fy25.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 831,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 447,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 152,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 64,
          "notes": [
            "(11%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 149,
          "notes": [
            "(12%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 19,
          "notes": [
            "+30% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 237
      },
      "operatingExpenses": {
        "total": 422,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 157,
            "notes": [
              "19% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 121,
            "notes": [
              "15% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 112,
            "notes": [
              "13% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 32,
            "notes": [
              "4% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 22
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 33,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 33
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 594,
        "notes": [
          "71% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 173,
        "notes": [
          "21% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 118,
        "notes": [
          "14% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (11%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": "常青与新兴品牌",
              "notes": [
                "同比 (12%)"
              ]
            },
            {
              "id": "indirect",
              "label": "间接收入",
              "notes": [
                "同比 +30%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 19%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 15%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "da",
                "label": "折旧及摊销",
                "notes": [
                  "占收入 4%",
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 71%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 14%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q2-fy23",
    "company": "Match Group",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q2-fy23.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 830,
      "notes": [
        "+4% Y/Y",
        "+6% Y/Y FXN"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 475,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 90,
          "notes": [
            "+35% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 77,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 174,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 13,
          "notes": [
            "(7%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 250
      },
      "operatingExpenses": {
        "total": 364,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 137,
            "notes": [
              "16% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 108,
            "notes": [
              "13% of revenue"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 94,
            "notes": [
              "11% of revenue"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 26,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 41
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 36,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 36
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 579,
        "notes": [
          "70% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 214,
        "notes": [
          "26% margin",
          "+27pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 138,
        "notes": [
          "17% margin",
          "+21pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +4%",
            "固定汇率同比 +6%"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +35%"
              ]
            },
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": "常青与新兴品牌",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "indirect",
              "label": "间接收入",
              "notes": [
                "同比 (7%)"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 16%"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 11%"
                ]
              },
              {
                "id": "da",
                "label": "摊销及折旧",
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 70%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 26%",
              "同比 +27 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +21 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q2-fy24",
    "company": "Match Group",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q2-fy24.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 864,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 480,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 134,
          "notes": [
            "+48% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 74,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 161,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 16,
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
        "value": 245
      },
      "operatingExpenses": {
        "total": 415,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 155,
            "notes": [
              "18% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 114,
            "notes": [
              "13% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 114,
            "notes": [
              "13% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 32,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 41
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 30,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 30
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 619,
        "notes": [
          "72% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 205,
        "notes": [
          "24% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 133,
        "notes": [
          "15% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +48%"
              ]
            },
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": "常青与新兴品牌",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "indirect",
              "label": "间接收入",
              "notes": [
                "同比 +19%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 18%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 13%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "da",
                "label": "折旧及摊销",
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 24%",
              "同比 (2pp)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 (1pp)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q2-fy25",
    "company": "Match Group",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q2-fy25.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 864,
      "notes": [
        "(0%) Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 477,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 168,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 69,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 151,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "elimination",
          "label": "Eliminations",
          "value": -1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 242
      },
      "operatingExpenses": {
        "total": 428,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 148,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 137,
            "notes": [
              "16% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 115,
            "notes": [
              "13% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 29,
            "notes": [
              "3% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 32
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 36,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 36
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 622,
        "notes": [
          "72% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 194,
        "notes": [
          "22% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 125,
        "notes": [
          "15% margin",
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
            "同比 (0%)"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": "常青与新兴品牌",
              "notes": [
                "同比 (8%)"
              ]
            },
            {
              "id": "elimination",
              "label": "抵销"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 16%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 13%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "da",
                "label": "折旧及摊销",
                "notes": [
                  "占收入 3%",
                  "同比 (0 个百分点)"
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
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q3-fy22",
    "company": "Match Group",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q3-fy22.png",
    "roundingTolerance": 2,
    "revenue": {
      "total": 810,
      "notes": [
        "+1% Y/Y",
        "9pp fx headwind"
      ],
      "items": [
        {
          "id": "americas",
          "label": "Americas",
          "value": 413,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 215,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "apac_other",
          "label": "APAC & Other",
          "value": 167,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 14,
          "notes": [
            "(11%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 247
      },
      "operatingExpenses": {
        "total": 352,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 130
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 114
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 88
          },
          {
            "id": "da",
            "label": "Amortization & Depreciation",
            "value": 20
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 48
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 34,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 34
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 563,
        "notes": [
          "69% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 210,
        "notes": [
          "26% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 128,
        "notes": [
          "16% margin",
          "Unchanged"
        ]
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 +1%",
            "汇率逆风 9 个百分点"
          ],
          "items": [
            {
              "id": "americas",
              "label": "美洲",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "apac_other",
              "label": [
                "亚太地区",
                "及其他"
              ],
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 (11%)"
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
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "da",
                "label": "摊销及折旧"
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
              "利润率 69%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 26%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 16%",
              "同比不变"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q3-fy23",
    "company": "Match Group",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q3-fy23.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 882,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 509,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 107,
          "notes": [
            "+44% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 77,
          "notes": [
            "(5%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": [
            "Evergreen",
            "& Emerging"
          ],
          "value": 174,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 15,
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
        "value": 256
      },
      "operatingExpenses": {
        "total": 382,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 153,
            "notes": [
              "17% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 107,
            "notes": [
              "12% of revenue"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 94,
            "notes": [
              "11% of revenue"
            ]
          },
          {
            "id": "da",
            "label": [
              "Amortization &",
              "Depreciation"
            ],
            "value": 28
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 47
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 32,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 32
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 626,
        "notes": [
          "71% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 244,
        "notes": [
          "28% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 164,
        "notes": [
          "19% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +44%"
              ]
            },
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (5%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": "常青与新兴品牌",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "indirect",
              "label": "间接收入",
              "notes": [
                "同比 +3%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 17%"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 11%"
                ]
              },
              {
                "id": "da",
                "label": "摊销及折旧",
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
              "id": "other_non_operating",
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
              "利润率 71%",
              "同比 +2pp"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 +2pp"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 +3pp"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q3-fy24",
    "company": "Match Group",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q3-fy24.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 895,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 503,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 145,
          "notes": [
            "+36% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 72,
          "notes": [
            "(6%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 158,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 16,
          "notes": [
            "+10% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 253,
        "notes": []
      },
      "operatingExpenses": {
        "total": 432,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 157,
            "notes": [
              "17% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 104,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 104,
            "notes": [
              "12% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 25,
            "notes": [
              "3% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 42,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 41,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 33,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 33,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 642,
        "notes": [
          "72% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 211,
        "notes": [
          "24% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 136,
        "notes": [
          "15% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "tinder",
              "label": "Tinder",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "hinge",
              "label": "Hinge",
              "notes": [
                "同比 +36%"
              ]
            },
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (6%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": "常青与新兴品牌",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "indirect",
              "label": "间接收入",
              "notes": [
                "同比 +10%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 17%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 12%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "da",
                "label": "折旧及摊销",
                "notes": [
                  "占收入 3%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "impairment",
                "label": "减值",
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
              "id": "other_non_operating",
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
              "利润率 72%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 24%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 (3 个百分点)"
            ]
          }
        },
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月"
      }
    }
  },
  {
    "key": "match-group-q4-fy22",
    "company": "Match Group",
    "period": "Q4 FY22",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q4-fy22.png",
    "roundingTolerance": 2.5,
    "revenue": {
      "total": 786,
      "notes": [
        "(2%) Y/Y",
        "+5% Y/Y fx neutral"
      ],
      "items": [
        {
          "id": "americas",
          "label": "Americas",
          "value": 407,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "europe",
          "label": "Europe",
          "value": 210,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "apac_other",
          "label": "APAC & Other",
          "value": 154,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "advertising",
          "label": "Advertising",
          "value": 15,
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
        "value": 236
      },
      "operatingExpenses": {
        "total": 444,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 127
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 110
          },
          {
            "id": "rd",
            "label": "R&D",
            "value": 81
          },
          {
            "id": "da",
            "label": "Amortization & Depreciation",
            "value": 125
          }
        ]
      }
    },
    "otherIncome": {
      "total": 18,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 18
        }
      ]
    },
    "otherExpenses": {
      "total": 41,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 41
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 550,
        "notes": [
          "70% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 107,
        "notes": [
          "14% margin",
          "(15pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 83,
        "notes": [
          "11% margin",
          "+32pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2022 年 12 月",
        "revenue": {
          "notes": [
            "同比 (2%)",
            "固定汇率同比 +5%"
          ],
          "items": [
            {
              "id": "americas",
              "label": "美洲",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "europe",
              "label": "欧洲",
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "apac_other",
              "label": "亚太及其他",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "advertising",
              "label": "广告",
              "notes": [
                "同比 (18%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "rd",
                "label": "研发"
              },
              {
                "id": "da",
                "label": "摊销及折旧"
              }
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax_benefit",
              "label": "税收收益"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_non_operating",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 70%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (15 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +32 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q4-fy23",
    "company": "Match Group",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q4-fy23.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 866,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 493,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 116,
          "notes": [
            "+50% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 74,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 168,
          "notes": [
            "(4%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 16,
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
        "value": 208
      },
      "operatingExpenses": {
        "total": 398,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 159,
            "notes": [
              "18% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 108,
            "notes": [
              "12% of revenue"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 98,
            "notes": [
              "11% of revenue"
            ]
          },
          {
            "id": "da",
            "label": "Amortization & Depreciation",
            "value": 33
          }
        ]
      }
    },
    "otherIncome": {
      "total": 5,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 5
        }
      ]
    },
    "otherExpenses": {
      "total": 35,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 35
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 658,
        "notes": [
          "76% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 260,
        "notes": [
          "30% margin",
          "+16pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 230,
        "notes": [
          "27% margin",
          "+16pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "tinder",
              "label": [
                "Tinder"
              ],
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "hinge",
              "label": [
                "Hinge"
              ],
              "notes": [
                "同比 +50%"
              ]
            },
            {
              "id": "asia",
              "label": [
                "亚洲"
              ],
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "evergreen_emerging",
              "label": [
                "常青与",
                "新兴品牌"
              ],
              "notes": [
                "同比 (4%)"
              ]
            },
            {
              "id": "indirect",
              "label": [
                "间接收入"
              ],
              "notes": [
                "同比 +3%"
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
                "id": "sm",
                "label": [
                  "销售与市场"
                ],
                "notes": [
                  "占收入 18%"
                ]
              },
              {
                "id": "ga",
                "label": [
                  "管理费用"
                ],
                "notes": [
                  "占收入 12%"
                ]
              },
              {
                "id": "product",
                "label": [
                  "产品开发"
                ],
                "notes": [
                  "占收入 11%"
                ]
              },
              {
                "id": "da",
                "label": [
                  "摊销与",
                  "折旧"
                ]
              }
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax_benefit",
              "label": [
                "税收收益"
              ]
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_non_operating",
              "label": [
                "其他"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": [
              "毛利润"
            ],
            "notes": [
              "利润率 76%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "label": [
              "营业利润"
            ],
            "notes": [
              "利润率 30%",
              "同比 +16 个百分点"
            ]
          },
          "net": {
            "label": [
              "净利润"
            ],
            "notes": [
              "利润率 27%",
              "同比 +16 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "match-group-q4-fy24",
    "company": "Match Group",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/match-group-q4-fy24.png",
    "roundingTolerance": 2.1,
    "revenue": {
      "total": 860,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "tinder",
          "label": "Tinder",
          "value": 476,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "hinge",
          "label": "Hinge",
          "value": 148,
          "notes": [
            "+27% Y/Y"
          ]
        },
        {
          "id": "asia",
          "label": "Asia",
          "value": 67,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "evergreen_emerging",
          "label": "Evergreen & Emerging",
          "value": 155,
          "notes": [
            "(8%) Y/Y"
          ]
        },
        {
          "id": "indirect",
          "label": "Indirect",
          "value": 15,
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
        "value": 236,
        "notes": []
      },
      "operatingExpenses": {
        "total": 400,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 146,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 109,
            "notes": [
              "13% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 114,
            "notes": [
              "13% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 21,
            "notes": [
              "2% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 11,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 39,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 26,
      "items": [
        {
          "id": "other_non_operating",
          "label": "Other",
          "value": 26,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 624,
        "notes": [
          "73% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 223,
        "notes": [
          "26% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 158,
        "notes": [
          "18% margin",
          "(8pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "asia",
              "label": "亚洲",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "indirect",
              "label": "间接收入",
              "notes": [
                "同比 (4%)"
              ]
            }
          ]
        }
      }
    }
  }
]);
})(window);
