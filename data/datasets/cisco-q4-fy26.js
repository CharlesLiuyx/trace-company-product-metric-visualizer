window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "cisco-q4-fy26",
  "name": "Cisco · Q4 FY26",
  "company": "Cisco",
  "meta": {
    "company": "Cisco",
    "title": "Cisco Q4 FY26 Income Statement",
    "period": "Q4 FY26",
    "periodNote": "Ending July 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/cisco-q4-fy26.png",
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
        "y": 535,
        "width": 73,
        "height": 158
      },
      "security": {
        "x": 386,
        "y": 854,
        "width": 73,
        "height": 35
      },
      "collaboration": {
        "x": 386,
        "y": 1030,
        "width": 73,
        "height": 18
      },
      "observability": {
        "x": 386,
        "y": 1188,
        "width": 73,
        "height": 3
      },
      "products": {
        "x": 759,
        "y": 633,
        "width": 73,
        "height": 218
      },
      "services": {
        "x": 759,
        "y": 1052,
        "width": 73,
        "height": 61
      },
      "revenue": {
        "x": 1133,
        "y": 716,
        "width": 73,
        "height": 280
      },
      "gross_profit": {
        "x": 1507,
        "y": 622,
        "width": 73,
        "height": 179
      },
      "cost_of_sales": {
        "x": 1507,
        "y": 1028,
        "width": 73,
        "height": 100
      },
      "product_cost_of_sales": {
        "x": 1702,
        "y": 1097,
        "width": 73,
        "height": 81
      },
      "services_cost_of_sales": {
        "x": 1702,
        "y": 1278,
        "width": 73,
        "height": 19
      },
      "operating_profit": {
        "x": 1880,
        "y": 513,
        "width": 73,
        "height": 68
      },
      "operating_expenses": {
        "x": 1880,
        "y": 786,
        "width": 73,
        "height": 110
      },
      "net_profit": {
        "x": 2254,
        "y": 399,
        "width": 73,
        "height": 61
      },
      "other_income": {
        "x": 2143,
        "y": 504,
        "width": 73,
        "height": 10
      },
      "tax": {
        "x": 2254,
        "y": 677,
        "width": 73,
        "height": 17
      },
      "sm": {
        "x": 2254,
        "y": 861,
        "width": 73,
        "height": 47
      },
      "rnd": {
        "x": 2254,
        "y": 1001,
        "width": 73,
        "height": 39
      },
      "ga": {
        "x": 2254,
        "y": 1135,
        "width": 73,
        "height": 10
      },
      "other_opex": {
        "x": 2254,
        "y": 1241,
        "width": 73,
        "height": 7
      },
      "amortization": {
        "x": 2254,
        "y": 1346,
        "width": 73,
        "height": 2
      }
    },
    "labels": {
      "networking": {
        "blocks": [
          {
            "x": 422,
            "top": 445,
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
                "text": "+28% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 349,
            "top": 589,
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
            "x": 419.5,
            "top": 763,
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
                "text": "+14% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 339,
            "top": 850,
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
            "x": 419.5,
            "top": 940,
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
            "x": 334,
            "top": 1017,
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
            "x": 419.5,
            "top": 1098,
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
                "text": "+6% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#737373"
              }
            ]
          },
          {
            "x": 338,
            "top": 1169,
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
            "top": 490,
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
                "text": "+24% Y/Y",
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
            "top": 1136,
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
            "top": 573,
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
                "text": "+18% Y/Y",
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
            "x": 1548.5,
            "top": 440,
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
            "x": 1543.5,
            "top": 1142,
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
            "x": 1901.5,
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
            "x": 1901.5,
            "top": 1237,
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
            "x": 1926,
            "top": 332,
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
                "text": "25% margin",
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
            "x": 1916.5,
            "top": 910,
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
            "x": 2444.5,
            "top": 386,
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
                "text": "22% margin",
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
      "other_income": {
        "blocks": [
          {
            "x": 2183.5,
            "top": 536,
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
            "x": 2443.5,
            "top": 655,
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
            "x": 2443.5,
            "top": 852,
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
            "x": 2443.5,
            "top": 989,
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
            "x": 2443.5,
            "top": 1109,
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
            "x": 2443.5,
            "top": 1211,
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
            "x": 2442,
            "top": 1315,
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
      "value": 9.8,
      "notes": [
        "+28% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df"
    },
    {
      "id": "security",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Security",
      "value": 2.2,
      "notes": [
        "+14% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df"
    },
    {
      "id": "collaboration",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Collaboration",
      "value": 1.2,
      "notes": [
        "+12% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df"
    },
    {
      "id": "observability",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Observability",
      "value": 0.3,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df"
    },
    {
      "id": "products",
      "col": 1,
      "order": 4,
      "type": "source",
      "label": "Products",
      "value": 13.5,
      "notes": [
        "+24% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df"
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
      "labelColor": "#00a2df"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 6,
      "type": "hub",
      "label": "Revenue",
      "value": 17.3,
      "notes": [
        "+18% Y/Y"
      ],
      "color": "#00a2df",
      "labelColor": "#00a2df"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 7,
      "type": "profit",
      "label": "Gross profit",
      "value": 11.1,
      "notes": [
        "64% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653"
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
      "value": 6.2,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200"
    },
    {
      "id": "product_cost_of_sales",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Products",
      "value": 5,
      "valueText": "($5.0B)",
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
      "value": 1.2,
      "notes": [
        "69% gross margin"
      ],
      "color": "#cc0000",
      "labelColor": "#9c1200"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 11,
      "type": "profit",
      "label": "Operating profit",
      "value": 4.3,
      "notes": [
        "25% margin",
        "+4pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653"
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
      "labelColor": "#9c1200"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 13,
      "type": "profit",
      "label": "Net profit",
      "value": 3.9,
      "notes": [
        "22% margin",
        "+5pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009653"
    },
    {
      "id": "other_income",
      "col": 5,
      "order": 14,
      "type": "profit",
      "label": "Other",
      "value": 0.7,
      "notes": [],
      "color": "#2ca02c",
      "labelColor": "#009653"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 15,
      "type": "cost",
      "label": "Tax",
      "value": 1.1,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200"
    },
    {
      "id": "sm",
      "col": 5,
      "order": 16,
      "type": "cost",
      "label": "S&M",
      "value": 3,
      "valueText": "($3.0B)",
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
      "labelColor": "#9c1200"
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
      "labelColor": "#9c1200"
    },
    {
      "id": "other_opex",
      "col": 5,
      "order": 19,
      "type": "cost",
      "label": "Other",
      "value": 0.5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#9c1200"
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
      "labelColor": "#9c1200"
    }
  ],
  "links": [
    {
      "source": "networking",
      "target": "products",
      "value": 9.8,
      "width": 158,
      "sourceWidth": 158,
      "targetWidth": 160,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cee9"
    },
    {
      "source": "security",
      "target": "products",
      "value": 2.2,
      "width": 35,
      "sourceWidth": 35,
      "targetWidth": 36,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cee9"
    },
    {
      "source": "collaboration",
      "target": "products",
      "value": 1.2,
      "width": 18,
      "sourceWidth": 18,
      "targetWidth": 18,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85cee9"
    },
    {
      "source": "observability",
      "target": "products",
      "value": 0.3,
      "width": 3,
      "sourceWidth": 3,
      "targetWidth": 4,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85cee9"
    },
    {
      "source": "products",
      "target": "revenue",
      "value": 13.5,
      "width": 218,
      "sourceWidth": 218,
      "targetWidth": 218,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85cee9"
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 3.8,
      "width": 61,
      "sourceWidth": 61,
      "targetWidth": 62,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85cee9"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 11.1,
      "width": 180,
      "sourceWidth": 180,
      "targetWidth": 179,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 6.2,
      "width": 100,
      "sourceWidth": 100,
      "targetWidth": 100,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 4.3,
      "width": 69,
      "sourceWidth": 69,
      "targetWidth": 68,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.8,
      "width": 110,
      "sourceWidth": 110,
      "targetWidth": 110,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_sales",
      "target": "product_cost_of_sales",
      "value": 5,
      "width": 81,
      "sourceWidth": 81,
      "targetWidth": 81,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "cost_of_sales",
      "target": "services_cost_of_sales",
      "value": 1.2,
      "width": 19,
      "sourceWidth": 19,
      "targetWidth": 19,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3.2,
      "width": 51,
      "sourceWidth": 51,
      "targetWidth": 51,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.1,
      "width": 17,
      "sourceWidth": 17,
      "targetWidth": 17,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.7,
      "width": 10,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 3,
      "width": 47,
      "sourceWidth": 47,
      "targetWidth": 47,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.4,
      "width": 39,
      "sourceWidth": 39,
      "targetWidth": 39,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.7,
      "width": 10,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.5,
      "width": 7,
      "sourceWidth": 7,
      "targetWidth": 7,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.2,
      "width": 7,
      "sourceWidth": 7,
      "targetWidth": 2,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "思科 · 2026 财年第四季度",
      "meta": {
        "title": "思科 2026 财年第四季度利润表",
        "period": "2026 财年第四季度",
        "periodNote": "截至 2026 年 7 月",
        "titleTextLength": 1780
      },
      "nodes": {
        "networking": {
          "label": "网络",
          "notes": [
            "同比 +28%"
          ]
        },
        "security": {
          "label": "安全",
          "notes": [
            "同比 +14%"
          ]
        },
        "collaboration": {
          "label": "协作",
          "notes": [
            "同比 +12%"
          ]
        },
        "observability": {
          "label": "可观测性",
          "notes": [
            "同比 +6%"
          ]
        },
        "products": {
          "label": "产品",
          "notes": [
            "同比 +24%"
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
            "同比 +18%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 64%",
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
            "毛利率 63%"
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
            "利润率 25%",
            "同比 +4 个百分点"
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
            "利润率 22%",
            "同比 +5 个百分点"
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
                "x": 422,
                "top": 445,
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
                    "text": "同比 +28%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 349,
                "top": 589,
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
                "x": 419.5,
                "top": 763,
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
                    "text": "同比 +14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 339,
                "top": 850,
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
                "x": 419.5,
                "top": 940,
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
                "x": 334,
                "top": 1017,
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
                "x": 419.5,
                "top": 1098,
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
                    "text": "同比 +6%",
                    "size": 28,
                    "weight": 400,
                    "color": "#737373"
                  }
                ]
              },
              {
                "x": 338,
                "top": 1169,
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
                "top": 490,
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
                    "text": "同比 +24%",
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
                "top": 1136,
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
                "top": 573,
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
                    "text": "同比 +18%",
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
                "x": 1548.5,
                "top": 440,
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
                "x": 1543.5,
                "top": 1142,
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
                "x": 1901.5,
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
                "x": 1901.5,
                "top": 1237,
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
                "x": 1926,
                "top": 332,
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
                    "text": "利润率 25%",
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
                "x": 1916.5,
                "top": 910,
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
                "x": 2444.5,
                "top": 386,
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
                    "text": "利润率 22%",
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
          "other_income": {
            "blocks": [
              {
                "x": 2183.5,
                "top": 536,
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
                "x": 2443.5,
                "top": 655,
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
                "x": 2443.5,
                "top": 852,
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
                "x": 2443.5,
                "top": 989,
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
                "x": 2443.5,
                "top": 1109,
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
          "other_opex": {
            "blocks": [
              {
                "x": 2443.5,
                "top": 1211,
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
                "x": 2442,
                "top": 1315,
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
