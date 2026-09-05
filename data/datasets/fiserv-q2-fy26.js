window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "fiserv-q2-fy26",
  "name": "Fiserv · Q2 FY26",
  "company": "Fiserv",
  "meta": {
    "company": "Fiserv",
    "title": "Fiserv Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/fiserv-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199.6898245614035,
    "titleSize": 124.14035087719299,
    "titleWeight": 800,
    "titleTextLength": 2082
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
        "cost_processing:left",
        "cost_product:left",
        "other:right",
        "tax:left"
      ]
    },
    "linkOpacity": 1,
    "linkTint": {
      "source": "#f7b385",
      "hub": "#f7b385",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "merchants_solutions",
      "label": "Merchants Solutions",
      "value": 2.6,
      "valueText": "$2.6B",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#ff6600",
      "labelColor": "#ff6600",
      "notes": [
        "(1%) Y/Y",
        "30% operating margin"
      ]
    },
    {
      "id": "financial_solutions",
      "label": "Financial Solutions",
      "value": 2.4,
      "valueText": "$2.4B",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#ff6600",
      "labelColor": "#ff6600",
      "notes": [
        "(8%) Y/Y",
        "39% operating margin"
      ]
    },
    {
      "id": "corporate",
      "label": "Corporate",
      "value": 0.3,
      "valueText": "$0.3B",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#ff6600",
      "labelColor": "#ff6600",
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 5.3,
      "valueText": "$5.3B",
      "type": "hub",
      "col": 1,
      "order": 3,
      "color": "#ff6600",
      "labelColor": "#ff6600",
      "notes": [
        "(4%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.9,
      "valueText": "$2.9B",
      "type": "profit",
      "col": 2,
      "order": 4,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "55% margin",
        "(7pp) Y/Y"
      ]
    },
    {
      "id": "cost_processing",
      "label": "Cost of processing",
      "value": 1.7,
      "valueText": "($1.7B)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "cost_product",
      "label": "Cost of product",
      "value": 0.7,
      "valueText": "($0.7B)",
      "type": "cost",
      "col": 2,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 1,
      "valueText": "$1.0B",
      "type": "profit",
      "col": 3,
      "order": 7,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "19% margin",
        "(12pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.9,
      "valueText": "($1.9B)",
      "type": "cost",
      "col": 3,
      "order": 8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.1,
      "valueText": "$0.1B",
      "type": "profit",
      "col": 4,
      "order": 9,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.6,
      "valueText": "$0.6B",
      "type": "profit",
      "col": 5,
      "order": 10,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "12% margin",
        "(7pp) Y/Y"
      ]
    },
    {
      "id": "interest_other",
      "label": "Interest & Other",
      "value": 0.4,
      "valueText": "($0.4B)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "merchants_solutions",
      "target": "revenue",
      "value": 2.6,
      "sourceWidth": 168,
      "y0": 527,
      "sourceOrder": 0,
      "targetWidth": 166.035,
      "y1": 702.018,
      "targetOrder": 0,
      "linkTint": "#f7b385"
    },
    {
      "source": "financial_solutions",
      "target": "revenue",
      "value": 2.4,
      "sourceWidth": 151,
      "y0": 865.5,
      "sourceOrder": 0,
      "targetWidth": 149.234,
      "y1": 859.652,
      "targetOrder": 1,
      "linkTint": "#f7b385"
    },
    {
      "source": "corporate",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 23,
      "y0": 1112.5,
      "sourceOrder": 0,
      "targetWidth": 22.731,
      "y1": 945.635,
      "targetOrder": 2,
      "linkTint": "#f7b385"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.9,
      "sourceWidth": 184,
      "y0": 710,
      "sourceOrder": 0,
      "targetWidth": 186,
      "y1": 590,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_processing",
      "value": 1.7,
      "sourceWidth": 108.581,
      "y0": 857.29,
      "sourceOrder": 1,
      "targetWidth": 110,
      "y1": 936,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "cost_product",
      "value": 0.7,
      "sourceWidth": 44.419,
      "y0": 933.79,
      "sourceOrder": 2,
      "targetWidth": 45,
      "y1": 1137.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1,
      "sourceWidth": 65,
      "y0": 529.5,
      "sourceOrder": 0,
      "targetWidth": 65,
      "y1": 434.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.9,
      "sourceWidth": 121,
      "y0": 622.5,
      "sourceOrder": 1,
      "targetWidth": 121,
      "y1": 692.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.6,
      "sourceWidth": 31,
      "y0": 417.5,
      "sourceOrder": 0,
      "targetWidth": 32,
      "y1": 331,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "interest_other",
      "value": 0.4,
      "sourceWidth": 23.314,
      "y0": 444.657,
      "sourceOrder": 1,
      "targetWidth": 24,
      "y1": 549,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 10.686,
      "y0": 461.657,
      "sourceOrder": 2,
      "targetWidth": 11,
      "y1": 732.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 10,
      "y0": 393,
      "sourceOrder": 0,
      "targetWidth": 8,
      "y1": 351,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    }
  ],
  "layout": {
    "nodes": {
      "merchants_solutions": {
        "x": 444,
        "y": 443,
        "width": 71,
        "height": 168
      },
      "financial_solutions": {
        "x": 444,
        "y": 790,
        "width": 71,
        "height": 151
      },
      "corporate": {
        "x": 444,
        "y": 1101,
        "width": 71,
        "height": 23
      },
      "revenue": {
        "x": 911,
        "y": 618,
        "width": 70,
        "height": 339
      },
      "gross_profit": {
        "x": 1378,
        "y": 497,
        "width": 71,
        "height": 186
      },
      "cost_processing": {
        "x": 1378,
        "y": 881,
        "width": 71,
        "height": 110
      },
      "cost_product": {
        "x": 1378,
        "y": 1115,
        "width": 71,
        "height": 45
      },
      "operating_profit": {
        "x": 1846,
        "y": 402,
        "width": 70,
        "height": 65
      },
      "operating_expenses": {
        "x": 1846,
        "y": 632,
        "width": 70,
        "height": 121
      },
      "other": {
        "x": 2198,
        "y": 388,
        "width": 70,
        "height": 10
      },
      "net_profit": {
        "x": 2312,
        "y": 315,
        "width": 71,
        "height": 41
      },
      "interest_other": {
        "x": 2312,
        "y": 537,
        "width": 71,
        "height": 24
      },
      "tax": {
        "x": 2312,
        "y": 727,
        "width": 71,
        "height": 11
      }
    },
    "labels": {
      "merchants_solutions": {
        "blocks": [
          {
            "x": 480.75,
            "top": 343.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.96999999999997,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#ff6600",
                "textLength": 97
              },
              {
                "text": "(1%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 102
              }
            ]
          },
          {
            "x": 281.3333333333333,
            "top": 455.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.120000000000033,
            "lines": [
              {
                "text": "Merchants",
                "size": 40,
                "weight": 800,
                "color": "#ff6600",
                "textLength": 202
              },
              {
                "text": "Solutions",
                "size": 40,
                "weight": 800,
                "color": "#ff6600",
                "textLength": 177
              },
              {
                "text": "30% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#5e5e5e",
                "textLength": 283
              }
            ]
          }
        ]
      },
      "financial_solutions": {
        "blocks": [
          {
            "x": 483.75,
            "top": 687.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#ff6600",
                "textLength": 97
              },
              {
                "text": "(8%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 102
              }
            ]
          },
          {
            "x": 281,
            "top": 797.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.620000000000005,
            "lines": [
              {
                "text": "Financial",
                "size": 40,
                "weight": 800,
                "color": "#ff6600",
                "textLength": 168
              },
              {
                "text": "Solutions",
                "size": 40,
                "weight": 800,
                "color": "#ff6600",
                "textLength": 177
              },
              {
                "text": "39% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#5e5e5e",
                "textLength": 283
              }
            ]
          }
        ]
      },
      "corporate": {
        "blocks": [
          {
            "x": 484,
            "top": 999.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#ff6600",
                "textLength": 97
              },
              {
                "text": "+3% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 101
              }
            ]
          },
          {
            "x": 291.5,
            "top": 1084.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "Corporate",
                "size": 40,
                "weight": 800,
                "color": "#ff6600",
                "textLength": 191
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 943.8333333333334,
            "top": 467.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.120000000000033,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#ff6600",
                "textLength": 162
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#ff6600",
                "textLength": 97
              },
              {
                "text": "(4%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 102
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1412,
            "top": 304.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 225
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 97
              },
              {
                "text": "55% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 149
              },
              {
                "text": "(7pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "cost_processing": {
        "blocks": [
          {
            "x": 1544.8333333333333,
            "top": 875.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 95
              },
              {
                "text": "processing",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 146
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100",
                "textLength": 86
              }
            ]
          }
        ]
      },
      "cost_product": {
        "blocks": [
          {
            "x": 1544.8333333333333,
            "top": 1097.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 95
              },
              {
                "text": "product",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 106
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100",
                "textLength": 86
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1881.5,
            "top": 212.39999999999998,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 311
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 97
              },
              {
                "text": "19% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 149
              },
              {
                "text": "(12pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 129
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1881.1666666666667,
            "top": 764.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12.634999999999991,
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
                "textLength": 150
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 104
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2233.5,
            "top": 406.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11,
            "lines": [
              {
                "text": "Other",
                "size": 30,
                "weight": 800,
                "color": "#019050",
                "textLength": 86
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#019050",
                "textLength": 76
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2507,
            "top": 275.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
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
                "textLength": 97
              },
              {
                "text": "12% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 149
              },
              {
                "text": "(7pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 114
              }
            ]
          }
        ]
      },
      "interest_other": {
        "blocks": [
          {
            "x": 2507,
            "top": 506.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8,
            "lines": [
              {
                "text": "Interest &",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 135
              },
              {
                "text": "Other",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 78
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100",
                "textLength": 87
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2506.5,
            "top": 693.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 47
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100",
                "textLength": 87
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"181\" y=\"1159\" width=\"274\" height=\"147\" rx=\"31\" fill=\"#ff6600\"/><rect x=\"480\" y=\"1159\" width=\"428\" height=\"147\" rx=\"31\" fill=\"#ff6600\"/><text x=\"320\" y=\"1229.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">Clover GPV</text><text x=\"318\" y=\"1269.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">+9% Y/Y</text><text x=\"694.5\" y=\"1229.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">Organic revenue growth</text><text x=\"694\" y=\"1269.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">(5%) Y/Y</text><text x=\"342.5\" y=\"1358.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">GPV = Gross Payment Volume</text></g>",
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
      "name": "Fiserv · 2026 财年第二季度",
      "meta": {
        "title": "Fiserv 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleSize": 108,
        "titleTextLength": 1603.703
      },
      "nodes": {
        "merchants_solutions": {
          "label": "商户解决方案",
          "notes": [
            "同比 (1%)",
            "营业利润率 30%"
          ]
        },
        "financial_solutions": {
          "label": "金融解决方案",
          "notes": [
            "同比 (8%)",
            "营业利润率 39%"
          ]
        },
        "corporate": {
          "label": "公司及其他",
          "notes": [
            "同比 +3%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (4%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 55%",
            "同比 (7 个百分点)"
          ]
        },
        "cost_processing": {
          "label": "处理服务成本",
          "notes": []
        },
        "cost_product": {
          "label": "产品成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 19%",
            "同比 (12 个百分点)"
          ]
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
            "利润率 12%",
            "同比 (7 个百分点)"
          ]
        },
        "interest_other": {
          "label": "利息及其他",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "merchants_solutions": {
            "blocks": [
              {
                "x": 480.75,
                "top": 343.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.96999999999997,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#ff6600",
                    "textLength": 97
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 281.3333333333333,
                "top": 455.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.120000000000033,
                "lines": [
                  {
                    "text": "商户",
                    "size": 40,
                    "weight": 800,
                    "color": "#ff6600"
                  },
                  {
                    "text": "解决方案",
                    "size": 40,
                    "weight": 800,
                    "color": "#ff6600"
                  },
                  {
                    "text": "营业利润率 30%",
                    "size": 28,
                    "weight": 400,
                    "color": "#5e5e5e"
                  }
                ]
              }
            ]
          },
          "financial_solutions": {
            "blocks": [
              {
                "x": 483.75,
                "top": 687.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#ff6600",
                    "textLength": 97
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 281,
                "top": 797.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.620000000000005,
                "lines": [
                  {
                    "text": "金融",
                    "size": 40,
                    "weight": 800,
                    "color": "#ff6600"
                  },
                  {
                    "text": "解决方案",
                    "size": 40,
                    "weight": 800,
                    "color": "#ff6600"
                  },
                  {
                    "text": "营业利润率 39%",
                    "size": 28,
                    "weight": 400,
                    "color": "#5e5e5e"
                  }
                ]
              }
            ]
          },
          "corporate": {
            "blocks": [
              {
                "x": 484,
                "top": 999.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#ff6600",
                    "textLength": 97
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 291.5,
                "top": 1084.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "公司业务",
                    "size": 40,
                    "weight": 800,
                    "color": "#ff6600"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 943.8333333333334,
                "top": 467.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.120000000000033,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#ff6600"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#ff6600",
                    "textLength": 97
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1412,
                "top": 304.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000004,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51",
                    "textLength": 97
                  },
                  {
                    "text": "利润率 55%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_processing": {
            "blocks": [
              {
                "x": 1544.8333333333333,
                "top": 875.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "成本：",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "处理",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 86
                  }
                ]
              }
            ]
          },
          "cost_product": {
            "blocks": [
              {
                "x": 1544.8333333333333,
                "top": 1097.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "成本：",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "产品",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 86
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1881.5,
                "top": 212.39999999999998,
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
                    "textLength": 97
                  },
                  {
                    "text": "利润率 19%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (12 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1881.1666666666667,
                "top": 764.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12.634999999999991,
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
                    "textLength": 104
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2233.5,
                "top": 406.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "其他",
                    "size": 30,
                    "weight": 800,
                    "color": "#019050"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#019050",
                    "textLength": 76
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2507,
                "top": 275.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000004,
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
                    "textLength": 97
                  },
                  {
                    "text": "利润率 12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "interest_other": {
            "blocks": [
              {
                "x": 2507,
                "top": 506.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利息与",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "其他",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 87
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2506.5,
                "top": 693.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 87
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"181\" y=\"1159\" width=\"274\" height=\"147\" rx=\"31\" fill=\"#ff6600\"/><rect x=\"480\" y=\"1159\" width=\"428\" height=\"147\" rx=\"31\" fill=\"#ff6600\"/><text x=\"320\" y=\"1229.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">Clover GPV</text><text x=\"318\" y=\"1269.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">同比 +9%</text><text x=\"694.5\" y=\"1229.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">内生收入增长</text><text x=\"694\" y=\"1269.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">同比 (5%)</text><text x=\"342.5\" y=\"1358.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">GPV = 支付总额</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/fiserv/company-logo-fiserv-q2-fy26.png",
      "x": 748,
      "y": 265,
      "width": 385,
      "height": 195
    }
  ]
});
