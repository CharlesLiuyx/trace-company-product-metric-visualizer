(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-fy24",
  "name": "Starbucks · FY24",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks FY24 Income Statement",
    "period": "FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/starbucks-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 126,
    "titleWeight": 800,
    "periodX": 208,
    "periodY": 267,
    "periodNoteY": 311
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
      "value": 21.9,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "food",
      "type": "source",
      "label": "Food",
      "value": 6.7,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other",
      "value": 7.5,
      "notes": [
        "(2%) Y/Y",
        "Packaged beverages, royalty and",
        "licensing revenue, ingredients"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 36.2,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 9.7,
      "notes": [
        "27% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "product_distribution",
      "type": "cost",
      "label": [
        "Product &",
        "distribution"
      ],
      "value": 11.2,
      "notes": []
    },
    {
      "id": "store_opex",
      "type": "cost",
      "label": "Store opex",
      "value": 15.3,
      "notes": []
    },
    {
      "id": "other_income",
      "type": "profit",
      "label": "Other",
      "value": 0.3,
      "notes": []
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "label": "Operating profit",
      "value": 5.4,
      "notes": [
        "15% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 4.6,
      "notes": []
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 3.8,
      "notes": [
        "10% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 1.2,
      "notes": []
    },
    {
      "id": "other_expense",
      "type": "cost",
      "label": "Other",
      "value": 0.4,
      "notes": []
    },
    {
      "id": "ga",
      "type": "cost",
      "label": [
        "General &",
        "administrative"
      ],
      "value": 2.5,
      "notes": []
    },
    {
      "id": "depreciation_amortization",
      "type": "cost",
      "label": [
        "Depreciation &",
        "amortization"
      ],
      "value": 1.5,
      "notes": []
    },
    {
      "id": "other_opex",
      "type": "cost",
      "label": "Other opex",
      "value": 0.6,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "beverage",
      "target": "revenue",
      "value": 21.9,
      "sourceWidth": 216.1728515625,
      "targetWidth": 216.1728515625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 6.7,
      "sourceWidth": 66.41455078125,
      "targetWidth": 66.41455078125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 7.5,
      "sourceWidth": 74.22802734375,
      "targetWidth": 74.22802734375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9.7,
      "sourceWidth": 96.3662109375,
      "targetWidth": 96.3662109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "store_opex",
      "value": 15.3,
      "sourceWidth": 149.75830078125,
      "targetWidth": 149.75830078125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 11.2,
      "sourceWidth": 110.69091796875,
      "targetWidth": 109.388671875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 5.1,
      "sourceWidth": 50.78759765625,
      "targetWidth": 50.78759765625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.6,
      "sourceWidth": 45.57861328125,
      "targetWidth": 45.57861328125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 0.3,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3.8,
      "sourceWidth": 37.76513671875,
      "targetWidth": 37.76513671875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.2,
      "sourceWidth": 11.72021484375,
      "targetWidth": 11.72021484375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.4,
      "sourceWidth": 3.90673828125,
      "targetWidth": 3.90673828125,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 2.5,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 1.5,
      "sourceWidth": 15.626953125,
      "targetWidth": 14.32470703125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.6,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 388.0693359375,
        "y": 485.73779296875,
        "width": 72.92578125,
        "height": 216.1728515625
      },
      "food": {
        "x": 388.0693359375,
        "y": 862.0869140625,
        "width": 72.92578125,
        "height": 66.41455078125
      },
      "other_revenue": {
        "x": 388.0693359375,
        "y": 1089.97998046875,
        "width": 72.92578125,
        "height": 74.22802734375
      },
      "revenue": {
        "x": 852.97119140625,
        "y": 690.1904296875,
        "width": 72.92578125,
        "height": 356.8154296875
      },
      "gross_profit": {
        "x": 1321.77978515625,
        "y": 552.15234375,
        "width": 72.92578125,
        "height": 96.3662109375
      },
      "store_opex": {
        "x": 1321.77978515625,
        "y": 826.92626953125,
        "width": 72.92578125,
        "height": 149.75830078125
      },
      "product_distribution": {
        "x": 1324.38427734375,
        "y": 1058.72607421875,
        "width": 72.92578125,
        "height": 109.388671875
      },
      "other_income": {
        "x": 1655.15478515625,
        "y": 540.43212890625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "operating_profit": {
        "x": 1789.2861328125,
        "y": 432.345703125,
        "width": 72.92578125,
        "height": 53.39208984375
      },
      "operating_expenses": {
        "x": 1786.681640625,
        "y": 700.6083984375,
        "width": 72.92578125,
        "height": 45.57861328125
      },
      "net_profit": {
        "x": 2256.79248046875,
        "y": 302.12109375,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "tax": {
        "x": 2256.79248046875,
        "y": 526.107421875,
        "width": 72.92578125,
        "height": 11.72021484375
      },
      "other_expense": {
        "x": 2256.79248046875,
        "y": 662.84326171875,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "ga": {
        "x": 2256.79248046875,
        "y": 800.88134765625,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "depreciation_amortization": {
        "x": 2256.79248046875,
        "y": 1006.63623046875,
        "width": 72.92578125,
        "height": 14.32470703125
      },
      "other_opex": {
        "x": 2256.79248046875,
        "y": 1207.18212890625,
        "width": 72.92578125,
        "height": 5.208984375
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 421.927734375,
            "top": 385.46484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "+1% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 628.98486328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Beverage",
                "size": 37.76513671875,
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
            "x": 421.927734375,
            "top": 763.1162109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "+2% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 879.01611328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Food",
                "size": 37.76513671875,
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
            "x": 421.927734375,
            "top": 992.3115234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "(2%) Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 1092.58447265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00754a"
              },
              {
                "text": "Packaged beverages, royalty and",
                "size": 22.13818359375,
                "weight": 700,
                "color": "#00754a"
              },
              {
                "text": "licensing revenue, ingredients",
                "size": 22.13818359375,
                "weight": 400,
                "color": "#00754a"
              }
            ],
            "semanticRole": "reference-offset-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 886.82958984375,
            "top": 537.82763671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#00754a"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#00754a"
              },
              {
                "text": "+1% Y/Y",
                "size": 27.35,
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
            "x": 1359.544921875,
            "top": 363.32666015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "27% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.35,
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
            "x": 1825.7490234375,
            "top": 242.2177734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "15% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.35,
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
            "x": 2458.640625,
            "top": 247.4267578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "10% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.35,
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
            "x": 1692.919921875,
            "top": 556.05908203125,
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
            "x": 1519.72119140625,
            "top": 855.57568359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Store opex",
                "size": 35.16064453125,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 33.8583984375,
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
            "x": 1519.72119140625,
            "top": 1041.796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product &",
                "size": 35.16064453125,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "distribution",
                "size": 35.16064453125,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1825.7490234375,
            "top": 761.81396484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 35.16064453125,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "expenses",
                "size": 35.16064453125,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 33.8583984375,
                "weight": 400,
                "color": "#a31904"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 485.73779296875,
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
            "x": 2458.640625,
            "top": 626.38037109375,
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
            "x": 2458.640625,
            "top": 768.3251953125,
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
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 963.662109375,
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
      "other_opex": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 1166.8125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other opex",
                "size": 33.8583984375,
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
    },
    "scale": 9.8319580078125
  },
  "rasterAnnotations": [
    {
      "key": "starbucks-fy24-company-siren",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 772.23193359375,
      "y": 246.12451171875,
      "width": 225.28857421875,
      "height": 221.3818359375,
      "clearance": true
    },
    {
      "key": "starbucks-fy24-business-beverage",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 130.224609375,
      "y": 374.673828125,
      "width": 151.060546875,
      "height": 237.0087890625,
      "clearance": true
    },
    {
      "key": "starbucks-fy24-business-food",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 130.224609375,
      "y": 738.37353515625,
      "width": 152.36279296875,
      "height": 136.73583984375,
      "clearance": true
    },
    {
      "key": "starbucks-fy24-business-packaged-beverages",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 151.060546875,
      "y": 972.40478515625,
      "width": 113.29541015625,
      "height": 104.1796875,
      "clearance": true
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1207.18212890625\" width=\"272.16943359375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1207.18212890625\" width=\"378.95361328125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1207.18212890625\" width=\"420.62548828125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">Store count</text><text x=\"162.78076171875\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">40,199</text><text x=\"162.78076171875\" y=\"1330.8955078125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">+6% Y/Y</text><text x=\"501.36474609375\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">US Active Rewards</text><text x=\"450.5771484375\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">33.8M</text><text x=\"565.1748046875\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">members</text><text x=\"501.36474609375\" y=\"1330.8955078125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">+4% Y/Y</text><text x=\"836.0419921875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">Same Store Sale</text><text x=\"985.80029296875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">(</text><text x=\"1014.44970703125\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">2%</text><text x=\"1074.35302734375\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">) Y/Y</text><text x=\"826.92626953125\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Ticket</text><text x=\"925.89697265625\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+2%</text><text x=\"996.21826171875\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Y/Y</text><text x=\"823.01953125\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Transactions</text><text x=\"936.31494140625\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">(</text><text x=\"966.2666015625\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"transactions\">4%</text><text x=\"1041.796875\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">) Y/Y</text></g>",
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "40199",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "40,199"
    },
    {
      "id": "active_rewards",
      "value": "33800000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "33.8M"
    },
    {
      "id": "same_store_sale",
      "value": "2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "2%"
    },
    {
      "id": "ticket",
      "value": "2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+2%"
    },
    {
      "id": "transactions",
      "value": "4",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "4%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Starbucks · 2024 财年",
      "meta": {
        "title": "Starbucks 2024 财年利润表",
        "period": "2024 财年",
        "periodNote": "截至 2024 年 9 月",
        "titleSize": 108
      },
      "nodes": {
        "beverage": {
          "label": "饮品",
          "notes": [
            "同比 +1%"
          ]
        },
        "food": {
          "label": "食品",
          "notes": [
            "同比 +2%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 (2%)",
            "包装饮品、版税和",
            "授权收入、原料"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 27%",
            "同比 +1 个百分点"
          ]
        },
        "product_distribution": {
          "label": [
            "产品与",
            "分销"
          ],
          "notes": []
        },
        "store_opex": {
          "label": "门店运营费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 15%",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 10%",
            "同比 (1 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_expense": {
          "label": "其他",
          "notes": []
        },
        "ga": {
          "label": [
            "一般及",
            "行政"
          ],
          "notes": []
        },
        "depreciation_amortization": {
          "label": [
            "折旧与",
            "摊销"
          ],
          "notes": []
        },
        "other_opex": {
          "label": "其他运营费用",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "beverage": {
            "blocks": [
              {
                "x": 421.927734375,
                "top": 385.46484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00754a"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 628.98486328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "饮品",
                    "size": 37.76513671875,
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
                "x": 421.927734375,
                "top": 763.1162109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00754a"
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 879.01611328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "食品",
                    "size": 37.76513671875,
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
                "x": 421.927734375,
                "top": 992.3115234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00754a"
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 1092.58447265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#00754a"
                  },
                  {
                    "text": "包装饮品、版税和",
                    "size": 22.13818359375,
                    "weight": 700,
                    "color": "#00754a"
                  },
                  {
                    "text": "授权收入、原料",
                    "size": 22.13818359375,
                    "weight": 400,
                    "color": "#00754a"
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 886.82958984375,
                "top": 537.82763671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#00754a"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#00754a"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.35,
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
                "x": 1359.544921875,
                "top": 363.32666015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 27%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "product_distribution": {
            "blocks": [
              {
                "x": 1519.72119140625,
                "top": 1041.796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品与",
                    "size": 35.16064453125,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "分销",
                    "size": 35.16064453125,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": "#a31904"
                  }
                ]
              }
            ]
          },
          "store_opex": {
            "blocks": [
              {
                "x": 1519.72119140625,
                "top": 855.57568359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "门店运营费用",
                    "size": 35.16064453125,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": "#a31904"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 1692.919921875,
                "top": 556.05908203125,
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1825.7490234375,
                "top": 242.2177734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 15%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.35,
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
                "x": 1825.7490234375,
                "top": 761.81396484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 35.16064453125,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "费用",
                    "size": 35.16064453125,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 33.8583984375,
                    "weight": 400,
                    "color": "#a31904"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 247.4267578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 10%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.35,
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
                "x": 2458.640625,
                "top": 485.73779296875,
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
                "x": 2458.640625,
                "top": 626.38037109375,
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
                "x": 2458.640625,
                "top": 768.3251953125,
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
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 963.662109375,
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
          "other_opex": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 1166.8125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 33.8583984375,
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1207.18212890625\" width=\"272.16943359375\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1207.18212890625\" width=\"378.95361328125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1207.18212890625\" width=\"420.62548828125\" height=\"149.75830078125\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">门店数</text><text x=\"162.78076171875\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">40,199</text><text x=\"162.78076171875\" y=\"1330.8955078125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比 +6%</text><text x=\"501.36474609375\" y=\"1261.87646484375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">美国活跃奖励会员</text><text x=\"450.5771484375\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">33.8M</text><text x=\"565.1748046875\" y=\"1299.6416015625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">会员</text><text x=\"501.36474609375\" y=\"1330.8955078125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比 +4%</text><text x=\"836.0419921875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">同店销售额</text><text x=\"985.80029296875\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">(</text><text x=\"1014.44970703125\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">2%</text><text x=\"1074.35302734375\" y=\"1263.1787109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">) 同比</text><text x=\"826.92626953125\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">客单价</text><text x=\"925.89697265625\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+2%</text><text x=\"996.21826171875\" y=\"1297.037109375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比</text><text x=\"823.01953125\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">交易量</text><text x=\"936.31494140625\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">(</text><text x=\"966.2666015625\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"transactions\">4%</text><text x=\"1041.796875\" y=\"1328.291015625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">) 同比</text></g>"
    }
  }
});})();
