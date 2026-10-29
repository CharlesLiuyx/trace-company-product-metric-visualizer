window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "coupang-q3-fy23",
  "name": "Coupang · Q3 FY23",
  "company": "Coupang",
  "meta": {
    "company": "Coupang",
    "title": "Coupang Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Ending Sep. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/coupang-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2270,
    "hidePeriodStamp": true,
    "logoWidth": 580,
    "logoHeight": 142,
    "logoY": 282,
    "logoViewBox": "0 0 580 142",
    "logoSvg": "\n    <g transform=\"translate(-75 0) scale(1.1 1.2)\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"126\" font-weight=\"700\">\n      <text x=\"0\" y=\"116\" fill=\"#894f24\">cou</text>\n      <text x=\"208\" y=\"116\" fill=\"#e94b22\">p</text>\n      <text x=\"276\" y=\"116\" fill=\"#fac000\">a</text>\n      <text x=\"344\" y=\"116\" fill=\"#80bc27\">n</text>\n      <text x=\"421\" y=\"116\" fill=\"#3dacdc\">g</text>\n    </g>",
    "logoX": 638
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"64\" y=\"1284\" width=\"736\" height=\"112\" rx=\"30\" fill=\"#894f24\"/><g fill=\"white\" font-size=\"30\"><text x=\"173\" y=\"1331\" font-weight=\"800\">Active Customers</text><text data-operating-metric=\"active_customers\" x=\"450\" y=\"1331\">20.4M</text><text x=\"546\" y=\"1331\">(+14% Y/Y)</text><text x=\"90\" y=\"1373\" font-weight=\"800\">Revenue per Active Customers</text><text data-operating-metric=\"revenue_per_active_customer\" x=\"565\" y=\"1373\">$303</text><text x=\"656\" y=\"1373\">(+7% Y/Y)</text></g><g text-anchor=\"middle\" fill=\"#894f24\" font-size=\"39\"><text x=\"454\" y=\"464\">$6.0B</text><text x=\"454\" y=\"1110\">$0.2B</text></g><g text-anchor=\"middle\" fill=\"#666666\" font-size=\"28\"><text x=\"454\" y=\"506\">+21% Y/Y</text><text x=\"454\" y=\"1151\">+41% Y/Y</text></g></g>",
  "rasterAnnotations": [
    {
      "key": "coupang-developing-offerings-brands",
      "href": "data/assets/raster-annotations/coupang/developing-offerings-brands.png",
      "x": 117,
      "y": 1013,
      "width": 272,
      "height": 96
    }
  ],
  "layout": {
    "scale": 40,
    "nodes": {
      "product_commerce": {
        "x": 418,
        "y": 523,
        "width": 72,
        "height": 442
      },
      "developing_offerings": {
        "x": 418,
        "y": 1172,
        "width": 72,
        "height": 16
      },
      "revenue": {
        "x": 885,
        "y": 646,
        "width": 71,
        "height": 458
      },
      "gross_profit": {
        "x": 1352,
        "y": 540,
        "width": 72,
        "height": 116
      },
      "cost_of_revenue": {
        "x": 1354,
        "y": 848,
        "width": 73,
        "height": 343
      },
      "operating_profit": {
        "x": 1812,
        "y": 450,
        "width": 71,
        "height": 6
      },
      "operating_expenses": {
        "x": 1815,
        "y": 695,
        "width": 71,
        "height": 109
      },
      "interest": {
        "x": 2137,
        "y": 441,
        "width": 71,
        "height": 2
      },
      "net_profit": {
        "x": 2286,
        "y": 372,
        "width": 72,
        "height": 7
      },
      "tax": {
        "x": 2286,
        "y": 633,
        "width": 72,
        "height": 2
      },
      "other": {
        "x": 2286,
        "y": 762,
        "width": 72,
        "height": 3
      }
    },
    "labels": {
      "revenue": {
        "blocks": [
          {
            "x": 924,
            "top": 470,
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
                "size": 40,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+18% Y/Y fxn",
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
            "x": 1388,
            "top": 358,
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
                "size": 40,
                "weight": 400
              },
              {
                "text": "25% margin",
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1848,
            "top": 268,
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
                "size": 40,
                "weight": 400
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
            "x": 2474,
            "top": 340,
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
                "size": 40,
                "weight": 400
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1390,
            "top": 1200,
            "anchor": "middle",
            "lineGap": 9,
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
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1850,
            "top": 823,
            "anchor": "middle",
            "lineGap": 9,
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
                "size": 40,
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
            "top": 463,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Interest",
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
      "tax": {
        "blocks": [
          {
            "x": 2474,
            "top": 605,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax",
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
      "other": {
        "blocks": [
          {
            "x": 2474,
            "top": 736,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
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
      "product_commerce": {
        "blocks": [
          {
            "x": 252,
            "top": 586,
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
            ]
          },
          {
            "x": 252,
            "top": 773,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Core retail",
                "size": 28,
                "weight": 800,
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
            "x": 255,
            "top": 1113,
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
                "text": "(69%) adjusted margin",
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
      "value": 6,
      "valueText": "$6.0B",
      "label": [
        "Product",
        "Commerce"
      ],
      "notes": [
        "+21% Y/Y",
        "7% adjusted margin",
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
      "order": 0,
      "type": "source",
      "value": 0.2,
      "valueText": "$0.2B",
      "label": [
        "Developing",
        "Offerings"
      ],
      "notes": [
        "+41% Y/Y",
        "(69%) adjusted margin"
      ],
      "color": "#894f24",
      "labelColor": "#894f24",
      "linkTint": "#c2a995"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "value": 6.2,
      "valueText": "$6.2B",
      "label": "Revenue",
      "notes": [
        "+21% Y/Y",
        "+18% Y/Y fxn"
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
      "value": 1.6,
      "valueText": "$1.6B",
      "label": "Gross profit",
      "notes": [
        "25% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 0,
      "type": "cost",
      "value": 4.6,
      "valueText": "($4.6B)",
      "label": [
        "Cost of",
        "revenue"
      ],
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "value": 0.1,
      "valueText": "$0.1B",
      "label": "Operating profit",
      "notes": [
        "1% margin",
        "(0pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 0,
      "type": "cost",
      "value": 1.5,
      "valueText": "($1.5B)",
      "label": [
        "Operating",
        "expenses"
      ],
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "interest",
      "col": 4,
      "order": 0,
      "type": "profit",
      "value": 0.037,
      "valueText": "$37M",
      "label": "Interest",
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "value": 0.1,
      "valueText": "$0.1B",
      "label": "Net profit",
      "notes": [
        "1% margin",
        "(0pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 0,
      "type": "cost",
      "value": 0.025,
      "valueText": "($25M)",
      "label": "Tax",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other",
      "col": 5,
      "order": 0,
      "type": "cost",
      "value": 0.008,
      "valueText": "($8M)",
      "label": "Other",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "product_commerce",
      "target": "revenue",
      "value": 6,
      "sourceWidth": 442,
      "targetWidth": 442,
      "y0": 744,
      "y1": 867,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#c2a995"
    },
    {
      "source": "developing_offerings",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 16,
      "targetWidth": 16,
      "y0": 1180,
      "y1": 1096,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#c2a995"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.6,
      "sourceWidth": 116,
      "targetWidth": 116,
      "y0": 704,
      "y1": 598,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 4.6,
      "sourceWidth": 342,
      "targetWidth": 343,
      "y0": 933,
      "y1": 1019.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 6,
      "targetWidth": 6,
      "y0": 543,
      "y1": 453,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.5,
      "sourceWidth": 110,
      "targetWidth": 109,
      "y0": 601,
      "y1": 749.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.067,
      "sourceWidth": 3,
      "targetWidth": 5,
      "y0": 451.5,
      "y1": 374.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.025,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 454,
      "y1": 634,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.008,
      "sourceWidth": 1,
      "targetWidth": 3,
      "y0": 455.5,
      "y1": 763.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.037,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 442,
      "y1": 378,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    }
  ],
  "i18n": {
    "zh": {
      "name": "酷澎 · 2023 财年第三季度",
      "meta": {
        "title": "酷澎 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 9 月",
        "titleSize": 112,
        "titleTextLength": 1540
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"64\" y=\"1284\" width=\"736\" height=\"112\" rx=\"30\" fill=\"#894f24\"/><g fill=\"white\" font-size=\"30\"><text x=\"173\" y=\"1331\" font-weight=\"800\">活跃客户</text><text data-operating-metric=\"active_customers\" x=\"450\" y=\"1331\">20.4M</text><text x=\"546\" y=\"1331\">（同比 +14%）</text><text x=\"90\" y=\"1373\" font-weight=\"800\">每位活跃客户收入</text><text data-operating-metric=\"revenue_per_active_customer\" x=\"565\" y=\"1373\">$303</text><text x=\"656\" y=\"1373\">（同比 +7%）</text></g><g text-anchor=\"middle\" fill=\"#894f24\" font-size=\"39\"><text x=\"454\" y=\"464\">$6.0B</text><text x=\"454\" y=\"1110\">$0.2B</text></g><g text-anchor=\"middle\" fill=\"#666666\" font-size=\"28\"><text x=\"454\" y=\"506\">同比 +21%</text><text x=\"454\" y=\"1151\">同比 +41%</text></g></g>",
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
            "同比 +41%",
            "调整后利润率 (69%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +21%",
            "按固定汇率同比 +18%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 25%",
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
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 1%",
            "同比 0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "interest": {
          "label": "利息收入",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 1%",
            "同比 0 个百分点"
          ]
        },
        "tax": {
          "label": "税项",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "revenue": {
            "blocks": [
              {
                "x": 924,
                "top": 470,
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
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "按固定汇率同比 +18%",
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
                "x": 1388,
                "top": 358,
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
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 25%",
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1848,
                "top": 268,
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
                    "size": 40,
                    "weight": 400
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
                "x": 2474,
                "top": 340,
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
                    "size": 40,
                    "weight": 400
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1390,
                "top": 1200,
                "anchor": "middle",
                "lineGap": 9,
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
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1850,
                "top": 823,
                "anchor": "middle",
                "lineGap": 9,
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
                    "size": 40,
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
                "top": 463,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "利息收入",
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
          "tax": {
            "blocks": [
              {
                "x": 2474,
                "top": 605,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税项",
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
          "other": {
            "blocks": [
              {
                "x": 2474,
                "top": 736,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
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
          "product_commerce": {
            "blocks": [
              {
                "x": 252,
                "top": 586,
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
                ]
              },
              {
                "x": 252,
                "top": 773,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "核心零售",
                    "size": 28,
                    "weight": 800,
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
                "x": 255,
                "top": 1113,
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
                    "text": "调整后利润率 (69%)",
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
  },
  "operatingMetrics": [
    {
      "id": "active_customers",
      "value": "20400000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "20.4M"
    },
    {
      "id": "revenue_per_active_customer",
      "value": "0.303",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$303"
    }
  ]
});
