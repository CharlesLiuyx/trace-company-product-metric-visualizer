(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "citigroup-q3-fy24",
  "name": "Citigroup · Q3 FY24",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q3 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q3-fy24.png",
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
    "logoY": 259,
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
    "subtitleColor": "#686868",
    "noteColor": "#686868",
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"192\" y=\"272\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"211\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Deposits</text><text data-operating-metric=\"deposits\" x=\"211\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$1.31T</text><text x=\"211\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+3% Y/Y &amp; +2% Q/Q</text></g><g><rect x=\"351\" y=\"1211\" width=\"241\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"471.5\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Loans</text><text data-operating-metric=\"loans\" x=\"471.5\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$0.69T</text><text x=\"471.5\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+3% Y/Y &amp; Flat Q/Q</text></g><g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"721\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"721\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">13.7%</text><text x=\"721\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+0.1pp Y/Y</text></g><text x=\"529\" y=\"1401\" font-size=\"28\" fill=\"#686868\">CET1 = Common Equity Tier 1</text></g>",
  "nodes": [
    {
      "id": "services",
      "label": "Services",
      "value": 5,
      "valueText": "$5.0B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+8% Y/Y",
        "39% net margin"
      ]
    },
    {
      "id": "markets",
      "label": "Markets",
      "value": 4.8,
      "valueText": "$4.8B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+1% Y/Y",
        "23% net margin"
      ]
    },
    {
      "id": "banking",
      "label": "Banking",
      "value": 1.6,
      "valueText": "$1.6B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+16% Y/Y",
        "15% net margin"
      ]
    },
    {
      "id": "uspb",
      "label": "USPB",
      "value": 5,
      "valueText": "$5.0B",
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "+3% Y/Y",
        "10% net margin"
      ]
    },
    {
      "id": "wealth",
      "label": "Wealth",
      "value": 2,
      "valueText": "$2.0B",
      "type": "source",
      "col": 0,
      "order": 4,
      "notes": [
        "+9% Y/Y",
        "14% net margin"
      ]
    },
    {
      "id": "all_other",
      "label": "All Other",
      "value": 1.8,
      "valueText": "$1.8B",
      "type": "source",
      "col": 0,
      "order": 5
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 20.3,
      "valueText": "$20.3B",
      "type": "hub",
      "col": 1,
      "order": -1,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 4.4,
      "valueText": "$4.4B",
      "type": "profit",
      "col": 2,
      "order": 0
    },
    {
      "id": "operating_expenses",
      "label": "Noninterest expenses",
      "value": 13.3,
      "valueText": "($13.3B)",
      "type": "cost",
      "col": 2,
      "order": 1
    },
    {
      "id": "provision_for_credit_losses",
      "label": "Provision for credit losses",
      "value": 2.7,
      "valueText": "($2.7B)",
      "type": "cost",
      "col": 2,
      "order": 2
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 3.3,
      "valueText": "$3.3B",
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "(9%) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.1,
      "valueText": "($1.1B)",
      "type": "cost",
      "col": 3,
      "order": 1
    },
    {
      "id": "compensation_benefits",
      "label": "Compensation & benefits",
      "value": 7.1,
      "valueText": "($7.1B)",
      "type": "cost",
      "col": 3,
      "order": 2
    },
    {
      "id": "other_general_operating",
      "label": "Other general operating",
      "value": 3,
      "valueText": "($3.0B)",
      "type": "cost",
      "col": 3,
      "order": 3
    },
    {
      "id": "technology_communication",
      "label": "Technology & Communication",
      "value": 2.3,
      "valueText": "($2.3B)",
      "type": "cost",
      "col": 3,
      "order": 4
    },
    {
      "id": "premises_equipment",
      "label": "Occupancy",
      "value": 0.6,
      "valueText": "($0.6B)",
      "type": "cost",
      "col": 3,
      "order": 5
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
      "value": 5,
      "sourceWidth": 72,
      "targetWidth": 72,
      "y0": 432,
      "y1": 725,
      "targetOrder": 0
    },
    {
      "source": "markets",
      "target": "revenue",
      "value": 4.8,
      "sourceWidth": 70,
      "targetWidth": 70,
      "y0": 591,
      "y1": 796,
      "targetOrder": 1
    },
    {
      "source": "banking",
      "target": "revenue",
      "value": 1.6,
      "sourceWidth": 24,
      "targetWidth": 24,
      "y0": 727,
      "y1": 843,
      "targetOrder": 2
    },
    {
      "source": "uspb",
      "target": "revenue",
      "value": 5,
      "sourceWidth": 72,
      "targetWidth": 72,
      "y0": 868,
      "y1": 891,
      "targetOrder": 3
    },
    {
      "source": "wealth",
      "target": "revenue",
      "value": 2,
      "sourceWidth": 29,
      "targetWidth": 29,
      "y0": 1013.5,
      "y1": 941.5,
      "targetOrder": 4
    },
    {
      "source": "all_other",
      "target": "revenue",
      "value": 1.8,
      "sourceWidth": 26,
      "targetWidth": 25,
      "y0": 1135,
      "y1": 968.5,
      "targetOrder": 5
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 4.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 63,
      "targetWidth": 63
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 13.3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 191,
      "targetWidth": 191
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 2.7,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 38,
      "targetWidth": 38
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3.3,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 47,
      "targetWidth": 47
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.1,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 16,
      "targetWidth": 16
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 7.1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 101,
      "targetWidth": 101
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 43,
      "targetWidth": 43
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.3,
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
      "sourceWidth": 9,
      "targetWidth": 9
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.3,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 5,
      "targetWidth": 5
    }
  ],
  "layout": {
    "scale": 14.3,
    "nodes": {
      "services": {
        "x": 418,
        "y": 396,
        "width": 73,
        "height": 72
      },
      "markets": {
        "x": 418,
        "y": 556,
        "width": 73,
        "height": 70
      },
      "banking": {
        "x": 418,
        "y": 715,
        "width": 73,
        "height": 24
      },
      "uspb": {
        "x": 418,
        "y": 832,
        "width": 73,
        "height": 72
      },
      "wealth": {
        "x": 418,
        "y": 999,
        "width": 73,
        "height": 29
      },
      "all_other": {
        "x": 418,
        "y": 1122,
        "width": 73,
        "height": 26
      },
      "revenue": {
        "x": 1040,
        "y": 689,
        "width": 74,
        "height": 292
      },
      "pretax_income": {
        "x": 1658,
        "y": 519,
        "width": 74,
        "height": 63
      },
      "operating_expenses": {
        "x": 1656,
        "y": 885,
        "width": 73,
        "height": 191
      },
      "provision_for_credit_losses": {
        "x": 1658,
        "y": 1258,
        "width": 74,
        "height": 38
      },
      "net_income": {
        "x": 2286,
        "y": 318,
        "width": 73,
        "height": 47
      },
      "tax": {
        "x": 2286,
        "y": 469,
        "width": 73,
        "height": 16
      },
      "compensation_benefits": {
        "x": 2286,
        "y": 634,
        "width": 73,
        "height": 101
      },
      "other_general_operating": {
        "x": 2286,
        "y": 848,
        "width": 73,
        "height": 43
      },
      "technology_communication": {
        "x": 2286,
        "y": 1036,
        "width": 73,
        "height": 32
      },
      "premises_equipment": {
        "x": 2286,
        "y": 1194,
        "width": 73,
        "height": 9
      },
      "marketing": {
        "x": 2286,
        "y": 1338,
        "width": 73,
        "height": 5
      }
    },
    "labels": {
      "services": {
        "blocks": [
          {
            "x": 454,
            "top": 307,
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
            "x": 383,
            "top": 410,
            "lines": [
              {
                "text": "Services",
                "size": 40,
                "weight": 800
              },
              {
                "text": "39% net margin",
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
            "x": 454,
            "top": 462,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#686868"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 383,
            "top": 557,
            "lines": [
              {
                "text": "Markets",
                "size": 40,
                "weight": 800
              },
              {
                "text": "23% net margin",
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
            "x": 454,
            "top": 622,
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
                "color": "#686868"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 383,
            "top": 702,
            "lines": [
              {
                "text": "Banking",
                "size": 40,
                "weight": 800
              },
              {
                "text": "15% net margin",
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
            "x": 454,
            "top": 733,
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
                "color": "#686868"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 383,
            "top": 844,
            "lines": [
              {
                "text": "USPB",
                "size": 40,
                "weight": 800
              },
              {
                "text": "10% net margin",
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
            "x": 454,
            "top": 900,
            "lines": [
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
          },
          {
            "x": 383,
            "top": 988,
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
            "x": 454,
            "top": 1068,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 383,
            "top": 1114,
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
            "x": 1077,
            "top": 500,
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
                "text": "+1% Y/Y",
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
            "x": 1695,
            "top": 407,
            "lines": [
              {
                "text": "Pretax income",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1693,
            "top": 1090,
            "lines": [
              {
                "text": "Noninterest",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 13
          }
        ]
      },
      "provision_for_credit_losses": {
        "blocks": [
          {
            "x": 1695,
            "top": 1309,
            "lines": [
              {
                "text": "Provision for",
                "size": 38,
                "weight": 800
              },
              {
                "text": "credit losses",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 13
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2489,
            "top": 277,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              },
              {
                "text": "(9%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#686868"
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2489,
            "top": 468,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 9
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2489,
            "top": 628,
            "lines": [
              {
                "text": "Compensation",
                "size": 32,
                "weight": 800
              },
              {
                "text": "& benefits",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
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
            "x": 2489,
            "top": 828,
            "lines": [
              {
                "text": "Other general",
                "size": 32,
                "weight": 800
              },
              {
                "text": "operating",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
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
            "x": 2506,
            "top": 1003,
            "lines": [
              {
                "text": "Technology &",
                "size": 31,
                "weight": 800
              },
              {
                "text": "Communication",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
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
            "x": 2489,
            "top": 1155,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
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
            "x": 2489,
            "top": 1296,
            "lines": [
              {
                "text": "Marketing",
                "size": 31,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400
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
      "name": "花旗集团 · 2024 财年第三季度",
      "meta": {
        "title": "花旗集团 2024 财年第三季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 1980
      },
      "nodes": {
        "services": {
          "label": "服务",
          "notes": [
            "同比 +8%",
            "净利率 39%"
          ]
        },
        "markets": {
          "label": "市场",
          "notes": [
            "同比 +1%",
            "净利率 23%"
          ]
        },
        "banking": {
          "label": "银行",
          "notes": [
            "同比 +16%",
            "净利率 15%"
          ]
        },
        "uspb": {
          "label": "美国个人银行",
          "notes": [
            "同比 +3%",
            "净利率 10%"
          ]
        },
        "wealth": {
          "label": "财富管理",
          "notes": [
            "同比 +9%",
            "净利率 14%"
          ]
        },
        "all_other": {
          "label": "所有其他"
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
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
            "同比 (9%)"
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
                "x": 454,
                "top": 307,
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
                "x": 383,
                "top": 410,
                "lines": [
                  {
                    "text": "服务",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 39%",
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
                "x": 454,
                "top": 462,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 383,
                "top": 557,
                "lines": [
                  {
                    "text": "市场",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 23%",
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
                "x": 454,
                "top": 622,
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
                    "color": "#686868"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 383,
                "top": 702,
                "lines": [
                  {
                    "text": "银行",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 15%",
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
                "x": 454,
                "top": 733,
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
                    "color": "#686868"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 383,
                "top": 844,
                "lines": [
                  {
                    "text": "美国个人银行",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 10%",
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
                "x": 454,
                "top": 900,
                "lines": [
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
              },
              {
                "x": 383,
                "top": 988,
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
                "x": 454,
                "top": 1068,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 383,
                "top": 1114,
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
                "x": 1077,
                "top": 500,
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
                    "text": "同比 +1%",
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
                "x": 1695,
                "top": 407,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1693,
                "top": 1090,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 13
              }
            ]
          },
          "provision_for_credit_losses": {
            "blocks": [
              {
                "x": 1695,
                "top": 1309,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "拨备",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 13
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2489,
                "top": 277,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#686868"
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2489,
                "top": 468,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2489,
                "top": 628,
                "lines": [
                  {
                    "text": "薪酬",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "与福利",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
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
                "x": 2489,
                "top": 828,
                "lines": [
                  {
                    "text": "其他一般",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "运营",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
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
                "x": 2506,
                "top": 1003,
                "lines": [
                  {
                    "text": "技术与",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "通信",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
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
                "x": 2489,
                "top": 1155,
                "lines": [
                  {
                    "text": "场地费用",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
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
                "x": 2489,
                "top": 1296,
                "lines": [
                  {
                    "text": "营销",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 9
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"192\" y=\"272\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"211\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">存款</text><text data-operating-metric=\"deposits\" x=\"211\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$1.31T</text><text x=\"211\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +3%，环比 +2%</text></g><g><rect x=\"351\" y=\"1211\" width=\"241\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"471.5\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">贷款</text><text data-operating-metric=\"loans\" x=\"471.5\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$0.69T</text><text x=\"471.5\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +3%，环比持平</text></g><g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003770\"/><text x=\"721\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"721\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">13.7%</text><text x=\"721\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +0.1 个百分点</text></g><text x=\"529\" y=\"1401\" font-size=\"28\" fill=\"#686868\">CET1 = 普通股一级资本</text></g>"
    },
    "preservedAnnotationText": [
      "$1.31T",
      "$0.69T"
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
      "value": "0.69",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.69T"
    },
    {
      "id": "cet1",
      "value": "13.7",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "13.7%"
    }
  ]
});})();
