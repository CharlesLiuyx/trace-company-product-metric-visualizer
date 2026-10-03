/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "pfizer-q3-fy25",
    "company": "Pfizer",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 28, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/pfizer-q3-fy25.png",
    "sourceUrl": "https://www.sec.gov/Archives/edgar/data/78003/000007800325000149/pfe-09282025xex99.htm",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 16.7,
      "notes": [
        "(6%) Y/Y"
      ],
      "items": [
        {
          "id": "biopharma",
          "label": "Biopharma",
          "value": 16.3,
          "notes": [
            "(6%) Y/Y"
          ],
          "children": [
            {
              "id": "primary_care",
              "label": [
                "Primary",
                "Care"
              ],
              "value": 7.6,
              "notes": [
                "(16%) Y/Y"
              ]
            },
            {
              "id": "specialty_care",
              "label": [
                "Specialty",
                "Care"
              ],
              "value": 4.4,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "oncology",
              "label": "Oncology",
              "value": 4.3,
              "notes": [
                "+5% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "business_innovation",
          "label": [
            "Business",
            "innovation"
          ],
          "value": 0.3,
          "notes": [
            "+11% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 4.2
      },
      "operatingExpenses": {
        "total": 9.1,
        "items": [
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.9,
            "notes": [
              "24% of revenue",
              "+9pp Y/Y"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3.2,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.2,
            "notes": [
              "7% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 0.8
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "The source presents tax as a benefit flowing into net profit."
        ]
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "tax",
          "label": "Tax",
          "value": 0.2,
          "notes": [
            "Source-presented tax benefit."
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
        "value": 12.5,
        "notes": [
          "75% margin",
          "+5pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.3,
        "notes": [
          "20% margin",
          "(7pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.6,
        "notes": [
          "21% Y/Y",
          "(4pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 28 日的季度",
        "revenue": {
          "notes": [
            "同比 (6%)"
          ],
          "items": [
            {
              "label": "生物制药",
              "notes": [
                "同比 (6%)"
              ],
              "children": [
                {
                  "label": [
                    "初级",
                    "医疗"
                  ],
                  "notes": [
                    "同比 (16%)"
                  ]
                },
                {
                  "label": [
                    "专科",
                    "医疗"
                  ],
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "label": "肿瘤",
                  "notes": [
                    "同比 +5%"
                  ]
                }
              ]
            },
            {
              "label": [
                "业务",
                "创新"
              ],
              "notes": [
                "同比 +11%"
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
                "label": "研发",
                "notes": [
                  "占收入 24%",
                  "同比 +9 个百分点"
                ]
              },
              {
                "label": "销售、一般及行政费用",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "label": "摊销",
                "notes": [
                  "占收入 7%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "税项",
            "notes": [
              "来源图将税项作为流入净利润的收益呈现。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "税收收益",
              "notes": [
                "来源图所示税收收益。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 +5 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 (7 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 21%",
              "同比 (4 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "pfizer-q4-fy25",
    "company": "Pfizer",
    "period": "Q4 FY25",
    "periodNote": "Quarter ended Dec. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/pfizer-q4-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 17.6,
      "notes": [
        "(1%) Y/Y"
      ],
      "items": [
        {
          "id": "primary_care",
          "label": [
            "Primary",
            "Care"
          ],
          "value": 7.9,
          "notes": [
            "(11%) Y/Y"
          ]
        },
        {
          "id": "specialty_care",
          "label": [
            "Specialty",
            "Care"
          ],
          "value": 4.8,
          "notes": [
            "+8% Y/Y"
          ]
        },
        {
          "id": "oncology",
          "label": "Oncology",
          "value": 4.4,
          "notes": [
            "+9% Y/Y"
          ]
        },
        {
          "id": "business_innovation",
          "label": [
            "Business",
            "innovation"
          ],
          "value": 0.4,
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
        "value": 5.3
      },
      "operatingExpenses": {
        "total": 13.9,
        "items": [
          {
            "id": "other",
            "label": "Other",
            "value": 5.1,
            "notes": [
              "29% of revenue",
              "+12pp Y/Y"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 4.2,
            "notes": [
              "24% of revenue",
              "(0pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 3.4,
            "notes": [
              "19% of revenue",
              "+1pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.2,
            "notes": [
              "7% of revenue",
              "(1pp) Y/Y"
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
        "value": 12.3,
        "notes": [
          "70% margin",
          "+3pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -1.6,
        "notes": [
          "(9%) margin",
          "(9pp) Y/Y"
        ]
      },
      "net": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -1.6,
        "notes": [
          "No separate net income or net loss line is shown in the source chart."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 12 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 (1%)"
          ],
          "items": [
            {
              "label": [
                "初级",
                "医疗"
              ],
              "notes": [
                "同比 (11%)"
              ]
            },
            {
              "label": [
                "专科",
                "医疗"
              ],
              "notes": [
                "同比 +8%"
              ]
            },
            {
              "label": "肿瘤",
              "notes": [
                "同比 +9%"
              ]
            },
            {
              "label": [
                "业务",
                "创新"
              ],
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
                "label": "其他",
                "notes": [
                  "占收入 29%",
                  "同比 +12 个百分点"
                ]
              },
              {
                "label": "销售、一般及行政费用",
                "notes": [
                  "占收入 24%",
                  "同比 (0 个百分点)"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 +1 个百分点"
                ]
              },
              {
                "label": "摊销",
                "notes": [
                  "占收入 7%",
                  "同比 (1 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 70%",
              "同比 +3 个百分点"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (9%)",
              "同比 (9 个百分点)"
            ]
          },
          "net": {
            "label": "营业亏损",
            "notes": [
              "来源图未单独显示净利润或净亏损项目。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "pfizer-q1-fy26",
    "company": "Pfizer",
    "period": "Q1 FY26",
    "periodNote": "Quarter ended Mar. 31, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/pfizer-q1-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 14.5,
      "notes": [
        "+5% Y/Y"
      ],
      "items": [
        {
          "id": "primary_care",
          "label": [
            "Primary",
            "Care"
          ],
          "value": 5.5,
          "notes": [
            "(3%) Y/Y"
          ]
        },
        {
          "id": "specialty_care",
          "label": [
            "Specialty",
            "Care"
          ],
          "value": 2.9,
          "notes": [
            "+12% Y/Y"
          ]
        },
        {
          "id": "oncology",
          "label": "Oncology",
          "value": 3.8,
          "notes": [
            "+10% Y/Y"
          ]
        },
        {
          "id": "hospital_biosimilars",
          "label": [
            "Hospital",
            "& Biosimilars"
          ],
          "value": 1.9,
          "notes": [
            "+13% Y/Y"
          ]
        },
        {
          "id": "business_innovation",
          "label": [
            "Business",
            "innovation"
          ],
          "value": 0.3,
          "notes": [
            "+6% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 3.5
      },
      "operatingExpenses": {
        "total": 7.7,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3,
            "notes": [
              "20% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.6,
            "notes": [
              "18% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.2,
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 1
          }
        ]
      },
      "tax": {
        "id": "tax_and_other",
        "label": "Tax & other",
        "value": 0.5
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
        "value": 10.9,
        "notes": [
          "75% margin",
          "(4pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.2,
        "notes": [
          "22% margin",
          "+2pp Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.7,
        "notes": [
          "19% Y/Y",
          "(3pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 3 月 31 日的季度",
        "revenue": {
          "notes": [
            "同比 +5%"
          ],
          "items": [
            {
              "label": [
                "初级",
                "医疗"
              ],
              "notes": [
                "同比 (3%)"
              ]
            },
            {
              "label": [
                "专科",
                "医疗"
              ],
              "notes": [
                "同比 +12%"
              ]
            },
            {
              "label": "肿瘤",
              "notes": [
                "同比 +10%"
              ]
            },
            {
              "label": [
                "医院及",
                "生物类似药"
              ],
              "notes": [
                "同比 +13%"
              ]
            },
            {
              "label": [
                "业务",
                "创新"
              ],
              "notes": [
                "同比 +6%"
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
                "label": "销售、一般及行政费用",
                "notes": [
                  "占收入 20%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 18%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "label": "摊销",
                "notes": [
                  "占收入 8%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "其他"
              }
            ]
          },
          "tax": {
            "label": "税费及其他"
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 75%",
              "同比 (4 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 22%",
              "同比 +2 个百分点"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 19%",
              "同比 (3 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "pfizer-q2-fy26",
    "company": "Pfizer",
    "period": "Q2 FY26",
    "periodNote": "Source-stated Q2 FY26",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/pfizer-q2-fy26.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 15,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "biopharma",
          "label": "Biopharma",
          "value": 14.7,
          "notes": [
            "+2% Y/Y"
          ],
          "children": [
            {
              "id": "primary_care",
              "label": "Primary Care",
              "value": 5.5,
              "notes": [
                "(3%) Y/Y"
              ]
            },
            {
              "id": "specialty_care",
              "label": "Specialty Care",
              "value": 3.4,
              "notes": [
                "+9% Y/Y"
              ]
            },
            {
              "id": "oncology",
              "label": "Oncology",
              "value": 4.2,
              "notes": [
                "+3% Y/Y"
              ]
            },
            {
              "id": "hospital_biosimilars",
              "label": "Hospital & Biosimilars",
              "value": 1.6,
              "notes": [
                "+0% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "other_revenue",
          "label": "Other",
          "value": 0.4,
          "notes": [
            "+7% Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 4.1,
        "notes": []
      },
      "operatingExpenses": {
        "total": 11.6,
        "items": [
          {
            "id": "other",
            "label": "Other",
            "value": 4.2,
            "notes": [
              "28% of revenue",
              "+23pp Y/Y"
            ]
          },
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3.4,
            "notes": [
              "23% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.8,
            "notes": [
              "19% of revenue",
              "+2pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.2,
            "notes": [
              "8% of revenue",
              "(0pp) Y/Y"
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
        "value": 10.9,
        "notes": [
          "73% margin",
          "(1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_loss",
        "label": "Operating loss",
        "value": -0.7,
        "notes": [
          "(4%) margin",
          "(25pp) Y/Y"
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "The Source ends at operating loss and does not disclose net income or net loss."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "来源标注为 2026 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "label": "生物制药",
              "notes": [
                "同比 +2%"
              ],
              "children": [
                {
                  "label": [
                    "初级",
                    "医疗"
                  ],
                  "notes": [
                    "同比 (3%)"
                  ]
                },
                {
                  "label": [
                    "专科",
                    "医疗"
                  ],
                  "notes": [
                    "同比 +9%"
                  ]
                },
                {
                  "label": [
                    "肿瘤"
                  ],
                  "notes": [
                    "同比 +3%"
                  ]
                },
                {
                  "label": [
                    "医院及",
                    "生物类似药"
                  ],
                  "notes": [
                    "同比 +0%"
                  ]
                }
              ]
            },
            {
              "label": "其他",
              "notes": [
                "同比 +7%"
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
                "label": "其他",
                "notes": [
                  "占收入 28%",
                  "同比 +23 个百分点"
                ]
              },
              {
                "label": "销售、一般及行政费用",
                "notes": [
                  "占收入 23%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 19%",
                  "同比 +2 个百分点"
                ]
              },
              {
                "label": "摊销",
                "notes": [
                  "占收入 8%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源图未显示单独的税费项目。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 73%",
              "同比 (1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业亏损",
            "notes": [
              "利润率 (4%)",
              "同比 (25 个百分点)"
            ]
          },
          "net": {
            "label": "净利润未披露",
            "notes": [
              "来源图截至营业亏损，未披露净利润或净亏损。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "pfizer-q1-fy25",
    "company": "Pfizer",
    "period": "Q1 FY25",
    "periodNote": "Source-stated Q1 FY25",
    "currency": "$",
    "unit": "B",
    "decimals": 4,
    "sourceImage": "input/processed/pfizer-q1-fy25.png",
    "roundingTolerance": 0.2,
    "revenue": {
      "total": 13.7,
      "notes": [
        "(8%) Y/Y"
      ],
      "items": [
        {
          "id": "biopharma",
          "label": "Biopharma",
          "value": 13.4,
          "notes": [
            "(8%) Y/Y"
          ],
          "children": [
            {
              "id": "primary_care",
              "label": "Primary Care",
              "value": 5.7,
              "notes": [
                "(21%) Y/Y"
              ]
            },
            {
              "id": "specialty_care",
              "label": "Specialty Care",
              "value": 4,
              "notes": [
                "+4% Y/Y"
              ]
            },
            {
              "id": "oncology",
              "label": "Oncology",
              "value": 3.8,
              "notes": [
                "+6% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "business_innovation",
          "label": "Business innovation",
          "value": 0.3,
          "notes": [
            "(1%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 2.8,
        "notes": []
      },
      "operatingExpenses": {
        "total": 8.1,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 3,
            "notes": [
              "22% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": "R&D",
            "value": 2.2,
            "notes": [
              "16% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": "Amortization",
            "value": 1.2,
            "notes": [
              "9% of revenue",
              "+0pp Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": "Restructuring",
            "value": 0.7,
            "notes": [
              "5% of revenue",
              "+4pp Y/Y"
            ]
          },
          {
            "id": "other",
            "label": "Other",
            "value": 1,
            "notes": []
          }
        ]
      },
      "tax": {
        "label": "Tax",
        "value": 0,
        "notes": [
          "The source shows a tax benefit in other income."
        ]
      }
    },
    "otherIncome": {
      "total": 0.2,
      "items": [
        {
          "id": "tax",
          "label": "Tax benefit",
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
        "value": 10.9,
        "notes": [
          "79% margin",
          "+2pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 2.8,
        "notes": [
          "20% margin",
          "(3pp) Y/Y"
        ],
        "valueText": "$2.8B"
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3,
        "notes": [
          "22% Y/Y",
          "+1pp Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第一季度",
        "periodNote": "来源标注为 2025 财年第一季度",
        "revenue": {
          "notes": [
            "同比 (8%)"
          ],
          "items": [
            {
              "label": "生物制药",
              "notes": [
                "同比 (8%)"
              ],
              "children": [
                {
                  "label": "初级医疗",
                  "notes": [
                    "同比 (21%)"
                  ]
                },
                {
                  "label": "专科医疗",
                  "notes": [
                    "同比 +4%"
                  ]
                },
                {
                  "label": "肿瘤",
                  "notes": [
                    "同比 +6%"
                  ]
                }
              ]
            },
            {
              "label": "业务创新",
              "notes": [
                "同比 (1%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "notes": []
          },
          "operatingExpenses": {
            "items": [
              {
                "label": "销售、一般及行政费用",
                "notes": [
                  "占收入 22%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "研发",
                "notes": [
                  "占收入 16%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "label": "摊销",
                "notes": [
                  "占收入 9%",
                  "同比 +0 个百分点"
                ]
              },
              {
                "label": "重组",
                "notes": [
                  "占收入 5%",
                  "同比 +4 个百分点"
                ]
              },
              {
                "label": "其他",
                "notes": []
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "来源所示税收收益计入其他收益。"
            ]
          }
        },
        "otherIncome": {
          "items": [
            {
              "label": "税收收益",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 79%",
              "同比 +2 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 20%",
              "同比 (3 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "同比 22%",
              "同比 +1 个百分点"
            ]
          }
        }
      }
    }
  },
  {
    "key": "pfizer-q4-fy24",
    "company": "Pfizer",
    "period": "Q4 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 3,
    "sourceImage": "input/processed/pfizer-q4-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 17.8,
      "notes": [
        "+22% Y/Y"
      ],
      "items": [
        {
          "id": "biopharma",
          "label": [
            "Biopharma"
          ],
          "value": 17.4,
          "notes": [
            "+23% Y/Y"
          ],
          "children": [
            {
              "id": "primary_care",
              "label": [
                "Primary",
                "Care"
              ],
              "value": 8.9,
              "notes": [
                "+27% Y/Y"
              ]
            },
            {
              "id": "specialty_care",
              "label": [
                "Specialty",
                "Care"
              ],
              "value": 4.4,
              "notes": [
                "+12% Y/Y"
              ]
            },
            {
              "id": "oncology",
              "label": [
                "Oncology"
              ],
              "value": 4.1,
              "notes": [
                "+27% Y/Y"
              ]
            }
          ]
        },
        {
          "id": "business_innovation",
          "label": [
            "Business",
            "innovation"
          ],
          "value": 0.4,
          "notes": [
            "(9%) Y/Y"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": [
          "Cost of sales"
        ],
        "value": 5.9,
        "notes": []
      },
      "operatingExpenses": {
        "id": "operating_expenses",
        "label": "Operating expenses",
        "total": 11.9,
        "items": [
          {
            "id": "sga",
            "label": [
              "SG&A"
            ],
            "value": 4.3,
            "notes": [
              "24% of revenue",
              "(7pp) Y/Y"
            ]
          },
          {
            "id": "rnd",
            "label": [
              "R&D"
            ],
            "value": 3,
            "notes": [
              "17% of revenue",
              "(2pp) Y/Y"
            ]
          },
          {
            "id": "other",
            "label": [
              "Other"
            ],
            "value": 2.4,
            "notes": [
              "13% of revenue",
              "+14pp Y/Y"
            ]
          },
          {
            "id": "amortization",
            "label": [
              "Amortization"
            ],
            "value": 1.4,
            "notes": [
              "8% of revenue",
              "(1pp) Y/Y"
            ]
          },
          {
            "id": "restructuring",
            "label": [
              "Restructuring"
            ],
            "value": 0.7,
            "notes": [
              "4% of revenue",
              "(13pp) Y/Y"
            ]
          },
          {
            "id": "in_process_rnd",
            "label": [
              "In process R&D"
            ],
            "value": 0.1,
            "notes": [
              "0% of revenue",
              "(0pp) Y/Y"
            ]
          }
        ]
      },
      "tax": {
        "label": "Tax not reported",
        "value": 0,
        "notes": [
          "Source ends at pretax loss; tax not reported."
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
        "id": "gross_profit",
        "label": [
          "Gross profit"
        ],
        "value": 11.9,
        "notes": [
          "67% margin",
          "+19pp Y/Y"
        ]
      },
      "operating": {
        "id": "pretax_loss",
        "label": "Pretax loss",
        "value": -0.009,
        "notes": [
          "0% margin",
          "+28pp Y/Y",
          "Source-presented pretax result; no separate operating result is shown."
        ]
      },
      "net": {
        "availability": "not-reported",
        "value": null,
        "label": "Net result not reported",
        "notes": [
          "Source ends at pretax loss and does not report net income or loss."
        ]
      }
    },
    "i18n": {
      "zh": {
        "revenue": {
          "notes": [
            "同比 +22%"
          ],
          "items": [
            {
              "id": "biopharma",
              "label": "生物制药",
              "notes": [
                "同比 +23%"
              ],
              "children": [
                {
                  "id": "primary_care",
                  "label": [
                    "初级",
                    "医疗"
                  ],
                  "notes": [
                    "同比 +27%"
                  ]
                },
                {
                  "id": "specialty_care",
                  "label": [
                    "专科",
                    "医疗"
                  ],
                  "notes": [
                    "同比 +12%"
                  ]
                },
                {
                  "id": "oncology",
                  "label": [
                    "肿瘤"
                  ],
                  "notes": [
                    "同比 +27%"
                  ]
                }
              ]
            },
            {
              "id": "business_innovation",
              "label": [
                "业务",
                "创新"
              ],
              "notes": [
                "同比 (9%)"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "label": "营业费用",
            "items": [
              {
                "id": "sga",
                "label": "销售及行政费用",
                "notes": [
                  "占收入 24%",
                  "同比 (7 个百分点)"
                ]
              },
              {
                "id": "rnd",
                "label": "研发",
                "notes": [
                  "占收入 17%",
                  "同比 (2 个百分点)"
                ]
              },
              {
                "id": "other",
                "label": [
                  "其他"
                ],
                "notes": [
                  "占收入 13%",
                  "同比 +14 个百分点"
                ]
              },
              {
                "id": "amortization",
                "label": [
                  "摊销"
                ],
                "notes": [
                  "占收入 8%",
                  "同比 (1 个百分点)"
                ]
              },
              {
                "id": "restructuring",
                "label": [
                  "重组"
                ],
                "notes": [
                  "占收入 4%",
                  "同比 (13 个百分点)"
                ]
              },
              {
                "id": "in_process_rnd",
                "label": [
                  "在研研发"
                ],
                "notes": [
                  "占收入 0%",
                  "同比 (0 个百分点)"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费未披露",
            "notes": [
              "原图止于税前亏损，未披露税费。"
            ]
          }
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 67%",
              "同比 +19 个百分点"
            ]
          },
          "operating": {
            "label": "税前亏损",
            "notes": [
              "利润率 0%",
              "同比 +28 个百分点",
              "原图披露税前结果，未单列营业结果。"
            ]
          },
          "net": {
            "label": "净结果未披露",
            "notes": [
              "原图止于税前亏损，未披露净利润或净亏损。"
            ]
          }
        }
      }
    }
  }
]);
})(window);
