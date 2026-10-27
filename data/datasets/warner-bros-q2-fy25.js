(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "warner-bros-q2-fy25",
  "name": "Warner Bros. Discovery · Q2 FY25",
  "company": "Warner Bros. Discovery",
  "meta": {
    "company": "Warner Bros. Discovery",
    "title": "Warner Bros. Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/warner-bros-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 195,
    "titleSize": 124,
    "titleWeight": 800,
    "titleTextLength": 2428,
    "hidePeriodStamp": true
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
        "node": "#0020af",
        "label": "#0020af"
      },
      "hub": {
        "node": "#0020af",
        "label": "#0020af"
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
      "source": "#8593d3",
      "hub": "#8593d3",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"47\" y=\"1197\" width=\"839\" height=\"120\" rx=\"31\" fill=\"#0020af\"/><text x=\"128\" y=\"1248\" font-size=\"30\" fill=\"#ffffff\">DTC subscribers</text><text data-operating-metric=\"dtc_subscribers\" x=\"380\" y=\"1248\" font-size=\"30\" fill=\"#ffffff\">125.7M</text><text x=\"500\" y=\"1248\" font-size=\"30\" fill=\"#ffffff\">(+22% Y/Y &amp; +3% Q/Q)</text><text x=\"172\" y=\"1289\" font-size=\"30\" fill=\"#ffffff\">Global ARPU</text><text data-operating-metric=\"global_arpu\" x=\"365\" y=\"1289\" font-size=\"30\" fill=\"#ffffff\">$7.14</text><text x=\"460\" y=\"1289\" font-size=\"30\" fill=\"#ffffff\">(-11% Y/Y &amp; +0% Q/Q)</text><text x=\"199\" y=\"1350\" font-size=\"29\" fill=\"#666666\">ARPU = Average Revenue Per User</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/warner-bros/company-wordmark.png",
      "x": 560,
      "y": 219,
      "width": 748,
      "height": 270
    },
    {
      "key": "business-studios-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-studios-cluster.png",
      "x": 26,
      "y": 360,
      "width": 169,
      "height": 177
    },
    {
      "key": "business-networks-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-networks-cluster.png",
      "x": 24,
      "y": 631,
      "width": 162,
      "height": 251
    },
    {
      "key": "business-streaming-cluster",
      "href": "data/assets/raster-annotations/warner-bros/business-streaming-cluster.png",
      "x": 51,
      "y": 963,
      "width": 106,
      "height": 190
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "studios": {
        "x": 428,
        "y": 409,
        "width": 72,
        "height": 102
      },
      "networks": {
        "x": 428,
        "y": 691,
        "width": 72,
        "height": 129
      },
      "streaming": {
        "x": 428,
        "y": 1009,
        "width": 72,
        "height": 75
      },
      "gross_revenue": {
        "x": 802,
        "y": 566,
        "width": 71,
        "height": 307
      },
      "revenue": {
        "x": 1176,
        "y": 655,
        "width": 71,
        "height": 265
      },
      "eliminations": {
        "x": 1176,
        "y": 1032,
        "width": 71,
        "height": 43
      },
      "gross_profit": {
        "x": 1549,
        "y": 560,
        "width": 71,
        "height": 104
      },
      "cost_of_revenue": {
        "x": 1549,
        "y": 865,
        "width": 71,
        "height": 160
      },
      "operating_loss": {
        "x": 1777,
        "y": 806,
        "width": 71,
        "height": 5
      },
      "operating_expenses": {
        "x": 1923,
        "y": 660,
        "width": 71,
        "height": 109
      },
      "sga": {
        "x": 2297,
        "y": 525,
        "width": 71,
        "height": 67
      },
      "amortization": {
        "x": 2297,
        "y": 833,
        "width": 71,
        "height": 39
      },
      "other_operating_expense": {
        "x": 2297,
        "y": 1084,
        "width": 71,
        "height": 3
      }
    },
    "labels": {
      "gross_revenue": {
        "blocks": []
      },
      "studios": {
        "blocks": [
          {
            "x": 464,
            "top": 312,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "color": "#0020af",
                "weight": 400
              },
              {
                "text": "+55% Y/Y",
                "size": 29,
                "color": "#666666",
                "weight": 400
              }
            ]
          },
          {
            "x": 405,
            "top": 405,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Studios",
                "size": 40,
                "color": "#0020af",
                "weight": 800
              },
              {
                "text": "23% adj. margin",
                "size": 29,
                "color": "#666666",
                "weight": 400
              },
              {
                "text": "+14pp Y/Y",
                "size": 29,
                "color": "#666666",
                "weight": 400
              }
            ]
          }
        ]
      },
      "networks": {
        "blocks": [
          {
            "x": 464,
            "top": 594,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "color": "#0020af",
                "weight": 400
              },
              {
                "text": "(9%) Y/Y",
                "size": 29,
                "color": "#666666",
                "weight": 400
              }
            ]
          },
          {
            "x": 405,
            "top": 692,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Networks",
                "size": 40,
                "color": "#0020af",
                "weight": 800
              },
              {
                "text": "31% adj. margin",
                "size": 29,
                "color": "#666666",
                "weight": 400
              },
              {
                "text": "(6pp) Y/Y",
                "size": 29,
                "color": "#666666",
                "weight": 400
              }
            ]
          }
        ]
      },
      "streaming": {
        "blocks": [
          {
            "x": 464,
            "top": 913,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "color": "#0020af",
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 29,
                "color": "#666666",
                "weight": 400
              }
            ]
          },
          {
            "x": 405,
            "top": 1004,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Streaming",
                "size": 40,
                "color": "#0020af",
                "weight": 800
              },
              {
                "text": "10% adj. margin",
                "size": 29,
                "color": "#666666",
                "weight": 400
              },
              {
                "text": "+15pp Y/Y",
                "size": 29,
                "color": "#666666",
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1212,
            "top": 510,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "color": "#0020af",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "color": "#0020af",
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 29,
                "color": "#666666",
                "weight": 400
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1212,
            "top": 1094,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 34,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1585,
            "top": 376,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "39% margin",
                "size": 29,
                "color": "#666666",
                "weight": 400
              },
              {
                "text": "+3pp Y/Y",
                "size": 29,
                "color": "#666666",
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1585,
            "top": 1047,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 40,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1815,
            "top": 832,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "loss",
                "size": 40,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "(2%) margin",
                "size": 29,
                "color": "#666666",
                "weight": 400
              },
              {
                "text": "+103pp Y/Y",
                "size": 29,
                "color": "#666666",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1960,
            "top": 499,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2490,
            "top": 511,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
                "size": 34,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "25% of revenue",
                "size": 29,
                "color": "#666666",
                "weight": 400
              },
              {
                "text": "(0pp) Y/Y",
                "size": 29,
                "color": "#666666",
                "weight": 400
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2490,
            "top": 803,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Amortization",
                "size": 34,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
                "color": "#941100",
                "weight": 400
              },
              {
                "text": "15% of revenue",
                "size": 29,
                "color": "#666666",
                "weight": 400
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "color": "#666666",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_operating_expense": {
        "blocks": [
          {
            "x": 2490,
            "top": 1052,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 34,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
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
      "value": 3.8,
      "valueText": "$3.8B",
      "notes": [
        "+55% Y/Y",
        "23% adj. margin",
        "+14pp Y/Y"
      ]
    },
    {
      "id": "networks",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Networks",
      "value": 4.8,
      "valueText": "$4.8B",
      "notes": [
        "(9%) Y/Y",
        "31% adj. margin",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "streaming",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Streaming",
      "value": 2.8,
      "valueText": "$2.8B",
      "notes": [
        "+9% Y/Y",
        "10% adj. margin",
        "+15pp Y/Y"
      ]
    },
    {
      "id": "gross_revenue",
      "col": 1,
      "order": 3,
      "type": "hub",
      "label": "Gross revenue",
      "value": 11.4
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 4,
      "type": "hub",
      "label": "Revenue",
      "value": 9.8,
      "valueText": "$9.8B",
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 5,
      "type": "cost",
      "label": "Eliminations",
      "value": -1.6,
      "valueText": "($1.6B)"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 6,
      "type": "profit",
      "label": "Gross profit",
      "value": 3.8,
      "valueText": "$3.8B",
      "notes": [
        "39% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 6.0,
      "valueText": "($6.0B)"
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -0.2,
      "valueText": "($0.2B)",
      "notes": [
        "(2%) margin",
        "+103pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 9,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 4.0,
      "valueText": "($4.0B)"
    },
    {
      "id": "sga",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "SG&A",
      "value": 2.5,
      "valueText": "($2.5B)",
      "notes": [
        "25% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "amortization",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": "Amortization",
      "value": 1.4,
      "valueText": "($1.4B)",
      "notes": [
        "15% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "other_operating_expense",
      "col": 5,
      "order": 12,
      "type": "cost",
      "label": "Other",
      "value": 0.1,
      "valueText": "($0.1B)"
    }
  ],
  "links": [
    {
      "source": "studios",
      "target": "gross_revenue",
      "value": 3.8,
      "width": 102,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "networks",
      "target": "gross_revenue",
      "value": 4.8,
      "width": 129,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "streaming",
      "target": "gross_revenue",
      "value": 2.8,
      "width": 75,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 9.8,
      "width": 265,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_revenue",
      "target": "eliminations",
      "value": 1.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 42,
      "targetWidth": 43
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3.8,
      "width": 104,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 6.0,
      "width": 160,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3.8,
      "width": 104,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.2,
      "width": 5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.5,
      "width": 67,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 1.4,
      "width": 39,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_operating_expense",
      "value": 0.1,
      "width": 3,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Warner Bros. Discovery · 2025 财年第二季度",
      "meta": {
        "title": "Warner Bros. 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "titleTextLength": 2160
      },
      "nodes": {
        "studios": {
          "label": "影视工作室",
          "notes": [
            "同比 +55%",
            "调整后利润率 23%",
            "同比 +14 个百分点"
          ]
        },
        "networks": {
          "label": "线性网络",
          "notes": [
            "同比 (9%)",
            "调整后利润率 31%",
            "同比 (6 个百分点)"
          ]
        },
        "streaming": {
          "label": "流媒体",
          "notes": [
            "同比 +9%",
            "调整后利润率 10%",
            "同比 +15 个百分点"
          ]
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
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 39%",
            "同比 +3 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ]
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (2%)",
            "同比 +103 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "sga": {
          "label": "销售、一般及行政",
          "notes": [
            "占收入 25%",
            "同比 (0 个百分点)"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 15%",
            "同比 (3 个百分点)"
          ]
        },
        "other_operating_expense": {
          "label": "其他"
        },
        "gross_revenue": {
          "label": "总收入"
        }
      },
      "layout": {
        "labels": {
          "gross_revenue": {
            "blocks": []
          },
          "studios": {
            "blocks": [
              {
                "x": 464,
                "top": 312,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#0020af",
                    "weight": 400
                  },
                  {
                    "text": "同比 +55%",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 405,
                "top": 405,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "影视工作室",
                    "size": 40,
                    "color": "#0020af",
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 23%",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  },
                  {
                    "text": "同比 +14 个百分点",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "networks": {
            "blocks": [
              {
                "x": 464,
                "top": 594,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#0020af",
                    "weight": 400
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 405,
                "top": 692,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "线性网络",
                    "size": 40,
                    "color": "#0020af",
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 31%",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "streaming": {
            "blocks": [
              {
                "x": 464,
                "top": 913,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#0020af",
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 405,
                "top": 1004,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "流媒体",
                    "size": 40,
                    "color": "#0020af",
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 10%",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  },
                  {
                    "text": "同比 +15 个百分点",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1212,
                "top": 510,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "color": "#0020af",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#0020af",
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1212,
                "top": 1094,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 34,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1585,
                "top": 376,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 39%",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1585,
                "top": 1047,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 40,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1815,
                "top": 832,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 40,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#941100",
                    "weight": 400
                  },
                  {
                    "text": "利润率 (2%)",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  },
                  {
                    "text": "同比 +103 个百分点",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1960,
                "top": 499,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2510,
                "top": 511,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 34,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "color": "#941100",
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2490,
                "top": 803,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 34,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "color": "#941100",
                    "weight": 400
                  },
                  {
                    "text": "占收入 15%",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
                    "color": "#666666",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_operating_expense": {
            "blocks": [
              {
                "x": 2490,
                "top": 1052,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 34,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"47\" y=\"1197\" width=\"839\" height=\"120\" rx=\"31\" fill=\"#0020af\"/><text x=\"128\" y=\"1248\" font-size=\"30\" fill=\"#ffffff\">DTC 订阅用户</text><text data-operating-metric=\"dtc_subscribers\" x=\"380\" y=\"1248\" font-size=\"30\" fill=\"#ffffff\">125.7M</text><text x=\"500\" y=\"1248\" font-size=\"30\" fill=\"#ffffff\">（同比 +22%，环比 +3%）</text><text x=\"172\" y=\"1289\" font-size=\"30\" fill=\"#ffffff\">全球 ARPU</text><text data-operating-metric=\"global_arpu\" x=\"365\" y=\"1289\" font-size=\"30\" fill=\"#ffffff\">$7.14</text><text x=\"460\" y=\"1289\" font-size=\"30\" fill=\"#ffffff\">（同比 -11%，环比 +0%）</text><text x=\"199\" y=\"1350\" font-size=\"29\" fill=\"#666666\">ARPU = 每用户平均收入</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "dtc_subscribers",
      "label": "DTC subscribers",
      "literal": "125.7M",
      "value": "125700000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+22% Y/Y",
        "+3% Q/Q"
      ],
      "quote": "DTC subscribers 125.7M (+22% Y/Y & +3% Q/Q)",
      "anchor": {
        "type": "image-box",
        "box": [
          125,
          1218,
          700,
          36
        ]
      }
    },
    {
      "id": "global_arpu",
      "label": "Global ARPU",
      "literal": "$7.14",
      "value": "0.00714",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "-11% Y/Y",
        "+0% Q/Q"
      ],
      "quote": "Global ARPU $7.14 (-11% Y/Y & +0% Q/Q)",
      "anchor": {
        "type": "image-box",
        "box": [
          170,
          1260,
          600,
          36
        ]
      }
    }
  ]
});})();
