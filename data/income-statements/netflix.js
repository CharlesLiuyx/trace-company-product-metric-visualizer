/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "netflix-q4-fy25",
    "company": "Netflix",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netflix-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 12.1,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 5.3,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 3.9,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.4,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1.4,
          "notes": [
            "+17% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6.5
      },
      "operatingExpenses": {
        "total": 2.6,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 1.1,
            "notes": [
              "9% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.9,
            "notes": [
              "7% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "notes": [
              "5% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0,
      "items": []
    },
    "operatingOtherExpenses": {
      "total": 0,
      "items": []
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
        "value": 5.5,
        "notes": [
          "46% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3,
        "notes": [
          "25% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.5,
        "notes": [
          "20% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +17%"
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 9%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 7%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 46%",
              "同比 +2 个百分点"
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
              "利润率 20%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netflix-q1-fy26",
    "company": "Netflix",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netflix-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 12.2,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 5.2,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 4,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.5,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1.5,
          "notes": [
            "+20% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.9
      },
      "operatingExpenses": {
        "total": 2.4,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 1,
            "notes": [
              "8% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.8,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.6,
            "notes": [
              "5% of revenue",
              "+1pp Y/Y"
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
    "otherIncome": {
      "total": 2.6,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 2.6,
          "notes": [
            "Including $2.8B Warner break-up fee"
          ]
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
          "52% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4,
        "notes": [
          "32% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.3,
        "notes": [
          "43% margin",
          "+16pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +20%"
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 8%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 7%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%",
                  "同比 +1 个百分点"
                ]
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
              "notes": [
                "包括 $2.8B Warner 解约费"
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
              "利润率 32%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 43%",
              "同比 +16 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netflix-q2-fy26",
    "company": "Netflix",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/netflix-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 12.6,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 5.4,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 4,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.6,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1.5,
          "notes": [
            "+16% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6
      },
      "operatingExpenses": {
        "total": 2.3,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 1,
            "notes": [
              "8% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.8,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5,
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
        "value": 0.7
      }
    },
    "operatingOtherIncome": {
      "total": 0,
      "items": []
    },
    "operatingOtherExpenses": {
      "total": 0,
      "items": []
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 6.5,
        "notes": [
          "52% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.2,
        "notes": [
          "33% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.4,
        "notes": [
          "27% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +16%"
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 8%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 7%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 52%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 33%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 27%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netflix-q1-fy25",
    "company": "Netflix",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/netflix-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10.5,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 4.6,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 3.4,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.3,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1.3,
          "notes": [
            "+23% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.3
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.8,
            "notes": [
              "8% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.7,
            "notes": [
              "7% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0,
      "items": []
    },
    "operatingOtherExpenses": {
      "total": 0,
      "items": []
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.3,
        "notes": [
          "50% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.3,
        "notes": [
          "32% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.9,
        "notes": [
          "27% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +23%"
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 8%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 7%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 50%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 32%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 27%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netflix-q1-fy24",
    "company": "Netflix",
    "period": "Q1 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/netflix-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.4,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 4.2,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 3,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.2,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1,
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
        "value": 5
      },
      "operatingExpenses": {
        "total": 1.8,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.7,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.7,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0,
      "items": []
    },
    "operatingOtherExpenses": {
      "total": 0,
      "items": []
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.018,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.018,
          "valueText": "($18M)"
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.4,
        "notes": [
          "47% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "28% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.3,
        "notes": [
          "25% margin",
          "+9pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +10%"
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 7%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 47%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 25%",
              "同比 +9 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "paid_members",
            "label": "付费会员"
          },
          {
            "id": "ucan_members",
            "label": "美国和加拿大付费会员"
          },
          {
            "id": "emea_members",
            "label": "欧洲、中东和非洲付费会员"
          },
          {
            "id": "latam_members",
            "label": "拉美付费会员"
          },
          {
            "id": "apac_members",
            "label": "亚太付费会员"
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "paid_members",
        "label": "Paid members",
        "value": "270000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "270M",
        "basis": "unspecified",
        "quote": "Paid members\n270M",
        "anchor": {
          "type": "image-box",
          "box": [
            29,
            204,
            188,
            188
          ]
        },
        "notes": []
      },
      {
        "id": "ucan_members",
        "label": "UCAN paid members",
        "value": "83000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "83M",
        "basis": "unspecified",
        "quote": "UCAN paid members\n83M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            534,
            112,
            91
          ]
        },
        "notes": []
      },
      {
        "id": "emea_members",
        "label": "EMEA paid members",
        "value": "92000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "92M",
        "basis": "unspecified",
        "quote": "EMEA paid members\n92M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            820,
            112,
            91
          ]
        },
        "notes": []
      },
      {
        "id": "latam_members",
        "label": "LATAM paid members",
        "value": "48000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "48M",
        "basis": "unspecified",
        "quote": "LATAM paid members\n48M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1022,
            112,
            91
          ]
        },
        "notes": []
      },
      {
        "id": "apac_members",
        "label": "APAC paid members",
        "value": "47000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "47M",
        "basis": "unspecified",
        "quote": "APAC paid members\n47M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1198,
            112,
            91
          ]
        },
        "notes": []
      }
    ]
  },
  {
    "key": "netflix-q2-fy25",
    "company": "Netflix",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/netflix-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 11.1,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 4.9,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 3.5,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.3,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1.3,
          "notes": [
            "+24% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.3
      },
      "operatingExpenses": {
        "total": 2,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.8,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.7,
            "notes": [
              "6% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
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
    "operatingOtherIncome": {
      "total": 0,
      "items": []
    },
    "operatingOtherExpenses": {
      "total": 0,
      "items": []
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.7,
        "notes": [
          "52% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.8,
        "notes": [
          "34% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.1,
        "notes": [
          "28% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +24%"
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 7%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 6%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 52%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 34%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 28%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netflix-q2-fy24",
    "company": "Netflix",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/netflix-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.6,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 4.3,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 3,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.2,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1.1,
          "notes": [
            "+14% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.2
      },
      "operatingExpenses": {
        "total": 1.8,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.7,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
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
    "operatingOtherIncome": {
      "total": 0,
      "items": []
    },
    "operatingOtherExpenses": {
      "total": 0,
      "items": []
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.4,
        "notes": [
          "46% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.6,
        "notes": [
          "27% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.1,
        "notes": [
          "22% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +14%"
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 46%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 27%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 +4 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "paid-members",
            "label": "付费会员"
          },
          {
            "id": "paid-members-ucan",
            "label": "UCAN 付费会员"
          },
          {
            "id": "paid-members-emea",
            "label": "EMEA 付费会员"
          },
          {
            "id": "paid-members-latam",
            "label": "LATAM 付费会员"
          },
          {
            "id": "paid-members-apac",
            "label": "APAC 付费会员"
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "paid-members",
        "label": "Paid members",
        "value": "278000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "278M",
        "basis": "unspecified",
        "notes": [],
        "quote": "Paid members\n278M",
        "anchor": {
          "type": "image-box",
          "box": [
            29,
            206,
            188,
            186
          ]
        }
      },
      {
        "id": "paid-members-ucan",
        "label": "UCAN paid members",
        "value": "84000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "84M",
        "basis": "unspecified",
        "notes": [],
        "quote": "UCAN paid members\n84M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            453,
            112,
            197
          ]
        }
      },
      {
        "id": "paid-members-emea",
        "label": "EMEA paid members",
        "value": "94000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "94M",
        "basis": "unspecified",
        "notes": [],
        "quote": "EMEA paid members\n94M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            785,
            112,
            122
          ]
        }
      },
      {
        "id": "paid-members-latam",
        "label": "LATAM paid members",
        "value": "49000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "49M",
        "basis": "unspecified",
        "notes": [],
        "quote": "LATAM paid members\n49M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1042,
            112,
            48
          ]
        }
      },
      {
        "id": "paid-members-apac",
        "label": "APAC paid members",
        "value": "50000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "50M",
        "basis": "unspecified",
        "notes": [],
        "quote": "APAC paid members\n50M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1233,
            112,
            43
          ]
        }
      }
    ]
  },
  {
    "key": "netflix-q4-fy23",
    "company": "Netflix",
    "period": "Q4 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/netflix-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.8,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 3.9,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 2.8,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.2,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1,
          "notes": [
            "+12% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.3
      },
      "operatingExpenses": {
        "total": 2,
        "items": [
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.9,
            "notes": [
              "10% of revenue"
            ]
          },
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.7,
            "notes": [
              "8% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.4,
            "notes": [
              "5% of revenue"
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
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.5,
        "notes": [
          "40% margin",
          "+9pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "17% margin",
          "+10pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "11% margin",
          "+10pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "paid-members",
        "label": "Paid members",
        "value": "260000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "260M",
        "quote": "Paid members\n260M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            29,
            206,
            188,
            186
          ]
        },
        "notes": []
      },
      {
        "id": "ucan-members",
        "label": "UCAN",
        "value": "80000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "80M",
        "quote": "UCAN\n80M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            573,
            112,
            47
          ]
        },
        "notes": []
      },
      {
        "id": "emea-members",
        "label": "EMEA",
        "value": "89000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "89M",
        "quote": "EMEA\n89M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            837,
            112,
            47
          ]
        },
        "notes": []
      },
      {
        "id": "latam-members",
        "label": "LATAM",
        "value": "46000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "46M",
        "quote": "LATAM\n46M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1049,
            112,
            47
          ]
        },
        "notes": []
      },
      {
        "id": "apac-members",
        "label": "APAC",
        "value": "45000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "45M",
        "quote": "APAC\n45M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1232,
            112,
            47
          ]
        },
        "notes": []
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "UCAN",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "emea",
              "label": "EMEA",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "latam",
              "label": "LATAM",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "apac",
              "label": "APAC",
              "notes": [
                "同比 +12%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本"
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 10%"
                ]
              },
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 8%"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 40%",
              "同比 +9 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +10 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 +10 个百分点"
            ]
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
        "operatingMetrics": [
          {
            "id": "paid-members",
            "label": "付费会员",
            "notes": []
          },
          {
            "id": "ucan-members",
            "label": "UCAN",
            "notes": []
          },
          {
            "id": "emea-members",
            "label": "EMEA",
            "notes": []
          },
          {
            "id": "latam-members",
            "label": "LATAM",
            "notes": []
          },
          {
            "id": "apac-members",
            "label": "APAC",
            "notes": []
          }
        ]
      }
    }
  },
  {
    "key": "netflix-q3-fy24",
    "company": "Netflix",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/netflix-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.8,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 4.3,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 3.1,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.2,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1.1,
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
        "value": 5.1
      },
      "operatingExpenses": {
        "total": 1.8,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.7,
            "notes": [
              "7% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0,
      "items": []
    },
    "operatingOtherExpenses": {
      "total": 0,
      "items": []
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
        "value": 4.7,
        "notes": [
          "48% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.9,
        "notes": [
          "30% margin",
          "+7pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.4,
        "notes": [
          "24% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +16%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 7%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 7%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
                  "同比 (1 个百分点)"
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
              "利润率 48%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 30%",
              "同比 +7 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 24%",
              "同比 +4 个百分点"
            ]
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
        "operatingMetrics": [
          {
            "id": "paid_members",
            "label": "付费会员"
          },
          {
            "id": "ucan_members",
            "label": "美国和加拿大付费会员"
          },
          {
            "id": "emea_members",
            "label": "欧洲、中东和非洲付费会员"
          },
          {
            "id": "latam_members",
            "label": "拉美付费会员"
          },
          {
            "id": "apac_members",
            "label": "亚太付费会员"
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "paid_members",
        "label": "Paid members",
        "value": "283000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "283M",
        "basis": "unspecified",
        "notes": [],
        "quote": "Paid members\n283M",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            229,
            189,
            130
          ]
        }
      },
      {
        "id": "ucan_members",
        "label": "UCAN paid members",
        "value": "85000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "85M",
        "basis": "unspecified",
        "notes": [],
        "quote": "UCAN paid members\n85M",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            564,
            189,
            52
          ]
        }
      },
      {
        "id": "emea_members",
        "label": "EMEA paid members",
        "value": "96000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "96M",
        "basis": "unspecified",
        "notes": [],
        "quote": "EMEA paid members\n96M",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            839,
            189,
            52
          ]
        }
      },
      {
        "id": "latam_members",
        "label": "LATAM paid members",
        "value": "49000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "49M",
        "basis": "unspecified",
        "notes": [],
        "quote": "LATAM paid members\n49M",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1046,
            189,
            52
          ]
        }
      },
      {
        "id": "apac_members",
        "label": "APAC paid members",
        "value": "53000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "53M",
        "basis": "unspecified",
        "notes": [],
        "quote": "APAC paid members\n53M",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            1227,
            189,
            52
          ]
        }
      }
    ]
  },
  {
    "key": "netflix-q3-fy23",
    "company": "Netflix",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 6,
    "sourceImage": "input/processing/netflix-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.5,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 3.7,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 2.7,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.1,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.9,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.023
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": [
          "Cost of",
          "revenue"
        ],
        "value": 4.9,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.7,
        "items": [
          {
            "id": "technology_development",
            "label": [
              "Technology &",
              "development"
            ],
            "value": 0.7,
            "notes": [
              "8% of revenue"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": [
              "General &",
              "Admin"
            ],
            "value": 0.5,
            "notes": [
              "6% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2,
        "notes": []
      }
    },
    "otherExpenses": {
      "total": 0.007345,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.007345,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.6,
        "notes": [
          "42% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.9,
        "notes": [
          "22% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.7,
        "notes": [
          "20% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "paid_members",
        "label": "Paid members",
        "literal": "247M",
        "value": "247000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "Paid members 247M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            26,
            204,
            190,
            188
          ]
        },
        "notes": []
      },
      {
        "id": "ucan_members",
        "label": "UCAN paid members",
        "literal": "77M",
        "value": "77000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "UCAN paid members 77M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            508,
            113,
            46
          ]
        },
        "notes": []
      },
      {
        "id": "emea_members",
        "label": "EMEA paid members",
        "literal": "84M",
        "value": "84000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "EMEA paid members 84M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            771,
            113,
            46
          ]
        },
        "notes": []
      },
      {
        "id": "latam_members",
        "label": "LATAM paid members",
        "literal": "44M",
        "value": "44000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "LATAM paid members 44M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            970,
            113,
            46
          ]
        },
        "notes": []
      },
      {
        "id": "apac_members",
        "label": "APAC paid members",
        "literal": "42M",
        "value": "42000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "APAC paid members 42M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1148,
            113,
            46
          ]
        },
        "notes": []
      }
    ],
    "notes": [
      "Other expense precision recovered as $7.345M from Netflix Q3 2023 shareholder letter p13: $175.563M interest expense less $168.218M interest and other income. Source image rounds this to ($0.0B)."
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +8%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美加",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲中东非洲",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": [
              "收入",
              "成本"
            ],
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": [
                  "技术与",
                  "开发"
                ],
                "notes": [
                  "占收入 8%"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "ga",
                "label": [
                  "一般及",
                  "行政"
                ],
                "notes": [
                  "占收入 6%"
                ]
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
              "id": "other",
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
              "利润率 42%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "paid_members",
            "label": "付费会员",
            "notes": []
          },
          {
            "id": "ucan_members",
            "label": "美加付费会员",
            "notes": []
          },
          {
            "id": "emea_members",
            "label": "欧洲中东非洲付费会员",
            "notes": []
          },
          {
            "id": "latam_members",
            "label": "拉美付费会员",
            "notes": []
          },
          {
            "id": "apac_members",
            "label": "亚太付费会员",
            "notes": []
          }
        ],
        "period": "2023 财年第三季度",
        "periodNote": ""
      }
    }
  },
  {
    "key": "netflix-q4-fy24",
    "company": "Netflix",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/netflix-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 10.2,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 4.5,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 3.3,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.2,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1.2,
          "notes": [
            "+26% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.8
      },
      "operatingExpenses": {
        "total": 2.2,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.8,
            "notes": [
              "8% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ],
            "valueText": "($1.0B)"
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.3
      }
    },
    "operatingOtherIncome": {
      "total": 0,
      "items": []
    },
    "operatingOtherExpenses": {
      "total": 0,
      "items": []
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 4.5,
        "notes": [
          "44% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.3,
        "notes": [
          "22% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.9,
        "notes": [
          "18% margin",
          "+8pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +26%"
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 8%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 44%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比 +8 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "paid_members",
            "label": "付费会员"
          },
          {
            "id": "ucan_members",
            "label": "美国和加拿大付费会员"
          },
          {
            "id": "emea_members",
            "label": "欧洲、中东和非洲付费会员"
          },
          {
            "id": "latam_members",
            "label": "拉美付费会员"
          },
          {
            "id": "apac_members",
            "label": "亚太付费会员"
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "paid_members",
        "label": "Paid members",
        "value": "302000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "302M",
        "quote": "Paid members 302M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            27,
            180,
            190,
            188
          ]
        },
        "notes": []
      },
      {
        "id": "ucan_members",
        "label": "UCAN paid members",
        "value": "90000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "90M",
        "quote": "UCAN paid members 90M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            63,
            520,
            115,
            70
          ]
        },
        "notes": []
      },
      {
        "id": "emea_members",
        "label": "EMEA paid members",
        "value": "101000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "101M",
        "quote": "EMEA paid members 101M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            63,
            794,
            115,
            76
          ]
        },
        "notes": []
      },
      {
        "id": "latam_members",
        "label": "LATAM paid members",
        "value": "53000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "53M",
        "quote": "LATAM paid members 53M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            63,
            1013,
            115,
            68
          ]
        },
        "notes": []
      },
      {
        "id": "apac_members",
        "label": "APAC paid members",
        "value": "58000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "58M",
        "quote": "APAC paid members 58M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            63,
            1199,
            115,
            68
          ]
        },
        "notes": []
      }
    ]
  },
  {
    "key": "netflix-q4-fy22",
    "company": "Netflix",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/netflix-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.9,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 3.6,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 2.4,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.9,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.033
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 5.4
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.7,
            "notes": [
              "9% of revenue"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.8,
            "notes": [
              "11% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.4,
            "notes": [
              "5% of revenue"
            ]
          }
        ]
      }
    },
    "otherIncome": {
      "total": 0.016,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 0.016
        }
      ]
    },
    "otherExpenses": {
      "total": 0.5,
      "items": [
        {
          "id": "interest_other",
          "label": "Interest & other",
          "value": 0.5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.4,
        "notes": [
          "31% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "7% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.055,
        "notes": [
          "1% margin",
          "(7pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "paid_members",
        "label": "Paid members",
        "literal": "231M",
        "value": "231000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "Paid members\n231M",
        "anchor": {
          "type": "image-box",
          "box": [
            29,
            223,
            188,
            185
          ]
        },
        "basis": "unspecified",
        "notes": []
      },
      {
        "id": "members_ucan",
        "label": "UCAN paid members",
        "literal": "74M",
        "value": "74000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "UCAN paid members\n74M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            469,
            112,
            122
          ]
        },
        "basis": "unspecified",
        "notes": []
      },
      {
        "id": "members_emea",
        "label": "EMEA paid members",
        "literal": "77M",
        "value": "77000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "EMEA paid members\n77M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            737,
            112,
            91
          ]
        },
        "basis": "unspecified",
        "notes": []
      },
      {
        "id": "members_latam",
        "label": "LATAM paid members",
        "literal": "42M",
        "value": "42000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "LATAM paid members\n42M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            951,
            112,
            91
          ]
        },
        "basis": "unspecified",
        "notes": []
      },
      {
        "id": "members_apac",
        "label": "APAC paid members",
        "literal": "38M",
        "value": "38000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "APAC paid members\n38M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1151,
            112,
            91
          ]
        },
        "basis": "unspecified",
        "notes": []
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他"
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 9%"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 11%"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%"
                ]
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
              "id": "interest_other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 31%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 7%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 (7 个百分点)"
            ]
          }
        },
        "period": "2022 财年第四季度",
        "periodNote": "",
        "operatingMetrics": [
          {
            "id": "paid_members",
            "label": "付费会员"
          },
          {
            "id": "members_ucan",
            "label": "美国和加拿大付费会员"
          },
          {
            "id": "members_emea",
            "label": "欧洲、中东和非洲付费会员"
          },
          {
            "id": "members_latam",
            "label": "拉美付费会员"
          },
          {
            "id": "members_apac",
            "label": "亚太付费会员"
          }
        ]
      }
    }
  },
  {
    "key": "netflix-q1-fy23",
    "company": "Netflix",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/netflix-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.2,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 3.6,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 2.5,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.1,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.9,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.031
        }
      ]
    },
    "costs": {
      "operatingExpenses": {
        "total": 1.6,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.7,
            "notes": [
              "8% of revenue"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6,
            "notes": [
              "7% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.4,
            "notes": [
              "5% of revenue"
            ]
          }
        ]
      },
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 4.8
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.2
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.4,
        "notes": [
          "41% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "21% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "16% margin",
          "(4pp) Y/Y"
        ]
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
          "id": "interest_other",
          "label": "Interest & other",
          "value": 0.2
        }
      ]
    },
    "operatingMetrics": [
      {
        "id": "paid_members",
        "label": "Paid members",
        "literal": "232.5M",
        "value": "232500000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "Paid members\n232.5M",
        "anchor": {
          "type": "image-box",
          "box": [
            29,
            221,
            188,
            186
          ]
        },
        "notes": []
      },
      {
        "id": "ucan_members",
        "label": "UCAN paid members",
        "literal": "74M",
        "value": "74000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "UCAN paid members\n74M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            469,
            112,
            150
          ]
        },
        "notes": []
      },
      {
        "id": "emea_members",
        "label": "EMEA paid members",
        "literal": "77M",
        "value": "77000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "EMEA paid members\n77M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            750,
            112,
            105
          ]
        },
        "notes": []
      },
      {
        "id": "latam_members",
        "label": "LATAM paid members",
        "literal": "41M",
        "value": "41000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "LATAM paid members\n41M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            992,
            112,
            46
          ]
        },
        "notes": []
      },
      {
        "id": "apac_members",
        "label": "APAC paid members",
        "literal": "39M",
        "value": "39000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "quote": "APAC paid members\n39M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1168,
            112,
            39
          ]
        },
        "notes": []
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美加",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本"
          },
          "tax": {
            "label": "税费"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 8%"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 7%"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%"
                ]
              }
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 41%",
              "同比 (4 个百分点)"
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
              "利润率 16%",
              "同比 (4 个百分点)"
            ]
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
        "operatingMetrics": [
          {
            "id": "paid_members",
            "label": "付费会员"
          },
          {
            "id": "ucan_members",
            "label": "美加付费会员"
          },
          {
            "id": "emea_members",
            "label": "欧洲、中东和非洲付费会员"
          },
          {
            "id": "latam_members",
            "label": "拉美付费会员"
          },
          {
            "id": "apac_members",
            "label": "亚太付费会员"
          }
        ]
      }
    }
  },
  {
    "key": "netflix-q3-fy22",
    "company": "Netflix",
    "period": "Q3 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/netflix-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.9,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 3.6,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 2.4,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1,
          "notes": [
            "+12% Y/Y"
          ],
          "valueText": "$1.0B"
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.9,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.034,
          "valueText": "$34M"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 4.8
      },
      "operatingExpenses": {
        "total": 1.6,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.7
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.4
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
        "value": 3.1,
        "notes": [
          "40% margin"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "19% margin"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "notes": [
          "18% margin"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "paid_members",
        "label": "Paid members",
        "value": "223000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "223M",
        "quote": "Paid members 223M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            29,
            221,
            188,
            186
          ]
        },
        "notes": []
      },
      {
        "id": "members_ucan",
        "label": "UCAN paid members",
        "value": "73000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "73M",
        "quote": "UCAN paid members 73M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            469,
            112,
            137
          ]
        },
        "notes": []
      },
      {
        "id": "members_emea",
        "label": "EMEA paid members",
        "value": "74000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "74M",
        "quote": "EMEA paid members 74M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            740,
            112,
            99
          ]
        },
        "notes": []
      },
      {
        "id": "members_latam",
        "label": "LATAM paid members",
        "value": "40000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "40M",
        "quote": "LATAM paid members 40M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            960,
            112,
            86
          ]
        },
        "notes": []
      },
      {
        "id": "members_apac",
        "label": "APAC paid members",
        "value": "36000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "36M",
        "quote": "APAC paid members 36M",
        "basis": "unspecified",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1158,
            112,
            117
          ]
        },
        "notes": []
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他"
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
                "id": "technology_development",
                "label": "技术与开发"
              },
              {
                "id": "marketing",
                "label": "市场营销"
              },
              {
                "id": "ga",
                "label": "管理费用"
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
              "利润率 40%"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 19%"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 18%"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "paid_members",
            "label": "付费会员"
          },
          {
            "id": "members_ucan",
            "label": "美国和加拿大付费会员"
          },
          {
            "id": "members_emea",
            "label": "欧洲、中东和非洲付费会员"
          },
          {
            "id": "members_latam",
            "label": "拉美付费会员"
          },
          {
            "id": "members_apac",
            "label": "亚太付费会员"
          }
        ]
      }
    }
  },
  {
    "key": "netflix-q3-fy25",
    "company": "Netflix",
    "period": "Q3 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/netflix-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 11.5,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 5.1,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 3.7,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.4,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1.4,
          "notes": [
            "+21% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 6.2
      },
      "operatingExpenses": {
        "total": 2.1,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.9,
            "notes": [
              "7% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.8,
            "notes": [
              "7% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
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
    "operatingOtherIncome": {
      "total": 0,
      "items": []
    },
    "operatingOtherExpenses": {
      "total": 0,
      "items": []
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.4,
        "notes": [
          "46% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.2,
        "notes": [
          "28% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.5,
        "notes": [
          "22% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "美国和加拿大",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +21%"
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 7%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 7%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 4%",
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
              "id": "other",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 46%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 28%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "netflix-q2-fy23",
    "company": "Netflix",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/netflix-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 8.2,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "ucan",
          "label": "UCAN",
          "value": 3.6,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 2.6,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.1,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.9,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.03,
          "notes": [],
          "valueText": "$30M",
          "decimals": 2
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 4.7
      },
      "operatingExpenses": {
        "total": 1.7,
        "items": [
          {
            "id": "technology_development",
            "label": "Technology & development",
            "value": 0.7,
            "notes": [
              "8% of revenue"
            ]
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 0.6,
            "notes": [
              "8% of revenue"
            ]
          },
          {
            "id": "ga",
            "label": "General & Admin",
            "value": 0.4,
            "notes": [
              "5% of revenue"
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
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.5,
        "notes": [
          "43% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.8,
        "notes": [
          "22% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.5,
        "notes": [
          "18% margin",
          "Flat Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "paid_members",
        "label": "Paid members",
        "value": "238000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "238M",
        "basis": "unspecified",
        "notes": [],
        "quote": "Paid members 238M",
        "anchor": {
          "type": "image-box",
          "box": [
            29,
            223,
            188,
            185
          ]
        }
      },
      {
        "id": "paid_ucan",
        "label": "UCAN paid members",
        "value": "76000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "76M",
        "basis": "unspecified",
        "notes": [],
        "quote": "UCAN paid members 76M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            470,
            112,
            174
          ]
        }
      },
      {
        "id": "paid_emea",
        "label": "EMEA paid members",
        "value": "80000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "80M",
        "basis": "unspecified",
        "notes": [],
        "quote": "EMEA paid members 80M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            767,
            112,
            113
          ]
        }
      },
      {
        "id": "paid_latam",
        "label": "LATAM paid members",
        "value": "42000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "42M",
        "basis": "unspecified",
        "notes": [],
        "quote": "LATAM paid members 42M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            980,
            112,
            83
          ]
        }
      },
      {
        "id": "paid_apac",
        "label": "APAC paid members",
        "value": "41000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "41M",
        "basis": "unspecified",
        "notes": [],
        "quote": "APAC paid members 41M",
        "anchor": {
          "type": "image-box",
          "box": [
            64,
            1150,
            112,
            82
          ]
        }
      }
    ],
    "operatingOtherIncome": {
      "total": 0,
      "items": []
    },
    "operatingOtherExpenses": {
      "total": 0,
      "items": []
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Interest & other",
          "value": 0.1
        }
      ]
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "ucan",
              "label": "UCAN",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "emea",
              "label": "EMEA",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "latam",
              "label": "LATAM",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "apac",
              "label": "APAC",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "other_revenue",
              "label": "其他",
              "notes": []
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
                "id": "technology_development",
                "label": "技术与开发",
                "notes": [
                  "占收入 8%"
                ]
              },
              {
                "id": "marketing",
                "label": "市场营销",
                "notes": [
                  "占收入 8%"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 5%"
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
              "id": "other",
              "label": "利息及其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 43%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 18%",
              "同比持平"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "paid_members",
            "label": "付费会员"
          },
          {
            "id": "paid_ucan",
            "label": "UCAN 付费会员"
          },
          {
            "id": "paid_emea",
            "label": "EMEA 付费会员"
          },
          {
            "id": "paid_latam",
            "label": "LATAM 付费会员"
          },
          {
            "id": "paid_apac",
            "label": "APAC 付费会员"
          }
        ]
      }
    }
  }
]);
})(window);
