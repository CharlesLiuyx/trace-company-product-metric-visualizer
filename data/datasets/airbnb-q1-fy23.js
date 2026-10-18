window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "airbnb-q1-fy23",
  "name": "Airbnb \u00b7 Q1 FY23",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/airbnb-q1-fy23.png",
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
    "width": 2667.0,
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
      "lineGap": 10.41796875
    }
  },
  "nodes": [
    {
      "id": "us",
      "label": "United States",
      "value": 0.9,
      "valueText": "$0.9B",
      "notes": [
        "+13% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "international",
      "label": "International",
      "value": 0.9,
      "valueText": "$0.9B",
      "notes": [
        "+28% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1.8,
      "valueText": "$1.8B",
      "notes": [
        "+20% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 2
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.4,
      "valueText": "$1.4B",
      "notes": [
        "76% margin",
        "+0.5pp Y/Y"
      ],
      "type": "profit",
      "col": 2,
      "order": 3
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 0.4,
      "valueText": "($0.4B)",
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 4
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 0.005,
      "valueText": "($5M)",
      "notes": [
        "(0%) margin",
        "+0.1pp Y/Y"
      ],
      "type": "cost",
      "col": 3,
      "order": 5,
      "decimals": 3
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.4,
      "valueText": "($1.4B)",
      "notes": [],
      "type": "cost",
      "col": 3,
      "order": 6
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.5,
      "valueText": "($0.5B)",
      "notes": [
        "25% of revenue",
        "+2pp Y/Y"
      ],
      "type": "cost",
      "col": 4,
      "order": 7
    },
    {
      "id": "product",
      "label": "Product dev.",
      "value": 0.4,
      "valueText": "($0.4B)",
      "notes": [
        "23% of revenue",
        "(1pp) Y/Y"
      ],
      "type": "cost",
      "col": 4,
      "order": 8
    },
    {
      "id": "support",
      "label": "Support",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": [
        "16% of revenue",
        "+0pp Y/Y"
      ],
      "type": "cost",
      "col": 4,
      "order": 9
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": [
        "13% of revenue",
        "(1pp) Y/Y"
      ],
      "type": "cost",
      "col": 4,
      "order": 10
    }
  ],
  "links": [
    {
      "source": "us",
      "target": "revenue",
      "value": 0.9,
      "sourceWidth": 154.96728515625,
      "targetWidth": 154.96728515625,
      "y0": 634.844970703125,
      "y1": 776.789794921875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f79dae"
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 0.9,
      "sourceWidth": 167.98974609375,
      "targetWidth": 167.98974609375,
      "y0": 1048.959228515625,
      "y1": 938.268310546875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f79dae"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.4,
      "sourceWidth": 247.4267578125,
      "targetWidth": 247.4267578125,
      "y0": 823.01953125,
      "y1": 731.8623046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.4,
      "sourceWidth": 75.5302734375,
      "targetWidth": 75.5302734375,
      "y0": 984.498046875,
      "y1": 1075.6552734375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.4,
      "sourceWidth": 247.4267578125,
      "targetWidth": 247.4267578125,
      "y0": 731.8623046875,
      "y1": 823.01953125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.005,
      "sourceWidth": 1.3,
      "targetWidth": 1.30224609375,
      "y0": 1068.491796875,
      "y1": 946.081787109375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.5,
      "sourceWidth": 79.43701171875,
      "targetWidth": 79.43701171875,
      "y0": 739.024658203125,
      "y1": 444.717041015625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.4,
      "sourceWidth": 74.22802734375,
      "targetWidth": 74.22802734375,
      "y0": 815.857177734375,
      "y1": 716.886474609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 0.3,
      "sourceWidth": 49.4853515625,
      "targetWidth": 49.4853515625,
      "y0": 877.7138671875,
      "y1": 985.80029296875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.2,
      "sourceWidth": 44.2763671875,
      "targetWidth": 42.97412109375,
      "y0": 924.5947265625,
      "y1": 1239.087158203125,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "us": {
        "x": 402.39404296875,
        "y": 557.361328125,
        "width": 71.62353515625,
        "height": 154.96728515625
      },
      "international": {
        "x": 402.39404296875,
        "y": 964.96435546875,
        "width": 71.62353515625,
        "height": 167.98974609375
      },
      "revenue": {
        "x": 869.900390625,
        "y": 699.30615234375,
        "width": 71.62353515625,
        "height": 322.95703125
      },
      "gross_profit": {
        "x": 1326.98876953125,
        "y": 608.14892578125,
        "width": 71.62353515625,
        "height": 247.4267578125
      },
      "cost_of_revenue": {
        "x": 1336.1044921875,
        "y": 1037.89013671875,
        "width": 71.62353515625,
        "height": 75.5302734375
      },
      "operating_loss": {
        "x": 1623.90087890625,
        "y": 1067.841796875,
        "width": 71.62353515625,
        "height": 1.3
      },
      "operating_expenses": {
        "x": 1806.21533203125,
        "y": 699.30615234375,
        "width": 71.62353515625,
        "height": 247.4267578125
      },
      "sm": {
        "x": 2271.1171875,
        "y": 404.99853515625,
        "width": 71.62353515625,
        "height": 79.43701171875
      },
      "product": {
        "x": 2271.1171875,
        "y": 679.7724609375,
        "width": 71.62353515625,
        "height": 74.22802734375
      },
      "support": {
        "x": 2271.1171875,
        "y": 961.0576171875,
        "width": 71.62353515625,
        "height": 49.4853515625
      },
      "ga": {
        "x": 2271.1171875,
        "y": 1217.60009765625,
        "width": 71.62353515625,
        "height": 42.97412109375
      }
    },
    "labels": {
      "us": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 463.599609375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 438.85693359375,
            "top": 515.689453125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 231.7998046875,
            "top": 502.2939453125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "United States",
                "size": 39.0673828125,
                "weight": 700
              }
            ],
            "lineGap": 10.41796875
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 867.2958984375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 438.85693359375,
            "top": 919.3857421875,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+28% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 231.7998046875,
            "top": 909.89697265625,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "International",
                "size": 39.0673828125,
                "weight": 700
              }
            ],
            "lineGap": 10.41796875
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 906.36328125,
            "top": 546.943359375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 906.36328125,
            "top": 596.4287109375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 906.36328125,
            "top": 648.5185546875,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+20% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1362.1494140625,
            "top": 420.62548828125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 1362.1494140625,
            "top": 470.11083984375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 1362.1494140625,
            "top": 522.20068359375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "76% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 1362.1494140625,
            "top": 559.9658203125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+0.5pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1372.5673828125,
            "top": 1126.44287109375,
            "anchor": "middle",
            "semanticRole": "name",
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
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 1372.5673828125,
            "top": 1225.41357421875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "lineGap": 10.41796875
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1659.712646484375,
            "top": 1084.77099609375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0673828125,
                "weight": 700
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 1659.712646484375,
            "top": 1134.25634765625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 1659.712646484375,
            "top": 1186.34619140625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(0%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 1659.712646484375,
            "top": 1224.111328125,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+0.1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1842.67822265625,
            "top": 540.43212890625,
            "anchor": "middle",
            "semanticRole": "name",
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
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 1842.67822265625,
            "top": 639.40283203125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "lineGap": 10.41796875
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2478.17431640625,
            "top": 408.9052734375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 700
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 450.5771484375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 494.853515625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "25% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 532.61865234375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 2478.17431640625,
            "top": 675.86572265625,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Product dev.",
                "size": 31.25390625,
                "weight": 700
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 717.53759765625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 761.81396484375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "23% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 799.5791015625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          }
        ]
      },
      "support": {
        "blocks": [
          {
            "x": 2478.17431640625,
            "top": 946.73291015625,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Support",
                "size": 31.25390625,
                "weight": 700
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 988.40478515625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 1032.68115234375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "16% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 1070.4462890625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2478.17431640625,
            "top": 1200.6708984375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 700
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 1242.3427734375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 1286.619140625,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "13% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          },
          {
            "x": 2478.17431640625,
            "top": 1324.38427734375,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 10.41796875
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "nights_booked",
      "label": "Nights booked",
      "value": "121000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "121M",
      "basis": "unspecified",
      "notes": [
        "+19% Y/Y"
      ],
      "quote": "Nights booked\n121M\n+19% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          25,
          1202,
          306,
          150
        ]
      }
    },
    {
      "id": "gbv",
      "label": "GBV",
      "value": "20.4",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$20.4B",
      "basis": "unspecified",
      "notes": [
        "+19% Y/Y"
      ],
      "quote": "GBV\n$20.4B\n+19% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          340,
          1202,
          145,
          150
        ]
      }
    },
    {
      "id": "long_stays",
      "label": "Long-term stays (28+ days)",
      "value": "18",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "18%",
      "basis": "unspecified",
      "notes": [],
      "quote": "Long-term stays (28+ days)\n18% of nights booked\n",
      "anchor": {
        "type": "image-box",
        "box": [
          494,
          1202,
          418,
          151
        ]
      }
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"24.74267578125\" y=\"1201.97314453125\" width=\"306.02783203125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#ff375b\"/><text x=\"177.756591796875\" y=\"1255.365234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#fff\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"177.756591796875\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#fff\">121M</text><text x=\"177.756591796875\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\">+19% Y/Y</text><rect x=\"339.88623046875\" y=\"1201.97314453125\" width=\"144.54931640625\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#ff375b\"/><text x=\"412.160888671875\" y=\"1255.365234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#fff\">GBV</text><text data-operating-metric=\"gbv\" x=\"412.160888671875\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#fff\">$20.4B</text><text x=\"412.160888671875\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\">+19% Y/Y</text><rect x=\"493.55126953125\" y=\"1201.97314453125\" width=\"418.02099609375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#ff375b\"/><text x=\"702.561767578125\" y=\"1255.365234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#fff\">Long-term stays (28+ days)</text><text data-operating-metric=\"long_stays\" x=\"702.561767578125\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#fff\">18%</text><text x=\"702.561767578125\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\">of nights booked</text><text x=\"423.22998046875\" y=\"1385.58984375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">GBV = Gross Booking Value</text><text x=\"171.896484375\" y=\"1436.37744140625\" font-size=\"39.0673828125\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-logo.png",
      "x": 778.7431640625,
      "y": 237.0087890625,
      "width": 261.75146484375,
      "height": 261.75146484375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q1-fy23-us-icons.png",
      "x": 82,
      "y": 613,
      "width": 305,
      "height": 106
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q1-fy23-international-icons.png",
      "x": 83.34375,
      "y": 1036.587890625,
      "width": 302.12109375,
      "height": 100.27294921875
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb \u00b7 2023\u8d22\u5e74\u7b2c\u4e00\u5b63\u5ea6",
      "meta": {
        "title": "Airbnb 2023\u8d22\u5e74\u7b2c\u4e00\u5b63\u5ea6\u635f\u76ca\u8868",
        "period": "2023\u8d22\u5e74\u7b2c\u4e00\u5b63\u5ea6"
      },
      "nodes": {
        "us": {
          "label": "\u7f8e\u56fd",
          "notes": [
            "\u540c\u6bd4 +13%"
          ]
        },
        "international": {
          "label": "\u56fd\u9645",
          "notes": [
            "\u540c\u6bd4 +28%"
          ]
        },
        "revenue": {
          "label": "\u6536\u5165",
          "notes": [
            "\u540c\u6bd4 +20%"
          ]
        },
        "gross_profit": {
          "label": "\u6bdb\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 76%",
            "\u540c\u6bd4 +0.5 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "cost_of_revenue": {
          "label": "\u6536\u5165\u6210\u672c",
          "notes": []
        },
        "operating_loss": {
          "label": "\u8425\u4e1a\u4e8f\u635f",
          "notes": [
            "\u5229\u6da6\u7387 (0%)",
            "\u540c\u6bd4 +0.1 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "operating_expenses": {
          "label": "\u8425\u4e1a\u8d39\u7528",
          "notes": []
        },
        "sm": {
          "label": "\u9500\u552e\u4e0e\u5e02\u573a",
          "notes": [
            "\u5360\u6536\u5165 25%",
            "\u540c\u6bd4 +2 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "product": {
          "label": "\u4ea7\u54c1\u5f00\u53d1",
          "notes": [
            "\u5360\u6536\u5165 23%",
            "\u540c\u6bd4 (1 \u4e2a\u767e\u5206\u70b9)"
          ]
        },
        "support": {
          "label": "\u5ba2\u670d\u652f\u6301",
          "notes": [
            "\u5360\u6536\u5165 16%",
            "\u540c\u6bd4 +0 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "ga": {
          "label": "\u7ba1\u7406\u8d39\u7528",
          "notes": [
            "\u5360\u6536\u5165 13%",
            "\u540c\u6bd4 (1 \u4e2a\u767e\u5206\u70b9)"
          ]
        }
      },
      "layout": {
        "labels": {
          "us": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 463.599609375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 438.85693359375,
                "top": 515.689453125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u540c\u6bd4 +13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 231.7998046875,
                "top": 502.2939453125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "\u7f8e\u56fd",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ],
                "lineGap": 10.41796875
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 867.2958984375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 438.85693359375,
                "top": 919.3857421875,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u540c\u6bd4 +28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 231.7998046875,
                "top": 909.89697265625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "\u56fd\u9645",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ],
                "lineGap": 10.41796875
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 906.36328125,
                "top": 546.943359375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "\u6536\u5165",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 906.36328125,
                "top": 596.4287109375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 906.36328125,
                "top": 648.5185546875,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u540c\u6bd4 +20%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1362.1494140625,
                "top": 420.62548828125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "\u6bdb\u5229\u6da6",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 1362.1494140625,
                "top": 470.11083984375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 1362.1494140625,
                "top": 522.20068359375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u5229\u6da6\u7387 76%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 1362.1494140625,
                "top": 559.9658203125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u540c\u6bd4 +0.5 \u4e2a\u767e\u5206\u70b9",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1372.5673828125,
                "top": 1126.44287109375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "\u6536\u5165\u6210\u672c",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 1372.5673828125,
                "top": 1225.41357421875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "lineGap": 10.41796875
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1659.712646484375,
                "top": 1084.77099609375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "\u8425\u4e1a\u4e8f\u635f",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 1659.712646484375,
                "top": 1134.25634765625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 1659.712646484375,
                "top": 1186.34619140625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u5229\u6da6\u7387 (0%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 1659.712646484375,
                "top": 1224.111328125,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u540c\u6bd4 +0.1 \u4e2a\u767e\u5206\u70b9",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1842.67822265625,
                "top": 540.43212890625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "\u8425\u4e1a\u8d39\u7528",
                    "size": 39.0673828125,
                    "weight": 700
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 1842.67822265625,
                "top": 639.40283203125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "lineGap": 10.41796875
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2478.17431640625,
                "top": 408.9052734375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "\u9500\u552e\u4e0e\u5e02\u573a",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 450.5771484375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 494.853515625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u5360\u6536\u5165 25%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 532.61865234375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u540c\u6bd4 +2 \u4e2a\u767e\u5206\u70b9",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 2478.17431640625,
                "top": 675.86572265625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "\u4ea7\u54c1\u5f00\u53d1",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 717.53759765625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 761.81396484375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u5360\u6536\u5165 23%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 799.5791015625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u540c\u6bd4 (1 \u4e2a\u767e\u5206\u70b9)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              }
            ]
          },
          "support": {
            "blocks": [
              {
                "x": 2478.17431640625,
                "top": 946.73291015625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "\u5ba2\u670d\u652f\u6301",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 988.40478515625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 1032.68115234375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u5360\u6536\u5165 16%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 1070.4462890625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u540c\u6bd4 +0 \u4e2a\u767e\u5206\u70b9",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2478.17431640625,
                "top": 1200.6708984375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "\u7ba1\u7406\u8d39\u7528",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 1242.3427734375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 1286.619140625,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u5360\u6536\u5165 13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              },
              {
                "x": 2478.17431640625,
                "top": 1324.38427734375,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "\u540c\u6bd4 (1 \u4e2a\u767e\u5206\u70b9)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 10.41796875
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"24.74267578125\" y=\"1201.97314453125\" width=\"306.02783203125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#ff375b\"/><text x=\"177.756591796875\" y=\"1255.365234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#fff\">\u9884\u8ba2\u95f4\u591c\u6570</text><text data-operating-metric=\"nights_booked\" x=\"177.756591796875\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#fff\">121M</text><text x=\"177.756591796875\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\">\u540c\u6bd4 +19%</text><rect x=\"339.88623046875\" y=\"1201.97314453125\" width=\"144.54931640625\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#ff375b\"/><text x=\"412.160888671875\" y=\"1255.365234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#fff\">GBV</text><text data-operating-metric=\"gbv\" x=\"412.160888671875\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#fff\">$20.4B</text><text x=\"412.160888671875\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\">\u540c\u6bd4 +19%</text><rect x=\"493.55126953125\" y=\"1201.97314453125\" width=\"418.02099609375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#ff375b\"/><text x=\"702.561767578125\" y=\"1255.365234375\" text-anchor=\"middle\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"#fff\">\u957f\u671f\u4f4f\u5bbf\uff0828\u5929\u4ee5\u4e0a\uff09</text><text data-operating-metric=\"long_stays\" x=\"702.561767578125\" y=\"1293.13037109375\" text-anchor=\"middle\" font-size=\"28.6494140625\" fill=\"#fff\">18%</text><text x=\"702.561767578125\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\">\u5360\u9884\u8ba2\u95f4\u591c\u6570</text><text x=\"423.22998046875\" y=\"1385.58984375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#777\">GBV = \u603b\u9884\u8ba2\u4ef7\u503c</text><text x=\"171.896484375\" y=\"1436.37744140625\" font-size=\"39.0673828125\" font-weight=\"700\">\u6765\u6e90\uff1a\u5b63\u5ea6\u4e1a\u7ee9</text></g>"
    }
  }
});
