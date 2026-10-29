(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "monday-com-q1-fy25",
  "name": "Monday.com · Q1 FY25",
  "company": "Monday.com",
  "meta": {
    "company": "Monday.com",
    "title": "Monday.com Q1 FY25 Income Statement",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/monday-com-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 128,
    "titleWeight": 700,
    "titleTextLength": 2430
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#6d6d6d",
    "noteColor": "#6d6d6d",
    "palette": {
      "source": {
        "node": "#333333",
        "label": "#333333"
      },
      "hub": {
        "node": "#333333",
        "label": "#333333"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#8e1300"
      }
    },
    "linkTint": {
      "source": "#99cd99",
      "hub": "#99cd99",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 9
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      \n    <g transform=\"translate(30 630)\" data-typography-role=\"brand\">\n      <rect x=\"52\" y=\"34\" width=\"75\" height=\"166\" rx=\"37.5\" transform=\"rotate(32 89.5 117)\" fill=\"#ff285f\"/>\n      <rect x=\"180\" y=\"34\" width=\"75\" height=\"166\" rx=\"37.5\" transform=\"rotate(32 217.5 117)\" fill=\"#ffcc00\"/>\n      <circle cx=\"282\" cy=\"158\" r=\"39\" fill=\"#00c875\"/>\n      <text x=\"24\" y=\"265\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"53\" font-weight=\"800\" fill=\"#333333\"\n        textLength=\"230\" lengthAdjust=\"spacingAndGlyphs\">monday</text>\n      <text x=\"263\" y=\"265\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"28\" font-weight=\"700\" fill=\"#333333\">.com</text>\n    </g>\n      \n    <g>\n      <rect x=\"46\" y=\"1146\" width=\"293\" height=\"151\" rx=\"35\" fill=\"#333333\"/>\n      <text x=\"115\" y=\"1209\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">NDR</text>\n      <text data-operating-metric=\"ndr\" x=\"187\" y=\"1209\" font-size=\"29\" fill=\"#fff\">112%</text>\n      <text x=\"90\" y=\"1253\" font-size=\"27\" font-weight=\"700\" fill=\"#fff\">10+ users</text>\n      <text data-operating-metric=\"ndr_10plus\" x=\"225\" y=\"1253\" font-size=\"27\" fill=\"#fff\">115%</text>\n    </g>\n      \n    <g>\n      <rect x=\"351\" y=\"1146\" width=\"347\" height=\"151\" rx=\"35\" fill=\"#333333\"/>\n      <text x=\"524.5\" y=\"1209\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">Customers&gt; $50K+</text>\n      <text data-operating-metric=\"customers_50k\" x=\"415\" y=\"1253\" text-anchor=\"start\" font-size=\"29\" fill=\"#fff\">3,444</text><text x=\"505\" y=\"1253\" font-size=\"29\" fill=\"#fff\">+38% Y/Y</text>\n    </g>\n      <text x=\"197\" y=\"1331\" text-anchor=\"start\" font-size=\"29\" font-weight=\"500\" fill=\"#6d6d6d\">NDR = Net Dollar Retention</text>\n    </g>",
  "layout": {
    "scale": 1,
    "nodes": {
      "revenue": {
        "x": 400,
        "y": 612,
        "width": 72,
        "height": 350
      },
      "gross_profit": {
        "x": 1023,
        "y": 537,
        "width": 72,
        "height": 314
      },
      "cost_of_revenue": {
        "x": 1023,
        "y": 1009,
        "width": 72,
        "height": 36
      },
      "operating_profit": {
        "x": 1646,
        "y": 442,
        "width": 72,
        "height": 13
      },
      "operating_expenses": {
        "x": 1646,
        "y": 654,
        "width": 72,
        "height": 301
      },
      "finance": {
        "x": 2131,
        "y": 437,
        "width": 72,
        "height": 23
      },
      "net_profit": {
        "x": 2269,
        "y": 374,
        "width": 72,
        "height": 34
      },
      "sm": {
        "x": 2269,
        "y": 704,
        "width": 72,
        "height": 175
      },
      "rnd": {
        "x": 2269,
        "y": 1010,
        "width": 72,
        "height": 86
      },
      "ga": {
        "x": 2269,
        "y": 1219,
        "width": 72,
        "height": 41
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 436,
            "top": 468,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+30% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1059,
            "top": 355,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "90% margin",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              },
              {
                "text": "+1pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1682,
            "top": 258,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "3% margin",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              },
              {
                "text": "+6pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2455,
            "top": 337,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "10% margin",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              },
              {
                "text": "+6pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              }
            ]
          }
        ]
      },
      "finance": {
        "blocks": [
          {
            "x": 2167,
            "top": 480,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Financial",
                "size": 31,
                "weight": 800
              },
              {
                "text": "income",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1059,
            "top": 1063,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1682,
            "top": 972,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Operating",
                "size": 43,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 43,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2460,
            "top": 713,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Sales &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "50% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              },
              {
                "text": "(9pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2460,
            "top": 947,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Research &",
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
                "size": 31,
                "weight": 400
              },
              {
                "text": "25% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              },
              {
                "text": "+4pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2460,
            "top": 1188,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "General &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "admin",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6d6d6d"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "revenue",
      "col": 0,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 282,
      "notes": [
        "+30% Y/Y"
      ],
      "color": "#333333",
      "labelColor": "#333333",
      "linkTint": "#9ccd9c"
    },
    {
      "id": "gross_profit",
      "col": 1,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 253,
      "notes": [
        "90% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 1,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 29,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($29M)"
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 10,
      "notes": [
        "3% margin",
        "+6pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 244,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($244M)"
    },
    {
      "id": "finance",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Financial income",
      "value": 18,
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 27,
      "notes": [
        "10% margin",
        "+6pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f47",
      "linkTint": "#99cd99"
    },
    {
      "id": "sm",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Sales & marketing",
      "value": 142,
      "notes": [
        "50% of revenue",
        "(9pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($142M)"
    },
    {
      "id": "rnd",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "Research & development",
      "value": 69,
      "notes": [
        "25% of revenue",
        "+4pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($69M)"
    },
    {
      "id": "ga",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": "General & admin",
      "value": 32,
      "notes": [
        "12% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($32M)"
    }
  ],
  "links": [
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 253,
      "width": 314,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 29,
      "width": 36,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 10,
      "width": 13,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 244,
      "width": 301,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 10,
      "width": 13,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "finance",
      "target": "net_profit",
      "value": 18,
      "width": 21,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 23,
      "targetWidth": 21
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 142,
      "width": 175,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 69,
      "width": 86,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 32,
      "width": 40,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Monday.com · 2025 财年第一季度",
      "meta": {
        "title": "Monday.com 2025 财年第一季度利润表",
        "titleTextLength": 2140
      },
      "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      \n    <g transform=\"translate(30 630)\" data-typography-role=\"brand\">\n      <rect x=\"52\" y=\"34\" width=\"75\" height=\"166\" rx=\"37.5\" transform=\"rotate(32 89.5 117)\" fill=\"#ff285f\"/>\n      <rect x=\"180\" y=\"34\" width=\"75\" height=\"166\" rx=\"37.5\" transform=\"rotate(32 217.5 117)\" fill=\"#ffcc00\"/>\n      <circle cx=\"282\" cy=\"158\" r=\"39\" fill=\"#00c875\"/>\n      <text x=\"24\" y=\"265\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"53\" font-weight=\"800\" fill=\"#333333\"\n        textLength=\"230\" lengthAdjust=\"spacingAndGlyphs\">Monday</text>\n      <text x=\"263\" y=\"265\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"28\" font-weight=\"700\" fill=\"#333333\">.com</text>\n    </g>\n      \n    <g>\n      <rect x=\"46\" y=\"1146\" width=\"293\" height=\"151\" rx=\"35\" fill=\"#333333\"/>\n      <text x=\"115\" y=\"1209\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">NDR</text>\n      <text data-operating-metric=\"ndr\" x=\"187\" y=\"1209\" font-size=\"29\" fill=\"#fff\">112%</text>\n      <text x=\"90\" y=\"1253\" font-size=\"27\" font-weight=\"700\" fill=\"#fff\">10+ 用户</text>\n      <text data-operating-metric=\"ndr_10plus\" x=\"225\" y=\"1253\" font-size=\"27\" fill=\"#fff\">115%</text>\n    </g>\n      \n    <g>\n      <rect x=\"351\" y=\"1146\" width=\"347\" height=\"151\" rx=\"35\" fill=\"#333333\"/>\n      <text x=\"524.5\" y=\"1209\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#ffffff\">ARR 超 $50K 客户</text>\n      <text data-operating-metric=\"customers_50k\" x=\"415\" y=\"1253\" text-anchor=\"start\" font-size=\"29\" fill=\"#fff\">3,444</text><text x=\"505\" y=\"1253\" font-size=\"29\" fill=\"#fff\">同比 +38%</text>\n    </g>\n      <text x=\"197\" y=\"1331\" text-anchor=\"start\" font-size=\"29\" font-weight=\"500\" fill=\"#6d6d6d\">NDR = 净美元留存率</text>\n    </g>",
      "nodes": {
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +30%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 90%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 3%",
            "同比 +6 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "finance": {
          "label": "财务收入"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 10%",
            "同比 +6 个百分点"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 50%",
            "同比 (9 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 25%",
            "同比 +4 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 12%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 436,
                "top": 468,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +30%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1059,
                "top": 355,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 90%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1682,
                "top": 258,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2455,
                "top": 337,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  }
                ]
              }
            ]
          },
          "finance": {
            "blocks": [
              {
                "x": 2167,
                "top": 480,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "财务收入",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1059,
                "top": 1063,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1682,
                "top": 972,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "营业",
                    "size": 43,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 43,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2460,
                "top": 713,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "市场",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 50%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  },
                  {
                    "text": "同比 (9 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2460,
                "top": 947,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研究与",
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
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2460,
                "top": 1188,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "行政",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6d6d6d"
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
      "id": "ndr",
      "value": "112",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "112%"
    },
    {
      "id": "ndr_10plus",
      "value": "115",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "115%"
    },
    {
      "id": "customers_50k",
      "value": "3444",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "3,444"
    }
  ]
});})();
