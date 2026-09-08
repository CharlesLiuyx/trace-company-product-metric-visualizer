/* Source-measured SentinelOne Q2 FY27 View Adapter. */
(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "sentinelone-q2-fy27",
  "name": "SentinelOne · Q2 FY27",
  "company": "SentinelOne",
  "meta": {
    "company": "SentinelOne",
    "title": "SentinelOne Q2 FY27 Income Statement",
    "period": "Q2 FY27",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/sentinelone-q2-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2500,
    "periodX": 2427,
    "periodY": 315,
    "periodNoteY": 359
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
    "subtitleColor": "#686868",
    "noteColor": "#686868",
    "palette": {
      "source": {
        "node": "#6b0aea",
        "label": "#6800ef"
      },
      "hub": {
        "node": "#6b0aea",
        "label": "#6800ef"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008e50"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#981500"
      }
    },
    "linkTint": {
      "source": "#b48aed",
      "hub": "#b48aed",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 9
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"64\" y=\"1132\" width=\"210\" height=\"178\" rx=\"32\" fill=\"#6b0aea\"/><text x=\"169\" y=\"1197\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">ARR</text><text data-operating-metric=\"arr\" x=\"169\" y=\"1238\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$1,218M</text><text x=\"169\" y=\"1273\" text-anchor=\"middle\" font-size=\"24\" fill=\"#fff\">+22% Y/Y</text></g><g><rect x=\"286\" y=\"1132\" width=\"406\" height=\"178\" rx=\"32\" fill=\"#6b0aea\"/><text x=\"489\" y=\"1197\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Customers &gt; $100K</text><text data-operating-metric=\"customers_over_100k\" x=\"489\" y=\"1238\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">1,715</text><text x=\"489\" y=\"1273\" text-anchor=\"middle\" font-size=\"24\" fill=\"#fff\">+13% Y/Y</text></g><text x=\"117\" y=\"1350\" font-size=\"28\" fill=\"#666666\">ARR = Annual Recurring Revenue</text></g>",
  "layout": {
    "scale": 1,
    "nodes": {
      "united_states": {
        "x": 364,
        "y": 574,
        "width": 73,
        "height": 167
      },
      "international": {
        "x": 364,
        "y": 987,
        "width": 73,
        "height": 107
      },
      "revenue": {
        "x": 831,
        "y": 683,
        "width": 73,
        "height": 274
      },
      "gross_profit": {
        "x": 1298,
        "y": 575,
        "width": 73,
        "height": 197
      },
      "cost_of_revenue": {
        "x": 1298,
        "y": 1017,
        "width": 73,
        "height": 77
      },
      "operating_loss": {
        "x": 1576,
        "y": 925,
        "width": 73,
        "height": 86
      },
      "operating_expenses": {
        "x": 1766,
        "y": 683,
        "width": 73,
        "height": 283
      },
      "sm": {
        "x": 2232,
        "y": 426,
        "width": 73,
        "height": 116
      },
      "rnd": {
        "x": 2232,
        "y": 672,
        "width": 73,
        "height": 91
      },
      "ga": {
        "x": 2232,
        "y": 925,
        "width": 73,
        "height": 53
      },
      "restructuring": {
        "x": 2232,
        "y": 1166,
        "width": 73,
        "height": 23
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 404.5,
            "top": 476,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 205,
            "top": 630,
            "anchor": "middle",
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
            "x": 404.5,
            "top": 889,
            "anchor": "middle",
            "lineGap": 10,
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
                "color": "#666666"
              }
            ]
          },
          {
            "x": 204.5,
            "top": 1015,
            "anchor": "middle",
            "lines": [
              {
                "text": "International",
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
            "x": 865.5,
            "top": 535,
            "anchor": "middle",
            "lineGap": 13,
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
                "text": "+21% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1338,
            "top": 389,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#009552"
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#009552"
              },
              {
                "text": "72% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1334.5,
            "top": 1109,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Cost of",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 34,
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1615.5,
            "top": 1023,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "loss",
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
                "text": "(31%) margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1819.5,
            "top": 517,
            "anchor": "middle",
            "lineGap": 12,
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
                "size": 40,
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
            "x": 2446,
            "top": 414,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "42% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(10pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2446.5,
            "top": 662,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "33% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2447.5,
            "top": 907,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "19% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2448,
            "top": 1143,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "8% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+7pp Y/Y",
                "size": 28,
                "weight": 400,
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
      "id": "united_states",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "United States",
      "value": 178,
      "notes": [
        "+19% Y/Y"
      ],
      "color": "#6b0aea",
      "labelColor": "#6b0aea",
      "linkTint": "#b48aed",
      "valueText": "$178M"
    },
    {
      "id": "international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "International",
      "value": 114,
      "notes": [
        "+23% Y/Y"
      ],
      "color": "#6b0aea",
      "labelColor": "#6b0aea",
      "linkTint": "#b48aed",
      "valueText": "$114M"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 292,
      "notes": [
        "+21% Y/Y"
      ],
      "color": "#6b0aea",
      "labelColor": "#6b0aea",
      "linkTint": "#b48aed",
      "valueText": "$292M"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 210,
      "notes": [
        "72% margin",
        "(3pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009552",
      "linkTint": "#99cd99",
      "valueText": "$210M"
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
      "value": 82,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [],
      "valueText": "($82M)"
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 0,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -91,
      "notes": [
        "(31%) margin",
        "+2pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($91M)"
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
      "value": 301,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [],
      "valueText": "($301M)"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "S&M",
      "value": 124,
      "notes": [
        "42% of revenue",
        "(10pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($124M)"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "R&D",
      "value": 97,
      "notes": [
        "33% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($97M)"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "G&A",
      "value": 56,
      "notes": [
        "19% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($56M)"
    },
    {
      "id": "restructuring",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "Restructuring",
      "value": 24,
      "notes": [
        "8% of revenue",
        "+7pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($24M)"
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 178,
      "sourceWidth": 167,
      "targetWidth": 167,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 114,
      "sourceWidth": 107,
      "targetWidth": 107,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 210,
      "sourceWidth": 197,
      "targetWidth": 197,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 82,
      "sourceWidth": 77,
      "targetWidth": 77,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 210,
      "sourceWidth": 197,
      "targetWidth": 197,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 91,
      "sourceWidth": 86,
      "targetWidth": 86,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 124,
      "sourceWidth": 116,
      "targetWidth": 116,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 97,
      "sourceWidth": 91,
      "targetWidth": 91,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 56,
      "sourceWidth": 53,
      "targetWidth": 53,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 24,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 23,
      "targetWidth": 23
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "ARR"
    ],
    "zh": {
      "name": "SentinelOne · 2027 财年第二季度",
      "meta": {
        "title": "SentinelOne 2027 财年第二季度利润表",
        "period": "2027 财年第二季度",
        "periodNote": "截至 2026 年 7 月",
        "titleSize": 106,
        "titleTextLength": 2200
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"64\" y=\"1132\" width=\"210\" height=\"178\" rx=\"32\" fill=\"#6b0aea\"/><text x=\"169\" y=\"1197\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">ARR</text><text data-operating-metric=\"arr\" x=\"169\" y=\"1238\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$1,218M</text><text x=\"169\" y=\"1273\" text-anchor=\"middle\" font-size=\"24\" fill=\"#fff\">同比 +22%</text></g><g><rect x=\"286\" y=\"1132\" width=\"406\" height=\"178\" rx=\"32\" fill=\"#6b0aea\"/><text x=\"489\" y=\"1197\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">$100K 以上客户</text><text data-operating-metric=\"customers_over_100k\" x=\"489\" y=\"1238\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">1,715</text><text x=\"489\" y=\"1273\" text-anchor=\"middle\" font-size=\"24\" fill=\"#fff\">同比 +13%</text></g><text x=\"117\" y=\"1350\" font-size=\"28\" fill=\"#666666\">ARR = 年度经常性收入</text></g>",
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +19%"
          ]
        },
        "international": {
          "label": "国际",
          "notes": [
            "同比 +23%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +21%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 72%",
            "同比 (3 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (31%)",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 42%",
            "同比 (10 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 33%",
            "同比 +1 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 19%",
            "同比 (2 个百分点)"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": [
            "占收入 8%",
            "同比 +7 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 404.5,
                "top": 476,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 205,
                "top": 630,
                "anchor": "middle",
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
                "x": 404.5,
                "top": 889,
                "anchor": "middle",
                "lineGap": 10,
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
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 204.5,
                "top": 1015,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "国际",
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
                "x": 865.5,
                "top": 535,
                "anchor": "middle",
                "lineGap": 13,
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
                    "text": "同比 +21%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1338,
                "top": 389,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#009552"
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#009552"
                  },
                  {
                    "text": "利润率 72%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1334.5,
                "top": 1109,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 34,
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1615.5,
                "top": 1023,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "亏损",
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
                    "text": "利润率 (31%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1819.5,
                "top": 517,
                "anchor": "middle",
                "lineGap": 12,
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
                    "weight": 800,
                    "color": "#941100"
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
          "sm": {
            "blocks": [
              {
                "x": 2446,
                "top": 414,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 42%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (10 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2446.5,
                "top": 662,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 33%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2447.5,
                "top": 907,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 19%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2448,
                "top": 1143,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "sentinelone-company-logo",
      "href": "data/assets/raster-annotations/sentinelone/company-logo-q2-fy27.png",
      "x": 610,
      "y": 224,
      "width": 508,
      "height": 292
    }
  ],
  "operatingMetrics": [
    {
      "id": "arr",
      "value": "1218",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1,218M"
    },
    {
      "id": "customers_over_100k",
      "value": "1715",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1,715"
    }
  ]
});})();
