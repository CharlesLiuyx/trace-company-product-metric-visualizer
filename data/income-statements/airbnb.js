/* Pure income-statement SSOT; source-stated operating counts retain their own dimensions. */
(function(global) {
const ssot = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {schemaVersion:1, records:[]};
ssot.records.push(...[
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
        "value": 3.0,
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
  }
]);
})(window);
