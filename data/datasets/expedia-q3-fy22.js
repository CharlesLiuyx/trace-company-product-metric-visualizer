/* Source-measured Q3 FY22. Lodging caption is grouped below its two brand icons, as in the Source. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
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
        "node": "#202843",
        "label": "#202843"
      },
      "hub": {
        "node": "#202843",
        "label": "#202843"
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
      "source": "#9397a3",
      "hub": "#9397a3",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 38,
      "note": 29,
      "lineGap": 8
    }
  },
  "key": "expedia-q3-fy22",
  "name": "Expedia · Q3 FY22",
  "company": "Expedia",
  "meta": {
    "company": "Expedia",
    "title": "Expedia Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "Ending Sep. 2022",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/expedia-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2200,
    "hidePeriodStamp": true,
    "logoWidth": 649,
    "logoHeight": 127,
    "logoY": 286,
    "logoViewBox": "0 0 649 127",
    "logoSvg": "<circle cx=\"60\" cy=\"61\" r=\"61\" fill=\"#202843\"/><path d=\"M37 24 L78 45 L110 30 L114 33 L84 54 L82 93 L80 101 L78 101 L74 70 L70 62 L31 83 L10 93 L7 92 L7 90 L65 53 L58 44 L37 28 L36 25 Z\" fill=\"#ffc94c\"/><text x=\"153\" y=\"102\" font-family=\"Montserrat,Arial,sans-serif\" font-size=\"114\" font-weight=\"600\" textLength=\"409\" lengthAdjust=\"spacingAndGlyphs\" fill=\"#202843\">Expedia</text>",
    "logoX": 594
  },
  "layout": {
    "nodes": {
      "lodging": {
        "x": 417,
        "y": 532,
        "width": 72,
        "height": 231
      },
      "air": {
        "x": 417,
        "y": 887,
        "width": 72,
        "height": 7
      },
      "advertising": {
        "x": 417,
        "y": 1020,
        "width": 72,
        "height": 17
      },
      "other_revenue": {
        "x": 417,
        "y": 1165,
        "width": 72,
        "height": 32
      },
      "revenue": {
        "x": 885,
        "y": 583,
        "width": 71,
        "height": 291
      },
      "gross_profit": {
        "x": 1351,
        "y": 534,
        "width": 72,
        "height": 254
      },
      "cost_of_revenue": {
        "x": 1353,
        "y": 907,
        "width": 72,
        "height": 35
      },
      "operating_profit": {
        "x": 1804,
        "y": 474,
        "width": 71,
        "height": 59
      },
      "operating_expenses": {
        "x": 1802,
        "y": 653,
        "width": 71,
        "height": 193
      },
      "net_profit": {
        "x": 2286,
        "y": 367,
        "width": 72,
        "height": 37
      },
      "tax": {
        "x": 2286,
        "y": 588,
        "width": 72,
        "height": 16
      },
      "other_expense": {
        "x": 2286,
        "y": 675,
        "width": 72,
        "height": 3
      },
      "sm": {
        "x": 2286,
        "y": 741,
        "width": 72,
        "height": 133
      },
      "technology": {
        "x": 2286,
        "y": 979,
        "width": 72,
        "height": 23
      },
      "ga": {
        "x": 2286,
        "y": 1090,
        "width": 72,
        "height": 15
      },
      "amortization": {
        "x": 2286,
        "y": 1213,
        "width": 72,
        "height": 15
      },
      "impairment": {
        "x": 2286,
        "y": 1352,
        "width": 72,
        "height": 3
      }
    },
    "labels": {
      "lodging": {
        "blocks": [
          {
            "x": 453,
            "top": 434,
            "anchor": "middle",
            "lineGap": 15,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+25% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 301,
            "top": 654,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Lodging",
                "size": 40,
                "weight": 800
              }
            ],
            "semanticRole": "grouped-side-label"
          }
        ]
      },
      "air": {
        "blocks": [
          {
            "x": 453,
            "top": 790,
            "anchor": "middle",
            "lineGap": 15,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+61% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 316,
            "top": 864,
            "anchor": "start",
            "lineGap": 11,
            "lines": [
              {
                "text": "Air",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "advertising": {
        "blocks": [
          {
            "x": 453,
            "top": 920,
            "anchor": "middle",
            "lineGap": 15,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+10% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 160,
            "top": 1000,
            "anchor": "start",
            "lineGap": 11,
            "lines": [
              {
                "text": "Advertising",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 453,
            "top": 1067,
            "anchor": "middle",
            "lineGap": 15,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+4% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 262,
            "top": 1156,
            "anchor": "start",
            "lineGap": 11,
            "lines": [
              {
                "text": "Other",
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
            "x": 922,
            "top": 432,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "+22% Y/Y",
                "size": 27,
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
            "x": 1387,
            "top": 341,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "87% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1838,
            "top": 282,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              },
              {
                "text": "21% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2488,
            "top": 309,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Net profit",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              },
              {
                "text": "13% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "Unchanged",
                "size": 27,
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
            "x": 2481,
            "top": 541,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2484,
            "top": 637,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 2488,
            "top": 967,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Technology",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2488,
            "top": 1082,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "G&A",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2488,
            "top": 1199,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Amortization",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "impairment": {
        "blocks": [
          {
            "x": 2488,
            "top": 1317,
            "anchor": "middle",
            "lineGap": 12,
            "lines": [
              {
                "text": "Impairment",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1387,
            "top": 956,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Cost of",
                "size": 38,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1833,
            "top": 861,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Operating",
                "size": 38,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 38,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2488,
            "top": 753,
            "anchor": "middle",
            "lineGap": 11,
            "lines": [
              {
                "text": "Sales &",
                "size": 32,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 32,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "lodging",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Lodging",
      "value": 2.9,
      "valueText": "$2.9B",
      "notes": [
        "+25% Y/Y"
      ]
    },
    {
      "id": "air",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Air",
      "value": 0.1,
      "valueText": "$0.1B",
      "notes": [
        "+61% Y/Y"
      ]
    },
    {
      "id": "advertising",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Advertising",
      "value": 0.2,
      "valueText": "$0.2B",
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Other",
      "value": 0.4,
      "valueText": "$0.4B",
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 4,
      "type": "hub",
      "label": "Revenue",
      "value": 3.6,
      "valueText": "$3.6B",
      "notes": [
        "+22% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 2,
      "order": 5,
      "type": "profit",
      "label": "Gross profit",
      "value": 3.2,
      "valueText": "$3.2B",
      "notes": [
        "87% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 2,
      "order": 6,
      "type": "cost",
      "label": "Cost of revenue",
      "value": 0.5,
      "valueText": "($0.5B)",
      "notes": []
    },
    {
      "id": "operating_profit",
      "col": 3,
      "order": 7,
      "type": "profit",
      "label": "Operating profit",
      "value": 0.7,
      "valueText": "$0.7B",
      "notes": [
        "21% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": "Operating expenses",
      "value": 2.4,
      "valueText": "($2.4B)",
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 4,
      "order": 9,
      "type": "profit",
      "label": "Net profit",
      "value": 0.5,
      "valueText": "$0.5B",
      "notes": [
        "13% margin",
        "Unchanged"
      ]
    },
    {
      "id": "tax",
      "col": 4,
      "order": 10,
      "type": "cost",
      "label": "Tax",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "other_expense",
      "col": 4,
      "order": 11,
      "type": "cost",
      "label": "Other",
      "value": 0.1,
      "valueText": "($0.1B)",
      "notes": []
    },
    {
      "id": "sm",
      "col": 4,
      "order": 12,
      "type": "cost",
      "label": "Sales & marketing",
      "value": 1.7,
      "valueText": "($1.7B)",
      "notes": []
    },
    {
      "id": "technology",
      "col": 4,
      "order": 13,
      "type": "cost",
      "label": "Technology",
      "value": 0.3,
      "valueText": "($0.3B)",
      "notes": []
    },
    {
      "id": "ga",
      "col": 4,
      "order": 14,
      "type": "cost",
      "label": "G&A",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "amortization",
      "col": 4,
      "order": 15,
      "type": "cost",
      "label": "Amortization",
      "value": 0.2,
      "valueText": "($0.2B)",
      "notes": []
    },
    {
      "id": "impairment",
      "col": 4,
      "order": 16,
      "type": "cost",
      "label": "Impairment",
      "value": 0.1,
      "valueText": "($0.1B)",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "lodging",
      "target": "revenue",
      "value": 2.9,
      "sourceWidth": 231,
      "targetWidth": 232,
      "y0": 647.5,
      "y1": 699.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9397a3"
    },
    {
      "source": "air",
      "target": "revenue",
      "value": 0.1,
      "sourceWidth": 7,
      "targetWidth": 8,
      "y0": 890.5,
      "y1": 819.0,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9397a3"
    },
    {
      "source": "advertising",
      "target": "revenue",
      "value": 0.2,
      "sourceWidth": 17,
      "targetWidth": 18,
      "y0": 1028.5,
      "y1": 832.0,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9397a3"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 32,
      "targetWidth": 33,
      "y0": 1181.0,
      "y1": 857.5,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#9397a3"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3.2,
      "sourceWidth": 256,
      "targetWidth": 254,
      "y0": 711.0,
      "y1": 661.0,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 0.5,
      "sourceWidth": 35,
      "targetWidth": 35,
      "y0": 856.5,
      "y1": 924.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.7,
      "sourceWidth": 60,
      "targetWidth": 59,
      "y0": 564.0,
      "y1": 503.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 2.4,
      "sourceWidth": 194,
      "targetWidth": 193,
      "y0": 691.0,
      "y1": 749.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.5,
      "sourceWidth": 38,
      "targetWidth": 37,
      "y0": 493.0,
      "y1": 385.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 17,
      "targetWidth": 16,
      "y0": 520.5,
      "y1": 596.0,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 0.1,
      "sourceWidth": 4,
      "targetWidth": 3,
      "y0": 531.0,
      "y1": 676.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 1.7,
      "sourceWidth": 134,
      "targetWidth": 133,
      "y0": 720.0,
      "y1": 807.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology",
      "value": 0.3,
      "sourceWidth": 25,
      "targetWidth": 23,
      "y0": 799.5,
      "y1": 990.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 0.2,
      "sourceWidth": 14,
      "targetWidth": 15,
      "y0": 819.0,
      "y1": 1097.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.2,
      "sourceWidth": 15,
      "targetWidth": 15,
      "y0": 833.5,
      "y1": 1220.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "impairment",
      "value": 0.1,
      "sourceWidth": 5,
      "targetWidth": 3,
      "y0": 843.5,
      "y1": 1353.5,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "operatingMetrics": [
    {
      "id": "gross-bookings",
      "value": "24.0",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$24.0B"
    },
    {
      "id": "nights-booked",
      "value": "81600000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "81.6M"
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\">\n    <g data-typography-role=\"brand\" transform=\"translate(221 559)\"><rect x=\"8\" y=\"11\" width=\"68\" height=\"68\" rx=\"15\" fill=\"#ffc94c\"/><circle cx=\"42\" cy=\"45\" r=\"26\" fill=\"#202843\"/><g transform=\"translate(42 45) scale(.4262) translate(-60 -61)\"><path d=\"M37 24 L78 45 L110 30 L114 33 L84 54 L82 93 L80 101 L78 101 L74 70 L70 62 L31 83 L10 93 L7 92 L7 90 L65 53 L58 44 L37 28 L36 25 Z\" fill=\"#ffc94c\"/></g></g>\n    <g data-typography-role=\"brand\" transform=\"translate(300 559)\"><rect x=\"6\" y=\"8\" width=\"69\" height=\"69\" rx=\"15\" fill=\"#0e214b\"/><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M20 21 C20 30 24 46 31 64\" stroke=\"#71bef0\" stroke-width=\"2.4\"/><path d=\"M25 21 C26 32 30 48 34 64\" stroke=\"#318dec\" stroke-width=\"2.4\"/><path d=\"M30 21 C31 32 34 48 37 61\" stroke=\"#2f79d1\" stroke-width=\"2.3\"/><path d=\"M34 21 C34 31 37 45 39 56\" stroke=\"#e77036\" stroke-width=\"2.3\"/><path d=\"M38 21 C38 29 40 42 42 51\" stroke=\"#82b183\" stroke-width=\"2.4\"/><path d=\"M50 21 C51 28 48 40 43 52\" stroke=\"#82b183\" stroke-width=\"2.2\"/><path d=\"M55 20 C56 29 51 42 45 55\" stroke=\"#e77036\" stroke-width=\"2.2\"/><path d=\"M60 19 C61 30 55 45 46 58\" stroke=\"#318dec\" stroke-width=\"2.2\"/></g></g>\n    <g data-typography-role=\"brand\" transform=\"translate(222 850)\"><path d=\"M24 8 L26 8 L29 11 L26 14 L27 15 L30 15 L35 10 L37 11 L38 14 L35 17 L41 19 L45 19 L58 8 L67 9 L67 16 L65 20 L55 31 L58 41 L61 38 L65 40 L64 43 L59 46 L60 48 L62 49 L65 47 L67 49 L67 52 L62 55 L65 62 L62 67 L53 57 L50 51 L42 44 L31 52 L32 65 L30 67 L23 55 L21 55 L12 63 L20 52 L8 45 L10 43 L23 44 L31 33 L23 24 L17 21 L8 12 L13 10 L21 13 L24 9 Z\" fill=\"#8b9096\"/><path d=\"M10 11 L14 11 L25 16 L30 16 L35 19 L44 20 L31 32 L27 25 L25 25 L26 24 L24 22 L22 23 L22 21 L20 22 L21 21 L19 19 L10 14 L11 12 Z\" fill=\"#2fa3dc\"/><path d=\"M54 32 L57 44 L59 46 L58 49 L60 49 L59 55 L62 63 L64 64 L62 65 L59 60 L57 60 L57 57 L55 55 L54 57 L50 49 L44 43 L49 37 L51 39 L53 38 L53 36 L51 35 L53 33 Z\" fill=\"#2fa3dc\"/><path d=\"M10 44 L23 45 L21 52 L9 45 Z\" fill=\"#2fa3dc\"/><path d=\"M29 52 L31 60 L30 66 L24 55 L28 53 Z\" fill=\"#2fa3dc\"/><path d=\"M57 13 L61 15 L61 19 L50 30 L36 38 L28 45 L28 42 L32 36 L53 15 L56 14 Z\" fill=\"#e4e7e9\"/><path d=\"M63 17 L64 19 L63 21 L40 45 L30 51 L29 50 L24 52 L23 54 L28 49 L31 49 L36 46 L55 29 L64 19 L63 18 Z\" fill=\"#6e747a\"/></g>\n    <g data-typography-role=\"brand\" transform=\"translate(76 987)\"><rect x=\"7\" y=\"8\" width=\"68\" height=\"68\" rx=\"15\" fill=\"#fefefe\"/><path d=\"M17 34 L18 34 L19 36 L21 36 L18 38 L18 40 L21 42 L20 43 L17 42 L17 38 L15 36 L17 35 Z M23 36 L25 37 L27 36 L24 38 L24 42 L23 42 L23 37 Z M29 36 L30 36 L30 42 L29 42 L29 37 Z\" fill=\"#017eab\"/><path d=\"M33 36 L34 36 L35 40 L36 41 L38 39 L39 36 L40 36 L37 42 L35 42 L34 38 L33 37 Z M56 36 L57 37 L57 42 L56 40 Z M42 36 L47 36 L48 42 L45 42 L44 43 L41 42 L42 39 L46 39 L47 38 L45 36 L43 36 Z\" fill=\"#f1920c\"/><path d=\"M51 36 L54 36 L55 37 L57 36 L57 44 L56 46 L54 47 L50 46 L50 45 L51 46 L54 46 L56 44 L55 42 L53 43 L50 42 L50 37 Z M60 36 L64 36 L65 37 L66 39 L65 42 L61 43 L59 41 L59 37 Z\" fill=\"#c84a32\"/></g><g><rect x=\"100\" y=\"1241\" width=\"305\" height=\"150\" rx=\"30\" fill=\"#202843\"/><text x=\"252.5\" y=\"1292\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"700\" fill=\"#fff\">Gross bookings</text><text data-operating-metric=\"gross-bookings\" x=\"252.5\" y=\"1331\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">$24.0B</text><text x=\"252.5\" y=\"1364\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">+28% Y/Y</text></g><g><rect x=\"416\" y=\"1241\" width=\"330\" height=\"150\" rx=\"30\" fill=\"#202843\"/><text x=\"581.0\" y=\"1292\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"700\" fill=\"#fff\">Nights booked</text><text data-operating-metric=\"nights-booked\" x=\"581.0\" y=\"1331\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">81.6M</text><text x=\"581.0\" y=\"1364\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">+25% Y/Y</text></g></g>",
  "i18n": {
    "zh": {
      "name": "Expedia · 2022 财年第三季度",
      "meta": {
        "title": "Expedia 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月",
        "titleTextLength": 2200,
        "hidePeriodStamp": true
      },
      "nodes": {
        "lodging": {
          "label": "住宿",
          "notes": [
            "同比 +25%"
          ]
        },
        "air": {
          "label": "机票",
          "notes": [
            "同比 +61%"
          ]
        },
        "advertising": {
          "label": "广告",
          "notes": [
            "同比 +10%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +4%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +22%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 87%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 21%",
            "同比 +3 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 13%",
            "保持不变"
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
        "sm": {
          "label": "销售与市场",
          "notes": []
        },
        "technology": {
          "label": "技术",
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": []
        },
        "amortization": {
          "label": "摊销",
          "notes": []
        },
        "impairment": {
          "label": "减值",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "lodging": {
            "blocks": [
              {
                "x": 453,
                "top": 434,
                "anchor": "middle",
                "lineGap": 15,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +25%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 301,
                "top": 654,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "住宿",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "semanticRole": "grouped-side-label"
              }
            ]
          },
          "air": {
            "blocks": [
              {
                "x": 453,
                "top": 790,
                "anchor": "middle",
                "lineGap": 15,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +61%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 316,
                "top": 864,
                "anchor": "start",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "机票",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "advertising": {
            "blocks": [
              {
                "x": 453,
                "top": 920,
                "anchor": "middle",
                "lineGap": 15,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +10%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 160,
                "top": 1000,
                "anchor": "start",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "广告",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 453,
                "top": 1067,
                "anchor": "middle",
                "lineGap": 15,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 262,
                "top": 1156,
                "anchor": "start",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "其他",
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
                "x": 922,
                "top": 432,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "同比 +22%",
                    "size": 27,
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
                "x": 1387,
                "top": 341,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 87%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1838,
                "top": 282,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  },
                  {
                    "text": "利润率 21%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2488,
                "top": 309,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  },
                  {
                    "text": "利润率 13%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "保持不变",
                    "size": 27,
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
                "x": 2481,
                "top": 541,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2484,
                "top": 637,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 2488,
                "top": 967,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "技术",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2488,
                "top": 1082,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2488,
                "top": 1199,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "impairment": {
            "blocks": [
              {
                "x": 2488,
                "top": 1317,
                "anchor": "middle",
                "lineGap": 12,
                "lines": [
                  {
                    "text": "减值",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1387,
                "top": 956,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "收入",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1833,
                "top": 861,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "运营",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 38,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2488,
                "top": 753,
                "anchor": "middle",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "市场",
                    "size": 32,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\">\n    <g data-typography-role=\"brand\" transform=\"translate(221 559)\"><rect x=\"8\" y=\"11\" width=\"68\" height=\"68\" rx=\"15\" fill=\"#ffc94c\"/><circle cx=\"42\" cy=\"45\" r=\"26\" fill=\"#202843\"/><g transform=\"translate(42 45) scale(.4262) translate(-60 -61)\"><path d=\"M37 24 L78 45 L110 30 L114 33 L84 54 L82 93 L80 101 L78 101 L74 70 L70 62 L31 83 L10 93 L7 92 L7 90 L65 53 L58 44 L37 28 L36 25 Z\" fill=\"#ffc94c\"/></g></g>\n    <g data-typography-role=\"brand\" transform=\"translate(300 559)\"><rect x=\"6\" y=\"8\" width=\"69\" height=\"69\" rx=\"15\" fill=\"#0e214b\"/><g fill=\"none\" stroke-linecap=\"round\"><path d=\"M20 21 C20 30 24 46 31 64\" stroke=\"#71bef0\" stroke-width=\"2.4\"/><path d=\"M25 21 C26 32 30 48 34 64\" stroke=\"#318dec\" stroke-width=\"2.4\"/><path d=\"M30 21 C31 32 34 48 37 61\" stroke=\"#2f79d1\" stroke-width=\"2.3\"/><path d=\"M34 21 C34 31 37 45 39 56\" stroke=\"#e77036\" stroke-width=\"2.3\"/><path d=\"M38 21 C38 29 40 42 42 51\" stroke=\"#82b183\" stroke-width=\"2.4\"/><path d=\"M50 21 C51 28 48 40 43 52\" stroke=\"#82b183\" stroke-width=\"2.2\"/><path d=\"M55 20 C56 29 51 42 45 55\" stroke=\"#e77036\" stroke-width=\"2.2\"/><path d=\"M60 19 C61 30 55 45 46 58\" stroke=\"#318dec\" stroke-width=\"2.2\"/></g></g>\n    <g data-typography-role=\"brand\" transform=\"translate(222 850)\"><path d=\"M24 8 L26 8 L29 11 L26 14 L27 15 L30 15 L35 10 L37 11 L38 14 L35 17 L41 19 L45 19 L58 8 L67 9 L67 16 L65 20 L55 31 L58 41 L61 38 L65 40 L64 43 L59 46 L60 48 L62 49 L65 47 L67 49 L67 52 L62 55 L65 62 L62 67 L53 57 L50 51 L42 44 L31 52 L32 65 L30 67 L23 55 L21 55 L12 63 L20 52 L8 45 L10 43 L23 44 L31 33 L23 24 L17 21 L8 12 L13 10 L21 13 L24 9 Z\" fill=\"#8b9096\"/><path d=\"M10 11 L14 11 L25 16 L30 16 L35 19 L44 20 L31 32 L27 25 L25 25 L26 24 L24 22 L22 23 L22 21 L20 22 L21 21 L19 19 L10 14 L11 12 Z\" fill=\"#2fa3dc\"/><path d=\"M54 32 L57 44 L59 46 L58 49 L60 49 L59 55 L62 63 L64 64 L62 65 L59 60 L57 60 L57 57 L55 55 L54 57 L50 49 L44 43 L49 37 L51 39 L53 38 L53 36 L51 35 L53 33 Z\" fill=\"#2fa3dc\"/><path d=\"M10 44 L23 45 L21 52 L9 45 Z\" fill=\"#2fa3dc\"/><path d=\"M29 52 L31 60 L30 66 L24 55 L28 53 Z\" fill=\"#2fa3dc\"/><path d=\"M57 13 L61 15 L61 19 L50 30 L36 38 L28 45 L28 42 L32 36 L53 15 L56 14 Z\" fill=\"#e4e7e9\"/><path d=\"M63 17 L64 19 L63 21 L40 45 L30 51 L29 50 L24 52 L23 54 L28 49 L31 49 L36 46 L55 29 L64 19 L63 18 Z\" fill=\"#6e747a\"/></g>\n    <g data-typography-role=\"brand\" transform=\"translate(76 987)\"><rect x=\"7\" y=\"8\" width=\"68\" height=\"68\" rx=\"15\" fill=\"#fefefe\"/><path d=\"M17 34 L18 34 L19 36 L21 36 L18 38 L18 40 L21 42 L20 43 L17 42 L17 38 L15 36 L17 35 Z M23 36 L25 37 L27 36 L24 38 L24 42 L23 42 L23 37 Z M29 36 L30 36 L30 42 L29 42 L29 37 Z\" fill=\"#017eab\"/><path d=\"M33 36 L34 36 L35 40 L36 41 L38 39 L39 36 L40 36 L37 42 L35 42 L34 38 L33 37 Z M56 36 L57 37 L57 42 L56 40 Z M42 36 L47 36 L48 42 L45 42 L44 43 L41 42 L42 39 L46 39 L47 38 L45 36 L43 36 Z\" fill=\"#f1920c\"/><path d=\"M51 36 L54 36 L55 37 L57 36 L57 44 L56 46 L54 47 L50 46 L50 45 L51 46 L54 46 L56 44 L55 42 L53 43 L50 42 L50 37 Z M60 36 L64 36 L65 37 L66 39 L65 42 L61 43 L59 41 L59 37 Z\" fill=\"#c84a32\"/></g><g><rect x=\"100\" y=\"1241\" width=\"305\" height=\"150\" rx=\"30\" fill=\"#202843\"/><text x=\"252.5\" y=\"1292\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"700\" fill=\"#fff\">总预订额</text><text data-operating-metric=\"gross-bookings\" x=\"252.5\" y=\"1331\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">$24.0B</text><text x=\"252.5\" y=\"1364\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">同比 +28%</text></g><g><rect x=\"416\" y=\"1241\" width=\"330\" height=\"150\" rx=\"30\" fill=\"#202843\"/><text x=\"581.0\" y=\"1292\" text-anchor=\"middle\" font-size=\"27\" font-weight=\"700\" fill=\"#fff\">预订间夜数</text><text data-operating-metric=\"nights-booked\" x=\"581.0\" y=\"1331\" text-anchor=\"middle\" font-size=\"27\" fill=\"#fff\">81.6M</text><text x=\"581.0\" y=\"1364\" text-anchor=\"middle\" font-size=\"23\" fill=\"#fff\">同比 +25%</text></g></g>"
    }
  }
});
