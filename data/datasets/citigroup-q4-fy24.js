(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "citigroup-q4-fy24",
  "name": "Citigroup · Q4 FY24",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q4 FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q4-fy24.png",
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
    "logoY": 256,
    "logoViewBox": "0 0 280 180",
    "logoSvg": "\n    <path d=\"M61 48 A79 79 0 0 1 219 48\" fill=\"none\" stroke=\"#ed0000\" stroke-width=\"15\" />\n    <text x=\"140\" y=\"168\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"180\" font-weight=\"700\" letter-spacing=\"-14\" fill=\"#003c74\">citi</text>",
    "logoX": 923
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
  "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"193\" y=\"273\" font-size=\"39\" font-weight=\"800\"  fill=\"#155077\">By Business Segment</text>\n      <g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"211\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Deposits</text><text x=\"211\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"deposits\">$1.31T</text><text x=\"211\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">(2%) Y/Y &amp; (2%) Q/Q</text></g>\n      <g><rect x=\"351\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"472\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">Loans</text><text x=\"472\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"loans\">$0.69T</text><text x=\"472\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+1% Y/Y &amp; +1% Q/Q</text></g>\n      <g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"721\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 ratio</text><text x=\"721\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"cet1\">13.6%</text><text x=\"721\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+0.2pp Y/Y</text></g>\n    </g>",
  "nodes": [
    {
      "id": "services",
      "label": "Services",
      "value": 5.2,
      "notes": [
        "+15% Y/Y",
        "36% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$5.2B"
    },
    {
      "id": "markets",
      "label": "Markets",
      "value": 4.6,
      "notes": [
        "+36% Y/Y",
        "22% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$4.6B"
    },
    {
      "id": "banking",
      "label": "Banking",
      "value": 1.2,
      "notes": [
        "+27% Y/Y",
        "29% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$1.2B"
    },
    {
      "id": "wealth",
      "label": "Wealth",
      "value": 2,
      "notes": [
        "+20% Y/Y",
        "17% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 3,
      "valueText": "$2.0B"
    },
    {
      "id": "uspb",
      "label": "USPB",
      "value": 5.2,
      "notes": [
        "+6% Y/Y",
        "7% net margin"
      ],
      "type": "source",
      "col": 0,
      "order": 4,
      "valueText": "$5.2B"
    },
    {
      "id": "all_other",
      "label": "All other",
      "value": 1.4,
      "notes": [],
      "type": "source",
      "col": 0,
      "order": 5,
      "valueText": "$1.4B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 19.6,
      "notes": [
        "+12% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 0,
      "valueText": "$19.6B"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 3.8,
      "type": "profit",
      "col": 2,
      "order": 0,
      "valueText": "$3.8B"
    },
    {
      "id": "operating_expenses",
      "label": [
        "Noninterest",
        "expenses"
      ],
      "value": 13.2,
      "type": "cost",
      "col": 2,
      "order": 1,
      "valueText": "($13.2B)"
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
      "value": 2.9,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "NM"
      ],
      "valueText": "$2.9B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.9,
      "type": "cost",
      "col": 3,
      "order": 1,
      "valueText": "($0.9B)"
    },
    {
      "id": "compensation_benefits",
      "label": [
        "Compensation",
        "& benefits"
      ],
      "value": 6.9,
      "type": "cost",
      "col": 3,
      "order": 2,
      "valueText": "($6.9B)"
    },
    {
      "id": "other_general_operating",
      "label": [
        "Other general",
        "operating"
      ],
      "value": 3,
      "type": "cost",
      "col": 3,
      "order": 3,
      "valueText": "($3.0B)"
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
      "label": "Occupancy",
      "value": 0.7,
      "type": "cost",
      "col": 3,
      "order": 5,
      "valueText": "($0.7B)"
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
      "value": 5.2,
      "targetOrder": 0,
      "sourceWidth": 78,
      "targetWidth": 79
    },
    {
      "source": "markets",
      "target": "revenue",
      "value": 4.6,
      "targetOrder": 1,
      "sourceWidth": 69,
      "targetWidth": 70
    },
    {
      "source": "banking",
      "target": "revenue",
      "value": 1.2,
      "targetOrder": 2,
      "sourceWidth": 18,
      "targetWidth": 19
    },
    {
      "source": "wealth",
      "target": "revenue",
      "value": 2,
      "targetOrder": 3,
      "sourceWidth": 29,
      "targetWidth": 30
    },
    {
      "source": "uspb",
      "target": "revenue",
      "value": 5.2,
      "targetOrder": 4,
      "sourceWidth": 79,
      "targetWidth": 80
    },
    {
      "source": "all_other",
      "target": "revenue",
      "value": 1.4,
      "targetOrder": 5,
      "sourceWidth": 20,
      "targetWidth": 20
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 59,
      "targetWidth": 57
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 13.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 200,
      "targetWidth": 200
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 2.6,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 39,
      "targetWidth": 40
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.9,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 44,
      "targetWidth": 44
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.9,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 13,
      "targetWidth": 14
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 6.9,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 105,
      "targetWidth": 106
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 46,
      "targetWidth": 46
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 35,
      "targetWidth": 35
    },
    {
      "source": "operating_expenses",
      "target": "premises_equipment",
      "value": 0.7,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 10,
      "targetWidth": 10
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.3,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 4,
      "targetWidth": 4
    }
  ],
  "layout": {
    "scale": 15.2,
    "nodes": {
      "services": {
        "x": 420,
        "y": 387,
        "width": 73,
        "height": 78
      },
      "markets": {
        "x": 420,
        "y": 562,
        "width": 73,
        "height": 69
      },
      "banking": {
        "x": 420,
        "y": 731,
        "width": 73,
        "height": 18
      },
      "wealth": {
        "x": 420,
        "y": 841,
        "width": 73,
        "height": 29
      },
      "uspb": {
        "x": 420,
        "y": 966,
        "width": 73,
        "height": 79
      },
      "all_other": {
        "x": 420,
        "y": 1140,
        "width": 73,
        "height": 20
      },
      "revenue": {
        "x": 1038,
        "y": 698,
        "width": 73,
        "height": 298
      },
      "pretax_income": {
        "x": 1668,
        "y": 542,
        "width": 73,
        "height": 57
      },
      "operating_expenses": {
        "x": 1668,
        "y": 900,
        "width": 73,
        "height": 200
      },
      "provision_for_credit_losses": {
        "x": 1668,
        "y": 1260,
        "width": 73,
        "height": 40
      },
      "net_income": {
        "x": 2288,
        "y": 356,
        "width": 73,
        "height": 44
      },
      "tax": {
        "x": 2288,
        "y": 533,
        "width": 73,
        "height": 14
      },
      "compensation_benefits": {
        "x": 2288,
        "y": 676,
        "width": 73,
        "height": 106
      },
      "other_general_operating": {
        "x": 2288,
        "y": 887,
        "width": 73,
        "height": 46
      },
      "technology_communication": {
        "x": 2288,
        "y": 1050,
        "width": 73,
        "height": 35
      },
      "premises_equipment": {
        "x": 2288,
        "y": 1214,
        "width": 73,
        "height": 10
      },
      "marketing": {
        "x": 2288,
        "y": 1352,
        "width": 73,
        "height": 4
      }
    },
    "labels": {
      "services": {
        "blocks": [
          {
            "x": 453,
            "top": 288,
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
            "x": 382,
            "top": 393,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Services",
                "size": 40,
                "weight": 800
              },
              {
                "text": "36% net margin",
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
            "top": 463,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+36% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 565,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Markets",
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
      "banking": {
        "blocks": [
          {
            "x": 453,
            "top": 629,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+27% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 375,
            "top": 710,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "Banking",
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
      "wealth": {
        "blocks": [
          {
            "x": 453,
            "top": 740,
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
            "x": 382,
            "top": 826,
            "anchor": "end",
            "lineGap": 13,
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
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "uspb": {
        "blocks": [
          {
            "x": 453,
            "top": 877,
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
            "x": 382,
            "top": 972,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "USPB",
                "size": 40,
                "weight": 800
              },
              {
                "text": "7% net margin",
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
            "x": 453,
            "top": 1084,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 382,
            "top": 1125.5,
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
            "x": 1074,
            "top": 507,
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
                "text": "+12% Y/Y",
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
            "x": 1704,
            "top": 435,
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
            "x": 1695,
            "top": 1116,
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
            "x": 1704,
            "top": 1320,
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
            "x": 2380,
            "top": 313,
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
                "text": "NM",
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
            "x": 2410,
            "top": 531,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Tax ($0.9B)",
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
            "x": 2380,
            "top": 673,
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
            "x": 2380,
            "top": 855,
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
            "x": 2380,
            "top": 1008,
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
            "x": 2425,
            "top": 1185,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Occupancy",
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
            "x": 2425,
            "top": 1317,
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
      "name": "花旗集团 · 2024 财年第四季度",
      "meta": {
        "title": "花旗集团 2024 财年第四季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 1980
      },
      "nodes": {
        "services": {
          "label": "服务",
          "notes": [
            "同比 +15%",
            "净利率 36%"
          ]
        },
        "markets": {
          "label": "市场",
          "notes": [
            "同比 +36%",
            "净利率 22%"
          ]
        },
        "banking": {
          "label": "银行",
          "notes": [
            "同比 +27%",
            "净利率 29%"
          ]
        },
        "wealth": {
          "label": "财富管理",
          "notes": [
            "同比 +20%",
            "净利率 17%"
          ]
        },
        "uspb": {
          "label": "美国个人银行",
          "notes": [
            "同比 +6%",
            "净利率 7%"
          ]
        },
        "all_other": {
          "label": "所有其他",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
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
            "不适用"
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
                "x": 453,
                "top": 288,
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
                "x": 382,
                "top": 393,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "服务",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 36%",
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
                "top": 463,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +36%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 375,
                "top": 565,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "市场",
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
          "banking": {
            "blocks": [
              {
                "x": 453,
                "top": 629,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 375,
                "top": 710,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "银行",
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
          "wealth": {
            "blocks": [
              {
                "x": 453,
                "top": 740,
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
                "x": 382,
                "top": 826,
                "anchor": "end",
                "lineGap": 13,
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
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "uspb": {
            "blocks": [
              {
                "x": 453,
                "top": 877,
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
                "x": 382,
                "top": 972,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "美国个人银行",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "净利率 7%",
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
                "x": 453,
                "top": 1084,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 382,
                "top": 1125.5,
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
                "x": 1074,
                "top": 507,
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
                    "text": "同比 +12%",
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
                "x": 1704,
                "top": 435,
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
                "x": 1695,
                "top": 1116,
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
                "x": 1704,
                "top": 1320,
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
                "x": 2380,
                "top": 313,
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
                    "text": "不适用",
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
                "x": 2410,
                "top": 531,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "税费（$0.9B）",
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
                "x": 2380,
                "top": 673,
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
                "x": 2380,
                "top": 855,
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
                "x": 2380,
                "top": 1008,
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
                "x": 2425,
                "top": 1185,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "场地占用",
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
                "x": 2425,
                "top": 1317,
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
      "annotationsSvg": "\n    <g font-family=\"Noto Sans,Arial,sans-serif\">\n      <text x=\"193\" y=\"273\" font-size=\"39\" font-weight=\"800\"  fill=\"#155077\">按业务分部</text>\n      <g><rect x=\"79\" y=\"1211\" width=\"264\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"211\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">存款</text><text x=\"211\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"deposits\">$1.31T</text><text x=\"211\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 (2%)，环比 (2%)</text></g>\n      <g><rect x=\"351\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"472\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">贷款</text><text x=\"472\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"loans\">$0.69T</text><text x=\"472\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +1%，环比 +1%</text></g>\n      <g><rect x=\"600\" y=\"1211\" width=\"242\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"721\" y=\"1263\" text-anchor=\"middle\" font-size=\"30\" font-weight=\"800\" fill=\"#fff\">CET1 比率</text><text x=\"721\" y=\"1303\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\" data-operating-metric=\"cet1\">13.6%</text><text x=\"721\" y=\"1334\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +0.2 个百分点</text></g>\n    </g>"
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
      "value": "13.6",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "13.6%"
    }
  ]
});})();
