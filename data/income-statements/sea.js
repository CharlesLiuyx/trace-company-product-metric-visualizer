/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "sea-q3-fy25",
    "company": "Sea",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/sea-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6,
      "notes": [
        "+38% Y/Y",
        "Segment revenue detail sums to $6.047B due to the $47M Other Services line and rounded segment figures.",
        "Shopee Marketplace: $3.8B, +37% Y/Y. Garena Bookings: $0.8B, +51% Y/Y."
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 4.3,
          "notes": [
            "+35% Y/Y",
            "E-commerce"
          ]
        },
        {
          "id": "monee",
          "label": "Monee",
          "value": 1,
          "valueText": "$1.0B",
          "notes": [
            "+61% Y/Y",
            "Digital Financial Services"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.7,
          "notes": [
            "+31% Y/Y",
            "Digital Entertainment"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.047,
          "valueText": "$47M"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.4
      },
      "operatingExpenses": {
        "total": 2.1,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.1,
            "notes": [
              "19% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "5% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.4,
            "notes": [
              "6% of revenue",
              "+1pp Y/Y"
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
      "total": 0.027,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.027,
          "valueText": "$27M"
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
        "notes": [
          "43% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "8% margin",
          "+3pp Y/Y",
          "Segment operating profit: Shopee $0.1B; Monee $0.2B; Garena $0.3B; Other ($0.2B)."
        ]
      },
      "net": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "revenue": {
          "notes": [
            "同比 +38%",
            "因 $47M 的其他服务收入和分部数字四舍五入，分部收入合计为 $6.047B。",
            "Shopee Marketplace：$3.8B，同比 +37%。Garena 预订额：$0.8B，同比 +51%。"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +35%",
                "电商"
              ]
            },
            {
              "id": "monee",
              "label": "Monee 金融服务",
              "notes": [
                "同比 +61%",
                "数字金融服务"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 +31%",
                "数字娱乐"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 19%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 5%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": "信用损失拨备",
                "notes": [
                  "占收入 6%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "源图未显示单独税费项目。"
            ]
          }
        },
        "otherIncome": {
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
              "毛利率 43%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +3 个百分点",
              "分部营业利润：Shopee $0.1B；Monee $0.2B；Garena $0.3B；其他 ($0.2B)。"
            ]
          },
          "net": {
            "label": "营业利润"
          }
        }
      }
    }
  },
  {
    "key": "sea-q4-fy25",
    "company": "Sea",
    "period": "Q4 FY25",
    "periodNote": "Ending Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sea-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 6.9,
      "notes": [
        "+38% Y/Y",
        "Segment revenue detail sums to $6.842B due to the $42M Other Services line and rounded segment figures.",
        "Shopee Marketplace: $3.6B, +50% Y/Y. Garena Bookings: $0.7B, +24% Y/Y and (20%) Q/Q."
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 5,
          "notes": [
            "+36% Y/Y",
            "E-commerce"
          ]
        },
        {
          "id": "monee",
          "label": "Monee",
          "value": 1.1,
          "notes": [
            "+54% Y/Y",
            "Digital Financial Services"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.7,
          "notes": [
            "+35% Y/Y",
            "Digital Entertainment"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.042,
          "valueText": "$42M"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 3.9
      },
      "operatingExpenses": {
        "total": 2.4,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.4,
            "notes": [
              "20% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "6% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "4% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.4,
            "notes": [
              "6% of revenue",
              "+1pp Y/Y"
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
      "total": 0.027,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.027,
          "valueText": "$27M"
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
          "44% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "8% margin",
          "+2pp Y/Y",
          "Segment operating profit: Shopee $0.1B; Monee $0.3B; Garena $0.4B; Other ($0.2B)."
        ]
      },
      "net": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 +38%",
            "因 $42M 的其他服务收入和分部数字四舍五入，分部收入合计为 $6.842B。",
            "Shopee Marketplace：$3.6B，同比 +50%。Garena 预订额：$0.7B，同比 +24%，环比 (20%)。"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +36%",
                "电商"
              ]
            },
            {
              "id": "monee",
              "label": "Monee 金融服务",
              "notes": [
                "同比 +54%",
                "数字金融服务"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 +35%",
                "数字娱乐"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 20%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 6%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 4%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": "信用损失拨备",
                "notes": [
                  "占收入 6%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "源图未显示单独税费项目。"
            ]
          }
        },
        "otherIncome": {
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
              "毛利率 44%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 +2 个百分点",
              "分部营业利润：Shopee $0.1B；Monee $0.3B；Garena $0.4B；其他 ($0.2B)。"
            ]
          },
          "net": {
            "label": "营业利润"
          }
        }
      }
    }
  },
  {
    "key": "sea-q1-fy26",
    "company": "Sea",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/sea-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.1,
      "notes": [
        "+47% Y/Y",
        "Segment revenue detail sums to $7.046B due to the $46M Other Services line and rounded segment figures.",
        "Shopee Marketplace: $3.8B, +61% Y/Y. Garena Bookings: $0.9B, +20% Y/Y."
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 5.1,
          "notes": [
            "+45% Y/Y",
            "E-commerce"
          ]
        },
        {
          "id": "monee",
          "label": "Monee",
          "value": 1.2,
          "notes": [
            "+58% Y/Y",
            "Digital Financial Services"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.7,
          "notes": [
            "+41% Y/Y",
            "Digital Entertainment"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.046,
          "valueText": "$46M"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 4
      },
      "operatingExpenses": {
        "total": 2.6,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.4,
            "notes": [
              "20% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "4% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.5,
            "notes": [
              "7% of revenue",
              "+1pp Y/Y"
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
      "total": 0.028,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.028,
          "valueText": "$28M"
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
          "44% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "8% margin",
          "(1pp) Y/Y",
          "Segment operating profit: Shopee $0.1B; Monee $0.3B; Garena $0.4B; Other ($0.2B)."
        ]
      },
      "net": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +47%",
            "因 $46M 的其他服务收入和分部数字四舍五入，分部收入合计为 $7.046B。",
            "Shopee Marketplace：$3.8B，同比 +61%。Garena 预订额：$0.9B，同比 +20%。"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +45%",
                "电商"
              ]
            },
            {
              "id": "monee",
              "label": "Monee 金融服务",
              "notes": [
                "同比 +58%",
                "数字金融服务"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 +41%",
                "数字娱乐"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 20%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 4%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": "信用损失拨备",
                "notes": [
                  "占收入 7%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "源图未显示单独税费项目。"
            ]
          }
        },
        "otherIncome": {
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
              "毛利率 44%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 8%",
              "同比 (1 个百分点)",
              "分部营业利润：Shopee $0.1B；Monee $0.3B；Garena $0.4B；其他 ($0.2B)。"
            ]
          },
          "net": {
            "label": "营业利润"
          }
        }
      }
    }
  },
  {
    "key": "sea-q2-fy26",
    "company": "Sea",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 7.8,
      "notes": [
        "+48% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 5.6,
          "notes": [
            "+48% Y/Y",
            "E-commerce"
          ]
        },
        {
          "id": "monee",
          "label": "Monee",
          "value": 1.4,
          "notes": [
            "+59% Y/Y",
            "Digital Financial Services"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.7,
          "notes": [
            "+34% Y/Y",
            "Digital Entertainment"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.1,
          "valueText": "$0.1B"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 4.2
      },
      "operatingExpenses": {
        "total": 2.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1.7,
            "notes": [
              "21% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "notes": [
              "5% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "4% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.6,
            "notes": [
              "7% of revenue",
              "+1pp Y/Y"
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
      "total": 0.024,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.024,
          "valueText": "$24M"
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
        "value": 3.6,
        "notes": [
          "46% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6,
        "notes": [
          "8% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.6
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
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +48%",
                "电商"
              ]
            },
            {
              "id": "monee",
              "label": "Monee 金融服务",
              "notes": [
                "同比 +59%",
                "数字金融服务"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 +34%",
                "数字娱乐"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 21%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 5%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 4%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": "信用损失拨备",
                "notes": [
                  "占收入 7%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "源图未显示单独税费项目。"
            ]
          }
        },
        "otherIncome": {
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
              "毛利率 46%",
              "同比 (0 个百分点)"
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
            "label": "营业利润"
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee-marketplace",
            "label": "Shopee 市场",
            "notes": [
              "同比 +66%"
            ]
          },
          {
            "id": "garena-bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 +15%"
            ]
          },
          {
            "id": "shopee-operating-profit",
            "label": "Shopee 营业利润",
            "notes": []
          },
          {
            "id": "monee-operating-profit",
            "label": "Monee 营业利润",
            "notes": []
          },
          {
            "id": "garena-operating-profit",
            "label": "Garena 营业利润",
            "notes": []
          },
          {
            "id": "other-operating-profit",
            "label": "其他营业利润",
            "notes": []
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "shopee-marketplace",
        "label": "Shopee Marketplace",
        "value": "4.3",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$4.3B",
        "basis": "unspecified",
        "notes": [
          "+66% Y/Y"
        ],
        "quote": "Shopee Marketplace $4.3B +66% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1258,
            430,
            99
          ]
        }
      },
      {
        "id": "garena-bookings",
        "label": "Garena Bookings",
        "value": "0.8",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.8B",
        "basis": "unspecified",
        "notes": [
          "+15% Y/Y"
        ],
        "quote": "Garena Bookings $0.8B +15% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            472,
            1258,
            379,
            99
          ]
        }
      },
      {
        "id": "shopee-operating-profit",
        "label": "Shopee",
        "value": "0.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.2B",
        "basis": "unspecified",
        "notes": [],
        "quote": "Shopee $0.2B",
        "anchor": {
          "type": "image-box",
          "box": [
            2058,
            301,
            225,
            41
          ]
        }
      },
      {
        "id": "monee-operating-profit",
        "label": "monee",
        "value": "0.3",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.3B",
        "basis": "unspecified",
        "notes": [],
        "quote": "monee $0.3B",
        "anchor": {
          "type": "image-box",
          "box": [
            2058,
            360,
            225,
            41
          ]
        }
      },
      {
        "id": "garena-operating-profit",
        "label": "Garena",
        "value": "0.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.4B",
        "basis": "unspecified",
        "notes": [],
        "quote": "Garena $0.4B",
        "anchor": {
          "type": "image-box",
          "box": [
            2058,
            420,
            225,
            41
          ]
        }
      },
      {
        "id": "other-operating-profit",
        "label": "Other",
        "value": "-0.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "($0.2B)",
        "basis": "unspecified",
        "notes": [],
        "quote": "Other ($0.2B)",
        "anchor": {
          "type": "image-box",
          "box": [
            2058,
            478,
            225,
            42
          ]
        }
      }
    ]
  },
  {
    "key": "sea-q3-fy24",
    "company": "Sea",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.3,
      "notes": [
        "+31% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 3.2,
          "valueText": "$3.2B",
          "notes": [
            "+43% Y/Y"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.5,
          "valueText": "$0.5B",
          "notes": [
            "(16%) Y/Y"
          ]
        },
        {
          "id": "seamoney",
          "label": "SeaMoney",
          "value": 0.6,
          "valueText": "$0.6B",
          "notes": [
            "+38% Y/Y"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.031,
          "valueText": "$31M",
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.5,
        "valueText": "($2.5B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.7,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.9,
            "valueText": "($0.9B)",
            "notes": [
              "20% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.2,
            "valueText": "($0.2B)",
            "notes": [
              "5% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.041,
      "items": [
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.041,
          "valueText": "$41M",
          "notes": []
        }
      ]
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
        "value": 1.9,
        "valueText": "$1.9B",
        "notes": [
          "43% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.2,
        "valueText": "$0.2B",
        "notes": [
          "5% margin",
          "+9pp Y/Y"
        ],
        "items": [
          {
            "id": "shopee_op",
            "label": "Shopee",
            "value": -0.037,
            "valueText": "($37M)",
            "notes": []
          },
          {
            "id": "garena_op",
            "label": "Garena",
            "value": 0.2,
            "valueText": "$0.2B",
            "notes": []
          },
          {
            "id": "seamoney_op",
            "label": "SeaMoney",
            "value": 0.2,
            "valueText": "$0.2B",
            "notes": []
          },
          {
            "id": "other_op",
            "label": "Other",
            "value": -0.2,
            "valueText": "($0.2B)",
            "notes": []
          }
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating profit."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "shopee-marketplace",
        "label": "Shopee Marketplace",
        "value": "2.8",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.8B",
        "basis": "unspecified",
        "notes": [
          "+43% Y/Y"
        ],
        "quote": "Shopee Marketplace $2.8B +43% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1245,
            430,
            100
          ]
        }
      },
      {
        "id": "garena-bookings",
        "label": "Garena Bookings",
        "value": "0.6",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.6B",
        "basis": "unspecified",
        "notes": [
          "+24% Y/Y and +4% Q/Q"
        ],
        "quote": "Garena Bookings $0.6B +24% Y/Y and +4% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            471,
            1245,
            380,
            100
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 +31%"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +43%"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 (16%)"
              ]
            },
            {
              "id": "seamoney",
              "label": "SeaMoney 金融服务",
              "notes": [
                "同比 +38%"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务",
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 20%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": "信用损失拨备",
                "notes": [
                  "占收入 5%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          }
        },
        "operatingOtherIncome": {
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
              "毛利率 43%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 5%",
              "同比 +9 个百分点"
            ],
            "items": [
              {
                "id": "shopee_op",
                "label": "Shopee 营业利润"
              },
              {
                "id": "garena_op",
                "label": "Garena 营业利润"
              },
              {
                "id": "seamoney_op",
                "label": "SeaMoney 营业利润"
              },
              {
                "id": "other_op",
                "label": "其他"
              }
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "源图截至营业利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee-marketplace",
            "label": "Shopee 市场",
            "notes": [
              "同比 +43%"
            ]
          },
          {
            "id": "garena-bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 +24%，环比 +4%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "sea-q1-fy23",
    "company": "Sea",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 2.1,
          "notes": [
            "同比 +36%"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.5,
          "notes": [
            "同比 (52%)"
          ]
        },
        {
          "id": "seamoney",
          "label": "SeaMoney",
          "value": 0.4,
          "notes": [
            "同比 +75%"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.022,
          "valueText": "$22M",
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.6
      },
      "operatingExpenses": {
        "total": 1.3,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.4,
            "notes": [
              "占收入 13%",
              "同比 (22 个百分点)"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "占收入 11%",
              "同比 +0 个百分点"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "占收入 11%",
              "同比 (1 个百分点)"
            ]
          },
          {
            "id": "credit_losses",
            "label": [
              "Provision for",
              "credit losses"
            ],
            "value": 0.2,
            "notes": []
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 0.1,
            "notes": []
          }
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.1
        }
      ]
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
          "47% margin",
          "+6pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "notes": [
          "4% margin",
          "+21pp Y/Y"
        ],
        "items": [
          {
            "id": "garena_op",
            "label": "Garena",
            "value": 0.3
          },
          {
            "id": "shopee_op",
            "label": "Shopee",
            "value": 0.1
          },
          {
            "id": "seamoney_op",
            "label": "SeaMoney",
            "value": 0.1
          },
          {
            "id": "other_op",
            "label": "Other",
            "value": -0.4
          }
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating profit."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "shopee-marketplace",
        "label": "Shopee Marketplace",
        "value": "1.8",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.8B",
        "quote": "Shopee Marketplace $1.8B +46% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+46% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1287,
            430,
            99
          ]
        }
      },
      {
        "id": "garena-bookings",
        "label": "Garena Bookings",
        "value": "0.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.5B",
        "quote": "Garena Bookings $0.5B (44%) Y/Y and (15%) Q/Q",
        "basis": "unspecified",
        "notes": [
          "(44%) Y/Y and (15%) Q/Q"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            471,
            1287,
            380,
            99
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +36%"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 (52%)"
              ]
            },
            {
              "id": "seamoney",
              "label": "SeaMoney 金融服务",
              "notes": [
                "同比 +75%"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务",
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 13%",
                  "同比 (22 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 11%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 11%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": [
                  "信用",
                  "损失拨备"
                ],
                "notes": []
              },
              {
                "id": "impairment",
                "label": "减值",
                "notes": []
              }
            ]
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": [
              "毛",
              "利润"
            ],
            "notes": [
              "毛利率 47%",
              "同比 +6 个百分点"
            ]
          },
          "operating": {
            "label": [
              "营业",
              "利润"
            ],
            "notes": [
              "利润率 4%",
              "同比 +21 个百分点"
            ],
            "items": [
              {
                "id": "garena_op",
                "label": "Garena 营业利润"
              },
              {
                "id": "shopee_op",
                "label": "Shopee 营业利润"
              },
              {
                "id": "seamoney_op",
                "label": "SeaMoney 营业利润"
              },
              {
                "id": "other_op",
                "label": "其他"
              }
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图止于营业利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee-marketplace",
            "label": "Shopee 市场",
            "notes": [
              "同比 +46%"
            ]
          },
          {
            "id": "garena-bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 (44%)，环比 (15%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "sea-q2-fy23",
    "company": "Sea",
    "period": "Q2 FY23",
    "periodNote": "Ending Jun. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.1,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 2.1,
          "notes": [
            "+21% Y/Y",
            "E-commerce"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.5,
          "notes": [
            "(41%) Y/Y",
            "Digital Entertainment"
          ]
        },
        {
          "id": "monee",
          "label": "SeaMoney",
          "value": 0.4,
          "notes": [
            "+53% Y/Y",
            "Digital Financial Services"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.028,
          "valueText": "$28M",
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.6,
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.2,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5,
            "notes": [
              "16% of revenue",
              "(17pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "10% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "9% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.2,
            "notes": [
              "4% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Tax",
        "notes": [
          "No separate tax item shown in Source."
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other income",
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
      "total": 0,
      "items": []
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.5,
        "notes": [
          "47% margin",
          "+10pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "notes": [
          "9% margin",
          "+39pp Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating profit."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "shopee-marketplace",
        "label": "Shopee Marketplace",
        "value": "1.9",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.9B",
        "basis": "unspecified",
        "notes": [
          "+28% Y/Y"
        ],
        "quote": "Shopee Marketplace $1.9B +28% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1288,
            430,
            98
          ]
        }
      },
      {
        "id": "garena-bookings",
        "label": "Garena Bookings",
        "value": "0.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.4B",
        "basis": "unspecified",
        "notes": [
          "(38%) Y/Y and (4%) Q/Q"
        ],
        "quote": "Garena Bookings $0.4B (38%) Y/Y and (4%) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            473,
            1288,
            379,
            98
          ]
        }
      },
      {
        "id": "garena-operating-profit",
        "label": "Garena",
        "value": "0.3",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.3B",
        "basis": "unspecified",
        "notes": [],
        "quote": "Garena $0.3B",
        "anchor": {
          "type": "image-box",
          "box": [
            2026,
            318,
            259,
            51
          ]
        }
      },
      {
        "id": "shopee-operating-profit",
        "label": "Shopee",
        "value": "0.1",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.1B",
        "basis": "unspecified",
        "notes": [],
        "quote": "Shopee $0.1B",
        "anchor": {
          "type": "image-box",
          "box": [
            2026,
            372,
            259,
            55
          ]
        }
      },
      {
        "id": "monee-operating-profit",
        "label": "SeaMoney",
        "value": "0.1",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.1B",
        "basis": "unspecified",
        "notes": [],
        "quote": "SeaMoney $0.1B",
        "anchor": {
          "type": "image-box",
          "box": [
            2026,
            440,
            259,
            44
          ]
        }
      },
      {
        "id": "other-operating-profit",
        "label": "Other",
        "value": "-0.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "($0.2B)",
        "basis": "unspecified",
        "notes": [],
        "quote": "Other ($0.2B)",
        "anchor": {
          "type": "image-box",
          "box": [
            2071,
            504,
            216,
            39
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月",
        "revenue": {
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +21%",
                "电商"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 (41%)",
                "数字娱乐"
              ]
            },
            {
              "id": "monee",
              "label": "SeaMoney 金融服务",
              "notes": [
                "同比 +53%",
                "数字金融服务"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务",
              "notes": []
            }
          ]
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他收入"
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "shopee-marketplace",
            "label": "Shopee 市场",
            "notes": [
              "同比 +28%"
            ]
          },
          {
            "id": "garena-bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 (38%)，环比 (4%)"
            ]
          },
          {
            "id": "garena-operating-profit",
            "label": "Garena 营业利润",
            "notes": []
          },
          {
            "id": "shopee-operating-profit",
            "label": "Shopee 营业利润",
            "notes": []
          },
          {
            "id": "monee-operating-profit",
            "label": "SeaMoney 营业利润",
            "notes": []
          },
          {
            "id": "other-operating-profit",
            "label": "其他营业利润",
            "notes": []
          }
        ],
        "costs": {
          "tax": {
            "label": "税费",
            "notes": [
              "原图未单独披露税费项目。"
            ]
          }
        },
        "profit": {
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图截止营业利润。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "sea-q4-fy24",
    "company": "Sea",
    "period": "Q4 FY24",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5,
      "notes": [
        "+37% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 3.7,
          "valueText": "$3.7B",
          "notes": [
            "+41% Y/Y"
          ]
        },
        {
          "id": "seamoney",
          "label": "SeaMoney",
          "value": 0.7,
          "valueText": "$0.7B",
          "notes": [
            "+55% Y/Y"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.5,
          "valueText": "$0.5B",
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.035,
          "valueText": "$35M",
          "notes": []
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
        "value": 2.7,
        "valueText": "($2.7B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1,
            "valueText": "($1.0B)",
            "notes": [
              "21% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "valueText": "($0.4B)",
            "notes": [
              "7% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "6% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": [
              "Provision for",
              "credit losses"
            ],
            "value": 0.2,
            "valueText": "($0.2B)",
            "notes": [
              "5% of revenue",
              "+0pp Y/Y"
            ]
          }
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.1,
          "valueText": "$0.1B",
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": [
          "Gross",
          "profit"
        ],
        "value": 2.2,
        "valueText": "$2.2B",
        "notes": [
          "45% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": [
          "Operating",
          "profit"
        ],
        "value": 0.3,
        "valueText": "$0.3B",
        "notes": [
          "6% margin",
          "+8pp Y/Y"
        ],
        "items": [
          {
            "id": "shopee_op",
            "label": "Shopee",
            "value": 0.1,
            "valueText": "$0.1B"
          },
          {
            "id": "seamoney_op",
            "label": "SeaMoney",
            "value": 0.2,
            "valueText": "$0.2B"
          },
          {
            "id": "garena_op",
            "label": "Garena",
            "value": 0.3,
            "valueText": "$0.3B"
          },
          {
            "id": "other_op",
            "label": "Other",
            "value": -0.2,
            "valueText": "($0.2B)"
          }
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating profit."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "shopee-marketplace",
        "value": "2.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.4B",
        "label": "Shopee Marketplace",
        "quote": "Shopee Marketplace $2.4B +50% Y/Y",
        "basis": "unspecified",
        "notes": [
          "+50% Y/Y"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1258,
            430,
            99
          ]
        }
      },
      {
        "id": "garena-bookings",
        "value": "0.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.5B",
        "label": "Garena Bookings",
        "quote": "Garena Bookings $0.5B +19% Y/Y and (2%) Q/Q",
        "basis": "unspecified",
        "notes": [
          "+19% Y/Y and (2%) Q/Q"
        ],
        "anchor": {
          "type": "image-box",
          "box": [
            471,
            1258,
            380,
            99
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月",
        "revenue": {
          "notes": [
            "同比 +37%"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +41%"
              ]
            },
            {
              "id": "seamoney",
              "label": "SeaMoney 金融服务",
              "notes": [
                "同比 +55%"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务",
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 21%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 7%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 6%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": [
                  "信用损失",
                  "拨备"
                ],
                "notes": [
                  "占收入 5%",
                  "同比 +0 个百分点"
                ]
              }
            ]
          }
        },
        "operatingOtherIncome": {
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
              "毛利率 45%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 6%",
              "同比 +8 个百分点"
            ],
            "items": [
              {
                "id": "shopee_op",
                "label": "Shopee 营业利润"
              },
              {
                "id": "seamoney_op",
                "label": "SeaMoney 营业利润"
              },
              {
                "id": "garena_op",
                "label": "Garena 营业利润"
              },
              {
                "id": "other_op",
                "label": "其他"
              }
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "源图止于营业利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee-marketplace",
            "label": "Shopee 市场",
            "notes": [
              "同比 +50%"
            ]
          },
          {
            "id": "garena-bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 +19%，环比 (2%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "sea-q2-fy25",
    "company": "Sea",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 5.3,
      "notes": [
        "+38% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 3.8,
          "valueText": "$3.8B",
          "notes": [
            "+34% Y/Y",
            "E-commerce"
          ]
        },
        {
          "id": "monee",
          "label": "Monee",
          "value": 0.9,
          "valueText": "$0.9B",
          "notes": [
            "+70% Y/Y",
            "Digital Financial Services"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.6,
          "valueText": "$0.6B",
          "notes": [
            "+28% Y/Y",
            "Digital Entertainment"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.033,
          "valueText": "$33M",
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.9
      },
      "operatingExpenses": {
        "total": 1.9,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1,
            "notes": [
              "19% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "6% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "6% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.3,
            "notes": [
              "6% of revenue",
              "+2pp Y/Y"
            ]
          }
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.032,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.032,
          "valueText": "$32M"
        }
      ]
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
        "value": 2.4,
        "notes": [
          "46% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "9% margin",
          "+7pp Y/Y"
        ],
        "items": [
          {
            "id": "op_shopee",
            "label": "Shopee",
            "value": 0.2
          },
          {
            "id": "op_monee",
            "label": "monee",
            "value": 0.2
          },
          {
            "id": "op_garena",
            "label": "Garena",
            "value": 0.3
          },
          {
            "id": "op_other",
            "label": "Other",
            "value": -0.2
          }
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating profit."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "shopee-marketplace",
        "label": "Shopee Marketplace",
        "value": "3.3",
        "literal": "$3.3B",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+34% Y/Y"
        ],
        "quote": "Shopee Marketplace $3.3B +34% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1258,
            430,
            99
          ]
        }
      },
      {
        "id": "garena-bookings",
        "label": "Garena Bookings",
        "value": "0.7",
        "literal": "$0.7B",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Garena Bookings $0.7B +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            472,
            1258,
            379,
            99
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "revenue": {
          "notes": [
            "同比 +38%"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +34%",
                "电商"
              ]
            },
            {
              "id": "monee",
              "label": "Monee 金融服务",
              "notes": [
                "同比 +70%",
                "数字金融服务"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 +28%",
                "数字娱乐"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 19%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 6%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 6%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": "信用损失拨备",
                "notes": [
                  "占收入 6%",
                  "同比 +2 个百分点"
                ]
              }
            ]
          }
        },
        "operatingOtherIncome": {
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
              "毛利率 46%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 9%",
              "同比 +7 个百分点"
            ],
            "items": [
              {
                "id": "op_shopee",
                "label": "Shopee 营业利润"
              },
              {
                "id": "op_monee",
                "label": "monee 营业利润"
              },
              {
                "id": "op_garena",
                "label": "Garena 营业利润"
              },
              {
                "id": "op_other",
                "label": "其他"
              }
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图仅列示至营业利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee-marketplace",
            "label": "Shopee 市场",
            "notes": [
              "同比 +34%"
            ]
          },
          {
            "id": "garena-bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 +23%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "sea-q4-fy23",
    "company": "Sea",
    "period": "Q4 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.6,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 2.6,
          "valueText": "$2.6B",
          "notes": [
            "+23% Y/Y"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.5,
          "valueText": "$0.5B",
          "notes": [
            "(46%) Y/Y"
          ]
        },
        {
          "id": "seamoney",
          "label": "SeaMoney",
          "value": 0.5,
          "valueText": "$0.5B",
          "notes": [
            "+24% Y/Y"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.042,
          "valueText": "$42M",
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.1,
        "valueText": "($2.1B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.6,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 1,
            "valueText": "($1.0B)",
            "notes": [
              "27% of revenue",
              "+13pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "8% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.2,
            "valueText": "($0.2B)",
            "notes": [
              "6% of revenue",
              "(4pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.2,
            "valueText": "($0.2B)",
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.059,
      "items": [
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.059,
          "valueText": "$59M",
          "notes": []
        }
      ]
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
        "value": 1.5,
        "valueText": "$1.5B",
        "notes": [
          "42% margin",
          "(7pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.056,
        "valueText": "($56M)",
        "notes": [
          "(2%) margin",
          "(14pp) Y/Y"
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
        "id": "shopee-marketplace",
        "label": "Shopee Marketplace",
        "value": "2.3",
        "literal": "$2.3B",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+23% Y/Y"
        ],
        "quote": "Shopee Marketplace $2.3B +23% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1287,
            430,
            100
          ]
        }
      },
      {
        "id": "garena-bookings",
        "label": "Garena Bookings",
        "value": "0.5",
        "literal": "$0.5B",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(16%) Y/Y and +2% Q/Q"
        ],
        "quote": "Garena Bookings $0.5B (16%) Y/Y and +2% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            471,
            1287,
            380,
            100
          ]
        }
      },
      {
        "id": "shopee-operating-profit",
        "label": "Shopee",
        "value": "-0.3",
        "literal": "($0.3B)",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "Shopee ($0.3B)",
        "anchor": {
          "type": "image-box",
          "box": [
            1654,
            913,
            268,
            52
          ]
        }
      },
      {
        "id": "garena-operating-profit",
        "label": "Garena",
        "value": "0.3",
        "literal": "$0.3B",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "Garena $0.3B",
        "anchor": {
          "type": "image-box",
          "box": [
            1654,
            974,
            268,
            49
          ]
        }
      },
      {
        "id": "seamoney-operating-profit",
        "label": "SeaMoney",
        "value": "0.1",
        "literal": "$0.1B",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "SeaMoney $0.1B",
        "anchor": {
          "type": "image-box",
          "box": [
            1654,
            1033,
            268,
            47
          ]
        }
      },
      {
        "id": "other-operating-profit",
        "label": "Other",
        "value": "-0.1",
        "literal": "($0.1B)",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [],
        "quote": "Other ($0.1B)",
        "anchor": {
          "type": "image-box",
          "box": [
            1706,
            1094,
            216,
            47
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +23%"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏",
              "notes": [
                "同比 (46%)"
              ]
            },
            {
              "id": "seamoney",
              "label": "SeaMoney 金融服务",
              "notes": [
                "同比 +24%"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务",
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 27%",
                  "同比 +13 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 8%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 6%",
                  "同比 (4 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": "信用损失拨备",
                "notes": [
                  "占收入 4%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他收入",
              "notes": []
            }
          ]
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 42%",
              "同比 (7 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (2%)",
              "同比 (14 个百分点)"
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "源图截止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee-marketplace",
            "label": "Shopee 电商平台",
            "notes": [
              "同比 +23%"
            ]
          },
          {
            "id": "garena-bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 (16%)，环比 +2%"
            ]
          },
          {
            "id": "shopee-operating-profit",
            "label": "Shopee 营业利润",
            "notes": []
          },
          {
            "id": "garena-operating-profit",
            "label": "Garena 营业利润",
            "notes": []
          },
          {
            "id": "seamoney-operating-profit",
            "label": "SeaMoney 营业利润",
            "notes": []
          },
          {
            "id": "other-operating-profit",
            "label": "其他营业利润",
            "notes": []
          }
        ]
      }
    }
  },
  {
    "key": "sea-q1-fy25",
    "company": "Sea",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 4.8,
      "notes": [
        "+30% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 3.5,
          "valueText": "$3.5B",
          "notes": [
            "+28% Y/Y",
            "E-commerce"
          ]
        },
        {
          "id": "monee",
          "label": "Monee",
          "value": 0.8,
          "valueText": "$0.8B",
          "notes": [
            "+58% Y/Y",
            "Digital Financial Services"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.5,
          "notes": [
            "+8% Y/Y",
            "Digital Entertainment"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.033,
          "valueText": "$33M"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.6
      },
      "operatingExpenses": {
        "total": 1.8,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.9,
            "notes": [
              "19% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "6% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "6% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.3,
            "notes": [
              "6% of revenue",
              "+1pp Y/Y"
            ]
          }
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.034,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.034,
          "valueText": "$34M"
        }
      ]
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
        "value": 2.2,
        "notes": [
          "46% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.5,
        "notes": [
          "9% margin",
          "+8pp Y/Y"
        ],
        "items": [
          {
            "id": "shopee_op",
            "label": "Shopee operating profit",
            "value": 0.2
          },
          {
            "id": "monee_op",
            "label": "Monee operating profit",
            "value": 0.2
          },
          {
            "id": "garena_op",
            "label": "Garena operating profit",
            "value": 0.2
          },
          {
            "id": "other_op",
            "label": "Other operating profit",
            "value": -0.2
          }
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating profit."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "shopee-marketplace",
        "label": "Shopee Marketplace",
        "value": "3.1",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$3.1B",
        "basis": "unspecified",
        "notes": [
          "+29% Y/Y"
        ],
        "quote": "Shopee Marketplace $3.1B +29% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1258,
            430,
            99
          ]
        }
      },
      {
        "id": "garena-bookings",
        "label": "Garena Bookings",
        "value": "0.8",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.8B",
        "basis": "unspecified",
        "notes": [
          "+51% Y/Y and +43% Q/Q"
        ],
        "quote": "Garena Bookings $0.8B +51% Y/Y and +43% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            471,
            1258,
            380,
            99
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "revenue": {
          "notes": [
            "同比 +30%"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +28%",
                "电商"
              ]
            },
            {
              "id": "monee",
              "label": "Monee 金融服务",
              "notes": [
                "同比 +58%",
                "数字金融服务"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 +8%",
                "数字娱乐"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务"
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
                "label": "销售与营销",
                "notes": [
                  "占收入 19%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 6%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 6%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": [
                  "信用",
                  "损失拨备"
                ],
                "notes": [
                  "占收入 6%",
                  "同比 +1 个百分点"
                ]
              }
            ]
          }
        },
        "operatingOtherIncome": {
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
              "毛利率 46%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 9%",
              "同比 +8 个百分点"
            ],
            "items": [
              {
                "id": "shopee_op",
                "label": "Shopee 营业利润"
              },
              {
                "id": "monee_op",
                "label": "Monee 营业利润"
              },
              {
                "id": "garena_op",
                "label": "Garena 营业利润"
              },
              {
                "id": "other_op",
                "label": "其他 营业利润"
              }
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "源图止于营业利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee-marketplace",
            "label": "Shopee 市场",
            "notes": [
              "同比 +29%"
            ]
          },
          {
            "id": "garena-bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 +51%，环比 +43%"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "sea-q3-fy23",
    "company": "Sea",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.3,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 2.2,
          "notes": [
            "+16% Y/Y",
            "E-commerce",
            "(16%) adjusted margin",
            "+10pp Y/Y"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.6,
          "notes": [
            "(34%) Y/Y",
            "Digital Entertainment",
            "40% adjusted margin",
            "+7pp Y/Y"
          ]
        },
        {
          "id": "seamoney",
          "label": "SeaMoney",
          "value": 0.4,
          "notes": [
            "+37% Y/Y",
            "Digital Financial Services",
            "37% adjusted margin",
            "+58pp Y/Y"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.04,
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.9
      },
      "operatingExpenses": {
        "total": 1.6,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.9,
            "notes": [
              "28% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "notes": [
              "8% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "notes": [
              "8% of revenue",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.1,
            "notes": [
              "4% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.047,
      "items": [
        {
          "id": "other",
          "label": "Other income",
          "value": 0.047
        }
      ]
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
          "44% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.1,
        "notes": [
          "(4%) margin",
          "+12pp Y/Y"
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
        "id": "shopee-marketplace",
        "label": "Shopee Marketplace",
        "value": "1.9",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$1.9B",
        "basis": "unspecified",
        "notes": [
          "+18% Y/Y"
        ],
        "quote": "Shopee Marketplace $1.9B +18% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1288,
            430,
            99
          ]
        }
      },
      {
        "id": "garena-bookings",
        "label": "Garena Bookings",
        "value": "0.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.4B",
        "basis": "unspecified",
        "notes": [
          "(33%) Y/Y and +1% Q/Q"
        ],
        "quote": "Garena Bookings $0.4B (33%) Y/Y and +1% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            471,
            1288,
            380,
            99
          ]
        }
      },
      {
        "id": "shopee-operating-loss",
        "label": "Shopee",
        "value": "-0.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "($0.4B)",
        "basis": "unspecified",
        "notes": [],
        "quote": "Shopee ($0.4B)",
        "anchor": {
          "type": "image-box",
          "box": [
            1621,
            919,
            273,
            52
          ]
        }
      },
      {
        "id": "garena-operating-profit",
        "label": "Garena",
        "value": "0.3",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.3B",
        "basis": "unspecified",
        "notes": [],
        "quote": "Garena $0.3B",
        "anchor": {
          "type": "image-box",
          "box": [
            1621,
            981,
            273,
            52
          ]
        }
      },
      {
        "id": "seamoney-operating-profit",
        "label": "SeaMoney",
        "value": "0.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.2B",
        "basis": "unspecified",
        "notes": [],
        "quote": "SeaMoney $0.2B",
        "anchor": {
          "type": "image-box",
          "box": [
            1621,
            1035,
            273,
            52
          ]
        }
      },
      {
        "id": "other-operating-loss",
        "label": "Other",
        "value": "-0.2",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "($0.2B)",
        "basis": "unspecified",
        "notes": [],
        "quote": "Other ($0.2B)",
        "anchor": {
          "type": "image-box",
          "box": [
            1621,
            1094,
            273,
            52
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +16%",
                "电商",
                "调整后利润率 (16%)",
                "同比 +10 个百分点"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 (34%)",
                "数字娱乐",
                "调整后利润率 40%",
                "同比 +7 个百分点"
              ]
            },
            {
              "id": "seamoney",
              "label": "SeaMoney 金融服务",
              "notes": [
                "同比 +37%",
                "数字金融服务",
                "调整后利润率 37%",
                "同比 +58 个百分点"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务",
              "notes": []
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
                "label": "销售与营销",
                "notes": [
                  "占收入 28%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 8%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 8%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": "信用损失拨备",
                "notes": [
                  "占收入 4%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other",
              "label": "其他收入"
            }
          ]
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "毛利率 44%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "id": "operating_loss",
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 +12 个百分点"
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图截至营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee-marketplace",
            "label": "Shopee 市场",
            "notes": [
              "同比 +18%"
            ]
          },
          {
            "id": "garena-bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 (33%)，环比 +1%"
            ]
          },
          {
            "id": "shopee-operating-loss",
            "label": "Shopee 营业亏损",
            "notes": []
          },
          {
            "id": "garena-operating-profit",
            "label": "Garena 营业利润",
            "notes": []
          },
          {
            "id": "seamoney-operating-profit",
            "label": "SeaMoney 营业利润",
            "notes": []
          },
          {
            "id": "other-operating-loss",
            "label": "其他",
            "notes": []
          }
        ],
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月"
      }
    }
  },
  {
    "key": "sea-q3-fy22",
    "company": "Sea",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.2,
      "notes": [
        "+17% Y/Y"
      ],
      "items": [
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.9,
          "valueText": "$0.9B",
          "notes": [
            "(19%) Y/Y"
          ]
        },
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 1.9,
          "valueText": "$1.9B",
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "seamoney",
          "label": "SeaMoney",
          "value": 0.3,
          "valueText": "$0.3B",
          "notes": [
            "+147% Y/Y"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.016,
          "valueText": "$16M",
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.9
      },
      "operatingExpenses": {
        "total": 1.7,
        "items": [
          {
            "id": "sm",
            "label": "Sales & marketing",
            "value": 0.8
          },
          {
            "id": "ga",
            "label": "General & admin",
            "value": 0.6
          },
          {
            "id": "rnd",
            "label": "Research & development",
            "value": 0.4
          }
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.066,
      "items": [
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.066,
          "valueText": "$66M"
        }
      ]
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
        "value": 1.2,
        "notes": [
          "39% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.5,
        "notes": [
          "(16%) margin",
          "+1pp Y/Y"
        ],
        "items": [
          {
            "id": "garena_op",
            "label": "Garena",
            "value": 0.5
          },
          {
            "id": "shopee_op",
            "label": "Shopee",
            "value": -0.6
          },
          {
            "id": "seamoney_op",
            "label": "SeaMoney",
            "value": -0.1
          },
          {
            "id": "other_op",
            "label": "Other",
            "value": -0.3
          }
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
        "id": "shopee_gmv",
        "label": "Shopee GMV",
        "literal": "$19B",
        "value": "19",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "+14% Y/Y"
        ],
        "quote": "Shopee GMV $19B +14% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1250,
            378,
            102
          ]
        }
      },
      {
        "id": "garena_bookings",
        "label": "Garena Bookings",
        "literal": "$0.6B",
        "value": "0.6",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "(46%) Y/Y"
        ],
        "quote": "Garena Bookings $0.6B (46%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            419,
            1250,
            380,
            102
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "revenue": {
          "notes": [
            "同比 +17%"
          ],
          "items": [
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 (19%)"
              ]
            },
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "seamoney",
              "label": "SeaMoney 金融服务",
              "notes": [
                "同比 +147%"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务",
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
                "id": "sm",
                "label": "销售与营销"
              },
              {
                "id": "ga",
                "label": "一般及行政"
              },
              {
                "id": "rnd",
                "label": "研发"
              }
            ]
          }
        },
        "operatingOtherIncome": {
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
              "毛利率 39%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (16%)",
              "同比 +1 个百分点"
            ],
            "items": [
              {
                "id": "garena_op",
                "label": "Garena 营业盈亏"
              },
              {
                "id": "shopee_op",
                "label": "Shopee 营业盈亏"
              },
              {
                "id": "seamoney_op",
                "label": "SeaMoney 营业盈亏"
              },
              {
                "id": "other_op",
                "label": "其他"
              }
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图止于营业亏损。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee_gmv",
            "label": "Shopee 商品交易总额",
            "notes": [
              "同比 +14%"
            ]
          },
          {
            "id": "garena_bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 (46%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "sea-q4-fy22",
    "company": "Sea",
    "period": "Q4 FY22",
    "currency": "$",
    "unit": "B",
    "decimals": 2,
    "sourceImage": "input/processed/sea-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.5,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 2.1,
          "valueText": "$2.1B",
          "notes": [
            "+32% Y/Y"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.9,
          "valueText": "$0.9B",
          "notes": [
            "(33%) Y/Y"
          ]
        },
        {
          "id": "seamoney",
          "label": "SeaMoney",
          "value": 0.4,
          "valueText": "$0.4B",
          "notes": [
            "+93% Y/Y"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.02,
          "valueText": "$20M",
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 1.8,
        "valueText": "($1.8B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.4,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.5,
            "valueText": "($0.5B)",
            "notes": [
              "14% of revenue",
              "(24pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.4,
            "valueText": "($0.4B)",
            "notes": [
              "10% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.2,
            "valueText": "($0.2B)",
            "notes": [
              "7% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.2,
            "valueText": "($0.2B)",
            "notes": []
          },
          {
            "id": "impairment",
            "label": "Impairment",
            "value": 0.2,
            "valueText": "($0.2B)",
            "notes": []
          }
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.1,
          "valueText": "$0.1B",
          "notes": []
        }
      ]
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
        "value": 1.7,
        "valueText": "$1.7B",
        "notes": [
          "49% margin",
          "+8pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.3,
        "valueText": "$0.3B",
        "notes": [
          "10% margin",
          "+24pp Y/Y"
        ],
        "items": [
          {
            "id": "garena_op",
            "label": "Garena",
            "value": 0.4,
            "valueText": "$0.4B"
          },
          {
            "id": "shopee_op",
            "label": "Shopee",
            "value": 0.1,
            "valueText": "$0.1B"
          },
          {
            "id": "seamoney_op",
            "label": "SeaMoney",
            "value": 0.1,
            "valueText": "$0.1B"
          },
          {
            "id": "other_op",
            "label": "Other",
            "value": -0.2,
            "valueText": "($0.2B)"
          }
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating profit."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "shopee-gmv",
        "label": "Shopee GMV",
        "value": "18",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$18B",
        "basis": "unspecified",
        "notes": [
          "+8% Y/Y fx neutral"
        ],
        "quote": "Shopee GMV $18B +8% Y/Y fx neutral",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1251,
            378,
            99
          ]
        }
      },
      {
        "id": "garena-bookings",
        "label": "Garena Bookings",
        "value": "0.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.5B",
        "basis": "unspecified",
        "notes": [
          "(50%) Y/Y and (18%) Q/Q"
        ],
        "quote": "Garena Bookings $0.5B (50%) Y/Y and (18%) Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            418,
            1251,
            382,
            99
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +32%"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 (33%)"
              ]
            },
            {
              "id": "seamoney",
              "label": "SeaMoney 金融服务",
              "notes": [
                "同比 +93%"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务",
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 14%",
                  "同比 (24 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 10%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 7%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": "信用损失拨备",
                "notes": []
              },
              {
                "id": "impairment",
                "label": "减值",
                "notes": []
              }
            ]
          }
        },
        "operatingOtherIncome": {
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
              "毛利率 49%",
              "同比 +8 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 +24 个百分点"
            ],
            "items": [
              {
                "id": "garena_op",
                "label": "Garena 营业利润"
              },
              {
                "id": "shopee_op",
                "label": "Shopee 营业利润"
              },
              {
                "id": "seamoney_op",
                "label": "SeaMoney 营业利润"
              },
              {
                "id": "other_op",
                "label": "其他营业利润"
              }
            ]
          },
          "net": {
            "label": "未披露净利润",
            "notes": [
              "原图止于营业利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee-gmv",
            "label": "Shopee 商品交易总额",
            "notes": [
              "汇率中性同比 +8%"
            ]
          },
          {
            "id": "garena-bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 (50%)，环比 (18%)"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "sea-q1-fy24",
    "company": "Sea",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.7,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 2.7,
          "valueText": "$2.7B",
          "notes": [
            "+33% Y/Y"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.5,
          "valueText": "$0.5B",
          "notes": [
            "(15%) Y/Y"
          ]
        },
        {
          "id": "seamoney",
          "label": "SeaMoney",
          "value": 0.5,
          "valueText": "$0.5B",
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.029,
          "valueText": "$29M",
          "notes": []
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.2,
        "valueText": "($2.2B)",
        "notes": []
      },
      "operatingExpenses": {
        "total": 1.5,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.8,
            "valueText": "($0.8B)",
            "notes": [
              "21% of revenue",
              "+7pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "8% of revenue",
              "(3pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.2,
            "valueText": "($0.2B)",
            "notes": [
              "4% of revenue",
              "(2pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "No tax line is reported in the source."
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.044,
      "items": [
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.044,
          "valueText": "$44M",
          "notes": []
        }
      ]
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
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating profit."
        ]
      },
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 1.6,
        "valueText": "$1.6B",
        "notes": [
          "42% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "valueText": "$0.1B",
        "notes": [
          "2% margin",
          "(2pp) Y/Y"
        ],
        "items": [
          {
            "id": "shopee_op",
            "label": "Shopee",
            "value": -0.1,
            "valueText": "($0.1B)"
          },
          {
            "id": "garena_op",
            "label": "Garena",
            "value": 0.2,
            "valueText": "$0.2B"
          },
          {
            "id": "seamoney_op",
            "label": "SeaMoney",
            "value": 0.1,
            "valueText": "$0.1B"
          },
          {
            "id": "other_op",
            "label": "Other",
            "value": -0.2,
            "valueText": "($0.2B)"
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "shopee-marketplace",
        "label": "Shopee Marketplace",
        "value": "2.4",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.4B",
        "basis": "unspecified",
        "notes": [
          "+33% Y/Y"
        ],
        "quote": "Shopee Marketplace $2.4B +33% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1288,
            430,
            98
          ]
        }
      },
      {
        "id": "garena-bookings",
        "label": "Garena Bookings",
        "value": "0.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.5B",
        "basis": "unspecified",
        "notes": [
          "+11% Y/Y and +12% Q/Q"
        ],
        "quote": "Garena Bookings $0.5B +11% Y/Y and +12% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            471,
            1288,
            380,
            98
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +33%"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 (15%)"
              ]
            },
            {
              "id": "seamoney",
              "label": "SeaMoney 金融服务",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务",
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 21%",
                  "同比 +7 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 8%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 8%",
                  "同比 (3 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": "信用损失拨备",
                "notes": [
                  "占收入 4%",
                  "同比 (2 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "原图未报告税费项目。"
            ]
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "id": "other_income",
              "label": "其他收入",
              "notes": []
            }
          ]
        },
        "otherIncome": {
          "items": []
        },
        "otherExpenses": {
          "items": []
        },
        "profit": {
          "net": {
            "label": "未报告净利润",
            "notes": [
              "原图在营业利润处结束。"
            ]
          },
          "gross": {
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "毛利率 42%",
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (2 个百分点)"
            ],
            "items": [
              {
                "id": "shopee_op",
                "label": "Shopee 电商"
              },
              {
                "id": "garena_op",
                "label": "Garena 游戏娱乐"
              },
              {
                "id": "seamoney_op",
                "label": "SeaMoney 金融服务"
              },
              {
                "id": "other_op",
                "label": "其他"
              }
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee-marketplace",
            "label": "Shopee 市场",
            "notes": [
              "同比 +33%"
            ]
          },
          {
            "id": "garena-bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 +11%，环比 +12%"
            ]
          }
        ],
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月"
      }
    }
  },
  {
    "key": "sea-q2-fy24",
    "company": "Sea",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/sea-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 3.8,
      "notes": [
        "+23% Y/Y"
      ],
      "items": [
        {
          "id": "shopee",
          "label": "Shopee",
          "value": 2.8,
          "valueText": "$2.8B",
          "notes": [
            "+34% Y/Y"
          ]
        },
        {
          "id": "garena",
          "label": "Garena",
          "value": 0.4,
          "valueText": "$0.4B",
          "notes": [
            "(18%) Y/Y"
          ]
        },
        {
          "id": "seamoney",
          "label": "SeaMoney",
          "value": 0.5,
          "valueText": "$0.5B",
          "notes": [
            "+21% Y/Y"
          ]
        },
        {
          "id": "other_services",
          "label": "Other Services",
          "value": 0.031,
          "valueText": "$31M"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 2.2,
        "valueText": "($2.2B)"
      },
      "operatingExpenses": {
        "total": 1.5,
        "items": [
          {
            "id": "sm",
            "label": "S&M",
            "value": 0.8,
            "valueText": "($0.8B)",
            "notes": [
              "20% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 0.3,
            "valueText": "($0.3B)",
            "notes": [
              "8% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "credit_losses",
            "label": "Provision for credit losses",
            "value": 0.2,
            "valueText": "($0.2B)",
            "notes": [
              "4% of revenue",
              "(1pp) Y/Y"
            ]
          }
        ]
      }
    },
    "operatingOtherIncome": {
      "total": 0.043,
      "items": [
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.043,
          "valueText": "$43M"
        }
      ]
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
        "value": 1.5,
        "valueText": "$1.5B",
        "notes": [
          "42% margin",
          "(5pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 0.1,
        "valueText": "$0.1B",
        "notes": [
          "2% margin",
          "(7pp) Y/Y"
        ],
        "items": [
          {
            "id": "op_shopee",
            "label": "Shopee",
            "value": -0.1,
            "valueText": "($0.1B)"
          },
          {
            "id": "op_garena",
            "label": "Garena",
            "value": 0.2,
            "valueText": "$0.2B"
          },
          {
            "id": "op_seamoney",
            "label": "SeaMoney",
            "value": 0.2,
            "valueText": "$0.2B"
          },
          {
            "id": "op_other",
            "label": "Other",
            "value": -0.2,
            "valueText": "($0.2B)"
          }
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at operating profit."
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "shopee_marketplace",
        "label": "Shopee Marketplace",
        "value": "2.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$2.5B",
        "basis": "unspecified",
        "notes": [
          "+32% Y/Y"
        ],
        "quote": "Shopee Marketplace $2.5B\n+32% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            31,
            1287,
            431,
            100
          ]
        }
      },
      {
        "id": "garena_bookings",
        "label": "Garena Bookings",
        "value": "0.5",
        "unit": "B",
        "currency": "USD",
        "comparison": "eq",
        "literal": "$0.5B",
        "basis": "unspecified",
        "notes": [
          "+21% Y/Y and +5% Q/Q"
        ],
        "quote": "Garena Bookings $0.5B\n+21% Y/Y and +5% Q/Q",
        "anchor": {
          "type": "image-box",
          "box": [
            471,
            1287,
            380,
            100
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +23%"
          ],
          "items": [
            {
              "id": "shopee",
              "label": "Shopee 电商",
              "notes": [
                "同比 +34%"
              ]
            },
            {
              "id": "garena",
              "label": "Garena 游戏娱乐",
              "notes": [
                "同比 (18%)"
              ]
            },
            {
              "id": "seamoney",
              "label": "SeaMoney 金融服务",
              "notes": [
                "同比 +21%"
              ]
            },
            {
              "id": "other_services",
              "label": "其他服务",
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
                "id": "sm",
                "label": "销售与营销",
                "notes": [
                  "占收入 20%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 8%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "ga",
                "label": "一般及行政",
                "notes": [
                  "占收入 8%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "credit_losses",
                "label": "信用损失拨备",
                "notes": [
                  "占收入 4%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          }
        },
        "operatingOtherIncome": {
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
              "毛利率 42%",
              "同比 (5 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 2%",
              "同比 (7 个百分点)"
            ],
            "items": [
              {
                "id": "op_shopee",
                "label": "Shopee 电商"
              },
              {
                "id": "op_garena",
                "label": "Garena 游戏娱乐"
              },
              {
                "id": "op_seamoney",
                "label": "SeaMoney 金融服务"
              },
              {
                "id": "op_other",
                "label": "其他"
              }
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "原图止于营业利润。"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "shopee_marketplace",
            "label": "Shopee 市场",
            "notes": [
              "同比 +32%"
            ]
          },
          {
            "id": "garena_bookings",
            "label": "Garena 预订额",
            "notes": [
              "同比 +21%，环比 +5%"
            ]
          }
        ]
      }
    }
  }
]);
})(window);
