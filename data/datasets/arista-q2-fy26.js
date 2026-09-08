/* Source-measured Q2 FY26 Sankey adapter. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "arista-q2-fy26",
  "name": "Arista · Q2 FY26",
  "company": "Arista",
  "meta": {
    "company": "Arista",
    "title": "Arista Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/arista-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2100,
    "hidePeriodStamp": true,
    "logoWidth": 560,
    "logoHeight": 88,
    "logoY": 349,
    "logoViewBox": "0 0 1115 175",
    "logoSvg": "\n    <g fill=\"#16325B\">\n      <path d=\"M391.027 103.426c36.994 0 55.491-25.688 55.491-51.378 0-25.688-18.498-50.353-57.546-50.353-28.773-1.029-134.617-1.029-134.617-1.029v173.668h32.879V28.413c25.691 0 90.43 0 103.79 0 18.496 0 27.745 6.163 27.745 23.635 0 14.385-9.247 22.606-26.718 22.606h-86.315l102.761 98.648h40.078l-73.991-71.932c7.197 2.056 15.417 2.056 16.444 2.056z\"/>\n      <path d=\"M480.429.669h31.856v173.665h-31.856z\"/>\n      <path d=\"M916.137 27.387V.669h-167.824l-18.497 26.718h86.641v146.947h31.856V27.387z\"/>\n      <path d=\"M678.756 72.6h-81.182c-16.438 0-25.689-7.192-25.689-21.58 0-16.44 11.305-23.633 25.689-23.633h110.98L722.941.669H596.546c-28.775 0-52.407 21.577-52.407 51.382 0 26.715 22.608 48.294 53.434 48.294h81.182c18.5 0 28.775 8.224 28.775 23.637 0 13.357-11.305 22.608-28.775 22.608H566.748l-16.44 27.744h132.558c33.912 0 52.406-24.658 52.406-52.404 0-25.697-21.58-49.33-56.516-49.33z\"/>\n      <path d=\"M1079.523 174.334h33.912s-94.539-149.003-102.764-162.362c-9.244-15.415-25.689-14.385-34.938-1.028-7.195 11.301-102.762 162.359-102.762 162.359h33.91l31.855-51.378h68.852l17.467-27.746h-67.82l36.996-59.603z\"/>\n      <path d=\"M104.325 11.972C97.133 23.272 1.564 174.334 1.564 174.334h33.91l31.858-51.381h67.822l17.47-27.746H84.8l36.993-59.602 86.321 137.697h33.911S147.483 24.301 139.26 10.943C130.013-2.413 113.574-1.387 104.325 11.972z\"/>\n    </g>",
    "logoX": 573
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "nodeRadius": 0,
    "palette": {
      "source": {
        "node": "#23395d",
        "label": "#23395d"
      },
      "hub": {
        "node": "#23395d",
        "label": "#23395d"
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
      "source": "#959faf",
      "hub": "#959faf",
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
  "layout": {
    "scale": 1,
    "nodes": {
      "product": {
        "x": 359,
        "y": 565,
        "width": 72,
        "height": 257
      },
      "service": {
        "x": 359,
        "y": 1033,
        "width": 72,
        "height": 42
      },
      "revenue": {
        "x": 826,
        "y": 670,
        "width": 72,
        "height": 299
      },
      "gross_profit": {
        "x": 1293,
        "y": 570,
        "width": 72,
        "height": 188
      },
      "cost_of_revenue": {
        "x": 1293,
        "y": 962,
        "width": 72,
        "height": 110
      },
      "product_cor": {
        "x": 1556,
        "y": 1025,
        "width": 72,
        "height": 102
      },
      "service_cor": {
        "x": 1557,
        "y": 1221,
        "width": 72,
        "height": 7
      },
      "operating_profit": {
        "x": 1761,
        "y": 465,
        "width": 72,
        "height": 136
      },
      "operating_expenses": {
        "x": 1761,
        "y": 819,
        "width": 72,
        "height": 52
      },
      "other_income": {
        "x": 2096,
        "y": 511,
        "width": 72,
        "height": 12
      },
      "net_profit": {
        "x": 2228,
        "y": 345,
        "width": 72,
        "height": 120
      },
      "tax": {
        "x": 2228,
        "y": 681,
        "width": 72,
        "height": 28
      },
      "rnd": {
        "x": 2228,
        "y": 907,
        "width": 72,
        "height": 34
      },
      "sm": {
        "x": 2228,
        "y": 1100,
        "width": 72,
        "height": 14
      },
      "ga": {
        "x": 2228,
        "y": 1270,
        "width": 72,
        "height": 2
      }
    },
    "labels": {
      "product": {
        "blocks": [
          {
            "x": 395,
            "top": 473,
            "anchor": "middle",
            "parts": [
              "value"
            ],
            "valueSize": 39
          },
          {
            "x": 395,
            "top": 524,
            "anchor": "middle",
            "lines": [
              {
                "text": "+39% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 230,
            "top": 636,
            "anchor": "middle",
            "parts": [
              "name"
            ],
            "nameSize": 40,
            "semanticRole": "source-offset-label"
          },
          {
            "x": 230,
            "top": 686,
            "anchor": "middle",
            "lines": [
              {
                "text": "60% gross margin",
                "size": 28,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ],
            "semanticRole": "source-offset-label"
          }
        ]
      },
      "service": {
        "blocks": [
          {
            "x": 395,
            "top": 940,
            "anchor": "middle",
            "parts": [
              "value"
            ],
            "valueSize": 39
          },
          {
            "x": 395,
            "top": 991,
            "anchor": "middle",
            "lines": [
              {
                "text": "+31% Y/Y",
                "size": 28,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 230,
            "top": 1010,
            "anchor": "middle",
            "parts": [
              "name"
            ],
            "nameSize": 40,
            "semanticRole": "source-offset-label"
          },
          {
            "x": 230,
            "top": 1060,
            "anchor": "middle",
            "lines": [
              {
                "text": "82% gross margin",
                "size": 28,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ],
            "semanticRole": "source-offset-label"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 862,
            "top": 526,
            "anchor": "middle",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 40,
            "valueSize": 39,
            "lineGap": 9
          },
          {
            "x": 862,
            "top": 627,
            "anchor": "middle",
            "lines": [
              {
                "text": "+38% Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1329,
            "top": 386,
            "anchor": "middle",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 40,
            "valueSize": 39,
            "lineGap": 9
          },
          {
            "x": 1329,
            "top": 487,
            "anchor": "middle",
            "lines": [
              {
                "text": "63% margin",
                "size": 28,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1329,
            "top": 1097,
            "anchor": "middle",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 34,
            "valueSize": 34,
            "lineGap": 6
          }
        ]
      },
      "product_cor": {
        "blocks": [
          {
            "x": 1640,
            "top": 1041,
            "anchor": "start",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 31,
            "valueSize": 31,
            "lineGap": 8
          }
        ]
      },
      "service_cor": {
        "blocks": [
          {
            "x": 1644,
            "top": 1193,
            "anchor": "start",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 31,
            "valueSize": 31,
            "lineGap": 8
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1804.5,
            "top": 282,
            "anchor": "middle",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 40,
            "valueSize": 39,
            "lineGap": 9
          },
          {
            "x": 1797,
            "top": 384,
            "anchor": "middle",
            "lines": [
              {
                "text": "45% margin",
                "size": 28,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1797,
            "top": 892,
            "anchor": "middle",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 34,
            "valueSize": 34,
            "lineGap": 6
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2132,
            "top": 540,
            "anchor": "middle",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 31,
            "valueSize": 31,
            "lineGap": 8
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2432,
            "top": 323,
            "anchor": "middle",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 40,
            "valueSize": 39,
            "lineGap": 9
          },
          {
            "x": 2432,
            "top": 426,
            "anchor": "middle",
            "lines": [
              {
                "text": "40% margin",
                "size": 28,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2418,
            "top": 659,
            "anchor": "middle",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 31,
            "valueSize": 31,
            "lineGap": 8
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2432,
            "top": 881,
            "anchor": "middle",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 31,
            "valueSize": 31,
            "lineGap": 8
          },
          {
            "x": 2432,
            "top": 963,
            "anchor": "middle",
            "lines": [
              {
                "text": "11% of revenue",
                "size": 28,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2432,
            "top": 1063,
            "anchor": "middle",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 31,
            "valueSize": 31,
            "lineGap": 8
          },
          {
            "x": 2432,
            "top": 1145,
            "anchor": "middle",
            "lines": [
              {
                "text": "5% of revenue",
                "size": 28,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2432,
            "top": 1237,
            "anchor": "middle",
            "parts": [
              "name",
              "value"
            ],
            "nameSize": 31,
            "valueSize": 31,
            "lineGap": 8
          },
          {
            "x": 2432,
            "top": 1319,
            "anchor": "middle",
            "lines": [
              {
                "text": "1% of revenue",
                "size": 28,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "product",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Product",
      "value": 2.6,
      "notes": [
        "+39% Y/Y",
        "60% gross margin",
        "(3pp) Y/Y"
      ],
      "color": "#23395d",
      "labelColor": "#23395d",
      "linkTint": "#959faf",
      "valueText": "$2.6B"
    },
    {
      "id": "service",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Service",
      "value": 0.4,
      "notes": [
        "+31% Y/Y",
        "82% gross margin",
        "(0pp) Y/Y"
      ],
      "color": "#23395d",
      "labelColor": "#23395d",
      "linkTint": "#959faf",
      "valueText": "$0.4B"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 3,
      "notes": [
        "+38% Y/Y"
      ],
      "color": "#23395d",
      "labelColor": "#23395d",
      "valueText": "$3.0B"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 1.9,
      "notes": [
        "63% margin",
        "(2pp) Y/Y"
      ],
      "valueText": "$1.9B"
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
      "value": 1.1,
      "valueText": "($1.1B)"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 1.4,
      "notes": [
        "45% margin",
        "+1pp Y/Y"
      ],
      "valueText": "$1.4B"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 0.5,
      "valueText": "($0.5B)"
    },
    {
      "id": "product_cor",
      "col": 3,
      "order": 2,
      "type": "cost",
      "label": "Product",
      "value": 1,
      "valueText": "($1.0B)"
    },
    {
      "id": "service_cor",
      "col": 3,
      "order": 3,
      "type": "cost",
      "label": "Service",
      "value": 0.1,
      "valueText": "($0.1B)"
    },
    {
      "id": "other_income",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Other",
      "value": 0.1,
      "valueText": "$0.1B"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1.2,
      "valueText": "$1.2B",
      "notes": [
        "40% margin",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 0.3,
      "valueText": "($0.3B)"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "R&D",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": [
        "11% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "S&M",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": [
        "5% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": "G&A",
      "value": 0.034,
      "valueText": "($34M)",
      "notes": [
        "1% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "product",
      "target": "revenue",
      "value": 2.6,
      "sourceWidth": 257,
      "targetWidth": 257,
      "y0": 693.5,
      "y1": 798.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#959faf"
    },
    {
      "source": "service",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 42,
      "targetWidth": 42,
      "y0": 1054,
      "y1": 948,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#959faf"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1.9,
      "sourceWidth": 188,
      "targetWidth": 188,
      "y0": 764,
      "y1": 664,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 1.1,
      "sourceWidth": 111,
      "targetWidth": 110,
      "y0": 913.5,
      "y1": 1017,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1.4,
      "sourceWidth": 136,
      "targetWidth": 136,
      "y0": 638,
      "y1": 533,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.5,
      "sourceWidth": 52,
      "targetWidth": 52,
      "y0": 732,
      "y1": 845,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_revenue",
      "target": "product_cor",
      "value": 1,
      "sourceWidth": 103,
      "targetWidth": 102,
      "y0": 1013.5,
      "y1": 1076,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_revenue",
      "target": "service_cor",
      "value": 0.1,
      "sourceWidth": 7,
      "targetWidth": 7,
      "y0": 1068.5,
      "y1": 1224.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.1,
      "sourceWidth": 108,
      "targetWidth": 108,
      "y0": 519,
      "y1": 399,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 28,
      "targetWidth": 28,
      "y0": 587,
      "y1": 695,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 1.2,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 517,
      "y1": 459,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.3,
      "sourceWidth": 34,
      "targetWidth": 34,
      "y0": 836,
      "y1": 924,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 0.2,
      "sourceWidth": 16,
      "targetWidth": 14,
      "y0": 861,
      "y1": 1107,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.034,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 870,
      "y1": 1271,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "阿里斯塔网络 · 2026 财年第二季度",
      "meta": {
        "title": "阿里斯塔网络 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "",
        "titleSize": 92,
        "titleTextLength": 1750
      },
      "nodes": {
        "product": {
          "label": "产品",
          "notes": [
            "同比 +39%",
            "毛利率 60%",
            "同比 (3 个百分点)"
          ]
        },
        "service": {
          "label": "服务",
          "notes": [
            "同比 +31%",
            "毛利率 82%",
            "同比 (0 个百分点)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +38%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 63%",
            "同比 (2 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "product_cor": {
          "label": "产品"
        },
        "service_cor": {
          "label": "服务"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 45%",
            "同比 +1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "other_income": {
          "label": "其他收入"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 40%",
            "同比 (0 个百分点)"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 11%",
            "同比 (2 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 5%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 1%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "product": {
            "blocks": [
              {
                "x": 395,
                "top": 473,
                "anchor": "middle",
                "parts": [
                  "value"
                ],
                "valueSize": 39
              },
              {
                "x": 395,
                "top": 524,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +39%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 230,
                "top": 636,
                "anchor": "middle",
                "parts": [
                  "name"
                ],
                "nameSize": 40,
                "semanticRole": "source-offset-label"
              },
              {
                "x": 230,
                "top": 686,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "毛利率 60%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "source-offset-label"
              }
            ]
          },
          "service": {
            "blocks": [
              {
                "x": 395,
                "top": 940,
                "anchor": "middle",
                "parts": [
                  "value"
                ],
                "valueSize": 39
              },
              {
                "x": 395,
                "top": 991,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +31%",
                    "size": 28,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 230,
                "top": 1010,
                "anchor": "middle",
                "parts": [
                  "name"
                ],
                "nameSize": 40,
                "semanticRole": "source-offset-label"
              },
              {
                "x": 230,
                "top": 1060,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "毛利率 82%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "source-offset-label"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 862,
                "top": 526,
                "anchor": "middle",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 40,
                "valueSize": 39,
                "lineGap": 9
              },
              {
                "x": 862,
                "top": 627,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +38%",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1329,
                "top": 386,
                "anchor": "middle",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 40,
                "valueSize": 39,
                "lineGap": 9
              },
              {
                "x": 1329,
                "top": 487,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 63%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1329,
                "top": 1097,
                "anchor": "middle",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 34,
                "valueSize": 34,
                "lineGap": 6
              }
            ]
          },
          "product_cor": {
            "blocks": [
              {
                "x": 1640,
                "top": 1041,
                "anchor": "start",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 31,
                "valueSize": 31,
                "lineGap": 8
              }
            ]
          },
          "service_cor": {
            "blocks": [
              {
                "x": 1644,
                "top": 1193,
                "anchor": "start",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 31,
                "valueSize": 31,
                "lineGap": 8
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1804.5,
                "top": 282,
                "anchor": "middle",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 40,
                "valueSize": 39,
                "lineGap": 9
              },
              {
                "x": 1797,
                "top": 384,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 45%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1797,
                "top": 892,
                "anchor": "middle",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 34,
                "valueSize": 34,
                "lineGap": 6
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2132,
                "top": 540,
                "anchor": "middle",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 31,
                "valueSize": 31,
                "lineGap": 8
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2432,
                "top": 323,
                "anchor": "middle",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 40,
                "valueSize": 39,
                "lineGap": 9
              },
              {
                "x": 2432,
                "top": 426,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 40%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2418,
                "top": 659,
                "anchor": "middle",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 31,
                "valueSize": 31,
                "lineGap": 8
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2432,
                "top": 881,
                "anchor": "middle",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 31,
                "valueSize": 31,
                "lineGap": 8
              },
              {
                "x": 2432,
                "top": 963,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 11%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2432,
                "top": 1063,
                "anchor": "middle",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 31,
                "valueSize": 31,
                "lineGap": 8
              },
              {
                "x": 2432,
                "top": 1145,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 5%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2432,
                "top": 1237,
                "anchor": "middle",
                "parts": [
                  "name",
                  "value"
                ],
                "nameSize": 31,
                "valueSize": 31,
                "lineGap": 8
              },
              {
                "x": 2432,
                "top": 1319,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 1%",
                    "size": 28,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "color": "#777777"
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
