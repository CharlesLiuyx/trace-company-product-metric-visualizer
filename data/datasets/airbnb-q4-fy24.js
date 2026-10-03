window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "airbnb-q4-fy24",
  "name": "Airbnb · Q4 FY24",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/airbnb-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195,
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
        "+7% Y/Y"
      ],
      "col": 0,
      "order": 0,
      "type": "source",
      "valueText": "$1.1B"
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 0.8,
      "notes": [
        "+16% Y/Y"
      ],
      "col": 0,
      "order": 1,
      "type": "source",
      "valueText": "$0.8B"
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
        "+22% Y/Y"
      ],
      "col": 0,
      "order": 3,
      "type": "source",
      "valueText": "$0.3B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 2.5,
      "notes": [
        "+12% Y/Y"
      ],
      "col": 1,
      "order": 4,
      "type": "hub",
      "valueText": "$2.5B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.1,
      "notes": [
        "83% margin",
        "+3pp Y/Y"
      ],
      "col": 2,
      "order": 5,
      "type": "profit",
      "valueText": "$2.1B"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 0.4,
      "notes": [],
      "col": 2,
      "order": 6,
      "type": "cost",
      "valueText": "($0.4B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.4,
      "notes": [
        "17% margin",
        "+40pp Y/Y"
      ],
      "col": 3,
      "order": 7,
      "type": "profit",
      "valueText": "$0.4B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.6,
      "notes": [],
      "col": 3,
      "order": 8,
      "type": "cost",
      "valueText": "($1.6B)"
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
      "value": 0.5,
      "notes": [
        "19% margin",
        "+34pp Y/Y"
      ],
      "col": 5,
      "order": 10,
      "type": "profit",
      "valueText": "$0.5B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.2,
      "notes": [],
      "col": 5,
      "order": 11,
      "type": "cost",
      "valueText": "($0.2B)"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.5,
      "notes": [
        "22% of revenue",
        "+3pp Y/Y"
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
        "22% of revenue",
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
      "value": 0.3,
      "notes": [
        "12% of revenue",
        "(1pp) Y/Y"
      ],
      "col": 5,
      "order": 14,
      "type": "cost",
      "valueText": "($0.3B)"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.2,
      "notes": [
        "10% of revenue",
        "(44pp) Y/Y"
      ],
      "col": 5,
      "order": 15,
      "type": "cost",
      "valueText": "($0.2B)"
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 1.1,
      "sourceWidth": 131.52685546875,
      "targetWidth": 131.52685546875,
      "y0": 462.948486328125,
      "y1": 711.677490234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f79dae"
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 0.8,
      "sourceWidth": 93.76171875,
      "targetWidth": 93.76171875,
      "y0": 713.630859375,
      "y1": 824.32177734375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f79dae"
    },
    {
      "source": "latam",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "y0": 920.68798828125,
      "y1": 888.1318359375,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f79dae"
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 36.462890625,
      "targetWidth": 35.16064453125,
      "y0": 1108.21142578125,
      "y1": 921.339111328125,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#f79dae"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.1,
      "sourceWidth": 243.52001953125,
      "targetWidth": 243.52001953125,
      "y0": 767.674072265625,
      "y1": 656.983154296875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.4,
      "sourceWidth": 50.78759765625,
      "targetWidth": 50.78759765625,
      "y0": 913.525634765625,
      "y1": 1015.100830078125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.4,
      "sourceWidth": 50.78759765625,
      "targetWidth": 50.78759765625,
      "y0": 560.616943359375,
      "y1": 460.343994140625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.6,
      "sourceWidth": 192.732421875,
      "targetWidth": 192.732421875,
      "y0": 682.376953125,
      "y1": 800.88134765625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "y0": 450.5771484375,
      "y1": 355.51318359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 19.53369140625,
      "targetWidth": 19.53369140625,
      "y0": 475.970947265625,
      "y1": 597.079833984375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.5,
      "sourceWidth": 23.4404296875,
      "targetWidth": 22.13818359375,
      "y0": 424.5322265625,
      "y1": 382.209228515625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.5,
      "sourceWidth": 63.81005859375,
      "targetWidth": 65.1123046875,
      "y0": 736.420166015625,
      "y1": 776.138671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.5,
      "sourceWidth": 65.1123046875,
      "targetWidth": 63.81005859375,
      "y0": 800.88134765625,
      "y1": 965.615478515625,
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
      "y0": 851.017822265625,
      "y1": 1140.116455078125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.2,
      "sourceWidth": 28.6494140625,
      "targetWidth": 29.95166015625,
      "y0": 882.9228515625,
      "y1": 1301.594970703125,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 395.8828125,
        "y": 397.18505859375,
        "width": 72.92578125,
        "height": 131.52685546875
      },
      "emea": {
        "x": 395.8828125,
        "y": 666.75,
        "width": 72.92578125,
        "height": 93.76171875
      },
      "latam": {
        "x": 395.8828125,
        "y": 903.7587890625,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "apac": {
        "x": 395.8828125,
        "y": 1089.97998046875,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "revenue": {
        "x": 863.38916015625,
        "y": 645.9140625,
        "width": 72.92578125,
        "height": 293.00537109375
      },
      "gross_profit": {
        "x": 1326.98876953125,
        "y": 535.22314453125,
        "width": 72.92578125,
        "height": 243.52001953125
      },
      "cost_of_revenue": {
        "x": 1329.59326171875,
        "y": 989.70703125,
        "width": 72.92578125,
        "height": 50.78759765625
      },
      "operating_profit": {
        "x": 1797.099609375,
        "y": 434.9501953125,
        "width": 72.92578125,
        "height": 50.78759765625
      },
      "operating_expenses": {
        "x": 1797.099609375,
        "y": 704.51513671875,
        "width": 72.92578125,
        "height": 192.732421875
      },
      "other_income": {
        "x": 2139.59033203125,
        "y": 412.81201171875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "net_profit": {
        "x": 2264.60595703125,
        "y": 339.88623046875,
        "width": 72.92578125,
        "height": 53.39208984375
      },
      "tax": {
        "x": 2264.60595703125,
        "y": 587.31298828125,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "sm": {
        "x": 2264.60595703125,
        "y": 743.58251953125,
        "width": 72.92578125,
        "height": 65.1123046875
      },
      "product": {
        "x": 2264.60595703125,
        "y": 933.71044921875,
        "width": 72.92578125,
        "height": 63.81005859375
      },
      "support": {
        "x": 2264.60595703125,
        "y": 1122.5361328125,
        "width": 72.92578125,
        "height": 35.16064453125
      },
      "ga": {
        "x": 2264.60595703125,
        "y": 1286.619140625,
        "width": 72.92578125,
        "height": 29.95166015625
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 302.12109375,
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
            "top": 355.51318359375,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+7% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 283.8896484375,
            "top": 416.067626953125,
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
            "top": 571.68603515625,
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
            "top": 625.078125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+16% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 283.8896484375,
            "top": 691.49267578125,
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
            "top": 806.09033203125,
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
            "top": 859.482421875,
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
            "x": 283.8896484375,
            "top": 898.5498046875,
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
            "top": 996.21826171875,
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
            "top": 1049.6103515625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+22% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 283.8896484375,
            "top": 1086.0732421875,
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
            "top": 497.4580078125,
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
            "top": 550.85009765625,
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
            "top": 602.93994140625,
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
            "top": 403.6962890625,
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
            "top": 455.7861328125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "83% margin",
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
                "text": "+3pp Y/Y",
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
            "x": 1366.05615234375,
            "top": 1056.12158203125,
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
            "x": 1366.05615234375,
            "top": 1155.09228515625,
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1833.5625,
            "top": 248.72900390625,
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
            "x": 1833.5625,
            "top": 302.12109375,
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
            "x": 1833.5625,
            "top": 354.2109375,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "17% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1833.5625,
            "top": 391.97607421875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "+40pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1833.5625,
            "top": 911.572265625,
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
            "x": 1833.5625,
            "top": 1010.54296875,
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
      "other_income": {
        "blocks": [
          {
            "x": 2177.35546875,
            "top": 450.5771484375,
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
            "x": 2177.35546875,
            "top": 503.96923828125,
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
            "top": 362.0244140625,
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
            "top": 414.1142578125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "19% margin",
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
                "text": "+34pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2465.15185546875,
            "top": 563.87255859375,
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
            "x": 2465.15185546875,
            "top": 617.2646484375,
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
      "sm": {
        "blocks": [
          {
            "x": 2380.505859375,
            "top": 735.76904296875,
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
            "x": 2458.640625,
            "top": 735.76904296875,
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
            "x": 2474.267578125,
            "top": 778.7431640625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "22% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 816.50830078125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
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
      "product": {
        "blocks": [
          {
            "x": 2366.18115234375,
            "top": 929.8037109375,
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
            "x": 2492.4990234375,
            "top": 929.8037109375,
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
            "x": 2474.267578125,
            "top": 972.77783203125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "22% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 1010.54296875,
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
            "x": 2366.18115234375,
            "top": 1101.7001953125,
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
            "x": 2492.4990234375,
            "top": 1101.7001953125,
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
            "x": 2474.267578125,
            "top": 1144.67431640625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "12% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 1182.439453125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
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
      "ga": {
        "blocks": [
          {
            "x": 2393.5283203125,
            "top": 1263.1787109375,
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
            "x": 2467.75634765625,
            "top": 1263.1787109375,
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
            "x": 2474.267578125,
            "top": 1306.15283203125,
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
            "x": 2474.267578125,
            "top": 1343.91796875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "(44pp) Y/Y",
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
      "value": "111000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "111M"
    },
    {
      "id": "gbv",
      "value": "17.6",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$17.6B"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb · 2024 财年第四季度",
      "meta": {
        "title": "Airbnb 2024 财年第四季度利润表",
        "period": "2024 财年第四季度"
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +7%"
          ]
        },
        "emea": {
          "label": "EMEA",
          "notes": [
            "同比 +16%"
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
            "同比 +22%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 83%",
            "同比 +3 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 17%",
            "同比 +40 个百分点"
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
            "利润率 19%",
            "同比 +34 个百分点"
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
            "同比 +3 个百分点"
          ]
        },
        "product": {
          "label": "产品",
          "notes": [
            "占收入 22%",
            "同比 +2 个百分点"
          ]
        },
        "support": {
          "label": "客服支持",
          "notes": [
            "占收入 12%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 10%",
            "同比 (44 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 432.345703125,
                "top": 302.12109375,
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
                "top": 355.51318359375,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 283.8896484375,
                "top": 440.810302734375,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "北美",
                    "size": 36.462890625,
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
                "top": 571.68603515625,
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
                "top": 625.078125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +16%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 283.8896484375,
                "top": 691.49267578125,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "EMEA",
                    "size": 36.462890625,
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
                "top": 806.09033203125,
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
                "top": 859.482421875,
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
                "x": 283.8896484375,
                "top": 898.5498046875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "拉美",
                    "size": 36.462890625,
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
                "top": 996.21826171875,
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
                "top": 1049.6103515625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +22%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 283.8896484375,
                "top": 1086.0732421875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "亚太",
                    "size": 36.462890625,
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
                "top": 497.4580078125,
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
                "top": 550.85009765625,
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
                "top": 602.93994140625,
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
                "top": 403.6962890625,
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
                "top": 455.7861328125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利润率 83%",
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
                    "text": "同比 +3 个百分点",
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
                "x": 1366.05615234375,
                "top": 1056.12158203125,
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
                "x": 1366.05615234375,
                "top": 1109.513671875,
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1833.5625,
                "top": 248.72900390625,
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
                "x": 1833.5625,
                "top": 302.12109375,
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
                "x": 1833.5625,
                "top": 354.2109375,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利润率 17%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1833.5625,
                "top": 391.97607421875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +40 个百分点",
                    "size": 27.34716796875,
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
                "x": 1833.5625,
                "top": 911.572265625,
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
                "x": 1833.5625,
                "top": 964.96435546875,
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
          "other_income": {
            "blocks": [
              {
                "x": 2177.35546875,
                "top": 450.5771484375,
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
                "x": 2177.35546875,
                "top": 503.96923828125,
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
                "top": 362.0244140625,
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
                "top": 414.1142578125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "利润率 19%",
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
                    "text": "同比 +34 个百分点",
                    "size": 27.34716796875,
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
                "x": 2465.15185546875,
                "top": 563.87255859375,
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
                "x": 2465.15185546875,
                "top": 617.2646484375,
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
          "sm": {
            "blocks": [
              {
                "x": 2366.18115234375,
                "top": 735.76904296875,
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
                "top": 735.76904296875,
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
                "x": 2474.267578125,
                "top": 778.7431640625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "占收入 22%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 816.50830078125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 2366.18115234375,
                "top": 929.8037109375,
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
                "top": 929.8037109375,
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
                "x": 2474.267578125,
                "top": 972.77783203125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "占收入 22%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 1010.54296875,
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
                "x": 2366.18115234375,
                "top": 1101.7001953125,
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
                "top": 1101.7001953125,
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
                "x": 2474.267578125,
                "top": 1144.67431640625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "占收入 12%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 1182.439453125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 2366.18115234375,
                "top": 1263.1787109375,
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
                "top": 1263.1787109375,
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
                "x": 2474.267578125,
                "top": 1306.15283203125,
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
                "x": 2474.267578125,
                "top": 1343.91796875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "同比 (44 个百分点)",
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"102\" y=\"1173\" width=\"305\" height=\"150\" rx=\"30\" fill=\"#ff375b\"/><text x=\"254.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"white\">预订间夜数</text><text data-operating-metric=\"nights_booked\" x=\"254.5\" y=\"1264\" text-anchor=\"middle\" font-size=\"27\" fill=\"white\">111M</text><text x=\"254.5\" y=\"1296\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">同比 +12%</text><rect x=\"416\" y=\"1173\" width=\"145\" height=\"150\" rx=\"30\" fill=\"#ff375b\"/><text x=\"488.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"white\">GBV</text><text data-operating-metric=\"gbv\" x=\"488.5\" y=\"1264\" text-anchor=\"middle\" font-size=\"27\" fill=\"white\">$17.6B</text><text x=\"488.5\" y=\"1296\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">同比 +13%</text><text x=\"335\" y=\"1355\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GBV = 总预订价值</text></g>"
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"102\" y=\"1173\" width=\"305\" height=\"150\" rx=\"30\" fill=\"#ff375b\"/><text x=\"254.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"white\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"254.5\" y=\"1264\" text-anchor=\"middle\" font-size=\"27\" fill=\"white\">111M</text><text x=\"254.5\" y=\"1296\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">+12% Y/Y</text><rect x=\"416\" y=\"1173\" width=\"145\" height=\"150\" rx=\"30\" fill=\"#ff375b\"/><text x=\"488.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"white\">GBV</text><text data-operating-metric=\"gbv\" x=\"488.5\" y=\"1264\" text-anchor=\"middle\" font-size=\"27\" fill=\"white\">$17.6B</text><text x=\"488.5\" y=\"1296\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">+13% Y/Y</text><text x=\"335\" y=\"1355\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GBV = Gross Booking Value</text></g>",
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
      "y": 415.41650390625,
      "width": 91.1572265625,
      "height": 91.1572265625
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-emea.png",
      "x": 91.1572265625,
      "y": 665.44775390625,
      "width": 80.7392578125,
      "height": 83.34375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-latam.png",
      "x": 98.970703125,
      "y": 864.69140625,
      "width": 70.3212890625,
      "height": 76.83251953125
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-apac.png",
      "x": 104.1796875,
      "y": 1062.6328125,
      "width": 76.83251953125,
      "height": 84.64599609375
    }
  ]
});