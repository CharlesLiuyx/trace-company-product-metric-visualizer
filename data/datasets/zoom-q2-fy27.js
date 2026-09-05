window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "zoom-q2-fy27",
  "name": "Zoom · Q2 FY27",
  "company": "Zoom",
  "meta": {
    "company": "Zoom",
    "title": "Zoom Q2 FY27 Income Statement",
    "period": "Q2 FY27",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/zoom-q2-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 199.737247706422,
    "titleSize": 125.35779816513762,
    "titleWeight": 800,
    "titleTextLength": 2071
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
        "cost_of_revenue:left",
        "ga:left",
        "investments:right",
        "operating_profit:left",
        "other:right",
        "sm:left",
        "tax:left"
      ]
    },
    "linkOpacity": 1,
    "linkTint": {
      "source": "#99c4f7",
      "hub": "#99c4f7",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "enterprise",
      "label": "Enterprise",
      "value": 788,
      "valueText": "$788M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#2d8cff",
      "labelColor": "#2d8cff",
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "online",
      "label": "Online",
      "value": 490,
      "valueText": "$490M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#2d8cff",
      "labelColor": "#2d8cff",
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1277,
      "valueText": "$1,277M",
      "type": "hub",
      "col": 1,
      "order": 2,
      "color": "#2d8cff",
      "labelColor": "#2d8cff",
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 986,
      "valueText": "$986M",
      "type": "profit",
      "col": 2,
      "order": 3,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "77% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 292,
      "valueText": "($292M)",
      "type": "cost",
      "col": 2,
      "order": 4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 314,
      "valueText": "$314M",
      "type": "profit",
      "col": 3,
      "order": 5,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "25% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 671,
      "valueText": "($671M)",
      "type": "cost",
      "col": 3,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "investments",
      "label": "Investments",
      "value": 1614,
      "valueText": "$1,614M",
      "type": "profit",
      "col": 4,
      "order": 7,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 66,
      "valueText": "$66M",
      "type": "profit",
      "col": 4,
      "order": 8,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 1542,
      "valueText": "$1,542M",
      "type": "profit",
      "col": 5,
      "order": 9,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "121% margin",
        "+91pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 453,
      "valueText": "($453M)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 331,
      "valueText": "($331M)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "26% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "rd",
      "label": "R&D",
      "value": 243,
      "valueText": "($243M)",
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "19% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 98,
      "valueText": "($98M)",
      "type": "cost",
      "col": 5,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "8% of revenue",
        "+1pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "enterprise",
      "target": "revenue",
      "value": 788,
      "sourceWidth": 183,
      "y0": 697.5,
      "sourceOrder": 0,
      "targetWidth": 182.398,
      "y1": 780.199,
      "targetOrder": 0,
      "linkTint": "#99c4f7"
    },
    {
      "source": "online",
      "target": "revenue",
      "value": 490,
      "sourceWidth": 121,
      "y0": 1023.5,
      "sourceOrder": 0,
      "targetWidth": 120.602,
      "y1": 931.699,
      "targetOrder": 1,
      "linkTint": "#99c4f7"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 986,
      "sourceWidth": 235,
      "y0": 807.5,
      "sourceOrder": 0,
      "targetWidth": 235,
      "y1": 722.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 292,
      "sourceWidth": 66,
      "y0": 958,
      "sourceOrder": 1,
      "targetWidth": 68,
      "y1": 1050,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 314,
      "sourceWidth": 76,
      "y0": 643,
      "sourceOrder": 0,
      "targetWidth": 77,
      "y1": 547.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 671,
      "sourceWidth": 159,
      "y0": 760.5,
      "sourceOrder": 1,
      "targetWidth": 159,
      "y1": 856.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 314,
      "sourceWidth": 31,
      "y0": 525.5,
      "sourceOrder": 0,
      "targetWidth": 31,
      "y1": 439.5,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 314,
      "sourceWidth": 45,
      "y0": 563.5,
      "sourceOrder": 1,
      "targetWidth": 46,
      "y1": 677,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "investments",
      "target": "net_profit",
      "value": 1542,
      "sourceWidth": 101,
      "y0": 355.5,
      "sourceOrder": 0,
      "targetWidth": 100,
      "y1": 374,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 66,
      "sourceWidth": 20,
      "y0": 515,
      "sourceOrder": 0,
      "targetWidth": 20,
      "y1": 465,
      "targetOrder": 2,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 331,
      "sourceWidth": 83.426,
      "y0": 818.713,
      "sourceOrder": 0,
      "targetWidth": 85,
      "y1": 859.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rd",
      "value": 243,
      "sourceWidth": 52.019,
      "y0": 886.435,
      "sourceOrder": 1,
      "targetWidth": 53,
      "y1": 1073.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 98,
      "sourceWidth": 23.556,
      "y0": 924.222,
      "sourceOrder": 2,
      "targetWidth": 24,
      "y1": 1277,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "enterprise": {
        "x": 347,
        "y": 606,
        "width": 71,
        "height": 183
      },
      "online": {
        "x": 347,
        "y": 963,
        "width": 71,
        "height": 121
      },
      "revenue": {
        "x": 814,
        "y": 689,
        "width": 70,
        "height": 303
      },
      "gross_profit": {
        "x": 1281,
        "y": 605,
        "width": 71,
        "height": 235
      },
      "cost_of_revenue": {
        "x": 1281,
        "y": 1016,
        "width": 71,
        "height": 68
      },
      "operating_profit": {
        "x": 1749,
        "y": 509,
        "width": 70,
        "height": 77
      },
      "operating_expenses": {
        "x": 1749,
        "y": 777,
        "width": 70,
        "height": 159
      },
      "investments": {
        "x": 2079,
        "y": 305,
        "width": 70,
        "height": 101
      },
      "other": {
        "x": 2091,
        "y": 505,
        "width": 70,
        "height": 20
      },
      "net_profit": {
        "x": 2215,
        "y": 324,
        "width": 71,
        "height": 151
      },
      "tax": {
        "x": 2215,
        "y": 654,
        "width": 71,
        "height": 46
      },
      "sm": {
        "x": 2215,
        "y": 817,
        "width": 71,
        "height": 85
      },
      "rd": {
        "x": 2215,
        "y": 1047,
        "width": 71,
        "height": 53
      },
      "ga": {
        "x": 2215,
        "y": 1265,
        "width": 71,
        "height": 24
      }
    },
    "labels": {
      "enterprise": {
        "blocks": [
          {
            "x": 386,
            "top": 506.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#1566df",
                "textLength": 117
              },
              {
                "text": "+8% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 101
              }
            ]
          },
          {
            "x": 213.5,
            "top": 672.9999877929688,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "Enterprise",
                "size": 40,
                "weight": 800,
                "color": "#1464da",
                "textLength": 195
              }
            ]
          }
        ]
      },
      "online": {
        "blocks": [
          {
            "x": 383.25,
            "top": 864.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#1464da",
                "textLength": 117
              },
              {
                "text": "+1% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 102
              }
            ]
          },
          {
            "x": 213,
            "top": 1001.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "Online",
                "size": 40,
                "weight": 800,
                "color": "#1464da",
                "textLength": 124
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 844.5,
            "top": 538.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.120000000000005,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#1464dd",
                "textLength": 162
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#1464dd",
                "textLength": 149
              },
              {
                "text": "+5% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#424242",
                "textLength": 100
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1322.25,
            "top": 412.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12.74666666666669,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 224
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 117
              },
              {
                "text": "77% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 150
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1317.3333333333333,
            "top": 1096.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.784999999999968,
            "lines": [
              {
                "text": "Cost of",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 114
              },
              {
                "text": "revenue",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 132
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 122
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1788,
            "top": 318.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12.74666666666667,
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
                "textLength": 117
              },
              {
                "text": "25% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 149
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1782.8333333333333,
            "top": 947.2,
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
      "investments": {
        "blocks": [
          {
            "x": 2110.25,
            "top": 220.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 7.569999999999993,
            "lines": [
              {
                "text": "Investments",
                "size": 30,
                "weight": 800,
                "color": "#028f51",
                "textLength": 186
              },
              {
                "text": "$value",
                "size": 29.597,
                "weight": 400,
                "color": "#028f51"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2125.5,
            "top": 536.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11,
            "lines": [
              {
                "text": "Other",
                "size": 30,
                "weight": 800,
                "color": "#008f51",
                "textLength": 86
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#008f51",
                "textLength": 74
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2407.75,
            "top": 327.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 187
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 149
              },
              {
                "text": "121% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 164
              },
              {
                "text": "+91pp Y/Y",
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
            "x": 2407.75,
            "top": 643.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 6.57000000000005,
            "lines": [
              {
                "text": "Tax",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 53
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
      "sm": {
        "blocks": [
          {
            "x": 2407.625,
            "top": 825.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.846666666666692,
            "lines": [
              {
                "text": "S&M",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 64
              },
              {
                "text": "$value",
                "size": 30.17,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "26% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 197
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 114
              }
            ]
          }
        ]
      },
      "rd": {
        "blocks": [
          {
            "x": 2408,
            "top": 1032.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.846666666666692,
            "lines": [
              {
                "text": "R&D",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 60
              },
              {
                "text": "$value",
                "size": 30.17,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "19% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 196
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2407.875,
            "top": 1228.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.846666666666655,
            "lines": [
              {
                "text": "G&A",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 63
              },
              {
                "text": "$value",
                "size": 30.245,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "8% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 181
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"19\" y=\"1117\" width=\"150\" height=\"168\" rx=\"31\" fill=\"#2d8bff\"/><rect x=\"173\" y=\"1117\" width=\"144\" height=\"168\" rx=\"31\" fill=\"#2d8bff\"/><rect x=\"322\" y=\"1117\" width=\"333\" height=\"168\" rx=\"31\" fill=\"#2d8bff\"/><rect x=\"660\" y=\"1117\" width=\"332\" height=\"168\" rx=\"31\" fill=\"#2d8bff\"/><text x=\"94\" y=\"1175.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">RPO</text><text x=\"94\" y=\"1215.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$4.5B</text><text x=\"94\" y=\"1258.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">+14% Y/Y</text><text x=\"245\" y=\"1176.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">DBNE</text><text x=\"244.5\" y=\"1217.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">99%</text><text x=\"243\" y=\"1259.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">TTM</text><text x=\"489.5\" y=\"1195.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">Customers &gt; $100K</text><text x=\"487\" y=\"1237.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">+8% Y/Y to 4,625</text><text x=\"825.5\" y=\"1172.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">Montly Churn</text><text x=\"825.5\" y=\"1215.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">2.9%</text><text x=\"826\" y=\"1256.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">Flat Y/Y</text><text x=\"213\" y=\"307.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">Q2 FY27</text><text x=\"213\" y=\"356.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">Ending July 2026</text><text x=\"347.5\" y=\"1317.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">RPO = Remaining Performance Obligation</text><text x=\"358.5\" y=\"1360.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">DBNE = Dollar Based Net Expansion</text></g>",
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
      "name": "Zoom · 2027 财年第二季度",
      "meta": {
        "title": "Zoom 2027 财年第二季度利润表",
        "period": "2027 财年第二季度",
        "titleSize": 108,
        "titleTextLength": 1584.578
      },
      "nodes": {
        "enterprise": {
          "label": "企业",
          "notes": [
            "同比 +8%"
          ]
        },
        "online": {
          "label": "线上",
          "notes": [
            "同比 +1%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 77%",
            "同比 (0 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 25%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "investments": {
          "label": "投资收益",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 121%",
            "同比 +91 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 26%",
            "同比 (2 个百分点)"
          ]
        },
        "rd": {
          "label": "研发",
          "notes": [
            "占收入 19%",
            "同比 +2 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 8%",
            "同比 +1 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "enterprise": {
            "blocks": [
              {
                "x": 386,
                "top": 506.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#1566df",
                    "textLength": 117
                  },
                  {
                    "text": "同比 +8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 213.5,
                "top": 672.9999877929688,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "企业",
                    "size": 40,
                    "weight": 800,
                    "color": "#1464da"
                  }
                ]
              }
            ]
          },
          "online": {
            "blocks": [
              {
                "x": 383.25,
                "top": 864.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#1464da",
                    "textLength": 117
                  },
                  {
                    "text": "同比 +1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 213,
                "top": 1001.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "在线",
                    "size": 40,
                    "weight": 800,
                    "color": "#1464da"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 844.5,
                "top": 538.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.120000000000005,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#1464dd"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#1464dd",
                    "textLength": 149
                  },
                  {
                    "text": "同比 +5%",
                    "size": 28,
                    "weight": 400,
                    "color": "#424242"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1322.25,
                "top": 412.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12.74666666666669,
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
                    "textLength": 117
                  },
                  {
                    "text": "利润率 77%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1317.3333333333333,
                "top": 1096.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.784999999999968,
                "lines": [
                  {
                    "text": "成本：",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "收入",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 122
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1788,
                "top": 318.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12.74666666666667,
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
                    "textLength": 117
                  },
                  {
                    "text": "利润率 25%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 1782.8333333333333,
                "top": 947.2,
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
          "investments": {
            "blocks": [
              {
                "x": 2110.25,
                "top": 220.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 7.569999999999993,
                "lines": [
                  {
                    "text": "投资收益",
                    "size": 30,
                    "weight": 800,
                    "color": "#028f51"
                  },
                  {
                    "text": "$value",
                    "size": 29.597,
                    "weight": 400,
                    "color": "#028f51"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2125.5,
                "top": 536.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "其他",
                    "size": 30,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#008f51",
                    "textLength": 74
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2407.75,
                "top": 327.4,
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
                    "textLength": 149
                  },
                  {
                    "text": "利润率 121%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +91 个百分点",
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
                "x": 2407.75,
                "top": 643.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 6.57000000000005,
                "lines": [
                  {
                    "text": "税费",
                    "size": 30,
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
          "sm": {
            "blocks": [
              {
                "x": 2407.625,
                "top": 825.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.846666666666692,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.17,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 26%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rd": {
            "blocks": [
              {
                "x": 2408,
                "top": 1032.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.846666666666692,
                "lines": [
                  {
                    "text": "研发",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.17,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 19%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2407.875,
                "top": 1228.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.846666666666655,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.245,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"19\" y=\"1117\" width=\"150\" height=\"168\" rx=\"31\" fill=\"#2d8bff\"/><rect x=\"173\" y=\"1117\" width=\"144\" height=\"168\" rx=\"31\" fill=\"#2d8bff\"/><rect x=\"322\" y=\"1117\" width=\"333\" height=\"168\" rx=\"31\" fill=\"#2d8bff\"/><rect x=\"660\" y=\"1117\" width=\"332\" height=\"168\" rx=\"31\" fill=\"#2d8bff\"/><text x=\"94\" y=\"1175.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">RPO</text><text x=\"94\" y=\"1215.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$4.5B</text><text x=\"94\" y=\"1258.23\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#ffffff\">同比 +14%</text><text x=\"245\" y=\"1176.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">DBNE</text><text x=\"244.5\" y=\"1217.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">99%</text><text x=\"243\" y=\"1259.23\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">近12个月</text><text x=\"489.5\" y=\"1195.23\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"400\" fill=\"#ffffff\">年收入超过 $100K 的客户</text><text x=\"487\" y=\"1237.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">同比 +8%，至 4,625</text><text x=\"825.5\" y=\"1172.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">月流失率</text><text x=\"825.5\" y=\"1215.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">2.9%</text><text x=\"826\" y=\"1256.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">同比持平</text><text x=\"213\" y=\"307.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">2027 财年第二季度</text><text x=\"213\" y=\"356.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">截至 2026 年 7 月</text><text x=\"347.5\" y=\"1317.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">RPO = 剩余履约义务</text><text x=\"358.5\" y=\"1360.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">DBNE = 金额净扩张率</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/zoom/company-logo-zoom-q2-fy27.png",
      "x": 588,
      "y": 289,
      "width": 468,
      "height": 116
    }
  ]
});
