window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "cisco-q4-fy25",
  "name": "Cisco · Q4 FY25",
  "company": "Cisco",
  "meta": {
    "company": "Cisco",
    "title": "Cisco Q4 FY25 Income Statement",
    "period": "Q4 FY25",
    "periodNote": "Ending July 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/cisco-q4-fy25.png",
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
    "logoY": 268,
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
        "x": 386,
        "y": 506,
        "width": 73,
        "height": 148
      },
      "security": {
        "x": 386,
        "y": 806,
        "width": 73,
        "height": 39
      },
      "collaboration": {
        "x": 386,
        "y": 973,
        "width": 73,
        "height": 20
      },
      "observability": {
        "x": 386,
        "y": 1124,
        "width": 73,
        "height": 5
      },
      "products": {
        "x": 759,
        "y": 621,
        "width": 73,
        "height": 211
      },
      "services": {
        "x": 759,
        "y": 1025,
        "width": 73,
        "height": 73
      },
      "revenue": {
        "x": 1133,
        "y": 693,
        "width": 73,
        "height": 284
      },
      "gross_profit": {
        "x": 1507,
        "y": 619,
        "width": 73,
        "height": 187
      },
      "cost_of_sales": {
        "x": 1507,
        "y": 999,
        "width": 73,
        "height": 97
      },
      "product_cost_of_sales": {
        "x": 1688,
        "y": 1079,
        "width": 73,
        "height": 74
      },
      "services_cost_of_sales": {
        "x": 1685,
        "y": 1244,
        "width": 73,
        "height": 23
      },
      "operating_profit": {
        "x": 1880,
        "y": 525,
        "width": 73,
        "height": 67
      },
      "operating_expenses": {
        "x": 1879,
        "y": 771,
        "width": 73,
        "height": 120
      },
      "net_profit": {
        "x": 2254,
        "y": 424,
        "width": 73,
        "height": 55
      },
      "other_expense": {
        "x": 2254,
        "y": 725,
        "width": 73,
        "height": 2
      },
      "tax": {
        "x": 2254,
        "y": 629,
        "width": 73,
        "height": 10
      },
      "sm": {
        "x": 2254,
        "y": 835,
        "width": 73,
        "height": 55
      },
      "rnd": {
        "x": 2254,
        "y": 959,
        "width": 73,
        "height": 46
      },
      "ga": {
        "x": 2254,
        "y": 1089,
        "width": 73,
        "height": 14
      },
      "amortization": {
        "x": 2254,
        "y": 1190,
        "width": 73,
        "height": 6
      },
      "other_opex": {
        "x": 2254,
        "y": 1296,
        "width": 73,
        "height": 1
      }
    },
    "labels": {
      "networking": {
        "blocks": [
          {
            "x": 422,
            "top": 414,
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
                "text": "+12% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 349,
            "top": 555.5,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Networking",
                "size": 40,
                "weight": 800,
                "color": "#00a2df",
                "textLength": 226
              }
            ]
          }
        ]
      },
      "security": {
        "blocks": [
          {
            "x": 422,
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
                "text": "+9% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 339,
            "top": 801,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Security",
                "size": 40,
                "weight": 800,
                "color": "#00a2df",
                "textLength": 157
              }
            ]
          }
        ]
      },
      "collaboration": {
        "blocks": [
          {
            "x": 422,
            "top": 880,
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
                "text": "+2% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 334,
            "top": 961,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Collaboration",
                "size": 40,
                "weight": 800,
                "color": "#00a2df",
                "textLength": 259
              }
            ]
          }
        ]
      },
      "observability": {
        "blocks": [
          {
            "x": 422,
            "top": 1033,
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
                "text": "+4% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 338,
            "top": 1104,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Observability",
                "size": 40,
                "weight": 800,
                "color": "#00a2df",
                "textLength": 259
              }
            ]
          }
        ]
      },
      "products": {
        "blocks": [
          {
            "x": 796,
            "top": 477,
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
                "text": "+10% Y/Y",
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
            "x": 795,
            "top": 1118,
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
                "text": "+0% Y/Y",
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
            "x": 1164,
            "top": 548,
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
                "text": "+8% Y/Y",
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
            "x": 1544,
            "top": 438,
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
                "text": "66% margin",
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
            "x": 1544,
            "top": 1114,
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
            "x": 1890,
            "top": 1079,
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
                "text": "65% gross margin",
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
            "x": 1890,
            "top": 1218,
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
                "text": "68% gross margin",
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
            "x": 1915,
            "top": 343,
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
                "text": "23% margin",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+4pp Y/Y",
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
            "x": 1916,
            "top": 913,
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
            "top": 381,
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
                "text": "19% margin",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+3pp Y/Y",
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
            "top": 599,
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
            "top": 827,
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
            "top": 948,
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
            "top": 1061,
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
      "other_opex": {
        "blocks": [
          {
            "x": 2444,
            "top": 1263,
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
      },
      "amortization": {
        "blocks": [
          {
            "x": 2444,
            "top": 1158,
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
            "top": 692,
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
      "value": 7.6,
      "notes": [
        "+12% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$7.6B"
    },
    {
      "id": "security",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Security",
      "value": 2,
      "notes": [
        "+9% Y/Y"
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
      "value": 1,
      "notes": [
        "+2% Y/Y"
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
        "+4% Y/Y"
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
      "value": 10.9,
      "notes": [
        "+10% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$10.9B"
    },
    {
      "id": "services",
      "col": 1,
      "order": 5,
      "type": "source",
      "label": "Services",
      "value": 3.8,
      "notes": [
        "+0% Y/Y"
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
      "value": 14.7,
      "notes": [
        "+8% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$14.7B"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 7,
      "type": "profit",
      "label": "Gross profit",
      "value": 9.6,
      "notes": [
        "66% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$9.6B"
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
      "value": 5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($5.0B)"
    },
    {
      "id": "product_cost_of_sales",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Products",
      "value": 3.8,
      "valueText": "($3.8B)",
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
      "value": 3.4,
      "notes": [
        "23% margin",
        "+4pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$3.4B"
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
      "value": 6.2,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($6.2B)"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 13,
      "type": "profit",
      "label": "Net profit",
      "value": 2.8,
      "notes": [
        "19% margin",
        "+3pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$2.8B"
    },
    {
      "id": "other_expense",
      "col": 5,
      "order": 14,
      "type": "cost",
      "label": "Other",
      "value": 0.1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($0.1B)"
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
      "value": 2.4,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($2.4B)"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 18,
      "type": "cost",
      "label": "G&A",
      "value": 0.7,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($0.7B)"
    },
    {
      "id": "other_opex",
      "col": 5,
      "order": 19,
      "type": "cost",
      "label": "Other",
      "value": 0.035,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($35M)"
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
      "value": 7.6,
      "width": 148,
      "sourceWidth": 148,
      "targetWidth": 148,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cee9"
    },
    {
      "source": "security",
      "target": "products",
      "value": 2,
      "width": 39,
      "sourceWidth": 39,
      "targetWidth": 39,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cee9"
    },
    {
      "source": "collaboration",
      "target": "products",
      "value": 1,
      "width": 20,
      "sourceWidth": 20,
      "targetWidth": 20,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85cee9"
    },
    {
      "source": "observability",
      "target": "products",
      "value": 0.3,
      "width": 5,
      "sourceWidth": 5,
      "targetWidth": 4,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85cee9"
    },
    {
      "source": "products",
      "target": "revenue",
      "value": 10.9,
      "width": 211,
      "sourceWidth": 211,
      "targetWidth": 211,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cee9"
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 3.8,
      "width": 73,
      "sourceWidth": 73,
      "targetWidth": 73,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cee9"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9.6,
      "width": 187,
      "sourceWidth": 187,
      "targetWidth": 187,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 5,
      "width": 97,
      "sourceWidth": 97,
      "targetWidth": 97,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.4,
      "width": 67,
      "sourceWidth": 67,
      "targetWidth": 67,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.2,
      "width": 120,
      "sourceWidth": 120,
      "targetWidth": 120,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_sales",
      "target": "product_cost_of_sales",
      "value": 3.8,
      "width": 74,
      "sourceWidth": 74,
      "targetWidth": 74,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_sales",
      "target": "services_cost_of_sales",
      "value": 1.2,
      "width": 23,
      "sourceWidth": 23,
      "targetWidth": 23,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.8,
      "width": 55,
      "sourceWidth": 55,
      "targetWidth": 55,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "width": 10,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 2.8,
      "width": 55,
      "sourceWidth": 55,
      "targetWidth": 55,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.4,
      "width": 46,
      "sourceWidth": 46,
      "targetWidth": 46,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.7,
      "width": 14,
      "sourceWidth": 14,
      "targetWidth": 14,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.035,
      "width": 1,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.3,
      "width": 4,
      "sourceWidth": 4,
      "targetWidth": 6,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "value": 0.1,
      "width": 2,
      "sourceWidth": 2,
      "targetWidth": 2
    }
  ],
  "i18n": {
    "zh": {
      "name": "Cisco · 2025 财年第四季度",
      "meta": {
        "title": "Cisco 2025 财年第四季度利润表",
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 7 月",
        "titleTextLength": 2048
      },
      "nodes": {
        "networking": {
          "label": "网络",
          "notes": [
            "同比 +12%"
          ]
        },
        "security": {
          "label": "安全",
          "notes": [
            "同比 +9%"
          ]
        },
        "collaboration": {
          "label": "协作",
          "notes": [
            "同比 +2%"
          ]
        },
        "observability": {
          "label": "可观测性",
          "notes": [
            "同比 +4%"
          ]
        },
        "products": {
          "label": "产品",
          "notes": [
            "同比 +10%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +0%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +8%"
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
            "利润率 23%",
            "同比 +4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 19%",
            "同比 +3 个百分点"
          ]
        },
        "other_expense": {
          "label": "其他",
          "notes": []
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
                "x": 422,
                "top": 414,
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
                    "text": "同比 +12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 349,
                "top": 555.5,
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
                "x": 422,
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
                    "text": "同比 +9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 339,
                "top": 801,
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
                "x": 422,
                "top": 880,
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
                    "text": "同比 +2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 334,
                "top": 961,
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
                "x": 422,
                "top": 1033,
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
                    "text": "同比 +4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 338,
                "top": 1104,
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
                "x": 796,
                "top": 477,
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
                    "text": "同比 +10%",
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
                "x": 795,
                "top": 1118,
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
                    "text": "同比 +0%",
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
                "x": 1164,
                "top": 548,
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
                    "text": "同比 +8%",
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
                "x": 1544,
                "top": 438,
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
                    "text": "利润率 66%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "x": 1544,
                "top": 1114,
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
                "x": 1890,
                "top": 1079,
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
                    "text": "毛利率 65%",
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
                "x": 1890,
                "top": 1218,
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
                    "text": "毛利率 68%",
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
                "x": 1915,
                "top": 343,
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
                    "text": "利润率 23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +4 个百分点",
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
                "x": 1916,
                "top": 913,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
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
                "top": 381,
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
                    "text": "利润率 19%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2444,
                "top": 692,
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
          },
          "tax": {
            "blocks": [
              {
                "x": 2444,
                "top": 599,
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
                "top": 827,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售与市场",
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
                "top": 948,
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
                "top": 1061,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "一般及行政",
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
          "other_opex": {
            "blocks": [
              {
                "x": 2444,
                "top": 1263,
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
          },
          "amortization": {
            "blocks": [
              {
                "x": 2444,
                "top": 1158,
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
          }
        }
      }
    }
  }
});
