window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "airbnb-q3-fy24",
  "name": "Airbnb · Q3 FY24",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/airbnb-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
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
        "+6% Y/Y"
      ],
      "col": 0,
      "order": 0,
      "type": "source",
      "valueText": "$1.6B"
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 1.7,
      "notes": [
        "+13% Y/Y"
      ],
      "col": 0,
      "order": 1,
      "type": "source",
      "valueText": "$1.7B"
    },
    {
      "id": "latam",
      "label": "LATAM",
      "value": 0.2,
      "notes": [
        "+12% Y/Y"
      ],
      "col": 0,
      "order": 2,
      "type": "source",
      "valueText": "$0.2B"
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 0.2,
      "notes": [
        "+13% Y/Y"
      ],
      "col": 0,
      "order": 3,
      "type": "source",
      "valueText": "$0.2B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 3.7,
      "notes": [
        "+10% Y/Y"
      ],
      "col": 1,
      "order": 4,
      "type": "hub",
      "valueText": "$3.7B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 3.3,
      "notes": [
        "88% margin",
        "+1pp Y/Y"
      ],
      "col": 2,
      "order": 5,
      "type": "profit",
      "valueText": "$3.3B"
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
      "value": 1.5,
      "notes": [
        "41% margin",
        "(3pp) Y/Y"
      ],
      "col": 3,
      "order": 7,
      "type": "profit",
      "valueText": "$1.5B"
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
      "value": 0.2,
      "notes": [],
      "col": 4,
      "order": 9,
      "type": "profit",
      "valueText": "$0.2B"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 1.4,
      "notes": [
        "37% margin",
        "(92pp) Y/Y"
      ],
      "col": 5,
      "order": 10,
      "type": "profit",
      "valueText": "$1.4B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.4,
      "notes": [],
      "col": 5,
      "order": 11,
      "type": "cost",
      "valueText": "($0.4B)"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.5,
      "notes": [
        "14% of revenue",
        "+2pp Y/Y"
      ],
      "col": 5,
      "order": 12,
      "type": "cost",
      "valueText": "($0.5B)"
    },
    {
      "id": "product",
      "label": "Product",
      "value": 0.5,
      "notes": [
        "14% of revenue",
        "+2pp Y/Y"
      ],
      "col": 5,
      "order": 13,
      "type": "cost",
      "valueText": "($0.5B)"
    },
    {
      "id": "support",
      "label": "Support",
      "value": 0.4,
      "notes": [
        "10% of revenue",
        "+1pp Y/Y"
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
      "value": 3.7,
      "sourceWidth": 138.0380859375,
      "targetWidth": 138.0380859375,
      "y0": 399.78955078125,
      "y1": 707.11962890625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f79dae"
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 3.7,
      "sourceWidth": 126.31787109375,
      "targetWidth": 126.31787109375,
      "y0": 689.539306640625,
      "y1": 839.297607421875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f79dae"
    },
    {
      "source": "latam",
      "target": "revenue",
      "value": 3.7,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "y0": 929.8037109375,
      "y1": 910.27001953125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f79dae"
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 3.7,
      "sourceWidth": 18.2314453125,
      "targetWidth": 19.53369140625,
      "y0": 1106.9091796875,
      "y1": 927.850341796875,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#f79dae"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3.3,
      "sourceWidth": 263.0537109375,
      "targetWidth": 263.0537109375,
      "y0": 769.62744140625,
      "y1": 668.05224609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.5,
      "sourceWidth": 36.462890625,
      "targetWidth": 37.76513671875,
      "y0": 919.3857421875,
      "y1": 1026.821044921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.5,
      "sourceWidth": 122.4111328125,
      "targetWidth": 122.4111328125,
      "y0": 597.73095703125,
      "y1": 506.57373046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.7,
      "sourceWidth": 140.642578125,
      "targetWidth": 139.34033203125,
      "y0": 729.2578125,
      "y1": 844.506591796875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.4,
      "sourceWidth": 92.45947265625,
      "targetWidth": 92.45947265625,
      "y0": 491.597900390625,
      "y1": 378.302490234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.4,
      "sourceWidth": 29.95166015625,
      "targetWidth": 28.6494140625,
      "y0": 552.803466796875,
      "y1": 643.3095703125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 15.626953125,
      "targetWidth": 18.2314453125,
      "y0": 484.435546875,
      "y1": 433.64794921875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.5,
      "sourceWidth": 41.671875,
      "targetWidth": 41.671875,
      "y0": 795.67236328125,
      "y1": 817.810546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.5,
      "sourceWidth": 41.671875,
      "targetWidth": 40.36962890625,
      "y0": 837.34423828125,
      "y1": 953.895263671875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 0.4,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.6494140625,
      "y0": 872.5048828125,
      "y1": 1101.7001953125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 27.34716796875,
      "targetWidth": 27.34716796875,
      "y0": 900.503173828125,
      "y1": 1231.273681640625,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 395.8828125,
        "y": 330.7705078125,
        "width": 72.92578125,
        "height": 138.0380859375
      },
      "emea": {
        "x": 395.8828125,
        "y": 626.38037109375,
        "width": 72.92578125,
        "height": 126.31787109375
      },
      "latam": {
        "x": 395.8828125,
        "y": 921.990234375,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "apac": {
        "x": 395.8828125,
        "y": 1097.79345703125,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "revenue": {
        "x": 863.38916015625,
        "y": 638.1005859375,
        "width": 72.92578125,
        "height": 299.5166015625
      },
      "gross_profit": {
        "x": 1323.08203125,
        "y": 536.525390625,
        "width": 72.92578125,
        "height": 263.0537109375
      },
      "cost_of_revenue": {
        "x": 1328.291015625,
        "y": 1007.9384765625,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "operating_profit": {
        "x": 1799.7041015625,
        "y": 445.3681640625,
        "width": 72.92578125,
        "height": 122.4111328125
      },
      "operating_expenses": {
        "x": 1798.40185546875,
        "y": 774.83642578125,
        "width": 72.92578125,
        "height": 139.34033203125
      },
      "other_income": {
        "x": 2139.59033203125,
        "y": 476.6220703125,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "net_profit": {
        "x": 2264.60595703125,
        "y": 332.07275390625,
        "width": 72.92578125,
        "height": 110.69091796875
      },
      "tax": {
        "x": 2264.60595703125,
        "y": 628.98486328125,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "sm": {
        "x": 2264.60595703125,
        "y": 796.974609375,
        "width": 72.92578125,
        "height": 41.671875
      },
      "product": {
        "x": 2264.60595703125,
        "y": 933.71044921875,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "support": {
        "x": 2264.60595703125,
        "y": 1087.37548828125,
        "width": 72.92578125,
        "height": 28.6494140625
      },
      "ga": {
        "x": 2264.60595703125,
        "y": 1217.60009765625,
        "width": 72.92578125,
        "height": 27.34716796875
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 238.31103515625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 432.345703125,
            "top": 290.40087890625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 285.19189453125,
            "top": 352.90869140625,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "North",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "America",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 532.61865234375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 432.345703125,
            "top": 584.70849609375,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 285.19189453125,
            "top": 664.1455078125,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "EMEA",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          }
        ]
      },
      "latam": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 828.228515625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 432.345703125,
            "top": 880.318359375,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
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
            "top": 908.9677734375,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "LATAM",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 1004.03173828125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 432.345703125,
            "top": 1056.12158203125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 285.19189453125,
            "top": 1082.16650390625,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "APAC",
                "size": 39.0673828125,
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
            "top": 490.94677734375,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 899.85205078125,
            "top": 543.03662109375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 899.85205078125,
            "top": 595.12646484375,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+10% Y/Y",
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
            "x": 1363.45166015625,
            "top": 350.30419921875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 1363.45166015625,
            "top": 402.39404296875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 1363.45166015625,
            "top": 454.48388671875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "88% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1363.45166015625,
            "top": 493.55126953125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1836.1669921875,
            "top": 257.8447265625,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 1836.1669921875,
            "top": 309.9345703125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 1836.1669921875,
            "top": 362.0244140625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "41% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1836.1669921875,
            "top": 401.091796875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
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
            "top": 308.63232421875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 360.72216796875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 412.81201171875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "37% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 451.87939453125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "(92pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2176.05322265625,
            "top": 506.57373046875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2176.05322265625,
            "top": 550.85009765625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
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
            "top": 606.8466796875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2466.4541015625,
            "top": 651.123046875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1364.75390625,
            "top": 1061.33056640625,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 1364.75390625,
            "top": 1160.30126953125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1836.1669921875,
            "top": 929.8037109375,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 700
              }
            ]
          },
          {
            "x": 1836.1669921875,
            "top": 1028.7744140625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2373.99462890625,
            "top": 774.83642578125,
            "anchor": "start",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2445.6181640625,
            "top": 774.83642578125,
            "anchor": "start",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 816.50830078125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "14% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 855.57568359375,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2373.99462890625,
            "top": 912.87451171875,
            "anchor": "start",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Product",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2493.80126953125,
            "top": 912.87451171875,
            "anchor": "start",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 954.54638671875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "14% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 993.61376953125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+2pp Y/Y",
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
            "x": 2373.99462890625,
            "top": 1056.12158203125,
            "anchor": "start",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Support",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2445.6181640625,
            "top": 1056.12158203125,
            "anchor": "start",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 1097.79345703125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "10% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 1136.86083984375,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
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
      "ga": {
        "blocks": [
          {
            "x": 2373.99462890625,
            "top": 1195.4619140625,
            "anchor": "start",
            "semanticRole": "name",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2445.6181640625,
            "top": 1195.4619140625,
            "anchor": "start",
            "semanticRole": "amount",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 1237.1337890625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "9% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2467.75634765625,
            "top": 1276.201171875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
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
      "value": "123000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "123M",
      "basis": "unspecified",
      "notes": [
        "+8% Y/Y"
      ],
      "quote": "Nights booked\n123M\n+8% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          103,
          1175,
          303,
          148
        ]
      }
    },
    {
      "id": "gbv",
      "label": "GBV",
      "value": "20.1",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$20.1B",
      "basis": "unspecified",
      "notes": [
        "+10% Y/Y"
      ],
      "quote": "GBV\n$20.1B\n+10% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          417,
          1175,
          145,
          150
        ]
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb · 2024 财年第三季度",
      "meta": {
        "title": "Airbnb 2024 财年第三季度损益表",
        "period": "2024 财年第三季度",
        "titleSize": 111.9931640625
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +6%"
          ]
        },
        "emea": {
          "label": "EMEA",
          "notes": [
            "同比 +13%"
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
            "同比 +13%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +10%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 88%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 41%",
            "同比 (3 个百分点)"
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
            "利润率 37%",
            "同比 (92 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 14%",
            "同比 +2 个百分点"
          ]
        },
        "product": {
          "label": "产品",
          "notes": [
            "占收入 14%",
            "同比 +2 个百分点"
          ]
        },
        "support": {
          "label": "客服支持",
          "notes": [
            "占收入 10%",
            "同比 +1 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 9%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 238.31103515625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 432.345703125,
                "top": 290.40087890625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 285.19189453125,
                "top": 376.34912109375,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "北美",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "emea": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 532.61865234375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 432.345703125,
                "top": 584.70849609375,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 285.19189453125,
                "top": 664.1455078125,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "EMEA",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "latam": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 828.228515625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 432.345703125,
                "top": 880.318359375,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 285.19189453125,
                "top": 908.9677734375,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "拉美",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 1004.03173828125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 432.345703125,
                "top": 1056.12158203125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 285.19189453125,
                "top": 1082.16650390625,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "亚太",
                    "size": 39.0673828125,
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
                "top": 490.94677734375,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 899.85205078125,
                "top": 543.03662109375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 899.85205078125,
                "top": 595.12646484375,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +10%",
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
                "x": 1363.45166015625,
                "top": 350.30419921875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1363.45166015625,
                "top": 402.39404296875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1363.45166015625,
                "top": 454.48388671875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利润率 88%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1363.45166015625,
                "top": 493.55126953125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +1 个百分点",
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
                "x": 1836.1669921875,
                "top": 257.8447265625,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1836.1669921875,
                "top": 309.9345703125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1836.1669921875,
                "top": 362.0244140625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利润率 41%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1836.1669921875,
                "top": 401.091796875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 (3 个百分点)",
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
                "top": 308.63232421875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 360.72216796875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 412.81201171875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利润率 37%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 451.87939453125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 (92 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2176.05322265625,
                "top": 506.57373046875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2176.05322265625,
                "top": 550.85009765625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "top": 606.8466796875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2466.4541015625,
                "top": 651.123046875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1364.75390625,
                "top": 1061.33056640625,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入成本",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1364.75390625,
                "top": 1160.30126953125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1836.1669921875,
                "top": 929.8037109375,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1836.1669921875,
                "top": 1028.7744140625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2363.57666015625,
                "top": 774.83642578125,
                "anchor": "start",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 28.6494140625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2513.3349609375,
                "top": 774.83642578125,
                "anchor": "start",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 28.6494140625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 816.50830078125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "占收入 14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 855.57568359375,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
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
                "x": 2363.57666015625,
                "top": 912.87451171875,
                "anchor": "start",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "产品",
                    "size": 28.6494140625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2513.3349609375,
                "top": 912.87451171875,
                "anchor": "start",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 28.6494140625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 954.54638671875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "占收入 14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 993.61376953125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +2 个百分点",
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
                "x": 2363.57666015625,
                "top": 1056.12158203125,
                "anchor": "start",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "客服支持",
                    "size": 28.6494140625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2513.3349609375,
                "top": 1056.12158203125,
                "anchor": "start",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 28.6494140625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 1097.79345703125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "占收入 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 1136.86083984375,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +1 个百分点",
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
                "x": 2363.57666015625,
                "top": 1195.4619140625,
                "anchor": "start",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 28.6494140625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2513.3349609375,
                "top": 1195.4619140625,
                "anchor": "start",
                "semanticRole": "amount",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 28.6494140625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 1237.1337890625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "占收入 9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2467.75634765625,
                "top": 1276.201171875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +0 个百分点",
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"102.87744140625\" y=\"1174.6259765625\" width=\"303.42333984375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#ff375b\"/><text x=\"254.589111328125\" y=\"1226.7158203125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">预订间夜数</text><text data-operating-metric=\"nights_booked\" x=\"254.589111328125\" y=\"1265.783203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">123M</text><text x=\"254.589111328125\" y=\"1298.33935546875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +8%</text><rect x=\"416.71875\" y=\"1174.6259765625\" width=\"144.54931640625\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#ff375b\"/><text x=\"488.993408203125\" y=\"1226.7158203125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">GBV</text><text data-operating-metric=\"gbv\" x=\"488.993408203125\" y=\"1265.783203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$20.1B</text><text x=\"488.993408203125\" y=\"1298.33935546875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">同比 +10%</text><text x=\"335.9794921875\" y=\"1355.63818359375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\">GBV = 总预订价值</text></g>"
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"102.87744140625\" y=\"1174.6259765625\" width=\"303.42333984375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#ff375b\"/><text x=\"254.589111328125\" y=\"1226.7158203125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"254.589111328125\" y=\"1265.783203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">123M</text><text x=\"254.589111328125\" y=\"1298.33935546875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+8% Y/Y</text><rect x=\"416.71875\" y=\"1174.6259765625\" width=\"144.54931640625\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#ff375b\"/><text x=\"488.993408203125\" y=\"1226.7158203125\" text-anchor=\"middle\" font-size=\"28.6494140625\" font-weight=\"700\" fill=\"white\">GBV</text><text data-operating-metric=\"gbv\" x=\"488.993408203125\" y=\"1265.783203125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"white\">$20.1B</text><text x=\"488.993408203125\" y=\"1298.33935546875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"white\">+10% Y/Y</text><text x=\"335.9794921875\" y=\"1355.63818359375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777777\">GBV = Gross Booking Value</text></g>",
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-logo.png",
      "x": 780.04541015625,
      "y": 233.10205078125,
      "width": 244.822265625,
      "height": 244.822265625
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-north-america.png",
      "x": 88.552734375,
      "y": 354.2109375,
      "width": 91.1572265625,
      "height": 91.1572265625
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-emea.png",
      "x": 91.1572265625,
      "y": 634.19384765625,
      "width": 80.7392578125,
      "height": 83.34375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-latam.png",
      "x": 98.970703125,
      "y": 877.7138671875,
      "width": 70.3212890625,
      "height": 76.83251953125
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-apac.png",
      "x": 104.1796875,
      "y": 1061.33056640625,
      "width": 76.83251953125,
      "height": 84.64599609375
    }
  ]
});
