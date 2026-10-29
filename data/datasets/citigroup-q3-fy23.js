(function () {
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "citigroup-q3-fy23",
  "name": "Citigroup · Q3 FY23",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q3 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q3-fy23.png",
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
    "logoX": 592,
    "logoY": 270,
    "logoWidth": 278,
    "logoHeight": 180,
    "logoViewBox": "0 0 280 180",
    "logoSvg": "\n    <path d=\"M61 48 A79 79 0 0 1 219 48\" fill=\"none\" stroke=\"#ed0000\" stroke-width=\"15\" />\n    <text x=\"140\" y=\"168\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"180\" font-weight=\"700\" letter-spacing=\"-14\" fill=\"#003c74\">citi</text>"
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
        "label": "#00348b"
      },
      "hub": {
        "node": "#003870",
        "label": "#00348b"
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"192\" y=\"273\" font-size=\"38\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"70\" y=\"1205\" width=\"240\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"190.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"190.0\" y=\"1297\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">13.5%</text><text x=\"190.0\" y=\"1329\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+1.2pp Y/Y</text></g><g><rect x=\"320\" y=\"1205\" width=\"215\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"427.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">Deposits</text><text data-operating-metric=\"deposits\" x=\"427.5\" y=\"1297\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$1.32T</text><text x=\"427.5\" y=\"1329\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">Flat Y/Y</text></g><g><rect x=\"544\" y=\"1205\" width=\"203\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"645.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">Loans</text><text data-operating-metric=\"loans\" x=\"645.5\" y=\"1297\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$0.66T</text><text x=\"645.5\" y=\"1329\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">+1% Y/Y</text></g><text x=\"430\" y=\"1392\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">CET1 = Common Equity Tier 1</text><text x=\"171\" y=\"1447\" font-size=\"40\" font-weight=\"800\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "nodes": [
    {
      "id": "institutional_clients_group",
      "label": "Institutional Clients Group",
      "value": 10.6,
      "valueText": "$10.6B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+12% Y/Y",
        "23% net margin"
      ]
    },
    {
      "id": "personal_banking_wealth_management",
      "label": "Personal Banking & Wealth Management",
      "value": 6.8,
      "valueText": "$6.8B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+10% Y/Y",
        "12% net margin"
      ]
    },
    {
      "id": "legacy_franchises",
      "label": "Legacy/Franchises",
      "value": 2.2,
      "valueText": "$2.2B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(13%) Y/Y",
        "6% net margin"
      ]
    },
    {
      "id": "corporate_other",
      "label": "Corporate/Other",
      "value": 0.5,
      "valueText": "$0.5B",
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "38% net margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 20.1,
      "valueText": "$20.1B",
      "type": "hub",
      "col": 1,
      "order": 4,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 4.8,
      "valueText": "$4.8B",
      "type": "profit",
      "col": 2,
      "order": 5
    },
    {
      "id": "operating_expenses",
      "label": "Noninterest expenses",
      "value": 13.5,
      "valueText": "($13.5B)",
      "type": "cost",
      "col": 2,
      "order": 6
    },
    {
      "id": "provision_for_credit_losses",
      "label": "Provision for credit losses",
      "value": 1.8,
      "valueText": "($1.8B)",
      "type": "cost",
      "col": 2,
      "order": 7
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 3.5,
      "valueText": "$3.5B",
      "type": "profit",
      "col": 3,
      "order": 8,
      "notes": [
        "+22% Y/Y",
        "$1.52 EPS"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.2,
      "valueText": "($1.2B)",
      "type": "cost",
      "col": 3,
      "order": 9
    },
    {
      "id": "compensation_benefits",
      "label": "Compensation & benefits",
      "value": 7.4,
      "valueText": "($7.4B)",
      "type": "cost",
      "col": 3,
      "order": 10
    },
    {
      "id": "other",
      "label": "Other",
      "value": 2.9,
      "valueText": "($2.9B)",
      "type": "cost",
      "col": 3,
      "order": 11
    },
    {
      "id": "technology_communication",
      "label": "Technology & Communication",
      "value": 2.3,
      "valueText": "($2.3B)",
      "type": "cost",
      "col": 3,
      "order": 12
    },
    {
      "id": "occupancy",
      "label": "Occupancy",
      "value": 0.6,
      "valueText": "($0.6B)",
      "type": "cost",
      "col": 3,
      "order": 13
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 3,
      "order": 14
    }
  ],
  "links": [
    {
      "source": "institutional_clients_group",
      "target": "revenue",
      "value": 10.6,
      "targetOrder": 0,
      "sourceWidth": 195,
      "targetWidth": 195
    },
    {
      "source": "personal_banking_wealth_management",
      "target": "revenue",
      "value": 6.8,
      "targetOrder": 1,
      "sourceWidth": 125,
      "targetWidth": 125
    },
    {
      "source": "legacy_franchises",
      "target": "revenue",
      "value": 2.2,
      "targetOrder": 2,
      "sourceWidth": 41,
      "targetWidth": 41
    },
    {
      "source": "corporate_other",
      "target": "revenue",
      "value": 0.5,
      "targetOrder": 3,
      "sourceWidth": 9,
      "targetWidth": 9
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 4.8,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 88,
      "targetWidth": 88
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 13.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 249,
      "targetWidth": 249
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.8,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 33,
      "targetWidth": 34
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 66,
      "targetWidth": 66
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.2,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 22,
      "targetWidth": 22
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 7.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 137,
      "targetWidth": 137
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 2.9,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 53,
      "targetWidth": 54
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 41,
      "targetWidth": 42
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.6,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 12,
      "targetWidth": 12
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.3,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 6,
      "targetWidth": 6
    }
  ],
  "layout": {
    "scale": 18.4,
    "nodes": {
      "institutional_clients_group": {
        "x": 416,
        "y": 413,
        "width": 72,
        "height": 195
      },
      "personal_banking_wealth_management": {
        "x": 416,
        "y": 730,
        "width": 72,
        "height": 125
      },
      "legacy_franchises": {
        "x": 416,
        "y": 974,
        "width": 72,
        "height": 41
      },
      "corporate_other": {
        "x": 416,
        "y": 1144,
        "width": 72,
        "height": 9
      },
      "revenue": {
        "x": 1039,
        "y": 544,
        "width": 72,
        "height": 370
      },
      "pretax_income": {
        "x": 1662,
        "y": 434,
        "width": 72,
        "height": 88
      },
      "operating_expenses": {
        "x": 1662,
        "y": 705,
        "width": 72,
        "height": 249
      },
      "provision_for_credit_losses": {
        "x": 1662,
        "y": 1153,
        "width": 72,
        "height": 34
      },
      "net_income": {
        "x": 2285,
        "y": 322,
        "width": 72,
        "height": 66
      },
      "tax": {
        "x": 2285,
        "y": 603,
        "width": 72,
        "height": 22
      },
      "compensation_benefits": {
        "x": 2285,
        "y": 808,
        "width": 72,
        "height": 137
      },
      "other": {
        "x": 2285,
        "y": 1003,
        "width": 72,
        "height": 54
      },
      "technology_communication": {
        "x": 2285,
        "y": 1118,
        "width": 72,
        "height": 42
      },
      "occupancy": {
        "x": 2285,
        "y": 1243,
        "width": 72,
        "height": 12
      },
      "marketing": {
        "x": 2285,
        "y": 1351,
        "width": 72,
        "height": 6
      }
    },
    "labels": {
      "institutional_clients_group": {
        "blocks": [
          {
            "x": 452,
            "top": 315,
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
                "color": "#777777"
              }
            ]
          },
          {
            "x": 383,
            "top": 428,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "Institutional",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Clients Group",
                "size": 40,
                "weight": 800
              },
              {
                "text": "23% net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "personal_banking_wealth_management": {
        "blocks": [
          {
            "x": 452,
            "top": 630,
            "anchor": "middle",
            "lineGap": 10,
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
            ]
          },
          {
            "x": 383,
            "top": 711,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "Personal Banking",
                "size": 40,
                "weight": 800
              },
              {
                "text": "& Wealth",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 40,
                "weight": 800
              },
              {
                "text": "12% net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "legacy_franchises": {
        "blocks": [
          {
            "x": 452,
            "top": 875,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(13%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 383,
            "top": 947,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "Legacy/Franchises",
                "size": 40,
                "weight": 800
              },
              {
                "text": "6% net margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "corporate_other": {
        "blocks": [
          {
            "x": 452,
            "top": 1087,
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
            "x": 383,
            "top": 1096,
            "anchor": "end",
            "lineGap": 12,
            "lines": [
              {
                "text": "Corporate/Other",
                "size": 40,
                "weight": 800
              },
              {
                "text": "38% net margin",
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
            "x": 1070,
            "top": 347,
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
                "size": 31,
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
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1697,
            "top": 321,
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
            "x": 1700,
            "top": 966,
            "anchor": "middle",
            "lineGap": 10,
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
      "provision_for_credit_losses": {
        "blocks": [
          {
            "x": 1700,
            "top": 1203,
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
            "x": 2487,
            "top": 302,
            "anchor": "middle",
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
                "text": "+22% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "$1.52 EPS",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2487,
            "top": 580,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
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
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2487,
            "top": 820,
            "anchor": "middle",
            "lineGap": 10,
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
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2415,
            "top": 1020,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2510,
            "top": 1020,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
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
            "x": 2487,
            "top": 1083,
            "anchor": "middle",
            "lineGap": 10,
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
      "occupancy": {
        "blocks": [
          {
            "x": 2370,
            "top": 1225,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Occupancy",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2540,
            "top": 1225,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
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
            "x": 2375,
            "top": 1335,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Marketing",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              }
            ]
          },
          {
            "x": 2538,
            "top": 1335,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
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
      "value": "1.32",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.32T"
    },
    {
      "id": "loans",
      "value": "0.66",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.66T"
    }
  ],
  "i18n": {
    "zh": {
      "name": "花旗集团 · 2023 财年第三季度",
      "meta": {
        "title": "花旗集团 2023 财年第三季度利润表",
        "period": "",
        "periodNote": "",
        "titleTextLength": 1980
      },
      "nodes": {
        "institutional_clients_group": {
          "label": "机构客户集团",
          "notes": [
            "同比 +12%",
            "净利率 23%"
          ]
        },
        "personal_banking_wealth_management": {
          "label": "个人银行与财富管理",
          "notes": [
            "同比 +10%",
            "净利率 12%"
          ]
        },
        "legacy_franchises": {
          "label": "遗留业务／特许经营",
          "notes": [
            "同比 (13%)",
            "净利率 6%"
          ]
        },
        "corporate_other": {
          "label": "企业／其他",
          "notes": [
            "净利率 38%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +9%"
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
            "同比 +22%",
            "每股收益 $1.52"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "compensation_benefits": {
          "label": "薪酬与福利"
        },
        "other": {
          "label": "其他"
        },
        "technology_communication": {
          "label": "技术与通信"
        },
        "occupancy": {
          "label": "场地"
        },
        "marketing": {
          "label": "营销"
        }
      },
      "layout": {
        "labels": {
          "institutional_clients_group": {
            "blocks": [
              {
                "x": 452,
                "top": 315,
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
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 383,
                "top": 428,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "机构客户集团",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "净利率 23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "personal_banking_wealth_management": {
            "blocks": [
              {
                "x": 452,
                "top": 630,
                "anchor": "middle",
                "lineGap": 10,
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
                ]
              },
              {
                "x": 383,
                "top": 711,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "个人银行",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "与财富管理",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "净利率 12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "legacy_franchises": {
            "blocks": [
              {
                "x": 452,
                "top": 875,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (13%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 383,
                "top": 947,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "遗留业务／",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "特许经营",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "净利率 6%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "corporate_other": {
            "blocks": [
              {
                "x": 452,
                "top": 1087,
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
                "x": 383,
                "top": 1096,
                "anchor": "end",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "企业／其他",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "净利率 38%",
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
                "x": 1070,
                "top": 347,
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
                    "size": 31,
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
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1697,
                "top": 321,
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
                "x": 1700,
                "top": 966,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
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
          "provision_for_credit_losses": {
            "blocks": [
              {
                "x": 1700,
                "top": 1203,
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
                "x": 2487,
                "top": 302,
                "anchor": "middle",
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
                    "text": "同比 +22%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "每股收益 $1.52",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2487,
                "top": 580,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
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
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2487,
                "top": 820,
                "anchor": "middle",
                "lineGap": 10,
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
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2415,
                "top": 1020,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2510,
                "top": 1020,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
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
                "x": 2487,
                "top": 1083,
                "anchor": "middle",
                "lineGap": 10,
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
                ]
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2370,
                "top": 1225,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "场地",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2540,
                "top": 1225,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
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
                "x": 2375,
                "top": 1335,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营销",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  }
                ]
              },
              {
                "x": 2538,
                "top": 1335,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"192\" y=\"273\" font-size=\"38\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"70\" y=\"1205\" width=\"240\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"190.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"190.0\" y=\"1297\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">13.5%</text><text x=\"190.0\" y=\"1329\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +1.2 个百分点</text></g><g><rect x=\"320\" y=\"1205\" width=\"215\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"427.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">存款</text><text data-operating-metric=\"deposits\" x=\"427.5\" y=\"1297\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$1.32T</text><text x=\"427.5\" y=\"1329\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比持平</text></g><g><rect x=\"544\" y=\"1205\" width=\"203\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"645.5\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">贷款</text><text data-operating-metric=\"loans\" x=\"645.5\" y=\"1297\" text-anchor=\"middle\" font-size=\"29\" fill=\"#fff\">$0.66T</text><text x=\"645.5\" y=\"1329\" text-anchor=\"middle\" font-size=\"22\" fill=\"#fff\">同比 +1%</text></g><text x=\"430\" y=\"1392\" text-anchor=\"middle\" font-size=\"28\" fill=\"#777777\">CET1 = 普通股一级资本</text><text x=\"171\" y=\"1447\" font-size=\"40\" font-weight=\"800\" fill=\"#000000\">来源：季度业绩</text></g>"
    },
    "preservedAnnotationText": [
      "$1.32T",
      "$0.66T"
    ]
  }
});
})();
