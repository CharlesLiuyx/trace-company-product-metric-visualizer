window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "roku-q3-fy25",
  "name": "Roku · Q3 FY25",
  "company": "Roku",
  "meta": {
    "company": "Roku",
    "title": "Roku Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Quarter ended Sep. 30, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/roku-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2070,
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
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#6f1ab1",
        "label": "#6f1ab1"
      },
      "hub": {
        "node": "#6f1ab1",
        "label": "#6f1ab1"
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
  "annotationsSvg": "<g><rect x=\"164\" y=\"1186\" width=\"381\" height=\"154\" rx=\"44\" fill=\"#6b3b97\"/><text x=\"354.5\" y=\"1237\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"#fff\">Streaming hours</text><text data-operating-metric=\"streaming_hours\" x=\"354.5\" y=\"1280\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">36.5B</text><text x=\"354.5\" y=\"1318\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">+9% Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/roku/company-wordmark.png",
      "x": 654,
      "y": 288,
      "width": 475,
      "height": 141
    },
    {
      "key": "platform-tv-screen",
      "href": "data/assets/raster-annotations/roku/platform-tv-screen.png",
      "x": 142,
      "y": 531,
      "width": 183,
      "height": 117
    },
    {
      "key": "devices-remote-cluster",
      "href": "data/assets/raster-annotations/roku/devices-remote-cluster.png",
      "x": 126,
      "y": 928,
      "width": 203,
      "height": 88
    }
  ],
  "layout": {
    "scale": 0.251,
    "nodes": {
      "platform": {
        "x": 413,
        "y": 540,
        "width": 73,
        "height": 268
      },
      "devices": {
        "x": 413,
        "y": 1046,
        "width": 73,
        "height": 37
      },
      "revenue": {
        "x": 880,
        "y": 684,
        "width": 73,
        "height": 305
      },
      "gross_profit": {
        "x": 1347,
        "y": 535,
        "width": 73,
        "height": 131
      },
      "cost_of_revenue": {
        "x": 1347,
        "y": 914,
        "width": 73,
        "height": 173
      },
      "operating_profit": {
        "x": 1814,
        "y": 436,
        "width": 73,
        "height": 4
      },
      "operating_expenses": {
        "x": 1814,
        "y": 688,
        "width": 73,
        "height": 130
      },
      "net_profit": {
        "x": 2281,
        "y": 350,
        "width": 73,
        "height": 10
      },
      "other": {
        "x": 2114,
        "y": 470,
        "width": 73,
        "height": 6
      },
      "platform_cost": {
        "x": 1576,
        "y": 957,
        "width": 73,
        "height": 131
      },
      "player_cost": {
        "x": 1574,
        "y": 1201,
        "width": 73,
        "height": 42
      },
      "sm": {
        "x": 2281,
        "y": 752,
        "width": 73,
        "height": 61
      },
      "rnd": {
        "x": 2281,
        "y": 974,
        "width": 73,
        "height": 45
      },
      "ga": {
        "x": 2281,
        "y": 1176,
        "width": 73,
        "height": 22
      }
    },
    "labels": {
      "platform": {
        "blocks": [
          {
            "x": 451,
            "top": 448,
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
            "x": 237,
            "top": 649.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Platform",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 237,
            "top": 726,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "51% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "devices": {
        "blocks": [
          {
            "x": 449,
            "top": 952,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+(5%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 237,
            "top": 1040,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Player",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 237,
            "top": 1095,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "(16%) gross margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(8pp) Y/Y",
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
            "x": 912,
            "top": 542,
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
                "text": "+14% Y/Y",
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
            "x": 1381,
            "top": 354,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
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
                "text": "43% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1383,
            "top": 1105,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1851,
            "top": 254,
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
              },
              {
                "text": "1% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+4pp Y/Y",
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
            "x": 1851,
            "top": 837,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
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
            "x": 2476,
            "top": 327,
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
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2151,
            "top": 495,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "platform_cost": {
        "blocks": [
          {
            "x": 1667,
            "top": 986,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Platform",
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
      "player_cost": {
        "blocks": [
          {
            "x": 1680,
            "top": 1182,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Player",
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
      "sm": {
        "blocks": [
          {
            "x": 2475,
            "top": 746,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "20% of revenue",
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
      "rnd": {
        "blocks": [
          {
            "x": 2475,
            "top": 958,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "15% of revenue",
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
            "x": 2475,
            "top": 1158,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "8% of revenue",
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
      }
    }
  },
  "nodes": [
    {
      "id": "platform",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Platform",
      "value": 1065,
      "valueText": "$1,065M",
      "notes": [
        "+17% Y/Y",
        "51% gross margin",
        "(3pp) Y/Y"
      ],
      "color": "#6f1ab1",
      "labelColor": "#6f1ab1",
      "linkTint": "#b791d4"
    },
    {
      "id": "devices",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Player",
      "value": 146,
      "valueText": "$146M",
      "notes": [
        "+(5%) Y/Y",
        "(16%) gross margin",
        "(8pp) Y/Y"
      ],
      "color": "#6f1ab1",
      "labelColor": "#6f1ab1",
      "linkTint": "#b791d4"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 1211,
      "valueText": "$1,211M",
      "notes": [
        "+14% Y/Y"
      ],
      "color": "#6f1ab1",
      "labelColor": "#6f1ab1",
      "linkTint": "#b791d4"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 525,
      "valueText": "$525M",
      "notes": [
        "43% margin",
        "(2pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 686,
      "valueText": "($686M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 9,
      "valueText": "$9M",
      "notes": [
        "1% margin",
        "+4pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
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
      "value": 515,
      "valueText": "($515M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 25,
      "valueText": "$25M",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "other",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 16,
      "valueText": "$16M",
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "platform_cost",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Platform",
      "value": 517,
      "valueText": "($517M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "player_cost",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Player",
      "value": 169,
      "valueText": "($169M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "S&M",
      "value": 242,
      "valueText": "($242M)",
      "notes": [
        "20% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "R&D",
      "value": 182,
      "valueText": "($182M)",
      "notes": [
        "15% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "G&A",
      "value": 91,
      "valueText": "($91M)",
      "notes": [
        "8% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "platform",
      "target": "revenue",
      "value": 1065,
      "width": 268,
      "targetOrder": 0
    },
    {
      "source": "devices",
      "target": "revenue",
      "value": 146,
      "width": 37,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 525,
      "width": 131,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 686,
      "width": 173,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 9,
      "width": 3,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 515,
      "width": 129,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 128,
      "targetWidth": 130
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 9,
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 4
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 16,
      "width": 6,
      "targetOrder": 1
    },
    {
      "source": "cost_of_revenue",
      "target": "platform_cost",
      "value": 517,
      "width": 131,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "player_cost",
      "value": 169,
      "width": 42,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 242,
      "width": 61,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 182,
      "width": 45,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 91,
      "width": 22,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 24,
      "targetWidth": 22
    }
  ],
  "i18n": {
    "zh": {
      "name": "Roku · 2025 财年第三季度",
      "meta": {
        "title": "Roku 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月 30 日的季度"
      },
      "annotationsSvg": "<g><rect x=\"164\" y=\"1186\" width=\"381\" height=\"154\" rx=\"44\" fill=\"#6b3b97\"/><text x=\"354.5\" y=\"1237\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"#fff\">流媒体观看时长</text><text data-operating-metric=\"streaming_hours\" x=\"354.5\" y=\"1280\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">36.5B</text><text x=\"354.5\" y=\"1318\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">同比 +9%</text></g>",
      "nodes": {
        "platform": {
          "label": "平台",
          "notes": [
            "同比 +17%",
            "毛利率 51%",
            "同比 (3 个百分点)"
          ]
        },
        "devices": {
          "label": "播放器",
          "notes": [
            "同比 +(5%) Y/Y",
            "毛利率 (16%)",
            "同比 (8 个百分点)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +14%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 43%",
            "同比 (2 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 1%",
            "同比 +4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "net_profit": {
          "label": "净利润"
        },
        "other": {
          "label": "其他"
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
            "占收入 20%",
            "同比 (2 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 15%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 8%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "platform": {
            "blocks": [
              {
                "x": 451,
                "top": 448,
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
                "x": 237,
                "top": 649.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "平台",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 237,
                "top": 726,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利率 51%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "devices": {
            "blocks": [
              {
                "x": 449,
                "top": 952,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +(5%) Y/Y",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 237,
                "top": 1040,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "播放器",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 237,
                "top": 1095,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利率 (16%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (8 个百分点)",
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
                "x": 912,
                "top": 542,
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
                    "text": "同比 +14%",
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
                "x": 1381,
                "top": 354,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
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
                    "text": "利润率 43%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1383,
                "top": 1105,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1851,
                "top": 254,
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
                  },
                  {
                    "text": "利润率 1%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +4 个百分点",
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
                "x": 1851,
                "top": 837,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
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
                "x": 2476,
                "top": 327,
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
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2151,
                "top": 495,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "platform_cost": {
            "blocks": [
              {
                "x": 1667,
                "top": 986,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "平台",
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
          "player_cost": {
            "blocks": [
              {
                "x": 1680,
                "top": 1182,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "播放器",
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
          "sm": {
            "blocks": [
              {
                "x": 2475,
                "top": 746,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 20%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2475,
                "top": 958,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 15%",
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
                "x": 2475,
                "top": 1158,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 8%",
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
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "streaming_hours",
      "value": "36500000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "36.5B"
    }
  ]
});
