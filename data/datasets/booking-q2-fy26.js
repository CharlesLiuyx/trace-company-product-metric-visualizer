/* Booking Q2 FY26: official values and measured Source geometry. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "booking-q2-fy26",
  "name": "Booking Holdings · Q2 FY26",
  "company": "Booking Holdings",
  "meta": {
    "company": "Booking Holdings",
    "title": "Booking Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended June 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/booking-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 124,
    "titleWeight": 800,
    "hidePeriodStamp": true
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
        "node": "#00b0f0",
        "label": "#00a9e8"
      },
      "hub": {
        "node": "#00b0f0",
        "label": "#00a9e8"
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
      "source": "#85d3f0",
      "hub": "#85d3f0",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 27,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\">\n<rect x=\"99\" y=\"1202\" width=\"305\" height=\"150\" rx=\"27\" fill=\"#002a6e\"/>\n<text x=\"251.5\" y=\"1254\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">Gross bookings</text>\n<text data-operating-metric=\"gross_bookings\" x=\"251.5\" y=\"1294\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">$51.0B</text>\n<text x=\"251.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">+9% Y/Y</text>\n<rect x=\"414\" y=\"1202\" width=\"331\" height=\"152\" rx=\"27\" fill=\"#002a6e\"/>\n<text x=\"579.5\" y=\"1254\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">Nights booked</text>\n<text data-operating-metric=\"nights_booked\" x=\"579.5\" y=\"1294\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">325M</text>\n<text x=\"579.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">+5% Y/Y</text>\n</g>",
  "rasterAnnotations": [
    {
      "key": "booking-company-logo",
      "href": "data/assets/raster-annotations/booking/company-logo.png",
      "x": 778,
      "y": 288,
      "width": 626,
      "height": 160
    },
    {
      "key": "booking-merchant-brands",
      "href": "data/assets/raster-annotations/booking/merchant-brands.png",
      "x": 0,
      "y": 467,
      "width": 180,
      "height": 220
    },
    {
      "key": "booking-agency-brand",
      "href": "data/assets/raster-annotations/booking/agency-brand.png",
      "x": 8,
      "y": 792,
      "width": 174,
      "height": 176
    },
    {
      "key": "booking-advertising-brands",
      "href": "data/assets/raster-annotations/booking/advertising-brands.png",
      "x": 0,
      "y": 1043,
      "width": 184,
      "height": 154
    }
  ],
  "layout": {
    "scale": 43.11751904243743,
    "nodes": {
      "merchant": {
        "x": 462,
        "y": 475,
        "width": 73,
        "height": 221
      },
      "agency": {
        "x": 462,
        "y": 849,
        "width": 73,
        "height": 83
      },
      "advertising_other": {
        "x": 462,
        "y": 1107,
        "width": 73,
        "height": 15
      },
      "revenue": {
        "x": 1085,
        "y": 663,
        "width": 72,
        "height": 317
      },
      "operating_profit": {
        "x": 1708,
        "y": 455,
        "width": 72,
        "height": 108
      },
      "operating_expenses": {
        "x": 1708,
        "y": 909,
        "width": 72,
        "height": 210
      },
      "other_income": {
        "x": 2148,
        "y": 297,
        "width": 72,
        "height": 3
      },
      "net_profit": {
        "x": 2331,
        "y": 313,
        "width": 72,
        "height": 84
      },
      "tax": {
        "x": 2331,
        "y": 536,
        "width": 72,
        "height": 27
      },
      "marketing": {
        "x": 2331,
        "y": 677,
        "width": 72,
        "height": 103
      },
      "sales": {
        "x": 2331,
        "y": 870,
        "width": 72,
        "height": 41
      },
      "personnel": {
        "x": 2331,
        "y": 999,
        "width": 72,
        "height": 39
      },
      "ga": {
        "x": 2331,
        "y": 1127,
        "width": 72,
        "height": 12
      },
      "info_tech": {
        "x": 2331,
        "y": 1242,
        "width": 72,
        "height": 10
      },
      "da": {
        "x": 2331,
        "y": 1344,
        "width": 72,
        "height": 7
      }
    },
    "labels": {
      "merchant": {
        "blocks": [
          {
            "x": 498.5,
            "top": 377,
            "anchor": "middle",
            "lineGap": 10,
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
            ]
          },
          {
            "x": 439,
            "top": 520,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "Merchant",
                "size": 40,
                "weight": 800
              }
            ],
            "semanticRole": "source-offset-side-label"
          },
          {
            "x": 439,
            "top": 583,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Commissions,",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "payments, insurance",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "source-offset-side-label"
          }
        ]
      },
      "agency": {
        "blocks": [
          {
            "x": 498.5,
            "top": 752,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(7%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 397,
            "top": 856,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Agency",
                "size": 40,
                "weight": 800
              }
            ],
            "semanticRole": "source-offset-side-label"
          }
        ]
      },
      "advertising_other": {
        "blocks": [
          {
            "x": 498.5,
            "top": 1010,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 420,
            "top": 1066,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "Advertising",
                "size": 40,
                "weight": 800
              },
              {
                "text": "& Other",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1120,
            "top": 516,
            "anchor": "middle",
            "lineGap": 11,
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
                "text": "+8% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1745,
            "top": 268,
            "anchor": "middle",
            "lineGap": 11,
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
                "text": "34% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1742,
            "top": 1132,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36,
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
      "other_income": {
        "blocks": [
          {
            "x": 2182.5,
            "top": 205,
            "anchor": "middle",
            "lineGap": 10,
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
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2516,
            "top": 284,
            "anchor": "middle",
            "lineGap": 11,
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
              }
            ]
          },
          {
            "x": 2516,
            "top": 389,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "27% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+13pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2511.5,
            "top": 510,
            "anchor": "middle",
            "lineGap": 10,
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
      "marketing": {
        "blocks": [
          {
            "x": 2519.5,
            "top": 688,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Marketing",
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
      "sales": {
        "blocks": [
          {
            "x": 2517.5,
            "top": 850,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Sales",
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
      "personnel": {
        "blocks": [
          {
            "x": 2518,
            "top": 980,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Personnel",
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
      "ga": {
        "blocks": [
          {
            "x": 2515,
            "top": 1094,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "G&A",
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
      "info_tech": {
        "blocks": [
          {
            "x": 2521,
            "top": 1204,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Info Tech",
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
      "da": {
        "blocks": [
          {
            "x": 2520.5,
            "top": 1307,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "D&A",
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
      "id": "merchant",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Merchant",
      "value": 5.127,
      "notes": [
        "+15% Y/Y",
        "Commissions, payments, insurance"
      ]
    },
    {
      "id": "agency",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Agency",
      "value": 1.903,
      "notes": [
        "(7%) Y/Y"
      ]
    },
    {
      "id": "advertising_other",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Advertising & Other",
      "value": 0.322,
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 7.352,
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 2.5,
      "notes": [
        "34% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Operating expenses",
      "value": 4.852,
      "notes": []
    },
    {
      "id": "other_income",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 0.06,
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1.95,
      "notes": [
        "27% margin",
        "+13pp Y/Y"
      ],
      "valueText": "$1.95B"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.61,
      "notes": []
    },
    {
      "id": "marketing",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Marketing",
      "value": 2.371,
      "notes": []
    },
    {
      "id": "personnel",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": "Personnel",
      "value": 0.9,
      "notes": []
    },
    {
      "id": "sales",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "Sales",
      "value": 0.942,
      "notes": []
    },
    {
      "id": "info_tech",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Info Tech",
      "value": 0.263,
      "notes": []
    },
    {
      "id": "ga",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "G&A",
      "value": 0.217,
      "notes": []
    },
    {
      "id": "da",
      "col": 4,
      "order": 7,
      "type": "cost",
      "label": "D&A",
      "value": 0.129,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "merchant",
      "target": "revenue",
      "value": 5.127,
      "sourceWidth": 221,
      "targetWidth": 221,
      "y0": 585.5,
      "y1": 773.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85d3f0"
    },
    {
      "source": "agency",
      "target": "revenue",
      "value": 1.903,
      "sourceWidth": 83,
      "targetWidth": 83,
      "y0": 890.5,
      "y1": 925.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85d3f0"
    },
    {
      "source": "advertising_other",
      "target": "revenue",
      "value": 0.322,
      "sourceWidth": 15,
      "targetWidth": 13,
      "y0": 1114.5,
      "y1": 973.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85d3f0"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 2.5,
      "sourceWidth": 107,
      "targetWidth": 108,
      "y0": 716.5,
      "y1": 509,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 4.852,
      "sourceWidth": 210,
      "targetWidth": 210,
      "y0": 875,
      "y1": 1014,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.89,
      "sourceWidth": 81,
      "targetWidth": 81,
      "y0": 495.5,
      "y1": 356.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.61,
      "sourceWidth": 27,
      "targetWidth": 27,
      "y0": 549.5,
      "y1": 549.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.06,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 298.5,
      "y1": 314.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 2.371,
      "sourceWidth": 102,
      "targetWidth": 103,
      "y0": 960,
      "y1": 728.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales",
      "value": 0.942,
      "sourceWidth": 41,
      "targetWidth": 41,
      "y0": 1031.5,
      "y1": 890.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 0.9,
      "sourceWidth": 39,
      "targetWidth": 39,
      "y0": 1071.5,
      "y1": 1018.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.217,
      "sourceWidth": 11,
      "targetWidth": 12,
      "y0": 1096.5,
      "y1": 1133,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "info_tech",
      "value": 0.263,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 1107,
      "y1": 1247,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.129,
      "sourceWidth": 7,
      "targetWidth": 7,
      "y0": 1115.5,
      "y1": 1347.5,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "缤客控股 · 2026 财年第二季度",
      "meta": {
        "title": "缤客控股 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度"
      },
      "nodes": {
        "merchant": {
          "label": "商户",
          "notes": [
            "同比 +15%",
            "佣金、支付、保险"
          ]
        },
        "agency": {
          "label": "代理",
          "notes": [
            "同比 (7%)"
          ]
        },
        "advertising_other": {
          "label": "广告及其他",
          "notes": [
            "同比 +8%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +8%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 34%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 27%",
            "同比 +13 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": []
        },
        "sales": {
          "label": "销售",
          "notes": []
        },
        "personnel": {
          "label": "人员",
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": []
        },
        "info_tech": {
          "label": "信息技术",
          "notes": []
        },
        "da": {
          "label": "折旧与摊销",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "merchant": {
            "blocks": [
              {
                "x": 498.5,
                "top": 377,
                "anchor": "middle",
                "lineGap": 10,
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
                ]
              },
              {
                "x": 439,
                "top": 522,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "商户",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "佣金、支付、保险",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "source-offset-side-label"
              }
            ]
          },
          "agency": {
            "blocks": [
              {
                "x": 498.5,
                "top": 752,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 397,
                "top": 856,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "代理",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "semanticRole": "source-offset-side-label"
              }
            ]
          },
          "advertising_other": {
            "blocks": [
              {
                "x": 498.5,
                "top": 1010,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 420,
                "top": 1066,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "广告",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "及其他",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1120,
                "top": 516,
                "anchor": "middle",
                "lineGap": 11,
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
                    "text": "同比 +8%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1745,
                "top": 268,
                "anchor": "middle",
                "lineGap": 11,
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
                    "text": "利润率 34%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1742,
                "top": 1132,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36,
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
          "other_income": {
            "blocks": [
              {
                "x": 2182.5,
                "top": 205,
                "anchor": "middle",
                "lineGap": 10,
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
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2516,
                "top": 284,
                "anchor": "middle",
                "lineGap": 11,
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
                    "text": "利润率 27%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +13 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2511.5,
                "top": 510,
                "anchor": "middle",
                "lineGap": 10,
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
          "marketing": {
            "blocks": [
              {
                "x": 2519.5,
                "top": 688,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营销",
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
          "sales": {
            "blocks": [
              {
                "x": 2517.5,
                "top": 850,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "销售",
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
          "personnel": {
            "blocks": [
              {
                "x": 2518,
                "top": 980,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "人员",
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
          "ga": {
            "blocks": [
              {
                "x": 2515,
                "top": 1094,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "管理费用",
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
          "info_tech": {
            "blocks": [
              {
                "x": 2521,
                "top": 1204,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "信息技术",
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
          "da": {
            "blocks": [
              {
                "x": 2520.5,
                "top": 1307,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "折旧与摊销",
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\">\n<rect x=\"99\" y=\"1202\" width=\"305\" height=\"150\" rx=\"27\" fill=\"#002a6e\"/>\n<text x=\"251.5\" y=\"1254\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">总预订额</text>\n<text data-operating-metric=\"gross_bookings\" x=\"251.5\" y=\"1294\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">$51.0B</text>\n<text x=\"251.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">同比 +9%</text>\n<rect x=\"414\" y=\"1202\" width=\"331\" height=\"152\" rx=\"27\" fill=\"#002a6e\"/>\n<text x=\"579.5\" y=\"1254\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">预订夜晚数</text>\n<text data-operating-metric=\"nights_booked\" x=\"579.5\" y=\"1294\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">325M</text>\n<text x=\"579.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">同比 +5%</text>\n</g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "gross_bookings",
      "value": "51.0",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$51.0B"
    },
    {
      "id": "nights_booked",
      "value": "325000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "325M"
    }
  ]
});
