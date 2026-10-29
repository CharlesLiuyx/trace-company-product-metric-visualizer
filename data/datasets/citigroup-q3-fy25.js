window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "citigroup-q3-fy25",
  "name": "Citigroup · Q3 FY25",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q3 FY25 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 120,
    "titleWeight": 800,
    "titleTextLength": 2350,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "logoWidth": 278,
    "logoHeight": 180,
    "logoY": 252,
    "logoViewBox": "0 0 280 180",
    "logoSvg": "\n    <path d=\"M61 48 A79 79 0 0 1 219 48\" fill=\"none\" stroke=\"#ed1b2f\" stroke-width=\"15\" />\n    <text x=\"140\" y=\"168\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"180\" font-weight=\"700\" letter-spacing=\"-14\" fill=\"#084681\">citi</text>",
    "logoX": 950
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
    "subtitleColor": "#686868",
    "noteColor": "#686868",
    "palette": {
      "source": {
        "node": "#003770",
        "label": "#155077"
      },
      "hub": {
        "node": "#003770",
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"193\" y=\"264\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"211\" y=\"1264\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Deposits</text><text data-operating-metric=\"deposits\" x=\"211\" y=\"1304\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$1.38T</text><text x=\"211\" y=\"1335\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+6% Y/Y &amp; +2% Q/Q</text></g><g><rect x=\"351\" y=\"1211\" width=\"241\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"471.5\" y=\"1264\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Loans</text><text data-operating-metric=\"loans\" x=\"471.5\" y=\"1304\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$0.73T</text><text x=\"471.5\" y=\"1335\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+7% Y/Y &amp; +1% Q/Q</text></g><g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"721\" y=\"1264\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"721\" y=\"1304\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">13.2%</text><text x=\"721\" y=\"1335\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">(0.5pp) Y/Y</text></g></g>",
  "nodes": [
    {
      "id": "services",
      "label": "Services",
      "value": 5.4,
      "notes": [
        "+7% Y/Y",
        "34% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "markets",
      "label": "Markets",
      "value": 5.6,
      "notes": [
        "+15% Y/Y",
        "28% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "banking",
      "label": "Banking",
      "value": 2.1,
      "notes": [
        "+34% Y/Y",
        "30% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2
    },
    {
      "id": "wealth",
      "label": "Wealth",
      "value": 2.2,
      "notes": [
        "+8% Y/Y",
        "17% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3
    },
    {
      "id": "uspb",
      "label": "USPB",
      "value": 5.3,
      "notes": [
        "+7% Y/Y",
        "16% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 4
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 22.1,
      "notes": [
        "+9% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 0
    },
    {
      "id": "all_other",
      "label": "All Other",
      "value": 1.5,
      "valueText": "$1.5B",
      "type": "source",
      "col": 0,
      "order": 5,
      "notes": [
        "(16%) Y/Y"
      ]
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 5.3,
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
      "value": 14.3,
      "type": "cost",
      "col": 2,
      "order": 2,
      "valueText": "($14.3B)"
    },
    {
      "id": "provision_for_credit_losses",
      "label": [
        "Provision for",
        "credit losses"
      ],
      "value": 2.5,
      "type": "cost",
      "col": 2,
      "order": 3,
      "valueText": "($2.5B)"
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 3.8,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.6,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($1.6B)"
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
      "order": 2,
      "valueText": "($7.5B)"
    },
    {
      "id": "other_general_operating",
      "label": [
        "Other general",
        "operating"
      ],
      "value": 3.6,
      "type": "cost",
      "col": 3,
      "order": 3,
      "valueText": "($3.6B)"
    },
    {
      "id": "technology_communication",
      "label": [
        "Technology &",
        "communication"
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
      "type": "cost",
      "col": 3,
      "order": 6,
      "valueText": "($0.3B)"
    }
  ],
  "links": [
    {
      "source": "services",
      "target": "revenue",
      "value": 5.4,
      "targetOrder": 0,
      "sourceWidth": 72,
      "targetWidth": 72
    },
    {
      "source": "markets",
      "target": "revenue",
      "value": 5.6,
      "targetOrder": 1,
      "sourceWidth": 74,
      "targetWidth": 74
    },
    {
      "source": "banking",
      "target": "revenue",
      "value": 2.1,
      "targetOrder": 2,
      "sourceWidth": 29,
      "targetWidth": 28
    },
    {
      "source": "wealth",
      "target": "revenue",
      "value": 2.2,
      "targetOrder": 3,
      "sourceWidth": 29,
      "targetWidth": 29
    },
    {
      "source": "uspb",
      "target": "revenue",
      "value": 5.3,
      "targetOrder": 4,
      "sourceWidth": 71,
      "targetWidth": 70
    },
    {
      "source": "all_other",
      "target": "revenue",
      "value": 1.5,
      "targetOrder": 5,
      "sourceWidth": 21,
      "targetWidth": 21
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 5.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 70,
      "sourceWidth": 71
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 14.3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 190,
      "sourceWidth": 190
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 2.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "targetWidth": 33,
      "sourceWidth": 33
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 51,
      "sourceWidth": 50
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 21,
      "sourceWidth": 20
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 7.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "targetWidth": 100,
      "sourceWidth": 99
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 3.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "targetWidth": 48,
      "sourceWidth": 47
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "targetWidth": 31,
      "sourceWidth": 30
    },
    {
      "source": "operating_expenses",
      "target": "premises_equipment",
      "value": 0.6,
      "sourceOrder": 3,
      "targetOrder": 0,
      "targetWidth": 8,
      "sourceWidth": 9
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.3,
      "sourceOrder": 4,
      "targetOrder": 0,
      "targetWidth": 4,
      "sourceWidth": 5
    }
  ],
  "layout": {
    "scale": 13.25,
    "nodes": {
      "services": {
        "x": 424,
        "y": 374,
        "width": 73,
        "height": 72
      },
      "markets": {
        "x": 424,
        "y": 550,
        "width": 73,
        "height": 74
      },
      "banking": {
        "x": 424,
        "y": 730,
        "width": 73,
        "height": 29
      },
      "wealth": {
        "x": 424,
        "y": 867,
        "width": 73,
        "height": 29
      },
      "uspb": {
        "x": 424,
        "y": 1001,
        "width": 73,
        "height": 71
      },
      "all_other": {
        "x": 424,
        "y": 1170,
        "width": 73,
        "height": 21
      },
      "revenue": {
        "x": 1047,
        "y": 645,
        "width": 73,
        "height": 294
      },
      "pretax_income": {
        "x": 1670,
        "y": 512,
        "width": 73,
        "height": 70
      },
      "operating_expenses": {
        "x": 1670,
        "y": 801,
        "width": 73,
        "height": 190
      },
      "provision_for_credit_losses": {
        "x": 1670,
        "y": 1198,
        "width": 73,
        "height": 33
      },
      "net_income": {
        "x": 2293,
        "y": 340,
        "width": 73,
        "height": 51
      },
      "tax": {
        "x": 2293,
        "y": 489,
        "width": 73,
        "height": 21
      },
      "compensation_benefits": {
        "x": 2293,
        "y": 620,
        "width": 73,
        "height": 100
      },
      "other_general_operating": {
        "x": 2293,
        "y": 819,
        "width": 73,
        "height": 48
      },
      "technology_communication": {
        "x": 2293,
        "y": 991,
        "width": 73,
        "height": 31
      },
      "premises_equipment": {
        "x": 2293,
        "y": 1153,
        "width": 73,
        "height": 8
      },
      "marketing": {
        "x": 2293,
        "y": 1288,
        "width": 73,
        "height": 4
      }
    },
    "labels": {
      "services": {
        "blocks": [
          {
            "x": 460,
            "top": 282,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#686868"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 374,
            "lines": [
              {
                "text": "Services",
                "size": 40,
                "weight": 800
              },
              {
                "text": "34% net margin",
                "size": 28,
                "weight": 400,
                "color": "#686868"
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
            "x": 460,
            "top": 458,
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
                "color": "#686868"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 554,
            "lines": [
              {
                "text": "Markets",
                "size": 40,
                "weight": 800
              },
              {
                "text": "28% net margin",
                "size": 28,
                "weight": 400,
                "color": "#686868"
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
            "x": 460,
            "top": 637,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+34% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#686868"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 724,
            "lines": [
              {
                "text": "Banking",
                "size": 40,
                "weight": 800
              },
              {
                "text": "30% net margin",
                "size": 28,
                "weight": 400,
                "color": "#686868"
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
            "x": 460,
            "top": 773,
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
                "color": "#686868"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 860,
            "lines": [
              {
                "text": "Wealth",
                "size": 40,
                "weight": 800
              },
              {
                "text": "17% net margin",
                "size": 28,
                "weight": 400,
                "color": "#686868"
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
            "x": 460,
            "top": 910,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#686868"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 1006,
            "lines": [
              {
                "text": "USPB",
                "size": 40,
                "weight": 800
              },
              {
                "text": "16% net margin",
                "size": 28,
                "weight": 400,
                "color": "#686868"
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
            "x": 460,
            "top": 1080,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(16%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#686868"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 382,
            "top": 1155,
            "lines": [
              {
                "text": "All Other",
                "size": 40,
                "weight": 800
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
            "x": 1084,
            "top": 459,
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
                "text": "+9% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#686868"
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
            "x": 1707,
            "top": 404,
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
            "x": 1707,
            "top": 1011,
            "lines": [
              {
                "text": "Noninterest",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
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
            "x": 1707,
            "top": 1251,
            "lines": [
              {
                "text": "Provision for",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
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
            "x": 2498,
            "top": 315,
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
                "text": "+16% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#686868"
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
            "x": 2498,
            "top": 486,
            "lines": [
              {
                "text": "Tax",
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
            "lineGap": 10
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2510,
            "top": 613,
            "lines": [
              {
                "text": "Compensation",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "& benefits",
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
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "other_general_operating": {
        "blocks": [
          {
            "x": 2510,
            "top": 793,
            "lines": [
              {
                "text": "Other general",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "operating",
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
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "technology_communication": {
        "blocks": [
          {
            "x": 2510,
            "top": 947,
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
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "premises_equipment": {
        "blocks": [
          {
            "x": 2510,
            "top": 1094,
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
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2510,
            "top": 1236,
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
            ],
            "anchor": "middle",
            "lineGap": 10
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "花旗集团 · 2025 财年第三季度",
      "meta": {
        "title": "花旗集团 2025 财年第三季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 1980
      },
      "nodes": {
        "services": {
          "label": "服务",
          "notes": [
            "同比 +7%",
            "净利率 34%"
          ]
        },
        "markets": {
          "label": "市场",
          "notes": [
            "同比 +15%",
            "净利率 28%"
          ]
        },
        "banking": {
          "label": "银行",
          "notes": [
            "同比 +34%",
            "净利率 30%"
          ]
        },
        "wealth": {
          "label": "财富管理",
          "notes": [
            "同比 +8%",
            "净利率 17%"
          ]
        },
        "uspb": {
          "label": "美国个人银行",
          "notes": [
            "同比 +7%",
            "净利率 16%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +9%"
          ]
        },
        "all_other": {
          "label": "所有其他",
          "notes": [
            "同比 (16%)"
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
            "同比 +16%"
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
                "x": 460,
                "top": 282,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 382,
                "top": 374,
                "lines": [
                  {
                    "text": "服务",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 34%",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
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
                "x": 460,
                "top": 458,
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
                    "color": "#686868"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 382,
                "top": 554,
                "lines": [
                  {
                    "text": "市场",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 28%",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
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
                "x": 460,
                "top": 637,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +34%",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 382,
                "top": 724,
                "lines": [
                  {
                    "text": "银行",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 30%",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
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
                "x": 460,
                "top": 773,
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
                    "color": "#686868"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 382,
                "top": 860,
                "lines": [
                  {
                    "text": "财富管理",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
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
                "x": 460,
                "top": 910,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 382,
                "top": 1006,
                "lines": [
                  {
                    "text": "美国个人银行",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
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
                "x": 460,
                "top": 1080,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (16%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 382,
                "top": 1160,
                "lines": [
                  {
                    "text": "所有其他",
                    "size": 34,
                    "weight": 800
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
                "x": 1084,
                "top": 459,
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
                    "text": "同比 +9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
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
                "x": 1707,
                "top": 404,
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
                "x": 1707,
                "top": 1011,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
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
                "x": 1707,
                "top": 1251,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "拨备",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
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
                "x": 2498,
                "top": 315,
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
                    "text": "同比 +16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
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
                "x": 2498,
                "top": 486,
                "lines": [
                  {
                    "text": "税费",
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
                "lineGap": 10
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2510,
                "top": 613,
                "lines": [
                  {
                    "text": "薪酬",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "与福利",
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
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "other_general_operating": {
            "blocks": [
              {
                "x": 2510,
                "top": 793,
                "lines": [
                  {
                    "text": "其他一般",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "运营",
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
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "technology_communication": {
            "blocks": [
              {
                "x": 2510,
                "top": 947,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "通信",
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
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "premises_equipment": {
            "blocks": [
              {
                "x": 2510,
                "top": 1094,
                "lines": [
                  {
                    "text": "场地与",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "设备",
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
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2510,
                "top": 1236,
                "lines": [
                  {
                    "text": "营销",
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
                ],
                "anchor": "middle",
                "lineGap": 10
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"193\" y=\"264\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"211\" y=\"1264\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">存款</text><text data-operating-metric=\"deposits\" x=\"211\" y=\"1304\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$1.38T</text><text x=\"211\" y=\"1335\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +6%，环比 +2%</text></g><g><rect x=\"351\" y=\"1211\" width=\"241\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"471.5\" y=\"1264\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">贷款</text><text data-operating-metric=\"loans\" x=\"471.5\" y=\"1304\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$0.73T</text><text x=\"471.5\" y=\"1335\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +7%，环比 +1%</text></g><g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"721\" y=\"1264\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"721\" y=\"1304\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">13.2%</text><text x=\"721\" y=\"1335\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 (0.5 个百分点)</text></g></g>"
    },
    "preservedAnnotationText": [
      "$1.38T",
      "$0.73T"
    ]
  },
  "operatingMetrics": [
    {
      "id": "deposits",
      "value": "1.38",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.38T"
    },
    {
      "id": "loans",
      "value": "0.73",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.73T"
    },
    {
      "id": "cet1",
      "value": "13.2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "13.2%"
    }
  ]
});
