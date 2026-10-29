window.DATASETS=window.DATASETS||[];
window.DATASETS.push({
  "key": "cisco-q1-fy25",
  "name": "Cisco · Q1 FY25",
  "company": "Cisco",
  "meta": {
    "company": "Cisco",
    "title": "Cisco Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Ending Oct. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/cisco-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2048,
    "periodX": 2443,
    "periodY": 285,
    "periodNoteY": 327,
    "logoWidth": 600,
    "logoHeight": 245,
    "logoY": 270,
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
    "scale": 20.7,
    "nodes": {
      "networking": {
        "x": 380,
        "y": 518,
        "width": 73,
        "height": 140
      },
      "security": {
        "x": 380,
        "y": 807,
        "width": 73,
        "height": 42
      },
      "collaboration": {
        "x": 380,
        "y": 982,
        "width": 73,
        "height": 23
      },
      "observability": {
        "x": 380,
        "y": 1150,
        "width": 73,
        "height": 5
      },
      "products": {
        "x": 753,
        "y": 613,
        "width": 73,
        "height": 209
      },
      "services": {
        "x": 751,
        "y": 1048,
        "width": 73,
        "height": 78
      },
      "revenue": {
        "x": 1125,
        "y": 699,
        "width": 73,
        "height": 288
      },
      "gross_profit": {
        "x": 1506,
        "y": 614,
        "width": 73,
        "height": 189
      },
      "cost_of_sales": {
        "x": 1511,
        "y": 1028,
        "width": 73,
        "height": 98
      },
      "product_cost_of_sales": {
        "x": 1705,
        "y": 1073,
        "width": 73,
        "height": 73
      },
      "services_cost_of_sales": {
        "x": 1707,
        "y": 1239,
        "width": 73,
        "height": 26
      },
      "operating_profit": {
        "x": 1872,
        "y": 514,
        "width": 73,
        "height": 49
      },
      "operating_expenses": {
        "x": 1867,
        "y": 755,
        "width": 73,
        "height": 141
      },
      "net_profit": {
        "x": 2247,
        "y": 416,
        "width": 73,
        "height": 57
      },
      "tax": {
        "x": 2137,
        "y": 530,
        "width": 73,
        "height": 9
      },
      "other_expense": {
        "x": 2247,
        "y": 687,
        "width": 73,
        "height": 2
      },
      "sm": {
        "x": 2247,
        "y": 803,
        "width": 73,
        "height": 58
      },
      "rnd": {
        "x": 2247,
        "y": 957,
        "width": 73,
        "height": 48
      },
      "ga": {
        "x": 2247,
        "y": 1089,
        "width": 73,
        "height": 18
      },
      "other_opex": {
        "x": 2247,
        "y": 1213,
        "width": 73,
        "height": 16
      },
      "amortization": {
        "x": 2247,
        "y": 1327,
        "width": 73,
        "height": 7
      }
    },
    "labels": {
      "networking": {
        "blocks": [
          {
            "x": 418,
            "top": 427,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "color": "#00a2df",
                "weight": 400
              },
              {
                "text": "(23%) Y/Y",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          },
          {
            "x": 351,
            "top": 563.5,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Networking",
                "size": 40,
                "color": "#00a2df",
                "weight": 800
              }
            ]
          }
        ]
      },
      "security": {
        "blocks": [
          {
            "x": 418,
            "top": 715,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "color": "#00a2df",
                "weight": 400
              },
              {
                "text": "+100% Y/Y",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          },
          {
            "x": 338,
            "top": 805,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Security",
                "size": 40,
                "color": "#00a2df",
                "weight": 800
              }
            ]
          }
        ]
      },
      "collaboration": {
        "blocks": [
          {
            "x": 418,
            "top": 890,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "color": "#00a2df",
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          },
          {
            "x": 338,
            "top": 973,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Collaboration",
                "size": 40,
                "color": "#00a2df",
                "weight": 800
              }
            ]
          }
        ]
      },
      "observability": {
        "blocks": [
          {
            "x": 418,
            "top": 1060,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "color": "#00a2df",
                "weight": 400
              },
              {
                "text": "+36% Y/Y",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          },
          {
            "x": 338,
            "top": 1128,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Observability",
                "size": 40,
                "color": "#00a2df",
                "weight": 800
              }
            ]
          }
        ]
      },
      "products": {
        "blocks": [
          {
            "x": 792,
            "top": 467,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Products",
                "size": 40,
                "color": "#00a2df",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "color": "#00a2df",
                "weight": 400
              },
              {
                "text": "(9%) Y/Y",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 787,
            "top": 1144,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Services",
                "size": 40,
                "color": "#00a2df",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "color": "#00a2df",
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1160,
            "top": 554,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "color": "#00a2df",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "color": "#00a2df",
                "weight": 400
              },
              {
                "text": "(6%) Y/Y",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1543,
            "top": 430,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "color": "#009653",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "color": "#009653",
                "weight": 400
              },
              {
                "text": "66% margin",
                "size": 28,
                "color": "#737373",
                "weight": 400
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1543,
            "top": 1145,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 40,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "sales",
                "size": 40,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "color": "#9c1200",
                "weight": 400
              }
            ]
          }
        ]
      },
      "product_cost_of_sales": {
        "blocks": [
          {
            "x": 1890,
            "top": 1076,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Products",
                "size": 32,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#9c1200",
                "weight": 400
              },
              {
                "text": "65% gross margin",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          }
        ]
      },
      "services_cost_of_sales": {
        "blocks": [
          {
            "x": 1895,
            "top": 1218,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Services",
                "size": 32,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#9c1200",
                "weight": 400
              },
              {
                "text": "68% gross margin",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1910,
            "top": 328,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "color": "#009653",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "color": "#009653",
                "weight": 400
              },
              {
                "text": "17% margin",
                "size": 28,
                "color": "#737373",
                "weight": 400
              },
              {
                "text": "(12pp) Y/Y",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1906,
            "top": 913,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "color": "#9c1200",
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2443,
            "top": 383,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "color": "#009653",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "color": "#009653",
                "weight": 400
              },
              {
                "text": "20% margin",
                "size": 28,
                "color": "#737373",
                "weight": 400
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28,
                "color": "#737373",
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2174,
            "top": 558,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "color": "#009653",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#009653",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2445,
            "top": 651,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#9c1200",
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2445,
            "top": 799,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "S&M",
                "size": 32,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#9c1200",
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2445,
            "top": 946,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#9c1200",
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2445,
            "top": 1063,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "G&A",
                "size": 32,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#9c1200",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2445,
            "top": 1174,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#9c1200",
                "weight": 400
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2445,
            "top": 1286,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Amortization",
                "size": 32,
                "color": "#9c1200",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "color": "#9c1200",
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
      "id": "networking",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Networking",
      "value": 6.8,
      "notes": [
        "(23%) Y/Y"
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
      "value": 2,
      "notes": [
        "+100% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$2.0B"
    },
    {
      "id": "collaboration",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Collaboration",
      "value": 1.1,
      "notes": [
        "(3%) Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$1.1B"
    },
    {
      "id": "observability",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Observability",
      "value": 0.3,
      "notes": [
        "+36% Y/Y"
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
      "value": 10.1,
      "notes": [
        "(9%) Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$10.1B"
    },
    {
      "id": "services",
      "col": 1,
      "order": 5,
      "type": "source",
      "label": "Services",
      "value": 3.7,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$3.7B"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 6,
      "type": "hub",
      "label": "Revenue",
      "value": 13.8,
      "notes": [
        "(6%) Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$13.8B"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 7,
      "type": "profit",
      "label": "Gross profit",
      "value": 9.1,
      "notes": [
        "66% margin",
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
      "value": 4.7,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($4.7B)"
    },
    {
      "id": "product_cost_of_sales",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Products",
      "value": 3.5,
      "valueText": "($3.5B)",
      "notes": [
        "65% gross margin"
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
        "68% gross margin"
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
      "value": 2.4,
      "notes": [
        "17% margin",
        "(12pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$2.4B"
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
      "value": 6.8,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($6.8B)"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 13,
      "type": "profit",
      "label": "Net profit",
      "value": 2.7,
      "notes": [
        "20% margin",
        "(5pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$2.7B"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 14,
      "type": "cost",
      "label": "Tax",
      "value": 0.4,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$0.4B",
      "linkTint": "#99cd99"
    },
    {
      "id": "other_expense",
      "col": 5,
      "order": 15,
      "label": "Other",
      "value": 0.1,
      "valueText": "($0.1B)",
      "notes": [],
      "type": "cost"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 16,
      "type": "cost",
      "label": "S&M",
      "value": 2.8,
      "valueText": "($2.8B)",
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
      "id": "other_opex",
      "col": 5,
      "order": 19,
      "type": "cost",
      "label": "Other",
      "value": 0.7,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($0.7B)"
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
    }
  ],
  "links": [
    {
      "source": "networking",
      "target": "products",
      "value": 6.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 140,
      "sourceWidth": 140,
      "targetWidth": 140
    },
    {
      "source": "security",
      "target": "products",
      "value": 2,
      "sourceOrder": 0,
      "targetOrder": 1,
      "width": 42,
      "sourceWidth": 42,
      "targetWidth": 42
    },
    {
      "source": "collaboration",
      "target": "products",
      "value": 1.1,
      "sourceOrder": 0,
      "targetOrder": 2,
      "width": 23,
      "sourceWidth": 23,
      "targetWidth": 23
    },
    {
      "source": "observability",
      "target": "products",
      "value": 0.3,
      "sourceOrder": 0,
      "targetOrder": 3,
      "width": 5,
      "sourceWidth": 5,
      "targetWidth": 4
    },
    {
      "source": "products",
      "target": "revenue",
      "value": 10.1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 209,
      "sourceWidth": 209,
      "targetWidth": 209
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 3.7,
      "sourceOrder": 0,
      "targetOrder": 1,
      "width": 78,
      "sourceWidth": 78,
      "targetWidth": 79
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9.1,
      "linkTint": "#99cd99",
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 189,
      "sourceWidth": 189,
      "targetWidth": 189
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 4.7,
      "linkTint": "#e08585",
      "sourceOrder": 1,
      "targetOrder": 0,
      "width": 99,
      "sourceWidth": 99,
      "targetWidth": 98
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.4,
      "linkTint": "#99cd99",
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 49,
      "sourceWidth": 49,
      "targetWidth": 49
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.8,
      "sourceOrder": 1,
      "targetOrder": 0,
      "width": 140,
      "sourceWidth": 140,
      "targetWidth": 141
    },
    {
      "source": "cost_of_sales",
      "target": "product_cost_of_sales",
      "value": 3.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 73,
      "sourceWidth": 73,
      "targetWidth": 73
    },
    {
      "source": "cost_of_sales",
      "target": "services_cost_of_sales",
      "value": 1.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "width": 25,
      "sourceWidth": 25,
      "targetWidth": 26
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.3,
      "linkTint": "#99cd99",
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 47,
      "sourceWidth": 47,
      "targetWidth": 48
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "width": 2,
      "sourceWidth": 2,
      "targetWidth": 2
    },
    {
      "source": "tax",
      "target": "net_profit",
      "value": 0.4,
      "linkTint": "#99cd99",
      "sourceOrder": 0,
      "targetOrder": 1,
      "width": 9,
      "sourceWidth": 9,
      "targetWidth": 9
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 2.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "width": 58,
      "sourceWidth": 56,
      "targetWidth": 58
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "width": 48,
      "sourceWidth": 47,
      "targetWidth": 48
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.8,
      "sourceOrder": 2,
      "targetOrder": 0,
      "width": 18,
      "sourceWidth": 17,
      "targetWidth": 18
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.7,
      "sourceOrder": 3,
      "targetOrder": 0,
      "width": 16,
      "sourceWidth": 14,
      "targetWidth": 16
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.3,
      "sourceOrder": 4,
      "targetOrder": 0,
      "width": 7,
      "sourceWidth": 7,
      "targetWidth": 7
    }
  ],
  "i18n": {
    "zh": {
      "name": "思科 · 2025 财年第一季度",
      "meta": {
        "title": "思科 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2024 年 10 月",
        "titleTextLength": 1780
      },
      "nodes": {
        "networking": {
          "label": "网络",
          "notes": [
            "同比 (23%)"
          ]
        },
        "security": {
          "label": "安全",
          "notes": [
            "同比 +100%"
          ]
        },
        "collaboration": {
          "label": "协作",
          "notes": [
            "同比 (3%)"
          ]
        },
        "observability": {
          "label": "可观测性",
          "notes": [
            "同比 +36%"
          ]
        },
        "products": {
          "label": "产品",
          "notes": [
            "同比 (9%)"
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
            "同比 (6%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 66%",
            "同比 +1 个百分点"
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
            "毛利率 65%"
          ]
        },
        "services_cost_of_sales": {
          "label": "服务",
          "notes": [
            "毛利率 68%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 17%",
            "同比 (12 个百分点)"
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
            "利润率 20%",
            "同比 (5 个百分点)"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_expense": {
          "label": "其他",
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
        "other_opex": {
          "label": "其他",
          "notes": []
        },
        "amortization": {
          "label": "摊销",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "networking": {
            "blocks": [
              {
                "x": 418,
                "top": 427,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#00a2df",
                    "weight": 400
                  },
                  {
                    "text": "同比 (23%)",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 351,
                "top": 563.5,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "网络",
                    "size": 40,
                    "color": "#00a2df",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "security": {
            "blocks": [
              {
                "x": 418,
                "top": 715,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#00a2df",
                    "weight": 400
                  },
                  {
                    "text": "同比 +100%",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 338,
                "top": 805,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "安全",
                    "size": 40,
                    "color": "#00a2df",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "collaboration": {
            "blocks": [
              {
                "x": 418,
                "top": 890,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#00a2df",
                    "weight": 400
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 338,
                "top": 973,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "协作",
                    "size": 40,
                    "color": "#00a2df",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "observability": {
            "blocks": [
              {
                "x": 418,
                "top": 1060,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#00a2df",
                    "weight": 400
                  },
                  {
                    "text": "同比 +36%",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 338,
                "top": 1128,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "可观测性",
                    "size": 40,
                    "color": "#00a2df",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "products": {
            "blocks": [
              {
                "x": 792,
                "top": 467,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "产品",
                    "size": 40,
                    "color": "#00a2df",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#00a2df",
                    "weight": 400
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 787,
                "top": 1144,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "服务",
                    "size": 40,
                    "color": "#00a2df",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#00a2df",
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1160,
                "top": 554,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "color": "#00a2df",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#00a2df",
                    "weight": 400
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1543,
                "top": 430,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "color": "#009653",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#009653",
                    "weight": 400
                  },
                  {
                    "text": "利润率 66%",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1543,
                "top": 1145,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售",
                    "size": 40,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 40,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#9c1200",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "product_cost_of_sales": {
            "blocks": [
              {
                "x": 1890,
                "top": 1076,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "产品",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 400
                  },
                  {
                    "text": "毛利率 65%",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "services_cost_of_sales": {
            "blocks": [
              {
                "x": 1895,
                "top": 1218,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "服务",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 400
                  },
                  {
                    "text": "毛利率 68%",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1910,
                "top": 328,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "color": "#009653",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#009653",
                    "weight": 400
                  },
                  {
                    "text": "利润率 17%",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  },
                  {
                    "text": "同比 (12 个百分点)",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1906,
                "top": 913,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#9c1200",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2443,
                "top": 383,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "color": "#009653",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "color": "#009653",
                    "weight": 400
                  },
                  {
                    "text": "利润率 20%",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 28,
                    "color": "#737373",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2174,
                "top": 558,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "color": "#009653",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#009653",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2445,
                "top": 651,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2445,
                "top": 799,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 30,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2445,
                "top": 946,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2445,
                "top": 1063,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 30,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2445,
                "top": 1174,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2445,
                "top": 1286,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 32,
                    "color": "#9c1200",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "color": "#9c1200",
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
