/* Source-measured fixed Sankey View Adapter; monetary data lives in the company SSOT. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "airbnb-q2-fy26",
  "name": "Airbnb · Q2 FY26",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/airbnb-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1332,
    "titleY": 200,
    "titleSize": 126,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#777777",
    "labelWeight": 700,
    "valueWeight": 400,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#ff375b",
        "label": "#ff375b"
      },
      "hub": {
        "node": "#ff375b",
        "label": "#ff375b"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#00934b"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#9c1b00"
      }
    },
    "linkTint": {
      "source": "#f79dae",
      "hub": "#f79dae",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 28,
      "lineGap": 8
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 1.6,
      "notes": [
        "+16% Y/Y"
      ],
      "col": 0,
      "order": 0,
      "type": "source",
      "valueText": "$1.6B"
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 1.4,
      "notes": [
        "+16% Y/Y"
      ],
      "col": 0,
      "order": 1,
      "type": "source",
      "valueText": "$1.4B"
    },
    {
      "id": "latam",
      "label": "LATAM",
      "value": 0.3,
      "notes": [
        "+26% Y/Y"
      ],
      "col": 0,
      "order": 2,
      "type": "source",
      "valueText": "$0.3B"
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 0.3,
      "notes": [
        "+17% Y/Y"
      ],
      "col": 0,
      "order": 3,
      "type": "source",
      "valueText": "$0.3B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.6,
      "notes": [
        "+17% Y/Y"
      ],
      "col": 1,
      "order": 4,
      "type": "hub",
      "valueText": "$3.6B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 3.0,
      "notes": [
        "82% margin",
        "+0pp Y/Y"
      ],
      "col": 2,
      "order": 5,
      "type": "profit",
      "valueText": "$3.0B"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 0.6,
      "notes": [],
      "col": 2,
      "order": 6,
      "type": "cost",
      "valueText": "($0.6B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.8,
      "notes": [
        "21% margin",
        "+1pp Y/Y"
      ],
      "col": 3,
      "order": 7,
      "type": "profit",
      "valueText": "$0.8B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 2.2,
      "notes": [],
      "col": 3,
      "order": 8,
      "type": "cost",
      "valueText": "($2.2B)"
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.1,
      "notes": [],
      "col": 4,
      "order": 9,
      "type": "profit",
      "valueText": "$0.1B"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.8,
      "notes": [
        "23% margin",
        "+2pp Y/Y"
      ],
      "col": 5,
      "order": 10,
      "type": "profit",
      "valueText": "$0.8B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "notes": [],
      "col": 5,
      "order": 11,
      "type": "cost",
      "valueText": "($0.1B)"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.9,
      "notes": [
        "24% of revenue",
        "+2pp Y/Y"
      ],
      "col": 5,
      "order": 12,
      "type": "cost",
      "valueText": "($0.9B)"
    },
    {
      "id": "product",
      "label": "Product",
      "value": 0.7,
      "notes": [
        "19% of revenue",
        "(1pp) Y/Y"
      ],
      "col": 5,
      "order": 13,
      "type": "cost",
      "valueText": "($0.7B)"
    },
    {
      "id": "support",
      "label": "Support",
      "value": 0.4,
      "notes": [
        "10% of revenue",
        "(1pp) Y/Y"
      ],
      "col": 5,
      "order": 14,
      "type": "cost",
      "valueText": "($0.4B)"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "notes": [
        "9% of revenue",
        "(1pp) Y/Y"
      ],
      "col": 5,
      "order": 15,
      "type": "cost",
      "valueText": "($0.3B)"
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 1.6,
      "sourceWidth": 156,
      "targetWidth": 156,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 462.0,
      "y1": 712.0,
      "linkTint": "#f79dae"
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 1.4,
      "sourceWidth": 139,
      "targetWidth": 139,
      "sourceOrder": 0,
      "targetOrder": 1,
      "y0": 747.5,
      "y1": 859.5,
      "linkTint": "#f79dae"
    },
    {
      "source": "latam",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 27,
      "targetWidth": 30,
      "sourceOrder": 0,
      "targetOrder": 2,
      "y0": 952.5,
      "y1": 944.0,
      "linkTint": "#f79dae"
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 29,
      "targetWidth": 30,
      "sourceOrder": 0,
      "targetOrder": 3,
      "y0": 1111.5,
      "y1": 974.0,
      "linkTint": "#f79dae"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3,
      "sourceWidth": 294,
      "targetWidth": 292,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 781.0,
      "y1": 692.0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.6,
      "sourceWidth": 61,
      "targetWidth": 61,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 958.5,
      "y1": 1036.5,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.8,
      "sourceWidth": 74,
      "targetWidth": 74,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 583.0,
      "y1": 502.0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.2,
      "sourceWidth": 218,
      "targetWidth": 217,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 729.0,
      "y1": 813.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.7,
      "sourceWidth": 68,
      "targetWidth": 68,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 499.0,
      "y1": 399.0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 6,
      "targetWidth": 6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 536.0,
      "y1": 645.0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 12,
      "targetWidth": 12,
      "sourceOrder": 0,
      "targetOrder": 1,
      "y0": 492.0,
      "y1": 439.0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.9,
      "sourceWidth": 87,
      "targetWidth": 85,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 748.5,
      "y1": 811.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.7,
      "sourceWidth": 67,
      "targetWidth": 65,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 825.5,
      "y1": 984.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 0.4,
      "sourceWidth": 35,
      "targetWidth": 35,
      "sourceOrder": 2,
      "targetOrder": 0,
      "y0": 876.5,
      "y1": 1122.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 28,
      "targetWidth": 28,
      "sourceOrder": 3,
      "targetOrder": 0,
      "y0": 908.0,
      "y1": 1255.0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 398,
        "y": 384,
        "width": 72,
        "height": 156
      },
      "emea": {
        "x": 398,
        "y": 678,
        "width": 72,
        "height": 139
      },
      "latam": {
        "x": 398,
        "y": 939,
        "width": 72,
        "height": 27
      },
      "apac": {
        "x": 398,
        "y": 1097,
        "width": 72,
        "height": 29
      },
      "revenue": {
        "x": 865,
        "y": 634,
        "width": 73,
        "height": 355
      },
      "gross_profit": {
        "x": 1335,
        "y": 546,
        "width": 72,
        "height": 292
      },
      "cost_of_revenue": {
        "x": 1333,
        "y": 1006,
        "width": 71,
        "height": 61
      },
      "operating_profit": {
        "x": 1800,
        "y": 465,
        "width": 72,
        "height": 74
      },
      "operating_expenses": {
        "x": 1800,
        "y": 705,
        "width": 71,
        "height": 217
      },
      "other_income": {
        "x": 2153,
        "y": 486,
        "width": 71,
        "height": 12
      },
      "net_profit": {
        "x": 2267,
        "y": 365,
        "width": 72,
        "height": 80
      },
      "tax": {
        "x": 2267,
        "y": 642,
        "width": 72,
        "height": 6
      },
      "sm": {
        "x": 2267,
        "y": 769,
        "width": 72,
        "height": 85
      },
      "product": {
        "x": 2267,
        "y": 952,
        "width": 72,
        "height": 65
      },
      "support": {
        "x": 2267,
        "y": 1105,
        "width": 72,
        "height": 35
      },
      "ga": {
        "x": 2267,
        "y": 1241,
        "width": 72,
        "height": 28
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 432.5,
            "top": 288,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.0,
            "top": 339,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+16% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 284,
            "top": 411,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "North",
                "size": 40,
                "weight": 700
              },
              {
                "text": "America",
                "size": 40,
                "weight": 700
              }
            ],
            "lineGap": 13
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 430.5,
            "top": 580,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 431.0,
            "top": 631,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+16% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 288.0,
            "top": 721,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "EMEA",
                "size": 40,
                "weight": 700
              }
            ]
          }
        ]
      },
      "latam": {
        "blocks": [
          {
            "x": 433.5,
            "top": 839,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 434.5,
            "top": 891,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+26% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 284.5,
            "top": 928,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "LATAM",
                "size": 40,
                "weight": 700
              }
            ]
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 430.5,
            "top": 998,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 431.0,
            "top": 1048,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+17% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 290.5,
            "top": 1087,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "APAC",
                "size": 40,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 900.5,
            "top": 478,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 700
              }
            ]
          },
          {
            "x": 899.5,
            "top": 535,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 900.0,
            "top": 585,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+17% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1374.5,
            "top": 353,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 700
              }
            ]
          },
          {
            "x": 1374.5,
            "top": 409,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 1373.5,
            "top": 466,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "82% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1374.5,
            "top": 505,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1370.0,
            "top": 1081,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Cost of",
                "size": 32,
                "weight": 700
              }
            ]
          },
          {
            "x": 1369.5,
            "top": 1128,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "revenue",
                "size": 32,
                "weight": 700
              }
            ]
          },
          {
            "x": 1368.5,
            "top": 1174,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1836,
            "top": 272,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 700
              }
            ]
          },
          {
            "x": 1836,
            "top": 328,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 1836,
            "top": 385,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "21% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1836,
            "top": 425,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1836.5,
            "top": 933,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating",
                "size": 32,
                "weight": 700
              }
            ]
          },
          {
            "x": 1836.0,
            "top": 988,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "expenses",
                "size": 32,
                "weight": 700
              }
            ]
          },
          {
            "x": 1835.5,
            "top": 1027,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2189.5,
            "top": 509,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 700
              }
            ]
          },
          {
            "x": 2189.0,
            "top": 553,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2468.0,
            "top": 330,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 700
              }
            ]
          },
          {
            "x": 2466.5,
            "top": 385,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 2466.5,
            "top": 442,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "23% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2467.5,
            "top": 481,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+2pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2466.5,
            "top": 599,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 700
              }
            ]
          },
          {
            "x": 2466.5,
            "top": 646,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2413.0,
            "top": 763,
            "anchor": "middle",
            "semanticRole": "top-aligned-side-label",
            "lines": [
              {
                "text": "S&M",
                "size": 32,
                "weight": 700,
                "textLength": 64
              }
            ]
          },
          {
            "x": 2506.0,
            "top": 763,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "textLength": 96
              }
            ]
          },
          {
            "x": 2467.5,
            "top": 802,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "24% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2468.0,
            "top": 847,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+2pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 2415.0,
            "top": 921,
            "anchor": "middle",
            "semanticRole": "top-aligned-side-label",
            "lines": [
              {
                "text": "Product",
                "size": 32,
                "weight": 700,
                "textLength": 116
              }
            ]
          },
          {
            "x": 2531.5,
            "top": 921,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "textLength": 95
              }
            ]
          },
          {
            "x": 2468.0,
            "top": 960,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "19% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2468.0,
            "top": 1005,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "support": {
        "blocks": [
          {
            "x": 2420.0,
            "top": 1070,
            "anchor": "middle",
            "semanticRole": "top-aligned-side-label",
            "lines": [
              {
                "text": "Support",
                "size": 32,
                "weight": 700,
                "textLength": 120
              }
            ]
          },
          {
            "x": 2538.0,
            "top": 1070,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "textLength": 96
              }
            ]
          },
          {
            "x": 2473.5,
            "top": 1115,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "10% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2473.5,
            "top": 1160,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2423.0,
            "top": 1236,
            "anchor": "middle",
            "semanticRole": "top-aligned-side-label",
            "lines": [
              {
                "text": "G&A",
                "size": 32,
                "weight": 700,
                "textLength": 64
              }
            ]
          },
          {
            "x": 2516.0,
            "top": 1236,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "textLength": 102
              }
            ]
          },
          {
            "x": 2475.5,
            "top": 1276,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "9% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2476.0,
            "top": 1321,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "nights_booked",
      "value": "148000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "148M"
    },
    {
      "id": "gbv",
      "value": "27.2",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$27.2B"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb · 2026 财年第二季度",
      "meta": {
        "title": "Airbnb 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": ""
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +16%"
          ]
        },
        "emea": {
          "label": "欧洲、中东和非洲",
          "notes": [
            "同比 +16%"
          ]
        },
        "latam": {
          "label": "拉美",
          "notes": [
            "同比 +26%"
          ]
        },
        "apac": {
          "label": "亚太",
          "notes": [
            "同比 +17%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +17%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 82%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 21%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 23%",
            "同比 +2 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 24%",
            "同比 +2 个百分点"
          ]
        },
        "product": {
          "label": "产品",
          "notes": [
            "占收入 19%",
            "同比 (1 个百分点)"
          ]
        },
        "support": {
          "label": "客服支持",
          "notes": [
            "占收入 10%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 9%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 432.5,
                "top": 288,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.0,
                "top": 339,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 284,
                "top": 411,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "北美",
                    "size": 40,
                    "weight": 700
                  },
                  {
                    "text": "地区",
                    "size": 40,
                    "weight": 700
                  }
                ],
                "lineGap": 13
              }
            ]
          },
          "emea": {
            "blocks": [
              {
                "x": 430.5,
                "top": 580,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 431.0,
                "top": 631,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 288.0,
                "top": 733,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "欧洲/中东/非洲",
                    "size": 24,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "latam": {
            "blocks": [
              {
                "x": 433.5,
                "top": 839,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 434.5,
                "top": 891,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +26%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 284.5,
                "top": 928,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "拉美",
                    "size": 40,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 430.5,
                "top": 998,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 431.0,
                "top": 1048,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 290.5,
                "top": 1087,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "亚太",
                    "size": 40,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 900.5,
                "top": 478,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 899.5,
                "top": 535,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 900.0,
                "top": 585,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1374.5,
                "top": 353,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1374.5,
                "top": 409,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1373.5,
                "top": 466,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 82%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1374.5,
                "top": 505,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1370.0,
                "top": 1081,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "收入",
                    "size": 32,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1369.5,
                "top": 1128,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "成本",
                    "size": 32,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1368.5,
                "top": 1174,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1836,
                "top": 272,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1836,
                "top": 328,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1836,
                "top": 385,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 21%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1836,
                "top": 425,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1836.5,
                "top": 933,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "运营",
                    "size": 32,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1836.0,
                "top": 988,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "费用",
                    "size": 32,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1835.5,
                "top": 1027,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2189.5,
                "top": 509,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2189.0,
                "top": 553,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2468.0,
                "top": 330,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2466.5,
                "top": 385,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2466.5,
                "top": 442,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2467.5,
                "top": 481,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2466.5,
                "top": 599,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2466.5,
                "top": 646,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2468,
                "top": 727,
                "anchor": "middle",
                "semanticRole": "top-aligned-side-label",
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 28,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2468,
                "top": 763,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "textLength": 96
                  }
                ]
              },
              {
                "x": 2467.5,
                "top": 802,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 24%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2468.0,
                "top": 847,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 2468,
                "top": 885,
                "anchor": "middle",
                "semanticRole": "top-aligned-side-label",
                "lines": [
                  {
                    "text": "产品",
                    "size": 28,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2468,
                "top": 921,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "textLength": 95
                  }
                ]
              },
              {
                "x": 2468.0,
                "top": 960,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 19%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2468.0,
                "top": 1005,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "support": {
            "blocks": [
              {
                "x": 2468,
                "top": 1034,
                "anchor": "middle",
                "semanticRole": "top-aligned-side-label",
                "lines": [
                  {
                    "text": "客服支持",
                    "size": 28,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2468,
                "top": 1070,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "textLength": 96
                  }
                ]
              },
              {
                "x": 2473.5,
                "top": 1115,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 10%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2473.5,
                "top": 1160,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2468,
                "top": 1200,
                "anchor": "middle",
                "semanticRole": "top-aligned-side-label",
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 28,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2468,
                "top": 1236,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "textLength": 102
                  }
                ]
              },
              {
                "x": 2475.5,
                "top": 1276,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2476.0,
                "top": 1321,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"102\" y=\"1173\" width=\"306\" height=\"151\" rx=\"30\" fill=\"#ff375b\"/><text x=\"255.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#ffffff\">预订间夜数</text><text data-operating-metric=\"nights_booked\" x=\"255.0\" y=\"1260\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">148M</text><text x=\"255.0\" y=\"1295\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">同比 +10%</text><rect x=\"417\" y=\"1173\" width=\"159\" height=\"151\" rx=\"30\" fill=\"#ff375b\"/><text x=\"496.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#ffffff\">GBV</text><text data-operating-metric=\"gbv\" x=\"496.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">$27.2B</text><text x=\"496.5\" y=\"1295\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">同比 +16%</text><text x=\"356\" y=\"1355\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GBV = 总预订价值</text></g>"
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"102\" y=\"1173\" width=\"306\" height=\"151\" rx=\"30\" fill=\"#ff375b\"/><text x=\"255.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#ffffff\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"255.0\" y=\"1260\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">148M</text><text x=\"255.0\" y=\"1295\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">+10% Y/Y</text><rect x=\"417\" y=\"1173\" width=\"159\" height=\"151\" rx=\"30\" fill=\"#ff375b\"/><text x=\"496.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#ffffff\">GBV</text><text data-operating-metric=\"gbv\" x=\"496.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">$27.2B</text><text x=\"496.5\" y=\"1295\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">+16% Y/Y</text><text x=\"356\" y=\"1355\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GBV = Gross Booking Value</text></g>",
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-logo.png",
      "x": 774,
      "y": 229,
      "width": 251,
      "height": 253
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-north-america.png",
      "x": 83,
      "y": 408,
      "width": 102,
      "height": 102
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-emea.png",
      "x": 85,
      "y": 689,
      "width": 96,
      "height": 94
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-latam.png",
      "x": 92,
      "y": 891,
      "width": 82,
      "height": 86
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-apac.png",
      "x": 99,
      "y": 1047,
      "width": 86,
      "height": 95
    }
  ]
});
