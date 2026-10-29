window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "the-trade-desk-q1-fy25",
  "name": "The Trade Desk · Q1 FY25",
  "company": "The Trade Desk",
  "meta": {
    "company": "The Trade Desk",
    "title": "The Trade Desk Q1 FY25 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/the-trade-desk-q1-fy25.png",
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
    "periodNoteY": -950
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
  "annotationsSvg": "<g data-typography-role=\"brand\" transform=\"translate(477 65) scale(0.32)\"><g data-typography-role=\"brand\" fill=\"#0099fa\"><path d=\"M110 699H191V846H151V741H110Z\"/><path d=\"M210 720A123 123 0 0 1 151 957V916A82 82 0 0 0 210 765Z\"/><path d=\"M131 954A123 123 0 0 1 88 764H130A82 82 0 0 0 131 910Z\"/></g></g><g data-typography-role=\"brand\"><text x=\"595\" y=\"362\" font-size=\"94\" textLength=\"580\" lengthAdjust=\"spacingAndGlyphs\" font-weight=\"800\" fill=\"#000\">theTradeDesk</text></g><g><rect x=\"165\" y=\"1265\" width=\"544\" height=\"72\" rx=\"36\" fill=\"#009afc\"/><text x=\"241\" y=\"1314\" text-anchor=\"start\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Customer retention</text><text data-operating-metric=\"customer_retention\" x=\"570\" y=\"1314\" text-anchor=\"start\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">&gt; 95%</text></g><text x=\"194\" y=\"1161\" text-anchor=\"middle\" font-size=\"23\" fill=\"#777\">Geographic breakdown</text><text x=\"194\" y=\"1191\" text-anchor=\"middle\" font-size=\"23\" fill=\"#777\">based on Gross Billings</text>",
  "layout": {
    "scale": 0.5308441558441559,
    "nodes": {
      "united_states": {
        "x": 368,
        "y": 562,
        "width": 72,
        "height": 285
      },
      "international": {
        "x": 368,
        "y": 1081,
        "width": 72,
        "height": 43
      },
      "revenue": {
        "x": 836,
        "y": 673,
        "width": 72,
        "height": 327
      },
      "gross_profit": {
        "x": 1305,
        "y": 563,
        "width": 72,
        "height": 251
      },
      "platform_operations": {
        "x": 1303,
        "y": 1037,
        "width": 72,
        "height": 75
      },
      "operating_profit": {
        "x": 1773,
        "y": 466,
        "width": 72,
        "height": 29
      },
      "operating_expenses": {
        "x": 1775,
        "y": 686,
        "width": 72,
        "height": 223
      },
      "other_income": {
        "x": 2115,
        "y": 441,
        "width": 72,
        "height": 11
      },
      "net_profit": {
        "x": 2237,
        "y": 363,
        "width": 72,
        "height": 26
      },
      "tax": {
        "x": 2237,
        "y": 603,
        "width": 72,
        "height": 13
      },
      "sales_marketing": {
        "x": 2237,
        "y": 755,
        "width": 72,
        "height": 81
      },
      "technology_development": {
        "x": 2237,
        "y": 948,
        "width": 72,
        "height": 70
      },
      "general_admin": {
        "x": 2237,
        "y": 1151,
        "width": 72,
        "height": 71
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 872,
            "top": 525,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "+25% Y/Y",
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
            "top": 375,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "77% margin",
                "size": 29,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 1338,
            "top": 1130,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Platform",
                "size": 36,
                "weight": 800
              },
              {
                "text": "operations",
                "size": 36,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39,
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
            "x": 1810,
            "top": 278,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "9% margin",
                "size": 29,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 29,
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
            "x": 1810,
            "top": 929,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2150,
            "top": 469,
            "anchor": "middle",
            "lineGap": 10,
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
            "x": 2450,
            "top": 327,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "8% margin",
                "size": 29,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 29,
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
            "x": 2450,
            "top": 573,
            "anchor": "middle",
            "lineGap": 10,
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
            "x": 2460,
            "top": 758,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "+0pp Y/Y",
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
            "top": 941,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Technology &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "21% of revenue",
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
      "general_admin": {
        "blocks": [
          {
            "x": 2460,
            "top": 1148,
            "anchor": "middle",
            "lineGap": 10,
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
                "size": 27,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "performance ($24M)",
                "size": 27,
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
            "x": 405,
            "top": 470,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 800
              },
              {
                "text": "+24% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 319,
            "top": 680,
            "anchor": "end",
            "lineGap": 10,
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
            "x": 405,
            "top": 987,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 800
              },
              {
                "text": "+36% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 319,
            "top": 1078,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "International",
                "size": 40,
                "weight": 800
              }
            ]
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
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85d0f1",
      "value": 536,
      "notes": [
        "+24% Y/Y"
      ]
    },
    {
      "id": "international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "International",
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85d0f1",
      "value": 80,
      "notes": [
        "+36% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 616,
      "notes": [
        "+25% Y/Y"
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
      "value": 473,
      "notes": [
        "77% margin",
        "(2pp) Y/Y"
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
      "value": 143,
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
      "value": 54,
      "notes": [
        "9% margin",
        "+3pp Y/Y"
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
      "value": 419,
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
      "value": 21,
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
      "value": 50,
      "notes": [
        "8% margin",
        "+2pp Y/Y"
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
      "value": 25,
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
      "value": 153,
      "notes": [
        "25% of revenue",
        "+0pp Y/Y"
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
      "value": 132,
      "notes": [
        "21% of revenue",
        "(0pp) Y/Y"
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
      "value": 134,
      "notes": [
        "22% of revenue",
        "(5pp) Y/Y",
        "Includes SBC for CEO performance ($24M)"
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
      "value": 536,
      "sourceWidth": 285,
      "targetWidth": 285,
      "y0": 704.5,
      "y1": 815.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85d0f1"
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 80,
      "sourceWidth": 43,
      "targetWidth": 42,
      "y0": 1102.5,
      "y1": 979,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85d0f1"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 473,
      "sourceWidth": 251,
      "targetWidth": 251,
      "y0": 798.5,
      "y1": 688.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "platform_operations",
      "value": 143,
      "sourceWidth": 76,
      "targetWidth": 75,
      "y0": 962,
      "y1": 1074.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 54,
      "sourceWidth": 29,
      "targetWidth": 29,
      "y0": 577.5,
      "y1": 480.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 419,
      "sourceWidth": 222,
      "targetWidth": 223,
      "y0": 703,
      "y1": 797.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 29,
      "sourceWidth": 16,
      "targetWidth": 15,
      "y0": 474,
      "y1": 370.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 25,
      "sourceWidth": 13,
      "targetWidth": 13,
      "y0": 488.5,
      "y1": 609.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 21,
      "sourceWidth": 11,
      "targetWidth": 11,
      "y0": 446.5,
      "y1": 383.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99",
      "curve": {
        "c1x": 2210,
        "c1y": 446.5,
        "c2x": 2195,
        "c2y": 383.5
      }
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 153,
      "sourceWidth": 81,
      "targetWidth": 81,
      "y0": 726.5,
      "y1": 795.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 132,
      "sourceWidth": 70,
      "targetWidth": 70,
      "y0": 802,
      "y1": 983,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 134,
      "sourceWidth": 72,
      "targetWidth": 71,
      "y0": 873,
      "y1": 1186.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "The Trade Desk · 2025 财年第一季度",
      "meta": {
        "title": "The Trade Desk 2025 财年第一季度利润表",
        "titleSize": 112,
        "titleTextLength": 1970
      },
      "annotationsSvg": "<g data-typography-role=\"brand\" transform=\"translate(477 65) scale(0.32)\"><g data-typography-role=\"brand\" fill=\"#0099fa\"><path d=\"M110 699H191V846H151V741H110Z\"/><path d=\"M210 720A123 123 0 0 1 151 957V916A82 82 0 0 0 210 765Z\"/><path d=\"M131 954A123 123 0 0 1 88 764H130A82 82 0 0 0 131 910Z\"/></g></g><g data-typography-role=\"brand\"><text x=\"595\" y=\"362\" font-size=\"94\" textLength=\"580\" lengthAdjust=\"spacingAndGlyphs\" font-weight=\"800\" fill=\"#000\">theTradeDesk</text></g><g><rect x=\"165\" y=\"1265\" width=\"544\" height=\"72\" rx=\"36\" fill=\"#009afc\"/><text x=\"241\" y=\"1314\" text-anchor=\"start\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">客户留存率</text><text data-operating-metric=\"customer_retention\" x=\"570\" y=\"1314\" text-anchor=\"start\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">&gt; 95%</text></g><text x=\"194\" y=\"1161\" text-anchor=\"middle\" font-size=\"23\" fill=\"#777\">地理拆分基于总账单额</text><text x=\"194\" y=\"1191\" text-anchor=\"middle\" font-size=\"23\" fill=\"#777\">（Gross Billings）</text>",
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +24%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +36%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +25%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 77%",
            "同比 (2 个百分点)"
          ]
        },
        "platform_operations": {
          "label": "平台运营",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 9%",
            "同比 +3 个百分点"
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
            "利润率 8%",
            "同比 +2 个百分点"
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
            "同比 +0 个百分点"
          ]
        },
        "technology_development": {
          "label": "技术与开发",
          "notes": [
            "占收入 21%",
            "同比 (0 个百分点)"
          ]
        },
        "general_admin": {
          "label": "一般与行政",
          "notes": [
            "占收入 22%",
            "同比 (5 个百分点)",
            "包含 CEO 绩效相关股权激励（$24M）"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 872,
                "top": 525,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "同比 +25%",
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
                "x": 1342,
                "top": 375,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "利润率 77%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 1338,
                "top": 1130,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "平台运营",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1810,
                "top": 278,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "利润率 9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 1810,
                "top": 929,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2150,
                "top": 469,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2450,
                "top": 327,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "利润率 8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
                "x": 2450,
                "top": 573,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sales_marketing": {
            "blocks": [
              {
                "x": 2460,
                "top": 758,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +0 个百分点",
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
                "top": 941,
                "anchor": "middle",
                "lineGap": 10,
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
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "占收入 21%",
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
          "general_admin": {
            "blocks": [
              {
                "x": 2460,
                "top": 1148,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "一般与行政",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 34,
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
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "股权激励（$24M）",
                    "size": 27,
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
                "x": 405,
                "top": 470,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "同比 +24%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 319,
                "top": 680,
                "anchor": "end",
                "lineGap": 10,
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
                "x": 405,
                "top": 987,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "同比 +36%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 319,
                "top": 1078,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "国际",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          }
        }
      }
    },
    "preservedAnnotationText": [
      "theTradeDesk"
    ]
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
