(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "lyft-q2-fy25",
  "name": "Lyft · Q2 FY25",
  "company": "Lyft",
  "meta": {
    "company": "Lyft",
    "title": "Lyft Q2 FY25 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/lyft-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 1968,
    "logoY": 258,
    "logoX": 750
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
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "<g><text x=\"180\" y=\"767\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"800\">Rideshare</text><text x=\"180\" y=\"1120\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"800\">Rentals</text><g><rect x=\"31\" y=\"1202\" width=\"309\" height=\"147\" rx=\"29\" fill=\"#000\"/><text x=\"185.5\" y=\"1254\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Active Riders</text><text data-operating-metric=\"active_riders\" x=\"185.5\" y=\"1294\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">26.1M</text><text x=\"185.5\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+10% Y/Y</text></g><g><rect x=\"353\" y=\"1202\" width=\"169\" height=\"147\" rx=\"29\" fill=\"#000\"/><text x=\"437.5\" y=\"1254\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Ride</text><text data-operating-metric=\"rides\" x=\"437.5\" y=\"1294\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">235M</text><text x=\"437.5\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+14% Y/Y</text></g><g><rect x=\"536\" y=\"1202\" width=\"332\" height=\"147\" rx=\"29\" fill=\"#000\"/><text x=\"702.0\" y=\"1254\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Gross Bookings</text><text data-operating-metric=\"gross_bookings\" x=\"702.0\" y=\"1294\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$4.5B</text><text x=\"702.0\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+12% Y/Y</text></g></g>",
  "layout": {
    "scale": 0.229,
    "nodes": {
      "rideshare": {
        "x": 349,
        "y": 517,
        "width": 73,
        "height": 340
      },
      "rentals": {
        "x": 349,
        "y": 1093,
        "width": 73,
        "height": 26
      },
      "revenue": {
        "x": 816,
        "y": 648,
        "width": 73,
        "height": 366
      },
      "gross_profit": {
        "x": 1282,
        "y": 518,
        "width": 73,
        "height": 151
      },
      "cost_of_revenue": {
        "x": 1278,
        "y": 898,
        "width": 73,
        "height": 216
      },
      "operating_profit": {
        "x": 1751,
        "y": 421,
        "width": 73,
        "height": 1
      },
      "operating_expenses": {
        "x": 1751,
        "y": 633,
        "width": 73,
        "height": 151
      },
      "other": {
        "x": 2091,
        "y": 400,
        "width": 73,
        "height": 8
      },
      "net_profit": {
        "x": 2217,
        "y": 312,
        "width": 73,
        "height": 10
      },
      "ga": {
        "x": 2217,
        "y": 686,
        "width": 73,
        "height": 55
      },
      "sm": {
        "x": 2217,
        "y": 872,
        "width": 73,
        "height": 45
      },
      "operations_support": {
        "x": 2217,
        "y": 1057,
        "width": 73,
        "height": 28
      },
      "rnd": {
        "x": 2217,
        "y": 1237,
        "width": 73,
        "height": 27
      }
    },
    "labels": {
      "rideshare": {
        "blocks": [
          {
            "x": 390,
            "top": 423,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "rentals": {
        "blocks": [
          {
            "x": 390,
            "top": 997,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 853,
            "top": 500,
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
                "size": 40,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 29,
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
            "x": 1318,
            "top": 332,
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
                "size": 40,
                "weight": 400
              },
              {
                "text": "41% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 29,
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
            "x": 1318,
            "top": 1133,
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
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1787.5,
            "top": 233,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "0% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 29,
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
            "x": 1793,
            "top": 801,
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
                "size": 40,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2126,
            "top": 423,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2455,
            "top": 280,
            "anchor": "middle",
            "lineGap": 9,
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
                "text": "3% margin",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 29,
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
            "x": 2455,
            "top": 655,
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
                "text": "15% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2455,
            "top": 835,
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
                "text": "12% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operations_support": {
        "blocks": [
          {
            "x": 2455,
            "top": 1002,
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
                "text": "7% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2455,
            "top": 1215,
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
                "text": "7% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#666666"
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
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Rideshare",
      "value": 1477,
      "valueText": "$1,477M",
      "color": "#ff00bf",
      "labelColor": "#000000",
      "linkTint": "#ea78d1",
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "rentals",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Rentals",
      "value": 111,
      "valueText": "$111M",
      "color": "#ff00bf",
      "labelColor": "#000000",
      "linkTint": "#ea78d1",
      "notes": [
        "(3%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 1588,
      "valueText": "$1,588M",
      "color": "#ff00bf",
      "labelColor": "#000000",
      "linkTint": "#ea78d1",
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 652,
      "valueText": "$652M",
      "color": "#27a22a",
      "labelColor": "#008f47",
      "linkTint": "#9ccc9a",
      "notes": [
        "41% margin",
        "(2pp) Y/Y"
      ]
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
      "value": 936,
      "valueText": "($936M)",
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 2,
      "valueText": "$2M",
      "color": "#27a22a",
      "labelColor": "#008f47",
      "linkTint": "#9ccc9a",
      "notes": [
        "0% margin",
        "+2pp Y/Y"
      ]
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
      "value": 650,
      "valueText": "($650M)",
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082"
    },
    {
      "id": "other",
      "col": 4,
      "order": 1,
      "type": "profit",
      "label": "Other",
      "value": 38,
      "valueText": "$38M",
      "color": "#9ccc9a",
      "labelColor": "#008f47",
      "linkTint": "#9ccc9a"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 40,
      "valueText": "$40M",
      "color": "#27a22a",
      "labelColor": "#008f47",
      "linkTint": "#9ccc9a",
      "notes": [
        "3% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "General & admin",
      "value": 232,
      "valueText": "($232M)",
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082",
      "notes": [
        "15% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "Sales & marketing",
      "value": 191,
      "valueText": "($191M)",
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082",
      "notes": [
        "12% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "operations_support",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": [
        "Operations",
        "& support"
      ],
      "value": 117,
      "valueText": "($117M)",
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082",
      "notes": [
        "7% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 5,
      "type": "cost",
      "label": "R&D",
      "value": 109,
      "valueText": "($109M)",
      "color": "#d50000",
      "labelColor": "#991500",
      "linkTint": "#df8082",
      "notes": [
        "7% of revenue",
        "+0pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "rideshare",
      "target": "revenue",
      "value": 1477,
      "sourceWidth": 340,
      "targetWidth": 340,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#f785db"
    },
    {
      "source": "rentals",
      "target": "revenue",
      "value": 111,
      "sourceWidth": 26,
      "targetWidth": 26,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f785db"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 652,
      "sourceWidth": 151,
      "targetWidth": 151,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 936,
      "sourceWidth": 214,
      "targetWidth": 216,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 650,
      "sourceWidth": 150,
      "targetWidth": 151,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 38,
      "sourceWidth": 8,
      "targetWidth": 9,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 232,
      "sourceWidth": 54,
      "targetWidth": 55,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 191,
      "sourceWidth": 44,
      "targetWidth": 45,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "operations_support",
      "value": 117,
      "sourceWidth": 27,
      "targetWidth": 28,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 109,
      "sourceWidth": 26,
      "targetWidth": 27,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Lyft · 2025 财年第二季度",
      "meta": {
        "title": "Lyft 2025 财年第二季度利润表",
        "titleSize": 112,
        "titleTextLength": 1360
      },
      "annotationsSvg": "<g><text x=\"180\" y=\"767\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"800\">网约车</text><text x=\"180\" y=\"1120\" text-anchor=\"middle\" font-size=\"40\" font-weight=\"800\">租赁</text><g><rect x=\"31\" y=\"1202\" width=\"309\" height=\"147\" rx=\"29\" fill=\"#000\"/><text x=\"185.5\" y=\"1254\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">活跃乘客</text><text data-operating-metric=\"active_riders\" x=\"185.5\" y=\"1294\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">26.1M</text><text x=\"185.5\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +10%</text></g><g><rect x=\"353\" y=\"1202\" width=\"169\" height=\"147\" rx=\"29\" fill=\"#000\"/><text x=\"437.5\" y=\"1254\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">行程</text><text data-operating-metric=\"rides\" x=\"437.5\" y=\"1294\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">235M</text><text x=\"437.5\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +14%</text></g><g><rect x=\"536\" y=\"1202\" width=\"332\" height=\"147\" rx=\"29\" fill=\"#000\"/><text x=\"702.0\" y=\"1254\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">总预订额</text><text data-operating-metric=\"gross_bookings\" x=\"702.0\" y=\"1294\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$4.5B</text><text x=\"702.0\" y=\"1326\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +12%</text></g></g>",
      "nodes": {
        "rideshare": {
          "label": "网约车",
          "notes": [
            "同比 +12%"
          ]
        },
        "rentals": {
          "label": "租赁",
          "notes": [
            "同比 (3%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 41%",
            "同比 (2 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 0%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "other": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 3%",
            "同比 +2 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 15%",
            "同比 (3 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 12%",
            "同比 (0 个百分点)"
          ]
        },
        "operations_support": {
          "label": [
            "运营",
            "与支持"
          ],
          "notes": [
            "占收入 7%",
            "同比 (1 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 7%",
            "同比 +0 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "rideshare": {
            "blocks": [
              {
                "x": 390,
                "top": 423,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rentals": {
            "blocks": [
              {
                "x": 390,
                "top": 997,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 853,
                "top": 500,
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
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 29,
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
                "x": 1318,
                "top": 332,
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
                    "size": 40,
                    "weight": 400
                  },
                  {
                    "text": "利润率 41%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 29,
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
                "x": 1318,
                "top": 1133,
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
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1787.5,
                "top": 233,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "利润率 0%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 29,
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
                "x": 1793,
                "top": 801,
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
                    "size": 40,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2126,
                "top": 423,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2455,
                "top": 280,
                "anchor": "middle",
                "lineGap": 9,
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
                    "text": "利润率 3%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 29,
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
                "x": 2455,
                "top": 655,
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
                    "text": "占收入 15%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2455,
                "top": 835,
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
                    "text": "占收入 12%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operations_support": {
            "blocks": [
              {
                "x": 2455,
                "top": 1002,
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
                    "text": "占收入 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2455,
                "top": 1215,
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
                    "text": "占收入 7%",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "rasterAnnotations": [
    {
      "id": "logo",
      "src": "data/assets/raster-annotations/lyft/lyft-company-app-logo-q2-fy25.png",
      "x": 750,
      "y": 258,
      "width": 207,
      "height": 205
    },
    {
      "id": "car",
      "src": "data/assets/raster-annotations/lyft/lyft-rideshare-car-cluster-q2-fy25.png",
      "x": 31,
      "y": 600,
      "width": 291,
      "height": 127
    },
    {
      "id": "phones",
      "src": "data/assets/raster-annotations/lyft/lyft-rentals-phone-cluster-q2-fy25.png",
      "x": 91,
      "y": 897,
      "width": 185,
      "height": 179
    }
  ],
  "operatingMetrics": [
    {
      "id": "active_riders",
      "value": "26100000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "26.1M"
    },
    {
      "id": "rides",
      "value": "235000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "235M"
    },
    {
      "id": "gross_bookings",
      "value": "4.5",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$4.5B"
    }
  ]
});})();
