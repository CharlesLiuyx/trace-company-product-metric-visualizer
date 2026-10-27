window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "booking-q4-fy23",
  "name": "Booking Holdings · Q4 FY23",
  "company": "Booking Holdings",
  "meta": {
    "company": "Booking Holdings",
    "title": "Booking Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Quarter ended Dec. 31, 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/booking-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2230,
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
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <rect x=\"100\" y=\"1243\" width=\"304\" height=\"148\" rx=\"24\" fill=\"#002a6e\"/>\n      <text x=\"252\" y=\"1285\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">Gross bookings</text>\n      <text x=\"252\" y=\"1325\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"gross_bookings\">$31.7B</text>\n      <text x=\"252\" y=\"1370\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">+16% Y/Y</text>\n      <rect x=\"415\" y=\"1243\" width=\"330\" height=\"150\" rx=\"24\" fill=\"#002a6e\"/>\n      <text x=\"580\" y=\"1285\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">Nights booked</text>\n      <text x=\"580\" y=\"1325\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"nights_booked\">231M</text>\n      <text x=\"580\" y=\"1370\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">+9% Y/Y</text>\n    </g>",
  "rasterAnnotations": [
    {
      "key": "booking-company-logo",
      "href": "data/assets/raster-annotations/booking/company-logo.png",
      "x": 778,
      "y": 315,
      "width": 566,
      "height": 145
    },
    {
      "key": "booking-merchant-brands",
      "href": "data/assets/raster-annotations/booking/merchant-brands.png",
      "x": 0,
      "y": 530,
      "width": 180,
      "height": 190
    },
    {
      "key": "booking-agency-brand",
      "href": "data/assets/raster-annotations/booking/agency-brand.png",
      "x": 8,
      "y": 846,
      "width": 174,
      "height": 156
    },
    {
      "key": "booking-advertising-brands",
      "href": "data/assets/raster-annotations/booking/advertising-brands.png",
      "x": 0,
      "y": 1080,
      "width": 184,
      "height": 137
    }
  ],
  "layout": {
    "scale": 65.8,
    "nodes": {
      "merchant": {
        "x": 461,
        "y": 538,
        "width": 71,
        "height": 162
      },
      "agency": {
        "x": 461,
        "y": 861,
        "width": 71,
        "height": 136
      },
      "advertising_other": {
        "x": 461,
        "y": 1137,
        "width": 71,
        "height": 16
      },
      "revenue": {
        "x": 1083,
        "y": 702,
        "width": 72,
        "height": 315
      },
      "operating_profit": {
        "x": 1706,
        "y": 576,
        "width": 72,
        "height": 40
      },
      "operating_expenses": {
        "x": 1706,
        "y": 863,
        "width": 72,
        "height": 275
      },
      "net_profit": {
        "x": 2329,
        "y": 382,
        "width": 72,
        "height": 15
      },
      "tax": {
        "x": 2329,
        "y": 486,
        "width": 72,
        "height": 14
      },
      "other_nonoperating": {
        "x": 2329,
        "y": 573,
        "width": 72,
        "height": 12
      },
      "marketing": {
        "x": 2329,
        "y": 654,
        "width": 72,
        "height": 95
      },
      "personnel": {
        "x": 2329,
        "y": 809,
        "width": 72,
        "height": 68
      },
      "sales": {
        "x": 2329,
        "y": 947,
        "width": 72,
        "height": 49
      },
      "ga": {
        "x": 2329,
        "y": 1060,
        "width": 72,
        "height": 44
      },
      "info_tech": {
        "x": 2329,
        "y": 1177,
        "width": 72,
        "height": 13
      },
      "da": {
        "x": 2329,
        "y": 1263,
        "width": 72,
        "height": 9
      },
      "other_expense": {
        "x": 2329,
        "y": 1340,
        "width": 72,
        "height": 2
      }
    },
    "labels": {
      "merchant": {
        "blocks": [
          {
            "x": 496.5,
            "top": 435,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+39% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 440,
            "top": 562.5,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Merchant",
                "size": 39,
                "weight": 800
              },
              {
                "text": "Commissions,",
                "size": 27,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "payments, insurance",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "agency": {
        "blocks": [
          {
            "x": 496.5,
            "top": 758,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 420,
            "top": 905.5,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Agency",
                "size": 39,
                "weight": 800
              }
            ]
          }
        ]
      },
      "advertising_other": {
        "blocks": [
          {
            "x": 496.5,
            "top": 1034,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 420,
            "top": 1098,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Advertising",
                "size": 39,
                "weight": 800
              },
              {
                "text": "& Other",
                "size": 39,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1119,
            "top": 548,
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
                "size": 39,
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1742,
            "top": 388,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "13% margin",
                "size": 27,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(20pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1742,
            "top": 1154,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 38,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 38,
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
      "net_profit": {
        "blocks": [
          {
            "x": 2518,
            "top": 282,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "5% margin",
                "size": 27,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(26pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2518,
            "top": 464,
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
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_nonoperating": {
        "blocks": [
          {
            "x": 2518,
            "top": 549,
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
            "x": 2518,
            "top": 669,
            "anchor": "middle",
            "lineGap": 8,
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
      "personnel": {
        "blocks": [
          {
            "x": 2518,
            "top": 810,
            "anchor": "middle",
            "lineGap": 8,
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
      "sales": {
        "blocks": [
          {
            "x": 2518,
            "top": 940,
            "anchor": "middle",
            "lineGap": 8,
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
      "ga": {
        "blocks": [
          {
            "x": 2518,
            "top": 1044,
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
            "x": 2518,
            "top": 1138,
            "anchor": "middle",
            "lineGap": 8,
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
            "x": 2518,
            "top": 1233,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Amortization",
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
      "other_expense": {
        "blocks": [
          {
            "x": 2518,
            "top": 1318,
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
      "label": "Merchant",
      "value": 2.5,
      "col": 0,
      "order": 0,
      "type": "source",
      "valueText": "$2.5B",
      "notes": [
        "+39% Y/Y",
        "Commissions, payments, insurance"
      ]
    },
    {
      "id": "agency",
      "label": "Agency",
      "value": 2.1,
      "col": 0,
      "order": 1,
      "type": "source",
      "valueText": "$2.1B",
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "advertising_other",
      "label": [
        "Advertising",
        "& Other"
      ],
      "value": 0.2,
      "col": 0,
      "order": 2,
      "type": "source",
      "valueText": "$0.2B",
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 4.8,
      "col": 1,
      "order": 3,
      "type": "hub",
      "valueText": "$4.8B",
      "notes": [
        "+18% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.6,
      "col": 2,
      "order": 4,
      "type": "profit",
      "valueText": "$0.6B",
      "notes": [
        "13% margin",
        "(20pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 4.2,
      "col": 2,
      "order": 5,
      "type": "cost",
      "valueText": "($4.2B)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.2,
      "col": 4,
      "order": 6,
      "type": "profit",
      "valueText": "$0.2B",
      "notes": [
        "5% margin",
        "(26pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.2,
      "col": 4,
      "order": 7,
      "type": "cost",
      "valueText": "($0.2B)"
    },
    {
      "id": "other_nonoperating",
      "label": "Other",
      "value": 0.2,
      "col": 4,
      "order": 8,
      "type": "cost",
      "valueText": "($0.2B)"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 1.4,
      "col": 4,
      "order": 9,
      "type": "cost",
      "valueText": "($1.4B)"
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 1,
      "col": 4,
      "order": 10,
      "type": "cost",
      "valueText": "($1.0B)"
    },
    {
      "id": "sales",
      "label": "Sales",
      "value": 0.7,
      "col": 4,
      "order": 11,
      "type": "cost",
      "valueText": "($0.7B)"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 0.7,
      "col": 4,
      "order": 12,
      "type": "cost",
      "valueText": "($0.7B)"
    },
    {
      "id": "info_tech",
      "label": "Info Tech",
      "value": 0.2,
      "col": 4,
      "order": 13,
      "type": "cost",
      "valueText": "($0.2B)"
    },
    {
      "id": "da",
      "label": "Amortization",
      "value": 0.1,
      "col": 4,
      "order": 14,
      "type": "cost",
      "valueText": "($0.1B)"
    },
    {
      "id": "other_expense",
      "label": "Other",
      "value": 0.001,
      "col": 4,
      "order": 15,
      "type": "cost",
      "valueText": "($1M)"
    }
  ],
  "links": [
    {
      "source": "merchant",
      "target": "revenue",
      "value": 2.5,
      "sourceWidth": 162,
      "targetWidth": 162,
      "y0": 619,
      "y1": 783,
      "linkTint": "#85d3f0"
    },
    {
      "source": "agency",
      "target": "revenue",
      "value": 2.1,
      "sourceWidth": 136,
      "targetWidth": 136,
      "y0": 929,
      "y1": 932,
      "linkTint": "#85d3f0"
    },
    {
      "source": "advertising_other",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 16,
      "targetWidth": 16,
      "y0": 1145,
      "y1": 1008,
      "linkTint": "#85d3f0"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 0.6,
      "sourceWidth": 40,
      "targetWidth": 40,
      "y0": 722,
      "y1": 596,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 4.2,
      "sourceWidth": 275,
      "targetWidth": 275,
      "y0": 879.5,
      "y1": 1000.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 15,
      "targetWidth": 15,
      "y0": 583.5,
      "y1": 389.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 13,
      "targetWidth": 14,
      "y0": 597.5,
      "y1": 493,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_nonoperating",
      "value": 0.2,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 610,
      "y1": 579,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.4,
      "sourceWidth": 94,
      "targetWidth": 95,
      "y0": 910,
      "y1": 701.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 1,
      "sourceWidth": 69,
      "targetWidth": 68,
      "y0": 991.5,
      "y1": 843,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales",
      "value": 0.7,
      "sourceWidth": 49,
      "targetWidth": 49,
      "y0": 1050.5,
      "y1": 971.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.7,
      "sourceWidth": 43,
      "targetWidth": 44,
      "y0": 1096.5,
      "y1": 1082,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "info_tech",
      "value": 0.2,
      "sourceWidth": 12,
      "targetWidth": 13,
      "y0": 1124,
      "y1": 1183.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.1,
      "sourceWidth": 7,
      "targetWidth": 9,
      "y0": 1133.5,
      "y1": 1267.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_expense",
      "value": 0.001,
      "sourceWidth": 1,
      "targetWidth": 2,
      "y0": 1137.5,
      "y1": 1341,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "缤客控股 · 2023 财年第四季度",
      "meta": {
        "title": "缤客控股 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 12 月 31 日的季度",
        "titleTextLength": 2230
      },
      "nodes": {
        "merchant": {
          "label": "商户",
          "notes": [
            "同比 +39%",
            "佣金、支付、保险"
          ]
        },
        "agency": {
          "label": "代理",
          "notes": [
            "同比 +1%"
          ]
        },
        "advertising_other": {
          "label": [
            "广告",
            "及其他"
          ],
          "notes": [
            "同比 +12%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +18%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 13%",
            "同比下降 20 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 5%",
            "同比下降 26 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other_nonoperating": {
          "label": "其他"
        },
        "marketing": {
          "label": "营销"
        },
        "personnel": {
          "label": "人员"
        },
        "sales": {
          "label": "销售"
        },
        "ga": {
          "label": "管理费用"
        },
        "info_tech": {
          "label": "信息技术"
        },
        "da": {
          "label": "摊销"
        },
        "other_expense": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "merchant": {
            "blocks": [
              {
                "x": 496.5,
                "top": 435,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +39%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 440,
                "top": 580,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "商户",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "佣金、支付、保险",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "agency": {
            "blocks": [
              {
                "x": 496.5,
                "top": 758,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 420,
                "top": 905.5,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "代理",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "advertising_other": {
            "blocks": [
              {
                "x": 496.5,
                "top": 1034,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 420,
                "top": 1098,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "广告",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "及其他",
                    "size": 39,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1119,
                "top": 548,
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
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1742,
                "top": 388,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 13%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比下降 20 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1742,
                "top": 1154,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 38,
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
          "net_profit": {
            "blocks": [
              {
                "x": 2518,
                "top": 282,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 5%",
                    "size": 22,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比下降 26 个百分点",
                    "size": 22,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2518,
                "top": 464,
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
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_nonoperating": {
            "blocks": [
              {
                "x": 2518,
                "top": 549,
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
                "x": 2518,
                "top": 669,
                "anchor": "middle",
                "lineGap": 8,
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
          "personnel": {
            "blocks": [
              {
                "x": 2518,
                "top": 810,
                "anchor": "middle",
                "lineGap": 8,
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
          "sales": {
            "blocks": [
              {
                "x": 2518,
                "top": 940,
                "anchor": "middle",
                "lineGap": 8,
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
          "ga": {
            "blocks": [
              {
                "x": 2518,
                "top": 1044,
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
                "x": 2518,
                "top": 1138,
                "anchor": "middle",
                "lineGap": 8,
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
                "x": 2518,
                "top": 1233,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "摊销",
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
          "other_expense": {
            "blocks": [
              {
                "x": 2518,
                "top": 1318,
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
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <rect x=\"100\" y=\"1243\" width=\"304\" height=\"148\" rx=\"24\" fill=\"#002a6e\"/>\n      <text x=\"252\" y=\"1285\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">总预订额</text>\n      <text x=\"252\" y=\"1325\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"gross_bookings\">$31.7B</text>\n      <text x=\"252\" y=\"1370\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">同比 +16%</text>\n      <rect x=\"415\" y=\"1243\" width=\"330\" height=\"150\" rx=\"24\" fill=\"#002a6e\"/>\n      <text x=\"580\" y=\"1285\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">预订夜晚数</text>\n      <text x=\"580\" y=\"1325\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\" data-operating-metric=\"nights_booked\">231M</text>\n      <text x=\"580\" y=\"1370\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">同比 +9%</text>\n    </g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "gross_bookings",
      "label": "Gross bookings",
      "value": "31.7",
      "unit": "B",
      "currency": "USD",
      "literal": "$31.7B",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+16% Y/Y"
      ],
      "quote": "Gross bookings\n$31.7B\n+16% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          99,
          1243,
          305,
          150
        ]
      }
    },
    {
      "id": "nights_booked",
      "label": "Nights booked",
      "value": "231000000",
      "unit": "count",
      "currency": null,
      "literal": "231M",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+9% Y/Y"
      ],
      "quote": "Nights booked\n231M\n+9% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          414,
          1243,
          332,
          150
        ]
      }
    }
  ]
});
