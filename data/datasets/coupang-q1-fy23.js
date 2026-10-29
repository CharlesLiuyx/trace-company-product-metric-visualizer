(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "coupang-q1-fy23",
  "name": "Coupang · Q1 FY23",
  "company": "Coupang",
  "meta": {
    "company": "Coupang",
    "title": "Coupang Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/coupang-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2270,
    "hidePeriodStamp": true,
    "logoX": 555,
    "logoY": 277,
    "logoWidth": 580,
    "logoHeight": 152,
    "logoViewBox": "0 0 580 152",
    "logoSvg": "\n    <g transform=\"scale(1.1 1.2)\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"126\" font-weight=\"700\">\n      <text x=\"0\" y=\"116\" fill=\"#894f24\">cou</text>\n      <text x=\"208\" y=\"116\" fill=\"#e94b22\">p</text>\n      <text x=\"276\" y=\"116\" fill=\"#fac000\">a</text>\n      <text x=\"344\" y=\"116\" fill=\"#80bc27\">n</text>\n      <text x=\"421\" y=\"116\" fill=\"#3dacdc\">g</text>\n    </g>"
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
    "subtitleColor": "#777777",
    "noteColor": "#777777",
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
      "name": 39,
      "value": 39,
      "note": 27,
      "lineGap": 9
    }
  },
  "annotationsSvg": "<g font-family=\"Montserrat,Arial,sans-serif\" fill=\"#ffffff\"><rect x=\"64\" y=\"1284\" width=\"736\" height=\"111\" rx=\"30\" fill=\"#894f24\"/><text x=\"195\" y=\"1330\" font-size=\"29\" font-weight=\"800\">Active Customers</text><text data-operating-metric=\"active_customers\" x=\"465\" y=\"1330\" font-size=\"29\">19M</text><text x=\"532\" y=\"1330\" font-size=\"29\">(+5% Y/Y)</text><text x=\"90\" y=\"1370\" font-size=\"29\" font-weight=\"800\">Revenue per Active Customers</text><text data-operating-metric=\"revenue_per_active_customer\" x=\"566\" y=\"1370\" font-size=\"29\">$305</text><text x=\"647\" y=\"1370\" font-size=\"29\">(+8% Y/Y)</text></g>",
  "operatingMetrics": [
    {
      "id": "active_customers",
      "literal": "19M",
      "value": "19000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "revenue_per_active_customer",
      "literal": "$305",
      "value": "0.305",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "coupang-developing-offerings-brands",
      "href": "data/assets/raster-annotations/coupang/developing-offerings-brands.png",
      "x": 143,
      "y": 1013,
      "width": 230,
      "height": 96
    }
  ],
  "layout": {
    "scale": 82,
    "nodes": {
      "product_commerce": {
        "x": 415,
        "y": 541,
        "width": 73,
        "height": 467
      },
      "developing_offerings": {
        "x": 415,
        "y": 1224,
        "width": 73,
        "height": 12
      },
      "revenue": {
        "x": 882,
        "y": 656,
        "width": 73,
        "height": 478
      },
      "gross_profit": {
        "x": 1349,
        "y": 540,
        "width": 73,
        "height": 118
      },
      "cost_of_revenue": {
        "x": 1349,
        "y": 838,
        "width": 73,
        "height": 361
      },
      "operating_profit": {
        "x": 1817,
        "y": 469,
        "width": 73,
        "height": 10
      },
      "operating_expenses": {
        "x": 1817,
        "y": 627,
        "width": 73,
        "height": 109
      },
      "net_profit": {
        "x": 2283,
        "y": 377,
        "width": 73,
        "height": 10
      },
      "interest": {
        "x": 2109,
        "y": 480,
        "width": 73,
        "height": 2
      },
      "tax": {
        "x": 2283,
        "y": 682,
        "width": 73,
        "height": 3
      },
      "other": {
        "x": 2283,
        "y": 836,
        "width": 73,
        "height": 3
      }
    },
    "labels": {
      "product_commerce": {
        "blocks": [
          {
            "x": 451,
            "top": 445,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9
          },
          {
            "x": 252,
            "top": 576,
            "lines": [
              {
                "text": "Product",
                "size": 39,
                "weight": 800
              },
              {
                "text": "Commerce",
                "size": 39,
                "weight": 800
              },
              {
                "text": "5% adjusted margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9
          },
          {
            "x": 252,
            "top": 768,
            "lines": [
              {
                "text": "Core retail",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Marketplace",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Rocket Fresh",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9,
            "semanticRole": "note"
          }
        ]
      },
      "developing_offerings": {
        "blocks": [
          {
            "x": 451,
            "top": 1122,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(21%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9
          },
          {
            "x": 252,
            "top": 1107,
            "lines": [
              {
                "text": "Developing",
                "size": 39,
                "weight": 800
              },
              {
                "text": "Offerings",
                "size": 39,
                "weight": 800
              },
              {
                "text": "(33%) adjusted margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 924,
            "top": 465,
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
                "text": "+13% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+% Y/Y fxn",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1388,
            "top": 350,
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
                "text": "24% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1390,
            "top": 1211,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400
              }
            ],
            "lineGap": 9
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1850,
            "top": 281,
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
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1850,
            "top": 746,
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
            ],
            "lineGap": 9
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2474,
            "top": 336,
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
                "text": "2% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "lineGap": 9
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2147,
            "top": 497,
            "lines": [
              {
                "text": "Interest",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ],
            "lineGap": 9
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2474,
            "top": 654,
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
            ],
            "lineGap": 9
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2474,
            "top": 802,
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
            ],
            "lineGap": 9
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
      "value": 5.7,
      "notes": [
        "+15% Y/Y",
        "5% adjusted margin",
        "Core retail",
        "Marketplace",
        "Rocket Fresh"
      ],
      "color": "#894f24",
      "labelColor": "#894f24"
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
      "value": 0.1,
      "notes": [
        "(21%) Y/Y",
        "(33%) adjusted margin"
      ],
      "color": "#894f24",
      "labelColor": "#894f24"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 2,
      "type": "hub",
      "label": "Revenue",
      "value": 5.8,
      "notes": [
        "+13% Y/Y",
        "+% Y/Y fxn"
      ],
      "color": "#894f24",
      "labelColor": "#894f24"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 3,
      "type": "profit",
      "label": "Gross profit",
      "value": 1.4,
      "notes": [
        "24% margin",
        "+4pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 4,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 4.4,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 5,
      "type": "profit",
      "label": "Operating profit",
      "value": 0.1,
      "notes": [
        "2% margin",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1.3,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 7,
      "type": "profit",
      "label": "Net profit",
      "value": 0.1,
      "notes": [
        "2% margin",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51"
    },
    {
      "id": "interest",
      "col": 3,
      "order": 8,
      "type": "profit",
      "label": "Interest",
      "value": 0.024,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "valueText": "$24M"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 9,
      "type": "cost",
      "label": "Tax",
      "value": 0.032,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "valueText": "($32M)"
    },
    {
      "id": "other",
      "col": 4,
      "order": 10,
      "type": "cost",
      "label": "Other",
      "value": 0.007,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "valueText": "($7M)"
    }
  ],
  "links": [
    {
      "source": "product_commerce",
      "target": "revenue",
      "value": 5.7,
      "sourceWidth": 467,
      "targetWidth": 466,
      "y0": 774.5,
      "y1": 889,
      "linkTint": "#c2a995",
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "developing_offerings",
      "target": "revenue",
      "value": 0.1,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 1230,
      "y1": 1128,
      "linkTint": "#c2a995",
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.4,
      "sourceWidth": 118,
      "targetWidth": 118,
      "y0": 715,
      "y1": 599,
      "linkTint": "#99cd99",
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 4.4,
      "sourceWidth": 360,
      "targetWidth": 361,
      "y0": 954,
      "y1": 1018.5,
      "linkTint": "#e08585",
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.1,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 545,
      "y1": 474,
      "linkTint": "#99cd99",
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.3,
      "sourceWidth": 108,
      "targetWidth": 109,
      "y0": 604,
      "y1": 681.5,
      "linkTint": "#e08585",
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.085,
      "sourceWidth": 5,
      "targetWidth": 7,
      "y0": 471.5,
      "y1": 380.5,
      "linkTint": "#99cd99",
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.032,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 475.5,
      "y1": 683.5,
      "linkTint": "#e08585",
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.007,
      "sourceWidth": 2,
      "targetWidth": 3,
      "y0": 478,
      "y1": 837.5,
      "linkTint": "#e08585",
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "interest",
      "target": "net_profit",
      "value": 0.024,
      "sourceWidth": 2,
      "targetWidth": 3,
      "y0": 481,
      "y1": 385.5,
      "linkTint": "#99cd99",
      "sourceOrder": 0,
      "targetOrder": 1
    }
  ],
  "i18n": {
    "zh": {
      "name": "酷澎 · 2023 财年第一季度",
      "meta": {
        "title": "酷澎 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月",
        "titleSize": 112,
        "titleTextLength": 1540
      },
      "nodes": {
        "product_commerce": {
          "label": [
            "产品",
            "商业"
          ],
          "notes": [
            "同比 +15%",
            "调整后利润率 5%",
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
            "同比 (21%)",
            "调整后利润率 (33%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +13%",
            "按固定汇率同比 +%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 24%",
            "同比 +4 个百分点"
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
            "同比 (4 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 2%",
            "同比 (4 个百分点)"
          ]
        },
        "interest": {
          "label": "利息",
          "notes": []
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
      "annotationsSvg": "<g font-family=\"Montserrat,Arial,sans-serif\" fill=\"#ffffff\"><rect x=\"64\" y=\"1284\" width=\"736\" height=\"111\" rx=\"30\" fill=\"#894f24\"/><text x=\"195\" y=\"1330\" font-size=\"29\" font-weight=\"800\">活跃客户</text><text data-operating-metric=\"active_customers\" x=\"465\" y=\"1330\" font-size=\"29\">19M</text><text x=\"532\" y=\"1330\" font-size=\"29\">（同比 +5%）</text><text x=\"90\" y=\"1370\" font-size=\"29\" font-weight=\"800\">每位活跃客户收入</text><text data-operating-metric=\"revenue_per_active_customer\" x=\"566\" y=\"1370\" font-size=\"29\">$305</text><text x=\"647\" y=\"1370\" font-size=\"29\">（同比 +8%）</text></g>",
      "layout": {
        "labels": {
          "product_commerce": {
            "blocks": [
              {
                "x": 451,
                "top": 445,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9
              },
              {
                "x": 252,
                "top": 576,
                "lines": [
                  {
                    "text": "产品",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "商业",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 5%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9
              },
              {
                "x": 252,
                "top": 768,
                "lines": [
                  {
                    "text": "核心零售",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "平台业务",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "火箭生鲜",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9,
                "semanticRole": "note"
              }
            ]
          },
          "developing_offerings": {
            "blocks": [
              {
                "x": 451,
                "top": 1122,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (21%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9
              },
              {
                "x": 252,
                "top": 1107,
                "lines": [
                  {
                    "text": "培育中",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "业务",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "调整后利润率 (33%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 924,
                "top": 465,
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
                    "text": "同比 +13%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "按固定汇率同比 +%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1388,
                "top": 350,
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
                    "text": "利润率 24%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1390,
                "top": 1211,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400
                  }
                ],
                "lineGap": 9
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1850,
                "top": 281,
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
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1850,
                "top": 746,
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
                ],
                "lineGap": 9
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2474,
                "top": 336,
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
                    "text": "利润率 2%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "lineGap": 9
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2147,
                "top": 497,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "lineGap": 9
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2474,
                "top": 654,
                "lines": [
                  {
                    "text": "税项",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "lineGap": 9
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2474,
                "top": 802,
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
                ],
                "lineGap": 9
              }
            ]
          }
        }
      }
    }
  }
});})();
