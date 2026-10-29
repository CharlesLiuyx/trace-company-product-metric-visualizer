(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "lyft-q2-fy23",
  "name": "Lyft · Q2 FY23",
  "company": "Lyft",
  "meta": {
    "company": "Lyft",
    "title": "Lyft Q2 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/lyft-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 1970,
    "logoWidth": 205,
    "logoHeight": 205,
    "logoY": 249,
    "logoViewBox": "0 0 205 205",
    "logoSvg": "\n    <rect x=\"0\" y=\"0\" width=\"205\" height=\"205\" rx=\"43\" fill=\"#ff00bf\"/>\n    <text x=\"102.5\" y=\"134\" text-anchor=\"middle\" font-family=\"Arial Rounded MT Bold,Arial,sans-serif\" font-size=\"94\" font-weight=\"900\" fill=\"#fff\" textLength=\"158\" lengthAdjust=\"spacingAndGlyphs\">lyft</text>",
    "logoX": 754
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#6a6a6a",
    "noteColor": "#6a6a6a",
    "palette": {
      "source": {
        "node": "#ff00bf",
        "label": "#000000"
      },
      "hub": {
        "node": "#ff00bf",
        "label": "#000000"
      },
      "profit": {
        "node": "#27a22a",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d50000",
        "label": "#991500"
      }
    },
    "linkTint": {
      "source": "#ea78d1",
      "hub": "#ea78d1",
      "profit": "#9ccc9a",
      "cost": "#df8082"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 29,
      "lineGap": 9
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "layout": {
    "scale": 0.333,
    "nodes": {
      "rideshare": {
        "x": 350,
        "y": 535,
        "width": 71,
        "height": 313
      },
      "rentals": {
        "x": 350,
        "y": 1038,
        "width": 71,
        "height": 25
      },
      "revenue": {
        "x": 817,
        "y": 630,
        "width": 71,
        "height": 340
      },
      "gross_profit": {
        "x": 1289,
        "y": 529,
        "width": 71,
        "height": 137
      },
      "cost_of_revenue": {
        "x": 1291,
        "y": 854,
        "width": 72,
        "height": 201
      },
      "operating_loss": {
        "x": 1541,
        "y": 895,
        "width": 72,
        "height": 52
      },
      "operating_expenses": {
        "x": 1746,
        "y": 625,
        "width": 71,
        "height": 190
      },
      "ga": {
        "x": 2218,
        "y": 370,
        "width": 72,
        "height": 66
      },
      "rnd": {
        "x": 2218,
        "y": 599,
        "width": 72,
        "height": 50
      },
      "sm": {
        "x": 2218,
        "y": 825,
        "width": 72,
        "height": 36
      },
      "operations_support": {
        "x": 2218,
        "y": 1012,
        "width": 72,
        "height": 35
      }
    },
    "labels": {
      "rideshare": {
        "blocks": [
          {
            "x": 385,
            "top": 439,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              }
            ]
          }
        ]
      },
      "rentals": {
        "blocks": [
          {
            "x": 385,
            "top": 941,
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
                "color": "#6a6a6a"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 856,
            "top": 480,
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
                "text": "+3% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1327,
            "top": 342,
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
                "text": "41% margin",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              },
              {
                "text": "+6pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1325,
            "top": 1075,
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
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1577,
            "top": 970,
            "anchor": "middle",
            "lineGap": 9,
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
                "size": 39,
                "weight": 400
              },
              {
                "text": "(16%) margin",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              },
              {
                "text": "+22pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1780,
            "top": 465,
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
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2437,
            "top": 362,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "General & admin",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "20% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              },
              {
                "text": "(7pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2437,
            "top": 588,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "15% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2437,
            "top": 801,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              }
            ]
          }
        ]
      },
      "operations_support": {
        "blocks": [
          {
            "x": 2437,
            "top": 1001,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operations",
                "size": 32,
                "weight": 800
              },
              {
                "text": "& support",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "11% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              },
              {
                "text": "+0pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#6a6a6a"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "rideshare",
      "label": "Rideshare",
      "value": 941,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$941M",
      "notes": [
        "+3% Y/Y"
      ],
      "color": "#ff00bf",
      "labelColor": "#000000",
      "linkTint": "#ea78d1"
    },
    {
      "id": "rentals",
      "label": "Rentals",
      "value": 80,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$80M",
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#ff00bf",
      "labelColor": "#000000",
      "linkTint": "#ea78d1"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1020,
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$1,020M",
      "notes": [
        "+3% Y/Y"
      ],
      "color": "#ff00bf",
      "labelColor": "#000000",
      "linkTint": "#ea78d1"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 414,
      "type": "profit",
      "col": 2,
      "order": 0,
      "valueText": "$414M",
      "notes": [
        "41% margin",
        "+6pp Y/Y"
      ],
      "color": "#27a22a",
      "labelColor": "#008f47",
      "linkTint": "#9ccc9a"
    },
    {
      "id": "cost_of_revenue",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 607,
      "type": "cost",
      "col": 2,
      "order": 1,
      "valueText": "($607M)",
      "notes": [],
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082"
    },
    {
      "id": "operating_loss",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -159,
      "type": "cost",
      "col": 3,
      "order": 0,
      "valueText": "($159M)",
      "notes": [
        "(16%) margin",
        "+22pp Y/Y"
      ],
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 573,
      "type": "cost",
      "col": 4,
      "order": 0,
      "valueText": "($573M)",
      "notes": [],
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082"
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 201,
      "type": "cost",
      "col": 5,
      "order": 0,
      "valueText": "($201M)",
      "notes": [
        "20% of revenue",
        "(7pp) Y/Y"
      ],
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 155,
      "type": "cost",
      "col": 5,
      "order": 1,
      "valueText": "($155M)",
      "notes": [
        "15% of revenue",
        "(5pp) Y/Y"
      ],
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082"
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 109,
      "type": "cost",
      "col": 5,
      "order": 2,
      "valueText": "($109M)",
      "notes": [
        "11% of revenue",
        "(4pp) Y/Y"
      ],
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082"
    },
    {
      "id": "operations_support",
      "label": [
        "Operations",
        "& support"
      ],
      "value": 108,
      "type": "cost",
      "col": 5,
      "order": 3,
      "valueText": "($108M)",
      "notes": [
        "11% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082"
    }
  ],
  "links": [
    {
      "source": "rideshare",
      "target": "revenue",
      "value": 941,
      "width": 313,
      "sourceWidth": 313,
      "targetWidth": 313,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "rentals",
      "target": "revenue",
      "value": 80,
      "width": 25,
      "sourceWidth": 25,
      "targetWidth": 27,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 414,
      "width": 139,
      "sourceWidth": 139,
      "targetWidth": 137,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ccc9a"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 607,
      "width": 201,
      "sourceWidth": 201,
      "targetWidth": 201,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 414,
      "width": 137,
      "sourceWidth": 137,
      "targetWidth": 137,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 159,
      "width": 52,
      "sourceWidth": 52,
      "targetWidth": 53,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 201,
      "width": 67,
      "sourceWidth": 67,
      "targetWidth": 66,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 155,
      "width": 51,
      "sourceWidth": 51,
      "targetWidth": 50,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 109,
      "width": 36,
      "sourceWidth": 36,
      "targetWidth": 36,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "operations_support",
      "value": 108,
      "width": 36,
      "sourceWidth": 36,
      "targetWidth": 35,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "operatingMetrics": [
    {
      "id": "active_riders",
      "value": "21500000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "21.5M"
    },
    {
      "id": "revenue_per_active_rider",
      "value": "0.04751",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$47.51"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Lyft · 2023 财年第二季度",
      "meta": {
        "title": "Lyft 2023 财年第二季度利润表",
        "titleSize": 112,
        "titleTextLength": 1500
      },
      "nodes": {
        "rideshare": {
          "label": "网约车",
          "notes": [
            "同比 +3%"
          ]
        },
        "rentals": {
          "label": "租赁",
          "notes": [
            "同比 +5%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +3%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 41%",
            "同比 +6 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (16%)",
            "同比 +22 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 20%",
            "同比 (7 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 15%",
            "同比 (5 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 11%",
            "同比 (4 个百分点)"
          ]
        },
        "operations_support": {
          "label": [
            "运营",
            "与支持"
          ],
          "notes": [
            "占收入 11%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "rideshare": {
            "blocks": [
              {
                "x": 385,
                "top": 439,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  }
                ]
              }
            ]
          },
          "rentals": {
            "blocks": [
              {
                "x": 385,
                "top": 941,
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
                    "color": "#6a6a6a"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 856,
                "top": 480,
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
                    "text": "同比 +3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1327,
                "top": 342,
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
                    "text": "利润率 41%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1325,
                "top": 1075,
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
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1577,
                "top": 970,
                "anchor": "middle",
                "lineGap": 9,
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
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (16%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  },
                  {
                    "text": "同比 +22 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1780,
                "top": 465,
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
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2437,
                "top": 362,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 20%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  },
                  {
                    "text": "同比 (7 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2437,
                "top": 588,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 15%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2437,
                "top": 801,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  }
                ]
              }
            ]
          },
          "operations_support": {
            "blocks": [
              {
                "x": 2437,
                "top": 1001,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "与支持",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "占收入 11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#6a6a6a"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g>\n    <g transform=\"translate(31 579)\">\n      <ellipse cx=\"138\" cy=\"112\" rx=\"138\" ry=\"20\" fill=\"#d8d8d8\" opacity=\".42\"/>\n      <path d=\"M21 82C45 39 106 20 175 26c38 4 70 25 91 60l16 19-8 12h-22c-3-22-18-36-39-36-20 0-35 14-39 36H89c-4-21-20-35-41-35-20 0-35 14-39 35H0v-16c0-9 8-16 21-19Z\" fill=\"#f8f8f8\"/>\n      <path d=\"M54 50c29-20 92-24 130-11 19 6 35 21 46 43H61c-6-13-9-24-7-32Z\" fill=\"#74129b\"/>\n      <circle cx=\"49\" cy=\"118\" r=\"23\" fill=\"#20212f\"/><circle cx=\"213\" cy=\"118\" r=\"24\" fill=\"#20212f\"/><circle cx=\"49\" cy=\"118\" r=\"13\" fill=\"#c7c7c7\"/><circle cx=\"213\" cy=\"118\" r=\"13\" fill=\"#c7c7c7\"/>\n    </g><text x=\"89\" y=\"747\" font-size=\"40\" font-weight=\"800\">网约车</text>\n    <g transform=\"translate(91 837)\">\n      <g transform=\"rotate(-2)\"><rect width=\"76\" height=\"154\" rx=\"12\" fill=\"#1a1a1a\"/><rect x=\"7\" y=\"9\" width=\"62\" height=\"136\" rx=\"7\" fill=\"#f8f8f8\"/><rect x=\"17\" y=\"31\" width=\"42\" height=\"8\" rx=\"3\" fill=\"#fff\"/><rect x=\"17\" y=\"45\" width=\"42\" height=\"8\" rx=\"3\" fill=\"#fff\"/><rect x=\"18\" y=\"78\" width=\"40\" height=\"12\" rx=\"6\" fill=\"#8c35ee\"/></g>\n      <g transform=\"translate(87) rotate(4)\"><rect width=\"86\" height=\"163\" rx=\"12\" fill=\"#1b1b1b\"/><rect x=\"8\" y=\"9\" width=\"70\" height=\"145\" rx=\"7\" fill=\"#ecf4ee\"/><path d=\"M12 34C34 20 51 53 73 42M10 74c19-16 36 15 63-3\" fill=\"none\" stroke=\"#80b77c\" stroke-width=\"7\"/><rect x=\"17\" y=\"129\" width=\"50\" height=\"9\" rx=\"4\" fill=\"#fff\"/></g>\n    </g><text x=\"112\" y=\"1060\" font-size=\"40\" font-weight=\"800\">租赁</text>\n    <g><rect x=\"30\" y=\"1201\" width=\"310\" height=\"149\" rx=\"29\" fill=\"#000\"/><text x=\"185\" y=\"1254\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">活跃乘客</text><text data-operating-metric=\"active_riders\" x=\"185\" y=\"1293\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">21.5M</text><text x=\"185\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +8%</text></g><g><rect x=\"361\" y=\"1201\" width=\"466\" height=\"149\" rx=\"29\" fill=\"#000\"/><text x=\"594\" y=\"1254\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">每位活跃乘客收入</text><text data-operating-metric=\"revenue_per_active_rider\" x=\"594\" y=\"1293\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$47.51</text><text x=\"594\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 (5%)</text></g></g>"
    }
  },
  "annotationsSvg": "<g>\n    <g transform=\"translate(31 579)\">\n      <ellipse cx=\"138\" cy=\"112\" rx=\"138\" ry=\"20\" fill=\"#d8d8d8\" opacity=\".42\"/>\n      <path d=\"M21 82C45 39 106 20 175 26c38 4 70 25 91 60l16 19-8 12h-22c-3-22-18-36-39-36-20 0-35 14-39 36H89c-4-21-20-35-41-35-20 0-35 14-39 35H0v-16c0-9 8-16 21-19Z\" fill=\"#f8f8f8\"/>\n      <path d=\"M54 50c29-20 92-24 130-11 19 6 35 21 46 43H61c-6-13-9-24-7-32Z\" fill=\"#74129b\"/>\n      <circle cx=\"49\" cy=\"118\" r=\"23\" fill=\"#20212f\"/><circle cx=\"213\" cy=\"118\" r=\"24\" fill=\"#20212f\"/><circle cx=\"49\" cy=\"118\" r=\"13\" fill=\"#c7c7c7\"/><circle cx=\"213\" cy=\"118\" r=\"13\" fill=\"#c7c7c7\"/>\n    </g><text x=\"89\" y=\"747\" font-size=\"40\" font-weight=\"800\">Rideshare</text>\n    <g transform=\"translate(91 837)\">\n      <g transform=\"rotate(-2)\"><rect width=\"76\" height=\"154\" rx=\"12\" fill=\"#1a1a1a\"/><rect x=\"7\" y=\"9\" width=\"62\" height=\"136\" rx=\"7\" fill=\"#f8f8f8\"/><rect x=\"17\" y=\"31\" width=\"42\" height=\"8\" rx=\"3\" fill=\"#fff\"/><rect x=\"17\" y=\"45\" width=\"42\" height=\"8\" rx=\"3\" fill=\"#fff\"/><rect x=\"18\" y=\"78\" width=\"40\" height=\"12\" rx=\"6\" fill=\"#8c35ee\"/></g>\n      <g transform=\"translate(87) rotate(4)\"><rect width=\"86\" height=\"163\" rx=\"12\" fill=\"#1b1b1b\"/><rect x=\"8\" y=\"9\" width=\"70\" height=\"145\" rx=\"7\" fill=\"#ecf4ee\"/><path d=\"M12 34C34 20 51 53 73 42M10 74c19-16 36 15 63-3\" fill=\"none\" stroke=\"#80b77c\" stroke-width=\"7\"/><rect x=\"17\" y=\"129\" width=\"50\" height=\"9\" rx=\"4\" fill=\"#fff\"/></g>\n    </g><text x=\"112\" y=\"1060\" font-size=\"40\" font-weight=\"800\">Rentals</text>\n    <g><rect x=\"30\" y=\"1201\" width=\"310\" height=\"149\" rx=\"29\" fill=\"#000\"/><text x=\"185\" y=\"1254\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">Active Riders</text><text data-operating-metric=\"active_riders\" x=\"185\" y=\"1293\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">21.5M</text><text x=\"185\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+8% Y/Y</text></g><g><rect x=\"361\" y=\"1201\" width=\"466\" height=\"149\" rx=\"29\" fill=\"#000\"/><text x=\"594\" y=\"1254\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">Revenue per Active Rider</text><text data-operating-metric=\"revenue_per_active_rider\" x=\"594\" y=\"1293\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$47.51</text><text x=\"594\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">(5%) Y/Y</text></g></g>"
});})();
