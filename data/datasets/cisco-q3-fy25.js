window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "cisco-q3-fy25",
  "name": "Cisco · Q3 FY25",
  "company": "Cisco",
  "meta": {
    "company": "Cisco",
    "title": "Cisco Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "periodNote": "Ending Apr. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/cisco-q3-fy25.png",
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
    "scale": 21,
    "nodes": {
      "networking": {
        "x": 380,
        "y": 507,
        "width": 72,
        "height": 148
      },
      "security": {
        "x": 380,
        "y": 805,
        "width": 72,
        "height": 42
      },
      "collaboration": {
        "x": 380,
        "y": 979,
        "width": 72,
        "height": 21
      },
      "observability": {
        "x": 380,
        "y": 1135,
        "width": 72,
        "height": 5
      },
      "products": {
        "x": 754,
        "y": 613,
        "width": 72,
        "height": 217
      },
      "services": {
        "x": 756,
        "y": 1036,
        "width": 72,
        "height": 80
      },
      "revenue": {
        "x": 1130,
        "y": 691,
        "width": 72,
        "height": 295
      },
      "gross_profit": {
        "x": 1504,
        "y": 611,
        "width": 72,
        "height": 194
      },
      "cost_of_sales": {
        "x": 1506,
        "y": 1015,
        "width": 72,
        "height": 101
      },
      "product_cost_of_sales": {
        "x": 1710,
        "y": 1076,
        "width": 72,
        "height": 78
      },
      "services_cost_of_sales": {
        "x": 1708,
        "y": 1235,
        "width": 72,
        "height": 25
      },
      "operating_profit": {
        "x": 1873,
        "y": 525,
        "width": 72,
        "height": 66
      },
      "operating_expenses": {
        "x": 1875,
        "y": 758,
        "width": 72,
        "height": 127
      },
      "net_profit": {
        "x": 2248,
        "y": 435,
        "width": 72,
        "height": 52
      },
      "other_expense": {
        "x": 2248,
        "y": 703,
        "width": 72,
        "height": 5
      },
      "tax": {
        "x": 2248,
        "y": 612,
        "width": 72,
        "height": 10
      },
      "sm": {
        "x": 2248,
        "y": 809,
        "width": 72,
        "height": 57
      },
      "rnd": {
        "x": 2248,
        "y": 945,
        "width": 72,
        "height": 49
      },
      "ga": {
        "x": 2248,
        "y": 1080,
        "width": 72,
        "height": 16
      },
      "amortization": {
        "x": 2248,
        "y": 1178,
        "width": 72,
        "height": 5
      },
      "other_opex": {
        "x": 2248,
        "y": 1280,
        "width": 72,
        "height": 1
      }
    },
    "labels": {
      "networking": {
        "blocks": [
          {
            "x": 417,
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
                "text": "+8% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 351,
            "top": 556.5,
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
            "x": 417,
            "top": 711,
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
                "text": "+54% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 338,
            "top": 801.5,
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
            "x": 417,
            "top": 886,
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
            "top": 965,
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
            "x": 417,
            "top": 1044,
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
                "text": "+24% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 338,
            "top": 1113,
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
            "x": 795,
            "top": 467,
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
                "text": "+15% Y/Y",
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
            "x": 790,
            "top": 1134,
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
                "text": "+3% Y/Y",
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
            "x": 1166,
            "top": 545,
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
                "text": "+11% Y/Y",
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
            "x": 1542,
            "top": 425,
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
                "text": "+0pp Y/Y",
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
            "top": 1135,
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
            "x": 1901,
            "top": 1081,
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
            "x": 1901,
            "top": 1219,
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
            "top": 335,
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
                "text": "+5pp Y/Y",
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
            "x": 1912,
            "top": 904,
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
                "text": "18% margin",
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
      "other_expense": {
        "blocks": [
          {
            "x": 2445,
            "top": 670,
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
      "tax": {
        "blocks": [
          {
            "x": 2445,
            "top": 575,
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
            "x": 2445,
            "top": 803,
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
            "x": 2445,
            "top": 935,
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
            "x": 2445,
            "top": 1050,
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
            "x": 2445,
            "top": 1260,
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
            "x": 2445,
            "top": 1152,
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
      "value": 7.1,
      "notes": [
        "+8% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$7.1B"
    },
    {
      "id": "security",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Security",
      "value": 2,
      "notes": [
        "+54% Y/Y"
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
        "+4% Y/Y"
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
        "+24% Y/Y"
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
      "value": 10.4,
      "notes": [
        "+15% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$10.4B"
    },
    {
      "id": "services",
      "col": 1,
      "order": 5,
      "type": "source",
      "label": "Services",
      "value": 3.8,
      "notes": [
        "+3% Y/Y"
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
      "value": 14.1,
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$14.1B"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 7,
      "type": "profit",
      "label": "Gross profit",
      "value": 9.3,
      "notes": [
        "66% margin",
        "+0pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$9.3B"
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
      "notes": [
        "64% gross margin"
      ],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($3.7B)"
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
      "value": 3.2,
      "notes": [
        "23% margin",
        "+5pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$3.2B"
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
      "value": 6.1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($6.1B)"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 13,
      "type": "profit",
      "label": "Net profit",
      "value": 2.5,
      "notes": [
        "18% margin",
        "+3pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$2.5B"
    },
    {
      "id": "other_expense",
      "col": 5,
      "order": 14,
      "type": "cost",
      "label": "Other",
      "value": 0.3,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($0.3B)"
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
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($2.7B)"
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
      "value": 0.034,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($34M)"
    },
    {
      "id": "amortization",
      "col": 5,
      "order": 20,
      "type": "cost",
      "label": "Amortization",
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
      "value": 7.1,
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
      "sourceWidth": 42,
      "targetWidth": 42,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cee9"
    },
    {
      "source": "collaboration",
      "target": "products",
      "value": 1,
      "sourceWidth": 21,
      "targetWidth": 21,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85cee9"
    },
    {
      "source": "observability",
      "target": "products",
      "value": 0.3,
      "sourceWidth": 5,
      "targetWidth": 6,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85cee9"
    },
    {
      "source": "products",
      "target": "revenue",
      "value": 10.4,
      "sourceWidth": 217,
      "targetWidth": 217,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cee9"
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 3.8,
      "sourceWidth": 80,
      "targetWidth": 78,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cee9"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9.3,
      "sourceWidth": 193,
      "targetWidth": 194,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 4.9,
      "sourceWidth": 102,
      "targetWidth": 101,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.2,
      "sourceWidth": 66,
      "targetWidth": 66,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.1,
      "sourceWidth": 128,
      "targetWidth": 127,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_sales",
      "target": "product_cost_of_sales",
      "value": 3.7,
      "sourceWidth": 77,
      "targetWidth": 78,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_sales",
      "target": "services_cost_of_sales",
      "value": 1.2,
      "sourceWidth": 24,
      "targetWidth": 25,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.5,
      "sourceWidth": 51,
      "targetWidth": 52,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.3,
      "sourceWidth": 5,
      "targetWidth": 5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 2.7,
      "sourceWidth": 57,
      "targetWidth": 57,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.3,
      "sourceWidth": 49,
      "targetWidth": 49,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.7,
      "sourceWidth": 15,
      "targetWidth": 16,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.2,
      "sourceWidth": 5,
      "targetWidth": 5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.034,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "思科 · 2025 财年第三季度",
      "meta": {
        "title": "思科 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "periodNote": "截至 2025 年 4 月",
        "titleTextLength": 1780
      },
      "nodes": {
        "networking": {
          "label": "网络",
          "notes": [
            "同比 +8%"
          ]
        },
        "security": {
          "label": "安全",
          "notes": [
            "同比 +54%"
          ]
        },
        "collaboration": {
          "label": "协作",
          "notes": [
            "同比 +4%"
          ]
        },
        "observability": {
          "label": "可观测性",
          "notes": [
            "同比 +24%"
          ]
        },
        "products": {
          "label": "产品",
          "notes": [
            "同比 +15%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比 +3%"
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
            "利润率 66%",
            "同比 +0 个百分点"
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
            "利润率 23%",
            "同比 +5 个百分点"
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
            "利润率 18%",
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
                "x": 417,
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
                    "text": "同比 +8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 351,
                "top": 556.5,
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
                "x": 417,
                "top": 711,
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
                    "text": "同比 +54%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 338,
                "top": 801.5,
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
                "x": 417,
                "top": 886,
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
                "top": 965,
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
                "x": 417,
                "top": 1044,
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
                    "text": "同比 +24%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 338,
                "top": 1113,
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
                "x": 795,
                "top": 467,
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
                    "text": "同比 +15%",
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
                "x": 790,
                "top": 1134,
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
                    "text": "同比 +3%",
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
                "x": 1166,
                "top": 545,
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
                    "text": "同比 +11%",
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
                "x": 1542,
                "top": 425,
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
                    "text": "同比 +0 个百分点",
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
                "top": 1135,
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
                "x": 1901,
                "top": 1081,
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
                "x": 1901,
                "top": 1219,
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
                "top": 335,
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
                    "text": "同比 +5 个百分点",
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
                "x": 1912,
                "top": 904,
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
                    "text": "利润率 18%",
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
                "x": 2445,
                "top": 670,
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
                "x": 2445,
                "top": 575,
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
                "x": 2445,
                "top": 803,
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
                "x": 2445,
                "top": 935,
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
                "x": 2445,
                "top": 1050,
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
                "x": 2445,
                "top": 1260,
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
                "x": 2445,
                "top": 1152,
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
