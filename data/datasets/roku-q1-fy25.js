(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "roku-q1-fy25",
  "name": "Roku · Q1 FY25",
  "company": "Roku",
  "meta": {
    "company": "Roku",
    "title": "Roku Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Quarter ended Mar. 31, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/roku-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2070,
    "hidePeriodStamp": true,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950
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
        "node": "#6f1ab1",
        "label": "#6b3b97"
      },
      "hub": {
        "node": "#6f1ab1",
        "label": "#6b3b97"
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
      "source": "#b791d4",
      "hub": "#b791d4",
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
  "operatingMetrics": [
    {
      "id": "streaming_hours",
      "value": "35800000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "35.8B"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/roku/company-wordmark.png",
      "x": 659,
      "y": 303,
      "width": 470,
      "height": 157
    },
    {
      "key": "platform-tv-screen",
      "href": "data/assets/raster-annotations/roku/platform-tv-screen.png",
      "x": 142,
      "y": 543,
      "width": 183,
      "height": 116
    },
    {
      "key": "devices-remote-cluster",
      "href": "data/assets/raster-annotations/roku/devices-remote-cluster.png",
      "x": 131,
      "y": 908,
      "width": 203,
      "height": 92
    }
  ],
  "layout": {
    "scale": 0.266,
    "nodes": {
      "platform": {
        "x": 413,
        "y": 543,
        "width": 72,
        "height": 235
      },
      "player": {
        "x": 413,
        "y": 1060,
        "width": 72,
        "height": 37
      },
      "revenue": {
        "x": 880,
        "y": 703,
        "width": 72,
        "height": 272
      },
      "gross_profit": {
        "x": 1345,
        "y": 544,
        "width": 72,
        "height": 118
      },
      "cost_of_revenue": {
        "x": 1353,
        "y": 941,
        "width": 72,
        "height": 152
      },
      "operating_loss": {
        "x": 1593,
        "y": 802,
        "width": 72,
        "height": 15
      },
      "operating_expenses": {
        "x": 1827,
        "y": 700,
        "width": 73,
        "height": 132
      },
      "platform_cost": {
        "x": 1742,
        "y": 1040,
        "width": 72,
        "height": 111
      },
      "player_cost": {
        "x": 1740,
        "y": 1261,
        "width": 71,
        "height": 41
      },
      "sm": {
        "x": 2282,
        "y": 545,
        "width": 72,
        "height": 59
      },
      "rnd": {
        "x": 2282,
        "y": 758,
        "width": 72,
        "height": 49
      },
      "ga": {
        "x": 2282,
        "y": 966,
        "width": 72,
        "height": 25
      }
    },
    "labels": {
      "platform": {
        "blocks": [
          {
            "x": 453,
            "top": 451,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+17% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 235,
            "top": 687,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Platform",
                "size": 40,
                "weight": 800
              },
              {
                "text": "53% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "player": {
        "blocks": [
          {
            "x": 448,
            "top": 969,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 240,
            "top": 1016,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Player",
                "size": 40,
                "weight": 800
              },
              {
                "text": "(14%) gross margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(9pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 914,
            "top": 558,
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
              },
              {
                "text": "+16% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1384,
            "top": 362,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "44% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1385,
            "top": 1115,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1423,
            "top": 755,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating loss",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(6%) margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+3pp Y/Y",
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
            "x": 1859,
            "top": 548,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "platform_cost": {
        "blocks": [
          {
            "x": 1845,
            "top": 1061,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Platform",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "player_cost": {
        "blocks": [
          {
            "x": 1861,
            "top": 1248,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Player",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2476,
            "top": 530,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "22% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2476,
            "top": 742,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "18% of revenue",
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
      "ga": {
        "blocks": [
          {
            "x": 2476,
            "top": 947,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "9% of revenue",
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
      }
    }
  },
  "nodes": [
    {
      "id": "platform",
      "label": "Platform",
      "value": 881,
      "valueText": "$881M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#6f1ab1",
      "labelColor": "#6b3b97",
      "linkTint": "#b791d4",
      "notes": [
        "+17% Y/Y",
        "53% gross margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "player",
      "label": "Player",
      "value": 140,
      "valueText": "$140M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#6f1ab1",
      "labelColor": "#6b3b97",
      "linkTint": "#b791d4",
      "notes": [
        "+11% Y/Y",
        "(14%) gross margin",
        "(9pp) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1021,
      "valueText": "$1,021M",
      "type": "hub",
      "col": 1,
      "order": 2,
      "color": "#6f1ab1",
      "labelColor": "#6b3b97",
      "linkTint": "#b791d4",
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 445,
      "valueText": "$445M",
      "type": "profit",
      "col": 2,
      "order": 3,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "44% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 576,
      "valueText": "($576M)",
      "type": "cost",
      "col": 2,
      "order": 4,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 58,
      "valueText": "($58M)",
      "type": "cost",
      "col": 3,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "(6%) margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 503,
      "valueText": "($503M)",
      "type": "cost",
      "col": 3,
      "order": 6,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "platform_cost",
      "label": "Platform",
      "value": 417,
      "valueText": "($417M)",
      "type": "cost",
      "col": 4,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "player_cost",
      "label": "Player",
      "value": 159,
      "valueText": "($159M)",
      "type": "cost",
      "col": 4,
      "order": 8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 224,
      "valueText": "($224M)",
      "type": "cost",
      "col": 5,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "22% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 185,
      "valueText": "($185M)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "18% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 95,
      "valueText": "($95M)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "9% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "platform",
      "target": "revenue",
      "value": 881,
      "sourceWidth": 235,
      "targetWidth": 235,
      "y0": 660.5,
      "y1": 820.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "player",
      "target": "revenue",
      "value": 140,
      "sourceWidth": 37,
      "targetWidth": 37,
      "y0": 1078.5,
      "y1": 956.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 445,
      "sourceWidth": 119,
      "targetWidth": 118,
      "y0": 762.5,
      "y1": 603,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 576,
      "sourceWidth": 153,
      "targetWidth": 152,
      "y0": 898.5,
      "y1": 1017,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 445,
      "sourceWidth": 118,
      "targetWidth": 118,
      "y0": 603,
      "y1": 759,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 58,
      "sourceWidth": 15,
      "targetWidth": 14,
      "y0": 809.5,
      "y1": 825,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_revenue",
      "target": "platform_cost",
      "value": 417,
      "sourceWidth": 111,
      "targetWidth": 111,
      "y0": 996.5,
      "y1": 1095.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "player_cost",
      "value": 159,
      "sourceWidth": 41,
      "targetWidth": 41,
      "y0": 1072.5,
      "y1": 1281.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 224,
      "sourceWidth": 59,
      "targetWidth": 59,
      "y0": 729.5,
      "y1": 574.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 185,
      "sourceWidth": 49,
      "targetWidth": 49,
      "y0": 783.5,
      "y1": 782.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 95,
      "sourceWidth": 24,
      "targetWidth": 25,
      "y0": 820,
      "y1": 978.5,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"146\" y=\"1185\" width=\"381\" height=\"154\" rx=\"44\" fill=\"#6b3b97\"/><text x=\"336.5\" y=\"1236\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">Streaming hours</text><text data-operating-metric=\"streaming_hours\" x=\"336.5\" y=\"1278\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">35.8B</text><text x=\"336.5\" y=\"1317\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">+17% Y/Y</text></g>",
  "i18n": {
    "zh": {
      "name": "Roku · 2025 财年第一季度",
      "meta": {
        "title": "Roku 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月 31 日的季度"
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"146\" y=\"1185\" width=\"381\" height=\"154\" rx=\"44\" fill=\"#6b3b97\"/><text x=\"336.5\" y=\"1236\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"white\">流媒体观看时长</text><text data-operating-metric=\"streaming_hours\" x=\"336.5\" y=\"1278\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">35.8B</text><text x=\"336.5\" y=\"1317\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 +17%</text></g>",
      "nodes": {
        "platform": {
          "label": "平台",
          "notes": [
            "同比 +17%",
            "毛利率 53%",
            "同比 +0 个百分点"
          ]
        },
        "player": {
          "label": "播放器",
          "notes": [
            "同比 +11%",
            "毛利率 (14%)",
            "同比 (9 个百分点)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +16%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 44%",
            "同比 (0 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (6%)",
            "同比 +3 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "platform_cost": {
          "label": "平台"
        },
        "player_cost": {
          "label": "播放器"
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 22%",
            "同比 (1 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 18%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 9%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "platform": {
            "blocks": [
              {
                "x": 453,
                "top": 451,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +17%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 235,
                "top": 687,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "平台",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 53%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "player": {
            "blocks": [
              {
                "x": 448,
                "top": 969,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 240,
                "top": 1016,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "播放器",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 (14%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (9 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 914,
                "top": 558,
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
                  },
                  {
                    "text": "同比 +16%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1384,
                "top": 362,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 44%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1385,
                "top": 1115,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1423,
                "top": 755,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (6%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 1859,
                "top": 548,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "platform_cost": {
            "blocks": [
              {
                "x": 1845,
                "top": 1061,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "平台",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "player_cost": {
            "blocks": [
              {
                "x": 1861,
                "top": 1248,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "播放器",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2476,
                "top": 530,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 22%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2476,
                "top": 742,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 18%",
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
          "ga": {
            "blocks": [
              {
                "x": 2476,
                "top": 947,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 9%",
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
          }
        }
      }
    }
  }
});})();
