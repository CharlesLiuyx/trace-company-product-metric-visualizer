window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "docebo-q2-fy26",
  "name": "Docebo · Q2 FY26",
  "company": "Docebo",
  "meta": {
    "company": "Docebo",
    "title": "Docebo Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/docebo-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199.51008849557522,
    "titleSize": 125.23893805309736,
    "titleWeight": 800,
    "titleTextLength": 2176
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
        "depreciation:left",
        "operating_expenses:left",
        "other:right",
        "rd:left",
        "sbc:left"
      ]
    },
    "linkOpacity": 1,
    "linkTint": {
      "source": "#8fb3e5",
      "hub": "#8fb3e5",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "subscription",
      "label": "Subscription",
      "value": 64,
      "valueText": "$64M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#1464db",
      "labelColor": "#1464db",
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "professional_services",
      "label": "Professional services",
      "value": 5,
      "valueText": "$5M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#1464db",
      "labelColor": "#1464db",
      "notes": [
        "+31% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 69,
      "valueText": "$69M",
      "type": "hub",
      "col": 1,
      "order": 2,
      "color": "#1464db",
      "labelColor": "#1464db",
      "notes": [
        "+13% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 55,
      "valueText": "$55M",
      "type": "profit",
      "col": 2,
      "order": 3,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "79% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 14,
      "valueText": "($14M)",
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
      "value": 3,
      "valueText": "$3M",
      "type": "profit",
      "col": 3,
      "order": 5,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "4% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 52,
      "valueText": "($52M)",
      "type": "cost",
      "col": 3,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 1,
      "valueText": "$1M",
      "type": "profit",
      "col": 4,
      "order": 7,
      "color": "#449e44",
      "labelColor": "#008f51",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 2,
      "valueText": "$2M",
      "type": "profit",
      "col": 5,
      "order": 8,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "3% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1,
      "valueText": "($1M)",
      "type": "cost",
      "col": 5,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 23,
      "valueText": "($23M)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "S&M ($23M)",
        "33% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "rd",
      "label": "R&D",
      "value": 13,
      "valueText": "($13M)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "R&D ($13M)",
        "19% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 9,
      "valueText": "($9M)",
      "type": "cost",
      "col": 5,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "G&A ($9M)",
        "14% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "sbc",
      "label": "SBC",
      "value": 2,
      "valueText": "($2M)",
      "type": "cost",
      "col": 5,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "SBC ($2M)",
        "4% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "depreciation",
      "label": "Depreciation",
      "value": 2,
      "valueText": "($2M)",
      "type": "cost",
      "col": 5,
      "order": 14,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "Depreciation ($2M)",
        "3% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "fx_loss",
      "label": "Fx loss",
      "value": 2,
      "valueText": "($2M)",
      "type": "cost",
      "col": 5,
      "order": 15,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "Fx loss ($2M)",
        "3% of revenue",
        "+2pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 64,
      "sourceWidth": 327,
      "y0": 669.5,
      "sourceOrder": 0,
      "targetWidth": 327.932,
      "y1": 754.966,
      "targetOrder": 0,
      "linkTint": "#8fb3e5"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 5,
      "sourceWidth": 24,
      "y0": 1042,
      "sourceOrder": 0,
      "targetWidth": 24.068,
      "y1": 930.966,
      "targetOrder": 1,
      "linkTint": "#8fb3e5"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 55,
      "sourceWidth": 279,
      "y0": 730.5,
      "sourceOrder": 0,
      "targetWidth": 280,
      "y1": 653,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 14,
      "sourceWidth": 73,
      "y0": 906.5,
      "sourceOrder": 1,
      "targetWidth": 73,
      "y1": 1021.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3,
      "sourceWidth": 13,
      "y0": 519.5,
      "sourceOrder": 0,
      "targetWidth": 13,
      "y1": 409.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 52,
      "sourceWidth": 266,
      "y0": 660,
      "sourceOrder": 1,
      "targetWidth": 267,
      "y1": 744.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2,
      "sourceWidth": 7,
      "y0": 406.5,
      "sourceOrder": 0,
      "targetWidth": 8,
      "y1": 284,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1,
      "sourceWidth": 6,
      "y0": 413,
      "sourceOrder": 1,
      "targetWidth": 3,
      "y1": 501.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 1,
      "sourceWidth": 3,
      "y0": 337.5,
      "sourceOrder": 0,
      "targetWidth": 3,
      "y1": 289.5,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 23,
      "sourceWidth": 115.134,
      "y0": 669.567,
      "sourceOrder": 0,
      "targetWidth": 116,
      "y1": 623,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rd",
      "value": 13,
      "sourceWidth": 66.5,
      "y0": 760.384,
      "sourceOrder": 1,
      "targetWidth": 67,
      "y1": 773.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 9,
      "sourceWidth": 48.634,
      "y0": 817.951,
      "sourceOrder": 2,
      "targetWidth": 49,
      "y1": 908.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sbc",
      "value": 2,
      "sourceWidth": 12.903,
      "y0": 848.72,
      "sourceOrder": 3,
      "targetWidth": 13,
      "y1": 1024.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation",
      "value": 2,
      "sourceWidth": 11.91,
      "y0": 861.127,
      "sourceOrder": 4,
      "targetWidth": 12,
      "y1": 1151,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "fx_loss",
      "value": 2,
      "sourceWidth": 10.918,
      "y0": 872.541,
      "sourceOrder": 5,
      "targetWidth": 11,
      "y1": 1282.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "subscription": {
        "x": 368,
        "y": 506,
        "width": 71,
        "height": 327
      },
      "professional_services": {
        "x": 368,
        "y": 1030,
        "width": 71,
        "height": 24
      },
      "revenue": {
        "x": 835,
        "y": 591,
        "width": 70,
        "height": 352
      },
      "gross_profit": {
        "x": 1302,
        "y": 513,
        "width": 71,
        "height": 280
      },
      "cost_of_revenue": {
        "x": 1302,
        "y": 985,
        "width": 71,
        "height": 73
      },
      "operating_profit": {
        "x": 1770,
        "y": 403,
        "width": 70,
        "height": 13
      },
      "operating_expenses": {
        "x": 1770,
        "y": 611,
        "width": 70,
        "height": 267
      },
      "other": {
        "x": 2120,
        "y": 336,
        "width": 70,
        "height": 3
      },
      "net_profit": {
        "x": 2231,
        "y": 280,
        "width": 71,
        "height": 11
      },
      "tax": {
        "x": 2236,
        "y": 500,
        "width": 70,
        "height": 3
      },
      "sm": {
        "x": 2236,
        "y": 565,
        "width": 71,
        "height": 116
      },
      "rd": {
        "x": 2236,
        "y": 740,
        "width": 71,
        "height": 67
      },
      "ga": {
        "x": 2236,
        "y": 884,
        "width": 71,
        "height": 49
      },
      "sbc": {
        "x": 2236,
        "y": 1018,
        "width": 71,
        "height": 13
      },
      "depreciation": {
        "x": 2236,
        "y": 1145,
        "width": 71,
        "height": 12
      },
      "fx_loss": {
        "x": 2236,
        "y": 1277,
        "width": 71,
        "height": 11
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 404.5,
            "top": 407.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.96999999999997,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#1566df",
                "textLength": 95
              },
              {
                "text": "+12% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 182,
            "top": 643.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "Subscription",
                "size": 40,
                "weight": 800,
                "color": "#1464da",
                "textLength": 238
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 404.5,
            "top": 930.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#1464da",
                "textLength": 73
              },
              {
                "text": "+31% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 182.5,
            "top": 990.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13,
            "lines": [
              {
                "text": "Professional",
                "size": 40,
                "weight": 800,
                "color": "#1464da",
                "textLength": 233
              },
              {
                "text": "services",
                "size": 40,
                "weight": 800,
                "color": "#1464da",
                "textLength": 153
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 868.3333333333334,
            "top": 441.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.120000000000033,
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
                "textLength": 95
              },
              {
                "text": "+13% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#424242",
                "textLength": 117
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1333.25,
            "top": 324.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
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
                "textLength": 95
              },
              {
                "text": "79% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 150
              },
              {
                "text": "(1pp) Y/Y",
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
            "x": 1337.8333333333333,
            "top": 1071.9,
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
                "textLength": 133
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1801.125,
            "top": 213.39999999999998,
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
                "textLength": 73
              },
              {
                "text": "4% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 135
              },
              {
                "text": "(3pp) Y/Y",
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
            "x": 1801.3333333333333,
            "top": 891.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12.134999999999991,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 166
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
            "x": 2151.25,
            "top": 350.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12,
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
                "textLength": 57
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2453.25,
            "top": 233.39999999999998,
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
                "textLength": 73
              },
              {
                "text": "3% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 134
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
      "tax": {
        "blocks": [
          {
            "x": 2453.25,
            "top": 467.7,
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
      "sm": {
        "blocks": [
          {
            "x": 2453.3333333333335,
            "top": 573.63,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11.40500000000003,
            "lines": [
              {
                "text": "S&M ($23M)",
                "size": 31,
                "weight": 800,
                "color": "#941100",
                "textLength": 171
              },
              {
                "text": "33% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 198
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "rd": {
        "blocks": [
          {
            "x": 2460.1666666666665,
            "top": 709.63,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11.40500000000003,
            "lines": [
              {
                "text": "R&D ($13M)",
                "size": 31,
                "weight": 800,
                "color": "#941100",
                "textLength": 167
              },
              {
                "text": "19% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 196
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
      "ga": {
        "blocks": [
          {
            "x": 2459.8333333333335,
            "top": 847.63,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11.90500000000003,
            "lines": [
              {
                "text": "G&A ($9M)",
                "size": 31,
                "weight": 800,
                "color": "#941100",
                "textLength": 151
              },
              {
                "text": "14% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 196
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 114
              }
            ]
          }
        ]
      },
      "sbc": {
        "blocks": [
          {
            "x": 2459.3333333333335,
            "top": 985.63,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11.40500000000003,
            "lines": [
              {
                "text": "SBC ($2M)",
                "size": 31,
                "weight": 800,
                "color": "#941100",
                "textLength": 141
              },
              {
                "text": "4% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 183
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
      },
      "depreciation": {
        "blocks": [
          {
            "x": 2459.6666666666665,
            "top": 1123.63,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11.404999999999973,
            "lines": [
              {
                "text": "Depreciation ($2M)",
                "size": 31,
                "weight": 800,
                "color": "#941100",
                "textLength": 280
              },
              {
                "text": "3% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 182
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
      "fx_loss": {
        "blocks": [
          {
            "x": 2453.6666666666665,
            "top": 1261.63,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 11.404999999999973,
            "lines": [
              {
                "text": "Fx loss ($2M)",
                "size": 31,
                "weight": 800,
                "color": "#941100",
                "textLength": 184
              },
              {
                "text": "3% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 182
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
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"160\" y=\"1187\" width=\"146\" height=\"169\" rx=\"31\" fill=\"#1764dc\"/><rect x=\"315\" y=\"1189\" width=\"218\" height=\"165\" rx=\"31\" fill=\"#1764dc\"/><text x=\"232.5\" y=\"1243.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">ARR</text><text x=\"232\" y=\"1283.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$255M</text><text x=\"233\" y=\"1325.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">+10% Y/Y</text><text x=\"423.5\" y=\"1243.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">Customers</text><text x=\"423\" y=\"1285.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">3,578</text><text x=\"423.5\" y=\"1326.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">(10%) Y/Y</text><text x=\"343\" y=\"1172.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">ARR = Annual Recurring Revenue</text></g>",
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
      "name": "Docebo · 2026 财年第二季度",
      "meta": {
        "title": "Docebo 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "titleSize": 108,
        "titleTextLength": 1684.375
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +12%"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "同比 +31%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +13%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 79%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 4%",
            "同比 (3 个百分点)"
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
            "利润率 3%",
            "同比 (2 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "销售与市场 ($23M)",
            "占收入 33%",
            "同比 (1 个百分点)"
          ]
        },
        "rd": {
          "label": "研发",
          "notes": [
            "研发 ($13M)",
            "占收入 19%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "管理费用 ($9M)",
            "占收入 14%",
            "同比 (0 个百分点)"
          ]
        },
        "sbc": {
          "label": "股份支付",
          "notes": [
            "股权薪酬 ($2M)",
            "占收入 4%",
            "同比 +1 个百分点"
          ]
        },
        "depreciation": {
          "label": "折旧",
          "notes": [
            "折旧 ($2M)",
            "占收入 3%",
            "同比 +2 个百分点"
          ]
        },
        "fx_loss": {
          "label": "汇兑损失",
          "notes": [
            "汇兑损失 ($2M)",
            "占收入 3%",
            "同比 +2 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 404.5,
                "top": 407.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.96999999999997,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#1566df",
                    "textLength": 95
                  },
                  {
                    "text": "同比 +12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 182,
                "top": 643.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 40,
                    "weight": 800,
                    "color": "#1464da"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 404.5,
                "top": 930.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#1464da",
                    "textLength": 73
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
                "x": 182.5,
                "top": 990.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "专业",
                    "size": 40,
                    "weight": 800,
                    "color": "#1464da"
                  },
                  {
                    "text": "服务",
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
                "x": 868.3333333333334,
                "top": 441.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.120000000000033,
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
                    "textLength": 95
                  },
                  {
                    "text": "同比 +13%",
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
                "x": 1333.25,
                "top": 324.4,
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
                    "textLength": 95
                  },
                  {
                    "text": "利润率 79%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 1337.8333333333333,
                "top": 1071.9,
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
                    "textLength": 104
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1801.125,
                "top": 213.39999999999998,
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
                    "textLength": 73
                  },
                  {
                    "text": "利润率 4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
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
                "x": 1801.3333333333333,
                "top": 891.2,
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
                    "textLength": 104
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2151.25,
                "top": 350.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12,
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
                    "textLength": 57
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2453.25,
                "top": 233.39999999999998,
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
                    "textLength": 73
                  },
                  {
                    "text": "利润率 3%",
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
          "tax": {
            "blocks": [
              {
                "x": 2453.25,
                "top": 467.7,
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
          "sm": {
            "blocks": [
              {
                "x": 2453.3333333333335,
                "top": 573.63,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11.40500000000003,
                "lines": [
                  {
                    "text": "销售与市场 ($23M)",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 33%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 2460.1666666666665,
                "top": 709.63,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11.40500000000003,
                "lines": [
                  {
                    "text": "研发 ($13M)",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 19%",
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
          "ga": {
            "blocks": [
              {
                "x": 2459.8333333333335,
                "top": 847.63,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11.90500000000003,
                "lines": [
                  {
                    "text": "管理费用 ($9M)",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 14%",
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
          "sbc": {
            "blocks": [
              {
                "x": 2459.3333333333335,
                "top": 985.63,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11.40500000000003,
                "lines": [
                  {
                    "text": "股权薪酬 ($2M)",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 4%",
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
          },
          "depreciation": {
            "blocks": [
              {
                "x": 2459.6666666666665,
                "top": 1123.63,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11.404999999999973,
                "lines": [
                  {
                    "text": "折旧 ($2M)",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 3%",
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
          "fx_loss": {
            "blocks": [
              {
                "x": 2453.6666666666665,
                "top": 1261.63,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 11.404999999999973,
                "lines": [
                  {
                    "text": "汇兑损失 ($2M)",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 3%",
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
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"160\" y=\"1187\" width=\"146\" height=\"169\" rx=\"31\" fill=\"#1764dc\"/><rect x=\"315\" y=\"1189\" width=\"218\" height=\"165\" rx=\"31\" fill=\"#1764dc\"/><text x=\"232.5\" y=\"1243.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">ARR</text><text x=\"232\" y=\"1283.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">$255M</text><text x=\"233\" y=\"1325.23\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">同比 +10%</text><text x=\"423.5\" y=\"1243.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">客户</text><text x=\"423\" y=\"1285.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">3,578</text><text x=\"423.5\" y=\"1326.23\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">同比 (10%)</text><text x=\"343\" y=\"1172.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">ARR = 年度经常性收入</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/docebo/company-logo-docebo-q2-fy26.png",
      "x": 558,
      "y": 280,
      "width": 620,
      "height": 130
    }
  ]
});
