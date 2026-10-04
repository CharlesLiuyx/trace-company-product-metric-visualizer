/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "aramco-q1-fy26",
    "company": "Saudi Aramco",
    "period": "Q1 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "SAR",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/aramco-q1-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 467,
      "notes": [
        "+9% Y/Y"
      ],
      "items": [
        {
          "id": "crude_oil",
          "label": "Crude Oil",
          "value": 199,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "refined_chemical_products",
          "label": "Refined & Chemical products",
          "value": 206,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "natural_gas_ngls",
          "label": "Natural gas & NGLs",
          "value": 18,
          "notes": [
            "+30% Y/Y"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 10,
          "notes": [
            "+143% Y/Y"
          ]
        },
        {
          "id": "other_income_related_sales",
          "label": "Other income related to sales",
          "value": 34,
          "notes": [
            "+42% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart does not break out cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 245,
        "items": [
          {
            "id": "purchases",
            "label": "Purchases",
            "value": 112
          },
          {
            "id": "royalties",
            "label": "Royalties",
            "value": 41
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 36
          },
          {
            "id": "producing_manufacturing",
            "label": "Producing & Manufacturing",
            "value": 30
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 24
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 1
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 100
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
        "label": "Revenue and other income related to sales",
        "value": 467,
        "notes": [
          "The source chart does not present a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 223,
        "notes": [
          "48% margin",
          "+3pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 122,
        "notes": [
          "26% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +9%"
          ],
          "items": [
            {
              "id": "crude_oil",
              "label": "原油",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "refined_chemical_products",
              "label": "炼油及化工产品",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "natural_gas_ngls",
              "label": "天然气及天然气液",
              "notes": [
                "同比 +30%"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +143%"
              ]
            },
            {
              "id": "other_income_related_sales",
              "label": "销售相关其他收入",
              "notes": [
                "同比 +42%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未拆分收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchases",
                "label": "采购"
              },
              {
                "id": "royalties",
                "label": "特许权使用费"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "producing_manufacturing",
                "label": "生产及制造"
              },
              {
                "id": "da",
                "label": "折旧及摊销"
              },
              {
                "id": "exploration",
                "label": "勘探"
              },
              {
                "id": "rnd",
                "label": "研发"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "收入及销售相关其他收入",
            "notes": [
              "来源图未单独呈现毛利润小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 48%",
              "同比 +3 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 26%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "aramco-fy25",
    "company": "Saudi Aramco",
    "period": "FY25",
    "periodNote": "Year ended Dec. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/aramco-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 445.7,
      "notes": [
        "(7%) Y/Y"
      ],
      "items": [
        {
          "id": "reported_revenue",
          "label": "Revenue",
          "value": 415.8,
          "notes": [
            "(5%) Y/Y"
          ],
          "children": [
            {
              "id": "crude_oil",
              "label": "Crude Oil",
              "value": 188.3,
              "notes": [
                "(12%) Y/Y"
              ]
            },
            {
              "id": "refined_chemical_products",
              "label": "Refined & Chemical products",
              "value": 207.2,
              "notes": [
                "(1%) Y/Y"
              ]
            },
            {
              "id": "natural_gas_ngls",
              "label": "Natural gas & NGLs",
              "value": 17.4,
              "notes": [
                "+22% Y/Y"
              ]
            },
            {
              "id": "other",
              "label": "Other",
              "value": 3,
              "notes": [
                "+61% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "other_income_related_sales",
          "label": "Other income related to sales",
          "value": 29.8,
          "notes": [
            "(32%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart does not break out cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 257.2,
        "items": [
          {
            "id": "purchases",
            "label": "Purchases",
            "value": 121.7
          },
          {
            "id": "royalties",
            "label": "Royalties",
            "value": 40.4
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 33.5
          },
          {
            "id": "producing_manufacturing",
            "label": "Producing & Manufacturing",
            "value": 35.2
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 22.3
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 2.7
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1.5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 94
      }
    },
    "otherIncome": {
      "total": 1.2,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 1.2
        }
      ]
    },
    "otherExpenses": {
      "total": 2.2,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 2.2
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Revenue and other income related to sales",
        "value": 445.7,
        "notes": [
          "The source chart does not present a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 188.5,
        "notes": [
          "42% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 93.4,
        "notes": [
          "21% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年",
        "periodNote": "截至 2025 年 12 月",
        "revenue": {
          "notes": [
            "同比 -7%"
          ],
          "items": [
            {
              "id": "reported_revenue",
              "label": "收入",
              "notes": [
                "同比 -5%"
              ],
              "children": [
                {
                  "id": "crude_oil",
                  "label": "原油",
                  "notes": [
                    "同比 -12%"
                  ]
                },
                {
                  "id": "refined_chemical_products",
                  "label": "炼油及化工产品",
                  "notes": [
                    "同比 -1%"
                  ]
                },
                {
                  "id": "natural_gas_ngls",
                  "label": "天然气及天然气液",
                  "notes": [
                    "同比 +22%"
                  ]
                },
                {
                  "id": "other",
                  "label": "其他",
                  "notes": [
                    "同比 +61%"
                  ]
                }
              ]
            },
            {
              "id": "other_income_related_sales",
              "label": "销售相关其他收入",
              "notes": [
                "同比 -32%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未拆分收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchases",
                "label": "采购"
              },
              {
                "id": "royalties",
                "label": "特许权使用费"
              },
              {
                "id": "da",
                "label": "折旧及摊销"
              },
              {
                "id": "producing_manufacturing",
                "label": "生产及制造"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "exploration",
                "label": "勘探"
              },
              {
                "id": "rnd",
                "label": "研发"
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
              "id": "finance",
              "label": "财务收益"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "收入及销售相关其他收入",
            "notes": [
              "来源图未单独呈现毛利润小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 42%",
              "同比 -1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 -1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "aramco-q2-fy26",
    "company": "Saudi Aramco",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "SAR",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/aramco-q2-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 522,
      "notes": [
        "+28% Y/Y"
      ],
      "items": [
        {
          "id": "reported_revenue",
          "label": "Revenue",
          "value": 451,
          "notes": [
            "+19% Y/Y"
          ],
          "children": [
            {
              "id": "crude_oil",
              "label": "Crude Oil",
              "value": 188,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "refined_chemical_products",
              "label": "Refined & Chemical products",
              "value": 246,
              "notes": [
                "+32% Y/Y"
              ]
            },
            {
              "id": "natural_gas_ngls",
              "label": "Natural gas & NGLs",
              "value": 16,
              "notes": [
                "(2%) Y/Y"
              ]
            },
            {
              "id": "other",
              "label": "Other",
              "value": 0.5,
              "notes": [
                "(79%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "other_income_related_sales",
          "label": "Other income related to sales",
          "value": 71,
          "notes": [
            "+151% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart does not break out cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 306,
        "items": [
          {
            "id": "purchases",
            "label": "Purchases",
            "value": 175
          },
          {
            "id": "royalties",
            "label": "Royalties",
            "value": 52
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 25
          },
          {
            "id": "producing_manufacturing",
            "label": "Producing & Manufacturing",
            "value": 27
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 24
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 2
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 92
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
        "label": "Revenue and other income related to sales",
        "value": 522,
        "notes": [
          "The source chart does not present a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 216,
        "notes": [
          "48% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 123,
        "notes": [
          "23% margin",
          "+3pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +28%"
          ],
          "items": [
            {
              "id": "reported_revenue",
              "label": "收入",
              "notes": [
                "同比 +19%"
              ],
              "children": [
                {
                  "id": "crude_oil",
                  "label": "原油",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "refined_chemical_products",
                  "label": "炼油及化工产品",
                  "notes": [
                    "同比 +32%"
                  ]
                },
                {
                  "id": "natural_gas_ngls",
                  "label": "天然气及天然气液",
                  "notes": [
                    "同比 -2%"
                  ]
                },
                {
                  "id": "other",
                  "label": "其他",
                  "notes": [
                    "同比 -79%"
                  ]
                }
              ]
            },
            {
              "id": "other_income_related_sales",
              "label": "销售相关其他收入",
              "notes": [
                "同比 +151%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未拆分收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchases",
                "label": "采购"
              },
              {
                "id": "royalties",
                "label": "特许权使用费"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "producing_manufacturing",
                "label": "生产及制造"
              },
              {
                "id": "da",
                "label": "折旧及摊销"
              },
              {
                "id": "exploration",
                "label": "勘探"
              },
              {
                "id": "rnd",
                "label": "研发"
              }
            ]
          },
          "tax": {
            "label": "税费"
          }
        },
        "profit": {
          "gross": {
            "label": "收入及销售相关其他收入",
            "notes": [
              "来源图未单独呈现毛利润小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 48%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 23%",
              "同比 +3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "aramco-fy23",
    "company": "Saudi Aramco",
    "period": "FY23",
    "periodNote": "Year ended Dec. 2023",
    "currency": "SAR",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/aramco-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 1856,
      "notes": [
        "(18%) Y/Y"
      ],
      "items": [
        {
          "id": "reported_revenue",
          "label": "Revenue",
          "value": 1653,
          "notes": [
            "(18%) Y/Y"
          ],
          "children": [
            {
              "id": "crude_oil",
              "label": "Crude Oil",
              "value": 839,
              "notes": [
                "(22%) Y/Y"
              ]
            },
            {
              "id": "refined_chemical_products",
              "label": "Refined & Chemical products",
              "value": 750,
              "notes": [
                "(10%) Y/Y"
              ]
            },
            {
              "id": "natural_gas_ngls",
              "label": "Natural gas & NGLs",
              "value": 42,
              "notes": [
                "(44%) Y/Y"
              ]
            },
            {
              "id": "metal_products",
              "label": "Metal products",
              "value": 13,
              "notes": [
                "(15%) Y/Y"
              ]
            },
            {
              "id": "other",
              "label": "Other",
              "value": 9,
              "notes": [
                "+154% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "other_income_related_sales",
          "label": "Other income related to sales",
          "value": 203,
          "notes": [
            "(22%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart does not break out cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 988,
        "items": [
          {
            "id": "purchases",
            "label": "Purchases",
            "value": 471
          },
          {
            "id": "royalties",
            "label": "Royalties",
            "value": 231
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 97
          },
          {
            "id": "producing_manufacturing",
            "label": "Producing & Manufacturing",
            "value": 97
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 77
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 9
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 433
      }
    },
    "otherIncome": {
      "total": 24,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 24
        }
      ]
    },
    "otherExpenses": {
      "total": 4,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 4
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Revenue and other income related to sales",
        "value": 1856,
        "notes": [
          "The source chart does not present a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 868,
        "notes": [
          "47% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 455,
        "notes": [
          "24% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 -18%"
          ],
          "items": [
            {
              "id": "reported_revenue",
              "label": "收入",
              "notes": [
                "同比 -18%"
              ],
              "children": [
                {
                  "id": "crude_oil",
                  "label": "原油",
                  "notes": [
                    "同比 -22%"
                  ]
                },
                {
                  "id": "refined_chemical_products",
                  "label": "炼油及化工产品",
                  "notes": [
                    "同比 -10%"
                  ]
                },
                {
                  "id": "natural_gas_ngls",
                  "label": "天然气及天然气液",
                  "notes": [
                    "同比 -44%"
                  ]
                },
                {
                  "id": "metal_products",
                  "label": "金属产品",
                  "notes": [
                    "同比 -15%"
                  ]
                },
                {
                  "id": "other",
                  "label": "其他",
                  "notes": [
                    "同比 +154%"
                  ]
                }
              ]
            },
            {
              "id": "other_income_related_sales",
              "label": "销售相关其他收入",
              "notes": [
                "同比 -22%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未拆分收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchases",
                "label": "采购"
              },
              {
                "id": "royalties",
                "label": "特许权使用费"
              },
              {
                "id": "da",
                "label": "折旧及摊销"
              },
              {
                "id": "producing_manufacturing",
                "label": "生产及制造"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "exploration",
                "label": "勘探"
              },
              {
                "id": "rnd",
                "label": "研发"
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
              "id": "finance",
              "label": "财务收益"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "收入及销售相关其他收入",
            "notes": [
              "来源图未单独呈现毛利润小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 47%",
              "同比 -4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 24%",
              "同比 -2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "aramco-q1-fy24",
    "company": "Saudi Aramco",
    "period": "Q1 FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "SAR",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processing/aramco-q1-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 438,
      "notes": [
        "(5%) Y/Y"
      ],
      "items": [
        {
          "id": "reported_revenue",
          "label": "Revenue",
          "value": 402,
          "notes": [
            "(4%) Y/Y"
          ],
          "children": [
            {
              "id": "crude_oil",
              "label": "Crude Oil",
              "value": 200,
              "notes": [
                "(6%) Y/Y"
              ]
            },
            {
              "id": "refined_chemical_products",
              "label": "Refined & Chemical products",
              "value": 182,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "natural_gas_ngls",
              "label": "Natural gas & NGLs",
              "value": 12,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "metal_products",
              "label": "Metal products",
              "value": 3,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "other",
              "label": "Other",
              "value": 5,
              "notes": [
                "+212% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "other_income_related_sales",
          "label": "Other income related to sales",
          "value": 36,
          "notes": [
            "(15%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart does not break out cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 236,
        "items": [
          {
            "id": "purchases",
            "label": "Purchases",
            "value": 110
          },
          {
            "id": "royalties",
            "label": "Royalties",
            "value": 52
          },
          {
            "id": "producing_manufacturing",
            "label": "Producing & Manufacturing",
            "value": 24
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 23
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 22
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 3
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 102
      }
    },
    "otherIncome": {
      "total": 4,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 4
        }
      ]
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Revenue and other income related to sales",
        "value": 438,
        "notes": [
          "The source chart does not present a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 202,
        "notes": [
          "46% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 102,
        "notes": [
          "23% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月",
        "revenue": {
          "notes": [
            "同比 -5%"
          ],
          "items": [
            {
              "id": "reported_revenue",
              "label": "收入",
              "notes": [
                "同比 -4%"
              ],
              "children": [
                {
                  "id": "crude_oil",
                  "label": "原油",
                  "notes": [
                    "同比 -6%"
                  ]
                },
                {
                  "id": "refined_chemical_products",
                  "label": "炼油及化工产品",
                  "notes": [
                    "同比 -3%"
                  ]
                },
                {
                  "id": "natural_gas_ngls",
                  "label": "天然气及天然气液",
                  "notes": [
                    "同比 +7%"
                  ]
                },
                {
                  "id": "metal_products",
                  "label": "金属产品",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "other",
                  "label": "其他",
                  "notes": [
                    "同比 +212%"
                  ]
                }
              ]
            },
            {
              "id": "other_income_related_sales",
              "label": "销售相关其他收入",
              "notes": [
                "同比 -15%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未拆分收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchases",
                "label": "采购"
              },
              {
                "id": "royalties",
                "label": "特许权使用费"
              },
              {
                "id": "producing_manufacturing",
                "label": "生产及制造"
              },
              {
                "id": "da",
                "label": "折旧及摊销"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "exploration",
                "label": "勘探"
              },
              {
                "id": "rnd",
                "label": "研发"
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
              "id": "finance",
              "label": "财务收益"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "收入及销售相关其他收入",
            "notes": [
              "来源图未单独呈现毛利润小计。"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 46%",
              "同比 -2 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 23%",
              "同比 -3 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "aramco-q2-fy24",
    "company": "Saudi Aramco",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "SAR",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/aramco-q2-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 471,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "reported_revenue",
          "label": "Revenue",
          "value": 426,
          "notes": [
            "+6% Y/Y"
          ],
          "children": [
            {
              "id": "crude_oil",
              "label": "Crude Oil",
              "value": 211,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "refined_chemical_products",
              "label": "Refined & Chemical products",
              "value": 198,
              "notes": [
                "+11% Y/Y"
              ]
            },
            {
              "id": "natural_gas_ngls",
              "label": "Natural gas & NGLs",
              "value": 12,
              "notes": [
                "+19% Y/Y"
              ]
            },
            {
              "id": "metal_products",
              "label": "Metal products",
              "value": 2,
              "notes": [
                "(37%) Y/Y"
              ]
            },
            {
              "id": "other",
              "label": "Other",
              "value": 3,
              "notes": [
                "+178% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "other_income_related_sales",
          "label": "Other income related to sales",
          "value": 45,
          "notes": [
            "(2%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart does not break out cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 264,
        "items": [
          {
            "id": "purchases",
            "label": "Purchases",
            "value": 134
          },
          {
            "id": "royalties",
            "label": "Royalties",
            "value": 55
          },
          {
            "id": "producing_manufacturing",
            "label": "Producing & Manufacturing",
            "value": 25
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 25
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 21
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 2
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 101
      }
    },
    "otherIncome": {
      "total": 4,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 4
        }
      ]
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Revenue and other income related to sales",
        "value": 471,
        "notes": [
          "The source chart does not present a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 206,
        "notes": [
          "44% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 109,
        "notes": [
          "23% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "id": "reported_revenue",
              "label": "收入",
              "notes": [
                "同比 +6%"
              ],
              "children": [
                {
                  "id": "crude_oil",
                  "label": "原油",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "refined_chemical_products",
                  "label": "炼油及化工产品",
                  "notes": [
                    "同比 +11%"
                  ]
                },
                {
                  "id": "natural_gas_ngls",
                  "label": "天然气及天然气液",
                  "notes": [
                    "同比 +19%"
                  ]
                },
                {
                  "id": "metal_products",
                  "label": "金属产品",
                  "notes": [
                    "同比 -37%"
                  ]
                },
                {
                  "id": "other",
                  "label": "其他",
                  "notes": [
                    "同比 +178%"
                  ]
                }
              ]
            },
            {
              "id": "other_income_related_sales",
              "label": "销售相关其他收入",
              "notes": [
                "同比 -2%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未拆分收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchases",
                "label": "采购"
              },
              {
                "id": "royalties",
                "label": "特许权使用费"
              },
              {
                "id": "producing_manufacturing",
                "label": "生产及制造"
              },
              {
                "id": "da",
                "label": "折旧及摊销"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "exploration",
                "label": "勘探"
              },
              {
                "id": "rnd",
                "label": "研发"
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
              "id": "finance",
              "label": "财务收益"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "收入及销售相关其他收入",
            "notes": [
              "来源图未单独呈现毛利润小计。"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 44%",
              "同比 -4 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 23%",
              "同比 -2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "aramco-q3-fy23",
    "company": "Saudi Aramco",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "SAR",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/aramco-q3-fy23.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 489,
      "notes": [
        "(20%) Y/Y"
      ],
      "items": [
        {
          "id": "reported_revenue",
          "label": "Revenue",
          "value": 424,
          "notes": [
            "(22%) Y/Y"
          ],
          "children": [
            {
              "id": "crude_oil",
              "label": "Crude Oil",
              "value": 204,
              "notes": [
                "(31%) Y/Y"
              ]
            },
            {
              "id": "refined_chemical_products",
              "label": "Refined & Chemical products",
              "value": 197,
              "notes": [
                "(12%) Y/Y"
              ]
            },
            {
              "id": "natural_gas_ngls",
              "label": "Natural gas & NGLs",
              "value": 11,
              "notes": [
                "(43%) Y/Y"
              ]
            },
            {
              "id": "metal_products",
              "label": "Metal products",
              "value": 3,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "other",
              "label": "Other",
              "value": 8,
              "notes": [
                "(471%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "other_income_related_sales",
          "label": "Other income related to sales",
          "value": 65,
          "notes": [
            "(8%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source does not separately show cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 254,
        "items": [
          {
            "id": "royalties",
            "label": "Royalties",
            "value": 55
          },
          {
            "id": "purchases",
            "label": "Purchases",
            "value": 121
          },
          {
            "id": "producing_manufacturing",
            "label": "Producing & Manufacturing",
            "value": 23
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 28
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 2
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 24
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 116
      }
    },
    "otherIncome": {
      "total": 5,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 5
        }
      ]
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Revenue and other income related to sales",
        "value": 489,
        "notes": [
          "Source does not present a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 234,
        "notes": [
          "48% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 122,
        "notes": [
          "25% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "notes": [
      "Source independently rounds displayed values: revenue components 423B vs 424B; 489B less 254B is 235B vs operating profit 234B; operating-expense items 254B; profit bridge 234B + 5B - 116B - 1B = 122B."
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "revenue": {
          "notes": [
            "同比 -20%"
          ],
          "items": [
            {
              "id": "reported_revenue",
              "label": "收入",
              "notes": [
                "同比 -22%"
              ],
              "children": [
                {
                  "id": "crude_oil",
                  "label": "原油",
                  "notes": [
                    "同比 -31%"
                  ]
                },
                {
                  "id": "refined_chemical_products",
                  "label": "炼油及化工产品",
                  "notes": [
                    "同比 -12%"
                  ]
                },
                {
                  "id": "natural_gas_ngls",
                  "label": "天然气及天然气液",
                  "notes": [
                    "同比 -43%"
                  ]
                },
                {
                  "id": "metal_products",
                  "label": "金属产品",
                  "notes": [
                    "同比 -3%"
                  ]
                },
                {
                  "id": "other",
                  "label": "其他",
                  "notes": [
                    "同比 -471%"
                  ]
                }
              ]
            },
            {
              "id": "other_income_related_sales",
              "label": "销售相关其他收入",
              "notes": [
                "同比 -8%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未单独呈现收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "royalties",
                "label": "特许权使用费"
              },
              {
                "id": "purchases",
                "label": "采购"
              },
              {
                "id": "producing_manufacturing",
                "label": "生产及制造"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "exploration",
                "label": "勘探"
              },
              {
                "id": "rnd",
                "label": "研发"
              },
              {
                "id": "da",
                "label": "折旧及摊销"
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
              "id": "finance",
              "label": "财务收益"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "收入及销售相关其他收入",
            "notes": [
              "来源图未单独呈现毛利润小计。"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 48%",
              "同比 -1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 25%",
              "同比 -1 个百分点"
            ]
          }
        },
        "notes": [
          "原图数值独立取整：收入分项 423B、收入 424B；489B 减 254B 为 235B、营业利润 234B；营业费用分项合计 254B；利润桥接 234B + 5B - 116B - 1B = 122B。"
        ]
      }
    }
  },
  {
    "key": "aramco-q3-fy24",
    "company": "Saudi Aramco",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "SAR",
    "unit": "B",
    "decimals": 0,
    "sourceImage": "input/processed/aramco-q3-fy24.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 465,
      "notes": [
        "(5%) Y/Y"
      ],
      "items": [
        {
          "id": "reported_revenue",
          "label": "Revenue",
          "value": 417,
          "notes": [
            "(2%) Y/Y"
          ],
          "children": [
            {
              "id": "crude_oil",
              "label": "Crude Oil",
              "value": 205,
              "notes": [
                "+0% Y/Y"
              ]
            },
            {
              "id": "refined_chemical_products",
              "label": "Refined & Chemical products",
              "value": 198,
              "notes": [
                "(0%) Y/Y"
              ]
            },
            {
              "id": "natural_gas_ngls",
              "label": "Natural gas & NGLs",
              "value": 14,
              "notes": [
                "+24% Y/Y"
              ]
            },
            {
              "id": "other",
              "label": "Other",
              "value": 1,
              "notes": [
                "(85%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "other_income_related_sales",
          "label": "Other income related to sales",
          "value": 48,
          "notes": [
            "(26%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart does not break out cost of revenue or gross profit."
        ]
      },
      "operatingExpenses": {
        "total": 272,
        "items": [
          {
            "id": "purchases",
            "label": "Purchases",
            "value": 144
          },
          {
            "id": "royalties",
            "label": "Royalties",
            "value": 51
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 28
          },
          {
            "id": "producing_manufacturing",
            "label": "Producing & Manufacturing",
            "value": 27
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 17
          },
          {
            "id": "exploration",
            "label": "Exploration",
            "value": 3
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 92
      }
    },
    "otherIncome": {
      "total": 3,
      "items": [
        {
          "id": "finance",
          "label": "Finance",
          "value": 3
        }
      ]
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "label": "Revenue and other income related to sales",
        "value": 465,
        "notes": [
          "The source chart does not present a separate gross-profit subtotal."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 193,
        "notes": [
          "41% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 103,
        "notes": [
          "22% margin",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "revenue": {
          "notes": [
            "同比 -5%"
          ],
          "items": [
            {
              "id": "reported_revenue",
              "label": "收入",
              "notes": [
                "同比 -2%"
              ],
              "children": [
                {
                  "id": "crude_oil",
                  "label": "原油",
                  "notes": [
                    "同比 +0%"
                  ]
                },
                {
                  "id": "refined_chemical_products",
                  "label": "炼油及 化工产品",
                  "notes": [
                    "同比 -0%"
                  ]
                },
                {
                  "id": "natural_gas_ngls",
                  "label": "天然气及 天然气液",
                  "notes": [
                    "同比 +24%"
                  ]
                },
                {
                  "id": "other",
                  "label": "其他",
                  "notes": [
                    "同比 -85%"
                  ]
                }
              ]
            },
            {
              "id": "other_income_related_sales",
              "label": "销售相关 其他收入",
              "notes": [
                "同比 -26%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图未拆分收入成本或毛利润。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "purchases",
                "label": "采购"
              },
              {
                "id": "royalties",
                "label": "特许权使用费"
              },
              {
                "id": "da",
                "label": "折旧及摊销"
              },
              {
                "id": "producing_manufacturing",
                "label": "生产及 制造"
              },
              {
                "id": "sga",
                "label": "销售、一般及行政费用"
              },
              {
                "id": "exploration",
                "label": "勘探"
              },
              {
                "id": "rnd",
                "label": "研发"
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
              "id": "finance",
              "label": "财务收益"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "收入及销售相关其他收入",
            "notes": [
              "来源图未单独呈现毛利润小计。"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 41%",
              "同比 -6 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 22%",
              "同比 -3 个百分点"
            ]
          }
        }
      }
    }
  }
]);
})(window);
