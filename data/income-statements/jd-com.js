/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "jd-com-q3-fy25",
    "company": "JD.com",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 42,
      "notes": [
        "+15% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 35.2,
          "notes": [
            "+11% Y/Y",
            "6% operating margin",
            "+1pp Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 7.7,
          "notes": [
            "+24% Y/Y",
            "2% operating margin",
            "(2pp) Y/Y"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New Businesses",
          "value": 2.2,
          "notes": [
            "+214% Y/Y",
            "(101%) operating margin",
            "(88pp) Y/Y"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Inter-segment eliminations",
          "value": -3.1
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 34.9
      },
      "operatingExpenses": {
        "total": 7.3,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 3.1
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 3
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.8
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.4
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 7.1,
        "notes": [
          "17% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.1,
        "notes": [
          "(0%) margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.1,
        "notes": [
          "(0%) margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +15%"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 +11%",
                "营业利润率 6%",
                "同比 +1 个百分点"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +24%",
                "营业利润率 2%",
                "同比 (2 个百分点)"
              ]
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 +214%",
                "营业利润率 (101%)",
                "同比 (88 个百分点)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销"
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
                "id": "fulfillment",
                "label": "履约"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
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
              "利润率 17%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 (5 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q4-fy25",
    "company": "JD.com",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 50.4,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 43.2,
          "notes": [
            "(2%) Y/Y",
            "3% operating margin",
            "(0pp) Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 9.1,
          "notes": [
            "+22% Y/Y",
            "4% operating margin",
            "(1pp) Y/Y"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New Businesses",
          "value": 2,
          "notes": [
            "+201% Y/Y",
            "(105%) operating margin",
            "(86pp) Y/Y"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Inter-segment eliminations",
          "value": -3.9
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 42.5
      },
      "operatingExpenses": {
        "total": 8.7,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 3.5
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 3.6
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.5
          },
          {
            "id": "goodwill",
            "label": "Goodwill",
            "value": 0.2
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 7.9,
        "notes": [
          "16% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.8,
        "notes": [
          "(2%) margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.8,
        "notes": [
          "(2%) margin",
          "+4pp Y/Y"
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
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 (2%)",
                "营业利润率 3%",
                "同比 (0 个百分点)"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +22%",
                "营业利润率 4%",
                "同比 (1 个百分点)"
              ]
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 +201%",
                "营业利润率 (105%)",
                "同比 (86 个百分点)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销"
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
                "id": "fulfillment",
                "label": "履约"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "goodwill",
                "label": "商誉"
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
              "利润率 16%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 +4 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q1-fy26",
    "company": "JD.com",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 45.8,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 38.9,
          "notes": [
            "+2% Y/Y",
            "6% operating margin",
            "+1pp Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 8.8,
          "notes": [
            "+29% Y/Y",
            "2% operating margin",
            "+2pp Y/Y"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New Businesses",
          "value": 0.9,
          "notes": [
            "+9% Y/Y",
            "(165%) operating margin",
            "(188pp) Y/Y"
          ]
        },
        {
          "label": "Inter-segment eliminations",
          "value": -2.9,
          "notes": [
            "Source chart rounds segment revenue and eliminations; items sum to $45.7B versus $45.8B reported total."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 38.1
      },
      "operatingExpenses": {
        "total": 7.1,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 3.4
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 2.2
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.5
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
      "total": 0.5,
      "items": [
        {
          "id": "other",
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
        "value": 7.7,
        "notes": [
          "17% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "1% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "2% margin",
          "(2pp) Y/Y",
          "Official release rounds net income to US$0.7B; source chart displays $0.8B."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "label": "京东零售",
              "notes": [
                "同比 +2%",
                "营业利润率 6%",
                "同比 +1 个百分点"
              ]
            },
            {
              "label": "京东物流",
              "notes": [
                "同比 +29%",
                "营业利润率 2%",
                "同比 +2 个百分点"
              ]
            },
            {
              "label": "新业务",
              "notes": [
                "同比 +9%",
                "营业利润率 (165%)",
                "同比 (188 个百分点)"
              ]
            },
            {
              "label": "分部间抵销",
              "notes": [
                "源图对分部收入和抵销额做了四舍五入；分项合计为 $45.7B，报告总收入为 $45.8B。"
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
                "label": "履约"
              },
              {
                "label": "营销"
              },
              {
                "label": "研发"
              },
              {
                "label": "管理费用"
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 17%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 (2 个百分点)",
              "官方公告将净利润四舍五入为 7 亿美元；源图显示为 8 亿美元。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q2-fy26",
    "company": "JD.com",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 51.1,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 43.5,
          "notes": [
            "(5%) Y/Y",
            "5% operating margin",
            "(9pp) Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 9.4,
          "notes": [
            "+24% Y/Y",
            "4% operating margin",
            "+21pp Y/Y"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New Businesses",
          "value": 1.1,
          "notes": [
            "(48%) Y/Y",
            "(136%) operating margin",
            "+59pp Y/Y"
          ]
        },
        {
          "label": "Inter-segment eliminations",
          "value": -3,
          "notes": [],
          "id": "intersegment_eliminations"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 42.3
      },
      "operatingExpenses": {
        "total": 8.1,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 3.6
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 3
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.1
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.5
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
      "total": 1,
      "items": [
        {
          "id": "other_operating",
          "label": "Other",
          "value": 0.1,
          "notes": [
            "Operating-expenses bridge"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.9,
          "notes": [
            "Net-profit bridge"
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
        "value": 8.7,
        "notes": [
          "17% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "1% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.3,
        "notes": [
          "3% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 (5%)",
                "营业利润率 5%",
                "同比 (9 个百分点)"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +24%",
                "营业利润率 4%",
                "同比 +21 个百分点"
              ]
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 (48%)",
                "营业利润率 (136%)",
                "同比 +59 个百分点"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销",
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
                "label": "履约"
              },
              {
                "label": "营销"
              },
              {
                "label": "研发"
              },
              {
                "label": "管理费用"
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
              "id": "other_operating",
              "label": "其他",
              "notes": [
                "运营费用过桥"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "净利润过桥"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 17%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q3-fy24",
    "company": "JD.com",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 37.1,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 32.1,
          "notes": [
            "+6% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 6.3,
          "notes": [
            "+7% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New businesses",
          "value": 0.7,
          "notes": [
            "(26%) Y/Y",
            "(12%) operating margin"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Intrasegment eliminations",
          "value": -2,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 30.7
      },
      "operatingExpenses": {
        "total": 4.7,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 2.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.4
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & admin",
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
      "total": 0.5,
      "items": [
        {
          "id": "other_gains",
          "label": "Other gains",
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
        "value": 6.4,
        "notes": [
          "17% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.7,
        "notes": [
          "5% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.8,
        "notes": [
          "5% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 +6%",
                "营业利润率 5%"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +7%",
                "营业利润率 5%"
              ]
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 (26%)",
                "营业利润率 (12%)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销",
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
                "id": "fulfillment",
                "label": "履约"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
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
              "id": "other_gains",
              "label": "其他收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 17%",
              "同比 +2 个百分点"
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
              "利润率 5%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q4-fy24",
    "company": "JD.com",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 47.5,
      "notes": [
        "+13% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 42.1,
          "notes": [
            "+15% Y/Y",
            "3% operating margin"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 7.1,
          "notes": [
            "+10% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New businesses",
          "value": 0.6,
          "notes": [
            "(31%) Y/Y",
            "(19%) operating margin"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": [
            "Intrasegment",
            "eliminations"
          ],
          "value": -2.3
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
        "value": 40.3
      },
      "operatingExpenses": {
        "total": 6.1,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 2.8
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 2.3
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": [
              "General &",
              "admin"
            ],
            "value": 0.3
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.1
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
      "total": 0.4,
      "items": [
        {
          "id": "other_gains",
          "label": "Other gains",
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
        "value": 7.3,
        "notes": [
          "15% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "2% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.5,
        "notes": [
          "3% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +13%"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 +15%",
                "营业利润率 3%"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +10%",
                "营业利润率 4%"
              ]
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 (31%)",
                "营业利润率 (19%)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": [
                "分部间",
                "抵销"
              ],
              "notes": []
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
                "id": "fulfillment",
                "label": "履约",
                "notes": []
              },
              {
                "id": "marketing",
                "label": "营销",
                "notes": []
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": []
              },
              {
                "id": "ga",
                "label": [
                  "管理",
                  "费用"
                ],
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
              "id": "other_gains",
              "label": "其他收益",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 15%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q1-fy25",
    "company": "JD.com",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 41.5,
      "notes": [
        "+16% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 36.4,
          "notes": [
            "+16% Y/Y",
            "4.9% operating margin",
            "+0.8pp Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 6.5,
          "notes": [
            "+11% Y/Y",
            "0.3% operating margin",
            "(0.2pp) Y/Y"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New Businesses",
          "value": 0.8,
          "notes": [
            "+17% Y/Y",
            "(23%) operating margin",
            "(9pp) Y/Y"
          ]
        },
        {
          "label": "Inter-segment eliminations",
          "value": -2.1,
          "notes": [],
          "id": "intersegment_eliminations"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 34.9
      },
      "operatingExpenses": {
        "total": 5.1,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 2.7
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.5
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & admin",
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
      "total": 0.4,
      "items": [
        {
          "id": "other",
          "label": "Other gains",
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
        "value": 6.6,
        "notes": [
          "15% margin",
          "+1pp Y/Y"
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
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.6,
        "notes": [
          "4% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +16%"
          ],
          "items": [
            {
              "label": "京东零售",
              "notes": [
                "同比 +16%",
                "营业利润率 4.9%",
                "同比 +0.8 个百分点"
              ],
              "id": "jd_retail"
            },
            {
              "label": "京东物流",
              "notes": [
                "同比 +11%",
                "营业利润率 0.3%",
                "同比 (0.2 个百分点)"
              ],
              "id": "jd_logistics"
            },
            {
              "label": "新业务",
              "notes": [
                "同比 +17%",
                "营业利润率 (23%)",
                "同比 (9 个百分点)"
              ],
              "id": "new_businesses"
            },
            {
              "label": "分部间抵销",
              "notes": [],
              "id": "intersegment_eliminations"
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
                "label": "履约"
              },
              {
                "label": "营销"
              },
              {
                "label": "研发"
              },
              {
                "label": "管理费用"
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
              "label": "其他收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 15%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 4%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q4-fy22",
    "company": "JD.com",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/jd-com-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 42.8,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 37.5,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 6.2,
          "notes": [
            "+41% Y/Y"
          ]
        },
        {
          "id": "dada",
          "label": "Dada Group",
          "value": 0.4
        },
        {
          "id": "new_businesses",
          "label": "New businesses",
          "value": 0.7,
          "notes": [
            "(42%) Y/Y"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Intrasegment eliminations",
          "value": -2
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 36.8
      },
      "operatingExpenses": {
        "total": 5.3,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 2.4
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.7
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.5
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
      "total": 0.022,
      "items": [
        {
          "id": "other_gains",
          "label": "Other gains",
          "value": 0.022,
          "valueText": "$22M"
        }
      ]
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
        "value": 6,
        "notes": [
          "14% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.7,
        "notes": [
          "2% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.5,
        "notes": [
          "1% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +41%"
              ]
            },
            {
              "id": "dada",
              "label": "达达集团"
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 (42%)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销"
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
                "id": "fulfillment",
                "label": "履约"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "rnd",
                "label": "研发"
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
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other_gains",
              "label": "其他收益"
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 14%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q2-fy24",
    "company": "JD.com",
    "period": "Q2 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 40.1,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 35.4,
          "notes": [
            "+2% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 6.1,
          "notes": [
            "+8% Y/Y",
            "5% operating margin"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New businesses",
          "value": 0.6,
          "notes": [
            "(35%) Y/Y",
            "(15%) operating margin"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Intrasegment eliminations",
          "value": -2
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 33.7
      },
      "operatingExpenses": {
        "total": 4.9,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 2.4
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.6
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & admin",
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
      "total": 0.7,
      "items": [
        {
          "id": "other_gains",
          "label": "Other gains",
          "value": 0.7
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
        "value": 6.3,
        "notes": [
          "16% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.4,
        "notes": [
          "4% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.9,
        "notes": [
          "5% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 +2%",
                "营业利润率 4%"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +8%",
                "营业利润率 5%"
              ]
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 (35%)",
                "营业利润率 (15%)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销"
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
                "id": "fulfillment",
                "label": "履约"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "rnd",
                "label": "研发"
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
              "id": "other_gains",
              "label": "其他收益"
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
              "利润率 16%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 5%",
              "同比 +2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q1-fy24",
    "company": "JD.com",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 36,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 31.4,
          "notes": [
            "+7% Y/Y",
            "4% operating margin"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 5.8,
          "notes": [
            "+15% Y/Y",
            "1% operating margin"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New businesses",
          "value": 0.7,
          "notes": [
            "(19%) Y/Y",
            "(14%) operating margin"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Intrasegment eliminations",
          "value": -1.9,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 30.5,
        "notes": []
      },
      "operatingExpenses": {
        "total": 4.4,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 2.3,
            "notes": []
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.3,
            "notes": []
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6,
            "notes": []
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.3,
            "notes": []
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
          "id": "other",
          "label": "Other gains",
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
        "value": 5.5,
        "notes": [
          "15% margin",
          "+0.5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "3.1% margin",
          "+0.3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "3% margin",
          "+0.3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 +7%",
                "营业利润率 4%"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +15%",
                "营业利润率 1%"
              ]
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 (19%)",
                "营业利润率 (14%)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销",
              "notes": []
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
                "id": "fulfillment",
                "label": "履约",
                "notes": []
              },
              {
                "id": "marketing",
                "label": "营销",
                "notes": []
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": []
              },
              {
                "id": "ga",
                "label": "管理费用",
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
              "id": "other",
              "label": "其他收益",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 15%",
              "同比 +0.5 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 3.1%",
              "同比 +0.3 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +0.3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q2-fy25",
    "company": "JD.com",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 49.8,
      "notes": [
        "+25% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 43.3,
          "notes": [
            "+21% Y/Y",
            "4.5% operating margin",
            "+0.6pp Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 7.2,
          "notes": [
            "+17% Y/Y",
            "3.9% operating margin",
            "(1.1pp) Y/Y"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New Businesses",
          "value": 1.9,
          "notes": [
            "+199% Y/Y",
            "(106%) operating margin",
            "(91pp) Y/Y"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Inter-segment eliminations",
          "value": -2.6
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 41.9
      },
      "operatingExpenses": {
        "total": 8.1,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 3.1
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 3.8
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.7
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.5
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0
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
        "value": 7.9,
        "notes": [
          "16% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.1,
        "notes": [
          "(0%) margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating loss."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +25%"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 +21%",
                "营业利润率 4.5%",
                "同比 +0.6 个百分点"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +17%",
                "营业利润率 3.9%",
                "同比 (1.1 个百分点)"
              ]
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 +199%",
                "营业利润率 (106%)",
                "同比 (91 个百分点)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销"
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
                "id": "fulfillment",
                "label": "履约"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
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
              "利润率 16%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (0%)",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "源图止于营业亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q4-fy23",
    "company": "JD.com",
    "period": "Q4 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 43.1,
      "notes": [
        "+4% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 37.7,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 6.6,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New businesses",
          "value": 1,
          "notes": [
            "(9%) Y/Y"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Intrasegment eliminations",
          "value": -2.1
        }
      ]
    },
    "costs": {
      "operatingExpenses": {
        "total": 5.8,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 2.4
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.8
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.3
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.6
          }
        ]
      },
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 37
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
        "value": 6.1,
        "notes": [
          "14% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "1% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.3,
        "notes": [
          "1% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other_gains",
          "label": "Other gains",
          "value": 0.2
        }
      ]
    },
    "otherExpenses": {
      "total": 0,
      "items": []
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 (9%)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销"
            }
          ]
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "fulfillment",
                "label": "履约"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "other",
                "label": "其他"
              }
            ]
          },
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本"
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 14%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 1%",
              "同比 (0 个百分点)"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other_gains",
              "label": "其他收益"
            }
          ]
        },
        "otherExpenses": {
          "items": []
        }
      }
    }
  },
  {
    "key": "jd-com-q2-fy23",
    "company": "JD.com",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 39.7,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 34.9,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 5.7,
          "notes": [
            "+31% Y/Y"
          ]
        },
        {
          "id": "dada",
          "label": "Dada",
          "value": 0.4,
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New businesses",
          "value": 0.6,
          "notes": [
            "(31%) Y/Y"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Intrasegment eliminations",
          "value": -1.9
        }
      ]
    },
    "costs": {
      "operatingExpenses": {
        "total": 4.6,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 2.3
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.5
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.3
          }
        ]
      },
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 34
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.4
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_gains",
          "label": "Other gains",
          "value": 0.1
        }
      ]
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "financial",
          "label": "Financial",
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
        "value": 5.7,
        "notes": [
          "14% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.1,
        "notes": [
          "3% margin",
          "+1.5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1,
        "notes": [
          "2% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +31%"
              ]
            },
            {
              "id": "dada",
              "label": "达达",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 (31%)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销"
            }
          ]
        },
        "costs": {
          "operatingExpenses": {
            "items": [
              {
                "id": "fulfillment",
                "label": "履约"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              }
            ]
          },
          "costOfRevenue": {
            "id": "cost_of_revenue",
            "label": "收入成本"
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other_gains",
              "label": "其他收益"
            }
          ]
        },
        "otherIncome": {
          "items": [
            {
              "id": "financial",
              "label": "财务收益"
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
              "利润率 14%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +1.5 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q1-fy23",
    "company": "JD.com",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 35.4,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 30.9,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 5.3,
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "dada",
          "label": "Dada Group",
          "value": 0.4
        },
        {
          "id": "new_businesses",
          "label": "New businesses",
          "value": 0.5,
          "notes": [
            "(40%) Y/Y"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Intrasegment eliminations",
          "value": -1.8
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 30.1
      },
      "operatingExpenses": {
        "total": 4.3,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 2.2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.2
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.4
          }
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_gains",
          "label": "Other gains",
          "value": 0.1
        }
      ]
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "tax_benefit",
          "label": "Tax benefit",
          "value": 0.2
        }
      ]
    },
    "otherExpenses": {
      "total": 0.2,
      "items": [
        {
          "id": "financial",
          "label": "Financial",
          "value": 0.2
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 5.2,
        "notes": [
          "15% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.9,
        "notes": [
          "3% margin",
          "+4pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.9,
        "notes": [
          "3% margin",
          "+4pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "dada",
              "label": "达达集团"
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 (40%)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销"
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
                "id": "fulfillment",
                "label": "履约"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              }
            ]
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other_gains",
              "label": "其他收益"
            }
          ]
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
              "id": "financial",
              "label": "财务费用"
            }
          ]
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 15%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 3%",
              "同比 +4 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 3%",
              "同比 +4 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "jd-com-q3-fy23",
    "company": "JD.com",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 34,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 29.1,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 5.7,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "dada",
          "label": "Dada",
          "value": 0.4,
          "notes": [
            "+17% Y/Y"
          ]
        },
        {
          "id": "new_businesses",
          "label": "New businesses",
          "value": 0.5,
          "notes": [
            "(25%) Y/Y"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Intrasegment eliminations",
          "value": -1.7
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 28.6
      },
      "operatingExpenses": {
        "total": 4,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 2.1
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.1
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.5
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.3
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
          "id": "financial",
          "label": "Financial",
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
        "value": 5.3,
        "notes": [
          "16% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.3,
        "notes": [
          "4% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 1.1,
        "notes": [
          "3% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 (2%)"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "dada",
              "label": "达达",
              "notes": [
                "同比 +17%"
              ]
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 (25%)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销"
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
                "id": "fulfillment",
                "label": "履约"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              }
            ]
          },
          "tax": {
            "label": "所得税"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "financial",
              "label": "财务收益"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 16%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 +0 个百分点"
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
    "key": "jd-com-q3-fy22",
    "company": "JD.com",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/jd-com-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 34.2,
      "notes": [
        "+11% Y/Y"
      ],
      "items": [
        {
          "id": "jd_retail",
          "label": "JD Retail",
          "value": 29.8,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "jd_logistics",
          "label": "JD Logistics",
          "value": 5,
          "notes": [
            "+39% Y/Y"
          ]
        },
        {
          "id": "dada",
          "label": "Dada",
          "value": 0.3
        },
        {
          "id": "new_businesses",
          "label": "New businesses",
          "value": 0.7,
          "notes": [
            "(13%) Y/Y"
          ]
        },
        {
          "id": "intersegment_eliminations",
          "label": "Intrasegment eliminations",
          "value": -1.6
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 29.1
      },
      "operatingExpenses": {
        "total": 4,
        "items": [
          {
            "id": "fulfillment",
            "label": "Fulfillment",
            "value": 2
          },
          {
            "id": "marketing",
            "label": "Marketing",
            "value": 1.1
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.6
          },
          {
            "id": "ga",
            "label": "General & admin",
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
    "operatingOtherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "other_gains",
          "label": "Other gains",
          "value": 0.2
        }
      ]
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
        "value": 5.1,
        "notes": [
          "15% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 1.2,
        "notes": [
          "4% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 0.8,
        "notes": [
          "2% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 +11%"
          ],
          "items": [
            {
              "id": "jd_retail",
              "label": "京东零售",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "jd_logistics",
              "label": "京东物流",
              "notes": [
                "同比 +39%"
              ]
            },
            {
              "id": "dada",
              "label": "达达"
            },
            {
              "id": "new_businesses",
              "label": "新业务",
              "notes": [
                "同比 (13%)"
              ]
            },
            {
              "id": "intersegment_eliminations",
              "label": "分部间抵销"
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
                "id": "fulfillment",
                "label": "履约"
              },
              {
                "id": "marketing",
                "label": "营销"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "ga",
                "label": "管理费用"
              }
            ]
          },
          "tax": {
            "label": "税项"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other_gains",
              "label": "其他收益"
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
              "利润率 15%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 4%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 2%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
