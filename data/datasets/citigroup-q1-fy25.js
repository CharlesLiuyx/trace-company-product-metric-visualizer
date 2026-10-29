window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "citigroup-q1-fy25",
  "name": "Citigroup · Q1 FY25",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q1 FY25 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q1-fy25.png",
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
    "logoWidth": 278,
    "logoHeight": 180,
    "logoY": 258,
    "logoViewBox": "0 0 280 180",
    "logoSvg": "\n    <path d=\"M61 48 A79 79 0 0 1 219 48\" fill=\"none\" stroke=\"#ed0000\" stroke-width=\"15\" />\n    <text x=\"140\" y=\"168\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"180\" font-weight=\"700\" letter-spacing=\"-14\" fill=\"#003c74\">citi</text>",
    "logoX": 926
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
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"193\" y=\"273\" font-size=\"28\" font-weight=\"800\" textLength=\"408\" lengthAdjust=\"spacing\" fill=\"#155077\">By Business Segment</text>\n      <g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"211\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Deposits</text><text x=\"211\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"deposits\">$1.31T</text><text x=\"211\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+1% Y/Y & +2% Q/Q</text></g>\n      <g><rect x=\"351\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"472\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Loans</text><text x=\"472\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"loans\">$0.70T</text><text x=\"472\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+1% Y/Y & +2% Q/Q</text></g>\n      <g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"721\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 ratio</text><text x=\"721\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"cet1\">13.4%</text><text x=\"721\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">(0.05pp) Y/Y</text></g>\n    </g>",
  "nodes": [
    {
      "id": "services",
      "label": "Services",
      "value": 4.9,
      "notes": [
        "+3% Y/Y",
        "33% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "markets",
      "label": "Markets",
      "value": 6,
      "notes": [
        "+12% Y/Y",
        "30% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$6.0B"
    },
    {
      "id": "banking",
      "label": "Banking",
      "value": 2,
      "notes": [
        "+12% Y/Y",
        "28% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$2.0B"
    },
    {
      "id": "wealth",
      "label": "Wealth",
      "value": 2.1,
      "notes": [
        "+24% Y/Y",
        "14% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3
    },
    {
      "id": "uspb",
      "label": "USPB",
      "value": 5.2,
      "notes": [
        "+2% Y/Y",
        "14% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 4
    },
    {
      "id": "all_other",
      "label": "All other",
      "value": 1.4,
      "notes": [
        "(39%) Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 5
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 21.6,
      "notes": [
        "+3% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 0
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 5.4,
      "type": "profit",
      "col": 2,
      "order": 0
    },
    {
      "id": "operating_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 13.4,
      "type": "cost",
      "col": 2,
      "order": 1
    },
    {
      "id": "provision_for_credit_losses",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 2.7,
      "type": "cost",
      "col": 2,
      "order": 2
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 4.1,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.3,
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
      "value": 7.5,
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
      "order": 3
    },
    {
      "id": "technology_communication",
      "label": [
        "Technology &",
        "Communication"
      ],
      "value": 2.4,
      "type": "cost",
      "col": 3,
      "order": 4
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
      "order": 5
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 3,
      "order": 6
    }
  ],
  "links": [
    {
      "source": "services",
      "target": "revenue",
      "value": 4.9,
      "targetOrder": 0,
      "sourceWidth": 66,
      "targetWidth": 66
    },
    {
      "source": "markets",
      "target": "revenue",
      "value": 6,
      "targetOrder": 1,
      "sourceWidth": 80,
      "targetWidth": 80
    },
    {
      "source": "banking",
      "target": "revenue",
      "value": 2,
      "targetOrder": 2,
      "sourceWidth": 26,
      "targetWidth": 26
    },
    {
      "source": "wealth",
      "target": "revenue",
      "value": 2.1,
      "targetOrder": 3,
      "sourceWidth": 28,
      "targetWidth": 28
    },
    {
      "source": "uspb",
      "target": "revenue",
      "value": 5.2,
      "targetOrder": 4,
      "sourceWidth": 70,
      "targetWidth": 70
    },
    {
      "source": "all_other",
      "target": "revenue",
      "value": 1.4,
      "targetOrder": 5,
      "sourceWidth": 19,
      "targetWidth": 19
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 5.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 73,
      "targetWidth": 73
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 13.4,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 180,
      "targetWidth": 180
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 2.7,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 36,
      "targetWidth": 36
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 4.1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 55,
      "targetWidth": 54
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 18,
      "targetWidth": 17
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 7.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 102,
      "targetWidth": 100
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
      "value": 2.4,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 32,
      "targetWidth": 32
    },
    {
      "source": "operating_expenses",
      "target": "premises_equipment",
      "value": 0.6,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 7,
      "targetWidth": 7
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.2,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 2,
      "targetWidth": 2
    }
  ],
  "layout": {
    "scale": 13.4,
    "nodes": {
      "services": {
        "x": 420,
        "y": 382,
        "width": 72,
        "height": 66
      },
      "markets": {
        "x": 420,
        "y": 552,
        "width": 72,
        "height": 80
      },
      "banking": {
        "x": 420,
        "y": 739,
        "width": 72,
        "height": 26
      },
      "wealth": {
        "x": 420,
        "y": 869,
        "width": 72,
        "height": 28
      },
      "uspb": {
        "x": 420,
        "y": 1004,
        "width": 72,
        "height": 70
      },
      "all_other": {
        "x": 420,
        "y": 1166,
        "width": 72,
        "height": 19
      },
      "revenue": {
        "x": 1043,
        "y": 678,
        "width": 72,
        "height": 290
      },
      "pretax_income": {
        "x": 1666,
        "y": 535,
        "width": 72,
        "height": 73
      },
      "operating_expenses": {
        "x": 1668,
        "y": 854,
        "width": 72,
        "height": 180
      },
      "provision_for_credit_losses": {
        "x": 1668,
        "y": 1214,
        "width": 72,
        "height": 36
      },
      "net_income": {
        "x": 2289,
        "y": 354,
        "width": 72,
        "height": 54
      },
      "tax": {
        "x": 2289,
        "y": 492,
        "width": 72,
        "height": 17
      },
      "compensation_benefits": {
        "x": 2289,
        "y": 647,
        "width": 72,
        "height": 100
      },
      "other_general_operating": {
        "x": 2289,
        "y": 859,
        "width": 72,
        "height": 37
      },
      "technology_communication": {
        "x": 2289,
        "y": 1000,
        "width": 72,
        "height": 32
      },
      "premises_equipment": {
        "x": 2289,
        "y": 1154,
        "width": 72,
        "height": 7
      },
      "marketing": {
        "x": 2289,
        "y": 1277,
        "width": 72,
        "height": 2
      }
    },
    "labels": {
      "services": {
        "blocks": [
          {
            "x": 463,
            "top": 291,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 381,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Services",
                "size": 40,
                "weight": 800
              },
              {
                "text": "33% net margin",
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
            "x": 453,
            "top": 458,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 365,
            "top": 555,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Markets",
                "size": 40,
                "weight": 800
              },
              {
                "text": "30% net margin",
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
            "x": 453,
            "top": 647,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 365,
            "top": 714,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Banking",
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
      "wealth": {
        "blocks": [
          {
            "x": 463,
            "top": 778,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+24% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 847,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Wealth",
                "size": 40,
                "weight": 800
              },
              {
                "text": "14% net margin",
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
            "x": 463,
            "top": 913,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+2% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 1006,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "USPB",
                "size": 40,
                "weight": 800
              },
              {
                "text": "14% net margin",
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
            "x": 463,
            "top": 1076,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(39%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 1151,
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
            "top": 489,
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
                "text": "+3% Y/Y",
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
            "top": 426,
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
            "top": 1055,
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
            "top": 1276,
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
            "top": 322,
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
                "text": "+21% Y/Y",
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
            "top": 482,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax ($1.3B)",
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
            "top": 647,
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
            "top": 818,
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
            "top": 972,
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
            "top": 1115,
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
            "top": 1261,
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
      "name": "花旗集团 · 2025 财年第一季度",
      "meta": {
        "title": "花旗集团 2025 财年第一季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 1980
      },
      "nodes": {
        "services": {
          "label": "服务",
          "notes": [
            "同比 +3%",
            "净利率 33%"
          ]
        },
        "markets": {
          "label": "市场",
          "notes": [
            "同比 +12%",
            "净利率 30%"
          ]
        },
        "banking": {
          "label": "银行",
          "notes": [
            "同比 +12%",
            "净利率 28%"
          ]
        },
        "wealth": {
          "label": "财富管理",
          "notes": [
            "同比 +24%",
            "净利率 14%"
          ]
        },
        "uspb": {
          "label": "美国个人银行",
          "notes": [
            "同比 +2%",
            "净利率 14%"
          ]
        },
        "all_other": {
          "label": "所有其他",
          "notes": [
            "同比 (39%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +3%"
          ]
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "operating_expenses": {
          "label": [
            "非利息",
            "费用"
          ]
        },
        "provision_for_credit_losses": {
          "label": [
            "信用损失",
            "拨备"
          ]
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 +21%"
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
                "x": 463,
                "top": 291,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 381,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "服务",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 33%",
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
                "x": 453,
                "top": 458,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 555,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "市场",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 30%",
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
                "x": 453,
                "top": 647,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 714,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "银行",
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
          "wealth": {
            "blocks": [
              {
                "x": 463,
                "top": 778,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +24%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 847,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "财富管理",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 14%",
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
                "x": 463,
                "top": 913,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 1006,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "美国个人银行",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 14%",
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
                "x": 463,
                "top": 1076,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (39%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 1151,
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
                "top": 489,
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
                    "text": "同比 +3%",
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
                "top": 426,
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
                "top": 1055,
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
                "top": 1276,
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
                "top": 322,
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
                    "text": "同比 +21%",
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
                "top": 482,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税费（$1.3B）",
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
                "top": 647,
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
                "top": 818,
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
                "top": 972,
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
                "top": 1115,
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
                "top": 1261,
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
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"193\" y=\"273\" font-size=\"28\" font-weight=\"800\"  fill=\"#155077\">按业务分部</text>\n      <g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"211\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">存款</text><text x=\"211\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"deposits\">$1.31T</text><text x=\"211\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +1%，环比 +2%</text></g>\n      <g><rect x=\"351\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"472\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">贷款</text><text x=\"472\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"loans\">$0.70T</text><text x=\"472\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +1%，环比 +2%</text></g>\n      <g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"721\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 比率</text><text x=\"721\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"cet1\">13.4%</text><text x=\"721\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 (0.05 个百分点)</text></g>\n    </g>"
    },
    "preservedAnnotationText": [
      "$1.31T",
      "$0.70T"
    ]
  },
  "operatingMetrics": [
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
      "value": "0.70",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.70T"
    },
    {
      "id": "cet1",
      "value": "13.4",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "13.4%"
    }
  ]
});
