window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "circle-q2-fy26",
  "name": "Circle · Q2 FY26",
  "company": "Circle",
  "meta": {
    "company": "Circle",
    "title": "Circle Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/circle-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334.5,
    "titleY": 199.6898245614035,
    "titleSize": 124.14035087719299,
    "titleWeight": 800,
    "titleTextLength": 2066
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "compensation:left",
        "ga:left",
        "marketing_other:left",
        "other:right"
      ]
    },
    "linkOpacity": 1,
    "linkTint": {
      "source": "#a09daa",
      "hub": "#a09daa",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "reserve_income",
      "label": "Reserve income",
      "value": 668,
      "valueText": "$668M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#3c3752",
      "labelColor": "#3c3752",
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other revenue",
      "value": 34,
      "valueText": "$34M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#3c3752",
      "labelColor": "#3c3752",
      "notes": [
        "+41% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 701,
      "valueText": "$701M",
      "type": "hub",
      "col": 1,
      "order": 2,
      "color": "#3c3752",
      "labelColor": "#3c3752",
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 34,
      "valueText": "$34M",
      "type": "profit",
      "col": 2,
      "order": 3,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "2% margin",
        "+26pp Y/Y"
      ]
    },
    {
      "id": "distribution_costs",
      "label": "Distribution and transaction costs",
      "value": 412,
      "valueText": "($412M)",
      "type": "cost",
      "col": 2,
      "order": 4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 254,
      "valueText": "($254M)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 18,
      "valueText": "$18M",
      "type": "profit",
      "col": 3,
      "order": 6,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 48,
      "valueText": "$48M",
      "type": "profit",
      "col": 4,
      "order": 7,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "3% margin",
        "+38pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 4,
      "valueText": "($4M)",
      "type": "cost",
      "col": 4,
      "order": 8,
      "color": "#be4848",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "compensation",
      "label": "Compensation",
      "value": 134,
      "valueText": "($134M)",
      "type": "cost",
      "col": 4,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 66,
      "valueText": "($66M)",
      "type": "cost",
      "col": 4,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "da",
      "label": "Depreciation & amortization",
      "value": 30,
      "valueText": "($30M)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "it_infrastructure",
      "label": "IT Infrastructure",
      "value": 16,
      "valueText": "($16M)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "marketing_other",
      "label": "Marketing & other",
      "value": 8,
      "valueText": "($8M)",
      "type": "cost",
      "col": 4,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "reserve_income",
      "target": "revenue",
      "value": 668,
      "sourceWidth": 355,
      "y0": 661.5,
      "sourceOrder": 0,
      "targetWidth": 355,
      "y1": 813.5,
      "targetOrder": 0,
      "linkTint": "#a09daa"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 34,
      "sourceWidth": 17,
      "y0": 1126.5,
      "sourceOrder": 0,
      "targetWidth": 17,
      "y1": 999.5,
      "targetOrder": 1,
      "linkTint": "#a09daa"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 34,
      "sourceWidth": 17,
      "y0": 644.5,
      "sourceOrder": 0,
      "targetWidth": 19,
      "y1": 526.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "distribution_costs",
      "value": 412,
      "sourceWidth": 218.764,
      "y0": 763.382,
      "sourceOrder": 1,
      "targetWidth": 220,
      "y1": 834,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 254,
      "sourceWidth": 135.236,
      "y0": 940.382,
      "sourceOrder": 2,
      "targetWidth": 136,
      "y1": 1183,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 34,
      "sourceWidth": 16,
      "y0": 525,
      "sourceOrder": 0,
      "targetWidth": 16.467,
      "y1": 420.233,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 4,
      "sourceWidth": 3,
      "y0": 534.5,
      "sourceOrder": 1,
      "targetWidth": 3,
      "y1": 623.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 18,
      "sourceWidth": 11,
      "y0": 488.5,
      "sourceOrder": 0,
      "targetWidth": 9.533,
      "y1": 433.233,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "compensation",
      "value": 134,
      "sourceWidth": 69.447,
      "y0": 1149.723,
      "sourceOrder": 0,
      "targetWidth": 72,
      "y1": 872,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 66,
      "sourceWidth": 35.688,
      "y0": 1202.291,
      "sourceOrder": 1,
      "targetWidth": 37,
      "y1": 1014.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 30,
      "sourceWidth": 16.397,
      "y0": 1228.333,
      "sourceOrder": 2,
      "targetWidth": 17,
      "y1": 1141.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "it_infrastructure",
      "value": 16,
      "sourceWidth": 8.681,
      "y0": 1240.872,
      "sourceOrder": 3,
      "targetWidth": 9,
      "y1": 1251.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "marketing_other",
      "value": 8,
      "sourceWidth": 5.787,
      "y0": 1248.106,
      "sourceOrder": 4,
      "targetWidth": 6,
      "y1": 1373,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "reserve_income": {
        "x": 339,
        "y": 484,
        "width": 71,
        "height": 355
      },
      "other_revenue": {
        "x": 339,
        "y": 1118,
        "width": 71,
        "height": 17
      },
      "revenue": {
        "x": 961,
        "y": 636,
        "width": 72,
        "height": 372
      },
      "operating_profit": {
        "x": 1584,
        "y": 517,
        "width": 72,
        "height": 19
      },
      "distribution_costs": {
        "x": 1584,
        "y": 724,
        "width": 72,
        "height": 220
      },
      "operating_expenses": {
        "x": 1584,
        "y": 1115,
        "width": 72,
        "height": 136
      },
      "other": {
        "x": 2077,
        "y": 483,
        "width": 71,
        "height": 11
      },
      "net_profit": {
        "x": 2207,
        "y": 412,
        "width": 71,
        "height": 26
      },
      "tax": {
        "x": 2207,
        "y": 622,
        "width": 71,
        "height": 3
      },
      "compensation": {
        "x": 2207,
        "y": 836,
        "width": 71,
        "height": 72
      },
      "ga": {
        "x": 2207,
        "y": 996,
        "width": 71,
        "height": 37
      },
      "da": {
        "x": 2207,
        "y": 1133,
        "width": 71,
        "height": 17
      },
      "it_infrastructure": {
        "x": 2207,
        "y": 1247,
        "width": 71,
        "height": 9
      },
      "marketing_other": {
        "x": 2207,
        "y": 1370,
        "width": 71,
        "height": 6
      }
    },
    "labels": {
      "reserve_income": {
        "blocks": [
          {
            "x": 371.75,
            "top": 382.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.96999999999997,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#3b3651",
                "textLength": 118
              },
              {
                "text": "+5% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 101
              }
            ]
          },
          {
            "x": 198.25,
            "top": 611.4999877929688,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11,
            "lines": [
              {
                "text": "Reserve",
                "size": 40,
                "weight": 800,
                "color": "#3b3651",
                "textLength": 149
              },
              {
                "text": "income",
                "size": 40,
                "weight": 800,
                "color": "#3b3651",
                "textLength": 138
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 374.5,
            "top": 1012.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#3b3651",
                "textLength": 95
              },
              {
                "text": "+41% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 198.25,
            "top": 1071.500048828125,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 21,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": "#3b3651",
                "textLength": 110
              },
              {
                "text": "revenue",
                "size": 40,
                "weight": 800,
                "color": "#3b3651",
                "textLength": 155
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 998,
            "top": 482.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.120000000000033,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#3d3654",
                "textLength": 163
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#3d3654",
                "textLength": 118
              },
              {
                "text": "+7% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 101
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1619.375,
            "top": 326.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 312
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 95
              },
              {
                "text": "2% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 134
              },
              {
                "text": "+26pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 128
              }
            ]
          }
        ]
      },
      "distribution_costs": {
        "blocks": [
          {
            "x": 1810.3333333333333,
            "top": 774.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.785000000000025,
            "lines": [
              {
                "text": "Distribution and",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 267
              },
              {
                "text": "transaction costs",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 284
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 123
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1616.8333333333333,
            "top": 1260.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12.134999999999991,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 165
              },
              {
                "text": "expenses",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 151
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 123
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2116.5,
            "top": 504.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12,
            "lines": [
              {
                "text": "Other",
                "size": 30,
                "weight": 800,
                "color": "#028f51",
                "textLength": 86
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#028f51",
                "textLength": 74
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2432.75,
            "top": 347.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12.74666666666667,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 186
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 94
              },
              {
                "text": "3% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 134
              },
              {
                "text": "+38pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 128
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2432.75,
            "top": 582.7,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 7.57000000000005,
            "lines": [
              {
                "text": "Tax",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 52
              },
              {
                "text": "$value",
                "size": 29.96,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "compensation": {
        "blocks": [
          {
            "x": 2432.5,
            "top": 843.3,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 2.269999999999982,
            "lines": [
              {
                "text": "Compensation",
                "size": 30.481,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30.17,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2426.75,
            "top": 970.8,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.57000000000005,
            "lines": [
              {
                "text": "General & admin",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 251
              },
              {
                "text": "$value",
                "size": 29.927,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2427.1666666666665,
            "top": 1089,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 6.634999999999991,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 30.857,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "amortization",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 195
              },
              {
                "text": "$value",
                "size": 29.927,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "it_infrastructure": {
        "blocks": [
          {
            "x": 2433,
            "top": 1218.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 9.569999999999936,
            "lines": [
              {
                "text": "IT Infrastructure",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 249
              },
              {
                "text": "$value",
                "size": 30.245,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "marketing_other": {
        "blocks": [
          {
            "x": 2428,
            "top": 1323.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 2.269999999999982,
            "lines": [
              {
                "text": "Marketing & other",
                "size": 30.719,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.96,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"130\" y=\"1190\" width=\"380\" height=\"164\" rx=\"31\" fill=\"#3d3653\"/><text x=\"320\" y=\"1244.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">USDC in circulation</text><text x=\"320\" y=\"1285.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$73.3B</text><text x=\"320\" y=\"1328.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">+19% Y/Y</text></g>",
  "i18n": {
    "preservedAnnotationText": [
      "ARR",
      "ARPAM",
      "GMV",
      "Clover GPV",
      "USDC",
      "Klarna Checkout (KCO)",
      "monday"
    ],
    "zh": {
      "name": "Circle · 2026 财年第二季度",
      "meta": {
        "title": "Circle 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleSize": 108,
        "titleTextLength": 1584.156
      },
      "nodes": {
        "reserve_income": {
          "label": "储备金收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "other_revenue": {
          "label": "其他收入",
          "notes": [
            "同比 +41%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +7%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 +26 个百分点"
          ]
        },
        "distribution_costs": {
          "label": "分销与交易成本",
          "notes": []
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 3%",
            "同比 +38 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "compensation": {
          "label": "薪酬",
          "notes": []
        },
        "ga": {
          "label": "一般及行政",
          "notes": []
        },
        "da": {
          "label": "折旧与摊销",
          "notes": []
        },
        "it_infrastructure": {
          "label": "信息技术基础设施",
          "notes": []
        },
        "marketing_other": {
          "label": "营销及其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "reserve_income": {
            "blocks": [
              {
                "x": 371.75,
                "top": 382.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.96999999999997,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#3b3651",
                    "textLength": 118
                  },
                  {
                    "text": "同比 +5%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 198.25,
                "top": 611.4999877929688,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "储备",
                    "size": 40,
                    "weight": 800,
                    "color": "#3b3651"
                  },
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#3b3651"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 374.5,
                "top": 1012.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#3b3651",
                    "textLength": 95
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
                "x": 198.25,
                "top": 1071.500048828125,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 21,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#3b3651"
                  },
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#3b3651"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 998,
                "top": 482.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.120000000000033,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#3d3654"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#3d3654",
                    "textLength": 118
                  },
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1619.375,
                "top": 326.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000004,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51",
                    "textLength": 95
                  },
                  {
                    "text": "利润率 2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +26 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "distribution_costs": {
            "blocks": [
              {
                "x": 1810.3333333333333,
                "top": 774.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.785000000000025,
                "lines": [
                  {
                    "text": "分销与",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "交易成本",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 123
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1616.8333333333333,
                "top": 1260.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12.134999999999991,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 123
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2116.5,
                "top": 504.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "其他",
                    "size": 30,
                    "weight": 800,
                    "color": "#028f51"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#028f51",
                    "textLength": 74
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2432.75,
                "top": 347.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12.74666666666667,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51",
                    "textLength": 94
                  },
                  {
                    "text": "利润率 3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +38 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2432.75,
                "top": 582.7,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 7.57000000000005,
                "lines": [
                  {
                    "text": "税费",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.96,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "compensation": {
            "blocks": [
              {
                "x": 2432.5,
                "top": 838.8,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 2.269999999999982,
                "lines": [
                  {
                    "text": "薪酬",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.17,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2426.75,
                "top": 970.8,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.57000000000005,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.927,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2427.1666666666665,
                "top": 1084.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 6.634999999999991,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "摊销",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.927,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "it_infrastructure": {
            "blocks": [
              {
                "x": 2433,
                "top": 1218.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 9.569999999999936,
                "lines": [
                  {
                    "text": "信息技术基础设施",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.245,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "marketing_other": {
            "blocks": [
              {
                "x": 2428,
                "top": 1318.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 2.269999999999982,
                "lines": [
                  {
                    "text": "营销及其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.96,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"130\" y=\"1190\" width=\"380\" height=\"164\" rx=\"31\" fill=\"#3d3653\"/><text x=\"320\" y=\"1244.23\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"#ffffff\">流通中的 USDC</text><text x=\"320\" y=\"1285.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$73.3B</text><text x=\"320\" y=\"1328.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">同比 +19%</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/circle/company-logo-circle-q2-fy26.png",
      "x": 609,
      "y": 282,
      "width": 660,
      "height": 173
    }
  ]
});
