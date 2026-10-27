window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "paramount-q4-fy24",
  "name": "Paramount · Q4 FY24",
  "company": "Paramount",
  "meta": {
    "company": "Paramount",
    "title": "Paramount Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "Quarter ended Dec. 31, 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/paramount-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94,
    "titleSize": 122.41,
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
    "titleColor": "#155578",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#090b3d",
        "label": "#090b3d"
      },
      "hub": {
        "node": "#090b3d",
        "label": "#090b3d"
      },
      "profit": {
        "node": "#299e2e",
        "label": "#009455"
      },
      "cost": {
        "node": "#d50000",
        "label": "#9d1804"
      }
    },
    "linkTint": {
      "source": "#8c8d9f",
      "hub": "#8c8d9f",
      "profit": "#98cc98",
      "cost": "#e28587"
    },
    "linkOpacity": 1,
    "type": {
      "name": 29,
      "value": 29,
      "note": 21,
      "lineGap": 9.12
    }
  },
  "nodes": [
    {
      "id": "filmed_entertainment",
      "label": "Filmed Entertainment",
      "value": 1.1,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$1.1B"
    },
    {
      "id": "tv_media",
      "label": "TV Media",
      "value": 5,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$5.0B"
    },
    {
      "id": "direct_to_consumer",
      "label": "Direct to consumer",
      "value": 2,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$2.0B"
    },
    {
      "id": "segment_revenue",
      "label": "",
      "value": 8.1,
      "type": "hub",
      "col": 0,
      "order": 3,
      "valueText": "$8.1B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 8,
      "type": "hub",
      "col": 0,
      "order": 4,
      "valueText": "$8.0B"
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": -0.1,
      "type": "cost",
      "col": 0,
      "order": 5,
      "valueText": "($0.1B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.1,
      "type": "profit",
      "col": 0,
      "order": 6,
      "valueText": "$0.1B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 7.9,
      "type": "cost",
      "col": 0,
      "order": 7,
      "valueText": "($7.9B)"
    },
    {
      "id": "net_loss",
      "label": "Net loss",
      "value": -0.2,
      "type": "cost",
      "col": 0,
      "order": 8,
      "valueText": "($0.2B)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.3,
      "type": "cost",
      "col": 0,
      "order": 9,
      "valueText": "($0.3B)"
    },
    {
      "id": "operating",
      "label": "Operating",
      "value": 5.7,
      "type": "cost",
      "col": 0,
      "order": 10,
      "valueText": "($5.7B)"
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 1.9,
      "type": "cost",
      "col": 0,
      "order": 11,
      "valueText": "($1.9B)"
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 0.3,
      "type": "cost",
      "col": 0,
      "order": 12,
      "valueText": "($0.3B)"
    }
  ],
  "links": [
    {
      "source": "filmed_entertainment",
      "target": "segment_revenue",
      "value": 1.1,
      "sourceWidth": 45.58,
      "targetWidth": 45.58,
      "y0": 456.44,
      "y1": 670.01,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "tv_media",
      "target": "segment_revenue",
      "value": 5,
      "sourceWidth": 214.87,
      "targetWidth": 214.87,
      "y0": 742.93,
      "y1": 800.23,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "direct_to_consumer",
      "target": "segment_revenue",
      "value": 2,
      "sourceWidth": 87.25,
      "targetWidth": 88.552734375,
      "y0": 1052.87,
      "y1": 951.94189453125,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 8,
      "sourceWidth": 346.3974609375,
      "targetWidth": 345.1,
      "y0": 820.4150390625,
      "y1": 748.14,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.1,
      "sourceWidth": 2.6,
      "targetWidth": 2.6,
      "y0": 994.92,
      "y1": 1097.79,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 5.21,
      "targetWidth": 6.51,
      "y0": 578.2,
      "y1": 530.67,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cc98"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 7.9,
      "sourceWidth": 339.89,
      "targetWidth": 338.58,
      "y0": 750.74,
      "y1": 817.81,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.1,
      "sourceWidth": 5.21,
      "targetWidth": 5.21,
      "y0": 530.67,
      "y1": 457.09,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e28587"
    },
    {
      "source": "net_loss",
      "target": "other",
      "value": 0.2,
      "sourceWidth": 9.12,
      "targetWidth": 9.12,
      "y0": 434.3,
      "y1": 449.93,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e28587"
    },
    {
      "source": "operating_expenses",
      "target": "operating",
      "value": 5.7,
      "sourceWidth": 246.12,
      "targetWidth": 246.12,
      "y0": 771.58,
      "y1": 864.04,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.9,
      "sourceWidth": 80.74,
      "targetWidth": 80.74,
      "y0": 935.01,
      "y1": 1135.56,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.3,
      "sourceWidth": 11.72,
      "targetWidth": 11.72,
      "y0": 981.24,
      "y1": 1285.97,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "filmed_entertainment": {
        "x": 445.37,
        "y": 433.65,
        "width": 71.62,
        "height": 45.58
      },
      "tv_media": {
        "x": 445.37,
        "y": 635.5,
        "width": 71.62,
        "height": 214.87
      },
      "direct_to_consumer": {
        "x": 445.37,
        "y": 1009.24,
        "width": 71.62,
        "height": 87.25
      },
      "segment_revenue": {
        "x": 911.57,
        "y": 647.22,
        "width": 72.93,
        "height": 349.0
      },
      "revenue": {
        "x": 1381.68,
        "y": 575.59,
        "width": 71.62,
        "height": 345.1
      },
      "eliminations": {
        "x": 1381.68,
        "y": 1096.49,
        "width": 71.62,
        "height": 2.6
      },
      "operating_profit": {
        "x": 1876.54,
        "y": 527.41,
        "width": 71.62,
        "height": 6.51
      },
      "operating_expenses": {
        "x": 1876.54,
        "y": 648.52,
        "width": 71.62,
        "height": 338.58
      },
      "net_loss": {
        "x": 2208.61,
        "y": 429.74,
        "width": 72.93,
        "height": 9.12
      },
      "other": {
        "x": 2312.79,
        "y": 445.37,
        "width": 72.93,
        "height": 14.32
      },
      "operating": {
        "x": 2312.79,
        "y": 740.98,
        "width": 72.93,
        "height": 246.12
      },
      "sga": {
        "x": 2312.79,
        "y": 1095.19,
        "width": 72.93,
        "height": 80.74
      },
      "amortization": {
        "x": 2312.79,
        "y": 1280.11,
        "width": 72.93,
        "height": 11.72
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 1416.84,
            "top": 429.74,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.07,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1911.7,
            "top": 339.89,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.77,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400
              },
              {
                "text": "2% margin",
                "size": 27.35,
                "weight": 400
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1911.7,
            "top": 1007.94,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Operating",
                "size": 37.77,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 37.77,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 37.77,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_loss": {
        "blocks": [
          {
            "x": 2245.07,
            "top": 250.03,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Net loss",
                "size": 33.86,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 33.86,
                "weight": 400
              },
              {
                "text": "(3%) margin",
                "size": 27.35,
                "weight": 400
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2510.73,
            "top": 416.72,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating": {
        "blocks": [
          {
            "x": 2509.43,
            "top": 812.6,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Operating",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "71% of revenue",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2509.43,
            "top": 1076.96,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "SG&A",
                "size": 29.95,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95,
                "weight": 400
              },
              {
                "text": "24% of revenue",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2509.43,
            "top": 1264.48,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Amortization",
                "size": 29.95,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 29.95,
                "weight": 400
              },
              {
                "text": "3% of revenue",
                "size": 27.35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1416.84,
            "top": 1119.93,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Eliminations",
                "size": 32.56,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 32.56,
                "weight": 400
              }
            ]
          }
        ]
      },
      "filmed_entertainment": {
        "blocks": [
          {
            "x": 480.53,
            "top": 328.58,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "$value",
                "size": 37.77,
                "weight": 700
              },
              {
                "text": "+67% Y/Y",
                "size": 37.77,
                "weight": 400
              }
            ]
          },
          {
            "x": 416.72,
            "top": 410.72,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Filmed",
                "size": 37.77,
                "weight": 700
              },
              {
                "text": "Entertainment",
                "size": 37.77,
                "weight": 400
              }
            ]
          },
          {
            "x": 416.72,
            "top": 514.9,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "(4%) adj. margin",
                "size": 27.35,
                "weight": 700
              }
            ]
          }
        ]
      },
      "tv_media": {
        "blocks": [
          {
            "x": 480.53,
            "top": 531.73,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "$value",
                "size": 37.77,
                "weight": 700
              },
              {
                "text": "(4%) Y/Y",
                "size": 37.77,
                "weight": 400
              }
            ]
          },
          {
            "x": 416.72,
            "top": 719.62,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "TV Media",
                "size": 37.77,
                "weight": 700
              }
            ]
          },
          {
            "x": 416.72,
            "top": 773.01,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "19% adj. margin",
                "size": 27.35,
                "weight": 700
              }
            ]
          }
        ]
      },
      "direct_to_consumer": {
        "blocks": [
          {
            "x": 480.53,
            "top": 904.18,
            "anchor": "middle",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "$value",
                "size": 37.77,
                "weight": 700
              },
              {
                "text": "+8% Y/Y",
                "size": 37.77,
                "weight": 400
              }
            ]
          },
          {
            "x": 416.72,
            "top": 1007.21,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "Direct to",
                "size": 37.77,
                "weight": 700
              },
              {
                "text": "consumer",
                "size": 37.77,
                "weight": 400
              }
            ]
          },
          {
            "x": 416.72,
            "top": 1111.39,
            "anchor": "end",
            "lineGap": 9.12,
            "lines": [
              {
                "text": "(14%) adj. margin",
                "size": 27.35,
                "weight": 700
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
  "annotationsSvg": "<g><rect x=\"102.88\" y=\"1164.21\" width=\"467.51\" height=\"164.08\" rx=\"31.25\" fill=\"#090b3d\"/><text x=\"335.98\" y=\"1215.0\" text-anchor=\"middle\" font-size=\"29.95\" font-weight=\"700\" fill=\"white\">Paramount+ subscribers</text><text data-operating-metric=\"subscribers\" x=\"335.98\" y=\"1257.97\" text-anchor=\"middle\" font-size=\"29.95\" font-weight=\"700\" fill=\"white\">77.5M</text><text x=\"335.98\" y=\"1299.64\" text-anchor=\"middle\" font-size=\"28.65\" font-weight=\"700\" fill=\"white\">+15% Y/Y; +5.6M Q/Q</text></g>",
  "operatingMetrics": [
    {
      "id": "subscribers",
      "label": "Paramount+ subscribers",
      "literal": "77.5M",
      "value": "77500000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+15% Y/Y",
        "+5.6M Q/Q"
      ],
      "quote": "Paramount+ subscribers\n77.5M (+15% Y/Y)\n+5.6M Q/Q",
      "anchor": {
        "type": "image-box",
        "box": [
          103,
          1164,
          468,
          164
        ]
      }
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/paramount/q4-fy24-company-logo.png",
      "x": 768.33,
      "y": 247.43,
      "width": 390.67,
      "height": 287.8
    },
    {
      "key": "business-filmed-entertainment-cluster",
      "href": "data/assets/raster-annotations/paramount/business-filmed-entertainment-cluster.png",
      "x": 22.14,
      "y": 324.26,
      "width": 182.31,
      "height": 132.83
    },
    {
      "key": "business-tv-media-cluster",
      "href": "data/assets/raster-annotations/paramount/business-tv-media-cluster.png",
      "x": 11.72,
      "y": 661.54,
      "width": 186.22,
      "height": 156.27
    },
    {
      "key": "business-direct-to-consumer-cluster",
      "href": "data/assets/raster-annotations/paramount/business-direct-to-consumer-cluster.png",
      "x": 20.84,
      "y": 892.04,
      "width": 187.52,
      "height": 195.34
    }
  ],
  "i18n": {
    "zh": {
      "name": "Paramount · 2024 财年第四季度",
      "meta": {
        "title": "Paramount 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 12 月 31 日的季度",
        "titleTextLength": 2148.71
      },
      "nodes": {
        "filmed_entertainment": {
          "label": "影视娱乐"
        },
        "tv_media": {
          "label": "电视媒体"
        },
        "direct_to_consumer": {
          "label": "直接面向消费者"
        },
        "segment_revenue": {
          "label": ""
        },
        "revenue": {
          "label": "收入"
        },
        "eliminations": {
          "label": "抵销"
        },
        "operating_profit": {
          "label": "营业利润"
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "net_loss": {
          "label": "净亏损"
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
        "amortization": {
          "label": "摊销"
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 1416.84,
                "top": 429.74,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.07,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1911.7,
                "top": 339.89,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.77,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.77,
                    "weight": 400
                  },
                  {
                    "text": "利润率 2%",
                    "size": 27.35,
                    "weight": 400
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1911.7,
                "top": 1007.94,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.77,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 37.77,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 37.77,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_loss": {
            "blocks": [
              {
                "x": 2245.07,
                "top": 250.03,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "净亏损",
                    "size": 33.86,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 33.86,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (3%)",
                    "size": 27.35,
                    "weight": 400
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2510.73,
                "top": 416.72,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating": {
            "blocks": [
              {
                "x": 2509.43,
                "top": 812.6,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "运营成本",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 71%",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2509.43,
                "top": 1076.96,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 29.95,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95,
                    "weight": 400
                  },
                  {
                    "text": "占收入 24%",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2509.43,
                "top": 1264.48,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 29.95,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 29.95,
                    "weight": 400
                  },
                  {
                    "text": "占收入 3%",
                    "size": 27.35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1416.84,
                "top": 1119.93,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 32.56,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 32.56,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "filmed_entertainment": {
            "blocks": [
              {
                "x": 480.53,
                "top": 328.58,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.77,
                    "weight": 700
                  },
                  {
                    "text": "同比 +67%",
                    "size": 37.77,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 416.72,
                "top": 410.72,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "影视",
                    "size": 37.77,
                    "weight": 700
                  },
                  {
                    "text": "娱乐",
                    "size": 37.77,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 416.72,
                "top": 514.9,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "调整后利润率 (4%)",
                    "size": 27.35,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "tv_media": {
            "blocks": [
              {
                "x": 480.53,
                "top": 531.73,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.77,
                    "weight": 700
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 37.77,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 416.72,
                "top": 719.62,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "电视媒体",
                    "size": 37.77,
                    "weight": 700
                  }
                ]
              },
              {
                "x": 416.72,
                "top": 773.01,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "调整后利润率 19%",
                    "size": 27.35,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "direct_to_consumer": {
            "blocks": [
              {
                "x": 480.53,
                "top": 904.18,
                "anchor": "middle",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.77,
                    "weight": 700
                  },
                  {
                    "text": "同比 +8%",
                    "size": 37.77,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 416.72,
                "top": 1007.21,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "直接面向",
                    "size": 37.77,
                    "weight": 700
                  },
                  {
                    "text": "消费者",
                    "size": 37.77,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 416.72,
                "top": 1111.39,
                "anchor": "end",
                "lineGap": 9.12,
                "lines": [
                  {
                    "text": "调整后利润率 (14%)",
                    "size": 27.35,
                    "weight": 700
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
      "annotationsSvg": "<g><rect x=\"102.88\" y=\"1164.21\" width=\"467.51\" height=\"164.08\" rx=\"31.25\" fill=\"#090b3d\"/><text x=\"335.98\" y=\"1215.0\" text-anchor=\"middle\" font-size=\"29.95\" font-weight=\"700\" fill=\"white\">Paramount+ 订阅用户</text><text data-operating-metric=\"subscribers\" x=\"335.98\" y=\"1257.97\" text-anchor=\"middle\" font-size=\"29.95\" font-weight=\"700\" fill=\"white\">77.5M</text><text x=\"335.98\" y=\"1299.64\" text-anchor=\"middle\" font-size=\"28.65\" font-weight=\"700\" fill=\"white\">同比 +15%；环比 +5.6M</text></g>"
    }
  }
});
