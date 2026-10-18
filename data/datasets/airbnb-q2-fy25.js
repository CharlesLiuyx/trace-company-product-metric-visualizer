window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "airbnb-q2-fy25",
  "name": "Airbnb · Q2 FY25",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/airbnb-q2-fy25.png",
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
      "value": 1.4,
      "valueText": "$1.4B",
      "type": "source",
      "notes": [
        "+5% Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 1.2,
      "valueText": "$1.2B",
      "type": "source",
      "notes": [
        "+18% Y/Y"
      ],
      "col": 0,
      "order": 1
    },
    {
      "id": "latam",
      "label": "LATAM",
      "value": 0.2,
      "valueText": "$0.2B",
      "type": "source",
      "notes": [
        "+25% Y/Y"
      ],
      "col": 0,
      "order": 2
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 0.3,
      "valueText": "$0.3B",
      "type": "source",
      "notes": [
        "+23% Y/Y"
      ],
      "col": 0,
      "order": 3
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.1,
      "valueText": "$3.1B",
      "type": "hub",
      "notes": [
        "+13% Y/Y"
      ],
      "col": 1,
      "order": 4
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.6,
      "valueText": "$2.6B",
      "type": "profit",
      "notes": [
        "82% margin",
        "(1pp) Y/Y"
      ],
      "col": 2,
      "order": 5
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 0.5,
      "valueText": "($0.5B)",
      "type": "cost",
      "notes": [],
      "col": 2,
      "order": 6
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.6,
      "valueText": "$0.6B",
      "type": "profit",
      "notes": [
        "20% margin",
        "+2pp Y/Y"
      ],
      "col": 3,
      "order": 7
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.9,
      "valueText": "($1.9B)",
      "type": "cost",
      "notes": [],
      "col": 3,
      "order": 8
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.2,
      "valueText": "$0.2B",
      "type": "profit",
      "notes": [],
      "col": 4,
      "order": 9
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.6,
      "valueText": "$0.6B",
      "type": "profit",
      "notes": [
        "21% margin",
        "+1pp Y/Y"
      ],
      "col": 5,
      "order": 10
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "notes": [],
      "col": 5,
      "order": 11
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.7,
      "valueText": "($0.7B)",
      "type": "cost",
      "notes": [
        "22% of revenue",
        "+1pp Y/Y"
      ],
      "col": 5,
      "order": 12
    },
    {
      "id": "product",
      "label": "Product",
      "value": 0.6,
      "valueText": "($0.6B)",
      "type": "cost",
      "notes": [
        "20% of revenue",
        "+1pp Y/Y"
      ],
      "col": 5,
      "order": 13
    },
    {
      "id": "support",
      "label": "Support",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "notes": [
        "11% of revenue",
        "(2pp) Y/Y"
      ],
      "col": 5,
      "order": 14
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "notes": [
        "10% of revenue",
        "(2pp) Y/Y"
      ],
      "col": 5,
      "order": 15
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 1.4,
      "sourceWidth": 144.54931640625,
      "targetWidth": 144.54931640625,
      "y0": 425.183349609375,
      "y1": 718.188720703125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f79dae"
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 1.2,
      "sourceWidth": 130.224609375,
      "targetWidth": 130.224609375,
      "y0": 722.74658203125,
      "y1": 855.57568359375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f79dae"
    },
    {
      "source": "latam",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "y0": 970.824462890625,
      "y1": 933.059326171875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f79dae"
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 26.044921875,
      "targetWidth": 27.34716796875,
      "y0": 1151.185546875,
      "y1": 959.104248046875,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#f79dae"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.6,
      "sourceWidth": 269.56494140625,
      "targetWidth": 269.56494140625,
      "y0": 780.696533203125,
      "y1": 668.703369140625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.5,
      "sourceWidth": 57.298828125,
      "targetWidth": 57.298828125,
      "y0": 944.12841796875,
      "y1": 1054.8193359375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.6,
      "sourceWidth": 65.1123046875,
      "targetWidth": 63.81005859375,
      "y0": 566.47705078125,
      "y1": 461.646240234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.9,
      "sourceWidth": 204.45263671875,
      "targetWidth": 204.45263671875,
      "y0": 701.259521484375,
      "y1": 806.741455078125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.5,
      "sourceWidth": 50.78759765625,
      "targetWidth": 50.78759765625,
      "y0": 455.135009765625,
      "y1": 348.350830078125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 13.0224609375,
      "targetWidth": 14.32470703125,
      "y0": 487.0400390625,
      "y1": 620.520263671875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875,
      "y0": 436.903564453125,
      "y1": 382.209228515625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.7,
      "sourceWidth": 72.92578125,
      "targetWidth": 72.92578125,
      "y0": 740.97802734375,
      "y1": 791.765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.6,
      "sourceWidth": 65.1123046875,
      "targetWidth": 65.1123046875,
      "y0": 809.9970703125,
      "y1": 950.6396484375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 0.3,
      "sourceWidth": 35.16064453125,
      "targetWidth": 35.16064453125,
      "y0": 860.133544921875,
      "y1": 1111.467041015625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 31.25390625,
      "targetWidth": 32.55615234375,
      "y0": 893.3408203125,
      "y1": 1244.296142578125,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 394.58056640625,
        "y": 352.90869140625,
        "width": 72.92578125,
        "height": 144.54931640625
      },
      "emea": {
        "x": 394.58056640625,
        "y": 657.63427734375,
        "width": 72.92578125,
        "height": 130.224609375
      },
      "latam": {
        "x": 394.58056640625,
        "y": 958.453125,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "apac": {
        "x": 394.58056640625,
        "y": 1138.1630859375,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "revenue": {
        "x": 862.0869140625,
        "y": 645.9140625,
        "width": 72.92578125,
        "height": 326.86376953125
      },
      "gross_profit": {
        "x": 1329.59326171875,
        "y": 533.9208984375,
        "width": 71.62353515625,
        "height": 269.56494140625
      },
      "cost_of_revenue": {
        "x": 1329.59326171875,
        "y": 1026.169921875,
        "width": 71.62353515625,
        "height": 57.298828125
      },
      "operating_profit": {
        "x": 1797.099609375,
        "y": 429.7412109375,
        "width": 71.62353515625,
        "height": 63.81005859375
      },
      "operating_expenses": {
        "x": 1797.099609375,
        "y": 704.51513671875,
        "width": 71.62353515625,
        "height": 204.45263671875
      },
      "other_income": {
        "x": 2139.59033203125,
        "y": 428.43896484375,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "net_profit": {
        "x": 2263.3037109375,
        "y": 322.95703125,
        "width": 72.92578125,
        "height": 67.716796875
      },
      "tax": {
        "x": 2263.3037109375,
        "y": 613.35791015625,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "sm": {
        "x": 2263.3037109375,
        "y": 755.302734375,
        "width": 72.92578125,
        "height": 72.92578125
      },
      "product": {
        "x": 2263.3037109375,
        "y": 918.08349609375,
        "width": 72.92578125,
        "height": 65.1123046875
      },
      "support": {
        "x": 2263.3037109375,
        "y": 1093.88671875,
        "width": 72.92578125,
        "height": 35.16064453125
      },
      "ga": {
        "x": 2263.3037109375,
        "y": 1228.01806640625,
        "width": 72.92578125,
        "height": 32.55615234375
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 261.75146484375,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 431.04345703125,
            "top": 313.84130859375,
            "anchor": "middle",
            "lines": [
              {
                "text": "+5% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 283.8896484375,
            "top": 379.604736328125,
            "anchor": "middle",
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
            "lineGap": 13.0224609375,
            "semanticRole": "name"
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 566.47705078125,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 431.04345703125,
            "top": 618.56689453125,
            "anchor": "middle",
            "lines": [
              {
                "text": "+18% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 283.8896484375,
            "top": 699.30615234375,
            "anchor": "middle",
            "lines": [
              {
                "text": "EMEA",
                "size": 37.76513671875,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "latam": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 867.2958984375,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 431.04345703125,
            "top": 919.3857421875,
            "anchor": "middle",
            "lines": [
              {
                "text": "+25% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 283.8896484375,
            "top": 947.384033203125,
            "anchor": "middle",
            "lines": [
              {
                "text": "LATAM",
                "size": 37.76513671875,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 431.04345703125,
            "top": 1047.005859375,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 431.04345703125,
            "top": 1099.095703125,
            "anchor": "middle",
            "lines": [
              {
                "text": "+23% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 283.8896484375,
            "top": 1127.7451171875,
            "anchor": "middle",
            "lines": [
              {
                "text": "APAC",
                "size": 37.76513671875,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 898.5498046875,
            "top": 497.4580078125,
            "anchor": "middle",
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 898.5498046875,
            "top": 550.85009765625,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 898.5498046875,
            "top": 604.2421875,
            "anchor": "middle",
            "lines": [
              {
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1366.05615234375,
            "top": 346.3974609375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 1366.05615234375,
            "top": 399.78955078125,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 1366.05615234375,
            "top": 453.181640625,
            "anchor": "middle",
            "lines": [
              {
                "text": "82% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 1366.05615234375,
            "top": 492.2490234375,
            "anchor": "middle",
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1366.05615234375,
            "top": 1097.79345703125,
            "anchor": "middle",
            "lines": [
              {
                "text": "Cost of",
                "size": 31.25390625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 1366.05615234375,
            "top": 1144.67431640625,
            "anchor": "middle",
            "lines": [
              {
                "text": "revenue",
                "size": 31.25390625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 1366.05615234375,
            "top": 1191.55517578125,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1833.5625,
            "top": 242.2177734375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 1833.5625,
            "top": 295.60986328125,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 1833.5625,
            "top": 349.001953125,
            "anchor": "middle",
            "lines": [
              {
                "text": "20% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 1833.5625,
            "top": 388.0693359375,
            "anchor": "middle",
            "lines": [
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1833.5625,
            "top": 924.5947265625,
            "anchor": "middle",
            "lines": [
              {
                "text": "Operating",
                "size": 31.25390625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 1833.5625,
            "top": 971.4755859375,
            "anchor": "middle",
            "lines": [
              {
                "text": "expenses",
                "size": 31.25390625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 1833.5625,
            "top": 1018.3564453125,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2176.05322265625,
            "top": 458.390625,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 2176.05322265625,
            "top": 501.36474609375,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 296.912109375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 2466.4541015625,
            "top": 350.30419921875,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 2466.4541015625,
            "top": 403.6962890625,
            "anchor": "middle",
            "lines": [
              {
                "text": "21% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 2466.4541015625,
            "top": 442.763671875,
            "anchor": "middle",
            "lines": [
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 579.49951171875,
            "anchor": "middle",
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 2466.4541015625,
            "top": 622.4736328125,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ],
            "semanticRole": "amount"
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 759.20947265625,
            "anchor": "middle",
            "lines": [
              {
                "text": "S&M ($0.7B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 2466.4541015625,
            "top": 803.48583984375,
            "anchor": "middle",
            "lines": [
              {
                "text": "22% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 2466.4541015625,
            "top": 842.55322265625,
            "anchor": "middle",
            "lines": [
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 929.8037109375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Product ($0.6B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 2466.4541015625,
            "top": 974.080078125,
            "anchor": "middle",
            "lines": [
              {
                "text": "20% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 2466.4541015625,
            "top": 1013.1474609375,
            "anchor": "middle",
            "lines": [
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "support": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 1087.37548828125,
            "anchor": "middle",
            "lines": [
              {
                "text": "Support ($0.3B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 2466.4541015625,
            "top": 1131.65185546875,
            "anchor": "middle",
            "lines": [
              {
                "text": "11% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 2466.4541015625,
            "top": 1170.71923828125,
            "anchor": "middle",
            "lines": [
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 1230.62255859375,
            "anchor": "middle",
            "lines": [
              {
                "text": "G&A ($0.3B)",
                "size": 29.95166015625,
                "weight": 700
              }
            ],
            "semanticRole": "name"
          },
          {
            "x": 2466.4541015625,
            "top": 1274.89892578125,
            "anchor": "middle",
            "lines": [
              {
                "text": "10% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          },
          {
            "x": 2466.4541015625,
            "top": 1313.96630859375,
            "anchor": "middle",
            "lines": [
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      }
    }
  },
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
      "x": 84.64599609375,
      "y": 382.8603515625,
      "width": 96.3662109375,
      "height": 93.76171875
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-emea.png",
      "x": 88.552734375,
      "y": 673.26123046875,
      "width": 85.9482421875,
      "height": 83.34375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-latam.png",
      "x": 96.3662109375,
      "y": 910.27001953125,
      "width": 74.22802734375,
      "height": 79.43701171875
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-apac.png",
      "x": 101.5751953125,
      "y": 1070.4462890625,
      "width": 82.04150390625,
      "height": 87.25048828125
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"102\" y=\"1173\" width=\"306\" height=\"151\" rx=\"30\" fill=\"#ff375b\"/><text x=\"255.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#ffffff\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"255.0\" y=\"1260\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">134M</text><text x=\"255.0\" y=\"1295\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">+7% Y/Y</text><rect x=\"417\" y=\"1173\" width=\"159\" height=\"151\" rx=\"30\" fill=\"#ff375b\"/><text x=\"496.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#ffffff\">GBV</text><text data-operating-metric=\"gbv\" x=\"496.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">$23.5B</text><text x=\"496.5\" y=\"1295\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">+9% Y/Y fxn</text><text x=\"356\" y=\"1355\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GBV = Gross Booking Value</text></g>",
  "i18n": {
    "zh": {
      "name": "Airbnb · 2025 财年第二季度",
      "meta": {
        "title": "Airbnb 2025 财年第二季度损益表",
        "period": "2025 财年第二季度",
        "titleSize": 110
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +5%"
          ]
        },
        "emea": {
          "label": "EMEA",
          "notes": [
            "同比 +18%"
          ]
        },
        "latam": {
          "label": "拉美",
          "notes": [
            "同比 +25%"
          ]
        },
        "apac": {
          "label": "亚太",
          "notes": [
            "同比 +23%"
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
            "利润率 82%",
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
            "利润率 20%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 21%",
            "同比 +1 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 22%",
            "同比 +1 个百分点"
          ]
        },
        "product": {
          "label": "产品",
          "notes": [
            "占收入 20%",
            "同比 +1 个百分点"
          ]
        },
        "support": {
          "label": "客服支持",
          "notes": [
            "占收入 11%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 10%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 261.75146484375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 431.04345703125,
                "top": 313.84130859375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +5%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 283.8896484375,
                "top": 401.742919921875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "北美",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "emea": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 566.47705078125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 431.04345703125,
                "top": 618.56689453125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +18%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 283.8896484375,
                "top": 699.30615234375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "EMEA",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "latam": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 867.2958984375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 431.04345703125,
                "top": 919.3857421875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +25%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 283.8896484375,
                "top": 947.384033203125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "拉美",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 431.04345703125,
                "top": 1047.005859375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 431.04345703125,
                "top": 1099.095703125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +23%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 283.8896484375,
                "top": 1127.7451171875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "亚太",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 898.5498046875,
                "top": 497.4580078125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 898.5498046875,
                "top": 550.85009765625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 898.5498046875,
                "top": 604.2421875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1366.05615234375,
                "top": 346.3974609375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 1366.05615234375,
                "top": 399.78955078125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 1366.05615234375,
                "top": 453.181640625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 82%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 1366.05615234375,
                "top": 492.2490234375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1366.05615234375,
                "top": 1097.79345703125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "收入",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 1366.05615234375,
                "top": 1144.67431640625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "成本",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 1366.05615234375,
                "top": 1191.55517578125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1833.5625,
                "top": 242.2177734375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 1833.5625,
                "top": 295.60986328125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 1833.5625,
                "top": 349.001953125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 1833.5625,
                "top": 388.0693359375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1833.5625,
                "top": 924.5947265625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "营业",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 1833.5625,
                "top": 971.4755859375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "费用",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 1833.5625,
                "top": 1018.3564453125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2176.05322265625,
                "top": 458.390625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 2176.05322265625,
                "top": 501.36474609375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 296.912109375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 2466.4541015625,
                "top": 350.30419921875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 2466.4541015625,
                "top": 403.6962890625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 2466.4541015625,
                "top": 442.763671875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 579.49951171875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 2466.4541015625,
                "top": 622.4736328125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ],
                "semanticRole": "amount"
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 759.20947265625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "销售与市场 ($0.7B)",
                    "size": 28.6494140625,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 2466.4541015625,
                "top": 803.48583984375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 22%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 2466.4541015625,
                "top": 842.55322265625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 929.8037109375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "产品 ($0.6B)",
                    "size": 28.6494140625,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 2466.4541015625,
                "top": 974.080078125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 2466.4541015625,
                "top": 1013.1474609375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "support": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 1087.37548828125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "客服支持 ($0.3B)",
                    "size": 28.6494140625,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 2466.4541015625,
                "top": 1131.65185546875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 2466.4541015625,
                "top": 1170.71923828125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 1230.62255859375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "管理费用 ($0.3B)",
                    "size": 28.6494140625,
                    "weight": 700
                  }
                ],
                "semanticRole": "name"
              },
              {
                "x": 2466.4541015625,
                "top": 1274.89892578125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              },
              {
                "x": 2466.4541015625,
                "top": 1313.96630859375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"102\" y=\"1173\" width=\"306\" height=\"151\" rx=\"30\" fill=\"#ff375b\"/><text x=\"255.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#ffffff\">预订间夜数</text><text data-operating-metric=\"nights_booked\" x=\"255.0\" y=\"1260\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">134M</text><text x=\"255.0\" y=\"1295\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">同比 +7%</text><rect x=\"417\" y=\"1173\" width=\"159\" height=\"151\" rx=\"30\" fill=\"#ff375b\"/><text x=\"496.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#ffffff\">GBV</text><text data-operating-metric=\"gbv\" x=\"496.5\" y=\"1260\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">$23.5B</text><text x=\"496.5\" y=\"1295\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">同比 +9%（固定汇率）</text><text x=\"356\" y=\"1355\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GBV = 总预订价值</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "nights_booked",
      "value": "134000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "134M"
    },
    {
      "id": "gbv",
      "value": "23.5",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$23.5B"
    }
  ]
});
