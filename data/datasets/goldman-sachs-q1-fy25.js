(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "goldman-sachs-q1-fy25",
  "name": "Goldman Sachs · Q1 FY25",
  "company": "Goldman Sachs",
  "meta": {
    "company": "Goldman Sachs",
    "title": "Goldman Sachs Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/goldman-sachs-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2508,
    "logoWidth": 244,
    "logoHeight": 242,
    "logoY": 249,
    "logoViewBox": "0 0 244 242",
    "logoSvg": ((window.SANKEY_BUSINESS_ICONS || {}).goldmanSachsWordmark || '')
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#6b96c3",
        "label": "#6b96c3"
      },
      "hub": {
        "node": "#6b96c3",
        "label": "#6b96c3"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#aec3da",
      "hub": null,
      "profit": "#8ec88e",
      "cost": "#de7878"
    },
    "linkOpacity": 1,
    "type": {
      "name": 38,
      "value": 39,
      "note": 27,
      "lineGap": 9
    }
  },
  "nodes": [
    {
      "id": "global_banking_markets",
      "label": [
        "Global Banking &",
        "Markets"
      ],
      "value": 10.7,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+10% Y/Y",
        "38% net margin"
      ]
    },
    {
      "id": "asset_wealth_management",
      "label": [
        "Asset & Wealth",
        "Management"
      ],
      "value": 3.7,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(3%) Y/Y",
        "18% net margin"
      ]
    },
    {
      "id": "platform_solutions",
      "label": [
        "Platform",
        "Solutions"
      ],
      "value": 0.7,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(3%) Y/Y",
        "3% net margin"
      ]
    },
    {
      "id": "revenue",
      "label": [
        "Revenue"
      ],
      "value": 15.1,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "pretax_income",
      "label": [
        "Pretax income"
      ],
      "value": 5.6,
      "type": "profit",
      "col": 2,
      "order": 4
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 9.1,
      "type": "cost",
      "col": 2,
      "order": 5
    },
    {
      "id": "provision_for_credit_loss",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 0.3,
      "type": "cost",
      "col": 2,
      "order": 6
    },
    {
      "id": "net_income",
      "label": [
        "Net income"
      ],
      "value": 4.7,
      "type": "profit",
      "col": 3,
      "order": 7,
      "notes": [
        "+15% Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": [
        "Tax"
      ],
      "value": 0.9,
      "type": "cost",
      "col": 3,
      "order": 8
    },
    {
      "id": "compensation_benefits",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 4.9,
      "type": "cost",
      "col": 3,
      "order": 9
    },
    {
      "id": "transaction_based",
      "label": [
        "Transaction based"
      ],
      "value": 1.8,
      "type": "cost",
      "col": 3,
      "order": 10
    },
    {
      "id": "market_development",
      "label": [
        "Market dev."
      ],
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 11
    },
    {
      "id": "communication_technology",
      "label": [
        "Communication,",
        "Technology"
      ],
      "value": 0.5,
      "type": "cost",
      "col": 3,
      "order": 12
    },
    {
      "id": "da",
      "label": [
        "D&A"
      ],
      "value": 0.5,
      "type": "cost",
      "col": 3,
      "order": 13
    },
    {
      "id": "occupancy",
      "label": [
        "Occupancy"
      ],
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 14
    },
    {
      "id": "professional_fees",
      "label": [
        "Professional fees"
      ],
      "value": 0.4,
      "type": "cost",
      "col": 3,
      "order": 15
    },
    {
      "id": "other",
      "label": [
        "Other"
      ],
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "order": 16
    }
  ],
  "links": [
    {
      "source": "global_banking_markets",
      "target": "revenue",
      "value": 10.7,
      "sourceWidth": 184,
      "targetWidth": 184,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "asset_wealth_management",
      "target": "revenue",
      "value": 3.7,
      "sourceWidth": 64,
      "targetWidth": 64,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "platform_solutions",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 12,
      "targetWidth": 10,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 5.6,
      "sourceWidth": 97,
      "targetWidth": 97,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 9.1,
      "sourceWidth": 156,
      "targetWidth": 156,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_loss",
      "value": 0.3,
      "sourceWidth": 5,
      "targetWidth": 5,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 4.7,
      "sourceWidth": 82,
      "targetWidth": 82,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.9,
      "sourceWidth": 15,
      "targetWidth": 15,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 4.9,
      "sourceWidth": 87,
      "targetWidth": 83,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "transaction_based",
      "value": 1.8,
      "sourceWidth": 32,
      "targetWidth": 32,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "market_development",
      "value": 0.2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "communication_technology",
      "value": 0.5,
      "sourceWidth": 8,
      "targetWidth": 8,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.5,
      "sourceWidth": 8,
      "targetWidth": 8,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 5,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "professional_fees",
      "value": 0.4,
      "sourceWidth": 7,
      "targetWidth": 7,
      "sourceOrder": 6,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.6,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 7,
      "targetOrder": 0
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "14.8",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "14.8%"
    },
    {
      "id": "roe",
      "value": "16.9",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "16.9%"
    }
  ],
  "layout": {
    "scale": 17,
    "nodes": {
      "global_banking_markets": {
        "x": 398,
        "y": 395,
        "width": 74,
        "height": 184
      },
      "asset_wealth_management": {
        "x": 398,
        "y": 799,
        "width": 74,
        "height": 64
      },
      "platform_solutions": {
        "x": 398,
        "y": 1063,
        "width": 74,
        "height": 12
      },
      "revenue": {
        "x": 1016,
        "y": 670,
        "width": 74,
        "height": 258
      },
      "pretax_income": {
        "x": 1644,
        "y": 498,
        "width": 74,
        "height": 97
      },
      "operating_expenses": {
        "x": 1644,
        "y": 901,
        "width": 74,
        "height": 156
      },
      "provision_for_credit_loss": {
        "x": 1644,
        "y": 1231,
        "width": 74,
        "height": 5
      },
      "net_income": {
        "x": 2267,
        "y": 280,
        "width": 74,
        "height": 82
      },
      "tax": {
        "x": 2267,
        "y": 417,
        "width": 74,
        "height": 15
      },
      "compensation_benefits": {
        "x": 2267,
        "y": 508,
        "width": 74,
        "height": 83
      },
      "transaction_based": {
        "x": 2267,
        "y": 674,
        "width": 74,
        "height": 32
      },
      "market_development": {
        "x": 2267,
        "y": 795,
        "width": 74,
        "height": 2
      },
      "communication_technology": {
        "x": 2267,
        "y": 886,
        "width": 74,
        "height": 8
      },
      "da": {
        "x": 2267,
        "y": 993,
        "width": 74,
        "height": 8
      },
      "occupancy": {
        "x": 2267,
        "y": 1096,
        "width": 74,
        "height": 2
      },
      "professional_fees": {
        "x": 2267,
        "y": 1193,
        "width": 74,
        "height": 7
      },
      "other": {
        "x": 2267,
        "y": 1286,
        "width": 74,
        "height": 10
      }
    },
    "labels": {
      "global_banking_markets": {
        "blocks": [
          {
            "x": 435.0,
            "top": 300,
            "lines": [
              {
                "text": "$10.7B",
                "size": 39,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+10% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          },
          {
            "x": 365,
            "top": 434,
            "lines": [
              {
                "text": "Global Banking &",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Markets",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "38% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "asset_wealth_management": {
        "blocks": [
          {
            "x": 435.0,
            "top": 701,
            "lines": [
              {
                "text": "$3.7B",
                "size": 39,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "(3%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          },
          {
            "x": 365,
            "top": 768,
            "lines": [
              {
                "text": "Asset & Wealth",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Management",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "18% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "platform_solutions": {
        "blocks": [
          {
            "x": 435.0,
            "top": 964,
            "lines": [
              {
                "text": "$0.7B",
                "size": 39,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "(3%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          },
          {
            "x": 365,
            "top": 974,
            "lines": [
              {
                "text": "Platform",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "Solutions",
                "size": 38,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "3% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1053.0,
            "top": 521,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800,
                "color": "#6b96c3"
              },
              {
                "text": "$15.1B",
                "size": 39,
                "weight": 400,
                "color": "#6b96c3"
              },
              {
                "text": "+6% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1681.0,
            "top": 385,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$5.6B",
                "size": 39,
                "weight": 400,
                "color": "#008f47"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1681.0,
            "top": 1073,
            "lines": [
              {
                "text": "Operating",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($9.1B)",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "provision_for_credit_loss": {
        "blocks": [
          {
            "x": 1681.0,
            "top": 1253,
            "lines": [
              {
                "text": "Provision for",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.3B)",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2493,
            "top": 239,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$4.7B",
                "size": 39,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "+15% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2493,
            "top": 387,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.9B)",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2493,
            "top": 497,
            "lines": [
              {
                "text": "Compensation",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& benefits",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($4.9B)",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "transaction_based": {
        "blocks": [
          {
            "x": 2493,
            "top": 648,
            "lines": [
              {
                "text": "Transaction based",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($1.8B)",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "market_development": {
        "blocks": [
          {
            "x": 2493,
            "top": 755,
            "lines": [
              {
                "text": "Market dev.",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.2B)",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "communication_technology": {
        "blocks": [
          {
            "x": 2493,
            "top": 850,
            "lines": [
              {
                "text": "Communication,",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Technology",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.5B)",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2493,
            "top": 957,
            "lines": [
              {
                "text": "D&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.5B)",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2493,
            "top": 1057,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.2B)",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "professional_fees": {
        "blocks": [
          {
            "x": 2493,
            "top": 1155,
            "lines": [
              {
                "text": "Professional fees",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.4B)",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2493,
            "top": 1253,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "($0.6B)",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"123\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"117\" y=\"1133\" width=\"242\" height=\"148\" rx=\"29\" fill=\"#6a96c3\"/><text x=\"238.0\" y=\"1186\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"238.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">14.8%</text><text x=\"238.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">(0.2pp) Q/Q</text></g><g><rect x=\"367\" y=\"1133\" width=\"352\" height=\"148\" rx=\"29\" fill=\"#6a96c3\"/><text x=\"543.0\" y=\"1186\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">Annualized ROE</text><text data-operating-metric=\"roe\" x=\"543.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">16.9%</text><text x=\"543.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"22\" fill=\"white\">+2.1pp Y/Y</text></g><text x=\"242\" y=\"1321\" font-size=\"27\" fill=\"#777\">CET1 = Common Equity Tier 1</text><text x=\"160\" y=\"1352\" font-size=\"27\" fill=\"#777\">ROE = Return on average common equity</text></g>",
  "i18n": {
    "zh": {
      "name": "高盛 · 2025 财年第一季度",
      "meta": {
        "title": "高盛 2025 财年第一季度利润表",
        "titleTextLength": 1800,
        "period": "2025 财年第一季度"
      },
      "nodes": {
        "global_banking_markets": {
          "label": [
            "全球银行",
            "与市场"
          ]
        },
        "asset_wealth_management": {
          "label": [
            "资产与财富",
            "管理"
          ]
        },
        "platform_solutions": {
          "label": [
            "平台",
            "解决方案"
          ]
        },
        "revenue": {
          "label": [
            "收入"
          ]
        },
        "pretax_income": {
          "label": [
            "税前利润"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "provision_for_credit_loss": {
          "label": [
            "信用损失",
            "拨备"
          ]
        },
        "net_income": {
          "label": [
            "净利润"
          ]
        },
        "tax": {
          "label": [
            "税费"
          ]
        },
        "compensation_benefits": {
          "label": [
            "薪酬",
            "与福利"
          ]
        },
        "transaction_based": {
          "label": [
            "交易相关"
          ]
        },
        "market_development": {
          "label": [
            "市场开发"
          ]
        },
        "communication_technology": {
          "label": [
            "通信与",
            "技术"
          ]
        },
        "da": {
          "label": [
            "折旧与摊销"
          ]
        },
        "occupancy": {
          "label": [
            "场地占用"
          ]
        },
        "professional_fees": {
          "label": [
            "专业费用"
          ]
        },
        "other": {
          "label": [
            "其他"
          ]
        }
      },
      "layout": {
        "labels": {
          "global_banking_markets": {
            "blocks": [
              {
                "x": 435.0,
                "top": 300,
                "lines": [
                  {
                    "text": "$10.7B",
                    "size": 39,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              },
              {
                "x": 365,
                "top": 434,
                "lines": [
                  {
                    "text": "全球银行",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "与市场",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 38%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "asset_wealth_management": {
            "blocks": [
              {
                "x": 435.0,
                "top": 701,
                "lines": [
                  {
                    "text": "$3.7B",
                    "size": 39,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              },
              {
                "x": 365,
                "top": 768,
                "lines": [
                  {
                    "text": "资产与财富",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "管理",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 18%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "platform_solutions": {
            "blocks": [
              {
                "x": 435.0,
                "top": 964,
                "lines": [
                  {
                    "text": "$0.7B",
                    "size": 39,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              },
              {
                "x": 365,
                "top": 974,
                "lines": [
                  {
                    "text": "平台",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "解决方案",
                    "size": 38,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "净利率 3%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1053.0,
                "top": 521,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "$15.1B",
                    "size": 39,
                    "weight": 400,
                    "color": "#6b96c3"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1681.0,
                "top": 385,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$5.6B",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f47"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1681.0,
                "top": 1073,
                "lines": [
                  {
                    "text": "运营",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($9.1B)",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "provision_for_credit_loss": {
            "blocks": [
              {
                "x": 1681.0,
                "top": 1253,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "拨备",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.3B)",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2493,
                "top": 239,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$4.7B",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2493,
                "top": 387,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.9B)",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2493,
                "top": 497,
                "lines": [
                  {
                    "text": "薪酬",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "与福利",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($4.9B)",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "transaction_based": {
            "blocks": [
              {
                "x": 2493,
                "top": 648,
                "lines": [
                  {
                    "text": "交易相关",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($1.8B)",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "market_development": {
            "blocks": [
              {
                "x": 2493,
                "top": 755,
                "lines": [
                  {
                    "text": "市场开发",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.2B)",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "communication_technology": {
            "blocks": [
              {
                "x": 2493,
                "top": 850,
                "lines": [
                  {
                    "text": "通信与",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "技术",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.5B)",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2493,
                "top": 957,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.5B)",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2493,
                "top": 1057,
                "lines": [
                  {
                    "text": "场地占用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.2B)",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "professional_fees": {
            "blocks": [
              {
                "x": 2493,
                "top": 1155,
                "lines": [
                  {
                    "text": "专业费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.4B)",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2493,
                "top": 1253,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "($0.6B)",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"123\" y=\"256\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"117\" y=\"1133\" width=\"242\" height=\"148\" rx=\"29\" fill=\"#6a96c3\"/><text x=\"238.0\" y=\"1186\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"238.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">14.8%</text><text x=\"238.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"20\" fill=\"white\">环比 (0.2 个百分点)</text></g><g><rect x=\"367\" y=\"1133\" width=\"352\" height=\"148\" rx=\"29\" fill=\"#6a96c3\"/><text x=\"543.0\" y=\"1186\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"white\">年化 ROE</text><text data-operating-metric=\"roe\" x=\"543.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">16.9%</text><text x=\"543.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"20\" fill=\"white\">同比 +2.1 个百分点</text></g><text x=\"242\" y=\"1321\" font-size=\"27\" fill=\"#777\">CET1 = 普通股一级资本</text><text x=\"160\" y=\"1352\" font-size=\"27\" fill=\"#777\">ROE = 平均普通股权益回报率</text></g>"
    }
  }
});})();
