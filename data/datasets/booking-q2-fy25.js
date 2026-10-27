window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "booking-q2-fy25",
  "name": "Booking Holdings · Q2 FY25",
  "company": "Booking Holdings",
  "meta": {
    "company": "Booking Holdings",
    "title": "Booking Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Quarter ended June 30, 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/booking-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196.64,
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"98.97\" y=\"1201.97\" width=\"304.73\" height=\"149.76\" rx=\"28.65\" fill=\"#002a6e\"/><text x=\"251.33\" y=\"1254.06\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"800\" fill=\"#ffffff\">Gross bookings</text><text data-operating-metric=\"gross_bookings\" x=\"251.33\" y=\"1290.53\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"400\" fill=\"#ffffff\">$46.7B</text><text x=\"251.33\" y=\"1326.99\" text-anchor=\"middle\" font-size=\"22.14\" font-weight=\"400\" fill=\"#ffffff\">+13% Y/Y</text><rect x=\"415.42\" y=\"1201.97\" width=\"330.77\" height=\"151.06\" rx=\"28.65\" fill=\"#002a6e\"/><text x=\"580.8\" y=\"1254.06\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"800\" fill=\"#ffffff\">Nights booked</text><text data-operating-metric=\"nights_booked\" x=\"580.8\" y=\"1290.53\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"400\" fill=\"#ffffff\">309M</text><text x=\"580.8\" y=\"1326.99\" text-anchor=\"middle\" font-size=\"22.14\" font-weight=\"400\" fill=\"#ffffff\">+8% Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "booking-company-logo",
      "href": "data/assets/raster-annotations/booking/company-logo.png",
      "x": 783.95,
      "y": 283.89,
      "width": 619.87,
      "height": 164.08
    },
    {
      "key": "booking-merchant-brands",
      "href": "data/assets/raster-annotations/booking/merchant-brands.png",
      "x": 0,
      "y": 505.27,
      "width": 171.9,
      "height": 188.83
    },
    {
      "key": "booking-agency-brand",
      "href": "data/assets/raster-annotations/booking/agency-brand.png",
      "x": 11.72,
      "y": 816.51,
      "width": 167.99,
      "height": 152.36
    },
    {
      "key": "booking-advertising-brands",
      "href": "data/assets/raster-annotations/booking/advertising-brands.png",
      "x": 7.81,
      "y": 1052.21,
      "width": 158.87,
      "height": 128.92
    }
  ],
  "layout": {
    "scale": 43,
    "nodes": {
      "merchant": {
        "x": 462.3,
        "y": 507.88,
        "width": 71.62,
        "height": 192.73
      },
      "agency": {
        "x": 462.3,
        "y": 852.97,
        "width": 71.62,
        "height": 88.55
      },
      "advertising_other": {
        "x": 462.3,
        "y": 1110.82,
        "width": 71.62,
        "height": 13.02
      },
      "revenue": {
        "x": 1084.77,
        "y": 664.15,
        "width": 72.93,
        "height": 295.61
      },
      "operating_profit": {
        "x": 1707.24,
        "y": 519.6,
        "width": 72.93,
        "height": 97.67
      },
      "operating_expenses": {
        "x": 1707.24,
        "y": 890.74,
        "width": 72.93,
        "height": 196.64
      },
      "net_profit": {
        "x": 2331.02,
        "y": 299.52,
        "width": 71.62,
        "height": 39.07
      },
      "other": {
        "x": 2331.02,
        "y": 464.9,
        "width": 71.62,
        "height": 49.49
      },
      "tax": {
        "x": 2331.02,
        "y": 606.85,
        "width": 71.62,
        "height": 9.12
      },
      "marketing": {
        "x": 2331.02,
        "y": 671.96,
        "width": 71.62,
        "height": 92.46
      },
      "personnel": {
        "x": 2331.02,
        "y": 834.74,
        "width": 71.62,
        "height": 39.07
      },
      "sales": {
        "x": 2331.02,
        "y": 954.55,
        "width": 71.62,
        "height": 39.07
      },
      "ga": {
        "x": 2331.02,
        "y": 1078.26,
        "width": 71.62,
        "height": 9.12
      },
      "info_tech": {
        "x": 2331.02,
        "y": 1190.25,
        "width": 71.62,
        "height": 6.51
      },
      "da": {
        "x": 2331.02,
        "y": 1297.04,
        "width": 71.62,
        "height": 9.12
      }
    },
    "labels": {
      "merchant": {
        "blocks": [
          {
            "x": 497.46,
            "top": 408.91,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "+29% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 416.72,
            "top": 544.34,
            "anchor": "end",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Merchant",
                "size": 39.07,
                "weight": 800
              }
            ],
            "semanticRole": "source-offset-side-label"
          },
          {
            "x": 438.86,
            "top": 608.15,
            "anchor": "end",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Commissions,",
                "size": 26.04,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "payments, insurance",
                "size": 26.04,
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
            "x": 497.46,
            "top": 754,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 399.79,
            "top": 871.2,
            "anchor": "end",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Agency",
                "size": 39.07,
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
            "x": 497.46,
            "top": 1011.85,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 419.32,
            "top": 1060.03,
            "anchor": "end",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Advertising",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "& Other",
                "size": 39.07,
                "weight": 800
              }
            ],
            "semanticRole": "source-offset-side-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1121.23,
            "top": 516.99,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 27.35,
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
            "x": 1742.41,
            "top": 332.07,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "33% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.35,
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
            "x": 1742.41,
            "top": 1105.61,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Operating",
                "size": 33.86,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 33.86,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 33.86,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2525.33,
            "top": 234.4,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.07,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.07,
                "weight": 400
              },
              {
                "text": "13% margin",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(13pp) Y/Y",
                "size": 27.35,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2513.33,
            "top": 450.58,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2513.33,
            "top": 567.78,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2513.33,
            "top": 678.47,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Marketing",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2513.33,
            "top": 813.9,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Personnel",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sales": {
        "blocks": [
          {
            "x": 2513.33,
            "top": 935.01,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Sales",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2513.33,
            "top": 1041.8,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "info_tech": {
        "blocks": [
          {
            "x": 2513.33,
            "top": 1153.79,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "Info Tech",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2513.33,
            "top": 1263.18,
            "anchor": "middle",
            "lineGap": 11.72,
            "lines": [
              {
                "text": "D&A",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
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
      "value": 4.5,
      "valueText": "$4.5B",
      "notes": [
        "+29% Y/Y",
        "Commissions, payments, insurance"
      ]
    },
    {
      "id": "agency",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Agency",
      "value": 2,
      "valueText": "$2.0B",
      "notes": [
        "(5%) Y/Y"
      ]
    },
    {
      "id": "advertising_other",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Advertising & Other",
      "value": 0.3,
      "valueText": "$0.3B",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 3,
      "type": "hub",
      "label": "Revenue",
      "value": 6.8,
      "valueText": "$6.8B",
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 4,
      "type": "profit",
      "label": "Operating profit",
      "value": 2.3,
      "valueText": "$2.3B",
      "notes": [
        "33% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 5,
      "type": "cost",
      "label": "Operating expenses",
      "value": 4.5,
      "valueText": "($4.5B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 6,
      "type": "profit",
      "label": "Net profit",
      "value": 0.9,
      "valueText": "$0.9B",
      "notes": [
        "13% margin",
        "(13pp) Y/Y"
      ]
    },
    {
      "id": "other",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Other",
      "value": 1.1,
      "valueText": "($1.1B)",
      "notes": []
    },
    {
      "id": "tax",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Tax",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "marketing",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Marketing",
      "value": 2.1,
      "valueText": "($2.1B)",
      "notes": []
    },
    {
      "id": "personnel",
      "col": 3,
      "order": 10,
      "type": "cost",
      "label": "Personnel",
      "value": 0.9,
      "valueText": "($0.9B)",
      "notes": []
    },
    {
      "id": "sales",
      "col": 3,
      "order": 11,
      "type": "cost",
      "label": "Sales",
      "value": 0.9,
      "valueText": "($0.9B)",
      "notes": []
    },
    {
      "id": "ga",
      "col": 3,
      "order": 12,
      "type": "cost",
      "label": "G&A",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "info_tech",
      "col": 3,
      "order": 13,
      "type": "cost",
      "label": "Info Tech",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "da",
      "col": 3,
      "order": 14,
      "type": "cost",
      "label": "D&A",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "merchant",
      "target": "revenue",
      "value": 4.5,
      "sourceWidth": 192.73,
      "targetWidth": 194.03,
      "y0": 604.24,
      "y1": 761.16,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85d3f0"
    },
    {
      "source": "agency",
      "target": "revenue",
      "value": 2,
      "sourceWidth": 88.55,
      "targetWidth": 88.55,
      "y0": 897.25,
      "y1": 902.46,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85d3f0"
    },
    {
      "source": "advertising_other",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 13.02,
      "targetWidth": 13.02,
      "y0": 1117.33,
      "y1": 953.24,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85d3f0"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 2.3,
      "sourceWidth": 97.67,
      "targetWidth": 97.67,
      "y0": 712.98,
      "y1": 568.43,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 4.5,
      "sourceWidth": 197.94,
      "targetWidth": 196.64,
      "y0": 860.78,
      "y1": 989.06,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.9,
      "sourceWidth": 39.07,
      "targetWidth": 39.07,
      "y0": 539.13,
      "y1": 319.05,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 1.1,
      "sourceWidth": 49.49,
      "targetWidth": 49.49,
      "y0": 583.41,
      "y1": 489.64,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 9.12,
      "targetWidth": 9.12,
      "y0": 612.71,
      "y1": 611.4,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 2.1,
      "sourceWidth": 92.46,
      "targetWidth": 92.46,
      "y0": 936.97,
      "y1": 718.19,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 0.9,
      "sourceWidth": 39.07,
      "targetWidth": 39.07,
      "y0": 1002.73,
      "y1": 854.27,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales",
      "value": 0.9,
      "sourceWidth": 39.07,
      "targetWidth": 39.07,
      "y0": 1041.8,
      "y1": 974.08,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.2,
      "sourceWidth": 9.12,
      "targetWidth": 9.12,
      "y0": 1065.89,
      "y1": 1082.82,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "info_tech",
      "value": 0.2,
      "sourceWidth": 6.51,
      "targetWidth": 6.51,
      "y0": 1073.7,
      "y1": 1193.51,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.2,
      "sourceWidth": 10.42,
      "targetWidth": 9.12,
      "y0": 1082.17,
      "y1": 1301.59,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "缤客控股 · 2025 财年第二季度",
      "meta": {
        "title": "缤客控股 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月 30 日的季度"
      },
      "nodes": {
        "merchant": {
          "label": "商户",
          "notes": [
            "同比 +29%",
            "佣金、支付、保险"
          ]
        },
        "agency": {
          "label": "代理",
          "notes": [
            "同比 (5%)"
          ]
        },
        "advertising_other": {
          "label": "广告及其他",
          "notes": [
            "同比 +10%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +16%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 33%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 13%",
            "同比 (13 个百分点)"
          ]
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": []
        },
        "personnel": {
          "label": "人员",
          "notes": []
        },
        "sales": {
          "label": "销售",
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
                "x": 497.46,
                "top": 408.91,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 +29%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 416.72,
                "top": 544.34,
                "anchor": "end",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "商户",
                    "size": 39.07,
                    "weight": 800
                  }
                ],
                "semanticRole": "source-offset-side-label"
              },
              {
                "x": 438.86,
                "top": 608.15,
                "anchor": "end",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "佣金、",
                    "size": 26.04,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "支付、保险",
                    "size": 26.04,
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
                "x": 497.46,
                "top": 754,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 399.79,
                "top": 871.2,
                "anchor": "end",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "代理",
                    "size": 39.07,
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
                "x": 497.46,
                "top": 1011.85,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 419.32,
                "top": 1060.03,
                "anchor": "end",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "广告",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "及其他",
                    "size": 39.07,
                    "weight": 800
                  }
                ],
                "semanticRole": "source-offset-side-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1121.23,
                "top": 516.99,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 27.35,
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
                "x": 1742.41,
                "top": 332.07,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "利润率 33%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.35,
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
                "x": 1742.41,
                "top": 1105.61,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "运营",
                    "size": 33.86,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 33.86,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 33.86,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2525.33,
                "top": 234.4,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.07,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.07,
                    "weight": 400
                  },
                  {
                    "text": "利润率 13%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (13 个百分点)",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2513.33,
                "top": 450.58,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2513.33,
                "top": 567.78,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2513.33,
                "top": 678.47,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "营销",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2513.33,
                "top": 813.9,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "人员",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sales": {
            "blocks": [
              {
                "x": 2513.33,
                "top": 935.01,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "销售",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2513.33,
                "top": 1041.8,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "info_tech": {
            "blocks": [
              {
                "x": 2513.33,
                "top": 1153.79,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "信息技术",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2513.33,
                "top": 1263.18,
                "anchor": "middle",
                "lineGap": 11.72,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><rect x=\"98.97\" y=\"1201.97\" width=\"304.73\" height=\"149.76\" rx=\"28.65\" fill=\"#002a6e\"/><text x=\"251.33\" y=\"1254.06\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"800\" fill=\"#ffffff\">总预订额</text><text data-operating-metric=\"gross_bookings\" x=\"251.33\" y=\"1290.53\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"400\" fill=\"#ffffff\">$46.7B</text><text x=\"251.33\" y=\"1326.99\" text-anchor=\"middle\" font-size=\"22.14\" font-weight=\"400\" fill=\"#ffffff\">同比 +13%</text><rect x=\"415.42\" y=\"1201.97\" width=\"330.77\" height=\"151.06\" rx=\"28.65\" fill=\"#002a6e\"/><text x=\"580.8\" y=\"1254.06\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"800\" fill=\"#ffffff\">预订夜晚数</text><text data-operating-metric=\"nights_booked\" x=\"580.8\" y=\"1290.53\" text-anchor=\"middle\" font-size=\"27.35\" font-weight=\"400\" fill=\"#ffffff\">309M</text><text x=\"580.8\" y=\"1326.99\" text-anchor=\"middle\" font-size=\"22.14\" font-weight=\"400\" fill=\"#ffffff\">同比 +8%</text></g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "gross_bookings",
      "value": "46.7",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$46.7B"
    },
    {
      "id": "nights_booked",
      "value": "309000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "309M"
    }
  ]
});
