(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "citigroup-q3-fy22",
  "name": "Citigroup · Q3 FY22",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q3 FY22 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q3-fy22.png",
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
    "logoX": 765,
    "logoY": 269,
    "logoWidth": 278,
    "logoHeight": 180,
    "logoViewBox": "0 0 280 180",
    "logoSvg": "<path d=\"M61 48 A79 79 0 0 1 219 48\" fill=\"none\" stroke=\"#ed1b2f\" stroke-width=\"15\"/><text x=\"140\" y=\"168\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"180\" font-weight=\"700\" letter-spacing=\"-14\" fill=\"#084681\">citi</text>"
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
        "node": "#084681",
        "label": "#155077"
      },
      "hub": {
        "node": "#084681",
        "label": "#155077"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#d90000",
        "label": "#9b1808"
      }
    },
    "linkTint": {
      "source": "#8aa4c0",
      "hub": null,
      "profit": "#9bce99",
      "cost": "#df8484"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "12.2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "12.2%"
    },
    {
      "id": "rotce",
      "value": "8.2",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "8.2%"
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\" fill=\"#155077\"><text x=\"192\" y=\"272\" font-size=\"40\" font-weight=\"800\">By Business Segment</text><rect x=\"175\" y=\"1170\" width=\"240\" height=\"148\" rx=\"29\" fill=\"#084681\"/><g fill=\"white\" text-anchor=\"middle\"><text x=\"295\" y=\"1223\" font-size=\"28\" font-weight=\"800\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"295\" y=\"1263\" font-size=\"28\">12.2%</text><text x=\"295\" y=\"1295\" font-size=\"23\">+50bps Y/Y</text></g><rect x=\"425\" y=\"1170\" width=\"240\" height=\"148\" rx=\"29\" fill=\"#084681\"/><g fill=\"white\" text-anchor=\"middle\"><text x=\"545\" y=\"1223\" font-size=\"28\" font-weight=\"800\">RoTCE</text><text data-operating-metric=\"rotce\" x=\"545\" y=\"1263\" font-size=\"28\">8.2%</text><text x=\"545\" y=\"1295\" font-size=\"23\">(2.8pp) Y/Y</text></g><text x=\"425\" y=\"1355\" text-anchor=\"middle\" fill=\"#686868\" font-size=\"28\">CET1 = Common Equity Tier 1</text><text x=\"425\" y=\"1392\" text-anchor=\"middle\" fill=\"#686868\" font-size=\"28\">RoTCE = Return on Tangible Common Equity</text><text x=\"425\" y=\"1435\" text-anchor=\"middle\" fill=\"#686868\" font-size=\"28\">Source: Quarterly results</text></g>",
  "nodes": [
    {
      "id": "institutional",
      "label": "Institutional Clients Group",
      "value": 9.5,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(5%) Y/Y",
        "23% net margin"
      ]
    },
    {
      "id": "personal",
      "label": "Personal Banking & Wealth Management",
      "value": 6.2,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+6% Y/Y",
        "13% net margin"
      ]
    },
    {
      "id": "legacy",
      "label": "LegacyFranchises",
      "value": 2.6,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+66% Y/Y",
        "12% net margin"
      ]
    },
    {
      "id": "corporate_other",
      "label": "Corporate/Other",
      "value": 0.3,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "70% net margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 18.5,
      "type": "hub",
      "col": 1,
      "order": 4,
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 4.4,
      "type": "profit",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_expenses",
      "label": "Noninterest expenses",
      "value": 12.7,
      "type": "cost",
      "col": 2,
      "order": 6,
      "notes": [],
      "valueText": "($12.7B)"
    },
    {
      "id": "provision_for_credit_losses",
      "label": "Provision for credit losses",
      "value": 1.4,
      "type": "cost",
      "col": 2,
      "order": 7,
      "notes": [],
      "valueText": "($1.4B)"
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 3.5,
      "type": "profit",
      "col": 3,
      "order": 8,
      "notes": [
        "(25%) Y/Y",
        "$1.63 EPS"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.9,
      "type": "cost",
      "col": 3,
      "order": 9,
      "notes": [],
      "valueText": "($0.9B)"
    },
    {
      "id": "other_expense",
      "label": "Other",
      "value": 0.006,
      "type": "cost",
      "col": 3,
      "order": 10,
      "notes": [],
      "valueText": "($6M)"
    },
    {
      "id": "compensation_benefits",
      "label": "Compensation & benefits",
      "value": 6.7,
      "type": "cost",
      "col": 3,
      "order": 11,
      "notes": [],
      "valueText": "($6.7B)"
    },
    {
      "id": "other_general_operating",
      "label": "Other",
      "value": 2.9,
      "type": "cost",
      "col": 3,
      "order": 12,
      "notes": [],
      "valueText": "($2.9B)"
    },
    {
      "id": "technology_communication",
      "label": "Technology & Communication",
      "value": 2.1,
      "type": "cost",
      "col": 3,
      "order": 13,
      "notes": [],
      "valueText": "($2.1B)"
    },
    {
      "id": "occupancy",
      "label": "Occupancy",
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "order": 14,
      "notes": [],
      "valueText": "($0.6B)"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.4,
      "type": "cost",
      "col": 3,
      "order": 15,
      "notes": [],
      "valueText": "($0.4B)"
    }
  ],
  "links": [
    {
      "source": "institutional",
      "target": "revenue",
      "value": 9.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 167,
      "targetWidth": 167
    },
    {
      "source": "personal",
      "target": "revenue",
      "value": 6.2,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 109,
      "targetWidth": 109
    },
    {
      "source": "legacy",
      "target": "revenue",
      "value": 2.6,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 46,
      "targetWidth": 46
    },
    {
      "source": "corporate_other",
      "target": "revenue",
      "value": 0.3,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 4,
      "targetWidth": 4
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 4.4,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 77,
      "targetWidth": 77
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 12.7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 225,
      "targetWidth": 225
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.4,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 24,
      "targetWidth": 24
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 61,
      "targetWidth": 63
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.9,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 14,
      "targetWidth": 16
    },
    {
      "source": "pretax_income",
      "target": "other_expense",
      "value": 0.006,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 2,
      "targetWidth": 2
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 6.7,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 119,
      "targetWidth": 119
    },
    {
      "source": "operating_expenses",
      "target": "other_general_operating",
      "value": 2.9,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 51,
      "targetWidth": 51
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.1,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 39,
      "targetWidth": 39
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.6,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 9,
      "targetWidth": 10
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.4,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 7,
      "targetWidth": 8
    }
  ],
  "layout": {
    "scale": 17.5,
    "nodes": {
      "institutional": {
        "x": 422,
        "y": 405,
        "width": 72,
        "height": 167
      },
      "personal": {
        "x": 422,
        "y": 697,
        "width": 72,
        "height": 109
      },
      "legacy": {
        "x": 424,
        "y": 941,
        "width": 72,
        "height": 46
      },
      "corporate_other": {
        "x": 424,
        "y": 1119,
        "width": 72,
        "height": 4
      },
      "revenue": {
        "x": 1235,
        "y": 554,
        "width": 72,
        "height": 326
      },
      "pretax_income": {
        "x": 1785,
        "y": 477,
        "width": 72,
        "height": 77
      },
      "operating_expenses": {
        "x": 1783,
        "y": 683,
        "width": 72,
        "height": 225
      },
      "provision_for_credit_losses": {
        "x": 1788,
        "y": 1123,
        "width": 72,
        "height": 24
      },
      "net_income": {
        "x": 2275,
        "y": 407,
        "width": 72,
        "height": 63
      },
      "tax": {
        "x": 2275,
        "y": 627,
        "width": 72,
        "height": 16
      },
      "other_expense": {
        "x": 2275,
        "y": 721,
        "width": 72,
        "height": 2
      },
      "compensation_benefits": {
        "x": 2275,
        "y": 819,
        "width": 72,
        "height": 119
      },
      "other_general_operating": {
        "x": 2275,
        "y": 1012,
        "width": 72,
        "height": 51
      },
      "technology_communication": {
        "x": 2275,
        "y": 1141,
        "width": 72,
        "height": 39
      },
      "occupancy": {
        "x": 2275,
        "y": 1271,
        "width": 72,
        "height": 10
      },
      "marketing": {
        "x": 2275,
        "y": 1354,
        "width": 72,
        "height": 8
      }
    },
    "labels": {
      "institutional": {
        "blocks": [
          {
            "x": 460,
            "top": 306,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$9.5B",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(5%) Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          },
          {
            "x": 385,
            "top": 409,
            "anchor": "end",
            "lineGap": 10,
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
                "weight": 400
              }
            ]
          }
        ]
      },
      "personal": {
        "blocks": [
          {
            "x": 460,
            "top": 605,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$6.2B",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          },
          {
            "x": 385,
            "top": 676,
            "anchor": "end",
            "lineGap": 10,
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
                "text": "13% net margin",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "legacy": {
        "blocks": [
          {
            "x": 460,
            "top": 850,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$2.6B",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+66% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          },
          {
            "x": 385,
            "top": 920,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "LegacyFranchises",
                "size": 40,
                "weight": 800
              },
              {
                "text": "12% net margin",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "corporate_other": {
        "blocks": [
          {
            "x": 460,
            "top": 1064,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$0.3B",
                "size": 39,
                "weight": 400
              }
            ]
          },
          {
            "x": 385,
            "top": 1068,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Corporate/Other",
                "size": 40,
                "weight": 800
              },
              {
                "text": "70% net margin",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1265,
            "top": 363,
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
                "text": "$18.5B",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1815,
            "top": 365,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Pretax income",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$4.4B",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1815,
            "top": 918,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "($12.7B)",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "provision_for_credit_losses": {
        "blocks": [
          {
            "x": 1815,
            "top": 1164,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Provision for",
                "size": 40,
                "weight": 800
              },
              {
                "text": "credit losses",
                "size": 40,
                "weight": 800
              },
              {
                "text": "($1.4B)",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2476,
            "top": 344,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$3.5B",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(25%) Y/Y",
                "size": 28,
                "weight": 400
              },
              {
                "text": "$1.63 EPS",
                "size": 28,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2470,
            "top": 588,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800
              },
              {
                "text": "($0.9B)",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2470,
            "top": 689,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800
              },
              {
                "text": "($6M)",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2475,
            "top": 816,
            "anchor": "middle",
            "lineGap": 10,
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
                "text": "($6.7B)",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_general_operating": {
        "blocks": [
          {
            "x": 2490,
            "top": 1017,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Other ($2.9B)",
                "size": 31,
                "weight": 800
              }
            ]
          }
        ]
      },
      "technology_communication": {
        "blocks": [
          {
            "x": 2475,
            "top": 1115,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Technology &",
                "size": 32,
                "weight": 800
              },
              {
                "text": "Communication",
                "size": 32,
                "weight": 800
              },
              {
                "text": "($2.1B)",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2490,
            "top": 1250,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Occupancy ($0.6B)",
                "size": 31,
                "weight": 800
              }
            ]
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2490,
            "top": 1330,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Marketing ($0.4B)",
                "size": 31,
                "weight": 800
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "花旗集团 · 2022 财年第三季度",
      "meta": {
        "title": "花旗集团 2022 财年第三季度利润表",
        "titleTextLength": 1980
      },
      "nodes": {
        "institutional": {
          "label": "机构客户集团",
          "notes": []
        },
        "personal": {
          "label": "个人银行与财富管理",
          "notes": []
        },
        "legacy": {
          "label": "传统业务",
          "notes": []
        },
        "corporate_other": {
          "label": "公司及其他",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": []
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
            "同比 (25%)",
            "每股收益 $1.63"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_expense": {
          "label": "其他",
          "notes": []
        },
        "compensation_benefits": {
          "label": "薪酬与福利",
          "notes": []
        },
        "other_general_operating": {
          "label": "其他",
          "notes": []
        },
        "technology_communication": {
          "label": "技术与通信",
          "notes": []
        },
        "occupancy": {
          "label": "场地费用",
          "notes": []
        },
        "marketing": {
          "label": "营销",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "institutional": {
            "blocks": [
              {
                "x": 460,
                "top": 306,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$9.5B",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 28,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 385,
                "top": 409,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "机构客户集团",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "净利率 23%",
                    "size": 27,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "personal": {
            "blocks": [
              {
                "x": 460,
                "top": 605,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$6.2B",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 385,
                "top": 676,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "个人银行与财富管理",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "净利率 13%",
                    "size": 27,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "legacy": {
            "blocks": [
              {
                "x": 460,
                "top": 850,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$2.6B",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +66%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 385,
                "top": 920,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "传统业务",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "净利率 12%",
                    "size": 27,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "corporate_other": {
            "blocks": [
              {
                "x": 460,
                "top": 1064,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$0.3B",
                    "size": 39,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 385,
                "top": 1068,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "公司及其他",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "净利率 70%",
                    "size": 27,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1265,
                "top": 363,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$18.5B",
                    "size": 37,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1815,
                "top": 365,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$4.4B",
                    "size": 37,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1815,
                "top": 918,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "非利息费用",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "($12.7B)",
                    "size": 37,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "provision_for_credit_losses": {
            "blocks": [
              {
                "x": 1815,
                "top": 1164,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "信用损失拨备",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "($1.4B)",
                    "size": 37,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2476,
                "top": 344,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 34,
                    "weight": 800
                  },
                  {
                    "text": "$3.5B",
                    "size": 37,
                    "weight": 400
                  },
                  {
                    "text": "同比 (25%)",
                    "size": 28,
                    "weight": 400
                  },
                  {
                    "text": "每股收益 $1.63",
                    "size": 28,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2470,
                "top": 588,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29,
                    "weight": 800
                  },
                  {
                    "text": "($0.9B)",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2470,
                "top": 689,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29,
                    "weight": 800
                  },
                  {
                    "text": "($6M)",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2475,
                "top": 816,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 29,
                    "weight": 800
                  },
                  {
                    "text": "($6.7B)",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_general_operating": {
            "blocks": [
              {
                "x": 2490,
                "top": 1017,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "其他",
                    "size": 29,
                    "weight": 800
                  },
                  {
                    "text": "($2.9B)",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "technology_communication": {
            "blocks": [
              {
                "x": 2475,
                "top": 1115,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "技术与通信",
                    "size": 29,
                    "weight": 800
                  },
                  {
                    "text": "($2.1B)",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2490,
                "top": 1250,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "场地费用",
                    "size": 29,
                    "weight": 800
                  },
                  {
                    "text": "($0.6B)",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2490,
                "top": 1330,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "营销",
                    "size": 29,
                    "weight": 800
                  },
                  {
                    "text": "($0.4B)",
                    "size": 29,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\" fill=\"#155077\"><text x=\"192\" y=\"272\" font-size=\"40\" font-weight=\"800\">按业务分部</text><rect x=\"175\" y=\"1170\" width=\"240\" height=\"148\" rx=\"29\" fill=\"#084681\"/><g fill=\"white\" text-anchor=\"middle\"><text x=\"295\" y=\"1223\" font-size=\"28\" font-weight=\"800\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"295\" y=\"1263\" font-size=\"28\">12.2%</text><text x=\"295\" y=\"1295\" font-size=\"23\">同比 +50 个基点</text></g><rect x=\"425\" y=\"1170\" width=\"240\" height=\"148\" rx=\"29\" fill=\"#084681\"/><g fill=\"white\" text-anchor=\"middle\"><text x=\"545\" y=\"1223\" font-size=\"28\" font-weight=\"800\">有形权益回报率</text><text data-operating-metric=\"rotce\" x=\"545\" y=\"1263\" font-size=\"28\">8.2%</text><text x=\"545\" y=\"1295\" font-size=\"23\">同比 (2.8pp)</text></g><text x=\"425\" y=\"1355\" text-anchor=\"middle\" fill=\"#686868\" font-size=\"28\">CET1 = 核心一级资本</text><text x=\"425\" y=\"1392\" text-anchor=\"middle\" fill=\"#686868\" font-size=\"28\">RoTCE = 有形普通股权益回报率</text><text x=\"425\" y=\"1435\" text-anchor=\"middle\" fill=\"#686868\" font-size=\"28\">来源：季度业绩</text></g>"
    }
  }
});})();
