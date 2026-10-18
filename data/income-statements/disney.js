/* Pure income-statement SSOT records. */
(function(global){ 'use strict'; const ssot = (global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || {schemaVersion:1,records:[]}); ssot.records.push(...[
  {
    "key": "disney-q2-fy26-by-segment",
    "company": "Disney",
    "period": "Q2 FY26",
    "periodNote": "Ending Mar. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/disney-q2-fy26-by-segment.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 25.168,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "entertainment_total",
          "label": "Entertainment",
          "value": 11.715,
          "notes": [
            "+10% Y/Y"
          ],
          "children": [
            {
              "id": "subscription",
              "label": "Subscription",
              "value": 7.8,
              "notes": [
                "+14% Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 1.7,
              "notes": [
                "+5% Y/Y"
              ]
            },
            {
              "id": "content_sales_licensing",
              "label": "Content Sales Licensing",
              "value": 1.7,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "entertainment_other",
              "label": "Other",
              "value": 0.5,
              "notes": [
                "(18%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "sports",
          "label": "Sports",
          "value": 4.609,
          "notes": [
            "+2% Y/Y"
          ]
        },
        {
          "id": "experiences_total",
          "label": "Experiences",
          "value": 9.487,
          "notes": [
            "+7% Y/Y"
          ],
          "children": [
            {
              "id": "parks_experiences",
              "label": "Parks & Experiences",
              "value": 8.5,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "consumer_products",
              "label": "Consumer Products",
              "value": 1,
              "notes": [
                "+3% Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -0.643,
          "notes": [
            "Intersegment eliminations shown as ($0.7B) in the source chart."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart is a segment view and does not show a separate gross-profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 20.565,
        "notes": [
          "Derived as revenue less total segment operating income; shown in the source chart as Segment Costs & expenses."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Segment Costs & expenses",
            "value": 20.565
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "The source chart does not show tax in this segment operating income view."
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
        "id": "revenue",
        "label": "Revenue",
        "value": 25.168,
        "notes": [
          "Used as the gross layer because the source chart is a segment operating income bridge."
        ]
      },
      "operating": {
        "id": "segment_operating_profit",
        "label": "Segment operating profit",
        "value": 4.603,
        "notes": [
          "18% margin",
          "(1pp) Y/Y"
        ],
        "items": [
          {
            "id": "entertainment_profit",
            "label": "Entertainment",
            "value": 1.336,
            "notes": [
              "11% margin",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "sports_profit",
            "label": "Sports",
            "value": 0.652,
            "notes": [
              "14% margin",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "experiences_profit",
            "label": "Experiences",
            "value": 2.615,
            "notes": [
              "28% margin",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "net": {
        "id": "segment_operating_profit",
        "label": "Segment operating profit",
        "value": 4.603,
        "notes": [
          "No separate net income line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 3 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "entertainment_total",
              "label": "娱乐",
              "notes": [
                "同比 +10%"
              ],
              "children": [
                {
                  "id": "subscription",
                  "label": "订阅",
                  "notes": [
                    "同比 +14%"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 +5%"
                  ]
                },
                {
                  "id": "content_sales_licensing",
                  "label": "内容销售授权",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "entertainment_other",
                  "label": "其他",
                  "notes": [
                    "同比 (18%)"
                  ]
                }
              ]
            },
            {
              "id": "sports",
              "label": "体育",
              "notes": [
                "同比 +2%"
              ]
            },
            {
              "id": "experiences_total",
              "label": "体验",
              "notes": [
                "同比 +7%"
              ],
              "children": [
                {
                  "id": "parks_experiences",
                  "label": "乐园及体验",
                  "notes": [
                    "同比 +7%"
                  ]
                },
                {
                  "id": "consumer_products",
                  "label": "消费品",
                  "notes": [
                    "同比 +3%"
                  ]
                }
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "来源图表显示分部间抵销为 ($0.7B)。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图表为分部视图，未显示单独的毛利润或收入成本层级。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "按收入减去总分部营业利润推导；来源图表显示为 Segment Costs & expenses。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "分部成本及费用"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图表的分部营业利润视图未显示税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "收入",
            "notes": [
              "由于来源图表为分部营业利润桥图，这里将收入作为总利润桥层级。"
            ]
          },
          "operating": {
            "label": "分部营业利润",
            "notes": [
              "利润率 18%",
              "同比 (1 个百分点)"
            ],
            "items": [
              {
                "id": "entertainment_profit",
                "label": "娱乐",
                "notes": [
                  "利润率 11%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "id": "sports_profit",
                "label": "体育",
                "notes": [
                  "利润率 14%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "experiences_profit",
                "label": "体验",
                "notes": [
                  "利润率 28%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "net": {
            "label": "分部营业利润",
            "notes": [
              "来源图表未显示单独的净利润项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "disney-q3-fy26-by-segment",
    "company": "Disney",
    "period": "Q3 FY26",
    "periodNote": "Ending June 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/disney-q3-fy26-by-segment.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 25.2,
      "notes": [
        "+7% Y/Y"
      ],
      "items": [
        {
          "id": "entertainment_total",
          "label": "Entertainment",
          "value": 11.3,
          "notes": [
            "+6% Y/Y"
          ],
          "children": [
            {
              "id": "subscription",
              "label": "Subscription",
              "value": 7.5,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "advertising",
              "label": "Advertising",
              "value": 1.6,
              "notes": [
                "(1%) Y/Y"
              ]
            },
            {
              "id": "content_sales_licensing",
              "label": "Content Sales Licensing",
              "value": 1.6,
              "notes": [
                "(6%) Y/Y"
              ]
            },
            {
              "id": "entertainment_other",
              "label": "Other",
              "value": 0.6,
              "notes": [
                "(4%) Y/Y"
              ]
            }
          ]
        },
        {
          "id": "sports",
          "label": "Sports",
          "value": 4.5,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "experiences_total",
          "label": "Experiences",
          "value": 10,
          "notes": [
            "+10% Y/Y"
          ],
          "children": [
            {
              "id": "parks_experiences",
              "label": "Parks & Experiences",
              "value": 8.9,
              "notes": [
                "+10% Y/Y"
              ]
            },
            {
              "id": "consumer_products",
              "label": "Consumer Products",
              "value": 1.1,
              "notes": [
                "+7% Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -0.6,
          "notes": [
            "Intersegment eliminations shown as ($0.6B) in the source chart."
          ],
          "id": "eliminations"
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "label": "Cost of revenue",
        "value": 0,
        "notes": [
          "The source chart is a segment view and does not show a separate gross-profit or cost-of-revenue layer."
        ]
      },
      "operatingExpenses": {
        "total": 19.7,
        "notes": [
          "Source-stated rounded segment costs and expenses; revenue less segment operating profit differs by $0.1B due to displayed rounding."
        ],
        "items": [
          {
            "id": "operating_expenses",
            "label": "Segment Costs & expenses",
            "value": 19.7
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "The source chart does not show tax in this segment operating income view."
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
        "id": "revenue",
        "label": "Revenue",
        "value": 25.2,
        "notes": [
          "Used as the gross layer because the source chart is a segment operating income bridge."
        ]
      },
      "operating": {
        "id": "segment_operating_profit",
        "label": "Segment operating profit",
        "value": 5.6,
        "notes": [
          "22% margin",
          "+3pp Y/Y"
        ],
        "items": [
          {
            "id": "entertainment_profit",
            "label": "Entertainment",
            "value": 1.7,
            "notes": [
              "15% margin",
              "+5pp Y/Y"
            ],
            "children": [
              {
                "id": "svod_profit",
                "label": "SVOD",
                "value": 0.7
              },
              {
                "id": "entertainment_other_profit",
                "label": "Other",
                "value": 1
              }
            ]
          },
          {
            "id": "sports_profit",
            "label": "Sports",
            "value": 0.9,
            "notes": [
              "19% margin",
              "(5pp) Y/Y"
            ]
          },
          {
            "id": "experiences_profit",
            "label": "Experiences",
            "value": 3,
            "notes": [
              "30% margin",
              "+3pp Y/Y",
              "The sum of rounded source callout amounts differs from the displayed segment total."
            ],
            "children": [
              {
                "id": "parks_profit",
                "label": "Parks",
                "value": 2.5
              },
              {
                "id": "experiences_other_profit",
                "label": "Other",
                "value": 0.6
              }
            ]
          }
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source reports segment operating profit only; no net result is shown."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 6 月",
        "revenue": {
          "notes": [
            "同比 +7%"
          ],
          "items": [
            {
              "id": "entertainment_total",
              "label": "娱乐",
              "notes": [
                "同比 +6%"
              ],
              "children": [
                {
                  "id": "subscription",
                  "label": "订阅",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "advertising",
                  "label": "广告",
                  "notes": [
                    "同比 (1%)"
                  ]
                },
                {
                  "id": "content_sales_licensing",
                  "label": "内容销售授权",
                  "notes": [
                    "同比 (6%)"
                  ]
                },
                {
                  "id": "entertainment_other",
                  "label": "其他",
                  "notes": [
                    "同比 (4%)"
                  ]
                }
              ]
            },
            {
              "id": "sports",
              "label": "体育",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "experiences_total",
              "label": "体验",
              "notes": [
                "同比 +10%"
              ],
              "children": [
                {
                  "id": "parks_experiences",
                  "label": "乐园及体验",
                  "notes": [
                    "同比 +10%"
                  ]
                },
                {
                  "id": "consumer_products",
                  "label": "消费品",
                  "notes": [
                    "同比 +7%"
                  ]
                }
              ]
            },
            {
              "id": "eliminations",
              "label": "抵销",
              "notes": [
                "来源图表显示分部间抵销为 ($0.6B)。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "收入成本",
            "notes": [
              "来源图表为分部视图，未显示单独的毛利润或收入成本层级。"
            ]
          },
          "operatingExpenses": {
            "notes": [
              "保留来源显示的分部成本及费用；收入减分部营业利润与其相差 $0.1B，为显示值的舍入差额。"
            ],
            "items": [
              {
                "id": "operating_expenses",
                "label": "分部成本及费用"
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图表的分部营业利润视图未显示税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "收入",
            "notes": [
              "由于来源图表为分部营业利润桥图，这里将收入作为总利润桥层级。"
            ]
          },
          "operating": {
            "label": "分部营业利润",
            "notes": [
              "利润率 22%",
              "同比 +3 个百分点"
            ],
            "items": [
              {
                "id": "entertainment_profit",
                "label": "娱乐",
                "notes": [
                  "利润率 15%",
                  "同比 +5 个百分点"
                ],
                "children": [
                  {
                    "id": "svod_profit",
                    "label": "订阅视频"
                  },
                  {
                    "id": "entertainment_other_profit",
                    "label": "其他"
                  }
                ]
              },
              {
                "id": "sports_profit",
                "label": "体育",
                "notes": [
                  "利润率 19%",
                  "同比 (5 个百分点)"
                ]
              },
              {
                "id": "experiences_profit",
                "label": "体验",
                "notes": [
                  "利润率 30%",
                  "同比 +3 个百分点",
                  "来源明细的舍入值合计与分部显示总额不同；保留原图显示值。"
                ],
                "children": [
                  {
                    "id": "parks_profit",
                    "label": "乐园"
                  },
                  {
                    "id": "experiences_other_profit",
                    "label": "其他"
                  }
                ]
              }
            ]
          },
          "net": {
            "label": "未报告净利润",
            "notes": [
              "来源仅报告分部营业利润，未显示净利润。"
            ]
          }
        }
      }
    }
  },
{
  "key": "disney-q4-fy22",
  "company": "Disney",
  "period": "Q4 FY22",
  "periodNote": "Ending Sept. 2022",
  "currency": "$",
  "unit": "B",
  "decimals": 1,
  "sourceImage": "input/processed/disney-q4-fy22.png",
  "roundingTolerance": 0.15,
  "revenue": {
    "total": 20.1,
    "notes": [
      "+9% Y/Y"
    ],
    "items": [
      {
        "id": "media_total",
        "label": "Media & Entertainment",
        "value": 12.7,
        "notes": [
          "(3%) Y/Y"
        ],
        "children": [
          {
            "id": "linear",
            "label": "Linear Networks",
            "value": 6.3,
            "notes": [
              "(5%) Y/Y"
            ]
          },
          {
            "id": "dtc",
            "label": "Direct to consumer",
            "value": 4.9,
            "notes": [
              "+8% Y/Y"
            ]
          },
          {
            "id": "content",
            "label": "Content Sales Licensing",
            "value": 1.7,
            "notes": [
              "(15%) Y/Y"
            ]
          },
          {
            "id": "eliminations",
            "label": "Eliminations",
            "value": -0.3
          }
        ]
      },
      {
        "id": "parks_total",
        "label": "Parks, Experiences & Products",
        "value": 7.4,
        "notes": [
          "+36% Y/Y"
        ],
        "children": [
          {
            "id": "parks",
            "label": "Parks & Experiences",
            "value": 6.1,
            "notes": [
              "+46% Y/Y"
            ]
          },
          {
            "id": "consumer",
            "label": "Consumer Products",
            "value": 1.3,
            "notes": [
              "+4% Y/Y"
            ]
          }
        ]
      }
    ]
  },
  "costs": {
    "costOfRevenue": {
      "label": "Cost of revenue not separately reported",
      "value": 0
    },
    "operatingExpenses": {
      "total": 19.6,
      "items": [
        {
          "id": "operating_expenses",
          "label": "Costs & expenses",
          "value": 19.6
        }
      ]
    },
    "tax": {
      "label": "Tax not reported",
      "value": 0
    }
  },
  "operatingOtherExpenses": {
    "total": 0.2,
    "items": [
      {
        "id": "other",
        "label": "Other",
        "value": 0.2
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
      "id": "revenue",
      "label": "Revenue layer (gross profit not separately reported)",
      "value": 20.1
    },
    "operating": {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.4,
      "notes": [
        "2% margin",
        "+0.3pp Y/Y"
      ],
      "items": [
        {
          "id": "segment_profit",
          "label": "Segment operating profit",
          "value": 1.6,
          "children": [
            {
              "id": "parks_profit",
              "label": "Parks",
              "value": 1.5,
              "notes": [
                "20% adj. margin"
              ]
            },
            {
              "id": "media_profit",
              "label": "Media",
              "value": 0.1,
              "notes": [
                "1% adj. margin"
              ],
              "children": [
                {
                  "id": "linear_profit",
                  "label": "Linear",
                  "value": 1.7
                },
                {
                  "id": "dtc_profit",
                  "label": "DTC",
                  "value": -1.5
                },
                {
                  "id": "content_profit",
                  "label": "Content",
                  "value": -0.2
                }
              ]
            }
          ]
        },
        {
          "id": "amortization",
          "label": "Amortization",
          "value": -0.6
        },
        {
          "id": "other_costs",
          "label": "Other costs",
          "value": -0.3
        },
        {
          "id": "unallocated",
          "label": "Unallocated",
          "value": -0.3
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
  "i18n": {
    "zh": {
      "period": "2022 财年第四季度",
      "periodNote": "截至 2022 年 9 月",
      "revenue": {
        "notes": [
          "同比 +9%"
        ],
        "items": [
          {
            "id": "media_total",
            "label": "媒体及 娱乐",
            "notes": [
              "同比 (3%)"
            ],
            "children": [
              {
                "id": "linear",
                "label": "线性 电视网",
                "notes": [
                  "同比 (5%)"
                ]
              },
              {
                "id": "dtc",
                "label": "直接面向 消费者",
                "notes": [
                  "同比 +8%"
                ]
              },
              {
                "id": "content",
                "label": "内容销售 与授权",
                "notes": [
                  "同比 (15%)"
                ]
              },
              {
                "id": "eliminations",
                "label": "抵销"
              }
            ]
          },
          {
            "id": "parks_total",
            "label": "乐园、 体验及 产品",
            "notes": [
              "同比 +36%"
            ],
            "children": [
              {
                "id": "parks",
                "label": "乐园及 体验",
                "notes": [
                  "同比 +46%"
                ]
              },
              {
                "id": "consumer",
                "label": "消费 产品",
                "notes": [
                  "同比 +4%"
                ]
              }
            ]
          }
        ]
      },
      "costs": {
        "costOfRevenue": {
          "label": "未单列收入成本"
        },
        "operatingExpenses": {
          "items": [
            {
              "id": "operating_expenses",
              "label": "成本及 费用"
            }
          ]
        },
        "tax": {
          "label": "未报告税费"
        }
      },
      "operatingOtherExpenses": {
        "items": [
          {
            "id": "other",
            "label": "其他"
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
          "id": "revenue",
          "label": "收入层（未单列毛利润）"
        },
        "operating": {
          "id": "operating_profit",
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 +0.3 个百分点"
          ],
          "items": [
            {
              "id": "segment_profit",
              "label": "分部 营业 利润",
              "children": [
                {
                  "id": "parks_profit",
                  "label": "乐园",
                  "notes": [
                    "调整后利润率 20%"
                  ]
                },
                {
                  "id": "media_profit",
                  "label": "媒体",
                  "notes": [
                    "调整后利润率 1%"
                  ],
                  "children": [
                    {
                      "id": "linear_profit",
                      "label": "线性电视"
                    },
                    {
                      "id": "dtc_profit",
                      "label": "直接面向消费者"
                    },
                    {
                      "id": "content_profit",
                      "label": "内容"
                    }
                  ]
                }
              ]
            },
            {
              "id": "amortization",
              "label": "摊销"
            },
            {
              "id": "other_costs",
              "label": "其他成本"
            },
            {
              "id": "unallocated",
              "label": "未分摊"
            }
          ]
        },
        "net": {
          "label": "未报告净利润",
          "notes": [
            "原图止于营业利润。"
          ]
        }
      }
    }
  }
}
]); })(window);
