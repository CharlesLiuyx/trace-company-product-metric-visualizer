window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "lvmh-fy24",
  "name": "LVMH · FY24",
  "company": "LVMH",
  "meta": {
    "company": "LVMH",
    "title": "LVMH FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/lvmh-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 1888.2568359375,
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
      "lineGap": 8
    }
  },
  "rasterAnnotations": [
    {
      "key": "lvmh-company-wordmark",
      "href": "data/assets/raster-annotations/lvmh/company-wordmark.png",
      "x": 720.14208984375,
      "y": 289.0986328125,
      "width": 479.2265625,
      "height": 149.75830078125
    },
    {
      "key": "lvmh-business-wines-spirits-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-wines-spirits-cluster.png",
      "x": 6.51123046875,
      "y": 290.40087890625,
      "width": 177.10546875,
      "height": 191.43017578125
    },
    {
      "key": "lvmh-business-fashion-leather-goods-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-fashion-leather-goods-cluster.png",
      "x": 6.51123046875,
      "y": 533.9208984375,
      "width": 157.57177734375,
      "height": 166.6875
    },
    {
      "key": "lvmh-business-perfumes-cosmetics-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-perfumes-cosmetics-cluster.png",
      "x": 9.11572265625,
      "y": 782.64990234375,
      "width": 165.38525390625,
      "height": 118.50439453125
    },
    {
      "key": "lvmh-business-watches-jewelry-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-watches-jewelry-cluster.png",
      "x": 10.41796875,
      "y": 968.87109375,
      "width": 175.80322265625,
      "height": 106.7841796875
    },
    {
      "key": "lvmh-business-selective-retailing-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-selective-retailing-cluster.png",
      "x": 16.92919921875,
      "y": 1126.44287109375,
      "width": 157.57177734375,
      "height": 122.4111328125
    },
    {
      "key": "lvmh-business-other-cluster",
      "href": "data/assets/raster-annotations/lvmh/business-other-cluster.png",
      "x": 29.95166015625,
      "y": 1278.8056640625,
      "width": 136.73583984375,
      "height": 93.76171875
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "wines_spirits": {
        "x": 458.390625,
        "y": 373.74462890625,
        "width": 72.92578125,
        "height": 26.044921875
      },
      "fashion_leather_goods": {
        "x": 458.390625,
        "y": 536.525390625,
        "width": 72.92578125,
        "height": 173.19873046875
      },
      "perfumes_cosmetics": {
        "x": 458.390625,
        "y": 841.2509765625,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "watches_jewelry": {
        "x": 458.390625,
        "y": 998.82275390625,
        "width": 72.92578125,
        "height": 45.57861328125
      },
      "selective_retailing": {
        "x": 458.390625,
        "y": 1155.09228515625,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "other_activities_eliminations": {
        "x": 458.390625,
        "y": 1342.61572265625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "revenue": {
        "x": 925.89697265625,
        "y": 678.47021484375,
        "width": 72.92578125,
        "height": 356.8154296875
      },
      "gross_profit": {
        "x": 1396.0078125,
        "y": 595.12646484375,
        "width": 72.92578125,
        "height": 238.31103515625
      },
      "cost_of_sales": {
        "x": 1396.0078125,
        "y": 1007.9384765625,
        "width": 72.92578125,
        "height": 117.2021484375
      },
      "operating_profit": {
        "x": 1860.90966796875,
        "y": 513.0849609375,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "operating_expenses": {
        "x": 1862.2119140625,
        "y": 774.83642578125,
        "width": 72.92578125,
        "height": 158.8740234375
      },
      "net_profit": {
        "x": 2327.11376953125,
        "y": 429.7412109375,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "tax": {
        "x": 2327.11376953125,
        "y": 647.21630859375,
        "width": 72.92578125,
        "height": 22.13818359375
      },
      "other": {
        "x": 2327.11376953125,
        "y": 769.62744140625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "sales_marketing": {
        "x": 2327.11376953125,
        "y": 888.1318359375,
        "width": 72.92578125,
        "height": 131.52685546875
      },
      "general_administrative": {
        "x": 2327.11376953125,
        "y": 1145.9765625,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "other_opex": {
        "x": 2327.11376953125,
        "y": 1298.33935546875,
        "width": 72.92578125,
        "height": 2.6044921875
      }
    },
    "labels": {
      "wines_spirits": {
        "blocks": [
          {
            "x": 494.853515625,
            "top": 278.6806640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "(11%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 306.02783203125,
            "top": 343.141845703125,
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
            "x": 494.853515625,
            "top": 441.46142578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "(3%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 306.02783203125,
            "top": 575.39951171875,
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
            "x": 494.853515625,
            "top": 746.18701171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
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
            "x": 306.02783203125,
            "top": 815.857177734375,
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
            "x": 494.853515625,
            "top": 903.7587890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
              },
              {
                "text": "(3%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 306.02783203125,
            "top": 977.98681640625,
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
            "x": 494.853515625,
            "top": 1060.0283203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#b99e6e"
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
            "x": 306.02783203125,
            "top": 1150.534423828125,
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
            "x": 494.853515625,
            "top": 1287.92138671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 306.02783203125,
            "top": 1320.635400390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 37.76513671875,
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
            "x": 962.35986328125,
            "top": 532.61865234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "(2%) Y/Y",
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
            "x": 1432.470703125,
            "top": 408.9052734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "67% of revenue",
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
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1432.470703125,
            "top": 1147.27880859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 1897.37255859375,
            "top": 329.46826171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "22% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
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
            "x": 1897.37255859375,
            "top": 954.54638671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 2526.357421875,
            "top": 382.8603515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "15% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
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
            "x": 2526.357421875,
            "top": 622.4736328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 2526.357421875,
            "top": 735.76904296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 2526.357421875,
            "top": 893.3408203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "37% of revenue",
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
            "x": 2526.357421875,
            "top": 1105.60693359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 2526.357421875,
            "top": 1282.71240234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
      "value": 5.9,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€5.9B",
      "notes": [
        "(11%) Y/Y"
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
      "value": 41,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€41.0B",
      "notes": [
        "(3%) Y/Y"
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
      "value": 8.4,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€8.4B",
      "notes": [
        "+2% Y/Y"
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
      "value": 10.6,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€10.6B",
      "notes": [
        "(3%) Y/Y"
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
      "value": 18.3,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€18.3B",
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "other_activities_eliminations",
      "col": 0,
      "order": 5,
      "type": "source",
      "label": "Other",
      "value": 0.5,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€0.5B",
      "notes": []
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 84.7,
      "color": "#b99e6e",
      "labelColor": "#b99e6e",
      "linkTint": "#dcd2bd",
      "valueText": "€84.7B",
      "notes": [
        "(2%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 56.8,
      "color": "#2aa52a",
      "labelColor": "#008f4b",
      "linkTint": "#9bce9a",
      "valueText": "€56.8B",
      "notes": [
        "67% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 27.9,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€27.9B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 18.9,
      "color": "#2aa52a",
      "labelColor": "#008f4b",
      "linkTint": "#9bce9a",
      "valueText": "€18.9B",
      "notes": [
        "22% of revenue",
        "(4pp) Y/Y"
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
      "value": 37.9,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€37.9B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 13,
      "color": "#2aa52a",
      "labelColor": "#008f4b",
      "linkTint": "#9bce9a",
      "valueText": "€13.0B",
      "notes": [
        "15% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 5.2,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€5.2B)",
      "notes": []
    },
    {
      "id": "other",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 0.8,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€0.8B)",
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
      "value": 31,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€31.0B)",
      "notes": [
        "37% of revenue"
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
      "value": 6.2,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€6.2B)",
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
      "value": 0.6,
      "color": "#d90000",
      "labelColor": "#941100",
      "linkTint": "#e18384",
      "valueText": "(€0.6B)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "wines_spirits",
      "target": "revenue",
      "value": 5.9,
      "sourceWidth": 26.044921875,
      "targetWidth": 24.74267578125,
      "y0": 386.76708984375,
      "y1": 690.841552734375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "fashion_leather_goods",
      "target": "revenue",
      "value": 41,
      "sourceWidth": 173.19873046875,
      "targetWidth": 173.19873046875,
      "y0": 623.124755859375,
      "y1": 789.812255859375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "perfumes_cosmetics",
      "target": "revenue",
      "value": 8.4,
      "sourceWidth": 36.462890625,
      "targetWidth": 35.16064453125,
      "y0": 859.482421875,
      "y1": 893.991943359375,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "watches_jewelry",
      "target": "revenue",
      "value": 10.6,
      "sourceWidth": 45.57861328125,
      "targetWidth": 44.2763671875,
      "y0": 1021.612060546875,
      "y1": 933.71044921875,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "selective_retailing",
      "target": "revenue",
      "value": 18.3,
      "sourceWidth": 78.134765625,
      "targetWidth": 76.83251953125,
      "y0": 1194.15966796875,
      "y1": 994.264892578125,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "other_activities_eliminations",
      "target": "revenue",
      "value": 0.5,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 1343.91796875,
      "y1": 1033.9833984375,
      "sourceOrder": 0,
      "targetOrder": 5,
      "linkTint": "#dcd2bd"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 56.8,
      "sourceWidth": 239.61328125,
      "targetWidth": 238.31103515625,
      "y0": 798.27685546875,
      "y1": 714.281982421875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce9a"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 27.9,
      "sourceWidth": 117.2021484375,
      "targetWidth": 117.2021484375,
      "y0": 976.6845703125,
      "y1": 1066.53955078125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 18.9,
      "sourceWidth": 79.43701171875,
      "targetWidth": 79.43701171875,
      "y0": 634.844970703125,
      "y1": 552.803466796875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce9a"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 37.9,
      "sourceWidth": 158.8740234375,
      "targetWidth": 158.8740234375,
      "y0": 754.00048828125,
      "y1": 854.2734375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 13,
      "sourceWidth": 54.6943359375,
      "targetWidth": 54.6943359375,
      "y0": 540.43212890625,
      "y1": 457.08837890625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bce9a"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 5.2,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "y0": 578.848388671875,
      "y1": 658.285400390625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.8,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 591.2197265625,
      "y1": 770.9296875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 31,
      "sourceWidth": 130.224609375,
      "targetWidth": 131.52685546875,
      "y0": 839.94873046875,
      "y1": 953.895263671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "operating_expenses",
      "target": "general_administrative",
      "value": 6.2,
      "sourceWidth": 26.044921875,
      "targetWidth": 27.34716796875,
      "y0": 918.08349609375,
      "y1": 1159.650146484375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18384"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.6,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 932.408203125,
      "y1": 1299.6416015625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18384"
    }
  ],
  "i18n": {
    "zh": {
      "name": "路威酩轩 · 2024 财年",
      "meta": {
        "title": "路威酩轩 2024 财年利润表",
        "titleTextLength": 1720
      },
      "nodes": {
        "wines_spirits": {
          "label": [
            "葡萄酒",
            "与烈酒"
          ],
          "notes": [
            "同比 (11%)"
          ]
        },
        "fashion_leather_goods": {
          "label": [
            "时装与",
            "皮具"
          ],
          "notes": [
            "同比 (3%)"
          ]
        },
        "perfumes_cosmetics": {
          "label": [
            "香水与",
            "美妆"
          ],
          "notes": [
            "同比 +2%"
          ]
        },
        "watches_jewelry": {
          "label": [
            "腕表与",
            "珠宝"
          ],
          "notes": [
            "同比 (3%)"
          ]
        },
        "selective_retailing": {
          "label": [
            "精选",
            "零售"
          ],
          "notes": [
            "同比 +2%"
          ]
        },
        "other_activities_eliminations": {
          "label": "其他",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (2%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "占收入 67%",
            "同比 (2 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "占收入 22%",
            "同比 (4 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "占收入 15%",
            "同比 (4 个百分点)"
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
          "label": [
            "销售与",
            "市场费用"
          ],
          "notes": [
            "占收入 37%"
          ]
        },
        "general_administrative": {
          "label": [
            "一般及",
            "行政费用"
          ],
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
                "x": 494.853515625,
                "top": 278.6806640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 (11%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 306.02783203125,
                "top": 343.141845703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "葡萄酒",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "与烈酒",
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
                "x": 494.853515625,
                "top": 441.46142578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 306.02783203125,
                "top": 575.39951171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "时装与",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "皮具",
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
                "x": 494.853515625,
                "top": 746.18701171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
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
                "x": 306.02783203125,
                "top": 815.857177734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "香水与",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "美妆",
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
                "x": 494.853515625,
                "top": 903.7587890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 306.02783203125,
                "top": 977.98681640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "腕表与",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "珠宝",
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
                "x": 494.853515625,
                "top": 1060.0283203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#b99e6e"
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
                "x": 306.02783203125,
                "top": 1150.534423828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "精选",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#b99e6e"
                  },
                  {
                    "text": "零售",
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
                "x": 494.853515625,
                "top": 1287.92138671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                "x": 306.02783203125,
                "top": 1320.635400390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.76513671875,
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
                "x": 962.35986328125,
                "top": 532.61865234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "同比 (2%)",
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
                "x": 1432.470703125,
                "top": 408.9052734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "占收入 67%",
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
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1432.470703125,
                "top": 1147.27880859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                "x": 1897.37255859375,
                "top": 329.46826171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "占收入 22%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
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
                "x": 1897.37255859375,
                "top": 954.54638671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                "x": 2526.357421875,
                "top": 382.8603515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "占收入 15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
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
                "x": 2526.357421875,
                "top": 622.4736328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
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
                "x": 2526.357421875,
                "top": 735.76904296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
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
                "x": 2526.357421875,
                "top": 893.3408203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "市场费用",
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
                    "text": "占收入 37%",
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
                "x": 2526.357421875,
                "top": 1105.60693359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
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
                "x": 2526.357421875,
                "top": 1282.71240234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他运营费用",
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
      }
    }
  }
});
