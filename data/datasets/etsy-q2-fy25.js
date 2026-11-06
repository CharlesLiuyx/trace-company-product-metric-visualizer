window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "etsy-q2-fy25",
  "name": "Etsy · Q2 FY25",
  "company": "Etsy",
  "meta": {
    "company": "Etsy",
    "title": "Etsy Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending Jun. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/etsy-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800,
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
    "palette": {
      "source": {
        "node": "#eb6d20",
        "label": "#eb6d20"
      },
      "hub": {
        "node": "#eb6d20",
        "label": "#eb6d20"
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
      "source": "#eeb693",
      "hub": "#eeb693",
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"79\" y=\"1130\" width=\"163\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"160.5\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"160.5\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$2.8B</text><text x=\"160.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">(5%) Y/Y</text></g><g><rect x=\"250\" y=\"1130\" width=\"334\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"417.0\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Active sellers</text><text data-operating-metric=\"active-sellers\" x=\"417.0\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">8.1M</text><text x=\"417.0\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">(8%) Y/Y</text></g><g><rect x=\"588\" y=\"1130\" width=\"331\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"753.5\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Active buyers</text><text data-operating-metric=\"active-buyers\" x=\"753.5\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">93.3M</text><text x=\"753.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">(3%) Y/Y</text></g><text x=\"422\" y=\"1350\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GMV = Gross Merchandise Sales</text></g>",
  "layout": {
    "scale": 0.42050520059435365,
    "nodes": {
      "marketplace": {
        "x": 389,
        "y": 536,
        "width": 73,
        "height": 195
      },
      "services": {
        "x": 389,
        "y": 958,
        "width": 73,
        "height": 85
      },
      "revenue": {
        "x": 856,
        "y": 656,
        "width": 73,
        "height": 283
      },
      "gross_profit": {
        "x": 1323,
        "y": 531,
        "width": 73,
        "height": 200
      },
      "cost_of_revenue": {
        "x": 1323,
        "y": 963,
        "width": 73,
        "height": 81
      },
      "operating_profit": {
        "x": 1790,
        "y": 435,
        "width": 73,
        "height": 32
      },
      "operating_expenses": {
        "x": 1790,
        "y": 681,
        "width": 73,
        "height": 168
      },
      "net_profit": {
        "x": 2258,
        "y": 328,
        "width": 73,
        "height": 12
      },
      "tax": {
        "x": 2258,
        "y": 567,
        "width": 73,
        "height": 20
      },
      "marketing": {
        "x": 2258,
        "y": 777,
        "width": 73,
        "height": 89
      },
      "rnd": {
        "x": 2258,
        "y": 1007,
        "width": 73,
        "height": 47
      },
      "ga": {
        "x": 2258,
        "y": 1189,
        "width": 73,
        "height": 33
      }
    },
    "labels": {
      "marketplace": {
        "blocks": [
          {
            "x": 429,
            "top": 443,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(0%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 210,
            "top": 528,
            "anchor": "middle",
            "lines": [
              {
                "text": "Marketplace",
                "size": 40,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 434,
            "top": 864,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 220,
            "top": 976,
            "anchor": "middle",
            "lines": [
              {
                "text": "Services",
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
            "x": 889,
            "top": 511,
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
                "size": 39,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 27,
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
            "x": 1354,
            "top": 345,
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
                "size": 39,
                "weight": 400
              },
              {
                "text": "71% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1359,
            "top": 1065,
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
            "x": 1827,
            "top": 246,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "11% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
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
            "x": 1827,
            "top": 868,
            "anchor": "middle",
            "lineGap": 8,
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
      "net_profit": {
        "blocks": [
          {
            "x": 2475,
            "top": 267,
            "anchor": "middle",
            "lineGap": 8,
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
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2474,
            "top": 528,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax & other",
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
      "marketing": {
        "blocks": [
          {
            "x": 2474,
            "top": 754,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Marketing",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "32% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
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
            "x": 2474,
            "top": 956,
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
                "text": "(1pp) Y/Y",
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
            "x": 2474,
            "top": 1158,
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
                "text": "12% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
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
      "id": "marketplace",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Marketplace",
      "value": 468,
      "notes": [
        "(0%) Y/Y"
      ],
      "color": "#eb6d20",
      "labelColor": "#eb6d20",
      "linkTint": "#eeb693"
    },
    {
      "id": "services",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Services",
      "value": 205,
      "notes": [
        "+15% Y/Y"
      ],
      "color": "#eb6d20",
      "labelColor": "#eb6d20",
      "linkTint": "#eeb693"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 673,
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#eb6d20",
      "labelColor": "#eb6d20",
      "linkTint": "#eeb693"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 479,
      "notes": [
        "71% margin",
        "(0pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
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
      "value": 194,
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
      "value": 76,
      "notes": [
        "11% margin",
        "+1pp Y/Y"
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
        "Expenses"
      ],
      "value": 403,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 29,
      "notes": [
        "4% margin",
        "(4pp) Y/Y"
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
      "label": "Tax & other",
      "value": 48,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
    },
    {
      "id": "marketing",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Marketing",
      "value": 212,
      "notes": [
        "32% of revenue",
        "+3pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "R&D",
      "value": 112,
      "notes": [
        "17% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "G&A",
      "value": 79,
      "notes": [
        "12% of revenue",
        "(3pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "marketplace",
      "target": "revenue",
      "value": 468,
      "sourceWidth": 195,
      "targetWidth": 197,
      "y0": 633.5,
      "y1": 754.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 205,
      "sourceWidth": 85,
      "targetWidth": 86,
      "y0": 1000.5,
      "y1": 896,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 479,
      "sourceWidth": 201,
      "targetWidth": 200,
      "y0": 756.5,
      "y1": 631,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 194,
      "sourceWidth": 82,
      "targetWidth": 81,
      "y0": 898,
      "y1": 1003.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 76,
      "sourceWidth": 32,
      "targetWidth": 32,
      "y0": 547,
      "y1": 451,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 403,
      "sourceWidth": 168,
      "targetWidth": 168,
      "y0": 647,
      "y1": 765,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 29,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 441,
      "y1": 334,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 48,
      "sourceWidth": 20,
      "targetWidth": 20,
      "y0": 457,
      "y1": 577,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 212,
      "sourceWidth": 89,
      "targetWidth": 89,
      "y0": 725.5,
      "y1": 821.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 112,
      "sourceWidth": 47,
      "targetWidth": 47,
      "y0": 793.5,
      "y1": 1030.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 79,
      "sourceWidth": 32,
      "targetWidth": 33,
      "y0": 833,
      "y1": 1205.5,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "GMS"
    ],
    "zh": {
      "name": "Etsy · 2025 财年第二季度",
      "meta": {
        "title": "Etsy 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月",
        "titleSize": 108
      },
      "nodes": {
        "marketplace": {
          "label": "交易市场",
          "notes": [
            "同比 (0%)"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +15%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +4%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 71%",
            "同比 (0 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 11%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 4%",
            "同比 (4 个百分点)"
          ]
        },
        "tax": {
          "label": "税费及其他",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "占收入 32%",
            "同比 +3 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 17%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 (3 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "marketplace": {
            "blocks": [
              {
                "x": 429,
                "top": 443,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (0%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 210,
                "top": 528,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "交易市场",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 434,
                "top": 864,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 220,
                "top": 976,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "服务",
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
                "x": 889,
                "top": 511,
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
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27,
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
                "x": 1354,
                "top": 345,
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
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 71%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1359,
                "top": 1065,
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
                "x": 1827,
                "top": 246,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "x": 1827,
                "top": 868,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营费用",
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
          "net_profit": {
            "blocks": [
              {
                "x": 2475,
                "top": 267,
                "anchor": "middle",
                "lineGap": 8,
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
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2474,
                "top": 528,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费及其他",
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
          "marketing": {
            "blocks": [
              {
                "x": 2474,
                "top": 754,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营销",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 32%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
                "x": 2474,
                "top": 956,
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
                    "text": "同比 (1 个百分点)",
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
                "x": 2474,
                "top": 1158,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理费用",
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
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"79\" y=\"1130\" width=\"163\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"160.5\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"160.5\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$2.8B</text><text x=\"160.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 (5%)</text></g><g><rect x=\"250\" y=\"1130\" width=\"334\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"417.0\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">活跃卖家</text><text data-operating-metric=\"active-sellers\" x=\"417.0\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">8.1M</text><text x=\"417.0\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 (8%)</text></g><g><rect x=\"588\" y=\"1130\" width=\"331\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"753.5\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">活跃买家</text><text data-operating-metric=\"active-buyers\" x=\"753.5\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">93.3M</text><text x=\"753.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 (3%)</text></g><text x=\"422\" y=\"1350\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GMV = 商品交易总额</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "gms",
      "value": "2.8",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$2.8B"
    },
    {
      "id": "active-sellers",
      "value": "8100000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "8.1M"
    },
    {
      "id": "active-buyers",
      "value": "93300000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "93.3M"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-logo-q2-fy25",
      "href": "data/assets/raster-annotations/etsy/company-logo-q2-fy25.png",
      "x": 755,
      "y": 224,
      "width": 262,
      "height": 262
    },
    {
      "key": "marketplace-brands-q2-fy25",
      "href": "data/assets/raster-annotations/etsy/marketplace-brands-q2-fy25.png",
      "x": 29,
      "y": 595,
      "width": 347,
      "height": 142
    }
  ]
});
