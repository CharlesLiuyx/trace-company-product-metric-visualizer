/* Source-measured Nutanix Q4 FY26. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "nutanix-q4-fy26",
  "name": "Nutanix · Q4 FY26",
  "company": "Nutanix",
  "meta": {
    "company": "Nutanix",
    "title": "Nutanix Q4 FY26 Income Statement",
    "period": "Q4 FY26",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/nutanix-q4-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2240,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#4b00aa",
        "label": "#4b00aa"
      },
      "hub": {
        "node": "#4b00aa",
        "label": "#4b00aa"
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
      "source": "#a685d2",
      "hub": "#a685d2",
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
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g data-annotation=\"arr\"><rect x=\"203\" y=\"1129\" width=\"164\" height=\"164\" rx=\"34\" fill=\"#4b00aa\"/><text x=\"285\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">ARR</text><text data-operating-metric=\"arr\" x=\"285\" y=\"1224\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$2.54B</text><text x=\"285\" y=\"1264\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">+16% Y/Y</text></g><text x=\"87\" y=\"1337\" font-size=\"28\" fill=\"#777777\">ARR = Annual Recurring Revenue</text><g data-annotation=\"period\"><text x=\"2421\" y=\"323\" text-anchor=\"middle\" font-size=\"39\" font-weight=\"800\" fill=\"#666666\">Q4 FY26</text><text x=\"2421\" y=\"366\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">Ending July 2026</text></g></g>",
  "layout": {
    "scale": 0.18361955085865259,
    "nodes": {
      "subscription": {
        "x": 363,
        "y": 557,
        "width": 71,
        "height": 131
      },
      "professional_services": {
        "x": 363,
        "y": 933,
        "width": 71,
        "height": 6
      },
      "revenue": {
        "x": 830,
        "y": 686,
        "width": 70,
        "height": 139
      },
      "gross_profit": {
        "x": 1297,
        "y": 555,
        "width": 71,
        "height": 119
      },
      "cost_of_revenue": {
        "x": 1297,
        "y": 924,
        "width": 71,
        "height": 19
      },
      "operating_profit": {
        "x": 1765,
        "y": 484,
        "width": 70,
        "height": 12
      },
      "operating_expenses": {
        "x": 1765,
        "y": 704,
        "width": 70,
        "height": 106
      },
      "interest": {
        "x": 1992,
        "y": 394,
        "width": 70,
        "height": 2
      },
      "tax": {
        "x": 1995,
        "y": 489,
        "width": 70,
        "height": 216
      },
      "net_profit": {
        "x": 2231,
        "y": 422,
        "width": 71,
        "height": 231
      },
      "sm": {
        "x": 2231,
        "y": 809,
        "width": 71,
        "height": 55
      },
      "rnd": {
        "x": 2231,
        "y": 1043,
        "width": 71,
        "height": 37
      },
      "ga": {
        "x": 2231,
        "y": 1221,
        "width": 71,
        "height": 14
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 405.5,
            "top": 463,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#4b00aa"
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
            "x": 183.5,
            "top": 598,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "name",
            "lines": [
              {
                "text": "Subscription",
                "size": 40,
                "weight": 800,
                "color": "#4b00aa"
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 398.5,
            "top": 836,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "amount",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#4b00aa"
              },
              {
                "text": "+2% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 183.5,
            "top": 864,
            "anchor": "middle",
            "lineGap": 9,
            "semanticRole": "name",
            "lines": [
              {
                "text": "Professional",
                "size": 40,
                "weight": 800,
                "color": "#4b00aa"
              },
              {
                "text": "services &",
                "size": 40,
                "weight": 800,
                "color": "#4b00aa"
              },
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": "#4b00aa"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 866.5,
            "top": 540.5,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#4b00aa"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#4b00aa"
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
            "x": 1336.5,
            "top": 373.5,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "86% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1334,
            "top": 962.5,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 36,
                "weight": 800,
                "color": "#941100"
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1800,
            "top": 249,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "9% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1803,
            "top": 827,
            "anchor": "middle",
            "lineGap": 9,
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
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2026,
            "top": 303,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Interest",
                "size": 31,
                "weight": 800,
                "color": "#008d00"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#008d00"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 1876,
            "top": 568.5,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 31,
                "weight": 800,
                "color": "#008d00"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#008d00"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2427.5,
            "top": 462,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "168% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+162pp Y/Y",
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
            "x": 2425.5,
            "top": 795.5,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "40% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28,
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
            "x": 2426,
            "top": 992,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "27% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28,
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
            "x": 2421.5,
            "top": 1189,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "10% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
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
      "id": "subscription",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Subscription",
      "value": 719,
      "valueText": "$719M",
      "notes": [
        "+17% Y/Y"
      ]
    },
    {
      "id": "professional_services",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Professional",
        "services &",
        "Other"
      ],
      "value": 38,
      "valueText": "$38M",
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 2,
      "type": "hub",
      "label": "Revenue",
      "value": 757,
      "valueText": "$757M",
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 3,
      "type": "profit",
      "label": "Gross profit",
      "value": 651,
      "valueText": "$651M",
      "notes": [
        "86% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 106,
      "valueText": "($106M)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 5,
      "type": "profit",
      "label": [
        "Operating",
        "profit"
      ],
      "value": 70,
      "valueText": "$70M",
      "notes": [
        "9% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 581,
      "valueText": "($581M)",
      "notes": []
    },
    {
      "id": "interest",
      "col": 3,
      "order": 7,
      "type": "profit",
      "label": "Interest",
      "value": 13,
      "valueText": "$13M",
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008d00"
    },
    {
      "id": "tax",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Tax benefit",
      "value": 1187,
      "valueText": "$1,187M",
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008d00"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 9,
      "type": "profit",
      "label": "Net profit",
      "value": 1270,
      "valueText": "$1,270M",
      "notes": [
        "168% margin",
        "+162pp Y/Y"
      ]
    },
    {
      "id": "sm",
      "col": 4,
      "order": 10,
      "type": "cost",
      "label": "S&M",
      "value": 304,
      "valueText": "($304M)",
      "notes": [
        "40% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": "R&D",
      "value": 205,
      "valueText": "($205M)",
      "notes": [
        "27% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 4,
      "order": 12,
      "type": "cost",
      "label": "G&A",
      "value": 72,
      "valueText": "($72M)",
      "notes": [
        "10% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 719,
      "sourceWidth": 131,
      "targetWidth": 132,
      "y0": 622.5,
      "y1": 752,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#a685d2"
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 38,
      "sourceWidth": 6,
      "targetWidth": 7,
      "y0": 936,
      "y1": 821.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#a685d2"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 651,
      "sourceWidth": 120,
      "targetWidth": 119,
      "y0": 746,
      "y1": 614.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 106,
      "sourceWidth": 19,
      "targetWidth": 19,
      "y0": 815.5,
      "y1": 933.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 70,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 561,
      "y1": 490,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 581,
      "sourceWidth": 107,
      "targetWidth": 106,
      "y0": 620.5,
      "y1": 757,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 70,
      "sourceWidth": 12,
      "targetWidth": 13,
      "y0": 490,
      "y1": 430.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 13,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 395,
      "y1": 423,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "tax",
      "target": "net_profit",
      "value": 1187,
      "sourceWidth": 216,
      "targetWidth": 216,
      "y0": 597,
      "y1": 545,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 304,
      "sourceWidth": 55,
      "targetWidth": 55,
      "y0": 731.5,
      "y1": 836.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 205,
      "sourceWidth": 37,
      "targetWidth": 37,
      "y0": 777.5,
      "y1": 1061.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 72,
      "sourceWidth": 14,
      "targetWidth": 14,
      "y0": 803,
      "y1": 1228,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "ARR"
    ],
    "zh": {
      "name": "Nutanix · 2026 财年第四季度",
      "meta": {
        "title": "Nutanix 2026 财年第四季度利润表",
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 7 月",
        "titleSize": 114,
        "titleTextLength": 1840
      },
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +17%"
          ]
        },
        "professional_services": {
          "label": [
            "专业",
            "服务与",
            "其他"
          ],
          "notes": [
            "同比 +2%"
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
            "利润率 86%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": [
            "营业",
            "利润"
          ],
          "notes": [
            "利润率 9%",
            "同比 +4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "tax": {
          "label": "所得税收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 168%",
            "同比 +162 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 40%",
            "同比 (3 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 27%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 10%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 405.5,
                "top": 463,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#4b00aa"
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
                "x": 183.5,
                "top": 598,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "订阅",
                    "size": 40,
                    "weight": 800,
                    "color": "#4b00aa"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 398.5,
                "top": 836,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "amount",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#4b00aa"
                  },
                  {
                    "text": "同比 +2%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 183.5,
                "top": 864,
                "anchor": "middle",
                "lineGap": 9,
                "semanticRole": "name",
                "lines": [
                  {
                    "text": "专业",
                    "size": 40,
                    "weight": 800,
                    "color": "#4b00aa"
                  },
                  {
                    "text": "服务与",
                    "size": 40,
                    "weight": 800,
                    "color": "#4b00aa"
                  },
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#4b00aa"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 866.5,
                "top": 540.5,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#4b00aa"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#4b00aa"
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
                "x": 1336.5,
                "top": 373.5,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 86%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1334,
                "top": 962.5,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1800,
                "top": 249,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 9%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1803,
                "top": 827,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2026,
                "top": 303,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31,
                    "weight": 800,
                    "color": "#008d00"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#008d00"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 1876,
                "top": 568.5,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "所得税收益",
                    "size": 31,
                    "weight": 800,
                    "color": "#008d00"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#008d00"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2437.5,
                "top": 462,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 168%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +162 个百分点",
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
                "x": 2425.5,
                "top": 795.5,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 40%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28,
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
                "x": 2426,
                "top": 992,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28,
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
                "x": 2421.5,
                "top": 1189,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 10%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g data-annotation=\"arr\"><rect x=\"203\" y=\"1129\" width=\"164\" height=\"164\" rx=\"34\" fill=\"#4b00aa\"/><text x=\"285\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">ARR</text><text data-operating-metric=\"arr\" x=\"285\" y=\"1224\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$2.54B</text><text x=\"285\" y=\"1264\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 +16%</text></g><text x=\"87\" y=\"1337\" font-size=\"28\" fill=\"#777777\">ARR = 年度经常性收入</text><g data-annotation=\"period\"><text x=\"2421\" y=\"323\" text-anchor=\"middle\" font-size=\"39\" font-weight=\"800\" fill=\"#666666\">2026 财年第四季度</text><text x=\"2421\" y=\"366\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">截至 2026 年 7 月</text></g></g>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "nutanix-company-logo",
      "href": "data/assets/raster-annotations/nutanix/q4-company-logo.png",
      "x": 575,
      "y": 290,
      "width": 580,
      "height": 90
    }
  ],
  "operatingMetrics": [
    {
      "id": "arr",
      "label": "ARR",
      "value": "2.54",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$2.54B",
      "basis": "unspecified",
      "quote": "ARR $2.54B +16% Y/Y",
      "notes": [
        "+16% Y/Y"
      ],
      "anchor": {
        "type": "image-box",
        "box": [
          202,
          1129,
          165,
          165
        ]
      }
    }
  ]
});
