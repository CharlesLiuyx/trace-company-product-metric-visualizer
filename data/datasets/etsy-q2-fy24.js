window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "etsy-q2-fy24",
  "name": "Etsy · Q2 FY24",
  "company": "Etsy",
  "meta": {
    "company": "Etsy",
    "title": "Etsy Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/etsy-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 197,
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"79\" y=\"1154\" width=\"163\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"160.5\" y=\"1208\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"160.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$2.9B</text><text x=\"160.5\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">(2%) Y/Y</text></g><g><rect x=\"250\" y=\"1154\" width=\"334\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"417\" y=\"1208\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Active sellers</text><text data-operating-metric=\"active-sellers\" x=\"417\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">8.8M</text><text x=\"417\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">+6% Y/Y</text></g><g><rect x=\"588\" y=\"1154\" width=\"331\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"753.5\" y=\"1208\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Active buyers</text><text data-operating-metric=\"active-buyers\" x=\"753.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">97M</text><text x=\"753.5\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">+0% Y/Y</text></g><text x=\"422\" y=\"1374\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GMV = Gross Merchandise Sales</text></g>",
  "layout": {
    "scale": 0.4691358024691358,
    "nodes": {
      "marketplace": {
        "x": 389,
        "y": 541,
        "width": 73,
        "height": 221
      },
      "services": {
        "x": 389,
        "y": 1005,
        "width": 73,
        "height": 84
      },
      "revenue": {
        "x": 856,
        "y": 674,
        "width": 72,
        "height": 304
      },
      "gross_profit": {
        "x": 1321,
        "y": 537,
        "width": 73,
        "height": 218
      },
      "cost_of_revenue": {
        "x": 1321,
        "y": 1008,
        "width": 73,
        "height": 87
      },
      "operating_profit": {
        "x": 1791,
        "y": 424,
        "width": 73,
        "height": 33
      },
      "operating_expenses": {
        "x": 1791,
        "y": 669,
        "width": 73,
        "height": 185
      },
      "other": {
        "x": 2138,
        "y": 406,
        "width": 73,
        "height": 4
      },
      "net_profit": {
        "x": 2258,
        "y": 331,
        "width": 72,
        "height": 25
      },
      "tax": {
        "x": 2258,
        "y": 537,
        "width": 72,
        "height": 12
      },
      "marketing": {
        "x": 2258,
        "y": 787,
        "width": 72,
        "height": 86
      },
      "rnd": {
        "x": 2258,
        "y": 993,
        "width": 72,
        "height": 54
      },
      "ga": {
        "x": 2258,
        "y": 1175,
        "width": 72,
        "height": 45
      }
    },
    "labels": {
      "marketplace": {
        "blocks": [
          {
            "x": 428,
            "top": 445,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 345,
            "top": 552,
            "anchor": "end",
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
            "x": 428,
            "top": 907,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 305,
            "top": 1020,
            "anchor": "end",
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
            "x": 890,
            "top": 521,
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
                "text": "+3% Y/Y",
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
            "x": 1357,
            "top": 348,
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
                "text": "72% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
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
            "x": 1358,
            "top": 1110,
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
            "x": 1830,
            "top": 234,
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
                "text": "+11pp Y/Y",
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
            "x": 1828,
            "top": 872,
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
      "other": {
        "blocks": [
          {
            "x": 2175,
            "top": 429,
            "anchor": "middle",
            "lineGap": 8,
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
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2474,
            "top": 283,
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
                "text": "8% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
            "top": 500,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
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
            "top": 761,
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
                "text": "28% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
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
            "top": 959,
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
                "text": "18% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
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
                "text": "15% of revenue",
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
      "value": 470,
      "notes": [
        "+4% Y/Y"
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
      "value": 177,
      "notes": [
        "+1% Y/Y"
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
      "value": 648,
      "notes": [
        "+3% Y/Y"
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
      "value": 464,
      "notes": [
        "72% margin",
        "+2pp Y/Y"
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
      "value": 184,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 70,
      "notes": [
        "11% margin",
        "+11pp Y/Y"
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
      "value": 394,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 9,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 53,
      "notes": [
        "8% margin",
        "(2pp) Y/Y"
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
      "value": 26,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "marketing",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Marketing",
      "value": 183,
      "notes": [
        "28% of revenue",
        "+2pp Y/Y"
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
      "value": 114,
      "notes": [
        "18% of revenue",
        "(2pp) Y/Y"
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
      "value": 96,
      "notes": [
        "15% of revenue",
        "+1pp Y/Y"
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
      "value": 470,
      "sourceWidth": 221,
      "targetWidth": 221,
      "y0": 651.5,
      "y1": 784.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 177,
      "sourceWidth": 84,
      "targetWidth": 83,
      "y0": 1047,
      "y1": 936.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 464,
      "sourceWidth": 218,
      "targetWidth": 218,
      "y0": 783,
      "y1": 646,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 184,
      "sourceWidth": 86,
      "targetWidth": 87,
      "y0": 935,
      "y1": 1051.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 70,
      "sourceWidth": 33,
      "targetWidth": 33,
      "y0": 553.5,
      "y1": 440.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 394,
      "sourceWidth": 185,
      "targetWidth": 185,
      "y0": 662.5,
      "y1": 761.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 44,
      "sourceWidth": 21,
      "targetWidth": 21,
      "y0": 434.5,
      "y1": 341.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 26,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 451,
      "y1": 543,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 9,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 408,
      "y1": 354,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": {
        "left": "#2ca02c",
        "right": "#99cd99"
      },
      "curve": {
        "c1x": 2230,
        "c1y": 408,
        "c2x": 2220,
        "c2y": 354
      }
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 183,
      "sourceWidth": 86,
      "targetWidth": 86,
      "y0": 712,
      "y1": 830,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 114,
      "sourceWidth": 54,
      "targetWidth": 54,
      "y0": 782,
      "y1": 1020,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 96,
      "sourceWidth": 45,
      "targetWidth": 45,
      "y0": 831.5,
      "y1": 1197.5,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "GMS"
    ],
    "zh": {
      "name": "Etsy · 2024 财年第二季度",
      "meta": {
        "title": "Etsy 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月",
        "titleSize": 108
      },
      "nodes": {
        "marketplace": {
          "label": "交易市场",
          "notes": [
            "同比 +4%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +1%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +3%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 72%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 11%",
            "同比 +11 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "other": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 8%",
            "同比 (2 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "占收入 28%",
            "同比 +2 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 18%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 15%",
            "同比 +1 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "marketplace": {
            "blocks": [
              {
                "x": 428,
                "top": 445,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 345,
                "top": 552,
                "anchor": "end",
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
                "x": 428,
                "top": 907,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 305,
                "top": 1020,
                "anchor": "end",
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
                "x": 890,
                "top": 521,
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
                    "text": "同比 +3%",
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
                "x": 1357,
                "top": 348,
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
                    "text": "利润率 72%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
                "x": 1358,
                "top": 1110,
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
                "x": 1830,
                "top": 234,
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
                    "text": "同比 +11 个百分点",
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
                "x": 1828,
                "top": 872,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
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
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2175,
                "top": 429,
                "anchor": "middle",
                "lineGap": 8,
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
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2474,
                "top": 283,
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
                    "text": "利润率 8%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "top": 500,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
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
                "top": 761,
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
                    "text": "占收入 28%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
                "top": 959,
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
                    "text": "占收入 18%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                    "text": "占收入 15%",
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
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g><rect x=\"79\" y=\"1154\" width=\"163\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"160.5\" y=\"1208\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"160.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$2.9B</text><text x=\"160.5\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 (2%)</text></g><g><rect x=\"250\" y=\"1154\" width=\"334\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"417\" y=\"1208\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">活跃卖家</text><text data-operating-metric=\"active-sellers\" x=\"417\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">8.8M</text><text x=\"417\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 +6%</text></g><g><rect x=\"588\" y=\"1154\" width=\"331\" height=\"164\" rx=\"35\" fill=\"#f27124\"/><text x=\"753.5\" y=\"1208\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">活跃买家</text><text data-operating-metric=\"active-buyers\" x=\"753.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">97M</text><text x=\"753.5\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 +0%</text></g><text x=\"422\" y=\"1374\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GMV = 商品交易总额</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "gms",
      "value": "2.9",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$2.9B"
    },
    {
      "id": "active-sellers",
      "value": "8800000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "8.8M"
    },
    {
      "id": "active-buyers",
      "value": "97000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "97M"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-logo-q2-fy24",
      "href": "data/assets/raster-annotations/etsy/company-logo-q2-fy24.png",
      "x": 761,
      "y": 244,
      "width": 260,
      "height": 260
    },
    {
      "key": "brands-q2-fy24",
      "href": "data/assets/raster-annotations/etsy/brands-q2-fy24.png",
      "x": 60,
      "y": 622,
      "width": 318,
      "height": 150
    }
  ]
});
