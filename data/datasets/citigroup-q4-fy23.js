window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "citigroup-q4-fy23",
  "name": "Citigroup · Q4 FY23",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q4 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2300,
    "periodX": -1000,
    "periodY": -1000,
    "logoX": 927,
    "logoY": 255,
    "logoWidth": 270,
    "logoHeight": 180,
    "logoViewBox": "0 0 280 180",
    "logoSvg": "\n    <path d=\"M61 48 A79 79 0 0 1 219 48\" fill=\"none\" stroke=\"#ed1b2f\" stroke-width=\"15\" />\n    <text x=\"140\" y=\"168\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"180\" font-weight=\"700\" letter-spacing=\"-14\" fill=\"#084681\">citi</text>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#003770",
        "label": "#003770"
      },
      "hub": {
        "node": "#003770",
        "label": "#003770"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#009900"
      }
    },
    "linkTint": {
      "source": "#859db7",
      "hub": null,
      "cost": "#e08585",
      "profit": "#9bce99"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"192\" y=\"272\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"70\" y=\"1206\" width=\"241\" height=\"149\" rx=\"30\" fill=\"#003770\"/><text x=\"190.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"190.5\" y=\"1297\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">13.3%</text><text x=\"190.5\" y=\"1331\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+0.3pp Y/Y</text></g><g><rect x=\"320\" y=\"1206\" width=\"216\" height=\"149\" rx=\"30\" fill=\"#003770\"/><text x=\"428.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Deposits</text><text data-operating-metric=\"deposits\" x=\"428.0\" y=\"1297\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$1.31T</text><text x=\"428.0\" y=\"1331\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">(4%) Y/Y</text></g><g><rect x=\"543\" y=\"1206\" width=\"204\" height=\"149\" rx=\"30\" fill=\"#003770\"/><text x=\"645.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">Loans</text><text data-operating-metric=\"loans\" x=\"645.0\" y=\"1297\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$0.67T</text><text x=\"645.0\" y=\"1331\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+5% Y/Y</text></g><text x=\"430\" y=\"1390\" text-anchor=\"middle\" font-size=\"27\" fill=\"#777777\">CET1 = Common Equity Tier 1</text><text x=\"170\" y=\"1438\" font-size=\"40\" font-weight=\"800\" fill=\"#000\">Source: Quarterly results</text></g>",
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "13.3",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "13.3%"
    },
    {
      "id": "deposits",
      "value": "1.31",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.31T"
    },
    {
      "id": "loans",
      "value": "0.67",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.67T"
    }
  ],
  "nodes": [
    {
      "id": "services",
      "label": "Services",
      "value": 4.5,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$4.5B",
      "notes": [
        "+6% Y/Y",
        "18% net margin"
      ]
    },
    {
      "id": "markets",
      "label": "Markets",
      "value": 3.4,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$3.4B",
      "notes": [
        "(19%) Y/Y",
        "(4%) net margin"
      ]
    },
    {
      "id": "banking",
      "label": "Banking",
      "value": 0.9,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$0.9B",
      "notes": [
        "+22% Y/Y",
        "(34%) net margin"
      ]
    },
    {
      "id": "uspb",
      "label": "USPB",
      "value": 4.9,
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$4.9B",
      "notes": [
        "+12% Y/Y",
        "4% net margin"
      ]
    },
    {
      "id": "wealth",
      "label": "Wealth",
      "value": 1.7,
      "type": "source",
      "col": 0,
      "order": 4,
      "valueText": "$1.7B",
      "notes": [
        "(3%) Y/Y",
        "0% net margin"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 2,
      "type": "source",
      "col": 0,
      "order": 5,
      "valueText": "$2.0B",
      "notes": [
        "(26%) Y/Y",
        "(120%) net margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 17.4,
      "type": "hub",
      "col": 1,
      "order": 6,
      "valueText": "$17.4B",
      "notes": [
        "(3%) Y/Y"
      ]
    },
    {
      "id": "provision_for_credit_losses",
      "label": "Provision for credit losses",
      "value": 3.5,
      "type": "cost",
      "col": 2,
      "order": 7,
      "valueText": "($3.5B)"
    },
    {
      "id": "operating_expenses",
      "label": "Noninterest expenses",
      "value": 16,
      "type": "cost",
      "col": 2,
      "order": 8,
      "valueText": "($16.0B)"
    },
    {
      "id": "pretax_loss",
      "label": "Pretax loss",
      "value": 2.1,
      "type": "cost",
      "col": 2,
      "order": 9,
      "valueText": "($2.1B)"
    },
    {
      "id": "net_loss",
      "label": "Net loss",
      "value": 1.8,
      "type": "cost",
      "col": 2,
      "order": 10,
      "valueText": "($1.8B)"
    },
    {
      "id": "tax",
      "label": "Tax benefit",
      "value": 0.3,
      "type": "cost",
      "col": 2,
      "order": 11,
      "valueText": "$0.3B",
      "color": "#2ca02c",
      "labelColor": "#009900",
      "linkTint": "#9bce99"
    },
    {
      "id": "compensation_benefits",
      "label": "Compensation & benefits",
      "value": 6.9,
      "type": "cost",
      "col": 3,
      "order": 12,
      "valueText": "($6.9B)"
    },
    {
      "id": "other_general_operating",
      "label": "Other general operating",
      "value": 4.8,
      "type": "cost",
      "col": 3,
      "order": 13,
      "valueText": "($4.8B)"
    },
    {
      "id": "technology_communication",
      "label": "Technology & Communication",
      "value": 2.4,
      "type": "cost",
      "col": 3,
      "order": 14,
      "valueText": "(2.4B)"
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.8,
      "type": "cost",
      "col": 3,
      "order": 15,
      "valueText": "($0.8B)"
    },
    {
      "id": "occupancy",
      "label": "Occupancy",
      "value": 0.7,
      "type": "cost",
      "col": 3,
      "order": 16,
      "valueText": "($0.7B)"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.4,
      "type": "cost",
      "col": 3,
      "order": 17,
      "valueText": "($0.4B)"
    }
  ],
  "links": [
    {
      "source": "services",
      "target": "revenue",
      "value": 4.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 75,
      "targetWidth": 74
    },
    {
      "source": "markets",
      "target": "revenue",
      "value": 3.4,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 57,
      "targetWidth": 56
    },
    {
      "source": "banking",
      "target": "revenue",
      "value": 0.9,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 17,
      "targetWidth": 16
    },
    {
      "source": "uspb",
      "target": "revenue",
      "value": 4.9,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 82,
      "targetWidth": 82
    },
    {
      "source": "wealth",
      "target": "revenue",
      "value": 1.7,
      "sourceOrder": 0,
      "targetOrder": 4,
      "sourceWidth": 28,
      "targetWidth": 28
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 2,
      "sourceOrder": 0,
      "targetOrder": 5,
      "sourceWidth": 34,
      "targetWidth": 34
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 3.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 60,
      "targetWidth": 60
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 13.9,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 230,
      "targetWidth": 230
    },
    {
      "source": "net_loss",
      "target": "pretax_loss",
      "value": 1.8,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 32,
      "targetWidth": 30
    },
    {
      "source": "tax",
      "target": "pretax_loss",
      "value": 0.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 5,
      "targetWidth": 5
    },
    {
      "source": "pretax_loss",
      "target": "operating_expenses",
      "value": 2.1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 35,
      "targetWidth": 36
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 6.9,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 114,
      "targetWidth": 115
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 4.8,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 80,
      "targetWidth": 81
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.4,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 40,
      "targetWidth": 40
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.8,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 12,
      "targetWidth": 12
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.7,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 14,
      "targetWidth": 14
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.4,
      "sourceOrder": 5,
      "targetOrder": 0,
      "sourceWidth": 6,
      "targetWidth": 6
    }
  ],
  "layout": {
    "scale": 16.65,
    "nodes": {
      "services": {
        "x": 422,
        "y": 382,
        "width": 73,
        "height": 75
      },
      "markets": {
        "x": 422,
        "y": 564,
        "width": 73,
        "height": 57
      },
      "banking": {
        "x": 422,
        "y": 715,
        "width": 73,
        "height": 17
      },
      "uspb": {
        "x": 422,
        "y": 826,
        "width": 73,
        "height": 82
      },
      "wealth": {
        "x": 422,
        "y": 1001,
        "width": 73,
        "height": 28
      },
      "other": {
        "x": 422,
        "y": 1127,
        "width": 73,
        "height": 34
      },
      "revenue": {
        "x": 1042,
        "y": 664,
        "width": 73,
        "height": 290
      },
      "provision_for_credit_losses": {
        "x": 1662,
        "y": 563,
        "width": 73,
        "height": 60
      },
      "operating_expenses": {
        "x": 1665,
        "y": 732,
        "width": 73,
        "height": 266
      },
      "pretax_loss": {
        "x": 1392,
        "y": 1047,
        "width": 73,
        "height": 35
      },
      "net_loss": {
        "x": 1167,
        "y": 1188,
        "width": 73,
        "height": 32
      },
      "tax": {
        "x": 1054,
        "y": 1036,
        "width": 73,
        "height": 5
      },
      "compensation_benefits": {
        "x": 2290,
        "y": 348,
        "width": 73,
        "height": 115
      },
      "other_general_operating": {
        "x": 2290,
        "y": 603,
        "width": 73,
        "height": 81
      },
      "technology_communication": {
        "x": 2290,
        "y": 831,
        "width": 73,
        "height": 40
      },
      "restructuring": {
        "x": 2290,
        "y": 1003,
        "width": 73,
        "height": 12
      },
      "occupancy": {
        "x": 2290,
        "y": 1157,
        "width": 73,
        "height": 14
      },
      "marketing": {
        "x": 2290,
        "y": 1315,
        "width": 73,
        "height": 6
      }
    },
    "labels": {
      "services": {
        "blocks": [
          {
            "x": 458,
            "top": 291,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#003770"
              },
              {
                "text": "+6% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 382,
            "top": 390,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Services",
                "size": 38,
                "weight": 800,
                "color": "#003770"
              },
              {
                "text": "18% net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "markets": {
        "blocks": [
          {
            "x": 458,
            "top": 473,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#003770"
              },
              {
                "text": "(19%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 382,
            "top": 572,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Markets",
                "size": 38,
                "weight": 800,
                "color": "#003770"
              },
              {
                "text": "(4%) net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "banking": {
        "blocks": [
          {
            "x": 458,
            "top": 624,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#003770"
              },
              {
                "text": "+22% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 382,
            "top": 723,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Banking",
                "size": 38,
                "weight": 800,
                "color": "#003770"
              },
              {
                "text": "(34%) net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "uspb": {
        "blocks": [
          {
            "x": 458,
            "top": 735,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#003770"
              },
              {
                "text": "+12% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 382,
            "top": 834,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "USPB",
                "size": 38,
                "weight": 800,
                "color": "#003770"
              },
              {
                "text": "4% net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "wealth": {
        "blocks": [
          {
            "x": 458,
            "top": 910,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#003770"
              },
              {
                "text": "(3%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 382,
            "top": 1009,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Wealth",
                "size": 38,
                "weight": 800,
                "color": "#003770"
              },
              {
                "text": "0% net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 458,
            "top": 1036,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#003770"
              },
              {
                "text": "(26%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 382,
            "top": 1135,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 38,
                "weight": 800,
                "color": "#003770"
              },
              {
                "text": "(120%) net margin",
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
            "x": 1078,
            "top": 474,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#003770"
              },
              {
                "text": "(net of interest expenses)",
                "size": 32,
                "weight": 800,
                "color": "#003770"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#003770"
              },
              {
                "text": "(3%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "provision_for_credit_losses": {
        "blocks": [
          {
            "x": 1698,
            "top": 414,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Provision for",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 38,
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1701,
            "top": 1023,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Noninterest",
                "size": 38,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 38,
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
      "pretax_loss": {
        "blocks": [
          {
            "x": 1428,
            "top": 1100,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Pretax",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "loss",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 35,
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
            "x": 1203,
            "top": 1235,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net loss",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 35,
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
            "x": 1090.5,
            "top": 1058,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 32,
                "weight": 800,
                "color": "#009900"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#009900"
              }
            ]
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2495,
            "top": 344,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Compensation",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& benefits",
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
      "other_general_operating": {
        "blocks": [
          {
            "x": 2495,
            "top": 599,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other general",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "operating",
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
      "technology_communication": {
        "blocks": [
          {
            "x": 2495,
            "top": 793,
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
                "text": "Communication",
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
      "restructuring": {
        "blocks": [
          {
            "x": 2495,
            "top": 999,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Restructuring",
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
      "occupancy": {
        "blocks": [
          {
            "x": 2495,
            "top": 1153,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Occupancy",
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
      "marketing": {
        "blocks": [
          {
            "x": 2495,
            "top": 1311,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Marketing",
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
  "i18n": {
    "zh": {
      "name": "花旗集团 · 2023 财年第四季度",
      "meta": {
        "title": "花旗集团 2023 财年第四季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 2000
      },
      "nodes": {
        "services": {
          "label": "服务",
          "notes": [
            "同比 +6%",
            "净利率 18%"
          ]
        },
        "markets": {
          "label": "市场",
          "notes": [
            "同比 (19%)",
            "净利率 (4%)"
          ]
        },
        "banking": {
          "label": "银行",
          "notes": [
            "同比 +22%",
            "净利率 (34%)"
          ]
        },
        "uspb": {
          "label": "美国个人银行",
          "notes": [
            "同比 +12%",
            "净利率 4%"
          ]
        },
        "wealth": {
          "label": "财富管理",
          "notes": [
            "同比 (3%)",
            "净利率 0%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 (26%)",
            "净利率 (120%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (3%)"
          ]
        },
        "provision_for_credit_losses": {
          "label": "信用损失拨备"
        },
        "operating_expenses": {
          "label": "非利息费用"
        },
        "pretax_loss": {
          "label": "税前亏损"
        },
        "net_loss": {
          "label": "净亏损"
        },
        "tax": {
          "label": "税收收益"
        },
        "compensation_benefits": {
          "label": "薪酬与福利"
        },
        "other_general_operating": {
          "label": "其他一般运营"
        },
        "technology_communication": {
          "label": "技术与通信"
        },
        "restructuring": {
          "label": "重组费用"
        },
        "occupancy": {
          "label": "场地费用"
        },
        "marketing": {
          "label": "营销"
        }
      },
      "layout": {
        "labels": {
          "services": {
            "blocks": [
              {
                "x": 458,
                "top": 291,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#003770"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 382,
                "top": 390,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "服务",
                    "size": 38,
                    "weight": 800,
                    "color": "#003770"
                  },
                  {
                    "text": "净利率 18%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "markets": {
            "blocks": [
              {
                "x": 458,
                "top": 473,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#003770"
                  },
                  {
                    "text": "同比 (19%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 382,
                "top": 572,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "市场",
                    "size": 38,
                    "weight": 800,
                    "color": "#003770"
                  },
                  {
                    "text": "净利率 (4%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "banking": {
            "blocks": [
              {
                "x": 458,
                "top": 624,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#003770"
                  },
                  {
                    "text": "同比 +22%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 382,
                "top": 723,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "银行",
                    "size": 38,
                    "weight": 800,
                    "color": "#003770"
                  },
                  {
                    "text": "净利率 (34%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "uspb": {
            "blocks": [
              {
                "x": 458,
                "top": 735,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#003770"
                  },
                  {
                    "text": "同比 +12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 382,
                "top": 834,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "美国个人银行",
                    "size": 38,
                    "weight": 800,
                    "color": "#003770"
                  },
                  {
                    "text": "净利率 4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "wealth": {
            "blocks": [
              {
                "x": 458,
                "top": 910,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#003770"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 382,
                "top": 1009,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "财富管理",
                    "size": 38,
                    "weight": 800,
                    "color": "#003770"
                  },
                  {
                    "text": "净利率 0%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 458,
                "top": 1036,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#003770"
                  },
                  {
                    "text": "同比 (26%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 382,
                "top": 1135,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 38,
                    "weight": 800,
                    "color": "#003770"
                  },
                  {
                    "text": "净利率 (120%)",
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
                "x": 1078,
                "top": 474,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#003770"
                  },
                  {
                    "text": "（扣除利息支出后）",
                    "size": 32,
                    "weight": 800,
                    "color": "#003770"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#003770"
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "provision_for_credit_losses": {
            "blocks": [
              {
                "x": 1698,
                "top": 414,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "信用损失拨备",
                    "size": 38,
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1701,
                "top": 1023,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "非利息费用",
                    "size": 38,
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
          "pretax_loss": {
            "blocks": [
              {
                "x": 1428,
                "top": 1100,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税前亏损",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 35,
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
                "x": 1203,
                "top": 1235,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净亏损",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 35,
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
                "x": 1090.5,
                "top": 1058,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税收收益",
                    "size": 32,
                    "weight": 800,
                    "color": "#009900"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#009900"
                  }
                ]
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2495,
                "top": 344,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "薪酬与福利",
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
          "other_general_operating": {
            "blocks": [
              {
                "x": 2495,
                "top": 599,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他一般运营",
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
          "technology_communication": {
            "blocks": [
              {
                "x": 2495,
                "top": 793,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "技术与通信",
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
          "restructuring": {
            "blocks": [
              {
                "x": 2495,
                "top": 999,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "重组费用",
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
          "occupancy": {
            "blocks": [
              {
                "x": 2495,
                "top": 1153,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "场地费用",
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
          "marketing": {
            "blocks": [
              {
                "x": 2495,
                "top": 1311,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营销",
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"192\" y=\"272\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"70\" y=\"1206\" width=\"241\" height=\"149\" rx=\"30\" fill=\"#003770\"/><text x=\"190.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"190.5\" y=\"1297\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">13.3%</text><text x=\"190.5\" y=\"1331\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +0.3 个百分点</text></g><g><rect x=\"320\" y=\"1206\" width=\"216\" height=\"149\" rx=\"30\" fill=\"#003770\"/><text x=\"428.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">存款</text><text data-operating-metric=\"deposits\" x=\"428.0\" y=\"1297\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$1.31T</text><text x=\"428.0\" y=\"1331\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 (4%)</text></g><g><rect x=\"543\" y=\"1206\" width=\"204\" height=\"149\" rx=\"30\" fill=\"#003770\"/><text x=\"645.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"29\" font-weight=\"800\" fill=\"#fff\">贷款</text><text data-operating-metric=\"loans\" x=\"645.0\" y=\"1297\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$0.67T</text><text x=\"645.0\" y=\"1331\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +5%</text></g><text x=\"430\" y=\"1390\" text-anchor=\"middle\" font-size=\"27\" fill=\"#777777\">CET1 = 普通股一级资本</text><text x=\"170\" y=\"1438\" font-size=\"40\" font-weight=\"800\" fill=\"#000\">来源：季度业绩</text></g>"
    },
    "preservedAnnotationText": [
      "$1.31T",
      "$0.67T"
    ]
  }
});
