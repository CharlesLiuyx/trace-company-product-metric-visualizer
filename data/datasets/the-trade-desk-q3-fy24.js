window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "the-trade-desk-q3-fy24",
  "name": "The Trade Desk · Q3 FY24",
  "company": "The Trade Desk",
  "meta": {
    "company": "The Trade Desk",
    "title": "The Trade Desk Q3 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/the-trade-desk-q3-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 116,
    "titleWeight": 800,
    "titleTextLength": 2484,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoSvg": "\n    <g fill=\"#0099fa\">\n      <circle cx=\"125\" cy=\"125\" r=\"91\" fill=\"none\" stroke=\"#0099fa\" stroke-width=\"39\" stroke-dasharray=\"447 125\" transform=\"rotate(-45 125 125)\"/>\n      <path d=\"M65 0h120v48h-36v113h-48V48H65z\"/>\n      <rect x=\"101\" y=\"161\" width=\"48\" height=\"89\"/>\n    </g><text x=\"300\" y=\"205\" font-family=\"Arial, sans-serif\" font-size=\"220\" font-weight=\"700\" fill=\"#000\">theTradeDesk</text>",
    "logoViewBox": "0 0 2000 250",
    "logoX": 495,
    "logoY": 287,
    "logoWidth": 690,
    "logoHeight": 87
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666",
    "noteColor": "#666",
    "nodeRadius": 0,
    "palette": {
      "source": {
        "node": "#0099fa",
        "label": "#0099fa"
      },
      "hub": {
        "node": "#0099fa",
        "label": "#0099fa"
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
      "source": "#85d0f1",
      "hub": "#85d0f1",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 9
    }
  },
  "annotationsSvg": "<g><rect x=\"166\" y=\"1265\" width=\"544\" height=\"72\" rx=\"36\" fill=\"#009afc\"/><text x=\"241\" y=\"1314\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Customer retention</text><text data-operating-metric=\"customer_retention\" x=\"622\" y=\"1314\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">&gt; 95%</text><text x=\"320\" y=\"1175\" text-anchor=\"end\" font-size=\"23\" fill=\"#777\">Geographic breakdown</text><text x=\"320\" y=\"1205\" text-anchor=\"end\" font-size=\"23\" fill=\"#777\">based on Gross Billings</text></g>",
  "layout": {
    "scale": 0.61,
    "nodes": {
      "united_states": {
        "x": 368,
        "y": 534,
        "width": 72,
        "height": 337
      },
      "international": {
        "x": 368,
        "y": 1079,
        "width": 72,
        "height": 46
      },
      "revenue": {
        "x": 835,
        "y": 651,
        "width": 72,
        "height": 383
      },
      "gross_profit": {
        "x": 1297,
        "y": 534,
        "width": 73,
        "height": 307
      },
      "platform_operations": {
        "x": 1302,
        "y": 1044,
        "width": 73,
        "height": 75
      },
      "operating_profit": {
        "x": 1775,
        "y": 441,
        "width": 73,
        "height": 67
      },
      "operating_expenses": {
        "x": 1780,
        "y": 686,
        "width": 72,
        "height": 242
      },
      "other_income": {
        "x": 2105,
        "y": 443,
        "width": 72,
        "height": 11
      },
      "net_profit": {
        "x": 2236,
        "y": 342,
        "width": 73,
        "height": 58
      },
      "tax": {
        "x": 2236,
        "y": 603,
        "width": 73,
        "height": 21
      },
      "sales_marketing": {
        "x": 2236,
        "y": 739,
        "width": 73,
        "height": 86
      },
      "technology_development": {
        "x": 2236,
        "y": 921,
        "width": 73,
        "height": 72
      },
      "general_admin": {
        "x": 2236,
        "y": 1110,
        "width": 73,
        "height": 85
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 872,
            "top": 500,
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
                "size": 39,
                "weight": 400
              },
              {
                "text": "+27% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1344,
            "top": 344,
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
                "size": 39,
                "weight": 400
              },
              {
                "text": "80% margin",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "platform_operations": {
        "blocks": [
          {
            "x": 1342,
            "top": 1137,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Platform",
                "size": 40,
                "weight": 800
              },
              {
                "text": "operations",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1816,
            "top": 250,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "17% margin",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+10pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1811,
            "top": 939,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2145,
            "top": 473,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2448,
            "top": 299,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "15% margin",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+7pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2451,
            "top": 568,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sales_marketing": {
        "blocks": [
          {
            "x": 2467,
            "top": 709,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "22% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "technology_development": {
        "blocks": [
          {
            "x": 2460,
            "top": 891,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Technology &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "19% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "general_admin": {
        "blocks": [
          {
            "x": 2464,
            "top": 1109,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "General & admin",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "22% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "Includes SBC for CEO",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "performance ($30M)",
                "size": 28,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "united_states": {
        "blocks": [
          {
            "x": 410,
            "top": 436,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+29% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 320,
            "top": 678,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "United States",
                "size": 40,
                "weight": 800
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 410,
            "top": 982,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 320,
            "top": 1077.5,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "International",
                "size": 40,
                "weight": 800
              }
            ],
            "semanticRole": "name"
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "United States",
      "value": 553,
      "notes": [
        "+29% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85caf6"
    },
    {
      "id": "international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "International",
      "value": 75,
      "notes": [
        "+18% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85caf6"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 628,
      "notes": [
        "+27% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85d0f1"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 505,
      "notes": [
        "80% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "platform_operations",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Platform",
        "operations"
      ],
      "value": 122,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 108,
      "notes": [
        "17% margin",
        "+10pp Y/Y"
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
      "value": 397,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "other_income",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 19,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 94,
      "notes": [
        "15% margin",
        "+7pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 33,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "sales_marketing",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Sales & marketing",
      "value": 140,
      "notes": [
        "22% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "technology_development",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": [
        "Technology &",
        "development"
      ],
      "value": 118,
      "notes": [
        "19% of revenue",
        "(5pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "general_admin",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "General & admin",
      "value": 139,
      "notes": [
        "22% of revenue",
        "(5pp) Y/Y",
        "Includes SBC for CEO performance ($30M)"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 553,
      "sourceWidth": 337,
      "targetWidth": 337,
      "y0": 702.5,
      "y1": 819.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85caf6"
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 75,
      "sourceWidth": 46,
      "targetWidth": 46,
      "y0": 1102,
      "y1": 1011,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85caf6"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 505,
      "sourceWidth": 308,
      "targetWidth": 307,
      "y0": 805,
      "y1": 687.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "platform_operations",
      "value": 122,
      "sourceWidth": 75,
      "targetWidth": 75,
      "y0": 996.5,
      "y1": 1081.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 108,
      "sourceWidth": 66,
      "targetWidth": 67,
      "y0": 567,
      "y1": 474.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 397,
      "sourceWidth": 241,
      "targetWidth": 242,
      "y0": 720.5,
      "y1": 807,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 75,
      "sourceWidth": 46,
      "targetWidth": 46,
      "y0": 464,
      "y1": 365,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 33,
      "sourceWidth": 21,
      "targetWidth": 21,
      "y0": 497.5,
      "y1": 613.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 19,
      "sourceWidth": 11,
      "targetWidth": 12,
      "y0": 448.5,
      "y1": 394,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99",
      "curve": {
        "c1x": 2200,
        "c1y": 448.5,
        "c2x": 2200,
        "c2y": 394
      }
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 140,
      "sourceWidth": 85,
      "targetWidth": 86,
      "y0": 728.5,
      "y1": 782,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 118,
      "sourceWidth": 72,
      "targetWidth": 72,
      "y0": 807,
      "y1": 957,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 139,
      "sourceWidth": 85,
      "targetWidth": 85,
      "y0": 885.5,
      "y1": 1152.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "The Trade Desk · 2024 财年第三季度",
      "meta": {
        "title": "The Trade Desk 2024 财年第三季度利润表",
        "titleSize": 112,
        "titleTextLength": 1970
      },
      "annotationsSvg": "<g><rect x=\"166\" y=\"1265\" width=\"544\" height=\"72\" rx=\"36\" fill=\"#009afc\"/><text x=\"241\" y=\"1314\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">客户留存率</text><text data-operating-metric=\"customer_retention\" x=\"622\" y=\"1314\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">&gt; 95%</text><text x=\"320\" y=\"1175\" text-anchor=\"end\" font-size=\"23\" fill=\"#777\">地域划分依据</text><text x=\"320\" y=\"1205\" text-anchor=\"end\" font-size=\"23\" fill=\"#777\">为广告投放总额</text></g>",
      "nodes": {
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +27%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 80%",
            "同比 (1 个百分点)"
          ]
        },
        "platform_operations": {
          "label": "平台运营",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 17%",
            "同比 +10 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 15%",
            "同比 +7 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sales_marketing": {
          "label": "销售与营销",
          "notes": [
            "占收入 22%",
            "同比 (0 个百分点)"
          ]
        },
        "technology_development": {
          "label": "技术与开发",
          "notes": [
            "占收入 19%",
            "同比 (5 个百分点)"
          ]
        },
        "general_admin": {
          "label": "一般与行政",
          "notes": [
            "占收入 22%",
            "同比 (5 个百分点)",
            "包含 CEO 绩效相关的股权激励（$30M）"
          ]
        },
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +29%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +18%"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 872,
                "top": 500,
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
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1344,
                "top": 344,
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
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 80%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "platform_operations": {
            "blocks": [
              {
                "x": 1342,
                "top": 1137,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "平台运营",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1816,
                "top": 250,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +10 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1811,
                "top": 939,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2145,
                "top": 473,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2448,
                "top": 299,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2451,
                "top": 568,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sales_marketing": {
            "blocks": [
              {
                "x": 2467,
                "top": 709,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 22%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "technology_development": {
            "blocks": [
              {
                "x": 2460,
                "top": 891,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 19%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "general_admin": {
            "blocks": [
              {
                "x": 2464,
                "top": 1109,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "一般与行政",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 22%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "包含 CEO 绩效相关",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "股权激励（$30M）",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "united_states": {
            "blocks": [
              {
                "x": 410,
                "top": 436,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +29%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 320,
                "top": 678,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "美国",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 410,
                "top": 982,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 320,
                "top": 1077.5,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "国际",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "semanticRole": "name"
              }
            ]
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "customer_retention",
      "value": "95",
      "unit": "%",
      "currency": null,
      "comparison": "gt",
      "literal": "> 95%"
    }
  ]
});
