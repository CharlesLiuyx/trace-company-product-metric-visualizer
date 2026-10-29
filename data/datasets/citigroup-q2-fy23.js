window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "citigroup-q2-fy23",
  "name": "Citigroup · Q2 FY23",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q2 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q2-fy23.png",
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
    "logoX": 633,
    "logoY": 278,
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
      "name": 39,
      "value": 38,
      "note": 27,
      "lineGap": 8
    }
  },
  "nodes": [
    {
      "id": "icg",
      "label": "Institutional Clients Group",
      "value": 10.4,
      "valueText": "$10.4B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(9%) Y/Y",
        "21% net margin"
      ]
    },
    {
      "id": "pbwm",
      "label": "Personal Banking & Wealth Management",
      "value": 6.4,
      "valueText": "$6.4B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+6% Y/Y",
        "8% net margin"
      ]
    },
    {
      "id": "legacy",
      "label": "Legacy/Franchises",
      "value": 1.9,
      "valueText": "$1.9B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(7%) net margin"
      ]
    },
    {
      "id": "corporate_other",
      "label": "Corporate/Other",
      "value": 0.7,
      "valueText": "$0.7B",
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "53% net margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 19.4,
      "valueText": "$19.4B",
      "type": "hub",
      "col": 1,
      "order": 4,
      "notes": [
        "(1%) Y/Y",
        "Net of interest expenses"
      ]
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 4.0,
      "valueText": "$4.0B",
      "type": "profit",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_expenses",
      "label": "Noninterest expenses",
      "value": 13.6,
      "valueText": "($13.6B)",
      "type": "cost",
      "col": 2,
      "order": 6,
      "notes": []
    },
    {
      "id": "provision_for_credit_losses",
      "label": "Provision for credit losses",
      "value": 1.8,
      "valueText": "($1.8B)",
      "type": "cost",
      "col": 2,
      "order": 7,
      "notes": []
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 2.9,
      "valueText": "$2.9B",
      "type": "profit",
      "col": 3,
      "order": 8,
      "notes": [
        "(36%) Y/Y",
        "$1.33 EPS"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.1,
      "valueText": "($1.1B)",
      "type": "cost",
      "col": 3,
      "order": 9,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.037,
      "valueText": "($37M)",
      "type": "cost",
      "col": 3,
      "order": 10,
      "notes": []
    },
    {
      "id": "compensation_benefits",
      "label": "Compensation & benefits",
      "value": 7.4,
      "valueText": "($7.4B)",
      "type": "cost",
      "col": 3,
      "order": 11,
      "notes": []
    },
    {
      "id": "other_expenses",
      "label": "Other",
      "value": 2.9,
      "valueText": "($2.9B)",
      "type": "cost",
      "col": 3,
      "order": 12,
      "notes": []
    },
    {
      "id": "technology_communication",
      "label": "Technology & Communication",
      "value": 2.3,
      "valueText": "($2.3B)",
      "type": "cost",
      "col": 3,
      "order": 13,
      "notes": []
    },
    {
      "id": "occupancy",
      "label": "Occupancy",
      "value": 0.6,
      "valueText": "($0.6B)",
      "type": "cost",
      "col": 3,
      "order": 14,
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.4,
      "valueText": "($0.4B)",
      "type": "cost",
      "col": 3,
      "order": 15,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "icg",
      "target": "revenue",
      "value": 10.4,
      "sourceWidth": 177,
      "targetWidth": 175,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pbwm",
      "target": "revenue",
      "value": 6.4,
      "sourceWidth": 109,
      "targetWidth": 109,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "legacy",
      "target": "revenue",
      "value": 1.9,
      "sourceWidth": 33,
      "targetWidth": 33,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "corporate_other",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 12,
      "targetWidth": 12,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 4,
      "sourceWidth": 68,
      "targetWidth": 68,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 13.6,
      "sourceWidth": 229,
      "targetWidth": 229,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.8,
      "sourceWidth": 32,
      "targetWidth": 31,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.9,
      "sourceWidth": 49,
      "targetWidth": 50,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.1,
      "sourceWidth": 17,
      "targetWidth": 19,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "other",
      "value": 0.037,
      "sourceWidth": 2,
      "targetWidth": 2,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 7.4,
      "sourceWidth": 125,
      "targetWidth": 125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_expenses",
      "value": 2.9,
      "sourceWidth": 50,
      "targetWidth": 50,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.3,
      "sourceWidth": 39,
      "targetWidth": 39,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.6,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.4,
      "sourceWidth": 5,
      "targetWidth": 6,
      "sourceOrder": 4,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 16.9,
    "nodes": {
      "icg": {
        "x": 418,
        "y": 436,
        "width": 73,
        "height": 177
      },
      "pbwm": {
        "x": 418,
        "y": 735,
        "width": 73,
        "height": 109
      },
      "legacy": {
        "x": 418,
        "y": 968,
        "width": 73,
        "height": 33
      },
      "corporate_other": {
        "x": 418,
        "y": 1144,
        "width": 73,
        "height": 12
      },
      "revenue": {
        "x": 1040,
        "y": 561,
        "width": 74,
        "height": 329
      },
      "pretax_income": {
        "x": 1661,
        "y": 486,
        "width": 73,
        "height": 68
      },
      "operating_expenses": {
        "x": 1658,
        "y": 715,
        "width": 74,
        "height": 229
      },
      "provision_for_credit_losses": {
        "x": 1666,
        "y": 1191,
        "width": 73,
        "height": 31
      },
      "net_income": {
        "x": 2286,
        "y": 371,
        "width": 73,
        "height": 50
      },
      "tax": {
        "x": 2286,
        "y": 591,
        "width": 73,
        "height": 19
      },
      "other": {
        "x": 2286,
        "y": 683,
        "width": 73,
        "height": 2
      },
      "compensation_benefits": {
        "x": 2286,
        "y": 770,
        "width": 73,
        "height": 125
      },
      "other_expenses": {
        "x": 2286,
        "y": 975,
        "width": 73,
        "height": 50
      },
      "technology_communication": {
        "x": 2286,
        "y": 1108,
        "width": 73,
        "height": 39
      },
      "occupancy": {
        "x": 2286,
        "y": 1241,
        "width": 73,
        "height": 10
      },
      "marketing": {
        "x": 2286,
        "y": 1351,
        "width": 73,
        "height": 6
      }
    },
    "labels": {
      "icg": {
        "blocks": [
          {
            "x": 450,
            "top": 337,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "(9%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 385,
            "top": 453,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Institutional",
                "size": 39,
                "weight": 800
              },
              {
                "text": "Clients Group",
                "size": 39,
                "weight": 800
              },
              {
                "text": "21% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "pbwm": {
        "blocks": [
          {
            "x": 450,
            "top": 635,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 385,
            "top": 708,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Personal Banking",
                "size": 39,
                "weight": 800
              },
              {
                "text": "& Wealth",
                "size": 39,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 39,
                "weight": 800
              },
              {
                "text": "8% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "legacy": {
        "blocks": [
          {
            "x": 450,
            "top": 910,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 385,
            "top": 941,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Legacy/Franchises",
                "size": 39,
                "weight": 800
              },
              {
                "text": "(7%) net margin",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "corporate_other": {
        "blocks": [
          {
            "x": 454.5,
            "top": 1085,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          },
          {
            "x": 385,
            "top": 1090,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Corporate/Other",
                "size": 39,
                "weight": 800
              },
              {
                "text": "53% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1074,
            "top": 373,
            "anchor": "middle",
            "lineGap": 8,
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
                "text": "(1%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1690,
            "top": 374,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39,
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
            "x": 1690,
            "top": 958,
            "anchor": "middle",
            "lineGap": 8,
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
            "x": 1698,
            "top": 1238,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Provision for",
                "size": 37,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "credit losses",
                "size": 37,
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
            "x": 2490,
            "top": 350,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net income",
                "size": 37,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 37,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "(36%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "$1.33 EPS",
                "size": 27,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2490,
            "top": 541,
            "anchor": "middle",
            "lineGap": 8,
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
      "other": {
        "blocks": [
          {
            "x": 2490,
            "top": 645,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
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
            "x": 2490,
            "top": 777,
            "anchor": "middle",
            "lineGap": 8,
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
      "other_expenses": {
        "blocks": [
          {
            "x": 2490,
            "top": 984,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
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
      "technology_communication": {
        "blocks": [
          {
            "x": 2490,
            "top": 1066,
            "anchor": "middle",
            "lineGap": 8,
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
            "x": 2490,
            "top": 1225,
            "anchor": "middle",
            "lineGap": 8,
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
            "x": 2490,
            "top": 1333,
            "anchor": "middle",
            "lineGap": 8,
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
  "annotationsSvg": "<text x=\"192\" y=\"271\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"70\" y=\"1205\" width=\"240\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"190.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"190.0\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">13.3%</text><text x=\"190.0\" y=\"1329\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+1.3pp Y/Y</text></g><g><rect x=\"319\" y=\"1205\" width=\"216\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"427.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">Deposits</text><text data-operating-metric=\"deposits\" x=\"427.0\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">$1.34T</text><text x=\"427.0\" y=\"1329\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+1% Y/Y</text></g><g><rect x=\"543\" y=\"1205\" width=\"204\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"645.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">Loans</text><text data-operating-metric=\"loans\" x=\"645.0\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">$0.65T</text><text x=\"645.0\" y=\"1329\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">(1%) Y/Y</text></g><text x=\"240\" y=\"1391\" font-size=\"27\" fill=\"#777\">CET1 = Common Equity Tier 1</text><text x=\"170\" y=\"1435\" font-size=\"39\" font-weight=\"800\">Source: Quarterly results</text>",
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
      "value": "1.34",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.34T"
    },
    {
      "id": "loans",
      "value": "0.65",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.65T"
    }
  ],
  "i18n": {
    "zh": {
      "name": "花旗集团 · 2023 财年第二季度",
      "meta": {
        "title": "花旗集团 2023 财年第二季度利润表",
        "titleTextLength": 1980
      },
      "nodes": {
        "icg": {
          "label": "机构客户集团",
          "notes": [
            "同比 (9%)",
            "净利率 21%"
          ]
        },
        "pbwm": {
          "label": "个人银行与财富管理",
          "notes": [
            "同比 +6%",
            "净利率 8%"
          ]
        },
        "legacy": {
          "label": "遗留业务与特许经营",
          "notes": [
            "净利率 (7%)"
          ]
        },
        "corporate_other": {
          "label": "公司及其他",
          "notes": [
            "净利率 53%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (1%)",
            "扣除利息支出后"
          ]
        },
        "pretax_income": {
          "label": "税前利润",
          "notes": []
        },
        "operating_expenses": {
          "label": "非利息费用",
          "notes": []
        },
        "provision_for_credit_losses": {
          "label": "信用损失拨备",
          "notes": []
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "同比 (36%)",
            "每股收益 $1.33"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "compensation_benefits": {
          "label": "薪酬与福利",
          "notes": []
        },
        "other_expenses": {
          "label": "其他",
          "notes": []
        },
        "technology_communication": {
          "label": "技术与通信",
          "notes": []
        },
        "occupancy": {
          "label": "房地占用费用",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "icg": {
            "blocks": [
              {
                "x": 450,
                "top": 337,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385,
                "top": 453,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "机构客户集团",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "净利率 21%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "pbwm": {
            "blocks": [
              {
                "x": 450,
                "top": 635,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 385,
                "top": 708,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "个人银行与财富管理",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "净利率 8%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "legacy": {
            "blocks": [
              {
                "x": 450,
                "top": 910,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 385,
                "top": 941,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "遗留业务与特许经营",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "净利率 (7%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "corporate_other": {
            "blocks": [
              {
                "x": 454.5,
                "top": 1085,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 385,
                "top": 1090,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "公司及其他",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "净利率 53%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1074,
                "top": 373,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "同比 (1%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1690,
                "top": 374,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39,
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
                "x": 1690,
                "top": 958,
                "anchor": "middle",
                "lineGap": 8,
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
                "x": 1698,
                "top": 1238,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 37,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "拨备",
                    "size": 37,
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
                "x": 2490,
                "top": 350,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 37,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "同比 (36%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "每股收益 $1.33",
                    "size": 27,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2490,
                "top": 541,
                "anchor": "middle",
                "lineGap": 8,
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
          "other": {
            "blocks": [
              {
                "x": 2490,
                "top": 645,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
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
                "x": 2490,
                "top": 777,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "薪酬与福利",
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
          "other_expenses": {
            "blocks": [
              {
                "x": 2490,
                "top": 984,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
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
          "technology_communication": {
            "blocks": [
              {
                "x": 2490,
                "top": 1066,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "技术与通信",
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
                "x": 2490,
                "top": 1225,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "房地占用费用",
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
                "x": 2490,
                "top": 1333,
                "anchor": "middle",
                "lineGap": 8,
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
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"192\" y=\"271\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"70\" y=\"1205\" width=\"240\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"190.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"190.0\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">13.3%</text><text x=\"190.0\" y=\"1329\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +1.3 个百分点</text></g><g><rect x=\"319\" y=\"1205\" width=\"216\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"427.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">存款</text><text data-operating-metric=\"deposits\" x=\"427.0\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">$1.34T</text><text x=\"427.0\" y=\"1329\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +1%</text></g><g><rect x=\"543\" y=\"1205\" width=\"204\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"645.0\" y=\"1257\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"white\">贷款</text><text data-operating-metric=\"loans\" x=\"645.0\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"white\">$0.65T</text><text x=\"645.0\" y=\"1329\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 (1%)</text></g><text x=\"240\" y=\"1391\" font-size=\"27\" fill=\"#777\">CET1 = 普通股一级资本</text><text x=\"170\" y=\"1435\" font-size=\"39\" font-weight=\"800\">来源：季度业绩</text>"
    },
    "preservedAnnotationText": [
      "$1.34T",
      "$0.65T"
    ]
  }
});
