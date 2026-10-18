window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "airbnb-q4-fy22",
  "name": "Airbnb · Q4 FY22",
  "company": "Airbnb",
  "meta": {
    "company": "Airbnb",
    "title": "Airbnb Q4 FY22 Income Statement",
    "period": "Q4 FY22",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/airbnb-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 117.2021484375,
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
      "name": 36.462890625,
      "value": 36.462890625,
      "note": 26.044921875,
      "lineGap": 9.11572265625
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "label": "United States",
      "value": 0.9,
      "valueText": "$0.9B",
      "notes": [
        "+19% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "international",
      "label": "International",
      "value": 1,
      "valueText": "$1.0B",
      "notes": [
        "+30% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1.9,
      "valueText": "$1.9B",
      "notes": [
        "+24% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 2
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1.6,
      "valueText": "$1.6B",
      "notes": [
        "82% margin",
        "+1pp Y/Y"
      ],
      "type": "profit",
      "col": 1,
      "order": 3
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": [],
      "type": "cost",
      "col": 1,
      "order": 4
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.2,
      "valueText": "$0.2B",
      "notes": [
        "12% margin",
        "+5pp Y/Y"
      ],
      "type": "profit",
      "col": 1,
      "order": 5
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.3,
      "valueText": "($1.3B)",
      "notes": [],
      "type": "cost",
      "col": 1,
      "order": 6
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.1,
      "valueText": "$0.1B",
      "notes": [],
      "type": "profit",
      "col": 1,
      "order": 7
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.3,
      "valueText": "$0.3B",
      "notes": [
        "17% margin",
        "+4pp Y/Y"
      ],
      "type": "profit",
      "col": 1,
      "order": 8
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.025,
      "valueText": "($25M)",
      "notes": [],
      "type": "cost",
      "col": 1,
      "order": 9
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 0.4,
      "valueText": "($0.4B)",
      "notes": [
        "22% of revenue",
        "(1pp) Y/Y"
      ],
      "type": "cost",
      "col": 1,
      "order": 10
    },
    {
      "id": "product",
      "label": "Product dev.",
      "value": 0.4,
      "valueText": "($0.4B)",
      "notes": [
        "21% of revenue",
        "(3pp) Y/Y"
      ],
      "type": "cost",
      "col": 1,
      "order": 11
    },
    {
      "id": "support",
      "label": "Support",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": [
        "14% of revenue",
        "(1pp) Y/Y"
      ],
      "type": "cost",
      "col": 1,
      "order": 12
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": [
        "13% of revenue",
        "(1pp) Y/Y"
      ],
      "type": "cost",
      "col": 1,
      "order": 13
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 0.9,
      "sourceWidth": 151.060546875,
      "targetWidth": 152.36279296875,
      "y0": 635.49609375,
      "y1": 741.629150390625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f79dae"
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 1,
      "sourceWidth": 167.98974609375,
      "targetWidth": 166.6875,
      "y0": 968.219970703125,
      "y1": 901.154296875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f79dae"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.6,
      "sourceWidth": 261.75146484375,
      "targetWidth": 261.75146484375,
      "y0": 796.323486328125,
      "y1": 696.050537109375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.3,
      "sourceWidth": 57.298828125,
      "targetWidth": 58.60107421875,
      "y0": 955.8486328125,
      "y1": 1041.145751953125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.2,
      "sourceWidth": 40.36962890625,
      "targetWidth": 40.36962890625,
      "y0": 585.359619140625,
      "y1": 509.829345703125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.3,
      "sourceWidth": 221.3818359375,
      "targetWidth": 221.3818359375,
      "y0": 716.2353515625,
      "y1": 776.138671875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.175,
      "sourceWidth": 36.462890625,
      "targetWidth": 36.462890625,
      "y0": 507.8759765625,
      "y1": 394.58056640625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.025,
      "sourceWidth": 3.90673828125,
      "targetWidth": 2.6044921875,
      "y0": 528.060791015625,
      "y1": 610.75341796875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 18.2314453125,
      "targetWidth": 16.92919921875,
      "y0": 489.64453125,
      "y1": 421.276611328125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.4,
      "sourceWidth": 69.01904296875,
      "targetWidth": 69.01904296875,
      "y0": 699.957275390625,
      "y1": 776.789794921875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 0.4,
      "sourceWidth": 67.716796875,
      "targetWidth": 67.716796875,
      "y0": 768.3251953125,
      "y1": 953.244140625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "support",
      "value": 0.3,
      "sourceWidth": 44.2763671875,
      "targetWidth": 44.2763671875,
      "y0": 824.32177734375,
      "y1": 1123.83837890625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.3,
      "sourceWidth": 40.36962890625,
      "targetWidth": 42.97412109375,
      "y0": 866.644775390625,
      "y1": 1289.874755859375,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "united_states": {
        "x": 402.39404296875,
        "y": 559.9658203125,
        "width": 72.92578125,
        "height": 151.060546875
      },
      "international": {
        "x": 402.39404296875,
        "y": 884.22509765625,
        "width": 72.92578125,
        "height": 167.98974609375
      },
      "revenue": {
        "x": 869.900390625,
        "y": 665.44775390625,
        "width": 72.92578125,
        "height": 319.05029296875
      },
      "gross_profit": {
        "x": 1334.80224609375,
        "y": 565.1748046875,
        "width": 72.92578125,
        "height": 261.75146484375
      },
      "cost_of_revenue": {
        "x": 1337.40673828125,
        "y": 1011.84521484375,
        "width": 72.92578125,
        "height": 58.60107421875
      },
      "operating_profit": {
        "x": 1802.30859375,
        "y": 489.64453125,
        "width": 72.92578125,
        "height": 40.36962890625
      },
      "operating_expenses": {
        "x": 1802.30859375,
        "y": 665.44775390625,
        "width": 72.92578125,
        "height": 221.3818359375
      },
      "other_income": {
        "x": 2142.19482421875,
        "y": 480.52880859375,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "net_profit": {
        "x": 2271.1171875,
        "y": 376.34912109375,
        "width": 72.92578125,
        "height": 53.39208984375
      },
      "tax": {
        "x": 2271.1171875,
        "y": 609.451171875,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "sm": {
        "x": 2271.1171875,
        "y": 742.2802734375,
        "width": 72.92578125,
        "height": 69.01904296875
      },
      "product": {
        "x": 2271.1171875,
        "y": 919.3857421875,
        "width": 72.92578125,
        "height": 67.716796875
      },
      "support": {
        "x": 2271.1171875,
        "y": 1101.7001953125,
        "width": 72.92578125,
        "height": 44.2763671875
      },
      "ga": {
        "x": 2271.1171875,
        "y": 1268.3876953125,
        "width": 72.92578125,
        "height": 42.97412109375
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 459.69287109375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 438.85693359375,
            "top": 515.689453125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "+19% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 231.7998046875,
            "top": 554.7568359375,
            "anchor": "middle",
            "semanticRole": "top-aligned-side-label",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "United States",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 783.9521484375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 438.85693359375,
            "top": 839.94873046875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "+30% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 231.7998046875,
            "top": 879.01611328125,
            "anchor": "middle",
            "semanticRole": "top-aligned-side-label",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "International",
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
            "x": 906.36328125,
            "top": 516.99169921875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          },
          {
            "x": 906.36328125,
            "top": 569.08154296875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 906.36328125,
            "top": 621.17138671875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "+24% Y/Y",
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
            "x": 1371.26513671875,
            "top": 377.6513671875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          },
          {
            "x": 1371.26513671875,
            "top": 429.7412109375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 1371.26513671875,
            "top": 481.8310546875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "82% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1371.26513671875,
            "top": 519.59619140625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "+1pp Y/Y",
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
            "x": 1373.86962890625,
            "top": 1082.16650390625,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 35.16064453125,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 35.16064453125,
                "weight": 700
              }
            ]
          },
          {
            "x": 1373.86962890625,
            "top": 1183.74169921875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1838.771484375,
            "top": 302.12109375,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          },
          {
            "x": 1838.771484375,
            "top": 354.2109375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 1838.771484375,
            "top": 406.30078125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "12% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1838.771484375,
            "top": 444.06591796875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "+5pp Y/Y",
                "size": 26.044921875,
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
            "x": 1838.771484375,
            "top": 898.5498046875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 35.16064453125,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 35.16064453125,
                "weight": 700
              }
            ]
          },
          {
            "x": 1838.771484375,
            "top": 1000.125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2178.65771484375,
            "top": 506.57373046875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2178.65771484375,
            "top": 548.24560546875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
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
            "x": 2457.33837890625,
            "top": 380.255859375,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 36.462890625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 429.7412109375,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 484.435546875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "17% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 523.5029296875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "+4pp Y/Y",
                "size": 26.044921875,
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
            "x": 2457.33837890625,
            "top": 576.89501953125,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 618.56689453125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
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
      "sm": {
        "blocks": [
          {
            "x": 2457.33837890625,
            "top": 725.35107421875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 767.02294921875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 808.69482421875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "22% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 847.76220703125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "(1pp) Y/Y",
                "size": 26.044921875,
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
            "x": 2457.33837890625,
            "top": 895.9453125,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product dev.",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 937.6171875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 979.2890625,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "21% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 1018.3564453125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "(3pp) Y/Y",
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
            "x": 2457.33837890625,
            "top": 1066.53955078125,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Support",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 1108.21142578125,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 1149.88330078125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "14% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 1188.95068359375,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "(1pp) Y/Y",
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
            "x": 2457.33837890625,
            "top": 1235.83154296875,
            "anchor": "middle",
            "semanticRole": "name",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 29.95166015625,
                "weight": 700
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 1277.50341796875,
            "anchor": "middle",
            "semanticRole": "amount",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 1319.17529296875,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "13% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2457.33837890625,
            "top": 1358.24267578125,
            "anchor": "middle",
            "semanticRole": "note",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "(1pp) Y/Y",
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
  "operatingMetrics": [
    {
      "id": "nights_booked",
      "value": "88200000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "88.2M"
    },
    {
      "id": "gbv",
      "value": "13.5",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$13.5B"
    },
    {
      "id": "long_term_stays",
      "value": "21",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "21%"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"19\" y=\"923\" width=\"235\" height=\"115\" rx=\"25\" fill=\"#ff375b\"/><text x=\"136.5\" y=\"962\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"136.5\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">88.2M</text><text x=\"136.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">+20% Y/Y</text><rect x=\"261\" y=\"923\" width=\"111\" height=\"116\" rx=\"25\" fill=\"#ff375b\"/><text x=\"316.5\" y=\"962\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\">GBV</text><text data-operating-metric=\"gbv\" x=\"316.5\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">$13.5B</text><text x=\"316.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">+20% Y/Y</text><rect x=\"379\" y=\"923\" width=\"321\" height=\"117\" rx=\"25\" fill=\"#ff375b\"/><text x=\"539.5\" y=\"962\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"700\" fill=\"white\">Long-term stays (28+ days)</text><text data-operating-metric=\"long_term_stays\" x=\"539.5\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">21%</text><text x=\"539.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">of nights booked</text><text x=\"325\" y=\"1064\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">GBV = Gross Booking Value</text></g></g>",
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q2-fy26-logo.png",
      "x": 778.7431640625,
      "y": 237.0087890625,
      "width": 261.75146484375,
      "height": 261.75146484375
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q4-fy22-united-states.png",
      "x": 78.134765625,
      "y": 614.66015625,
      "width": 307.330078125,
      "height": 106.7841796875
    },
    {
      "src": "data/assets/raster-annotations/airbnb/airbnb-q4-fy22-international.png",
      "x": 82.04150390625,
      "y": 950.6396484375,
      "width": 304.7255859375,
      "height": 109.388671875
    }
  ],
  "i18n": {
    "zh": {
      "name": "Airbnb · 2022 财年第四季度",
      "meta": {
        "title": "Airbnb 2022 财年第四季度利润表",
        "period": "2022 财年第四季度"
      },
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +19%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +30%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +24%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 82%",
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
            "利润率 12%",
            "同比 +5 个百分点"
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
            "利润率 17%",
            "同比 +4 个百分点"
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
            "同比 (1 个百分点)"
          ]
        },
        "product": {
          "label": "产品开发",
          "notes": [
            "占收入 21%",
            "同比 (3 个百分点)"
          ]
        },
        "support": {
          "label": "客服支持",
          "notes": [
            "占收入 14%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 13%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 459.69287109375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 438.85693359375,
                "top": 515.689453125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "同比 +19%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 231.7998046875,
                "top": 554.7568359375,
                "anchor": "middle",
                "semanticRole": "top-aligned-side-label",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "美国",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 783.9521484375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 438.85693359375,
                "top": 839.94873046875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "同比 +30%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 231.7998046875,
                "top": 879.01611328125,
                "anchor": "middle",
                "semanticRole": "top-aligned-side-label",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "国际",
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
                "x": 906.36328125,
                "top": 516.99169921875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 906.36328125,
                "top": 569.08154296875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 906.36328125,
                "top": 621.17138671875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "同比 +24%",
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
                "x": 1371.26513671875,
                "top": 377.6513671875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1371.26513671875,
                "top": 429.7412109375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1371.26513671875,
                "top": 481.8310546875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利润率 82%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1371.26513671875,
                "top": 519.59619140625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1373.86962890625,
                "top": 1082.16650390625,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入成本",
                    "size": 35.16064453125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1373.86962890625,
                "top": 1183.74169921875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1838.771484375,
                "top": 302.12109375,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1838.771484375,
                "top": 354.2109375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1838.771484375,
                "top": 406.30078125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利润率 12%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1838.771484375,
                "top": 444.06591796875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "同比 +5 个百分点",
                    "size": 26.044921875,
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
                "x": 1838.771484375,
                "top": 898.5498046875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 35.16064453125,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 1838.771484375,
                "top": 1000.125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2178.65771484375,
                "top": 506.57373046875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2178.65771484375,
                "top": 548.24560546875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
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
                "x": 2457.33837890625,
                "top": 380.255859375,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36.462890625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 429.7412109375,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 484.435546875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利润率 17%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 523.5029296875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "同比 +4 个百分点",
                    "size": 26.044921875,
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
                "x": 2457.33837890625,
                "top": 576.89501953125,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 618.56689453125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
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
          "sm": {
            "blocks": [
              {
                "x": 2457.33837890625,
                "top": 725.35107421875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 767.02294921875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 808.69482421875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 22%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 847.76220703125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
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
          "product": {
            "blocks": [
              {
                "x": 2457.33837890625,
                "top": 895.9453125,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品开发",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 937.6171875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 979.2890625,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 21%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 1018.3564453125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
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
          "support": {
            "blocks": [
              {
                "x": 2457.33837890625,
                "top": 1066.53955078125,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "客服支持",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 1108.21142578125,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 1149.88330078125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 14%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 1188.95068359375,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
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
          "ga": {
            "blocks": [
              {
                "x": 2457.33837890625,
                "top": 1235.83154296875,
                "anchor": "middle",
                "semanticRole": "name",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 29.95166015625,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 1277.50341796875,
                "anchor": "middle",
                "semanticRole": "amount",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2457.33837890625,
                "top": 1319.17529296875,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
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
                "x": 2457.33837890625,
                "top": 1358.24267578125,
                "anchor": "middle",
                "semanticRole": "note",
                "lineGap": 9.11572265625,
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
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"19\" y=\"923\" width=\"235\" height=\"115\" rx=\"25\" fill=\"#ff375b\"/><text x=\"136.5\" y=\"962\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\">预订间夜数</text><text data-operating-metric=\"nights_booked\" x=\"136.5\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">88.2M</text><text x=\"136.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">同比 +20%</text><rect x=\"261\" y=\"923\" width=\"111\" height=\"116\" rx=\"25\" fill=\"#ff375b\"/><text x=\"316.5\" y=\"962\" text-anchor=\"middle\" font-size=\"21\" font-weight=\"700\" fill=\"white\">总预订价值</text><text data-operating-metric=\"gbv\" x=\"316.5\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">$13.5B</text><text x=\"316.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">同比 +20%</text><rect x=\"379\" y=\"923\" width=\"321\" height=\"117\" rx=\"25\" fill=\"#ff375b\"/><text x=\"539.5\" y=\"962\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"700\" fill=\"white\">长住（28+ 天）</text><text data-operating-metric=\"long_term_stays\" x=\"539.5\" y=\"993\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">21%</text><text x=\"539.5\" y=\"1019\" text-anchor=\"middle\" font-size=\"17\" fill=\"white\">占预订间夜数</text><text x=\"325\" y=\"1064\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">GBV = 总预订价值</text></g></g>"
    }
  }
});
