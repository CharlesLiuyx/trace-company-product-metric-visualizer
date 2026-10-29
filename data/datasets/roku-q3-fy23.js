window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "roku-q3-fy23",
  "name": "Roku · Q3 FY23",
  "company": "Roku",
  "meta": {
    "company": "Roku",
    "title": "Roku Q3 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/roku-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2050,
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
    "subtitleColor": "#777777",
    "noteColor": "#777777",
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
        "label": "#00934e"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    }
  },
  "layout": {
    "scale": 0.35,
    "nodes": {
      "platform": {
        "x": 419,
        "y": 572,
        "width": 72,
        "height": 276
      },
      "player": {
        "x": 419,
        "y": 1090,
        "width": 72,
        "height": 44
      },
      "revenue": {
        "x": 886,
        "y": 710,
        "width": 72,
        "height": 320
      },
      "gross_profit": {
        "x": 1350,
        "y": 510,
        "width": 73,
        "height": 130
      },
      "cost_of_revenue": {
        "x": 1350,
        "y": 1008,
        "width": 73,
        "height": 191
      },
      "operating_loss": {
        "x": 1576,
        "y": 784,
        "width": 73,
        "height": 123
      },
      "operating_expenses": {
        "x": 1831,
        "y": 591,
        "width": 72,
        "height": 251
      },
      "platform_cost": {
        "x": 1758,
        "y": 1099,
        "width": 73,
        "height": 140
      },
      "player_cost": {
        "x": 1756,
        "y": 1312,
        "width": 73,
        "height": 50
      },
      "sm": {
        "x": 2287,
        "y": 385,
        "width": 73,
        "height": 108
      },
      "rnd": {
        "x": 2287,
        "y": 696,
        "width": 73,
        "height": 100
      },
      "ga": {
        "x": 2287,
        "y": 997,
        "width": 73,
        "height": 45
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 920,
            "top": 566,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#6f1ab1"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#6f1ab1"
              },
              {
                "text": "+20% Y/Y",
                "size": 29,
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
            "x": 1387,
            "top": 323,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#00934e"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#00934e"
              },
              {
                "text": "40% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 29,
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
            "x": 1387,
            "top": 1215,
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1867,
            "top": 438,
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1394,
            "top": 773,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating loss",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "(38%) margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(19pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "platform": {
        "blocks": [
          {
            "x": 455,
            "top": 478,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#6f1ab1"
              },
              {
                "text": "+17% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 239,
            "top": 685.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Platform",
                "size": 40,
                "weight": 800,
                "color": "#6f1ab1"
              }
            ]
          },
          {
            "x": 239,
            "top": 737.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "48% gross margin",
                "size": 29,
                "weight": 800,
                "color": "#777777"
              },
              {
                "text": "(8pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "player": {
        "blocks": [
          {
            "x": 455,
            "top": 987,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#6f1ab1"
              },
              {
                "text": "+38% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 239,
            "top": 1009,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Player",
                "size": 40,
                "weight": 800,
                "color": "#6f1ab1"
              }
            ]
          },
          {
            "x": 239,
            "top": 1061,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "(8%) gross margin",
                "size": 29,
                "weight": 800,
                "color": "#777777"
              },
              {
                "text": "+8pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2478,
            "top": 414,
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
                "text": "34% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+6pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2478,
            "top": 713,
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
                "text": "31% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2478,
            "top": 997,
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
                "text": "14% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "platform_cost": {
        "blocks": [
          {
            "x": 1880,
            "top": 1112,
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
            "x": 1880,
            "top": 1273,
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
      "value": 787,
      "valueText": "$787M",
      "notes": [
        "+17% Y/Y",
        "48% gross margin",
        "(8pp) Y/Y"
      ],
      "color": "#6f1ab1",
      "labelColor": "#6f1ab1",
      "linkTint": "#b791d4"
    },
    {
      "id": "player",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Player",
      "value": 125,
      "valueText": "$125M",
      "notes": [
        "+38% Y/Y",
        "(8%) gross margin",
        "+8pp Y/Y"
      ],
      "color": "#6f1ab1",
      "labelColor": "#6f1ab1",
      "linkTint": "#b791d4"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 2,
      "type": "hub",
      "label": "Revenue",
      "value": 912,
      "valueText": "$912M",
      "notes": [
        "+20% Y/Y"
      ],
      "color": "#6f1ab1",
      "labelColor": "#6f1ab1",
      "linkTint": "#b791d4"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 3,
      "type": "profit",
      "label": "Gross profit",
      "value": 369,
      "valueText": "$369M",
      "notes": [
        "40% margin",
        "(6pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#00934e",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 543,
      "valueText": "($543M)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 5,
      "type": "cost",
      "label": "Operating loss",
      "value": 350,
      "valueText": "($350M)",
      "notes": [
        "(38%) margin",
        "(19pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Operating expenses",
      "value": 719,
      "valueText": "($719M)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "platform_cost",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Platform",
      "value": 409,
      "valueText": "($409M)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "player_cost",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Player",
      "value": 135,
      "valueText": "($135M)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 9,
      "type": "cost",
      "label": "S&M",
      "value": 308,
      "valueText": "($308M)",
      "notes": [
        "34% of revenue",
        "+6pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "R&D",
      "value": 282,
      "valueText": "($282M)",
      "notes": [
        "31% of revenue",
        "+4pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": "G&A",
      "value": 129,
      "valueText": "($129M)",
      "notes": [
        "14% of revenue",
        "+3pp Y/Y"
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
      "value": 787,
      "width": 276,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#b791d4"
    },
    {
      "source": "player",
      "target": "revenue",
      "value": 125,
      "width": 44,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#b791d4"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 369,
      "width": 130,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 543,
      "width": 190,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 369,
      "width": 129,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 350,
      "width": 122,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_revenue",
      "target": "platform_cost",
      "value": 409,
      "width": 140,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_revenue",
      "target": "player_cost",
      "value": 135,
      "width": 50,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 308,
      "width": 108,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 282,
      "width": 99,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 129,
      "width": 44,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "annotationsSvg": "<g><rect x=\"43\" y=\"1174\" width=\"352\" height=\"154\" rx=\"44\" fill=\"#6b3b97\"/><text x=\"219.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">Active accounts</text><text data-operating-metric=\"active_accounts\" x=\"219.0\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">75.8M</text><text x=\"219.0\" y=\"1306\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">+16% Y/Y</text><rect x=\"400\" y=\"1174\" width=\"381\" height=\"154\" rx=\"44\" fill=\"#6b3b97\"/><text x=\"590.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">Streaming hours</text><text data-operating-metric=\"streaming_hours\" x=\"590.5\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">26.7B</text><text x=\"590.5\" y=\"1306\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">+22% Y/Y</text><rect x=\"786\" y=\"1174\" width=\"181\" height=\"154\" rx=\"44\" fill=\"#6b3b97\"/><text x=\"876.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"876.5\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">$41.03</text><text x=\"876.5\" y=\"1306\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">(7%) Y/Y</text><text x=\"435\" y=\"1386\" text-anchor=\"middle\" font-size=\"29\" fill=\"#777777\">ARPU = Average Revenue Per User</text></g>",
  "operatingMetrics": [
    {
      "id": "active_accounts",
      "value": "75800000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "75.8M"
    },
    {
      "id": "streaming_hours",
      "value": "26700000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "26.7B"
    },
    {
      "id": "arpu",
      "value": "0.04103",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$41.03"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/roku/company-wordmark.png",
      "x": 665,
      "y": 311,
      "width": 459,
      "height": 145
    },
    {
      "key": "platform-tv-screen",
      "href": "data/assets/raster-annotations/roku/platform-tv-screen.png",
      "x": 140,
      "y": 550,
      "width": 188,
      "height": 118
    },
    {
      "key": "devices-remote-cluster",
      "href": "data/assets/raster-annotations/roku/devices-remote-cluster.png",
      "x": 130,
      "y": 910,
      "width": 200,
      "height": 92
    }
  ],
  "i18n": {
    "zh": {
      "name": "Roku · 2023 财年第三季度",
      "meta": {
        "title": "Roku 2023 财年第三季度利润表",
        "period": "",
        "periodNote": ""
      },
      "nodes": {
        "platform": {
          "label": "平台",
          "notes": [
            "同比 +17%",
            "毛利率 48%",
            "同比 (8 个百分点)"
          ]
        },
        "player": {
          "label": "播放器",
          "notes": [
            "同比 +38%",
            "毛利率 (8%)",
            "同比 +8 个百分点"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +20%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 40%",
            "同比 (6 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (38%)",
            "同比 (19 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "platform_cost": {
          "label": "平台",
          "notes": []
        },
        "player_cost": {
          "label": "播放器",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 34%",
            "同比 +6 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 31%",
            "同比 +4 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 14%",
            "同比 +3 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 920,
                "top": 566,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#6f1ab1"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#6f1ab1"
                  },
                  {
                    "text": "同比 +20%",
                    "size": 29,
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
                "x": 1387,
                "top": 323,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#00934e"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#00934e"
                  },
                  {
                    "text": "利润率 40%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 29,
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
                "x": 1387,
                "top": 1215,
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1867,
                "top": 438,
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1394,
                "top": 773,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "利润率 (38%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (19 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "platform": {
            "blocks": [
              {
                "x": 455,
                "top": 478,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#6f1ab1"
                  },
                  {
                    "text": "同比 +17%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 239,
                "top": 685.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "平台",
                    "size": 40,
                    "weight": 800,
                    "color": "#6f1ab1"
                  }
                ]
              },
              {
                "x": 239,
                "top": 737.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利率 48%",
                    "size": 29,
                    "weight": 800,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (8 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "player": {
            "blocks": [
              {
                "x": 455,
                "top": 987,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#6f1ab1"
                  },
                  {
                    "text": "同比 +38%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 239,
                "top": 1009,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "播放器",
                    "size": 40,
                    "weight": 800,
                    "color": "#6f1ab1"
                  }
                ]
              },
              {
                "x": 239,
                "top": 1061,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利率 (8%)",
                    "size": 29,
                    "weight": 800,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +8 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2478,
                "top": 414,
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
                    "text": "占收入 34%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2478,
                "top": 713,
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
                    "text": "占收入 31%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2478,
                "top": 997,
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
                    "text": "占收入 14%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "platform_cost": {
            "blocks": [
              {
                "x": 1880,
                "top": 1112,
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
                "x": 1880,
                "top": 1273,
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
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"43\" y=\"1174\" width=\"352\" height=\"154\" rx=\"44\" fill=\"#6b3b97\"/><text x=\"219.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">活跃账户</text><text data-operating-metric=\"active_accounts\" x=\"219.0\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">75.8M</text><text x=\"219.0\" y=\"1306\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 +16%</text><rect x=\"400\" y=\"1174\" width=\"381\" height=\"154\" rx=\"44\" fill=\"#6b3b97\"/><text x=\"590.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">流媒体观看时长</text><text data-operating-metric=\"streaming_hours\" x=\"590.5\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">26.7B</text><text x=\"590.5\" y=\"1306\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 +22%</text><rect x=\"786\" y=\"1174\" width=\"181\" height=\"154\" rx=\"44\" fill=\"#6b3b97\"/><text x=\"876.5\" y=\"1225\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">每户收入</text><text data-operating-metric=\"arpu\" x=\"876.5\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">$41.03</text><text x=\"876.5\" y=\"1306\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 (7%)</text><text x=\"435\" y=\"1386\" text-anchor=\"middle\" font-size=\"29\" fill=\"#777777\">ARPU = 每用户平均收入</text></g>"
    }
  }
});
