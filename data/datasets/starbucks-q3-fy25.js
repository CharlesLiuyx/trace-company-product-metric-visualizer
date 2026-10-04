(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "starbucks-q3-fy25",
  "name": "Starbucks · Q3 FY25",
  "company": "Starbucks",
  "meta": {
    "company": "Starbucks",
    "title": "Starbucks Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending June 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/starbucks-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "periodX": 201.84814453125,
    "periodY": 277.37841796875,
    "periodNoteY": 321.65478515625
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
      "value": 5.8,
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "food",
      "type": "source",
      "label": "Food",
      "value": 1.8,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "type": "source",
      "label": "Other",
      "value": 1.9,
      "notes": [
        "+4% Y/Y",
        "Packaged beverages, royalty and",
        "licensing revenue, ingredients"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "label": "Revenue",
      "value": 9.5,
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "label": "Gross profit",
      "value": 2.2,
      "notes": [
        "23% margin",
        "(5pp) Y/Y"
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
      "valueText": "($3.0B)"
    },
    {
      "id": "store_opex",
      "type": "cost",
      "label": "Store opex",
      "value": 4.3
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
      "value": 0.9,
      "notes": [
        "10% margin",
        "(7pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1.3
    },
    {
      "id": "net_profit",
      "type": "profit",
      "label": "Net profit",
      "value": 0.6,
      "notes": [
        "6% margin",
        "(6pp) Y/Y",
        "Source rounded amounts: operating profit $0.9B minus tax $0.3B and other $0.1B gives $0.5B versus displayed net profit $0.6B."
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
      "value": 0.7
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
      "value": 0.2
    }
  ],
  "links": [
    {
      "source": "beverage",
      "target": "revenue",
      "value": 5.8,
      "sourceWidth": 240.91552734375,
      "targetWidth": 240.91552734375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "food",
      "target": "revenue",
      "value": 1.8,
      "sourceWidth": 74.22802734375,
      "targetWidth": 74.22802734375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 1.9,
      "sourceWidth": 85.9482421875,
      "targetWidth": 84.64599609375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.2,
      "sourceWidth": 102.87744140625,
      "targetWidth": 102.87744140625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "store_opex",
      "value": 4.3,
      "sourceWidth": 173.19873046875,
      "targetWidth": 174.5009765625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "product_distribution",
      "value": 3,
      "sourceWidth": 123.71337890625,
      "targetWidth": 123.71337890625,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.9,
      "sourceWidth": 48.18310546875,
      "targetWidth": 48.18310546875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.3,
      "sourceWidth": 54.6943359375,
      "targetWidth": 54.6943359375,
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
      "value": 0.6,
      "sourceWidth": 36.462890625,
      "targetWidth": 36.462890625,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 10.41796875,
      "targetWidth": 9.11572265625,
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
      "value": 0.7,
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
      "sourceWidth": 6.51123046875,
      "targetWidth": 5.208984375,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "beverage": {
        "x": 386.76708984375,
        "y": 455.7861328125,
        "width": 72.92578125,
        "height": 240.91552734375
      },
      "food": {
        "x": 386.76708984375,
        "y": 856.8779296875,
        "width": 72.92578125,
        "height": 74.22802734375
      },
      "other_revenue": {
        "x": 386.76708984375,
        "y": 1100.39794921875,
        "width": 72.92578125,
        "height": 85.9482421875
      },
      "revenue": {
        "x": 852.97119140625,
        "y": 638.1005859375,
        "width": 72.92578125,
        "height": 399.78955078125
      },
      "gross_profit": {
        "x": 1315.2685546875,
        "y": 523.5029296875,
        "width": 72.92578125,
        "height": 102.87744140625
      },
      "store_opex": {
        "x": 1317.873046875,
        "y": 816.50830078125,
        "width": 72.92578125,
        "height": 174.5009765625
      },
      "product_distribution": {
        "x": 1315.2685546875,
        "y": 1086.0732421875,
        "width": 72.92578125,
        "height": 123.71337890625
      },
      "other_income": {
        "x": 1656.45703125,
        "y": 532.61865234375,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "operating_profit": {
        "x": 1785.37939453125,
        "y": 441.46142578125,
        "width": 72.92578125,
        "height": 52.08984375
      },
      "operating_expenses": {
        "x": 1785.37939453125,
        "y": 652.42529296875,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "net_profit": {
        "x": 2255.490234375,
        "y": 346.3974609375,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "tax": {
        "x": 2255.490234375,
        "y": 562.5703125,
        "width": 72.92578125,
        "height": 9.11572265625
      },
      "other_expense": {
        "x": 2255.490234375,
        "y": 700.6083984375,
        "width": 72.92578125,
        "height": 3.90673828125
      },
      "ga": {
        "x": 2255.490234375,
        "y": 838.646484375,
        "width": 72.92578125,
        "height": 31.25390625
      },
      "depreciation_amortization": {
        "x": 2255.490234375,
        "y": 1022.26318359375,
        "width": 72.92578125,
        "height": 16.92919921875
      },
      "other_opex": {
        "x": 2255.490234375,
        "y": 1199.36865234375,
        "width": 72.92578125,
        "height": 5.208984375
      }
    },
    "labels": {
      "beverage": {
        "blocks": [
          {
            "x": 423.22998046875,
            "top": 358.11767578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 208.359375,
            "top": 630.287109375,
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
            "x": 423.22998046875,
            "top": 760.51171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 27.34716796875,
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
            "x": 423.22998046875,
            "top": 1002.7294921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
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
            "x": 889.43408203125,
            "top": 487.0400390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
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
            "x": 1351.7314453125,
            "top": 334.67724609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              },
              {
                "text": "23% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
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
            "x": 1521.0234375,
            "top": 1079.56201171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Product &",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "distribution",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
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
            "top": 852.97119140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Store opex",
                "size": 36.462890625,
                "weight": 700
              },
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
            "x": 1692.919921875,
            "top": 548.24560546875,
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
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1821.84228515625,
            "top": 252.6357421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              },
              {
                "text": "10% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(7pp) Y/Y",
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
            "x": 1821.84228515625,
            "top": 720.14208984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 302.12109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 36.462890625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 35.16064453125,
                "weight": 400
              },
              {
                "text": "6% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
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
            "top": 527.40966796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 658.9365234375,
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
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 812.6015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "administrative",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 980.59130859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "amortization",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 1158.9990234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other opex",
                "size": 31.25390625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95166015625,
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
      "key": "starbucks-q3-fy25-company-siren",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-company-siren.png",
      "x": 774.83642578125,
      "y": 242.2177734375,
      "width": 225.28857421875,
      "height": 225.28857421875
    },
    {
      "key": "starbucks-q3-fy25-business-beverage",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-beverage.png",
      "x": 130.224609375,
      "y": 390.673828125,
      "width": 149.75830078125,
      "height": 234.404296875
    },
    {
      "key": "starbucks-q3-fy25-business-food",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-food.png",
      "x": 128.92236328125,
      "y": 737.0712890625,
      "width": 156.26953125,
      "height": 138.0380859375
    },
    {
      "key": "starbucks-q3-fy25-business-packaged-beverages",
      "href": "data/assets/raster-annotations/starbucks/q1-fy26-business-packaged-beverages.png",
      "x": 151.060546875,
      "y": 987.1025390625,
      "width": 110.69091796875,
      "height": 106.7841796875
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"303.42333984375\" y=\"1221.5068359375\" width=\"421.927734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\">Store count</text><text x=\"162.78076171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\" data-operating-metric=\"store_count\">18,734</text><text x=\"162.78076171875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">+3% Y/Y</text><text x=\"459.69287109375\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#fff\">Same Store Sale</text><text x=\"597.73095703125\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#fff\">(</text><text x=\"626.38037109375\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#fff\" data-operating-metric=\"same_store_sale\">2%</text><text x=\"677.16796875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"24.74267578125\" fill=\"#fff\">) Y/Y</text><text x=\"481.8310546875\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">Ticket</text><text x=\"546.943359375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\" data-operating-metric=\"ticket\">+1%</text><text x=\"613.35791015625\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">Y/Y</text><text x=\"466.2041015625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">Transactions</text><text x=\"554.7568359375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">(</text><text x=\"583.40625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\" data-operating-metric=\"transactions\">2%</text><text x=\"645.9140625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">) Y/Y</text></g>",
  "operatingMetrics": [
    {
      "id": "store_count",
      "value": "18734",
      "unit": "count",
      "literal": "18,734",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "same_store_sale",
      "value": "2",
      "unit": "%",
      "literal": "2%",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "ticket",
      "value": "1",
      "unit": "%",
      "literal": "+1%",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "transactions",
      "value": "2",
      "unit": "%",
      "literal": "2%",
      "currency": null,
      "comparison": "eq"
    }
  ],
  "i18n": {
    "zh": {
      "name": "星巴克 · 2025 财年第三季度",
      "meta": {
        "title": "星巴克 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 6 月",
        "titleSize": 104.1796875
      },
      "nodes": {
        "beverage": {
          "label": "饮品",
          "notes": [
            "同比 +4%"
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
            "同比 +4%",
            "包装饮品、版税和",
            "授权收入、原料"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +4%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 23%",
            "同比 (5 个百分点)"
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
            "利润率 10%",
            "同比 (7 个百分点)"
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
            "利润率 6%",
            "同比 (6 个百分点)",
            "原图金额分别舍入：营业利润 $0.9B 减税费 $0.3B 和其他费用 $0.1B 得 $0.5B，原图净利润为 $0.6B。"
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
                "x": 423.22998046875,
                "top": 358.11767578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 208.359375,
                "top": 630.287109375,
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
                "x": 423.22998046875,
                "top": 760.51171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.34716796875,
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
                "x": 423.22998046875,
                "top": 1002.7294921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
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
                "x": 889.43408203125,
                "top": 487.0400390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
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
                "x": 1351.7314453125,
                "top": 334.67724609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 23%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
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
                "x": 1521.0234375,
                "top": 1079.56201171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "产品与",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "分销",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
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
                "top": 852.97119140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "门店运营费用",
                    "size": 36.462890625,
                    "weight": 700
                  },
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
                "x": 1692.919921875,
                "top": 548.24560546875,
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
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1821.84228515625,
                "top": 252.6357421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 10%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (7 个百分点)",
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
                "x": 1821.84228515625,
                "top": 720.14208984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 302.12109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36.462890625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 35.16064453125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6 个百分点)",
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
                "top": 527.40966796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 658.9365234375,
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
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 812.6015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "行政",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 980.59130859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "摊销",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2461.2451171875,
                "top": 1158.9990234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 31.25390625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"27.34716796875\" y=\"1221.5068359375\" width=\"272.16943359375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><rect x=\"303.42333984375\" y=\"1221.5068359375\" width=\"421.927734375\" height=\"148.4560546875\" rx=\"29.95166015625\" fill=\"#00643b\"/><text x=\"162.78076171875\" y=\"1274.89892578125\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\">门店数</text><text x=\"162.78076171875\" y=\"1313.96630859375\" text-anchor=\"middle\" font-size=\"27.34716796875\" fill=\"#fff\" data-operating-metric=\"store_count\">18,734</text><text x=\"162.78076171875\" y=\"1345.22021484375\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">同比 +3%</text><text x=\"459.69287109375\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#fff\">同店销售额</text><text x=\"597.73095703125\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#fff\">(</text><text x=\"626.38037109375\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"26.044921875\" fill=\"#fff\" data-operating-metric=\"same_store_sale\">2%</text><text x=\"677.16796875\" y=\"1278.8056640625\" text-anchor=\"middle\" font-size=\"24.74267578125\" fill=\"#fff\">) 同比</text><text x=\"481.8310546875\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">客单价</text><text x=\"546.943359375\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\" data-operating-metric=\"ticket\">+1%</text><text x=\"613.35791015625\" y=\"1310.0595703125\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">同比</text><text x=\"466.2041015625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">交易量</text><text x=\"554.7568359375\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">(</text><text x=\"583.40625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\" data-operating-metric=\"transactions\">2%</text><text x=\"645.9140625\" y=\"1341.3134765625\" text-anchor=\"middle\" font-size=\"22.13818359375\" fill=\"#fff\">) 同比</text></g>"
    }
  }
});})();
