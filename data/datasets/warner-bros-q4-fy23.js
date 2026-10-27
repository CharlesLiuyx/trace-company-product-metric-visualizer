window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "warner-bros-q4-fy23",
  "name": "Warner Bros. Discovery · Q4 FY23",
  "company": "Warner Bros. Discovery",
  "meta": {
    "company": "Warner Bros. Discovery",
    "title": "Warner Bros. Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Dec. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/warner-bros-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 195.312,
    "titleSize": 122.411,
    "titleWeight": 800,
    "titleTextLength": 2448.223,
    "periodX": -1302.246,
    "periodY": -1302.083,
    "periodNoteY": -1236.979,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667.0,
    "height": 1500.0,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "palette": {
      "source": {
        "node": "#0020af",
        "label": "#0020af"
      },
      "hub": {
        "node": "#0020af",
        "label": "#0020af"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#2ca02c"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#cc0000"
      }
    },
    "linkTint": {
      "source": "#8593d3",
      "hub": "#8593d3",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 29,
      "value": 28,
      "note": 20,
      "lineGap": 7.813
    }
  },
  "layout": {
    "scale": 1,
    "nodes": {
      "studios": {
        "x": 432,
        "y": 419,
        "width": 71,
        "height": 83
      },
      "networks": {
        "x": 432,
        "y": 719,
        "width": 71,
        "height": 132
      },
      "dtc": {
        "x": 432,
        "y": 1082,
        "width": 71,
        "height": 65
      },
      "gross_revenue": {
        "x": 806,
        "y": 616,
        "width": 70,
        "height": 283
      },
      "revenue": {
        "x": 1180,
        "y": 656,
        "width": 70,
        "height": 271
      },
      "eliminations": {
        "x": 1185,
        "y": 1080,
        "width": 70,
        "height": 10
      },
      "gross_profit": {
        "x": 1564,
        "y": 545,
        "width": 70,
        "height": 116
      },
      "cost_of_revenue": {
        "x": 1566,
        "y": 907,
        "width": 70,
        "height": 154
      },
      "operating_expenses": {
        "x": 1927,
        "y": 697,
        "width": 71,
        "height": 120
      },
      "operating_loss": {
        "x": 1779,
        "y": 886,
        "width": 70,
        "height": 2
      },
      "sga": {
        "x": 2298,
        "y": 432,
        "width": 71,
        "height": 62
      },
      "amortization": {
        "x": 2300,
        "y": 663,
        "width": 71,
        "height": 53
      },
      "restructuring": {
        "x": 2299.767,
        "y": 920.573,
        "width": 72.926,
        "height": 2.604
      },
      "asset_impairment": {
        "x": 2300,
        "y": 1113,
        "width": 71,
        "height": 2
      }
    },
    "labels": {
      "studios": {
        "blocks": [
          {
            "x": 467.506,
            "top": 319.01,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "color": "#0020af",
                "size": 36.463,
                "weight": 400
              },
              {
                "text": "(17%) Y/Y",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          },
          {
            "x": 403.696,
            "top": 437.281,
            "anchor": "end",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Studios",
                "color": "#0020af",
                "size": 37.765,
                "weight": 800
              }
            ]
          },
          {
            "x": 403.696,
            "top": 483.073,
            "anchor": "end",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "17% adj. margin",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          }
        ]
      },
      "networks": {
        "blocks": [
          {
            "x": 467.506,
            "top": 615.885,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "color": "#0020af",
                "size": 36.463,
                "weight": 400
              },
              {
                "text": "(9%) Y/Y",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          },
          {
            "x": 403.696,
            "top": 761.692,
            "anchor": "end",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Networks",
                "color": "#0020af",
                "size": 37.765,
                "weight": 800
              }
            ]
          },
          {
            "x": 403.696,
            "top": 802.083,
            "anchor": "end",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "44% adj. margin",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          }
        ]
      },
      "dtc": {
        "blocks": [
          {
            "x": 467.506,
            "top": 979.167,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "color": "#0020af",
                "size": 36.463,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          },
          {
            "x": 403.696,
            "top": 1068.4830000000002,
            "anchor": "end",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Direct to",
                "color": "#0020af",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "consumer",
                "color": "#0020af",
                "size": 37.765,
                "weight": 800
              }
            ]
          },
          {
            "x": 403.696,
            "top": 1153.646,
            "anchor": "end",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "(2%) adj. margin",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1214.996,
            "top": 502.604,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Revenue",
                "color": "#0020af",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#0020af",
                "size": 33.858,
                "weight": 400
              },
              {
                "text": "(6%) Y/Y",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1217.6,
            "top": 1106.771,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Eliminations",
                "color": "#941100",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#941100",
                "size": 33.858,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1597.856,
            "top": 356.771,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Gross profit",
                "color": "#00955d",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#00955d",
                "size": 33.858,
                "weight": 400
              },
              {
                "text": "43% margin",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              },
              {
                "text": "(6pp) Y/Y",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1597.856,
            "top": 1075.521,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Cost of",
                "color": "#941100",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "revenue",
                "color": "#941100",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#941100",
                "size": 33.858,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1962.485,
            "top": 532.552,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Operating",
                "color": "#941100",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "expenses",
                "color": "#941100",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#941100",
                "size": 33.858,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1814.029,
            "top": 904.948,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Operating",
                "color": "#941100",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "loss",
                "color": "#941100",
                "size": 37.765,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#941100",
                "size": 33.858,
                "weight": 400
              },
              {
                "text": "(2%) margin",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              },
              {
                "text": "+15pp Y/Y",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 429.688,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "SG&A",
                "color": "#941100",
                "size": 29.952,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#941100",
                "size": 33.858,
                "weight": 400
              },
              {
                "text": "25% of revenue",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 654.948,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Amortization",
                "color": "#941100",
                "size": 29.952,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#941100",
                "size": 33.858,
                "weight": 400
              },
              {
                "text": "18% of revenue",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 877.604,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Restructuring",
                "color": "#941100",
                "size": 29.952,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#941100",
                "size": 33.858,
                "weight": 400
              },
              {
                "text": "1% of revenue",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          }
        ]
      },
      "asset_impairment": {
        "blocks": [
          {
            "x": 2487.29,
            "top": 1072.917,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Asset",
                "color": "#941100",
                "size": 29.952,
                "weight": 800
              },
              {
                "text": "impairment",
                "color": "#941100",
                "size": 29.952,
                "weight": 800
              },
              {
                "text": "$value",
                "color": "#941100",
                "size": 33.858,
                "weight": 400
              },
              {
                "text": "0% of revenue",
                "color": "#777777",
                "size": 26.045,
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_revenue": {
        "blocks": []
      }
    }
  },
  "nodes": [
    {
      "id": "studios",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Studios",
      "value": 3.2,
      "notes": [
        "(17%) Y/Y",
        "17% adj. margin"
      ]
    },
    {
      "id": "networks",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Networks",
      "value": 5.0,
      "notes": [
        "(9%) Y/Y",
        "44% adj. margin"
      ]
    },
    {
      "id": "dtc",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Direct to",
        "consumer"
      ],
      "value": 2.5,
      "notes": [
        "+3% Y/Y",
        "(2%) adj. margin"
      ]
    },
    {
      "id": "gross_revenue",
      "label": "Gross revenue",
      "value": 10.7,
      "type": "hub",
      "col": 1,
      "order": 0
    },
    {
      "id": "revenue",
      "col": 0,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 10.3,
      "notes": [
        "(6%) Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "col": 0,
      "order": 0,
      "type": "cost",
      "label": "Eliminations",
      "value": 0.5,
      "notes": [],
      "valueText": "($0.5B)"
    },
    {
      "id": "gross_profit",
      "col": 0,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 4.4,
      "notes": [
        "43% margin",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 0,
      "order": 0,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 5.9,
      "notes": [],
      "valueText": "($5.9B)"
    },
    {
      "id": "operating_expenses",
      "col": 0,
      "order": 0,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 4.6,
      "notes": [],
      "valueText": "($4.6B)"
    },
    {
      "id": "operating_loss",
      "col": 0,
      "order": 0,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": 0.2,
      "notes": [
        "(2%) margin",
        "+15pp Y/Y"
      ],
      "valueText": "($0.2B)"
    },
    {
      "id": "sga",
      "col": 0,
      "order": 0,
      "type": "cost",
      "label": "SG&A",
      "value": 2.5,
      "notes": [
        "25% of revenue"
      ],
      "valueText": "($2.5B)"
    },
    {
      "id": "amortization",
      "col": 0,
      "order": 0,
      "type": "cost",
      "label": "Amortization",
      "value": 2.0,
      "notes": [
        "18% of revenue"
      ],
      "valueText": "($2.0B)"
    },
    {
      "id": "restructuring",
      "col": 0,
      "order": 0,
      "type": "cost",
      "label": "Restructuring",
      "value": 0.1,
      "notes": [
        "1% of revenue"
      ],
      "valueText": "($0.1B)"
    },
    {
      "id": "asset_impairment",
      "col": 0,
      "order": 0,
      "type": "cost",
      "label": [
        "Asset",
        "impairment"
      ],
      "value": 0.016,
      "notes": [
        "0% of revenue"
      ],
      "valueText": "($16M)"
    }
  ],
  "links": [
    {
      "source": "studios",
      "target": "gross_revenue",
      "value": 3.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 83,
      "targetWidth": 84
    },
    {
      "source": "networks",
      "target": "gross_revenue",
      "value": 5.0,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 132,
      "targetWidth": 134
    },
    {
      "source": "dtc",
      "target": "gross_revenue",
      "value": 2.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 65,
      "targetWidth": 65
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 10.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 272,
      "targetWidth": 271
    },
    {
      "source": "gross_revenue",
      "target": "eliminations",
      "value": 0.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 11,
      "targetWidth": 10
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 4.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "sourceWidth": 116,
      "targetWidth": 116
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 5.9,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 154,
      "targetWidth": 154
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 116,
      "targetWidth": 118
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.2,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 887.0,
      "y1": 816.0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 62,
      "targetWidth": 62
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 2.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 53,
      "targetWidth": 53
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.1,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 2.604,
      "targetWidth": 2.604
    },
    {
      "source": "operating_expenses",
      "target": "asset_impairment",
      "value": 0.016,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 2,
      "targetWidth": 2
    }
  ],
  "operatingMetrics": [
    {
      "id": "dtc_subscribers",
      "value": "97700000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "97.7M"
    },
    {
      "id": "global_arpu",
      "value": "0.00794",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$7.94"
    }
  ],
  "annotationsSvg": "<g><rect x=\"48.183\" y=\"1233.227\" width=\"755.303\" height=\"119.807\" rx=\"31.254\" fill=\"#0020af\"/><text x=\"114.598\" y=\"1285.317\" font-size=\"29.952\" fill=\"white\">DTC subscribers</text><text data-operating-metric=\"dtc_subscribers\" x=\"367.233\" y=\"1285.317\" font-size=\"29.952\" fill=\"white\">97.7M</text><text x=\"460.995\" y=\"1285.317\" font-size=\"27.347\" fill=\"white\">(+2% Y/Y, +2% Q/Q)</text><text x=\"147.154\" y=\"1326.989\" font-size=\"29.952\" fill=\"white\">Global ARPU</text><text data-operating-metric=\"global_arpu\" x=\"346.397\" y=\"1326.989\" font-size=\"29.952\" fill=\"white\">$7.94</text><text x=\"438.857\" y=\"1326.989\" font-size=\"27.347\" fill=\"white\">(+5% Y/Y, +3% Q/Q)</text><text x=\"197.941\" y=\"1386.892\" font-size=\"26.045\" fill=\"#777777\">ARPU = Average Revenue Per User</text><text x=\"169.292\" y=\"1438.982\" font-size=\"36.463\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/warner-bros/company-wordmark.png",
      "x": 746.187,
      "y": 238.281,
      "width": 696.702,
      "height": 213.542
    },
    {
      "key": "business-studios-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-studios-cluster.png",
      "x": 33.858,
      "y": 380.208,
      "width": 154.967,
      "height": 162.76
    },
    {
      "key": "business-networks-cluster",
      "href": "data/assets/raster-annotations/warner-bros/q4-fy23-networks-cluster.png",
      "x": 34,
      "y": 694,
      "width": 143,
      "height": 222
    },
    {
      "key": "business-streaming-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-streaming-cluster.png",
      "x": 71.62353515625,
      "y": 1028.6458333333333,
      "width": 91.1572265625,
      "height": 162.76041666666666
    }
  ],
  "i18n": {
    "zh": {
      "name": "华纳兄弟探索 · 2023 财年第四季度",
      "meta": {
        "title": "Warner Bros. 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月",
        "titleTextLength": 2213.818
      },
      "nodes": {
        "studios": {
          "label": "影视工作室",
          "notes": [
            "同比 (17%)",
            "调整后利润率 17%"
          ]
        },
        "networks": {
          "label": "线性网络",
          "notes": [
            "同比 (9%)",
            "调整后利润率 44%"
          ]
        },
        "dtc": {
          "label": [
            "面向消费者",
            "直接服务"
          ],
          "notes": [
            "同比 +3%",
            "调整后利润率 (2%)"
          ]
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
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 43%",
            "同比 (6 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (2%)",
            "同比 +15 个百分点"
          ]
        },
        "sga": {
          "label": "销售、一般及行政",
          "notes": [
            "占收入 25%"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 18%"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": [
            "占收入 1%"
          ]
        },
        "asset_impairment": {
          "label": [
            "资产",
            "减值"
          ],
          "notes": [
            "占收入 0%"
          ]
        }
      },
      "layout": {
        "labels": {
          "studios": {
            "blocks": [
              {
                "x": 467.506,
                "top": 319.01,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "color": "#0020af",
                    "size": 36.463,
                    "weight": 400
                  },
                  {
                    "text": "同比 (17%)",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.696,
                "top": 437.281,
                "anchor": "end",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "影视工作室",
                    "color": "#0020af",
                    "size": 33.858,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 403.696,
                "top": 483.073,
                "anchor": "end",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "调整后利润率 17%",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "networks": {
            "blocks": [
              {
                "x": 467.506,
                "top": 615.885,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "color": "#0020af",
                    "size": 36.463,
                    "weight": 400
                  },
                  {
                    "text": "同比 (9%)",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.696,
                "top": 761.692,
                "anchor": "end",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "线性网络",
                    "color": "#0020af",
                    "size": 33.858,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 403.696,
                "top": 802.083,
                "anchor": "end",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "调整后利润率 44%",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "dtc": {
            "blocks": [
              {
                "x": 467.506,
                "top": 979.167,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "color": "#0020af",
                    "size": 36.463,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 403.696,
                "top": 1072.7830000000001,
                "anchor": "end",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "面向消费者",
                    "color": "#0020af",
                    "size": 33.858,
                    "weight": 800
                  },
                  {
                    "text": "直接服务",
                    "color": "#0020af",
                    "size": 33.858,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 403.696,
                "top": 1153.646,
                "anchor": "end",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "调整后利润率 (2%)",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1214.996,
                "top": 502.604,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "收入",
                    "color": "#0020af",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#0020af",
                    "size": 33.858,
                    "weight": 400
                  },
                  {
                    "text": "同比 (6%)",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1217.6,
                "top": 1106.771,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "抵销",
                    "color": "#941100",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#941100",
                    "size": 33.858,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1597.856,
                "top": 356.771,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "毛利润",
                    "color": "#00955d",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#00955d",
                    "size": 33.858,
                    "weight": 400
                  },
                  {
                    "text": "利润率 43%",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1597.856,
                "top": 1075.521,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "收入",
                    "color": "#941100",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "color": "#941100",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#941100",
                    "size": 33.858,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1962.485,
                "top": 532.552,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "营业",
                    "color": "#941100",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "color": "#941100",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#941100",
                    "size": 33.858,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1814.029,
                "top": 904.948,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "营业",
                    "color": "#941100",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "color": "#941100",
                    "size": 37.765,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#941100",
                    "size": 33.858,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (2%)",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15 个百分点",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2499.29,
                "top": 429.688,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "color": "#941100",
                    "size": 29.952,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#941100",
                    "size": 33.858,
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 654.948,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "摊销",
                    "color": "#941100",
                    "size": 29.952,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#941100",
                    "size": 33.858,
                    "weight": 400
                  },
                  {
                    "text": "占收入 18%",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 877.604,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "重组费用",
                    "color": "#941100",
                    "size": 29.952,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#941100",
                    "size": 33.858,
                    "weight": 400
                  },
                  {
                    "text": "占收入 1%",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "asset_impairment": {
            "blocks": [
              {
                "x": 2487.29,
                "top": 1072.917,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "资产",
                    "color": "#941100",
                    "size": 29.952,
                    "weight": 800
                  },
                  {
                    "text": "减值",
                    "color": "#941100",
                    "size": 29.952,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "color": "#941100",
                    "size": 33.858,
                    "weight": 400
                  },
                  {
                    "text": "占收入 0%",
                    "color": "#777777",
                    "size": 26.045,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_revenue": {
            "blocks": []
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"48.183\" y=\"1233.227\" width=\"755.303\" height=\"119.807\" rx=\"31.254\" fill=\"#0020af\"/><text x=\"114.598\" y=\"1285.317\" font-size=\"29.952\" fill=\"white\">DTC 订阅用户</text><text data-operating-metric=\"dtc_subscribers\" x=\"367.233\" y=\"1285.317\" font-size=\"29.952\" fill=\"white\">97.7M</text><text x=\"460.995\" y=\"1285.317\" font-size=\"27.347\" fill=\"white\">（同比 +2%，环比 +2%）</text><text x=\"147.154\" y=\"1326.989\" font-size=\"29.952\" fill=\"white\">全球 ARPU</text><text data-operating-metric=\"global_arpu\" x=\"346.397\" y=\"1326.989\" font-size=\"29.952\" fill=\"white\">$7.94</text><text x=\"438.857\" y=\"1326.989\" font-size=\"27.347\" fill=\"white\">（同比 +5%，环比 +3%）</text><text x=\"197.941\" y=\"1386.892\" font-size=\"26.045\" fill=\"#777777\">ARPU = 每用户平均收入</text><text x=\"169.292\" y=\"1438.982\" font-size=\"36.463\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
});
