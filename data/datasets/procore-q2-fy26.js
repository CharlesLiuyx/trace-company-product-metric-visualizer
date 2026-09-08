(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "procore-q2-fy26",
  "name": "Procore · Q2 FY26",
  "company": "Procore",
  "meta": {
    "company": "Procore",
    "title": "Procore Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/procore-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2200,
    "hidePeriodStamp": true,
    "logoWidth": 630,
    "logoHeight": 81,
    "logoY": 276,
    "logoViewBox": "0 0 654 90",
    "logoX": 542
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
        "node": "#000000",
        "label": "#ff3d00"
      },
      "hub": {
        "node": "#000000",
        "label": "#ff3800"
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
      "source": "#858585",
      "hub": "#858585",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 8
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "\n      <g font-family=\"Noto Sans,Arial,sans-serif\">\n        <rect x=\"72\" y=\"1156\" width=\"381\" height=\"164\" rx=\"34\" fill=\"#000000\"/>\n        <text x=\"262.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">Gross retention <tspan font-weight=\"400\">95%</tspan></text>\n        <rect x=\"466\" y=\"1151\" width=\"412\" height=\"164\" rx=\"34\" fill=\"#000000\"/>\n        <text x=\"672\" y=\"1204\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#ffffff\">Customers <tspan font-weight=\"400\">&gt; $100K</tspan></text>\n        <text x=\"672\" y=\"1248\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"400\" fill=\"#ffffff\">2,871</text>\n        <text x=\"672\" y=\"1292\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"400\" fill=\"#ffffff\">+14% Y/Y</text>\n      </g>",
  "layout": {
    "nodes": {
      "united_states": {
        "x": 368,
        "y": 489,
        "width": 72,
        "height": 300
      },
      "rest_of_world": {
        "x": 368,
        "y": 985,
        "width": 72,
        "height": 55
      },
      "revenue": {
        "x": 835,
        "y": 594,
        "width": 72,
        "height": 356
      },
      "gross_profit": {
        "x": 1302,
        "y": 489,
        "width": 72,
        "height": 284
      },
      "cost_of_revenue": {
        "x": 1302,
        "y": 960,
        "width": 72,
        "height": 72
      },
      "operating_profit": {
        "x": 1769,
        "y": 434,
        "width": 72,
        "height": 4
      },
      "operating_expenses": {
        "x": 1769,
        "y": 604,
        "width": 72,
        "height": 280
      },
      "interest": {
        "x": 2097,
        "y": 338,
        "width": 72,
        "height": 4
      },
      "other": {
        "x": 2117,
        "y": 436,
        "width": 72,
        "height": 8
      },
      "net_profit": {
        "x": 2236,
        "y": 362,
        "width": 72,
        "height": 16
      },
      "sm": {
        "x": 2236,
        "y": 652,
        "width": 72,
        "height": 138
      },
      "rnd": {
        "x": 2236,
        "y": 917,
        "width": 72,
        "height": 88
      },
      "ga": {
        "x": 2236,
        "y": 1129,
        "width": 72,
        "height": 53
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 404,
            "top": 393,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "lineGap": 8
          },
          {
            "x": 339,
            "top": 614,
            "anchor": "end",
            "lines": [
              {
                "text": "United States",
                "size": 40,
                "weight": 800
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "rest_of_world": {
        "blocks": [
          {
            "x": 404,
            "top": 889,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "lineGap": 8
          },
          {
            "x": 339,
            "top": 988,
            "anchor": "end",
            "lines": [
              {
                "text": "Rest of World",
                "size": 40,
                "weight": 800
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 873,
            "top": 445,
            "anchor": "middle",
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
                "text": "+16% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1338,
            "top": 302,
            "anchor": "middle",
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
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+1pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1338,
            "top": 1049,
            "anchor": "middle",
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
                "size": 31,
                "weight": 400
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1808,
            "top": 250,
            "anchor": "middle",
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
                "text": "1% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+10pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1808,
            "top": 902,
            "anchor": "middle",
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
                "size": 39,
                "weight": 400
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2133,
            "top": 247,
            "anchor": "middle",
            "lines": [
              {
                "text": "Interest",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2153,
            "top": 458,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2431,
            "top": 319,
            "anchor": "middle",
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
                "text": "4% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+11pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2431,
            "top": 667,
            "anchor": "middle",
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
                "text": "39% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2431,
            "top": 923,
            "anchor": "middle",
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
                "text": "25% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "lineGap": 8
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2431,
            "top": 1118,
            "anchor": "middle",
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
                "text": "15% of revenue",
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
            ],
            "lineGap": 8
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "united_states",
      "col": 1,
      "order": 489,
      "type": "source",
      "label": "United States",
      "value": 317,
      "notes": [
        "+15% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#ff3d00",
      "linkTint": "#858585"
    },
    {
      "id": "rest_of_world",
      "col": 1,
      "order": 985,
      "type": "source",
      "label": "Rest of World",
      "value": 59,
      "notes": [
        "+23% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#ff3d00",
      "linkTint": "#858585"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 594,
      "type": "hub",
      "label": "Revenue",
      "value": 375,
      "notes": [
        "+16% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#ff3800",
      "linkTint": "#858585"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 489,
      "type": "profit",
      "label": "Gross profit",
      "value": 300,
      "notes": [
        "80% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 960,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 75,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 434,
      "type": "profit",
      "label": "Operating profit",
      "value": 4,
      "notes": [
        "1% margin",
        "+10pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 604,
      "type": "cost",
      "label": "Operating expenses",
      "value": 295,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "interest",
      "col": 5,
      "order": 338,
      "type": "profit",
      "label": "Interest",
      "value": 4,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "other",
      "col": 5,
      "order": 436,
      "type": "profit",
      "label": "Other",
      "value": 8,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 362,
      "type": "profit",
      "label": "Net profit",
      "value": 17,
      "notes": [
        "4% margin",
        "+11pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 652,
      "type": "cost",
      "label": "S&M",
      "value": 146,
      "notes": [
        "39% of revenue",
        "(5pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 917,
      "type": "cost",
      "label": "R&D",
      "value": 93,
      "notes": [
        "25% of revenue",
        "(3pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 1129,
      "type": "cost",
      "label": "G&A",
      "value": 56,
      "notes": [
        "15% of revenue",
        "(2pp) Y/Y"
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
      "value": 317,
      "sourceWidth": 300,
      "targetWidth": 300,
      "y0": 639,
      "y1": 744,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "rest_of_world",
      "target": "revenue",
      "value": 59,
      "sourceWidth": 55,
      "targetWidth": 56,
      "y0": 1012.5,
      "y1": 922,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 300,
      "sourceWidth": 284,
      "targetWidth": 284,
      "y0": 736,
      "y1": 631,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 75,
      "sourceWidth": 72,
      "targetWidth": 72,
      "y0": 914,
      "y1": 996,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 4,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 491,
      "y1": 436,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 295,
      "sourceWidth": 280,
      "targetWidth": 280,
      "y0": 633,
      "y1": 744,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 146,
      "sourceWidth": 138,
      "targetWidth": 138,
      "y0": 673,
      "y1": 721,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 93,
      "sourceWidth": 88,
      "targetWidth": 88,
      "y0": 786,
      "y1": 961,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 56,
      "sourceWidth": 54,
      "targetWidth": 53,
      "y0": 857,
      "y1": 1155.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 4,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 340,
      "y1": 364,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 4,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 436,
      "y1": 368,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 8,
      "sourceWidth": 8,
      "targetWidth": 8,
      "y0": 440,
      "y1": 374,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#99cd99"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Procore · 2026 财年第二季度",
      "meta": {
        "title": "Procore 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "titleTextLength": 2200
      },
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +15%"
          ]
        },
        "rest_of_world": {
          "label": "世界其他地区",
          "notes": [
            "同比 +23%"
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
            "利润率 80%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 1%",
            "同比 +10 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 4%",
            "同比 +11 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 39%",
            "同比 (5 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 25%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 15%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 404,
                "top": 393,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "lineGap": 8
              },
              {
                "x": 339,
                "top": 614,
                "anchor": "end",
                "lines": [
                  {
                    "text": "美国",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "rest_of_world": {
            "blocks": [
              {
                "x": 404,
                "top": 889,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "lineGap": 8
              },
              {
                "x": 339,
                "top": 988,
                "anchor": "end",
                "lines": [
                  {
                    "text": "世界其他地区",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 873,
                "top": 445,
                "anchor": "middle",
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
                    "text": "同比 +16%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1338,
                "top": 302,
                "anchor": "middle",
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
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1338,
                "top": 1049,
                "anchor": "middle",
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
                    "size": 31,
                    "weight": 400
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1808,
                "top": 250,
                "anchor": "middle",
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
                    "text": "利润率 1%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +10 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1808,
                "top": 902,
                "anchor": "middle",
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
                    "size": 39,
                    "weight": 400
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2133,
                "top": 247,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利息",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2153,
                "top": 458,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2431,
                "top": 319,
                "anchor": "middle",
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
                    "text": "利润率 4%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +11 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2431,
                "top": 667,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 39%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2431,
                "top": 923,
                "anchor": "middle",
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
                    "text": "占收入 25%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "lineGap": 8
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2431,
                "top": 1118,
                "anchor": "middle",
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
                    "text": "占收入 15%",
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
                ],
                "lineGap": 8
              }
            ]
          }
        }
      },
      "annotationsSvg": "\n      <g font-family=\"Noto Sans,Arial,sans-serif\">\n        <rect x=\"72\" y=\"1156\" width=\"381\" height=\"164\" rx=\"34\" fill=\"#000000\"/>\n        <text x=\"262.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#ffffff\">毛留存率 <tspan font-weight=\"400\">95%</tspan></text>\n        <rect x=\"466\" y=\"1151\" width=\"412\" height=\"164\" rx=\"34\" fill=\"#000000\"/>\n        <text x=\"672\" y=\"1204\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#ffffff\">客户数 <tspan font-weight=\"400\">&gt; 10 万美元</tspan></text>\n        <text x=\"672\" y=\"1248\" text-anchor=\"middle\" font-size=\"35\" font-weight=\"400\" fill=\"#ffffff\">2,871</text>\n        <text x=\"672\" y=\"1292\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"400\" fill=\"#ffffff\">同比 +14%</text>\n      </g>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "procore-company-wordmark-q2-fy26",
      "href": "data/assets/raster-annotations/procore/company-wordmark-q2-fy26.png",
      "x": 530,
      "y": 260,
      "width": 670,
      "height": 120
    }
  ]
});})();
