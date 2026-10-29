window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "cisco-q2-fy24",
  "name": "Cisco · Q2 FY24",
  "company": "Cisco",
  "meta": {
    "company": "Cisco",
    "title": "Cisco Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending Jan. 2024",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/cisco-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2048,
    "periodX": 2512,
    "periodY": 225,
    "periodNoteY": 269,
    "logoWidth": 600,
    "logoHeight": 245,
    "logoY": 224,
    "logoViewBox": "0 0 600 245",
    "logoSvg": "\n    <g fill=\"#00a2df\">\n      <rect x=\"82\" y=\"66\" width=\"20\" height=\"39\" rx=\"10\"/><rect x=\"134\" y=\"38\" width=\"20\" height=\"67\" rx=\"10\"/>\n      <rect x=\"186\" y=\"0\" width=\"20\" height=\"120\" rx=\"10\"/><rect x=\"238\" y=\"38\" width=\"20\" height=\"67\" rx=\"10\"/>\n      <rect x=\"290\" y=\"66\" width=\"20\" height=\"39\" rx=\"10\"/><rect x=\"342\" y=\"38\" width=\"20\" height=\"67\" rx=\"10\"/>\n      <rect x=\"394\" y=\"0\" width=\"20\" height=\"120\" rx=\"10\"/><rect x=\"446\" y=\"38\" width=\"20\" height=\"67\" rx=\"10\"/>\n      <rect x=\"498\" y=\"66\" width=\"20\" height=\"39\" rx=\"10\"/>\n    </g>\n    <text x=\"300\" y=\"232\" text-anchor=\"middle\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"108\" textLength=\"365\" lengthAdjust=\"spacingAndGlyphs\" font-weight=\"800\" fill=\"#00a2df\">CISCO</text>",
    "logoX": 864
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
    "scale": 30,
    "nodes": {
      "networking": {
        "x": 381,
        "y": 400,
        "width": 72,
        "height": 216
      },
      "security": {
        "x": 381,
        "y": 758,
        "width": 72,
        "height": 30
      },
      "collaboration": {
        "x": 381,
        "y": 919,
        "width": 72,
        "height": 30
      },
      "observability": {
        "x": 381,
        "y": 1089,
        "width": 72,
        "height": 5
      },
      "products": {
        "x": 758,
        "y": 528,
        "width": 71,
        "height": 283
      },
      "services": {
        "x": 755,
        "y": 1030,
        "width": 72,
        "height": 108
      },
      "revenue": {
        "x": 1129,
        "y": 644,
        "width": 71,
        "height": 391
      },
      "gross_profit": {
        "x": 1498,
        "y": 530,
        "width": 71,
        "height": 250
      },
      "cost_of_sales": {
        "x": 1505,
        "y": 1002,
        "width": 72,
        "height": 139
      },
      "product_cost_of_sales": {
        "x": 1731,
        "y": 1079,
        "width": 72,
        "height": 105
      },
      "services_cost_of_sales": {
        "x": 1739,
        "y": 1294,
        "width": 71,
        "height": 34
      },
      "operating_profit": {
        "x": 1879,
        "y": 416,
        "width": 71,
        "height": 94
      },
      "operating_expenses": {
        "x": 1882,
        "y": 719,
        "width": 71,
        "height": 156
      },
      "net_profit": {
        "x": 2250,
        "y": 339,
        "width": 72,
        "height": 81
      },
      "other_income": {
        "x": 2117,
        "y": 475,
        "width": 71,
        "height": 2
      },
      "tax": {
        "x": 2250,
        "y": 616,
        "width": 72,
        "height": 16
      },
      "sm": {
        "x": 2250,
        "y": 751,
        "width": 72,
        "height": 74
      },
      "rnd": {
        "x": 2250,
        "y": 905,
        "width": 72,
        "height": 59
      },
      "ga": {
        "x": 2250,
        "y": 1065,
        "width": 72,
        "height": 19
      },
      "amortization": {
        "x": 2250,
        "y": 1181,
        "width": 72,
        "height": 2
      },
      "other_opex": {
        "x": 2250,
        "y": 1280,
        "width": 72,
        "height": 2
      }
    },
    "labels": {
      "networking": {
        "blocks": [
          {
            "x": 417,
            "top": 306,
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
                "text": "(12%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 352,
            "top": 484,
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
            "top": 665,
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
                "text": "+3% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 339,
            "top": 751,
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
            "top": 824,
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
                "text": "+3% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 337,
            "top": 913,
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
            "top": 998,
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
                "text": "+16% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 339,
            "top": 1068,
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
            "x": 793,
            "top": 388,
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
                "text": "(9%) Y/Y",
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
            "x": 788,
            "top": 1159,
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
                "text": "+4% Y/Y",
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
            "x": 1163,
            "top": 503,
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
                "text": "(6%) Y/Y",
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
            "x": 1533,
            "top": 348,
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
                "text": "64% margin",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              },
              {
                "text": "+2pp Y/Y",
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
            "x": 1914,
            "top": 236,
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
                "text": "24% margin",
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
      "net_profit": {
        "blocks": [
          {
            "x": 2443,
            "top": 337,
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
                "text": "21% margin",
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
            "x": 1537,
            "top": 1158,
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1914,
            "top": 892,
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
                "text": "Expenses",
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
            "x": 1943,
            "top": 1086,
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
                "text": "63% gross margin",
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
            "x": 1943,
            "top": 1266,
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
      "other_income": {
        "blocks": [
          {
            "x": 2151,
            "top": 487,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": "#009653"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#009653"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2443,
            "top": 591,
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
            "x": 2443,
            "top": 751,
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
            "x": 2443,
            "top": 895,
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
            "x": 2443,
            "top": 1031,
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
            "x": 2443,
            "top": 1143,
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
      "other_opex": {
        "blocks": [
          {
            "x": 2443,
            "top": 1257,
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
      "value": 7.1,
      "notes": [
        "(12%) Y/Y"
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
      "value": 1,
      "notes": [
        "+3% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$1.0B"
    },
    {
      "id": "collaboration",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Collaboration",
      "value": 1,
      "notes": [
        "+3% Y/Y"
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
      "value": 0.2,
      "notes": [
        "+16% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$0.2B"
    },
    {
      "id": "products",
      "col": 1,
      "order": 4,
      "type": "source",
      "label": "Products",
      "value": 9.2,
      "notes": [
        "(9%) Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$9.2B"
    },
    {
      "id": "services",
      "col": 1,
      "order": 5,
      "type": "source",
      "label": "Services",
      "value": 3.6,
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$3.6B"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 6,
      "type": "hub",
      "label": "Revenue",
      "value": 12.8,
      "notes": [
        "(6%) Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df",
      "valueText": "$12.8B"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 7,
      "type": "profit",
      "label": "Gross profit",
      "value": 8.2,
      "notes": [
        "64% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$8.2B"
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
      "value": 4.6,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($4.6B)"
    },
    {
      "id": "product_cost_of_sales",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Products",
      "value": 3.4,
      "valueText": "($3.4B)",
      "notes": [
        "63% gross margin"
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
      "value": 1.1,
      "notes": [
        "68% gross margin"
      ],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($1.1B)"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 11,
      "type": "profit",
      "label": "Operating profit",
      "value": 3.1,
      "notes": [
        "24% margin",
        "+0pp Y/Y"
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
      "value": 5.1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($5.1B)"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 13,
      "type": "profit",
      "label": "Net profit",
      "value": 2.6,
      "notes": [
        "21% margin",
        "+0pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$2.6B"
    },
    {
      "id": "other_income",
      "col": 5,
      "order": 14,
      "type": "profit",
      "label": "Other",
      "value": 0.1,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#009653",
      "valueText": "$0.1B"
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
      "value": 2.5,
      "valueText": "($2.5B)",
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
      "value": 1.9,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($1.9B)"
    },
    {
      "id": "ga",
      "col": 5,
      "order": 18,
      "type": "cost",
      "label": "G&A",
      "value": 0.6,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($0.6B)"
    },
    {
      "id": "other_opex",
      "col": 5,
      "order": 19,
      "type": "cost",
      "label": "Other",
      "value": 0.012,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($12M)"
    },
    {
      "id": "amortization",
      "col": 5,
      "order": 20,
      "type": "cost",
      "label": "Amortization",
      "value": 0.1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200",
      "valueText": "($0.1B)"
    }
  ],
  "links": [
    {
      "source": "networking",
      "target": "products",
      "value": 7.1,
      "width": 216,
      "sourceWidth": 216,
      "targetWidth": 216,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cee9"
    },
    {
      "source": "security",
      "target": "products",
      "value": 1,
      "width": 30,
      "sourceWidth": 30,
      "targetWidth": 30,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cee9"
    },
    {
      "source": "collaboration",
      "target": "products",
      "value": 1,
      "width": 30,
      "sourceWidth": 30,
      "targetWidth": 30,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85cee9"
    },
    {
      "source": "observability",
      "target": "products",
      "value": 0.2,
      "width": 5,
      "sourceWidth": 5,
      "targetWidth": 7,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85cee9"
    },
    {
      "source": "products",
      "target": "revenue",
      "value": 9.2,
      "width": 283,
      "sourceWidth": 283,
      "targetWidth": 283,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cee9"
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 3.6,
      "width": 108,
      "sourceWidth": 108,
      "targetWidth": 108,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cee9"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 8.2,
      "width": 251,
      "sourceWidth": 251,
      "targetWidth": 250,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 4.6,
      "width": 140,
      "sourceWidth": 140,
      "targetWidth": 139,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 3.1,
      "width": 94,
      "sourceWidth": 94,
      "targetWidth": 94,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.1,
      "width": 156,
      "sourceWidth": 156,
      "targetWidth": 156,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_sales",
      "target": "product_cost_of_sales",
      "value": 3.4,
      "width": 105,
      "sourceWidth": 105,
      "targetWidth": 105,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_sales",
      "target": "services_cost_of_sales",
      "value": 1.1,
      "width": 34,
      "sourceWidth": 34,
      "targetWidth": 34,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.5,
      "width": 78,
      "sourceWidth": 78,
      "targetWidth": 79,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "width": 16,
      "sourceWidth": 16,
      "targetWidth": 16,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.1,
      "width": 2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 2.5,
      "width": 75,
      "sourceWidth": 75,
      "targetWidth": 74,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 1.9,
      "width": 59,
      "sourceWidth": 59,
      "targetWidth": 59,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.6,
      "width": 18,
      "sourceWidth": 18,
      "targetWidth": 19,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.012,
      "width": 2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.1,
      "width": 2,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "思科 · 2024 财年第二季度",
      "meta": {
        "title": "思科 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 1 月",
        "titleTextLength": 1780,
        "periodX": 2400
      },
      "nodes": {
        "networking": {
          "label": "网络",
          "notes": [
            "同比 (12%)"
          ]
        },
        "security": {
          "label": "安全",
          "notes": [
            "同比 +3%"
          ]
        },
        "collaboration": {
          "label": "协作",
          "notes": [
            "同比 +3%"
          ]
        },
        "observability": {
          "label": "可观测性",
          "notes": [
            "同比 +16%"
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
            "同比 +4%"
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
            "利润率 64%",
            "同比 +2 个百分点"
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
            "毛利率 63%"
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
            "利润率 24%",
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
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 21%",
            "同比 +0 个百分点"
          ]
        },
        "other_income": {
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
                "top": 306,
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
                    "text": "同比 (12%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 352,
                "top": 484,
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
                "top": 665,
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
                    "text": "同比 +3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 339,
                "top": 751,
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
                "top": 824,
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
                    "text": "同比 +3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 337,
                "top": 913,
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
                "top": 998,
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
                    "text": "同比 +16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 339,
                "top": 1068,
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
                "x": 793,
                "top": 388,
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
                    "text": "同比 (9%)",
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
                "x": 788,
                "top": 1159,
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
                    "text": "同比 +4%",
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
                "x": 1163,
                "top": 503,
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
                    "text": "同比 (6%)",
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
                "x": 1533,
                "top": 348,
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
                    "text": "利润率 64%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
                "x": 1914,
                "top": 236,
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
                    "text": "利润率 24%",
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
          "net_profit": {
            "blocks": [
              {
                "x": 2443,
                "top": 337,
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
                    "text": "利润率 21%",
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
                "x": 1537,
                "top": 1158,
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1914,
                "top": 892,
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
          "product_cost_of_sales": {
            "blocks": [
              {
                "x": 1943,
                "top": 1086,
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
                    "text": "毛利率 63%",
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
                "x": 1943,
                "top": 1266,
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
          "other_income": {
            "blocks": [
              {
                "x": 2151,
                "top": 487,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800,
                    "color": "#009653"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#009653"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2443,
                "top": 591,
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
                "x": 2443,
                "top": 751,
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
                "x": 2443,
                "top": 895,
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
                "x": 2443,
                "top": 1031,
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
          "amortization": {
            "blocks": [
              {
                "x": 2443,
                "top": 1143,
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
          "other_opex": {
            "blocks": [
              {
                "x": 2443,
                "top": 1257,
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
