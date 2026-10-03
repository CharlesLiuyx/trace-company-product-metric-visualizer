(function () { window.DATASETS = window.DATASETS || []; window.DATASETS.push({
  "key": "lenovo-q1-fy27",
  "name": "Lenovo · Q1 FY27",
  "company": "Lenovo",
  "meta": {
    "company": "Lenovo",
    "title": "Lenovo Q1 FY27 Income Statement",
    "period": "Q1 FY27",
    "periodNote": "Ending June 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/lenovo-q1-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2180,
    "periodX": 2468,
    "periodY": 254,
    "periodNoteY": 296,
    "periodSize": 38,
    "periodNoteSize": 28
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    },
    "type": {
      "name": 40,
      "value": 38,
      "note": 28,
      "lineGap": 9
    }
  },
  "nodes": [
    {
      "id": "idg",
      "value": 17.1,
      "label": "IDG Intelligent Devices Group",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#7a126b",
      "labelColor": "#7a126b",
      "linkTint": "#bc8db4",
      "notes": [
        "+27% Y/Y",
        "7% operating margin"
      ]
    },
    {
      "id": "isg",
      "value": 8.5,
      "label": "ISG Infrastructure Solutions Group",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#f26a52",
      "labelColor": "#f26a52",
      "linkTint": "#f2b4aa",
      "notes": [
        "+98% Y/Y",
        "9% operating margin"
      ]
    },
    {
      "id": "ssg",
      "value": 2.9,
      "label": "SSG Solutions & Services Group",
      "type": "source",
      "col": 0,
      "order": 2,
      "color": "#3046ad",
      "labelColor": "#3046ad",
      "linkTint": "#9ba5d3",
      "notes": [
        "+28% Y/Y",
        "24% operating margin"
      ]
    },
    {
      "id": "gross_revenue",
      "value": 28.5,
      "label": "Gross revenue",
      "type": "hub",
      "col": 1,
      "order": 3,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585"
    },
    {
      "id": "revenue",
      "value": 26.9,
      "label": "Revenue",
      "type": "hub",
      "col": 2,
      "order": 4,
      "color": "#000000",
      "labelColor": "#000000",
      "linkTint": "#858585",
      "notes": [
        "+43% Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "value": 1.6,
      "label": "Eliminations",
      "type": "cost",
      "col": 2,
      "order": 5,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "gross_profit",
      "value": 4.5,
      "label": "Gross profit",
      "type": "profit",
      "col": 3,
      "order": 6,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "notes": [
        "17% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "value": 22.5,
      "label": "Cost of revenue",
      "type": "cost",
      "col": 3,
      "order": 7,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "valueText": "($22.5B)"
    },
    {
      "id": "operating_expenses",
      "value": 4.4,
      "label": "Operating expenses",
      "type": "cost",
      "col": 4,
      "order": 8,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "net_loss",
      "value": -0.5,
      "label": "Net loss",
      "type": "cost",
      "col": 5,
      "order": 9,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "other_nonoperating",
      "value": 0.5,
      "label": "Other",
      "type": "cost",
      "col": 6,
      "order": 10,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "selling_distribution",
      "value": 1.3,
      "label": "Selling & Distribution",
      "type": "cost",
      "col": 6,
      "order": 11,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "5% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "value": 0.7,
      "label": "R&D",
      "type": "cost",
      "col": 6,
      "order": 12,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "3% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "administrative",
      "value": 0.6,
      "label": "Administrative",
      "type": "cost",
      "col": 6,
      "order": 13,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585",
      "notes": [
        "2% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "other_operating",
      "value": 1.8,
      "label": "Other",
      "type": "cost",
      "col": 6,
      "order": 14,
      "color": "#cc0000",
      "labelColor": "#941100",
      "linkTint": "#e08585"
    },
    {
      "id": "operating_profit",
      "value": 0.019,
      "valueText": "$19M",
      "label": "Operating profit",
      "type": "profit",
      "notes": [
        "0% margin",
        "(4pp) Y/Y"
      ],
      "col": 4,
      "order": 7,
      "color": "#249e28",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    }
  ],
  "links": [
    {
      "source": "idg",
      "target": "gross_revenue",
      "value": 17.1,
      "sourceWidth": 264,
      "targetWidth": 264,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#bc8db4"
    },
    {
      "source": "isg",
      "target": "gross_revenue",
      "value": 8.5,
      "sourceWidth": 131,
      "targetWidth": 131,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#f2b4aa"
    },
    {
      "source": "ssg",
      "target": "gross_revenue",
      "value": 2.9,
      "sourceWidth": 45,
      "targetWidth": 44,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9ba5d3"
    },
    {
      "source": "gross_revenue",
      "target": "revenue",
      "value": 26.9,
      "sourceWidth": 415,
      "targetWidth": 415,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#858585"
    },
    {
      "source": "gross_revenue",
      "target": "eliminations",
      "value": 1.6,
      "sourceWidth": 24,
      "targetWidth": 24,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 4.5,
      "sourceWidth": 70,
      "targetWidth": 70,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 22.5,
      "sourceWidth": 345,
      "targetWidth": 347,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "value": 0.019,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99",
      "y0": 577.5,
      "y1": 518.5,
      "target": "operating_profit"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.4,
      "sourceWidth": 69,
      "targetWidth": 69,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "target": "other_nonoperating",
      "value": 0.019,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585",
      "y0": 518.5,
      "y1": 412.5,
      "source": "operating_profit"
    },
    {
      "source": "net_loss",
      "target": "other_nonoperating",
      "value": 0.5,
      "sourceWidth": 8,
      "targetWidth": 7,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "selling_distribution",
      "value": 1.3,
      "sourceWidth": 20,
      "targetWidth": 19,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.7,
      "sourceWidth": 11,
      "targetWidth": 10,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "administrative",
      "value": 0.6,
      "sourceWidth": 10,
      "targetWidth": 10,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 1.8,
      "sourceWidth": 28,
      "targetWidth": 29,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "nodes": {
      "idg": {
        "x": 396,
        "y": 491,
        "width": 72,
        "height": 264
      },
      "isg": {
        "x": 396,
        "y": 946,
        "width": 72,
        "height": 131
      },
      "ssg": {
        "x": 396,
        "y": 1217,
        "width": 72,
        "height": 45
      },
      "gross_revenue": {
        "x": 770,
        "y": 577,
        "width": 72,
        "height": 439
      },
      "revenue": {
        "x": 1144,
        "y": 649,
        "width": 72,
        "height": 415
      },
      "eliminations": {
        "x": 1144,
        "y": 1213,
        "width": 72,
        "height": 24
      },
      "gross_profit": {
        "x": 1518,
        "y": 577,
        "width": 72,
        "height": 70
      },
      "cost_of_revenue": {
        "x": 1518,
        "y": 804,
        "width": 72,
        "height": 347
      },
      "operating_expenses": {
        "x": 1891,
        "y": 657,
        "width": 72,
        "height": 69
      },
      "net_loss": {
        "x": 2141,
        "y": 504,
        "width": 72,
        "height": 8
      },
      "other_nonoperating": {
        "x": 2264,
        "y": 412,
        "width": 72,
        "height": 8
      },
      "selling_distribution": {
        "x": 2264,
        "y": 820,
        "width": 72,
        "height": 19
      },
      "rnd": {
        "x": 2264,
        "y": 1002,
        "width": 72,
        "height": 10
      },
      "administrative": {
        "x": 2264,
        "y": 1161,
        "width": 72,
        "height": 10
      },
      "other_operating": {
        "x": 2264,
        "y": 1327,
        "width": 72,
        "height": 29
      },
      "operating_profit": {
        "x": 1891,
        "y": 518,
        "width": 72,
        "height": 1
      }
    },
    "labels": {
      "idg": {
        "blocks": [
          {
            "x": 356,
            "top": 508,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "IDG",
                "size": 40,
                "weight": 800,
                "color": "#7a126b"
              },
              {
                "text": "Intelligent",
                "size": 40,
                "weight": 800,
                "color": "#7a126b"
              },
              {
                "text": "Devices",
                "size": 40,
                "weight": 800,
                "color": "#7a126b"
              },
              {
                "text": "Group",
                "size": 40,
                "weight": 800,
                "color": "#7a126b"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 430,
            "top": 397,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#7a126b"
              },
              {
                "text": "+27% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 360,
            "top": 714,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "7% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "isg": {
        "blocks": [
          {
            "x": 356,
            "top": 829,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "ISG",
                "size": 40,
                "weight": 800,
                "color": "#f26a52"
              },
              {
                "text": "Infrastructure",
                "size": 40,
                "weight": 800,
                "color": "#f26a52"
              },
              {
                "text": "Solutions",
                "size": 40,
                "weight": 800,
                "color": "#f26a52"
              },
              {
                "text": "Group",
                "size": 40,
                "weight": 800,
                "color": "#f26a52"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 430,
            "top": 851,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#f26a52"
              },
              {
                "text": "+98% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 360,
            "top": 1034,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "9% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ssg": {
        "blocks": [
          {
            "x": 356,
            "top": 1120,
            "anchor": "end",
            "lineGap": 13,
            "lines": [
              {
                "text": "SSG",
                "size": 40,
                "weight": 800,
                "color": "#3046ad"
              },
              {
                "text": "Solutions &",
                "size": 40,
                "weight": 800,
                "color": "#3046ad"
              },
              {
                "text": "Services",
                "size": 40,
                "weight": 800,
                "color": "#3046ad"
              },
              {
                "text": "Group",
                "size": 40,
                "weight": 800,
                "color": "#3046ad"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 430,
            "top": 1118,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#3046ad"
              },
              {
                "text": "+28% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 360,
            "top": 1324,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "24% operating margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_revenue": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1178,
            "top": 505,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+43% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1178,
            "top": 1254,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Eliminations",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1554,
            "top": 395,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "17% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28,
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
            "x": 1554,
            "top": 1170,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 34,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1927,
            "top": 747,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
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
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_loss": {
        "blocks": [
          {
            "x": 2177,
            "top": 532,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net loss",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_nonoperating": {
        "blocks": [
          {
            "x": 2468,
            "top": 383,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "selling_distribution": {
        "blocks": [
          {
            "x": 2473,
            "top": 770,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Selling &",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "Distribution",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "5% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
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
            "x": 2473,
            "top": 980,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "R&D",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "3% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "administrative": {
        "blocks": [
          {
            "x": 2473,
            "top": 1148,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Administrative",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "2% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_operating": {
        "blocks": [
          {
            "x": 2473,
            "top": 1310,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g><text x=\"680\" y=\"394\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"152\" font-weight=\"900\" textLength=\"535\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#e60012\" data-typography-role=\"brand\">Lenovo</text></g>",
  "i18n": {
    "zh": {
      "name": "联想 · 2027 财年第一季度",
      "meta": {
        "title": "联想 2027 财年第一季度利润表",
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 6 月",
        "titleSize": 112,
        "titleTextLength": 1900,
        "periodX": 2350
      },
      "nodes": {
        "idg": {
          "label": "IDG 智能设备集团",
          "notes": [
            "同比 +27%",
            "营业利润率 7%"
          ]
        },
        "isg": {
          "label": "ISG 基础设施方案集团",
          "notes": [
            "同比 +98%",
            "营业利润率 9%"
          ]
        },
        "ssg": {
          "label": "SSG 方案与服务集团",
          "notes": [
            "同比 +28%",
            "营业利润率 24%"
          ]
        },
        "gross_revenue": {
          "label": "总收入"
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +43%"
          ]
        },
        "eliminations": {
          "label": "抵销"
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 17%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_expenses": {
          "label": "运营费用"
        },
        "net_loss": {
          "label": "净亏损"
        },
        "other_nonoperating": {
          "label": "其他"
        },
        "selling_distribution": {
          "label": "销售与分销",
          "notes": [
            "占收入 5%",
            "同比 (0 个百分点)"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 3%",
            "同比 (0 个百分点)"
          ]
        },
        "administrative": {
          "label": "行政",
          "notes": [
            "占收入 2%",
            "同比 (1 个百分点)"
          ]
        },
        "other_operating": {
          "label": "其他"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 0%",
            "同比 (4 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "idg": {
            "blocks": [
              {
                "x": 356,
                "top": 508,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "IDG",
                    "size": 40,
                    "weight": 800,
                    "color": "#7a126b"
                  },
                  {
                    "text": "智能",
                    "size": 40,
                    "weight": 800,
                    "color": "#7a126b"
                  },
                  {
                    "text": "设备",
                    "size": 40,
                    "weight": 800,
                    "color": "#7a126b"
                  },
                  {
                    "text": "集团",
                    "size": 40,
                    "weight": 800,
                    "color": "#7a126b"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 430,
                "top": 397,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#7a126b"
                  },
                  {
                    "text": "同比 +27%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 360,
                "top": 714,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润率 7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "isg": {
            "blocks": [
              {
                "x": 356,
                "top": 829,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "ISG",
                    "size": 40,
                    "weight": 800,
                    "color": "#f26a52"
                  },
                  {
                    "text": "基础设施",
                    "size": 40,
                    "weight": 800,
                    "color": "#f26a52"
                  },
                  {
                    "text": "方案",
                    "size": 40,
                    "weight": 800,
                    "color": "#f26a52"
                  },
                  {
                    "text": "集团",
                    "size": 40,
                    "weight": 800,
                    "color": "#f26a52"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 430,
                "top": 851,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#f26a52"
                  },
                  {
                    "text": "同比 +98%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 360,
                "top": 1034,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润率 9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ssg": {
            "blocks": [
              {
                "x": 356,
                "top": 1120,
                "anchor": "end",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "SSG",
                    "size": 40,
                    "weight": 800,
                    "color": "#3046ad"
                  },
                  {
                    "text": "方案与",
                    "size": 40,
                    "weight": 800,
                    "color": "#3046ad"
                  },
                  {
                    "text": "服务",
                    "size": 40,
                    "weight": 800,
                    "color": "#3046ad"
                  },
                  {
                    "text": "集团",
                    "size": 40,
                    "weight": 800,
                    "color": "#3046ad"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 430,
                "top": 1118,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#3046ad"
                  },
                  {
                    "text": "同比 +28%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 360,
                "top": 1324,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润率 24%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_revenue": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1178,
                "top": 505,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +43%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1178,
                "top": 1254,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1554,
                "top": 395,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28,
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
                "x": 1554,
                "top": 1170,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 34,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1927,
                "top": 747,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
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
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_loss": {
            "blocks": [
              {
                "x": 2177,
                "top": 532,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净亏损",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_nonoperating": {
            "blocks": [
              {
                "x": 2468,
                "top": 383,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "selling_distribution": {
            "blocks": [
              {
                "x": 2473,
                "top": 770,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "分销",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 5%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
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
                "x": 2473,
                "top": 980,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "研发",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "administrative": {
            "blocks": [
              {
                "x": 2473,
                "top": 1148,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "行政",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_operating": {
            "blocks": [
              {
                "x": 2473,
                "top": 1310,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><text x=\"680\" y=\"394\" font-family=\"Arial Black,Arial,sans-serif\" font-size=\"152\" font-weight=\"900\" textLength=\"535\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#e60012\" data-typography-role=\"brand\">Lenovo</text></g>"
    }
  }
}); })();
