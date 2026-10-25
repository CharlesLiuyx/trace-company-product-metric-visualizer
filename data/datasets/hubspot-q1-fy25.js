window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "hubspot-q1-fy25",
  "name": "HubSpot · Q1 FY25",
  "company": "HubSpot",
  "meta": {
    "company": "HubSpot",
    "title": "HubSpot Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/hubspot-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 124,
    "titleWeight": 800,
    "titleTextLength": 2200,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "titleColor": "#155277",
    "subtitleColor": "#707070",
    "noteColor": "#707070",
    "palette": {
      "source": {
        "node": "#33495f",
        "label": "#33495f"
      },
      "hub": {
        "node": "#33495f",
        "label": "#33495f"
      },
      "profit": {
        "node": "#2aa22a",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d40000",
        "label": "#8f1200"
      }
    },
    "linkTint": {
      "source": "#9aa5ab",
      "hub": "#9bcd9b",
      "profit": "#9bcd9b",
      "cost": "#e38284"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g><rect x=\"147\" y=\"1227\" width=\"570\" height=\"111\" rx=\"29\" fill=\"#33495f\"/><text x=\"240\" y=\"1273\" font-size=\"30\" fill=\"white\">Customers</text><text data-operating-metric=\"customers\" x=\"415\" y=\"1273\" font-size=\"30\" fill=\"white\">258K</text><text x=\"495\" y=\"1273\" font-size=\"28\" fill=\"white\">+19% Y/Y</text><text x=\"178\" y=\"1315\" font-size=\"30\" fill=\"white\">Average Revenue</text><text data-operating-metric=\"average_revenue\" x=\"449\" y=\"1315\" font-size=\"30\" fill=\"white\">$11,038</text><text x=\"572\" y=\"1315\" font-size=\"28\" fill=\"white\">(4%) Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/hubspot/company-wordmark.png",
      "x": 580,
      "y": 245,
      "width": 620,
      "height": 180
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "subscription": {
        "x": 389,
        "y": 577,
        "width": 73,
        "height": 331
      },
      "professional_services": {
        "x": 389,
        "y": 1110,
        "width": 73,
        "height": 7
      },
      "revenue": {
        "x": 856,
        "y": 707,
        "width": 73,
        "height": 339
      },
      "gross_profit": {
        "x": 1326,
        "y": 576,
        "width": 73,
        "height": 283
      },
      "cost_of_revenue": {
        "x": 1326,
        "y": 1073,
        "width": 73,
        "height": 54
      },
      "operating_loss": {
        "x": 1576,
        "y": 1026,
        "width": 73,
        "height": 13
      },
      "operating_expenses": {
        "x": 1795,
        "y": 707,
        "width": 73,
        "height": 296
      },
      "sm": {
        "x": 2258,
        "y": 330,
        "width": 73,
        "height": 154
      },
      "rnd": {
        "x": 2258,
        "y": 662,
        "width": 73,
        "height": 104
      },
      "ga": {
        "x": 2258,
        "y": 960,
        "width": 73,
        "height": 37
      },
      "restructuring": {
        "x": 2258,
        "y": 1213,
        "width": 73,
        "height": 1
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 425,
            "top": 483,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 800
              },
              {
                "text": "+16% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 334,
            "top": 688,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Subscription",
                "size": 40,
                "weight": 800
              },
              {
                "text": "86% gross margin",
                "size": 29,
                "weight": 400
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 425,
            "top": 1016,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 800
              },
              {
                "text": "+13% Y/Y",
                "size": 29,
                "weight": 400
              }
            ]
          },
          {
            "x": 334,
            "top": 1034,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Professional",
                "size": 40,
                "weight": 800
              },
              {
                "text": "services",
                "size": 29,
                "weight": 400
              },
              {
                "text": "3% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 892,
            "top": 562,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1363,
            "top": 392,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "84% margin",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1363,
            "top": 1147,
            "anchor": "middle",
            "lineGap": 8,
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
                "size": 38,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1612,
            "top": 1060,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(4%) margin",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+0pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1832,
            "top": 547,
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
                "size": 38,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2463,
            "top": 350,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Sales &",
                "size": 32,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "46% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2463,
            "top": 639,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Research &",
                "size": 32,
                "weight": 800
              },
              {
                "text": "development",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "31% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+2pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2463,
            "top": 914,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "General &",
                "size": 32,
                "weight": 800
              },
              {
                "text": "admin",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "11% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2463,
            "top": 1179,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Restructuring",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "0% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+0pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "subscription",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Subscription",
      "value": 699,
      "notes": [
        "+16% Y/Y",
        "86% gross margin"
      ],
      "color": "#33495f",
      "linkTint": "#9aa5ab"
    },
    {
      "id": "professional_services",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Professional services",
      "value": 15,
      "notes": [
        "+13% Y/Y",
        "3% gross margin"
      ],
      "color": "#ff7759",
      "labelColor": "#ff7759",
      "linkTint": "#ffb7a7"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 714,
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 599,
      "notes": [
        "84% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 115,
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 0,
      "type": "cost",
      "label": "Operating loss",
      "value": 27,
      "notes": [
        "(4%) margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating expenses",
      "value": 627,
      "notes": []
    },
    {
      "id": "sm",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": "Sales & marketing",
      "value": 327,
      "notes": [
        "46% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Research & development",
      "value": 220,
      "notes": [
        "31% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "General & admin",
      "value": 79,
      "notes": [
        "11% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "Restructuring",
      "value": 1,
      "notes": [
        "0% of revenue",
        "+0pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 699,
      "width": 331,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 15,
      "width": 7,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": {
        "left": "#ffb7a7",
        "right": "#ffb7a7"
      }
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 599,
      "width": 283,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 285,
      "targetWidth": 283
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 115,
      "width": 54,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 599,
      "width": 283,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 27,
      "width": 13,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 327,
      "width": 154,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 220,
      "width": 104,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 79,
      "width": 37,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 1,
      "width": 1,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "HubSpot · 2025 财年第一季度",
      "meta": {
        "title": "HubSpot 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月",
        "titleSize": 116,
        "titleTextLength": 1880
      },
      "annotationsSvg": "<g><rect x=\"147\" y=\"1227\" width=\"570\" height=\"111\" rx=\"29\" fill=\"#33495f\"/><text x=\"240\" y=\"1273\" font-size=\"30\" fill=\"white\">客户数</text><text data-operating-metric=\"customers\" x=\"415\" y=\"1273\" font-size=\"30\" fill=\"white\">258K</text><text x=\"495\" y=\"1273\" font-size=\"28\" fill=\"white\">同比 +19%</text><text x=\"178\" y=\"1315\" font-size=\"30\" fill=\"white\">平均收入</text><text data-operating-metric=\"average_revenue\" x=\"449\" y=\"1315\" font-size=\"30\" fill=\"white\">$11,038</text><text x=\"572\" y=\"1315\" font-size=\"28\" fill=\"white\">同比 (4%)</text></g>",
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +16%",
            "毛利率 86%"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "同比 +13%",
            "毛利率 3%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +16%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 84%",
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
            "利润率 (4%)",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 46%",
            "同比 (3 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 31%",
            "同比 +2 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 (0 个百分点)"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": [
            "占收入 0%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 425,
                "top": 483,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "同比 +16%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 334,
                "top": 688,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 86%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 425,
                "top": 1016,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "同比 +13%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 334,
                "top": 1034,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "专业",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "服务",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 3%",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 892,
                "top": 562,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1363,
                "top": 392,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 84%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1363,
                "top": 1147,
                "anchor": "middle",
                "lineGap": 8,
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
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1612,
                "top": 1060,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (4%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1832,
                "top": 547,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
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
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2463,
                "top": 350,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "市场",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "占收入 46%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2463,
                "top": 639,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "占收入 31%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2463,
                "top": 914,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2463,
                "top": 1179,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "占收入 0%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
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
      "id": "customers",
      "label": "Customers",
      "value": "258000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "258K",
      "basis": "unspecified",
      "notes": [
        "+19% Y/Y"
      ],
      "quote": "Customers 258K +19% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          240,
          1245,
          390,
          35
        ]
      }
    },
    {
      "id": "average_revenue",
      "label": "Average Revenue",
      "value": "11.038",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$11,038",
      "basis": "unspecified",
      "notes": [
        "(4%) Y/Y"
      ],
      "quote": "Average Revenue $11,038 (4%) Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          178,
          1285,
          510,
          35
        ]
      }
    }
  ]
});
