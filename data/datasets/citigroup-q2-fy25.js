(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "citigroup-q2-fy25",
  "name": "Citigroup · Q2 FY25",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q2 FY25 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2300,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 280,
    "logoHeight": 180,
    "logoY": 258,
    "logoViewBox": "0 0 280 180",
    "logoSvg": "\n    <path d=\"M61 48 A79 79 0 0 1 219 48\" fill=\"none\" stroke=\"#ed0000\" stroke-width=\"15\" />\n    <text x=\"140\" y=\"168\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"180\" font-weight=\"700\" letter-spacing=\"-14\" fill=\"#003c74\">citi</text>",
    "logoX": 925
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
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#003870",
        "label": "#155077"
      },
      "hub": {
        "node": "#003870",
        "label": "#155077"
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
      "source": "#859db7",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"193\" y=\"268\" font-size=\"28\" font-weight=\"800\" textLength=\"408\" lengthAdjust=\"spacing\" fill=\"#155077\">By Business Segment</text>\n      <g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"211\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Deposits</text><text x=\"211\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"deposits\">$1.36T</text><text x=\"211\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+6% Y/Y & +3% Q/Q</text></g>\n      <g><rect x=\"351\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"472\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Loans</text><text x=\"472\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"loans\">$0.72T</text><text x=\"472\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+5% Y/Y & +3% Q/Q</text></g>\n      <g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"721\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 ratio</text><text x=\"721\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"cet1\">13.5%</text><text x=\"721\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">(0.1pp) Y/Y</text></g>\n    </g>",
  "nodes": [
    {
      "id": "services",
      "label": "Services",
      "value": 5.1,
      "notes": [
        "+8% Y/Y",
        "28% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$5.1B"
    },
    {
      "id": "markets",
      "label": "Markets",
      "value": 5.9,
      "valueText": "$5.9B",
      "notes": [
        "+16% Y/Y",
        "29% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "banking",
      "label": "Banking",
      "value": 1.9,
      "notes": [
        "+18% Y/Y",
        "24% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$1.9B"
    },
    {
      "id": "wealth",
      "label": "Wealth",
      "value": 2.2,
      "notes": [
        "+20% Y/Y",
        "23% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$2.2B"
    },
    {
      "id": "uspb",
      "label": "USPB",
      "value": 5.1,
      "notes": [
        "+6% Y/Y",
        "13% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 4,
      "valueText": "$5.1B"
    },
    {
      "id": "all_other",
      "label": "All other",
      "value": 1.5,
      "notes": [
        "(24%) Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 5,
      "valueText": "$1.5B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 21.7,
      "notes": [
        "+8% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$21.7B"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 5.2,
      "valueText": "$5.2B",
      "type": "profit",
      "col": 2,
      "order": 0,
      "notes": []
    },
    {
      "id": "operating_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 13.6,
      "type": "cost",
      "col": 2,
      "order": 1,
      "valueText": "($13.6B)",
      "notes": []
    },
    {
      "id": "provision_for_credit_losses",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 2.9,
      "type": "cost",
      "col": 2,
      "order": 2,
      "valueText": "($2.9B)",
      "notes": []
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 4,
      "valueText": "$4.0B",
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "+25% Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.2,
      "valueText": "($1.2B)",
      "type": "cost",
      "col": 3,
      "order": 1
    },
    {
      "id": "compensation_benefits",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 7.6,
      "valueText": "($7.6B)",
      "type": "cost",
      "col": 3,
      "order": 2
    },
    {
      "id": "other_general_operating",
      "label": [
        "Other general",
        "operating"
      ],
      "value": 2.8,
      "type": "cost",
      "col": 3,
      "order": 3,
      "valueText": "($2.8B)"
    },
    {
      "id": "technology_communication",
      "label": [
        "Technology &",
        "Communication"
      ],
      "value": 2.3,
      "type": "cost",
      "col": 3,
      "order": 4,
      "valueText": "($2.3B)"
    },
    {
      "id": "premises_equipment",
      "label": [
        "Premises &",
        "equipment"
      ],
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "order": 5,
      "valueText": "($0.6B)"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 3,
      "order": 6
    }
  ],
  "links": [
    {
      "source": "services",
      "target": "revenue",
      "value": 5.1,
      "sourceWidth": 68,
      "targetWidth": 68,
      "targetOrder": 0
    },
    {
      "source": "markets",
      "target": "revenue",
      "value": 5.9,
      "sourceWidth": 78,
      "targetWidth": 78,
      "targetOrder": 1
    },
    {
      "source": "banking",
      "target": "revenue",
      "value": 1.9,
      "sourceWidth": 26,
      "targetWidth": 26,
      "targetOrder": 2
    },
    {
      "source": "wealth",
      "target": "revenue",
      "value": 2.2,
      "sourceWidth": 29,
      "targetWidth": 29,
      "targetOrder": 3
    },
    {
      "source": "uspb",
      "target": "revenue",
      "value": 5.1,
      "sourceWidth": 68,
      "targetWidth": 68,
      "targetOrder": 4
    },
    {
      "source": "all_other",
      "target": "revenue",
      "value": 1.5,
      "sourceWidth": 21,
      "targetWidth": 16,
      "targetOrder": 5
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 5.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 69,
      "targetWidth": 69
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 13.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 178,
      "targetWidth": 179
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 2.9,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 38,
      "targetWidth": 38
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 54,
      "targetWidth": 54
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 15,
      "targetWidth": 16
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 7.6,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 100,
      "targetWidth": 101
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 2.8,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 37,
      "targetWidth": 37
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 30,
      "targetWidth": 31
    },
    {
      "source": "operating_expenses",
      "target": "premises_equipment",
      "value": 0.6,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 8,
      "targetWidth": 8
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.3,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 4,
      "targetWidth": 3
    }
  ],
  "layout": {
    "scale": 13.1,
    "nodes": {
      "services": {
        "x": 422,
        "y": 376,
        "width": 73,
        "height": 68
      },
      "markets": {
        "x": 422,
        "y": 545,
        "width": 73,
        "height": 78
      },
      "banking": {
        "x": 422,
        "y": 742,
        "width": 73,
        "height": 26
      },
      "wealth": {
        "x": 422,
        "y": 873,
        "width": 73,
        "height": 29
      },
      "uspb": {
        "x": 422,
        "y": 1000,
        "width": 73,
        "height": 68
      },
      "all_other": {
        "x": 422,
        "y": 1169,
        "width": 73,
        "height": 21
      },
      "revenue": {
        "x": 1045,
        "y": 646,
        "width": 73,
        "height": 285
      },
      "pretax_income": {
        "x": 1668,
        "y": 508,
        "width": 73,
        "height": 69
      },
      "operating_expenses": {
        "x": 1668,
        "y": 789,
        "width": 73,
        "height": 179
      },
      "provision_for_credit_losses": {
        "x": 1668,
        "y": 1178,
        "width": 73,
        "height": 38
      },
      "net_income": {
        "x": 2291,
        "y": 332,
        "width": 73,
        "height": 54
      },
      "tax": {
        "x": 2291,
        "y": 470,
        "width": 73,
        "height": 16
      },
      "compensation_benefits": {
        "x": 2291,
        "y": 618,
        "width": 73,
        "height": 101
      },
      "other_general_operating": {
        "x": 2291,
        "y": 826,
        "width": 73,
        "height": 37
      },
      "technology_communication": {
        "x": 2291,
        "y": 990,
        "width": 73,
        "height": 31
      },
      "premises_equipment": {
        "x": 2291,
        "y": 1142,
        "width": 73,
        "height": 8
      },
      "marketing": {
        "x": 2291,
        "y": 1257,
        "width": 73,
        "height": 3
      }
    },
    "labels": {
      "services": {
        "blocks": [
          {
            "x": 458,
            "top": 286,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 387,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Services",
                "size": 40,
                "weight": 800
              },
              {
                "text": "28% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "markets": {
        "blocks": [
          {
            "x": 458,
            "top": 455,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+16% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 365,
            "top": 556,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Markets",
                "size": 40,
                "weight": 800
              },
              {
                "text": "29% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "banking": {
        "blocks": [
          {
            "x": 458,
            "top": 652,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
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
          },
          {
            "x": 365,
            "top": 753,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Banking",
                "size": 40,
                "weight": 800
              },
              {
                "text": "24% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "wealth": {
        "blocks": [
          {
            "x": 458,
            "top": 783,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+20% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 884,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Wealth",
                "size": 40,
                "weight": 800
              },
              {
                "text": "23% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "uspb": {
        "blocks": [
          {
            "x": 458,
            "top": 910,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 1011,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "USPB",
                "size": 40,
                "weight": 800
              },
              {
                "text": "13% net margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "all_other": {
        "blocks": [
          {
            "x": 458,
            "top": 1079,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(24%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 1154,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "All other",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1081,
            "top": 462,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "(net of interest expenses)",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+8% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1708,
            "top": 398,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Pretax income",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1708,
            "top": 990,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Noninterest",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "provision_for_credit_losses": {
        "blocks": [
          {
            "x": 1708,
            "top": 1235,
            "anchor": "middle",
            "lineGap": 10,
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
      "net_income": {
        "blocks": [
          {
            "x": 2401,
            "top": 287,
            "anchor": "start",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net income",
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
                "text": "+25% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2434,
            "top": 466,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax ($1.2B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2401,
            "top": 614,
            "anchor": "start",
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
            "x": 2401,
            "top": 793,
            "anchor": "start",
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
            "x": 2394,
            "top": 947,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Technology &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Communication",
                "size": 31,
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
      "premises_equipment": {
        "blocks": [
          {
            "x": 2431,
            "top": 1095,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Premises &",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "equipment",
                "size": 31,
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
            "x": 2437,
            "top": 1238,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Marketing",
                "size": 31,
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
      "name": "花旗集团 · 2025 财年第二季度",
      "meta": {
        "title": "花旗集团 2025 财年第二季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 1980
      },
      "nodes": {
        "services": {
          "label": "服务",
          "notes": [
            "同比 +8%",
            "净利率 28%"
          ]
        },
        "markets": {
          "label": "市场",
          "notes": [
            "同比 +16%",
            "净利率 29%"
          ]
        },
        "banking": {
          "label": "银行",
          "notes": [
            "同比 +18%",
            "净利率 24%"
          ]
        },
        "wealth": {
          "label": "财富管理",
          "notes": [
            "同比 +20%",
            "净利率 23%"
          ]
        },
        "uspb": {
          "label": "美国个人银行",
          "notes": [
            "同比 +6%",
            "净利率 13%"
          ]
        },
        "all_other": {
          "label": "所有其他",
          "notes": [
            "同比 (24%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +8%"
          ]
        },
        "pretax_income": {
          "label": "税前利润",
          "notes": []
        },
        "operating_expenses": {
          "label": [
            "非利息",
            "费用"
          ],
          "notes": []
        },
        "provision_for_credit_losses": {
          "label": [
            "信用损失",
            "拨备"
          ],
          "notes": []
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 +25%"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "compensation_benefits": {
          "label": [
            "薪酬",
            "与福利"
          ]
        },
        "other_general_operating": {
          "label": [
            "其他一般",
            "运营"
          ]
        },
        "technology_communication": {
          "label": [
            "技术与",
            "通信"
          ]
        },
        "premises_equipment": {
          "label": [
            "场地与",
            "设备"
          ]
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
                "top": 286,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 387,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "服务",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 28%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "markets": {
            "blocks": [
              {
                "x": 458,
                "top": 455,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 556,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "市场",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 29%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "banking": {
            "blocks": [
              {
                "x": 458,
                "top": 652,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
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
              },
              {
                "x": 397,
                "top": 753,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "银行",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 24%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "wealth": {
            "blocks": [
              {
                "x": 458,
                "top": 783,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +20%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 884,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "财富管理",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "uspb": {
            "blocks": [
              {
                "x": 458,
                "top": 910,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 1011,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "美国个人银行",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 13%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "all_other": {
            "blocks": [
              {
                "x": 458,
                "top": 1079,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (24%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 1158.5,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "所有其他",
                    "size": 34,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1081,
                "top": 462,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "（扣除利息支出后）",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1708,
                "top": 398,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1708,
                "top": 990,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "provision_for_credit_losses": {
            "blocks": [
              {
                "x": 1708,
                "top": 1235,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "拨备",
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
          "net_income": {
            "blocks": [
              {
                "x": 2401,
                "top": 287,
                "anchor": "start",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
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
                    "text": "同比 +25%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2434,
                "top": 466,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税费（$1.2B）",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2401,
                "top": 614,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "薪酬",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "与福利",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
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
                "x": 2401,
                "top": 793,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他一般",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "运营",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
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
                "x": 2394,
                "top": 947,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "通信",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "premises_equipment": {
            "blocks": [
              {
                "x": 2431,
                "top": 1095,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "场地与",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "设备",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
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
                "x": 2437,
                "top": 1238,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营销",
                    "size": 29,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"193\" y=\"268\" font-size=\"28\" font-weight=\"800\"  fill=\"#155077\">按业务分部</text>\n      <g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"211\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">存款</text><text x=\"211\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"deposits\">$1.36T</text><text x=\"211\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +6%，环比 +3%</text></g>\n      <g><rect x=\"351\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"472\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">贷款</text><text x=\"472\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"loans\">$0.72T</text><text x=\"472\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +5%，环比 +3%</text></g>\n      <g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"721\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 比率</text><text x=\"721\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"cet1\">13.5%</text><text x=\"721\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 (0.1 个百分点)</text></g>\n    </g>"
    },
    "preservedAnnotationText": [
      "$1.36T",
      "$0.72T"
    ]
  },
  "operatingMetrics": [
    {
      "id": "deposits",
      "value": "1.36",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.36T"
    },
    {
      "id": "loans",
      "value": "0.72",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.72T"
    },
    {
      "id": "cet1",
      "value": "13.5",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "13.5%"
    }
  ]
});})();
