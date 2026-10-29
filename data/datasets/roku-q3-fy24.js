window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "roku-q3-fy24",
  "name": "Roku · Q3 FY24",
  "company": "Roku",
  "meta": {
    "company": "Roku",
    "title": "Roku Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Quarter ended Sep. 30, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/roku-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2050,
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
    "titleColor": "#16527a",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#711bb3",
        "label": "#711bb3"
      },
      "hub": {
        "node": "#711bb3",
        "label": "#711bb3"
      },
      "profit": {
        "node": "#2ca42a",
        "label": "#008f48"
      },
      "cost": {
        "node": "#df0000",
        "label": "#991600"
      }
    },
    "linkTint": {
      "source": "#af8bd5",
      "hub": "#af8bd5",
      "profit": "#9bd39a",
      "cost": "#e18486"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g font-family=\"Montserrat,Arial,sans-serif\"><rect x=\"37\" y=\"1150\" width=\"180\" height=\"160\" rx=\"43\" fill=\"#6b3994\"/><text x=\"127\" y=\"1200\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"127\" y=\"1243\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">$41.10</text><text x=\"127\" y=\"1283\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">Flat Y/Y</text><rect x=\"221\" y=\"1155\" width=\"466\" height=\"155\" rx=\"43\" fill=\"#6b3994\"/><text x=\"454\" y=\"1205\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"white\">Streaming households</text><text data-operating-metric=\"households\" x=\"454\" y=\"1248\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">85.5M</text><text x=\"454\" y=\"1288\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">+13% Y/Y</text><rect x=\"691\" y=\"1155\" width=\"380\" height=\"155\" rx=\"43\" fill=\"#6b3994\"/><text x=\"881\" y=\"1205\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"white\">Streaming hours</text><text data-operating-metric=\"hours\" x=\"881\" y=\"1248\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">32.0B</text><text x=\"881\" y=\"1288\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">+20% Y/Y</text><text x=\"436\" y=\"1346\" text-anchor=\"middle\" font-size=\"29\" fill=\"#777777\">ARPU = Average Revenue Per User</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/roku/company-wordmark.png",
      "x": 670,
      "y": 314,
      "width": 454,
      "height": 140
    },
    {
      "key": "platform-tv-screen",
      "href": "data/assets/raster-annotations/roku/platform-tv-screen.png",
      "x": 143,
      "y": 551,
      "width": 182,
      "height": 116
    },
    {
      "key": "devices-remote-cluster",
      "href": "data/assets/raster-annotations/roku/devices-remote-cluster.png",
      "x": 132,
      "y": 911,
      "width": 199,
      "height": 92
    }
  ],
  "layout": {
    "scale": 0.254,
    "nodes": {
      "platform": {
        "x": 413,
        "y": 543,
        "width": 72,
        "height": 232
      },
      "player": {
        "x": 413,
        "y": 1054,
        "width": 72,
        "height": 40
      },
      "revenue": {
        "x": 881,
        "y": 706,
        "width": 71,
        "height": 272
      },
      "gross_profit": {
        "x": 1348,
        "y": 542,
        "width": 71,
        "height": 122
      },
      "cost_of_revenue": {
        "x": 1355,
        "y": 957,
        "width": 72,
        "height": 148
      },
      "operating_profit": {
        "x": 1548,
        "y": 804,
        "width": 72,
        "height": 9
      },
      "operating_expenses": {
        "x": 1820,
        "y": 706,
        "width": 71,
        "height": 131
      },
      "platform_cost": {
        "x": 1723,
        "y": 1063,
        "width": 71,
        "height": 105
      },
      "player_cost": {
        "x": 1725,
        "y": 1259,
        "width": 71,
        "height": 44
      },
      "sm": {
        "x": 2282,
        "y": 493,
        "width": 72,
        "height": 60
      },
      "rnd": {
        "x": 2282,
        "y": 771,
        "width": 72,
        "height": 45
      },
      "ga": {
        "x": 2282,
        "y": 1068,
        "width": 72,
        "height": 26
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 916,
            "top": 554,
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
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1384,
            "top": 352,
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
                "text": "45% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1383,
            "top": 745,
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
                "text": "(3%) margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+35pp Y/Y",
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
            "x": 1855,
            "top": 550,
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1392,
            "top": 1121,
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
      "platform": {
        "blocks": [
          {
            "x": 449,
            "top": 441,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 238,
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
                "text": "54% gross margin",
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
      "player": {
        "blocks": [
          {
            "x": 449,
            "top": 955,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 238,
            "top": 1008,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Player",
                "size": 40,
                "weight": 800
              },
              {
                "text": "(8%) gross margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
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
            "x": 1812,
            "top": 1077,
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
            "x": 1812,
            "top": 1234,
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
            "x": 2478,
            "top": 478,
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
                "color": "#777777"
              },
              {
                "text": "(11pp) Y/Y",
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
            "top": 753,
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
                "text": "17% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(14pp) Y/Y",
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
            "top": 1038,
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
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
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
      "value": 908,
      "valueText": "$908M",
      "notes": [
        "+15% Y/Y",
        "54% gross margin",
        "+6pp Y/Y"
      ],
      "color": "#711bb3",
      "labelColor": "#711bb3",
      "linkTint": "#af8bd5"
    },
    {
      "id": "player",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Player",
      "value": 154,
      "valueText": "$154M",
      "notes": [
        "+23% Y/Y",
        "(8%) gross margin",
        "(0pp) Y/Y"
      ],
      "color": "#711bb3",
      "labelColor": "#711bb3",
      "linkTint": "#af8bd5"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 2,
      "type": "hub",
      "label": "Revenue",
      "value": 1062,
      "valueText": "$1,062M",
      "notes": [
        "+16% Y/Y"
      ],
      "color": "#711bb3",
      "labelColor": "#711bb3",
      "linkTint": "#af8bd5"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 3,
      "type": "profit",
      "label": "Gross profit",
      "value": 480,
      "valueText": "$480M",
      "notes": [
        "45% margin",
        "+5pp Y/Y"
      ],
      "color": "#2ca42a",
      "labelColor": "#008f48",
      "linkTint": "#9bd39a"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 582,
      "valueText": "($582M)",
      "notes": [],
      "color": "#df0000",
      "labelColor": "#991600",
      "linkTint": "#e18486"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 5,
      "type": "cost",
      "label": "Operating loss",
      "value": 36,
      "valueText": "($36M)",
      "notes": [
        "(3%) margin",
        "+35pp Y/Y"
      ],
      "color": "#df0000",
      "labelColor": "#991600",
      "linkTint": "#e18486"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Operating expenses",
      "value": 516,
      "valueText": "($516M)",
      "notes": [],
      "color": "#df0000",
      "labelColor": "#991600",
      "linkTint": "#e18486"
    },
    {
      "id": "platform_cost",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Platform",
      "value": 416,
      "valueText": "($416M)",
      "notes": [],
      "color": "#df0000",
      "labelColor": "#991600",
      "linkTint": "#e18486"
    },
    {
      "id": "player_cost",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Player",
      "value": 166,
      "valueText": "($166M)",
      "notes": [],
      "color": "#df0000",
      "labelColor": "#991600",
      "linkTint": "#e18486"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 9,
      "type": "cost",
      "label": "S&M",
      "value": 237,
      "valueText": "($237M)",
      "notes": [
        "22% of revenue",
        "(11pp) Y/Y"
      ],
      "color": "#df0000",
      "labelColor": "#991600",
      "linkTint": "#e18486"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "R&D",
      "value": 179,
      "valueText": "($179M)",
      "notes": [
        "17% of revenue",
        "(14pp) Y/Y"
      ],
      "color": "#df0000",
      "labelColor": "#991600",
      "linkTint": "#e18486"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": "G&A",
      "value": 100,
      "valueText": "($100M)",
      "notes": [
        "9% of revenue",
        "(5pp) Y/Y"
      ],
      "color": "#df0000",
      "labelColor": "#991600",
      "linkTint": "#e18486"
    }
  ],
  "links": [
    {
      "source": "platform",
      "target": "revenue",
      "value": 908,
      "width": 232,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "player",
      "target": "revenue",
      "value": 154,
      "width": 40,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 480,
      "width": 122,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bd39a"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 582,
      "width": 148,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 150,
      "targetWidth": 148
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 480,
      "width": 122,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "operating_expenses",
      "value": 36,
      "width": 9,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "cost_of_revenue",
      "target": "platform_cost",
      "value": 416,
      "width": 105,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cost_of_revenue",
      "target": "player_cost",
      "value": 166,
      "width": 43,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 237,
      "width": 60,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 179,
      "width": 45,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 100,
      "width": 25,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Roku · 2024 财年第三季度",
      "meta": {
        "title": "Roku 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月 30 日的季度"
      },
      "nodes": {
        "platform": {
          "label": "平台",
          "notes": [
            "同比 +15%",
            "毛利率 54%",
            "同比 +6 个百分点"
          ]
        },
        "player": {
          "label": "播放器",
          "notes": [
            "同比 +23%",
            "毛利率 (8%)",
            "同比 (0 个百分点)"
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
            "利润率 45%",
            "同比 +5 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业亏损",
          "notes": [
            "利润率 (3%)",
            "同比 +35 个百分点"
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
            "占收入 22%",
            "同比 (11 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 17%",
            "同比 (14 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 9%",
            "同比 (5 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 916,
                "top": 554,
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
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1384,
                "top": 352,
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
                    "text": "利润率 45%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1383,
                "top": 745,
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
                    "text": "利润率 (3%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +35 个百分点",
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
                "x": 1855,
                "top": 550,
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1392,
                "top": 1121,
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
          "platform": {
            "blocks": [
              {
                "x": 449,
                "top": 441,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 238,
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
                    "text": "毛利率 54%",
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
          "player": {
            "blocks": [
              {
                "x": 449,
                "top": 955,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 238,
                "top": 1008,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "播放器",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 (8%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
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
                "x": 1812,
                "top": 1077,
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
                "x": 1812,
                "top": 1234,
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
                "x": 2478,
                "top": 478,
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
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (11 个百分点)",
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
                "top": 753,
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
                    "text": "占收入 17%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (14 个百分点)",
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
                "top": 1038,
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
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
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
      "annotationsSvg": "<g font-family=\"Montserrat,Arial,sans-serif\"><rect x=\"37\" y=\"1150\" width=\"180\" height=\"160\" rx=\"43\" fill=\"#6b3994\"/><text x=\"127\" y=\"1200\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"white\">ARPU</text><text data-operating-metric=\"arpu\" x=\"127\" y=\"1243\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">$41.10</text><text x=\"127\" y=\"1283\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比持平</text><rect x=\"221\" y=\"1155\" width=\"466\" height=\"155\" rx=\"43\" fill=\"#6b3994\"/><text x=\"454\" y=\"1205\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"white\">流媒体家庭数</text><text data-operating-metric=\"households\" x=\"454\" y=\"1248\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">85.5M</text><text x=\"454\" y=\"1288\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 +13%</text><rect x=\"691\" y=\"1155\" width=\"380\" height=\"155\" rx=\"43\" fill=\"#6b3994\"/><text x=\"881\" y=\"1205\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"white\">流媒体观看时长</text><text data-operating-metric=\"hours\" x=\"881\" y=\"1248\" text-anchor=\"middle\" font-size=\"31\" fill=\"white\">32.0B</text><text x=\"881\" y=\"1288\" text-anchor=\"middle\" font-size=\"29\" fill=\"white\">同比 +20%</text><text x=\"436\" y=\"1346\" text-anchor=\"middle\" font-size=\"29\" fill=\"#777777\">ARPU = 每用户平均收入</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "arpu",
      "value": "0.0411",
      "unit": "K",
      "currency": "USD",
      "literal": "$41.10",
      "comparison": "eq"
    },
    {
      "id": "households",
      "value": "85500000",
      "unit": "count",
      "currency": null,
      "literal": "85.5M",
      "comparison": "eq"
    },
    {
      "id": "hours",
      "value": "32000000000",
      "unit": "count",
      "currency": null,
      "literal": "32.0B",
      "comparison": "eq"
    }
  ]
});
