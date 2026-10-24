/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "j-j-q4-fy25",
    "company": "Johnson & Johnson",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q4-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 24.6,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 15.8,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 8.8,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 8
      },
      "operatingExpenses": {
        "total": 11.2,
        "notes": [
          "Displayed expense components total $11.3B because the source chart rounds individual components."
        ],
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 6.8,
            "notes": [
              "29% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 4.3,
            "notes": [
              "17% of revenue",
              "(6pp) Y/Y"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.2
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "The source chart shows a $0.2B tax benefit rather than a tax expense."
        ]
      }
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
      "total": 0.5,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 16.6,
        "notes": [
          "68% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.4,
        "notes": [
          "22% margin",
          "+5pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 5.1,
        "notes": [
          "21% margin",
          "+6pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "label": "创新制药",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +7%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "notes": [
              "由于来源图对单项进行四舍五入，展示的费用项目合计为 $11.3B。"
            ],
            "items": [
              {
                "label": "销售、市场及行政费用",
                "notes": [
                  "占收入 29%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (6 个百分点)"
                ]
              },
              {
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图展示 $0.2B 的税收收益，而非税费。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "税收收益"
            }
          ]
        },
        "otherExpenses": {
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
              "利润率 68%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 22%",
              "同比 +5 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +6 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q1-fy26",
    "company": "Johnson & Johnson",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 29, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/j-j-q1-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 24.1,
      "notes": [
        "+10% Y/Y",
        "Displayed segment amounts total $24.0B because the source chart rounds individual components."
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 15.4,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 8.6,
          "notes": [
            "+8% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 8.1
      },
      "operatingExpenses": {
        "total": 9.9,
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 6,
            "notes": [
              "25% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.6,
            "notes": [
              "15% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.8
      }
    },
    "otherExpenses": {
      "total": 0.043,
      "items": [
        {
          "id": "other_nonoperating",
          "label": "Other",
          "value": 0.043
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 16,
        "notes": [
          "66% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6,
        "notes": [
          "25% margin",
          "(37pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 5.2,
        "notes": [
          "22% margin",
          "(28pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 29 日的季度",
        "revenue": {
          "notes": [
            "同比 +10%",
            "由于来源图对单项进行四舍五入，展示的分部金额合计为 $24.0B。"
          ],
          "items": [
            {
              "label": "创新制药",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +8%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售、市场及行政费用",
                "notes": [
                  "占收入 25%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 15%",
                  "同比 (0 个百分点)"
                ]
              },
              {
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
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 66%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 25%",
              "同比 (37 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 (28 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q2-fy26",
    "company": "Johnson & Johnson",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 28, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q2-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 25.3,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 16.4,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 8.9,
          "notes": [
            "+5% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 8.1
      },
      "operatingExpenses": {
        "total": 10.5,
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 6.4,
            "notes": [
              "25% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.7,
            "notes": [
              "14% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.2
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 17.3,
        "notes": [
          "68% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.7,
        "notes": [
          "27% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 5.5,
        "notes": [
          "22% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 28 日的季度",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "label": "创新制药",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +5%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售、市场及行政费用",
                "notes": [
                  "占收入 25%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 14%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "label": "其他"
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
              "利润率 68%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 27%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q1-fy23",
    "company": "Johnson & Johnson",
    "period": "Q1 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q1-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 24.7,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_health",
          "label": "Consumer Health",
          "value": 3.9,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "pharmaceutical",
          "label": "Pharmaceutical",
          "value": 13.4,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 7.5,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 8.4
      },
      "operatingExpenses": {
        "total": 17,
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 6.1
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.6
          },
          {
            "id": "in_process_rnd",
            "label": "In-process R&D",
            "value": 0.1
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
          },
          {
            "id": "other",
            "label": "Other",
            "value": 7.2,
            "children": [
              {
                "id": "litigation",
                "label": "Litigation expenses",
                "value": 6.9
              }
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax not reported",
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
        "value": 16.3,
        "notes": [
          "66% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_loss",
        "label": "Pretax loss",
        "value": -0.7,
        "notes": [
          "(3%) margin",
          "(28pp) Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at pretax loss; net result is not reported."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "label": "消费者健康",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "label": "制药",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +7%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售、市场及行政费用"
              },
              {
                "label": "研发"
              },
              {
                "label": "在研研发"
              },
              {
                "label": "重组"
              },
              {
                "label": "其他",
                "children": [
                  {
                    "label": "诉讼费用"
                  }
                ]
              }
            ]
          },
          "tax": {
            "label": "税费未报告"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "毛利率 66%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "税前亏损",
            "notes": [
              "利润率 (3%)",
              "同比 (28 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未报告",
            "notes": [
              "来源图截至税前亏损，未报告净利润。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q1-fy25",
    "company": "Johnson & Johnson",
    "period": "Q1 FY25",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/j-j-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 21.9,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 13.9,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 8,
          "notes": [
            "+3% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 7.4
      },
      "operatingExpenses": {
        "total": 8.4,
        "notes": [
          "Source-rounded components total $8.317B; the displayed total is $8.4B."
        ],
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 5.1
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.2
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.017
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.6
      }
    },
    "operatingOtherIncome": {
      "total": 7.4,
      "items": [
        {
          "id": "other_income",
          "label": "Other income",
          "value": 7.3
        },
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 14.5,
        "notes": [
          "66% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 13.5,
        "notes": [
          "62% margin",
          "+45pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 11,
        "notes": [
          "50% margin",
          "+35pp Y/Y",
          "Source-rounded pretax income less tax is $10.9B; displayed net income is $11.0B."
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
              "label": "创新制药",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +3%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "notes": [
              "来源四舍五入后的费用项目合计 $8.317B，展示总额为 $8.4B。"
            ],
            "items": [
              {
                "label": "销售、市场及行政费用"
              },
              {
                "label": "研发"
              },
              {
                "label": "重组费用"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "label": "其他收入"
            },
            {
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 66%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 62%",
              "同比 +45 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 50%",
              "同比 +35 个百分点",
              "来源四舍五入后的税前利润减税费为 $10.9B，展示净利润为 $11.0B。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q4-fy24",
    "company": "Johnson & Johnson",
    "period": "Q4 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q4-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 22.5,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 14.3,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 8.2,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 7.1
      },
      "operatingExpenses": {
        "total": 11.9,
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 6.5
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 5.3
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.1
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
      "total": 0.3,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 15.4,
        "notes": [
          "68% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.9,
        "notes": [
          "23% margin",
          "(5pp) Y/Y",
          "Source displays $3.9B; gross profit less expenses plus interest totals $3.8B using the displayed rounded amounts."
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 3.4,
        "notes": [
          "19% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "label": "创新制药",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +7%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售、市场及行政费用"
              },
              {
                "label": "研发"
              },
              {
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 68%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 23%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q2-fy23",
    "company": "Johnson & Johnson",
    "period": "Q2 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 25.5,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "consumer_health",
          "label": "Consumer Health",
          "value": 4,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "pharmaceutical",
          "label": "Pharmaceutical",
          "value": 13.7,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 7.8,
          "notes": [
            "+13% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 8.2
      },
      "operatingExpenses": {
        "total": 10.6,
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 6.7
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.8
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.6
      }
    },
    "operatingOtherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 17.3,
        "notes": [
          "68% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.7,
        "notes": [
          "26% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 5.1,
        "notes": [
          "20% margin",
          "+0pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "label": "消费者健康",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "label": "制药",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +13%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售、市场及行政费用"
              },
              {
                "label": "研发"
              },
              {
                "label": "重组费用"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
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
              "利润率 68%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 26%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 +0 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q4-fy23",
    "company": "Johnson & Johnson",
    "period": "Q4 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 21.4,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 13.7,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 7.7,
          "notes": [
            "+13% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 6.8
      },
      "operatingExpenses": {
        "total": 10.4,
        "notes": [
          "Source-rounded components total $10.5B; displayed total is $10.4B."
        ],
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 5.8
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 4.5
          },
          {
            "id": "in_process_rnd",
            "label": "In-process R&D",
            "value": 0.1
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
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
      "total": 0.6,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.2
        },
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 14.6,
        "notes": [
          "68% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.8,
        "notes": [
          "24% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 4.1,
        "notes": [
          "19% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "label": "创新制药",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +13%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "notes": [
              "来源图舍入后的费用分项合计 $10.5B，展示总额为 $10.4B。"
            ],
            "items": [
              {
                "label": "销售、市场及行政费用"
              },
              {
                "label": "研发"
              },
              {
                "label": "在研研发费用"
              },
              {
                "label": "重组费用"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "label": "利息"
            },
            {
              "label": "其他收入"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 68%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 24%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 19%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q2-fy25",
    "company": "Johnson & Johnson",
    "period": "Q2 FY25",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 23.7,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 15.2,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MEDTECH",
          "value": 8.5,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 7.6
      },
      "operatingExpenses": {
        "total": 9.6,
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 5.9
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.5
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.2
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
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
        "value": 16.1,
        "notes": [
          "68% margin",
          "(2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.5,
        "notes": [
          "27% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 5.5,
        "notes": [
          "23% margin",
          "+2pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "innovative_medicine",
              "label": "创新制药",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "id": "medtech",
              "label": "医疗科技",
              "notes": [
                "同比 +7%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "cost_of_products_sold",
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、市场及行政费用"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "other",
                "label": "其他"
              },
              {
                "id": "restructuring",
                "label": "重组费用"
              }
            ]
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
              "利润率 68%",
              "同比 (2 个百分点)"
            ]
          },
          "operating": {
            "id": "pretax_income",
            "label": "税前利润",
            "notes": [
              "利润率 27%",
              "同比 +2 个百分点"
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
        }
      }
    }
  },
  {
    "key": "j-j-q2-fy24",
    "company": "Johnson & Johnson",
    "period": "Q2 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q2-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 22.4,
      "notes": [
        "+4% Y/Y",
        "Source-rounded segment amounts sum to $22.5B; displayed sales are $22.4B."
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 14.5,
          "notes": [
            "+6% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 8,
          "notes": [
            "+2% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 6.9
      },
      "operatingExpenses": {
        "total": 9.8,
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 5.7
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.6
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1
      }
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 15.6,
        "notes": [
          "69% margin",
          "(1pp) Y/Y",
          "Source-rounded sales less product costs are $15.5B; displayed gross profit is $15.6B."
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.7,
        "notes": [
          "26% margin",
          "(4pp) Y/Y",
          "Source-rounded gross profit less expenses is $5.8B; displayed pretax income is $5.7B."
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 4.7,
        "notes": [
          "21% margin",
          "(4pp) Y/Y",
          "Source-rounded pretax income less tax is $4.6B; displayed net income is $4.7B."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "label": "创新制药",
              "notes": [
                "同比 +6%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +2%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售、市场及行政费用"
              },
              {
                "label": "研发"
              },
              {
                "label": "其他"
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
              "利润率 69%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 26%",
              "同比 (4 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q4-fy22",
    "company": "Johnson & Johnson",
    "period": "Q4 FY22",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q4-fy22.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 23.7,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "consumer_health",
          "label": "Consumer Health",
          "value": 3.7,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "pharmaceutical",
          "label": "Pharmaceutical",
          "value": 13.1,
          "notes": [
            "(7%) Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 6.8,
          "notes": [
            "(1%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 7.8
      },
      "operatingExpenses": {
        "total": 11.7,
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 6.5
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.8
          },
          {
            "id": "in_process_rnd",
            "label": "In-process R&D",
            "value": 0.2
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 1.1
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
        "value": 15.9,
        "notes": [
          "67% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 4.2,
        "notes": [
          "% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.5,
        "notes": [
          "15% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "revenue": {
          "notes": [
            "同比 (4%)"
          ],
          "items": [
            {
              "label": "消费者健康",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "label": "制药",
              "notes": [
                "同比 (7%)"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 (1%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售、市场及行政费用"
              },
              {
                "label": "研发"
              },
              {
                "label": "在研研发"
              },
              {
                "label": "重组费用"
              },
              {
                "label": "其他"
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
              "利润率 67%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 %",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q3-fy24",
    "company": "Johnson & Johnson",
    "period": "Q3 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 22.5,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 14.6,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 7.9,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 7
      },
      "operatingExpenses": {
        "total": 12.3,
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 5.5
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 5
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 1.8
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
      "total": 0.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 15.5,
        "notes": [
          "69% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 3.3,
        "notes": [
          "15% margin",
          "(10pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 2.7,
        "notes": [
          "12% margin",
          "(8pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "label": "创新制药",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +6%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售、市场及行政费用"
              },
              {
                "label": "研发"
              },
              {
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 69%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 15%",
              "同比 (10 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 12%",
              "同比 (8 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q3-fy23",
    "company": "Johnson & Johnson",
    "period": "Q3 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q3-fy23.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 21.4,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 13.9,
          "notes": [
            "+5% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 7.5,
          "notes": [
            "+10% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 6.6
      },
      "operatingExpenses": {
        "total": 9.7,
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 5.4
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.4
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.5
          },
          {
            "id": "in_process_rnd",
            "label": "In-process R&D",
            "value": 0.2
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.9
      }
    },
    "operatingOtherIncome": {
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
        "value": 14.7,
        "notes": [
          "69% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 5.2,
        "notes": [
          "24% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 4.3,
        "notes": [
          "20% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "label": "创新制药",
              "notes": [
                "同比 +5%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +10%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售、市场及行政费用"
              },
              {
                "label": "研发"
              },
              {
                "label": "其他"
              },
              {
                "label": "在研研发"
              },
              {
                "label": "重组费用"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "label": "利息"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 69%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 24%",
              "同比 (2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 20%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "period": "2023 财年第三季度"
      }
    }
  },
  {
    "key": "j-j-q3-fy25",
    "company": "Johnson & Johnson",
    "period": "Q3 FY25",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 24,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 15.6,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MedTech",
          "value": 8.4,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 7.3
      },
      "operatingExpenses": {
        "total": 9.7,
        "notes": [
          "Source Expenses label reports the $9.2B net charge from gross profit. Gross expense components total $9.7B and receive a $0.5B other-income inflow."
        ],
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 5.9
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.7
          },
          {
            "id": "other_opex",
            "label": "Other",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 2.3
      }
    },
    "operatingOtherIncome": {
      "total": 0.5,
      "items": [
        {
          "id": "other_income",
          "label": "Other income",
          "value": 0.5
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 16.7,
        "notes": [
          "70% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 7.5,
        "notes": [
          "31% margin",
          "+16pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 5.2,
        "notes": [
          "21% margin",
          "+9pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "label": "创新制药",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +7%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "notes": [
              "原图费用标签为毛利润流出的净额 $9.2B。费用明细总额 $9.7B，另有 $0.5B 其他收入流入费用节点。"
            ],
            "items": [
              {
                "label": "销售、市场及行政费用"
              },
              {
                "label": "研发"
              },
              {
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "label": "其他收入"
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
            "label": "税前利润",
            "notes": [
              "利润率 31%",
              "同比 +16 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 +9 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "j-j-q1-fy24",
    "company": "Johnson & Johnson",
    "period": "Q1 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/j-j-q1-fy24.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 21.4,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "innovative_medicine",
          "label": "Innovative Medicine",
          "value": 13.6,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "medtech",
          "label": "MEDTECH",
          "value": 7.8,
          "notes": [
            "+5% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_products_sold",
        "label": "Cost of products sold",
        "value": 6.5
      },
      "operatingExpenses": {
        "total": 9,
        "items": [
          {
            "id": "sga",
            "label": "Sales, marketing & administrative",
            "value": 5.3
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.5
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1
      }
    },
    "operatingOtherIncome": {
      "total": 0.5,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.2
        },
        {
          "id": "other_income",
          "label": "Other",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 14.9,
        "notes": [
          "70% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_income",
        "label": "Pretax income",
        "value": 6.4,
        "notes": [
          "30% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 5.4,
        "notes": [
          "25% margin",
          "+25pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "label": "创新制药",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "label": "医疗科技",
              "notes": [
                "同比 +5%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "产品销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售、市场及行政费用"
              },
              {
                "label": "研发"
              },
              {
                "label": "重组费用"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "operatingOtherIncome": {
          "items": [
            {
              "label": "利息"
            },
            {
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 70%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "税前利润",
            "notes": [
              "利润率 30%",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 25%",
              "同比 +25 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
