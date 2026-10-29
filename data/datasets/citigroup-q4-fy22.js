(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "citigroup-q4-fy22",
  "name": "Citigroup · Q4 FY22",
  "company": "Citigroup",
  "meta": {
    "company": "Citigroup",
    "title": "Citigroup Q4 FY22 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/citigroup-q4-fy22.png",
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
    "logoSvg": "\n    <path d=\"M61 48 A79 79 0 0 1 219 48\" fill=\"none\" stroke=\"#ed1b2f\" stroke-width=\"15\" />\n    <text x=\"140\" y=\"168\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"180\" font-weight=\"700\" letter-spacing=\"-14\" fill=\"#084681\">citi</text>",
    "logoX": 725
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
        "label": "#00348b"
      },
      "hub": {
        "node": "#003870",
        "label": "#00348b"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f47"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#859db8",
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
  "operatingMetrics": [
    {
      "id": "cet1",
      "value": "13.0",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "13.0%"
    },
    {
      "id": "deposits",
      "value": "1.36",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.36T"
    },
    {
      "id": "loans",
      "value": "0.65",
      "unit": "T",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$0.65T"
    },
    {
      "id": "eps",
      "value": "0.00116",
      "unit": "K",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.16"
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"191\" y=\"271\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">By Business Segment</text><rect x=\"70\" y=\"1206\" width=\"240\" height=\"148\" rx=\"28\" fill=\"#003770\"/><g text-anchor=\"middle\" fill=\"white\"><text x=\"190\" y=\"1259\" font-size=\"29\" font-weight=\"800\">CET1 ratio</text><text data-operating-metric=\"cet1\" x=\"190\" y=\"1298\" font-size=\"27\">13.0%</text><text x=\"190\" y=\"1330\" font-size=\"22\">+0.8pp Y/Y</text></g><rect x=\"320\" y=\"1206\" width=\"215\" height=\"148\" rx=\"28\" fill=\"#003770\"/><g text-anchor=\"middle\" fill=\"white\"><text x=\"427.5\" y=\"1259\" font-size=\"29\" font-weight=\"800\">Deposits</text><text data-operating-metric=\"deposits\" x=\"427.5\" y=\"1298\" font-size=\"27\">$1.36T</text><text x=\"427.5\" y=\"1330\" font-size=\"22\">(1%) Y/Y</text></g><rect x=\"544\" y=\"1206\" width=\"203\" height=\"148\" rx=\"28\" fill=\"#003770\"/><g text-anchor=\"middle\" fill=\"white\"><text x=\"645.5\" y=\"1259\" font-size=\"29\" font-weight=\"800\">Loans</text><text data-operating-metric=\"loans\" x=\"645.5\" y=\"1298\" font-size=\"27\">$0.65T</text><text x=\"645.5\" y=\"1330\" font-size=\"22\">(2%) Y/Y</text></g><text data-operating-metric=\"eps\" x=\"2483\" y=\"517\" text-anchor=\"middle\" font-size=\"27\" fill=\"#808080\">$1.16</text><text x=\"2560\" y=\"517\" font-size=\"24\" fill=\"#808080\">EPS</text><text x=\"240\" y=\"1391\" font-size=\"27\" fill=\"#686868\">CET1 = Common Equity Tier 1</text><text x=\"170\" y=\"1436\" font-size=\"40\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "nodes": [
    {
      "id": "icg",
      "label": "Institutional Clients Group",
      "value": 9.2,
      "type": "source",
      "col": 0,
      "notes": [
        "+3% Y/Y",
        "21% net margin"
      ]
    },
    {
      "id": "pbwm",
      "label": "Personal Banking & Wealth Management",
      "value": 6.1,
      "type": "source",
      "col": 0,
      "notes": [
        "+5% Y/Y",
        "2% net margin"
      ]
    },
    {
      "id": "legacy",
      "label": "Legacy Franchises",
      "value": 2.1,
      "type": "source",
      "col": 0,
      "notes": [
        "(6%) Y/Y",
        "4% net margin"
      ]
    },
    {
      "id": "corporate_other",
      "label": "Corporate/Other",
      "value": 0.7,
      "type": "source",
      "col": 0,
      "notes": [
        "62% net margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 18,
      "type": "hub",
      "col": 1,
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 3.2,
      "type": "profit",
      "col": 2
    },
    {
      "id": "operating_expenses",
      "label": "Noninterest expenses",
      "value": 13,
      "type": "cost",
      "col": 2,
      "valueText": "($13.0B)"
    },
    {
      "id": "provision_for_credit_losses",
      "label": "Provision for credit losses",
      "value": 1.8,
      "type": "cost",
      "col": 2,
      "valueText": "($1.8B)"
    },
    {
      "id": "net_income",
      "label": "Net income",
      "value": 2.5,
      "type": "profit",
      "col": 3,
      "notes": [
        "(21%) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "valueText": "($0.6B)"
    },
    {
      "id": "compensation_benefits",
      "label": "Compensation & benefits",
      "value": 6.6,
      "type": "cost",
      "col": 3,
      "valueText": "($6.6B)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 2.9,
      "type": "cost",
      "col": 3,
      "valueText": "($2.9B)"
    },
    {
      "id": "technology_communication",
      "label": "Technology & Communication",
      "value": 2.3,
      "type": "cost",
      "col": 3,
      "valueText": "($2.3B)"
    },
    {
      "id": "occupancy",
      "label": "Occupancy",
      "value": 0.6,
      "type": "cost",
      "col": 3,
      "valueText": "($0.6B)"
    },
    {
      "id": "marketing",
      "label": "Marketing",
      "value": 0.4,
      "type": "cost",
      "col": 3,
      "valueText": "($0.4B)"
    }
  ],
  "links": [
    {
      "source": "icg",
      "target": "revenue",
      "value": 9.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 166,
      "targetWidth": 167
    },
    {
      "source": "pbwm",
      "target": "revenue",
      "value": 6.1,
      "sourceOrder": 0,
      "targetOrder": 1,
      "sourceWidth": 109,
      "targetWidth": 110
    },
    {
      "source": "legacy",
      "target": "revenue",
      "value": 2.1,
      "sourceOrder": 0,
      "targetOrder": 2,
      "sourceWidth": 36,
      "targetWidth": 37
    },
    {
      "source": "corporate_other",
      "target": "revenue",
      "value": 0.7,
      "sourceOrder": 0,
      "targetOrder": 3,
      "sourceWidth": 12,
      "targetWidth": 13
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 3.2,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 59,
      "targetWidth": 56
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 13,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 236,
      "targetWidth": 235
    },
    {
      "source": "revenue",
      "target": "provision_for_credit_losses",
      "value": 1.8,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 32,
      "targetWidth": 32
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 2.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 46,
      "targetWidth": 45
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.6,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 10,
      "targetWidth": 9
    },
    {
      "source": "operating_expenses",
      "target": "compensation_benefits",
      "value": 6.6,
      "sourceOrder": 0,
      "targetOrder": 0,
      "sourceWidth": 121,
      "targetWidth": 119
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 2.9,
      "sourceOrder": 1,
      "targetOrder": 0,
      "sourceWidth": 54,
      "targetWidth": 51
    },
    {
      "source": "operating_expenses",
      "target": "technology_communication",
      "value": 2.3,
      "sourceOrder": 2,
      "targetOrder": 0,
      "sourceWidth": 43,
      "targetWidth": 40
    },
    {
      "source": "operating_expenses",
      "target": "occupancy",
      "value": 0.6,
      "sourceOrder": 3,
      "targetOrder": 0,
      "sourceWidth": 10,
      "targetWidth": 9
    },
    {
      "source": "operating_expenses",
      "target": "marketing",
      "value": 0.4,
      "sourceOrder": 4,
      "targetOrder": 0,
      "sourceWidth": 7,
      "targetWidth": 6
    }
  ],
  "layout": {
    "scale": 18,
    "nodes": {
      "icg": {
        "x": 413,
        "y": 405,
        "width": 72,
        "height": 166
      },
      "pbwm": {
        "x": 413,
        "y": 702,
        "width": 72,
        "height": 109
      },
      "legacy": {
        "x": 413,
        "y": 947,
        "width": 72,
        "height": 36
      },
      "corporate_other": {
        "x": 413,
        "y": 1126,
        "width": 72,
        "height": 12
      },
      "revenue": {
        "x": 1196,
        "y": 552,
        "width": 72,
        "height": 327
      },
      "pretax_income": {
        "x": 1762,
        "y": 485,
        "width": 71,
        "height": 56
      },
      "operating_expenses": {
        "x": 1762,
        "y": 692,
        "width": 71,
        "height": 235
      },
      "provision_for_credit_losses": {
        "x": 1769,
        "y": 1143,
        "width": 72,
        "height": 32
      },
      "net_income": {
        "x": 2282,
        "y": 402,
        "width": 72,
        "height": 45
      },
      "tax": {
        "x": 2282,
        "y": 614,
        "width": 72,
        "height": 9
      },
      "compensation_benefits": {
        "x": 2282,
        "y": 771,
        "width": 72,
        "height": 119
      },
      "other": {
        "x": 2282,
        "y": 970,
        "width": 72,
        "height": 51
      },
      "technology_communication": {
        "x": 2282,
        "y": 1106,
        "width": 72,
        "height": 40
      },
      "occupancy": {
        "x": 2282,
        "y": 1249,
        "width": 72,
        "height": 9
      },
      "marketing": {
        "x": 2282,
        "y": 1355,
        "width": 72,
        "height": 6
      }
    },
    "labels": {
      "icg": {
        "blocks": [
          {
            "x": 450,
            "top": 315,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 800,
                "color": "#00348b"
              }
            ]
          },
          {
            "x": 450,
            "top": 365,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "+3% Y/Y",
                "size": 27,
                "weight": 800,
                "color": "#808080"
              }
            ]
          },
          {
            "x": 383,
            "top": 442,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Institutional",
                "size": 38,
                "weight": 800,
                "color": "#00348b"
              },
              {
                "text": "Clients Group",
                "size": 38,
                "weight": 400,
                "color": "#00348b"
              }
            ]
          },
          {
            "x": 383,
            "top": 533,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "21% net margin",
                "size": 27,
                "weight": 800,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "pbwm": {
        "blocks": [
          {
            "x": 450,
            "top": 613,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 800,
                "color": "#00348b"
              }
            ]
          },
          {
            "x": 450,
            "top": 663,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "+5% Y/Y",
                "size": 27,
                "weight": 800,
                "color": "#808080"
              }
            ]
          },
          {
            "x": 383,
            "top": 687,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Personal Banking",
                "size": 38,
                "weight": 800,
                "color": "#00348b"
              },
              {
                "text": "& Wealth",
                "size": 38,
                "weight": 400,
                "color": "#00348b"
              },
              {
                "text": "Management",
                "size": 38,
                "weight": 400,
                "color": "#00348b"
              }
            ]
          },
          {
            "x": 383,
            "top": 843,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "2% net margin",
                "size": 27,
                "weight": 800,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "legacy": {
        "blocks": [
          {
            "x": 450,
            "top": 856,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 800,
                "color": "#00348b"
              }
            ]
          },
          {
            "x": 450,
            "top": 906,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "(6%) Y/Y",
                "size": 27,
                "weight": 800,
                "color": "#808080"
              }
            ]
          },
          {
            "x": 383,
            "top": 942,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Legacy Franchises",
                "size": 38,
                "weight": 800,
                "color": "#00348b"
              }
            ]
          },
          {
            "x": 383,
            "top": 982,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "4% net margin",
                "size": 27,
                "weight": 800,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "corporate_other": {
        "blocks": [
          {
            "x": 450,
            "top": 1068,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 800,
                "color": "#00348b"
              }
            ]
          },
          {
            "x": 383,
            "top": 1109,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "Corporate/Other",
                "size": 38,
                "weight": 800,
                "color": "#00348b"
              }
            ]
          },
          {
            "x": 383,
            "top": 1131,
            "anchor": "end",
            "lineGap": 10,
            "lines": [
              {
                "text": "62% net margin",
                "size": 27,
                "weight": 800,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1232,
            "top": 340,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Revenue",
                "size": 38,
                "weight": 800,
                "color": "#00348b"
              },
              {
                "text": "(net of interest expenses)",
                "size": 38,
                "weight": 400,
                "color": "#00348b"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#00348b"
              },
              {
                "text": "+6% Y/Y",
                "size": 38,
                "weight": 400,
                "color": "#00348b"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1798,
            "top": 381,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Pretax income",
                "size": 38,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f47"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1798,
            "top": 948,
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
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
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
            "x": 1805,
            "top": 1196,
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
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
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
            "x": 2483,
            "top": 352,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "Net income",
                "size": 38,
                "weight": 800,
                "color": "#008f47"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f47"
              }
            ]
          },
          {
            "x": 2483,
            "top": 456,
            "anchor": "middle",
            "lineGap": 10,
            "lines": [
              {
                "text": "(21%) Y/Y",
                "size": 27,
                "weight": 800,
                "color": "#808080"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2473,
            "top": 590,
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
            "x": 2473,
            "top": 770,
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
                "weight": 400,
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
            "x": 2473,
            "top": 980,
            "anchor": "middle",
            "lineGap": 10,
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
            "x": 2473,
            "top": 1087,
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
                "weight": 400,
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
            "x": 2473,
            "top": 1237,
            "anchor": "middle",
            "lineGap": 10,
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
            "x": 2473,
            "top": 1340,
            "anchor": "middle",
            "lineGap": 10,
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
    "preservedAnnotationText": [
      "$1.36T",
      "$0.65T"
    ],
    "zh": {
      "name": "花旗集团 · 2022 财年第四季度",
      "meta": {
        "title": "花旗集团 2022 财年第四季度利润表",
        "titleTextLength": 1980
      },
      "nodes": {
        "icg": {
          "label": "机构客户集团",
          "notes": [
            "同比 +3%",
            "净利率 21%"
          ]
        },
        "pbwm": {
          "label": "个人银行与财富管理",
          "notes": [
            "同比 +5%",
            "净利率 2%"
          ]
        },
        "legacy": {
          "label": "遗留特许业务",
          "notes": [
            "同比 (6%)",
            "净利率 4%"
          ]
        },
        "corporate_other": {
          "label": "公司及其他",
          "notes": [
            "净利率 62%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +6%"
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
            "同比 (21%)"
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
          "label": "场地费用"
        },
        "marketing": {
          "label": "营销"
        }
      },
      "layout": {
        "labels": {
          "icg": {
            "blocks": [
              {
                "x": 450,
                "top": 315,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 800,
                    "color": "#00348b"
                  }
                ]
              },
              {
                "x": 450,
                "top": 365,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "同比 +3%",
                    "size": 27,
                    "weight": 800,
                    "color": "#808080"
                  }
                ]
              },
              {
                "x": 383,
                "top": 465,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "机构客户集团",
                    "size": 38,
                    "weight": 800,
                    "color": "#00348b"
                  }
                ]
              },
              {
                "x": 383,
                "top": 533,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利率 21%",
                    "size": 27,
                    "weight": 800,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "pbwm": {
            "blocks": [
              {
                "x": 450,
                "top": 613,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 800,
                    "color": "#00348b"
                  }
                ]
              },
              {
                "x": 450,
                "top": 663,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "同比 +5%",
                    "size": 27,
                    "weight": 800,
                    "color": "#808080"
                  }
                ]
              },
              {
                "x": 383,
                "top": 733,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "个人银行与财富管理",
                    "size": 38,
                    "weight": 800,
                    "color": "#00348b"
                  }
                ]
              },
              {
                "x": 383,
                "top": 843,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利率 2%",
                    "size": 27,
                    "weight": 800,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "legacy": {
            "blocks": [
              {
                "x": 450,
                "top": 856,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 800,
                    "color": "#00348b"
                  }
                ]
              },
              {
                "x": 450,
                "top": 906,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "同比 (6%)",
                    "size": 27,
                    "weight": 800,
                    "color": "#808080"
                  }
                ]
              },
              {
                "x": 383,
                "top": 942,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "遗留特许业务",
                    "size": 38,
                    "weight": 800,
                    "color": "#00348b"
                  }
                ]
              },
              {
                "x": 383,
                "top": 982,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利率 4%",
                    "size": 27,
                    "weight": 800,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "corporate_other": {
            "blocks": [
              {
                "x": 450,
                "top": 1068,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 800,
                    "color": "#00348b"
                  }
                ]
              },
              {
                "x": 383,
                "top": 1109,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "公司及其他",
                    "size": 38,
                    "weight": 800,
                    "color": "#00348b"
                  }
                ]
              },
              {
                "x": 383,
                "top": 1131,
                "anchor": "end",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利率 62%",
                    "size": 27,
                    "weight": 800,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1232,
                "top": 340,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "收入",
                    "size": 38,
                    "weight": 800,
                    "color": "#00348b"
                  },
                  {
                    "text": "（扣除利息支出后）",
                    "size": 38,
                    "weight": 400,
                    "color": "#00348b"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#00348b"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 38,
                    "weight": 400,
                    "color": "#00348b"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1798,
                "top": 381,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 38,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f47"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1798,
                "top": 948,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "非利息费用",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
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
                "x": 1805,
                "top": 1196,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "信用损失拨备",
                    "size": 38,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
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
                "x": 2483,
                "top": 352,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 38,
                    "weight": 800,
                    "color": "#008f47"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f47"
                  }
                ]
              },
              {
                "x": 2483,
                "top": 456,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "同比 (21%)",
                    "size": 27,
                    "weight": 800,
                    "color": "#808080"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2473,
                "top": 590,
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
                "x": 2473,
                "top": 770,
                "anchor": "middle",
                "lineGap": 10,
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
          "other": {
            "blocks": [
              {
                "x": 2473,
                "top": 980,
                "anchor": "middle",
                "lineGap": 10,
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
                "x": 2473,
                "top": 1087,
                "anchor": "middle",
                "lineGap": 10,
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
                "x": 2473,
                "top": 1237,
                "anchor": "middle",
                "lineGap": 10,
                "lines": [
                  {
                    "text": "场地费用",
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
                "x": 2473,
                "top": 1340,
                "anchor": "middle",
                "lineGap": 10,
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
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"191\" y=\"271\" font-size=\"39\" font-weight=\"800\" fill=\"#155077\">按业务分部</text><rect x=\"70\" y=\"1206\" width=\"240\" height=\"148\" rx=\"28\" fill=\"#003770\"/><g text-anchor=\"middle\" fill=\"white\"><text x=\"190\" y=\"1259\" font-size=\"29\" font-weight=\"800\">CET1 比率</text><text data-operating-metric=\"cet1\" x=\"190\" y=\"1298\" font-size=\"27\">13.0%</text><text x=\"190\" y=\"1330\" font-size=\"22\">同比 +0.8pp</text></g><rect x=\"320\" y=\"1206\" width=\"215\" height=\"148\" rx=\"28\" fill=\"#003770\"/><g text-anchor=\"middle\" fill=\"white\"><text x=\"427.5\" y=\"1259\" font-size=\"29\" font-weight=\"800\">存款</text><text data-operating-metric=\"deposits\" x=\"427.5\" y=\"1298\" font-size=\"27\">$1.36T</text><text x=\"427.5\" y=\"1330\" font-size=\"22\">同比 (1%)</text></g><rect x=\"544\" y=\"1206\" width=\"203\" height=\"148\" rx=\"28\" fill=\"#003770\"/><g text-anchor=\"middle\" fill=\"white\"><text x=\"645.5\" y=\"1259\" font-size=\"29\" font-weight=\"800\">贷款</text><text data-operating-metric=\"loans\" x=\"645.5\" y=\"1298\" font-size=\"27\">$0.65T</text><text x=\"645.5\" y=\"1330\" font-size=\"22\">同比 (2%)</text></g><text data-operating-metric=\"eps\" x=\"2483\" y=\"517\" text-anchor=\"middle\" font-size=\"27\" fill=\"#808080\">$1.16</text><text x=\"2560\" y=\"517\" font-size=\"24\" fill=\"#808080\">EPS</text><text x=\"240\" y=\"1391\" font-size=\"27\" fill=\"#686868\">CET1 = 普通股一级资本</text><text x=\"170\" y=\"1436\" font-size=\"40\" font-weight=\"800\">来源：季度业绩</text></g>"
    }
  }
});})();