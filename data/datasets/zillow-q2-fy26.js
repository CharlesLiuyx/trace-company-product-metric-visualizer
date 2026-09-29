/* Source-measured Zillow Q2 FY26 income statement and supplemental operating metrics. */
window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "zillow-q2-fy26",
  "name": "Zillow · Q2 FY26",
  "company": "Zillow",
  "meta": {
    "company": "Zillow",
    "title": "Zillow Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/zillow-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 198,
    "titleSize": 123,
    "titleWeight": 800,
    "hidePeriodStamp": true
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
        "node": "#011751",
        "label": "#011751"
      },
      "hub": {
        "node": "#011751",
        "label": "#011751"
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
      "source": "#858fa9",
      "hub": "#858fa9",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "<g><rect x=\"81\" y=\"1194\" width=\"163\" height=\"164\" rx=\"34\" fill=\"#011751\"/><text x=\"162.5\" y=\"1248\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Visits</text><text data-operating-metric=\"visits\" x=\"162.5\" y=\"1290\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">2.5B</text><text x=\"162.5\" y=\"1330\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">(2%) Y/Y</text></g><g><rect x=\"260\" y=\"1194\" width=\"589\" height=\"164\" rx=\"34\" fill=\"#011751\"/><text x=\"554.5\" y=\"1248\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Average Monthly Unique Users</text><text data-operating-metric=\"monthly-unique-users\" x=\"554.5\" y=\"1290\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">239M</text><text x=\"554.5\" y=\"1330\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">(2%) Y/Y</text></g>",
  "operatingMetrics": [
    {
      "id": "visits",
      "value": "2500000000",
      "literal": "2.5B",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    },
    {
      "id": "monthly-unique-users",
      "value": "239000000",
      "literal": "239M",
      "unit": "count",
      "currency": null,
      "comparison": "eq"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "zillow-company-wordmark",
      "href": "data/assets/raster-annotations/zillow/company-wordmark-q1-fy26.png",
      "x": 553,
      "y": 259,
      "width": 690,
      "height": 103
    },
    {
      "key": "zillow-premier-agent-wordmark",
      "href": "data/assets/raster-annotations/zillow/premier-agent-wordmark-q1-fy26.png",
      "x": 54,
      "y": 423,
      "width": 340,
      "height": 121
    },
    {
      "key": "zillow-rentals-wordmark",
      "href": "data/assets/raster-annotations/zillow/rentals-wordmark-q1-fy26.png",
      "x": 89,
      "y": 719,
      "width": 272,
      "height": 118
    },
    {
      "key": "zillow-home-loans-wordmark",
      "href": "data/assets/raster-annotations/zillow/home-loans-wordmark-q2-fy26.png",
      "x": 77,
      "y": 923,
      "width": 316,
      "height": 99
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "residential": {
        "x": 399,
        "y": 398,
        "width": 73,
        "height": 212
      },
      "rentals": {
        "x": 399,
        "y": 740,
        "width": 73,
        "height": 97
      },
      "home_loans": {
        "x": 399,
        "y": 967,
        "width": 73,
        "height": 40
      },
      "other_revenue": {
        "x": 399,
        "y": 1138,
        "width": 73,
        "height": 7
      },
      "revenue": {
        "x": 866,
        "y": 579,
        "width": 73,
        "height": 351
      },
      "gross_profit": {
        "x": 1333,
        "y": 460,
        "width": 73,
        "height": 256
      },
      "cost_of_revenue": {
        "x": 1333,
        "y": 916,
        "width": 73,
        "height": 97
      },
      "operating_loss": {
        "x": 1638,
        "y": 906,
        "width": 73,
        "height": 6
      },
      "operating_expenses": {
        "x": 1801,
        "y": 585,
        "width": 73,
        "height": 260
      },
      "sm": {
        "x": 2268,
        "y": 340,
        "width": 73,
        "height": 114
      },
      "product": {
        "x": 2268,
        "y": 590,
        "width": 73,
        "height": 72
      },
      "ga": {
        "x": 2268,
        "y": 838,
        "width": 73,
        "height": 60
      },
      "other_expense": {
        "x": 2268,
        "y": 1097,
        "width": 73,
        "height": 17
      }
    },
    "labels": {
      "residential": {
        "blocks": [
          {
            "x": 435,
            "top": 301.59,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 340,
            "top": 556.4,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Residential",
                "size": 40,
                "weight": 800
              }
            ],
            "semanticRole": "source-offset-side-label"
          }
        ]
      },
      "rentals": {
        "blocks": [
          {
            "x": 435,
            "top": 644.59,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+31% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "home_loans": {
        "blocks": [
          {
            "x": 435,
            "top": 871.59,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+75% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 435,
            "top": 1041.59,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "Flat Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 287,
            "top": 1122.4,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Other",
                "size": 40,
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
            "x": 902.5,
            "top": 432.4,
            "anchor": "middle",
            "lineGap": 13,
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
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1369.5,
            "top": 272.4,
            "anchor": "middle",
            "lineGap": 13,
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
                "text": "73% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1369.5,
            "top": 1029.35,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Cost of",
                "size": 35,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 35,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1677,
            "top": 929.4,
            "anchor": "middle",
            "lineGap": 13,
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
                "text": "(1%) margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
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
            "x": 1837.5,
            "top": 422.4,
            "anchor": "middle",
            "lineGap": 13,
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
      "sm": {
        "blocks": [
          {
            "x": 2466,
            "top": 324.11,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "32% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "product": {
        "blocks": [
          {
            "x": 2466,
            "top": 563.11,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Product",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "20% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2466,
            "top": 809.11,
            "anchor": "middle",
            "lineGap": 11,
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
              },
              {
                "text": "17% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2466,
            "top": 1068.11,
            "anchor": "middle",
            "lineGap": 13,
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
      "id": "residential",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Residential",
      "value": 465,
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#011751",
      "labelColor": "#011751",
      "linkTint": "#858fa9"
    },
    {
      "id": "rentals",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Rentals",
      "value": 209,
      "notes": [
        "+31% Y/Y"
      ],
      "color": "#011751",
      "labelColor": "#011751",
      "linkTint": "#858fa9"
    },
    {
      "id": "home_loans",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Home Loans",
      "value": 84,
      "notes": [
        "+75% Y/Y"
      ],
      "color": "#011751",
      "labelColor": "#011751",
      "linkTint": "#858fa9"
    },
    {
      "id": "other_revenue",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Other",
      "value": 14,
      "notes": [
        "Flat Y/Y"
      ],
      "color": "#011751",
      "labelColor": "#011751",
      "linkTint": "#858fa9"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 4,
      "type": "hub",
      "label": "Revenue",
      "value": 772,
      "notes": [
        "+18% Y/Y"
      ],
      "color": "#011751",
      "labelColor": "#011751",
      "linkTint": "#858fa9"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 5,
      "type": "profit",
      "label": "Gross profit",
      "value": 562,
      "notes": [
        "73% margin",
        "(2pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 6,
      "type": "cost",
      "label": [
        "Cost",
        "of",
        "revenue"
      ],
      "value": 210,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_loss",
      "col": 3,
      "order": 7,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -10,
      "notes": [
        "(1%) margin",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 572,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 9,
      "type": "cost",
      "label": "S&M",
      "value": 249,
      "notes": [
        "32% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "product",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": "Product",
      "value": 156,
      "notes": [
        "20% of revenue",
        "(3pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 11,
      "type": "cost",
      "label": "G&A",
      "value": 131,
      "notes": [
        "17% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_expense",
      "col": 5,
      "order": 12,
      "type": "cost",
      "label": "Other",
      "value": 36,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    }
  ],
  "links": [
    {
      "source": "residential",
      "target": "revenue",
      "value": 465,
      "sourceWidth": 212,
      "targetWidth": 212,
      "y0": 504,
      "y1": 685,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "rentals",
      "target": "revenue",
      "value": 209,
      "sourceWidth": 97,
      "targetWidth": 97,
      "y0": 788.5,
      "y1": 839.5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "home_loans",
      "target": "revenue",
      "value": 84,
      "sourceWidth": 40,
      "targetWidth": 37,
      "y0": 987,
      "y1": 906.5,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 14,
      "sourceWidth": 7,
      "targetWidth": 5,
      "y0": 1141.5,
      "y1": 927.5,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 562,
      "sourceWidth": 256,
      "targetWidth": 256,
      "y0": 707,
      "y1": 588,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 210,
      "sourceWidth": 95,
      "targetWidth": 97,
      "y0": 882.5,
      "y1": 964.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 562,
      "sourceWidth": 256,
      "targetWidth": 256,
      "y0": 588,
      "y1": 713,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 10,
      "sourceWidth": 6,
      "targetWidth": 4,
      "y0": 909,
      "y1": 843,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585",
      "curve": {
        "x0": 1711,
        "x1": 1801,
        "c1x": 1757,
        "c1y": 909,
        "c2x": 1751,
        "c2y": 843
      }
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 249,
      "sourceWidth": 114,
      "targetWidth": 114,
      "y0": 642,
      "y1": 397,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "product",
      "value": 156,
      "sourceWidth": 72,
      "targetWidth": 72,
      "y0": 735,
      "y1": 626,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 131,
      "sourceWidth": 60,
      "targetWidth": 60,
      "y0": 801,
      "y1": 868,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_expense",
      "value": 36,
      "sourceWidth": 14,
      "targetWidth": 17,
      "y0": 838,
      "y1": 1105.5,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "Zillow · 2026 财年第二季度",
      "meta": {
        "title": "Zillow 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "titleSize": 108
      },
      "nodes": {
        "residential": {
          "label": "住宅业务",
          "notes": [
            "同比 +7%"
          ]
        },
        "rentals": {
          "label": "租赁",
          "notes": [
            "同比 +31%"
          ]
        },
        "home_loans": {
          "label": "住房贷款",
          "notes": [
            "同比 +75%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比持平"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +18%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 73%",
            "同比 (2 个百分点)"
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
            "利润率 (1%)",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 32%",
            "同比 (2 个百分点)"
          ]
        },
        "product": {
          "label": "产品",
          "notes": [
            "占收入 20%",
            "同比 (3 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 17%",
            "同比 (2 个百分点)"
          ]
        },
        "other_expense": {
          "label": "其他",
          "notes": []
        }
      },
      "annotationsSvg": "<g><rect x=\"81\" y=\"1194\" width=\"163\" height=\"164\" rx=\"34\" fill=\"#011751\"/><text x=\"162.5\" y=\"1248\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">访问次数</text><text data-operating-metric=\"visits\" x=\"162.5\" y=\"1290\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">2.5B</text><text x=\"162.5\" y=\"1330\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">同比 (2%)</text></g><g><rect x=\"260\" y=\"1194\" width=\"589\" height=\"164\" rx=\"34\" fill=\"#011751\"/><text x=\"554.5\" y=\"1248\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">月均独立用户</text><text data-operating-metric=\"monthly-unique-users\" x=\"554.5\" y=\"1290\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">239M</text><text x=\"554.5\" y=\"1330\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">同比 (2%)</text></g>",
      "layout": {
        "labels": {
          "residential": {
            "blocks": [
              {
                "x": 435,
                "top": 301.59,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 340,
                "top": 556.4,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "住宅业务",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "semanticRole": "source-offset-side-label"
              }
            ]
          },
          "rentals": {
            "blocks": [
              {
                "x": 435,
                "top": 644.59,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +31%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "home_loans": {
            "blocks": [
              {
                "x": 435,
                "top": 871.59,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +75%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 435,
                "top": 1041.59,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比持平",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 287,
                "top": 1122.4,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
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
                "x": 902.5,
                "top": 432.4,
                "anchor": "middle",
                "lineGap": 13,
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
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1369.5,
                "top": 272.4,
                "anchor": "middle",
                "lineGap": 13,
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
                    "text": "利润率 73%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1369.5,
                "top": 1029.35,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 35,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 35,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1677,
                "top": 929.4,
                "anchor": "middle",
                "lineGap": 13,
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
                    "text": "利润率 (1%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
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
                "x": 1837.5,
                "top": 422.4,
                "anchor": "middle",
                "lineGap": 13,
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
          "sm": {
            "blocks": [
              {
                "x": 2466,
                "top": 324.11,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 32%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "product": {
            "blocks": [
              {
                "x": 2466,
                "top": 563.11,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "产品",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "占收入 20%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2466,
                "top": 809.11,
                "anchor": "middle",
                "lineGap": 11,
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
                  },
                  {
                    "text": "占收入 17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2466,
                "top": 1068.11,
                "anchor": "middle",
                "lineGap": 13,
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
      }
    }
  }
});
