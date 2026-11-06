window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "intuitive-q1-fy23",
  "name": "Intuitive · Q1 FY23",
  "company": "Intuitive",
  "meta": {
    "company": "Intuitive",
    "title": "Intuitive Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/intuitive-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 122,
    "titleWeight": 800,
    "titleTextLength": 2260,
    "hidePeriodStamp": true
  },
  "nodes": [
    {
      "id": "instruments_accessories",
      "label": "Instruments & Accessories",
      "value": 986,
      "valueText": "$986M",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "systems",
      "label": "Systems",
      "value": 427,
      "valueText": "$427M",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(0%) Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 283,
      "valueText": "$283M",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1696,
      "valueText": "$1,696M",
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1113,
      "valueText": "$1,113M",
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "66% margin",
        "(9pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 583,
      "valueText": "($583M)",
      "type": "cost",
      "col": 2,
      "order": 5
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 388,
      "valueText": "$388M",
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "23% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 725,
      "valueText": "($725M)",
      "type": "cost",
      "col": 3,
      "order": 7
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 34,
      "valueText": "$34M",
      "type": "profit",
      "col": 4,
      "order": 8
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 361,
      "valueText": "$361M",
      "type": "profit",
      "col": 5,
      "order": 9,
      "notes": [
        "21% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 61,
      "valueText": "($61M)",
      "type": "cost",
      "col": 5,
      "order": 10
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 481,
      "valueText": "($481M)",
      "type": "cost",
      "col": 5,
      "order": 11
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 245,
      "valueText": "($245M)",
      "type": "cost",
      "col": 5,
      "order": 12
    },
    {
      "id": "product",
      "label": "Product",
      "value": 493,
      "valueText": "($493M)",
      "type": "cost",
      "col": 3,
      "order": 13
    },
    {
      "id": "service",
      "label": "Service",
      "value": 90,
      "valueText": "($90M)",
      "type": "cost",
      "col": 3,
      "order": 14
    }
  ],
  "links": [
    {
      "source": "instruments_accessories",
      "target": "revenue",
      "value": 986,
      "sourceWidth": 197.94140625,
      "targetWidth": 197.94140625,
      "y0": 649.82080078125,
      "y1": 811.29931640625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "systems",
      "target": "revenue",
      "value": 427,
      "sourceWidth": 85.9482421875,
      "targetWidth": 85.9482421875,
      "y0": 1000.125,
      "y1": 953.244140625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 283,
      "sourceWidth": 57.298828125,
      "targetWidth": 55.99658203125,
      "y0": 1278.8056640625,
      "y1": 1024.216552734375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1113,
      "sourceWidth": 223.986328125,
      "targetWidth": 223.986328125,
      "y0": 824.32177734375,
      "y1": 735.76904296875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 583,
      "sourceWidth": 115.89990234375,
      "targetWidth": 115.89990234375,
      "y0": 994.264892578125,
      "y1": 1063.283935546875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 388,
      "sourceWidth": 78.134765625,
      "targetWidth": 78.134765625,
      "y0": 662.84326171875,
      "y1": 563.87255859375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 725,
      "sourceWidth": 145.8515625,
      "targetWidth": 145.8515625,
      "y0": 774.83642578125,
      "y1": 851.6689453125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 327,
      "sourceWidth": 65.1123046875,
      "targetWidth": 66.41455078125,
      "y0": 557.361328125,
      "y1": 482.482177734375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 61,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375,
      "y0": 596.4287109375,
      "y1": 733.16455078125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 34,
      "sourceWidth": 6.51123046875,
      "targetWidth": 7.8134765625,
      "y0": 590.568603515625,
      "y1": 519.59619140625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 481,
      "sourceWidth": 97.66845703125,
      "targetWidth": 96.3662109375,
      "y0": 827.577392578125,
      "y1": 975.38232421875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 245,
      "sourceWidth": 48.18310546875,
      "targetWidth": 49.4853515625,
      "y0": 900.503173828125,
      "y1": 1203.275390625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "product",
      "value": 493,
      "sourceWidth": 98.970703125,
      "targetWidth": 98.970703125,
      "y0": 1054.8193359375,
      "y1": 1186.34619140625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "service",
      "value": 90,
      "sourceWidth": 16.92919921875,
      "targetWidth": 18.2314453125,
      "y0": 1112.769287109375,
      "y1": 1332.19775390625,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.2,
    "nodes": {
      "instruments_accessories": {
        "x": 449.27490234375,
        "y": 550.85009765625,
        "width": 71.62353515625,
        "height": 197.94140625
      },
      "systems": {
        "x": 449.27490234375,
        "y": 957.15087890625,
        "width": 71.62353515625,
        "height": 85.9482421875
      },
      "services": {
        "x": 449.27490234375,
        "y": 1250.15625,
        "width": 71.62353515625,
        "height": 57.298828125
      },
      "revenue": {
        "x": 915.47900390625,
        "y": 712.32861328125,
        "width": 72.92578125,
        "height": 339.88623046875
      },
      "gross_profit": {
        "x": 1382.9853515625,
        "y": 623.77587890625,
        "width": 72.92578125,
        "height": 223.986328125
      },
      "cost_of_revenue": {
        "x": 1382.9853515625,
        "y": 1005.333984375,
        "width": 71.62353515625,
        "height": 115.89990234375
      },
      "operating_profit": {
        "x": 1849.189453125,
        "y": 524.80517578125,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "operating_expenses": {
        "x": 1850.49169921875,
        "y": 778.7431640625,
        "width": 72.92578125,
        "height": 145.8515625
      },
      "other_income": {
        "x": 2147.40380859375,
        "y": 587.31298828125,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "net_profit": {
        "x": 2317.998046875,
        "y": 449.27490234375,
        "width": 71.62353515625,
        "height": 74.22802734375
      },
      "tax": {
        "x": 2317.998046875,
        "y": 726.6533203125,
        "width": 71.62353515625,
        "height": 13.0224609375
      },
      "sga": {
        "x": 2317.998046875,
        "y": 927.19921875,
        "width": 71.62353515625,
        "height": 96.3662109375
      },
      "rnd": {
        "x": 2317.998046875,
        "y": 1178.53271484375,
        "width": 71.62353515625,
        "height": 49.4853515625
      },
      "product": {
        "x": 1763.2412109375,
        "y": 1136.86083984375,
        "width": 72.92578125,
        "height": 98.970703125
      },
      "service": {
        "x": 1763.2412109375,
        "y": 1323.08203125,
        "width": 72.92578125,
        "height": 18.2314453125
      }
    },
    "labels": {
      "instruments_accessories": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 455.7861328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 497.4580078125,
            "top": 510.48046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 411.509765625,
            "top": 601.5287109375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Instruments",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "& Accessories",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "systems": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 859.482421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 497.4580078125,
            "top": 914.1767578125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "(0%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 411.509765625,
            "top": 976.6845703125,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Systems",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 1152.48779296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          },
          {
            "x": 497.4580078125,
            "top": 1207.18212890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 411.509765625,
            "top": 1255.2787109375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Services",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 954.54638671875,
            "top": 567.779296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 954.54638671875,
            "top": 617.2646484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#000000"
              }
            ]
          },
          {
            "x": 954.54638671875,
            "top": 669.3544921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "+14% Y/Y",
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
            "x": 1422.052734375,
            "top": 438.85693359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1422.052734375,
            "top": 488.34228515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1422.052734375,
            "top": 540.43212890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "66% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(9pp) Y/Y",
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
            "x": 1416.84375,
            "top": 1139.46533203125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1416.84375,
            "top": 1238.43603515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1890.861328125,
            "top": 342.49072265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1890.861328125,
            "top": 391.97607421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1890.861328125,
            "top": 444.06591796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "23% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 1886.95458984375,
            "top": 942.826171875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1886.95458984375,
            "top": 1041.796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2187.7734375,
            "top": 612.0556640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2187.7734375,
            "top": 653.7275390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 425.83447265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2513.3349609375,
            "top": 475.31982421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2513.3349609375,
            "top": 527.40966796875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "21% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
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
      "tax": {
        "blocks": [
          {
            "x": 2497.7080078125,
            "top": 707.11962890625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2497.7080078125,
            "top": 748.79150390625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2497.7080078125,
            "top": 938.91943359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2497.7080078125,
            "top": 980.59130859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2497.7080078125,
            "top": 1168.11474609375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2497.7080078125,
            "top": 1209.78662109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 1860.90966796875,
            "top": 1149.88330078125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Product",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1860.90966796875,
            "top": 1191.55517578125,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "service": {
        "blocks": [
          {
            "x": 1867.4208984375,
            "top": 1290.52587890625,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Service",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 1867.4208984375,
            "top": 1332.19775390625,
            "anchor": "start",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#858585",
      "hub": "#858585",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39,
      "value": 39,
      "note": 27,
      "lineGap": 10
    }
  },
  "rasterAnnotations": [
    {
      "key": "intuitive-company-wordmark",
      "href": "data/assets/raster-annotations/intuitive/intuitive-company-wordmark.png",
      "x": 703.212890625,
      "y": 322.95703125,
      "width": 520.8984375,
      "height": 165.38525390625
    },
    {
      "key": "intuitive-instruments-accessories-cluster",
      "href": "data/assets/raster-annotations/intuitive/intuitive-instruments-accessories-cluster.png",
      "x": 0.0,
      "y": 561.26806640625,
      "width": 151.060546875,
      "height": 145.8515625
    },
    {
      "key": "intuitive-systems-cluster",
      "href": "data/assets/raster-annotations/intuitive/intuitive-systems-cluster.png",
      "x": 0.0,
      "y": 877.7138671875,
      "width": 231.7998046875,
      "height": 235.70654296875
    }
  ],
  "i18n": {
    "zh": {
      "name": "直觉外科 · 2023 财年第一季度",
      "meta": {
        "title": "直觉外科 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "titleSize": 106,
        "titleTextLength": 1760
      },
      "nodes": {
        "instruments_accessories": {
          "label": "器械与配件",
          "notes": [
            "同比 +22%"
          ]
        },
        "systems": {
          "label": "系统",
          "notes": [
            "同比 (0%)"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +14%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +14%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 66%",
            "同比 (9 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 23%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "other_income": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 21%",
            "同比 (1 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "sga": {
          "label": "销售、一般及行政费用"
        },
        "rnd": {
          "label": "研发"
        },
        "product": {
          "label": "产品"
        },
        "service": {
          "label": "服务"
        }
      },
      "layout": {
        "labels": {
          "instruments_accessories": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 455.7861328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 497.4580078125,
                "top": 510.48046875,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                "x": 411.509765625,
                "top": 601.5287109375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "器械与",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "配件",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "systems": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 859.482421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 497.4580078125,
                "top": 914.1767578125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 (0%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 411.509765625,
                "top": 976.6845703125,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "系统",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 1152.48779296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 497.4580078125,
                "top": 1207.18212890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 411.509765625,
                "top": 1255.2787109375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 954.54638671875,
                "top": 567.779296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 954.54638671875,
                "top": 617.2646484375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 954.54638671875,
                "top": 669.3544921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "同比 +14%",
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
                "x": 1422.052734375,
                "top": 438.85693359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1422.052734375,
                "top": 488.34228515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1422.052734375,
                "top": 540.43212890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "利润率 66%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (9 个百分点)",
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
                "x": 1416.84375,
                "top": 1139.46533203125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1416.84375,
                "top": 1238.43603515625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1890.861328125,
                "top": 342.49072265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1890.861328125,
                "top": 391.97607421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1890.861328125,
                "top": 444.06591796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "利润率 23%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 1886.95458984375,
                "top": 942.826171875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1886.95458984375,
                "top": 1041.796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2187.7734375,
                "top": 612.0556640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2187.7734375,
                "top": 653.7275390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 425.83447265625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2513.3349609375,
                "top": 475.31982421875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2513.3349609375,
                "top": 527.40966796875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "利润率 21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
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
          "tax": {
            "blocks": [
              {
                "x": 2497.7080078125,
                "top": 707.11962890625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2497.7080078125,
                "top": 748.79150390625,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2497.7080078125,
                "top": 938.91943359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2497.7080078125,
                "top": 1022.26318359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2497.7080078125,
                "top": 1168.11474609375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2497.7080078125,
                "top": 1209.78662109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 1860.90966796875,
                "top": 1149.88330078125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "产品",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1860.90966796875,
                "top": 1191.55517578125,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "service": {
            "blocks": [
              {
                "x": 1867.4208984375,
                "top": 1290.52587890625,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "服务",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 1867.4208984375,
                "top": 1332.19775390625,
                "anchor": "start",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});
