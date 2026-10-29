(function(){ window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "coupang-q4-fy23",
  "name": "Coupang · Q4 FY23",
  "company": "Coupang",
  "meta": {
    "company": "Coupang",
    "title": "Coupang Q4 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/coupang-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2260,
    "periodX": 0,
    "periodY": 0,
    "periodNoteY": 0,
    "logoX": 650,
    "logoY": 280,
    "logoWidth": 580,
    "logoHeight": 142,
    "logoViewBox": "0 0 580 142",
    "logoSvg": "\n    <g transform=\"translate(-75 0) scale(1.1 1.2)\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"126\" font-weight=\"700\">\n      <text x=\"0\" y=\"116\" fill=\"#965921\">cou</text>\n      <text x=\"208\" y=\"116\" fill=\"#f14922\">p</text>\n      <text x=\"276\" y=\"116\" fill=\"#ffc400\">a</text>\n      <text x=\"344\" y=\"116\" fill=\"#83bf25\">n</text>\n      <text x=\"421\" y=\"116\" fill=\"#43a5d7\">g</text>\n    </g>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#185279",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#925721",
        "label": "#925721"
      },
      "hub": {
        "node": "#925721",
        "label": "#925721"
      },
      "profit": {
        "node": "#2ca324",
        "label": "#008e4c"
      },
      "cost": {
        "node": "#dc0000",
        "label": "#9f1000"
      }
    },
    "linkTint": {
      "source": "#c2a993",
      "hub": "#c2a993",
      "profit": "#99cc98",
      "cost": "#dd8585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g><rect x=\"64\" y=\"1284\" width=\"736\" height=\"111\" rx=\"30\" fill=\"#925721\"/><text x=\"185\" y=\"1330\" font-size=\"29\" fill=\"#ffffff\" font-weight=\"800\">Active Customers</text><text x=\"460\" y=\"1330\" font-size=\"29\" fill=\"#ffffff\" data-operating-metric=\"active_customers\">21M</text><text x=\"530\" y=\"1330\" font-size=\"29\" fill=\"#ffffff\">(+16% Y/Y)</text><text x=\"91\" y=\"1371\" font-size=\"29\" fill=\"#ffffff\" font-weight=\"800\">Revenue per Active Customers</text><text x=\"566\" y=\"1371\" font-size=\"29\" fill=\"#ffffff\" data-operating-metric=\"revenue_per_active_customer\">$312</text><text x=\"642\" y=\"1371\" font-size=\"29\" fill=\"#ffffff\">(+6% Y/Y)</text></g>",
  "rasterAnnotations": [
    {
      "key": "coupang-developing-offerings-brands",
      "href": "data/assets/raster-annotations/coupang/developing-offerings-brands.png",
      "x": 130,
      "y": 1004,
      "width": 272,
      "height": 126
    }
  ],
  "operatingMetrics": [
    {
      "id": "active_customers",
      "value": "21000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "21M"
    },
    {
      "id": "revenue_per_active_customer",
      "value": "0.312",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$312"
    }
  ],
  "layout": {
    "scale": 65,
    "nodes": {
      "product_commerce": {
        "x": 418,
        "y": 557,
        "width": 72,
        "height": 415
      },
      "developing_offerings": {
        "x": 418,
        "y": 1173,
        "width": 72,
        "height": 18
      },
      "revenue": {
        "x": 890,
        "y": 664,
        "width": 73,
        "height": 433
      },
      "gross_profit": {
        "x": 1362,
        "y": 591,
        "width": 72,
        "height": 111
      },
      "cost_of_revenue": {
        "x": 1362,
        "y": 853,
        "width": 73,
        "height": 322
      },
      "operating_profit": {
        "x": 1813,
        "y": 513,
        "width": 72,
        "height": 8
      },
      "operating_expenses": {
        "x": 1815,
        "y": 721,
        "width": 72,
        "height": 102
      },
      "tax": {
        "x": 2124,
        "y": 399,
        "width": 72,
        "height": 56
      },
      "interest": {
        "x": 2135,
        "y": 561,
        "width": 72,
        "height": 2
      },
      "net_profit": {
        "x": 2286,
        "y": 424,
        "width": 73,
        "height": 68
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 926,
            "top": 480,
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
                "size": 39,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+20% Y/Y fxn",
                "size": 28,
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
            "x": 1400,
            "top": 410,
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
                "size": 39,
                "weight": 400
              },
              {
                "text": "26% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1850,
            "top": 327,
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
                "size": 39,
                "weight": 400
              },
              {
                "text": "2% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2490,
            "top": 418,
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
                "size": 39,
                "weight": 400
              },
              {
                "text": "16% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+14pp Y/Y",
                "size": 28,
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
            "x": 1399,
            "top": 1195,
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
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1848,
            "top": 839,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 39,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39,
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
      "tax": {
        "blocks": [
          {
            "x": 2154,
            "top": 313,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 32,
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
      "interest": {
        "blocks": [
          {
            "x": 2173,
            "top": 582,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Interest",
                "size": 32,
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
      "product_commerce": {
        "blocks": [
          {
            "x": 455,
            "top": 462,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 252,
            "top": 604,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Product",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Commerce",
                "size": 40,
                "weight": 800
              },
              {
                "text": "7% adjusted margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 252,
            "top": 794,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Core retail",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "Marketplace",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "Rocket Fresh",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "developing_offerings": {
        "blocks": [
          {
            "x": 455,
            "top": 1078,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+105% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 252,
            "top": 1112,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Developing",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Offerings",
                "size": 40,
                "weight": 800
              },
              {
                "text": "(55%) adjusted margin",
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
      "id": "product_commerce",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Product",
        "Commerce"
      ],
      "value": 6.3,
      "valueText": "$6.3B",
      "notes": [
        "+21% Y/Y",
        "7% adjusted margin",
        "Core retail",
        "Marketplace",
        "Rocket Fresh"
      ],
      "color": "#925721",
      "labelColor": "#925721",
      "linkTint": "#c2a993"
    },
    {
      "id": "developing_offerings",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Developing",
        "Offerings"
      ],
      "value": 0.3,
      "valueText": "$0.3B",
      "notes": [
        "+105% Y/Y",
        "(55%) adjusted margin"
      ],
      "color": "#925721",
      "labelColor": "#925721",
      "linkTint": "#c2a993"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 6.6,
      "valueText": "$6.6B",
      "notes": [
        "+23% Y/Y",
        "+20% Y/Y fxn"
      ],
      "color": "#925721",
      "labelColor": "#925721",
      "linkTint": "#c2a993"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 1.7,
      "valueText": "$1.7B",
      "notes": [
        "26% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca324",
      "labelColor": "#008e4c",
      "linkTint": "#99cc98"
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
      "value": 4.9,
      "valueText": "($4.9B)",
      "notes": [],
      "color": "#dc0000",
      "labelColor": "#9f1000",
      "linkTint": "#dd8585"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 0.1,
      "valueText": "$0.1B",
      "notes": [
        "2% margin",
        "+0pp Y/Y"
      ],
      "color": "#2ca324",
      "labelColor": "#008e4c",
      "linkTint": "#99cc98"
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
      "value": 1.6,
      "valueText": "($1.6B)",
      "notes": [],
      "color": "#dc0000",
      "labelColor": "#9f1000",
      "linkTint": "#dd8585"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": "Tax benefit",
      "value": 0.9,
      "valueText": "$0.9B",
      "notes": [],
      "color": "#2ca324",
      "labelColor": "#008e4c",
      "linkTint": "#99cc98"
    },
    {
      "id": "interest",
      "col": 4,
      "order": 1,
      "type": "profit",
      "label": "Interest",
      "value": 0.041,
      "valueText": "$41M",
      "notes": [],
      "color": "#2ca324",
      "labelColor": "#008e4c",
      "linkTint": "#99cc98"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1.0,
      "valueText": "$1.0B",
      "notes": [
        "16% margin",
        "+14pp Y/Y"
      ],
      "color": "#2ca324",
      "labelColor": "#008e4c",
      "linkTint": "#99cc98"
    }
  ],
  "links": [
    {
      "source": "product_commerce",
      "target": "revenue",
      "value": 6.3,
      "sourceWidth": 415,
      "targetWidth": 415,
      "y0": 764.5,
      "y1": 871.5,
      "linkTint": "#c2a993"
    },
    {
      "source": "developing_offerings",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 18,
      "targetWidth": 18,
      "y0": 1182,
      "y1": 1088,
      "linkTint": "#c2a993"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.7,
      "sourceWidth": 111,
      "targetWidth": 111,
      "y0": 719.5,
      "y1": 646.5,
      "linkTint": "#99cc98"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 4.9,
      "sourceWidth": 322,
      "targetWidth": 322,
      "y0": 936,
      "y1": 1014,
      "linkTint": "#dd8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 8,
      "targetWidth": 8,
      "y0": 595,
      "y1": 517,
      "linkTint": "#99cc98"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.6,
      "sourceWidth": 103,
      "targetWidth": 102,
      "y0": 650.5,
      "y1": 772,
      "linkTint": "#dd8585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 8,
      "targetWidth": 10,
      "y0": 517,
      "y1": 485,
      "linkTint": "#99cc98"
    },
    {
      "source": "tax",
      "target": "net_profit",
      "value": 0.9,
      "sourceWidth": 56,
      "targetWidth": 56,
      "y0": 427,
      "y1": 452,
      "linkTint": "#99cc98"
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.041,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 562,
      "y1": 491,
      "linkTint": "#99cc98"
    }
  ],
  "i18n": {
    "zh": {
      "name": "酷澎 · 2023 财年第四季度",
      "meta": {
        "title": "酷澎 2023 财年第四季度利润表",
        "period": "",
        "periodNote": "",
        "titleSize": 112,
        "titleTextLength": 1540
      },
      "annotationsSvg": "<g><rect x=\"64\" y=\"1284\" width=\"736\" height=\"111\" rx=\"30\" fill=\"#925721\"/><text x=\"185\" y=\"1330\" font-size=\"29\" fill=\"#ffffff\" font-weight=\"800\">活跃客户</text><text x=\"460\" y=\"1330\" font-size=\"29\" fill=\"#ffffff\" data-operating-metric=\"active_customers\">21M</text><text x=\"530\" y=\"1330\" font-size=\"29\" fill=\"#ffffff\">（同比 +16%）</text><text x=\"91\" y=\"1371\" font-size=\"29\" fill=\"#ffffff\" font-weight=\"800\">每位活跃客户收入</text><text x=\"566\" y=\"1371\" font-size=\"29\" fill=\"#ffffff\" data-operating-metric=\"revenue_per_active_customer\">$312</text><text x=\"642\" y=\"1371\" font-size=\"29\" fill=\"#ffffff\">（同比 +6%）</text></g>",
      "nodes": {
        "product_commerce": {
          "label": [
            "产品",
            "商业"
          ],
          "notes": [
            "同比 +21%",
            "调整后利润率 7%",
            "核心零售",
            "平台业务",
            "火箭生鲜"
          ]
        },
        "developing_offerings": {
          "label": [
            "培育中",
            "业务"
          ],
          "notes": [
            "同比 +105%",
            "调整后利润率 (55%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +23%",
            "按固定汇率同比 +20%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 26%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "tax": {
          "label": "税收收益",
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 16%",
            "同比 +14 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 926,
                "top": 480,
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
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "按固定汇率同比 +20%",
                    "size": 28,
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
                "x": 1400,
                "top": 410,
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
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 26%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1850,
                "top": 327,
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
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2490,
                "top": 418,
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
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +14 个百分点",
                    "size": 28,
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
                "x": 1399,
                "top": 1195,
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
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1848,
                "top": 839,
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
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2154,
                "top": 313,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税收收益",
                    "size": 32,
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
          "interest": {
            "blocks": [
              {
                "x": 2173,
                "top": 582,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "利息",
                    "size": 32,
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
          "product_commerce": {
            "blocks": [
              {
                "x": 455,
                "top": 462,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 252,
                "top": 604,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "产品",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "商业",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 252,
                "top": 794,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "核心零售",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "平台业务",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "火箭生鲜",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "developing_offerings": {
            "blocks": [
              {
                "x": 455,
                "top": 1078,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +105%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 252,
                "top": 1112,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "培育中",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "业务",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 (55%)",
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
});})();
