/* Pure INCOME_STATEMENT_SSOT records. Merged by the Publication Module. */
(function (global) {
  const target = global.INCOME_STATEMENT_SSOT = global.INCOME_STATEMENT_SSOT || { schemaVersion: 1, records: [] };
  target.records.push(...[
  {
    "key": "home-depot-q3-fy25",
    "company": "Home Depot",
    "period": "Q3 FY25",
    "periodNote": "Three months ended November 2, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/home-depot-q3-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 41.3,
      "notes": [
        "+3% Y/Y"
      ],
      "items": [
        {
          "id": "building_materials",
          "label": "Building Materials",
          "value": 13.6,
          "notes": [
            "+0% Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "decor",
          "label": "Décor",
          "value": 12.9,
          "notes": [
            "+1% Y/Y",
            "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 10.9,
          "notes": [
            "+0% Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 3.9,
          "notes": [
            "+33% Y/Y",
            "SRS Distribution"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 27.5
      },
      "operatingExpenses": {
        "total": 8.5,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 7.6
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 0.8
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.6,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.6
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 13.8,
        "notes": [
          "33% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.4,
        "notes": [
          "13% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.6,
        "notes": [
          "9% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 11 月 2 日的三个月",
        "revenue": {
          "notes": [
            "同比 +3%"
          ],
          "items": [
            {
              "id": "building_materials",
              "label": "建筑材料",
              "notes": [
                "同比 +0%",
                "电气／照明、木材、木制品和管道"
              ]
            },
            {
              "id": "decor",
              "label": "家居装饰",
              "notes": [
                "同比 +1%",
                "电器、收纳、地板、厨房与卫浴及涂料"
              ]
            },
            {
              "id": "hardlines",
              "label": "五金硬货",
              "notes": [
                "同比 +0%",
                "五金、室内园艺、户外园艺和工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +33%",
                "SRS Distribution（建材分销商）"
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
                "id": "sga",
                "label": "销售、一般及行政费用"
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
              "利润率 33%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 (1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "home-depot-q1-fy26",
    "company": "Home Depot",
    "period": "Q1 FY26",
    "periodNote": "Three months ended May 3, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/home-depot-q1-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 41.8,
      "notes": [
        "+5% Y/Y",
        "Reported net sales were $41.765B; the source chart rounds to $41.8B."
      ],
      "items": [
        {
          "id": "building_materials",
          "label": "Building Materials",
          "value": 13,
          "notes": [
            "(0%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "decor",
          "label": "Décor",
          "value": 12.6,
          "notes": [
            "+1% Y/Y",
            "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 12.2,
          "notes": [
            "+3% Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 4,
          "notes": [
            "+56% Y/Y",
            "SRS Distribution and GMS"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 28,
        "notes": [
          "Reported cost of sales was $27.984B; the source chart rounds to $28.0B."
        ]
      },
      "operatingExpenses": {
        "total": 8.8,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 8,
            "notes": [
              "Reported selling, general and administrative expense was $7.959B; the source chart rounds to $8.0B."
            ]
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 0.8,
            "notes": [
              "Reported depreciation and amortization was $0.841B; the source chart rounds to $0.8B."
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1,
        "notes": [
          "Reported provision for income taxes was $1.088B; the source chart rounds to $1.1B."
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
          "id": "interest",
          "label": "Interest",
          "value": 0.6,
          "notes": [
            "The source chart rounds reported interest and other, net expense of $0.604B to $0.6B."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 13.8,
        "notes": [
          "33% margin",
          "(1pp) Y/Y",
          "Reported gross profit was $13.781B."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5,
        "notes": [
          "12% margin",
          "(1pp) Y/Y",
          "Reported operating income was $4.981B."
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.3,
        "notes": [
          "8% margin",
          "(1pp) Y/Y",
          "Reported net earnings were $3.289B."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第一季度",
        "periodNote": "截至 2026 年 5 月 3 日的三个月",
        "revenue": {
          "notes": [
            "同比 +5%",
            "报告净销售额为 $41.765B；来源图四舍五入为 $41.8B。"
          ],
          "items": [
            {
              "id": "building_materials",
              "label": "建筑材料",
              "notes": [
                "同比 (0%)",
                "电气／照明、木材、木制品和管道"
              ]
            },
            {
              "id": "decor",
              "label": "家居装饰",
              "notes": [
                "同比 +1%",
                "电器、收纳、地板、厨房与卫浴及涂料"
              ]
            },
            {
              "id": "hardlines",
              "label": "五金硬货",
              "notes": [
                "同比 +3%",
                "五金、室内园艺、户外园艺和工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +56%",
                "SRS Distribution 和 GMS"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "notes": [
              "报告销售成本为 $27.984B；来源图四舍五入为 $28.0B。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及行政费用",
                "notes": [
                  "报告销售、一般及行政费用为 $7.959B；来源图四舍五入为 $8.0B。"
                ]
              },
              {
                "id": "da",
                "label": "折旧及摊销",
                "notes": [
                  "报告折旧及摊销为 $0.841B；来源图四舍五入为 $0.8B。"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "报告所得税费用为 $1.088B；来源图四舍五入为 $1.1B。"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息",
              "notes": [
                "来源图将报告的利息和其他净费用 $0.604B 四舍五入为 $0.6B。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 (1 个百分点)",
              "报告毛利润为 $13.781B。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 12%",
              "同比 (1 个百分点)",
              "报告营业利润为 $4.981B。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 8%",
              "同比 (1 个百分点)",
              "报告净利润为 $3.289B。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "home-depot-q4-fy25",
    "company": "Home Depot",
    "period": "Q4 FY25",
    "periodNote": "Three months ended February 1, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/home-depot-q4-fy25.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 38.2,
      "notes": [
        "(4%) Y/Y",
        "Reported net sales were $38.198B; the source chart rounds to $38.2B."
      ],
      "items": [
        {
          "id": "building_materials",
          "label": "Building Materials",
          "value": 11.7,
          "notes": [
            "(8%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "decor",
          "label": "Décor",
          "value": 12.4,
          "notes": [
            "(7%) Y/Y",
            "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 10.9,
          "notes": [
            "(4%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 3.1,
          "notes": [
            "+42% Y/Y",
            "SRS Distribution and GMS"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 25.7,
        "notes": [
          "Reported cost of sales was $25.732B; the source chart rounds to $25.7B."
        ]
      },
      "operatingExpenses": {
        "total": 8.6,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 7.8,
            "notes": [
              "Reported selling, general and administrative expense was $7.772B; the source chart rounds to $7.8B."
            ]
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 0.8,
            "notes": [
              "Reported depreciation and amortization was $0.845B; the source chart rounds to $0.8B."
            ]
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 0.7,
        "notes": [
          "Reported provision for income taxes was $0.727B; the source chart rounds to $0.7B."
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
          "id": "interest",
          "label": "Interest",
          "value": 0.6,
          "notes": [
            "The source chart rounds reported interest and other, net expense of $0.551B to $0.6B."
          ]
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 12.5,
        "notes": [
          "33% margin",
          "(0pp) Y/Y",
          "Reported gross profit was $12.466B."
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 3.8,
        "notes": [
          "10% margin",
          "(1pp) Y/Y",
          "Reported operating income was $3.849B."
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 2.6,
        "notes": [
          "7% margin",
          "(1pp) Y/Y",
          "Reported net earnings were $2.571B."
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2025 财年第四季度",
        "periodNote": "截至 2026 年 2 月 1 日的三个月",
        "revenue": {
          "notes": [
            "同比 (4%)",
            "报告净销售额为 $38.198B；来源图四舍五入为 $38.2B。"
          ],
          "items": [
            {
              "id": "building_materials",
              "label": "建筑材料",
              "notes": [
                "同比 (8%)",
                "电气／照明、木材、木制品和管道"
              ]
            },
            {
              "id": "decor",
              "label": "家居装饰",
              "notes": [
                "同比 (7%)",
                "电器、收纳、地板、厨房与卫浴及涂料"
              ]
            },
            {
              "id": "hardlines",
              "label": "五金硬货",
              "notes": [
                "同比 (4%)",
                "五金、室内园艺、户外园艺和工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +42%",
                "SRS Distribution 和 GMS"
              ]
            }
          ]
        },
        "costs": {
          "costOfRevenue": {
            "label": "销售成本",
            "notes": [
              "报告销售成本为 $25.732B；来源图四舍五入为 $25.7B。"
            ]
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及行政费用",
                "notes": [
                  "报告销售、一般及行政费用为 $7.772B；来源图四舍五入为 $7.8B。"
                ]
              },
              {
                "id": "da",
                "label": "折旧及摊销",
                "notes": [
                  "报告折旧及摊销为 $0.845B；来源图四舍五入为 $0.8B。"
                ]
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": [
              "报告所得税费用为 $0.727B；来源图四舍五入为 $0.7B。"
            ]
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息",
              "notes": [
                "来源图将报告的利息及其他净费用 $0.551B 四舍五入为 $0.6B。"
              ]
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 (0 个百分点)",
              "报告毛利润为 $12.466B。"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 10%",
              "同比 (1 个百分点)",
              "报告营业利润为 $3.849B。"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 7%",
              "同比 (1 个百分点)",
              "报告净利润为 $2.571B。"
            ]
          }
        }
      }
    }
  },
  {
    "key": "home-depot-q2-fy26",
    "company": "Home Depot",
    "period": "Q2 FY26",
    "periodNote": "Q2 FY26",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/home-depot-q2-fy26.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 47.9,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "building_materials",
          "label": "Building Materials",
          "value": 14.4,
          "notes": [
            "+1% Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "decor",
          "label": "Décor",
          "value": 13.9,
          "notes": [
            "+1% Y/Y",
            "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 14.4,
          "notes": [
            "+2% Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        },
        {
          "id": "other",
          "label": "Other",
          "value": 5.1,
          "notes": [
            "+62% Y/Y",
            "SRS Distribution and GMS"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 31.7,
        "notes": []
      },
      "operatingExpenses": {
        "total": 9.3,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 8.4,
            "notes": []
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 0.9,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.5,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.5,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.5,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 16.1,
        "notes": [
          "34% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.8,
        "notes": [
          "14% margin",
          "(0pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.8,
        "notes": [
          "10% margin",
          "(0pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2026 财年第二季度",
        "periodNote": "2026 财年第二季度",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "building_materials",
              "label": "建筑材料",
              "notes": [
                "同比 +1%",
                "电气／照明、木材、木制品和管道"
              ]
            },
            {
              "id": "decor",
              "label": "家居装饰",
              "notes": [
                "同比 +1%",
                "电器、收纳、地板、厨房与卫浴及涂料"
              ]
            },
            {
              "id": "hardlines",
              "label": "五金硬货",
              "notes": [
                "同比 +2%",
                "五金、室内园艺、户外园艺和工具"
              ]
            },
            {
              "id": "other",
              "label": "其他",
              "notes": [
                "同比 +62%",
                "SRS Distribution 和 GMS"
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
                "id": "sga",
                "label": "销售、一般及行政费用",
                "notes": []
              },
              {
                "id": "da",
                "label": "折旧及摊销",
                "notes": []
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": []
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 34%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (0 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (0 个百分点)"
            ]
          }
        }
      }
    }
  },
  {
    "key": "home-depot-q1-fy24",
    "company": "Home Depot",
    "period": "Q1 FY24",
    "periodNote": "Q1 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/home-depot-q1-fy24.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 36.4,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "building_materials",
          "label": "Building Materials",
          "value": 12.6,
          "notes": [
            "(3%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "decor",
          "label": "Décor",
          "value": 12.3,
          "notes": [
            "(3%) Y/Y",
            "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 11.4,
          "notes": [
            "(1%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 24
      },
      "operatingExpenses": {
        "total": 7.4,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 6.7
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 0.7
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.1
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
          "id": "interest",
          "label": "Interest",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 12.4,
        "notes": [
          "34% margin",
          "+0pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.1,
        "notes": [
          "14% margin",
          "(1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.6,
        "notes": [
          "10% margin",
          "(1pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2024 财年第一季度",
        "periodNote": "2024 财年第一季度",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "building_materials",
              "label": "建筑材料",
              "notes": [
                "同比 (3%)",
                "电气／照明、木材、木制品和管道"
              ]
            },
            {
              "id": "decor",
              "label": "家居装饰",
              "notes": [
                "同比 (3%)",
                "电器、收纳、地板、厨房与卫浴及涂料"
              ]
            },
            {
              "id": "hardlines",
              "label": "五金硬货",
              "notes": [
                "同比 (1%)",
                "五金、室内园艺、户外园艺和工具"
              ]
            }
          ]
        },
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "transactions",
            "label": "客户交易",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "sales_per_sqft",
            "label": "每平方英尺零售销售额",
            "notes": [
              "同比"
            ]
          }
        ],
        "costs": {
          "costOfRevenue": {
            "label": "销售成本"
          },
          "operatingExpenses": {
            "items": [
              {
                "id": "sga",
                "label": "销售、一般及行政费用"
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
              "利润率 34%",
              "同比 +0 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
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
        }
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "-2.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(2.8%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n(2.8%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "transactions",
        "label": "Customer transactions",
        "value": "-1.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(1.0%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Customer transactions\n(1.0%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "ticket",
        "label": "Average ticket",
        "value": "-1.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(1.3%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Average ticket\n(1.3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "sales_per_sqft",
        "label": "Sales per retail square foot",
        "value": "-3.4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(3.4%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Sales per retail square foot\n(3.4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            892,
            1233,
            275,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "home-depot-fy23",
    "company": "Home Depot",
    "period": "FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/home-depot-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 152.7,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "building_materials",
          "label": "Building Materials",
          "value": 57,
          "notes": [
            "(4%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "decor",
          "label": "Décor",
          "value": 50.3,
          "notes": [
            "(4%) Y/Y",
            "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 45.3,
          "notes": [
            "(0%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 101.7,
        "notes": []
      },
      "operatingExpenses": {
        "total": 29.3,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 26.6,
            "notes": []
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 2.7,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 4.8,
        "notes": []
      }
    },
    "otherIncome": {
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 1.8,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 1.8,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 51,
        "notes": [
          "33% margin",
          "(0.2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 21.7,
        "notes": [
          "14% margin",
          "(1.1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 15.1,
        "notes": [
          "10% margin",
          "(0.9pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年",
        "periodNote": "截至 2023 年 12 月",
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "building_materials",
              "label": "建筑材料",
              "notes": [
                "同比 (4%)",
                "电气／照明、木材、木制品和管道"
              ]
            },
            {
              "id": "decor",
              "label": "家居装饰",
              "notes": [
                "同比 (4%)",
                "电器、收纳、地板、厨房与卫浴及涂料"
              ]
            },
            {
              "id": "hardlines",
              "label": "五金硬货",
              "notes": [
                "同比 (0%)",
                "五金、室内园艺、户外园艺和工具"
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
                "id": "sga",
                "label": "销售、一般及行政费用"
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
              "利润率 33%",
              "同比 (0.2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (1.1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (0.9 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer_transactions",
            "label": "客户交易次数",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "sales_per_square_foot",
            "label": "每平方英尺零售面积销售额",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "-3.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(3.2%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n(3.2%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            34,
            1233,
            273,
            148
          ]
        }
      },
      {
        "id": "customer_transactions",
        "label": "Customer transactions",
        "value": "-2.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(2.7%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Customer transactions\n(2.7%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1233,
            275,
            148
          ]
        }
      },
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "value": "-0.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(0.3%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Average ticket\n(0.3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            605,
            1233,
            275,
            148
          ]
        }
      },
      {
        "id": "sales_per_square_foot",
        "label": "Sales per retail square foot",
        "value": "-3.6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(3.6%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Sales per retail square foot\n(3.6%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            892,
            1233,
            273,
            148
          ]
        }
      }
    ]
  },
  {
    "key": "home-depot-q2-fy23",
    "company": "Home Depot",
    "period": "Q2 FY23",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/home-depot-q2-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 42.9,
      "notes": [
        "(2%) Y/Y"
      ],
      "items": [
        {
          "id": "building_materials",
          "label": "Building Materials",
          "value": 15.4,
          "notes": [
            "(3%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "decor",
          "label": "Décor",
          "value": 13.4,
          "notes": [
            "(5%) Y/Y",
            "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 14.1,
          "notes": [
            "+2% Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 28.8
      },
      "operatingExpenses": {
        "total": 7.6,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 6.9
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 0.7
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
      "total": 0.4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 14.2,
        "notes": [
          "33% margin",
          "(0.1pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.6,
        "notes": [
          "15% margin",
          "(1.1pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.7,
        "notes": [
          "11% margin",
          "(1.0pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "-2.0",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(2.0%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n(2.0%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            276,
            150
          ]
        }
      },
      {
        "id": "customer_transactions",
        "label": "Customer transactions",
        "value": "-1.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(1.8%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Customer transactions\n(1.8%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "value": "0.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+0.1%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Average ticket\n+0.1% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "sales_per_retail_square_foot",
        "label": "Sales per retail square foot",
        "value": "-2.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(2.3%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Sales per retail square foot\n(2.3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            892,
            1233,
            275,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 7 月",
        "revenue": {
          "notes": [
            "同比 (2%)"
          ],
          "items": [
            {
              "id": "building_materials",
              "label": "建筑材料",
              "notes": [
                "同比 (3%)",
                "电气／照明、木材、木制品和管道"
              ]
            },
            {
              "id": "decor",
              "label": "家居装饰",
              "notes": [
                "同比 (5%)",
                "电器、收纳、地板、厨房与卫浴及涂料"
              ]
            },
            {
              "id": "hardlines",
              "label": "五金硬货",
              "notes": [
                "同比 +2%",
                "五金、室内园艺、户外园艺和工具"
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
                "id": "sga",
                "label": "销售及管理费"
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
              "利润率 33%",
              "同比 (0.1 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 (1.1 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 (1.0 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer_transactions",
            "label": "客户交易量",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "sales_per_retail_square_foot",
            "label": "每零售平方英尺销售额",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "home-depot-q1-fy23",
    "company": "Home Depot",
    "period": "Q1 FY23",
    "periodNote": "Ending Apr. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/home-depot-q1-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 38.9,
      "notes": [
        "+4% Y/Y",
        "Source period retained as printed. Source financial amounts match fiscal 2022 comparatives in the official fiscal 2023 release, while its operating KPI cards match fiscal 2023; mixed-period source is flagged for review. Revenue items sum to $39.0B versus printed $38.9B, within the existing $0.15B rounding tolerance. https://ir.homedepot.com/news-releases/2023/05-16-2023-110108461"
      ],
      "items": [
        {
          "id": "building_materials",
          "label": "Building Materials",
          "value": 14.9,
          "notes": [
            "+9% Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "decor",
          "label": "Décor",
          "value": 12.9,
          "notes": [
            "+8% Y/Y",
            "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 11.2,
          "notes": [
            "(7%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 25.8,
        "notes": []
      },
      "operatingExpenses": {
        "total": 7.2,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 6.6,
            "notes": []
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 0.6,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.3,
        "notes": []
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
          "id": "interest",
          "label": "Interest",
          "value": 0.4,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 13.1,
        "notes": [
          "33% margin",
          "(0.2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.9,
        "notes": [
          "15% margin",
          "(0.2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.2,
        "notes": [
          "11% margin",
          "(0.2pp) Y/Y"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 4 月",
        "revenue": {
          "notes": [
            "同比 +4%"
          ],
          "items": [
            {
              "id": "building_materials",
              "label": "建筑材料",
              "notes": [
                "同比 +9%",
                "电气／照明、木材、木制品和管道"
              ]
            },
            {
              "id": "decor",
              "label": "家居装饰",
              "notes": [
                "同比 +8%",
                "电器、收纳、地板、厨房与卫浴及涂料"
              ]
            },
            {
              "id": "hardlines",
              "label": "五金硬货",
              "notes": [
                "同比 (7%)",
                "五金、室内园艺、户外园艺和工具"
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
                "id": "sga",
                "label": "销售、一般及行政费用",
                "notes": []
              },
              {
                "id": "da",
                "label": "折旧及摊销",
                "notes": []
              }
            ]
          },
          "tax": {
            "label": "税费",
            "notes": []
          }
        },
        "otherExpenses": {
          "items": [
            {
              "id": "interest",
              "label": "利息",
              "notes": []
            }
          ]
        },
        "profit": {
          "gross": {
            "label": "毛利润",
            "notes": [
              "利润率 33%",
              "同比 (0.2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 15%",
              "同比 (0.2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "同比 (0.2 个百分点)"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer_transactions",
            "label": "客户交易",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "sales_per_retail_square_foot",
            "label": "每零售平方英尺销售额",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "-4.5",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(4.5%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n(4.5%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "customer_transactions",
        "label": "Customer transactions",
        "value": "-4.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(4.8%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Customer transactions\n(4.8%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "value": "0.2",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+0.2%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Average ticket\n+0.2% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "sales_per_retail_square_foot",
        "label": "Sales per retail square foot",
        "value": "-4.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(4.7%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Sales per retail square foot\n(4.7%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            892,
            1233,
            275,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "home-depot-q4-fy22",
    "company": "Home Depot",
    "period": "Q4 FY22",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/home-depot-q4-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 35.8,
      "notes": [
        "+0% Y/Y",
        "Printed values retained. Rounding differences: operating expense items 7.1 vs total 7.2; gross less operating expenses 4.7 vs operating profit 4.8. Official release: https://ir.homedepot.com/news-releases/2023/02-21-2023-110144992 (SG&A 6.549B, D&A 0.625B, total 7.174B, gross 11.926B, operating 4.752B)."
      ],
      "items": [
        {
          "id": "building_materials",
          "label": "Building Materials",
          "value": 13.4,
          "notes": [
            "+3% Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "decor",
          "label": "Décor",
          "value": 12.3,
          "notes": [
            "(1%) Y/Y",
            "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 10.1,
          "notes": [
            "(1%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 23.9
      },
      "operatingExpenses": {
        "total": 7.2,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 6.5
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 0.6
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
      "total": 0.4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 11.9,
        "notes": [
          "33% margin",
          "+0.1pp Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 4.8,
        "notes": [
          "13% margin",
          "(0.2pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.4,
        "notes": [
          "9% margin",
          "Unchanged"
        ]
      }
    },
    "i18n": {
      "zh": {
        "period": "2022 财年第四季度",
        "periodNote": "截至 2023 年 1 月",
        "revenue": {
          "notes": [
            "同比 +0%"
          ],
          "items": [
            {
              "id": "building_materials",
              "label": "建筑材料",
              "notes": [
                "同比 +3%",
                "电气／照明、木材、木制品和管道"
              ]
            },
            {
              "id": "decor",
              "label": "家居装饰",
              "notes": [
                "同比 (1%)",
                "电器、收纳、地板、厨房与卫浴及涂料"
              ]
            },
            {
              "id": "hardlines",
              "label": "五金硬货",
              "notes": [
                "同比 (1%)",
                "五金、室内园艺、户外园艺和工具"
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
                "id": "sga",
                "label": "销售、一般及行政费用"
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
              "利润率 33%",
              "同比 +0.1 个百分点"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 13%",
              "同比 (0.2 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 9%",
              "保持不变"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer_transactions",
            "label": "客户交易",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "sales_per_square_foot",
            "label": "每零售平方英尺销售额",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "-0.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(0.3%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n(0.3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "customer_transactions",
        "label": "Customer transactions",
        "value": "-6",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(6%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Customer transactions\n(6%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "value": "5.8",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "+5.8%",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Average ticket\n+5.8% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "sales_per_square_foot",
        "label": "Sales per retail square foot",
        "value": "-0.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(0.1%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Sales per retail square foot\n(0.1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            892,
            1233,
            275,
            150
          ]
        }
      }
    ]
  },
  {
    "key": "home-depot-q3-fy22",
    "company": "Home Depot",
    "period": "Q3 FY22",
    "periodNote": "Ending October 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/home-depot-q3-fy22.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 38.9,
      "notes": [
        "+6% Y/Y"
      ],
      "items": [
        {
          "id": "building_materials",
          "label": "Building Materials",
          "value": 15.3,
          "notes": [
            "+11% Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "decor",
          "label": "Décor",
          "value": 13.1,
          "notes": [
            "+2% Y/Y",
            "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 10.5,
          "notes": [
            "+2% Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 25.6,
        "notes": []
      },
      "operatingExpenses": {
        "total": 7.1,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 6.5,
            "notes": []
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 0.6,
            "notes": []
          }
        ]
      },
      "tax": {
        "id": "tax",
        "label": "Tax",
        "value": 1.4,
        "notes": []
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
          "id": "interest",
          "label": "Interest",
          "value": 0.4,
          "notes": []
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 13.2,
        "notes": [
          "34% margin",
          "Unchanged"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 6.1,
        "notes": [
          "16% margin",
          "Unchanged"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 4.3,
        "notes": [
          "11% margin",
          "Unchanged"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "3",
        "literal": "+3%",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n+3% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            276,
            150
          ]
        }
      },
      {
        "id": "customer_transactions",
        "label": "Customer transactions",
        "value": "-4",
        "literal": "(4%)",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Customer transactions\n(4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1233,
            276,
            150
          ]
        }
      },
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "value": "9",
        "literal": "+9%",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Average ticket\n+9% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1233,
            276,
            150
          ]
        }
      },
      {
        "id": "sales_per_retail_square_foot",
        "label": "Sales per retail square foot",
        "value": "5",
        "literal": "+5%",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Sales per retail square foot\n+5% Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            892,
            1233,
            276,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "revenue": {
          "notes": [
            "同比 +6%"
          ],
          "items": [
            {
              "id": "building_materials",
              "label": "建筑材料",
              "notes": [
                "同比 +11%",
                "电气／照明、木材、木制品和管道"
              ]
            },
            {
              "id": "decor",
              "label": "家居装饰",
              "notes": [
                "同比 +2%",
                "电器、收纳、地板、厨房与卫浴及涂料"
              ]
            },
            {
              "id": "hardlines",
              "label": "五金硬货",
              "notes": [
                "同比 +2%",
                "五金、室内园艺、户外园艺和工具"
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
                "id": "sga",
                "label": "销售、一般及行政费用"
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
              "利润率 34%",
              "保持不变"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 16%",
              "保持不变"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 11%",
              "保持不变"
            ]
          }
        },
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer_transactions",
            "label": "客户交易",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "sales_per_retail_square_foot",
            "label": "每平方英尺零售销售额",
            "notes": [
              "同比"
            ]
          }
        ]
      }
    }
  },
  {
    "key": "home-depot-q3-fy23",
    "company": "Home Depot",
    "period": "Q3 FY23",
    "periodNote": "Ending Oct. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "sourceImage": "input/processed/home-depot-q3-fy23.png",
    "roundingTolerance": 0.15,
    "revenue": {
      "total": 37.7,
      "notes": [
        "(3%) Y/Y"
      ],
      "items": [
        {
          "id": "building_materials",
          "label": "Building Materials",
          "value": 14.7,
          "notes": [
            "(4%) Y/Y",
            "Electrical/Lighting, Lumber, Millwork, and Plumbing"
          ]
        },
        {
          "id": "decor",
          "label": "Décor",
          "value": 12.7,
          "notes": [
            "(3%) Y/Y",
            "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
          ]
        },
        {
          "id": "hardlines",
          "label": "Hardlines",
          "value": 10.3,
          "notes": [
            "(1%) Y/Y",
            "Hardware, Indoor Garden, Outdoor Garden, and Tools"
          ]
        }
      ]
    },
    "costs": {
      "costOfRevenue": {
        "id": "cost_of_sales",
        "label": "Cost of sales",
        "value": 25
      },
      "operatingExpenses": {
        "total": 7.3,
        "items": [
          {
            "id": "sga",
            "label": "SG&A",
            "value": 6.6
          },
          {
            "id": "da",
            "label": "Depreciation & amortization",
            "value": 0.7
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
      "total": 0,
      "items": []
    },
    "otherExpenses": {
      "total": 0.4,
      "items": [
        {
          "id": "interest",
          "label": "Interest",
          "value": 0.4
        }
      ]
    },
    "profit": {
      "gross": {
        "id": "gross_profit",
        "label": "Gross profit",
        "value": 12.7,
        "notes": [
          "34% margin",
          "(0.2pp) Y/Y"
        ]
      },
      "operating": {
        "id": "operating_profit",
        "label": "Operating profit",
        "value": 5.4,
        "notes": [
          "14% margin",
          "(1.5pp) Y/Y"
        ]
      },
      "net": {
        "id": "net_profit",
        "label": "Net profit",
        "value": 3.8,
        "notes": [
          "10% margin",
          "(1.1pp) Y/Y"
        ]
      }
    },
    "operatingMetrics": [
      {
        "id": "comparable_sales",
        "label": "Comparable sales",
        "value": "-3.1",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(3.1%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Comparable sales\n(3.1%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            33,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "customer_transactions",
        "label": "Customer transactions",
        "value": "-2.4",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(2.4%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Customer transactions\n(2.4%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            319,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "average_ticket",
        "label": "Average ticket",
        "value": "-0.3",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(0.3%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Average ticket\n(0.3%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            606,
            1233,
            275,
            150
          ]
        }
      },
      {
        "id": "sales_per_square_foot",
        "label": "Sales per retail square foot",
        "value": "-3.7",
        "unit": "%",
        "currency": null,
        "comparison": "eq",
        "literal": "(3.7%)",
        "basis": "unspecified",
        "notes": [
          "Y/Y"
        ],
        "quote": "Sales per retail square foot\n(3.7%) Y/Y",
        "anchor": {
          "type": "image-box",
          "box": [
            892,
            1233,
            275,
            150
          ]
        }
      }
    ],
    "i18n": {
      "zh": {
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 10 月",
        "operatingMetrics": [
          {
            "id": "comparable_sales",
            "label": "同店销售",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "customer_transactions",
            "label": "客户交易",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "average_ticket",
            "label": "平均客单价",
            "notes": [
              "同比"
            ]
          },
          {
            "id": "sales_per_square_foot",
            "label": "每平方英尺零售销售额",
            "notes": [
              "同比"
            ]
          }
        ],
        "revenue": {
          "notes": [
            "同比 (3%)"
          ],
          "items": [
            {
              "id": "building_materials",
              "label": "建筑材料",
              "notes": [
                "同比 (4%)",
                "电气／照明、木材、木制品和管道"
              ]
            },
            {
              "id": "decor",
              "label": "家居装饰",
              "notes": [
                "同比 (3%)",
                "电器、收纳、地板、厨房与卫浴及涂料"
              ]
            },
            {
              "id": "hardlines",
              "label": "五金硬货",
              "notes": [
                "同比 (1%)",
                "五金、室内园艺、户外园艺和工具"
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
                "id": "sga",
                "label": "销售、一般及行政费用"
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
              "利润率 34%",
              "同比 (0.2 个百分点)"
            ]
          },
          "operating": {
            "label": "营业利润",
            "notes": [
              "利润率 14%",
              "同比 (1.5 个百分点)"
            ]
          },
          "net": {
            "label": "净利润",
            "notes": [
              "利润率 10%",
              "同比 (1.1 个百分点)"
            ]
          }
        }
      }
    }
  }
]);
})(window);
