(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "health-equity-q4-fy23",
  "name": "HealthEquity · Q4 FY23",
  "company": "HealthEquity",
  "meta": {
    "company": "HealthEquity",
    "title": "HealthEquity Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/health-equity-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 123,
    "titleWeight": 800,
    "titleTextLength": 2510,
    "periodX": 2480,
    "periodY": 251,
    "periodNoteY": 294
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#5b2e85",
        "label": "#703e9d"
      },
      "hub": {
        "node": "#5b2e85",
        "label": "#5b2e85"
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
      "source": "#ae9ac1",
      "hub": "#ae9ac1",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 9
    }
  },
  "nodes": [
    {
      "id": "service",
      "label": "Service",
      "value": 114.0,
      "valueText": "$114M",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+2% Y/Y",
        "26% gross margin"
      ]
    },
    {
      "id": "custodial",
      "label": "Custodial",
      "value": 84.0,
      "valueText": "$84M",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+44% Y/Y",
        "90% gross margin"
      ]
    },
    {
      "id": "interchange",
      "label": "Interchange",
      "value": 36.0,
      "valueText": "$36M",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+10% Y/Y",
        "84% gross margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 234.0,
      "valueText": "$234M",
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+15% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 134.0,
      "valueText": "$134M",
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "57% margin",
        "+7pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 100.0,
      "valueText": "($100M)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 13.0,
      "valueText": "$13M",
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "6% margin",
        "+6pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 121.0,
      "valueText": "($121M)",
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": []
    },
    {
      "id": "net_loss",
      "label": "Net loss",
      "value": 0.2,
      "valueText": "($0.2M)",
      "type": "cost",
      "col": 4,
      "order": 8,
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.2,
      "valueText": "($0.2M)",
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": []
    },
    {
      "id": "other_losses",
      "label": "Other losses",
      "value": 13.0,
      "valueText": "($13M)",
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": []
    },
    {
      "id": "technology_development",
      "label": "Technology & development",
      "value": 53.0,
      "valueText": "($53M)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": []
    },
    {
      "id": "general_admin",
      "label": "General & admin",
      "value": 21.0,
      "valueText": "($21M)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": []
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 23.0,
      "valueText": "($23M)",
      "type": "cost",
      "col": 4,
      "order": 13,
      "notes": []
    },
    {
      "id": "sales_marketing",
      "label": "Sales & marketing",
      "value": 19.0,
      "valueText": "($19M)",
      "type": "cost",
      "col": 4,
      "order": 14,
      "notes": []
    },
    {
      "id": "merger_costs",
      "label": "Merger costs",
      "value": 5.0,
      "valueText": "($5M)",
      "type": "cost",
      "col": 4,
      "order": 15,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "service",
      "target": "revenue",
      "value": 114,
      "sourceWidth": 190,
      "targetWidth": 190,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "custodial",
      "target": "revenue",
      "value": 84,
      "sourceWidth": 140,
      "targetWidth": 140,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "interchange",
      "target": "revenue",
      "value": 36,
      "sourceWidth": 60,
      "targetWidth": 62,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 134,
      "sourceWidth": 225,
      "targetWidth": 225,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 100,
      "sourceWidth": 167,
      "targetWidth": 167,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 13,
      "sourceWidth": 22,
      "targetWidth": 22,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 121,
      "sourceWidth": 203,
      "targetWidth": 203,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other_losses",
      "value": 12.8,
      "sourceWidth": 20,
      "targetWidth": 20,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "net_loss",
      "target": "other_losses",
      "value": 0.2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "technology_development",
      "value": 53.0,
      "sourceWidth": 88,
      "targetWidth": 88,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "general_admin",
      "value": 21.0,
      "sourceWidth": 39,
      "targetWidth": 39,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 23.0,
      "sourceWidth": 35,
      "targetWidth": 35,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sales_marketing",
      "value": 19.0,
      "sourceWidth": 32,
      "targetWidth": 32,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "merger_costs",
      "value": 5.0,
      "sourceWidth": 8,
      "targetWidth": 8,
      "sourceOrder": 4,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 1.67,
    "nodes": {
      "service": {
        "x": 367,
        "y": 391,
        "width": 73,
        "height": 190
      },
      "custodial": {
        "x": 367,
        "y": 741,
        "width": 73,
        "height": 140
      },
      "interchange": {
        "x": 367,
        "y": 1053,
        "width": 73,
        "height": 60
      },
      "revenue": {
        "x": 837,
        "y": 589,
        "width": 73,
        "height": 392
      },
      "gross_profit": {
        "x": 1291,
        "y": 520,
        "width": 73,
        "height": 225
      },
      "cost_of_revenue": {
        "x": 1291,
        "y": 867,
        "width": 73,
        "height": 167
      },
      "operating_profit": {
        "x": 1764,
        "y": 428,
        "width": 73,
        "height": 22
      },
      "operating_expenses": {
        "x": 1764,
        "y": 624,
        "width": 73,
        "height": 203
      },
      "net_loss": {
        "x": 2098,
        "y": 435,
        "width": 73,
        "height": 2
      },
      "tax": {
        "x": 2236,
        "y": 640,
        "width": 73,
        "height": 2
      },
      "other_losses": {
        "x": 2236,
        "y": 513,
        "width": 73,
        "height": 22
      },
      "technology_development": {
        "x": 2236,
        "y": 745,
        "width": 73,
        "height": 88
      },
      "general_admin": {
        "x": 2236,
        "y": 916,
        "width": 73,
        "height": 39
      },
      "amortization": {
        "x": 2236,
        "y": 1032,
        "width": 73,
        "height": 35
      },
      "sales_marketing": {
        "x": 2236,
        "y": 1155,
        "width": 73,
        "height": 32
      },
      "merger_costs": {
        "x": 2236,
        "y": 1268,
        "width": 73,
        "height": 8
      }
    },
    "labels": {
      "service": {
        "blocks": [
          {
            "x": 403,
            "top": 290,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#703e9d"
              },
              {
                "text": "+2% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 334,
            "top": 460,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Service",
                "size": 39,
                "weight": 800,
                "color": "#703e9d"
              },
              {
                "text": "26% gross margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "custodial": {
        "blocks": [
          {
            "x": 403,
            "top": 646,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#703e9d"
              },
              {
                "text": "+44% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 334,
            "top": 785,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Custodial",
                "size": 39,
                "weight": 800,
                "color": "#703e9d"
              },
              {
                "text": "90% gross margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "interchange": {
        "blocks": [
          {
            "x": 403,
            "top": 955,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#703e9d"
              },
              {
                "text": "+10% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 334,
            "top": 1058,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Interchange",
                "size": 39,
                "weight": 800,
                "color": "#703e9d"
              },
              {
                "text": "84% gross margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 872,
            "top": 437,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#5b2e85"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#5b2e85"
              },
              {
                "text": "+15% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1328,
            "top": 329,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "57% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+7pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1328,
            "top": 1048,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 37,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 37,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1797,
            "top": 237,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "6% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+6pp Y/Y",
                "size": 28,
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
            "x": 1792,
            "top": 846,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 39,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 37,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_loss": {
        "blocks": [
          {
            "x": 2134.5,
            "top": 331,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net loss",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_losses": {
        "blocks": [
          {
            "x": 2434,
            "top": 499,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other losses",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2434,
            "top": 611,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "technology_development": {
        "blocks": [
          {
            "x": 2465,
            "top": 744,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Technology &",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "development",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "general_admin": {
        "blocks": [
          {
            "x": 2465,
            "top": 915,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "General & admin",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2465,
            "top": 1028,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Amortization",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sales_marketing": {
        "blocks": [
          {
            "x": 2465,
            "top": 1153,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Sales & marketing",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "merger_costs": {
        "blocks": [
          {
            "x": 2465,
            "top": 1254,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Merger costs",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g><rect x=\"60\" y=\"1231\" width=\"211\" height=\"148\" rx=\"30\" fill=\"#5b2e85\"/><text x=\"165.5\" y=\"1284\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">HSAs</text><text data-operating-metric=\"hsas\" x=\"165.5\" y=\"1323\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">7.9M</text><text x=\"165.5\" y=\"1355\" text-anchor=\"middle\" font-size=\"25\" fill=\"#ffffff\">+11% Y/Y</text></g><g><rect x=\"283\" y=\"1231\" width=\"275\" height=\"148\" rx=\"30\" fill=\"#5b2e85\"/><text x=\"420.5\" y=\"1284\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">HSA Assets</text><text data-operating-metric=\"hsa-assets\" x=\"420.5\" y=\"1323\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">$22.1B</text><text x=\"420.5\" y=\"1355\" text-anchor=\"middle\" font-size=\"25\" fill=\"#ffffff\">+13% Y/Y</text></g><g><rect x=\"571\" y=\"1231\" width=\"332\" height=\"148\" rx=\"30\" fill=\"#5b2e85\"/><text x=\"737.0\" y=\"1284\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">Total Accounts</text><text data-operating-metric=\"total-accounts\" x=\"737.0\" y=\"1323\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">14.9M</text><text x=\"737.0\" y=\"1355\" text-anchor=\"middle\" font-size=\"25\" fill=\"#ffffff\">+4% Y/Y</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark-q4-fy23",
      "href": "data/assets/raster-annotations/health-equity/company-wordmark-q4-fy23.png",
      "x": 594,
      "y": 273,
      "width": 576,
      "height": 90,
      "clearance": true
    }
  ],
  "operatingMetrics": [
    {
      "id": "hsas",
      "value": "7900000",
      "unit": "count",
      "currency": null,
      "literal": "7.9M",
      "comparison": "eq"
    },
    {
      "id": "hsa-assets",
      "value": "22.1",
      "unit": "B",
      "currency": "USD",
      "literal": "$22.1B",
      "comparison": "eq"
    },
    {
      "id": "total-accounts",
      "value": "14900000",
      "unit": "count",
      "currency": null,
      "literal": "14.9M",
      "comparison": "eq"
    }
  ],
  "i18n": {
    "zh": {
      "name": "HealthEquity · 2023 财年第四季度",
      "meta": {
        "title": "HealthEquity 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 1 月",
        "titleTextLength": 2050
      },
      "nodes": {
        "service": {
          "label": "服务",
          "notes": [
            "同比 +2%",
            "毛利率 26%"
          ]
        },
        "custodial": {
          "label": "托管",
          "notes": [
            "同比 +44%",
            "毛利率 90%"
          ]
        },
        "interchange": {
          "label": "交换费",
          "notes": [
            "同比 +10%",
            "毛利率 84%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +15%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 57%",
            "同比 +7 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 6%",
            "同比 +6 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_loss": {
          "label": "净亏损",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_losses": {
          "label": "其他亏损",
          "notes": []
        },
        "technology_development": {
          "label": "技术与开发",
          "notes": []
        },
        "general_admin": {
          "label": "一般及行政",
          "notes": []
        },
        "amortization": {
          "label": "摊销",
          "notes": []
        },
        "sales_marketing": {
          "label": "销售与市场",
          "notes": []
        },
        "merger_costs": {
          "label": "并购成本",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "service": {
            "blocks": [
              {
                "x": 403,
                "top": 290,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#703e9d"
                  },
                  {
                    "text": "同比 +2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 334,
                "top": 460,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "服务",
                    "size": 39,
                    "weight": 800,
                    "color": "#703e9d"
                  },
                  {
                    "text": "毛利率 26%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "custodial": {
            "blocks": [
              {
                "x": 403,
                "top": 646,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#703e9d"
                  },
                  {
                    "text": "同比 +44%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 334,
                "top": 785,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "托管",
                    "size": 39,
                    "weight": 800,
                    "color": "#703e9d"
                  },
                  {
                    "text": "毛利率 90%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "interchange": {
            "blocks": [
              {
                "x": 403,
                "top": 955,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#703e9d"
                  },
                  {
                    "text": "同比 +10%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 334,
                "top": 1058,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "交换费",
                    "size": 39,
                    "weight": 800,
                    "color": "#703e9d"
                  },
                  {
                    "text": "毛利率 84%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 872,
                "top": 437,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#5b2e85"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#5b2e85"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1328,
                "top": 329,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 57%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +7 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1328,
                "top": 1048,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 37,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1797,
                "top": 237,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 6%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 28,
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
                "x": 1792,
                "top": 846,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 37,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_loss": {
            "blocks": [
              {
                "x": 2134.5,
                "top": 331,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净亏损",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_losses": {
            "blocks": [
              {
                "x": 2434,
                "top": 499,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他亏损",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2434,
                "top": 611,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "technology_development": {
            "blocks": [
              {
                "x": 2465,
                "top": 744,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "开发",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "general_admin": {
            "blocks": [
              {
                "x": 2465,
                "top": 915,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2465,
                "top": 1028,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sales_marketing": {
            "blocks": [
              {
                "x": 2465,
                "top": 1153,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "merger_costs": {
            "blocks": [
              {
                "x": 2465,
                "top": 1254,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "并购成本",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"60\" y=\"1231\" width=\"211\" height=\"148\" rx=\"30\" fill=\"#5b2e85\"/><text x=\"165.5\" y=\"1284\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">HSA 账户</text><text data-operating-metric=\"hsas\" x=\"165.5\" y=\"1323\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">7.9M</text><text x=\"165.5\" y=\"1355\" text-anchor=\"middle\" font-size=\"25\" fill=\"#ffffff\">同比 +11%</text></g><g><rect x=\"283\" y=\"1231\" width=\"275\" height=\"148\" rx=\"30\" fill=\"#5b2e85\"/><text x=\"420.5\" y=\"1284\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">HSA 资产</text><text data-operating-metric=\"hsa-assets\" x=\"420.5\" y=\"1323\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">$22.1B</text><text x=\"420.5\" y=\"1355\" text-anchor=\"middle\" font-size=\"25\" fill=\"#ffffff\">同比 +13%</text></g><g><rect x=\"571\" y=\"1231\" width=\"332\" height=\"148\" rx=\"30\" fill=\"#5b2e85\"/><text x=\"737.0\" y=\"1284\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">总账户数</text><text data-operating-metric=\"total-accounts\" x=\"737.0\" y=\"1323\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\">14.9M</text><text x=\"737.0\" y=\"1355\" text-anchor=\"middle\" font-size=\"25\" fill=\"#ffffff\">同比 +4%</text></g>"
    }
  }
});})();
