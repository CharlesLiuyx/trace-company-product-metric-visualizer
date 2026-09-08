/* Source-measured Pfizer Q2 FY26 Sankey View Adapter. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "pfizer-q2-fy26",
  "name": "Pfizer · Q2 FY26",
  "company": "Pfizer",
  "meta": {
    "company": "Pfizer",
    "title": "Pfizer Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Source-stated Q2 FY26",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/pfizer-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2078,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#15527a",
    "subtitleColor": "#6b6b6b",
    "noteColor": "#6b6b6b",
    "nodeRadius": 0,
    "palette": {
      "source": {
        "node": "#2b00be",
        "label": "#2b00be"
      },
      "hub": {
        "node": "#2b00be",
        "label": "#2b00be"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#00934f"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#85c5f7",
      "hub": "#85c5f7",
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
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/pfizer/company-wordmark.png",
      "x": 805,
      "y": 220,
      "width": 655,
      "height": 275
    },
    {
      "key": "primary-care-products",
      "href": "data/assets/raster-annotations/pfizer/primary-care-products.png",
      "x": 0,
      "y": 464.915,
      "width": 230,
      "height": 246.17,
      "pairedNode": "primary_care"
    },
    {
      "key": "specialty-care-vyndaqel",
      "href": "data/assets/raster-annotations/pfizer/specialty-care-vyndaqel.png",
      "x": 0,
      "y": 782.5,
      "width": 230,
      "height": 108,
      "pairedNode": "specialty_care"
    },
    {
      "key": "oncology-ibrance",
      "href": "data/assets/raster-annotations/pfizer/oncology-ibrance-tight.png",
      "x": 4,
      "y": 1033,
      "width": 214,
      "height": 82,
      "pairedNode": "oncology"
    }
  ],
  "layout": {
    "scale": 27.5,
    "nodes": {
      "primary_care": {
        "x": 463,
        "y": 513,
        "width": 73,
        "height": 150
      },
      "specialty_care": {
        "x": 463,
        "y": 790,
        "width": 73,
        "height": 93
      },
      "oncology": {
        "x": 463,
        "y": 1017,
        "width": 73,
        "height": 114
      },
      "hospital_biosimilars": {
        "x": 463,
        "y": 1277,
        "width": 73,
        "height": 45
      },
      "biopharma": {
        "x": 836,
        "y": 659,
        "width": 73,
        "height": 401
      },
      "other_revenue": {
        "x": 837,
        "y": 1323,
        "width": 72,
        "height": 10
      },
      "revenue": {
        "x": 1210,
        "y": 729,
        "width": 73,
        "height": 413
      },
      "gross_profit": {
        "x": 1584,
        "y": 650,
        "width": 73,
        "height": 300
      },
      "cost_of_sales": {
        "x": 1584,
        "y": 1124,
        "width": 73,
        "height": 112
      },
      "operating_loss": {
        "x": 1784,
        "y": 1109,
        "width": 73,
        "height": 18
      },
      "operating_expenses": {
        "x": 1958,
        "y": 733,
        "width": 73,
        "height": 317
      },
      "other": {
        "x": 2331,
        "y": 510,
        "width": 74,
        "height": 115
      },
      "sga": {
        "x": 2331,
        "y": 760,
        "width": 74,
        "height": 94
      },
      "rnd": {
        "x": 2331,
        "y": 1016,
        "width": 74,
        "height": 77
      },
      "amortization": {
        "x": 2331,
        "y": 1264,
        "width": 74,
        "height": 33
      }
    },
    "labels": {
      "primary_care": {
        "blocks": [
          {
            "x": 501,
            "top": 421.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          },
          {
            "x": 501,
            "top": 468.1,
            "anchor": "middle",
            "lines": [
              {
                "text": "(3%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 318,
            "top": 543.35,
            "anchor": "middle",
            "lines": [
              {
                "text": "Primary",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Care",
                "size": 40,
                "weight": 800
              }
            ],
            "lineGap": 6.850000000000023
          }
        ]
      },
      "specialty_care": {
        "blocks": [
          {
            "x": 500.5,
            "top": 695.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          },
          {
            "x": 500.5,
            "top": 739.5,
            "anchor": "middle",
            "lines": [
              {
                "text": "+9% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 317.5,
            "top": 786.35,
            "anchor": "middle",
            "lines": [
              {
                "text": "Specialty",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Care",
                "size": 40,
                "weight": 800
              }
            ],
            "lineGap": 7.850000000000023
          }
        ]
      },
      "oncology": {
        "blocks": [
          {
            "x": 500.5,
            "top": 927.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          },
          {
            "x": 500.5,
            "top": 971.5,
            "anchor": "middle",
            "lines": [
              {
                "text": "+3% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 315,
            "top": 1052.35,
            "anchor": "middle",
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
      "hospital_biosimilars": {
        "blocks": [
          {
            "x": 498,
            "top": 1182.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          },
          {
            "x": 498,
            "top": 1227.5,
            "anchor": "middle",
            "lines": [
              {
                "text": "+0% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 314,
            "top": 1250.35,
            "anchor": "middle",
            "lines": [
              {
                "text": "Hospital",
                "size": 40,
                "weight": 800
              },
              {
                "text": "& Biosimilars",
                "size": 40,
                "weight": 800
              }
            ],
            "lineGap": 6.150000000000091
          }
        ]
      },
      "biopharma": {
        "blocks": [
          {
            "x": 860,
            "top": 510.35,
            "anchor": "middle",
            "lines": [
              {
                "text": "Biopharma",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 860,
            "top": 558.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          },
          {
            "x": 860,
            "top": 609.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "+2% Y/Y",
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
            "x": 873.5,
            "top": 1165.5,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 873.5,
            "top": 1219.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          },
          {
            "x": 873.5,
            "top": 1271.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "+7% Y/Y",
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
            "x": 1239.5,
            "top": 575.2,
            "anchor": "middle",
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 1239.5,
            "top": 628.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          },
          {
            "x": 1239.5,
            "top": 680.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "+3% Y/Y",
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
            "x": 1620,
            "top": 462.35,
            "anchor": "middle",
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 1620,
            "top": 510.79999999999995,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          },
          {
            "x": 1620,
            "top": 567.35,
            "anchor": "middle",
            "lines": [
              {
                "text": "73% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1620,
            "top": 605.7,
            "anchor": "middle",
            "lines": [
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
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1619.5,
            "top": 1244.85,
            "anchor": "middle",
            "lines": [
              {
                "text": "Cost",
                "size": 35,
                "weight": 800
              }
            ]
          },
          {
            "x": 1619.5,
            "top": 1291.15,
            "anchor": "middle",
            "lines": [
              {
                "text": "of sales",
                "size": 35,
                "weight": 800
              }
            ]
          },
          {
            "x": 1619.5,
            "top": 1342.75,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1823.5,
            "top": 1143.35,
            "anchor": "middle",
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 1823.5,
            "top": 1189.5,
            "anchor": "middle",
            "lines": [
              {
                "text": "loss",
                "size": 40,
                "weight": 800
              }
            ]
          },
          {
            "x": 1823.5,
            "top": 1246.4,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400
              }
            ]
          },
          {
            "x": 1823.5,
            "top": 1300.35,
            "anchor": "middle",
            "lines": [
              {
                "text": "(4%) margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 1823.5,
            "top": 1339.35,
            "anchor": "middle",
            "lines": [
              {
                "text": "(25pp) Y/Y",
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
            "x": 1999.5,
            "top": 585.45,
            "anchor": "middle",
            "lines": [
              {
                "text": "Operating",
                "size": 35,
                "weight": 800
              }
            ]
          },
          {
            "x": 1999.5,
            "top": 635.55,
            "anchor": "middle",
            "lines": [
              {
                "text": "expenses",
                "size": 35,
                "weight": 800
              }
            ]
          },
          {
            "x": 1999.5,
            "top": 679.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 35,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2516.5,
            "top": 512.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2516.5,
            "top": 558.05,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          },
          {
            "x": 2516.5,
            "top": 597.45,
            "anchor": "middle",
            "lines": [
              {
                "text": "28% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2516.5,
            "top": 640.35,
            "anchor": "middle",
            "lines": [
              {
                "text": "+23pp Y/Y",
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
            "x": 2516.5,
            "top": 741.15,
            "anchor": "middle",
            "lines": [
              {
                "text": "SG&A",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2516.5,
            "top": 786.05,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          },
          {
            "x": 2516.5,
            "top": 825.45,
            "anchor": "middle",
            "lines": [
              {
                "text": "23% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2516.5,
            "top": 869.35,
            "anchor": "middle",
            "lines": [
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
      "rnd": {
        "blocks": [
          {
            "x": 2517.5,
            "top": 979.15,
            "anchor": "middle",
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2517.5,
            "top": 1023.05,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          },
          {
            "x": 2517.5,
            "top": 1062.45,
            "anchor": "middle",
            "lines": [
              {
                "text": "19% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2517.5,
            "top": 1106.35,
            "anchor": "middle",
            "lines": [
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
      "amortization": {
        "blocks": [
          {
            "x": 2515.5,
            "top": 1229.8,
            "anchor": "middle",
            "lines": [
              {
                "text": "Amortization",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2515.5,
            "top": 1274.05,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 31,
                "weight": 400
              }
            ]
          },
          {
            "x": 2515.5,
            "top": 1313.45,
            "anchor": "middle",
            "lines": [
              {
                "text": "8% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 2515.5,
            "top": 1357.35,
            "anchor": "middle",
            "lines": [
              {
                "text": "(0pp) Y/Y",
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
      "id": "primary_care",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": [
        "Primary",
        "Care"
      ],
      "value": 5.5,
      "notes": [
        "(3%) Y/Y"
      ]
    },
    {
      "id": "specialty_care",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": [
        "Specialty",
        "Care"
      ],
      "value": 3.4,
      "notes": [
        "+9% Y/Y"
      ]
    },
    {
      "id": "oncology",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Oncology"
      ],
      "value": 4.2,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "hospital_biosimilars",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": [
        "Hospital",
        "& Biosimilars"
      ],
      "value": 1.6,
      "notes": [
        "+0% Y/Y"
      ]
    },
    {
      "id": "biopharma",
      "col": 1,
      "order": 4,
      "type": "hub",
      "label": [
        "Biopharma"
      ],
      "value": 14.7,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "col": 1,
      "order": 5,
      "type": "source",
      "label": [
        "Other"
      ],
      "value": 0.4,
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 6,
      "type": "hub",
      "label": [
        "Revenue"
      ],
      "value": 15,
      "notes": [
        "+3% Y/Y"
      ],
      "valueText": "$15.0B"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 7,
      "type": "profit",
      "label": [
        "Gross profit"
      ],
      "value": 10.9,
      "notes": [
        "73% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 3,
      "order": 8,
      "type": "cost",
      "label": [
        "Cost",
        "of sales"
      ],
      "value": 4.1,
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 4,
      "order": 9,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -0.7,
      "notes": [
        "(4%) margin",
        "(25pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 5,
      "order": 10,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 11.6,
      "notes": []
    },
    {
      "id": "other",
      "col": 6,
      "order": 11,
      "type": "cost",
      "label": [
        "Other"
      ],
      "value": 4.2,
      "notes": [
        "28% of revenue",
        "+23pp Y/Y"
      ]
    },
    {
      "id": "sga",
      "col": 6,
      "order": 12,
      "type": "cost",
      "label": [
        "SG&A"
      ],
      "value": 3.4,
      "notes": [
        "23% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "rnd",
      "col": 6,
      "order": 13,
      "type": "cost",
      "label": [
        "R&D"
      ],
      "value": 2.8,
      "notes": [
        "19% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "amortization",
      "col": 6,
      "order": 14,
      "type": "cost",
      "label": [
        "Amortization"
      ],
      "value": 1.2,
      "notes": [
        "8% of revenue",
        "(0pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "primary_care",
      "target": "biopharma",
      "value": 5.5,
      "sourceWidth": 150,
      "targetWidth": 150,
      "y0": 588,
      "y1": 734,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85c5f7"
    },
    {
      "source": "specialty_care",
      "target": "biopharma",
      "value": 3.4,
      "sourceWidth": 93,
      "targetWidth": 93,
      "y0": 836.5,
      "y1": 855.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85c5f7"
    },
    {
      "source": "oncology",
      "target": "biopharma",
      "value": 4.2,
      "sourceWidth": 114,
      "targetWidth": 114,
      "y0": 1074,
      "y1": 959,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85c5f7"
    },
    {
      "source": "hospital_biosimilars",
      "target": "biopharma",
      "value": 1.6,
      "sourceWidth": 45,
      "targetWidth": 44,
      "y0": 1299.5,
      "y1": 1038,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85c5f7"
    },
    {
      "source": "biopharma",
      "target": "revenue",
      "value": 14.7,
      "sourceWidth": 401,
      "targetWidth": 401,
      "y0": 859.5,
      "y1": 929.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85c5f7"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 10,
      "targetWidth": 12,
      "y0": 1328,
      "y1": 1136,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85c5f7"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 10.9,
      "sourceWidth": 300,
      "targetWidth": 300,
      "y0": 879,
      "y1": 800,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 4.1,
      "sourceWidth": 113,
      "targetWidth": 112,
      "y0": 1085.5,
      "y1": 1180,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 10.9,
      "sourceWidth": 300,
      "targetWidth": 300,
      "y0": 800,
      "y1": 883,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.7,
      "sourceWidth": 18,
      "targetWidth": 17,
      "y0": 1118,
      "y1": 1041.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 4.2,
      "sourceWidth": 115,
      "targetWidth": 115,
      "y0": 790.5,
      "y1": 567.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 3.4,
      "sourceWidth": 94,
      "targetWidth": 94,
      "y0": 895,
      "y1": 807,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 2.8,
      "sourceWidth": 77,
      "targetWidth": 77,
      "y0": 980.5,
      "y1": 1054.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 1.2,
      "sourceWidth": 31,
      "targetWidth": 33,
      "y0": 1034.5,
      "y1": 1280.5,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "辉瑞 · 2026 财年第二季度",
      "meta": {
        "title": "辉瑞 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "来源标注为 2026 财年第二季度",
        "titleSize": 116,
        "titleTextLength": 1860
      },
      "nodes": {
        "primary_care": {
          "label": [
            "初级",
            "医疗"
          ],
          "notes": [
            "同比 (3%)"
          ]
        },
        "specialty_care": {
          "label": [
            "专科",
            "医疗"
          ],
          "notes": [
            "同比 +9%"
          ]
        },
        "oncology": {
          "label": [
            "肿瘤"
          ],
          "notes": [
            "同比 +3%"
          ]
        },
        "hospital_biosimilars": {
          "label": [
            "医院及",
            "生物类似药"
          ],
          "notes": [
            "同比 +0%"
          ]
        },
        "biopharma": {
          "label": [
            "生物制药"
          ],
          "notes": [
            "同比 +2%"
          ]
        },
        "other_revenue": {
          "label": [
            "其他"
          ],
          "notes": [
            "同比 +7%"
          ]
        },
        "revenue": {
          "label": [
            "收入"
          ],
          "notes": [
            "同比 +3%"
          ]
        },
        "gross_profit": {
          "label": [
            "毛利润"
          ],
          "notes": [
            "利润率 73%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": [
            "销售",
            "成本"
          ],
          "notes": []
        },
        "operating_loss": {
          "label": [
            "营业",
            "亏损"
          ],
          "notes": [
            "利润率 (4%)",
            "同比 (25 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "other": {
          "label": [
            "其他"
          ],
          "notes": [
            "占收入 28%",
            "同比 +23 个百分点"
          ]
        },
        "sga": {
          "label": [
            "销售、一般及行政费用"
          ],
          "notes": [
            "占收入 23%",
            "同比 (1 个百分点)"
          ]
        },
        "rnd": {
          "label": [
            "研发"
          ],
          "notes": [
            "占收入 19%",
            "同比 +2 个百分点"
          ]
        },
        "amortization": {
          "label": [
            "摊销"
          ],
          "notes": [
            "占收入 8%",
            "同比 (0 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "primary_care": {
            "blocks": [
              {
                "x": 501,
                "top": 421.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 501,
                "top": 469.1,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 (3%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 318,
                "top": 543.35,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "初级",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "医疗",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "lineGap": 6.850000000000023
              }
            ]
          },
          "specialty_care": {
            "blocks": [
              {
                "x": 500.5,
                "top": 695.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 500.5,
                "top": 739.5,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +9%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 317.5,
                "top": 786.35,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "专科",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "医疗",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "lineGap": 7.850000000000023
              }
            ]
          },
          "oncology": {
            "blocks": [
              {
                "x": 500.5,
                "top": 927.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 500.5,
                "top": 971.5,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 315,
                "top": 1052.35,
                "anchor": "middle",
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
          "hospital_biosimilars": {
            "blocks": [
              {
                "x": 498,
                "top": 1182.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 498,
                "top": 1227.5,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +0%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 314,
                "top": 1250.35,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "医院及",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "生物类似药",
                    "size": 40,
                    "weight": 800
                  }
                ],
                "lineGap": 6.150000000000091
              }
            ]
          },
          "biopharma": {
            "blocks": [
              {
                "x": 860,
                "top": 510.35,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "生物制药",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 860,
                "top": 558.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 860,
                "top": 609.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +2%",
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
                "x": 873.5,
                "top": 1165.5,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 873.5,
                "top": 1219.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 873.5,
                "top": 1271.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +7%",
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
                "x": 1239.5,
                "top": 575.2,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1239.5,
                "top": 628.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1239.5,
                "top": 680.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +3%",
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
                "x": 1620,
                "top": 462.35,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1620,
                "top": 510.79999999999995,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1620,
                "top": 567.35,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 73%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1620,
                "top": 605.7,
                "anchor": "middle",
                "lines": [
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
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1619.5,
                "top": 1244.85,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "销售",
                    "size": 35,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1619.5,
                "top": 1291.15,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "成本",
                    "size": 35,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1619.5,
                "top": 1342.75,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1823.5,
                "top": 1143.35,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "营业",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1823.5,
                "top": 1189.5,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "亏损",
                    "size": 40,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1823.5,
                "top": 1246.4,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1823.5,
                "top": 1300.35,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "利润率 (4%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 1823.5,
                "top": 1339.35,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 (25 个百分点)",
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
                "x": 1999.5,
                "top": 585.45,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "营业",
                    "size": 35,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1999.5,
                "top": 635.55,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "费用",
                    "size": 35,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1999.5,
                "top": 679.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2516.5,
                "top": 512.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2516.5,
                "top": 558.05,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2516.5,
                "top": 597.45,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 28%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2516.5,
                "top": 640.35,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 +23 个百分点",
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
                "x": 2516.5,
                "top": 741.15,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "销售及行政费用",
                    "size": 27,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2516.5,
                "top": 786.05,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2516.5,
                "top": 825.45,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 23%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2516.5,
                "top": 869.35,
                "anchor": "middle",
                "lines": [
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
          "rnd": {
            "blocks": [
              {
                "x": 2517.5,
                "top": 979.15,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2517.5,
                "top": 1023.05,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2517.5,
                "top": 1062.45,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 19%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2517.5,
                "top": 1106.35,
                "anchor": "middle",
                "lines": [
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
          "amortization": {
            "blocks": [
              {
                "x": 2515.5,
                "top": 1229.8,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2515.5,
                "top": 1274.05,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2515.5,
                "top": 1313.45,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "占收入 8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 2515.5,
                "top": 1357.35,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "同比 (0 个百分点)",
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
  },
  "annotationsSvg": "<g data-annotation-clearance=\"company-wordmark\"><rect x=\"825\" y=\"241\" width=\"613\" height=\"251\" fill=\"transparent\"/></g>"
});
