window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "spotify-q3-fy23",
  "name": "Spotify · Q3 FY23",
  "company": "Spotify",
  "meta": {
    "company": "Spotify",
    "title": "Spotify Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/spotify-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 196.61458333333331,
    "titleSize": 125,
    "titleWeight": 800,
    "periodX": -3000,
    "periodY": -3000,
    "logoWidth": 242.1875,
    "logoHeight": 242.1875,
    "logoY": 255.20833333333331,
    "logoViewBox": "0 0 231 231",
    "logoSvg": "\n    <rect x=\"0\" y=\"0\" width=\"231\" height=\"231\" rx=\"52\" fill=\"#0a0a0a\"/>\n    <circle cx=\"115.5\" cy=\"115.5\" r=\"90\" fill=\"#1ed760\"/>\n    \n    <path d=\"M 59.7 120.2 Q 115.5 89.6 171.3 120.2\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"12.15\" stroke-linecap=\"round\"/>\n    <path d=\"M 70.5 137.3 Q 115.5 110.3 160.5 137.3\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"10.35\" stroke-linecap=\"round\"/>\n    <path d=\"M 82.2 152.6 Q 115.5 131.9 148.8 152.6\" fill=\"none\" stroke=\"#0a0a0a\" stroke-width=\"8.55\" stroke-linecap=\"round\"/>",
    "hidePeriodStamp": true,
    "logoX": 736.9791666666666
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#818181",
    "noteColor": "#818181",
    "palette": {
      "source": {
        "node": "#0a0a0a",
        "label": "#0a0a0a"
      },
      "hub": {
        "node": "#0a0a0a",
        "label": "#0a0a0a"
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
      "source": "#858585",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "premium",
      "label": "Premium",
      "value": 2910,
      "valueText": "€2,910M",
      "notes": [
        "+10% Y/Y",
        "29% gross margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "advertising",
      "label": "Ad-supported",
      "value": 447,
      "valueText": "€447M",
      "notes": [
        "+16% Y/Y",
        "8% gross margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3357,
      "valueText": "€3,357M",
      "notes": [
        "+11% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 2
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 885,
      "valueText": "€885M",
      "notes": [
        "26% margin",
        "+2pp Y/Y"
      ],
      "type": "profit",
      "col": 2,
      "order": 3
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 2472,
      "valueText": "(€2,472M)",
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 4
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 32,
      "valueText": "€32M",
      "notes": [
        "1% margin",
        "+8pp Y/Y"
      ],
      "type": "profit",
      "col": 3,
      "order": 5
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 853,
      "valueText": "(€853M)",
      "notes": [],
      "type": "cost",
      "col": 3,
      "order": 6
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 65,
      "valueText": "€65M",
      "notes": [
        "2% margin",
        "+7pp Y/Y"
      ],
      "type": "profit",
      "col": 4,
      "order": 7
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 8,
      "valueText": "(€8M)",
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 8
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 369,
      "valueText": "(€369M)",
      "notes": [
        "11% of revenue",
        "(2pp) Y/Y"
      ],
      "type": "cost",
      "col": 4,
      "order": 9
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 355,
      "valueText": "(€355M)",
      "notes": [
        "11% of revenue",
        "(4pp) Y/Y"
      ],
      "type": "cost",
      "col": 4,
      "order": 10
    },
    {
      "id": "ga",
      "label": "General & Admin",
      "value": 129,
      "valueText": "(€129M)",
      "notes": [
        "4% of revenue",
        "(1%) Y/Y"
      ],
      "type": "cost",
      "col": 4,
      "order": 11
    },
    {
      "id": "financial",
      "label": "Financial",
      "value": 41,
      "valueText": "€41M",
      "type": "profit",
      "color": "#2ca02c",
      "labelColor": "#008800",
      "notes": [],
      "col": 3,
      "order": 12
    }
  ],
  "nonNodeMetrics": [],
  "operatingMetrics": [
    {
      "id": "mau",
      "value": "574000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "574M"
    },
    {
      "id": "premium_subscribers",
      "value": "226000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "226M"
    },
    {
      "id": "ad_supported_subscribers",
      "value": "361000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "361M"
    }
  ],
  "layout": {
    "nodes": {
      "premium": {
        "x": 363.28125,
        "y": 570.3125,
        "width": 71.61458333333333,
        "height": 346.35416666666663
      },
      "advertising": {
        "x": 363.28125,
        "y": 1082.03125,
        "width": 71.61458333333333,
        "height": 53.385416666666664
      },
      "revenue": {
        "x": 829.4270833333333,
        "y": 669.2708333333333,
        "width": 72.91666666666666,
        "height": 399.7395833333333
      },
      "gross_profit": {
        "x": 1294.2708333333333,
        "y": 566.40625,
        "width": 72.91666666666666,
        "height": 105.46875
      },
      "cost_of_revenue": {
        "x": 1296.875,
        "y": 856.7708333333333,
        "width": 72.91666666666666,
        "height": 294.2708333333333
      },
      "operating_profit": {
        "x": 1761.71875,
        "y": 505.2083333333333,
        "width": 72.91666666666666,
        "height": 2.6041666666666665
      },
      "operating_expenses": {
        "x": 1761.71875,
        "y": 670.5729166666666,
        "width": 72.91666666666666,
        "height": 101.5625
      },
      "net_profit": {
        "x": 2230.46875,
        "y": 421.875,
        "width": 72.91666666666666,
        "height": 6.510416666666666
      },
      "tax": {
        "x": 2230.46875,
        "y": 664.0625,
        "width": 72.91666666666666,
        "height": 2.6041666666666665
      },
      "rnd": {
        "x": 2230.46875,
        "y": 804.6875,
        "width": 72.91666666666666,
        "height": 44.27083333333333
      },
      "sm": {
        "x": 2230.46875,
        "y": 1019.5312499999999,
        "width": 72.91666666666666,
        "height": 41.666666666666664
      },
      "ga": {
        "x": 2230.46875,
        "y": 1242.1875,
        "width": 72.91666666666666,
        "height": 14.322916666666666
      },
      "financial": {
        "x": 2097,
        "y": 495,
        "width": 72,
        "height": 5
      }
    },
    "labels": {
      "premium": {
        "blocks": [
          {
            "x": 399.7395833333333,
            "top": 468.75,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400,
                "color": "#080808"
              },
              {
                "text": "+10% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 399.7395833333333,
            "top": 981.7708333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400,
                "color": "#080808"
              },
              {
                "text": "+16% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 865.8854166666666,
            "top": 519.53125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.760416666666664,
                "weight": 700,
                "color": "#080808"
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400,
                "color": "#080808"
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1330.7291666666665,
            "top": 373.69791666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.760416666666664,
                "weight": 700,
                "color": "#009457"
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400,
                "color": "#009457"
              },
              {
                "text": "26% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1333.3333333333333,
            "top": 1165.3645833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.760416666666664,
                "weight": 700,
                "color": "#a41600"
              },
              {
                "text": "revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400,
                "color": "#a41600"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1798.1770833333333,
            "top": 312.5,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.760416666666664,
                "weight": 700,
                "color": "#009457"
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400,
                "color": "#009457"
              },
              {
                "text": "1% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "+8pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1798.1770833333333,
            "top": 786.4583333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 37.760416666666664,
                "weight": 700,
                "color": "#a41600"
              },
              {
                "text": "expenses",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400,
                "color": "#a41600"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2438.802083333333,
            "top": 372.3958333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.760416666666664,
                "weight": 700,
                "color": "#009457"
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400,
                "color": "#009457"
              },
              {
                "text": "2% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "+7pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2444.0104166666665,
            "top": 625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 700,
                "color": "#a41600"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#a41600"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2454.427083333333,
            "top": 782.5520833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 700,
                "color": "#a41600"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#a41600"
              },
              {
                "text": "11% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2454.427083333333,
            "top": 988.28125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31.25,
                "weight": 700,
                "color": "#a41600"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#a41600"
              },
              {
                "text": "11% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2454.427083333333,
            "top": 1203.125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "General & Admin",
                "size": 31.25,
                "weight": 700,
                "color": "#a41600"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#a41600"
              },
              {
                "text": "4% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "financial": {
        "blocks": [
          {
            "x": 2132.8125,
            "top": 509.1145833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Financial",
                "size": 31.25,
                "weight": 700,
                "color": "#008800"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#008800"
              }
            ]
          }
        ]
      }
    }
  },
  "links": [
    {
      "source": "premium",
      "target": "revenue",
      "value": 2910,
      "sourceWidth": 346.35416666666663,
      "targetWidth": 346.35416666666663,
      "y0": 743.4895833333333,
      "y1": 842.4479166666666
    },
    {
      "source": "advertising",
      "target": "revenue",
      "value": 447,
      "sourceWidth": 53.385416666666664,
      "targetWidth": 53.385416666666664,
      "y0": 1108.7239583333333,
      "y1": 1042.3177083333333
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 885,
      "sourceWidth": 105.46875,
      "targetWidth": 105.46875,
      "y0": 722.0052083333333,
      "y1": 619.140625
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 2472,
      "sourceWidth": 294.2708333333333,
      "targetWidth": 294.2708333333333,
      "y0": 921.875,
      "y1": 1003.9062499999999
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 32,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "y0": 567.7083333333333,
      "y1": 506.51041666666663
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 853,
      "sourceWidth": 102.86458333333333,
      "targetWidth": 101.5625,
      "y0": 620.4427083333333,
      "y1": 721.3541666666666
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 24,
      "sourceWidth": 1.953125,
      "targetWidth": 2.6041666666666665,
      "y0": 506.1848958333333,
      "y1": 423.1770833333333,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 8,
      "sourceWidth": 0.6510416666666666,
      "targetWidth": 2.6041666666666665,
      "y0": 507.48697916666663,
      "y1": 665.3645833333333
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 369,
      "sourceWidth": 44.27083333333333,
      "targetWidth": 44.27083333333333,
      "y0": 692.7083333333333,
      "y1": 826.8229166666666
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 355,
      "sourceWidth": 41.666666666666664,
      "targetWidth": 41.666666666666664,
      "y0": 735.6770833333333,
      "y1": 1040.3645833333333
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 129,
      "sourceWidth": 15.625,
      "targetWidth": 14.322916666666666,
      "y0": 764.3229166666666,
      "y1": 1249.3489583333333
    },
    {
      "target": "net_profit",
      "value": 41,
      "sourceWidth": 5,
      "targetWidth": 3.90625,
      "y0": 497.5,
      "y1": 426.43229166666663,
      "targetOrder": 1,
      "curve": {
        "x0": 2169,
        "c1x": 2200.5,
        "c1y": 497.5,
        "c2x": 2200.5,
        "c2y": 426.43229166666663
      },
      "source": "financial",
      "sourceOrder": 0
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"145\" y=\"572\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#080808\" >Premium</text><text x=\"145\" y=\"604\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#808080\" >29% gross margin</text><text x=\"145\" y=\"849\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#080808\" >Ad-supported</text><text x=\"145\" y=\"880\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#808080\" >8% gross margin</text><g><rect x=\"23\" y=\"923\" width=\"161\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"103.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#ffffff\" >MAU</text><text x=\"103.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"mau\">574M</text><text x=\"103.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >+26% Y/Y</text></g><g><rect x=\"194\" y=\"923\" width=\"255\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"321.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#ffffff\" >Premium Subs</text><text x=\"321.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"premium_subscribers\">226M</text><text x=\"321.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >+16% Y/Y</text></g><g><rect x=\"459\" y=\"923\" width=\"291\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"604.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#ffffff\" >Ad-supported Subs</text><text x=\"604.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"ad_supported_subscribers\">361M</text><text x=\"604.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >+32% Y/Y</text></g><text x=\"326\" y=\"1067\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#808080\" >MAU = Monthly Active Users</text><text x=\"330\" y=\"1104\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#080808\" >Source: Quarterly results</text></g></g>",
  "i18n": {
    "zh": {
      "name": "Spotify · 2023 财年第三季度",
      "meta": {
        "title": "Spotify 2023 财年第三季度利润表",
        "period": "2023 财年第三季度"
      },
      "nodes": {
        "premium": {
          "label": "付费订阅",
          "notes": [
            "同比 +10%",
            "毛利率 29%"
          ]
        },
        "advertising": {
          "label": "广告支持",
          "notes": [
            "同比 +16%",
            "毛利率 8%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 26%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 1%",
            "同比 +8 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 2%",
            "同比 +7 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 11%",
            "同比 (2 个百分点)"
          ]
        },
        "sm": {
          "label": "销售及营销",
          "notes": [
            "占收入 11%",
            "同比 (4 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 4%",
            "同比 (1%)"
          ]
        },
        "financial": {
          "label": "财务收益",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "premium": {
            "blocks": [
              {
                "x": 399.7395833333333,
                "top": 468.75,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400,
                    "color": "#080808"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 399.7395833333333,
                "top": 981.7708333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400,
                    "color": "#080808"
                  },
                  {
                    "text": "同比 +16%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 865.8854166666666,
                "top": 519.53125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.760416666666664,
                    "weight": 700,
                    "color": "#080808"
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400,
                    "color": "#080808"
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1330.7291666666665,
                "top": 373.69791666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.760416666666664,
                    "weight": 700,
                    "color": "#009457"
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400,
                    "color": "#009457"
                  },
                  {
                    "text": "利润率 26%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1333.3333333333333,
                "top": 1165.3645833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.760416666666664,
                    "weight": 700,
                    "color": "#a41600"
                  },
                  {
                    "text": "成本",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400,
                    "color": "#a41600"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1798.1770833333333,
                "top": 312.5,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.760416666666664,
                    "weight": 700,
                    "color": "#009457"
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400,
                    "color": "#009457"
                  },
                  {
                    "text": "利润率 1%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 +8 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1798.1770833333333,
                "top": 786.4583333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.760416666666664,
                    "weight": 700,
                    "color": "#a41600"
                  },
                  {
                    "text": "费用",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400,
                    "color": "#a41600"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2438.802083333333,
                "top": 372.3958333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.760416666666664,
                    "weight": 700,
                    "color": "#009457"
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400,
                    "color": "#009457"
                  },
                  {
                    "text": "利润率 2%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2444.0104166666665,
                "top": 625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#a41600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#a41600"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2454.427083333333,
                "top": 782.5520833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#a41600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#a41600"
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2454.427083333333,
                "top": 988.28125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售及营销",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#a41600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#a41600"
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2454.427083333333,
                "top": 1203.125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#a41600"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#a41600"
                  },
                  {
                    "text": "占收入 4%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "financial": {
            "blocks": [
              {
                "x": 2132.8125,
                "top": 509.1145833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "财务收益",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#008800"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#008800"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"145\" y=\"572\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#080808\" >付费订阅</text><text x=\"145\" y=\"604\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#808080\" >毛利率 29%</text><text x=\"145\" y=\"849\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#080808\" >广告支持</text><text x=\"145\" y=\"880\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#808080\" >毛利率 8%</text><g><rect x=\"23\" y=\"923\" width=\"161\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"103.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#ffffff\" >MAU</text><text x=\"103.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"mau\">574M</text><text x=\"103.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >同比 +26%</text></g><g><rect x=\"194\" y=\"923\" width=\"255\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"321.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#ffffff\" >付费订阅用户</text><text x=\"321.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"premium_subscribers\">226M</text><text x=\"321.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >同比 +16%</text></g><g><rect x=\"459\" y=\"923\" width=\"291\" height=\"115\" rx=\"23\" fill=\"#000000\"/><text x=\"604.5\" y=\"964\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"#ffffff\" >广告支持用户</text><text x=\"604.5\" y=\"994\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"ad_supported_subscribers\">361M</text><text x=\"604.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" font-weight=\"400\" fill=\"#ffffff\" >同比 +32%</text></g><text x=\"326\" y=\"1067\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"400\" fill=\"#808080\" >MAU = 月活跃用户</text><text x=\"330\" y=\"1104\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"700\" fill=\"#080808\" >来源：季度业绩</text></g></g>"
    }
  }
});
