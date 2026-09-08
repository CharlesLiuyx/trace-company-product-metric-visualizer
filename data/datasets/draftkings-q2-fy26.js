(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "draftkings-q2-fy26",
  "name": "DraftKings · Q2 FY26",
  "company": "DraftKings",
  "meta": {
    "company": "DraftKings",
    "title": "DraftKings Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/draftkings-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 124,
    "titleWeight": 800,
    "titleTextLength": 2380,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "nodeRadius": 0,
    "palette": {
      "source": {
        "node": "#f7740c",
        "label": "#f7740c"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
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
      "source": "#f3ba8b",
      "hub": "#858585",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 29,
      "lineGap": 8
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      \n    <g>\n      <rect x=\"192\" y=\"1116\" width=\"162\" height=\"165\" rx=\"32\" fill=\"#f7740c\"/>\n      <text x=\"273\" y=\"1166\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#ffffff\">MUPs</text>\n      <text x=\"273\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"400\" fill=\"#ffffff\">3.6M</text>\n      <text x=\"273\" y=\"1250\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"400\" fill=\"#ffffff\">+9% Y/Y</text>\n    </g>\n      \n    <g>\n      <rect x=\"359\" y=\"1116\" width=\"311\" height=\"165\" rx=\"32\" fill=\"#f7740c\"/>\n      <text x=\"514.5\" y=\"1166\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#ffffff\">ARPMUP</text>\n      <text x=\"514.5\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"400\" fill=\"#ffffff\">$132</text>\n      <text x=\"514.5\" y=\"1250\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"400\" fill=\"#ffffff\">(13%) Y/Y</text>\n    </g>\n      <text x=\"424\" y=\"1314\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#666666\">MUP = Monthly Unique Players</text>\n      <text x=\"424\" y=\"1352\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#666666\">ARPMUP = Average Revenue per MUP</text>\n    </g>",
  "rasterAnnotations": [
    {
      "key": "draftkings-q2-company-wordmark",
      "href": "data/assets/raster-annotations/draftkings-q2-fy26/company-wordmark.png",
      "x": 618,
      "y": 233,
      "width": 426,
      "height": 221
    },
    {
      "key": "draftkings-q2-online-gaming-cluster",
      "href": "data/assets/raster-annotations/draftkings-q2-fy26/online-gaming-cluster.png",
      "x": 14,
      "y": 374,
      "width": 154,
      "height": 315,
      "pairedNode": "online_gaming"
    }
  ],
  "layout": {
    "scale": 0.208,
    "nodes": {
      "online_gaming": {
        "x": 389,
        "y": 440,
        "width": 73,
        "height": 184
      },
      "gaming_software": {
        "x": 389,
        "y": 791,
        "width": 73,
        "height": 96
      },
      "other_revenue": {
        "x": 389,
        "y": 1052,
        "width": 73,
        "height": 19
      },
      "revenue": {
        "x": 856,
        "y": 616,
        "width": 72,
        "height": 300
      },
      "gross_profit": {
        "x": 1325,
        "y": 452,
        "width": 74,
        "height": 115
      },
      "cost_of_revenue": {
        "x": 1323,
        "y": 881,
        "width": 73,
        "height": 186
      },
      "operating_loss": {
        "x": 1616,
        "y": 790,
        "width": 73,
        "height": 14
      },
      "operating_expenses": {
        "x": 1791,
        "y": 572,
        "width": 72,
        "height": 128
      },
      "sm": {
        "x": 2257,
        "y": 372,
        "width": 73,
        "height": 67
      },
      "ga": {
        "x": 2257,
        "y": 642,
        "width": 73,
        "height": 36
      },
      "rnd": {
        "x": 2257,
        "y": 897,
        "width": 73,
        "height": 26
      }
    },
    "labels": {
      "online_gaming": {
        "blocks": [
          {
            "x": 425.5,
            "top": 349,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38
              },
              {
                "text": "(11%) Y/Y",
                "size": 29,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 275,
            "top": 483.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Online",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Gaming",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "gaming_software": {
        "blocks": [
          {
            "x": 419,
            "top": 700,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38
              },
              {
                "text": "+8% Y/Y",
                "size": 29,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 266.5,
            "top": 790.5,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gaming",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Software",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 428.5,
            "top": 945,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38
              },
              {
                "text": "+5% Y/Y",
                "size": 29,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 283.5,
            "top": 1037,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 888.5,
            "top": 470,
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
                "size": 38
              },
              {
                "text": "(5%) Y/Y",
                "size": 29,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1360,
            "top": 270,
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
                "size": 38
              },
              {
                "text": "38% margin",
                "size": 29,
                "color": "#666666"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 29,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1355,
            "top": 1087,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 38,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1654.5,
            "top": 815,
            "anchor": "middle",
            "lineGap": 14,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38
              },
              {
                "text": "(5%) margin",
                "size": 29,
                "color": "#666666"
              },
              {
                "text": "(15pp) Y/Y",
                "size": 29,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1831.5,
            "top": 408,
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
                "size": 38
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2445.5,
            "top": 365,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30
              },
              {
                "text": "22% of revenue",
                "size": 29,
                "color": "#666666"
              },
              {
                "text": "+7pp Y/Y",
                "size": 29,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2446.5,
            "top": 619,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30
              },
              {
                "text": "12% of revenue",
                "size": 29,
                "color": "#666666"
              },
              {
                "text": "+1pp Y/Y",
                "size": 29,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2445.5,
            "top": 877,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 30,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30
              },
              {
                "text": "9% of revenue",
                "size": 29,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 29,
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
      "id": "online_gaming",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Online",
        "Gaming"
      ],
      "value": 892,
      "color": "#f7740c",
      "labelColor": "#f7740c",
      "linkTint": "#f3ba8b",
      "notes": [
        "(11%) Y/Y"
      ],
      "valueText": "$892M"
    },
    {
      "id": "gaming_software",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Gaming",
        "Software"
      ],
      "value": 462,
      "color": "#61b510",
      "labelColor": "#61b510",
      "linkTint": "#b1d68c",
      "notes": [
        "+8% Y/Y"
      ],
      "valueText": "$462M"
    },
    {
      "id": "other_revenue",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Other",
      "value": 89,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "notes": [
        "+5% Y/Y"
      ],
      "valueText": "$89M"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 1443,
      "valueText": "$1,443M",
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "notes": [
        "(5%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 551,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "38% margin",
        "(5pp) Y/Y"
      ],
      "valueText": "$551M"
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
      "value": 892,
      "valueText": "($892M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -68,
      "valueText": "($68M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "(5%) margin",
        "(15pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 620,
      "valueText": "($620M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "sm",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "S&M",
      "value": 323,
      "valueText": "($323M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "22% of revenue",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "G&A",
      "value": 169,
      "valueText": "($169M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "12% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "R&D",
      "value": 128,
      "valueText": "($128M)",
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "9% of revenue",
        "+2pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "online_gaming",
      "target": "revenue",
      "value": 892,
      "sourceWidth": 184,
      "targetWidth": 185,
      "y0": 532,
      "y1": 708.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f3ba8b"
    },
    {
      "source": "gaming_software",
      "target": "revenue",
      "value": 462,
      "sourceWidth": 96,
      "targetWidth": 97,
      "y0": 839,
      "y1": 849.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#b1d68c"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 89,
      "sourceWidth": 19,
      "targetWidth": 18,
      "y0": 1061.5,
      "y1": 907,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 551,
      "sourceWidth": 114,
      "targetWidth": 115,
      "y0": 673,
      "y1": 509.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 892,
      "sourceWidth": 186,
      "targetWidth": 186,
      "y0": 823,
      "y1": 974,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 551,
      "sourceWidth": 115,
      "targetWidth": 115,
      "y0": 509.5,
      "y1": 629.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 68,
      "sourceWidth": 14,
      "targetWidth": 13,
      "y0": 797,
      "y1": 693.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 323,
      "sourceWidth": 68,
      "targetWidth": 67,
      "y0": 606,
      "y1": 405.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 169,
      "sourceWidth": 35,
      "targetWidth": 36,
      "y0": 657.5,
      "y1": 660,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 128,
      "sourceWidth": 25,
      "targetWidth": 26,
      "y0": 687.5,
      "y1": 910,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "DraftKings · 2026 财年第二季度",
      "meta": {
        "title": "DraftKings 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "",
        "titleTextLength": 2100
      },
      "nodes": {
        "online_gaming": {
          "label": "在线博彩",
          "notes": [
            "同比 (11%)"
          ]
        },
        "gaming_software": {
          "label": "游戏软件",
          "notes": [
            "同比 +8%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +5%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (5%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 38%",
            "同比 (5 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (5%)",
            "同比 (15 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 22%",
            "同比 +7 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 +1 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 9%",
            "同比 +2 个百分点"
          ]
        }
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      \n    <g>\n      <rect x=\"192\" y=\"1116\" width=\"162\" height=\"165\" rx=\"32\" fill=\"#f7740c\"/>\n      <text x=\"273\" y=\"1166\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#ffffff\">月独立玩家</text>\n      <text x=\"273\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"400\" fill=\"#ffffff\">360 万</text>\n      <text x=\"273\" y=\"1250\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"400\" fill=\"#ffffff\">同比 +9%</text>\n    </g>\n      \n    <g>\n      <rect x=\"359\" y=\"1116\" width=\"311\" height=\"165\" rx=\"32\" fill=\"#f7740c\"/>\n      <text x=\"514.5\" y=\"1166\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#ffffff\">每位玩家平均收入</text>\n      <text x=\"514.5\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"400\" fill=\"#ffffff\">$132</text>\n      <text x=\"514.5\" y=\"1250\" text-anchor=\"middle\" font-size=\"25\" font-weight=\"400\" fill=\"#ffffff\">同比 (13%)</text>\n    </g>\n      <text x=\"424\" y=\"1314\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#666666\">月独立玩家</text>\n      <text x=\"424\" y=\"1352\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#666666\">每位月独立玩家平均收入</text>\n    </g>",
      "layout": {
        "labels": {
          "online_gaming": {
            "blocks": [
              {
                "x": 425.5,
                "top": 349,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38
                  },
                  {
                    "text": "同比 (11%)",
                    "size": 29,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 275,
                "top": 509.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "在线博彩",
                    "size": 36,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "gaming_software": {
            "blocks": [
              {
                "x": 419,
                "top": 700,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38
                  },
                  {
                    "text": "同比 +8%",
                    "size": 29,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 266.5,
                "top": 820,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "游戏软件",
                    "size": 36,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 428.5,
                "top": 958,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38
                  },
                  {
                    "text": "同比 +5%",
                    "size": 29,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 283.5,
                "top": 1037,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 888.5,
                "top": 470,
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
                    "size": 38
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 29,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1360,
                "top": 270,
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
                    "size": 38
                  },
                  {
                    "text": "利润率 38%",
                    "size": 29,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 29,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1355,
                "top": 1087,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1654.5,
                "top": 821,
                "anchor": "middle",
                "lineGap": 14,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38
                  },
                  {
                    "text": "利润率 (5%)",
                    "size": 29,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (15 个百分点)",
                    "size": 29,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1831.5,
                "top": 408,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营",
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
                    "size": 38
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2445.5,
                "top": 365,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30
                  },
                  {
                    "text": "占收入 22%",
                    "size": 29,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 29,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2446.5,
                "top": 619,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30
                  },
                  {
                    "text": "占收入 12%",
                    "size": 29,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 29,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2445.5,
                "top": 877,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 30,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30
                  },
                  {
                    "text": "占收入 9%",
                    "size": 29,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 29,
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
