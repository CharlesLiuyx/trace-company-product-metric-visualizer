window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "hubspot-q2-fy26",
  "name": "HubSpot · Q2 FY26",
  "company": "HubSpot",
  "meta": {
    "company": "HubSpot",
    "title": "HubSpot Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/hubspot-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2260,
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
        "node": "#33475b",
        "label": "#33495f"
      },
      "hub": {
        "node": "#33475b",
        "label": "#33495f"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#cc0000",
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
  "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      <rect x=\"148\" y=\"1227\" width=\"568\" height=\"111\" rx=\"29\" fill=\"#33495f\"/>\n      <text x=\"432\" y=\"1281\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">\n        <tspan font-weight=\"800\">Customers</tspan><tspan font-weight=\"500\"> 306K +14% Y/Y</tspan>\n      </text>\n      <text x=\"432\" y=\"1321\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">\n        <tspan font-weight=\"800\">Average Revenue</tspan><tspan font-weight=\"500\"> $11,800 +4% Y/Y</tspan>\n      </text>\n    </g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/hubspot/company-wordmark.png",
      "x": 589,
      "y": 244,
      "width": 592,
      "height": 180
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "subscription": {
        "x": 389,
        "y": 567,
        "width": 73,
        "height": 313
      },
      "professional_services": {
        "x": 389,
        "y": 1087,
        "width": 73,
        "height": 6
      },
      "revenue": {
        "x": 856,
        "y": 673,
        "width": 73,
        "height": 319
      },
      "gross_profit": {
        "x": 1323,
        "y": 562,
        "width": 73,
        "height": 263
      },
      "cost_of_revenue": {
        "x": 1323,
        "y": 1039,
        "width": 73,
        "height": 55
      },
      "operating_profit": {
        "x": 1790,
        "y": 465,
        "width": 73,
        "height": 15
      },
      "operating_expenses": {
        "x": 1790,
        "y": 664,
        "width": 73,
        "height": 248
      },
      "other": {
        "x": 2141,
        "y": 416,
        "width": 72,
        "height": 2
      },
      "net_profit": {
        "x": 2257,
        "y": 354,
        "width": 73,
        "height": 15
      },
      "tax": {
        "x": 2257,
        "y": 582,
        "width": 73,
        "height": 2
      },
      "sm": {
        "x": 2257,
        "y": 714,
        "width": 73,
        "height": 139
      },
      "rnd": {
        "x": 2257,
        "y": 929,
        "width": 73,
        "height": 79
      },
      "ga": {
        "x": 2257,
        "y": 1104,
        "width": 73,
        "height": 29
      },
      "restructuring": {
        "x": 2257,
        "y": 1256,
        "width": 73,
        "height": 2
      }
    },
    "labels": {
      "subscription": {
        "blocks": [
          {
            "x": 429,
            "top": 473,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+20% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 212,
            "top": 702,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Subscription",
                "size": 40,
                "weight": 800
              },
              {
                "text": "84% gross margin",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "professional_services": {
        "blocks": [
          {
            "x": 428,
            "top": 993,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#ff7759"
              },
              {
                "text": "+8% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          },
          {
            "x": 213.5,
            "top": 1040,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Professional",
                "size": 40,
                "weight": 800,
                "color": "#ff7759"
              },
              {
                "text": "services",
                "size": 40,
                "weight": 800,
                "color": "#ff7759"
              },
              {
                "text": "8% gross margin",
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
            "x": 886,
            "top": 528,
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
                "size": 40,
                "weight": 400
              },
              {
                "text": "+20% Y/Y",
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
            "x": 1354.5,
            "top": 376,
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
                "size": 40,
                "weight": 400
              },
              {
                "text": "82% margin",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 1360.5,
            "top": 1114,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 37,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1825,
            "top": 278,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "5% margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1826.5,
            "top": 931,
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
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2177,
            "top": 435,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 31,
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
            "x": 2465,
            "top": 295,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "5% margin",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "+8pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2466,
            "top": 543,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
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
      "sm": {
        "blocks": [
          {
            "x": 2464,
            "top": 710,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "44% of revenue",
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
      "rnd": {
        "blocks": [
          {
            "x": 2464,
            "top": 887,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "25% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(6pp) Y/Y",
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
            "x": 2464,
            "top": 1055,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "9% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#707070"
              },
              {
                "text": "(2pp) Y/Y",
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
            "x": 2468,
            "top": 1223,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 30,
                "weight": 400
              },
              {
                "text": "0% of revenue",
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
      "value": 894,
      "notes": [
        "+20% Y/Y",
        "84% gross margin"
      ],
      "color": "#33495f",
      "labelColor": "#33495f",
      "linkTint": "#9aa5ab"
    },
    {
      "id": "professional_services",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Professional services",
      "value": 18,
      "notes": [
        "+8% Y/Y",
        "8% gross margin"
      ],
      "color": "#ff7a59",
      "labelColor": "#ff7759",
      "linkTint": "#ffb7a7"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 912,
      "notes": [
        "+20% Y/Y"
      ],
      "color": "#33495f",
      "labelColor": "#33495f",
      "linkTint": "#9bcd9b"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 751,
      "notes": [
        "82% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 161
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 43,
      "notes": [
        "5% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating expenses",
      "value": 708
    },
    {
      "id": "other",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 6
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 43,
      "notes": [
        "5% margin",
        "+8pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 6
    },
    {
      "id": "sm",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "S&M",
      "value": 398,
      "notes": [
        "44% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "R&D",
      "value": 226,
      "notes": [
        "25% of revenue",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "G&A",
      "value": 83,
      "notes": [
        "9% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "restructuring",
      "col": 5,
      "order": 5,
      "type": "cost",
      "label": "Restructuring",
      "value": 1,
      "notes": [
        "0% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#d7baba"
    }
  ],
  "links": [
    {
      "source": "subscription",
      "target": "revenue",
      "value": 894,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 313,
      "targetWidth": 313,
      "linkTint": {
        "left": "#9aa4ac",
        "right": "#9aa4ac"
      }
    },
    {
      "source": "professional_services",
      "target": "revenue",
      "value": 18,
      "sourceOrder": 1,
      "targetOrder": 1,
      "linkTint": {
        "left": "#ffb7a7",
        "right": "#ffb7a7"
      },
      "sourceWidth": 6,
      "targetWidth": 6
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 751,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 263,
      "targetWidth": 263
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 161,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 56,
      "targetWidth": 55
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 43,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 15,
      "targetWidth": 15
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 708,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 248,
      "targetWidth": 248
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 43,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 13,
      "targetWidth": 13
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 2,
      "targetWidth": 2
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 6,
      "targetOrder": 1,
      "sourceWidth": 2,
      "targetWidth": 2
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 398,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 139,
      "targetWidth": 139
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 226,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 79,
      "targetWidth": 79
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 83,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 29,
      "targetWidth": 29
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 1,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 1,
      "targetWidth": 2
    }
  ],
  "i18n": {
    "zh": {
      "name": "HubSpot · 2026 财年第二季度",
      "meta": {
        "title": "HubSpot 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "titleSize": 116,
        "titleTextLength": 1880
      },
      "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      <rect x=\"148\" y=\"1227\" width=\"568\" height=\"111\" rx=\"29\" fill=\"#33495f\"/>\n      <text x=\"432\" y=\"1281\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">\n        <tspan font-weight=\"800\">客户数</tspan><tspan font-weight=\"500\"> 306K，同比 +14%</tspan>\n      </text>\n      <text x=\"432\" y=\"1321\" text-anchor=\"middle\" font-size=\"30\" fill=\"#ffffff\">\n        <tspan font-weight=\"800\">平均收入</tspan><tspan font-weight=\"500\"> $11,800，同比 +4%</tspan>\n      </text>\n    </g>",
      "nodes": {
        "subscription": {
          "label": "订阅",
          "notes": [
            "同比 +20%",
            "毛利率 84%"
          ]
        },
        "professional_services": {
          "label": "专业服务",
          "notes": [
            "同比 +8%",
            "毛利率 8%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +20%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 82%",
            "同比 (2 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 5%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "other": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 5%",
            "同比 +8 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 44%",
            "同比 (1 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 25%",
            "同比 (6 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 9%",
            "同比 (2 个百分点)"
          ]
        },
        "restructuring": {
          "label": "重组费用",
          "notes": [
            "占收入 0%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "subscription": {
            "blocks": [
              {
                "x": 429,
                "top": 473,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +20%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 212,
                "top": 702,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "订阅",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "毛利率 84%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "professional_services": {
            "blocks": [
              {
                "x": 428,
                "top": 993,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#ff7759"
                  },
                  {
                    "text": "同比 +8%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              },
              {
                "x": 213.5,
                "top": 1040,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "专业服务",
                    "size": 40,
                    "weight": 800,
                    "color": "#ff7759"
                  },
                  {
                    "text": "毛利率 8%",
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
                "x": 886,
                "top": 528,
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
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +20%",
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
                "x": 1354.5,
                "top": 376,
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
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 82%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 1360.5,
                "top": 1114,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1825,
                "top": 278,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 5%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1826.5,
                "top": 931,
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
          "other": {
            "blocks": [
              {
                "x": 2177,
                "top": 435,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
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
                "x": 2465,
                "top": 295,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 5%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 +8 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2466,
                "top": 543,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
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
          "sm": {
            "blocks": [
              {
                "x": 2464,
                "top": 710,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 44%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2464,
                "top": 887,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 25%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (6 个百分点)",
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
                "x": 2464,
                "top": 1055,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 9%",
                    "size": 29,
                    "weight": 400,
                    "color": "#707070"
                  },
                  {
                    "text": "同比 (2 个百分点)",
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
                "x": 2468,
                "top": 1223,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 30,
                    "weight": 400
                  },
                  {
                    "text": "占收入 0%",
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
          }
        }
      }
    }
  }
});
