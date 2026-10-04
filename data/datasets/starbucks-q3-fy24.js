(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-q3-fy24",
  "name": "Starbucks · Q3 FY24",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/starbucks-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "periodX": 208.359375,
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
      "type": "source",
      "label": "Beverage",
      "value": 5.5,
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "food",
      "type": "source",
      "label": "Food",
      "value": 1.7,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other",
      "value": 1.8,
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
      "value": 9.1,
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 2.5,
      "notes": [
        "28% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "product_distribution",
      "type": "cost",
      "label": [
        "Product &",
        "distribution"
      ],
      "value": 2.7
    },
    {
      "id": "store_opex",
      "type": "cost",
      "label": "Store opex",
      "value": 3.8
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
      "value": 1.5,
      "notes": [
        "17% margin",
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
      "value": 1.1
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 1.1,
      "notes": [
        "12% margin",
        "(1pp) Y/Y"
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
      "value": 0.4
    },
    {
      "id": "other_opex",
      "type": "cost",
      "label": "Other opex",
      "value": 0.1
    }
  ],
  "links": [
    {
      "source": "beverage",
      "target": "revenue",
      "value": 5.5,
      "sourceWidth": 251.33349609375,
      "targetWidth": 251.33349609375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 1.7,
      "sourceWidth": 79.43701171875,
      "targetWidth": 79.43701171875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 1.8,
      "sourceWidth": 83.34375,
      "targetWidth": 84.64599609375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.5,
      "sourceWidth": 115.89990234375,
      "targetWidth": 114.59765625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "store_opex",
      "value": 3.8,
      "sourceWidth": 174.5009765625,
      "targetWidth": 174.5009765625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 2.7,
      "sourceWidth": 125.015625,
      "targetWidth": 125.015625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.4,
      "sourceWidth": 65.1123046875,
      "targetWidth": 65.1123046875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.1,
      "sourceWidth": 49.4853515625,
      "targetWidth": 50.78759765625,
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
      "value": 1.1,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 15.626953125,
      "targetWidth": 15.626953125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "sourceWidth": 5.208984375,
      "targetWidth": 3.90673828125,
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
      "value": 0.4,
      "sourceWidth": 18.2314453125,
      "targetWidth": 16.92919921875,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.1,
      "sourceWidth": 6.51123046875,
      "targetWidth": 6.51123046875,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 388.0693359375,
        "y": 458.390625,
        "width": 72.92578125,
        "height": 251.33349609375
      },
      "food": {
        "x": 388.0693359375,
        "y": 875.109375,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "other_revenue": {
        "x": 388.0693359375,
        "y": 1121.23388671875,
        "width": 72.92578125,
        "height": 83.34375
      },
      "revenue": {
        "x": 854.2734375,
        "y": 648.5185546875,
        "width": 72.92578125,
        "height": 415.41650390625
      },
      "gross_profit": {
        "x": 1319.17529296875,
        "y": 524.80517578125,
        "width": 72.92578125,
        "height": 114.59765625
      },
      "store_opex": {
        "x": 1321.77978515625,
        "y": 826.92626953125,
        "width": 72.92578125,
        "height": 174.5009765625
      },
      "product_distribution": {
        "x": 1324.38427734375,
        "y": 1079.56201171875,
        "width": 72.92578125,
        "height": 125.015625
      },
      "other_income": {
        "x": 1639.52783203125,
        "y": 545.64111328125,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "operating_profit": {
        "x": 1786.681640625,
        "y": 412.81201171875,
        "width": 72.92578125,
        "height": 67.716796875
      },
      "operating_expenses": {
        "x": 1789.2861328125,
        "y": 716.2353515625,
        "width": 72.92578125,
        "height": 50.78759765625
      },
      "net_profit": {
        "x": 2256.79248046875,
        "y": 283.8896484375,
        "width": 72.92578125,
        "height": 46.880859375
      },
      "tax": {
        "x": 2256.79248046875,
        "y": 558.66357421875,
        "width": 72.92578125,
        "height": 15.626953125
      },
      "other_expense": {
        "x": 2256.79248046875,
        "y": 713.630859375,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "ga": {
        "x": 2256.79248046875,
        "y": 863.38916015625,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "depreciation_amortization": {
        "x": 2256.79248046875,
        "y": 1076.95751953125,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "other_opex": {
        "x": 2256.79248046875,
        "y": 1264.48095703125,
        "width": 72.92578125,
        "height": 6.51123046875
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 424.5322265625,
            "top": 359.419921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.34716796875,
                "weight": 400
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
                "size": 36.462890625,
                "weight": 700
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
            "top": 778.7431640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 877.7138671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Food",
                "size": 36.462890625,
                "weight": 700
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
            "top": 1019.65869140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 1091.2822265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "Packaged beverages, royalty and",
                "size": 22.13818359375,
                "weight": 400
              },
              {
                "text": "licensing revenue, ingredients",
                "size": 22.13818359375,
                "weight": 400
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
            "top": 494.853515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1355.63818359375,
            "top": 330.7705078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "28% margin",
                "size": 27.34716796875,
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1820.5400390625,
            "top": 225.28857421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "17% margin",
                "size": 27.34716796875,
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
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
            "top": 239.61328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.76513671875,
                "weight": 400
              },
              {
                "text": "12% margin",
                "size": 27.34716796875,
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400
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
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "product_distribution": {
        "blocks": [
          {
            "x": 1521.0234375,
            "top": 1079.56201171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product &",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "distribution",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1825.7490234375,
            "top": 778.7431640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1675.99072265625,
            "top": 562.5703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2462.54736328125,
            "top": 528.7119140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2462.54736328125,
            "top": 671.958984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 837.34423828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "administrative",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2474.267578125,
            "top": 1040.49462890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "amortization",
                "size": 32.55615234375,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2470.36083984375,
            "top": 1224.111328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other opex",
                "size": 32.55615234375,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "starbucks-q3-fy24-company-siren",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 774.83642578125,
      "y": 242.2177734375,
      "width": 226.5908203125,
      "height": 223.986328125
    },
    {
      "key": "starbucks-q3-fy24-business-beverage",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 130.224609375,
      "y": 390.673828125,
      "width": 149.75830078125,
      "height": 234.404296875
    },
    {
      "key": "starbucks-q3-fy24-business-food",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 130.224609375,
      "y": 738.37353515625,
      "width": 156.26953125,
      "height": 138.0380859375
    },
    {
      "key": "starbucks-q3-fy24-business-packaged-beverages",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 152.36279296875,
      "y": 988.40478515625,
      "width": 110.69091796875,
      "height": 106.7841796875
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"311.23681640625\" y=\"1221.5068359375\" width=\"380.255859375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1221.5068359375\" width=\"420.62548828125\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" >Store count</text><text x=\"162.78076171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">39,477</text><text x=\"162.78076171875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >+6% Y/Y</text><text x=\"501.36474609375\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" >US Active Rewards</text><text x=\"455.7861328125\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">33.8M</text><text x=\"579.49951171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" >members</text><text x=\"501.36474609375\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >+7% Y/Y</text><text x=\"859.482421875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" >Same Store Sale</text><text x=\"987.1025390625\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" >(</text><text x=\"1019.65869140625\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">3%</text><text x=\"1075.6552734375\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >) Y/Y</text><text x=\"859.482421875\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >Ticket</text><text x=\"951.94189453125\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+2%</text><text x=\"1028.7744140625\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >Y/Y</text><text x=\"852.97119140625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >Transactions</text><text x=\"938.91943359375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >(</text><text x=\"967.56884765625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"transactions\">5%</text><text x=\"1048.30810546875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >) Y/Y</text></g>",
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "39477",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "39,477"
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
      "value": "3",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "3%"
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
      "value": "5",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "5%"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Starbucks · 2024 财年第三季度",
      "meta": {
        "title": "Starbucks 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 6 月",
        "titleSize": 108.08642578125
      },
      "nodes": {
        "beverage": {
          "label": "饮品",
          "notes": [
            "同比 (1%)"
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
            "同比 (1%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 28%",
            "同比 (1 个百分点)"
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
            "利润率 17%",
            "同比 (1 个百分点)"
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
            "利润率 12%",
            "同比 (1 个百分点)"
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
        }
      },
      "layout": {
        "labels": {
          "beverage": {
            "blocks": [
              {
                "x": 424.5322265625,
                "top": 359.419921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.34716796875,
                    "weight": 400
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
                    "size": 36.462890625,
                    "weight": 700
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
                "top": 778.7431640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 877.7138671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "食品",
                    "size": 36.462890625,
                    "weight": 700
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
                "top": 1019.65869140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 1091.2822265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "包装饮品、版税和",
                    "size": 22.13818359375,
                    "weight": 400
                  },
                  {
                    "text": "授权收入、原料",
                    "size": 22.13818359375,
                    "weight": 400
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
                "top": 494.853515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1355.63818359375,
                "top": 330.7705078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 28%",
                    "size": 27.34716796875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1820.5400390625,
                "top": 225.28857421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 17%",
                    "size": 27.34716796875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
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
                "top": 239.61328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.76513671875,
                    "weight": 400
                  },
                  {
                    "text": "利润率 12%",
                    "size": 27.34716796875,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400
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
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "product_distribution": {
            "blocks": [
              {
                "x": 1521.0234375,
                "top": 1079.56201171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品与",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "分销",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1825.7490234375,
                "top": 778.7431640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 1675.99072265625,
                "top": 562.5703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2462.54736328125,
                "top": 528.7119140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2462.54736328125,
                "top": 671.958984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 837.34423828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "行政",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2474.267578125,
                "top": 1040.49462890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "摊销",
                    "size": 32.55615234375,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2470.36083984375,
                "top": 1224.111328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 32.55615234375,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"311.23681640625\" y=\"1221.5068359375\" width=\"380.255859375\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><rect x=\"705.8173828125\" y=\"1221.5068359375\" width=\"420.62548828125\" height=\"148.4560546875\" rx=\"28.6494140625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" >门店数</text><text x=\"162.78076171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"store_count\">39,477</text><text x=\"162.78076171875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >同比 +6%</text><text x=\"501.36474609375\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" >美国活跃奖励会员</text><text x=\"455.7861328125\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" data-operating-metric=\"active_rewards\">33.8M</text><text x=\"579.49951171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#ffffff\" >会员</text><text x=\"501.36474609375\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >同比 +7%</text><text x=\"859.482421875\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" >同店销售额</text><text x=\"987.1025390625\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" >(</text><text x=\"1019.65869140625\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#ffffff\" data-operating-metric=\"same_store_sale\">3%</text><text x=\"1075.6552734375\" y=\"1277.50341796875\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >) 同比</text><text x=\"859.482421875\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >客单价</text><text x=\"951.94189453125\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"ticket\">+2%</text><text x=\"1028.7744140625\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >同比</text><text x=\"852.97119140625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >交易量</text><text x=\"938.91943359375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >(</text><text x=\"967.56884765625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" data-operating-metric=\"transactions\">5%</text><text x=\"1048.30810546875\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"23.4404296875\" fill=\"#ffffff\" >) 同比</text></g>"
    }
  }
});})();
