/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "airbnb-fy25",
    "company": "Airbnb",
    "period": "FY25",
    "periodNote": "Year ended Dec. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/airbnb-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 12.2,
      "notes": [
        "+10% Y/Y",
        "Regional revenue items sum to $12.3B because the source chart rounds each region."
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 5.2,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 4.7,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 1.2,
          "notes": [
            "+20% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 1.2,
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
        "value": 2.1
      },
      "operatingExpenses": {
        "total": 7.6,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 2.6,
            "notes": [
              "21% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 2.4,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 1.3,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.3,
            "notes": [
              "11% of revenue",
              "+0pp Y/Y"
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
      "total": 0.6,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.6
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
        "value": 10.2,
        "notes": [
          "83% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.5,
        "notes": [
          "21% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.5,
        "notes": [
          "21% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2025 年 12 月 31 日的年度",
        "revenue": {
          "notes": [
            "同比 +10%",
            "由于来源图对各地区四舍五入，地区收入明细合计为 $12.3B。"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +4%"
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
                "同比 +20%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 21%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 11%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 +0 个百分点"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 83%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "airbnb-q1-fy26",
    "company": "Airbnb",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/airbnb-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.7,
      "notes": [
        "+18% Y/Y",
        "Regional revenue items sum to $2.6B because the source chart rounds each region."
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1.1,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 0.7,
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.5,
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.3,
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
        "value": 0.6
      },
      "operatingExpenses": {
        "total": 2,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.8,
            "notes": [
              "28% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 0.6,
            "notes": [
              "24% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.3,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "11% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No separate tax line is shown in the source chart."
        ]
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
        "value": 2.1,
        "notes": [
          "78% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "notes": [
          "3% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "notes": [
          "6% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +18%",
            "由于来源图对各地区四舍五入，地区收入明细合计为 $2.6B。"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +25%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +32%"
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
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 28%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 24%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未单独显示税费项目。"
            ]
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
            "label": "毛利润",
            "notes": [
              "利润率 78%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +2 个百分点"
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
    "key": "airbnb-q3-fy25",
    "company": "Airbnb",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/airbnb-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.1,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1.6,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 2,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.2,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.3,
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
        "value": 0.5,
        "notes": [
          "Revenue less gross profit differs by $0.1B because the source chart rounds displayed values."
        ]
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.6,
            "notes": [
              "16% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 0.6,
            "notes": [
              "14% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.4,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 3.5,
        "notes": [
          "87% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.6,
        "notes": [
          "40% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "notes": [
          "34% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +3%"
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
                "同比 +18%"
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
            "label": "收入成本",
            "notes": [
              "由于来源图显示值经过四舍五入，收入减毛利润相差 $0.1B。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 16%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 14%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 9%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 8%",
                  "同比 (1 个百分点)"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 87%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 40%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 34%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "airbnb-q2-fy26",
    "company": "Airbnb",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/airbnb-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.6,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1.6,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 1.4,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.3,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.3,
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
        "value": 0.6,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2.2,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.9,
            "notes": [
              "24% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 0.7,
            "notes": [
              "19% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.4,
            "notes": [
              "10% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
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
        "value": 3,
        "notes": [
          "82% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.8,
        "notes": [
          "21% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "23% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "148000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "148M",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "Nights booked\n148M\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            102,
            1173,
            306,
            151
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "27.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$27.2B",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "GBV\n$27.2B\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            417,
            1173,
            159,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
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
                "同比 +26%"
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
                  "占收入 24%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 19%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 10%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (1 个百分点)"
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
              "利润率 82%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 23%",
              "同比 +2 个百分点"
            ]
          }
        },
        "period": "2026 财年第二季度",
        "periodNote": "",
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +10%"
            ]
          },
          {
            "id": "gbv",
            "label": "总预订价值",
            "notes": [
              "同比 +16%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "airbnb-q1-fy25",
    "company": "Airbnb",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/airbnb-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.3,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1.1,
          "valueText": "$1.1B",
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 0.6,
          "valueText": "$0.6B",
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.3,
          "valueText": "$0.3B",
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.3,
          "valueText": "$0.3B",
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
        "value": 0.5,
        "valueText": "($0.5B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.7,
        "items": [
          {
            "id": "product",
            "label": "Product",
            "value": 0.6,
            "valueText": "($0.6B)",
            "notes": [
              "25% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.6,
            "valueText": "($0.6B)",
            "notes": [
              "25% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "13% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "13% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.019,
        "valueText": "($19M)",
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
          "valueText": "$0.1B",
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
        "value": 1.8,
        "valueText": "$1.8B",
        "notes": [
          "78% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.038,
        "valueText": "$38M",
        "notes": [
          "2% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.2,
        "valueText": "$0.2B",
        "notes": [
          "7% margin",
          "(6pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "143000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "143M",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Nights booked\n143M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            102,
            1175,
            306,
            148
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "24.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$24.5B",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "GBV\n$24.5B\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            417,
            1175,
            146,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +5%"
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
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 25%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 25%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 13%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 +0 个百分点"
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
              "利润率 78%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (6 个百分点)"
            ]
          }
        },
        "period": "2025 财年第一季度",
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "gbv",
            "label": "总预订价值",
            "notes": [
              "同比 +7%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "airbnb-q4-fy24",
    "company": "Airbnb",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/airbnb-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.5,
      "notes": [
        "+12% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1.1,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 0.8,
          "notes": [
            "+16% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.3,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.3,
          "notes": [
            "+22% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.6,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "22% of revenue",
              "+3pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 0.5,
            "notes": [
              "22% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.3,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "10% of revenue",
              "(44pp) Y/Y"
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
        "value": 2.1,
        "notes": [
          "83% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "17% margin",
          "+40pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "19% margin",
          "+34pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "111000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "111M",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "Nights booked\n111M\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            102,
            1173,
            305,
            150
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "17.6",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$17.6B",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "GBV\n$17.6B\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            416,
            1173,
            145,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +12%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "emea",
              "label": "EMEA",
              "notes": [
                "同比 +16%"
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
                "同比 +22%"
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
                  "占收入 22%",
                  "同比 +3 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 22%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 12%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (44 个百分点)"
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
              "利润率 83%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 +40 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 +34 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +12%"
            ]
          },
          {
            "id": "gbv",
            "label": "总预订价值",
            "notes": [
              "同比 +13%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "airbnb-fy23",
    "company": "Airbnb",
    "period": "FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/airbnb-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 9.9,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 4.6,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 3.6,
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.8,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.8,
          "notes": [
            "+35% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "operatingExpenses": {
        "total": 6.7,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.8,
            "notes": [
              "18% of revenue",
              "(0pp) Y/Y"
            ],
            "valueText": "($1.8B)"
          },
          {
            "id": "product",
            "label": "Product",
            "value": 1.7,
            "notes": [
              "17% of revenue",
              "(1pp) Y/Y"
            ],
            "valueText": "($1.7B)"
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 2,
            "notes": [
              "20% of revenue",
              "+9pp Y/Y"
            ],
            "valueText": "($2.0B)"
          },
          {
            "id": "support",
            "label": "Support",
            "value": 1.2,
            "notes": [
              "12% of revenue",
              "(0pp) Y/Y"
            ],
            "valueText": "($1.2B)"
          }
        ]
      },
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.7,
        "notes": [],
        "valueText": "($1.7B)"
      }
    },
    "otherIncome": {
      "total": 3.3,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 2.7,
          "notes": []
        },
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.6,
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
          "83% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "15% margin",
          "(8pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.8,
        "notes": [
          "48% margin",
          "+26pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "448000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "448M",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Nights booked\n448M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1202,
            306,
            151
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "73.3",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$73.3B",
        "basis": "unspecified",
        "notes": [
          "+16% Y/Y"
        ],
        "quote": "GBV\n$73.3B\n+16% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            340,
            1202,
            145,
            151
          ]
        }
      },
      {
        "id": "long_term_stays",
        "label": "Long-term stays (28+ days)",
        "value": "18",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "18%",
        "basis": "unspecified",
        "notes": [
          "of nights booked"
        ],
        "quote": "Long-term stays (28+ days)\n18% of nights booked",
        "anchor": {
          "type": "image-box",
          "box": [
            494,
            1202,
            418,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +24%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +35%"
              ]
            }
          ]
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 18%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 17%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 20%",
                  "同比 +9 个百分点"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 12%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": []
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax_benefit",
              "label": "税收收益",
              "notes": []
            },
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
              "利润率 83%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 (8 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 48%",
              "同比 +26 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "gbv",
            "label": "总预订价值",
            "notes": [
              "同比 +16%"
            ]
          },
          {
            "id": "long_term_stays",
            "label": "长期住宿（28 天以上）",
            "notes": [
              "占预订间夜数"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "airbnb-q1-fy23",
    "company": "Airbnb",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/airbnb-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.8,
      "notes": [
        "+20% Y/Y"
      ],
      "items": [
        {
          "id": "us",
          "label": "United States",
          "value": 0.9,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 0.9,
          "notes": [
            "+28% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.4
      },
      "operatingExpenses": {
        "total": 1.4,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "25% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product dev.",
            "value": 0.4,
            "notes": [
              "23% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.3,
            "notes": [
              "16% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "Not shown in source."
        ]
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
        "value": 1.4,
        "notes": [
          "76% margin",
          "+0.5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.005,
        "valueText": "($5M)",
        "notes": [
          "(0%) margin",
          "+0.1pp Y/Y"
        ]
      },
      "net": {
        "label": "Net profit",
        "value": null,
        "availability": "not-reported",
        "notes": [
          "Source ends at operating loss and does not report net profit."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "121000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "121M",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "Nights booked\n121M\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1202,
            306,
            150
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "20.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$20.4B",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y"
        ],
        "quote": "GBV\n$20.4B\n+19% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            340,
            1202,
            145,
            150
          ]
        }
      },
      {
        "id": "long_stays",
        "label": "Long-term stays (28+ days)",
        "value": "18",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "18%",
        "basis": "unspecified",
        "notes": [],
        "quote": "Long-term stays (28+ days)\n18% of nights booked\n",
        "anchor": {
          "type": "image-box",
          "box": [
            494,
            1202,
            418,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +20%"
          ],
          "items": [
            {
              "id": "us",
              "label": "美国",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +28%"
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
                "label": "销售与市场",
                "notes": [
                  "占收入 25%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 23%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 16%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "原图未显示此项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 76%",
              "同比 +0.5 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 +0.1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "原图止于营业亏损，未报告净利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "gbv",
            "label": "总预订价值",
            "notes": [
              "同比 +19%"
            ]
          },
          {
            "id": "long_stays",
            "label": "长期住宿（28天以上）",
            "notes": []
          }
        ],
        "period": "2023财年第一季度"
      }
    }
  },
  {
    "key": "airbnb-q1-fy24",
    "company": "Airbnb",
    "period": "Q1 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/airbnb-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.1,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1,
          "valueText": "$1.0B",
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 0.5,
          "valueText": "$0.5B",
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.3,
          "valueText": "$0.3B",
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.3,
          "valueText": "$0.3B",
          "notes": [
            "+27% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.5,
        "valueText": "($0.5B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.6,
        "items": [
          {
            "id": "product",
            "label": "Product",
            "value": 0.5,
            "valueText": "($0.5B)",
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5,
            "valueText": "($0.5B)",
            "notes": [
              "24% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "13% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "13% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.029,
        "valueText": "($29M)",
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
          "valueText": "$0.2B",
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
        "value": 1.7,
        "valueText": "$1.7B",
        "notes": [
          "78% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "valueText": "$0.1B",
        "notes": [
          "5% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "valueText": "$0.3B",
        "notes": [
          "12% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "133000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "133M",
        "basis": "unspecified",
        "notes": [
          "+9.5% Y/Y"
        ],
        "quote": "Nights booked\n133M\n+9.5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1202,
            306,
            150
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "22.9",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$22.9B",
        "basis": "unspecified",
        "notes": [
          "+12% Y/Y"
        ],
        "quote": "GBV\n$22.9B\n+12% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            340,
            1202,
            146,
            150
          ]
        }
      },
      {
        "id": "long_term_stays",
        "label": "Long-term stays (28+ days)",
        "value": "17",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "17%",
        "basis": "unspecified",
        "notes": [
          "of nights booked"
        ],
        "quote": "Long-term stays (28+ days)\n17% of nights booked",
        "anchor": {
          "type": "image-box",
          "box": [
            494,
            1202,
            418,
            152
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美"
            },
            {
              "id": "emea",
              "label": "EMEA"
            },
            {
              "id": "latam",
              "label": "拉美"
            },
            {
              "id": "apac",
              "label": "亚太"
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数"
          },
          {
            "id": "gbv",
            "label": "总预订价值"
          },
          {
            "id": "long_term_stays",
            "label": "长期住宿（28天以上）",
            "notes": [
              "占预订间夜数"
            ]
          }
        ],
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "support",
                "label": "客服支持"
              }
            ]
          }
        }
      }
    }
  },
  {
    "key": "airbnb-q2-fy23",
    "company": "Airbnb",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/airbnb-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.5,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1.2,
          "valueText": "$1.2B",
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 0.9,
          "valueText": "$0.9B",
          "notes": [
            "+29% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.2,
          "valueText": "$0.2B",
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.2,
          "valueText": "$0.2B",
          "notes": [
            "+37% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "operatingExpenses": {
        "total": 1.5,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5,
            "valueText": "($0.5B)",
            "notes": [
              "20% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 0.5,
            "valueText": "($0.5B)",
            "notes": [
              "18% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "13% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "11% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.4,
        "valueText": "($0.4B)",
        "notes": []
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.026,
        "valueText": "($26M)",
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
          "valueText": "$0.2B",
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
        "value": 2.1,
        "valueText": "$2.1B",
        "notes": [
          "83% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "valueText": "$0.5B",
        "notes": [
          "21% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.7,
        "valueText": "$0.7B",
        "notes": [
          "26% margin",
          "+8pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "115100000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "115.1M",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "Nights booked\n115.1M\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1202,
            305,
            150
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "19.1",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$19.1B",
        "basis": "unspecified",
        "notes": [
          "+13% Y/Y"
        ],
        "quote": "GBV\n$19.1B\n+13% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            340,
            1202,
            145,
            150
          ]
        }
      },
      {
        "id": "long_term_stays",
        "label": "Long-term stays (28+ days)",
        "value": "18",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "18%",
        "basis": "unspecified",
        "notes": [
          "of nights booked"
        ],
        "quote": "Long-term stays (28+ days)\n18% of nights booked",
        "anchor": {
          "type": "image-box",
          "box": [
            494,
            1202,
            417,
            152
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +29%"
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
                "同比 +37%"
              ]
            }
          ]
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "sm",
                "label": "销售与市场",
                "notes": [
                  "占收入 20%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 18%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 13%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本",
            "notes": []
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
              "利润率 83%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 21%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 26%",
              "同比 +8 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +11%"
            ]
          },
          {
            "id": "gbv",
            "label": "GBV",
            "notes": [
              "同比 +13%"
            ]
          },
          {
            "id": "long_term_stays",
            "label": "长期住宿（28+ 天）",
            "notes": [
              "占预订间夜数"
            ]
          }
        ],
        "period": "2023 财年第二季度",
        "periodNote": ""
      }
    }
  },
  {
    "key": "airbnb-q2-fy24",
    "company": "Airbnb",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/airbnb-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 2.7,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1.3,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 1,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.2,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.2,
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
        "value": 0.5,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.7,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.6,
            "notes": [
              "21% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 0.5,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.3,
            "notes": [
              "12% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "11% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
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
        "value": 2.2,
        "notes": [
          "82% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "18% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.6,
        "notes": [
          "20% margin",
          "(6pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "125000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "125M",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y"
        ],
        "quote": "Nights booked\n125M\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            175,
            1199,
            305,
            148
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "21.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$21.2B",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y"
        ],
        "quote": "GBV\n$21.2B\n+11% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            488,
            1199,
            146,
            151
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "emea",
              "label": "EMEA",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +13%"
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
                  "占收入 21%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 12%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 11%",
                  "同比 +0 个百分点"
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
              "利润率 82%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 (6 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +9%"
            ]
          },
          {
            "id": "gbv",
            "label": "总预订价值",
            "notes": [
              "同比 +11%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "airbnb-q2-fy25",
    "company": "Airbnb",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/airbnb-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.1,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1.4,
          "valueText": "$1.4B",
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 1.2,
          "valueText": "$1.2B",
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.2,
          "valueText": "$0.2B",
          "notes": [
            "+25% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.3,
          "valueText": "$0.3B",
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
        "value": 0.5,
        "valueText": "($0.5B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.7,
            "valueText": "($0.7B)",
            "notes": [
              "22% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 0.6,
            "valueText": "($0.6B)",
            "notes": [
              "20% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "11% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "10% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.1,
        "valueText": "($0.1B)",
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
          "valueText": "$0.2B",
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
        "value": 2.6,
        "valueText": "$2.6B",
        "notes": [
          "82% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "valueText": "$0.6B",
        "notes": [
          "20% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.6,
        "valueText": "$0.6B",
        "notes": [
          "21% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "134000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "134M",
        "basis": "unspecified",
        "notes": [
          "+7% Y/Y"
        ],
        "quote": "Nights booked\n134M\n+7% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            102,
            1173,
            305,
            150
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "23.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$23.5B",
        "basis": "unspecified",
        "notes": [
          "+9% Y/Y fxn"
        ],
        "quote": "GBV\n$23.5B\n+9% Y/Y fxn",
        "anchor": {
          "type": "image-box",
          "box": [
            417,
            1173,
            146,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +5%"
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
              "label": "拉美",
              "notes": [
                "同比 +25%"
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
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +7%"
            ]
          },
          {
            "id": "gbv",
            "label": "总预订价值",
            "notes": [
              "同比 +9%（固定汇率）"
            ]
          }
        ],
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
                  "占收入 22%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 20%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 11%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 10%",
                  "同比 (2 个百分点)"
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
              "利润率 82%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "airbnb-q3-fy22",
    "company": "Airbnb",
    "period": "Q3 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/airbnb-q3-fy22.png",
    "roundingTolerance": 0.11,
    "revenue": {
      "total": 2.9,
      "notes": [
        "+29% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 1.2,
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 1.7,
          "notes": [
            "+33% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "product",
            "label": "Product dev.",
            "value": 0.4,
            "notes": []
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": []
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.2,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.056,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0.066,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.066,
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
        "value": 2.5,
        "notes": [
          "86% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "42% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.2,
        "notes": [
          "42% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "99700000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "99.7M",
        "basis": "unspecified",
        "notes": [
          "+25% Y/Y"
        ],
        "quote": "Nights booked\n99.7M\n+25% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1202,
            306,
            150
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "15.6",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$15.6B",
        "basis": "unspecified",
        "notes": [
          "+31% Y/Y"
        ],
        "quote": "GBV\n$15.6B\n+31% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            340,
            1202,
            145,
            152
          ]
        }
      },
      {
        "id": "long_term_stays",
        "label": "Long-term stays (28+ days)",
        "value": "20",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "20%",
        "basis": "unspecified",
        "notes": [
          "of nights booked"
        ],
        "quote": "Long-term stays (28+ days)\n20% of nights booked",
        "anchor": {
          "type": "image-box",
          "box": [
            493,
            1202,
            417,
            152
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +29%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +24%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +33%"
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
                "id": "product",
                "label": "产品开发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "support",
                "label": "客服支持"
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 86%",
              "保持不变"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 42%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 42%",
              "同比 +5 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +25%"
            ]
          },
          {
            "id": "gbv",
            "label": "GBV",
            "notes": [
              "同比 +31%"
            ]
          },
          {
            "id": "long_term_stays",
            "label": "长期住宿（28 天以上）",
            "notes": [
              "占预订间夜数"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "airbnb-q3-fy23",
    "company": "Airbnb",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/airbnb-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.4,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1.5,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 1.5,
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.2,
          "notes": [
            "+28% Y/Y"
          ]
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.2,
          "notes": [
            "+33% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.4,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.4,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "12% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product",
            "value": 0.4,
            "notes": [
              "12% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.3,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "9% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      }
    },
    "otherIncome": {
      "total": 2.9,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.2,
          "notes": []
        },
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 2.7,
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
        "value": 2.9,
        "notes": [
          "86% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "44% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.4,
        "notes": [
          "129% margin",
          "+87pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "113200000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "113.2M",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Nights booked\n113.2M\n+14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1202,
            306,
            150
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "18.3",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$18.3B",
        "basis": "unspecified",
        "notes": [
          "+17% Y/Y"
        ],
        "quote": "GBV\n$18.3B\n+17% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            340,
            1202,
            145,
            150
          ]
        }
      },
      {
        "id": "long_term_stays",
        "label": "Long-term stays (28+ days)",
        "value": "18",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "18%",
        "basis": "unspecified",
        "notes": [
          "of nights booked"
        ],
        "quote": "Long-term stays (28+ days)\n18%\nof nights booked",
        "anchor": {
          "type": "image-box",
          "box": [
            494,
            1202,
            417,
            152
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "emea",
              "label": "欧洲、中东和非洲",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "latam",
              "label": "拉美",
              "notes": [
                "同比 +28%"
              ]
            },
            {
              "id": "apac",
              "label": "亚太",
              "notes": [
                "同比 +33%"
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
                  "占收入 12%",
                  "同比 (0) 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 12%",
                  "同比 (1) 个百分点"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 9%",
                  "同比 (1) 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 (1) 个百分点"
                ]
              }
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他",
              "notes": []
            },
            {
              "id": "tax_benefit",
              "label": "税收收益",
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
              "利润率 86%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 44%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 129%",
              "同比 +87 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "gbv",
            "label": "总预订价值",
            "notes": [
              "同比 +17%"
            ]
          },
          {
            "id": "long_term_stays",
            "label": "长期住宿（28+ 天）",
            "notes": [
              "占预订间夜数"
            ]
          }
        ],
        "period": "2023 财年第三季度",
        "periodNote": ""
      }
    }
  },
  {
    "key": "airbnb-q3-fy24",
    "company": "Airbnb",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processing/airbnb-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.7,
      "notes": [
        "+10% Y/Y"
      ],
      "items": [
        {
          "id": "north_america",
          "label": "North America",
          "value": 1.6,
          "notes": [
            "+6% Y/Y"
          ],
          "valueText": "$1.6B"
        },
        {
          "id": "emea",
          "label": "EMEA",
          "value": 1.7,
          "notes": [
            "+13% Y/Y"
          ],
          "valueText": "$1.7B"
        },
        {
          "id": "latam",
          "label": "LATAM",
          "value": 0.2,
          "notes": [
            "+12% Y/Y"
          ],
          "valueText": "$0.2B"
        },
        {
          "id": "apac",
          "label": "APAC",
          "value": 0.2,
          "notes": [
            "+13% Y/Y"
          ],
          "valueText": "$0.2B"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0.5,
        "notes": [],
        "valueText": "($0.5B)"
      },
      "operatingExpenses": {
        "total": 1.7,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "14% of revenue",
              "+2pp Y/Y"
            ],
            "valueText": "($0.5B)"
          },
          {
            "id": "product",
            "label": "Product",
            "value": 0.5,
            "notes": [
              "14% of revenue",
              "+2pp Y/Y"
            ],
            "valueText": "($0.5B)"
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.4,
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
            ],
            "valueText": "($0.4B)"
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "9% of revenue",
              "+0pp Y/Y"
            ],
            "valueText": "($0.3B)"
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4,
        "notes": [],
        "valueText": "($0.4B)"
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.2,
          "notes": [],
          "valueText": "$0.2B"
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
        "value": 3.3,
        "notes": [
          "88% margin",
          "+1pp Y/Y"
        ],
        "valueText": "$3.3B"
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.5,
        "notes": [
          "41% margin",
          "(3pp) Y/Y"
        ],
        "valueText": "$1.5B"
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.4,
        "notes": [
          "37% margin",
          "(92pp) Y/Y"
        ],
        "valueText": "$1.4B"
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "123000000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "123M",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y"
        ],
        "quote": "Nights booked\n123M\n+8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            103,
            1175,
            303,
            148
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "20.1",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$20.1B",
        "basis": "unspecified",
        "notes": [
          "+10% Y/Y"
        ],
        "quote": "GBV\n$20.1B\n+10% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            417,
            1175,
            145,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +10%"
          ],
          "items": [
            {
              "id": "north_america",
              "label": "北美",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "emea",
              "label": "EMEA",
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
                "同比 +13%"
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
                  "占收入 14%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "product",
                "label": "产品",
                "notes": [
                  "占收入 14%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 10%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 9%",
                  "同比 +0 个百分点"
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
              "利润率 88%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 41%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 37%",
              "同比 (92 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +8%"
            ]
          },
          {
            "id": "gbv",
            "label": "总预订价值",
            "notes": [
              "同比 +10%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "airbnb-q4-fy22",
    "company": "Airbnb",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processing/airbnb-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 1.9,
      "notes": [
        "+24% Y/Y"
      ],
      "items": [
        {
          "id": "united_states",
          "label": "United States",
          "value": 0.9,
          "valueText": "$0.9B",
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "international",
          "label": "International",
          "value": 1,
          "valueText": "$1.0B",
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
        "value": 0.3,
        "valueText": "($0.3B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "valueText": "($0.4B)",
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "product",
            "label": "Product dev.",
            "value": 0.4,
            "valueText": "($0.4B)",
            "notes": [
              "21% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "support",
            "label": "Support",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "14% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "13% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.025,
        "valueText": "($25M)",
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
          "valueText": "$0.1B",
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
        "value": 1.6,
        "valueText": "$1.6B",
        "notes": [
          "82% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2,
        "valueText": "$0.2B",
        "notes": [
          "12% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "valueText": "$0.3B",
        "notes": [
          "17% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "nights_booked",
        "label": "Nights booked",
        "value": "88200000",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "literal": "88.2M",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "Nights booked\n88.2M\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            25,
            1202,
            306,
            150
          ]
        }
      },
      {
        "id": "gbv",
        "label": "GBV",
        "value": "13.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$13.5B",
        "basis": "unspecified",
        "notes": [
          "+20% Y/Y"
        ],
        "quote": "GBV\n$13.5B\n+20% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            340,
            1202,
            145,
            151
          ]
        }
      },
      {
        "id": "long_term_stays",
        "label": "Long-term stays (28+ days)",
        "value": "21",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "21%",
        "basis": "unspecified",
        "notes": [
          "of nights booked"
        ],
        "quote": "Long-term stays (28+ days)\n21% of nights booked",
        "anchor": {
          "type": "image-box",
          "box": [
            494,
            1202,
            418,
            152
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +24%"
          ],
          "items": [
            {
              "id": "united_states",
              "label": "美国",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "international",
              "label": "国际",
              "notes": [
                "同比 +30%"
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
                  "占收入 22%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "product",
                "label": "产品开发",
                "notes": [
                  "占收入 21%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "support",
                "label": "客服支持",
                "notes": [
                  "占收入 14%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "占收入 13%",
                  "同比 (1 个百分点)"
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
              "利润率 82%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 17%",
              "同比 +4 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "nights_booked",
            "label": "预订间夜数",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "gbv",
            "label": "总预订价值",
            "notes": [
              "同比 +20%"
            ]
          },
          {
            "id": "long_term_stays",
            "label": "长住（28+ 天）",
            "notes": [
              "占预订间夜数"
            ]
          }
        ],
        "period": "2022 财年第四季度",
        "periodNote": ""
      }
    }
  }
]);
})(window);
