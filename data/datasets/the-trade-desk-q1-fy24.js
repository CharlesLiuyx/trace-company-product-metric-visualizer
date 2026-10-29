window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "the-trade-desk-q1-fy24",
  "name": "The Trade Desk · Q1 FY24",
  "company": "The Trade Desk",
  "meta": {
    "company": "The Trade Desk",
    "title": "The Trade Desk Q1 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/the-trade-desk-q1-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196,
    "titleSize": 116,
    "titleWeight": 800,
    "titleTextLength": 2489,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoSvg": "<g transform=\"scale(.3345) translate(-40 -691)\"><path fill=\"#009afc\" d=\"M110 699H191V846H151V741H110Z M210 720A123 123 0 0 1 151 957V916A82 82 0 0 0 210 765Z M131 954A123 123 0 0 1 88 764H130A82 82 0 0 0 131 910Z\"/></g><text x=\"104\" y=\"74\" font-family=\"Arial, sans-serif\" font-size=\"91\" font-weight=\"700\" fill=\"#000\">theTradeDesk<tspan font-size=\"18\" baseline-shift=\"super\">®</tspan></text>",
    "logoViewBox": "0 0 685 92",
    "logoX": 516,
    "logoY": 270,
    "logoWidth": 685,
    "logoHeight": 92
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
  "annotationsSvg": "<g><rect x=\"165\" y=\"1265\" width=\"544\" height=\"72\" rx=\"36\" fill=\"#009afc\"/><text x=\"241\" y=\"1314\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Customer retention</text><text data-operating-metric=\"customer_retention\" x=\"548\" y=\"1314\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">&gt; 95%</text></g>",
  "layout": {
    "scale": 0.6659877800407332,
    "nodes": {
      "united_states": {
        "x": 368,
        "y": 506,
        "width": 72,
        "height": 287
      },
      "international": {
        "x": 368,
        "y": 1097,
        "width": 72,
        "height": 39
      },
      "revenue": {
        "x": 835,
        "y": 674,
        "width": 73,
        "height": 327
      },
      "gross_profit": {
        "x": 1305,
        "y": 510,
        "width": 72,
        "height": 258
      },
      "platform_operations": {
        "x": 1308,
        "y": 1064,
        "width": 72,
        "height": 69
      },
      "operating_profit": {
        "x": 1773,
        "y": 432,
        "width": 72,
        "height": 19
      },
      "operating_expenses": {
        "x": 1773,
        "y": 640,
        "width": 72,
        "height": 239
      },
      "other_income": {
        "x": 2108,
        "y": 420,
        "width": 72,
        "height": 12
      },
      "net_profit": {
        "x": 2237,
        "y": 358,
        "width": 73,
        "height": 21
      },
      "tax": {
        "x": 2237,
        "y": 575,
        "width": 73,
        "height": 9
      },
      "sales_marketing": {
        "x": 2237,
        "y": 714,
        "width": 73,
        "height": 81
      },
      "technology_development": {
        "x": 2237,
        "y": 937,
        "width": 73,
        "height": 71
      },
      "general_admin": {
        "x": 2237,
        "y": 1175,
        "width": 73,
        "height": 86
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 409,
            "top": 407,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+28% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 316,
            "top": 623,
            "anchor": "end",
            "lines": [
              {
                "text": "United States",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 409,
            "top": 997,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+28% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 320,
            "top": 1063,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "International",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Geographic breakdown",
                "size": 23,
                "color": "#777"
              },
              {
                "text": "based on Gross Billings",
                "size": 23,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 871,
            "top": 521,
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
                "text": "+28% Y/Y",
                "size": 29,
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
            "x": 1342,
            "top": 321,
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
                "text": "79% margin",
                "size": 29,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1808,
            "top": 242,
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
                "text": "6% margin",
                "size": 29,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+12pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2431,
            "top": 300,
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
                "text": "6% margin",
                "size": 29,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 29,
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
            "x": 1348,
            "top": 1142,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Platform",
                "size": 36,
                "weight": 800
              },
              {
                "text": "operations",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
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
            "x": 1805,
            "top": 893,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2143,
            "top": 441,
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
      "tax": {
        "blocks": [
          {
            "x": 2430,
            "top": 543,
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
            "top": 706,
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
                "text": "25% of revenue",
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
      "technology_development": {
        "blocks": [
          {
            "x": 2462,
            "top": 904,
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
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "22% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(3pp) Y/Y",
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
            "x": 2462,
            "top": 1148,
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
                "text": "26% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(8pp) Y/Y",
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
                "text": "performance ($36M)",
                "size": 28,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "international",
      "label": "International",
      "value": 59,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+28% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85d0f1"
    },
    {
      "id": "united_states",
      "label": "United States",
      "value": 432,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+28% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85d0f1"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 491,
      "notes": [
        "+28% Y/Y"
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
      "value": 387,
      "notes": [
        "79% margin",
        "+1pp Y/Y"
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
      "label": "Platform operations",
      "value": 104,
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
      "value": 29,
      "notes": [
        "6% margin",
        "+12pp Y/Y"
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
      "label": "Operating expenses",
      "value": 359,
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
      "value": 17,
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
      "value": 32,
      "notes": [
        "6% margin",
        "+4pp Y/Y"
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
      "value": 14,
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
      "value": 122,
      "notes": [
        "25% of revenue",
        "(1pp) Y/Y"
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
      "label": "Technology & development",
      "value": 108,
      "notes": [
        "22% of revenue",
        "(3pp) Y/Y"
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
      "value": 130,
      "notes": [
        "26% of revenue",
        "(8pp) Y/Y",
        "Includes SBC for CEO performance ($36M)"
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
      "value": 432,
      "sourceWidth": 287,
      "targetWidth": 288,
      "y0": 649.5,
      "y1": 818,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85c9f0"
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 59,
      "sourceWidth": 39,
      "targetWidth": 39,
      "y0": 1116.5,
      "y1": 981.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85c9f0"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 387,
      "sourceWidth": 258,
      "targetWidth": 258,
      "y0": 803,
      "y1": 639,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "platform_operations",
      "value": 104,
      "sourceWidth": 69,
      "targetWidth": 69,
      "y0": 966.5,
      "y1": 1098.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 29,
      "sourceWidth": 19,
      "targetWidth": 19,
      "y0": 519.5,
      "y1": 441.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 359,
      "sourceWidth": 239,
      "targetWidth": 239,
      "y0": 648.5,
      "y1": 759.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 15,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 437,
      "y1": 363,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 14,
      "sourceWidth": 9,
      "targetWidth": 9,
      "y0": 446.5,
      "y1": 579.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 17,
      "sourceWidth": 12,
      "targetWidth": 11,
      "y0": 426,
      "y1": 373.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 122,
      "sourceWidth": 81,
      "targetWidth": 81,
      "y0": 680.5,
      "y1": 754.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 108,
      "sourceWidth": 72,
      "targetWidth": 71,
      "y0": 757,
      "y1": 972.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 130,
      "sourceWidth": 86,
      "targetWidth": 86,
      "y0": 836,
      "y1": 1218,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "The Trade Desk · 2024 财年第一季度",
      "meta": {
        "title": "The Trade Desk 2024 财年第一季度利润表",
        "titleSize": 112,
        "titleTextLength": 1970
      },
      "nodes": {
        "international": {
          "label": "国际",
          "notes": [
            "同比 +28%"
          ]
        },
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +28%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +28%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 79%",
            "同比 +1 个百分点"
          ]
        },
        "platform_operations": {
          "label": "平台运营",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 6%",
            "同比 +12 个百分点"
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
            "利润率 6%",
            "同比 +4 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sales_marketing": {
          "label": "销售与营销",
          "notes": [
            "占收入 25%",
            "同比（1 个百分点）"
          ]
        },
        "technology_development": {
          "label": "技术与开发",
          "notes": [
            "占收入 22%",
            "同比（3 个百分点）"
          ]
        },
        "general_admin": {
          "label": "一般与行政",
          "notes": [
            "占收入 26%",
            "同比（8 个百分点）",
            "包含 CEO 绩效相关的股权激励（$36M）"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 409,
                "top": 407,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +28%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 316,
                "top": 623,
                "anchor": "end",
                "lines": [
                  {
                    "text": "美国",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 409,
                "top": 997,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +28%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 320,
                "top": 1063,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "国际",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "地域划分",
                    "size": 23,
                    "color": "#777"
                  },
                  {
                    "text": "基于总广告账单额",
                    "size": 23,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 871,
                "top": 521,
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
                    "text": "同比 +28%",
                    "size": 29,
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
                "x": 1342,
                "top": 321,
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
                    "text": "利润率 79%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1808,
                "top": 242,
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
                    "text": "利润率 6%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +12 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2431,
                "top": 300,
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
                    "text": "利润率 6%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 29,
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
                "x": 1348,
                "top": 1142,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "平台",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "运营",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
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
                "x": 1805,
                "top": 893,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2143,
                "top": 441,
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
          "tax": {
            "blocks": [
              {
                "x": 2430,
                "top": 543,
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
                "top": 706,
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
                    "text": "占收入 25%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比（1 个百分点）",
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
                "x": 2462,
                "top": 904,
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
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 22%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比（3 个百分点）",
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
                "x": 2462,
                "top": 1148,
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
                    "text": "占收入 26%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比（8 个百分点）",
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
                    "text": "股权激励（$36M）",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"165\" y=\"1265\" width=\"544\" height=\"72\" rx=\"36\" fill=\"#009afc\"/><text x=\"270\" y=\"1314\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">客户留存率</text><text data-operating-metric=\"customer_retention\" x=\"460\" y=\"1314\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">&gt; 95%</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "customer_retention",
      "literal": "> 95%",
      "value": "95",
      "unit": "%",
      "currency": null,
      "comparison": "gt"
    }
  ]
});
