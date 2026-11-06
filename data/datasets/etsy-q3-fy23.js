window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "etsy-q3-fy23",
  "name": "Etsy · Q3 FY23",
  "company": "Etsy",
  "meta": {
    "company": "Etsy",
    "title": "Etsy Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/etsy-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 1990
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "noteColor": "#727272",
    "palette": {
      "source": {
        "node": "#eb6d20",
        "label": "#f27124"
      },
      "hub": {
        "node": "#eb6d20",
        "label": "#f27124"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#9a1405"
      }
    },
    "linkTint": {
      "source": "#eeb693",
      "hub": "#eeb693",
      "profit": "#9bcf9b",
      "cost": "#df8182"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39,
      "value": 38,
      "note": 28,
      "lineGap": 9
    }
  },
  "nodes": [
    {
      "id": "marketplace",
      "label": "Marketplace",
      "value": 461,
      "notes": [
        "+4% Y/Y"
      ],
      "type": "source"
    },
    {
      "id": "services",
      "label": "Services",
      "value": 175,
      "notes": [
        "+16% Y/Y"
      ],
      "type": "source"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 636,
      "notes": [
        "+7% Y/Y"
      ],
      "type": "hub"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 448,
      "notes": [
        "70% margin",
        "(0pp) Y/Y"
      ],
      "type": "profit"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 189,
      "notes": [],
      "type": "cost"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 89,
      "notes": [
        "14% margin",
        "+175pp Y/Y"
      ],
      "type": "profit"
    },
    {
      "id": "operating_expenses",
      "label": "Operating Expenses",
      "value": 359,
      "notes": [],
      "type": "cost"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 8,
      "notes": [],
      "type": "profit"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 88,
      "notes": [
        "14% margin",
        "+176pp Y/Y"
      ],
      "type": "profit"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 9,
      "notes": [],
      "type": "cost"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 161,
      "notes": [
        "25% of revenue",
        "+1pp Y/Y"
      ],
      "type": "cost"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 114,
      "notes": [
        "18% of revenue",
        "+0pp Y/Y"
      ],
      "type": "cost"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 84,
      "notes": [
        "13% of revenue",
        "+1pp Y/Y"
      ],
      "type": "cost"
    }
  ],
  "links": [
    {
      "source": "marketplace",
      "target": "revenue",
      "value": 461,
      "sourceWidth": 280,
      "targetWidth": 280,
      "y0": 642,
      "y1": 785,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 175,
      "sourceWidth": 107,
      "targetWidth": 107,
      "y0": 1066.5,
      "y1": 978.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 448,
      "sourceWidth": 273,
      "targetWidth": 273,
      "y0": 781.5,
      "y1": 661.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcf9b"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 189,
      "sourceWidth": 114,
      "targetWidth": 115,
      "y0": 975,
      "y1": 1062.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 89,
      "sourceWidth": 54,
      "targetWidth": 54,
      "y0": 552,
      "y1": 436,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcf9b"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 359,
      "sourceWidth": 219,
      "targetWidth": 219,
      "y0": 688.5,
      "y1": 792.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 80,
      "sourceWidth": 49,
      "targetWidth": 49,
      "y0": 433.5,
      "y1": 354.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcf9b"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 9,
      "sourceWidth": 5,
      "targetWidth": 5,
      "y0": 460.5,
      "y1": 642.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 8,
      "sourceWidth": 5,
      "targetWidth": 5,
      "y0": 460.5,
      "y1": 381.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9bcf9b"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 161,
      "sourceWidth": 99,
      "targetWidth": 99,
      "y0": 732.5,
      "y1": 859.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 114,
      "sourceWidth": 70,
      "targetWidth": 70,
      "y0": 817,
      "y1": 1075,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 84,
      "sourceWidth": 50,
      "targetWidth": 52,
      "y0": 877,
      "y1": 1285,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.6084905660377359,
    "nodes": {
      "marketplace": {
        "x": 390,
        "y": 502,
        "width": 72,
        "height": 280
      },
      "services": {
        "x": 390,
        "y": 1013,
        "width": 72,
        "height": 107
      },
      "revenue": {
        "x": 861,
        "y": 645,
        "width": 73,
        "height": 387
      },
      "gross_profit": {
        "x": 1315,
        "y": 525,
        "width": 73,
        "height": 273
      },
      "cost_of_revenue": {
        "x": 1321,
        "y": 1005,
        "width": 73,
        "height": 115
      },
      "operating_profit": {
        "x": 1780,
        "y": 409,
        "width": 73,
        "height": 54
      },
      "operating_expenses": {
        "x": 1780,
        "y": 683,
        "width": 73,
        "height": 219
      },
      "other": {
        "x": 2123,
        "y": 458,
        "width": 73,
        "height": 5
      },
      "net_profit": {
        "x": 2257,
        "y": 330,
        "width": 73,
        "height": 54
      },
      "tax": {
        "x": 2257,
        "y": 640,
        "width": 73,
        "height": 5
      },
      "marketing": {
        "x": 2257,
        "y": 810,
        "width": 73,
        "height": 99
      },
      "rnd": {
        "x": 2257,
        "y": 1040,
        "width": 73,
        "height": 70
      },
      "ga": {
        "x": 2257,
        "y": 1259,
        "width": 73,
        "height": 52
      }
    },
    "labels": {
      "marketplace": {
        "blocks": [
          {
            "x": 430,
            "top": 401,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              }
            ]
          },
          {
            "x": 225,
            "top": 561,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Marketplace",
                "size": 39,
                "weight": 800
              }
            ],
            "semanticRole": "grouped-side-label"
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 430,
            "top": 908,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              }
            ]
          },
          {
            "x": 224,
            "top": 1042,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Services",
                "size": 39,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 894,
            "top": 494,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1352,
            "top": 333,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "70% margin",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1360,
            "top": 1135,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 39,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39,
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1818,
            "top": 219,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "14% margin",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+175pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1815,
            "top": 919,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 39,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 39,
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
      "other": {
        "blocks": [
          {
            "x": 2163,
            "top": 480,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2467,
            "top": 309,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "14% margin",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+176pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2467,
            "top": 612,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2467,
            "top": 814,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Marketing",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "25% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2467,
            "top": 1024,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "18% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2467,
            "top": 1218,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "G&A",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "13% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#727272"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g><rect x=\"79\" y=\"1153\" width=\"164\" height=\"165\" rx=\"39\" fill=\"#f87121\"/><text x=\"161.0\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"white\">GMS</text><text data-operating-metric=\"gms\" x=\"161.0\" y=\"1248\" text-anchor=\"middle\" font-size=\"30\" fill=\"white\">$3.0B</text><text x=\"161.0\" y=\"1289\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">+1% Y/Y</text></g><g><rect x=\"250\" y=\"1153\" width=\"334\" height=\"165\" rx=\"39\" fill=\"#f87121\"/><text x=\"417.0\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"white\">Active sellers</text><text data-operating-metric=\"active-sellers\" x=\"417.0\" y=\"1248\" text-anchor=\"middle\" font-size=\"30\" fill=\"white\">8.8M</text><text x=\"417.0\" y=\"1289\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">+19% Y/Y</text></g><g><rect x=\"588\" y=\"1153\" width=\"332\" height=\"165\" rx=\"39\" fill=\"#f87121\"/><text x=\"754.0\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"white\">Active buyers</text><text data-operating-metric=\"active-buyers\" x=\"754.0\" y=\"1248\" text-anchor=\"middle\" font-size=\"30\" fill=\"white\">97.3M</text><text x=\"754.0\" y=\"1289\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">+3% Y/Y</text></g><text x=\"422\" y=\"1373\" text-anchor=\"middle\" font-size=\"28\" fill=\"#727272\">GMV = Gross Merchandise Sales</text>",
  "operatingMetrics": [
    {
      "id": "gms",
      "value": "3.0",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$3.0B"
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
      "value": "97300000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "97.3M"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Etsy · 2023 财年第三季度",
      "meta": {
        "title": "Etsy 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "titleSize": 112,
        "titleTextLength": 1510
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
            "同比 +16%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +7%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 70%",
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
            "利润率 14%",
            "同比 +175 个百分点"
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
            "利润率 14%",
            "同比 +176 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "占收入 25%",
            "同比 +1 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 18%",
            "同比 +0 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 13%",
            "同比 +1 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "marketplace": {
            "blocks": [
              {
                "x": 430,
                "top": 401,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              },
              {
                "x": 225,
                "top": 561,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "交易市场",
                    "size": 39,
                    "weight": 800
                  }
                ],
                "semanticRole": "grouped-side-label"
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 430,
                "top": 908,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              },
              {
                "x": 224,
                "top": 1042,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 894,
                "top": 494,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1352,
                "top": 333,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 70%",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1360,
                "top": 1135,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39,
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1818,
                "top": 219,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +175 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1815,
                "top": 919,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39,
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
          "other": {
            "blocks": [
              {
                "x": 2163,
                "top": 480,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2467,
                "top": 309,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +176 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2467,
                "top": 612,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2467,
                "top": 814,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营销",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2467,
                "top": 1024,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 18%",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2467,
                "top": 1218,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 13%",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#727272"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"79\" y=\"1153\" width=\"164\" height=\"165\" rx=\"39\" fill=\"#f87121\"/><text x=\"161.0\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"white\">GMS</text><text data-operating-metric=\"gms\" x=\"161.0\" y=\"1248\" text-anchor=\"middle\" font-size=\"30\" fill=\"white\">$3.0B</text><text x=\"161.0\" y=\"1289\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">同比 +1%</text></g><g><rect x=\"250\" y=\"1153\" width=\"334\" height=\"165\" rx=\"39\" fill=\"#f87121\"/><text x=\"417.0\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"white\">活跃卖家</text><text data-operating-metric=\"active-sellers\" x=\"417.0\" y=\"1248\" text-anchor=\"middle\" font-size=\"30\" fill=\"white\">8.8M</text><text x=\"417.0\" y=\"1289\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">同比 +19%</text></g><g><rect x=\"588\" y=\"1153\" width=\"332\" height=\"165\" rx=\"39\" fill=\"#f87121\"/><text x=\"754.0\" y=\"1207\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"white\">活跃买家</text><text data-operating-metric=\"active-buyers\" x=\"754.0\" y=\"1248\" text-anchor=\"middle\" font-size=\"30\" fill=\"white\">97.3M</text><text x=\"754.0\" y=\"1289\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">同比 +3%</text></g><text x=\"422\" y=\"1373\" text-anchor=\"middle\" font-size=\"28\" fill=\"#727272\">GMV = 商品交易总额</text>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-logo-q3-fy23",
      "href": "data/assets/raster-annotations/etsy/company-logo-q3-fy23.png",
      "x": 761,
      "y": 224,
      "width": 260,
      "height": 260
    },
    {
      "key": "brands-q3-fy23",
      "href": "data/assets/raster-annotations/etsy/brands-q3-fy23.png",
      "x": 59,
      "y": 627,
      "width": 318,
      "height": 144
    }
  ]
});
