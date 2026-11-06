window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "etsy-q3-fy25",
  "name": "Etsy · Q3 FY25",
  "company": "Etsy",
  "meta": {
    "company": "Etsy",
    "title": "Etsy Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/etsy-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 168,
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
  "annotationsSvg": "<g><rect x=\"79\" y=\"1130\" width=\"163\" height=\"164\" rx=\"35\" fill=\"#f9731b\"/><text x=\"160.5\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"160.5\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"400\" fill=\"#fff\">$2.8B</text><text x=\"160.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#fff\">(6)% Y/Y</text></g><g><rect x=\"250\" y=\"1130\" width=\"334\" height=\"164\" rx=\"35\" fill=\"#f9731b\"/><text x=\"417\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Active sellers</text><text data-operating-metric=\"active-sellers\" x=\"417\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"400\" fill=\"#fff\">8.5M</text><text x=\"417\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#fff\">(0)% Y/Y</text></g><g><rect x=\"588\" y=\"1130\" width=\"331\" height=\"164\" rx=\"35\" fill=\"#f9731b\"/><text x=\"753.5\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Active buyers</text><text data-operating-metric=\"active-buyers\" x=\"753.5\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"400\" fill=\"#fff\">93.2M</text><text x=\"753.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#fff\">(4)% Y/Y</text></g><text x=\"422\" y=\"1350\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GMV = Gross Merchandise Sales</text>",
  "layout": {
    "scale": 0.4498525073746313,
    "nodes": {
      "marketplace": {
        "x": 389,
        "y": 529,
        "width": 73,
        "height": 210
      },
      "services": {
        "x": 389,
        "y": 961,
        "width": 73,
        "height": 94
      },
      "revenue": {
        "x": 856,
        "y": 640,
        "width": 73,
        "height": 305
      },
      "gross_profit": {
        "x": 1323,
        "y": 522,
        "width": 73,
        "height": 217
      },
      "cost_of_revenue": {
        "x": 1323,
        "y": 966,
        "width": 73,
        "height": 87
      },
      "operating_profit": {
        "x": 1791,
        "y": 401,
        "width": 73,
        "height": 37
      },
      "operating_expenses": {
        "x": 1791,
        "y": 676,
        "width": 73,
        "height": 180
      },
      "other": {
        "x": 2121,
        "y": 373,
        "width": 73,
        "height": 4
      },
      "net_profit": {
        "x": 2258,
        "y": 294,
        "width": 73,
        "height": 34
      },
      "tax": {
        "x": 2258,
        "y": 556,
        "width": 73,
        "height": 7
      },
      "marketing": {
        "x": 2258,
        "y": 785,
        "width": 73,
        "height": 93
      },
      "rnd": {
        "x": 2258,
        "y": 1010,
        "width": 73,
        "height": 51
      },
      "ga": {
        "x": 2258,
        "y": 1199,
        "width": 73,
        "height": 35
      }
    },
    "labels": {
      "marketplace": {
        "blocks": [
          {
            "x": 429,
            "top": 438,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(2)% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 330,
            "top": 529,
            "anchor": "end",
            "lineGap": 8,
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
            "x": 433,
            "top": 869,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 301,
            "top": 991,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Services",
                "size": 40,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 889,
            "top": 495,
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
                "text": "+2% Y/Y",
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
            "x": 1360,
            "top": 333,
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
            "x": 1360,
            "top": 1075,
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
            "top": 214,
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
                "text": "12% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1827,
            "top": 878,
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
            "x": 2157.5,
            "top": 394,
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
            "x": 2475,
            "top": 258,
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
                "text": "11% margin",
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
      "tax": {
        "blocks": [
          {
            "x": 2474,
            "top": 522,
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
            "top": 788,
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
                "text": "31% of revenue",
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
      "rnd": {
        "blocks": [
          {
            "x": 2474,
            "top": 995,
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
                "text": "+1pp Y/Y",
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
            "top": 1179,
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
                "text": "(1pp) Y/Y",
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
        "(2)% Y/Y"
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
      "value": 210,
      "notes": [
        "+13% Y/Y"
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
      "value": 678,
      "notes": [
        "+2% Y/Y"
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
      "value": 483,
      "notes": [
        "71% margin",
        "(1pp) Y/Y"
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
      "value": 195,
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
      "value": 83,
      "notes": [
        "12% margin",
        "(1pp) Y/Y"
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
      "value": 401,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": []
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
      "linkTint": "#99cd99",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 76,
      "notes": [
        "11% margin",
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
      "value": 17,
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
      "value": 208,
      "notes": [
        "31% of revenue",
        "+1pp Y/Y"
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
      "value": 113,
      "notes": [
        "17% of revenue",
        "+1pp Y/Y"
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
        "(1pp) Y/Y"
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
      "sourceWidth": 210,
      "targetWidth": 211,
      "y0": 634,
      "y1": 745.5
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 210,
      "sourceWidth": 94,
      "targetWidth": 94,
      "y0": 1008,
      "y1": 898
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 483,
      "sourceWidth": 218,
      "targetWidth": 217,
      "y0": 749,
      "y1": 630.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 195,
      "sourceWidth": 87,
      "targetWidth": 87,
      "y0": 901.5,
      "y1": 1009.5
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 83,
      "sourceWidth": 37,
      "targetWidth": 37,
      "y0": 540.5,
      "y1": 419.5
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 401,
      "sourceWidth": 180,
      "targetWidth": 180,
      "y0": 649,
      "y1": 766
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 66,
      "sourceWidth": 30,
      "targetWidth": 30,
      "y0": 416,
      "y1": 309
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 17,
      "sourceWidth": 7,
      "targetWidth": 7,
      "y0": 434.5,
      "y1": 559.5
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 9,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 375,
      "y1": 326,
      "curve": {
        "c1x": 2220,
        "c1y": 375,
        "c2x": 2210,
        "c2y": 326
      }
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 208,
      "sourceWidth": 93,
      "targetWidth": 93,
      "y0": 722.5,
      "y1": 831.5
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 113,
      "sourceWidth": 51,
      "targetWidth": 51,
      "y0": 794.5,
      "y1": 1035.5
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 79,
      "sourceWidth": 36,
      "targetWidth": 35,
      "y0": 838,
      "y1": 1216.5
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "GMS"
    ],
    "zh": {
      "name": "Etsy · 2025 财年第三季度",
      "meta": {
        "title": "Etsy 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "titleSize": 112
      },
      "nodes": {
        "marketplace": {
          "label": "交易市场",
          "notes": [
            "同比 (2)%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +13%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +2%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 71%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 12%",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 11%",
            "同比 +2 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "占收入 31%",
            "同比 +1 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 17%",
            "同比 +1 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "marketplace": {
            "blocks": [
              {
                "x": 429,
                "top": 438,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2)%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 330,
                "top": 529,
                "anchor": "end",
                "lineGap": 8,
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
                "x": 433,
                "top": 869,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +13%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 301,
                "top": 991,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "服务",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 889,
                "top": 495,
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
                    "text": "同比 +2%",
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
                "x": 1360,
                "top": 333,
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
                "x": 1360,
                "top": 1075,
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
                "top": 214,
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
                    "text": "利润率 12%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1827,
                "top": 878,
                "anchor": "middle",
                "lineGap": 8,
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
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2157.5,
                "top": 394,
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
                "x": 2475,
                "top": 258,
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
                    "text": "利润率 11%",
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
          "tax": {
            "blocks": [
              {
                "x": 2474,
                "top": 522,
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
                "top": 788,
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
                    "text": "占收入 31%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2474,
                "top": 995,
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
                    "text": "同比 +1 个百分点",
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
                "top": 1179,
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
                    "text": "同比 (1 个百分点)",
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
      "annotationsSvg": "<g><rect x=\"79\" y=\"1130\" width=\"163\" height=\"164\" rx=\"35\" fill=\"#f9731b\"/><text x=\"160.5\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"160.5\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"400\" fill=\"#fff\">$2.8B</text><text x=\"160.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#fff\">同比 (6)%</text></g><g><rect x=\"250\" y=\"1130\" width=\"334\" height=\"164\" rx=\"35\" fill=\"#f9731b\"/><text x=\"417\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">活跃卖家</text><text data-operating-metric=\"active-sellers\" x=\"417\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"400\" fill=\"#fff\">8.5M</text><text x=\"417\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#fff\">同比 (0)%</text></g><g><rect x=\"588\" y=\"1130\" width=\"331\" height=\"164\" rx=\"35\" fill=\"#f9731b\"/><text x=\"753.5\" y=\"1184\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">活跃买家</text><text data-operating-metric=\"active-buyers\" x=\"753.5\" y=\"1227\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"400\" fill=\"#fff\">93.2M</text><text x=\"753.5\" y=\"1269\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#fff\">同比 (4)%</text></g><text x=\"422\" y=\"1350\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GMV = 商品交易总额</text>"
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
      "value": "8500000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "8.5M"
    },
    {
      "id": "active-buyers",
      "value": "93200000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "93.2M"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "etsy-logo-q3-fy25",
      "href": "data/assets/raster-annotations/etsy/etsy-logo-q3-fy25.png",
      "x": 759,
      "y": 205,
      "width": 256,
      "height": 256,
      "clearance": true
    },
    {
      "key": "marketplace-brands-q3-fy25",
      "href": "data/assets/raster-annotations/etsy/marketplace-brands-q3-fy25.png",
      "x": 113,
      "y": 590,
      "width": 188,
      "height": 142
    }
  ]
});
