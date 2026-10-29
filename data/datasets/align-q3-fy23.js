window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "align-q3-fy23",
  "name": "Align Technology · Q3 FY23",
  "company": "Align Technology",
  "meta": {
    "company": "Align Technology",
    "title": "Align Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/align-q3-fy23.png",
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
      "x": 571,
      "y": 225,
      "width": 570,
      "height": 247
    },
    {
      "key": "clear-aligners-product",
      "href": "data/assets/raster-annotations/align/clear-aligners-product.png",
      "x": 98,
      "y": 506,
      "width": 184,
      "height": 180
    },
    {
      "key": "systems-services-scanner",
      "href": "data/assets/raster-annotations/align/systems-services-scanner.png",
      "x": 179,
      "y": 894,
      "width": 92,
      "height": 165
    }
  ],
  "layout": {
    "scale": 0.397,
    "nodes": {
      "clear_aligners": {
        "x": 372,
        "y": 528,
        "width": 73,
        "height": 316
      },
      "systems_services": {
        "x": 372,
        "y": 1103,
        "width": 73,
        "height": 67
      },
      "revenue": {
        "x": 839,
        "y": 672,
        "width": 73,
        "height": 382
      },
      "gross_profit": {
        "x": 1306,
        "y": 585,
        "width": 73,
        "height": 264
      },
      "cost_of_revenue": {
        "x": 1313,
        "y": 1002,
        "width": 73,
        "height": 118
      },
      "operating_profit": {
        "x": 1771,
        "y": 506,
        "width": 73,
        "height": 67
      },
      "operating_expenses": {
        "x": 1774,
        "y": 734,
        "width": 73,
        "height": 198
      },
      "net_profit": {
        "x": 2240,
        "y": 428,
        "width": 73,
        "height": 49
      },
      "tax": {
        "x": 2240,
        "y": 613,
        "width": 73,
        "height": 17
      },
      "other_expense": {
        "x": 2240,
        "y": 718,
        "width": 73,
        "height": 2
      },
      "sga": {
        "x": 2240,
        "y": 906,
        "width": 73,
        "height": 163
      },
      "rnd": {
        "x": 2240,
        "y": 1257,
        "width": 73,
        "height": 36
      }
    },
    "labels": {
      "clear_aligners": {
        "blocks": [
          {
            "x": 410,
            "top": 437,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 217,
            "top": 733,
            "anchor": "middle",
            "lineGap": 9,
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
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "systems_services": {
        "blocks": [
          {
            "x": 410,
            "top": 1003,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 217,
            "top": 1090,
            "anchor": "middle",
            "lineGap": 9,
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
            "x": 875,
            "top": 530,
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
                "text": "+8% Y/Y",
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
            "x": 1340,
            "top": 403,
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
                "text": "69% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(0pp) Y/Y",
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
            "x": 1345,
            "top": 1140,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1800,
            "top": 323,
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
                "text": "17% margin",
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
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1803,
            "top": 949,
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
      "net_profit": {
        "blocks": [
          {
            "x": 2440,
            "top": 360,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "13% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+4pp Y/Y",
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
            "x": 2420,
            "top": 579,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax",
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
      "other_expense": {
        "blocks": [
          {
            "x": 2420,
            "top": 684,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
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
      "sga": {
        "blocks": [
          {
            "x": 2445,
            "top": 914,
            "anchor": "middle",
            "lineGap": 9,
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
            "x": 2430,
            "top": 1220,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "R&D",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "9% of revenue",
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
      "value": 795,
      "notes": [
        "+8% Y/Y"
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
      "value": 165,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 960,
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 663,
      "notes": [
        "69% margin",
        "(0pp) Y/Y"
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
      "value": 297
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 166,
      "notes": [
        "17% margin",
        "+1pp Y/Y"
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
      "value": 497
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 121,
      "notes": [
        "13% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 41
    },
    {
      "id": "sga",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "SG&A",
      "value": 408,
      "notes": [
        "42% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "R&D",
      "value": 89,
      "notes": [
        "9% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "other_expense",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 4
    }
  ],
  "links": [
    {
      "source": "clear_aligners",
      "target": "revenue",
      "value": 795,
      "sourceWidth": 316,
      "targetWidth": 316,
      "y0": 686,
      "y1": 830,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cae1"
    },
    {
      "source": "systems_services",
      "target": "revenue",
      "value": 165,
      "sourceWidth": 67,
      "targetWidth": 66,
      "y0": 1136.5,
      "y1": 1021,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cae1"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 663,
      "sourceWidth": 264,
      "targetWidth": 264,
      "y0": 804,
      "y1": 717,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 297,
      "sourceWidth": 118,
      "targetWidth": 118,
      "y0": 995,
      "y1": 1061,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 166,
      "sourceWidth": 67,
      "targetWidth": 67,
      "y0": 618.5,
      "y1": 539.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 497,
      "sourceWidth": 198,
      "targetWidth": 198,
      "y0": 750,
      "y1": 833,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 121,
      "sourceWidth": 49,
      "targetWidth": 49,
      "y0": 530.5,
      "y1": 452.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 41,
      "sourceWidth": 16,
      "targetWidth": 17,
      "y0": 563,
      "y1": 621.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 4,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 572,
      "y1": 719,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 408,
      "sourceWidth": 163,
      "targetWidth": 163,
      "y0": 815.5,
      "y1": 987.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 89,
      "sourceWidth": 35,
      "targetWidth": 36,
      "y0": 914.5,
      "y1": 1275,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "爱齐科技 · 2023 财年第三季度",
      "meta": {
        "title": "爱齐科技 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "titleTextLength": 2055
      },
      "nodes": {
        "clear_aligners": {
          "label": [
            "透明",
            "矫治器"
          ],
          "notes": [
            "同比 +8%"
          ]
        },
        "systems_services": {
          "label": [
            "系统",
            "与服务"
          ],
          "notes": [
            "同比 +5%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +8%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 69%",
            "同比 (0 个百分点)"
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
            "利润率 17%",
            "同比 +1 个百分点"
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
            "利润率 13%",
            "同比 +4 个百分点"
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
        }
      },
      "layout": {
        "labels": {
          "clear_aligners": {
            "blocks": [
              {
                "x": 410,
                "top": 437,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 217,
                "top": 733,
                "anchor": "middle",
                "lineGap": 9,
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
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "systems_services": {
            "blocks": [
              {
                "x": 410,
                "top": 1003,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 217,
                "top": 1090,
                "anchor": "middle",
                "lineGap": 9,
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
                "x": 875,
                "top": 530,
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
                    "text": "同比 +8%",
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
                "x": 1340,
                "top": 403,
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
                    "text": "利润率 69%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (0 个百分点)",
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
                "x": 1345,
                "top": 1140,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1800,
                "top": 323,
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
                    "text": "利润率 17%",
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
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1803,
                "top": 949,
                "anchor": "middle",
                "lineGap": 9,
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
                    "size": 39,
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
                "x": 2440,
                "top": 360,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "利润率 13%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +4 个百分点",
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
                "x": 2420,
                "top": 579,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税费",
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
          "other_expense": {
            "blocks": [
              {
                "x": 2420,
                "top": 684,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
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
          "sga": {
            "blocks": [
              {
                "x": 2445,
                "top": 914,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售及管理费用",
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
                "x": 2430,
                "top": 1220,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "研发",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 9%",
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
                ]
              }
            ]
          }
        }
      }
    }
  }
});
