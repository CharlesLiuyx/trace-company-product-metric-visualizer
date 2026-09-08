/* Source-measured Paycom Q2 FY26 Sankey View Adapter. */
(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "paycom-q2-fy26",
  "name": "Paycom · Q2 FY26",
  "company": "Paycom",
  "meta": {
    "company": "Paycom",
    "title": "Paycom Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Ending Jun. 2026",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/paycom-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 197,
    "titleSize": 133,
    "titleWeight": 800,
    "titleTextLength": 2220,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#707070",
    "noteColor": "#707070",
    "palette": {
      "source": {
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#009651"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a61900"
      }
    },
    "linkTint": {
      "source": "#888888",
      "hub": "#888888",
      "profit": "#9bcd9b",
      "cost": "#df8888"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true
  },
  "layout": {
    "scale": 0.6,
    "nodes": {
      "recurring": {
        "x": 371,
        "y": 591,
        "width": 72,
        "height": 305
      },
      "implementation_other": {
        "x": 371,
        "y": 1102,
        "width": 72,
        "height": 14
      },
      "revenue": {
        "x": 839,
        "y": 711,
        "width": 70,
        "height": 320
      },
      "gross_profit": {
        "x": 1306,
        "y": 591,
        "width": 71,
        "height": 267
      },
      "cost_of_revenue": {
        "x": 1306,
        "y": 1063,
        "width": 71,
        "height": 53
      },
      "operating_profit": {
        "x": 1772,
        "y": 489,
        "width": 73,
        "height": 100
      },
      "operating_expenses": {
        "x": 1772,
        "y": 818,
        "width": 73,
        "height": 164
      },
      "net_profit": {
        "x": 2240,
        "y": 375,
        "width": 72,
        "height": 64
      },
      "tax": {
        "x": 2240,
        "y": 569,
        "width": 72,
        "height": 27
      },
      "other": {
        "x": 2240,
        "y": 699,
        "width": 72,
        "height": 5
      },
      "sm": {
        "x": 2240,
        "y": 792,
        "width": 72,
        "height": 70
      },
      "ga": {
        "x": 2240,
        "y": 983,
        "width": 72,
        "height": 44
      },
      "rnd": {
        "x": 2240,
        "y": 1139,
        "width": 72,
        "height": 30
      },
      "depreciation": {
        "x": 2240,
        "y": 1304,
        "width": 72,
        "height": 15
      }
    },
    "labels": {
      "recurring": {
        "blocks": [
          {
            "x": 402.5,
            "top": 492.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000",
                "textLength": 119
              }
            ]
          },
          {
            "x": 403.5,
            "top": 547.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "+11% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 117
              }
            ]
          },
          {
            "x": 174.5,
            "top": 716.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "Recurring",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 185
              }
            ]
          }
        ]
      },
      "implementation_other": {
        "blocks": [
          {
            "x": 411,
            "top": 1002.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000",
                "textLength": 96
              }
            ]
          },
          {
            "x": 412,
            "top": 1057.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "(9%) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 102
              }
            ]
          },
          {
            "x": 173,
            "top": 1059.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "Implementation",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 310
              },
              {
                "text": "and other",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 189
              }
            ],
            "lineGap": 13
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 875.5,
            "top": 561.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#000000",
                "textLength": 163
              }
            ]
          },
          {
            "x": 874,
            "top": 611.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#000000",
                "textLength": 118
              }
            ]
          },
          {
            "x": 875,
            "top": 666.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "+10% Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 118
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1339.5,
            "top": 402.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#009651",
                "textLength": 225
              }
            ]
          },
          {
            "x": 1338.5,
            "top": 455.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#009651",
                "textLength": 119
              }
            ]
          },
          {
            "x": 1338,
            "top": 509.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "83% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 150
              }
            ]
          },
          {
            "x": 1339.5,
            "top": 548.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "+1pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1343.5,
            "top": 1131.3,
            "anchor": "middle",
            "lines": [
              {
                "text": "Cost of",
                "size": 35,
                "weight": 800,
                "color": "#a61900",
                "textLength": 115
              }
            ]
          },
          {
            "x": 1342,
            "top": 1186.3,
            "anchor": "middle",
            "lines": [
              {
                "text": "revenue",
                "size": 35,
                "weight": 800,
                "color": "#a61900",
                "textLength": 134
              }
            ]
          },
          {
            "x": 1341.5,
            "top": 1226.3,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 35,
                "weight": 400,
                "color": "#a61900",
                "textLength": 105
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1808.5,
            "top": 300.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800,
                "color": "#009651",
                "textLength": 313
              }
            ]
          },
          {
            "x": 1807.5,
            "top": 353.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#009651",
                "textLength": 119
              }
            ]
          },
          {
            "x": 1808,
            "top": 407.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "32% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 150
              }
            ]
          },
          {
            "x": 1808.5,
            "top": 446.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "+8pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1809,
            "top": 997.08,
            "anchor": "middle",
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800,
                "color": "#a61900",
                "textLength": 166
              }
            ]
          },
          {
            "x": 1808.5,
            "top": 1051.08,
            "anchor": "middle",
            "lines": [
              {
                "text": "expenses",
                "size": 36,
                "weight": 800,
                "color": "#a61900",
                "textLength": 153
              }
            ]
          },
          {
            "x": 1808,
            "top": 1092.08,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 36,
                "weight": 400,
                "color": "#a61900",
                "textLength": 124
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2433.5,
            "top": 338.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800,
                "color": "#009651",
                "textLength": 187
              }
            ]
          },
          {
            "x": 2432,
            "top": 391.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#009651",
                "textLength": 118
              }
            ]
          },
          {
            "x": 2432,
            "top": 445.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "20% margin",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 150
              }
            ]
          },
          {
            "x": 2432.5,
            "top": 484.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "+2pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2429.5,
            "top": 543.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800,
                "color": "#a61900",
                "textLength": 53
              }
            ]
          },
          {
            "x": 2429.5,
            "top": 583.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#a61900",
                "textLength": 97
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2435.5,
            "top": 656.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": "#a61900",
                "textLength": 87
              }
            ]
          },
          {
            "x": 2435,
            "top": 698.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#a61900",
                "textLength": 96
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2434.5,
            "top": 768.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "S&M",
                "size": 32,
                "weight": 800,
                "color": "#a61900",
                "textLength": 65
              }
            ]
          },
          {
            "x": 2435,
            "top": 809.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#a61900",
                "textLength": 114
              }
            ]
          },
          {
            "x": 2435,
            "top": 851.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "22% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 198
              }
            ]
          },
          {
            "x": 2435.5,
            "top": 891.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "(2pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2436,
            "top": 940.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "G&A",
                "size": 32,
                "weight": 800,
                "color": "#a61900",
                "textLength": 64
              }
            ]
          },
          {
            "x": 2435,
            "top": 981.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#a61900",
                "textLength": 96
              }
            ]
          },
          {
            "x": 2435.5,
            "top": 1024.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "15% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 197
              }
            ]
          },
          {
            "x": 2435.5,
            "top": 1063.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "+0pp Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2436,
            "top": 1113.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800,
                "color": "#a61900",
                "textLength": 62
              }
            ]
          },
          {
            "x": 2435,
            "top": 1154.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#a61900",
                "textLength": 96
              }
            ]
          },
          {
            "x": 2435.5,
            "top": 1197.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "10% of revenue",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 197
              }
            ]
          },
          {
            "x": 2435.5,
            "top": 1237.62,
            "anchor": "middle",
            "lines": [
              {
                "text": "(6pp) Y/Y",
                "size": 29,
                "weight": 400,
                "color": "#777777",
                "textLength": 113
              }
            ]
          }
        ]
      },
      "depreciation": {
        "blocks": [
          {
            "x": 2435.5,
            "top": 1289.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "Depreciation",
                "size": 32,
                "weight": 800,
                "color": "#a61900",
                "textLength": 193
              }
            ]
          },
          {
            "x": 2435,
            "top": 1331.96,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#a61900",
                "textLength": 96
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "recurring",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Recurring",
      "value": 505,
      "notes": [
        "+11% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#888888"
    },
    {
      "id": "implementation_other",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Implementation and other",
      "value": 26,
      "notes": [
        "(9%) Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#888888"
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 531,
      "notes": [
        "+10% Y/Y"
      ],
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#888888"
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 442,
      "notes": [
        "83% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009651",
      "linkTint": "#9bcd9b"
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 89,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a61900",
      "linkTint": "#df8888"
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 169,
      "notes": [
        "32% margin",
        "+8pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009651",
      "linkTint": "#9bcd9b"
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Operating expenses",
      "value": 274,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a61900",
      "linkTint": "#df8888"
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 107,
      "notes": [
        "20% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#009651",
      "linkTint": "#9bcd9b"
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 50,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a61900",
      "linkTint": "#df8888"
    },
    {
      "id": "other",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 12,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a61900",
      "linkTint": "#df8888"
    },
    {
      "id": "sm",
      "col": 4,
      "order": 3,
      "type": "cost",
      "label": "S&M",
      "value": 119,
      "notes": [
        "22% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a61900",
      "linkTint": "#df8888"
    },
    {
      "id": "ga",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": "G&A",
      "value": 77,
      "notes": [
        "15% of revenue",
        "+0pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a61900",
      "linkTint": "#df8888"
    },
    {
      "id": "rnd",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "R&D",
      "value": 52,
      "notes": [
        "10% of revenue",
        "(6pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a61900",
      "linkTint": "#df8888"
    },
    {
      "id": "depreciation",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Depreciation",
      "value": 26,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a61900",
      "linkTint": "#df8888"
    }
  ],
  "links": [
    {
      "source": "recurring",
      "target": "revenue",
      "value": 505,
      "sourceWidth": 305,
      "targetWidth": 305,
      "y0": 743.5,
      "y1": 863.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#888888"
    },
    {
      "source": "implementation_other",
      "target": "revenue",
      "value": 26,
      "sourceWidth": 14,
      "targetWidth": 15,
      "y0": 1109,
      "y1": 1023.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#888888"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 442,
      "sourceWidth": 267,
      "targetWidth": 267,
      "y0": 844.5,
      "y1": 724.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcd9b"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 89,
      "sourceWidth": 53,
      "targetWidth": 53,
      "y0": 1004.5,
      "y1": 1089.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8888"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 169,
      "sourceWidth": 103,
      "targetWidth": 100,
      "y0": 642.5,
      "y1": 539,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcd9b"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 274,
      "sourceWidth": 164,
      "targetWidth": 164,
      "y0": 776,
      "y1": 900,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8888"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 107,
      "sourceWidth": 65,
      "targetWidth": 64,
      "y0": 521.5,
      "y1": 407,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9bcd9b"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 50,
      "sourceWidth": 29,
      "targetWidth": 27,
      "y0": 568.5,
      "y1": 582.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8888"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 12,
      "sourceWidth": 6,
      "targetWidth": 5,
      "y0": 586,
      "y1": 701.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8888"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 119,
      "sourceWidth": 72,
      "targetWidth": 70,
      "y0": 854,
      "y1": 827,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8888"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 77,
      "sourceWidth": 47,
      "targetWidth": 44,
      "y0": 913.5,
      "y1": 1005,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8888"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 52,
      "sourceWidth": 31,
      "targetWidth": 30,
      "y0": 952.5,
      "y1": 1154,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8888"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation",
      "value": 26,
      "sourceWidth": 14,
      "targetWidth": 15,
      "y0": 975,
      "y1": 1311.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8888"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Paycom · 2026 财年第二季度",
      "meta": {
        "title": "Paycom 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月",
        "titleTextLength": 1780
      },
      "nodes": {
        "recurring": {
          "label": "经常性收入",
          "notes": [
            "同比 +11%"
          ]
        },
        "implementation_other": {
          "label": "实施及其他",
          "notes": [
            "同比 (9%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +10%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 83%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 32%",
            "同比 +8 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 20%",
            "同比 +2 个百分点"
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
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 22%",
            "同比 (2 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 15%",
            "同比 +0 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 10%",
            "同比 (6 个百分点)"
          ]
        },
        "depreciation": {
          "label": "折旧",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "recurring": {
            "blocks": [
              {
                "x": 402.5,
                "top": 492.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 403.5,
                "top": 547.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +11%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 174.5,
                "top": 716.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "经常性收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              }
            ]
          },
          "implementation_other": {
            "blocks": [
              {
                "x": 411,
                "top": 1002.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 412,
                "top": 1057.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 (9%)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 173,
                "top": 1059.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "实施及",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ],
                "lineGap": 13
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 875.5,
                "top": 561.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 874,
                "top": 611.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#000000"
                  }
                ]
              },
              {
                "x": 875,
                "top": 666.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1339.5,
                "top": 402.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#009651"
                  }
                ]
              },
              {
                "x": 1338.5,
                "top": 455.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#009651"
                  }
                ]
              },
              {
                "x": 1338,
                "top": 509.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 83%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1339.5,
                "top": 548.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +1 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1343.5,
                "top": 1131.3,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "收入",
                    "size": 35,
                    "weight": 800,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 1342,
                "top": 1186.3,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "成本",
                    "size": 35,
                    "weight": 800,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 1341.5,
                "top": 1226.3,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1808.5,
                "top": 300.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#009651"
                  }
                ]
              },
              {
                "x": 1807.5,
                "top": 353.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#009651"
                  }
                ]
              },
              {
                "x": 1808,
                "top": 407.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 32%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1808.5,
                "top": 446.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +8 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1809,
                "top": 997.08,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "营业",
                    "size": 36,
                    "weight": 800,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 1808.5,
                "top": 1051.08,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 1808,
                "top": 1092.08,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2433.5,
                "top": 338.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#009651"
                  }
                ]
              },
              {
                "x": 2432,
                "top": 391.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#009651"
                  }
                ]
              },
              {
                "x": 2432,
                "top": 445.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 20%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2432.5,
                "top": 484.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +2 个百分点",
                    "size": 29,
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
                "x": 2429.5,
                "top": 543.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 2429.5,
                "top": 583.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2435.5,
                "top": 656.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 2435,
                "top": 698.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2434.5,
                "top": 768.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 32,
                    "weight": 800,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 2435,
                "top": 809.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 2435,
                "top": 851.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 22%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2435.5,
                "top": 891.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2436,
                "top": 940.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 32,
                    "weight": 800,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 2435,
                "top": 981.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 2435.5,
                "top": 1024.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 15%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2435.5,
                "top": 1063.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +0 个百分点",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2436,
                "top": 1113.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 2435,
                "top": 1154.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 2435.5,
                "top": 1197.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 10%",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2435.5,
                "top": 1237.62,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 29,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "depreciation": {
            "blocks": [
              {
                "x": 2435.5,
                "top": 1289.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "折旧",
                    "size": 32,
                    "weight": 800,
                    "color": "#a61900"
                  }
                ]
              },
              {
                "x": 2435,
                "top": 1331.96,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#a61900"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "paycom-company-logo",
      "href": "data/assets/raster-annotations/paycom-q2-fy26/company-logo.png",
      "x": 514,
      "y": 266,
      "width": 640,
      "height": 156
    }
  ]
});})();
