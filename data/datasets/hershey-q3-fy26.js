window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "hershey-q3-fy26",
  "name": "Hershey · Q3 FY26",
  "company": "Hershey",
  "meta": {
    "company": "Hershey",
    "title": "Hershey Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Ending Sep. 27, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/hershey-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 2330,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#36000e",
        "label": "#36000e"
      },
      "hub": {
        "node": "#36000e",
        "label": "#36000e"
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
      "source": "#9d858b",
      "hub": "#9d858b",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 9
    }
  },
  "rasterAnnotations": [
    {
      "key": "q3-fy26-company-wordmark",
      "href": "data/assets/raster-annotations/hershey/q1-fy26-company-wordmark.png",
      "x": 650,
      "y": 250,
      "width": 620,
      "height": 240
    },
    {
      "key": "q3-fy26-north-america-confectionery-products",
      "href": "data/assets/raster-annotations/hershey/q1-fy26-north-america-confectionery-products.png",
      "x": 177,
      "y": 413,
      "width": 160,
      "height": 154
    },
    {
      "key": "q3-fy26-north-america-salty-snacks-products",
      "href": "data/assets/raster-annotations/hershey/q1-fy26-north-america-salty-snacks-products.png",
      "x": 165,
      "y": 789,
      "width": 195,
      "height": 163
    },
    {
      "key": "q3-fy26-international-products",
      "href": "data/assets/raster-annotations/hershey/q1-fy26-international-products.png",
      "x": 224,
      "y": 1139,
      "width": 95,
      "height": 125
    }
  ],
  "layout": {
    "scale": 104,
    "nodes": {
      "north_america_confectionery": {
        "x": 435,
        "y": 579,
        "width": 72,
        "height": 258
      },
      "north_america_salty_snacks": {
        "x": 435,
        "y": 1042,
        "width": 72,
        "height": 37
      },
      "international": {
        "x": 435,
        "y": 1284,
        "width": 72,
        "height": 21
      },
      "revenue": {
        "x": 901,
        "y": 724,
        "width": 72,
        "height": 318
      },
      "gross_profit": {
        "x": 1370,
        "y": 579,
        "width": 72,
        "height": 146
      },
      "cost_of_sales": {
        "x": 1370,
        "y": 944,
        "width": 72,
        "height": 171
      },
      "operating_profit": {
        "x": 1837,
        "y": 461,
        "width": 72,
        "height": 79
      },
      "operating_expenses": {
        "x": 1837,
        "y": 812,
        "width": 72,
        "height": 67
      },
      "net_profit": {
        "x": 2304,
        "y": 331,
        "width": 72,
        "height": 56
      },
      "tax": {
        "x": 2304,
        "y": 744,
        "width": 72,
        "height": 17
      },
      "other": {
        "x": 2304,
        "y": 899,
        "width": 72,
        "height": 4
      }
    },
    "labels": {
      "north_america_confectionery": {
        "blocks": [
          {
            "x": 472,
            "top": 485,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 403,
            "top": 599,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "North America",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Confectionery",
                "size": 40,
                "weight": 400
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 403,
            "top": 704,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "36% segment margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "north_america_salty_snacks": {
        "blocks": [
          {
            "x": 472,
            "top": 947,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 403,
            "top": 979,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "North America",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Salty Snacks",
                "size": 40,
                "weight": 400
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 403,
            "top": 1085,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "12% segment margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "international": {
        "blocks": [
          {
            "x": 472,
            "top": 1188,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(8%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 403,
            "top": 1278,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "International",
                "size": 40,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 403,
            "top": 1333,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "(13%) segment margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 937,
            "top": 579,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Net sales",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
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
            "x": 1405,
            "top": 392,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "46% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+14pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1405,
            "top": 1137,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1876,
            "top": 274,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "25% margin",
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
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1876,
            "top": 902,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Selling, marketing",
                "size": 40,
                "weight": 800
              },
              {
                "text": "& administrative",
                "size": 40,
                "weight": 400
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2400,
            "top": 312,
            "anchor": "start",
            "lineGap": 12,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "18% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+9pp Y/Y",
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
            "x": 2495,
            "top": 716,
            "anchor": "middle",
            "lineGap": 12,
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
      "other": {
        "blocks": [
          {
            "x": 2495,
            "top": 865,
            "anchor": "middle",
            "lineGap": 12,
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
      }
    }
  },
  "nodes": [
    {
      "id": "north_america_confectionery",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "North America",
        "Confectionery"
      ],
      "value": 2.7,
      "notes": [
        "+2% Y/Y",
        "36% segment margin"
      ],
      "color": "#36000e",
      "labelColor": "#36000e",
      "linkTint": "#9d858b"
    },
    {
      "id": "north_america_salty_snacks",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "North America",
        "Salty Snacks"
      ],
      "value": 0.4,
      "notes": [
        "+22% Y/Y",
        "12% segment margin"
      ],
      "color": "#36000e",
      "labelColor": "#36000e",
      "linkTint": "#9d858b"
    },
    {
      "id": "international",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "International",
      "value": 0.2,
      "notes": [
        "(8%) Y/Y",
        "(13%) segment margin"
      ],
      "color": "#36000e",
      "labelColor": "#36000e",
      "linkTint": "#9d858b"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Net sales",
      "value": 3.3,
      "notes": [
        "+3% Y/Y"
      ],
      "color": "#36000e",
      "labelColor": "#36000e",
      "linkTint": "#99cd99"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 1.5,
      "notes": [
        "46% margin",
        "+14pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_sales",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 1.8,
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
      "value": 0.8,
      "notes": [
        "25% margin",
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
        "Selling, marketing",
        "& administrative",
        "expenses"
      ],
      "value": 0.7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 0.6,
      "notes": [
        "18% margin",
        "+9pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.2,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 0.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "north_america_confectionery",
      "target": "revenue",
      "value": 2.7,
      "sourceWidth": 258,
      "targetWidth": 258,
      "y0": 708,
      "y1": 853,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "north_america_salty_snacks",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 37,
      "targetWidth": 37,
      "y0": 1060.5,
      "y1": 1000.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "international",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 21,
      "targetWidth": 23,
      "y0": 1294.5,
      "y1": 1030.5,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.5,
      "sourceWidth": 147,
      "targetWidth": 146,
      "y0": 797.5,
      "y1": 652,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 1.8,
      "sourceWidth": 171,
      "targetWidth": 171,
      "y0": 956.5,
      "y1": 1029.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.8,
      "sourceWidth": 79,
      "targetWidth": 79,
      "y0": 618.5,
      "y1": 500.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.7,
      "sourceWidth": 67,
      "targetWidth": 67,
      "y0": 691.5,
      "y1": 845.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.6,
      "sourceWidth": 56,
      "targetWidth": 56,
      "y0": 489,
      "y1": 359,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 18,
      "targetWidth": 17,
      "y0": 526,
      "y1": 752.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.1,
      "sourceWidth": 5,
      "targetWidth": 4,
      "y0": 537.5,
      "y1": 901,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "好时 · 2026 财年第三季度",
      "meta": {
        "title": "好时 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "截至 2026 年 9 月 27 日",
        "titleSize": 112,
        "titleTextLength": 1650
      },
      "nodes": {
        "north_america_confectionery": {
          "label": "北美糖果业务",
          "notes": [
            "同比 +2%",
            "分部利润率 36%"
          ]
        },
        "north_america_salty_snacks": {
          "label": "北美咸味零食业务",
          "notes": [
            "同比 +22%",
            "分部利润率 12%"
          ]
        },
        "international": {
          "label": "国际业务",
          "notes": [
            "同比 (8%)",
            "分部利润率 (13%)"
          ]
        },
        "revenue": {
          "label": "净销售额",
          "notes": [
            "同比 +3%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 46%",
            "同比 +14 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 25%",
            "同比 +11 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "销售、营销及管理费用"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 18%",
            "同比 +9 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "north_america_confectionery": {
            "blocks": [
              {
                "x": 472,
                "top": 485,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 403,
                "top": 599,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "北美糖果业务",
                    "size": 36,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 403,
                "top": 704,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "分部利润率 36%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "north_america_salty_snacks": {
            "blocks": [
              {
                "x": 472,
                "top": 947,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 403,
                "top": 979,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "北美咸味零食业务",
                    "size": 36,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 403,
                "top": 1085,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "分部利润率 12%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "international": {
            "blocks": [
              {
                "x": 472,
                "top": 1188,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 403,
                "top": 1278,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "国际业务",
                    "size": 36,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 403,
                "top": 1333,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "分部利润率 (13%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 937,
                "top": 579,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "净销售额",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
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
                "x": 1405,
                "top": 392,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 46%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +14 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1405,
                "top": 1137,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1876,
                "top": 274,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 25%",
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
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1876,
                "top": 902,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "销售、营销及",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "管理费用",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2400,
                "top": 312,
                "anchor": "start",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 18%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +9 个百分点",
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
                "x": 2495,
                "top": 716,
                "anchor": "middle",
                "lineGap": 12,
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
          "other": {
            "blocks": [
              {
                "x": 2495,
                "top": 865,
                "anchor": "middle",
                "lineGap": 12,
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
          }
        }
      }
    }
  }
});
