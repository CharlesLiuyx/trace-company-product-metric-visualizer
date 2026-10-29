window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "the-trade-desk-q3-fy23",
  "name": "The Trade Desk · Q3 FY23",
  "company": "The Trade Desk",
  "meta": {
    "company": "The Trade Desk",
    "title": "The Trade Desk Q3 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/the-trade-desk-q3-fy23.png",
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
    "logoX": 518,
    "logoY": 271,
    "logoWidth": 685,
    "logoHeight": 87,
    "logoViewBox": "0 0 685 87",
    "logoSvg": "<g fill=\"#0099fa\" transform=\"scale(.32) translate(-49 -699)\"><path d=\"M110 699H191V846H151V741H110Z\"/><path d=\"M210 720A123 123 0 0 1 151 957V916A82 82 0 0 0 210 765Z\"/><path d=\"M131 954A123 123 0 0 1 88 764H130A82 82 0 0 0 131 910Z\"/></g><text x=\"97\" y=\"72\" font-size=\"86\" font-weight=\"800\" letter-spacing=\"-5\" fill=\"#000\">theTradeDesk</text>"
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
  "operatingMetrics": [
    {
      "id": "retention",
      "value": "95",
      "unit": "%",
      "currency": null,
      "comparison": "gt",
      "literal": "> 95%"
    }
  ],
  "annotationsSvg": "<g><text x=\"307\" y=\"1050\" text-anchor=\"end\" font-size=\"23\" fill=\"#777\">Geographic breakdown</text><text x=\"307\" y=\"1080\" text-anchor=\"end\" font-size=\"23\" fill=\"#777\">based on Gross Billings</text><rect x=\"166\" y=\"1265\" width=\"543\" height=\"72\" rx=\"36\" fill=\"#009afc\"/><text x=\"388\" y=\"1314\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Customer retention</text><text x=\"624\" y=\"1314\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\" data-operating-metric=\"retention\">&gt; 95%</text><text x=\"170\" y=\"1436\" font-size=\"39\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "layout": {
    "scale": 0.56,
    "nodes": {
      "united_states": {
        "x": 363,
        "y": 513,
        "width": 73,
        "height": 242
      },
      "international": {
        "x": 363,
        "y": 986,
        "width": 73,
        "height": 36
      },
      "revenue": {
        "x": 830,
        "y": 628,
        "width": 72,
        "height": 277
      },
      "gross_profit": {
        "x": 1302,
        "y": 570,
        "width": 73,
        "height": 224
      },
      "platform_operations": {
        "x": 1304,
        "y": 941,
        "width": 74,
        "height": 52
      },
      "operating_profit": {
        "x": 1772,
        "y": 497,
        "width": 72,
        "height": 21
      },
      "operating_expenses": {
        "x": 1765,
        "y": 694,
        "width": 72,
        "height": 203
      },
      "other_income": {
        "x": 2090,
        "y": 482,
        "width": 72,
        "height": 11
      },
      "net_profit": {
        "x": 2231,
        "y": 420,
        "width": 73,
        "height": 21
      },
      "tax": {
        "x": 2231,
        "y": 661,
        "width": 73,
        "height": 10
      },
      "technology_development": {
        "x": 2231,
        "y": 790,
        "width": 73,
        "height": 67
      },
      "sales_marketing": {
        "x": 2231,
        "y": 962,
        "width": 73,
        "height": 64
      },
      "general_admin": {
        "x": 2231,
        "y": 1156,
        "width": 73,
        "height": 74
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 401,
            "top": 418,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          },
          {
            "x": 315,
            "top": 609.5,
            "lines": [
              {
                "text": "United States",
                "size": 40,
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 8
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 401,
            "top": 884,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+48% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          },
          {
            "x": 315,
            "top": 982,
            "lines": [
              {
                "text": "International",
                "size": 40,
                "weight": 800
              }
            ],
            "anchor": "end",
            "lineGap": 8
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 861,
            "top": 478,
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
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1340,
            "top": 381,
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
                "text": "81% margin",
                "size": 27,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "platform_operations": {
        "blocks": [
          {
            "x": 1340,
            "top": 1012,
            "lines": [
              {
                "text": "Platform",
                "size": 38,
                "weight": 800
              },
              {
                "text": "operations",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1808,
            "top": 312,
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
                "text": "8% margin",
                "size": 27,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1805,
            "top": 913,
            "lines": [
              {
                "text": "Operating",
                "size": 38,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2128,
            "top": 509,
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
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2428,
            "top": 394,
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
                "size": 27,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2428,
            "top": 635,
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
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "technology_development": {
        "blocks": [
          {
            "x": 2462,
            "top": 765,
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
                "text": "24% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "sales_marketing": {
        "blocks": [
          {
            "x": 2462,
            "top": 970,
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
                "text": "23% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      },
      "general_admin": {
        "blocks": [
          {
            "x": 2462,
            "top": 1144,
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
                "text": "27% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 27,
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
                "text": "performance ($48M)",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ],
            "anchor": "middle",
            "lineGap": 8
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "value": 429,
      "label": "United States",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+22% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85caf6"
    },
    {
      "id": "international",
      "value": 64,
      "label": "International",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+48% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85caf6"
    },
    {
      "id": "revenue",
      "value": 493,
      "label": "Revenue",
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+25% Y/Y"
      ],
      "color": "#0099fa",
      "labelColor": "#0099fa",
      "linkTint": "#85caf6"
    },
    {
      "id": "gross_profit",
      "value": 400,
      "label": "Gross profit",
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": [
        "81% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "platform_operations",
      "value": 93,
      "label": "Platform operations",
      "type": "cost",
      "col": 2,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "value": 38,
      "label": "Operating profit",
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "8% margin",
        "+0pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "value": 362,
      "label": "Operating Expenses",
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_income",
      "value": 19,
      "label": "Other",
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "value": 39,
      "label": "Net profit",
      "type": "profit",
      "col": 5,
      "order": 0,
      "notes": [
        "8% margin",
        "+4pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "value": 17,
      "label": "Tax",
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "technology_development",
      "value": 118,
      "label": "Technology & development",
      "type": "cost",
      "col": 5,
      "order": 2,
      "notes": [
        "24% of revenue",
        "+4pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sales_marketing",
      "value": 112,
      "label": "Sales & marketing",
      "type": "cost",
      "col": 5,
      "order": 3,
      "notes": [
        "23% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "general_admin",
      "value": 132,
      "label": "General & admin",
      "type": "cost",
      "col": 5,
      "order": 4,
      "notes": [
        "27% of revenue",
        "(6pp) Y/Y",
        "Includes SBC for CEO",
        "performance ($48M)"
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
      "value": 429,
      "sourceWidth": 242,
      "targetWidth": 241,
      "y0": 634,
      "y1": 748.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85caf6"
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 64,
      "sourceWidth": 36,
      "targetWidth": 36,
      "y0": 1004,
      "y1": 887,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85caf6"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 400,
      "sourceWidth": 224,
      "targetWidth": 224,
      "y0": 740,
      "y1": 682,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "platform_operations",
      "value": 93,
      "sourceWidth": 53,
      "targetWidth": 52,
      "y0": 878.5,
      "y1": 967,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 38,
      "sourceWidth": 21,
      "targetWidth": 21,
      "y0": 580.5,
      "y1": 507.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 362,
      "sourceWidth": 203,
      "targetWidth": 203,
      "y0": 692.5,
      "y1": 795.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 21,
      "sourceWidth": 11,
      "targetWidth": 11,
      "y0": 502.5,
      "y1": 425.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 17,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 513,
      "y1": 666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 19,
      "sourceWidth": 11,
      "targetWidth": 10,
      "y0": 487.5,
      "y1": 436,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 118,
      "sourceWidth": 67,
      "targetWidth": 67,
      "y0": 727.5,
      "y1": 823.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 112,
      "sourceWidth": 63,
      "targetWidth": 64,
      "y0": 792.5,
      "y1": 994,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 132,
      "sourceWidth": 73,
      "targetWidth": 74,
      "y0": 860.5,
      "y1": 1193,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "The Trade Desk · 2023 财年第三季度",
      "meta": {
        "title": "The Trade Desk 2023 财年第三季度利润表",
        "titleSize": 112,
        "titleTextLength": 1970
      },
      "annotationsSvg": "<g><text x=\"307\" y=\"1050\" text-anchor=\"end\" font-size=\"23\" fill=\"#777\">地理拆分基于</text><text x=\"307\" y=\"1080\" text-anchor=\"end\" font-size=\"23\" fill=\"#777\">广告交易总额</text><rect x=\"166\" y=\"1265\" width=\"543\" height=\"72\" rx=\"36\" fill=\"#009afc\"/><text x=\"388\" y=\"1314\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">客户留存率</text><text x=\"624\" y=\"1314\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\" data-operating-metric=\"retention\">&gt; 95%</text><text x=\"170\" y=\"1436\" font-size=\"39\" font-weight=\"800\">来源：季度业绩</text></g>",
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +22%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +48%"
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
            "利润率 81%",
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
            "利润率 8%",
            "同比 +0 个百分点"
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
            "同比 +4 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "technology_development": {
          "label": "技术与开发",
          "notes": [
            "占收入 24%",
            "同比 +4 个百分点"
          ]
        },
        "sales_marketing": {
          "label": "销售与营销",
          "notes": [
            "占收入 23%",
            "同比 +1 个百分点"
          ]
        },
        "general_admin": {
          "label": "一般与行政",
          "notes": [
            "占收入 27%",
            "同比 (6 个百分点)",
            "含 CEO 绩效股权激励",
            "（$48M）"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 401,
                "top": 418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              },
              {
                "x": 315,
                "top": 609.5,
                "lines": [
                  {
                    "text": "美国",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 8
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 401,
                "top": 884,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +48%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              },
              {
                "x": 315,
                "top": 982,
                "lines": [
                  {
                    "text": "国际",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "anchor": "end",
                "lineGap": 8
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 861,
                "top": 478,
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
                    "text": "同比 +25%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1340,
                "top": 381,
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
                    "text": "利润率 81%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "platform_operations": {
            "blocks": [
              {
                "x": 1340,
                "top": 1012,
                "lines": [
                  {
                    "text": "平台运营",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1808,
                "top": 312,
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
                    "text": "利润率 8%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1805,
                "top": 913,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2128,
                "top": 509,
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
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2428,
                "top": 394,
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
                    "text": "利润率 8%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2428,
                "top": 635,
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
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "technology_development": {
            "blocks": [
              {
                "x": 2462,
                "top": 765,
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
                    "text": "占收入 24%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "sales_marketing": {
            "blocks": [
              {
                "x": 2462,
                "top": 970,
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
                    "text": "占收入 23%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          },
          "general_admin": {
            "blocks": [
              {
                "x": 2462,
                "top": 1144,
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
                    "text": "占收入 27%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "含 CEO 绩效股权激励",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "（$48M）",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 8
              }
            ]
          }
        }
      }
    }
  }
});
