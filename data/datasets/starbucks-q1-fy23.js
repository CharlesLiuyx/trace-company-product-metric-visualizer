(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-q1-fy23",
  "name": "Starbucks · Q1 FY23",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "Ending Dec. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/starbucks-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195,
    "titleSize": 120,
    "titleWeight": 800,
    "periodX": 1715.05810546875,
    "periodY": 1414.2392578125,
    "periodNoteY": 1455.9111328125
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#00754a",
        "label": "#00754a"
      },
      "hub": {
        "node": "#00754a",
        "label": "#00754a"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d60000",
        "label": "#a31904"
      }
    },
    "linkTint": {
      "source": "#84b9a3",
      "hub": null,
      "profit": "#9acb98",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.0673828125,
      "value": 36.462890625,
      "note": 27.34716796875,
      "lineGap": 9.11572265625
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "beverage",
      "type": "source",
      "label": "Beverage",
      "value": 5.2,
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "food",
      "type": "source",
      "label": "Food",
      "value": 1.6,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other",
      "value": 1.9,
      "notes": [
        "+15% Y/Y",
        "Packaged beverages, royalty and",
        "licensing revenue, ingredients"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 8.7,
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 2.2,
      "notes": [
        "26% margin",
        "(0.9pp) Y/Y"
      ]
    },
    {
      "id": "product_distribution",
      "type": "cost",
      "label": [
        "Product &",
        "distribution"
      ],
      "value": 2.8
    },
    {
      "id": "store_opex",
      "type": "cost",
      "label": "Store opex",
      "value": 3.7
    },
    {
      "id": "other_income",
      "type": "profit",
      "label": "Other",
      "value": 0.1
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "label": "Operating profit",
      "value": 1.3,
      "notes": [
        "14% margin",
        "(0.2pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1.0,
      "valueText": "($1.0B)"
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 0.9,
      "notes": [
        "10% margin",
        "(0.3pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 0.3
    },
    {
      "id": "other_expense",
      "type": "cost",
      "label": "Other",
      "value": 0.1
    },
    {
      "id": "ga",
      "type": "cost",
      "label": [
        "General &",
        "administrative"
      ],
      "value": 0.6
    },
    {
      "id": "depreciation_amortization",
      "type": "cost",
      "label": [
        "Depreciation &",
        "amortization"
      ],
      "value": 0.3
    },
    {
      "id": "other_opex",
      "type": "cost",
      "label": "Other opex",
      "value": 0.1
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.006,
      "type": "cost",
      "valueText": "($6M)"
    }
  ],
  "links": [
    {
      "source": "beverage",
      "target": "revenue",
      "value": 5.2,
      "sourceWidth": 227.89306640625,
      "targetWidth": 227.89306640625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 1.6,
      "sourceWidth": 69.01904296875,
      "targetWidth": 69.01904296875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 1.9,
      "sourceWidth": 87.25048828125,
      "targetWidth": 85.9482421875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.2,
      "sourceWidth": 98.970703125,
      "targetWidth": 98.970703125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "store_opex",
      "value": 3.7,
      "sourceWidth": 161.478515625,
      "targetWidth": 161.478515625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 2.8,
      "sourceWidth": 122.4111328125,
      "targetWidth": 125.015625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.2,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.0,
      "sourceWidth": 46.880859375,
      "targetWidth": 45.57861328125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.9,
      "sourceWidth": 37.76513671875,
      "targetWidth": 37.76513671875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.6,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.3,
      "sourceWidth": 13.0224609375,
      "targetWidth": 14.32470703125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.1,
      "sourceWidth": 4.557861328125,
      "targetWidth": 5.208984375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.006,
      "sourceWidth": 1.953369140625,
      "targetWidth": 1.953369140625,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 388.0693359375,
        "y": 487.0400390625,
        "width": 72.92578125,
        "height": 227.89306640625
      },
      "food": {
        "x": 388.0693359375,
        "y": 867.2958984375,
        "width": 72.92578125,
        "height": 69.01904296875
      },
      "other_revenue": {
        "x": 388.0693359375,
        "y": 1074.35302734375,
        "width": 72.92578125,
        "height": 87.25048828125
      },
      "revenue": {
        "x": 855.57568359375,
        "y": 630.287109375,
        "width": 72.92578125,
        "height": 382.8603515625
      },
      "gross_profit": {
        "x": 1319.17529296875,
        "y": 492.2490234375,
        "width": 72.92578125,
        "height": 98.970703125
      },
      "store_opex": {
        "x": 1329.59326171875,
        "y": 808.69482421875,
        "width": 72.92578125,
        "height": 161.478515625
      },
      "product_distribution": {
        "x": 1334.80224609375,
        "y": 1058.72607421875,
        "width": 72.92578125,
        "height": 125.015625
      },
      "other_income": {
        "x": 1674.6884765625,
        "y": 552.15234375,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "operating_profit": {
        "x": 1794.4951171875,
        "y": 412.81201171875,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "operating_expenses": {
        "x": 1797.099609375,
        "y": 698.00390625,
        "width": 72.92578125,
        "height": 45.57861328125
      },
      "net_profit": {
        "x": 2256.79248046875,
        "y": 311.23681640625,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "tax": {
        "x": 2256.79248046875,
        "y": 587.31298828125,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "other_expense": {
        "x": 2256.79248046875,
        "y": 694.09716796875,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "ga": {
        "x": 2256.79248046875,
        "y": 859.482421875,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "depreciation_amortization": {
        "x": 2256.79248046875,
        "y": 1043.09912109375,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "other_opex": {
        "x": 2256.79248046875,
        "y": 1192.857421875,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "restructuring": {
        "x": 2256.79248046875,
        "y": 1336.1044921875,
        "width": 72.92578125,
        "height": 1.953369140625
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 382.8603515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#00754a"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 644.61181640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Beverage",
                "size": 36.462890625,
                "weight": 700,
                "color": "#00754a"
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "food": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 763.1162109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "+9% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#00754a"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 892.03857421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Food",
                "size": 36.462890625,
                "weight": 700,
                "color": "#00754a"
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 970.17333984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "+15% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#00754a"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 1097.79345703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 36.462890625,
                "weight": 700,
                "color": "#00754a"
              },
              {
                "text": "Packaged beverages, royalty and",
                "size": 22.13818359375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "licensing revenue, ingredients",
                "size": 22.13818359375,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 894.64306640625,
            "top": 487.0400390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.462890625,
                "weight": 700,
                "color": "#00754a"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "+8% Y/Y",
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
            "x": 1358.24267578125,
            "top": 311.23681640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 36.462890625,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "26% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0.9pp) Y/Y",
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
            "x": 1832.26025390625,
            "top": 231.7998046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 36.462890625,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "14% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0.2pp) Y/Y",
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
            "x": 2461.2451171875,
            "top": 281.28515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 36.462890625,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "10% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0.3pp) Y/Y",
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
            "x": 1711.1513671875,
            "top": 566.47705078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#008000"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#008000"
              }
            ]
          }
        ]
      },
      "store_opex": {
        "blocks": [
          {
            "x": 1521.0234375,
            "top": 854.2734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Store opex",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "product_distribution": {
        "blocks": [
          {
            "x": 1521.0234375,
            "top": 1061.33056640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "distribution",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 1832.26025390625,
            "top": 763.1162109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "expenses",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 2462.54736328125,
            "top": 561.26806640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2462.54736328125,
            "top": 657.63427734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 815.2060546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "administrative",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 994.916015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "amortization",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 1162.90576171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other opex",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2466.4541015625,
            "top": 1293.13037109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25390625,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "starbucks-q1-fy23-company-siren",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 783.9521484375,
      "y": 243.52001953125,
      "width": 223.986328125,
      "height": 223.986328125
    },
    {
      "key": "starbucks-q1-fy23-business-beverage",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 131.52685546875,
      "y": 402.39404296875,
      "width": 149.75830078125,
      "height": 234.404296875
    },
    {
      "key": "starbucks-q1-fy23-business-food",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 128.92236328125,
      "y": 750.09375,
      "width": 156.26953125,
      "height": 138.0380859375
    },
    {
      "key": "starbucks-q1-fy23-business-packaged-beverages",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 151.060546875,
      "y": 984.498046875,
      "width": 110.69091796875,
      "height": 106.7841796875
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"270.8671875\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1221.5068359375\" width=\"378.95361328125\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1221.5068359375\" width=\"419.3232421875\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">Store count</text><text x=\"162.78076171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">36,170</text><text x=\"162.78076171875\" y=\"1346.5224609375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">+5% Y/Y</text><text x=\"501.36474609375\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">US Active Rewards</text><text x=\"441.46142578125\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">30.4M</text><text x=\"561.26806640625\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">members</text><text x=\"501.36474609375\" y=\"1346.5224609375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">+15% Y/Y</text><text x=\"843.85546875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">Same Store Sale</text><text x=\"1001.42724609375\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">+5%</text><text x=\"1065.2373046875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Y/Y</text><text x=\"873.80712890625\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">Ticket</text><text x=\"950.6396484375\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+7%</text><text x=\"1018.3564453125\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">Y/Y</text><text x=\"860.78466796875\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">Transactions</text><text x=\"938.91943359375\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">(</text><text x=\"968.87109375\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"transactions\">2%</text><text x=\"1036.587890625\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">) Y/Y</text><text x=\"170\" y=\"1437\" font-size=\"36\" font-weight=\"700\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "36170",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "36,170"
    },
    {
      "id": "active_rewards",
      "value": "30400000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "30.4M"
    },
    {
      "id": "same_store_sale",
      "value": "5",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+5%"
    },
    {
      "id": "ticket",
      "value": "7",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+7%"
    },
    {
      "id": "transactions",
      "value": "2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "2%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Starbucks · 2023 财年第一季度",
      "meta": {
        "title": "Starbucks 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "periodNote": "截至 2022 年 12 月",
        "titleSize": 110
      },
      "nodes": {
        "beverage": {
          "label": "饮品",
          "notes": [
            "同比 +6%"
          ]
        },
        "food": {
          "label": "食品",
          "notes": [
            "同比 +9%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +15%",
            "包装饮品、版税和",
            "授权收入、原料"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +8%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 26%",
            "同比 (0.9 个百分点)"
          ]
        },
        "product_distribution": {
          "label": [
            "产品与",
            "分销"
          ]
        },
        "store_opex": {
          "label": "门店运营费用"
        },
        "other_income": {
          "label": "其他"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 14%",
            "同比 (0.2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 10%",
            "同比 (0.3 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other_expense": {
          "label": "其他"
        },
        "ga": {
          "label": [
            "一般及",
            "行政"
          ]
        },
        "depreciation_amortization": {
          "label": [
            "折旧与",
            "摊销"
          ]
        },
        "other_opex": {
          "label": "其他运营费用"
        },
        "restructuring": {
          "label": "重组"
        }
      },
      "layout": {
        "labels": {
          "beverage": {
            "blocks": [
              {
                "x": 424.5322265625,
                "top": 382.8603515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#00754a"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#00754a"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 644.61181640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "饮品",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#00754a"
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "food": {
            "blocks": [
              {
                "x": 424.5322265625,
                "top": 763.1162109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#00754a"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#00754a"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 892.03857421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "食品",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#00754a"
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 424.5322265625,
                "top": 970.17333984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#00754a"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#00754a"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 1097.79345703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#00754a"
                  },
                  {
                    "text": "包装饮品、版税和",
                    "size": 22.13818359375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "授权收入、原料",
                    "size": 22.13818359375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 894.64306640625,
                "top": 487.0400390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#00754a"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#00754a"
                  },
                  {
                    "text": "同比 +8%",
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
                "x": 1358.24267578125,
                "top": 311.23681640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 26%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0.9 个百分点)",
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
                "x": 1832.26025390625,
                "top": 231.7998046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0.2 个百分点)",
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
                "x": 2461.2451171875,
                "top": 281.28515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0.3 个百分点)",
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
                "x": 1711.1513671875,
                "top": 566.47705078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#008000"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#008000"
                  }
                ]
              }
            ]
          },
          "store_opex": {
            "blocks": [
              {
                "x": 1521.0234375,
                "top": 854.2734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "门店运营费用",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a31904"
                  }
                ]
              }
            ]
          },
          "product_distribution": {
            "blocks": [
              {
                "x": 1521.0234375,
                "top": 1061.33056640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品与",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "分销",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 1832.26025390625,
                "top": 763.1162109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "费用",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 2462.54736328125,
                "top": 561.26806640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a31904"
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2462.54736328125,
                "top": 657.63427734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a31904"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 815.2060546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "行政",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 994.916015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "摊销",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 1162.90576171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a31904"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2466.4541015625,
                "top": 1293.13037109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#a31904"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"270.8671875\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1221.5068359375\" width=\"378.95361328125\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1221.5068359375\" width=\"419.3232421875\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">门店数</text><text x=\"162.78076171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">36,170</text><text x=\"162.78076171875\" y=\"1346.5224609375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">同比 +5%</text><text x=\"501.36474609375\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">美国活跃奖励会员</text><text x=\"441.46142578125\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">30.4M</text><text x=\"561.26806640625\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">会员</text><text x=\"501.36474609375\" y=\"1346.5224609375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">同比 +15%</text><text x=\"843.85546875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">同店销售额</text><text x=\"1001.42724609375\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">+5%</text><text x=\"1065.2373046875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比</text><text x=\"873.80712890625\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">客单价</text><text x=\"950.6396484375\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+7%</text><text x=\"1018.3564453125\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">同比</text><text x=\"860.78466796875\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">交易量</text><text x=\"938.91943359375\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">(</text><text x=\"968.87109375\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\" data-operating-metric=\"transactions\">2%</text><text x=\"1036.587890625\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#ffffff\">) 同比</text><text x=\"170\" y=\"1437\" font-size=\"36\" font-weight=\"700\" fill=\"#000000\">来源：季度业绩</text></g>"
    }
  }
});})();
