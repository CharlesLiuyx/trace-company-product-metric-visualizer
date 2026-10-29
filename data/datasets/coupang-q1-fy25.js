window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "coupang-q1-fy25",
  "name": "Coupang · Q1 FY25",
  "company": "Coupang",
  "meta": {
    "company": "Coupang",
    "title": "Coupang Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/coupang-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2260,
    "hidePeriodStamp": true,
    "logoWidth": 580,
    "logoHeight": 142,
    "logoY": 240,
    "logoViewBox": "0 0 580 142",
    "logoSvg": "\n    <g transform=\"translate(-75 0) scale(1.1 1.2)\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"126\" font-weight=\"700\">\n      <text x=\"0\" y=\"116\" fill=\"#894f24\">cou</text>\n      <text x=\"208\" y=\"116\" fill=\"#e94b22\">p</text>\n      <text x=\"276\" y=\"116\" fill=\"#fac000\">a</text>\n      <text x=\"344\" y=\"116\" fill=\"#80bc27\">n</text>\n      <text x=\"421\" y=\"116\" fill=\"#3dacdc\">g</text>\n    </g>",
    "logoX": 650
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
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#894f24",
        "label": "#894f24"
      },
      "hub": {
        "node": "#894f24",
        "label": "#894f24"
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
      "source": "#c2a995",
      "hub": "#c2a995",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\" fill=\"#ffffff\"><rect x=\"64\" y=\"1249\" width=\"736\" height=\"111\" rx=\"30\" fill=\"#894f24\"/>\n<text x=\"180\" y=\"1294\" font-size=\"29\" font-weight=\"800\">Active Customers</text><text data-operating-metric=\"active_customers\" x=\"457\" y=\"1294\" font-size=\"29\">23.4M</text><text x=\"555\" y=\"1294\" font-size=\"29\">(+9% Y/Y)</text>\n<text x=\"90\" y=\"1337\" font-size=\"29\" font-weight=\"800\">Revenue per Active Customers</text><text data-operating-metric=\"revenue_per_active_customer\" x=\"563\" y=\"1337\" font-size=\"29\">$294</text><text x=\"645\" y=\"1337\" font-size=\"29\">((3%) Y/Y)</text></g>\n<g class=\"sankey-interactive-annotation\" data-node=\"product_commerce\" font-family=\"Noto Sans,Arial,sans-serif\" text-anchor=\"middle\"><text x=\"478\" y=\"453\" font-size=\"40\" fill=\"#894f24\">$6.9B</text><text x=\"478\" y=\"495\" font-size=\"27\" fill=\"#666666\">+6% Y/Y</text></g>\n<g class=\"sankey-interactive-annotation\" data-node=\"developing_offerings\" font-family=\"Noto Sans,Arial,sans-serif\" text-anchor=\"middle\"><text x=\"478\" y=\"1048\" font-size=\"40\" fill=\"#894f24\">$1.0B</text><text x=\"478\" y=\"1090\" font-size=\"27\" fill=\"#666666\">+67% Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "coupang-developing-offerings-brands",
      "href": "data/assets/raster-annotations/coupang/developing-offerings-brands.png",
      "x": 132,
      "y": 963,
      "width": 245,
      "height": 96
    }
  ],
  "layout": {
    "scale": 40,
    "nodes": {
      "product_commerce": {
        "x": 442,
        "y": 511,
        "width": 72,
        "height": 353
      },
      "developing_offerings": {
        "x": 442,
        "y": 1110,
        "width": 72,
        "height": 53
      },
      "revenue": {
        "x": 909,
        "y": 633,
        "width": 72,
        "height": 406
      },
      "gross_profit": {
        "x": 1376,
        "y": 539,
        "width": 72,
        "height": 119
      },
      "cost_of_revenue": {
        "x": 1376,
        "y": 838,
        "width": 72,
        "height": 286
      },
      "operating_profit": {
        "x": 1839,
        "y": 449,
        "width": 71,
        "height": 8
      },
      "operating_expenses": {
        "x": 1839,
        "y": 629,
        "width": 71,
        "height": 111
      },
      "other": {
        "x": 2209,
        "y": 421,
        "width": 72,
        "height": 3
      },
      "net_profit": {
        "x": 2311,
        "y": 376,
        "width": 72,
        "height": 6
      },
      "tax": {
        "x": 2311,
        "y": 573,
        "width": 72,
        "height": 6
      }
    },
    "labels": {
      "product_commerce": {
        "blocks": [
          {
            "x": 252,
            "top": 544,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "8% adjusted margin",
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
          },
          {
            "x": 252,
            "top": 751,
            "anchor": "middle",
            "lineGap": 8,
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
            ]
          }
        ]
      },
      "developing_offerings": {
        "blocks": [
          {
            "x": 252,
            "top": 1067,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "(16%) adjusted margin",
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
      "revenue": {
        "blocks": [
          {
            "x": 946,
            "top": 447,
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
                "text": "+11% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+21% Y/Y fxn",
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
            "x": 1414,
            "top": 354,
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
                "text": "29% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1414,
            "top": 1147,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 35,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 35,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1875,
            "top": 263,
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
                "text": "2% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1875,
            "top": 763,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
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
            "x": 2247,
            "top": 438,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
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
      "net_profit": {
        "blocks": [
          {
            "x": 2508,
            "top": 300,
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
                "text": "1% margin",
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
      "tax": {
        "blocks": [
          {
            "x": 2508,
            "top": 543,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
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
      "value": 6.9,
      "notes": [
        "+6% Y/Y",
        "8% adjusted margin",
        "+1pp Y/Y",
        "Core retail",
        "Marketplace",
        "Rocket Fresh"
      ],
      "color": "#894f24",
      "labelColor": "#894f24",
      "linkTint": "#c2a995"
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
      "value": 1.0,
      "notes": [
        "+67% Y/Y",
        "(16%) adjusted margin",
        "+14pp Y/Y"
      ],
      "color": "#894f24",
      "labelColor": "#894f24",
      "linkTint": "#c2a995",
      "valueText": "$1.0B"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 7.9,
      "notes": [
        "+11% Y/Y",
        "+21% Y/Y fxn"
      ],
      "color": "#894f24",
      "labelColor": "#894f24",
      "linkTint": "#c2a995"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 2.3,
      "notes": [
        "29% margin",
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
      "value": 5.6,
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
      "value": 0.2,
      "notes": [
        "2% margin",
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
        "expenses"
      ],
      "value": 2.2,
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
      "value": 0.1,
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
      "value": 0.1,
      "notes": [
        "1% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$0.1"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.1,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "product_commerce",
      "target": "revenue",
      "value": 6.9,
      "sourceWidth": 353,
      "targetWidth": 353,
      "y0": 687.5,
      "y1": 809.5,
      "linkTint": "#c2a995",
      "targetOrder": 0
    },
    {
      "source": "developing_offerings",
      "target": "revenue",
      "value": 1.0,
      "sourceWidth": 53,
      "targetWidth": 53,
      "y0": 1136.5,
      "y1": 1012.5,
      "linkTint": "#c2a995",
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.3,
      "sourceWidth": 119,
      "targetWidth": 119,
      "y0": 692.5,
      "y1": 598.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 5.6,
      "sourceWidth": 287,
      "targetWidth": 286,
      "y0": 895.5,
      "y1": 981,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.2,
      "sourceWidth": 8,
      "targetWidth": 8,
      "y0": 543,
      "y1": 453,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.2,
      "sourceWidth": 111,
      "targetWidth": 111,
      "y0": 602.5,
      "y1": 684.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 450.5,
      "y1": 377.5,
      "linkTint": "#99cd99",
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 5,
      "targetWidth": 6,
      "y0": 454.5,
      "y1": 576,
      "linkTint": "#e08585",
      "sourceOrder": 1
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.1,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 422.5,
      "y1": 380.5,
      "linkTint": "#99cd99",
      "targetOrder": 1,
      "curve": {
        "c1x": 2290,
        "c1y": 422.5,
        "c2x": 2295,
        "c2y": 380.5
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "酷澎 · 2025 财年第一季度",
      "meta": {
        "title": "酷澎 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "titleSize": 112,
        "titleTextLength": 1540
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\" fill=\"#ffffff\"><rect x=\"64\" y=\"1249\" width=\"736\" height=\"111\" rx=\"30\" fill=\"#894f24\"/>\n<text x=\"180\" y=\"1294\" font-size=\"29\" font-weight=\"800\">活跃客户</text><text data-operating-metric=\"active_customers\" x=\"457\" y=\"1294\" font-size=\"29\">23.4M</text><text x=\"555\" y=\"1294\" font-size=\"29\">（同比 +9%）</text>\n<text x=\"90\" y=\"1337\" font-size=\"29\" font-weight=\"800\">每位活跃客户收入</text><text data-operating-metric=\"revenue_per_active_customer\" x=\"563\" y=\"1337\" font-size=\"29\">$294</text><text x=\"645\" y=\"1337\" font-size=\"29\">（同比 (3%)）</text></g>\n<g class=\"sankey-interactive-annotation\" data-node=\"product_commerce\" font-family=\"Noto Sans,Arial,sans-serif\" text-anchor=\"middle\"><text x=\"478\" y=\"453\" font-size=\"40\" fill=\"#894f24\">$6.9B</text><text x=\"478\" y=\"495\" font-size=\"27\" fill=\"#666666\">同比 +6%</text></g>\n<g class=\"sankey-interactive-annotation\" data-node=\"developing_offerings\" font-family=\"Noto Sans,Arial,sans-serif\" text-anchor=\"middle\"><text x=\"478\" y=\"1048\" font-size=\"40\" fill=\"#894f24\">$1.0B</text><text x=\"478\" y=\"1090\" font-size=\"27\" fill=\"#666666\">同比 +67%</text></g>",
      "nodes": {
        "product_commerce": {
          "label": [
            "产品",
            "商业"
          ],
          "notes": [
            "同比 +6%",
            "调整后利润率 8%",
            "同比 +1 个百分点",
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
            "同比 +67%",
            "调整后利润率 (16%)",
            "同比 +14 个百分点"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%",
            "按固定汇率同比 +21%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 29%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 2%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "other": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 1%",
            "同比 +2 个百分点"
          ]
        },
        "tax": {
          "label": "税项"
        }
      },
      "layout": {
        "labels": {
          "product_commerce": {
            "blocks": [
              {
                "x": 252,
                "top": 544,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "调整后利润率 8%",
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
              },
              {
                "x": 252,
                "top": 751,
                "anchor": "middle",
                "lineGap": 8,
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
                ]
              }
            ]
          },
          "developing_offerings": {
            "blocks": [
              {
                "x": 252,
                "top": 1067,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "调整后利润率 (16%)",
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
          "revenue": {
            "blocks": [
              {
                "x": 946,
                "top": 447,
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
                    "text": "同比 +11%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "按固定汇率同比 +21%",
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
                "x": 1414,
                "top": 354,
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
                    "text": "利润率 29%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1414,
                "top": 1147,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 35,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 35,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1875,
                "top": 263,
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
                    "text": "利润率 2%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1875,
                "top": 763,
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
                "x": 2247,
                "top": 438,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
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
          "net_profit": {
            "blocks": [
              {
                "x": 2508,
                "top": 300,
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
                    "text": "利润率 1%",
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
          "tax": {
            "blocks": [
              {
                "x": 2508,
                "top": 543,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税项",
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
          }
        }
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "active_customers",
      "value": "23400000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "23.4M"
    },
    {
      "id": "revenue_per_active_customer",
      "value": "0.294",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$294"
    }
  ]
});
