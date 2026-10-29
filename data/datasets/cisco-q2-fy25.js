window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "cisco-q2-fy25",
  "name": "Cisco · Q2 FY25",
  "company": "Cisco",
  "meta": {
    "company": "Cisco",
    "title": "Cisco Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Ending Dec. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/cisco-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2048,
    "periodX": 2443,
    "periodY": 254,
    "periodNoteY": 296,
    "logoWidth": 600,
    "logoHeight": 245,
    "logoY": 271,
    "logoViewBox": "0 0 600 245",
    "logoSvg": "\n    <g fill=\"#00a2df\">\n      <rect x=\"82\" y=\"66\" width=\"20\" height=\"39\" rx=\"10\"/><rect x=\"134\" y=\"38\" width=\"20\" height=\"67\" rx=\"10\"/>\n      <rect x=\"186\" y=\"0\" width=\"20\" height=\"120\" rx=\"10\"/><rect x=\"238\" y=\"38\" width=\"20\" height=\"67\" rx=\"10\"/>\n      <rect x=\"290\" y=\"66\" width=\"20\" height=\"39\" rx=\"10\"/><rect x=\"342\" y=\"38\" width=\"20\" height=\"67\" rx=\"10\"/>\n      <rect x=\"394\" y=\"0\" width=\"20\" height=\"120\" rx=\"10\"/><rect x=\"446\" y=\"38\" width=\"20\" height=\"67\" rx=\"10\"/>\n      <rect x=\"498\" y=\"66\" width=\"20\" height=\"39\" rx=\"10\"/>\n    </g>\n    <text x=\"300\" y=\"232\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"108\" textLength=\"365\" lengthAdjust=\"spacingAndGlyphs\" font-weight=\"800\" fill=\"#00a2df\">CISCO</text>",
    "logoX": 865
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#00a2df",
        "label": "#00a2df"
      },
      "hub": {
        "node": "#00a2df",
        "label": "#00a2df"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#9c1200"
      }
    },
    "linkTint": {
      "source": "#85cee9",
      "hub": "#85cee9",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "nodeRadius": 0,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "layout": {
    "scale": 16.2,
    "nodes": {
      "networking": {
        "x": 380,
        "y": 503,
        "width": 73,
        "height": 154
      },
      "security": {
        "x": 380,
        "y": 807,
        "width": 73,
        "height": 48
      },
      "collaboration": {
        "x": 380,
        "y": 1005,
        "width": 73,
        "height": 23
      },
      "observability": {
        "x": 380,
        "y": 1178,
        "width": 73,
        "height": 6
      },
      "products": {
        "x": 751,
        "y": 598,
        "width": 73,
        "height": 230
      },
      "services": {
        "x": 753,
        "y": 1056,
        "width": 73,
        "height": 85
      },
      "revenue": {
        "x": 1130,
        "y": 695,
        "width": 73,
        "height": 315
      },
      "gross_profit": {
        "x": 1503,
        "y": 612,
        "width": 73,
        "height": 204
      },
      "cost_of_sales": {
        "x": 1511,
        "y": 1007,
        "width": 73,
        "height": 110
      },
      "product_cost_of_sales": {
        "x": 1724,
        "y": 1060,
        "width": 73,
        "height": 84
      },
      "services_cost_of_sales": {
        "x": 1719,
        "y": 1227,
        "width": 73,
        "height": 26
      },
      "operating_profit": {
        "x": 1874,
        "y": 516,
        "width": 73,
        "height": 70
      },
      "operating_expenses": {
        "x": 1874,
        "y": 747,
        "width": 73,
        "height": 134
      },
      "net_profit": {
        "x": 2247,
        "y": 408,
        "width": 73,
        "height": 55
      },
      "tax": {
        "x": 2247,
        "y": 641,
        "width": 73,
        "height": 10
      },
      "sm": {
        "x": 2247,
        "y": 844,
        "width": 73,
        "height": 61
      },
      "rnd": {
        "x": 2247,
        "y": 1004,
        "width": 73,
        "height": 52
      },
      "ga": {
        "x": 2247,
        "y": 1153,
        "width": 73,
        "height": 17
      },
      "amortization": {
        "x": 2247,
        "y": 1271,
        "width": 73,
        "height": 6
      },
      "other_expense": {
        "x": 2247,
        "y": 747,
        "width": 73,
        "height": 5
      }
    },
    "labels": {
      "networking": {
        "blocks": [
          {
            "x": 416,
            "top": 411,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a2df"
              },
              {
                "text": "(3%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 350,
            "top": 554,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Networking",
                "size": 40,
                "weight": 800,
                "color": "#00a2df"
              }
            ]
          }
        ]
      },
      "security": {
        "blocks": [
          {
            "x": 416,
            "top": 715,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a2df"
              },
              {
                "text": "+117% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 340,
            "top": 810,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Security",
                "size": 40,
                "weight": 800,
                "color": "#00a2df"
              }
            ]
          }
        ]
      },
      "collaboration": {
        "blocks": [
          {
            "x": 416,
            "top": 913,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a2df"
              },
              {
                "text": "+1% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 340,
            "top": 994,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Collaboration",
                "size": 40,
                "weight": 800,
                "color": "#00a2df"
              }
            ]
          }
        ]
      },
      "observability": {
        "blocks": [
          {
            "x": 416,
            "top": 1086,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a2df"
              },
              {
                "text": "+47% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 340,
            "top": 1160,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Observability",
                "size": 40,
                "weight": 800,
                "color": "#00a2df"
              }
            ]
          }
        ]
      },
      "products": {
        "blocks": [
          {
            "x": 785,
            "top": 452,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Products",
                "size": 40,
                "weight": 800,
                "color": "#00a2df"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a2df"
              },
              {
                "text": "+11% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 787,
            "top": 1160,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Services",
                "size": 40,
                "weight": 800,
                "color": "#00a2df"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a2df"
              },
              {
                "text": "+6% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1165,
            "top": 550,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#00a2df"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#00a2df"
              },
              {
                "text": "+9% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1545,
            "top": 429,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#009653"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#009653"
              },
              {
                "text": "65% margin",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1540,
            "top": 1134,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "sales",
                "size": 40,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#9c1200"
              }
            ]
          }
        ]
      },
      "product_cost_of_sales": {
        "blocks": [
          {
            "x": 1912,
            "top": 1063,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Products",
                "size": 32,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#9c1200"
              },
              {
                "text": "64% gross margin",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "services_cost_of_sales": {
        "blocks": [
          {
            "x": 1912,
            "top": 1206,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Services",
                "size": 32,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#9c1200"
              },
              {
                "text": "69% gross margin",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1913,
            "top": 333,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#009653"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#009653"
              },
              {
                "text": "22% margin",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1910,
            "top": 898,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#9c1200"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2444,
            "top": 369,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#009653"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#009653"
              },
              {
                "text": "17% margin",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2444,
            "top": 605,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#9c1200"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2444,
            "top": 840,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M",
                "size": 32,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#9c1200"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2444,
            "top": 981,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#9c1200"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2444,
            "top": 1111,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 32,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#9c1200"
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2444,
            "top": 1236,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Amortization",
                "size": 32,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#9c1200"
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2444,
            "top": 705,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": "#9c1200"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#9c1200"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "networking",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Networking",
      "value": 6.8,
      "notes": [
        "(3%) Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$6.8B"
    },
    {
      "id": "security",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Security",
      "value": 2.1,
      "notes": [
        "+117% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$2.1B"
    },
    {
      "id": "collaboration",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Collaboration",
      "value": 1,
      "notes": [
        "+1% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$1.0B"
    },
    {
      "id": "observability",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Observability",
      "value": 0.3,
      "notes": [
        "+47% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$0.3B"
    },
    {
      "id": "products",
      "col": 1,
      "order": 4,
      "type": "source",
      "label": "Products",
      "value": 10.2,
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$10.2B"
    },
    {
      "id": "services",
      "col": 1,
      "order": 5,
      "type": "source",
      "label": "Services",
      "value": 3.8,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$3.8B"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 6,
      "type": "hub",
      "label": "Revenue",
      "value": 14,
      "notes": [
        "+9% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$14.0B"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 7,
      "type": "profit",
      "label": "Gross profit",
      "value": 9.1,
      "notes": [
        "65% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$9.1B"
    },
    {
      "id": "cost_of_sales",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": [
        "Cost of",
        "sales"
      ],
      "value": 4.9,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($4.9B)"
    },
    {
      "id": "product_cost_of_sales",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Products",
      "value": 3.7,
      "valueText": "($3.7B)",
      "notes": [
        "64% gross margin"
      ],
      "color": "#cc0000",
      "labelColor": "#9c1200"
    },
    {
      "id": "services_cost_of_sales",
      "col": 3,
      "order": 10,
      "type": "cost",
      "label": "Services",
      "value": 1.2,
      "notes": [
        "69% gross margin"
      ],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($1.2B)"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 11,
      "type": "profit",
      "label": "Operating profit",
      "value": 3.1,
      "notes": [
        "22% margin",
        "(2pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$3.1B"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 12,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 6,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($6.0B)"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 13,
      "type": "profit",
      "label": "Net profit",
      "value": 2.4,
      "notes": [
        "17% margin",
        "(3pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$2.4B"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 15,
      "type": "cost",
      "label": "Tax",
      "value": 0.5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($0.5B)"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 16,
      "type": "cost",
      "label": "S&M",
      "value": 2.7,
      "valueText": "($2.7B)",
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200"
    },
    {
      "id": "rnd",
      "col": 5,
      "order": 17,
      "type": "cost",
      "label": "R&D",
      "value": 2.3,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($2.3B)"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 18,
      "type": "cost",
      "label": "G&A",
      "value": 0.8,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($0.8B)"
    },
    {
      "id": "amortization",
      "col": 5,
      "order": 20,
      "type": "cost",
      "label": "Amortization",
      "value": 0.3,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($0.3B)"
    },
    {
      "id": "other_expense",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 0.2,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($0.2B)"
    }
  ],
  "links": [
    {
      "source": "networking",
      "target": "products",
      "value": 6.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 154,
      "y0": 580,
      "targetWidth": 153.33333333333334,
      "y1": 674.6666666666666,
      "linkTint": "#85cee9"
    },
    {
      "source": "security",
      "target": "products",
      "value": 2.1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 48,
      "y0": 831,
      "targetWidth": 47.79220779220779,
      "y1": 775.2294372294373,
      "linkTint": "#85cee9"
    },
    {
      "source": "collaboration",
      "target": "products",
      "value": 1,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 23,
      "y0": 1016.5,
      "targetWidth": 22.9004329004329,
      "y1": 810.5757575757575,
      "linkTint": "#85cee9"
    },
    {
      "source": "observability",
      "target": "products",
      "value": 0.3,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 6,
      "y0": 1181,
      "targetWidth": 5.974025974025974,
      "y1": 825.0129870129871,
      "linkTint": "#85cee9"
    },
    {
      "source": "products",
      "target": "revenue",
      "value": 10.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 230,
      "y0": 713,
      "targetWidth": 230,
      "y1": 810,
      "linkTint": "#85cee9"
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 3.8,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 85,
      "y0": 1098.5,
      "targetWidth": 85,
      "y1": 967.5,
      "linkTint": "#85cee9"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9.1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 204.64968152866243,
      "y0": 797.3248407643312,
      "targetWidth": 204,
      "y1": 714,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 4.9,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 110.35031847133757,
      "y0": 954.8248407643312,
      "targetWidth": 110,
      "y1": 1062,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_sales",
      "target": "product_cost_of_sales",
      "value": 3.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 84,
      "y0": 1049,
      "targetWidth": 84,
      "y1": 1102,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_sales",
      "target": "services_cost_of_sales",
      "value": 1.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 26,
      "y0": 1104,
      "targetWidth": 26,
      "y1": 1240,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 70,
      "y0": 647,
      "targetWidth": 70,
      "y1": 551,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 134,
      "y0": 749,
      "targetWidth": 134,
      "y1": 814,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 55,
      "y0": 543.5,
      "targetWidth": 55,
      "y1": 435.5,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 10,
      "y0": 576,
      "targetWidth": 10,
      "y1": 646,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.2,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 5,
      "y0": 583.5,
      "targetWidth": 5,
      "y1": 749.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 2.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 60.10294117647059,
      "y0": 777.0514705882352,
      "targetWidth": 61,
      "y1": 874.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 51.23529411764706,
      "y0": 832.7205882352941,
      "targetWidth": 52,
      "y1": 1030,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.8,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 16.75,
      "y0": 866.7132352941177,
      "targetWidth": 17,
      "y1": 1161.5,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.3,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 5.911764705882353,
      "y0": 878.0441176470589,
      "targetWidth": 6,
      "y1": 1274,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "思科 · 2025 财年第二季度",
      "meta": {
        "title": "思科 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2024 年 12 月",
        "titleTextLength": 1780
      },
      "nodes": {
        "networking": {
          "label": "网络",
          "notes": [
            "同比 (3%)"
          ]
        },
        "security": {
          "label": "安全",
          "notes": [
            "同比 +117%"
          ]
        },
        "collaboration": {
          "label": "协作",
          "notes": [
            "同比 +1%"
          ]
        },
        "observability": {
          "label": "可观测性",
          "notes": [
            "同比 +47%"
          ]
        },
        "products": {
          "label": "产品",
          "notes": [
            "同比 +11%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +6%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +9%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 65%",
            "同比 +1pp"
          ]
        },
        "cost_of_sales": {
          "label": [
            "销售",
            "成本"
          ],
          "notes": []
        },
        "product_cost_of_sales": {
          "label": "产品",
          "notes": [
            "毛利率 64%"
          ]
        },
        "services_cost_of_sales": {
          "label": "服务",
          "notes": [
            "毛利率 69%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 22%",
            "同比 (2 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 17%",
            "同比 (3 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与市场",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": []
        },
        "ga": {
          "label": "一般及行政",
          "notes": []
        },
        "amortization": {
          "label": "摊销",
          "notes": []
        },
        "other_expense": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "networking": {
            "blocks": [
              {
                "x": 416,
                "top": 411,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a2df"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 350,
                "top": 554,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "网络",
                    "size": 40,
                    "weight": 800,
                    "color": "#00a2df"
                  }
                ]
              }
            ]
          },
          "security": {
            "blocks": [
              {
                "x": 416,
                "top": 715,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a2df"
                  },
                  {
                    "text": "同比 +117%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 340,
                "top": 810,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "安全",
                    "size": 40,
                    "weight": 800,
                    "color": "#00a2df"
                  }
                ]
              }
            ]
          },
          "collaboration": {
            "blocks": [
              {
                "x": 416,
                "top": 913,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a2df"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 340,
                "top": 994,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "协作",
                    "size": 40,
                    "weight": 800,
                    "color": "#00a2df"
                  }
                ]
              }
            ]
          },
          "observability": {
            "blocks": [
              {
                "x": 416,
                "top": 1086,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a2df"
                  },
                  {
                    "text": "同比 +47%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 340,
                "top": 1160,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "可观测性",
                    "size": 40,
                    "weight": 800,
                    "color": "#00a2df"
                  }
                ]
              }
            ]
          },
          "products": {
            "blocks": [
              {
                "x": 785,
                "top": 452,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "产品",
                    "size": 40,
                    "weight": 800,
                    "color": "#00a2df"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a2df"
                  },
                  {
                    "text": "同比 +11%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 787,
                "top": 1160,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "服务",
                    "size": 40,
                    "weight": 800,
                    "color": "#00a2df"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a2df"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1165,
                "top": 550,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#00a2df"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#00a2df"
                  },
                  {
                    "text": "同比 +9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1545,
                "top": 429,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#009653"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#009653"
                  },
                  {
                    "text": "利润率 65%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +1pp",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1540,
                "top": 1134,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售",
                    "size": 40,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "成本",
                    "size": 40,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#9c1200"
                  }
                ]
              }
            ]
          },
          "product_cost_of_sales": {
            "blocks": [
              {
                "x": 1912,
                "top": 1063,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "产品",
                    "size": 32,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#9c1200"
                  },
                  {
                    "text": "毛利率 64%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "services_cost_of_sales": {
            "blocks": [
              {
                "x": 1912,
                "top": 1206,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "服务",
                    "size": 32,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#9c1200"
                  },
                  {
                    "text": "毛利率 69%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1913,
                "top": 333,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#009653"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#009653"
                  },
                  {
                    "text": "利润率 22%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1910,
                "top": 898,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#9c1200"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2444,
                "top": 369,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#009653"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#009653"
                  },
                  {
                    "text": "利润率 17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2444,
                "top": 605,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#9c1200"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2444,
                "top": 840,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 30,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#9c1200"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2444,
                "top": 981,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#9c1200"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2444,
                "top": 1111,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 30,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#9c1200"
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2444,
                "top": 1236,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 32,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#9c1200"
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2444,
                "top": 705,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800,
                    "color": "#9c1200"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#9c1200"
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
