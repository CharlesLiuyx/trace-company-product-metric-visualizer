window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "citigroup-q3-fy26",
  "name": "Citigroup · Q3 FY26",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q3 FY26 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q3-fy26.png",
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
    "hidePeriodStamp": true
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
    },
    "allowRasterAnnotations": true
  },
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"193\" y=\"268\" font-size=\"28\" font-weight=\"800\" textLength=\"408\" lengthAdjust=\"spacing\" fill=\"#155077\">By Business Segment</text>\n      <g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"211\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Deposits</text><text data-operating-metric=\"deposits\" x=\"211\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$1.53T</text><text x=\"211\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+11% Y/Y & +2% Q/Q</text></g>\n      <g><rect x=\"351\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"472\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Loans</text><text data-operating-metric=\"loans\" x=\"472\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$0.80T</text><text x=\"472\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+12% Y/Y & +3% Q/Q</text></g>\n      <g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"721\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"721\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">12.8%</text><text x=\"721\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">(0.5pp) Y/Y</text></g>\n    </g>",
  "nodes": [
    {
      "id": "services",
      "label": "Services",
      "value": 6.6,
      "notes": [
        "+15% Y/Y",
        "40% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$6.6B"
    },
    {
      "id": "markets",
      "label": "Markets",
      "value": 6.1,
      "valueText": "$6.1B",
      "notes": [
        "+6% Y/Y",
        "29% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "banking",
      "label": "Banking",
      "value": 1.7,
      "notes": [
        "+6% Y/Y",
        "22% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$1.7B"
    },
    {
      "id": "wealth",
      "label": "Wealth",
      "value": 3.3,
      "notes": [
        "+15% Y/Y",
        "18% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$3.3B"
    },
    {
      "id": "uspb",
      "label": "USPB",
      "value": 4.7,
      "notes": [
        "+0% Y/Y",
        "18% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 4,
      "valueText": "$4.7B"
    },
    {
      "id": "all_other",
      "label": "All other",
      "value": 1.4,
      "notes": [
        "(2%) Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 5,
      "valueText": "$1.4B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 23.8,
      "notes": [
        "+8% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$23.8B"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 7.3,
      "valueText": "$7.3B",
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
      "value": 14,
      "type": "cost",
      "col": 2,
      "order": 1,
      "valueText": "($14.0B)"
    },
    {
      "id": "provision_for_credit_losses",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 2.6,
      "type": "cost",
      "col": 2,
      "order": 2,
      "valueText": "($2.6B)"
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 5.4,
      "valueText": "$5.4B",
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "+43% Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.9,
      "valueText": "($1.9B)",
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
      "valueText": "($7.5B)",
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
      "value": 3.2,
      "type": "cost",
      "col": 3,
      "order": 3,
      "valueText": "($3.2B)"
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
      "value": 6.6,
      "sourceWidth": 90,
      "targetWidth": 90,
      "targetOrder": 0
    },
    {
      "source": "markets",
      "target": "revenue",
      "value": 6.1,
      "sourceWidth": 83,
      "targetWidth": 83,
      "targetOrder": 1
    },
    {
      "source": "banking",
      "target": "revenue",
      "value": 1.7,
      "sourceWidth": 24,
      "targetWidth": 24,
      "targetOrder": 2
    },
    {
      "source": "wealth",
      "target": "revenue",
      "value": 3.3,
      "sourceWidth": 44,
      "targetWidth": 44,
      "targetOrder": 3
    },
    {
      "source": "uspb",
      "target": "revenue",
      "value": 4.7,
      "sourceWidth": 63,
      "targetWidth": 63,
      "targetOrder": 4
    },
    {
      "source": "all_other",
      "target": "revenue",
      "value": 1.4,
      "sourceWidth": 19,
      "targetWidth": 19,
      "targetOrder": 5
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 7.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 99,
      "targetWidth": 99
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 14,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 190,
      "targetWidth": 188
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 2.6,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 35,
      "targetWidth": 34
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 5.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 74,
      "targetWidth": 74
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.9,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 25,
      "targetWidth": 26
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 7.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 103,
      "targetWidth": 103
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 3.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 41,
      "targetWidth": 32
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 31,
      "targetWidth": 8
    },
    {
      "source": "operating_expenses",
      "target": "premises_equipment",
      "value": 0.6,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 8,
      "targetWidth": 2
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.2,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 5,
      "targetWidth": 44
    }
  ],
  "layout": {
    "scale": 13.1,
    "nodes": {
      "services": {
        "x": 427,
        "y": 382,
        "width": 73,
        "height": 90
      },
      "markets": {
        "x": 427,
        "y": 567,
        "width": 73,
        "height": 83
      },
      "banking": {
        "x": 427,
        "y": 749,
        "width": 73,
        "height": 24
      },
      "wealth": {
        "x": 427,
        "y": 875,
        "width": 73,
        "height": 44
      },
      "uspb": {
        "x": 427,
        "y": 1016,
        "width": 73,
        "height": 63
      },
      "all_other": {
        "x": 427,
        "y": 1177,
        "width": 73,
        "height": 19
      },
      "revenue": {
        "x": 1049,
        "y": 639,
        "width": 74,
        "height": 324
      },
      "pretax_income": {
        "x": 1672,
        "y": 484,
        "width": 74,
        "height": 99
      },
      "operating_expenses": {
        "x": 1672,
        "y": 876,
        "width": 74,
        "height": 188
      },
      "provision_for_credit_losses": {
        "x": 1672,
        "y": 1223,
        "width": 74,
        "height": 34
      },
      "net_income": {
        "x": 2295,
        "y": 321,
        "width": 73,
        "height": 74
      },
      "tax": {
        "x": 2295,
        "y": 534,
        "width": 73,
        "height": 26
      },
      "compensation_benefits": {
        "x": 2295,
        "y": 719,
        "width": 73,
        "height": 103
      },
      "other_general_operating": {
        "x": 2295,
        "y": 916,
        "width": 73,
        "height": 32
      },
      "technology_communication": {
        "x": 2295,
        "y": 1066,
        "width": 73,
        "height": 8
      },
      "premises_equipment": {
        "x": 2295,
        "y": 1200,
        "width": 73,
        "height": 2
      },
      "marketing": {
        "x": 2295,
        "y": 1311,
        "width": 73,
        "height": 44
      }
    },
    "labels": {
      "services": {
        "blocks": [
          {
            "x": 463,
            "top": 294,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 383,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Services",
                "size": 40,
                "weight": 800
              },
              {
                "text": "40% net margin",
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
            "top": 476,
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
            "x": 365,
            "top": 564,
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
            "x": 453,
            "top": 658,
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
            "x": 365,
            "top": 717,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Banking",
                "size": 40,
                "weight": 800
              },
              {
                "text": "22% net margin",
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
            "top": 784,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 856,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Wealth",
                "size": 40,
                "weight": 800
              },
              {
                "text": "18% net margin",
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
            "top": 927,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+0% Y/Y",
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
                "text": "18% net margin",
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
            "top": 1087,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 1163,
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
            "top": 449,
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
            "top": 373,
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
            "top": 1076,
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
            "top": 1270,
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
            "top": 300,
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
                "text": "+43% Y/Y",
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
            "top": 532,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax ($1.9B)",
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
            "top": 721,
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
            "top": 874,
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
            "top": 1015,
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
            "top": 1155,
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
            "top": 1302,
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
      "name": "花旗集团 · 2026 财年第三季度",
      "meta": {
        "title": "花旗集团 2026 财年第三季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 1980
      },
      "nodes": {
        "services": {
          "label": "服务",
          "notes": [
            "同比 +15%",
            "净利率 40%"
          ]
        },
        "markets": {
          "label": "市场",
          "notes": [
            "同比 +6%",
            "净利率 29%"
          ]
        },
        "banking": {
          "label": "银行",
          "notes": [
            "同比 +6%",
            "净利率 22%"
          ]
        },
        "wealth": {
          "label": "财富管理",
          "notes": [
            "同比 +15%",
            "净利率 18%"
          ]
        },
        "uspb": {
          "label": "美国个人银行",
          "notes": [
            "同比 +0%",
            "净利率 18%"
          ]
        },
        "all_other": {
          "label": "所有其他",
          "notes": [
            "同比 (2%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +8%"
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
            "同比 +43%"
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
                "top": 294,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 383,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "服务",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 40%",
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
                "top": 476,
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
                "top": 564,
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
                "x": 453,
                "top": 658,
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
                "top": 717,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "银行",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 22%",
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
                "top": 784,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 856,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "财富管理",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 18%",
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
                "top": 927,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +0%",
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
                    "text": "净利率 18%",
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
                "top": 1087,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 397,
                "top": 1163,
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
                "top": 449,
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
                "top": 373,
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
                "top": 1076,
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
                "top": 1270,
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
                "top": 300,
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
                    "text": "同比 +43%",
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
                "top": 532,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税费（$1.9B）",
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
                "top": 721,
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
                "top": 874,
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
                "top": 1015,
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
                "top": 1155,
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
                "top": 1302,
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
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"193\" y=\"268\" font-size=\"28\" font-weight=\"800\"  fill=\"#155077\">按业务分部</text>\n      <g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"211\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">存款</text><text data-operating-metric=\"deposits\" x=\"211\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$1.53T</text><text x=\"211\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +11%，环比 +2%</text></g>\n      <g><rect x=\"351\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"472\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">贷款</text><text data-operating-metric=\"loans\" x=\"472\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$0.80T</text><text x=\"472\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +12%，环比 +3%</text></g>\n      <g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"721\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"721\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">12.8%</text><text x=\"721\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 (0.5 个百分点)</text></g>\n    </g>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "citi-logo-q3-fy26",
      "href": "data/assets/raster-annotations/citigroup/company-logo-q3-fy26.png",
      "x": 940,
      "y": 245,
      "width": 285,
      "height": 190,
      "clearance": true
    }
  ],
  "operatingMetrics": [
    {
      "id": "deposits",
      "value": "1.53",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.53T"
    },
    {
      "id": "loans",
      "value": "0.80",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.80T"
    },
    {
      "id": "cet1",
      "value": "12.8",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "12.8%"
    }
  ]
});
