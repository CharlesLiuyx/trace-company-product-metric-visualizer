/* Source-measured Q2 FY26 Sankey View Adapter. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "paramount-q2-fy26",
  "name": "Paramount · Q2 FY26",
  "company": "Paramount",
  "meta": {
    "company": "Paramount",
    "title": "Paramount Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/paramount-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2435,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#06083f",
        "label": "#06083f"
      },
      "hub": {
        "node": "#06083f",
        "label": "#06083f"
      },
      "profit": {
        "node": "#28a428",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d80000",
        "label": "#8b1000"
      }
    },
    "linkTint": {
      "source": "#888a9f",
      "hub": "#888a9f",
      "cost": "#e08585",
      "profit": "#99cd99"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      <rect x=\"52\" y=\"1160\" width=\"570\" height=\"160\" rx=\"26\" fill=\"#05083f\"/>\n      <text x=\"337\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#ffffff\">Paramount+</text>\n      <text x=\"337\" y=\"1251\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">Subscribers 81.6M (+2.0M Q/Q)</text>\n      <text x=\"337\" y=\"1292\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">ARPU +12% Y/Y</text>\n      <text x=\"116\" y=\"1348\" font-size=\"29\" font-weight=\"400\" fill=\"#666666\">ARPU = Average Revenue Per User</text>\n    </g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/paramount/company-wordmark.png",
      "x": 787,
      "y": 262,
      "width": 680,
      "height": 220
    },
    {
      "key": "business-filmed-entertainment-cluster",
      "href": "data/assets/raster-annotations/paramount/business-filmed-entertainment-cluster.png",
      "x": 36,
      "y": 628,
      "width": 180,
      "height": 131,
      "pairedNode": "studios",
      "pairedTarget": "label",
      "pairedSide": "left"
    },
    {
      "key": "business-tv-media-cluster",
      "href": "data/assets/raster-annotations/paramount/business-tv-media-cluster.png",
      "x": 22,
      "y": 930,
      "width": 186,
      "height": 151
    },
    {
      "key": "business-direct-to-consumer-cluster",
      "href": "data/assets/raster-annotations/paramount/business-direct-to-consumer-cluster.png",
      "x": 18,
      "y": 320,
      "width": 194,
      "height": 199,
      "pairedNode": "direct_to_consumer",
      "pairedTarget": "label",
      "pairedSide": "left"
    }
  ],
  "layout": {
    "scale": 53,
    "nodes": {
      "direct_to_consumer": {
        "x": 441,
        "y": 385,
        "width": 72,
        "height": 131
      },
      "studios": {
        "x": 441,
        "y": 692,
        "width": 72,
        "height": 69
      },
      "tv_media": {
        "x": 441,
        "y": 951,
        "width": 72,
        "height": 165
      },
      "segment_revenue": {
        "x": 908,
        "y": 589,
        "width": 72,
        "height": 366
      },
      "revenue": {
        "x": 1375,
        "y": 679,
        "width": 72,
        "height": 364
      },
      "eliminations": {
        "x": 1375,
        "y": 1142,
        "width": 72,
        "height": 2
      },
      "operating_profit": {
        "x": 1842,
        "y": 541,
        "width": 72,
        "height": 24
      },
      "operating_expenses": {
        "x": 1842,
        "y": 775,
        "width": 72,
        "height": 340
      },
      "net_profit": {
        "x": 2309,
        "y": 434,
        "width": 73,
        "height": 2
      },
      "other": {
        "x": 2309,
        "y": 578,
        "width": 73,
        "height": 16
      },
      "tax": {
        "x": 2309,
        "y": 694,
        "width": 73,
        "height": 6
      },
      "operating": {
        "x": 2309,
        "y": 795,
        "width": 73,
        "height": 234
      },
      "sga": {
        "x": 2309,
        "y": 1097,
        "width": 73,
        "height": 76
      },
      "amortization": {
        "x": 2309,
        "y": 1246,
        "width": 73,
        "height": 18
      },
      "restructuring": {
        "x": 2309,
        "y": 1340,
        "width": 73,
        "height": 9
      }
    },
    "labels": {
      "direct_to_consumer": {
        "blocks": [
          {
            "x": 424,
            "top": 285,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#060a39"
              },
              {
                "text": "+9% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 418,
            "top": 371,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Direct to",
                "size": 40,
                "weight": 800,
                "color": "#060a39"
              },
              {
                "text": "consumer",
                "size": 40,
                "weight": 800,
                "color": "#060a39"
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 418,
            "top": 480,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "15% adj. margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+11pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "studios": {
        "blocks": [
          {
            "x": 424,
            "top": 589,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#060a39"
              }
            ]
          },
          {
            "x": 414,
            "top": 643,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "+16% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 418,
            "top": 669,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Studios",
                "size": 40,
                "weight": 800,
                "color": "#060a39"
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 418,
            "top": 721,
            "anchor": "end",
            "lineGap": 11,
            "lines": [
              {
                "text": "3% adj. margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5pp Y/Y",
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
            "x": 424,
            "top": 851,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#060a39"
              },
              {
                "text": "(9%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 424,
            "top": 966,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "TV Media",
                "size": 40,
                "weight": 800,
                "color": "#060a39"
              }
            ],
            "semanticRole": "reference-offset-side-label"
          },
          {
            "x": 424,
            "top": 1022,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "34% adj. margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+8pp Y/Y",
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
            "x": 1407,
            "top": 524,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#060a39"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#060a39"
              },
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
            "x": 1409,
            "top": 1160,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
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
            "x": 1882,
            "top": 351,
            "anchor": "middle",
            "lineGap": 13,
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
              },
              {
                "text": "7% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+1pp Y/Y",
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
            "x": 1871,
            "top": 1126,
            "anchor": "middle",
            "lineGap": 13,
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
                "weight": 800,
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
            "x": 2506,
            "top": 359,
            "anchor": "middle",
            "lineGap": 13,
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
              },
              {
                "text": "1% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(0pp) Y/Y",
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
            "top": 552,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
            "top": 651,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
            "top": 866,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Operating",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
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
            "top": 1091,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "SG&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
            "top": 1214,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Amortization",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
            "top": 1303,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
      "id": "direct_to_consumer",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Direct to consumer",
      "value": 2.5,
      "notes": [
        "+9% Y/Y",
        "15% adj. margin",
        "+11pp Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#888a9f"
    },
    {
      "id": "studios",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Studios",
      "value": 1.3,
      "notes": [
        "+16% Y/Y",
        "3% adj. margin",
        "+5pp Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#888a9f"
    },
    {
      "id": "tv_media",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "TV Media",
      "value": 3.1,
      "notes": [
        "(9%) Y/Y",
        "34% adj. margin",
        "+8pp Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#888a9f"
    },
    {
      "id": "segment_revenue",
      "col": 1,
      "order": 3,
      "type": "hub",
      "label": "",
      "value": 6.9,
      "notes": [],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#888a9f"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 4,
      "type": "hub",
      "label": "Revenue",
      "value": 6.9,
      "notes": [
        "+1% Y/Y"
      ],
      "color": "#060a39",
      "labelColor": "#060a39",
      "linkTint": "#888a9f"
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 5,
      "type": "cost",
      "label": "Eliminations",
      "value": -0.003,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($3M)"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 6,
      "type": "profit",
      "label": "Operating profit",
      "value": 0.5,
      "notes": [
        "7% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Costs and expenses",
      "value": 6.4,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 8,
      "type": "profit",
      "label": "Net profit",
      "value": 0.041,
      "notes": [
        "1% margin",
        "(0pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$41M"
    },
    {
      "id": "other",
      "col": 4,
      "order": 9,
      "type": "cost",
      "label": "Other",
      "value": 0.3,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 10,
      "type": "cost",
      "label": "Tax",
      "value": 0.1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": "Operating",
      "value": 4.4,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sga",
      "col": 4,
      "order": 12,
      "type": "cost",
      "label": "SG&A",
      "value": 1.4,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "amortization",
      "col": 4,
      "order": 13,
      "type": "cost",
      "label": "Amortization",
      "value": 0.4,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "restructuring",
      "col": 4,
      "order": 14,
      "type": "cost",
      "label": "Restructuring",
      "value": 0.2,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "direct_to_consumer",
      "target": "segment_revenue",
      "value": 2.5,
      "sourceWidth": 131,
      "targetWidth": 131,
      "y0": 450.5,
      "y1": 654.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#888a9f"
    },
    {
      "source": "studios",
      "target": "segment_revenue",
      "value": 1.3,
      "sourceWidth": 69,
      "targetWidth": 69,
      "y0": 726.5,
      "y1": 754.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#888a9f"
    },
    {
      "source": "tv_media",
      "target": "segment_revenue",
      "value": 3.1,
      "sourceWidth": 165,
      "targetWidth": 166,
      "y0": 1033.5,
      "y1": 872,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#888a9f"
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 6.9,
      "sourceWidth": 364,
      "targetWidth": 364,
      "y0": 771,
      "y1": 861,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#888a9f"
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.003,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 954,
      "y1": 1143,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 0.5,
      "sourceWidth": 25,
      "targetWidth": 24,
      "y0": 691.5,
      "y1": 553,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 6.4,
      "sourceWidth": 339,
      "targetWidth": 340,
      "y0": 873.5,
      "y1": 945,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.041,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 542,
      "y1": 435,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.3,
      "sourceWidth": 16,
      "targetWidth": 16,
      "y0": 551,
      "y1": 586,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 6,
      "targetWidth": 6,
      "y0": 562,
      "y1": 697,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "operating",
      "value": 4.4,
      "sourceWidth": 234,
      "targetWidth": 234,
      "y0": 892,
      "y1": 912,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.4,
      "sourceWidth": 76,
      "targetWidth": 76,
      "y0": 1047,
      "y1": 1135,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.4,
      "sourceWidth": 18,
      "targetWidth": 18,
      "y0": 1094,
      "y1": 1255,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.2,
      "sourceWidth": 12,
      "targetWidth": 9,
      "y0": 1109,
      "y1": 1344.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Paramount · 2026 财年第二季度",
      "meta": {
        "title": "Paramount 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度"
      },
      "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      <rect x=\"52\" y=\"1160\" width=\"570\" height=\"160\" rx=\"26\" fill=\"#05083f\"/>\n      <text x=\"337\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#ffffff\">Paramount+</text>\n      <text x=\"337\" y=\"1251\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#ffffff\">订阅用户 8160 万（环比 +200 万）</text>\n      <text x=\"337\" y=\"1292\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"400\" fill=\"#ffffff\">ARPU 同比 +12%</text>\n      <text x=\"116\" y=\"1348\" font-size=\"29\" font-weight=\"400\" fill=\"#666666\">ARPU = 每用户平均收入</text>\n    </g>",
      "nodes": {
        "direct_to_consumer": {
          "label": "直接面向消费者",
          "notes": [
            "同比 +9%",
            "调整后利润率 15%",
            "同比 +11 个百分点"
          ]
        },
        "studios": {
          "label": "制片业务",
          "notes": [
            "同比 +16%",
            "调整后利润率 3%",
            "同比 +5 个百分点"
          ]
        },
        "tv_media": {
          "label": "电视媒体",
          "notes": [
            "同比 (9%)",
            "调整后利润率 34%",
            "同比 +8 个百分点"
          ]
        },
        "segment_revenue": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 7%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "成本和费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 1%",
            "同比 (0 个百分点)"
          ]
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
        "amortization": {
          "label": "摊销",
          "notes": []
        },
        "restructuring": {
          "label": "重组",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "direct_to_consumer": {
            "blocks": [
              {
                "x": 424,
                "top": 285,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#060a39"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 418,
                "top": 371,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "直接面向",
                    "size": 40,
                    "weight": 800,
                    "color": "#060a39"
                  },
                  {
                    "text": "消费者",
                    "size": 40,
                    "weight": 800,
                    "color": "#060a39"
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 418,
                "top": 480,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "调整后利润率 15%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +11 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "studios": {
            "blocks": [
              {
                "x": 424,
                "top": 589,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#060a39"
                  }
                ]
              },
              {
                "x": 414,
                "top": 643,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "同比 +16%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 418,
                "top": 669,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "制片业务",
                    "size": 40,
                    "weight": 800,
                    "color": "#060a39"
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 418,
                "top": 721,
                "anchor": "end",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "调整后利润率 3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5 个百分点",
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
                "x": 424,
                "top": 851,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#060a39"
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 424,
                "top": 966,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "电视媒体",
                    "size": 40,
                    "weight": 800,
                    "color": "#060a39"
                  }
                ],
                "semanticRole": "reference-offset-side-label"
              },
              {
                "x": 424,
                "top": 1022,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "调整后利润率 34%",
                    "size": 26,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +8 个百分点",
                    "size": 26,
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
                "x": 1407,
                "top": 524,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#060a39"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#060a39"
                  },
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
                "x": 1409,
                "top": 1160,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
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
                "x": 1882,
                "top": 351,
                "anchor": "middle",
                "lineGap": 13,
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
                  },
                  {
                    "text": "利润率 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "x": 1871,
                "top": 1126,
                "anchor": "middle",
                "lineGap": 13,
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
                    "weight": 800,
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
                "x": 2506,
                "top": 359,
                "anchor": "middle",
                "lineGap": 13,
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
                  },
                  {
                    "text": "利润率 1%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (0 个百分点)",
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
                "top": 552,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "top": 651,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "top": 866,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "运营成本",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
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
                "top": 1091,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 27,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "top": 1214,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "top": 1303,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
