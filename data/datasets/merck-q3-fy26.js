window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "merck-q3-fy26",
  "name": "Merck · Q3 FY26",
  "company": "Merck",
  "meta": {
    "company": "Merck",
    "title": "Merck Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "periodNote": "Q3 FY26",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/merck-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#007a73",
        "label": "#007a73"
      },
      "hub": {
        "node": "#007a73",
        "label": "#007a73"
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
      "source": "#85bcb8",
      "hub": "#85bcb8",
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
  "rasterAnnotations": [
    {
      "key": "merck-company-wordmark",
      "href": "data/assets/raster-annotations/merck/company-wordmark.png",
      "x": 773,
      "y": 237,
      "width": 664,
      "height": 194
    },
    {
      "key": "merck-keytruda",
      "href": "data/assets/raster-annotations/merck/keytruda.png",
      "x": 9,
      "y": 500,
      "width": 202,
      "height": 65
    },
    {
      "key": "merck-bridion",
      "href": "data/assets/raster-annotations/merck/bridion.png",
      "x": 20,
      "y": 680,
      "width": 163,
      "height": 71
    },
    {
      "key": "merck-gardasil-9",
      "href": "data/assets/raster-annotations/merck/gardasil-9.png",
      "x": 20,
      "y": 752,
      "width": 181,
      "height": 65
    },
    {
      "key": "merck-januvia",
      "href": "data/assets/raster-annotations/merck/januvia.png",
      "x": 29,
      "y": 895,
      "width": 150,
      "height": 95
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "oncology": {
        "x": 457,
        "y": 464,
        "width": 72,
        "height": 145
      },
      "vaccines": {
        "x": 457,
        "y": 744,
        "width": 72,
        "height": 62
      },
      "cardiology": {
        "x": 457,
        "y": 936,
        "width": 72,
        "height": 21
      },
      "other_pharma": {
        "x": 457,
        "y": 1096,
        "width": 72,
        "height": 14
      },
      "pharma": {
        "x": 831,
        "y": 596,
        "width": 72,
        "height": 243
      },
      "animal_health": {
        "x": 831,
        "y": 1057,
        "width": 72,
        "height": 25
      },
      "other_revenue": {
        "x": 831,
        "y": 1300,
        "width": 72,
        "height": 2
      },
      "revenue": {
        "x": 1202,
        "y": 687,
        "width": 72,
        "height": 269
      },
      "gross_profit": {
        "x": 1578,
        "y": 594,
        "width": 72,
        "height": 197
      },
      "cost_of_sales": {
        "x": 1578,
        "y": 1020,
        "width": 72,
        "height": 73
      },
      "pretax_profit": {
        "x": 1952,
        "y": 510,
        "width": 72,
        "height": 83
      },
      "operating_expenses": {
        "x": 1952,
        "y": 767,
        "width": 72,
        "height": 114
      },
      "net_profit": {
        "x": 2325,
        "y": 383,
        "width": 72,
        "height": 76
      },
      "tax": {
        "x": 2325,
        "y": 673,
        "width": 72,
        "height": 8
      },
      "rnd": {
        "x": 2325,
        "y": 834,
        "width": 72,
        "height": 68
      },
      "sga": {
        "x": 2325,
        "y": 1031,
        "width": 72,
        "height": 44
      },
      "other_opex": {
        "x": 2325,
        "y": 1235,
        "width": 72,
        "height": 3
      }
    },
    "labels": {
      "oncology": {
        "blocks": [
          {
            "x": 494,
            "top": 377,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "+7% Y/Y",
                "size": 26,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 416,
            "top": 512,
            "anchor": "end",
            "lines": [
              {
                "text": "Oncology",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "vaccines": {
        "blocks": [
          {
            "x": 494,
            "top": 657,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 26,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 416,
            "top": 750.5,
            "anchor": "end",
            "lines": [
              {
                "text": "Vaccines",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "cardiology": {
        "blocks": [
          {
            "x": 494,
            "top": 849,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "+23% Y/Y",
                "size": 26,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 431,
            "top": 922,
            "anchor": "end",
            "lines": [
              {
                "text": "Cardiology",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_pharma": {
        "blocks": [
          {
            "x": 494,
            "top": 1009,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 26,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 382,
            "top": 1078.5,
            "anchor": "end",
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
      "pharma": {
        "blocks": [
          {
            "x": 862,
            "top": 449,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Pharma",
                "size": 40,
                "weight": 800,
                "color": "#007a73"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#007a73"
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "animal_health": {
        "blocks": [
          {
            "x": 862,
            "top": 907,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Animal Health",
                "size": 40,
                "weight": 800,
                "color": "#007a73"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#007a73"
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 867,
            "top": 1152,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800,
                "color": "#007a73"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#007a73"
              },
              {
                "text": "+182% Y/Y",
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
            "x": 1235,
            "top": 539,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#007a73"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#007a73"
              },
              {
                "text": "+5% Y/Y",
                "size": 28,
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
            "x": 1612,
            "top": 407,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
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
                "text": "73% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1612,
            "top": 1110,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of sales",
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
      "pretax_profit": {
        "blocks": [
          {
            "x": 1992,
            "top": 325,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Pretax profit",
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
                "text": "31% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(8pp) Y/Y",
                "size": 28,
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
            "x": 1992,
            "top": 898,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
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
      "net_profit": {
        "blocks": [
          {
            "x": 2516,
            "top": 364,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
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
                "text": "28% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
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
            "x": 2520,
            "top": 644,
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
      "rnd": {
        "blocks": [
          {
            "x": 2520,
            "top": 837,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "25% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2520,
            "top": 1020,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "SG&A",
                "size": 31,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "16% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2520,
            "top": 1203,
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
              },
              {
                "text": "1% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "nodes": [
    {
      "id": "oncology",
      "label": "Oncology",
      "value": 9.7,
      "valueText": "$9.7B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "vaccines",
      "label": "Vaccines",
      "value": 4.1,
      "valueText": "$4.1B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(4%) Y/Y"
      ]
    },
    {
      "id": "cardiology",
      "label": "Cardiology",
      "value": 1.5,
      "valueText": "$1.5B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+23% Y/Y"
      ]
    },
    {
      "id": "other_pharma",
      "label": "Other",
      "value": 1,
      "valueText": "$1.0B",
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "(4%) Y/Y"
      ]
    },
    {
      "id": "pharma",
      "label": "Pharma",
      "value": 16.3,
      "valueText": "$16.3B",
      "type": "hub",
      "col": 1,
      "order": 4,
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "animal_health",
      "label": "Animal Health",
      "value": 1.7,
      "valueText": "$1.7B",
      "type": "source",
      "col": 1,
      "order": 5,
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 0.1,
      "valueText": "$0.1B",
      "type": "source",
      "col": 1,
      "order": 6,
      "notes": [
        "+182% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 18.1,
      "valueText": "$18.1B",
      "type": "hub",
      "col": 2,
      "order": 7,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 13.2,
      "valueText": "$13.2B",
      "type": "profit",
      "col": 3,
      "order": 8,
      "notes": [
        "73% margin",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 4.9,
      "valueText": "($4.9B)",
      "type": "cost",
      "col": 3,
      "order": 9,
      "notes": []
    },
    {
      "id": "pretax_profit",
      "label": "Pretax profit",
      "value": 5.6,
      "valueText": "$5.6B",
      "type": "profit",
      "col": 4,
      "order": 10,
      "notes": [
        "31% margin",
        "(8pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 7.6,
      "valueText": "($7.6B)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 5.1,
      "valueText": "$5.1B",
      "type": "profit",
      "col": 5,
      "order": 12,
      "notes": [
        "28% margin",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.5,
      "valueText": "($0.5B)",
      "type": "cost",
      "col": 5,
      "order": 13,
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 4.5,
      "valueText": "($4.5B)",
      "type": "cost",
      "col": 5,
      "order": 14,
      "notes": [
        "25% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 2.9,
      "valueText": "($2.9B)",
      "type": "cost",
      "col": 5,
      "order": 15,
      "notes": [
        "16% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "other_opex",
      "label": "Other",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 5,
      "order": 16,
      "notes": [
        "1% of revenue"
      ]
    }
  ],
  "links": [
    {
      "source": "oncology",
      "target": "pharma",
      "value": 9.7,
      "sourceWidth": 145,
      "targetWidth": 145,
      "y0": 536.5,
      "y1": 668.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85bcb8"
    },
    {
      "source": "vaccines",
      "target": "pharma",
      "value": 4.1,
      "sourceWidth": 62,
      "targetWidth": 62,
      "y0": 775,
      "y1": 772,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85bcb8"
    },
    {
      "source": "cardiology",
      "target": "pharma",
      "value": 1.5,
      "sourceWidth": 21,
      "targetWidth": 21,
      "y0": 946.5,
      "y1": 813.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85bcb8"
    },
    {
      "source": "other_pharma",
      "target": "pharma",
      "value": 1,
      "sourceWidth": 14,
      "targetWidth": 15,
      "y0": 1103,
      "y1": 831.5,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85bcb8"
    },
    {
      "source": "pharma",
      "target": "revenue",
      "value": 16.3,
      "sourceWidth": 243,
      "targetWidth": 243,
      "y0": 717.5,
      "y1": 808.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85bcb8"
    },
    {
      "source": "animal_health",
      "target": "revenue",
      "value": 1.7,
      "sourceWidth": 25,
      "targetWidth": 24,
      "y0": 1069.5,
      "y1": 942,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85bcb8"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 1301,
      "y1": 955,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85bcb8"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 13.2,
      "sourceWidth": 197,
      "targetWidth": 197,
      "y0": 785.5,
      "y1": 692.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 4.9,
      "sourceWidth": 72,
      "targetWidth": 73,
      "y0": 920,
      "y1": 1056.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "pretax_profit",
      "value": 5.6,
      "sourceWidth": 83,
      "targetWidth": 83,
      "y0": 635.5,
      "y1": 551.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 7.6,
      "sourceWidth": 114,
      "targetWidth": 114,
      "y0": 734,
      "y1": 824,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "pretax_profit",
      "target": "net_profit",
      "value": 5.1,
      "sourceWidth": 76,
      "targetWidth": 76,
      "y0": 548,
      "y1": 421,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "pretax_profit",
      "target": "tax",
      "value": 0.5,
      "sourceWidth": 7,
      "targetWidth": 8,
      "y0": 589.5,
      "y1": 677,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 4.5,
      "sourceWidth": 68,
      "targetWidth": 68,
      "y0": 801,
      "y1": 868,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.9,
      "sourceWidth": 43,
      "targetWidth": 44,
      "y0": 856.5,
      "y1": 1053,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.2,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 879.5,
      "y1": 1236.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "preservedAnnotationText": [
      "MERCK",
      "Keytruda",
      "Gardasil",
      "Bridion",
      "Januvia"
    ],
    "zh": {
      "name": "默沙东 · 2026 财年第三季度",
      "meta": {
        "title": "默沙东 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "periodNote": "2026 财年第三季度"
      },
      "nodes": {
        "oncology": {
          "label": "肿瘤",
          "notes": [
            "同比 +7%"
          ]
        },
        "vaccines": {
          "label": "疫苗",
          "notes": [
            "同比下降 4%"
          ]
        },
        "cardiology": {
          "label": "心血管",
          "notes": [
            "同比 +23%"
          ]
        },
        "other_pharma": {
          "label": "其他",
          "notes": [
            "同比下降 4%"
          ]
        },
        "pharma": {
          "label": "制药业务",
          "notes": [
            "同比 +4%"
          ]
        },
        "animal_health": {
          "label": "动物保健",
          "notes": [
            "同比 +4%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +182%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 73%",
            "同比下降 5 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "pretax_profit": {
          "label": "税前利润",
          "notes": [
            "利润率 31%",
            "同比下降 8 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 28%",
            "同比下降 5 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 25%",
            "同比上升 1 个百分点"
          ]
        },
        "sga": {
          "label": "销售、一般及管理费用",
          "notes": [
            "占收入 16%",
            "同比上升 1 个百分点"
          ]
        },
        "other_opex": {
          "label": "其他",
          "notes": [
            "占收入 1%"
          ]
        }
      },
      "layout": {
        "labels": {
          "oncology": {
            "blocks": [
              {
                "x": 494,
                "top": 377,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "同比 +7%",
                    "size": 26,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 416,
                "top": 512,
                "anchor": "end",
                "lines": [
                  {
                    "text": "肿瘤",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "vaccines": {
            "blocks": [
              {
                "x": 494,
                "top": 657,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "同比下降 4%",
                    "size": 26,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 416,
                "top": 750.5,
                "anchor": "end",
                "lines": [
                  {
                    "text": "疫苗",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "cardiology": {
            "blocks": [
              {
                "x": 494,
                "top": 849,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "同比 +23%",
                    "size": 26,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 431,
                "top": 922,
                "anchor": "end",
                "lines": [
                  {
                    "text": "心血管",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_pharma": {
            "blocks": [
              {
                "x": 494,
                "top": 1009,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "同比下降 4%",
                    "size": 26,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 382,
                "top": 1078.5,
                "anchor": "end",
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
          "pharma": {
            "blocks": [
              {
                "x": 862,
                "top": 449,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "制药业务",
                    "size": 40,
                    "weight": 800,
                    "color": "#007a73"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#007a73"
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "animal_health": {
            "blocks": [
              {
                "x": 862,
                "top": 907,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "动物保健",
                    "size": 40,
                    "weight": 800,
                    "color": "#007a73"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#007a73"
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 867,
                "top": 1152,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800,
                    "color": "#007a73"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#007a73"
                  },
                  {
                    "text": "同比 +182%",
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
                "x": 1235,
                "top": 539,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#007a73"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#007a73"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 28,
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
                "x": 1612,
                "top": 407,
                "anchor": "middle",
                "lineGap": 8,
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
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 73%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比下降 5 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1612,
                "top": 1110,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售成本",
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
          "pretax_profit": {
            "blocks": [
              {
                "x": 1992,
                "top": 325,
                "anchor": "middle",
                "lineGap": 8,
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
                  },
                  {
                    "text": "利润率 31%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比下降 8 个百分点",
                    "size": 28,
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
                "x": 1992,
                "top": 898,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "运营费用",
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
          "net_profit": {
            "blocks": [
              {
                "x": 2530,
                "top": 364,
                "anchor": "middle",
                "lineGap": 8,
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
                    "text": "利润率 28%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比下降 5 个百分点",
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
                "x": 2520,
                "top": 644,
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
          "rnd": {
            "blocks": [
              {
                "x": 2534,
                "top": 837,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 25%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比上升 1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2534,
                "top": 1020,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 16%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比上升 1 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2520,
                "top": 1203,
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
                  },
                  {
                    "text": "占收入 1%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});
