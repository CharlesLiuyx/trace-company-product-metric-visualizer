window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "electronic-arts-fy24",
  "name": "Electronic Arts · FY24",
  "company": "Electronic Arts",
  "meta": {
    "company": "Electronic Arts",
    "title": "Electronic Arts FY24 Income Statement",
    "period": "FY24",
    "periodNote": "Ending Mar. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/electronic-arts-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleY": 196.61458333333331,
    "titleSize": 122.4111328125,
    "titleTextLength": 2436.50244140625,
    "periodX": 2444.31591796875,
    "periodY": 263.0208333333333,
    "periodNoteY": 304.6875,
    "logoX": 602.93994140625,
    "logoY": 230.46875,
    "logoWidth": 230.49755859375,
    "logoHeight": 231.77083333333331
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155477",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#e92491",
        "label": "#ef2796"
      },
      "hub": {
        "node": "#9467bd",
        "label": "#9467bd"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#009456"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#991600"
      }
    },
    "type": {
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 28.6494140625,
      "lineGap": 10.41796875
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "console",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Console",
      "value": 4.6,
      "valueText": "$4.6B",
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "pc_other",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "PC & other",
      "value": 1.7,
      "valueText": "$1.7B",
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "mobile",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Mobile",
      "value": 1.2,
      "valueText": "$1.2B",
      "notes": [
        "(3%) Y/Y"
      ]
    },
    {
      "id": "revenue_platform",
      "col": 1,
      "order": 3,
      "type": "hub",
      "label": "Revenue",
      "value": 7.6,
      "valueText": "$7.6B",
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "live_services",
      "col": 2,
      "order": 4,
      "type": "hub",
      "label": "Live services",
      "value": 5.5,
      "valueText": "$5.5B",
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "full_games",
      "col": 2,
      "order": 5,
      "type": "hub",
      "label": "Full games",
      "value": 2.0,
      "valueText": "$2.0B",
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 3,
      "order": 6,
      "type": "hub",
      "label": "Revenue",
      "value": 7.6,
      "valueText": "$7.6B",
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 4,
      "order": 7,
      "type": "profit",
      "label": "Gross profit",
      "value": 5.9,
      "valueText": "$5.9B",
      "notes": [
        "77% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 1.7,
      "valueText": "($1.7B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 5,
      "order": 9,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.5,
      "valueText": "$1.5B",
      "notes": [
        "20% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "Operating expenses",
      "value": 4.3,
      "valueText": "($4.3B)",
      "notes": []
    },
    {
      "id": "interest",
      "col": 6,
      "order": 11,
      "type": "profit",
      "label": "Interest",
      "value": 0.1,
      "valueText": "$0.1B",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 7,
      "order": 12,
      "type": "profit",
      "label": "Net profit",
      "value": 1.3,
      "valueText": "$1.3B",
      "notes": [
        "17% margin",
        "+6pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 7,
      "order": 13,
      "type": "cost",
      "label": "Tax",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": []
    },
    {
      "id": "rnd",
      "col": 7,
      "order": 14,
      "type": "cost",
      "label": "R&D",
      "value": 2.4,
      "valueText": "($2.4B)",
      "notes": [
        "32% of revenue"
      ]
    },
    {
      "id": "sm",
      "col": 7,
      "order": 15,
      "type": "cost",
      "label": "S&M",
      "value": 1.0,
      "valueText": "($1.0B)",
      "notes": [
        "13% of revenue"
      ]
    },
    {
      "id": "ga",
      "col": 7,
      "order": 16,
      "type": "cost",
      "label": "G&A",
      "value": 0.7,
      "valueText": "($0.7B)",
      "notes": [
        "9% of revenue"
      ]
    },
    {
      "id": "amortization",
      "col": 7,
      "order": 17,
      "type": "cost",
      "label": "Amortization",
      "value": 0.1,
      "valueText": "($0.1B)",
      "notes": []
    },
    {
      "id": "restructuring",
      "col": 7,
      "order": 18,
      "type": "cost",
      "label": "Restructuring",
      "value": 0.1,
      "valueText": "($0.1B)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "console",
      "target": "revenue_platform",
      "value": 4.6,
      "sourceWidth": 192.70833333333331,
      "targetWidth": 192.70833333333331,
      "y0": 661.4583333333333,
      "y1": 782.5520833333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e998c4"
    },
    {
      "source": "pc_other",
      "target": "revenue_platform",
      "value": 1.7,
      "sourceWidth": 71.61458333333333,
      "targetWidth": 71.61458333333333,
      "y0": 908.203125,
      "y1": 914.7135416666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e998c4"
    },
    {
      "source": "mobile",
      "target": "revenue_platform",
      "value": 1.2,
      "sourceWidth": 50.78125,
      "targetWidth": 52.08333333333333,
      "y0": 1090.4947916666665,
      "y1": 976.5625,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#e998c4"
    },
    {
      "source": "revenue_platform",
      "target": "live_services",
      "value": 5.5,
      "sourceWidth": 231.77083333333331,
      "targetWidth": 231.77083333333331,
      "y0": 802.0833333333333,
      "y1": 697.9166666666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#c9b5d8"
    },
    {
      "source": "revenue_platform",
      "target": "full_games",
      "value": 2,
      "sourceWidth": 84.63541666666666,
      "targetWidth": 84.63541666666666,
      "y0": 960.2864583333333,
      "y1": 1113.9322916666665,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#c9b5d8"
    },
    {
      "source": "live_services",
      "target": "revenue",
      "value": 5.5,
      "sourceWidth": 231.77083333333331,
      "targetWidth": 231.77083333333331,
      "y0": 697.9166666666666,
      "y1": 802.0833333333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#c9b5d8"
    },
    {
      "source": "full_games",
      "target": "revenue",
      "value": 2,
      "sourceWidth": 84.63541666666666,
      "targetWidth": 84.63541666666666,
      "y0": 1113.9322916666665,
      "y1": 960.2864583333333,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#c9b5d8"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 5.9,
      "sourceWidth": 244.79166666666666,
      "targetWidth": 243.48958333333331,
      "y0": 808.59375,
      "y1": 731.1197916666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 1.7,
      "sourceWidth": 71.61458333333333,
      "targetWidth": 71.61458333333333,
      "y0": 966.796875,
      "y1": 1029.296875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.5,
      "sourceWidth": 62.5,
      "targetWidth": 63.80208333333333,
      "y0": 640.625,
      "y1": 524.0885416666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.3,
      "sourceWidth": 180.98958333333331,
      "targetWidth": 179.6875,
      "y0": 762.3697916666666,
      "y1": 850.2604166666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.3,
      "sourceWidth": 50.78125,
      "targetWidth": 50.78125,
      "y0": 517.578125,
      "y1": 421.2239583333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 13.020833333333332,
      "targetWidth": 13.020833333333332,
      "y0": 549.4791666666666,
      "y1": 669.2708333333333,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "y0": 522.1354166666666,
      "y1": 447.91666666666663,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.4,
      "sourceWidth": 100.26041666666666,
      "targetWidth": 101.5625,
      "y0": 810.546875,
      "y1": 871.09375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 1,
      "sourceWidth": 41.666666666666664,
      "targetWidth": 42.96875,
      "y0": 881.5104166666666,
      "y1": 1016.2760416666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.7,
      "sourceWidth": 29.947916666666664,
      "targetWidth": 29.947916666666664,
      "y0": 917.3177083333333,
      "y1": 1125.6510416666665,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.1,
      "sourceWidth": 5.208333333333333,
      "targetWidth": 6.510416666666666,
      "y0": 934.8958333333333,
      "y1": 1227.2135416666665,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.1,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "y0": 938.8020833333333,
      "y1": 1312.5,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 32,
    "nodes": {
      "console": {
        "x": 368.53564453125,
        "y": 565.1041666666666,
        "width": 72.92578125,
        "height": 192.70833333333331
      },
      "pc_other": {
        "x": 368.53564453125,
        "y": 872.3958333333333,
        "width": 72.92578125,
        "height": 71.61458333333333
      },
      "mobile": {
        "x": 368.53564453125,
        "y": 1065.1041666666665,
        "width": 72.92578125,
        "height": 50.78125
      },
      "revenue_platform": {
        "x": 679.7724609375,
        "y": 686.1979166666666,
        "width": 72.92578125,
        "height": 316.40625
      },
      "live_services": {
        "x": 991.00927734375,
        "y": 582.03125,
        "width": 72.92578125,
        "height": 231.77083333333331
      },
      "full_games": {
        "x": 991.00927734375,
        "y": 1071.6145833333333,
        "width": 72.92578125,
        "height": 84.63541666666666
      },
      "revenue": {
        "x": 1303.54833984375,
        "y": 686.1979166666666,
        "width": 72.92578125,
        "height": 316.40625
      },
      "gross_profit": {
        "x": 1612.1806640625,
        "y": 609.375,
        "width": 72.92578125,
        "height": 243.48958333333331
      },
      "cost_of_revenue": {
        "x": 1619.994140625,
        "y": 993.4895833333333,
        "width": 72.92578125,
        "height": 71.61458333333333
      },
      "operating_profit": {
        "x": 1926.02197265625,
        "y": 492.1875,
        "width": 72.92578125,
        "height": 63.80208333333333
      },
      "operating_expenses": {
        "x": 1926.02197265625,
        "y": 760.4166666666666,
        "width": 72.92578125,
        "height": 179.6875
      },
      "interest": {
        "x": 2133.0791015625,
        "y": 520.8333333333333,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "net_profit": {
        "x": 2237.2587890625,
        "y": 395.8333333333333,
        "width": 72.92578125,
        "height": 53.385416666666664
      },
      "tax": {
        "x": 2237.2587890625,
        "y": 662.7604166666666,
        "width": 72.92578125,
        "height": 13.020833333333332
      },
      "rnd": {
        "x": 2237.2587890625,
        "y": 820.3125,
        "width": 72.92578125,
        "height": 101.5625
      },
      "sm": {
        "x": 2237.2587890625,
        "y": 994.7916666666666,
        "width": 72.92578125,
        "height": 42.96875
      },
      "ga": {
        "x": 2237.2587890625,
        "y": 1110.6770833333333,
        "width": 72.92578125,
        "height": 29.947916666666664
      },
      "amortization": {
        "x": 2237.2587890625,
        "y": 1223.9583333333333,
        "width": 72.92578125,
        "height": 6.510416666666666
      },
      "restructuring": {
        "x": 2237.2587890625,
        "y": 1311.1979166666665,
        "width": 72.92578125,
        "height": 2.6041666666666665
      }
    },
    "labels": {
      "revenue_platform": {
        "blocks": [
          {
            "x": 716.2353515625,
            "top": 537.7604166666666,
            "anchor": "middle",
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 500
              },
              {
                "text": "+2% Y/Y",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "live_services": {
        "blocks": [
          {
            "x": 1027.47216796875,
            "top": 430.9895833333333,
            "anchor": "middle",
            "lines": [
              {
                "text": "Live services",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 500
              },
              {
                "text": "+1% Y/Y",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "full_games": {
        "blocks": [
          {
            "x": 1027.47216796875,
            "top": 1173.1770833333333,
            "anchor": "middle",
            "lines": [
              {
                "text": "Full games",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 500
              },
              {
                "text": "+4% Y/Y",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1340.01123046875,
            "top": 535.15625,
            "anchor": "middle",
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 500
              },
              {
                "text": "+2% Y/Y",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1648.6435546875,
            "top": 416.66666666666663,
            "anchor": "middle",
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 500
              },
              {
                "text": "77% margin",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1962.48486328125,
            "top": 299.47916666666663,
            "anchor": "middle",
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 500
              },
              {
                "text": "20% margin",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2435.2001953125,
            "top": 358.07291666666663,
            "anchor": "middle",
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 500
              },
              {
                "text": "17% margin",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              },
              {
                "text": "+6pp Y/Y",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "console": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 466.1458333333333,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 500
              },
              {
                "text": "+4% Y/Y",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 218.77734375,
            "top": 582.03125,
            "anchor": "middle",
            "lines": [
              {
                "text": "Console",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "pc_other": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 773.4375,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 500
              },
              {
                "text": "(1%) Y/Y",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 218.77734375,
            "top": 852.8645833333333,
            "anchor": "middle",
            "lines": [
              {
                "text": "PC & other",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "mobile": {
        "blocks": [
          {
            "x": 406.30078125,
            "top": 966.1458333333333,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 500
              },
              {
                "text": "(3%) Y/Y",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 218.77734375,
            "top": 1048.1770833333333,
            "anchor": "middle",
            "lines": [
              {
                "text": "Mobile",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1653.8525390625,
            "top": 1075.5208333333333,
            "anchor": "middle",
            "lines": [
              {
                "text": "Cost of",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 500
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1962.48486328125,
            "top": 949.21875,
            "anchor": "middle",
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 500
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2169.5419921875,
            "top": 529.9479166666666,
            "anchor": "middle",
            "lines": [
              {
                "text": "Interest",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 500
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2435.2001953125,
            "top": 621.09375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 500
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2448.22265625,
            "top": 1183.59375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Amortization",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 500
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2448.22265625,
            "top": 1285.15625,
            "anchor": "middle",
            "lines": [
              {
                "text": "Restructuring",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 500
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2441.71142578125,
            "top": 835.9375,
            "anchor": "middle",
            "lines": [
              {
                "text": "R&D $value",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "32% of revenue",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2441.71142578125,
            "top": 976.5625,
            "anchor": "middle",
            "lines": [
              {
                "text": "S&M $value",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "13% of revenue",
                "size": 28.6494140625,
                "weight": 500,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2441.71142578125,
            "top": 1091.1458333333333,
            "anchor": "middle",
            "lines": [
              {
                "text": "G&A $value",
                "size": 29.95166015625,
                "weight": 800
              },
              {
                "text": "9% of revenue",
                "size": 28.6494140625,
                "weight": 500,
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
      "id": "net_bookings",
      "value": "7.4",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$7.4B"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><rect x=\"141\" y=\"1014\" width=\"377\" height=\"57\" rx=\"20\" fill=\"#9467bd\"/><text x=\"179\" y=\"1051\" font-size=\"21\" fill=\"white\">Net bookings</text><text data-operating-metric=\"net_bookings\" x=\"326\" y=\"1051\" font-size=\"21\" fill=\"white\">$7.4B</text><text x=\"389\" y=\"1051\" font-size=\"21\" fill=\"white\">(+1% Y/Y)</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "Electronic Arts · 2024 财年",
      "meta": {
        "title": "Electronic Arts 2024 财年利润表",
        "period": "2024 财年",
        "periodNote": "截至 2024 年 3 月",
        "titleTextLength": 2278.9306640625
      },
      "nodes": {
        "console": {
          "label": "主机",
          "notes": [
            "同比 +4%"
          ]
        },
        "pc_other": {
          "label": "PC 及其他",
          "notes": [
            "同比 (1%)"
          ]
        },
        "mobile": {
          "label": "移动端",
          "notes": [
            "同比 (3%)"
          ]
        },
        "revenue_platform": {
          "label": "收入",
          "notes": [
            "同比 +2%"
          ]
        },
        "live_services": {
          "label": "在线服务",
          "notes": [
            "同比 +1%"
          ]
        },
        "full_games": {
          "label": "完整游戏",
          "notes": [
            "同比 +4%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +2%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 77%",
            "同比 +2 个百分点"
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
        "interest": {
          "label": "利息",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 17%",
            "同比 +6 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 32%"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 13%"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 9%"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": []
        },
        "restructuring": {
          "label": "重组费用",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "revenue_platform": {
            "blocks": [
              {
                "x": 716.2353515625,
                "top": 537.7604166666666,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 500
                  },
                  {
                    "text": "同比 +2%",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "live_services": {
            "blocks": [
              {
                "x": 1027.47216796875,
                "top": 430.9895833333333,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "在线服务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 500
                  },
                  {
                    "text": "同比 +1%",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "full_games": {
            "blocks": [
              {
                "x": 1027.47216796875,
                "top": 1173.1770833333333,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "完整游戏",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 500
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1340.01123046875,
                "top": 535.15625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 500
                  },
                  {
                    "text": "同比 +2%",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1648.6435546875,
                "top": 416.66666666666663,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 500
                  },
                  {
                    "text": "利润率 77%",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1962.48486328125,
                "top": 299.47916666666663,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 500
                  },
                  {
                    "text": "利润率 20%",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2435.2001953125,
                "top": 358.07291666666663,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 500
                  },
                  {
                    "text": "利润率 17%",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "console": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 466.1458333333333,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 500
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 218.77734375,
                "top": 582.03125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "主机",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "pc_other": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 773.4375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 500
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 218.77734375,
                "top": 852.8645833333333,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "PC 及其他",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "mobile": {
            "blocks": [
              {
                "x": 406.30078125,
                "top": 966.1458333333333,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 500
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 218.77734375,
                "top": 1048.1770833333333,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "移动端",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1653.8525390625,
                "top": 1075.5208333333333,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 500
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1962.48486328125,
                "top": 949.21875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 500
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2169.5419921875,
                "top": 529.9479166666666,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利息",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 500
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2435.2001953125,
                "top": 621.09375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 500
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2448.22265625,
                "top": 1183.59375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "摊销",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 500
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2448.22265625,
                "top": 1285.15625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 500
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2441.71142578125,
                "top": 835.9375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "研发 $value",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 32%",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2441.71142578125,
                "top": 976.5625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "销售与市场 $value",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 13%",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2441.71142578125,
                "top": 1091.1458333333333,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "一般及行政 $value",
                    "size": 29.95166015625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 9%",
                    "size": 28.6494140625,
                    "weight": 500,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><rect x=\"141\" y=\"1014\" width=\"377\" height=\"57\" rx=\"20\" fill=\"#9467bd\"/><text x=\"179\" y=\"1051\" font-size=\"21\" fill=\"white\">净预订额</text><text data-operating-metric=\"net_bookings\" x=\"326\" y=\"1051\" font-size=\"21\" fill=\"white\">$7.4B</text><text x=\"389\" y=\"1051\" font-size=\"21\" fill=\"white\">（同比 +1%）</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"800\">来源：季度业绩</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "ea-logo",
      "href": "data/assets/raster-annotations/electronic-arts/ea-logo.png",
      "x": 597.73095703125,
      "y": 225.26041666666666,
      "width": 240.91552734375,
      "height": 242.1875
    },
    {
      "key": "playstation",
      "href": "data/assets/raster-annotations/electronic-arts/playstation.png",
      "x": 74.22802734375,
      "y": 630.2083333333333,
      "width": 109.388671875,
      "height": 87.23958333333333
    },
    {
      "key": "xbox",
      "href": "data/assets/raster-annotations/electronic-arts/xbox.png",
      "x": 179.7099609375,
      "y": 634.1145833333333,
      "width": 84.64599609375,
      "height": 84.63541666666666
    },
    {
      "key": "switch",
      "href": "data/assets/raster-annotations/electronic-arts/switch.png",
      "x": 266.96044921875,
      "y": 634.1145833333333,
      "width": 87.25048828125,
      "height": 87.23958333333333
    },
    {
      "key": "steam",
      "href": "data/assets/raster-annotations/electronic-arts/steam.png",
      "x": 84.64599609375,
      "y": 899.7395833333333,
      "width": 80.7392578125,
      "height": 80.72916666666666
    },
    {
      "key": "origin",
      "href": "data/assets/raster-annotations/electronic-arts/origin.png",
      "x": 170.59423828125,
      "y": 910.15625,
      "width": 170.59423828125,
      "height": 65.10416666666666
    },
    {
      "key": "app-store",
      "href": "data/assets/raster-annotations/electronic-arts/app-store.png",
      "x": 130.224609375,
      "y": 1093.75,
      "width": 91.1572265625,
      "height": 92.44791666666666
    },
    {
      "key": "google-play",
      "href": "data/assets/raster-annotations/electronic-arts/google-play.png",
      "x": 235.70654296875,
      "y": 1095.0520833333333,
      "width": 83.34375,
      "height": 91.14583333333333
    }
  ]
});
