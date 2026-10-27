(function () { window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "paramount-q1-fy25",
  "name": "Paramount · Q1 FY25",
  "company": "Paramount",
  "meta": {
    "company": "Paramount",
    "title": "Paramount Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended Mar. 31, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/paramount-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.244,
    "titleSize": 125.016,
    "titleWeight": 800,
    "titleTextLength": 2435.2,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#060a39",
        "label": "#060a39"
      },
      "hub": {
        "node": "#060a39",
        "label": "#060a39"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#9294a8",
      "hub": "#9294a8",
      "profit": "#99cd99",
      "cost": "#e18585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39.067,
      "value": 39.067,
      "note": 28.649,
      "lineGap": 9.116
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"53.392\" y=\"1160.301\" width=\"567.779\" height=\"158.874\" rx=\"26.045\" fill=\"#060a39\"/><text x=\"337.282\" y=\"1211.089\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"white\">Paramount+</text><text x=\"184.919\" y=\"1251.458\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">Subscribers</text><text data-operating-metric=\"subscribers\" x=\"334.677\" y=\"1251.458\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">79M</text><text x=\"471.413\" y=\"1251.458\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">(+1.5M Q/Q)</text><text x=\"283.89\" y=\"1293.13\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu_growth\" x=\"364.629\" y=\"1293.13\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">+2%</text><text x=\"436.252\" y=\"1293.13\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">Y/Y</text><text x=\"115.9\" y=\"1347.825\" font-size=\"28.649\" fill=\"#777777\">ARPU = Average Revenue Per User</text></g>",
  "operatingMetrics": [
    {
      "id": "subscribers",
      "literal": "79M",
      "value": "79000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "arpu_growth",
      "literal": "+2%",
      "value": "2",
      "unit": "%",
      "currency": null,
      "comparison": "eq"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/paramount/q1-fy25-company-logo.png",
      "x": 800.881,
      "y": 250.031,
      "width": 393.278,
      "height": 282.587
    },
    {
      "key": "business-filmed-entertainment-cluster",
      "href": "data/assets/raster-annotations/paramount/business-filmed-entertainment-cluster.png",
      "x": 18.231,
      "y": 235.707,
      "width": 184.919,
      "height": 134.131
    },
    {
      "key": "business-tv-media-cluster",
      "href": "data/assets/raster-annotations/paramount/business-tv-media-cluster.png",
      "x": 10.418,
      "y": 610.753,
      "width": 190.128,
      "height": 160.176
    },
    {
      "key": "business-direct-to-consumer-cluster",
      "href": "data/assets/raster-annotations/paramount/business-direct-to-consumer-cluster.png",
      "x": 20.836,
      "y": 852.971,
      "width": 188.826,
      "height": 196.639
    }
  ],
  "layout": {
    "scale": 44.276,
    "nodes": {
      "filmed_entertainment": {
        "x": 444.066,
        "y": 382.86,
        "width": 71.624,
        "height": 27.347
      },
      "tv_media": {
        "x": 444.066,
        "y": 612.056,
        "width": 71.624,
        "height": 199.244
      },
      "direct_to_consumer": {
        "x": 444.066,
        "y": 968.871,
        "width": 71.624,
        "height": 88.553
      },
      "segment_revenue": {
        "x": 911.572,
        "y": 575.593,
        "width": 71.624,
        "height": 316.446
      },
      "revenue": {
        "x": 1380.381,
        "y": 694.097,
        "width": 72.926,
        "height": 316.446
      },
      "eliminations": {
        "x": 1380.381,
        "y": 1126.443,
        "width": 71.624,
        "height": 1.302
      },
      "operating_profit": {
        "x": 1842.678,
        "y": 553.455,
        "width": 72.926,
        "height": 23.44
      },
      "operating_expenses": {
        "x": 1842.678,
        "y": 795.672,
        "width": 72.926,
        "height": 291.703
      },
      "net_profit": {
        "x": 2312.789,
        "y": 360.722,
        "width": 71.624,
        "height": 6.511
      },
      "interest": {
        "x": 2312.789,
        "y": 498.76,
        "width": 71.624,
        "height": 7.813
      },
      "other": {
        "x": 2312.789,
        "y": 613.358,
        "width": 71.624,
        "height": 2.604
      },
      "tax": {
        "x": 2312.789,
        "y": 714.933,
        "width": 71.624,
        "height": 3.907
      },
      "operating": {
        "x": 2312.789,
        "y": 795.672,
        "width": 71.624,
        "height": 217.475
      },
      "sga": {
        "x": 2312.789,
        "y": 1097.793,
        "width": 71.624,
        "height": 66.415
      },
      "restructuring": {
        "x": 2312.789,
        "y": 1244.947,
        "width": 71.624,
        "height": 2.604
      },
      "amortization": {
        "x": 2312.789,
        "y": 1332.198,
        "width": 71.624,
        "height": 2.604
      }
    },
    "labels": {
      "filmed_entertainment": {
        "blocks": [
          {
            "x": 480.529,
            "top": 285.192,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 402.394,
            "top": 325.562,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Filmed",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "Entertainment",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "3% adj. margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tv_media": {
        "blocks": [
          {
            "x": 480.529,
            "top": 516.992,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "(13%) Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 414.114,
            "top": 656.332,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "TV Media",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "20% adj. margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "direct_to_consumer": {
        "blocks": [
          {
            "x": 480.529,
            "top": 869.9,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 420.625,
            "top": 959.755,
            "anchor": "end",
            "lineGap": 13.022,
            "lines": [
              {
                "text": "Direct to",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "consumer",
                "size": 39.067,
                "weight": 800
              }
            ]
          },
          {
            "x": 420.625,
            "top": 1063.935,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "(5%) adj. margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+10pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "segment_revenue": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1415.542,
            "top": 543.037,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 800,
                "color": "#060a39"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#060a39"
              },
              {
                "text": "(6%) Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1415.542,
            "top": 1147.279,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Eliminations",
                "size": 33.858,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.556,
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
            "x": 1883.048,
            "top": 364.629,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "8% margin",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+13pp Y/Y",
                "size": 28.649,
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
            "x": 1883.048,
            "top": 1105.607,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Costs and",
                "size": 39.067,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.067,
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
            "x": 2501.615,
            "top": 290.401,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.067,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "2% margin",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+9pp Y/Y",
                "size": 28.649,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2504.219,
            "top": 480.529,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Interest",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
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
            "x": 2504.219,
            "top": 576.895,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2504.219,
            "top": 675.866,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Tax",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating": {
        "blocks": [
          {
            "x": 2504.219,
            "top": 867.296,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating",
                "size": 32.556,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2504.219,
            "top": 1092.584,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "SG&A",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2504.219,
            "top": 1208.484,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Restructuring",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2504.219,
            "top": 1300.944,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Amortization",
                "size": 29.952,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
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
      "id": "filmed_entertainment",
      "label": "Filmed Entertainment",
      "value": 0.6,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$0.6B",
      "notes": [
        "+4% Y/Y",
        "3% adj. margin",
        "+4pp Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#9294a8"
    },
    {
      "id": "tv_media",
      "label": "TV Media",
      "value": 4.5,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$4.5B",
      "notes": [
        "(13%) Y/Y",
        "20% adj. margin",
        "(2pp) Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#9294a8"
    },
    {
      "id": "direct_to_consumer",
      "label": "Direct to consumer",
      "value": 2.0,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$2.0B",
      "notes": [
        "+9% Y/Y",
        "(5%) adj. margin",
        "+10pp Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#9294a8"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 7.2,
      "type": "hub",
      "col": 2,
      "order": 4,
      "valueText": "$7.2B",
      "notes": [
        "(6%) Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#9294a8"
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": -0.017,
      "type": "cost",
      "col": 2,
      "order": 5,
      "valueText": "($17M)",
      "notes": [],
      "color": "#e18585",
      "labelColor": "#941100",
      "linkTint": "#e18585"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.6,
      "type": "profit",
      "col": 3,
      "order": 6,
      "valueText": "$0.6B",
      "notes": [
        "8% margin",
        "+13pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "label": "Costs and expenses",
      "value": 6.7,
      "type": "cost",
      "col": 3,
      "order": 7,
      "valueText": "($6.7B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.2,
      "type": "profit",
      "col": 4,
      "order": 8,
      "valueText": "$0.2B",
      "notes": [
        "2% margin",
        "+9pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 0.2,
      "type": "cost",
      "col": 4,
      "order": 9,
      "valueText": "($0.2B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.1,
      "type": "cost",
      "col": 4,
      "order": 10,
      "valueText": "($0.1)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "type": "cost",
      "col": 4,
      "order": 11,
      "valueText": "($0.1B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585"
    },
    {
      "id": "operating",
      "label": "Operating",
      "value": 5.0,
      "type": "cost",
      "col": 4,
      "order": 12,
      "valueText": "($5.0B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585"
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 1.5,
      "type": "cost",
      "col": 4,
      "order": 13,
      "valueText": "($1.5B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585"
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.1,
      "type": "cost",
      "col": 4,
      "order": 14,
      "valueText": "($0.1B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585"
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 0.1,
      "type": "cost",
      "col": 4,
      "order": 15,
      "valueText": "($0.1B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585"
    },
    {
      "id": "segment_revenue",
      "label": "",
      "value": 7.1,
      "type": "hub",
      "col": 1,
      "order": 0,
      "color": "#060a39",
      "linkTint": "#9294a8"
    }
  ],
  "links": [
    {
      "source": "filmed_entertainment",
      "target": "segment_revenue",
      "value": 0.6,
      "sourceWidth": 27.347,
      "targetWidth": 27.347,
      "y0": 396.534,
      "y1": 589.266,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "tv_media",
      "target": "segment_revenue",
      "value": 4.5,
      "sourceWidth": 199.244,
      "targetWidth": 199.244,
      "y0": 711.677,
      "y1": 702.562,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "direct_to_consumer",
      "target": "segment_revenue",
      "value": 2,
      "sourceWidth": 88.553,
      "targetWidth": 88.553,
      "y0": 1013.147,
      "y1": 846.46,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 7.2,
      "sourceWidth": 315.144,
      "targetWidth": 316.446,
      "y0": 733.165,
      "y1": 852.32,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.017,
      "sourceWidth": 1.302,
      "targetWidth": 1.302,
      "y0": 891.387,
      "y1": 1127.094,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18585"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 0.6,
      "sourceWidth": 23.44,
      "targetWidth": 23.44,
      "y0": 705.817,
      "y1": 565.175,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 6.7,
      "sourceWidth": 293.005,
      "targetWidth": 291.703,
      "y0": 864.04,
      "y1": 941.524,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 6.511,
      "targetWidth": 6.511,
      "y0": 556.71,
      "y1": 363.978,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.2,
      "sourceWidth": 7.813,
      "targetWidth": 7.813,
      "y0": 563.873,
      "y1": 502.667,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.1,
      "sourceWidth": 3.907,
      "targetWidth": 2.604,
      "y0": 569.733,
      "y1": 614.66,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 5.209,
      "targetWidth": 3.907,
      "y0": 574.291,
      "y1": 716.886,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e18585"
    },
    {
      "source": "operating_expenses",
      "target": "operating",
      "value": 5,
      "sourceWidth": 217.475,
      "targetWidth": 217.475,
      "y0": 904.41,
      "y1": 904.41,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.5,
      "sourceWidth": 66.415,
      "targetWidth": 66.415,
      "y0": 1046.355,
      "y1": 1131.001,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.1,
      "sourceWidth": 3.907,
      "targetWidth": 2.604,
      "y0": 1081.515,
      "y1": 1246.25,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.1,
      "sourceWidth": 3.907,
      "targetWidth": 2.604,
      "y0": 1085.422,
      "y1": 1333.5,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "Paramount+",
      "ARPU"
    ],
    "zh": {
      "name": "Paramount · 2025 财年第一季度",
      "meta": {
        "title": "Paramount 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月 31 日的季度",
        "titleTextLength": 2278.931
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"53.392\" y=\"1160.301\" width=\"567.779\" height=\"158.874\" rx=\"26.045\" fill=\"#060a39\"/><text x=\"337.282\" y=\"1211.089\" text-anchor=\"middle\" font-size=\"31.254\" font-weight=\"800\" fill=\"white\">Paramount+</text><text x=\"184.919\" y=\"1251.458\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">订阅用户</text><text data-operating-metric=\"subscribers\" x=\"334.677\" y=\"1251.458\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">79M</text><text x=\"471.413\" y=\"1251.458\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">（环比 +1.5M）</text><text x=\"283.89\" y=\"1293.13\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu_growth\" x=\"364.629\" y=\"1293.13\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">+2%</text><text x=\"436.252\" y=\"1293.13\" text-anchor=\"middle\" font-size=\"29.952\" fill=\"white\">同比</text><text x=\"115.9\" y=\"1347.825\" font-size=\"28.649\" fill=\"#777777\">ARPU = 每用户平均收入</text></g>",
      "nodes": {
        "filmed_entertainment": {
          "label": "影视娱乐",
          "notes": [
            "同比 +4%",
            "调整后利润率 3%",
            "同比 +4 个百分点"
          ]
        },
        "tv_media": {
          "label": "电视媒体",
          "notes": [
            "同比 (13%)",
            "调整后利润率 20%",
            "同比 (2 个百分点)"
          ]
        },
        "direct_to_consumer": {
          "label": "直接面向消费者",
          "notes": [
            "同比 +9%",
            "调整后利润率 (5%)",
            "同比 +10 个百分点"
          ]
        },
        "segment_revenue": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (6%)"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 8%",
            "同比 +13 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "成本和费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 2%",
            "同比 +9 个百分点"
          ]
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "operating": {
          "label": "运营成本",
          "notes": []
        },
        "sga": {
          "label": "销售、一般及行政",
          "notes": []
        },
        "restructuring": {
          "label": "重组",
          "notes": []
        },
        "amortization": {
          "label": "摊销",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "filmed_entertainment": {
            "blocks": [
              {
                "x": 480.529,
                "top": 285.192,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 402.394,
                "top": 325.562,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "影视",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "娱乐",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 3%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tv_media": {
            "blocks": [
              {
                "x": 480.529,
                "top": 516.992,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 (13%)",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 414.114,
                "top": 656.332,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "电视媒体",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 20%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "direct_to_consumer": {
            "blocks": [
              {
                "x": 480.529,
                "top": 869.9,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 420.625,
                "top": 959.755,
                "anchor": "end",
                "lineGap": 13.022,
                "lines": [
                  {
                    "text": "直接面向",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "消费者",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 420.625,
                "top": 1063.935,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "调整后利润率 (5%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +10 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "segment_revenue": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1415.542,
                "top": 543.037,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#060a39"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#060a39"
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1415.542,
                "top": 1147.279,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 33.858,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.556,
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
                "x": 1883.048,
                "top": 364.629,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 8%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +13 个百分点",
                    "size": 28.649,
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
                "x": 1883.048,
                "top": 1105.607,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "成本和",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
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
                "x": 2501.615,
                "top": 290.401,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 2%",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +9 个百分点",
                    "size": 28.649,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2504.219,
                "top": 480.529,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "利息",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
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
                "x": 2504.219,
                "top": 576.895,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2504.219,
                "top": 675.866,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating": {
            "blocks": [
              {
                "x": 2504.219,
                "top": 867.296,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "运营成本",
                    "size": 32.556,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2504.219,
                "top": 1092.584,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2504.219,
                "top": 1208.484,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "重组",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2504.219,
                "top": 1300.944,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 29.952,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
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
}); })();
