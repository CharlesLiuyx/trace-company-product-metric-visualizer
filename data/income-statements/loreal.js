/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "loreal-h1-fy25",
    "company": "L'Oréal",
    "period": "H1 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/loreal-h1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 22.5,
      "notes": [
        "+2% Y/Y",
        "Source rounded values retained: divisions sum to €22.5B; gross less operating expenses is €4.8B versus operating profit €4.7B; expense items sum to €12.1B versus €12.0B total; profit bridge gives €3.7B versus net profit €3.8B."
      ],
      "items": [
        {
          "id": "professional_products",
          "label": "Professional Products",
          "value": 2.5,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "consumer_products",
          "label": "Consumer Products",
          "value": 8.4,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "loreal_luxe",
          "label": "L'Oréal Luxe",
          "value": 7.7,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "active_cosmetics",
          "label": "Active Cosmetics",
          "value": 3.9,
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
        "value": 5.7
      },
      "operatingExpenses": {
        "total": 12,
        "items": [
          {
            "id": "advertising_promotion",
            "label": "Advertising & Promotion",
            "value": 7.2,
            "notes": [
              "32% of revenue"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4.2,
            "notes": [
              "19% of revenue"
            ]
          },
          {
            "id": "research_innovation",
            "label": "Research & Innovation",
            "value": 0.7,
            "notes": [
              "3% of revenue"
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
      "total": 0.3,
      "items": [
        {
          "id": "sanofi_dividend",
          "label": "Sanofi Dividend",
          "value": 0.3
        }
      ]
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
        "value": 16.8,
        "notes": [
          "75% of revenue",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.7,
        "notes": [
          "21% of revenue",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.8,
        "notes": [
          "17% of revenue",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年上半年",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +2%",
            "保留原图舍入金额：毛利润减运营费用为 €4.8B，原图营业利润为 €4.7B；费用明细合计 €12.1B，小计为 €12.0B；利润桥计算为 €3.7B，净利润为 €3.8B。"
          ],
          "items": [
            {
              "id": "professional_products",
              "label": "专业产品事业部",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "consumer_products",
              "label": "大众化妆品事业部",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "loreal_luxe",
              "label": "欧莱雅高档化妆品",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "active_cosmetics",
              "label": "皮肤科学美容事业部",
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
                "id": "advertising_promotion",
                "label": "广告与推广",
                "notes": [
                  "占收入 32%"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 19%"
                ]
              },
              {
                "id": "research_innovation",
                "label": "研发与创新",
                "notes": [
                  "占收入 3%"
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
              "id": "sanofi_dividend",
              "label": "赛诺菲股息"
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
              "占收入 75%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 21%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 17%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "loreal-fy25",
    "company": "L'Oréal",
    "period": "FY25",
    "periodNote": "Year ended Dec. 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/loreal-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 44.1,
      "notes": [
        "+1% Y/Y",
        "Source values are rounded: division revenue sums to €44.1B; the presented expense and below-operating-profit components may differ from their subtotals by €0.1B."
      ],
      "items": [
        {
          "id": "professional_products",
          "label": "Professional Products",
          "value": 5.2,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "consumer_products",
          "label": "Consumer Products",
          "value": 16.1,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "loreal_luxe",
          "label": "L'Oréal Luxe",
          "value": 15.6,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "active_cosmetics",
          "label": "Active Cosmetics",
          "value": 7.2,
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
        "value": 11.3
      },
      "operatingExpenses": {
        "total": 23.8,
        "items": [
          {
            "id": "advertising_promotion",
            "label": "Advertising & Promotion",
            "value": 14.2,
            "notes": [
              "32% of revenue"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 8.3,
            "notes": [
              "19% of revenue"
            ]
          },
          {
            "id": "research_innovation",
            "label": "Research & Innovation",
            "value": 1.4,
            "notes": [
              "3% of revenue"
            ]
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
      "total": 0.4,
      "items": [
        {
          "id": "sanofi_dividend",
          "label": "Sanofi Dividend",
          "value": 0.4
        }
      ]
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
        "value": 32.7,
        "notes": [
          "74% of revenue",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 8.9,
        "notes": [
          "20% of revenue",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 6.8,
        "notes": [
          "15% of revenue",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2025 年 12 月的年度",
        "revenue": {
          "notes": [
            "同比 +1%",
            "来源图金额经四舍五入：各事业部收入合计为 €44.1B；费用及营业利润以下的组成项与小计之间可能有 €0.1B 差异。"
          ],
          "items": [
            {
              "id": "professional_products",
              "label": "专业产品事业部",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "consumer_products",
              "label": "大众化妆品事业部",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "loreal_luxe",
              "label": "欧莱雅高档化妆品",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "active_cosmetics",
              "label": "皮肤科学美容事业部",
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
                "id": "advertising_promotion",
                "label": "广告与推广",
                "notes": [
                  "占收入 32%"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 19%"
                ]
              },
              {
                "id": "research_innovation",
                "label": "研发与创新",
                "notes": [
                  "占收入 3%"
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
              "id": "sanofi_dividend",
              "label": "赛诺菲股息"
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
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 20%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 15%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "loreal-h1-fy26",
    "company": "L'Oréal",
    "period": "H1 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/loreal-h1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 23.8,
      "notes": [
        "+6% Y/Y",
        "Source values are rounded: division revenue sums to €23.7B while reported revenue is €23.8B."
      ],
      "items": [
        {
          "id": "professional_products",
          "label": "Professional Products",
          "value": 2.9,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "consumer_products",
          "label": "Consumer Products",
          "value": 8.6,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "loreal_luxe",
          "label": "L'Oréal Luxe",
          "value": 8,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "active_cosmetics",
          "label": "Active Cosmetics",
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
        "value": 6
      },
      "operatingExpenses": {
        "total": 12.7,
        "items": [
          {
            "id": "advertising_promotion",
            "label": "Advertising & Promotion",
            "value": 7.7,
            "notes": [
              "33% of revenue"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4.3,
            "notes": [
              "18% of revenue"
            ]
          },
          {
            "id": "research_innovation",
            "label": "Research & Innovation",
            "value": 0.7,
            "notes": [
              "3% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.3
      }
    },
    "otherIncome": {
      "total": 0.4,
      "items": [
        {
          "id": "sanofi_dividend",
          "label": "Sanofi Dividend",
          "value": 0.4
        }
      ]
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
        "value": 17.8,
        "notes": [
          "75% of revenue",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.1,
        "notes": [
          "21% of revenue",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4,
        "notes": [
          "17% of revenue",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年上半年",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +6%",
            "来源图金额经四舍五入：各事业部收入合计为 €23.7B，而披露收入为 €23.8B。"
          ],
          "items": [
            {
              "id": "professional_products",
              "label": "专业产品事业部",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "consumer_products",
              "label": "大众化妆品事业部",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "loreal_luxe",
              "label": "欧莱雅高档化妆品",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "active_cosmetics",
              "label": "皮肤科学美容事业部",
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
                "id": "advertising_promotion",
                "label": "广告与推广",
                "notes": [
                  "占收入 33%"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 18%"
                ]
              },
              {
                "id": "research_innovation",
                "label": "研发与创新",
                "notes": [
                  "占收入 3%"
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
              "id": "sanofi_dividend",
              "label": "赛诺菲股息"
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
              "占收入 75%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 21%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 17%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "loreal-fy24",
    "company": "L'Oréal",
    "period": "FY24",
    "periodNote": "Year ended Dec. 2024",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/loreal-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 43.5,
      "notes": [
        "+6% Y/Y",
        "Source rounded figures retained: below-operating-profit components produce €6.7B versus displayed net profit €6.8B ; rounding difference €0.1B."
      ],
      "items": [
        {
          "id": "professional_products",
          "label": "Professional Products",
          "value": 4.9,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "consumer_products",
          "label": "Consumer Products",
          "value": 16,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "loreal_luxe",
          "label": "L'Oréal Luxe",
          "value": 15.6,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "active_cosmetics",
          "label": "Active Cosmetics",
          "value": 7,
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
        "value": 11.2
      },
      "operatingExpenses": {
        "total": 23.6,
        "items": [
          {
            "id": "advertising_promotion",
            "label": "Advertising & Promotion",
            "value": 14,
            "notes": [
              "32% of revenue"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 8.2,
            "notes": [
              "19% of revenue"
            ]
          },
          {
            "id": "research_innovation",
            "label": "Research & Innovation",
            "value": 1.4,
            "notes": [
              "3% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.1
      }
    },
    "otherIncome": {
      "total": 0.4,
      "items": [
        {
          "id": "sanofi_dividend",
          "label": "Sanofi Dividend",
          "value": 0.4
        }
      ]
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
        "value": 32.3,
        "notes": [
          "74% of revenue",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 8.7,
        "notes": [
          "20% of revenue",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 6.8,
        "notes": [
          "16% of revenue",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年",
        "periodNote": "截至 2024 年 12 月的年度",
        "revenue": {
          "notes": [
            "同比 +6%",
            "保留来源图舍入金额：营业利润、股息、税费和其他项计算为 €6.7B，原图净利润为 €6.8B，相差 €0.1B。"
          ],
          "items": [
            {
              "id": "professional_products",
              "label": "专业产品事业部",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "consumer_products",
              "label": "大众化妆品事业部",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "loreal_luxe",
              "label": "欧莱雅高档化妆品",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "active_cosmetics",
              "label": "皮肤科学美容事业部",
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
                "id": "advertising_promotion",
                "label": "广告与推广",
                "notes": [
                  "占收入 32%"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 19%"
                ]
              },
              {
                "id": "research_innovation",
                "label": "研发与创新",
                "notes": [
                  "占收入 3%"
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
              "id": "sanofi_dividend",
              "label": "赛诺菲股息"
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
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 20%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 16%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "loreal-h1-fy23",
    "company": "L'Oréal",
    "period": "H1 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "€",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/loreal-h1-fy23.png",
    "roundingTolerance": 0.1,
    "revenue": {
      "total": 20.6,
      "notes": [
        "+12% Y/Y",
        "Source rounded amounts retained: operating profit plus dividend less tax and Other equals €3.65B; displayed net profit is €3.6B."
      ],
      "items": [
        {
          "id": "professional_products",
          "label": "Professional Products",
          "value": 2.3,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "consumer_products",
          "label": "Consumer Products",
          "value": 7.7,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "loreal_luxe",
          "label": "L'Oréal Luxe",
          "value": 7.3,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "active_cosmetics",
          "label": "Active Cosmetics",
          "value": 3.3,
          "notes": [
            "+30% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 5.3
      },
      "operatingExpenses": {
        "total": 11,
        "items": [
          {
            "id": "advertising_promotion",
            "label": "Advertising & Promotion",
            "value": 6.7,
            "notes": [
              "32% of revenue"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3.7,
            "notes": [
              "18% of revenue"
            ]
          },
          {
            "id": "research_innovation",
            "label": "Research & Innovation",
            "value": 0.6,
            "notes": [
              "3% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1
      }
    },
    "otherIncome": {
      "total": 0.4,
      "items": [
        {
          "id": "sanofi_dividend",
          "label": "Sanofi Dividend",
          "value": 0.4
        }
      ]
    },
    "otherExpenses": {
      "total": 0.05,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.05
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 15.3,
        "notes": [
          "74% of revenue",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.3,
        "notes": [
          "21% of revenue",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.6,
        "notes": [
          "18% of revenue",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年上半年",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "notes": [
            "同比 +12%",
            "保留原图舍入金额：营业利润加股息减税费及其他为 €3.65B，原图净利润为 €3.6B。"
          ],
          "items": [
            {
              "id": "professional_products",
              "label": "专业产品事业部",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "consumer_products",
              "label": "大众化妆品事业部",
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "id": "loreal_luxe",
              "label": "欧莱雅高档化妆品",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "id": "active_cosmetics",
              "label": "皮肤科学美容事业部",
              "notes": [
                "同比 +30%"
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
                "id": "advertising_promotion",
                "label": "广告与推广",
                "notes": [
                  "占收入 32%"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 18%"
                ]
              },
              {
                "id": "research_innovation",
                "label": "研发与创新",
                "notes": [
                  "占收入 3%"
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
              "id": "sanofi_dividend",
              "label": "赛诺菲股息"
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
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 21%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 18%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "loreal-fy23",
    "company": "L'Oréal",
    "period": "FY23",
    "periodNote": "Year ended Dec. 2023",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/loreal-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 41.2,
      "notes": [
        "+8% Y/Y",
        "Source rounded figures retained: operating profit plus Sanofi dividend less tax and Other is €6.4B; source net profit is €6.5B."
      ],
      "items": [
        {
          "id": "professional_products",
          "label": "Professional Products",
          "value": 4.7,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "consumer_products",
          "label": "Consumer Products",
          "value": 15.2,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "loreal_luxe",
          "label": "L'Oréal Luxe",
          "value": 14.9,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "active_cosmetics",
          "label": "Active Cosmetics",
          "value": 6.4,
          "notes": [
            "+26% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 10.8
      },
      "operatingExpenses": {
        "total": 22.3,
        "items": [
          {
            "id": "advertising_promotion",
            "label": "Advertising & Promotion",
            "value": 13.4,
            "notes": [
              "32% of revenue"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 7.6,
            "notes": [
              "19% of revenue"
            ]
          },
          {
            "id": "research_innovation",
            "label": "Research & Innovation",
            "value": 1.3,
            "notes": [
              "3% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2
      }
    },
    "otherIncome": {
      "total": 0.4,
      "items": [
        {
          "id": "sanofi_dividend",
          "label": "Sanofi Dividend",
          "value": 0.4
        }
      ]
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
        "value": 30.4,
        "notes": [
          "74% of revenue",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 8.1,
        "notes": [
          "20% of revenue",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 6.5,
        "notes": [
          "16% of revenue",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年",
        "periodNote": "截至 2023 年 12 月的年度",
        "revenue": {
          "notes": [
            "同比 +8%",
            "保留来源图舍入金额：营业利润加赛诺菲股息、减税费与其他项为 €6.4B，原图净利润为 €6.5B。"
          ],
          "items": [
            {
              "id": "professional_products",
              "label": "专业产品事业部",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "consumer_products",
              "label": "大众化妆品事业部",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "loreal_luxe",
              "label": "欧莱雅高档化妆品",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "active_cosmetics",
              "label": "皮肤科学美容事业部",
              "notes": [
                "同比 +26%"
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
                "id": "advertising_promotion",
                "label": "广告与推广",
                "notes": [
                  "占收入 32%"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 19%"
                ]
              },
              {
                "id": "research_innovation",
                "label": "研发与创新",
                "notes": [
                  "占收入 3%"
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
              "id": "sanofi_dividend",
              "label": "赛诺菲股息"
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
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 20%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 16%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "loreal-h1-fy22",
    "company": "L'Oréal",
    "period": "H1 FY22",
    "periodNote": "Ending Jun. 2022",
    "currency": "€",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/loreal-h1-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 18.4,
      "notes": [
        "+21% Y/Y",
        "Source rounding retained: revenue less cost of sales is €13.5B versus displayed gross profit €13.4B; below-operating components yield €3.283B versus displayed net €3.3B."
      ],
      "items": [
        {
          "id": "professional_products",
          "label": "Professional Products",
          "value": 2.2,
          "notes": [
            "+22% Y/Y"
          ]
        },
        {
          "id": "consumer_products",
          "label": "Consumer Products",
          "value": 6.8,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "loreal_luxe",
          "label": "L'Oréal Luxe",
          "value": 6.9,
          "notes": [
            "+26% Y/Y"
          ]
        },
        {
          "id": "active_cosmetics",
          "label": "Active Cosmetics",
          "value": 2.5,
          "notes": [
            "+28% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 4.9
      },
      "operatingExpenses": {
        "total": 9.7,
        "items": [
          {
            "id": "advertising_promotion",
            "label": "Advertising & Promotion",
            "value": 5.8,
            "notes": [
              "32% of revenue"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3.4,
            "notes": [
              "18% of revenue"
            ]
          },
          {
            "id": "research_innovation",
            "label": "Research & Innovation",
            "value": 0.5,
            "notes": [
              "3% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.9
      }
    },
    "otherIncome": {
      "total": 0.5,
      "items": [
        {
          "id": "sanofi_dividend",
          "label": "Sanofi Dividend",
          "value": 0.5
        }
      ]
    },
    "otherExpenses": {
      "total": 0.017,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.017
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 13.4,
        "notes": [
          "73% of revenue",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.7,
        "notes": [
          "20% of revenue",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.3,
        "notes": [
          "18% of revenue",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年上半年",
        "periodNote": "截至 2022 年 6 月",
        "revenue": {
          "notes": [
            "同比 +21%",
            "保留原图舍入金额：收入减销售成本为 €13.5B，原图毛利润为 €13.4B；营业利润加股息减税及其他为 €3.283B，原图净利润为 €3.3B。"
          ],
          "items": [
            {
              "id": "professional_products",
              "label": "专业产品事业部",
              "notes": [
                "同比 +22%"
              ]
            },
            {
              "id": "consumer_products",
              "label": "大众化妆品事业部",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "loreal_luxe",
              "label": "欧莱雅高档化妆品",
              "notes": [
                "同比 +26%"
              ]
            },
            {
              "id": "active_cosmetics",
              "label": "皮肤科学美容事业部",
              "notes": [
                "同比 +28%"
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
                "id": "advertising_promotion",
                "label": "广告与推广",
                "notes": [
                  "占收入 32%"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 18%"
                ]
              },
              {
                "id": "research_innovation",
                "label": "研发与创新",
                "notes": [
                  "占收入 3%"
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
              "id": "sanofi_dividend",
              "label": "赛诺菲股息"
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
              "同比 -1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 20%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 18%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "loreal-fy22",
    "company": "L'Oréal",
    "period": "FY22",
    "periodNote": "Year ended Dec. 2022",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/loreal-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 38.3,
      "notes": [
        "+18% Y/Y",
        "+11% fx neutral",
        "Source rounded division revenue sums to €38.2B versus reported €38.3B."
      ],
      "items": [
        {
          "id": "professional_products",
          "label": "Professional Products",
          "value": 4.5,
          "notes": [
            "+18% Y/Y"
          ]
        },
        {
          "id": "consumer_products",
          "label": "Consumer Products",
          "value": 14,
          "notes": [
            "+15% Y/Y"
          ]
        },
        {
          "id": "loreal_luxe",
          "label": "L'Oréal Luxe",
          "value": 14.6,
          "notes": [
            "+19% Y/Y"
          ]
        },
        {
          "id": "active_cosmetics",
          "label": "Active Cosmetics",
          "value": 5.1,
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
        "value": 10.6
      },
      "operatingExpenses": {
        "total": 20.2,
        "items": [
          {
            "id": "advertising_promotion",
            "label": "Advertising & Promotion",
            "value": 12.1,
            "notes": [
              "32% of revenue"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 7,
            "notes": [
              "18% of revenue"
            ]
          },
          {
            "id": "research_innovation",
            "label": "Research & Innovation",
            "value": 1.1,
            "notes": [
              "3% of revenue"
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.9
      }
    },
    "otherIncome": {
      "total": 0.5,
      "items": [
        {
          "id": "sanofi_dividend",
          "label": "Sanofi Dividend",
          "value": 0.5
        }
      ]
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
        "value": 27.7,
        "notes": [
          "72% of revenue",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 7.5,
        "notes": [
          "19% of revenue",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 5.7,
        "notes": [
          "15% of revenue",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年",
        "periodNote": "截至 2022 年 12 月的年度",
        "revenue": {
          "notes": [
            "同比 +18%",
            "汇率中性增长 +11%",
            "来源图分部收入经舍入后合计 €38.2B，披露总收入 €38.3B。"
          ],
          "items": [
            {
              "id": "professional_products",
              "label": "专业产品事业部",
              "notes": [
                "同比 +18%"
              ]
            },
            {
              "id": "consumer_products",
              "label": "大众化妆品事业部",
              "notes": [
                "同比 +15%"
              ]
            },
            {
              "id": "loreal_luxe",
              "label": "欧莱雅高档化妆品",
              "notes": [
                "同比 +19%"
              ]
            },
            {
              "id": "active_cosmetics",
              "label": "皮肤科学美容事业部",
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
                "id": "advertising_promotion",
                "label": "广告与推广",
                "notes": [
                  "占收入 32%"
                ]
              },
              {
                "id": "sga",
                "label": "销售、一般及管理费用",
                "notes": [
                  "占收入 18%"
                ]
              },
              {
                "id": "research_innovation",
                "label": "研发与创新",
                "notes": [
                  "占收入 3%"
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
              "id": "sanofi_dividend",
              "label": "赛诺菲股息"
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
              "占收入 72%",
              "同比 -2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "占收入 19%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "占收入 15%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
