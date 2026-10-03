(function(global){global.INCOME_STATEMENT_SSOT=global.INCOME_STATEMENT_SSOT||{schemaVersion:1,records:[]};global.INCOME_STATEMENT_SSOT.records.push(...[
  {
    "key": "vail-resorts-q2-fy26",
    "company": "Vail Resorts",
    "period": "Q2 FY26",
    "periodNote": "Ending Jan. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/vail-resorts-q2-fy26.png",
    "roundingTolerance": 3.1,
    "revenue": {
      "total": 1084,
      "notes": [
        "(5%) Y/Y"
      ],
      "items": [
        {
          "id": "mountain",
          "label": "Mountain",
          "value": 1012,
          "notes": [
            "(5%) Y/Y"
          ],
          "children": [
            {
              "id": "lift",
              "label": "Lift",
              "value": 626,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "ski_school",
              "label": "Ski school",
              "value": 121,
              "notes": [
                "(9%) Y/Y"
              ]
            },
            {
              "id": "dining",
              "label": "Dining",
              "value": 85,
              "notes": [
                "(7%) Y/Y"
              ]
            },
            {
              "id": "retail_rental",
              "label": "Retail/rental",
              "value": 126,
              "notes": [
                "(7%) Y/Y"
              ]
            },
            {
              "id": "other_revenue",
              "label": "Other",
              "value": 55,
              "notes": [
                "(7%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 72,
          "notes": [
            "(3%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart bridges revenue directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 739,
        "notes": [
          "The displayed expense detail sums to $736M because each Source amount is independently rounded."
        ],
        "items": [
          {
            "id": "mountain_lodging",
            "label": "Mountain & Lodging",
            "value": 481
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 122
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 74
          },
          {
            "id": "retail_dining",
            "label": "Retail & Dining",
            "value": 59
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 72
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 47,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 47
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "revenue",
        "label": "Revenue",
        "value": 1084,
        "notes": [
          "Synthetic SSOT subtotal because the source chart does not show a gross-profit layer."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 345,
        "notes": [
          "32% margin",
          "(2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 226,
        "notes": [
          "21% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 1 月",
        "revenue": {
          "notes": [
            "同比 -5%"
          ],
          "items": [
            {
              "id": "mountain",
              "label": "山地业务",
              "notes": [
                "同比 -5%"
              ],
              "children": [
                {
                  "id": "lift",
                  "label": "缆车",
                  "notes": [
                    "同比 -3%"
                  ]
                },
                {
                  "id": "ski_school",
                  "label": "滑雪学校",
                  "notes": [
                    "同比 -9%"
                  ]
                },
                {
                  "id": "dining",
                  "label": "餐饮",
                  "notes": [
                    "同比 -7%"
                  ]
                },
                {
                  "id": "retail_rental",
                  "label": "零售及租赁",
                  "notes": [
                    "同比 -7%"
                  ]
                },
                {
                  "id": "other_revenue",
                  "label": "其他",
                  "notes": [
                    "同比 -7%"
                  ]
                }
              ]
            },
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 -3%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图直接将收入桥接至营业利润和运营费用，未显示毛利润层级。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "各来源金额独立四舍五入，因此图示费用明细合计为 7.36 亿美元。"
            ],
            "items": [
              {
                "id": "mountain_lodging",
                "label": "山地及住宿"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "retail_dining",
                "label": "零售及餐饮"
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "收入",
            "notes": [
              "来源图未显示毛利润层级，因此 SSOT 将收入用作合成小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 32%",
              "同比 -2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 21%",
              "同比 -2 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "vail-resorts-q3-fy26",
    "company": "Vail Resorts",
    "period": "Q3 FY26",
    "periodNote": "Ending Apr. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/vail-resorts-q3-fy26.png",
    "roundingTolerance": 1,
    "revenue": {
      "total": 1205,
      "notes": [
        "(7%) Y/Y"
      ],
      "items": [
        {
          "id": "mountain",
          "label": "Mountain",
          "value": 1130,
          "notes": [
            "(7%) Y/Y"
          ],
          "children": [
            {
              "id": "lift",
              "label": "Lift",
              "value": 729,
              "notes": [
                "(5%) Y/Y"
              ]
            },
            {
              "id": "ski_school",
              "label": "Ski school",
              "value": 142,
              "notes": [
                "(12%) Y/Y"
              ]
            },
            {
              "id": "dining",
              "label": "Dining",
              "value": 99,
              "notes": [
                "(11%) Y/Y"
              ]
            },
            {
              "id": "retail_rental",
              "label": "Retail/rental",
              "value": 104,
              "notes": [
                "(8%) Y/Y"
              ]
            },
            {
              "id": "other_revenue",
              "label": "Other",
              "value": 55,
              "notes": [
                "(4%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 75,
          "notes": [
            "(9%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart bridges revenue directly to operating profit and operating expenses."
        ]
      },
      "operatingExpenses": {
        "total": 711,
        "notes": [
          "Source chart label: Operating expenses."
        ],
        "items": [
          {
            "id": "mountain_lodging",
            "label": "Mountain & Lodging",
            "value": 460
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 102
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 77
          },
          {
            "id": "retail_dining",
            "label": "Retail & dining",
            "value": 57
          },
          {
            "id": "retail_dining_other",
            "label": "Retail & Dining",
            "value": 15
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 106
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 48,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 48
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "revenue",
        "label": "Revenue",
        "value": 1205,
        "notes": [
          "Synthetic SSOT subtotal because the source chart does not show a gross-profit layer."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 494,
        "notes": [
          "41% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 340,
        "notes": [
          "28% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 4 月",
        "revenue": {
          "notes": [
            "同比 -7%"
          ],
          "items": [
            {
              "id": "mountain",
              "label": "山地业务",
              "notes": [
                "同比 -7%"
              ],
              "children": [
                {
                  "id": "lift",
                  "label": "缆车",
                  "notes": [
                    "同比 -5%"
                  ]
                },
                {
                  "id": "ski_school",
                  "label": "滑雪学校",
                  "notes": [
                    "同比 -12%"
                  ]
                },
                {
                  "id": "dining",
                  "label": "餐饮",
                  "notes": [
                    "同比 -11%"
                  ]
                },
                {
                  "id": "retail_rental",
                  "label": "零售及租赁",
                  "notes": [
                    "同比 -8%"
                  ]
                },
                {
                  "id": "other_revenue",
                  "label": "其他",
                  "notes": [
                    "同比 -4%"
                  ]
                }
              ]
            },
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 -9%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图直接将收入桥接至营业利润和运营费用，未显示毛利润层级。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "来源图标签为 Operating expenses。"
            ],
            "items": [
              {
                "id": "mountain_lodging",
                "label": "山地及住宿"
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "retail_dining",
                "label": "零售及餐饮"
              },
              {
                "id": "retail_dining_other",
                "label": "零售及餐饮"
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "收入",
            "notes": [
              "来源图未显示毛利润层级，因此 SSOT 将收入用作合成小计。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 41%",
              "同比 -4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 28%",
              "同比 -4 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "vail-resorts-fy26",
    "company": "Vail Resorts",
    "period": "FY26",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "sourceImage": "input/processed/vail-resorts-fy26.png",
    "roundingTolerance": 1.1,
    "revenue": {
      "total": 2838,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "mountain",
          "label": "Mountain",
          "value": 2503,
          "notes": [
            "(5%) Y/Y"
          ],
          "children": [
            {
              "id": "lift",
              "label": "Lift",
              "value": 1451,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "ski_school",
              "label": "Ski school",
              "value": 278,
              "notes": [
                "(10%) Y/Y"
              ]
            },
            {
              "id": "dining",
              "label": "Dining",
              "value": 223,
              "notes": [
                "(8%) Y/Y"
              ]
            },
            {
              "id": "retail_rental",
              "label": "Retail/rental",
              "value": 283,
              "notes": [
                "(7%) Y/Y"
              ]
            },
            {
              "id": "other_revenue",
              "label": "Other",
              "value": 269,
              "notes": [
                "(2%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "lodging",
          "label": "Lodging",
          "value": 329,
          "notes": [
            "(2%) Y/Y"
          ]
        },
        {
          "id": "real_estate",
          "label": "Real estate",
          "value": 6,
          "notes": [
            "+1,324% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_revenue",
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "Source has no separate cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 2418,
        "items": [
          {
            "id": "mountain_lodging",
            "label": "Mountain & Lodging",
            "value": 1485
          },
          {
            "id": "ga",
            "label": "G&A",
            "value": 434
          },
          {
            "id": "da",
            "label": "D&A",
            "value": 306
          },
          {
            "id": "retail_dining",
            "label": "Retail & Dining",
            "value": 168
          },
          {
            "id": "other_operating_expense",
            "label": "Other",
            "value": 25
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 56
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 194,
      "items": [
        {
          "id": "other_expense",
          "label": "Other",
          "value": 194
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "revenue",
        "label": "Revenue",
        "value": 2838,
        "notes": [
          "Synthetic subtotal; Source has no gross-profit layer."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating income",
        "value": 421,
        "notes": [
          "15% margin",
          "(4pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net income",
        "value": 171,
        "notes": [
          "6% margin",
          "(4pp) Y/Y"
        ]
      }
    },
    "notes": [
      "Source rounding: mountain children sum to $2,504M versus $2,503M; revenue less operating expenses is $420M versus $421M operating income."
    ],
    "i18n": {
      "zh": {
        "period": "2026 财年",
        "periodNote": "截至 2026 年 7 月",
        "revenue": {
          "notes": [
            "同比 -4%"
          ],
          "items": [
            {
              "id": "mountain",
              "label": "山地业务",
              "notes": [
                "同比 -5%"
              ],
              "children": [
                {
                  "id": "lift",
                  "label": "缆车",
                  "notes": [
                    "同比 -3%"
                  ]
                },
                {
                  "id": "ski_school",
                  "label": "滑雪学校",
                  "notes": [
                    "同比 -10%"
                  ]
                },
                {
                  "id": "dining",
                  "label": "餐饮",
                  "notes": [
                    "同比 -8%"
                  ]
                },
                {
                  "id": "retail_rental",
                  "label": "零售及租赁",
                  "notes": [
                    "同比 -7%"
                  ]
                },
                {
                  "id": "other_revenue",
                  "label": "其他",
                  "notes": [
                    "同比 -2%"
                  ]
                }
              ]
            },
            {
              "id": "lodging",
              "label": "住宿",
              "notes": [
                "同比 -2%"
              ]
            },
            {
              "id": "real_estate",
              "label": "房地产",
              "notes": [
                "同比 +1,324%"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "原图未单列收入成本。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "mountain_lodging",
                "label": [
                  "山地及",
                  "住宿"
                ]
              },
              {
                "id": "ga",
                "label": "管理费用"
              },
              {
                "id": "da",
                "label": "折旧与摊销"
              },
              {
                "id": "retail_dining",
                "label": "零售及餐饮"
              },
              {
                "id": "other_operating_expense",
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
              "id": "other_expense",
              "label": "其他"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "收入",
            "notes": [
              "原图没有毛利润层级，以收入作合成小计。"
            ]
          },
          "operating": {
            "label": [
              "营业",
              "利润"
            ],
            "notes": [
              "利润率 15%",
              "同比 -4 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 -4 个百分点"
            ]
          }
        },
        "notes": [
          "原图独立取整：山地收入分项合计 $2,504M，总额 $2,503M；收入减营业费用为 $420M，营业利润为 $421M。"
        ]
      }
    }
  }
]);})(window);