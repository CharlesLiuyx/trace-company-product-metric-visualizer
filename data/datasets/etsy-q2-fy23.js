window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "etsy-q2-fy23",
  "name": "Etsy · Q2 FY23",
  "company": "Etsy",
  "meta": {
    "company": "Etsy",
    "title": "Etsy Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/etsy-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800
  },
  "nodes": [
    {
      "id": "marketplace",
      "label": "Marketplace",
      "value": 453,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "services",
      "label": "Services",
      "value": 176,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 629,
      "type": "hub",
      "col": 0,
      "order": 2,
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 440,
      "type": "profit",
      "col": 0,
      "order": 3,
      "notes": [
        "70% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 189,
      "type": "cost",
      "col": 0,
      "order": 4,
      "notes": []
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "Expenses"
      ],
      "value": 443,
      "type": "cost",
      "col": 0,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": [
        "Operating",
        "loss"
      ],
      "value": 2,
      "type": "cost",
      "col": 0,
      "order": 6,
      "notes": [
        "(0%) margin",
        "(13pp) Y/Y"
      ]
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 166,
      "type": "cost",
      "col": 0,
      "order": 7,
      "notes": [
        "26% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 122,
      "type": "cost",
      "col": 0,
      "order": 8,
      "notes": [
        "19% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 87,
      "type": "cost",
      "col": 0,
      "order": 9,
      "notes": [
        "14% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "impairment",
      "label": [
        "Goodwill",
        "impairment"
      ],
      "value": 68,
      "type": "cost",
      "col": 0,
      "order": 10,
      "notes": [
        "Non-recurring"
      ]
    }
  ],
  "links": [
    {
      "source": "marketplace",
      "target": "revenue",
      "value": 453,
      "sourceWidth": 181,
      "targetWidth": 181,
      "y0": 576.5,
      "y1": 749.5
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 176,
      "sourceWidth": 69,
      "targetWidth": 70,
      "y0": 952.5,
      "y1": 875
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 440,
      "sourceWidth": 176,
      "targetWidth": 175,
      "y0": 747,
      "y1": 609.5
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 189,
      "sourceWidth": 75,
      "targetWidth": 75,
      "y0": 872.5,
      "y1": 966.5
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 440,
      "sourceWidth": 175,
      "targetWidth": 176,
      "y0": 609.5,
      "y1": 746
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 2,
      "sourceWidth": 2,
      "targetWidth": 1,
      "y0": 977,
      "y1": 834.5
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 166,
      "sourceWidth": 67,
      "targetWidth": 67,
      "y0": 691.5,
      "y1": 446.5
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 122,
      "sourceWidth": 49,
      "targetWidth": 49,
      "y0": 749.5,
      "y1": 703.5
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 87,
      "sourceWidth": 34,
      "targetWidth": 34,
      "y0": 791.0,
      "y1": 934.0
    },
    {
      "source": "operating_expenses",
      "target": "impairment",
      "value": 68,
      "sourceWidth": 26,
      "targetWidth": 26,
      "y0": 821.0,
      "y1": 1158.0
    }
  ],
  "layout": {
    "scale": 0.4,
    "nodes": {
      "marketplace": {
        "x": 392,
        "y": 486,
        "width": 72,
        "height": 181
      },
      "services": {
        "x": 392,
        "y": 918,
        "width": 72,
        "height": 69
      },
      "revenue": {
        "x": 860,
        "y": 659,
        "width": 71,
        "height": 251
      },
      "gross_profit": {
        "x": 1329,
        "y": 522,
        "width": 72,
        "height": 175
      },
      "cost_of_revenue": {
        "x": 1336,
        "y": 929,
        "width": 72,
        "height": 75
      },
      "operating_expenses": {
        "x": 1786,
        "y": 658,
        "width": 72,
        "height": 177
      },
      "operating_loss": {
        "x": 1599,
        "y": 976,
        "width": 72,
        "height": 2
      },
      "marketing": {
        "x": 2261,
        "y": 413,
        "width": 72,
        "height": 67
      },
      "rnd": {
        "x": 2261,
        "y": 679,
        "width": 72,
        "height": 49
      },
      "ga": {
        "x": 2261,
        "y": 917,
        "width": 72,
        "height": 34
      },
      "impairment": {
        "x": 2261,
        "y": 1145,
        "width": 72,
        "height": 26
      }
    },
    "labels": {
      "marketplace": {
        "blocks": [
          {
            "x": 430,
            "top": 391,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": null
              },
              {
                "text": "+3% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 335,
            "top": 463,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Marketplace",
                "size": 38,
                "weight": 800,
                "color": null
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 430,
            "top": 825,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": null
              },
              {
                "text": "+21% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 298,
            "top": 932,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Services",
                "size": 38,
                "weight": 800,
                "color": null
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 895,
            "top": 510,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 38,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": null
              },
              {
                "text": "+7% Y/Y",
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
            "x": 1365,
            "top": 332,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Gross profit",
                "size": 38,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": null
              },
              {
                "text": "70% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27,
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
            "x": 1372,
            "top": 1018,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Cost of",
                "size": 38,
                "weight": 800,
                "color": null
              },
              {
                "text": "revenue",
                "size": 38,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1822,
            "top": 503,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 38,
                "weight": 800,
                "color": null
              },
              {
                "text": "Expenses",
                "size": 38,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1635,
            "top": 993,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 38,
                "weight": 800,
                "color": null
              },
              {
                "text": "loss",
                "size": 38,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": null
              },
              {
                "text": "(0%) margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(13pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2441,
            "top": 409,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Marketing",
                "size": 36,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": null
              },
              {
                "text": "26% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27,
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
            "x": 2441,
            "top": 675,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "R&D",
                "size": 36,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": null
              },
              {
                "text": "19% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27,
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
            "x": 2441,
            "top": 905,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "G&A",
                "size": 36,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": null
              },
              {
                "text": "14% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "impairment": {
        "blocks": [
          {
            "x": 2441,
            "top": 1120,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Goodwill",
                "size": 36,
                "weight": 800,
                "color": null
              },
              {
                "text": "impairment",
                "size": 36,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": null
              },
              {
                "text": "Non-recurring",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "etsy-logo-q2-fy23",
      "href": "data/assets/raster-annotations/etsy/logo-q2-fy23.png",
      "x": 750,
      "y": 222,
      "width": 282,
      "height": 282
    },
    {
      "key": "etsy-brands-q2-fy23",
      "href": "data/assets/raster-annotations/etsy/brands-q2-fy23.png",
      "x": 18,
      "y": 521,
      "width": 368,
      "height": 156
    }
  ],
  "annotationsSvg": "<g><rect x=\"79\" y=\"1154\" width=\"165\" height=\"165\" rx=\"37\" fill=\"#f7741d\"/><text x=\"161.5\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"161.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$3.0B</text><text x=\"161.5\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">(1%) Y/Y</text></g><g><rect x=\"250\" y=\"1154\" width=\"335\" height=\"165\" rx=\"37\" fill=\"#f7741d\"/><text x=\"417.5\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Active sellers</text><text data-operating-metric=\"active-sellers\" x=\"417.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">8.3M</text><text x=\"417.5\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">+12% Y/Y</text></g><g><rect x=\"589\" y=\"1154\" width=\"331\" height=\"165\" rx=\"37\" fill=\"#f7741d\"/><text x=\"754.5\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">Active buyers</text><text data-operating-metric=\"active-buyers\" x=\"754.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">96.3M</text><text x=\"754.5\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">+2.5% Y/Y</text></g><text x=\"420\" y=\"1373\" text-anchor=\"middle\" font-size=\"27\" fill=\"#777777\">GMV = Gross Merchandise Sales</text><text x=\"170\" y=\"1438\" font-size=\"37\" font-weight=\"800\">Source: Quarterly results</text>",
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
      "value": "8300000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "8.3M"
    },
    {
      "id": "active-buyers",
      "value": "96300000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "96.3M"
    }
  ],
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155576",
    "linkOpacity": 1,
    "palette": {
      "source": {
        "node": "#f3701b",
        "label": "#ff761b"
      },
      "hub": {
        "node": "#f3701b",
        "label": "#ff761b"
      },
      "profit": {
        "node": "#269e26",
        "label": "#009657"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a51b00"
      }
    },
    "linkTint": {
      "source": "#edb693",
      "hub": "#edb693",
      "profit": "#99cc99",
      "cost": "#df8585"
    },
    "type": {
      "name": 38,
      "value": 38,
      "note": 27,
      "lineGap": 10
    }
  },
  "i18n": {
    "zh": {
      "name": "Etsy · 2023 财年第二季度",
      "meta": {
        "title": "Etsy 2023 财年第二季度利润表",
        "period": "2023 财年第二季度"
      },
      "nodes": {
        "marketplace": {
          "label": "交易市场",
          "notes": [
            "同比 +3%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +21%"
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
            "毛利率 70%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (0%)",
            "同比 (13 个百分点)"
          ]
        },
        "marketing": {
          "label": "营销",
          "notes": [
            "占收入 26%",
            "同比 (2 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 19%",
            "同比 +2 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 14%",
            "同比 +1 个百分点"
          ]
        },
        "impairment": {
          "label": [
            "商誉",
            "减值"
          ],
          "notes": [
            "非经常性"
          ]
        }
      },
      "layout": {
        "labels": {
          "marketplace": {
            "blocks": [
              {
                "x": 430,
                "top": 391,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 335,
                "top": 463,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "交易市场",
                    "size": 38,
                    "weight": 800,
                    "color": null
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 430,
                "top": 825,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +21%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 298,
                "top": 932,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "服务",
                    "size": 38,
                    "weight": 800,
                    "color": null
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 895,
                "top": 510,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 38,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +7%",
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
                "x": 1365,
                "top": 332,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 38,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "毛利率 70%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27,
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
                "x": 1372,
                "top": 1018,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 38,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "成本",
                    "size": 38,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1822,
                "top": 503,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业",
                    "size": 38,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "费用",
                    "size": 38,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1635,
                "top": 993,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营业",
                    "size": 38,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "亏损",
                    "size": 38,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 (0%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (13 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2441,
                "top": 409,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营销",
                    "size": 36,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "占收入 26%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27,
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
                "x": 2441,
                "top": 675,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "研发",
                    "size": 36,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "占收入 19%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27,
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
                "x": 2441,
                "top": 905,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 36,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "impairment": {
            "blocks": [
              {
                "x": 2441,
                "top": 1120,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "商誉",
                    "size": 36,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "减值",
                    "size": 36,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "非经常性",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"79\" y=\"1154\" width=\"165\" height=\"165\" rx=\"37\" fill=\"#f7741d\"/><text x=\"161.5\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">GMS</text><text data-operating-metric=\"gms\" x=\"161.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">$3.0B</text><text x=\"161.5\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 (1%)</text></g><g><rect x=\"250\" y=\"1154\" width=\"335\" height=\"165\" rx=\"37\" fill=\"#f7741d\"/><text x=\"417.5\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">活跃卖家</text><text data-operating-metric=\"active-sellers\" x=\"417.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">8.3M</text><text x=\"417.5\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 +12%</text></g><g><rect x=\"589\" y=\"1154\" width=\"331\" height=\"165\" rx=\"37\" fill=\"#f7741d\"/><text x=\"754.5\" y=\"1209\" text-anchor=\"middle\" font-size=\"31\" font-weight=\"800\" fill=\"#fff\">活跃买家</text><text data-operating-metric=\"active-buyers\" x=\"754.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"31\" fill=\"#fff\">96.3M</text><text x=\"754.5\" y=\"1293\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">同比 +2.5%</text></g><text x=\"420\" y=\"1373\" text-anchor=\"middle\" font-size=\"27\" fill=\"#777777\">GMV = 商品交易总额</text><text x=\"170\" y=\"1438\" font-size=\"37\" font-weight=\"800\">来源：季度业绩</text>"
    }
  }
});
