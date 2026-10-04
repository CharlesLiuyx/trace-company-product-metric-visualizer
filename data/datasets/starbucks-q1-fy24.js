(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-q1-fy24",
  "name": "Starbucks · Q1 FY24",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks Q1 FY24 Income Statement",
    "period": "Q1 FY24",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/starbucks-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "periodX": 208.359375,
    "periodY": 269.56494140625,
    "periodNoteY": 312.5390625
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
      "value": 5.7,
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "food",
      "type": "source",
      "label": "Food",
      "value": 1.8,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other",
      "value": 2,
      "notes": [
        "+10% Y/Y",
        "Packaged beverages, royalty and",
        "licensing revenue, ingredients"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 9.4,
      "notes": [
        "+8% Y/Y",
        "Source rounded revenue components sum to $9.5B while reported revenue is $9.4B."
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 2.6,
      "notes": [
        "28% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "product_distribution",
      "type": "cost",
      "label": [
        "Product &",
        "distribution"
      ],
      "value": 3,
      "notes": []
    },
    {
      "id": "store_opex",
      "type": "cost",
      "label": "Store opex",
      "value": 3.9,
      "notes": []
    },
    {
      "id": "other_income",
      "type": "profit",
      "label": "Other",
      "value": 0.1,
      "notes": []
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "label": "Operating profit",
      "value": 1.5,
      "notes": [
        "16% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1.2,
      "notes": []
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 1,
      "notes": [
        "11% margin",
        "+1pp Y/Y",
        "Rounded operating profit less tax and other expense is $1.1B; source net profit is $1.0B."
      ]
    },
    {
      "id": "tax",
      "type": "cost",
      "label": "Tax",
      "value": 0.3,
      "notes": []
    },
    {
      "id": "other_expense",
      "type": "cost",
      "label": "Other",
      "value": 0.1,
      "notes": []
    },
    {
      "id": "ga",
      "type": "cost",
      "label": [
        "General &",
        "administrative"
      ],
      "value": 0.6,
      "notes": []
    },
    {
      "id": "depreciation_amortization",
      "type": "cost",
      "label": [
        "Depreciation &",
        "amortization"
      ],
      "value": 0.4,
      "notes": []
    },
    {
      "id": "other_opex",
      "type": "cost",
      "label": "Other opex",
      "value": 0.2,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "beverage",
      "target": "revenue",
      "value": 5.7,
      "sourceWidth": 270.8671875,
      "targetWidth": 270.8671875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 1.8,
      "sourceWidth": 83.34375,
      "targetWidth": 83.34375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 2,
      "sourceWidth": 93.76171875,
      "targetWidth": 95.06396484375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.6,
      "sourceWidth": 123.71337890625,
      "targetWidth": 123.71337890625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "store_opex",
      "value": 3.9,
      "sourceWidth": 183.61669921875,
      "targetWidth": 183.61669921875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 3,
      "sourceWidth": 141.94482421875,
      "targetWidth": 141.94482421875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.5,
      "sourceWidth": 67.716796875,
      "targetWidth": 67.716796875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.2,
      "sourceWidth": 55.99658203125,
      "targetWidth": 55.99658203125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 3.90673828125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1,
      "sourceWidth": 49.4853515625,
      "targetWidth": 48.18310546875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875,
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
      "sourceWidth": 31.25390625,
      "targetWidth": 31.25390625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.4,
      "sourceWidth": 16.92919921875,
      "targetWidth": 16.92919921875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.2,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 384.16259765625,
        "y": 445.3681640625,
        "width": 72.92578125,
        "height": 270.8671875
      },
      "food": {
        "x": 384.16259765625,
        "y": 868.59814453125,
        "width": 72.92578125,
        "height": 83.34375
      },
      "other_revenue": {
        "x": 384.16259765625,
        "y": 1106.9091796875,
        "width": 72.92578125,
        "height": 93.76171875
      },
      "revenue": {
        "x": 854.2734375,
        "y": 642.00732421875,
        "width": 72.92578125,
        "height": 449.27490234375
      },
      "gross_profit": {
        "x": 1319.17529296875,
        "y": 530.01416015625,
        "width": 72.92578125,
        "height": 123.71337890625
      },
      "store_opex": {
        "x": 1316.57080078125,
        "y": 834.73974609375,
        "width": 72.92578125,
        "height": 183.61669921875
      },
      "product_distribution": {
        "x": 1316.57080078125,
        "y": 1136.86083984375,
        "width": 72.92578125,
        "height": 141.94482421875
      },
      "other_income": {
        "x": 1666.875,
        "y": 559.9658203125,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "operating_profit": {
        "x": 1795.79736328125,
        "y": 431.04345703125,
        "width": 72.92578125,
        "height": 71.62353515625
      },
      "operating_expenses": {
        "x": 1795.79736328125,
        "y": 669.3544921875,
        "width": 72.92578125,
        "height": 55.99658203125
      },
      "net_profit": {
        "x": 2252.8857421875,
        "y": 330.7705078125,
        "width": 72.92578125,
        "height": 48.18310546875
      },
      "tax": {
        "x": 2252.8857421875,
        "y": 559.9658203125,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "other_expense": {
        "x": 2252.8857421875,
        "y": 698.00390625,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "ga": {
        "x": 2252.8857421875,
        "y": 823.01953125,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "depreciation_amortization": {
        "x": 2252.8857421875,
        "y": 1097.79345703125,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "other_opex": {
        "x": 2252.8857421875,
        "y": 1270.9921875,
        "width": 72.92578125,
        "height": 7.8134765625
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 421.927734375,
            "top": 350.30419921875,
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
                "text": "+10% Y/Y",
                "size": 27.34716796875,
                "weight": 700,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 631.58935546875,
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
            "top": 770.9296875,
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
                "text": "+12% Y/Y",
                "size": 27.34716796875,
                "weight": 700,
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
            "top": 1007.9384765625,
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
                "text": "+10% Y/Y",
                "size": 27.34716796875,
                "weight": 700,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 1093.88671875,
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
                "size": 21,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "licensing revenue, ingredients",
                "size": 21,
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
            "x": 890.736328125,
            "top": 496.15576171875,
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
            "x": 1354.3359375,
            "top": 342.49072265625,
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
                "text": "28% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1832.26025390625,
            "top": 246.12451171875,
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
                "text": "16% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
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
      "net_profit": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 303.42333984375,
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
                "text": "11% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
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
      "other_income": {
        "blocks": [
          {
            "x": 1703.337890625,
            "top": 575.5927734375,
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
            "x": 1523.6279296875,
            "top": 885.52734375,
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
            "x": 1523.6279296875,
            "top": 1147.27880859375,
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
            "x": 1832.26025390625,
            "top": 744.884765625,
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
            "x": 2461.2451171875,
            "top": 523.5029296875,
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
            "x": 2461.2451171875,
            "top": 660.23876953125,
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
            "x": 2470.36083984375,
            "top": 795.67236328125,
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
            "x": 2470.36083984375,
            "top": 1041.796875,
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
            "x": 2470.36083984375,
            "top": 1230.62255859375,
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
    }
  },
  "rasterAnnotations": [
    {
      "key": "starbucks-q1-fy24-company-siren",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 773.5341796875,
      "y": 240.91552734375,
      "width": 226.5908203125,
      "height": 226.5908203125
    },
    {
      "key": "starbucks-q1-fy24-business-beverage",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 130.224609375,
      "y": 390.673828125,
      "width": 149.75830078125,
      "height": 235.70654296875
    },
    {
      "key": "starbucks-q1-fy24-business-food",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 127.6201171875,
      "y": 739.67578125,
      "width": 156.26953125,
      "height": 138.0380859375
    },
    {
      "key": "starbucks-q1-fy24-business-packaged-beverages",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 151.060546875,
      "y": 989.70703125,
      "width": 110.69091796875,
      "height": 106.7841796875
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"311.23681640625\" y=\"1221.5068359375\" width=\"380.255859375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"704.51513671875\" y=\"1221.5068359375\" width=\"421.927734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1273.5966796875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\">Store count</text><text x=\"162.78076171875\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\" data-operating-metric=\"store_count\">38,587</text><text x=\"162.78076171875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\">+7% Y/Y</text><text x=\"501.36474609375\" y=\"1273.5966796875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\">US Active Rewards</text><text x=\"457.08837890625\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\" data-operating-metric=\"active_rewards\">34.3M</text><text x=\"582.10400390625\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\">members</text><text x=\"501.36474609375\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\">+13% Y/Y</text><text x=\"863.38916015625\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#fff\">Same Store Sale</text><text x=\"1004.03173828125\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\" data-operating-metric=\"same_store_sale\">+5%</text><text x=\"1056.12158203125\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">Y/Y</text><text x=\"856.8779296875\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">Ticket</text><text x=\"925.89697265625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\" data-operating-metric=\"ticket\">+2%</text><text x=\"1007.9384765625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">Y/Y</text><text x=\"856.8779296875\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">Transactions</text><text x=\"949.33740234375\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\" data-operating-metric=\"transactions\">+3%</text><text x=\"1031.37890625\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">Y/Y</text><text x=\"169.2919921875\" y=\"1436.37744140625\" font-size=\"39.0673828125\" font-weight=\"700\" fill=\"#000\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "38587",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "38,587"
    },
    {
      "id": "active_rewards",
      "value": "34300000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "34.3M"
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
      "value": "2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+2%"
    },
    {
      "id": "transactions",
      "value": "3",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+3%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Starbucks · 2024 财年第一季度",
      "meta": {
        "title": "Starbucks 2024 财年第一季度利润表",
        "period": "2024 财年第一季度",
        "periodNote": "截至 2023 年 12 月",
        "titleSize": 106.7841796875
      },
      "nodes": {
        "beverage": {
          "label": "饮品",
          "notes": [
            "同比 +10%"
          ]
        },
        "food": {
          "label": "食品",
          "notes": [
            "同比 +12%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +10%",
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
            "利润率 28%",
            "同比 +2 个百分点"
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
            "利润率 16%",
            "同比 +1 个百分点"
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
            "利润率 11%",
            "同比 +1 个百分点"
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
                "top": 350.30419921875,
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
                    "text": "同比 +10%",
                    "size": 27.34716796875,
                    "weight": 700,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 631.58935546875,
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
                "top": 770.9296875,
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
                    "text": "同比 +12%",
                    "size": 27.34716796875,
                    "weight": 700,
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
                "top": 1007.9384765625,
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
                    "text": "同比 +10%",
                    "size": 27.34716796875,
                    "weight": 700,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 1093.88671875,
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
                    "size": 21,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "授权收入、原料",
                    "size": 21,
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
                "x": 890.736328125,
                "top": 496.15576171875,
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
                "x": 1354.3359375,
                "top": 342.49072265625,
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
                    "text": "利润率 28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
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
          "product_distribution": {
            "blocks": [
              {
                "x": 1523.6279296875,
                "top": 1147.27880859375,
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
                "x": 1523.6279296875,
                "top": 885.52734375,
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
                "x": 1703.337890625,
                "top": 575.5927734375,
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
                "x": 1832.26025390625,
                "top": 246.12451171875,
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
                    "text": "利润率 16%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1832.26025390625,
                "top": 744.884765625,
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
                "x": 2461.2451171875,
                "top": 303.42333984375,
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
                    "text": "利润率 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
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
          "tax": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 523.5029296875,
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
                "x": 2461.2451171875,
                "top": 660.23876953125,
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
                "x": 2470.36083984375,
                "top": 795.67236328125,
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
                "x": 2470.36083984375,
                "top": 1041.796875,
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
                "x": 2470.36083984375,
                "top": 1230.62255859375,
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"311.23681640625\" y=\"1221.5068359375\" width=\"380.255859375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"704.51513671875\" y=\"1221.5068359375\" width=\"421.927734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1273.5966796875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\">门店数</text><text x=\"162.78076171875\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\" data-operating-metric=\"store_count\">38,587</text><text x=\"162.78076171875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\">同比 +7%</text><text x=\"501.36474609375\" y=\"1273.5966796875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\">美国活跃奖励会员</text><text x=\"457.08837890625\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\" data-operating-metric=\"active_rewards\">34.3M</text><text x=\"582.10400390625\" y=\"1312.6640625\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\">会员</text><text x=\"501.36474609375\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\">同比 +13%</text><text x=\"830.8330078125\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#fff\">同店销售额</text><text x=\"974.080078125\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\" data-operating-metric=\"same_store_sale\">+5%</text><text x=\"1056.12158203125\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">同比</text><text x=\"830.8330078125\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">客单价</text><text x=\"925.89697265625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\" data-operating-metric=\"ticket\">+2%</text><text x=\"1007.9384765625\" y=\"1311.36181640625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">同比</text><text x=\"830.8330078125\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">交易量</text><text x=\"949.33740234375\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#fff\" data-operating-metric=\"transactions\">+3%</text><text x=\"1031.37890625\" y=\"1342.61572265625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">同比</text><text x=\"169.2919921875\" y=\"1436.37744140625\" font-size=\"39.0673828125\" font-weight=\"700\" fill=\"#000\">来源：季度财报</text></g>"
    }
  }
});})();
