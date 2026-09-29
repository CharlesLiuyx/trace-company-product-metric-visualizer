(function(global){const ssot=global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};ssot.records.push(...[
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
  }
]);})(window);