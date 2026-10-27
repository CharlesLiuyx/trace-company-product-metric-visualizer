window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "paramount-q4-fy22",
  "name": "Paramount · Q4 FY22",
  "company": "Paramount",
  "meta": {
    "company": "Paramount",
    "title": "Paramount Q4 FY22 Income Statement",
    "period": "Q4 FY22",
    "periodNote": "Quarter ended Dec. 31, 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/paramount-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.941,
    "titleSize": 122.411,
    "titleWeight": 800,
    "titleTextLength": 2435.2,
    "periodX": -1302.246,
    "periodY": -1302.246,
    "periodNoteY": -1237.134,
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
    "titleColor": "#155478",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#0066ff",
        "label": "#0066ff"
      },
      "hub": {
        "node": "#0066ff",
        "label": "#0066ff"
      },
      "profit": {
        "node": "#289f28",
        "label": "#009650"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#991500"
      }
    },
    "linkTint": {
      "source": "#86b0ef",
      "hub": "#86b0ef",
      "profit": "#99cd97",
      "cost": "#df8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 9.116
    }
  },
  "nodes": [
    {
      "id": "filmed_entertainment",
      "label": "Filmed Entertainment",
      "value": 0.9,
      "valueText": "$0.9B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+35% Y/Y",
        "9% adj. margin"
      ]
    },
    {
      "id": "tv_media",
      "label": "TV Media",
      "value": 5.9,
      "valueText": "$5.9B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(7%) Y/Y",
        "22% adj. margin"
      ]
    },
    {
      "id": "direct_to_consumer",
      "label": "Direct to consumer",
      "value": 1.4,
      "valueText": "$1.4B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+30% Y/Y",
        "(41%) adj. margin"
      ]
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": 0.084,
      "valueText": "($84M)",
      "type": "cost",
      "col": 2,
      "order": 0,
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 8.1,
      "valueText": "$8.1B",
      "type": "hub",
      "col": 2,
      "order": 0,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.6,
      "valueText": "$2.6B",
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "33% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 5.5,
      "valueText": "($5.5B)",
      "type": "cost",
      "col": 2,
      "order": 0,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.2,
      "valueText": "$0.2B",
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "2% margin",
        "(31pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 2.5,
      "valueText": "($2.5B)",
      "type": "cost",
      "col": 2,
      "order": 0,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.021,
      "valueText": "$21M",
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "0% margin",
        "(26pp) Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 2,
      "order": 0,
      "notes": []
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 2.0,
      "valueText": "($2.0B)",
      "type": "cost",
      "col": 2,
      "order": 0,
      "notes": [
        "25% of revenue"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 2,
      "order": 0,
      "notes": [
        "4% of revenue"
      ]
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 2,
      "order": 0,
      "notes": [
        "2% of revenue"
      ]
    },
    {
      "id": "segment_revenue",
      "label": "",
      "value": 8.2,
      "type": "hub",
      "col": 1,
      "order": 0
    }
  ],
  "links": [
    {
      "source": "filmed_entertainment",
      "target": "segment_revenue",
      "value": 0.9,
      "width": 42.974,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "tv_media",
      "target": "segment_revenue",
      "value": 5.9,
      "width": 274.774,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "direct_to_consumer",
      "target": "segment_revenue",
      "value": 1.4,
      "width": 65.112,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 8.1,
      "width": 381.558,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 381.558,
      "targetWidth": 381.558
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.084,
      "width": 2.604,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 1027.472,
      "y1": 1165.51
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.6,
      "width": 123.713,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 5.5,
      "width": 256.542,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 257.844
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.2,
      "width": 7.813,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 596.5,
      "y1": 505.271,
      "sourceWidth": 9
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.5,
      "width": 114.598,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 658.5,
      "y1": 720.142,
      "sourceWidth": 115
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.021,
      "width": 2.604,
      "sourceOrder": 0,
      "targetOrder": 0,
      "y0": 502.667,
      "y1": 410.208
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.2,
      "width": 6.511,
      "sourceOrder": 1,
      "targetOrder": 0,
      "y0": 505.923,
      "y1": 607.498
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.0,
      "width": 95.064,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.3,
      "width": 14.325,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 14.325,
      "targetWidth": 13.022
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.1,
      "width": 5.209,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 5.209,
      "targetWidth": 3.907
    }
  ],
  "layout": {
    "nodes": {
      "filmed_entertainment": {
        "x": 442.764,
        "y": 425.834,
        "width": 72.926,
        "height": 42.974
      },
      "tv_media": {
        "x": 442.764,
        "y": 651.123,
        "width": 72.926,
        "height": 274.774
      },
      "direct_to_consumer": {
        "x": 442.764,
        "y": 1123.838,
        "width": 72.926,
        "height": 65.112
      },
      "segment_revenue": {
        "x": 816.508,
        "y": 644.612,
        "width": 72.926,
        "height": 384.163
      },
      "revenue": {
        "x": 1190.253,
        "y": 666.75,
        "width": 72.926,
        "height": 382.86
      },
      "eliminations": {
        "x": 1190.253,
        "y": 1164.208,
        "width": 70.321,
        "height": 2.604
      },
      "gross_profit": {
        "x": 1560.091,
        "y": 592,
        "width": 72.926,
        "height": 124
      },
      "cost_of_revenue": {
        "x": 1560.091,
        "y": 863.389,
        "width": 72.926,
        "height": 256.542
      },
      "operating_profit": {
        "x": 1893.466,
        "y": 501.365,
        "width": 72.926,
        "height": 7.813
      },
      "operating_expenses": {
        "x": 1894.768,
        "y": 662.843,
        "width": 72.926,
        "height": 114.598
      },
      "net_profit": {
        "x": 2311.487,
        "y": 408.905,
        "width": 72.926,
        "height": 2.604
      },
      "other": {
        "x": 2311.487,
        "y": 604.242,
        "width": 72.926,
        "height": 6.511
      },
      "sga": {
        "x": 2311.487,
        "y": 772.232,
        "width": 72.926,
        "height": 95.064
      },
      "restructuring": {
        "x": 2311.487,
        "y": 1041.797,
        "width": 72.926,
        "height": 13.022
      },
      "amortization": {
        "x": 2311.487,
        "y": 1231.925,
        "width": 72.926,
        "height": 3.907
      }
    },
    "labels": {
      "filmed_entertainment": {
        "blocks": [
          {
            "x": 479.227,
            "top": 329.468,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+35% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 403.696,
            "top": 403.696,
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
                "weight": 400
              },
              {
                "text": "9% adj. margin",
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
            "x": 479.227,
            "top": 557.361,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "(7%) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 414.114,
            "top": 759.209,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "TV Media",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "22% adj. margin",
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
            "x": 479.227,
            "top": 1026.17,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+30% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 423.23,
            "top": 1103.002,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Direct to",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "consumer",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "(41%) adj. margin",
                "size": 27.347,
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
            "x": 1226.716,
            "top": 519.596,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 27.347,
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
            "x": 1224.111,
            "top": 1178.533,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Eliminations",
                "size": 36.463,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.463,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1596.554,
            "top": 410.208,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "33% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1596.554,
            "top": 1134.256,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1929.929,
            "top": 317.748,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "2% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(31pp) Y/Y",
                "size": 27.347,
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
            "x": 1929.929,
            "top": 793.068,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2507.499,
            "top": 355.513,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "0% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(26pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2492.499,
            "top": 584.708,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 800,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2519.219,
            "top": 774.836,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.254,
                "weight": 800,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "25% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2504.219,
            "top": 1004.032,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.254,
                "weight": 800,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "4% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2504.219,
            "top": 1191.555,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.254,
                "weight": 800,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "2% of revenue",
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
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"92.459\" y=\"1269.69\" width=\"666.75\" height=\"119.807\" rx=\"32.556\" fill=\"#0066ff\"/><text x=\"178.408\" y=\"1320.478\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">DTC subscribers</text><text data-operating-metric=\"dtc_subscribers\" x=\"433.648\" y=\"1320.478\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">77M</text><text x=\"523.503\" y=\"1320.478\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">(+11M Q/Q)</text><text x=\"113.295\" y=\"1362.149\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">Paramount+ subscribers</text><text data-operating-metric=\"paramount_plus_subscribers\" x=\"497.458\" y=\"1362.149\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">56M</text><text x=\"586.011\" y=\"1362.149\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">(+10M Q/Q)</text><text x=\"170.594\" y=\"1436.377\" font-size=\"39.067\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/paramount/q4-fy22-company-wordmark.png",
      "x": 761.814,
      "y": 322.957,
      "width": 584.708,
      "height": 169.292
    },
    {
      "key": "business-filmed-entertainment-cluster",
      "href": "data/assets/raster-annotations/paramount/business-filmed-entertainment-cluster.png",
      "x": 16.929,
      "y": 311.237,
      "width": 187.523,
      "height": 138.038
    },
    {
      "key": "business-tv-media-cluster",
      "href": "data/assets/raster-annotations/paramount/business-tv-media-cluster.png",
      "x": 9.116,
      "y": 711.026,
      "width": 184.919,
      "height": 156.27
    },
    {
      "key": "business-direct-to-consumer-cluster",
      "href": "data/assets/raster-annotations/paramount/business-direct-to-consumer-cluster.png",
      "x": 18.231,
      "y": 1001.427,
      "width": 192.732,
      "height": 200.546
    }
  ],
  "operatingMetrics": [
    {
      "id": "dtc_subscribers",
      "value": "77000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "77M"
    },
    {
      "id": "paramount_plus_subscribers",
      "value": "56000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "56M"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Paramount · 2022 财年第四季度",
      "meta": {
        "title": "Paramount 2022 财年第四季度利润表",
        "period": "2022 财年第四季度",
        "periodNote": "截至 2022 年 12 月 31 日的季度"
      },
      "nodes": {
        "filmed_entertainment": {
          "label": "影视娱乐",
          "notes": [
            "同比 +35%",
            "调整后利润率 9%"
          ]
        },
        "tv_media": {
          "label": "电视媒体",
          "notes": [
            "同比 (7%)",
            "调整后利润率 22%"
          ]
        },
        "direct_to_consumer": {
          "label": "直接面向消费者",
          "notes": [
            "同比 +30%",
            "调整后利润率 (41%)"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +2%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 33%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 (31 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 0%",
            "同比 (26 个百分点)"
          ]
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "sga": {
          "label": "销售、一般及行政",
          "notes": [
            "占收入 25%"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 4%"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 2%"
          ]
        },
        "segment_revenue": {
          "label": "",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "filmed_entertainment": {
            "blocks": [
              {
                "x": 479.227,
                "top": 329.468,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +35%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 403.696,
                "top": 403.696,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "影视娱乐",
                    "size": 36.463,
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 9%",
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
                "x": 479.227,
                "top": 557.361,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 414.114,
                "top": 759.209,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "电视媒体",
                    "size": 36.463,
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 22%",
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
                "x": 479.227,
                "top": 1026.17,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +30%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 423.23,
                "top": 1103.002,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "直接面向消费者",
                    "size": 36.463,
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 (41%)",
                    "size": 27.347,
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
                "x": 1226.716,
                "top": 519.596,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.347,
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
                "x": 1224.111,
                "top": 1178.533,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 36.463,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.463,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1596.554,
                "top": 410.208,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 33%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1596.554,
                "top": 1134.256,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1929.929,
                "top": 317.748,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 2%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (31 个百分点)",
                    "size": 27.347,
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
                "x": 1929.929,
                "top": 793.068,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2507.499,
                "top": 355.513,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 0%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (26 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2492.499,
                "top": 584.708,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#777777"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2519.219,
                "top": 774.836,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#777777"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "占收入 25%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2504.219,
                "top": 1004.032,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#777777"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "占收入 4%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2504.219,
                "top": 1191.555,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#777777"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "占收入 2%",
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
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"92.459\" y=\"1269.69\" width=\"666.75\" height=\"119.807\" rx=\"32.556\" fill=\"#0066ff\"/><text x=\"178.408\" y=\"1320.478\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">DTC 订阅用户</text><text data-operating-metric=\"dtc_subscribers\" x=\"433.648\" y=\"1320.478\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">77M</text><text x=\"523.503\" y=\"1320.478\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">(环比 +11M)</text><text x=\"113.295\" y=\"1362.149\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">Paramount+ 订阅用户</text><text data-operating-metric=\"paramount_plus_subscribers\" x=\"497.458\" y=\"1362.149\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">56M</text><text x=\"586.011\" y=\"1362.149\" fill=\"white\" font-size=\"31.254\" font-weight=\"700\">(环比 +10M)</text><text x=\"170.594\" y=\"1436.377\" font-size=\"39.067\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
});
