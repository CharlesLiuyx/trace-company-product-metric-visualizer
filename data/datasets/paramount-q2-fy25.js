(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "paramount-q2-fy25",
  "name": "Paramount · Q2 FY25",
  "company": "Paramount",
  "meta": {
    "company": "Paramount",
    "title": "Paramount Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Quarter ended Jun. 30, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/paramount-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2425,
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
    "subtitleColor": "#666666",
    "noteColor": "#666666",
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
      "source": "#888a9f",
      "hub": "#888a9f",
      "profit": "#99cd99",
      "cost": "#e18585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"138\" y=\"1150\" width=\"568\" height=\"159\" rx=\"26\" fill=\"#050a38\"/><text x=\"422\" y=\"1200\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"white\">Paramount+</text><text x=\"358\" y=\"1242\" text-anchor=\"end\" font-size=\"29\" fill=\"white\">Subscribers</text><text x=\"410\" y=\"1242\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\" data-operating-metric=\"subscribers\">78M</text><text x=\"455\" y=\"1242\" font-size=\"29\" fill=\"white\">(-1.3M Q/Q)</text><text x=\"389\" y=\"1284\" text-anchor=\"end\" font-size=\"29\" fill=\"white\">ARPU</text><text x=\"430\" y=\"1284\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\" data-operating-metric=\"arpu_yoy\">+9%</text><text x=\"470\" y=\"1284\" font-size=\"29\" fill=\"white\">Y/Y</text><text x=\"201\" y=\"1336\" font-size=\"29\" fill=\"#666666\">ARPU = Average Revenue Per User</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/paramount/q2-fy25-company-logo.png",
      "x": 801,
      "y": 251,
      "width": 390,
      "height": 288
    },
    {
      "key": "business-filmed-entertainment-cluster",
      "href": "data/assets/raster-annotations/paramount/business-filmed-entertainment-cluster.png",
      "x": 22,
      "y": 242,
      "width": 178,
      "height": 130
    },
    {
      "key": "business-tv-media-cluster",
      "href": "data/assets/raster-annotations/paramount/business-tv-media-cluster.png",
      "x": 10,
      "y": 582,
      "width": 182,
      "height": 152
    },
    {
      "key": "business-direct-to-consumer-cluster",
      "href": "data/assets/raster-annotations/paramount/business-direct-to-consumer-cluster.png",
      "x": 21,
      "y": 861,
      "width": 188,
      "height": 176
    }
  ],
  "layout": {
    "scale": 46.5,
    "nodes": {
      "filmed_entertainment": {
        "x": 453,
        "y": 356,
        "width": 71,
        "height": 25
      },
      "tv_media": {
        "x": 453,
        "y": 608,
        "width": 71,
        "height": 145
      },
      "direct_to_consumer": {
        "x": 453,
        "y": 960,
        "width": 71,
        "height": 78
      },
      "segment_revenue": {
        "x": 920,
        "y": 620,
        "width": 70,
        "height": 247
      },
      "revenue": {
        "x": 1387,
        "y": 730,
        "width": 71,
        "height": 246
      },
      "eliminations": {
        "x": 1387,
        "y": 1145,
        "width": 71,
        "height": 1
      },
      "operating_profit": {
        "x": 1853,
        "y": 590,
        "width": 71,
        "height": 14
      },
      "operating_expenses": {
        "x": 1852,
        "y": 852,
        "width": 71,
        "height": 233
      },
      "net_profit": {
        "x": 2321,
        "y": 458,
        "width": 71,
        "height": 3
      },
      "other": {
        "x": 2321,
        "y": 620,
        "width": 71,
        "height": 11
      },
      "tax": {
        "x": 2321,
        "y": 746,
        "width": 71,
        "height": 2
      },
      "operating": {
        "x": 2321,
        "y": 816,
        "width": 71,
        "height": 166
      },
      "sga": {
        "x": 2321,
        "y": 1071,
        "width": 71,
        "height": 50
      },
      "restructuring": {
        "x": 2321,
        "y": 1216,
        "width": 71,
        "height": 12
      },
      "amortization": {
        "x": 2321,
        "y": 1326,
        "width": 71,
        "height": 3
      }
    },
    "labels": {
      "filmed_entertainment": {
        "blocks": [
          {
            "x": 483,
            "top": 267,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 405,
            "top": 321,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Filmed",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Entertainment",
                "size": 40,
                "weight": 400
              }
            ]
          },
          {
            "x": 420,
            "top": 441,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "(12%) adj. margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tv_media": {
        "blocks": [
          {
            "x": 483,
            "top": 518,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(6%) Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 405,
            "top": 656,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "TV Media",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 420,
            "top": 712,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "22% adj. margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "direct_to_consumer": {
        "blocks": [
          {
            "x": 483,
            "top": 870,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 405,
            "top": 950,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Direct to",
                "size": 40,
                "weight": 800
              },
              {
                "text": "consumer",
                "size": 40,
                "weight": 400
              }
            ]
          },
          {
            "x": 420,
            "top": 1054,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "7% adj. margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+6pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
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
            "x": 1417,
            "top": 583,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          },
          {
            "x": 1417,
            "top": 685,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "+1% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1422.5,
            "top": 1170,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
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
            "x": 1889,
            "top": 407,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 1889,
            "top": 509,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "6% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+84pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1888,
            "top": 1104,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Costs and",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 40,
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
            "x": 2500,
            "top": 390,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          },
          {
            "x": 2500,
            "top": 492,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "1% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+80pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2505,
            "top": 591,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
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
            "x": 2505,
            "top": 854,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
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
            "x": 2505,
            "top": 1054,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
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
            "x": 2505,
            "top": 1165,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Restructuring",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "/Impairment",
                "size": 33,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
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
            "x": 2505,
            "top": 1304,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Amortization",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
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
            "x": 2505,
            "top": 707,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 33,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33,
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
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Filmed",
        "Entertainment"
      ],
      "value": 0.7,
      "notes": [
        "+2% Y/Y",
        "(12%) adj. margin",
        "(4pp) Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#888a9f",
      "valueText": "$0.7B"
    },
    {
      "id": "tv_media",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "TV Media",
      "value": 4,
      "notes": [
        "(6%) Y/Y",
        "22% adj. margin",
        "(2pp) Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#888a9f",
      "valueText": "$4.0B"
    },
    {
      "id": "direct_to_consumer",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Direct to",
        "consumer"
      ],
      "value": 2.2,
      "notes": [
        "+15% Y/Y",
        "7% adj. margin",
        "+6pp Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#888a9f",
      "valueText": "$2.2B"
    },
    {
      "id": "segment_revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 6.9,
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#888a9f"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 6.8,
      "notes": [
        "+1% Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#888a9f",
      "valueText": "$6.8B"
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Eliminations",
      "value": -0.012,
      "color": "#e18585",
      "labelColor": "#941100",
      "linkTint": "#e18585",
      "valueText": "($12M)"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 0.4,
      "notes": [
        "6% margin",
        "+84pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$0.4B"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Costs and",
        "expenses"
      ],
      "value": 6.5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585",
      "valueText": "($6.5B)"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 0.1,
      "notes": [
        "1% margin",
        "+80pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$0.1B"
    },
    {
      "id": "other",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Other",
      "value": 0.3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585",
      "valueText": "($0.3B)"
    },
    {
      "id": "operating",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Operating",
      "value": 4.6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585",
      "valueText": "($4.6B)"
    },
    {
      "id": "sga",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "SG&A",
      "value": 1.4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585",
      "valueText": "($1.4B)"
    },
    {
      "id": "restructuring",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": [
        "Restructuring",
        "/Impairment"
      ],
      "value": 0.3,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585",
      "valueText": "($0.3B)"
    },
    {
      "id": "amortization",
      "col": 5,
      "order": 5,
      "type": "cost",
      "label": "Amortization",
      "value": 0.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585",
      "valueText": "($0.1B)"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Tax",
      "value": 0.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e18585",
      "valueText": "($0.1B)"
    }
  ],
  "links": [
    {
      "source": "filmed_entertainment",
      "target": "segment_revenue",
      "value": 0.7,
      "sourceWidth": 25,
      "targetWidth": 25,
      "y0": 368.5,
      "y1": 632.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "tv_media",
      "target": "segment_revenue",
      "value": 4,
      "sourceWidth": 145,
      "targetWidth": 145,
      "y0": 680.5,
      "y1": 717.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "direct_to_consumer",
      "target": "segment_revenue",
      "value": 2.2,
      "sourceWidth": 78,
      "targetWidth": 77,
      "y0": 999,
      "y1": 828.5,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 6.8,
      "sourceWidth": 246,
      "targetWidth": 246,
      "y0": 743,
      "y1": 853,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.012,
      "sourceWidth": 1,
      "targetWidth": 1,
      "y0": 866.5,
      "y1": 1145.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 0.4,
      "sourceWidth": 14,
      "targetWidth": 14,
      "y0": 737,
      "y1": 597,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 6.5,
      "sourceWidth": 232,
      "targetWidth": 233,
      "y0": 860,
      "y1": 968.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 591.5,
      "y1": 459.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.3,
      "sourceWidth": 9,
      "targetWidth": 11,
      "y0": 597.5,
      "y1": 625.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 603,
      "y1": 747,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "operating",
      "value": 4.6,
      "sourceWidth": 166,
      "targetWidth": 166,
      "y0": 935,
      "y1": 899,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.4,
      "sourceWidth": 50,
      "targetWidth": 50,
      "y0": 1043,
      "y1": 1096,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.3,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 1074,
      "y1": 1222,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.1,
      "sourceWidth": 5,
      "targetWidth": 3,
      "y0": 1082.5,
      "y1": 1327.5,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "Paramount+",
      "ARPU",
      "Q/Q"
    ],
    "zh": {
      "name": "Paramount · 2025 财年第二季度",
      "meta": {
        "title": "Paramount 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月 30 日的季度",
        "titleTextLength": 2200
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"138\" y=\"1150\" width=\"568\" height=\"159\" rx=\"26\" fill=\"#050a38\"/><text x=\"422\" y=\"1200\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"white\">Paramount+</text><text x=\"358\" y=\"1242\" text-anchor=\"end\" font-size=\"29\" fill=\"white\">订阅用户</text><text x=\"410\" y=\"1242\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\" data-operating-metric=\"subscribers\">78M</text><text x=\"455\" y=\"1242\" font-size=\"29\" fill=\"white\">（环比 -130万）</text><text x=\"389\" y=\"1284\" text-anchor=\"end\" font-size=\"29\" fill=\"white\">ARPU</text><text x=\"430\" y=\"1284\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\" data-operating-metric=\"arpu_yoy\">+9%</text><text x=\"470\" y=\"1284\" font-size=\"29\" fill=\"white\">同比</text><text x=\"201\" y=\"1336\" font-size=\"29\" fill=\"#666666\">ARPU = 每用户平均收入</text></g>",
      "nodes": {
        "filmed_entertainment": {
          "label": [
            "影视",
            "娱乐"
          ],
          "notes": [
            "同比 +2%",
            "调整后利润率 (12%)",
            "同比 (4 个百分点)"
          ]
        },
        "tv_media": {
          "label": "电视媒体",
          "notes": [
            "同比 (6%)",
            "调整后利润率 22%",
            "同比 (2 个百分点)"
          ]
        },
        "direct_to_consumer": {
          "label": [
            "直接面向",
            "消费者"
          ],
          "notes": [
            "同比 +15%",
            "调整后利润率 7%",
            "同比 +6 个百分点"
          ]
        },
        "segment_revenue": {
          "label": ""
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "eliminations": {
          "label": "抵销"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 6%",
            "同比 +84 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "成本和",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 1%",
            "同比 +80 个百分点"
          ]
        },
        "other": {
          "label": "其他"
        },
        "operating": {
          "label": "运营成本"
        },
        "sga": {
          "label": "销售、一般及行政"
        },
        "restructuring": {
          "label": [
            "重组",
            "/减值"
          ]
        },
        "amortization": {
          "label": "摊销"
        },
        "tax": {
          "label": "税费"
        }
      },
      "layout": {
        "labels": {
          "filmed_entertainment": {
            "blocks": [
              {
                "x": 483,
                "top": 267,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 405,
                "top": 321,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "影视",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "娱乐",
                    "size": 40,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 420,
                "top": 441,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "调整后利润率 (12%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tv_media": {
            "blocks": [
              {
                "x": 483,
                "top": 518,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 405,
                "top": 656,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "电视媒体",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 420,
                "top": 712,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "调整后利润率 22%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "direct_to_consumer": {
            "blocks": [
              {
                "x": 483,
                "top": 870,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 405,
                "top": 950,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "直接面向",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "消费者",
                    "size": 40,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 420,
                "top": 1054,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "调整后利润率 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
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
                "x": 1417,
                "top": 583,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1417,
                "top": 685,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "同比 +1%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1422.5,
                "top": 1170,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
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
                "x": 1889,
                "top": 407,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 1889,
                "top": 509,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利润率 6%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +84 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1888,
                "top": 1104,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "成本和",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 40,
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
                "x": 2500,
                "top": 390,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              },
              {
                "x": 2410,
                "top": 492,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "利润率 1%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +80 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2505,
                "top": 591,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
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
                "x": 2505,
                "top": 854,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营成本",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
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
                "x": 2410,
                "top": 1054,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 25,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 25,
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
                "x": 2505,
                "top": 1165,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "重组",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "/减值",
                    "size": 33,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
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
                "x": 2505,
                "top": 1304,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
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
                "x": 2505,
                "top": 707,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 33,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33,
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
  },
  "operatingMetrics": [
    {
      "id": "subscribers",
      "label": "Subscribers",
      "value": "78000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "78M",
      "basis": "unspecified",
      "notes": [
        "-1.3M Q/Q"
      ],
      "quote": "Paramount+\nSubscribers 78M (-1.3M Q/Q)",
      "anchor": {
        "type": "image-box",
        "box": [
          138,
          1150,
          568,
          159
        ]
      }
    },
    {
      "id": "arpu_yoy",
      "label": "ARPU",
      "value": "9",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+9%",
      "basis": "unspecified",
      "notes": [
        "Y/Y"
      ],
      "quote": "Paramount+\nARPU +9% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          138,
          1150,
          568,
          159
        ]
      }
    }
  ]
});})();
