window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "align-q3-fy25",
  "name": "Align Technology · Q3 FY25",
  "company": "Align Technology",
  "meta": {
    "company": "Align Technology",
    "title": "Align Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending Sep. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/align-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2055,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#009ace",
        "label": "#009ace"
      },
      "hub": {
        "node": "#009ace",
        "label": "#009ace"
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
      "source": "#85cae1",
      "hub": "#85cae1",
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
  "rasterAnnotations": [
    {
      "key": "align-company-wordmark",
      "href": "data/assets/raster-annotations/align/align-company-wordmark.png",
      "x": 555,
      "y": 260,
      "width": 635,
      "height": 275
    },
    {
      "key": "clear-aligners-product",
      "href": "data/assets/raster-annotations/align/clear-aligners-product.png",
      "x": 80,
      "y": 550,
      "width": 210,
      "height": 205
    },
    {
      "key": "systems-services-scanner",
      "href": "data/assets/raster-annotations/align/systems-services-scanner.png",
      "x": 150,
      "y": 942,
      "width": 140,
      "height": 199
    }
  ],
  "layout": {
    "scale": 0.404,
    "nodes": {
      "clear_aligners": {
        "x": 377,
        "y": 575,
        "width": 73,
        "height": 326
      },
      "systems_services": {
        "x": 377,
        "y": 1148,
        "width": 73,
        "height": 77
      },
      "revenue": {
        "x": 844,
        "y": 710,
        "width": 73,
        "height": 403
      },
      "gross_profit": {
        "x": 1311,
        "y": 579,
        "width": 73,
        "height": 259
      },
      "cost_of_revenue": {
        "x": 1311,
        "y": 1080,
        "width": 73,
        "height": 145
      },
      "operating_profit": {
        "x": 1779,
        "y": 490,
        "width": 73,
        "height": 40
      },
      "operating_expenses": {
        "x": 1779,
        "y": 703,
        "width": 73,
        "height": 220
      },
      "net_profit": {
        "x": 2245,
        "y": 383,
        "width": 73,
        "height": 24
      },
      "tax": {
        "x": 2245,
        "y": 596,
        "width": 73,
        "height": 16
      },
      "other_expense": {
        "x": 2245,
        "y": 702,
        "width": 73,
        "height": 1
      },
      "sga": {
        "x": 2245,
        "y": 790,
        "width": 73,
        "height": 169
      },
      "rnd": {
        "x": 2245,
        "y": 1083,
        "width": 73,
        "height": 39
      },
      "restructuring": {
        "x": 2245,
        "y": 1241,
        "width": 73,
        "height": 13
      }
    },
    "labels": {
      "clear_aligners": {
        "blocks": [
          {
            "x": 416,
            "top": 477,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 216,
            "top": 766,
            "anchor": "middle",
            "semanticRole": "reference-offset-side-label",
            "lineGap": 7,
            "lines": [
              {
                "text": "Clear",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Aligners",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "systems_services": {
        "blocks": [
          {
            "x": 416,
            "top": 1048,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(1%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 216,
            "top": 1132,
            "anchor": "middle",
            "semanticRole": "reference-offset-side-label",
            "lineGap": 7,
            "lines": [
              {
                "text": "Systems",
                "size": 40,
                "weight": 800
              },
              {
                "text": "& Services",
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
            "x": 880,
            "top": 558,
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
                "text": "+2% Y/Y",
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
            "x": 1350,
            "top": 389,
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
                "text": "64% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(6pp) Y/Y",
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
            "x": 1350,
            "top": 1234,
            "anchor": "middle",
            "lineGap": 8,
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
            "x": 1815,
            "top": 298,
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
                "text": "10% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(7pp) Y/Y",
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
            "x": 1815,
            "top": 938,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
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
      "net_profit": {
        "blocks": [
          {
            "x": 2458,
            "top": 333,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "6% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2458,
            "top": 553,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2458,
            "top": 658,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2458,
            "top": 811,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
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
                "text": "(2pp) Y/Y",
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
            "x": 2458,
            "top": 1040,
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
                "text": "9% of revenue",
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
      "restructuring": {
        "blocks": [
          {
            "x": 2458,
            "top": 1221,
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
                "text": "3% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+3pp Y/Y",
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
      "id": "clear_aligners",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Clear",
        "Aligners"
      ],
      "value": 806.0,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "systems_services",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Systems",
        "& Services"
      ],
      "value": 190.0,
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 996.0,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 639.0,
      "notes": [
        "64% margin",
        "(6pp) Y/Y"
      ]
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
      "value": 356.0
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 96.0,
      "notes": [
        "10% margin",
        "(7pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 543.0
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 57.0,
      "notes": [
        "6% margin",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 38.0
    },
    {
      "id": "other_expense",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 2.0
    },
    {
      "id": "sga",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "SG&A",
      "value": 418.0,
      "notes": [
        "42% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "R&D",
      "value": 93.0,
      "notes": [
        "9% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "col": 5,
      "order": 5,
      "type": "cost",
      "label": "Restructuring",
      "value": 32.0,
      "notes": [
        "3% of revenue",
        "+3pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "clear_aligners",
      "target": "revenue",
      "value": 806.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 326,
      "targetWidth": 326,
      "y0": 738,
      "y1": 873,
      "linkTint": "#85cae1"
    },
    {
      "source": "systems_services",
      "target": "revenue",
      "value": 190.0,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 77,
      "targetWidth": 77,
      "y0": 1186.5,
      "y1": 1074.5,
      "linkTint": "#85cae1"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 639.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 259,
      "targetWidth": 259,
      "y0": 839.5,
      "y1": 708.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 356.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 144,
      "targetWidth": 145,
      "y0": 1041,
      "y1": 1152.5,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 96.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 39,
      "targetWidth": 40,
      "y0": 598.5,
      "y1": 510,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 543.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 220,
      "targetWidth": 220,
      "y0": 728,
      "y1": 813,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 57.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 23,
      "targetWidth": 24,
      "y0": 501.5,
      "y1": 395,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 38.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 15,
      "targetWidth": 16,
      "y0": 520.5,
      "y1": 604,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 2.0,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 1,
      "targetWidth": 1,
      "y0": 529,
      "y1": 702.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 418.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 169,
      "targetWidth": 169,
      "y0": 788.5,
      "y1": 874.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 93.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 39,
      "targetWidth": 39,
      "y0": 892.5,
      "y1": 1102.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 32.0,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 12,
      "targetWidth": 13,
      "y0": 917,
      "y1": 1247.5,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "爱齐科技 · 2025 财年第三季度",
      "meta": {
        "title": "爱齐科技 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 9 月",
        "titleTextLength": 2055
      },
      "nodes": {
        "clear_aligners": {
          "label": [
            "透明",
            "矫治器"
          ],
          "notes": [
            "同比 +2%"
          ]
        },
        "systems_services": {
          "label": [
            "系统",
            "与服务"
          ],
          "notes": [
            "同比 (1%)"
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
            "利润率 64%",
            "同比 (6 个百分点)"
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
            "利润率 10%",
            "同比 (7 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 6%",
            "同比 (6 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other_expense": {
          "label": "其他"
        },
        "sga": {
          "label": "销售及管理费用",
          "notes": [
            "占收入 42%",
            "同比 (2 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 9%",
            "同比 +1 个百分点"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 3%",
            "同比 +3 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "clear_aligners": {
            "blocks": [
              {
                "x": 416,
                "top": 477,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 216,
                "top": 766,
                "anchor": "middle",
                "semanticRole": "reference-offset-side-label",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "透明",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "矫治器",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "systems_services": {
            "blocks": [
              {
                "x": 416,
                "top": 1048,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 216,
                "top": 1132,
                "anchor": "middle",
                "semanticRole": "reference-offset-side-label",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "系统",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "与服务",
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
                "x": 880,
                "top": 558,
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
                    "text": "同比 +2%",
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
                "x": 1350,
                "top": 389,
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
                    "text": "利润率 64%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (6 个百分点)",
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
                "x": 1350,
                "top": 1234,
                "anchor": "middle",
                "lineGap": 8,
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
                "x": 1815,
                "top": 298,
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
                    "text": "利润率 10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (7 个百分点)",
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
                "x": 1815,
                "top": 938,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
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
          "net_profit": {
            "blocks": [
              {
                "x": 2458,
                "top": 333,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 6%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2458,
                "top": 553,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2458,
                "top": 658,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2458,
                "top": 811,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售及",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
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
                    "text": "占收入 42%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2458,
                "top": 1040,
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
                    "text": "占收入 9%",
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
          "restructuring": {
            "blocks": [
              {
                "x": 2458,
                "top": 1221,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "重组",
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
                    "text": "占收入 3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +3 个百分点",
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
  }
});
