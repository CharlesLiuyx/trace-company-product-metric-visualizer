(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "roku-q2-fy23",
  "name": "Roku · Q2 FY23",
  "company": "Roku",
  "meta": {
    "company": "Roku",
    "title": "Roku Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "Quarter ended June 30, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/roku-q2-fy23.png",
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
    "subtitleColor": "#777777",
    "noteColor": "#777777",
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
        "label": "#00964f"
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
      "lineGap": 9
    }
  },
  "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"43\" y=\"1174\" width=\"352\" height=\"155\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"219.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"700\" fill=\"white\">Active accounts</text><text data-operating-metric=\"active_accounts\" x=\"219.0\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">73.5M</text><text x=\"219.0\" y=\"1305\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">+16% Y/Y</text><rect x=\"402\" y=\"1174\" width=\"378\" height=\"155\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"591.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"700\" fill=\"white\">Streaming hours</text><text data-operating-metric=\"streaming_hours\" x=\"591.0\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">25.1B</text><text x=\"591.0\" y=\"1305\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">+21% Y/Y</text><rect x=\"785\" y=\"1174\" width=\"182\" height=\"159\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"876.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"700\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"876.0\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">$40.67</text><text x=\"876.0\" y=\"1305\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">(7%) Y/Y</text><text x=\"436\" y=\"1386\" text-anchor=\"middle\" font-size=\"29\" fill=\"#777777\">ARPU = Average Revenue Per User</text><text x=\"172\" y=\"1437\" font-size=\"40\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/roku/company-wordmark.png",
      "x": 654,
      "y": 310,
      "width": 480,
      "height": 151
    },
    {
      "key": "platform-tv-screen",
      "href": "data/assets/raster-annotations/roku/platform-tv-screen.png",
      "x": 141,
      "y": 550,
      "width": 185,
      "height": 117
    },
    {
      "key": "devices-remote-cluster",
      "href": "data/assets/raster-annotations/roku/devices-remote-cluster.png",
      "x": 130,
      "y": 909,
      "width": 207,
      "height": 94
    }
  ],
  "layout": {
    "scale": 0.338,
    "nodes": {
      "platform": {
        "x": 418,
        "y": 572,
        "width": 73,
        "height": 252
      },
      "player": {
        "x": 418,
        "y": 1049,
        "width": 73,
        "height": 35
      },
      "revenue": {
        "x": 885,
        "y": 717,
        "width": 72,
        "height": 286
      },
      "gross_profit": {
        "x": 1347,
        "y": 518,
        "width": 73,
        "height": 128
      },
      "cost_of_revenue": {
        "x": 1349,
        "y": 1011,
        "width": 74,
        "height": 159
      },
      "operating_loss": {
        "x": 1580,
        "y": 823,
        "width": 73,
        "height": 43
      },
      "operating_expenses": {
        "x": 1810,
        "y": 638,
        "width": 72,
        "height": 173
      },
      "platform_cost": {
        "x": 1710,
        "y": 1049,
        "width": 72,
        "height": 119
      },
      "player_cost": {
        "x": 1705,
        "y": 1251,
        "width": 73,
        "height": 42
      },
      "sm": {
        "x": 2286,
        "y": 416,
        "width": 73,
        "height": 77
      },
      "rnd": {
        "x": 2286,
        "y": 722,
        "width": 73,
        "height": 65
      },
      "ga": {
        "x": 2286,
        "y": 1017,
        "width": 73,
        "height": 30
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 920,
            "top": 571,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "+11% Y/Y",
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
            "x": 1386,
            "top": 335,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "45% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 1388,
            "top": 1187,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 40,
                "weight": 400
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
            "x": 1395,
            "top": 780,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "(15%) margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
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
            "x": 1850,
            "top": 481,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 400
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
      "platform_cost": {
        "blocks": [
          {
            "x": 1812,
            "top": 1072,
            "anchor": "start",
            "lineGap": 9,
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
            "x": 1828,
            "top": 1233,
            "anchor": "start",
            "lineGap": 9,
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
            "x": 2478,
            "top": 418,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "27% of revenue",
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
      "rnd": {
        "blocks": [
          {
            "x": 2478,
            "top": 717,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "23% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
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
            "top": 1003,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "10% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
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
            "x": 454,
            "top": 466,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 40,
                "weight": 400
              }
            ]
          },
          {
            "x": 238,
            "top": 673,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Platform",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 238,
            "top": 724,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "53% gross margin",
                "size": 29,
                "weight": 800
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          }
        ]
      },
      "player": {
        "blocks": [
          {
            "x": 454,
            "top": 943,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 40,
                "weight": 400
              }
            ]
          },
          {
            "x": 238,
            "top": 994,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Player",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 238,
            "top": 1045,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "(17%) gross margin",
                "size": 29,
                "weight": 800
              },
              {
                "text": "+3pp Y/Y",
                "size": 29,
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
      "id": "platform",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Platform",
      "value": 744,
      "valueText": "$744M",
      "notes": [
        "+11% Y/Y",
        "53% gross margin",
        "(3pp) Y/Y"
      ],
      "color": "#6f1ab1",
      "labelColor": "#6b3b97",
      "linkTint": "#b791d4"
    },
    {
      "id": "player",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Player",
      "value": 103,
      "valueText": "$103M",
      "notes": [
        "+9% Y/Y",
        "(17%) gross margin",
        "+3pp Y/Y"
      ],
      "color": "#6f1ab1",
      "labelColor": "#6b3b97",
      "linkTint": "#b791d4"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 2,
      "type": "hub",
      "label": "Revenue",
      "value": 847,
      "valueText": "$847M",
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#6f1ab1",
      "labelColor": "#6b3b97",
      "linkTint": "#b791d4"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 3,
      "type": "profit",
      "label": "Gross profit",
      "value": 378,
      "valueText": "$378M",
      "notes": [
        "45% margin",
        "(2pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#00964f",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 469,
      "valueText": "($469M)",
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
      "value": 126,
      "valueText": "($126M)",
      "notes": [
        "(15%) margin",
        "(1pp) Y/Y"
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
      "value": 504,
      "valueText": "($504M)",
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
      "value": 348,
      "valueText": "($348M)",
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
      "value": 121,
      "valueText": "($121M)",
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
      "value": 227,
      "valueText": "($227M)",
      "notes": [
        "27% of revenue",
        "+3pp Y/Y"
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
      "value": 192,
      "valueText": "($192M)",
      "notes": [
        "23% of revenue",
        "(3pp) Y/Y"
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
      "value": 85,
      "valueText": "($85M)",
      "notes": [
        "10% of revenue",
        "(1pp) Y/Y"
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
      "value": 744,
      "width": 252,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "player",
      "target": "revenue",
      "value": 103,
      "width": 35,
      "sourceOrder": 0,
      "targetOrder": 1,
      "targetWidth": 34
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 378,
      "width": 128,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 469,
      "width": 159,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 158
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 378,
      "width": 128,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "targetWidth": 130
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 126,
      "width": 43,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "cost_of_revenue",
      "target": "platform_cost",
      "value": 348,
      "width": 118,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "player_cost",
      "value": 121,
      "width": 41,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 227,
      "width": 77,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 192,
      "width": 65,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 85,
      "width": 30,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "operatingMetrics": [
    {
      "id": "active_accounts",
      "value": "73500000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "73.5M"
    },
    {
      "id": "streaming_hours",
      "value": "25100000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "25.1B"
    },
    {
      "id": "arpu",
      "value": "0.04067",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$40.67"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Roku · 2023 财年第二季度",
      "meta": {
        "title": "Roku 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月 30 日的季度"
      },
      "annotationsSvg": "<g font-family=\"Arial,sans-serif\"><rect x=\"43\" y=\"1174\" width=\"352\" height=\"155\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"219.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"700\" fill=\"white\">活跃账户</text><text data-operating-metric=\"active_accounts\" x=\"219.0\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">73.5M</text><text x=\"219.0\" y=\"1305\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 +16%</text><rect x=\"402\" y=\"1174\" width=\"378\" height=\"155\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"591.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"700\" fill=\"white\">流媒体观看时长</text><text data-operating-metric=\"streaming_hours\" x=\"591.0\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">25.1B</text><text x=\"591.0\" y=\"1305\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 +21%</text><rect x=\"785\" y=\"1174\" width=\"182\" height=\"159\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"876.0\" y=\"1225\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"700\" fill=\"white\">每用户平均收入</text><text data-operating-metric=\"arpu\" x=\"876.0\" y=\"1266\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">$40.67</text><text x=\"876.0\" y=\"1305\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 (7%)</text><text x=\"436\" y=\"1386\" text-anchor=\"middle\" font-size=\"29\" fill=\"#777777\">ARPU = 每用户平均收入</text><text x=\"172\" y=\"1437\" font-size=\"40\" font-weight=\"700\">来源：季度业绩</text></g>",
      "nodes": {
        "platform": {
          "label": "平台",
          "notes": [
            "同比 +11%",
            "毛利率 53%",
            "同比 (3 个百分点)"
          ]
        },
        "player": {
          "label": "播放器",
          "notes": [
            "同比 +9%",
            "毛利率 (17%)",
            "同比 +3 个百分点"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 45%",
            "同比 (2 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (15%)",
            "同比 (1 个百分点)"
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
            "占收入 27%",
            "同比 +3 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 23%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 10%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 920,
                "top": 571,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "同比 +11%",
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
                "x": 1386,
                "top": 335,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "利润率 45%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 1388,
                "top": 1187,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 40,
                    "weight": 400
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
                "x": 1395,
                "top": 780,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "利润率 (15%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
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
                "x": 1850,
                "top": 481,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 400
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
          "platform_cost": {
            "blocks": [
              {
                "x": 1812,
                "top": 1072,
                "anchor": "start",
                "lineGap": 9,
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
                "x": 1828,
                "top": 1233,
                "anchor": "start",
                "lineGap": 9,
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
                "x": 2478,
                "top": 418,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "占收入 27%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2478,
                "top": 717,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "占收入 23%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
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
                "top": 1003,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "占收入 10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 454,
                "top": 466,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 40,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 238,
                "top": 673,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "平台",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 238,
                "top": 724,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利率 53%",
                    "size": 29,
                    "weight": 800
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "player": {
            "blocks": [
              {
                "x": 454,
                "top": 943,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 40,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 238,
                "top": 994,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "播放器",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 238,
                "top": 1045,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利率 (17%)",
                    "size": 29,
                    "weight": 800
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 29,
                    "weight": 400
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
