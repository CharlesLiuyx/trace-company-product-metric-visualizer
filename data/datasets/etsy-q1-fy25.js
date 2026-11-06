window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "etsy-q1-fy25",
  "name": "Etsy · Q1 FY25",
  "company": "Etsy",
  "meta": {
    "company": "Etsy",
    "title": "Etsy Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/etsy-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 186,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 1980,
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
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#eb6d20",
        "label": "#ed7626"
      },
      "hub": {
        "node": "#eb6d20",
        "label": "#ed7626"
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
  "nodes": [
    {
      "id": "marketplace",
      "label": "Marketplace",
      "value": 459,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(2)% Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 193,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 651,
      "type": "hub",
      "col": 0,
      "order": 0,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 459,
      "type": "profit",
      "col": 0,
      "order": 0,
      "notes": [
        "71% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 192,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 22,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": [
        "(3)% margin",
        "(14pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating Expenses",
      "value": 481,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 189,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": [
        "29% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 111,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": [
        "17% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "impairment",
      "label": "Asset impairment",
      "value": 102,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": [
        "16% of revenue",
        "Non-recurring"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 80,
      "type": "cost",
      "col": 0,
      "order": 0,
      "notes": [
        "12% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "marketplace",
      "target": "revenue",
      "value": 459,
      "sourceWidth": 195,
      "targetWidth": 196,
      "y0": 624.5,
      "y1": 759,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 193,
      "sourceWidth": 83,
      "targetWidth": 82,
      "y0": 1014.5,
      "y1": 898,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 459,
      "sourceWidth": 196,
      "targetWidth": 196,
      "y0": 759,
      "y1": 628,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 192,
      "sourceWidth": 82,
      "targetWidth": 82,
      "y0": 898,
      "y1": 1012,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 459,
      "sourceWidth": 196,
      "targetWidth": 196,
      "y0": 628,
      "y1": 758,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 22,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 912,
      "y1": 861,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 189,
      "sourceWidth": 81,
      "targetWidth": 81,
      "y0": 700.5,
      "y1": 498.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 111,
      "sourceWidth": 48,
      "targetWidth": 48,
      "y0": 765,
      "y1": 743,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "impairment",
      "value": 102,
      "sourceWidth": 44,
      "targetWidth": 44,
      "y0": 811,
      "y1": 970,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 80,
      "sourceWidth": 33,
      "targetWidth": 35,
      "y0": 849.5,
      "y1": 1208.5,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.4270353302611367,
    "nodes": {
      "marketplace": {
        "x": 389,
        "y": 527,
        "width": 73,
        "height": 195
      },
      "services": {
        "x": 389,
        "y": 973,
        "width": 73,
        "height": 83
      },
      "revenue": {
        "x": 856,
        "y": 661,
        "width": 73,
        "height": 278
      },
      "gross_profit": {
        "x": 1325,
        "y": 530,
        "width": 73,
        "height": 196
      },
      "cost_of_revenue": {
        "x": 1320,
        "y": 971,
        "width": 73,
        "height": 82
      },
      "operating_loss": {
        "x": 1583,
        "y": 907,
        "width": 73,
        "height": 10
      },
      "operating_expenses": {
        "x": 1793,
        "y": 660,
        "width": 73,
        "height": 206
      },
      "marketing": {
        "x": 2257,
        "y": 458,
        "width": 73,
        "height": 81
      },
      "rnd": {
        "x": 2257,
        "y": 719,
        "width": 73,
        "height": 48
      },
      "impairment": {
        "x": 2257,
        "y": 948,
        "width": 73,
        "height": 44
      },
      "ga": {
        "x": 2257,
        "y": 1191,
        "width": 73,
        "height": 35
      }
    },
    "labels": {
      "marketplace": {
        "blocks": [
          {
            "x": 428,
            "top": 429,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "(2)% Y/Y",
                "size": 27,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 428,
            "top": 880,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 300,
            "top": 990,
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
            "x": 893,
            "top": 513,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 27,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1362,
            "top": 342,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "71% margin",
                "size": 27,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1357,
            "top": 1070,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 33,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1620,
            "top": 933,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 33,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "(3)% margin",
                "size": 27,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(14pp) Y/Y",
                "size": 27,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1830,
            "top": 516,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 33,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2450,
            "top": 459,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Marketing",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "29% of revenue",
                "size": 27,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2450,
            "top": 710,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "R&D",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "17% of revenue",
                "size": 27,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "impairment": {
        "blocks": [
          {
            "x": 2450,
            "top": 909,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Asset",
                "size": 33,
                "weight": 800
              },
              {
                "text": "impairment",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "16% of revenue",
                "size": 27,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "Non-recurring",
                "size": 27,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2450,
            "top": 1174,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "G&A",
                "size": 33,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 27,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g><g class=\"sankey-interactive-annotation\" data-node=\"marketplace\"><text x=\"330\" y=\"554\" text-anchor=\"end\" font-size=\"40\" font-weight=\"800\" fill=\"#ed7626\">Marketplace</text></g><g><rect x=\"79\" y=\"1153\" width=\"165\" height=\"165\" rx=\"39\" fill=\"#f97320\"/><text x=\"161.5\" y=\"1206\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"161.5\" y=\"1249\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$2.8B</text><text x=\"161.5\" y=\"1290\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">(7)% Y/Y</text></g><g><rect x=\"250\" y=\"1153\" width=\"334\" height=\"165\" rx=\"39\" fill=\"#f97320\"/><text x=\"417.0\" y=\"1206\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Active sellers</text><text data-operating-metric=\"active-sellers\" x=\"417.0\" y=\"1249\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">8.1M</text><text x=\"417.0\" y=\"1290\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">(11)% Y/Y</text></g><g><rect x=\"588\" y=\"1153\" width=\"332\" height=\"165\" rx=\"39\" fill=\"#f97320\"/><text x=\"754.0\" y=\"1206\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Active buyers</text><text data-operating-metric=\"active-buyers\" x=\"754.0\" y=\"1249\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">94.8M</text><text x=\"754.0\" y=\"1290\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">(2)% Y/Y</text></g><text x=\"422\" y=\"1374\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GMV = Gross Merchandise Sales</text></g>",
  "rasterAnnotations": [
    {
      "key": "etsy-logo-q1-fy25",
      "href": "data/assets/raster-annotations/etsy/company-logo-q1-fy25.png",
      "x": 760,
      "y": 230,
      "width": 265,
      "height": 264,
      "clearance": true
    },
    {
      "key": "brands-q1-fy25",
      "href": "data/assets/raster-annotations/etsy/brands-q1-fy25.png",
      "x": 29,
      "y": 583,
      "width": 347,
      "height": 137
    }
  ],
  "operatingMetrics": [
    {
      "id": "gms",
      "value": "2.8",
      "unit": "B",
      "currency": "USD",
      "literal": "$2.8B",
      "comparison": "eq"
    },
    {
      "id": "active-sellers",
      "value": "8100000",
      "unit": "count",
      "currency": null,
      "literal": "8.1M",
      "comparison": "eq"
    },
    {
      "id": "active-buyers",
      "value": "94800000",
      "unit": "count",
      "currency": null,
      "literal": "94.8M",
      "comparison": "eq"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Etsy · 2025 财年第一季度",
      "meta": {
        "title": "Etsy 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "titleSize": 112,
        "titleTextLength": 1510
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
            "同比 +8%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
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
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (3)%",
            "同比 (14 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "占收入 29%",
            "同比 (1 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 17%",
            "同比 0 个百分点"
          ]
        },
        "impairment": {
          "label": "资产减值",
          "notes": [
            "占收入 16%",
            "非经常性"
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
                "x": 428,
                "top": 429,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2)%",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 428,
                "top": 880,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 300,
                "top": 990,
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
                "x": 893,
                "top": 513,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1362,
                "top": 342,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 71%",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1357,
                "top": 1070,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1620,
                "top": 933,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (3)%",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (14 个百分点)",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1830,
                "top": 516,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2450,
                "top": 459,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营销",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 29%",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2450,
                "top": 710,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "研发",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 17%",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 0 个百分点",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "impairment": {
            "blocks": [
              {
                "x": 2450,
                "top": 909,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "资产",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "减值",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 16%",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "非经常性",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2450,
                "top": 1174,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 33,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><g class=\"sankey-interactive-annotation\" data-node=\"marketplace\"><text x=\"330\" y=\"554\" text-anchor=\"end\" font-size=\"40\" font-weight=\"800\" fill=\"#ed7626\">交易市场</text></g><g><rect x=\"79\" y=\"1153\" width=\"165\" height=\"165\" rx=\"39\" fill=\"#f97320\"/><text x=\"161.5\" y=\"1206\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"161.5\" y=\"1249\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$2.8B</text><text x=\"161.5\" y=\"1290\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 (7)%</text></g><g><rect x=\"250\" y=\"1153\" width=\"334\" height=\"165\" rx=\"39\" fill=\"#f97320\"/><text x=\"417.0\" y=\"1206\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">活跃卖家</text><text data-operating-metric=\"active-sellers\" x=\"417.0\" y=\"1249\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">8.1M</text><text x=\"417.0\" y=\"1290\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 (11)%</text></g><g><rect x=\"588\" y=\"1153\" width=\"332\" height=\"165\" rx=\"39\" fill=\"#f97320\"/><text x=\"754.0\" y=\"1206\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">活跃买家</text><text data-operating-metric=\"active-buyers\" x=\"754.0\" y=\"1249\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">94.8M</text><text x=\"754.0\" y=\"1290\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 (2)%</text></g><text x=\"422\" y=\"1374\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">GMV = 商品交易总额</text></g>"
    }
  }
});
