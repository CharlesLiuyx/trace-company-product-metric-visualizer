(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "citigroup-q1-fy23",
  "name": "Citigroup · Q1 FY23",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q1 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q1-fy23.png",
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
    "logoX": 666,
    "logoY": 268,
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
        "label": "#003870"
      },
      "hub": {
        "node": "#003870",
        "label": "#003870"
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
      "name": 38,
      "value": 38,
      "note": 27,
      "lineGap": 10
    }
  },
  "nodes": [
    {
      "id": "icg",
      "label": "Institutional Clients Group",
      "value": 11.2,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+1% Y/Y",
        "29% net margin"
      ]
    },
    {
      "id": "pbwm",
      "label": "Personal Banking & Wealth Management",
      "value": 6.5,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+9% Y/Y",
        "8% net margin"
      ]
    },
    {
      "id": "legacy",
      "label": "LegacyFranchises",
      "value": 2.9,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+48% Y/Y",
        "21% net margin"
      ]
    },
    {
      "id": "corporate_other",
      "label": "Corporate/Other",
      "value": 0.9,
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "28% net margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 21.4,
      "type": "hub",
      "col": 1,
      "order": 4,
      "notes": [
        "+12% Y/Y"
      ]
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 6.2,
      "type": "profit",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_expenses",
      "label": "Noninterest expenses",
      "value": 13.3,
      "type": "cost",
      "col": 2,
      "order": 6,
      "notes": []
    },
    {
      "id": "provision_for_credit_losses",
      "label": "Provision for credit losses",
      "value": 2,
      "type": "cost",
      "col": 2,
      "order": 7,
      "notes": [],
      "valueText": "($2.0B)"
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 4.6,
      "type": "profit",
      "col": 3,
      "order": 8,
      "notes": [
        "+7% Y/Y",
        "$2.19 EPS"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.5,
      "type": "cost",
      "col": 3,
      "order": 9,
      "notes": []
    },
    {
      "id": "compensation_benefits",
      "label": "Compensation & benefits",
      "value": 7.5,
      "type": "cost",
      "col": 3,
      "order": 10,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 2.7,
      "type": "cost",
      "col": 3,
      "order": 11,
      "notes": []
    },
    {
      "id": "technology_communication",
      "label": "Technology & Communication",
      "value": 2.1,
      "type": "cost",
      "col": 3,
      "order": 12,
      "notes": []
    },
    {
      "id": "occupancy",
      "label": "Occupancy",
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "order": 13,
      "notes": []
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.3,
      "type": "cost",
      "col": 3,
      "order": 14,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "icg",
      "target": "revenue",
      "value": 11.2,
      "targetOrder": 0,
      "sourceWidth": 171,
      "targetWidth": 169
    },
    {
      "source": "pbwm",
      "target": "revenue",
      "value": 6.5,
      "targetOrder": 1,
      "sourceWidth": 98,
      "targetWidth": 98
    },
    {
      "source": "legacy",
      "target": "revenue",
      "value": 2.9,
      "targetOrder": 2,
      "sourceWidth": 44,
      "targetWidth": 44
    },
    {
      "source": "corporate_other",
      "target": "revenue",
      "value": 0.9,
      "targetOrder": 3,
      "sourceWidth": 14,
      "targetWidth": 14
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 6.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 94,
      "targetWidth": 94
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 13.3,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 202,
      "targetWidth": 202
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 2,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 29,
      "targetWidth": 31
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 4.6,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 71,
      "targetWidth": 71
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 23,
      "targetWidth": 24
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 7.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 115,
      "targetWidth": 115
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 2.7,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 41,
      "targetWidth": 42
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.1,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 33,
      "targetWidth": 33
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
      "value": 0.3,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 4,
      "targetWidth": 5
    }
  ],
  "layout": {
    "scale": 15.2,
    "nodes": {
      "icg": {
        "x": 418,
        "y": 403,
        "width": 73,
        "height": 171
      },
      "pbwm": {
        "x": 418,
        "y": 697,
        "width": 73,
        "height": 98
      },
      "legacy": {
        "x": 418,
        "y": 927,
        "width": 73,
        "height": 44
      },
      "corporate_other": {
        "x": 418,
        "y": 1101,
        "width": 73,
        "height": 14
      },
      "revenue": {
        "x": 1040,
        "y": 564,
        "width": 74,
        "height": 325
      },
      "pretax_income": {
        "x": 1658,
        "y": 473,
        "width": 74,
        "height": 94
      },
      "operating_expenses": {
        "x": 1658,
        "y": 739,
        "width": 74,
        "height": 202
      },
      "provision_for_credit_losses": {
        "x": 1661,
        "y": 1133,
        "width": 73,
        "height": 31
      },
      "net_income": {
        "x": 2286,
        "y": 378,
        "width": 73,
        "height": 71
      },
      "tax": {
        "x": 2286,
        "y": 623,
        "width": 73,
        "height": 24
      },
      "compensation_benefits": {
        "x": 2286,
        "y": 762,
        "width": 73,
        "height": 115
      },
      "other": {
        "x": 2286,
        "y": 974,
        "width": 73,
        "height": 42
      },
      "technology_communication": {
        "x": 2286,
        "y": 1109,
        "width": 73,
        "height": 33
      },
      "occupancy": {
        "x": 2286,
        "y": 1252,
        "width": 73,
        "height": 10
      },
      "marketing": {
        "x": 2286,
        "y": 1362,
        "width": 73,
        "height": 5
      }
    },
    "labels": {
      "icg": {
        "blocks": [
          {
            "x": 454,
            "top": 310,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+1% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 383,
            "top": 438,
            "lines": [
              {
                "text": "Institutional",
                "size": 38,
                "weight": 800
              },
              {
                "text": "Clients Group",
                "size": 38,
                "weight": 800
              },
              {
                "text": "29% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 11
          }
        ]
      },
      "pbwm": {
        "blocks": [
          {
            "x": 454,
            "top": 605,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 383,
            "top": 676,
            "lines": [
              {
                "text": "Personal Banking",
                "size": 38,
                "weight": 800
              },
              {
                "text": "& Wealth",
                "size": 38,
                "weight": 800
              },
              {
                "text": "Management",
                "size": 38,
                "weight": 800
              },
              {
                "text": "8% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 11
          }
        ]
      },
      "legacy": {
        "blocks": [
          {
            "x": 454,
            "top": 835,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+48% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 383,
            "top": 927,
            "lines": [
              {
                "text": "LegacyFranchises",
                "size": 38,
                "weight": 800
              },
              {
                "text": "21% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 11
          }
        ]
      },
      "corporate_other": {
        "blocks": [
          {
            "x": 454,
            "top": 1045,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ],
            "anchor": "middle",
            "lineGap": 10
          },
          {
            "x": 383,
            "top": 1076,
            "lines": [
              {
                "text": "Corporate/Other",
                "size": 38,
                "weight": 800
              },
              {
                "text": "28% net margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "anchor": "end",
            "lineGap": 11
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1072,
            "top": 379,
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
                "size": 38,
                "weight": 400
              },
              {
                "text": "+12% Y/Y",
                "size": 27,
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
            "x": 1689,
            "top": 360,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
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
            "x": 1690,
            "top": 958,
            "lines": [
              {
                "text": "Noninterest",
                "size": 37,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
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
            "x": 1690,
            "top": 1182,
            "lines": [
              {
                "text": "Provision for",
                "size": 37,
                "weight": 800
              },
              {
                "text": "credit losses",
                "size": 37,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
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
            "x": 2490,
            "top": 363,
            "lines": [
              {
                "text": "Net income",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "$2.19 EPS",
                "size": 27,
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
            "x": 2482,
            "top": 599,
            "lines": [
              {
                "text": "Tax",
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
            "lineGap": 10
          }
        ]
      },
      "compensation_benefits": {
        "blocks": [
          {
            "x": 2494,
            "top": 770,
            "lines": [
              {
                "text": "Compensation",
                "size": 31,
                "weight": 800
              },
              {
                "text": "& benefits",
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
            "lineGap": 10
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2374,
            "top": 979,
            "lines": [
              {
                "text": "Other ($2.7B)",
                "size": 30,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 10
          }
        ]
      },
      "technology_communication": {
        "blocks": [
          {
            "x": 2494,
            "top": 1067,
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
            "lineGap": 10
          }
        ]
      },
      "occupancy": {
        "blocks": [
          {
            "x": 2374,
            "top": 1234,
            "lines": [
              {
                "text": "Occupancy ($0.6B)",
                "size": 30,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 10
          }
        ]
      },
      "marketing": {
        "blocks": [
          {
            "x": 2374,
            "top": 1343,
            "lines": [
              {
                "text": "Marketing ($0.3B)",
                "size": 30,
                "weight": 800
              }
            ],
            "anchor": "start",
            "lineGap": 10
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "13.4",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "13.4%"
    },
    {
      "id": "deposits",
      "value": "1.33",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.33T"
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
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"192\" y=\"272\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><g><rect x=\"70\" y=\"1206\" width=\"241\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"190.5\" y=\"1258\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"190.5\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">13.4%</text><text x=\"190.5\" y=\"1330\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">+2.0pp Y/Y</text></g><g><rect x=\"320\" y=\"1206\" width=\"216\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"428.0\" y=\"1258\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">Deposits</text><text data-operating-metric=\"deposits\" x=\"428.0\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$1.33T</text><text x=\"428.0\" y=\"1330\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">Flat Y/Y</text></g><g><rect x=\"544\" y=\"1206\" width=\"204\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"646.0\" y=\"1258\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">Loans</text><text data-operating-metric=\"loans\" x=\"646.0\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$0.65T</text><text x=\"646.0\" y=\"1330\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">(1%) Y/Y</text></g><text x=\"240\" y=\"1394\" font-size=\"27\" fill=\"#777777\">CET1 = Common Equity Tier 1</text><text x=\"170\" y=\"1438\" font-size=\"39\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "花旗集团 · 2023 财年第一季度",
      "meta": {
        "title": "花旗集团 2023 财年第一季度利润表",
        "titleTextLength": 1980
      },
      "nodes": {
        "icg": {
          "label": "机构客户集团",
          "notes": [
            "同比 +1%",
            "净利率 29%"
          ]
        },
        "pbwm": {
          "label": "个人银行与财富管理",
          "notes": [
            "同比 +9%",
            "净利率 8%"
          ]
        },
        "legacy": {
          "label": "遗留业务",
          "notes": [
            "同比 +48%",
            "净利率 21%"
          ]
        },
        "corporate_other": {
          "label": "公司及其他",
          "notes": [
            "净利率 28%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +12%"
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
            "同比 +7%",
            "$2.19 每股收益"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "compensation_benefits": {
          "label": "薪酬与福利",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "technology_communication": {
          "label": "技术与通信",
          "notes": []
        },
        "occupancy": {
          "label": "场所费用",
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
                "x": 454,
                "top": 310,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 383,
                "top": 438,
                "lines": [
                  {
                    "text": "机构客户集团",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "净利率 29%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 11
              }
            ]
          },
          "pbwm": {
            "blocks": [
              {
                "x": 454,
                "top": 605,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 383,
                "top": 676,
                "lines": [
                  {
                    "text": "个人银行与财富管理",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "净利率 8%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 11
              }
            ]
          },
          "legacy": {
            "blocks": [
              {
                "x": 454,
                "top": 835,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +48%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 383,
                "top": 927,
                "lines": [
                  {
                    "text": "遗留业务",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "净利率 21%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 11
              }
            ]
          },
          "corporate_other": {
            "blocks": [
              {
                "x": 454,
                "top": 1045,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ],
                "anchor": "middle",
                "lineGap": 10
              },
              {
                "x": 383,
                "top": 1076,
                "lines": [
                  {
                    "text": "公司及其他",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "净利率 28%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "anchor": "end",
                "lineGap": 11
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1072,
                "top": 379,
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
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +12%",
                    "size": 27,
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
                "x": 1689,
                "top": 360,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
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
                "x": 1690,
                "top": 958,
                "lines": [
                  {
                    "text": "非利息",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
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
                "x": 1690,
                "top": 1182,
                "lines": [
                  {
                    "text": "信用损失",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "拨备",
                    "size": 37,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
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
                "x": 2490,
                "top": 363,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "$2.19 每股收益",
                    "size": 27,
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
                "x": 2482,
                "top": 599,
                "lines": [
                  {
                    "text": "税费",
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
                "lineGap": 10
              }
            ]
          },
          "compensation_benefits": {
            "blocks": [
              {
                "x": 2494,
                "top": 770,
                "lines": [
                  {
                    "text": "薪酬与福利",
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
                "lineGap": 10
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2374,
                "top": 979,
                "lines": [
                  {
                    "text": "其他 ($2.7B)",
                    "size": 30,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 10
              }
            ]
          },
          "technology_communication": {
            "blocks": [
              {
                "x": 2494,
                "top": 1067,
                "lines": [
                  {
                    "text": "技术与通信",
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
                "lineGap": 10
              }
            ]
          },
          "occupancy": {
            "blocks": [
              {
                "x": 2374,
                "top": 1234,
                "lines": [
                  {
                    "text": "场所费用 ($0.6B)",
                    "size": 30,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 10
              }
            ]
          },
          "marketing": {
            "blocks": [
              {
                "x": 2374,
                "top": 1343,
                "lines": [
                  {
                    "text": "营销 ($0.3B)",
                    "size": 30,
                    "weight": 800
                  }
                ],
                "anchor": "start",
                "lineGap": 10
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"192\" y=\"272\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><g><rect x=\"70\" y=\"1206\" width=\"241\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"190.5\" y=\"1258\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"190.5\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">13.4%</text><text x=\"190.5\" y=\"1330\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">同比 +2.0 个百分点</text></g><g><rect x=\"320\" y=\"1206\" width=\"216\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"428.0\" y=\"1258\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">存款</text><text data-operating-metric=\"deposits\" x=\"428.0\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$1.33T</text><text x=\"428.0\" y=\"1330\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">同比持平</text></g><g><rect x=\"544\" y=\"1206\" width=\"204\" height=\"149\" rx=\"29\" fill=\"#003870\"/><text x=\"646.0\" y=\"1258\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"800\" fill=\"#fff\">贷款</text><text data-operating-metric=\"loans\" x=\"646.0\" y=\"1298\" text-anchor=\"middle\" font-size=\"28\" fill=\"#fff\">$0.65T</text><text x=\"646.0\" y=\"1330\" text-anchor=\"middle\" font-size=\"21\" fill=\"#fff\">同比 (1%)</text></g><text x=\"240\" y=\"1394\" font-size=\"27\" fill=\"#777777\">CET1 = 普通股一级资本</text><text x=\"170\" y=\"1438\" font-size=\"39\" font-weight=\"800\">来源：季度财报</text></g>"
    }
  }
});})();
