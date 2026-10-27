window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "booking-q1-fy25",
  "name": "Booking Holdings \u00b7 Q1 FY25",
  "company": "Booking Holdings",
  "meta": {
    "company": "Booking Holdings",
    "title": "Booking Q1 FY25 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/booking-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2230,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950
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
  "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      <rect x=\"100\" y=\"1202\" width=\"305\" height=\"149\" rx=\"24\" fill=\"#003680\"/>\n      <text x=\"252.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">Gross bookings</text>\n      <text data-operating-metric=\"gross_bookings\" x=\"252.5\" y=\"1291\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">$46.7B</text>\n      <text x=\"252.5\" y=\"1325\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">+7% Y/Y</text>\n      <rect x=\"416\" y=\"1202\" width=\"330\" height=\"149\" rx=\"24\" fill=\"#003680\"/>\n      <text x=\"581\" y=\"1251\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">Nights booked</text>\n      <text data-operating-metric=\"nights_booked\" x=\"581\" y=\"1291\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">319M</text>\n      <text x=\"581\" y=\"1325\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">+7% Y/Y</text>\n    </g>",
  "rasterAnnotations": [
    {
      "key": "booking-company-logo",
      "href": "data/assets/raster-annotations/booking/company-logo.png",
      "x": 784,
      "y": 276,
      "width": 626,
      "height": 160
    },
    {
      "key": "booking-merchant-brands",
      "href": "data/assets/raster-annotations/booking/merchant-brands.png",
      "x": 0,
      "y": 474,
      "width": 180,
      "height": 220
    },
    {
      "key": "booking-agency-brand",
      "href": "data/assets/raster-annotations/booking/agency-brand.png",
      "x": 8,
      "y": 810,
      "width": 174,
      "height": 176
    },
    {
      "key": "booking-advertising-brands",
      "href": "data/assets/raster-annotations/booking/advertising-brands.png",
      "x": 0,
      "y": 1040,
      "width": 184,
      "height": 154
    }
  ],
  "layout": {
    "scale": 52.7,
    "nodes": {
      "merchant": {
        "x": 455,
        "y": 502,
        "width": 72,
        "height": 182
      },
      "agency": {
        "x": 455,
        "y": 847,
        "width": 72,
        "height": 102
      },
      "advertising_other": {
        "x": 455,
        "y": 1123,
        "width": 72,
        "height": 10
      },
      "revenue": {
        "x": 1077,
        "y": 669,
        "width": 73,
        "height": 292
      },
      "operating_profit": {
        "x": 1703,
        "y": 505,
        "width": 72,
        "height": 117
      },
      "operating_expenses": {
        "x": 1700,
        "y": 911,
        "width": 73,
        "height": 176
      },
      "net_profit": {
        "x": 2323,
        "y": 305,
        "width": 72,
        "height": 93
      },
      "other": {
        "x": 2323,
        "y": 499,
        "width": 72,
        "height": 13
      },
      "tax": {
        "x": 2323,
        "y": 602,
        "width": 72,
        "height": 11
      },
      "marketing": {
        "x": 2323,
        "y": 697,
        "width": 72,
        "height": 79
      },
      "personnel": {
        "x": 2323,
        "y": 850,
        "width": 72,
        "height": 32
      },
      "sales": {
        "x": 2323,
        "y": 961,
        "width": 72,
        "height": 32
      },
      "info_tech": {
        "x": 2323,
        "y": 1077,
        "width": 72,
        "height": 21
      },
      "da": {
        "x": 2323,
        "y": 1202,
        "width": 72,
        "height": 5
      },
      "ga": {
        "x": 2323,
        "y": 1307,
        "width": 72,
        "height": 8
      }
    },
    "labels": {
      "merchant": {
        "blocks": [
          {
            "x": 490.5,
            "top": 412,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 410,
            "top": 533,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Merchant",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Commissions,",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "payments, insurance",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "agency": {
        "blocks": [
          {
            "x": 490.5,
            "top": 756,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(11%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 410,
            "top": 877,
            "anchor": "end",
            "lines": [
              {
                "text": "Agency",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "advertising_other": {
        "blocks": [
          {
            "x": 490.5,
            "top": 1033,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 410,
            "top": 1083.5,
            "anchor": "end",
            "lineGap": 5,
            "lines": [
              {
                "text": "Advertising",
                "size": 38,
                "weight": 800
              },
              {
                "text": "& Other",
                "size": 38,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1113,
            "top": 526,
            "anchor": "middle",
            "lineGap": 10,
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
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1738.5,
            "top": 327,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "22% margin",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1736,
            "top": 1111,
            "anchor": "middle",
            "lineGap": 8,
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
            "x": 2512,
            "top": 265,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "7% margin",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(11pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2512,
            "top": 574,
            "anchor": "middle",
            "lineGap": 7,
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
      "other": {
        "blocks": [
          {
            "x": 2512,
            "top": 471,
            "anchor": "middle",
            "lineGap": 7,
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
            "x": 2512,
            "top": 699,
            "anchor": "middle",
            "lineGap": 7,
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
            "x": 2512,
            "top": 831,
            "anchor": "middle",
            "lineGap": 7,
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
            "x": 2512,
            "top": 942,
            "anchor": "middle",
            "lineGap": 7,
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
            "x": 2512,
            "top": 1277,
            "anchor": "middle",
            "lineGap": 7,
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
            "x": 2512,
            "top": 1053,
            "anchor": "middle",
            "lineGap": 7,
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
            "x": 2512,
            "top": 1171,
            "anchor": "middle",
            "lineGap": 7,
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
      "value": 2.9,
      "notes": [
        "+22% Y/Y",
        "Commissions, payments, insurance"
      ]
    },
    {
      "id": "agency",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Agency",
      "value": 1.6,
      "notes": [
        "(11%) Y/Y"
      ]
    },
    {
      "id": "advertising_other",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Advertising",
        "& Other"
      ],
      "value": 0.3,
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 4.8,
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": [
        "Operating",
        "profit"
      ],
      "value": 1.1,
      "notes": [
        "22% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 3.7
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 0.3,
      "notes": [
        "7% margin",
        "(11pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": "Tax",
      "value": 0.1
    },
    {
      "id": "other",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Other",
      "value": 0.7
    },
    {
      "id": "marketing",
      "col": 3,
      "order": 3,
      "type": "cost",
      "label": "Marketing",
      "value": 1.8
    },
    {
      "id": "personnel",
      "col": 3,
      "order": 4,
      "type": "cost",
      "label": "Personnel",
      "value": 0.7
    },
    {
      "id": "sales",
      "col": 3,
      "order": 5,
      "type": "cost",
      "label": "Sales",
      "value": 0.7
    },
    {
      "id": "ga",
      "col": 3,
      "order": 6,
      "type": "cost",
      "label": "G&A",
      "value": 0.1
    },
    {
      "id": "info_tech",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": "Info Tech",
      "value": 0.2
    },
    {
      "id": "da",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "D&A",
      "value": 0.2
    }
  ],
  "links": [
    {
      "source": "merchant",
      "target": "revenue",
      "value": 2.9,
      "sourceWidth": 182,
      "targetWidth": 182,
      "y0": 593,
      "y1": 760,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85d3f0"
    },
    {
      "source": "agency",
      "target": "revenue",
      "value": 1.6,
      "sourceWidth": 102,
      "targetWidth": 100,
      "y0": 898,
      "y1": 901,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85d3f0"
    },
    {
      "source": "advertising_other",
      "target": "revenue",
      "value": 0.3,
      "sourceWidth": 10,
      "targetWidth": 10,
      "y0": 1128,
      "y1": 956,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85d3f0"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 1.1,
      "sourceWidth": 117,
      "targetWidth": 117,
      "y0": 727.5,
      "y1": 563.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 3.7,
      "sourceWidth": 175,
      "targetWidth": 176,
      "y0": 873.5,
      "y1": 999,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.3,
      "sourceWidth": 93,
      "targetWidth": 93,
      "y0": 551.5,
      "y1": 351.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.7,
      "sourceWidth": 13,
      "targetWidth": 13,
      "y0": 604.5,
      "y1": 505.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 11,
      "targetWidth": 11,
      "y0": 616.5,
      "y1": 607.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 1.8,
      "sourceWidth": 79,
      "targetWidth": 79,
      "y0": 950.5,
      "y1": 736.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 0.7,
      "sourceWidth": 32,
      "targetWidth": 32,
      "y0": 1006,
      "y1": 866,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sales",
      "value": 0.7,
      "sourceWidth": 32,
      "targetWidth": 32,
      "y0": 1038,
      "y1": 977,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "info_tech",
      "value": 0.2,
      "sourceWidth": 21,
      "targetWidth": 21,
      "y0": 1064.5,
      "y1": 1087.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 0.2,
      "sourceWidth": 5,
      "targetWidth": 5,
      "y0": 1077.5,
      "y1": 1204.5,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.1,
      "sourceWidth": 7,
      "targetWidth": 8,
      "y0": 1083.5,
      "y1": 1311,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "\u7f24\u5ba2\u63a7\u80a1 \u00b7 2025 \u8d22\u5e74\u7b2c\u4e00\u5b63\u5ea6",
      "meta": {
        "title": "\u7f24\u5ba2\u63a7\u80a1 2025 \u8d22\u5e74\u7b2c\u4e00\u5b63\u5ea6\u5229\u6da6\u8868",
        "period": "",
        "periodNote": "",
        "titleTextLength": 2230
      },
      "nodes": {
        "merchant": {
          "label": "\u5546\u6237",
          "notes": [
            "\u540c\u6bd4 +22%",
            "\u4f63\u91d1\u3001\u652f\u4ed8\u3001\u4fdd\u9669"
          ]
        },
        "agency": {
          "label": "\u4ee3\u7406",
          "notes": [
            "\u540c\u6bd4 (11%)"
          ]
        },
        "advertising_other": {
          "label": [
            "\u5e7f\u544a",
            "\u53ca\u5176\u4ed6"
          ],
          "notes": [
            "\u540c\u6bd4 +6%"
          ]
        },
        "revenue": {
          "label": "\u6536\u5165",
          "notes": [
            "\u540c\u6bd4 +8%"
          ]
        },
        "operating_profit": {
          "label": [
            "\u8425\u4e1a",
            "\u5229\u6da6"
          ],
          "notes": [
            "\u5229\u6da6\u7387 22%",
            "\u540c\u6bd4 +4 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "operating_expenses": {
          "label": [
            "\u8fd0\u8425",
            "\u8d39\u7528"
          ]
        },
        "net_profit": {
          "label": "\u51c0\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 7%",
            "\u540c\u6bd4 (11) \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "tax": {
          "label": "\u7a0e\u8d39"
        },
        "other": {
          "label": "\u5176\u4ed6"
        },
        "marketing": {
          "label": "\u8425\u9500"
        },
        "personnel": {
          "label": "\u4eba\u5458"
        },
        "sales": {
          "label": "\u9500\u552e"
        },
        "ga": {
          "label": "\u7ba1\u7406\u8d39\u7528"
        },
        "info_tech": {
          "label": "\u4fe1\u606f\u6280\u672f"
        },
        "da": {
          "label": "\u6298\u65e7\u4e0e\u644a\u9500"
        }
      },
      "layout": {
        "labels": {
          "merchant": {
            "blocks": [
              {
                "x": 490.5,
                "top": 412,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 +22%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 410,
                "top": 553,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "\u5546\u6237",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "\u4f63\u91d1\u3001\u652f\u4ed8\u3001\u4fdd\u9669",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "agency": {
            "blocks": [
              {
                "x": 490.5,
                "top": 756,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 (11%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 410,
                "top": 877,
                "anchor": "end",
                "lines": [
                  {
                    "text": "\u4ee3\u7406",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "advertising_other": {
            "blocks": [
              {
                "x": 490.5,
                "top": 1033,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 +6%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 410,
                "top": 1083.5,
                "anchor": "end",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "\u5e7f\u544a",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "\u53ca\u5176\u4ed6",
                    "size": 38,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1113,
                "top": 526,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "\u6536\u5165",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "\u540c\u6bd4 +8%",
                    "size": 27,
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
                "x": 1738.5,
                "top": 327,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "\u8425\u4e1a\u5229\u6da6",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "\u5229\u6da6\u7387 22%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "\u540c\u6bd4 +4 \u4e2a\u767e\u5206\u70b9",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1736,
                "top": 1111,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "\u8fd0\u8425",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "\u8d39\u7528",
                    "size": 39,
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
                "x": 2512,
                "top": 265,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "\u51c0\u5229\u6da6",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "\u5229\u6da6\u7387 7%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "\u540c\u6bd4 (11) \u4e2a\u767e\u5206\u70b9",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2512,
                "top": 574,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "\u7a0e\u8d39",
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
          "other": {
            "blocks": [
              {
                "x": 2512,
                "top": 471,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "\u5176\u4ed6",
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
                "x": 2512,
                "top": 699,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "\u8425\u9500",
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
                "x": 2512,
                "top": 831,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "\u4eba\u5458",
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
                "x": 2512,
                "top": 942,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "\u9500\u552e",
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
                "x": 2512,
                "top": 1277,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "\u7ba1\u7406\u8d39\u7528",
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
                "x": 2512,
                "top": 1053,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "\u4fe1\u606f\u6280\u672f",
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
                "x": 2512,
                "top": 1171,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "\u6298\u65e7\u4e0e\u644a\u9500",
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
      "annotationsSvg": "\n    <g font-family=\"Montserrat,Arial,sans-serif\">\n      <rect x=\"100\" y=\"1202\" width=\"305\" height=\"149\" rx=\"24\" fill=\"#003680\"/>\n      <text x=\"252.5\" y=\"1251\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">\u603b\u9884\u8ba2\u989d</text>\n      <text data-operating-metric=\"gross_bookings\" x=\"252.5\" y=\"1291\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">$46.7B</text>\n      <text x=\"252.5\" y=\"1325\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">\u540c\u6bd4 +7%</text>\n      <rect x=\"416\" y=\"1202\" width=\"330\" height=\"149\" rx=\"24\" fill=\"#003680\"/>\n      <text x=\"581\" y=\"1251\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"800\" fill=\"#ffffff\">\u9884\u8ba2\u591c\u665a\u6570</text>\n      <text data-operating-metric=\"nights_booked\" x=\"581\" y=\"1291\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"400\" fill=\"#ffffff\">319M</text>\n      <text x=\"581\" y=\"1325\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"400\" fill=\"#ffffff\">\u540c\u6bd4 +7%</text>\n    </g>"
    }
  },
  "operatingMetrics": [
    {
      "id": "gross_bookings",
      "label": "Gross bookings",
      "value": "46.7",
      "unit": "B",
      "currency": "USD",
      "literal": "$46.7B",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+7% Y/Y"
      ],
      "quote": "Gross bookings\n$46.7B\n+7% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          99,
          1202,
          305,
          150
        ]
      }
    },
    {
      "id": "nights_booked",
      "label": "Nights booked",
      "value": "319000000",
      "unit": "count",
      "currency": null,
      "literal": "319M",
      "comparison": "eq",
      "basis": "unspecified",
      "notes": [
        "+7% Y/Y"
      ],
      "quote": "Nights booked\n319M\n+7% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          414,
          1202,
          331,
          152
        ]
      }
    }
  ]
});
