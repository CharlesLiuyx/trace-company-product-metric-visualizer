window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "autodesk-q2-fy27",
  "name": "Autodesk · Q2 FY27",
  "company": "Autodesk",
  "meta": {
    "company": "Autodesk",
    "title": "Autodesk Q2 FY27 Income Statement",
    "period": "Q2 FY27",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/autodesk-q2-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 199.51008849557522,
    "titleSize": 125.23893805309736,
    "titleWeight": 800,
    "titleTextLength": 2318
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error",
      "fullFaceIds": [
        "gross_profit:left",
        "operating_expenses:left",
        "other_opex:left"
      ]
    },
    "linkOpacity": 1,
    "linkTint": {
      "source": "#858585",
      "hub": "#858585",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "aec",
      "label": "Architecture Engineering & Construction",
      "value": 1029,
      "valueText": "$1,029M",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+17% Y/Y"
      ]
    },
    {
      "id": "autocad",
      "label": "AutoCAD",
      "value": 500,
      "valueText": "$500M",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+14% Y/Y"
      ]
    },
    {
      "id": "manufacturing",
      "label": "Manufacturing",
      "value": 385,
      "valueText": "$385M",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+15% Y/Y"
      ]
    },
    {
      "id": "media_entertainment",
      "label": "Media & Entertainment",
      "value": 92,
      "valueText": "$92M",
      "type": "source",
      "col": 0,
      "order": 3,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+15% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 40,
      "valueText": "$40M",
      "type": "source",
      "col": 0,
      "order": 4,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+29% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 2046,
      "valueText": "$2,046M",
      "type": "hub",
      "col": 1,
      "order": 5,
      "color": "#000000",
      "labelColor": "#000000",
      "notes": [
        "+16% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 1870,
      "valueText": "$1,870M",
      "type": "profit",
      "col": 2,
      "order": 6,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "91% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 176,
      "valueText": "($176M)",
      "type": "cost",
      "col": 2,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 599,
      "valueText": "$599M",
      "type": "profit",
      "col": 3,
      "order": 8,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "29% margin",
        "+4pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1271,
      "valueText": "($1,271M)",
      "type": "cost",
      "col": 3,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 492,
      "valueText": "$492M",
      "type": "profit",
      "col": 4,
      "order": 10,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "notes": [
        "24% margin",
        "+6pp Y/Y"
      ]
    },
    {
      "id": "tax_other",
      "label": "Tax & Other",
      "value": 107,
      "valueText": "($107M)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 616,
      "valueText": "($616M)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "30% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "rd",
      "label": "R&D",
      "value": 464,
      "valueText": "($464M)",
      "type": "cost",
      "col": 4,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "23% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 179,
      "valueText": "($179M)",
      "type": "cost",
      "col": 4,
      "order": 14,
      "color": "#cc0000",
      "labelColor": "#941100",
      "notes": [
        "9% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "other_opex",
      "label": "Other",
      "value": 12,
      "valueText": "($12M)",
      "type": "cost",
      "col": 4,
      "order": 15,
      "color": "#cb4b4b",
      "labelColor": "#941100",
      "notes": [
        "1% of revenue",
        "(1pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "aec",
      "target": "revenue",
      "value": 1029,
      "sourceWidth": 185,
      "y0": 499.5,
      "sourceOrder": 0,
      "targetWidth": 186.516,
      "y1": 751.258,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "autocad",
      "target": "revenue",
      "value": 500,
      "sourceWidth": 90,
      "y0": 766,
      "sourceOrder": 0,
      "targetWidth": 90.738,
      "y1": 889.885,
      "targetOrder": 1,
      "linkTint": "#858585"
    },
    {
      "source": "manufacturing",
      "target": "revenue",
      "value": 385,
      "sourceWidth": 69,
      "y0": 971.5,
      "sourceOrder": 0,
      "targetWidth": 69.566,
      "y1": 970.037,
      "targetOrder": 2,
      "linkTint": "#858585"
    },
    {
      "source": "media_entertainment",
      "target": "revenue",
      "value": 92,
      "sourceWidth": 16,
      "y0": 1127,
      "sourceOrder": 0,
      "targetWidth": 16.131,
      "y1": 1012.885,
      "targetOrder": 3,
      "linkTint": "#858585"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 40,
      "sourceWidth": 6,
      "y0": 1267,
      "sourceOrder": 0,
      "targetWidth": 6.049,
      "y1": 1023.975,
      "targetOrder": 4,
      "linkTint": "#858585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 1870,
      "sourceWidth": 337,
      "y0": 826.5,
      "sourceOrder": 0,
      "targetWidth": 339,
      "y1": 730.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 176,
      "sourceWidth": 31,
      "y0": 1011.5,
      "sourceOrder": 1,
      "targetWidth": 32,
      "y1": 1127,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 599,
      "sourceWidth": 109,
      "y0": 615.5,
      "sourceOrder": 0,
      "targetWidth": 109,
      "y1": 519.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1271,
      "sourceWidth": 230,
      "y0": 785,
      "sourceOrder": 1,
      "targetWidth": 231,
      "y1": 867.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 492,
      "sourceWidth": 89,
      "y0": 509.5,
      "sourceOrder": 0,
      "targetWidth": 89,
      "y1": 421.5,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax_other",
      "value": 107,
      "sourceWidth": 19,
      "y0": 564.5,
      "sourceOrder": 1,
      "targetWidth": 20,
      "y1": 643,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 616,
      "sourceWidth": 111.034,
      "y0": 807.517,
      "sourceOrder": 0,
      "targetWidth": 112,
      "y1": 822,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rd",
      "value": 464,
      "sourceWidth": 83.276,
      "y0": 904.672,
      "sourceOrder": 1,
      "targetWidth": 84,
      "y1": 1001,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 179,
      "sourceWidth": 32.716,
      "y0": 962.668,
      "sourceOrder": 2,
      "targetWidth": 33,
      "y1": 1156.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 12,
      "sourceWidth": 2.974,
      "y0": 980.513,
      "sourceOrder": 3,
      "targetWidth": 3,
      "y1": 1274.5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "aec": {
        "x": 391,
        "y": 407,
        "width": 71,
        "height": 185
      },
      "autocad": {
        "x": 391,
        "y": 721,
        "width": 71,
        "height": 90
      },
      "manufacturing": {
        "x": 391,
        "y": 937,
        "width": 71,
        "height": 69
      },
      "media_entertainment": {
        "x": 391,
        "y": 1119,
        "width": 71,
        "height": 16
      },
      "other_revenue": {
        "x": 391,
        "y": 1264,
        "width": 71,
        "height": 6
      },
      "revenue": {
        "x": 858,
        "y": 658,
        "width": 70,
        "height": 369
      },
      "gross_profit": {
        "x": 1325,
        "y": 561,
        "width": 71,
        "height": 339
      },
      "cost_of_revenue": {
        "x": 1322,
        "y": 1111,
        "width": 72,
        "height": 32
      },
      "operating_profit": {
        "x": 1793,
        "y": 465,
        "width": 70,
        "height": 109
      },
      "operating_expenses": {
        "x": 1793,
        "y": 752,
        "width": 70,
        "height": 231
      },
      "net_profit": {
        "x": 2259,
        "y": 377,
        "width": 71,
        "height": 89
      },
      "tax_other": {
        "x": 2259,
        "y": 633,
        "width": 71,
        "height": 20
      },
      "sm": {
        "x": 2259,
        "y": 766,
        "width": 71,
        "height": 112
      },
      "rd": {
        "x": 2259,
        "y": 959,
        "width": 71,
        "height": 84
      },
      "ga": {
        "x": 2259,
        "y": 1140,
        "width": 71,
        "height": 33
      },
      "other_opex": {
        "x": 2259,
        "y": 1273,
        "width": 71,
        "height": 3
      }
    },
    "labels": {
      "aec": {
        "blocks": [
          {
            "x": 431.75,
            "top": 307.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.96999999999997,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000",
                "textLength": 148
              },
              {
                "text": "+17% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 195,
            "top": 425.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.000000000000028,
            "lines": [
              {
                "text": "Architecture",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 242
              },
              {
                "text": "Engineering",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 225
              },
              {
                "text": "& Construction",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 287
              }
            ]
          }
        ]
      },
      "autocad": {
        "blocks": [
          {
            "x": 428.5,
            "top": 622.97,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000",
                "textLength": 117
              }
            ]
          },
          {
            "x": 429.5,
            "top": 676.94,
            "anchor": "middle",
            "semanticRole": "description",
            "lineGap": 5,
            "lines": [
              {
                "text": "+14% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 194.5,
            "top": 742.9999877929688,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "AutoCAD",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 171
              }
            ]
          },
          {
            "x": 196.5,
            "top": 783.94,
            "anchor": "middle",
            "semanticRole": "description",
            "lineGap": 11,
            "lines": [
              {
                "text": "Computer-aided design",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 300
              },
              {
                "text": "Including LT",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 152
              }
            ]
          }
        ]
      },
      "manufacturing": {
        "blocks": [
          {
            "x": 429,
            "top": 837.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000",
                "textLength": 117
              },
              {
                "text": "+15% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 197.5,
            "top": 947.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "Manufacturing",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 285
              }
            ]
          }
        ]
      },
      "media_entertainment": {
        "blocks": [
          {
            "x": 429,
            "top": 1020.77,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000",
                "textLength": 95
              },
              {
                "text": "+15% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 211.5,
            "top": 1077.300048828125,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13,
            "lines": [
              {
                "text": "Media &",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 155
              },
              {
                "text": "Entertainment",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 281
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 426.5,
            "top": 1164.47,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 14.970000000000027,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000",
                "textLength": 95
              },
              {
                "text": "+29% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          },
          {
            "x": 197,
            "top": 1245.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 5,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 110
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 894.3333333333334,
            "top": 507.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.120000000000033,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 162
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#000000",
                "textLength": 149
              },
              {
                "text": "+16% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 117
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1364.375,
            "top": 370.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000021,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 224
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 149
              },
              {
                "text": "91% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 150
              },
              {
                "text": "+0pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1358.5,
            "top": 1154.9,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 15.784999999999968,
            "lines": [
              {
                "text": "Cost of",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 113
              },
              {
                "text": "revenue",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 132
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 122
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1822.375,
            "top": 274.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 312
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 117
              },
              {
                "text": "29% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 150
              },
              {
                "text": "+4pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1825.1666666666667,
            "top": 995.2,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 12.134999999999991,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800,
                "color": "#941100",
                "textLength": 165
              },
              {
                "text": "expenses",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 150
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100",
                "textLength": 150
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2451.375,
            "top": 334.4,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 13.080000000000004,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51",
                "textLength": 186
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#008f51",
                "textLength": 117
              },
              {
                "text": "24% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 150
              },
              {
                "text": "+6pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 112
              }
            ]
          }
        ]
      },
      "tax_other": {
        "blocks": [
          {
            "x": 2451,
            "top": 607.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 9.57000000000005,
            "lines": [
              {
                "text": "Tax & Other",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 180
              },
              {
                "text": "$value",
                "size": 30.17,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2459.5,
            "top": 759.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.513333333333359,
            "lines": [
              {
                "text": "S&M",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 64
              },
              {
                "text": "$value",
                "size": 30.17,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "30% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 198
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 114
              }
            ]
          }
        ]
      },
      "rd": {
        "blocks": [
          {
            "x": 2459.875,
            "top": 922.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.513333333333359,
            "lines": [
              {
                "text": "R&D",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 60
              },
              {
                "text": "$value",
                "size": 30.17,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "23% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 197
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 114
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2457.375,
            "top": 1081.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.513333333333321,
            "lines": [
              {
                "text": "G&A",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 64
              },
              {
                "text": "$value",
                "size": 30.17,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "9% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 182
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2457.125,
            "top": 1244.6,
            "anchor": "middle",
            "semanticRole": "",
            "lineGap": 8.846666666666655,
            "lines": [
              {
                "text": "Other",
                "size": 30,
                "weight": 800,
                "color": "#941100",
                "textLength": 86
              },
              {
                "text": "$value",
                "size": 30.245,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "1% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 181
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666",
                "textLength": 113
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"2457\" y=\"261.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">Q2 FY27</text><text x=\"2457\" y=\"310.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">Ending July 2026</text></g>",
  "i18n": {
    "preservedAnnotationText": [
      "ARR",
      "ARPAM",
      "GMV",
      "Clover GPV",
      "USDC",
      "Klarna Checkout (KCO)",
      "monday"
    ],
    "zh": {
      "name": "Autodesk · 2027 财年第二季度",
      "meta": {
        "title": "Autodesk 2027 财年第二季度利润表",
        "period": "2027 财年第二季度",
        "titleTextLength": 2200,
        "titleSize": 108
      },
      "nodes": {
        "aec": {
          "label": "建筑、工程与施工",
          "notes": [
            "同比 +17%"
          ]
        },
        "autocad": {
          "label": "AutoCAD 产品",
          "notes": [
            "同比 +14%"
          ]
        },
        "manufacturing": {
          "label": "制造业",
          "notes": [
            "同比 +15%"
          ]
        },
        "media_entertainment": {
          "label": "媒体与娱乐",
          "notes": [
            "同比 +15%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +29%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +16%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 91%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 29%",
            "同比 +4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 24%",
            "同比 +6 个百分点"
          ]
        },
        "tax_other": {
          "label": "税费及其他",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 30%",
            "同比 (2 个百分点)"
          ]
        },
        "rd": {
          "label": "研发",
          "notes": [
            "占收入 23%",
            "同比 (1 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 9%",
            "同比 (1 个百分点)"
          ]
        },
        "other_opex": {
          "label": "其他",
          "notes": [
            "占收入 1%",
            "同比 (1 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "aec": {
            "blocks": [
              {
                "x": 431.75,
                "top": 307.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.96999999999997,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000",
                    "textLength": 148
                  },
                  {
                    "text": "同比 +17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 195,
                "top": 425.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.000000000000028,
                "lines": [
                  {
                    "text": "建筑",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "工程",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "及施工",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "autocad": {
            "blocks": [
              {
                "x": 428.5,
                "top": 622.97,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000",
                    "textLength": 117
                  }
                ]
              },
              {
                "x": 429.5,
                "top": 676.94,
                "anchor": "middle",
                "semanticRole": "description",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "同比 +14%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 194.5,
                "top": 742.9999877929688,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "AutoCAD 产品",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 196.5,
                "top": 783.94,
                "anchor": "middle",
                "semanticRole": "description",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "计算机辅助设计",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "包含 LT",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "manufacturing": {
            "blocks": [
              {
                "x": 429,
                "top": 837.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000",
                    "textLength": 117
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
                "x": 197.5,
                "top": 947.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "制造业",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "media_entertainment": {
            "blocks": [
              {
                "x": 429,
                "top": 1020.77,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000",
                    "textLength": 95
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
                "x": 211.5,
                "top": 1077.300048828125,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "媒体及",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "娱乐",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 426.5,
                "top": 1164.47,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 14.970000000000027,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000",
                    "textLength": 95
                  },
                  {
                    "text": "同比 +29%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 197,
                "top": 1245.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 894.3333333333334,
                "top": 507.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.120000000000033,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#000000",
                    "textLength": 149
                  },
                  {
                    "text": "同比 +16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1364.375,
                "top": 370.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000021,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51",
                    "textLength": 149
                  },
                  {
                    "text": "利润率 91%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1358.5,
                "top": 1154.9,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 15.784999999999968,
                "lines": [
                  {
                    "text": "成本：",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "收入",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 122
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1822.375,
                "top": 274.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000004,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51",
                    "textLength": 117
                  },
                  {
                    "text": "利润率 29%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1825.1666666666667,
                "top": 995.2,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 12.134999999999991,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100",
                    "textLength": 150
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2451.375,
                "top": 334.4,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 13.080000000000004,
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
                    "color": "#008f51",
                    "textLength": 117
                  },
                  {
                    "text": "利润率 24%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +6 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "tax_other": {
            "blocks": [
              {
                "x": 2451,
                "top": 607.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 9.57000000000005,
                "lines": [
                  {
                    "text": "税费 及其他",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.17,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2459.5,
                "top": 759.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.513333333333359,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.17,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 30%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rd": {
            "blocks": [
              {
                "x": 2459.875,
                "top": 922.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.513333333333359,
                "lines": [
                  {
                    "text": "研发",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.17,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2457.375,
                "top": 1081.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.513333333333321,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.17,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2457.125,
                "top": 1244.6,
                "anchor": "middle",
                "semanticRole": "",
                "lineGap": 8.846666666666655,
                "lines": [
                  {
                    "text": "其他",
                    "size": 30,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 30.245,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><text x=\"2457\" y=\"261.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">2027 财年第二季度</text><text x=\"2457\" y=\"310.36\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"400\" fill=\"#777777\">截至 2026 年 7 月</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/autodesk/company-logo-autodesk-q2-fy27.png",
      "x": 688,
      "y": 221,
      "width": 417,
      "height": 242
    }
  ]
});
