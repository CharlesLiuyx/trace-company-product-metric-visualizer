window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "airbnb-q1-fy25",
  "name": "Airbnb · Q1 FY25",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/airbnb-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199,
    "titleSize": 125,
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
      "value": 1.1,
      "notes": [
        "+4% Y/Y"
      ],
      "col": 0,
      "order": 0,
      "type": "source",
      "valueText": "$1.1B"
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 0.6,
      "notes": [
        "+5% Y/Y"
      ],
      "col": 0,
      "order": 1,
      "type": "source",
      "valueText": "$0.6B"
    },
    {
      "id": "latam",
      "label": "LATAM",
      "value": 0.3,
      "notes": [
        "+12% Y/Y"
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
        "+10% Y/Y"
      ],
      "col": 0,
      "order": 3,
      "type": "source",
      "valueText": "$0.3B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 2.3,
      "notes": [
        "+6% Y/Y"
      ],
      "col": 1,
      "order": 4,
      "type": "hub",
      "valueText": "$2.3B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.8,
      "notes": [
        "78% margin",
        "(1pp) Y/Y"
      ],
      "col": 2,
      "order": 5,
      "type": "profit",
      "valueText": "$1.8B"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 0.5,
      "notes": [],
      "col": 2,
      "order": 6,
      "type": "cost",
      "valueText": "($0.5B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.038,
      "notes": [
        "2% margin",
        "(3pp) Y/Y"
      ],
      "col": 3,
      "order": 7,
      "type": "profit",
      "valueText": "$38M",
      "decimals": 3
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.7,
      "notes": [],
      "col": 3,
      "order": 8,
      "type": "cost",
      "valueText": "($1.7B)"
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
      "value": 0.2,
      "notes": [
        "7% margin",
        "(6pp) Y/Y"
      ],
      "col": 5,
      "order": 10,
      "type": "profit",
      "valueText": "$0.2B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.019,
      "notes": [],
      "col": 5,
      "order": 11,
      "type": "cost",
      "valueText": "($19M)",
      "decimals": 3
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.6,
      "notes": [
        "25% of revenue",
        "+1pp Y/Y"
      ],
      "col": 5,
      "order": 12,
      "type": "cost",
      "valueText": "($0.6B)"
    },
    {
      "id": "product",
      "label": "Product",
      "value": 0.6,
      "notes": [
        "25% of revenue",
        "+3pp Y/Y"
      ],
      "col": 5,
      "order": 13,
      "type": "cost",
      "valueText": "($0.6B)"
    },
    {
      "id": "support",
      "label": "Support",
      "value": 0.3,
      "notes": [
        "13% of revenue",
        "(0pp) Y/Y"
      ],
      "col": 5,
      "order": 14,
      "type": "cost",
      "valueText": "($0.3B)"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "notes": [
        "13% of revenue",
        "+0pp Y/Y"
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
      "value": 1.1,
      "sourceWidth": 138,
      "targetWidth": 139,
      "y0": 422.0,
      "y1": 709.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f79dae"
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 0.6,
      "sourceWidth": 78,
      "targetWidth": 79,
      "y0": 697.0,
      "y1": 818.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f79dae"
    },
    {
      "source": "latam",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 44,
      "targetWidth": 45,
      "y0": 915.0,
      "y1": 880.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f79dae"
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 35,
      "targetWidth": 36,
      "y0": 1121.5,
      "y1": 921.0,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#f79dae"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.8,
      "sourceWidth": 233,
      "targetWidth": 233,
      "y0": 756.5,
      "y1": 648.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.5,
      "sourceWidth": 66,
      "targetWidth": 65,
      "y0": 906,
      "y1": 996.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.038,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 534,
      "y1": 449,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.7,
      "sourceWidth": 229,
      "targetWidth": 227,
      "y0": 650.5,
      "y1": 749.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.019,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 448,
      "y1": 354,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.019,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 450,
      "y1": 571,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 17,
      "targetWidth": 17,
      "y0": 415.5,
      "y1": 363.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.6,
      "sourceWidth": 75,
      "targetWidth": 74,
      "y0": 673.5,
      "y1": 783.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.6,
      "sourceWidth": 74,
      "targetWidth": 73,
      "y0": 748.0,
      "y1": 950.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 0.3,
      "sourceWidth": 40,
      "targetWidth": 39,
      "y0": 805.0,
      "y1": 1104.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 38,
      "targetWidth": 37,
      "y0": 844.0,
      "y1": 1237.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 399,
        "y": 353,
        "width": 71,
        "height": 138
      },
      "emea": {
        "x": 399,
        "y": 658,
        "width": 71,
        "height": 78
      },
      "latam": {
        "x": 399,
        "y": 893,
        "width": 71,
        "height": 44
      },
      "apac": {
        "x": 399,
        "y": 1104,
        "width": 71,
        "height": 35
      },
      "revenue": {
        "x": 866,
        "y": 640,
        "width": 71,
        "height": 299
      },
      "gross_profit": {
        "x": 1330,
        "y": 532,
        "width": 72,
        "height": 233
      },
      "cost_of_revenue": {
        "x": 1335,
        "y": 964,
        "width": 72,
        "height": 65
      },
      "operating_profit": {
        "x": 1817,
        "y": 447,
        "width": 72,
        "height": 4
      },
      "operating_expenses": {
        "x": 1813,
        "y": 636,
        "width": 71,
        "height": 227
      },
      "other_income": {
        "x": 2160,
        "y": 407,
        "width": 72,
        "height": 17
      },
      "net_profit": {
        "x": 2267,
        "y": 353,
        "width": 72,
        "height": 19
      },
      "tax": {
        "x": 2267,
        "y": 570,
        "width": 72,
        "height": 2
      },
      "product": {
        "x": 2267,
        "y": 746,
        "width": 72,
        "height": 74
      },
      "sm": {
        "x": 2267,
        "y": 914,
        "width": 72,
        "height": 73
      },
      "support": {
        "x": 2267,
        "y": 1085,
        "width": 72,
        "height": 39
      },
      "ga": {
        "x": 2267,
        "y": 1219,
        "width": 72,
        "height": 37
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 252.6357421875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 304.7255859375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+4% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 285.19189453125,
            "top": 372.0244140625,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "North",
                "size": 37.76513671875,
                "weight": 700
              },
              {
                "text": "America",
                "size": 37.76513671875,
                "weight": 700
              }
            ],
            "lineGap": 15.626953125
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 556.05908203125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 608.14892578125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+5% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 285.19189453125,
            "top": 670.65673828125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "EMEA",
                "size": 37.76513671875,
                "weight": 700
              }
            ]
          }
        ]
      },
      "latam": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 793.06787109375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 845.15771484375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+12% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 285.19189453125,
            "top": 889.43408203125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "LATAM",
                "size": 37.76513671875,
                "weight": 700
              }
            ]
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 1004.03173828125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 433.64794921875,
            "top": 1056.12158203125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+10% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 285.19189453125,
            "top": 1098.277734375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "APAC",
                "size": 37.76513671875,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 899.85205078125,
            "top": 487.0400390625,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 700
              }
            ]
          },
          {
            "x": 899.85205078125,
            "top": 539.1298828125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 899.85205078125,
            "top": 591.2197265625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
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
            "x": 1366.05615234375,
            "top": 341.1884765625,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 700
              }
            ]
          },
          {
            "x": 1366.05615234375,
            "top": 393.2783203125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 1366.05615234375,
            "top": 445.3681640625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "78% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1366.05615234375,
            "top": 485.73779296875,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1851.7939453125,
            "top": 255.240234375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 700
              }
            ]
          },
          {
            "x": 1851.7939453125,
            "top": 307.330078125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 1851.7939453125,
            "top": 359.419921875,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "2% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1851.7939453125,
            "top": 399.78955078125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(3pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 291.703125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 700
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 343.79296875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 395.8828125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "7% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 436.25244140625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(6pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 1371.26513671875,
            "top": 1043.09912109375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Cost of",
                "size": 32.55615234375,
                "weight": 700
              }
            ]
          },
          {
            "x": 1371.26513671875,
            "top": 1089.97998046875,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "revenue",
                "size": 32.55615234375,
                "weight": 700
              }
            ]
          },
          {
            "x": 1371.26513671875,
            "top": 1136.86083984375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1849.189453125,
            "top": 873.80712890625,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "weight": 700
              }
            ]
          },
          {
            "x": 1849.189453125,
            "top": 920.68798828125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "expenses",
                "size": 32.55615234375,
                "weight": 700
              }
            ]
          },
          {
            "x": 1849.189453125,
            "top": 967.56884765625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2195.5869140625,
            "top": 432.345703125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2195.5869140625,
            "top": 475.31982421875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 530.01416015625,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 572.98828125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 2476.8720703125,
            "top": 724.048828125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Product ($0.6B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2476.8720703125,
            "top": 767.02294921875,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "25% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2476.8720703125,
            "top": 807.392578125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+3pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2476.8720703125,
            "top": 888.1318359375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "S&M ($0.6B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2476.8720703125,
            "top": 931.10595703125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "25% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2476.8720703125,
            "top": 971.4755859375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2476.8720703125,
            "top": 1044.4013671875,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Support ($0.3B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2476.8720703125,
            "top": 1087.37548828125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "13% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2476.8720703125,
            "top": 1127.7451171875,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2476.8720703125,
            "top": 1199.36865234375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "G&A ($0.3B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2476.8720703125,
            "top": 1242.3427734375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "13% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2476.8720703125,
            "top": 1282.71240234375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
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
      "label": "Nights booked",
      "value": "143000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "143M",
      "basis": "unspecified",
      "notes": [
        "+8% Y/Y"
      ],
      "quote": "Nights booked\n143M\n+8% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          102,
          1175,
          306,
          148
        ]
      }
    },
    {
      "id": "gbv",
      "label": "GBV",
      "value": "24.5",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$24.5B",
      "basis": "unspecified",
      "notes": [
        "+7% Y/Y"
      ],
      "quote": "GBV\n$24.5B\n+7% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          417,
          1175,
          146,
          150
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb · 2025 财年第一季度",
      "meta": {
        "title": "Airbnb 2025 财年第一季度利润表",
        "titleSize": 116,
        "period": "2025 财年第一季度"
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +4%"
          ]
        },
        "emea": {
          "label": "欧洲、中东和非洲",
          "notes": [
            "同比 +5%"
          ]
        },
        "latam": {
          "label": "拉美",
          "notes": [
            "同比 +12%"
          ]
        },
        "apac": {
          "label": "亚太",
          "notes": [
            "同比 +10%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +6%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 78%",
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
            "利润率 2%",
            "同比 (3 个百分点)"
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
            "利润率 7%",
            "同比 (6 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "product": {
          "label": "产品",
          "notes": [
            "占收入 25%",
            "同比 +3 个百分点"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 25%",
            "同比 +1 个百分点"
          ]
        },
        "support": {
          "label": "客服支持",
          "notes": [
            "占收入 13%",
            "同比 (0 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 13%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 433.64794921875,
                "top": 252.6357421875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 304.7255859375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +4%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 285.19189453125,
                "top": 398.720458984375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "北美",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ],
                "lineGap": 15.626953125
              }
            ]
          },
          "emea": {
            "blocks": [
              {
                "x": 433.64794921875,
                "top": 556.05908203125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 608.14892578125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +5%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 285.19189453125,
                "top": 681.75673828125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "欧洲/中东/非洲",
                    "size": 24.74267578125,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "latam": {
            "blocks": [
              {
                "x": 433.64794921875,
                "top": 793.06787109375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 845.15771484375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +12%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 285.19189453125,
                "top": 889.43408203125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "拉美",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 433.64794921875,
                "top": 1004.03173828125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 433.64794921875,
                "top": 1056.12158203125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +10%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 285.19189453125,
                "top": 1098.277734375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "亚太",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 899.85205078125,
                "top": 487.0400390625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 899.85205078125,
                "top": 539.1298828125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 899.85205078125,
                "top": 591.2197265625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +6%",
                    "size": 26.044921875,
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
                "x": 1366.05615234375,
                "top": 341.1884765625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1366.05615234375,
                "top": 393.2783203125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1366.05615234375,
                "top": 445.3681640625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 78%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1366.05615234375,
                "top": 485.73779296875,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1851.7939453125,
                "top": 255.240234375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1851.7939453125,
                "top": 307.330078125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1851.7939453125,
                "top": 359.419921875,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 2%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1851.7939453125,
                "top": 399.78955078125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 291.703125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 343.79296875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 395.8828125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 7%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 436.25244140625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 26.044921875,
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
                "x": 1371.26513671875,
                "top": 1043.09912109375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "收入",
                    "size": 32.55615234375,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1371.26513671875,
                "top": 1089.97998046875,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "成本",
                    "size": 32.55615234375,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1371.26513671875,
                "top": 1136.86083984375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1849.189453125,
                "top": 873.80712890625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "运营",
                    "size": 32.55615234375,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1849.189453125,
                "top": 920.68798828125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "费用",
                    "size": 32.55615234375,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1849.189453125,
                "top": 967.56884765625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2195.5869140625,
                "top": 432.345703125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2195.5869140625,
                "top": 475.31982421875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 530.01416015625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 572.98828125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 2476.8720703125,
                "top": 724.048828125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "产品 ($0.6B)",
                    "size": 27.34716796875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2476.8720703125,
                "top": 767.02294921875,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 25%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2476.8720703125,
                "top": 807.392578125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +3 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2476.8720703125,
                "top": 888.1318359375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "销售与市场 ($0.6B)",
                    "size": 27.34716796875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2476.8720703125,
                "top": 931.10595703125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 25%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2476.8720703125,
                "top": 971.4755859375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +1 个百分点",
                    "size": 26.044921875,
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
                "x": 2476.8720703125,
                "top": 1044.4013671875,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "客服支持 ($0.3B)",
                    "size": 27.34716796875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2476.8720703125,
                "top": 1087.37548828125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 13%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2476.8720703125,
                "top": 1127.7451171875,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 26.044921875,
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
                "x": 2476.8720703125,
                "top": 1199.36865234375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "管理费用 ($0.3B)",
                    "size": 27.34716796875,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2476.8720703125,
                "top": 1242.3427734375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 13%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2476.8720703125,
                "top": 1282.71240234375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +0 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"101.5751953125\" y=\"1174.6259765625\" width=\"306.02783203125\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#ff375b\"/><text x=\"254.589111328125\" y=\"1226.7158203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#fff\">预订间夜数</text><text data-operating-metric=\"nights_booked\" x=\"254.589111328125\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\">143M</text><text x=\"254.589111328125\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#fff\">同比 +8%</text><rect x=\"416.71875\" y=\"1174.6259765625\" width=\"145.8515625\" height=\"149.75830078125\" rx=\"28.6494140625\" fill=\"#ff375b\"/><text x=\"489.64453125\" y=\"1226.7158203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#fff\">GBV</text><text data-operating-metric=\"gbv\" x=\"489.64453125\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\">$24.5B</text><text x=\"489.64453125\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#fff\">同比 +7%</text><text x=\"334.67724609375\" y=\"1354.3359375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">GBV = 总预订价值</text></g>"
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"101.5751953125\" y=\"1174.6259765625\" width=\"306.02783203125\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#ff375b\"/><text x=\"254.589111328125\" y=\"1226.7158203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#fff\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"254.589111328125\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\">143M</text><text x=\"254.589111328125\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#fff\">+8% Y/Y</text><rect x=\"416.71875\" y=\"1174.6259765625\" width=\"145.8515625\" height=\"149.75830078125\" rx=\"28.6494140625\" fill=\"#ff375b\"/><text x=\"489.64453125\" y=\"1226.7158203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#fff\">GBV</text><text data-operating-metric=\"gbv\" x=\"489.64453125\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"400\" fill=\"#fff\">$24.5B</text><text x=\"489.64453125\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"22.13818359375\" font-weight=\"400\" fill=\"#fff\">+7% Y/Y</text><text x=\"334.67724609375\" y=\"1354.3359375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">GBV = Gross Booking Value</text></g>",
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-logo.png",
      "x": 776.138671875,
      "y": 234.404296875,
      "width": 246.12451171875,
      "height": 247.4267578125
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-north-america.png",
      "x": 83.34375,
      "y": 367.2333984375,
      "width": 100.27294921875,
      "height": 96.3662109375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-emea.png",
      "x": 84.64599609375,
      "y": 642.00732421875,
      "width": 92.45947265625,
      "height": 92.45947265625
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-latam.png",
      "x": 95.06396484375,
      "y": 858.18017578125,
      "width": 74.22802734375,
      "height": 79.43701171875
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-apac.png",
      "x": 101.5751953125,
      "y": 1067.841796875,
      "width": 82.04150390625,
      "height": 88.552734375
    }
  ]
});
