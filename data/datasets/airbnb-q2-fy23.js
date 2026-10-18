window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "airbnb-q2-fy23",
  "name": "Airbnb · Q2 FY23",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/airbnb-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.21875,
    "titleSize": 122.39583333333333,
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
      "name": 30,
      "value": 29,
      "note": 21,
      "lineGap": 9.114583333333332
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "value": 1.2,
      "valueText": "$1.2B",
      "notes": [
        "+9% Y/Y"
      ],
      "col": 0,
      "order": 0,
      "type": "source"
    },
    {
      "id": "emea",
      "label": "EMEA",
      "value": 0.9,
      "valueText": "$0.9B",
      "notes": [
        "+29% Y/Y"
      ],
      "col": 0,
      "order": 1,
      "type": "source"
    },
    {
      "id": "latam",
      "label": "LATAM",
      "value": 0.2,
      "valueText": "$0.2B",
      "notes": [
        "+19% Y/Y"
      ],
      "col": 0,
      "order": 2,
      "type": "source"
    },
    {
      "id": "apac",
      "label": "APAC",
      "value": 0.2,
      "valueText": "$0.2B",
      "notes": [
        "+37% Y/Y"
      ],
      "col": 0,
      "order": 3,
      "type": "source"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 2.5,
      "valueText": "$2.5B",
      "notes": [
        "+18% Y/Y"
      ],
      "col": 1,
      "order": 4,
      "type": "hub"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.1,
      "valueText": "$2.1B",
      "notes": [
        "83% margin",
        "+1pp Y/Y"
      ],
      "col": 2,
      "order": 5,
      "type": "profit"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 0.4,
      "valueText": "($0.4B)",
      "notes": [],
      "col": 2,
      "order": 6,
      "type": "cost"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.5,
      "valueText": "$0.5B",
      "notes": [
        "21% margin",
        "+4pp Y/Y"
      ],
      "col": 3,
      "order": 7,
      "type": "profit"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.5,
      "valueText": "($1.5B)",
      "notes": [],
      "col": 3,
      "order": 8,
      "type": "cost"
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.2,
      "valueText": "$0.2B",
      "notes": [],
      "col": 4,
      "order": 9,
      "type": "profit"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.7,
      "valueText": "$0.7B",
      "notes": [
        "26% margin",
        "+8pp Y/Y"
      ],
      "col": 5,
      "order": 10,
      "type": "profit"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.026,
      "valueText": "($26M)",
      "notes": [],
      "col": 5,
      "order": 11,
      "type": "cost"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.5,
      "valueText": "($0.5B)",
      "notes": [
        "20% of revenue",
        "+2pp Y/Y"
      ],
      "col": 5,
      "order": 12,
      "type": "cost"
    },
    {
      "id": "product",
      "label": "Product",
      "value": 0.5,
      "valueText": "($0.5B)",
      "notes": [
        "18% of revenue",
        "+0pp Y/Y"
      ],
      "col": 5,
      "order": 13,
      "type": "cost"
    },
    {
      "id": "support",
      "label": "Support",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": [
        "13% of revenue",
        "+0pp Y/Y"
      ],
      "col": 5,
      "order": 14,
      "type": "cost"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": [
        "11% of revenue",
        "(0pp) Y/Y"
      ],
      "col": 5,
      "order": 15,
      "type": "cost"
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "revenue",
      "value": 1.2,
      "sourceWidth": 158.85416666666666,
      "targetWidth": 158.85416666666666,
      "y0": 506.51041666666663,
      "y1": 742.1875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f79dae"
    },
    {
      "source": "emea",
      "target": "revenue",
      "value": 0.9,
      "sourceWidth": 125,
      "targetWidth": 125,
      "y0": 779.9479166666666,
      "y1": 884.1145833333333,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f79dae"
    },
    {
      "source": "latam",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 20.833333333333332,
      "targetWidth": 20.833333333333332,
      "y0": 983.0729166666666,
      "y1": 957.03125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#f79dae"
    },
    {
      "source": "apac",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 24.739583333333332,
      "targetWidth": 26.041666666666664,
      "y0": 1145.1822916666665,
      "y1": 980.46875,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#f79dae"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.1,
      "sourceWidth": 273.4375,
      "targetWidth": 273.4375,
      "y0": 799.4791666666666,
      "y1": 721.3541666666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.4,
      "sourceWidth": 57.291666666666664,
      "targetWidth": 57.291666666666664,
      "y0": 964.84375,
      "y1": 1048.1770833333333,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.5,
      "sourceWidth": 70.3125,
      "targetWidth": 69.01041666666666,
      "y0": 619.7916666666666,
      "y1": 521.484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.5,
      "sourceWidth": 203.125,
      "targetWidth": 203.125,
      "y0": 756.5104166666666,
      "y1": 850.2604166666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.474,
      "sourceWidth": 66.40625,
      "targetWidth": 65.10416666666666,
      "y0": 520.1822916666666,
      "y1": 455.72916666666663,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.026,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "y0": 554.6875,
      "y1": 694.0104166666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 19.53125,
      "targetWidth": 19.53125,
      "y0": 560.546875,
      "y1": 498.046875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.5,
      "sourceWidth": 65.10416666666666,
      "targetWidth": 63.80208333333333,
      "y0": 781.25,
      "y1": 867.8385416666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.5,
      "sourceWidth": 59.89583333333333,
      "targetWidth": 59.89583333333333,
      "y0": 843.75,
      "y1": 1027.34375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 0.3,
      "sourceWidth": 41.666666666666664,
      "targetWidth": 41.666666666666664,
      "y0": 894.53125,
      "y1": 1174.4791666666665,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 36.45833333333333,
      "targetWidth": 36.45833333333333,
      "y0": 933.59375,
      "y1": 1324.21875,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 402.39404296875,
        "y": 427.0833333333333,
        "width": 71.62353515625,
        "height": 158.85416666666666
      },
      "emea": {
        "x": 402.39404296875,
        "y": 717.4479166666666,
        "width": 71.62353515625,
        "height": 125
      },
      "latam": {
        "x": 402.39404296875,
        "y": 972.65625,
        "width": 71.62353515625,
        "height": 20.833333333333332
      },
      "apac": {
        "x": 402.39404296875,
        "y": 1132.8125,
        "width": 71.62353515625,
        "height": 24.739583333333332
      },
      "revenue": {
        "x": 869.900390625,
        "y": 662.7604166666666,
        "width": 71.62353515625,
        "height": 330.72916666666663
      },
      "gross_profit": {
        "x": 1333.5,
        "y": 584.6354166666666,
        "width": 72.92578125,
        "height": 273.4375
      },
      "cost_of_revenue": {
        "x": 1341.3134765625,
        "y": 1019.5312499999999,
        "width": 72.92578125,
        "height": 57.291666666666664
      },
      "operating_profit": {
        "x": 1801.00634765625,
        "y": 486.97916666666663,
        "width": 72.92578125,
        "height": 69.01041666666666
      },
      "operating_expenses": {
        "x": 1806.21533203125,
        "y": 748.6979166666666,
        "width": 72.92578125,
        "height": 203.125
      },
      "other_income": {
        "x": 2140.892578125,
        "y": 550.78125,
        "width": 72.92578125,
        "height": 19.53125
      },
      "net_profit": {
        "x": 2271.1171875,
        "y": 423.1770833333333,
        "width": 71.62353515625,
        "height": 84.63541666666666
      },
      "tax": {
        "x": 2271.1171875,
        "y": 692.7083333333333,
        "width": 71.62353515625,
        "height": 2.6041666666666665
      },
      "sm": {
        "x": 2271.1171875,
        "y": 835.9375,
        "width": 71.62353515625,
        "height": 63.80208333333333
      },
      "product": {
        "x": 2271.1171875,
        "y": 997.3958333333333,
        "width": 71.62353515625,
        "height": 59.89583333333333
      },
      "support": {
        "x": 2271.1171875,
        "y": 1153.6458333333333,
        "width": 71.62353515625,
        "height": 41.666666666666664
      },
      "ga": {
        "x": 2271.1171875,
        "y": 1305.9895833333333,
        "width": 71.62353515625,
        "height": 36.45833333333333
      }
    },
    "labels": {
      "north_america": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 332.03125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 438.85693359375,
            "top": 386.71875,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+9% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 270.8671875,
            "top": 457.03125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "North",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "America",
                "size": 39.0625,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "emea": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 622.3958333333333,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 438.85693359375,
            "top": 677.0833333333333,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+29% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 270.8671875,
            "top": 755.2083333333333,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "EMEA",
                "size": 39.0625,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "latam": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 877.6041666666666,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 438.85693359375,
            "top": 932.2916666666666,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+19% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 270.8671875,
            "top": 958.3333333333333,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "LATAM",
                "size": 39.0625,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "apac": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 1037.7604166666665,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 438.85693359375,
            "top": 1092.4479166666665,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+37% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 270.8671875,
            "top": 1120.4427083333333,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "APAC",
                "size": 39.0625,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 906.36328125,
            "top": 515.625,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 906.36328125,
            "top": 569.0104166666666,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 906.36328125,
            "top": 619.7916666666666,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "+18% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1369.962890625,
            "top": 394.53125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 1369.962890625,
            "top": 447.91666666666663,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 1369.962890625,
            "top": 498.69791666666663,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "83% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1837.46923828125,
            "top": 299.47916666666663,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0625,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 1837.46923828125,
            "top": 352.8645833333333,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 1837.46923828125,
            "top": 403.6458333333333,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "21% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2457.33837890625,
            "top": 377.60416666666663,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2457.33837890625,
            "top": 430.9895833333333,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2457.33837890625,
            "top": 481.7708333333333,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "26% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+8pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1377.7763671875,
            "top": 1089.84375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Cost of",
                "size": 36.45833333333333,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 36.45833333333333,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 1377.7763671875,
            "top": 1192.7083333333333,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1842.67822265625,
            "top": 970.0520833333333,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Operating",
                "size": 36.45833333333333,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 36.45833333333333,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 1842.67822265625,
            "top": 1071.6145833333333,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2177.35546875,
            "top": 578.5208333333333,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2177.35546875,
            "top": 621.4895833333333,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 648.4375,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2461.2451171875,
            "top": 692.7083333333333,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 812.5,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "S&M",
                "size": 31.25,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2467.75634765625,
            "top": 851.5625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2467.75634765625,
            "top": 893.2291666666666,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "20% of revenue",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 957.03125,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Product",
                "size": 31.25,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2467.75634765625,
            "top": 996.09375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2467.75634765625,
            "top": 1037.7604166666665,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "18% of revenue",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "support": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 1101.5625,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "Support",
                "size": 31.25,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2467.75634765625,
            "top": 1140.625,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2467.75634765625,
            "top": 1182.2916666666665,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "13% of revenue",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2467.75634765625,
            "top": 1243.4895833333333,
            "anchor": "middle",
            "semanticRole": "name",
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 700
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2467.75634765625,
            "top": 1282.5520833333333,
            "anchor": "middle",
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              }
            ],
            "lineGap": 9.114583333333332
          },
          {
            "x": 2467.75634765625,
            "top": 1324.21875,
            "anchor": "middle",
            "semanticRole": "note",
            "lines": [
              {
                "text": "11% of revenue",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9.114583333333332
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "nights_booked",
      "value": "115100000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "115.1M"
    },
    {
      "id": "gbv",
      "value": "19.1",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$19.1B"
    },
    {
      "id": "long_term_stays",
      "value": "18",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "18%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb · 2023 财年第二季度",
      "meta": {
        "title": "Airbnb 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "titleSize": 113.28125
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 +9%"
          ]
        },
        "emea": {
          "label": "欧洲、中东和非洲",
          "notes": [
            "同比 +29%"
          ]
        },
        "latam": {
          "label": "拉美",
          "notes": [
            "同比 +19%"
          ]
        },
        "apac": {
          "label": "亚太",
          "notes": [
            "同比 +37%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +18%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 83%",
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
            "利润率 21%",
            "同比 +4 个百分点"
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
            "利润率 26%",
            "同比 +8 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 20%",
            "同比 +2 个百分点"
          ]
        },
        "product": {
          "label": "产品",
          "notes": [
            "占收入 18%",
            "同比 +0 个百分点"
          ]
        },
        "support": {
          "label": "客服支持",
          "notes": [
            "占收入 13%",
            "同比 +0 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "north_america": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 332.03125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 438.85693359375,
                "top": 386.71875,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +9%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 270.8671875,
                "top": 457.03125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "北",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "美",
                    "size": 39.0625,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "emea": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 622.3958333333333,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 438.85693359375,
                "top": 677.0833333333333,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +29%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 270.8671875,
                "top": 742.1875,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "欧洲、中东",
                    "size": 27.34375,
                    "weight": 700
                  },
                  {
                    "text": "和非洲",
                    "size": 27.34375,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "latam": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 877.6041666666666,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 438.85693359375,
                "top": 932.2916666666666,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +19%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 270.8671875,
                "top": 958.3333333333333,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "拉美",
                    "size": 39.0625,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "apac": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 1037.7604166666665,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 438.85693359375,
                "top": 1092.4479166666665,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +37%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 270.8671875,
                "top": 1120.4427083333333,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "亚太",
                    "size": 39.0625,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 906.36328125,
                "top": 515.625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 906.36328125,
                "top": 569.0104166666666,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 906.36328125,
                "top": 619.7916666666666,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "同比 +18%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1369.962890625,
                "top": 394.53125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 1369.962890625,
                "top": 447.91666666666663,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 1369.962890625,
                "top": 498.69791666666663,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 83%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1837.46923828125,
                "top": 299.47916666666663,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0625,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 1837.46923828125,
                "top": 352.8645833333333,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 1837.46923828125,
                "top": 403.6458333333333,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 21%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2457.33837890625,
                "top": 377.60416666666663,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2457.33837890625,
                "top": 430.9895833333333,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2457.33837890625,
                "top": 481.7708333333333,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "利润率 26%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +8 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1377.7763671875,
                "top": 1089.84375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.45833333333333,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 36.45833333333333,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 1377.7763671875,
                "top": 1192.7083333333333,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1842.67822265625,
                "top": 970.0520833333333,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.45833333333333,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 36.45833333333333,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 1842.67822265625,
                "top": 1071.6145833333333,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2177.35546875,
                "top": 578.5208333333333,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2177.35546875,
                "top": 621.4895833333333,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 648.4375,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2461.2451171875,
                "top": 692.7083333333333,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 812.5,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.25,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2467.75634765625,
                "top": 851.5625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2467.75634765625,
                "top": 893.2291666666666,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 20%",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 957.03125,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "产品",
                    "size": 31.25,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2467.75634765625,
                "top": 996.09375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2467.75634765625,
                "top": 1037.7604166666665,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 18%",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "support": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 1101.5625,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "客服支持",
                    "size": 31.25,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2467.75634765625,
                "top": 1140.625,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2467.75634765625,
                "top": 1182.2916666666665,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 13%",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2467.75634765625,
                "top": 1243.4895833333333,
                "anchor": "middle",
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25,
                    "weight": 700
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2467.75634765625,
                "top": 1282.5520833333333,
                "anchor": "middle",
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  }
                ],
                "lineGap": 9.114583333333332
              },
              {
                "x": 2467.75634765625,
                "top": 1324.21875,
                "anchor": "middle",
                "semanticRole": "note",
                "lines": [
                  {
                    "text": "占收入 11%",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9.114583333333332
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"24.74267578125\" y=\"1201.8229166666665\" width=\"304.7255859375\" height=\"149.73958333333331\" rx=\"29.947916666666664\" fill=\"#ff375b\"/><text x=\"177.10546875\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"28.645833333333332\" font-weight=\"700\" fill=\"#ffffff\">预订间夜数</text><text data-operating-metric=\"nights_booked\" x=\"177.10546875\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"29.947916666666664\" fill=\"#ffffff\">115.1M</text><text x=\"177.10546875\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">同比 +11%</text><rect x=\"339.88623046875\" y=\"1201.8229166666665\" width=\"144.54931640625\" height=\"149.73958333333331\" rx=\"29.947916666666664\" fill=\"#ff375b\"/><text x=\"412.160888671875\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"28.645833333333332\" font-weight=\"700\" fill=\"#ffffff\">GBV</text><text data-operating-metric=\"gbv\" x=\"412.160888671875\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"29.947916666666664\" fill=\"#ffffff\">$19.1B</text><text x=\"412.160888671875\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">同比 +13%</text><rect x=\"493.55126953125\" y=\"1201.8229166666665\" width=\"416.71875\" height=\"152.34375\" rx=\"29.947916666666664\" fill=\"#ff375b\"/><text x=\"701.91064453125\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"27.34375\" font-weight=\"700\" fill=\"#ffffff\">长期住宿（28+ 天）</text><text data-operating-metric=\"long_term_stays\" x=\"701.91064453125\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"29.947916666666664\" fill=\"#ffffff\">18%</text><text x=\"701.91064453125\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">占预订间夜数</text><text x=\"423.22998046875\" y=\"1385.4166666666665\" text-anchor=\"middle\" font-size=\"27.34375\" fill=\"#777777\">GBV = 总预订价值</text></g>"
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"24.74267578125\" y=\"1201.8229166666665\" width=\"304.7255859375\" height=\"149.73958333333331\" rx=\"29.947916666666664\" fill=\"#ff375b\"/><text x=\"177.10546875\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"28.645833333333332\" font-weight=\"700\" fill=\"#ffffff\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"177.10546875\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"29.947916666666664\" fill=\"#ffffff\">115.1M</text><text x=\"177.10546875\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">+11% Y/Y</text><rect x=\"339.88623046875\" y=\"1201.8229166666665\" width=\"144.54931640625\" height=\"149.73958333333331\" rx=\"29.947916666666664\" fill=\"#ff375b\"/><text x=\"412.160888671875\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"28.645833333333332\" font-weight=\"700\" fill=\"#ffffff\">GBV</text><text data-operating-metric=\"gbv\" x=\"412.160888671875\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"29.947916666666664\" fill=\"#ffffff\">$19.1B</text><text x=\"412.160888671875\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">+13% Y/Y</text><rect x=\"493.55126953125\" y=\"1201.8229166666665\" width=\"416.71875\" height=\"152.34375\" rx=\"29.947916666666664\" fill=\"#ff375b\"/><text x=\"701.91064453125\" y=\"1253.90625\" text-anchor=\"middle\" font-size=\"27.34375\" font-weight=\"700\" fill=\"#ffffff\">Long-term stays (28+ days)</text><text data-operating-metric=\"long_term_stays\" x=\"701.91064453125\" y=\"1292.96875\" text-anchor=\"middle\" font-size=\"29.947916666666664\" fill=\"#ffffff\">18%</text><text x=\"701.91064453125\" y=\"1326.8229166666665\" text-anchor=\"middle\" font-size=\"22.135416666666664\" fill=\"#ffffff\">of nights booked</text><text x=\"423.22998046875\" y=\"1385.4166666666665\" text-anchor=\"middle\" font-size=\"27.34375\" fill=\"#777777\">GBV = Gross Booking Value</text></g>",
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-logo.png",
      "x": 778.7431640625,
      "y": 236.97916666666666,
      "width": 261.75146484375,
      "height": 261.71875
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-north-america.png",
      "x": 72.92578125,
      "y": 468.75,
      "width": 95.06396484375,
      "height": 95.05208333333333
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-emea.png",
      "x": 76.83251953125,
      "y": 740.8854166666666,
      "width": 87.25048828125,
      "height": 85.9375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-latam.png",
      "x": 97.66845703125,
      "y": 938.8020833333333,
      "width": 72.92578125,
      "height": 76.82291666666666
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-apac.png",
      "x": 102.87744140625,
      "y": 1093.75,
      "width": 79.43701171875,
      "height": 87.23958333333333
    }
  ]
});
