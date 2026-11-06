(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "robinhood-q3-fy26",
  "name": "Robinhood · Q3 FY26",
  "company": "Robinhood",
  "meta": {
    "company": "Robinhood",
    "title": "Robinhood Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 2026",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/robinhood-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1338,
    "titleY": 195,
    "titleSize": 142,
    "titleWeight": 800,
    "titleTextLength": 2390,
    "logoWidth": 160,
    "logoHeight": 215,
    "logoY": 228,
    "logoViewBox": "0 0 220 250",
    "logoSvg": (window.SANKEY_BUSINESS_ICONS || {}).robinhoodFeather || '',
    "logoX": 1240
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#00cb00",
        "label": "#00ca00"
      },
      "hub": {
        "node": "#00cb00",
        "label": "#00ca00"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#85e085",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "labelYOffset": 0,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 7
    }
  },
  "annotationsSvg": "<g><rect x=\"40\" y=\"1159\" width=\"347\" height=\"150\" rx=\"28\" fill=\"#00cb00\"/><rect x=\"397\" y=\"1159\" width=\"345\" height=\"150\" rx=\"28\" fill=\"#00cb00\"/><text x=\"214\" y=\"1206\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">Net deposits</text><text data-operating-metric=\"net_deposits\" x=\"214\" y=\"1244\" text-anchor=\"middle\" font-size=\"27\" fill=\"white\">$15.7B</text><text x=\"214\" y=\"1282\" text-anchor=\"middle\" font-size=\"25\" fill=\"white\">+17% Q/Q</text><text x=\"569\" y=\"1206\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">MAU</text><text data-operating-metric=\"mau\" x=\"569\" y=\"1244\" text-anchor=\"middle\" font-size=\"27\" fill=\"white\">13M</text><text x=\"569\" y=\"1282\" text-anchor=\"middle\" font-size=\"25\" fill=\"white\">(0.8M) Y/Y &amp; (1.1M) Q/Q</text><text x=\"388\" y=\"1351\" font-size=\"28\" fill=\"#666666\">MAU = Monthly Active Users</text></g>",
  "nodes": [
    {
      "id": "options",
      "label": "Options",
      "value": 399,
      "notes": [
        "+31% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "equities",
      "label": "Equities",
      "value": 121,
      "notes": [
        "+41% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 2
    },
    {
      "id": "crypto",
      "label": "Crypto",
      "value": 120,
      "notes": [
        "(55%) Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "other_transactions",
      "label": [
        "Other",
        "transactions"
      ],
      "value": 227,
      "notes": [
        "+215% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 3
    },
    {
      "id": "transaction_based",
      "label": "Transaction-based",
      "value": 867,
      "notes": [
        "+19% Y/Y"
      ],
      "type": "source",
      "col": 1,
      "order": 0
    },
    {
      "id": "net_interest",
      "label": "Net interest",
      "value": 415,
      "notes": [
        "(9%) Y/Y"
      ],
      "type": "source",
      "col": 1,
      "order": 1
    },
    {
      "id": "other_revenue",
      "label": "Other revenue",
      "value": 142,
      "notes": [
        "+61% Y/Y"
      ],
      "type": "source",
      "col": 1,
      "order": 2
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1424,
      "notes": [
        "+12% Y/Y"
      ],
      "type": "hub",
      "col": 2,
      "order": 0
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 625,
      "type": "profit",
      "col": 3,
      "order": 1
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 799,
      "valueText": "($799M)",
      "type": "cost",
      "col": 3,
      "order": 2
    },
    {
      "id": "net_profit",
      "label": "Net income",
      "value": 476,
      "type": "profit",
      "col": 4,
      "order": 0
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 149,
      "valueText": "($149M)",
      "type": "cost",
      "col": 4,
      "order": 1
    },
    {
      "id": "technology_development",
      "label": [
        "Technology &",
        "development"
      ],
      "value": 254,
      "valueText": "($254M)",
      "type": "cost",
      "col": 4,
      "order": 2
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 163,
      "valueText": "($163M)",
      "type": "cost",
      "col": 4,
      "order": 3
    },
    {
      "id": "operations",
      "label": "Operations",
      "value": 150,
      "valueText": "($150M)",
      "type": "cost",
      "col": 4,
      "order": 4
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 104,
      "valueText": "($104M)",
      "type": "cost",
      "col": 4,
      "order": 5
    },
    {
      "id": "brokerage_transaction",
      "label": [
        "Brokerage &",
        "transaction"
      ],
      "value": 68,
      "valueText": "($68M)",
      "type": "cost",
      "col": 4,
      "order": 6
    },
    {
      "id": "other_opex",
      "label": "Other",
      "type": "cost",
      "col": 4,
      "order": 7,
      "value": 60,
      "valueText": "($60M)"
    }
  ],
  "links": [
    {
      "source": "options",
      "target": "transaction_based",
      "value": 399,
      "sourceWidth": 80,
      "targetWidth": 81,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "crypto",
      "target": "transaction_based",
      "value": 120,
      "sourceWidth": 23,
      "targetWidth": 24,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "equities",
      "target": "transaction_based",
      "value": 121,
      "sourceWidth": 23,
      "targetWidth": 25,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_transactions",
      "target": "transaction_based",
      "value": 227,
      "sourceWidth": 45,
      "targetWidth": 46,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "transaction_based",
      "target": "revenue",
      "value": 867,
      "sourceWidth": 176,
      "targetWidth": 176,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "net_interest",
      "target": "revenue",
      "value": 415,
      "sourceWidth": 83,
      "targetWidth": 84,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 142,
      "sourceWidth": 28,
      "targetWidth": 29,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 625,
      "sourceWidth": 127,
      "targetWidth": 126,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 799,
      "sourceWidth": 162,
      "targetWidth": 162,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "net_profit",
      "value": 476,
      "sourceWidth": 96,
      "targetWidth": 96,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 149,
      "sourceWidth": 30,
      "targetWidth": 30,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 254,
      "sourceWidth": 51,
      "targetWidth": 50,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 163,
      "sourceWidth": 33,
      "targetWidth": 32,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "operations",
      "value": 150,
      "sourceWidth": 30,
      "targetWidth": 29,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 104,
      "sourceWidth": 21,
      "targetWidth": 20,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "brokerage_transaction",
      "value": 68,
      "sourceWidth": 14,
      "targetWidth": 13,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 60,
      "sourceWidth": 13,
      "targetWidth": 11,
      "sourceOrder": 5,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.203,
    "nodes": {
      "options": {
        "x": 334,
        "y": 407,
        "width": 71,
        "height": 80
      },
      "crypto": {
        "x": 334,
        "y": 608,
        "width": 71,
        "height": 23
      },
      "equities": {
        "x": 334,
        "y": 752,
        "width": 71,
        "height": 23
      },
      "other_transactions": {
        "x": 334,
        "y": 896,
        "width": 71,
        "height": 45
      },
      "transaction_based": {
        "x": 801,
        "y": 551,
        "width": 70,
        "height": 176
      },
      "net_interest": {
        "x": 801,
        "y": 905,
        "width": 70,
        "height": 83
      },
      "other_revenue": {
        "x": 800,
        "y": 1159,
        "width": 70,
        "height": 28
      },
      "revenue": {
        "x": 1268,
        "y": 651,
        "width": 71,
        "height": 289
      },
      "pretax_income": {
        "x": 1736,
        "y": 497,
        "width": 70,
        "height": 126
      },
      "operating_expenses": {
        "x": 1736,
        "y": 866,
        "width": 70,
        "height": 162
      },
      "net_profit": {
        "x": 2202,
        "y": 328,
        "width": 71,
        "height": 96
      },
      "tax": {
        "x": 2202,
        "y": 510,
        "width": 71,
        "height": 30
      },
      "technology_development": {
        "x": 2202,
        "y": 684,
        "width": 71,
        "height": 50
      },
      "ga": {
        "x": 2202,
        "y": 826,
        "width": 71,
        "height": 32
      },
      "operations": {
        "x": 2202,
        "y": 960,
        "width": 71,
        "height": 29
      },
      "marketing": {
        "x": 2202,
        "y": 1095,
        "width": 71,
        "height": 20
      },
      "brokerage_transaction": {
        "x": 2202,
        "y": 1218,
        "width": 71,
        "height": 13
      },
      "other_opex": {
        "x": 2202,
        "y": 1332,
        "width": 71,
        "height": 11
      }
    },
    "labels": {
      "options": {
        "blocks": [
          {
            "x": 376,
            "top": 311,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+31% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 302,
            "top": 422,
            "anchor": "end",
            "lineGap": 7,
            "lines": [
              {
                "text": "Options",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "crypto": {
        "blocks": [
          {
            "x": 376,
            "top": 512,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(55%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 302,
            "top": 595.5,
            "anchor": "end",
            "lineGap": 7,
            "lines": [
              {
                "text": "Crypto",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "equities": {
        "blocks": [
          {
            "x": 376,
            "top": 656,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+41% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 302,
            "top": 739.5,
            "anchor": "end",
            "lineGap": 7,
            "lines": [
              {
                "text": "Equities",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_transactions": {
        "blocks": [
          {
            "x": 376,
            "top": 800,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+215% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 302,
            "top": 871.5,
            "anchor": "end",
            "lineGap": 7,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800
              },
              {
                "text": "transactions",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "transaction_based": {
        "blocks": [
          {
            "x": 843,
            "top": 401,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Transaction-based",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "net_interest": {
        "blocks": [
          {
            "x": 843,
            "top": 754,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Net interest",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(9%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 843,
            "top": 1010,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Other revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+61% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1305,
            "top": 502,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1772,
            "top": 386,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Pretax income",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1773,
            "top": 1046,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2445,
            "top": 329,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2440,
            "top": 506,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Tax ($149M)",
                "size": 30,
                "weight": 800
              }
            ]
          }
        ]
      },
      "technology_development": {
        "blocks": [
          {
            "x": 2445,
            "top": 645,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Technology &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2445,
            "top": 806,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operations": {
        "blocks": [
          {
            "x": 2445,
            "top": 937,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Operations",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2445,
            "top": 1067,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Marketing",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "brokerage_transaction": {
        "blocks": [
          {
            "x": 2445,
            "top": 1167,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Brokerage &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "transaction",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2445,
            "top": 1300,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "Robinhood · 2026 财年第三季度",
      "meta": {
        "title": "Robinhood 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月",
        "titleTextLength": 2100,
        "titleSize": 120
      },
      "annotationsSvg": "<g><rect x=\"40\" y=\"1159\" width=\"347\" height=\"150\" rx=\"28\" fill=\"#00cb00\"/><rect x=\"397\" y=\"1159\" width=\"345\" height=\"150\" rx=\"28\" fill=\"#00cb00\"/><text x=\"214\" y=\"1206\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">净入金</text><text data-operating-metric=\"net_deposits\" x=\"214\" y=\"1244\" text-anchor=\"middle\" font-size=\"27\" fill=\"white\">$15.7B</text><text x=\"214\" y=\"1282\" text-anchor=\"middle\" font-size=\"25\" fill=\"white\">环比 +17%</text><text x=\"569\" y=\"1206\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">月活用户</text><text data-operating-metric=\"mau\" x=\"569\" y=\"1244\" text-anchor=\"middle\" font-size=\"27\" fill=\"white\">13M</text><text x=\"569\" y=\"1282\" text-anchor=\"middle\" font-size=\"25\" fill=\"white\">同比 (0.8M) / 环比 (1.1M)</text><text x=\"388\" y=\"1351\" font-size=\"28\" fill=\"#666666\">MAU = 月活跃用户数</text></g>",
      "nodes": {
        "options": {
          "label": "期权",
          "notes": [
            "同比 +31%"
          ]
        },
        "equities": {
          "label": "股票",
          "notes": [
            "同比 +41%"
          ]
        },
        "crypto": {
          "label": "加密资产",
          "notes": [
            "同比 (55%)"
          ]
        },
        "other_transactions": {
          "label": "其他交易",
          "notes": [
            "同比 +215%"
          ]
        },
        "transaction_based": {
          "label": "交易收入",
          "notes": [
            "同比 +19%"
          ]
        },
        "net_interest": {
          "label": "净利息",
          "notes": [
            "同比 (9%)"
          ]
        },
        "other_revenue": {
          "label": "其他收入",
          "notes": [
            "同比 +61%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
          ]
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_profit": {
          "label": "净利润"
        },
        "tax": {
          "label": "税费"
        },
        "technology_development": {
          "label": "技术与开发"
        },
        "ga": {
          "label": "管理费用"
        },
        "operations": {
          "label": "运营"
        },
        "marketing": {
          "label": "市场营销"
        },
        "brokerage_transaction": {
          "label": "经纪与交易"
        },
        "other_opex": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "options": {
            "blocks": [
              {
                "x": 376,
                "top": 311,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +31%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 302,
                "top": 422,
                "anchor": "end",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "期权",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "crypto": {
            "blocks": [
              {
                "x": 376,
                "top": 512,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (55%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 302,
                "top": 595.5,
                "anchor": "end",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "加密资产",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "equities": {
            "blocks": [
              {
                "x": 376,
                "top": 656,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +41%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 302,
                "top": 739.5,
                "anchor": "end",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "股票",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_transactions": {
            "blocks": [
              {
                "x": 376,
                "top": 800,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +215%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 302,
                "top": 871.5,
                "anchor": "end",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "交易",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "transaction_based": {
            "blocks": [
              {
                "x": 843,
                "top": 401,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "交易收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "net_interest": {
            "blocks": [
              {
                "x": 843,
                "top": 754,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "净利息",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 843,
                "top": 1010,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "其他收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +61%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1305,
                "top": 502,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1772,
                "top": 386,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1773,
                "top": 1046,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2445,
                "top": 329,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2440,
                "top": 506,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "税费 ($149M)",
                    "size": 30,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "technology_development": {
            "blocks": [
              {
                "x": 2445,
                "top": 645,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2445,
                "top": 806,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operations": {
            "blocks": [
              {
                "x": 2445,
                "top": 937,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "运营",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2445,
                "top": 1067,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "市场营销",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "brokerage_transaction": {
            "blocks": [
              {
                "x": 2445,
                "top": 1167,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "经纪与",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "交易",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2445,
                "top": 1300,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "net_deposits",
      "value": "15.7",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$15.7B"
    },
    {
      "id": "mau",
      "value": "13000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "13M"
    }
  ]
});})();
