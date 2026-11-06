(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "home-depot-q3-fy22",
  "name": "Home Depot · Q3 FY22",
  "company": "Home Depot",
  "meta": {
    "company": "Home Depot",
    "title": "The Home Depot Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "Ending October 2022",
    "periodX": 2381.80810546875,
    "periodY": 253.90624999999997,
    "periodNoteY": 298.1770833333333,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/home-depot-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 192.70833333333331,
    "titleSize": 109.375,
    "titleWeight": 800,
    "titleTextLength": 2500.3125
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#15527a",
    "subtitleColor": "#696969",
    "noteColor": "#696969",
    "palette": {
      "source": {
        "node": "#f47720",
        "label": "#f47720"
      },
      "hub": {
        "node": "#f47720",
        "label": "#f47720"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#00964d"
      },
      "cost": {
        "node": "#d60000",
        "label": "#9d1808"
      }
    },
    "linkTint": {
      "source": "#f1b58d",
      "hub": "#f1b58d",
      "profit": "#9ccd9a",
      "cost": "#df8284"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0625,
      "value": 39.0625,
      "note": 28.645833333333332,
      "lineGap": 9.114583333333332
    }
  },
  "nodes": [
    {
      "id": "building_materials",
      "label": "Building Materials",
      "value": 15.3,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+11% Y/Y",
        "Electrical/Lighting, Lumber, Millwork, and Plumbing"
      ]
    },
    {
      "id": "decor",
      "label": "Décor",
      "value": 13.1,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+2% Y/Y",
        "Appliances, Storage, Flooring, Kitchen and Bath, and Paint"
      ]
    },
    {
      "id": "hardlines",
      "label": "Hardlines",
      "value": 10.5,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+2% Y/Y",
        "Hardware, Indoor Garden, Outdoor Garden, and Tools"
      ]
    },
    {
      "id": "revenue",
      "label": "Net Sales",
      "value": 38.9,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 13.2,
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "34% margin",
        "Unchanged"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 25.6,
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 6.1,
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "16% margin",
        "Unchanged"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 7.1,
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 4.3,
      "type": "profit",
      "col": 4,
      "order": 8,
      "notes": [
        "11% margin",
        "Unchanged"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.4,
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": []
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 0.4,
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": []
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 6.5,
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": []
    },
    {
      "id": "da",
      "label": "Depreciation & amortization",
      "value": 0.6,
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "building_materials",
      "target": "revenue",
      "value": 15.3,
      "sourceWidth": 127.60416666666666,
      "targetWidth": 127.60416666666666,
      "y0": 587.2395833333333,
      "y1": 753.90625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "decor",
      "target": "revenue",
      "value": 13.1,
      "sourceWidth": 109.375,
      "targetWidth": 109.375,
      "y0": 867.1875,
      "y1": 872.3958333333333,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "hardlines",
      "target": "revenue",
      "value": 10.5,
      "sourceWidth": 88.54166666666666,
      "targetWidth": 85.9375,
      "y0": 1130.2083333333333,
      "y1": 970.0520833333333,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 13.2,
      "sourceWidth": 109.375,
      "targetWidth": 109.375,
      "y0": 744.7916666666666,
      "y1": 665.3645833333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ccd9a"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 25.6,
      "sourceWidth": 213.54166666666666,
      "targetWidth": 210.9375,
      "y0": 906.25,
      "y1": 985.6770833333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 6.1,
      "sourceWidth": 50.78125,
      "targetWidth": 50.78125,
      "y0": 636.0677083333333,
      "y1": 556.640625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ccd9a"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 7.1,
      "sourceWidth": 58.59375,
      "targetWidth": 58.59375,
      "y0": 690.7552083333333,
      "y1": 763.671875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 4.3,
      "sourceWidth": 35.15625,
      "targetWidth": 35.15625,
      "y0": 548.828125,
      "y1": 479.8177083333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ccd9a"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.4,
      "sourceWidth": 11.71875,
      "targetWidth": 11.71875,
      "y0": 572.265625,
      "y1": 694.6614583333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.4,
      "sourceWidth": 3.90625,
      "targetWidth": 2.6041666666666665,
      "y0": 580.078125,
      "y1": 809.8958333333333,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 6.5,
      "sourceWidth": 53.385416666666664,
      "targetWidth": 53.385416666666664,
      "y0": 761.0677083333333,
      "y1": 1017.5781249999999,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.6,
      "sourceWidth": 5.208333333333333,
      "targetWidth": 5.208333333333333,
      "y0": 790.3645833333333,
      "y1": 1200.5208333333333,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 8.333333333333334,
    "nodes": {
      "building_materials": {
        "x": 444.06591796875,
        "y": 523.4375,
        "width": 72.92578125,
        "height": 127.60416666666666
      },
      "decor": {
        "x": 444.06591796875,
        "y": 812.5,
        "width": 72.92578125,
        "height": 109.375
      },
      "hardlines": {
        "x": 444.06591796875,
        "y": 1085.9375,
        "width": 72.92578125,
        "height": 88.54166666666666
      },
      "revenue": {
        "x": 911.572265625,
        "y": 690.1041666666666,
        "width": 72.92578125,
        "height": 322.91666666666663
      },
      "gross_profit": {
        "x": 1381.68310546875,
        "y": 610.6770833333333,
        "width": 72.92578125,
        "height": 109.375
      },
      "cost_of_sales": {
        "x": 1382.9853515625,
        "y": 880.2083333333333,
        "width": 72.92578125,
        "height": 210.9375
      },
      "operating_profit": {
        "x": 1867.4208984375,
        "y": 531.25,
        "width": 72.92578125,
        "height": 50.78125
      },
      "operating_expenses": {
        "x": 1867.4208984375,
        "y": 734.375,
        "width": 72.92578125,
        "height": 58.59375
      },
      "net_profit": {
        "x": 2312.7890625,
        "y": 462.2395833333333,
        "width": 72.92578125,
        "height": 35.15625
      },
      "tax": {
        "x": 2312.7890625,
        "y": 688.8020833333333,
        "width": 72.92578125,
        "height": 11.71875
      },
      "interest": {
        "x": 2312.7890625,
        "y": 808.59375,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "sga": {
        "x": 2312.7890625,
        "y": 990.8854166666666,
        "width": 72.92578125,
        "height": 53.385416666666664
      },
      "da": {
        "x": 2310.1845703125,
        "y": 1197.9166666666665,
        "width": 72.92578125,
        "height": 5.208333333333333
      }
    },
    "labels": {
      "building_materials": {
        "blocks": [
          {
            "x": 483.13330078125,
            "top": 432.29166666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "color": "#f47720",
                "weight": 400
              }
            ]
          },
          {
            "x": 483.13330078125,
            "top": 483.07291666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "+11% Y/Y",
                "size": 27.34375,
                "color": "#696969",
                "weight": 400
              }
            ]
          },
          {
            "x": 222.68408203125,
            "top": 563.8020833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Building Materials",
                "size": 39.0625,
                "color": "#f47720",
                "weight": 800
              }
            ]
          },
          {
            "x": 222.68408203125,
            "top": 615.8854166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Electrical/Lighting, Lumber,",
                "size": 23.4375,
                "color": "#696969",
                "weight": 400
              },
              {
                "text": "Millwork, and Plumbing",
                "size": 23.4375,
                "color": "#696969",
                "weight": 400
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "decor": {
        "blocks": [
          {
            "x": 483.13330078125,
            "top": 720.0520833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "color": "#f47720",
                "weight": 400
              }
            ]
          },
          {
            "x": 483.13330078125,
            "top": 770.8333333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "+2% Y/Y",
                "size": 27.34375,
                "color": "#696969",
                "weight": 400
              }
            ]
          },
          {
            "x": 223.986328125,
            "top": 843.6645833333332,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Décor",
                "size": 39.0625,
                "color": "#f47720",
                "weight": 800
              }
            ]
          },
          {
            "x": 223.986328125,
            "top": 906.25,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Appliances, Storage, Flooring,",
                "size": 23.4375,
                "color": "#696969",
                "weight": 400
              },
              {
                "text": "Kitchen and Bath, and Paint",
                "size": 23.4375,
                "color": "#696969",
                "weight": 400
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "hardlines": {
        "blocks": [
          {
            "x": 483.13330078125,
            "top": 996.09375,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "color": "#f47720",
                "weight": 400
              }
            ]
          },
          {
            "x": 483.13330078125,
            "top": 1046.875,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "+2% Y/Y",
                "size": 27.34375,
                "color": "#696969",
                "weight": 400
              }
            ]
          },
          {
            "x": 226.5908203125,
            "top": 1106.6625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Hardlines",
                "size": 39.0625,
                "color": "#f47720",
                "weight": 800
              }
            ]
          },
          {
            "x": 226.5908203125,
            "top": 1154.9479166666665,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Hardware, Indoor Garden,",
                "size": 23.4375,
                "color": "#696969",
                "weight": 400
              },
              {
                "text": "Outdoor Garden, and Tools",
                "size": 23.4375,
                "color": "#696969",
                "weight": 400
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 948.03515625,
            "top": 545.5729166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Net Sales",
                "size": 39.0625,
                "color": "#f47720",
                "weight": 800
              }
            ]
          },
          {
            "x": 948.03515625,
            "top": 593.75,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "color": "#f47720",
                "weight": 400
              }
            ]
          },
          {
            "x": 948.03515625,
            "top": 641.9270833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "+6% Y/Y",
                "size": 28.645833333333332,
                "color": "#696969",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1418.14599609375,
            "top": 427.0833333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "color": "#00964d",
                "weight": 800
              }
            ]
          },
          {
            "x": 1418.14599609375,
            "top": 475.26041666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "color": "#00964d",
                "weight": 400
              }
            ]
          },
          {
            "x": 1418.14599609375,
            "top": 523.4375,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "34% margin",
                "size": 28.645833333333332,
                "color": "#696969",
                "weight": 400
              },
              {
                "text": "Unchanged",
                "size": 28.645833333333332,
                "color": "#696969",
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1418.14599609375,
            "top": 1110.6770833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 36.45833333333333,
                "color": "#9d1808",
                "weight": 800
              }
            ]
          },
          {
            "x": 1418.14599609375,
            "top": 1156.25,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 36.45833333333333,
                "color": "#9d1808",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1897.37255859375,
            "top": 350.26041666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0625,
                "color": "#00964d",
                "weight": 800
              }
            ]
          },
          {
            "x": 1897.37255859375,
            "top": 398.4375,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "color": "#00964d",
                "weight": 400
              }
            ]
          },
          {
            "x": 1897.37255859375,
            "top": 446.6145833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "16% margin",
                "size": 28.645833333333332,
                "color": "#696969",
                "weight": 400
              },
              {
                "text": "Unchanged",
                "size": 28.645833333333332,
                "color": "#696969",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1903.8837890625,
            "top": 813.8020833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating",
                "size": 36.45833333333333,
                "color": "#9d1808",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36.45833333333333,
                "color": "#9d1808",
                "weight": 800
              }
            ]
          },
          {
            "x": 1903.8837890625,
            "top": 904.9479166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 36.45833333333333,
                "color": "#9d1808",
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2496.40576171875,
            "top": 417.96875,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0625,
                "color": "#00964d",
                "weight": 800
              }
            ]
          },
          {
            "x": 2496.40576171875,
            "top": 466.1458333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "color": "#00964d",
                "weight": 400
              }
            ]
          },
          {
            "x": 2496.40576171875,
            "top": 514.3229166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "11% margin",
                "size": 28.645833333333332,
                "color": "#696969",
                "weight": 400
              },
              {
                "text": "Unchanged",
                "size": 28.645833333333332,
                "color": "#696969",
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2496.40576171875,
            "top": 666.6666666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "color": "#9d1808",
                "weight": 800
              }
            ]
          },
          {
            "x": 2496.40576171875,
            "top": 707.03125,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "color": "#9d1808",
                "weight": 400
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2496.40576171875,
            "top": 787.7604166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Interest",
                "size": 31.25,
                "color": "#9d1808",
                "weight": 800
              }
            ]
          },
          {
            "x": 2496.40576171875,
            "top": 828.125,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "color": "#9d1808",
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2496.40576171875,
            "top": 986.9791666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25,
                "color": "#9d1808",
                "weight": 800
              }
            ]
          },
          {
            "x": 2496.40576171875,
            "top": 1027.34375,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "color": "#9d1808",
                "weight": 400
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2500.3125,
            "top": 1139.3229166666665,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31.25,
                "color": "#9d1808",
                "weight": 800
              },
              {
                "text": "amortization",
                "size": 31.25,
                "color": "#9d1808",
                "weight": 800
              }
            ]
          },
          {
            "x": 2500.3125,
            "top": 1220.0520833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 31.25,
                "color": "#9d1808",
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g><rect x=\"32.55615234375\" y=\"1233.0729166666665\" width=\"276.076171875\" height=\"149.73958333333331\" rx=\"33.854166666666664\" fill=\"#f47720\"/><text x=\"170.59423828125\" y=\"1304.6875\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">Comparable sales</text><text data-operating-metric=\"comparable_sales\" x=\"149.75830078125\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">+3%</text><text x=\"205.7548828125\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">Y/Y</text></g><g><rect x=\"319.05029296875\" y=\"1233.0729166666665\" width=\"276.076171875\" height=\"149.73958333333331\" rx=\"33.854166666666664\" fill=\"#f47720\"/><text x=\"457.08837890625\" y=\"1273.4375\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">Customer</text><text x=\"457.08837890625\" y=\"1312.5\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">transactions</text><text data-operating-metric=\"customer_transactions\" x=\"436.25244140625\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">(4%)</text><text x=\"492.2490234375\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">Y/Y</text></g><g><rect x=\"605.54443359375\" y=\"1233.0729166666665\" width=\"276.076171875\" height=\"149.73958333333331\" rx=\"33.854166666666664\" fill=\"#f47720\"/><text x=\"743.58251953125\" y=\"1304.6875\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">Average ticket</text><text data-operating-metric=\"average_ticket\" x=\"722.74658203125\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">+9%</text><text x=\"778.7431640625\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">Y/Y</text></g><g><rect x=\"892.03857421875\" y=\"1233.0729166666665\" width=\"276.076171875\" height=\"149.73958333333331\" rx=\"33.854166666666664\" fill=\"#f47720\"/><text x=\"1030.07666015625\" y=\"1273.4375\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">Sales per retail</text><text x=\"1030.07666015625\" y=\"1312.5\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">square foot</text><text data-operating-metric=\"sales_per_retail_square_foot\" x=\"1009.24072265625\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">+5%</text><text x=\"1065.2373046875\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">Y/Y</text></g><text x=\"169.2919921875\" y=\"1437.5\" font-size=\"39.0625\" font-weight=\"800\">Source: Quarterly results</text>",
  "operatingMetrics": [
    {
      "id": "comparable_sales",
      "value": "3",
      "literal": "+3%",
      "unit": "%",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "customer_transactions",
      "value": "-4",
      "literal": "(4%)",
      "unit": "%",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "average_ticket",
      "value": "9",
      "literal": "+9%",
      "unit": "%",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "sales_per_retail_square_foot",
      "value": "5",
      "literal": "+5%",
      "unit": "%",
      "currency": null,
      "comparison": "eq"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "home-depot-company-logo",
      "href": "data/assets/raster-annotations/home-depot/company-logo-q3-fy25.png",
      "x": 795.67236328125,
      "y": 235.67708333333331,
      "width": 294.3076171875,
      "height": 294.2708333333333
    },
    {
      "key": "home-depot-building-icons",
      "href": "data/assets/raster-annotations/home-depot/building-materials-icons-q1-fy26.png",
      "x": 33.8583984375,
      "y": 442.7083333333333,
      "width": 354.2109375,
      "height": 115.88541666666666
    },
    {
      "key": "home-depot-decor-icons",
      "href": "data/assets/raster-annotations/home-depot/decor-icons-q1-fy26.png",
      "x": 80.7392578125,
      "y": 735.6770833333333,
      "width": 278.6806640625,
      "height": 93.75
    },
    {
      "key": "home-depot-hardlines-icons",
      "href": "data/assets/raster-annotations/home-depot/hardlines-icons-q1-fy26.png",
      "x": 118.50439453125,
      "y": 996.09375,
      "width": 220.07958984375,
      "height": 88.54166666666666
    }
  ],
  "i18n": {
    "zh": {
      "name": "家得宝 · 2022 财年第三季度",
      "meta": {
        "title": "家得宝 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 10 月",
        "titleTextLength": 1700
      },
      "nodes": {
        "building_materials": {
          "label": "建筑材料",
          "notes": [
            "同比 +11%",
            "电气／照明、木材、木制品和管道"
          ]
        },
        "decor": {
          "label": "家居装饰",
          "notes": [
            "同比 +2%",
            "电器、收纳、地板、厨房与卫浴及涂料"
          ]
        },
        "hardlines": {
          "label": "五金硬货",
          "notes": [
            "同比 +2%",
            "五金、室内园艺、户外园艺和工具"
          ]
        },
        "revenue": {
          "label": "净销售额",
          "notes": [
            "同比 +6%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 34%",
            "保持不变"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 16%",
            "保持不变"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 11%",
            "保持不变"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "sga": {
          "label": "销售、一般及行政费用",
          "notes": []
        },
        "da": {
          "label": "折旧及摊销",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "building_materials": {
            "blocks": [
              {
                "x": 483.13330078125,
                "top": 432.29166666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "color": "#f47720",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 483.13330078125,
                "top": 483.07291666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "同比 +11%",
                    "size": 27.34375,
                    "color": "#696969",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 222.68408203125,
                "top": 563.8020833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "建筑材料",
                    "size": 39.0625,
                    "color": "#f47720",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 222.68408203125,
                "top": 615.8854166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "电气／照明、木材、木制品",
                    "size": 23.4375,
                    "color": "#696969",
                    "weight": 400
                  },
                  {
                    "text": "和管道",
                    "size": 23.4375,
                    "color": "#696969",
                    "weight": 400
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "decor": {
            "blocks": [
              {
                "x": 483.13330078125,
                "top": 720.0520833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "color": "#f47720",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 483.13330078125,
                "top": 770.8333333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "同比 +2%",
                    "size": 27.34375,
                    "color": "#696969",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 223.986328125,
                "top": 843.6645833333332,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "家居装饰",
                    "size": 39.0625,
                    "color": "#f47720",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 223.986328125,
                "top": 906.25,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "电器、收纳、地板、厨房与",
                    "size": 23.4375,
                    "color": "#696969",
                    "weight": 400
                  },
                  {
                    "text": "卫浴及涂料",
                    "size": 23.4375,
                    "color": "#696969",
                    "weight": 400
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "hardlines": {
            "blocks": [
              {
                "x": 483.13330078125,
                "top": 996.09375,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "color": "#f47720",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 483.13330078125,
                "top": 1046.875,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "同比 +2%",
                    "size": 27.34375,
                    "color": "#696969",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 226.5908203125,
                "top": 1106.6625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "五金硬货",
                    "size": 39.0625,
                    "color": "#f47720",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 226.5908203125,
                "top": 1154.9479166666665,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "五金、室内园艺、户外园艺",
                    "size": 23.4375,
                    "color": "#696969",
                    "weight": 400
                  },
                  {
                    "text": "和工具",
                    "size": 23.4375,
                    "color": "#696969",
                    "weight": 400
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 948.03515625,
                "top": 545.5729166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "净销售额",
                    "size": 39.0625,
                    "color": "#f47720",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 948.03515625,
                "top": 593.75,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "color": "#f47720",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 948.03515625,
                "top": 641.9270833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "同比 +6%",
                    "size": 28.645833333333332,
                    "color": "#696969",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1418.14599609375,
                "top": 427.0833333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "color": "#00964d",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1418.14599609375,
                "top": 475.26041666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "color": "#00964d",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1418.14599609375,
                "top": 523.4375,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "利润率 34%",
                    "size": 28.645833333333332,
                    "color": "#696969",
                    "weight": 400
                  },
                  {
                    "text": "保持不变",
                    "size": 28.645833333333332,
                    "color": "#696969",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1418.14599609375,
                "top": 1110.6770833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 36.45833333333333,
                    "color": "#9d1808",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1418.14599609375,
                "top": 1156.25,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "color": "#9d1808",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1897.37255859375,
                "top": 350.26041666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0625,
                    "color": "#00964d",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1897.37255859375,
                "top": 398.4375,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "color": "#00964d",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1897.37255859375,
                "top": 446.6145833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "利润率 16%",
                    "size": 28.645833333333332,
                    "color": "#696969",
                    "weight": 400
                  },
                  {
                    "text": "保持不变",
                    "size": 28.645833333333332,
                    "color": "#696969",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1903.8837890625,
                "top": 813.8020833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 36.45833333333333,
                    "color": "#9d1808",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1903.8837890625,
                "top": 859.375,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "color": "#9d1808",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2496.40576171875,
                "top": 417.96875,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0625,
                    "color": "#00964d",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2496.40576171875,
                "top": 466.1458333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "color": "#00964d",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2496.40576171875,
                "top": 514.3229166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "利润率 11%",
                    "size": 28.645833333333332,
                    "color": "#696969",
                    "weight": 400
                  },
                  {
                    "text": "保持不变",
                    "size": 28.645833333333332,
                    "color": "#696969",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2496.40576171875,
                "top": 666.6666666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "color": "#9d1808",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2496.40576171875,
                "top": 707.03125,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "color": "#9d1808",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2496.40576171875,
                "top": 787.7604166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31.25,
                    "color": "#9d1808",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2496.40576171875,
                "top": 828.125,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "color": "#9d1808",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2496.40576171875,
                "top": 986.9791666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 31.25,
                    "color": "#9d1808",
                    "weight": 800
                  },
                  {
                    "text": "行政费用",
                    "size": 31.25,
                    "color": "#9d1808",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2496.40576171875,
                "top": 1067.7083333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "color": "#9d1808",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2500.3125,
                "top": 1139.3229166666665,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "折旧及摊销",
                    "size": 31.25,
                    "color": "#9d1808",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2500.3125,
                "top": 1179.6875,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 31.25,
                    "color": "#9d1808",
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"32.55615234375\" y=\"1233.0729166666665\" width=\"276.076171875\" height=\"149.73958333333331\" rx=\"33.854166666666664\" fill=\"#f47720\"/><text x=\"170.59423828125\" y=\"1304.6875\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">同店销售</text><text data-operating-metric=\"comparable_sales\" x=\"149.75830078125\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">+3%</text><text x=\"205.7548828125\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">同比</text></g><g><rect x=\"319.05029296875\" y=\"1233.0729166666665\" width=\"276.076171875\" height=\"149.73958333333331\" rx=\"33.854166666666664\" fill=\"#f47720\"/><text x=\"457.08837890625\" y=\"1273.4375\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">客户</text><text x=\"457.08837890625\" y=\"1312.5\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">交易</text><text data-operating-metric=\"customer_transactions\" x=\"436.25244140625\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">(4%)</text><text x=\"492.2490234375\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">同比</text></g><g><rect x=\"605.54443359375\" y=\"1233.0729166666665\" width=\"276.076171875\" height=\"149.73958333333331\" rx=\"33.854166666666664\" fill=\"#f47720\"/><text x=\"743.58251953125\" y=\"1304.6875\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">平均客单价</text><text data-operating-metric=\"average_ticket\" x=\"722.74658203125\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">+9%</text><text x=\"778.7431640625\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">同比</text></g><g><rect x=\"892.03857421875\" y=\"1233.0729166666665\" width=\"276.076171875\" height=\"149.73958333333331\" rx=\"33.854166666666664\" fill=\"#f47720\"/><text x=\"1030.07666015625\" y=\"1273.4375\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">每平方英尺</text><text x=\"1030.07666015625\" y=\"1312.5\" text-anchor=\"middle\" fill=\"white\" font-size=\"28.645833333333332\" font-weight=\"800\">零售销售额</text><text data-operating-metric=\"sales_per_retail_square_foot\" x=\"1009.24072265625\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">+5%</text><text x=\"1065.2373046875\" y=\"1356.7708333333333\" text-anchor=\"middle\" fill=\"white\" font-size=\"22.135416666666664\">同比</text></g><text x=\"169.2919921875\" y=\"1437.5\" font-size=\"39.0625\" font-weight=\"800\">来源：季度业绩</text>"
    }
  }
});})();
