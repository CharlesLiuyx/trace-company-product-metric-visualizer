(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "citigroup-q1-fy24",
  "name": "Citigroup · Q1 FY24",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q1 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q1-fy24.png",
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
    "logoY": 252,
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"193\" y=\"273\" font-size=\"38\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"70\" y=\"1205\" width=\"241\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"190.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">CET1 ratio</text><text x=\"190.5\" y=\"1296\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\" data-operating-metric=\"cet1\">13.5%</text><text x=\"190.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\">+0.1pp Y/Y</text></g><g><rect x=\"319\" y=\"1205\" width=\"217\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"427.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">Deposits</text><text x=\"427.5\" y=\"1296\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\" data-operating-metric=\"deposits\">$1.31T</text><text x=\"427.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\">(2%) Y/Y</text></g><g><rect x=\"543\" y=\"1205\" width=\"205\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"645.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">Loans</text><text x=\"645.5\" y=\"1296\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\" data-operating-metric=\"loans\">$0.67T</text><text x=\"645.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\">+3% Y/Y</text></g><text x=\"430\" y=\"1391\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">CET1 = Common Equity Tier 1</text><text x=\"170\" y=\"1437\" font-size=\"38\" font-weight=\"800\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "nodes": [
    {
      "id": "services",
      "label": "Services",
      "value": 4.8,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+8% Y/Y",
        "17% net margin"
      ],
      "valueText": "$4.8B"
    },
    {
      "id": "markets",
      "label": "Markets",
      "value": 5.4,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(7%) Y/Y",
        "(2%) net margin"
      ],
      "valueText": "$5.4B"
    },
    {
      "id": "banking",
      "label": "Banking",
      "value": 1.7,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+49% Y/Y",
        "(19%) net margin"
      ],
      "valueText": "$1.7B"
    },
    {
      "id": "uspb",
      "label": "USPB",
      "value": 5.2,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+10% Y/Y",
        "4% net margin"
      ],
      "valueText": "$5.2B"
    },
    {
      "id": "wealth",
      "label": "Wealth",
      "value": 1.7,
      "type": "source",
      "col": 0,
      "order": 4,
      "notes": [
        "(4%) Y/Y",
        "0% net margin"
      ],
      "valueText": "$1.7B"
    },
    {
      "id": "all_other",
      "label": "Other",
      "value": 2.4,
      "type": "source",
      "col": 0,
      "order": 5,
      "notes": [
        "(35%) Y/Y",
        "(23%) net margin"
      ],
      "valueText": "$2.4B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 21.1,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "(2%) Y/Y",
        "(net of interest expenses)"
      ],
      "valueText": "$21.1B"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 4.5,
      "type": "profit",
      "col": 2,
      "order": 0,
      "valueText": "$4.5B"
    },
    {
      "id": "operating_expenses",
      "label": "Noninterest expenses",
      "value": 14.2,
      "type": "cost",
      "col": 2,
      "order": 1,
      "valueText": "($14.2B)"
    },
    {
      "id": "provision_for_credit_losses",
      "label": "Provision for credit losses",
      "value": 2.4,
      "type": "cost",
      "col": 2,
      "order": 2,
      "valueText": "($2.4B)"
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 3.4,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "(27%) Y/Y"
      ],
      "valueText": "$3.4B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.1,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($1.1B)"
    },
    {
      "id": "compensation_benefits",
      "label": "Compensation & benefits",
      "value": 7.7,
      "type": "cost",
      "col": 3,
      "order": 2,
      "valueText": "($7.7B)"
    },
    {
      "id": "other_general_operating",
      "label": "Other general operating",
      "value": 3.5,
      "type": "cost",
      "col": 3,
      "order": 3,
      "valueText": "($3.5B)"
    },
    {
      "id": "technology_communication",
      "label": "Technology & Communication",
      "value": 2.2,
      "type": "cost",
      "col": 3,
      "order": 4,
      "valueText": "($2.2B)"
    },
    {
      "id": "premises_equipment",
      "label": "Occupancy",
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "order": 5,
      "valueText": "($0.6B)"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 6,
      "valueText": "($0.2B)"
    }
  ],
  "links": [
    {
      "source": "services",
      "target": "revenue",
      "value": 4.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 75,
      "targetWidth": 75
    },
    {
      "source": "markets",
      "target": "revenue",
      "value": 5.4,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 85,
      "targetWidth": 85
    },
    {
      "source": "banking",
      "target": "revenue",
      "value": 1.7,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 27,
      "targetWidth": 27
    },
    {
      "source": "uspb",
      "target": "revenue",
      "value": 5.2,
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
      "sourceWidth": 27,
      "targetWidth": 27
    },
    {
      "source": "all_other",
      "target": "revenue",
      "value": 2.4,
      "sourceOrder": 0,
      "targetOrder": 5,
      "sourceWidth": 38,
      "targetWidth": 38
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 4.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 72,
      "targetWidth": 73
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 14.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 223,
      "targetWidth": 224
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 2.4,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 38,
      "targetWidth": 38
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 54,
      "targetWidth": 55
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 19,
      "targetWidth": 19
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 7.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 122,
      "targetWidth": 122
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 3.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 55,
      "targetWidth": 55
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.2,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 35,
      "targetWidth": 36
    },
    {
      "source": "operating_expenses",
      "target": "premises_equipment",
      "value": 0.6,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 9,
      "targetWidth": 10
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.2,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 3,
      "targetWidth": 3
    }
  ],
  "layout": {
    "scale": 15.8,
    "nodes": {
      "services": {
        "x": 418,
        "y": 375,
        "width": 73,
        "height": 75
      },
      "markets": {
        "x": 418,
        "y": 541,
        "width": 73,
        "height": 85
      },
      "banking": {
        "x": 418,
        "y": 723,
        "width": 73,
        "height": 27
      },
      "uspb": {
        "x": 418,
        "y": 838,
        "width": 73,
        "height": 82
      },
      "wealth": {
        "x": 418,
        "y": 1019,
        "width": 73,
        "height": 27
      },
      "all_other": {
        "x": 418,
        "y": 1132,
        "width": 73,
        "height": 38
      },
      "revenue": {
        "x": 1040,
        "y": 695,
        "width": 74,
        "height": 334
      },
      "pretax_income": {
        "x": 1666,
        "y": 480,
        "width": 73,
        "height": 73
      },
      "operating_expenses": {
        "x": 1661,
        "y": 863,
        "width": 73,
        "height": 224
      },
      "provision_for_credit_losses": {
        "x": 1664,
        "y": 1265,
        "width": 73,
        "height": 38
      },
      "net_income": {
        "x": 2286,
        "y": 347,
        "width": 73,
        "height": 55
      },
      "tax": {
        "x": 2286,
        "y": 601,
        "width": 73,
        "height": 19
      },
      "compensation_benefits": {
        "x": 2286,
        "y": 701,
        "width": 73,
        "height": 122
      },
      "other_general_operating": {
        "x": 2286,
        "y": 910,
        "width": 73,
        "height": 55
      },
      "technology_communication": {
        "x": 2286,
        "y": 1043,
        "width": 73,
        "height": 36
      },
      "premises_equipment": {
        "x": 2286,
        "y": 1178,
        "width": 73,
        "height": 10
      },
      "marketing": {
        "x": 2286,
        "y": 1264,
        "width": 73,
        "height": 3
      }
    },
    "labels": {
      "services": {
        "blocks": [
          {
            "x": 452,
            "top": 279,
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
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 380,
            "lines": [
              {
                "text": "Services",
                "size": 40,
                "weight": 800
              },
              {
                "text": "17% net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "markets": {
        "blocks": [
          {
            "x": 452,
            "top": 445,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(7%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 546,
            "lines": [
              {
                "text": "Markets",
                "size": 40,
                "weight": 800
              },
              {
                "text": "(2%) net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "banking": {
        "blocks": [
          {
            "x": 452,
            "top": 623,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+49% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 728,
            "lines": [
              {
                "text": "Banking",
                "size": 40,
                "weight": 800
              },
              {
                "text": "(19%) net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "uspb": {
        "blocks": [
          {
            "x": 452,
            "top": 744,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 843,
            "lines": [
              {
                "text": "USPB",
                "size": 40,
                "weight": 800
              },
              {
                "text": "4% net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "wealth": {
        "blocks": [
          {
            "x": 452,
            "top": 918,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 1024,
            "lines": [
              {
                "text": "Wealth",
                "size": 40,
                "weight": 800
              },
              {
                "text": "0% net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "all_other": {
        "blocks": [
          {
            "x": 452,
            "top": 1037,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(35%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 1137,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800
              },
              {
                "text": "(23%) net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 13
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1077,
            "top": 502,
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
                "text": "(2%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1702,
            "top": 368,
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
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1698,
            "top": 1101,
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
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "provision_for_credit_losses": {
        "blocks": [
          {
            "x": 1700,
            "top": 1317,
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
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2497,
            "top": 314,
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
                "text": "(27%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2496,
            "top": 592,
            "lines": [
              {
                "text": "Tax ($1.1B)",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2498,
            "top": 701,
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
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "other_general_operating": {
        "blocks": [
          {
            "x": 2498,
            "top": 854,
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
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "technology_communication": {
        "blocks": [
          {
            "x": 2498,
            "top": 997,
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
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "premises_equipment": {
        "blocks": [
          {
            "x": 2498,
            "top": 1133,
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
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2498,
            "top": 1233,
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
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "花旗集团 · 2024 财年第一季度",
      "meta": {
        "title": "花旗集团 2024 财年第一季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 1980
      },
      "nodes": {
        "services": {
          "label": "服务",
          "notes": [
            "同比 +8%",
            "净利率 17%"
          ]
        },
        "markets": {
          "label": "市场",
          "notes": [
            "同比 (7%)",
            "净利率 (2%)"
          ]
        },
        "banking": {
          "label": "银行",
          "notes": [
            "同比 +49%",
            "净利率 (19%)"
          ]
        },
        "uspb": {
          "label": "美国个人银行",
          "notes": [
            "同比 +10%",
            "净利率 4%"
          ]
        },
        "wealth": {
          "label": "财富管理",
          "notes": [
            "同比 (4%)",
            "净利率 0%"
          ]
        },
        "all_other": {
          "label": "其他",
          "notes": [
            "同比 (35%)",
            "净利率 (23%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (2%)",
            "（扣除利息支出后）"
          ]
        },
        "pretax_income": {
          "label": "税前利润"
        },
        "operating_expenses": {
          "label": "非利息费用"
        },
        "provision_for_credit_losses": {
          "label": "信用损失拨备"
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 (27%)"
          ]
        },
        "tax": {
          "label": "税费"
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
        "premises_equipment": {
          "label": "场地占用"
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
                "x": 452,
                "top": 279,
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
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 398,
                "top": 380,
                "lines": [
                  {
                    "text": "服务",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "markets": {
            "blocks": [
              {
                "x": 452,
                "top": 445,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 398,
                "top": 546,
                "lines": [
                  {
                    "text": "市场",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 (2%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "banking": {
            "blocks": [
              {
                "x": 452,
                "top": 623,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +49%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 398,
                "top": 728,
                "lines": [
                  {
                    "text": "银行",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 (19%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "uspb": {
            "blocks": [
              {
                "x": 452,
                "top": 744,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 398,
                "top": 843,
                "lines": [
                  {
                    "text": "美国个人银行",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "wealth": {
            "blocks": [
              {
                "x": 452,
                "top": 918,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 398,
                "top": 1024,
                "lines": [
                  {
                    "text": "财富管理",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 0%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "all_other": {
            "blocks": [
              {
                "x": 452,
                "top": 1037,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (35%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 398,
                "top": 1137,
                "lines": [
                  {
                    "text": "其他",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 (23%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 13
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1077,
                "top": 502,
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
                    "text": "同比 (2%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1702,
                "top": 368,
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
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1698,
                "top": 1101,
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
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "provision_for_credit_losses": {
            "blocks": [
              {
                "x": 1700,
                "top": 1317,
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
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2497,
                "top": 314,
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
                    "text": "同比 (27%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2496,
                "top": 592,
                "lines": [
                  {
                    "text": "税费 ($1.1B)",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2498,
                "top": 701,
                "lines": [
                  {
                    "text": "薪酬",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "与福利",
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
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "other_general_operating": {
            "blocks": [
              {
                "x": 2498,
                "top": 854,
                "lines": [
                  {
                    "text": "其他一般",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "运营",
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
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "technology_communication": {
            "blocks": [
              {
                "x": 2498,
                "top": 997,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "通信",
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
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "premises_equipment": {
            "blocks": [
              {
                "x": 2498,
                "top": 1133,
                "lines": [
                  {
                    "text": "场地占用",
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
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2498,
                "top": 1233,
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
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"193\" y=\"273\" font-size=\"38\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"70\" y=\"1205\" width=\"241\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"190.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">CET1 比率</text><text x=\"190.5\" y=\"1296\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\" data-operating-metric=\"cet1\">13.5%</text><text x=\"190.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\">同比 +0.1 个百分点</text></g><g><rect x=\"319\" y=\"1205\" width=\"217\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"427.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">存款</text><text x=\"427.5\" y=\"1296\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\" data-operating-metric=\"deposits\">$1.31T</text><text x=\"427.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\">同比 (2%)</text></g><g><rect x=\"543\" y=\"1205\" width=\"205\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"645.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#ffffff\">贷款</text><text x=\"645.5\" y=\"1296\" text-anchor=\"middle\" font-size=\"28\" fill=\"#ffffff\" data-operating-metric=\"loans\">$0.67T</text><text x=\"645.5\" y=\"1327\" text-anchor=\"middle\" font-size=\"22\" fill=\"#ffffff\">同比 +3%</text></g><text x=\"430\" y=\"1391\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">CET1 = 普通股一级资本</text><text x=\"170\" y=\"1437\" font-size=\"38\" font-weight=\"800\" fill=\"#000000\">来源：季度业绩</text></g>"
    },
    "preservedAnnotationText": [
      "$1.31T",
      "$0.67T"
    ]
  },
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "13.5",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "13.5%"
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
  ]
});})();
