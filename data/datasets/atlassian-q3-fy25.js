window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "atlassian-q3-fy25",
  "name": "Atlassian · Q3 FY25",
  "company": "Atlassian",
  "meta": {
    "company": "Atlassian",
    "title": "Atlassian Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending March. 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/atlassian-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 203.15,
    "titleSize": 125.016,
    "titleTextLength": 2307.58,
    "periodX": 2450.827,
    "periodY": 273.472,
    "periodNoteY": 316.446,
    "logoWidth": 227.893,
    "logoHeight": 235.707,
    "logoY": 242.218,
    "logoViewBox": "0 0 270 245",
    "logoSvg": "\n    <g fill=\"#2684ff\">\n      <path d=\"M149 10c5-10 20-10 25 0l79 160c4 8-2 17-11 17h-74c-6 0-11-3-14-8l-43-88c-3-6-3-13 0-19z\"/>\n    </g>\n    <g fill=\"#0052cc\">\n      <path d=\"M91 78c6-10 20-10 25 0l38 91c4 9-2 18-12 18H31c-10 0-16-11-11-19z\"/>\n    </g>\n    <text x=\"136\" y=\"230\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"31\" font-weight=\"800\" fill=\"#0052cc\">ATLASSIAN</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#6f7073",
    "noteColor": "#6f7073",
    "palette": {
      "source": {
        "node": "#0052cc",
        "label": "#0052cc"
      },
      "hub": {
        "node": "#0052cc",
        "label": "#0052cc"
      },
      "profit": {
        "node": "#28a026",
        "label": "#00944c"
      },
      "cost": {
        "node": "#d40000",
        "label": "#8d1300"
      }
    },
    "linkTint": {
      "source": "#80a6dc",
      "hub": "#80a6dc",
      "profit": "#9acd97",
      "cost": "#e48283"
    },
    "linkOpacity": 1,
    "labelYOffset": 0,
    "type": {
      "name": 39.067,
      "value": 39.067,
      "note": 27.347,
      "lineGap": 10.418
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"56\" y=\"916\" width=\"418\" height=\"126\" rx=\"32\" fill=\"#0052cc\"/><text x=\"265\" y=\"973\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">Customers &gt; $10K Cloud ARR</text><text data-operating-metric=\"cloud_customers\" x=\"210\" y=\"1006\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">51K</text><text x=\"303\" y=\"1006\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">+14% Y/Y</text></g></g>",
  "layout": {
    "nodes": {
      "cloud": {
        "x": 384.163,
        "y": 498.76,
        "width": 72.926,
        "height": 192.732
      },
      "data_center": {
        "x": 384.163,
        "y": 888.132,
        "width": 72.926,
        "height": 84.646
      },
      "marketplace_services": {
        "x": 384.163,
        "y": 1152.488,
        "width": 72.926,
        "height": 19.534
      },
      "revenue": {
        "x": 851.669,
        "y": 643.31,
        "width": 72.926,
        "height": 296.912
      },
      "gross_profit": {
        "x": 1323.082,
        "y": 501.365,
        "width": 72.926,
        "height": 248.729
      },
      "cost_of_revenue": {
        "x": 1323.082,
        "y": 1022.263,
        "width": 72.926,
        "height": 48.183
      },
      "operating_loss": {
        "x": 1592.647,
        "y": 963.662,
        "width": 72.926,
        "height": 2.604
      },
      "operating_expenses": {
        "x": 1787.984,
        "y": 644.612,
        "width": 72.926,
        "height": 251.333
      },
      "rnd": {
        "x": 2252.886,
        "y": 503.969,
        "width": 72.926,
        "height": 149.758
      },
      "sm": {
        "x": 2252.886,
        "y": 830.833,
        "width": 72.926,
        "height": 65.112
      },
      "ga": {
        "x": 2252.886,
        "y": 1071.749,
        "width": 72.926,
        "height": 36.463
      }
    },
    "labels": {
      "cloud": {
        "blocks": [
          {
            "x": 420.625,
            "top": 403.696,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+25% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 221.382,
            "top": 571.497,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Cloud",
                "size": 39.067,
                "weight": 800
              }
            ]
          }
        ]
      },
      "data_center": {
        "blocks": [
          {
            "x": 420.625,
            "top": 790.463,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 221.382,
            "top": 906.363,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Data Center",
                "size": 39.067,
                "weight": 800
              }
            ]
          }
        ]
      },
      "marketplace_services": {
        "blocks": [
          {
            "x": 420.625,
            "top": 1054.819,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          },
          {
            "x": 221.382,
            "top": 1113.962,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Marketplace",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "& Services",
                "size": 39.067,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 888.132,
            "top": 494.854,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1359.545,
            "top": 313.841,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "84% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1359.545,
            "top": 1084.771,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1630.412,
            "top": 980.591,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "loss",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "(1%) margin",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1824.447,
            "top": 480.529,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2444.316,
            "top": 510.48,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "R&D",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "51% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2444.316,
            "top": 823.02,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "S&M",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "22% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2444.316,
            "top": 1050.913,
            "anchor": "middle",
            "lineGap": 10.418,
            "lines": [
              {
                "text": "G&A",
                "size": 31.254,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "12% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#6f7073"
              }
            ]
          }
        ]
      }
    }
  },
  "nonNodeMetrics": [],
  "nodes": [
    {
      "id": "cloud",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Cloud",
      "value": 880,
      "valueText": "$880M",
      "notes": [
        "+25% Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc",
      "linkTint": "#80a6dc"
    },
    {
      "id": "data_center",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Data Center",
      "value": 389,
      "valueText": "$389M",
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc",
      "linkTint": "#80a6dc"
    },
    {
      "id": "marketplace_services",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Marketplace",
        "& Services"
      ],
      "value": 88,
      "valueText": "$88M",
      "notes": [
        "(5%) Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc",
      "linkTint": "#80a6dc"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 1357,
      "valueText": "$1,357M",
      "notes": [
        "+14% Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc",
      "linkTint": "#80a6dc"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 1137,
      "valueText": "$1,137M",
      "notes": [
        "84% margin",
        "+2pp Y/Y"
      ],
      "color": "#28a026",
      "labelColor": "#00944c",
      "linkTint": "#9acd97"
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
      "value": 220,
      "valueText": "($220M)",
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283",
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -12,
      "valueText": "($12M)",
      "notes": [
        "(1%) margin",
        "(2pp) Y/Y"
      ],
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 0,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 1149,
      "valueText": "($1,149M)",
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283",
      "notes": []
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": "R&D",
      "value": 685,
      "valueText": "($685M)",
      "notes": [
        "51% of revenue",
        "+2pp Y/Y"
      ],
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "S&M",
      "value": 296,
      "valueText": "($296M)",
      "notes": [
        "22% of revenue",
        "+3pp Y/Y"
      ],
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "G&A",
      "value": 168,
      "valueText": "($168M)",
      "notes": [
        "12% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#d40000",
      "labelColor": "#8d1300",
      "linkTint": "#e48283"
    }
  ],
  "links": [
    {
      "source": "cloud",
      "target": "revenue",
      "value": 880,
      "width": 192.732,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "data_center",
      "target": "revenue",
      "value": 389,
      "width": 84.646,
      "sourceOrder": 1,
      "targetOrder": 1
    },
    {
      "source": "marketplace_services",
      "target": "revenue",
      "value": 88,
      "width": 19.534,
      "sourceOrder": 2,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1137,
      "width": 248.729,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acd97"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 220,
      "width": 48.183,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1137,
      "width": 248.729,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 12,
      "width": 2.604,
      "sourceOrder": 0,
      "targetOrder": 1,
      "curve": {
        "x0": 1665.573,
        "x1": 1787.984,
        "c1x": 1718.965,
        "c2x": 1725.476
      }
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 685,
      "width": 149.758,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 296,
      "width": 65.112,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 168,
      "width": 36.463,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Atlassian · 2025 财年第三季度",
      "meta": {
        "title": "Atlassian 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 3 月",
        "titleTextLength": 2307.58
      },
      "nodes": {
        "cloud": {
          "label": "云",
          "notes": [
            "同比 +25%"
          ]
        },
        "data_center": {
          "label": "数据中心",
          "notes": [
            "同比 +7%"
          ]
        },
        "marketplace_services": {
          "label": "市场与服务",
          "notes": [
            "同比 (5%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +14%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 84%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (1%)",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 51%",
            "同比 +2 个百分点"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 22%",
            "同比 +3 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 12%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "cloud": {
            "blocks": [
              {
                "x": 420.625,
                "top": 403.696,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +25%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 221.382,
                "top": 571.497,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "云",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "data_center": {
            "blocks": [
              {
                "x": 420.625,
                "top": 790.463,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 221.382,
                "top": 906.363,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "数据中心",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "marketplace_services": {
            "blocks": [
              {
                "x": 420.625,
                "top": 1054.819,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              },
              {
                "x": 221.382,
                "top": 1113.962,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "市场与",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "服务",
                    "size": 39.067,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 888.132,
                "top": 494.854,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1359.545,
                "top": 313.841,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 84%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1359.545,
                "top": 1084.771,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1630.412,
                "top": 980.591,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (1%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1824.447,
                "top": 480.529,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.067,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2444.316,
                "top": 510.48,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 51%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2444.316,
                "top": 823.02,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 22%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2444.316,
                "top": 1050.913,
                "anchor": "middle",
                "lineGap": 10.418,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.254,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 12%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#6f7073"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g><rect x=\"56\" y=\"916\" width=\"418\" height=\"126\" rx=\"32\" fill=\"#0052cc\"/><text x=\"265\" y=\"973\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"800\" fill=\"white\">云 ARR &gt; $10K 的客户数</text><text data-operating-metric=\"cloud_customers\" x=\"210\" y=\"1006\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">51K</text><text x=\"303\" y=\"1006\" text-anchor=\"middle\" font-size=\"23\" fill=\"white\">同比 +14%</text></g></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "cloud_customers",
      "label": "Customers > $10K Cloud ARR",
      "value": "51000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "51K",
      "basis": "unspecified",
      "notes": [
        "+14% Y/Y"
      ],
      "quote": "Customers > $10K Cloud ARR\n51K +14% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          73,
          1193,
          544,
          164
        ]
      }
    }
  ]
});
