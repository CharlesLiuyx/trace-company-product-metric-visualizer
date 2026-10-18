window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "lvmh-h1-fy24",
  "name": "LVMH · H1 FY24",
  "company": "LVMH",
  "meta": {
    "company": "LVMH",
    "title": "LVMH H1 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/lvmh-h1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950
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
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#b99e6e",
        "label": "#b99e6e"
      },
      "hub": {
        "node": "#b99e6e",
        "label": "#b99e6e"
      },
      "profit": {
        "node": "#2aa52a",
        "label": "#008f4b"
      },
      "cost": {
        "node": "#d90000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#dcd2bd",
      "hub": "#dcd2bd",
      "profit": "#9bce9a",
      "cost": "#e18384"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 6.143232095988002
    }
  },
  "rasterAnnotations": [
    {
      "key": "lvmh-company-wordmark",
      "href": "data/assets/raster-annotations/lvmh/company-wordmark.png",
      "x": 739.67578125,
      "y": 311.23681640625,
      "width": 445.3681640625,
      "height": 111.9931640625
    },
    {
      "key": "lvmh-business-wines-spirits-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-wines-spirits-cluster.png",
      "x": 18.2314453125,
      "y": 304.7255859375,
      "width": 152.36279296875,
      "height": 165.38525390625
    },
    {
      "key": "lvmh-business-fashion-leather-goods-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-fashion-leather-goods-cluster.png",
      "x": 20.8359375,
      "y": 545.64111328125,
      "width": 144.54931640625,
      "height": 148.4560546875
    },
    {
      "key": "lvmh-business-perfumes-cosmetics-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-perfumes-cosmetics-cluster.png",
      "x": 19.53369140625,
      "y": 791.765625,
      "width": 148.4560546875,
      "height": 98.970703125
    },
    {
      "key": "lvmh-business-watches-jewelry-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-watches-jewelry-cluster.png",
      "x": 22.13818359375,
      "y": 979.2890625,
      "width": 144.54931640625,
      "height": 88.552734375
    },
    {
      "key": "lvmh-business-selective-retailing-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-selective-retailing-cluster.png",
      "x": 26.044921875,
      "y": 1110.81591796875,
      "width": 143.2470703125,
      "height": 148.4560546875
    },
    {
      "key": "lvmh-business-other-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-other-cluster.png",
      "x": 40.36962890625,
      "y": 1312.6640625,
      "width": 114.59765625,
      "height": 70.3212890625
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "wines_spirits": {
        "x": 475.31982421875,
        "y": 399.78955078125,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "fashion_leather_goods": {
        "x": 475.31982421875,
        "y": 550.85009765625,
        "width": 72.92578125,
        "height": 153.6650390625
      },
      "perfumes_cosmetics": {
        "x": 475.31982421875,
        "y": 842.55322265625,
        "width": 72.92578125,
        "height": 32.55615234375
      },
      "watches_jewelry": {
        "x": 475.31982421875,
        "y": 1011.84521484375,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "selective_retailing": {
        "x": 475.31982421875,
        "y": 1181.13720703125,
        "width": 72.92578125,
        "height": 63.81005859375
      },
      "other_activities_eliminations": {
        "x": 475.31982421875,
        "y": 1364.75390625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "revenue": {
        "x": 942.826171875,
        "y": 670.65673828125,
        "width": 72.92578125,
        "height": 308.63232421875
      },
      "gross_profit": {
        "x": 1407.72802734375,
        "y": 569.08154296875,
        "width": 72.92578125,
        "height": 212.26611328125
      },
      "cost_of_sales": {
        "x": 1410.33251953125,
        "y": 1001.42724609375,
        "width": 72.92578125,
        "height": 96.3662109375
      },
      "operating_profit": {
        "x": 1876.53662109375,
        "y": 474.017578125,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "operating_expenses": {
        "x": 1872.6298828125,
        "y": 743.58251953125,
        "width": 72.92578125,
        "height": 132.8291015625
      },
      "net_profit": {
        "x": 2344.04296875,
        "y": 390.673828125,
        "width": 72.92578125,
        "height": 55.99658203125
      },
      "tax": {
        "x": 2344.04296875,
        "y": 647.21630859375,
        "width": 72.92578125,
        "height": 20.8359375
      },
      "other": {
        "x": 2344.04296875,
        "y": 765.720703125,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "sales_marketing": {
        "x": 2344.04296875,
        "y": 862.0869140625,
        "width": 72.92578125,
        "height": 110.69091796875
      },
      "general_administrative": {
        "x": 2344.04296875,
        "y": 1122.5361328125,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "other_opex": {
        "x": 2344.04296875,
        "y": 1287.92138671875,
        "width": 72.92578125,
        "height": 0.26044921875
      }
    },
    "labels": {
      "wines_spirits": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 304.7255859375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "(12%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 321.65478515625,
            "top": 363.19521484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Wines",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "& Spirits",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "fashion_leather_goods": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 455.7861328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "(2%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 321.65478515625,
            "top": 576.89501953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Fashion &",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "Leather Goods",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "perfumes_cosmetics": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 748.79150390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 321.65478515625,
            "top": 811.18134765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Perfumes",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "& Cosmetics",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "watches_jewelry": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 914.1767578125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 321.65478515625,
            "top": 983.07109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Watches",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "& Jewelry",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "selective_retailing": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 1084.77099609375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 321.65478515625,
            "top": 1165.2990234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Selective",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "retailers",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "other_activities_eliminations": {
        "blocks": [
          {
            "x": 511.78271484375,
            "top": 1310.0595703125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              }
            ]
          },
          {
            "x": 321.65478515625,
            "top": 1342.50224609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 979.2890625,
            "top": 522.20068359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#b99e6e"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "(1%) Y/Y",
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
            "x": 1444.19091796875,
            "top": 382.8603515625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f4b"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f4b"
              },
              {
                "text": "69% of revenue",
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
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1444.19091796875,
            "top": 1109.513671875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
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
            "x": 1911.697265625,
            "top": 289.0986328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f4b"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f4b"
              },
              {
                "text": "25% of revenue",
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
            "x": 1911.697265625,
            "top": 890.736328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
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
              },
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
      "net_profit": {
        "blocks": [
          {
            "x": 2531.56640625,
            "top": 356.8154296875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f4b"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f4b"
              },
              {
                "text": "18% of revenue",
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
      "tax": {
        "blocks": [
          {
            "x": 2531.56640625,
            "top": 613.35791015625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
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
      "other": {
        "blocks": [
          {
            "x": 2531.56640625,
            "top": 725.35107421875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
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
      "sales_marketing": {
        "blocks": [
          {
            "x": 2531.56640625,
            "top": 855.57568359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Marketing",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "36% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "general_administrative": {
        "blocks": [
          {
            "x": 2531.56640625,
            "top": 1076.95751953125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Administrative",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "7% of revenue",
                "size": 27.34716796875,
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
            "x": 2531.56640625,
            "top": 1272.29443359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other opex",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
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
  "nodes": [
    {
      "id": "wines_spirits",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Wines",
        "& Spirits"
      ],
      "value": 2.8,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€2.8B",
      "notes": [
        "(12%) Y/Y"
      ]
    },
    {
      "id": "fashion_leather_goods",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Fashion &",
        "Leather Goods"
      ],
      "value": 20.8,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€20.8B",
      "notes": [
        "(2%) Y/Y"
      ]
    },
    {
      "id": "perfumes_cosmetics",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Perfumes",
        "& Cosmetics"
      ],
      "value": 4.1,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€4.1B",
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "watches_jewelry",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": [
        "Watches",
        "& Jewelry"
      ],
      "value": 5.2,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€5.2B",
      "notes": [
        "(5%) Y/Y"
      ]
    },
    {
      "id": "selective_retailing",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": [
        "Selective",
        "retailers"
      ],
      "value": 8.6,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€8.6B",
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "other_activities_eliminations",
      "col": 0,
      "order": 5,
      "type": "source",
      "label": "Other",
      "value": 0.2,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€0.2B",
      "notes": []
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 41.7,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€41.7B",
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 28.7,
      "color": "#2aa52a",
      "labelColor": "#008f4b",
      "linkTint": "#9bce9a",
      "valueText": "€28.7B",
      "notes": [
        "69% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 13,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€13.0B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 10.6,
      "color": "#2aa52a",
      "labelColor": "#008f4b",
      "linkTint": "#9bce9a",
      "valueText": "€10.6B",
      "notes": [
        "25% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 18.1,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€18.1B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 7.6,
      "color": "#2aa52a",
      "labelColor": "#008f4b",
      "linkTint": "#9bce9a",
      "valueText": "€7.6B",
      "notes": [
        "18% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 2.8,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€2.8B)",
      "notes": []
    },
    {
      "id": "other",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 0.3,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€0.3B)",
      "notes": []
    },
    {
      "id": "sales_marketing",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": [
        "Sales &",
        "Marketing"
      ],
      "value": 15,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€15.0B)",
      "notes": [
        "36% of revenue"
      ]
    },
    {
      "id": "general_administrative",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": [
        "General &",
        "Administrative"
      ],
      "value": 3,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€3.0B)",
      "notes": [
        "7% of revenue"
      ]
    },
    {
      "id": "other_opex",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "Other opex",
      "value": 0.01,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€0.01B)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "wines_spirits",
      "target": "revenue",
      "value": 2.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#dcd2bd",
      "sourceWidth": 22.13818359375,
      "y0": 410.858642578125,
      "targetWidth": 20.723513376798554,
      "y1": 681.0184949696492
    },
    {
      "source": "fashion_leather_goods",
      "target": "revenue",
      "value": 20.8,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#dcd2bd",
      "sourceWidth": 153.6650390625,
      "y0": 627.6826171875,
      "targetWidth": 153.94609937050356,
      "y1": 768.3533013433004
    },
    {
      "source": "perfumes_cosmetics",
      "target": "revenue",
      "value": 4.1,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#dcd2bd",
      "sourceWidth": 32.55615234375,
      "y0": 858.831298828125,
      "targetWidth": 30.345144587455028,
      "y1": 860.4989233222797
    },
    {
      "source": "watches_jewelry",
      "target": "revenue",
      "value": 5.2,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#dcd2bd",
      "sourceWidth": 37.76513671875,
      "y0": 1030.727783203125,
      "targetWidth": 38.48652484262589,
      "y1": 894.9147580373201
    },
    {
      "source": "selective_retailing",
      "target": "revenue",
      "value": 8.6,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#dcd2bd",
      "sourceWidth": 63.81005859375,
      "y0": 1213.042236328125,
      "targetWidth": 63.65079108588127,
      "y1": 945.9834160015737
    },
    {
      "source": "other_activities_eliminations",
      "target": "revenue",
      "value": 0.2,
      "sourceOrder": 0,
      "targetOrder": 5,
      "linkTint": "#dcd2bd",
      "sourceWidth": 2.6044921875,
      "y0": 1366.05615234375,
      "targetWidth": 1.4802509554856114,
      "y1": 978.5489370222572
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 28.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce9a",
      "sourceWidth": 212.41601211218523,
      "y0": 776.8647443373427,
      "targetWidth": 212.26611328124997,
      "y1": 675.214599609375
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 13,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384",
      "sourceWidth": 96.21631210656474,
      "y0": 931.1809064467175,
      "targetWidth": 96.3662109375,
      "y1": 1049.6103515625
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 10.6,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce9a",
      "sourceWidth": 78.39793730945121,
      "y0": 608.2805116234756,
      "targetWidth": 78.134765625,
      "y1": 513.0849609375
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 18.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384",
      "sourceWidth": 133.86817597179876,
      "y0": 714.4135682641005,
      "targetWidth": 132.8291015625,
      "y1": 809.9970703125
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 7.6,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce9a",
      "sourceWidth": 55.497590537383175,
      "y0": 501.76637339369154,
      "targetWidth": 55.99658203125,
      "y1": 418.672119140625
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 2.8,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384",
      "sourceWidth": 20.446480724299068,
      "y0": 539.7384090245328,
      "targetWidth": 20.8359375,
      "y1": 657.63427734375
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18384",
      "sourceWidth": 2.1906943633177574,
      "y0": 551.0569965683412,
      "targetWidth": 1.30224609375,
      "y1": 766.371826171875
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 15,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e18384",
      "sourceWidth": 110.62945715921708,
      "y0": 798.8972481108585,
      "targetWidth": 110.69091796875,
      "y1": 917.432373046875
    },
    {
      "source": "operating_expenses",
      "target": "general_administrative",
      "value": 3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384",
      "sourceWidth": 22.12589143184342,
      "y0": 865.2749224063889,
      "targetWidth": 22.13818359375,
      "y1": 1133.605224609375
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.01,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18384",
      "sourceWidth": 0.07375297143947807,
      "y0": 876.3747446080303,
      "targetWidth": 0.26044921875,
      "y1": 1288.051611328125
    }
  ],
  "i18n": {
    "zh": {
      "name": "LVMH · 2024 财年上半年",
      "meta": {
        "title": "LVMH 2024 财年上半年利润表"
      },
      "nodes": {
        "wines_spirits": {
          "label": "葡萄酒与烈酒",
          "notes": [
            "同比 (12%)"
          ]
        },
        "fashion_leather_goods": {
          "label": "时装与皮具",
          "notes": [
            "同比 (2%)"
          ]
        },
        "perfumes_cosmetics": {
          "label": "香水与美妆",
          "notes": [
            "同比 +3%"
          ]
        },
        "watches_jewelry": {
          "label": "腕表与珠宝",
          "notes": [
            "同比 (5%)"
          ]
        },
        "selective_retailing": {
          "label": "精选零售",
          "notes": [
            "同比 +3%"
          ]
        },
        "other_activities_eliminations": {
          "label": "其他",
          "notes": []
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
            "占收入 69%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "占收入 25%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "占收入 18%",
            "同比 (2 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "sales_marketing": {
          "label": "销售与市场费用",
          "notes": [
            "占收入 36%"
          ]
        },
        "general_administrative": {
          "label": "一般及行政费用",
          "notes": [
            "占收入 7%"
          ]
        },
        "other_opex": {
          "label": "其他运营费用",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "wines_spirits": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 304.7255859375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 (12%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 321.65478515625,
                "top": 388.720458984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "葡萄酒与烈酒",
                    "size": 33.8583984375,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "fashion_leather_goods": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 455.7861328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 321.65478515625,
                "top": 605.54443359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "时装与皮具",
                    "size": 33.8583984375,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "perfumes_cosmetics": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 748.79150390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 321.65478515625,
                "top": 836.693115234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "香水与美妆",
                    "size": 33.8583984375,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "watches_jewelry": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 914.1767578125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 321.65478515625,
                "top": 1008.589599609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "腕表与珠宝",
                    "size": 33.8583984375,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "selective_retailing": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 1084.77099609375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 321.65478515625,
                "top": 1190.904052734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "精选零售",
                    "size": 33.8583984375,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "other_activities_eliminations": {
            "blocks": [
              {
                "x": 511.78271484375,
                "top": 1310.0595703125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  }
                ]
              },
              {
                "x": 321.65478515625,
                "top": 1343.91796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 33.8583984375,
                    "weight": 800,
                    "color": "#b99e6e"
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 979.2890625,
                "top": 522.20068359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 (1%)",
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
                "x": 1444.19091796875,
                "top": 382.8603515625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f4b"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f4b"
                  },
                  {
                    "text": "占收入 69%",
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
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1444.19091796875,
                "top": 1109.513671875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
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
                "x": 1911.697265625,
                "top": 289.0986328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f4b"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f4b"
                  },
                  {
                    "text": "占收入 25%",
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
                "x": 1911.697265625,
                "top": 890.736328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
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
          "net_profit": {
            "blocks": [
              {
                "x": 2531.56640625,
                "top": 356.8154296875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f4b"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f4b"
                  },
                  {
                    "text": "占收入 18%",
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
          "tax": {
            "blocks": [
              {
                "x": 2531.56640625,
                "top": 613.35791015625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 28.6494140625,
                    "weight": 800,
                    "color": "#941100"
                  },
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
          "other": {
            "blocks": [
              {
                "x": 2531.56640625,
                "top": 725.35107421875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 28.6494140625,
                    "weight": 800,
                    "color": "#941100"
                  },
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
          "sales_marketing": {
            "blocks": [
              {
                "x": 2531.56640625,
                "top": 855.57568359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 28.6494140625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "市场费用",
                    "size": 28.6494140625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 36%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "general_administrative": {
            "blocks": [
              {
                "x": 2531.56640625,
                "top": 1076.95751953125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 28.6494140625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 28.6494140625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 7%",
                    "size": 27.34716796875,
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
                "x": 2531.56640625,
                "top": 1272.29443359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 28.6494140625,
                    "weight": 800,
                    "color": "#941100"
                  },
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
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"230\" y=\"204\" fill=\"#155077\" font-size=\"30\" font-weight=\"700\">单位：欧元</text><text x=\"130\" y=\"1104\" fill=\"#000\" font-size=\"30\" font-weight=\"700\">来源：财务业绩</text></g>"
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><text x=\"230\" y=\"204\" fill=\"#155077\" font-size=\"30\" font-weight=\"700\">in euros</text><text x=\"130\" y=\"1104\" fill=\"#000\" font-size=\"30\" font-weight=\"700\">Source: Financial results</text></g>"
});
