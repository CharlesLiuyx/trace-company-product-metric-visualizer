window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "coupang-q3-fy24",
  "name": "Coupang · Q3 FY24",
  "company": "Coupang",
  "meta": {
    "company": "Coupang",
    "title": "Coupang Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "periodNote": "Ending Sep. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/coupang-q3-fy24.png",
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
    "logoY": 230,
    "logoViewBox": "0 0 580 142",
    "logoSvg": "\n    <g transform=\"translate(-75 0) scale(1.1 1.2)\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"126\" font-weight=\"700\">\n      <text x=\"0\" y=\"116\" fill=\"#894f24\">cou</text>\n      <text x=\"208\" y=\"116\" fill=\"#e94b22\">p</text>\n      <text x=\"276\" y=\"116\" fill=\"#fac000\">a</text>\n      <text x=\"344\" y=\"116\" fill=\"#80bc27\">n</text>\n      <text x=\"421\" y=\"116\" fill=\"#3dacdc\">g</text>\n    </g>",
    "logoX": 653
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\" fill=\"#ffffff\"><rect x=\"64\" y=\"1249\" width=\"736\" height=\"111\" rx=\"30\" fill=\"#894f24\"/><text x=\"172\" y=\"1295\" font-size=\"29\" font-weight=\"800\">Active Customers</text><text data-operating-metric=\"active_customers\" x=\"447\" y=\"1295\" font-size=\"29\">22.5M</text><text x=\"545\" y=\"1295\" font-size=\"29\">(+11% Y/Y)</text><text x=\"90\" y=\"1337\" font-size=\"29\" font-weight=\"800\">Revenue per Active Customers</text><text data-operating-metric=\"revenue_per_active_customer\" x=\"565\" y=\"1337\" font-size=\"29\">$307</text><text x=\"650\" y=\"1337\" font-size=\"29\">(+4% Y/Y)</text></g><g class=\"sankey-interactive-annotation\" data-node=\"product_commerce\" font-family=\"Noto Sans,Arial,sans-serif\" text-anchor=\"middle\"><text x=\"480\" y=\"435\" font-size=\"40\" fill=\"#894f24\">$6.9B</text><text x=\"480\" y=\"477\" font-size=\"28\" fill=\"#666666\">+16% Y/Y</text></g><g class=\"sankey-interactive-annotation\" data-node=\"developing_offerings\" font-family=\"Noto Sans,Arial,sans-serif\" text-anchor=\"middle\"><text x=\"480\" y=\"1038\" font-size=\"40\" fill=\"#894f24\">$1.0B</text><text x=\"480\" y=\"1080\" font-size=\"28\" fill=\"#666666\">+347% Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "coupang-developing-offerings-brands",
      "href": "data/assets/raster-annotations/coupang/developing-offerings-brands.png",
      "x": 145,
      "y": 963,
      "width": 225,
      "height": 94
    }
  ],
  "layout": {
    "scale": 40,
    "nodes": {
      "product_commerce": {
        "x": 442,
        "y": 499,
        "width": 72,
        "height": 363
      },
      "developing_offerings": {
        "x": 442,
        "y": 1099,
        "width": 72,
        "height": 51
      },
      "revenue": {
        "x": 909,
        "y": 619,
        "width": 71,
        "height": 413
      },
      "gross_profit": {
        "x": 1376,
        "y": 498,
        "width": 72,
        "height": 120
      },
      "cost_of_revenue": {
        "x": 1378,
        "y": 871,
        "width": 73,
        "height": 294
      },
      "operating_profit": {
        "x": 1839,
        "y": 414,
        "width": 71,
        "height": 4
      },
      "operating_expenses": {
        "x": 1839,
        "y": 607,
        "width": 71,
        "height": 113
      },
      "other": {
        "x": 2183,
        "y": 400,
        "width": 72,
        "height": 2
      },
      "net_profit": {
        "x": 2310,
        "y": 339,
        "width": 72,
        "height": 3
      },
      "tax": {
        "x": 2310,
        "y": 569,
        "width": 72,
        "height": 4
      }
    },
    "labels": {
      "product_commerce": {
        "blocks": [
          {
            "x": 252,
            "top": 539,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Product",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "Commerce",
                "size": 40,
                "weight": 400,
                "color": null
              },
              {
                "text": "7% adjusted margin",
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
          },
          {
            "x": 252,
            "top": 747,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Core retail",
                "size": 28,
                "weight": 800,
                "color": null
              },
              {
                "text": "Marketplace",
                "size": 28,
                "weight": 400,
                "color": null
              },
              {
                "text": "Rocket Fresh",
                "size": 28,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "developing_offerings": {
        "blocks": [
          {
            "x": 252,
            "top": 1061,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Developing",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "Offerings",
                "size": 40,
                "weight": 400,
                "color": null
              },
              {
                "text": "(13%) adjusted margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+61pp Y/Y",
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
            "x": 945,
            "top": 431,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              },
              {
                "text": "+27% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+32% Y/Y fxn",
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
            "x": 1412,
            "top": 309,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              },
              {
                "text": "29% margin",
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
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1875,
            "top": 223,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              },
              {
                "text": "1% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(0pp) Y/Y",
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
            "x": 2508,
            "top": 279,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              },
              {
                "text": "1% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(1pp) Y/Y",
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
            "x": 1415,
            "top": 1183,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 35,
                "weight": 800,
                "color": null
              },
              {
                "text": "revenue",
                "size": 35,
                "weight": 400,
                "color": null
              },
              {
                "text": "$value",
                "size": 35,
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
            "x": 1875,
            "top": 735,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": null
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 400,
                "color": null
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2220,
            "top": 417,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": null
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2508,
            "top": 544,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800,
                "color": null
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": null
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
        "+16% Y/Y",
        "7% adjusted margin",
        "+0pp Y/Y",
        "Core retail",
        "Marketplace",
        "Rocket Fresh"
      ],
      "color": "#894f24",
      "labelColor": "#894f24",
      "linkTint": "#c2a995",
      "valueText": "$6.9B"
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
        "+347% Y/Y",
        "(13%) adjusted margin",
        "+61pp Y/Y"
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
        "+27% Y/Y",
        "+32% Y/Y fxn"
      ],
      "color": "#894f24",
      "labelColor": "#894f24",
      "linkTint": "#c2a995",
      "valueText": "$7.9B"
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
        "+3pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$2.3B"
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
      "linkTint": "#e08585",
      "valueText": "($5.6B)"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 0.1,
      "notes": [
        "1% margin",
        "(0pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$0.1B"
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
      "linkTint": "#e08585",
      "valueText": "($2.2B)"
    },
    {
      "id": "other",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 0.023,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$23M"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 0.064,
      "notes": [
        "1% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "$64M"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.068,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($68M)"
    }
  ],
  "links": [
    {
      "source": "product_commerce",
      "target": "revenue",
      "value": 6.9,
      "sourceWidth": 363,
      "targetWidth": 363,
      "y0": 680.5,
      "y1": 800.5
    },
    {
      "source": "developing_offerings",
      "target": "revenue",
      "value": 1,
      "sourceWidth": 51,
      "targetWidth": 51,
      "y0": 1124.5,
      "y1": 1006.5
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.3,
      "sourceWidth": 120,
      "targetWidth": 120,
      "y0": 679,
      "y1": 558
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 5.6,
      "sourceWidth": 293,
      "targetWidth": 294,
      "y0": 885.5,
      "y1": 1018
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 5,
      "targetWidth": 4,
      "y0": 500.5,
      "y1": 416
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.2,
      "sourceWidth": 115,
      "targetWidth": 113,
      "y0": 560.5,
      "y1": 663.5
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.032,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 415,
      "y1": 340,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.068,
      "sourceWidth": 2,
      "targetWidth": 4,
      "y0": 417,
      "y1": 571,
      "sourceOrder": 1
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.023,
      "sourceWidth": 2,
      "targetWidth": 1,
      "y0": 401,
      "y1": 341.5,
      "targetOrder": 1,
      "curve": {
        "c1x": 2272,
        "c1y": 401,
        "c2x": 2270,
        "c2y": 341.5
      }
    }
  ],
  "i18n": {
    "zh": {
      "name": "酷澎 · 2024 财年第三季度",
      "meta": {
        "title": "酷澎 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "periodNote": "截至 2024 年 9 月",
        "titleSize": 112,
        "titleTextLength": 1540
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\" fill=\"#ffffff\"><rect x=\"64\" y=\"1249\" width=\"736\" height=\"111\" rx=\"30\" fill=\"#894f24\"/><text x=\"172\" y=\"1295\" font-size=\"29\" font-weight=\"800\">活跃客户</text><text data-operating-metric=\"active_customers\" x=\"447\" y=\"1295\" font-size=\"29\">22.5M</text><text x=\"545\" y=\"1295\" font-size=\"29\">（同比 +11%）</text><text x=\"90\" y=\"1337\" font-size=\"29\" font-weight=\"800\">每位活跃客户收入</text><text data-operating-metric=\"revenue_per_active_customer\" x=\"565\" y=\"1337\" font-size=\"29\">$307</text><text x=\"650\" y=\"1337\" font-size=\"29\">（同比 +4%）</text></g><g class=\"sankey-interactive-annotation\" data-node=\"product_commerce\" font-family=\"Noto Sans,Arial,sans-serif\" text-anchor=\"middle\"><text x=\"480\" y=\"435\" font-size=\"40\" fill=\"#894f24\">$6.9B</text><text x=\"480\" y=\"477\" font-size=\"28\" fill=\"#666666\">同比 +16%</text></g><g class=\"sankey-interactive-annotation\" data-node=\"developing_offerings\" font-family=\"Noto Sans,Arial,sans-serif\" text-anchor=\"middle\"><text x=\"480\" y=\"1038\" font-size=\"40\" fill=\"#894f24\">$1.0B</text><text x=\"480\" y=\"1080\" font-size=\"28\" fill=\"#666666\">同比 +347%</text></g>",
      "nodes": {
        "product_commerce": {
          "label": [
            "产品",
            "商业"
          ],
          "notes": [
            "同比 +16%",
            "调整后利润率 7%",
            "同比 0 个百分点",
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
            "同比 +347%",
            "调整后利润率 (13%)",
            "同比 +61 个百分点"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +27%",
            "按固定汇率同比 +32%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 29%",
            "同比 +3 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 1%",
            "同比 0 个百分点"
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
            "同比 (1 个百分点)"
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
                "top": 539,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "产品",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "商业",
                    "size": 40,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "调整后利润率 7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 252,
                "top": 747,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "核心零售",
                    "size": 28,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "平台业务",
                    "size": 28,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "火箭生鲜",
                    "size": 28,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "developing_offerings": {
            "blocks": [
              {
                "x": 252,
                "top": 1061,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "培育中",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "业务",
                    "size": 40,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "调整后利润率 (13%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +61 个百分点",
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
                "x": 945,
                "top": 431,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "同比 +27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "按固定汇率同比 +32%",
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
                "x": 1412,
                "top": 309,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 29%",
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
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1875,
                "top": 223,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 0 个百分点",
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
                "x": 2508,
                "top": 279,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "利润率 1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 1415,
                "top": 1183,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 35,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "成本",
                    "size": 35,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 35,
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
                "x": 1875,
                "top": 735,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 400,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2220,
                "top": 417,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": null
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2508,
                "top": 544,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税项",
                    "size": 32,
                    "weight": 800,
                    "color": null
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": null
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
      "value": "22500000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "22.5M"
    },
    {
      "id": "revenue_per_active_customer",
      "value": "0.307",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$307"
    }
  ]
});
