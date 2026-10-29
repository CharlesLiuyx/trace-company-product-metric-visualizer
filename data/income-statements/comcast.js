/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "comcast-q4-fy25",
    "company": "Comcast",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 32.31,
      "notes": [
        "+4% Y/Y in the source visualization."
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.2,
          "notes": [
            "(1%) Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 17.6,
              "notes": [
                "(2%) Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.6,
              "notes": [
                "+6% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.9,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 13.5,
          "notes": [
            "+5% Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 7.6,
              "notes": [
                "+6% Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 3,
              "notes": [
                "(7%) Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2.9,
              "notes": [
                "+22% Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -2.3,
          "notes": [
            "The source visualization shows $0.8B and $1.5B intersegment-elimination bridges."
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 10.305
      },
      "operatingExpenses": {
        "total": 18.517,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 11.903
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2.427
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.393
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.794
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 0.089
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1.328,
      "items": [
        {
          "id": "interest",
          "label": "Interest expense",
          "value": 1.126
        },
        {
          "id": "other",
          "label": "Investment and other income (loss), net",
          "value": 0.202
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 22.005,
        "notes": [
          "68% margin",
          "(0pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.488,
        "notes": [
          "11% margin",
          "(5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.071,
        "notes": [
          "6% margin",
          "(8pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "来源可视化显示同比 +4%"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 (1%)"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 (2%)"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +6%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 +5%"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 +6%"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 (7%)"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 +22%"
                  ]
                }
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "来源可视化显示 $0.8B 和 $1.5B 的分部间抵销桥。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息费用"
            },
            {
              "id": "other",
              "label": "投资及其他损益净额"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 68%",
              "同比 (0 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 11%",
              "同比 (5 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (8 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "comcast-q1-fy26",
    "company": "Comcast",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 31.5,
      "notes": [
        "+5% Y/Y in the source visualization."
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20,
          "notes": [
            "(1%) Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 17.3,
              "notes": [
                "(2%) Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.6,
              "notes": [
                "+6% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 1.1,
          "notes": [
            "+11% Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 13,
          "notes": [
            "+41% Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 7.3,
              "notes": [
                "+61% Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 3.4,
              "notes": [
                "+21% Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2.3,
              "notes": [
                "+24% Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -2.6,
          "notes": [
            "The source visualization shows $1.1B and $1.5B intersegment-elimination bridges."
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 31.5,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Content & Experiences eliminations",
              "value": 1.1
            },
            {
              "id": "eliminations_gross",
              "label": "Consolidated eliminations",
              "value": 1.5
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 28.9
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 10.9
      },
      "operatingExpenses": {
        "total": 16.4,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 10.4
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.3
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 0.7
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1.4,
      "items": [
        {
          "id": "interest",
          "label": "Interest expense",
          "value": 1.1
        },
        {
          "id": "other",
          "label": "Investment and other income (loss), net",
          "value": 0.3
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 20.6,
        "notes": [
          "65% margin",
          "(6pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.1,
        "notes": [
          "13% margin",
          "(6pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2,
        "notes": [
          "6% margin",
          "(5pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "来源可视化显示同比 +5%"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 (1%)"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 (2%)"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +6%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 +11%"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 +41%"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 +61%"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 +21%"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 +24%"
                  ]
                }
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "来源可视化显示 $1.1B 和 $1.5B 的分部间抵销桥。"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "source_elimination_magnitudes",
              "label": "来源抵销金额",
              "items": [
                {
                  "id": "eliminations_content",
                  "label": "内容与体验抵销"
                },
                {
                  "id": "eliminations_gross",
                  "label": "合并抵销"
                },
                {
                  "label": "扣除图示抵销金额后的收入"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息费用"
            },
            {
              "id": "other",
              "label": "投资及其他损益净额"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 65%",
              "同比 (6 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 (6 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 6%",
              "同比 (5 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "comcast-q2-fy26",
    "company": "Comcast",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 29.9,
      "notes": [
        "(1%) Y/Y in the source visualization."
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 19.8,
          "notes": [
            "(3%) Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 17.1,
              "notes": [
                "(4%) Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.7,
              "notes": [
                "+4% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.5,
          "notes": [
            "+14% Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 10.7,
          "notes": [
            "+23% Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 5.7,
              "notes": [
                "+25% Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 3,
              "notes": [
                "+25% Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2.4,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "label": "Content & Experiences eliminations",
              "value": -0.4
            }
          ]
        },
        {
          "label": "Eliminations and consolidation adjustments",
          "value": -1.1,
          "notes": [
            "Balances the source visualization primary revenue view; the two displayed elimination bridges are retained independently below."
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 29.9,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Content & Experiences eliminations",
              "value": 0.4
            },
            {
              "id": "eliminations_gross",
              "label": "Consolidated eliminations",
              "value": 1.3
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 28.2
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 8.4
      },
      "operatingExpenses": {
        "total": 16.4,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 10.4
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.3
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2.4
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 1.2
      }
    },
    "otherIncome": {
      "total": 0.5,
      "items": [
        {
          "id": "other",
          "label": "Investment and other income (loss), net",
          "value": 0.5
        }
      ]
    },
    "otherExpenses": {
      "total": 1.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest expense",
          "value": 1.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21.6,
        "notes": [
          "72% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.2,
        "notes": [
          "17% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.4,
        "notes": [
          "11% margin",
          "(25pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "来源可视化显示同比 (1%)"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 (3%)"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 (4%)"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +4%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 +14%"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 +23%"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 +25%"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 +25%"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "label": "内容与体验抵销"
                }
              ]
            },
            {
              "label": "抵销及合并调整"
            }
          ],
          "breakdowns": [
            {
              "id": "source_elimination_magnitudes",
              "label": "来源抵销金额",
              "items": [
                {
                  "id": "eliminations_content",
                  "label": "内容与体验抵销"
                },
                {
                  "id": "eliminations_gross",
                  "label": "合并抵销"
                },
                {
                  "label": "扣除图示抵销金额后的收入"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "投资及其他损益净额"
            }
          ]
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息费用"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 17%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 (25 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "comcast-q1-fy23",
    "company": "Comcast",
    "period": "Q1 FY23",
    "periodNote": "Quarter ended Mar. 31, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 29.7,
      "notes": [
        "(4%) Y/Y"
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.2,
          "notes": [
            "(2%) Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 17.9,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.3,
              "notes": [
                "+5% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.7,
          "notes": [
            "(1%) Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 11.1,
          "notes": [
            "(10%) Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 6.2,
              "notes": [
                "(21%) Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 3,
              "notes": [
                "+2% Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 1.9,
              "notes": [
                "+25% Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -2.2,
          "notes": [
            "Source displays $0.8B and $1.4B elimination bridges."
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 29.7,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Content & Experiences eliminations",
              "value": 0.8
            },
            {
              "id": "eliminations_gross",
              "label": "Consolidated eliminations",
              "value": 1.4
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 27.5
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 9
      },
      "operatingExpenses": {
        "total": 15,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 9.3
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.3
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.5
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 1.5
      }
    },
    "otherIncome": {
      "total": 0.6,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.6
        }
      ]
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 20.7,
        "notes": [
          "66% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.6,
        "notes": [
          "19% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.8,
        "notes": [
          "13% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 (4%)"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 (2%)"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 (3%)"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +5%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 (1%)"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 (10%)"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 (21%)"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 +2%"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 +25%"
                  ]
                }
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "来源显示 $0.8B 和 $1.4B 的抵销桥。"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "source_elimination_magnitudes",
              "label": "来源抵销金额",
              "items": [
                {
                  "id": "eliminations_content",
                  "label": "内容与体验抵销"
                },
                {
                  "id": "eliminations_gross",
                  "label": "合并抵销"
                },
                {
                  "label": "扣除图示抵销金额后的收入"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "programming_production",
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "所得税费用"
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 66%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +1 个百分点"
            ]
          }
        },
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月 31 日的季度"
      }
    }
  },
  {
    "key": "comcast-q1-fy24",
    "company": "Comcast",
    "period": "Q1 FY24",
    "periodNote": "Quarter ended Mar. 31, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 30.1,
      "notes": [
        "+1% Y/Y in the source visualization."
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.3,
          "notes": [
            "+1% Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 17.9,
              "notes": [
                "+0% Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.4,
              "notes": [
                "+5% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.8,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 11.1,
          "notes": [
            "+0% Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 6.4,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 2.7,
              "notes": [
                "(7%) Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2,
              "notes": [
                "+2% Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -2.1,
          "notes": [
            "Source shows $0.7B and $1.4B elimination bridges."
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 30.1,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Content & Experiences eliminations",
              "value": 0.7
            },
            {
              "id": "eliminations_gross",
              "label": "Consolidated eliminations",
              "value": 1.4
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 28
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 8.8
      },
      "operatingExpenses": {
        "total": 15.4,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 9.9
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.4
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 1.3
      }
    },
    "otherIncome": {
      "total": 0.3,
      "items": [
        {
          "id": "other",
          "label": "Other",
          "value": 0.3
        }
      ]
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21.2,
        "notes": [
          "71% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.8,
        "notes": [
          "19% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.8,
        "notes": [
          "13% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "来源显示同比 +1%"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 +1%"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 +0%"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +5%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 +0%"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 (7%)"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 +2%"
                  ]
                }
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "来源显示 $0.7B 和 $1.4B 的抵销桥。"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "source_elimination_magnitudes",
              "label": "来源抵销金额",
              "items": [
                {
                  "id": "eliminations_content",
                  "label": "内容与体验抵销"
                },
                {
                  "id": "eliminations_gross",
                  "label": "合并抵销"
                },
                {
                  "label": "扣除图示抵销金额后的收入"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "programming_production",
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "所得税费用"
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 71%",
              "同比 +1pp"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 +0pp"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 (0pp)"
            ]
          }
        },
        "period": "2024 财年第一季度",
        "periodNote": "截至 2024 年 3 月 31 日的季度"
      }
    }
  },
  {
    "key": "comcast-q1-fy25",
    "company": "Comcast",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended Mar. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q1-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 29.9,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.1,
          "notes": [
            "(0%) Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 17.6,
              "notes": [
                "(1%) Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.5,
              "notes": [
                "+4% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.7,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 11.1,
          "notes": [
            "+0% Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 6.4,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 2.8,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 1.9,
              "notes": [
                "(5%) Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -2.1,
          "notes": [
            "The source visualization shows $0.7B and $1.4B intersegment-elimination bridges."
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 29.9,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Content & Experiences eliminations",
              "value": 0.7
            },
            {
              "id": "eliminations_gross",
              "label": "Consolidated eliminations",
              "value": 1.4
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 27.8
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 8.4
      },
      "operatingExpenses": {
        "total": 15.8,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 10
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2.1
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.6
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 1.2
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest expense",
          "value": 1.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21.5,
        "notes": [
          "72% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.7,
        "notes": [
          "19% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.3,
        "notes": [
          "11% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 (0%)"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 (1%)"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +4%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 +0%"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 (5%)"
                  ]
                }
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "来源可视化显示 $0.7B 和 $1.4B 的分部间抵销桥。"
              ]
            }
          ],
          "breakdowns": [
            {
              "id": "source_elimination_magnitudes",
              "label": "来源抵销金额",
              "items": [
                {
                  "id": "eliminations_content",
                  "label": "内容与体验抵销"
                },
                {
                  "id": "eliminations_gross",
                  "label": "合并抵销"
                },
                {
                  "label": "扣除图示抵销金额后的收入"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息费用"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 19%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 (2 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "comcast-q2-fy23",
    "company": "Comcast",
    "period": "Q2 FY23",
    "periodNote": "Quarter ended Jun. 30, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 30.5,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.4,
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 18.1
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.3
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.7
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 11.5,
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 6.2
            },
            {
              "id": "studios",
              "label": "Studio",
              "value": 3.1
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2.2
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -2
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 30.5,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Eliminations",
              "value": 0.6
            },
            {
              "id": "eliminations_gross",
              "label": "Eliminations",
              "value": 1.4
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 28.5
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 8.8
      },
      "operatingExpenses": {
        "total": 15,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 9.3
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2.1
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21.7
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.7
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.2
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务"
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务"
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他"
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "children": [
                {
                  "id": "media",
                  "label": "媒体"
                },
                {
                  "id": "studios",
                  "label": "影视工作室"
                },
                {
                  "id": "parks",
                  "label": "主题公园"
                }
              ]
            },
            {
              "label": "抵销"
            }
          ],
          "breakdowns": [
            {
              "id": "source_elimination_magnitudes",
              "label": "来源抵销金额",
              "items": [
                {
                  "id": "eliminations_content",
                  "label": "抵销"
                },
                {
                  "id": "eliminations_gross",
                  "label": "抵销"
                },
                {
                  "label": "扣除图示抵销金额后的收入"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "programming_production",
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherIncome": {},
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
            "id": "gross_profit",
            "label": "毛利润"
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润"
          },
          "net": {
            "id": "net_profit",
            "label": "净利润"
          }
        }
      }
    }
  },
  {
    "key": "comcast-q2-fy24",
    "company": "Comcast",
    "period": "Q2 FY24",
    "periodNote": "Quarter ended Jun. 30, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q2-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 29.7,
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.2,
          "notes": [
            "(1%) Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 17.8,
              "notes": [
                "(1%) Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.4,
              "notes": [
                "+6% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.7,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 10.6,
          "notes": [
            "(8%) Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 6.3,
              "notes": [
                "+2% Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studio",
              "value": 2.3,
              "notes": [
                "(27%) Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2,
              "notes": [
                "(11%) Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Intersegment eliminations",
          "value": -1.8
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 29.7,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Eliminations",
              "value": 0.5
            },
            {
              "id": "eliminations_gross",
              "label": "Eliminations",
              "value": 1.3
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 27.9
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 8
      },
      "operatingExpenses": {
        "total": 15.1,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 9.6
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 1.9
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.4
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1.4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 1
        },
        {
          "id": "other",
          "label": "Other",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21.7,
        "notes": [
          "73% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.6,
        "notes": [
          "22% margin",
          "+0pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.8,
        "notes": [
          "13% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月 30 日的季度",
        "revenue": {
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 (1%)"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 (1%)"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +6%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 (8%)"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 +2%"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 (27%)"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 (11%)"
                  ]
                }
              ]
            },
            {
              "label": "分部间抵销"
            }
          ],
          "breakdowns": [
            {
              "id": "source_elimination_magnitudes",
              "label": "来源抵销金额",
              "items": [
                {
                  "id": "eliminations_content",
                  "label": "抵销"
                },
                {
                  "id": "eliminations_gross",
                  "label": "抵销"
                },
                {
                  "label": "扣除图示抵销金额后的收入"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "programming_production",
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息"
            },
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
              "利润率 73%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 +0 个百分点"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "comcast-q2-fy25",
    "company": "Comcast",
    "period": "Q2 FY25",
    "periodNote": "Quarter ended Jun. 30, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q2-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 30.3,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.4,
          "notes": [
            "+1% Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 17.8,
              "notes": [
                "(0%) Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.6,
              "notes": [
                "+6% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.7,
          "notes": [
            "+0% Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 11.2,
          "notes": [
            "+6% Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 6.4,
              "notes": [
                "+2% Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 2.4,
              "notes": [
                "+8% Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2.3,
              "notes": [
                "+19% Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -2
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 30.3,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Content & Experiences eliminations",
              "value": 0.6
            },
            {
              "id": "eliminations_gross",
              "label": "Consolidated eliminations",
              "value": 1.4
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 28.3
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 7.6
      },
      "operatingExpenses": {
        "total": 16.7,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 10.4
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.3
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.8
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 3.6
      }
    },
    "otherIncome": {
      "total": 9.8,
      "items": [
        {
          "id": "other",
          "label": "Investment and other income (loss), net",
          "value": 9.8
        }
      ]
    },
    "otherExpenses": {
      "total": 1.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest expense",
          "value": 1.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 22.7,
        "notes": [
          "75% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6,
        "notes": [
          "20% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 11,
        "notes": [
          "36% margin",
          "+24pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 +1%"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 (0%)"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +6%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 +0%"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 +6%"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 +2%"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 +8%"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 +19%"
                  ]
                }
              ]
            },
            {
              "label": "抵销"
            }
          ],
          "breakdowns": [
            {
              "id": "source_elimination_magnitudes",
              "label": "来源抵销金额",
              "items": [
                {
                  "id": "eliminations_content",
                  "label": "抵销"
                },
                {
                  "id": "eliminations_gross",
                  "label": "抵销"
                },
                {
                  "label": "扣除图示抵销金额后的收入"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "programming_production",
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "amortization",
                "label": "摊销"
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
              "id": "other",
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 36%",
              "同比 +24 个百分点"
            ]
          }
        },
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月 30 日的季度"
      }
    }
  },
  {
    "key": "comcast-q3-fy23",
    "company": "Comcast",
    "period": "Q3 FY23",
    "periodNote": "Quarter ended Sep. 30, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 30.1,
      "notes": [
        "+1% Y/Y"
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.3,
          "notes": [
            "+1% Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 18,
              "notes": [
                "+1% Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.3,
              "notes": [
                "+5% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.6,
          "notes": [
            "+7% Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 11,
          "notes": [
            "(4%) Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 6,
              "notes": [
                "+0% Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 2.5,
              "notes": [
                "(24%) Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2.4,
              "notes": [
                "+17% Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Intersegment eliminations",
          "value": -1.7
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 30.1,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Content & Experiences eliminations",
              "value": 0.6
            },
            {
              "id": "eliminations_gross",
              "label": "Consolidated eliminations",
              "value": 1.1
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 28.4
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 8.7
      },
      "operatingExpenses": {
        "total": 15,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 9.6
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.2
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 1.9
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 1.5
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21.5,
        "notes": [
          "71% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.5,
        "notes": [
          "22% margin",
          "+30pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4,
        "notes": [
          "13% margin",
          "+29pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 +1%"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 +1%"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +5%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 +7%"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 (4%)"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 +0%"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 (24%)"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 +17%"
                  ]
                }
              ]
            },
            {
              "label": "分部间抵销"
            }
          ],
          "breakdowns": [
            {
              "id": "source_elimination_magnitudes",
              "label": "来源抵销金额",
              "items": [
                {
                  "id": "eliminations_content",
                  "label": "内容与体验抵销"
                },
                {
                  "id": "eliminations_gross",
                  "label": "合并抵销"
                },
                {
                  "label": "扣除图示抵销金额后的收入"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
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
              "利润率 71%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 +30 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 13%",
              "同比 +29 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "comcast-q3-fy24",
    "company": "Comcast",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 30, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q3-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 32,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.3,
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 17.9
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.4
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.7
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 13.3,
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 8.2
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 2.8
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2.3
            }
          ]
        },
        {
          "label": "Intersegment eliminations",
          "value": -2.2
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 32,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Content & Experiences eliminations",
              "value": 0.7
            },
            {
              "id": "eliminations_gross",
              "label": "Consolidated eliminations",
              "value": 1.5
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 29.8
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 10.2
      },
      "operatingExpenses": {
        "total": 16,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 10.1
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.3
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.7
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 1.2
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "interest",
          "label": "Interest expense",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21.9,
        "notes": [
          "68% margin",
          "(3pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.9,
        "notes": [
          "18% margin",
          "(3pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.6,
        "notes": [
          "11% margin",
          "(2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务"
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务"
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他"
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "children": [
                {
                  "id": "media",
                  "label": "媒体"
                },
                {
                  "id": "studios",
                  "label": "影视工作室"
                },
                {
                  "id": "parks",
                  "label": "主题公园"
                }
              ]
            },
            {
              "label": "分部间抵销"
            }
          ],
          "breakdowns": [
            {
              "id": "source_elimination_magnitudes",
              "label": "来源抵销金额",
              "items": [
                {
                  "id": "eliminations_content",
                  "label": "抵销"
                },
                {
                  "id": "eliminations_gross",
                  "label": "抵销"
                },
                {
                  "label": "扣除图示抵销金额后的收入"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "programming_production",
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "id": "tax",
            "label": "税费"
          }
        },
        "otherIncome": {
          "items": []
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 68%",
              "同比 (3 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 (2 个百分点)"
            ]
          }
        },
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月 30 日的季度"
      }
    }
  },
  {
    "key": "comcast-q3-fy25",
    "company": "Comcast",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 30, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 31.2,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.2,
          "notes": [
            "(1%) Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 17.6,
              "notes": [
                "(1%) Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.6,
              "notes": [
                "+6% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.7,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 12.3,
          "notes": [
            "(8%) Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 6.6,
              "notes": [
                "(20%) Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 3,
              "notes": [
                "+6% Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2.7,
              "notes": [
                "+19% Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -2.1,
          "notes": [
            "Source displays $0.6B and $1.5B elimination bridges."
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 31.2,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Content & Experiences eliminations",
              "value": 0.6
            },
            {
              "id": "eliminations_gross",
              "label": "Consolidated eliminations",
              "value": 1.5
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 29.1
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 8.7
      },
      "operatingExpenses": {
        "total": 17,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 10.8
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2.4
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.7
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 1.2
      }
    },
    "otherIncome": {
      "total": 0.1,
      "items": [
        {
          "id": "other",
          "label": "Investment and other income, net",
          "value": 0.1
        }
      ]
    },
    "otherExpenses": {
      "total": 1.1,
      "items": [
        {
          "id": "interest",
          "label": "Interest expense",
          "value": 1.1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 22.5,
        "notes": [
          "72% margin",
          "+4pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.5,
        "notes": [
          "18% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.3,
        "notes": [
          "10% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 30 日的季度",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 (1%)"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 (1%)"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +6%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 (8%)"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 (20%)"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 +6%"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 +19%"
                  ]
                }
              ]
            },
            {
              "label": "抵销"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 72%",
              "同比 +4 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 18%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (1 个百分点)"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息费用"
            }
          ]
        },
        "otherIncome": {
          "items": [
            {
              "id": "other",
              "label": "投资及其他收益净额"
            }
          ]
        }
      }
    }
  },
  {
    "key": "comcast-q4-fy22",
    "company": "Comcast",
    "period": "Q4 FY22",
    "periodNote": "Quarter ended Dec. 31, 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 30.6,
      "items": [
        {
          "id": "cable",
          "label": "Cable Communications",
          "value": 16.6,
          "notes": [
            "+1% Y/Y"
          ]
        },
        {
          "id": "nbcu",
          "label": "NBCU",
          "value": 9.9,
          "notes": [
            "+6% Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 6,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 2.7,
              "notes": [
                "+13% Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Theme Parks",
              "value": 2.1,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "eliminations_nbcu",
              "label": "Eliminations",
              "value": -0.9
            }
          ]
        },
        {
          "id": "sky",
          "label": "Sky",
          "value": 4.4,
          "notes": [
            "(13%) Y/Y"
          ]
        },
        {
          "id": "eliminations_gross",
          "label": "Eliminations",
          "value": -0.4
        }
      ],
      "notes": [
        "+1% Y/Y"
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 9.8
      },
      "operatingExpenses": {
        "total": 16.2,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 10.6
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2.2
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.8
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
      "total": 1,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 20.7,
        "notes": [
          "67% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.5,
        "notes": [
          "16% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.9,
        "notes": [
          "9% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +1%"
          ],
          "items": [
            {
              "id": "cable",
              "label": "有线通信",
              "notes": [
                "同比 +1%"
              ]
            },
            {
              "id": "nbcu",
              "label": "NBCU",
              "notes": [
                "同比 +6%"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 +13%"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "eliminations_nbcu",
                  "label": "抵销"
                }
              ]
            },
            {
              "id": "sky",
              "label": "天空集团",
              "notes": [
                "同比 (13%)"
              ]
            },
            {
              "id": "eliminations_gross",
              "label": "抵销"
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "programming_production",
            "label": "节目与内容制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "amortization",
                "label": "摊销"
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 67%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (1 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "comcast-q4-fy23",
    "company": "Comcast",
    "period": "Q4 FY23",
    "periodNote": "Quarter ended Dec. 31, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q4-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 31.3,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.4,
          "notes": [
            "+1% Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 18.1,
              "notes": [
                "(0%) Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.4,
              "notes": [
                "+6% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.8,
          "notes": [
            "+4% Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 12.4,
          "notes": [
            "+5% Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 7,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 3.1,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2.4,
              "notes": [
                "+12% Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -2.3
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 31.3,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Content & Experiences eliminations",
              "value": 0.9
            },
            {
              "id": "eliminations_gross",
              "label": "Consolidated eliminations",
              "value": 1.4
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 29
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 10.3
      },
      "operatingExpenses": {
        "total": 16.5,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 10.9
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.3
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Income tax expense",
        "value": 0.9
      }
    },
    "otherIncome": {
      "total": 0.6,
      "items": [
        {
          "id": "other",
          "label": "Investment and other income (loss), net",
          "value": 0.6
        }
      ]
    },
    "otherExpenses": {
      "total": 1,
      "items": [
        {
          "id": "interest",
          "label": "Interest expense",
          "value": 1
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21,
        "notes": [
          "67% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.5,
        "notes": [
          "14% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.2,
        "notes": [
          "10% margin",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +2%"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 +1%"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 (0%)"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +6%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 +4%"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 +5%"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 +12%"
                  ]
                }
              ]
            },
            {
              "label": "抵销"
            }
          ],
          "breakdowns": [
            {
              "id": "source_elimination_magnitudes",
              "label": "来源抵销金额",
              "items": [
                {
                  "id": "eliminations_content",
                  "label": "抵销"
                },
                {
                  "id": "eliminations_gross",
                  "label": "抵销"
                },
                {
                  "label": "扣除图示抵销金额后的收入"
                }
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "id": "programming_production",
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "amortization",
                "label": "摊销"
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
              "id": "other",
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
            "id": "gross_profit",
            "label": "毛利润",
            "notes": [
              "利润率 67%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "id": "operating_profit",
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "id": "net_profit",
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "comcast-q4-fy24",
    "company": "Comcast",
    "period": "Q4 FY24",
    "periodNote": "Quarter ended Dec. 31, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/comcast-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 31.9,
      "notes": [
        "+2% Y/Y"
      ],
      "items": [
        {
          "id": "connectivity",
          "label": "Connectivity",
          "value": 20.5,
          "notes": [
            "+0% Y/Y"
          ],
          "children": [
            {
              "id": "residential_connectivity",
              "label": "Residential Connectivity",
              "value": 18,
              "notes": [
                "(0%) Y/Y"
              ]
            },
            {
              "id": "comcast_business",
              "label": "Comcast Business",
              "value": 2.4,
              "notes": [
                "+4% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "corporate",
          "label": "Corporate",
          "value": 0.8,
          "notes": [
            "+3% Y/Y"
          ]
        },
        {
          "id": "content_experiences",
          "label": "Content & Experiences",
          "value": 12.8,
          "notes": [
            "+4% Y/Y"
          ],
          "children": [
            {
              "id": "media",
              "label": "Media",
              "value": 7.2,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "studios",
              "label": "Studios",
              "value": 3.3,
              "notes": [
                "+7% Y/Y"
              ]
            },
            {
              "id": "parks",
              "label": "Parks",
              "value": 2.4,
              "notes": [
                "+0% Y/Y"
              ]
            }
          ]
        },
        {
          "label": "Eliminations",
          "value": -2.2,
          "notes": [
            "The source shows $0.8B and $1.4B elimination bridges."
          ]
        }
      ],
      "breakdowns": [
        {
          "id": "source_elimination_magnitudes",
          "label": "Source elimination magnitudes",
          "total": 31.9,
          "items": [
            {
              "id": "eliminations_content",
              "label": "Content & Experiences eliminations",
              "value": 0.8
            },
            {
              "id": "eliminations_gross",
              "label": "Consolidated eliminations",
              "value": 1.4
            },
            {
              "label": "Revenue net of displayed elimination magnitudes",
              "value": 29.7
            }
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "programming_production",
        "label": "Programming & production",
        "value": 10
      },
      "operatingExpenses": {
        "total": 16.9,
        "items": [
          {
            "id": "other_operating_administrative",
            "label": "Other operating & administrative",
            "value": 10.9
          },
          {
            "id": "advertising",
            "label": "Advertising",
            "value": 2.1
          },
          {
            "id": "depreciation",
            "label": "Depreciation",
            "value": 2.2
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.7
          }
        ]
      },
      "tax": {
        "value": 0,
        "label": "Income tax expense"
      }
    },
    "otherIncome": {
      "total": 1.1,
      "items": [
        {
          "id": "tax",
          "label": "Income tax benefit",
          "value": 1.1
        }
      ]
    },
    "otherExpenses": {
      "total": 1.5,
      "items": [
        {
          "id": "interest",
          "label": "Interest expense",
          "value": 1.1
        },
        {
          "id": "other",
          "label": "Investment and other income (loss), net",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 21.9,
        "notes": [
          "69% margin",
          "+1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5,
        "notes": [
          "16% margin",
          "+1pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.7,
        "notes": [
          "15% margin",
          "+5pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "来源可视化显示同比 +2%"
          ],
          "items": [
            {
              "id": "connectivity",
              "label": "连接业务",
              "notes": [
                "同比 +0%"
              ],
              "children": [
                {
                  "id": "residential_connectivity",
                  "label": "住宅连接业务",
                  "notes": [
                    "同比 (0%)"
                  ]
                },
                {
                  "id": "comcast_business",
                  "label": "Comcast 商务",
                  "notes": [
                    "同比 +4%"
                  ]
                }
              ]
            },
            {
              "id": "corporate",
              "label": "企业及其他",
              "notes": [
                "同比 +3%"
              ]
            },
            {
              "id": "content_experiences",
              "label": "内容与体验",
              "notes": [
                "同比 +4%"
              ],
              "children": [
                {
                  "id": "media",
                  "label": "媒体",
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "id": "studios",
                  "label": "影视工作室",
                  "notes": [
                    "同比 +7%"
                  ]
                },
                {
                  "id": "parks",
                  "label": "主题公园",
                  "notes": [
                    "同比 +0%"
                  ]
                }
              ]
            },
            {
              "label": "抵销",
              "notes": [
                "分部间抵销 $0.8B 和 $1.4B。"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "节目制作"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "other_operating_administrative",
                "label": "其他运营及管理"
              },
              {
                "id": "advertising",
                "label": "广告"
              },
              {
                "id": "depreciation",
                "label": "折旧"
              },
              {
                "id": "amortization",
                "label": "摊销"
              }
            ]
          },
          "tax": {
            "label": "所得税费用"
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息费用"
            },
            {
              "id": "other",
              "label": "投资及其他损益净额"
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 69%",
              "同比 +1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "同比 +1 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 15%",
              "同比 +5 个百分点"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "id": "tax",
              "label": "所得税收益"
            }
          ]
        }
      }
    }
  }
]);
})(window);
