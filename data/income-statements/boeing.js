/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "boeing-q2-fy26",
    "company": "Boeing",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/boeing-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 24.6,
      "notes": [
        "+8% Y/Y"
      ],
      "items": [
        {
          "id": "commercial_airplanes",
          "label": "Commercial Airplanes",
          "value": 11.8,
          "notes": [
            "+8% Y/Y",
            "(3%) segment margin"
          ]
        },
        {
          "id": "defense",
          "label": "Defense, Space & Security",
          "value": 7.5,
          "notes": [
            "+13% Y/Y",
            "(0%) segment margin"
          ]
        },
        {
          "id": "global_services",
          "label": "Global Services",
          "value": 5.3,
          "notes": [
            "+1% Y/Y",
            "18% segment margin"
          ]
        },
        {
          "id": "other_seg",
          "label": "Other",
          "value": 0.018,
          "notes": [
            "Shown as \"$18M\" in the source."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 22.1
      },
      "operatingExpenses": {
        "total": 2.3,
        "items": [
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.4,
            "notes": [
              "General and administrative."
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.9,
            "notes": [
              "Research and development."
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "Income tax is drawn inside the combined non-operating \"Other ($0.6B)\" outflow in the source chart."
        ]
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
          "value": 0.6,
          "notes": [
            "Combined non-operating items plus income tax; the terminal \"Other ($0.6B)\" deduction that turns $0.2B operating profit into a $0.4B net loss."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.4,
        "notes": [
          "10% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2,
        "notes": [
          "1% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.4,
        "notes": [
          "Net loss of $0.4B after the terminal non-operating and tax Other deduction."
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
              "id": "commercial_airplanes",
              "label": "商用飞机",
              "notes": [
                "同比 +8%",
                "分部利润率 (3%)"
              ]
            },
            {
              "id": "defense",
              "label": "国防、太空与安全",
              "notes": [
                "同比 +13%",
                "分部利润率 (0%)"
              ]
            },
            {
              "id": "global_services",
              "label": "全球服务",
              "notes": [
                "同比 +1%",
                "分部利润率 18%"
              ]
            },
            {
              "id": "other_seg",
              "label": "其他",
              "notes": [
                "来源图显示为 \"$18M\"。"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "一般及行政费用。"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "研究与开发。"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "所得税在来源图中并入非经营性“其他（$0.6B）”流出。"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "非经营性项目加所得税的合计；即将 $0.2B 营业利润转为 $0.4B 净亏损的终端“其他（$0.6B）”扣减。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 10%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 1%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": [
              "扣除终端非经营性与税费“其他”后净亏损 $0.4B。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "boeing-q1-fy26",
    "company": "Boeing",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/boeing-q1-fy26.png",
    "roundingTolerance": 0.06,
    "revenue": {
      "total": 22.2,
      "notes": [
        "+14% Y/Y"
      ],
      "items": [
        {
          "id": "commercial_airplanes",
          "label": "Commercial Airplanes",
          "value": 9.2,
          "notes": [
            "+13% Y/Y",
            "(6%) segment margin"
          ]
        },
        {
          "id": "defense",
          "label": "Defense, Space & Security",
          "value": 7.6,
          "notes": [
            "+21% Y/Y",
            "3% segment margin"
          ]
        },
        {
          "id": "global_services",
          "label": "Global Services",
          "value": 5.4,
          "notes": [
            "+6% Y/Y",
            "18% segment margin"
          ]
        },
        {
          "id": "other_seg",
          "label": "Other",
          "value": 0.045,
          "notes": [
            "Boeing Capital and unallocated items; shown as \"$45M\" in the source."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 19.7
      },
      "operatingExpenses": {
        "total": 2.1,
        "items": [
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.2,
            "notes": [
              "General and administrative."
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.9,
            "notes": [
              "Research and development."
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "Income tax is drawn inside the combined non-operating \"Other ($0.4B)\" outflow in the source chart."
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.407,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.4,
          "notes": [
            "Combined non-operating items plus income tax; the terminal \"Other ($0.4B)\" deduction that turns $0.4B operating profit into a $7M net loss."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.5,
        "notes": [
          "11% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "2% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.007,
        "notes": [
          "Net loss of $7M; operating profit of $0.4B offset by the non-operating and tax \"Other\" deduction."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +14%"
          ],
          "items": [
            {
              "id": "commercial_airplanes",
              "label": "商用飞机",
              "notes": [
                "同比 +13%",
                "分部利润率 (6%)"
              ]
            },
            {
              "id": "defense",
              "label": "国防、太空与安全",
              "notes": [
                "同比 +21%",
                "分部利润率 3%"
              ]
            },
            {
              "id": "global_services",
              "label": "全球服务",
              "notes": [
                "同比 +6%",
                "分部利润率 18%"
              ]
            },
            {
              "id": "other_seg",
              "label": "其他",
              "notes": [
                "波音金融及未分配项；来源图显示为 \"$45M\"。"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "一般及行政费用。"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "研究与开发。"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "所得税在来源图中并入非经营性\"其他（$0.4B）\"流出。"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "非经营性项目加所得税的合计；即将 $0.4B 营业利润转为 $7M 净亏损的终端\"其他（$0.4B）\"扣减。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 11%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": [
              "净亏损 $7M；$0.4B 营业利润被非经营性与税费\"其他\"扣减抵销。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "boeing-q4-fy25",
    "company": "Boeing",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/boeing-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 23.9,
      "notes": [
        "+57% Y/Y"
      ],
      "items": [
        {
          "id": "commercial_airplanes",
          "label": "Commercial Airplanes",
          "value": 11.4,
          "notes": [
            "+139% Y/Y",
            "(6%) segment margin"
          ]
        },
        {
          "id": "defense",
          "label": "Defense, Space & Security",
          "value": 7.4,
          "notes": [
            "+37% Y/Y",
            "(7%) segment margin"
          ]
        },
        {
          "id": "global_services",
          "label": "Global Services",
          "value": 5.2,
          "notes": [
            "+2% Y/Y",
            "202% segment margin"
          ]
        },
        {
          "id": "unallocated",
          "label": "Unallocated",
          "value": -0.1,
          "notes": [
            "A $0.1B unallocated deduction shown between the segment aggregation and reported revenue."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 22.1
      },
      "operatingExpenses": {
        "total": 2.7,
        "items": [
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.7,
            "notes": [
              "General and administrative."
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1,
            "notes": [
              "Research and development."
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "The source does not display a separate tax flow."
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 9.6,
      "items": [
        {
          "id": "gains_disposition",
          "label": "Gains on disposition",
          "value": 9.6
        }
      ]
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
        "value": 1.8,
        "notes": [
          "8% margin",
          "+18pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 8.7,
        "notes": [
          "Derived as gross profit plus gains on disposition less G&A and R&D; the source has no separately labelled operating-profit node."
        ]
      },
      "net": {
        "id": "net_income",
        "label": "Net income",
        "value": 8.3,
        "notes": [
          "35% margin",
          "+62pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +57%"
          ],
          "items": [
            {
              "id": "commercial_airplanes",
              "label": "商用飞机",
              "notes": [
                "同比 +139%",
                "分部利润率 (6%)"
              ]
            },
            {
              "id": "defense",
              "label": "国防、太空与安全",
              "notes": [
                "同比 +37%",
                "分部利润率 (7%)"
              ]
            },
            {
              "id": "global_services",
              "label": "全球服务",
              "notes": [
                "同比 +2%",
                "分部利润率 202%"
              ]
            },
            {
              "id": "unallocated",
              "label": "未分配项",
              "notes": [
                "在分部汇总与报告收入之间显示的 $0.1B 未分配扣减。"
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
                "id": "ga",
                "label": "管理费用",
                "notes": [
                  "一般及行政费用。"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "研究与开发。"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未展示单独的税费流。"
            ]
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "gains_disposition",
              "label": "处置收益"
            }
          ]
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
              "利润率 8%",
              "同比 +18 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "按毛利润加处置收益、减管理费用与研发推导；来源图未单独标注营业利润节点。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 35%",
              "同比 +62 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "boeing-q1-fy25",
    "company": "Boeing",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/boeing-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 19.5,
      "notes": [
        "+18% Y/Y"
      ],
      "items": [
        {
          "id": "commercial_airplanes",
          "label": "Commercial Airplanes",
          "value": 8.1,
          "notes": [
            "+75% Y/Y",
            "(7%) segment margin"
          ]
        },
        {
          "id": "defense",
          "label": "Defense, Space & Security",
          "value": 6.3,
          "notes": [
            "(9%) Y/Y",
            "3% segment margin"
          ]
        },
        {
          "id": "global_services",
          "label": "Global Services",
          "value": 5.1,
          "notes": [
            "+0% Y/Y",
            "19% segment margin"
          ]
        },
        {
          "id": "unallocated",
          "label": "Unallocated",
          "value": -0.012,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 17.1,
        "notes": []
      },
      "operatingExpenses": {
        "total": 2,
        "items": [
          {
            "id": "ga",
            "label": "G&A",
            "value": 1.1,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.8,
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "Tax is included in the Source combined Other deduction."
        ]
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.4,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 2.4,
        "notes": [
          "12% margin",
          "+20pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.4,
        "notes": [
          "2% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_loss",
        "label": "Net loss",
        "value": -0.031,
        "notes": [
          "(0%) margin",
          "+2pp Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "deliveries",
        "label": "Deliveries",
        "literal": "130",
        "value": "130",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "Deliveries\n130 commercial airplanes\n+57% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+57% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            73,
            1177,
            447,
            159
          ]
        }
      },
      {
        "id": "backlog",
        "label": "Backlog",
        "literal": "$545B",
        "value": "545",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Backlog\n$545B\n+5% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+5% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            531,
            1177,
            240,
            159
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +18%"
          ],
          "items": [
            {
              "id": "commercial_airplanes",
              "label": "商用飞机",
              "notes": [
                "同比 +75%",
                "分部利润率 (7%)"
              ]
            },
            {
              "id": "defense",
              "label": "国防、太空与安全",
              "notes": [
                "同比 (9%)",
                "分部利润率 3%"
              ]
            },
            {
              "id": "global_services",
              "label": "全球服务",
              "notes": [
                "同比 +0%",
                "分部利润率 19%"
              ]
            },
            {
              "id": "unallocated",
              "label": "未分配项",
              "notes": []
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
                "id": "ga",
                "label": "管理费用 G&A",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发 R&D",
                "notes": [
                  "占收入 4%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "税费包含在来源图合并的其他扣减中。"
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
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 12%",
              "同比 +20 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净亏损",
            "notes": [
              "利润率 (0%)",
              "同比 +2 个百分点"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deliveries",
            "label": "交付",
            "notes": [
              "同比 +57%"
            ]
          },
          {
            "id": "backlog",
            "label": "订单储备",
            "notes": [
              "同比 +5%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "boeing-q4-fy24",
    "company": "Boeing",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/boeing-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 15.2,
      "notes": [
        "(31%) Y/Y"
      ],
      "items": [
        {
          "id": "commercial_airplanes",
          "label": "Commercial Airplanes",
          "value": 4.8,
          "notes": [
            "(55%) Y/Y",
            "(44%) segment margin"
          ]
        },
        {
          "id": "defense",
          "label": "Defense, Space & Security",
          "value": 5.4,
          "notes": [
            "(20%) Y/Y",
            "(42%) segment margin"
          ]
        },
        {
          "id": "global_services",
          "label": "Global Services",
          "value": 5.1,
          "notes": [
            "+6% Y/Y",
            "19% segment margin"
          ]
        },
        {
          "id": "unallocated",
          "label": "Unallocated",
          "value": -0.1,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "costs_expenses",
        "label": "Costs & expenses",
        "value": 19,
        "items": [
          {
            "id": "cost_of_sales",
            "label": "Cost of products & services",
            "value": 16.8,
            "notes": [
              "110% of revenue",
              "+23pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A & Other",
            "value": 1.3,
            "notes": [
              "9% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.8,
            "notes": [
              "5% of revenue",
              "+1pp Y/Y"
            ]
          }
        ],
        "notes": [
          "Source combines product/service costs, G&A & Other and R&D in one cost aggregate; component sum is $18.9B due to displayed rounding."
        ]
      },
      "operatingExpenses": {
        "total": 0,
        "items": []
      },
      "tax": {
        "value": 0,
        "label": "Tax",
        "notes": [
          "Not separately reported in this source."
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
        "id": "combined_result",
        "label": "Result after combined costs (derived)",
        "value": -3.8,
        "notes": [
          "Derived revenue less the source combined costs aggregate; source does not report a separate gross result."
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -3.8,
        "notes": [
          "(25%) margin",
          "(26pp) Y/Y"
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
    "operatingMetrics": [
      {
        "id": "deliveries",
        "label": "Deliveries",
        "literal": "57",
        "value": "57",
        "unit": "count",
        "currency": null,
        "comparison": "eq",
        "quote": "Deliveries\n57 commercial airplanes\n(64%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            73,
            1172,
            447,
            158
          ]
        },
        "basis": "unspecified",
        "notes": [
          "(64%) Y/Y"
        ]
      },
      {
        "id": "backlog",
        "label": "Backlog",
        "literal": "$521B",
        "value": "521",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "quote": "Backlog\n$521B\n+0% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            531,
            1172,
            240,
            158
          ]
        },
        "basis": "unspecified",
        "notes": [
          "+0% Y/Y"
        ]
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "revenue": {
          "notes": [
            "同比 (31%)"
          ],
          "items": [
            {
              "id": "commercial_airplanes",
              "label": "商用飞机",
              "notes": [
                "同比 (55%)",
                "分部利润率 (44%)"
              ]
            },
            {
              "id": "defense",
              "label": "国防、太空与安全",
              "notes": [
                "同比 (20%)",
                "分部利润率 (42%)"
              ]
            },
            {
              "id": "global_services",
              "label": "全球服务",
              "notes": [
                "同比 +6%",
                "分部利润率 19%"
              ]
            },
            {
              "id": "unallocated",
              "label": "未分配项",
              "notes": []
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "成本及费用",
            "items": [
              {
                "id": "cost_of_sales",
                "label": "产品与服务成本"
              },
              {
                "id": "ga",
                "label": "管理费用及其他"
              },
              {
                "id": "rnd",
                "label": "研发"
              }
            ],
            "notes": [
              "来源将产品及服务成本、管理费用及其他、研发合并为一组；显示精度导致分项合计为 $18.9B。"
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源未单独报告。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "扣除合并成本后的结果（推导）",
            "notes": [
              "由收入减去来源合并成本推导；来源未单独报告毛利润。"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (25%)",
              "同比 (26 个百分点)"
            ]
          },
          "net": {
            "label": "来源未报告净利润",
            "notes": [
              "来源止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "deliveries",
            "label": "交付",
            "notes": [
              "同比 (64%)"
            ]
          },
          {
            "id": "backlog",
            "label": "订单储备",
            "notes": [
              "同比 +0%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
