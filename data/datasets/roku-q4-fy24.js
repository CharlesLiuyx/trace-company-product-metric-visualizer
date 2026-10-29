window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "roku-q4-fy24",
  "name": "Roku · Q4 FY24",
  "company": "Roku",
  "meta": {
    "company": "Roku",
    "title": "Roku Q4 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/roku-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2055,
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
    "titleColor": "#16527a",
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
        "label": "#00934f"
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
  "annotationsSvg": "<g><rect x=\"36\" y=\"1150\" width=\"181\" height=\"160\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"126.5\" y=\"1199\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"126.5\" y=\"1241\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">$41.49</text><text x=\"126.5\" y=\"1280\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">+4% Y/Y</text><rect x=\"220\" y=\"1152\" width=\"468\" height=\"156\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"454.0\" y=\"1201\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">Streaming households</text><text data-operating-metric=\"households\" x=\"454.0\" y=\"1243\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">89.8M</text><text x=\"454.0\" y=\"1282\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">+12% Y/Y</text><rect x=\"690\" y=\"1152\" width=\"380\" height=\"156\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"880.0\" y=\"1201\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">Streaming hours</text><text data-operating-metric=\"hours\" x=\"880.0\" y=\"1243\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">127.1B</text><text x=\"880.0\" y=\"1282\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">+20% Y/Y</text><text x=\"436\" y=\"1345\" text-anchor=\"middle\" font-size=\"29\" fill=\"#777777\">ARPU = Average Revenue Per User</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/roku/company-wordmark.png",
      "x": 657,
      "y": 303,
      "width": 473,
      "height": 155
    },
    {
      "key": "platform-tv-screen",
      "href": "data/assets/raster-annotations/roku/platform-tv-screen.png",
      "x": 139,
      "y": 545,
      "width": 187,
      "height": 124
    },
    {
      "key": "devices-remote-cluster",
      "href": "data/assets/raster-annotations/roku/devices-remote-cluster.png",
      "x": 125,
      "y": 906,
      "width": 212,
      "height": 99
    }
  ],
  "layout": {
    "scale": 0.248,
    "nodes": {
      "platform": {
        "x": 421,
        "y": 536,
        "width": 73,
        "height": 258
      },
      "devices": {
        "x": 421,
        "y": 1059,
        "width": 73,
        "height": 42
      },
      "revenue": {
        "x": 888,
        "y": 698,
        "width": 73,
        "height": 299
      },
      "gross_profit": {
        "x": 1350,
        "y": 525,
        "width": 73,
        "height": 128
      },
      "cost_of_revenue": {
        "x": 1350,
        "y": 925,
        "width": 73,
        "height": 171
      },
      "operating_loss": {
        "x": 1583,
        "y": 799,
        "width": 73,
        "height": 11
      },
      "operating_expenses": {
        "x": 1823,
        "y": 693,
        "width": 73,
        "height": 136
      },
      "platform_cost": {
        "x": 1823,
        "y": 1039,
        "width": 73,
        "height": 126
      },
      "player_cost": {
        "x": 1820,
        "y": 1263,
        "width": 73,
        "height": 44
      },
      "sm": {
        "x": 2289,
        "y": 527,
        "width": 73,
        "height": 68
      },
      "rnd": {
        "x": 2289,
        "y": 760,
        "width": 73,
        "height": 47
      },
      "ga": {
        "x": 2289,
        "y": 991,
        "width": 73,
        "height": 24
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 922,
            "top": 550,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#6b3b97"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#6b3b97"
              },
              {
                "text": "+22% Y/Y",
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
            "x": 1388,
            "top": 339,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#00934f"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#00934f"
              },
              {
                "text": "43% margin",
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
            "x": 1387,
            "top": 1113,
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
                "size": 29,
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
            "x": 1550,
            "top": 737,
            "anchor": "end",
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
                "text": "(3%) margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+7pp Y/Y",
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
            "x": 1856,
            "top": 544,
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
                "size": 29,
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
            "x": 2482,
            "top": 524,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "23% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
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
            "x": 2482,
            "top": 747,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "15% of revenue",
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
            "x": 2482,
            "top": 971,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "8% of revenue",
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
      "platform_cost": {
        "blocks": [
          {
            "x": 1912,
            "top": 1068,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Platform",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
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
            "x": 1931,
            "top": 1250,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Player",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "platform": {
        "blocks": [
          {
            "x": 456,
            "top": 429,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#6b3b97"
              },
              {
                "text": "+25% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 237,
            "top": 693,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Platform",
                "size": 40,
                "weight": 800,
                "color": "#6b3b97"
              },
              {
                "text": "54% gross margin",
                "size": 29,
                "weight": 800,
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
      "devices": {
        "blocks": [
          {
            "x": 456,
            "top": 956,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#6b3b97"
              },
              {
                "text": "+6% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 237,
            "top": 1012,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Player",
                "size": 40,
                "weight": 800,
                "color": "#6b3b97"
              },
              {
                "text": "(29%) gross margin",
                "size": 29,
                "weight": 800,
                "color": "#777777"
              },
              {
                "text": "(15pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
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
      "value": 1035,
      "valueText": "$1,035M",
      "notes": [
        "+25% Y/Y",
        "54% gross margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "devices",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Player",
      "value": 166,
      "valueText": "$166M",
      "notes": [
        "+6% Y/Y",
        "(29%) gross margin",
        "(15pp) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 2,
      "type": "hub",
      "label": "Revenue",
      "value": 1201,
      "valueText": "$1,201M",
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 3,
      "type": "profit",
      "label": "Gross profit",
      "value": 513,
      "valueText": "$513M",
      "notes": [
        "43% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 688,
      "valueText": "($688M)",
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 5,
      "type": "cost",
      "label": "Operating loss",
      "value": 39,
      "valueText": "($39M)",
      "notes": [
        "(3%) margin",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": "Operating expenses",
      "value": 551,
      "valueText": "($551M)",
      "notes": []
    },
    {
      "id": "platform_cost",
      "col": 4,
      "order": 7,
      "type": "cost",
      "label": "Platform",
      "value": 475,
      "valueText": "($475M)",
      "notes": []
    },
    {
      "id": "player_cost",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Player",
      "value": 213,
      "valueText": "($213M)",
      "notes": []
    },
    {
      "id": "sm",
      "col": 4,
      "order": 9,
      "type": "cost",
      "label": "S&M",
      "value": 272,
      "valueText": "($272M)",
      "notes": [
        "23% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 4,
      "order": 10,
      "type": "cost",
      "label": "R&D",
      "value": 185,
      "valueText": "($185M)",
      "notes": [
        "15% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": "G&A",
      "value": 94,
      "valueText": "($94M)",
      "notes": [
        "8% of revenue",
        "(2pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "platform",
      "target": "revenue",
      "value": 1035,
      "width": 258,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "devices",
      "target": "revenue",
      "value": 166,
      "width": 41,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 513,
      "width": 128,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 688,
      "width": 171,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 513,
      "width": 128,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "sourceWidth": 128,
      "targetWidth": 125
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 39,
      "width": 11,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "cost_of_revenue",
      "target": "platform_cost",
      "value": 475,
      "width": 126,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "player_cost",
      "value": 213,
      "width": 45,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 45,
      "targetWidth": 44
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 272,
      "width": 68,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 185,
      "width": 47,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 94,
      "width": 24,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 21,
      "targetWidth": 24
    }
  ],
  "i18n": {
    "zh": {
      "name": "Roku · 2024 财年第四季度",
      "meta": {
        "title": "Roku 2024 财年第四季度利润表",
        "period": "",
        "periodNote": ""
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 922,
                "top": 550,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#6b3b97"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#6b3b97"
                  },
                  {
                    "text": "同比 +22%",
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
                "x": 1388,
                "top": 339,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#00934f"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#00934f"
                  },
                  {
                    "text": "利润率 43%",
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
                "x": 1387,
                "top": 1113,
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
                    "size": 29,
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
                "x": 1550,
                "top": 737,
                "anchor": "end",
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
                    "text": "利润率 (3%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +7 个百分点",
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
                "x": 1856,
                "top": 544,
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
                    "size": 29,
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
                "x": 2482,
                "top": 524,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 23%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
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
                "x": 2482,
                "top": 747,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 15%",
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
                "x": 2482,
                "top": 971,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 8%",
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
          "platform_cost": {
            "blocks": [
              {
                "x": 1912,
                "top": 1068,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "平台",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
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
                "x": 1931,
                "top": 1250,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "播放器",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "platform": {
            "blocks": [
              {
                "x": 456,
                "top": 429,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#6b3b97"
                  },
                  {
                    "text": "同比 +25%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 237,
                "top": 693,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "平台",
                    "size": 40,
                    "weight": 800,
                    "color": "#6b3b97"
                  },
                  {
                    "text": "毛利率 54%",
                    "size": 29,
                    "weight": 800,
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
          "devices": {
            "blocks": [
              {
                "x": 456,
                "top": 956,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#6b3b97"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 237,
                "top": 1012,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "播放器",
                    "size": 40,
                    "weight": 800,
                    "color": "#6b3b97"
                  },
                  {
                    "text": "毛利率 (29%)",
                    "size": 29,
                    "weight": 800,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (15 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"36\" y=\"1150\" width=\"181\" height=\"160\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"126.5\" y=\"1199\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"126.5\" y=\"1241\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">$41.49</text><text x=\"126.5\" y=\"1280\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 +4%</text><rect x=\"220\" y=\"1152\" width=\"468\" height=\"156\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"454.0\" y=\"1201\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">流媒体家庭数</text><text data-operating-metric=\"households\" x=\"454.0\" y=\"1243\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">89.8M</text><text x=\"454.0\" y=\"1282\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 +12%</text><rect x=\"690\" y=\"1152\" width=\"380\" height=\"156\" rx=\"42\" fill=\"#6b3b97\"/><text x=\"880.0\" y=\"1201\" text-anchor=\"middle\" font-size=\"32\" font-weight=\"800\" fill=\"white\">流媒体观看时长</text><text data-operating-metric=\"hours\" x=\"880.0\" y=\"1243\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">127.1B</text><text x=\"880.0\" y=\"1282\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 +20%</text><text x=\"436\" y=\"1345\" text-anchor=\"middle\" font-size=\"29\" fill=\"#777777\">ARPU = 每用户平均收入</text></g>",
      "nodes": {
        "platform": {
          "label": "平台",
          "notes": [
            "同比 +25%",
            "毛利率 54%",
            "同比 (1 个百分点)"
          ]
        },
        "devices": {
          "label": "播放器",
          "notes": [
            "同比 +6%",
            "毛利率 (29%)",
            "同比 (15 个百分点)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +22%"
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
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (3%)",
            "同比 +7 个百分点"
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
            "占收入 23%",
            "同比 (4 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 15%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 8%",
            "同比 (2 个百分点)"
          ]
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "arpu",
      "value": "0.04149",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$41.49"
    },
    {
      "id": "households",
      "value": "89800000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "89.8M"
    },
    {
      "id": "hours",
      "value": "127100000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "127.1B"
    }
  ]
});
