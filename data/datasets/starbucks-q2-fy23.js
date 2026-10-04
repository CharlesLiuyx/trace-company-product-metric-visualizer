(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-q2-fy23",
  "name": "Starbucks · Q2 FY23",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/starbucks-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "periodX": 207.05712890625,
    "periodY": 269.56494140625,
    "periodNoteY": 311.23681640625
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
      "value": 5.2,
      "label": "Beverage",
      "type": "source",
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "food",
      "value": 1.6,
      "label": "Food",
      "type": "source",
      "notes": [
        "+17% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "value": 1.9,
      "label": "Other",
      "type": "source",
      "notes": [
        "+14% Y/Y",
        "Packaged beverages, royalty and",
        "licensing revenue, ingredients"
      ]
    },
    {
      "id": "revenue",
      "value": 8.7,
      "label": "Revenue",
      "type": "hub",
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "value": 2.3,
      "label": "Gross profit",
      "type": "profit",
      "notes": [
        "26% margin",
        "+1.9pp Y/Y"
      ]
    },
    {
      "id": "store_opex",
      "value": 3.6,
      "label": "Store opex",
      "type": "cost"
    },
    {
      "id": "product_distribution",
      "value": 2.8,
      "label": [
        "Product &",
        "distribution"
      ],
      "type": "cost"
    },
    {
      "id": "other_income",
      "value": 0.1,
      "label": "Other",
      "type": "profit"
    },
    {
      "id": "operating_profit",
      "value": 1.3,
      "label": "Operating profit",
      "type": "profit",
      "notes": [
        "15% margin",
        "+2.8pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "value": 1.1,
      "label": [
        "Operating",
        "expenses"
      ],
      "type": "cost"
    },
    {
      "id": "net_profit",
      "value": 0.9,
      "label": "Net profit",
      "type": "profit",
      "notes": [
        "10% margin",
        "+1.6pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "value": 0.3,
      "label": "Tax",
      "type": "cost"
    },
    {
      "id": "other_expense",
      "value": 0.1,
      "label": "Other",
      "type": "cost"
    },
    {
      "id": "ga",
      "value": 0.6,
      "label": [
        "General &",
        "administrative"
      ],
      "type": "cost"
    },
    {
      "id": "depreciation_amortization",
      "value": 0.3,
      "label": [
        "Depreciation &",
        "amortization"
      ],
      "type": "cost"
    },
    {
      "id": "other_opex",
      "value": 0.1,
      "label": "Other opex",
      "type": "cost"
    },
    {
      "id": "restructuring",
      "value": 0.009,
      "label": "Restructuring",
      "type": "cost",
      "valueText": "($9M)"
    }
  ],
  "links": [
    {
      "source": "beverage",
      "target": "revenue",
      "value": 5.2,
      "sourceWidth": 247.4267578125,
      "targetWidth": 247.4267578125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 1.6,
      "sourceWidth": 75.5302734375,
      "targetWidth": 75.5302734375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 1.9,
      "sourceWidth": 89.85498046875,
      "targetWidth": 89.85498046875,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.3,
      "sourceWidth": 108.08642578125,
      "targetWidth": 108.08642578125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "store_opex",
      "value": 3.6,
      "sourceWidth": 171.896484375,
      "targetWidth": 171.896484375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 2.8,
      "sourceWidth": 132.8291015625,
      "targetWidth": 131.52685546875,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.2,
      "sourceWidth": 55.99658203125,
      "targetWidth": 55.99658203125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.1,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.9,
      "sourceWidth": 42.97412109375,
      "targetWidth": 42.97412109375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 14.32470703125,
      "targetWidth": 13.0224609375,
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
      "sourceWidth": 29.95166015625,
      "targetWidth": 29.95166015625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 0.3,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.1,
      "sourceWidth": 3.90673828125,
      "targetWidth": 5.208984375,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.009,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 388.0693359375,
        "y": 444.06591796875,
        "width": 72.92578125,
        "height": 247.4267578125
      },
      "food": {
        "x": 388.0693359375,
        "y": 855.57568359375,
        "width": 72.92578125,
        "height": 75.5302734375
      },
      "other_revenue": {
        "x": 388.0693359375,
        "y": 1082.16650390625,
        "width": 72.92578125,
        "height": 89.85498046875
      },
      "revenue": {
        "x": 856.8779296875,
        "y": 645.9140625,
        "width": 72.92578125,
        "height": 412.81201171875
      },
      "gross_profit": {
        "x": 1311.36181640625,
        "y": 513.0849609375,
        "width": 72.92578125,
        "height": 108.08642578125
      },
      "store_opex": {
        "x": 1319.17529296875,
        "y": 828.228515625,
        "width": 72.92578125,
        "height": 171.896484375
      },
      "product_distribution": {
        "x": 1319.17529296875,
        "y": 1089.97998046875,
        "width": 72.92578125,
        "height": 131.52685546875
      },
      "other_income": {
        "x": 1644.73681640625,
        "y": 535.22314453125,
        "width": 72.92578125,
        "height": 6.51123046875
      },
      "operating_profit": {
        "x": 1773.6591796875,
        "y": 414.1142578125,
        "width": 72.92578125,
        "height": 62.5078125
      },
      "operating_expenses": {
        "x": 1772.35693359375,
        "y": 665.44775390625,
        "width": 72.92578125,
        "height": 52.08984375
      },
      "net_profit": {
        "x": 2256.79248046875,
        "y": 313.84130859375,
        "width": 72.92578125,
        "height": 42.97412109375
      },
      "tax": {
        "x": 2256.79248046875,
        "y": 531.31640625,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "other_expense": {
        "x": 2256.79248046875,
        "y": 670.65673828125,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "ga": {
        "x": 2256.79248046875,
        "y": 824.32177734375,
        "width": 72.92578125,
        "height": 29.95166015625
      },
      "depreciation_amortization": {
        "x": 2256.79248046875,
        "y": 997.5205078125,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "other_opex": {
        "x": 2256.79248046875,
        "y": 1179.8349609375,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "restructuring": {
        "x": 2256.79248046875,
        "y": 1326.98876953125,
        "width": 72.92578125,
        "height": 2.6044921875
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 347.69970703125,
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
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 207.05712890625,
            "top": 643.3095703125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "semanticRole": "reference-offset-side-label",
            "lines": [
              {
                "text": "Beverage",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00754a"
              }
            ]
          }
        ]
      },
      "food": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 760.51171875,
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
                "text": "+17% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 207.05712890625,
            "top": 890.736328125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "semanticRole": "reference-offset-side-label",
            "lines": [
              {
                "text": "Food",
                "size": 37.76513671875,
                "weight": 700,
                "color": "#00754a"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 985.80029296875,
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
                "text": "+14% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 207.05712890625,
            "top": 1092.58447265625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "semanticRole": "reference-offset-side-label",
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
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "licensing revenue, ingredients",
                "size": 22.13818359375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 893.3408203125,
            "top": 497.4580078125,
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
                "size": 36.462890625,
                "weight": 400,
                "color": "#00754a"
              },
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
            "x": 1347.82470703125,
            "top": 322.95703125,
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
                "text": "+1.9pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "store_opex": {
        "blocks": [
          {
            "x": 1523.6279296875,
            "top": 881.62060546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Store opex",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "top": 1091.2822265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product &",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "distribution",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 1681.19970703125,
            "top": 550.85009765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#008f47"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1810.1220703125,
            "top": 226.5908203125,
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
                "size": 36.462890625,
                "weight": 400,
                "color": "#008f47"
              },
              {
                "text": "15% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2.8pp Y/Y",
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
            "x": 1810.1220703125,
            "top": 731.8623046875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "expenses",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "top": 277.37841796875,
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
                "text": "+1.6pp) Y/Y",
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
            "top": 497.4580078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "top": 636.79833984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 2461.2451171875,
            "top": 778.7431640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "administrative",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 2461.2451171875,
            "top": 944.12841796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "amortization",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 2461.2451171875,
            "top": 1134.25634765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other opex",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 2461.2451171875,
            "top": 1281.41015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Restructuring",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#a31904"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
      "key": "starbucks-q2-fy23-0",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 774.83642578125,
      "y": 242.2177734375,
      "width": 225.28857421875,
      "height": 225.28857421875
    },
    {
      "key": "starbucks-q2-fy23-1",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 130.224609375,
      "y": 402.39404296875,
      "width": 149.75830078125,
      "height": 234.404296875
    },
    {
      "key": "starbucks-q2-fy23-2",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 128.92236328125,
      "y": 751.39599609375,
      "width": 156.26953125,
      "height": 138.0380859375
    },
    {
      "key": "starbucks-q2-fy23-3",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 151.060546875,
      "y": 989.70703125,
      "width": 110.69091796875,
      "height": 106.7841796875
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1221.5068359375\" width=\"378.95361328125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1221.5068359375\" width=\"420.62548828125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">Store count</text><text x=\"162.78076171875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">36,634</text><text x=\"162.78076171875\" y=\"1346.5224609375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">+6% Y/Y</text><text x=\"501.36474609375\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">US Active Rewards</text><text x=\"460.9951171875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">30.8M</text><text x=\"588.615234375\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">members</text><text x=\"501.36474609375\" y=\"1346.5224609375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">+15% Y/Y</text><text x=\"852.97119140625\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">Same Store Sale</text><text x=\"1018.3564453125\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">+11%</text><text x=\"1083.46875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Y/Y</text><text x=\"876.41162109375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Ticket</text><text x=\"959.75537109375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+4%</text><text x=\"1018.3564453125\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Y/Y</text><text x=\"871.20263671875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Transactions</text><text x=\"985.80029296875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"transactions\">+6%</text><text x=\"1048.30810546875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">Y/Y</text><text x=\"407.60302734375\" y=\"1435.0751953125\" text-anchor=\"middle\" font-size=\"35.16064453125\" fill=\"#ffffff\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "36634",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "36,634"
    },
    {
      "id": "active_rewards",
      "value": "30800000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "30.8M"
    },
    {
      "id": "same_store_sale",
      "value": "11",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+11%"
    },
    {
      "id": "ticket",
      "value": "4",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+4%"
    },
    {
      "id": "transactions",
      "value": "6",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+6%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Starbucks · 2023 财年第二季度",
      "meta": {
        "title": "Starbucks 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 3 月",
        "titleSize": 106.7841796875
      },
      "nodes": {
        "beverage": {
          "label": "饮品",
          "notes": [
            "同比 +14%"
          ]
        },
        "food": {
          "label": "食品",
          "notes": [
            "同比 +17%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +14%",
            "包装饮品、版税和",
            "授权收入、原料"
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
            "利润率 26%",
            "同比 +1.9 个百分点"
          ]
        },
        "store_opex": {
          "label": "门店运营费用"
        },
        "product_distribution": {
          "label": [
            "产品与",
            "分销"
          ]
        },
        "other_income": {
          "label": "其他"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 15%",
            "同比 +2.8 个百分点"
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
            "同比 +1.6 个百分点"
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
            "行政费用"
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
                "top": 347.69970703125,
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
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 207.05712890625,
                "top": 643.3095703125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "semanticRole": "reference-offset-side-label",
                "lines": [
                  {
                    "text": "饮品",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#00754a"
                  }
                ]
              }
            ]
          },
          "food": {
            "blocks": [
              {
                "x": 424.5322265625,
                "top": 760.51171875,
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
                    "text": "同比 +17%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 207.05712890625,
                "top": 890.736328125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "semanticRole": "reference-offset-side-label",
                "lines": [
                  {
                    "text": "食品",
                    "size": 37.76513671875,
                    "weight": 700,
                    "color": "#00754a"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 424.5322265625,
                "top": 985.80029296875,
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
                    "text": "同比 +14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 207.05712890625,
                "top": 1092.58447265625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "semanticRole": "reference-offset-side-label",
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
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "授权收入、原料",
                    "size": 22.13818359375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 893.3408203125,
                "top": 497.4580078125,
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
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#00754a"
                  },
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
                "x": 1347.82470703125,
                "top": 322.95703125,
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
                    "text": "同比 +1.9 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "store_opex": {
            "blocks": [
              {
                "x": 1523.6279296875,
                "top": 881.62060546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "门店运营费用",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "top": 1091.2822265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品与",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "分销",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 1681.19970703125,
                "top": 550.85009765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#008f47"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1810.1220703125,
                "top": 226.5908203125,
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
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#008f47"
                  },
                  {
                    "text": "利润率 15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2.8 个百分点",
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
                "x": 1810.1220703125,
                "top": 731.8623046875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "费用",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "top": 277.37841796875,
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
                    "text": "同比 +1.6 个百分点",
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
                "top": 497.4580078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "top": 636.79833984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 2461.2451171875,
                "top": 778.7431640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "行政费用",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 2461.2451171875,
                "top": 944.12841796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "摊销",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 2461.2451171875,
                "top": 1134.25634765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
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
                "x": 2461.2451171875,
                "top": 1281.41015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "重组",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#a31904"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#a31904"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"312.5390625\" y=\"1221.5068359375\" width=\"378.95361328125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1221.5068359375\" width=\"420.62548828125\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">门店数</text><text x=\"162.78076171875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">36,634</text><text x=\"162.78076171875\" y=\"1346.5224609375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比 +6%</text><text x=\"501.36474609375\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">美国活跃奖励会员</text><text x=\"460.9951171875\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">30.8M</text><text x=\"588.615234375\" y=\"1315.2685546875\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\">会员</text><text x=\"501.36474609375\" y=\"1346.5224609375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比 +15%</text><text x=\"852.97119140625\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\">同店销售额</text><text x=\"1018.3564453125\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">+11%</text><text x=\"1083.46875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比</text><text x=\"876.41162109375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">客单价</text><text x=\"959.75537109375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+4%</text><text x=\"1018.3564453125\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比</text><text x=\"871.20263671875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">交易量</text><text x=\"985.80029296875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"transactions\">+6%</text><text x=\"1048.30810546875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\">同比</text><text x=\"407.60302734375\" y=\"1435.0751953125\" text-anchor=\"middle\" font-size=\"35.16064453125\" fill=\"#ffffff\">来源：季度业绩</text></g>"
    }
  }
});})();
