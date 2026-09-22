window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "merck-q2-fy26",
  "name": "Merck · Q2 FY26",
  "company": "Merck",
  "meta": {
    "company": "Merck",
    "title": "Merck Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Quarter ended Jun. 30, 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/merck-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
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
      "x": 744.0453172205438,
      "y": 226.01661631419938,
      "width": 728.8972809667673,
      "height": 215.67371601208458
    },
    {
      "key": "merck-keytruda",
      "href": "data/assets/raster-annotations/merck/keytruda.png",
      "x": 0,
      "y": 497,
      "width": 218,
      "height": 86
    },
    {
      "key": "merck-gardasil-9",
      "href": "data/assets/raster-annotations/merck/gardasil-9.png",
      "x": 17.143712574850298,
      "y": 703.1796407185628,
      "width": 202.5449101796407,
      "height": 90.89820359281437
    },
    {
      "key": "merck-bridion",
      "href": "data/assets/raster-annotations/merck/bridion.png",
      "x": 18,
      "y": 867,
      "width": 204,
      "height": 98
    },
    {
      "key": "merck-januvia",
      "href": "data/assets/raster-annotations/merck/januvia.png",
      "x": 29,
      "y": 978,
      "width": 179,
      "height": 116
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "oncology": {
        "x": 463,
        "y": 434,
        "width": 72,
        "height": 184
      },
      "vaccines": {
        "x": 463,
        "y": 746,
        "width": 72,
        "height": 43
      },
      "infectious_diseases": {
        "x": 463,
        "y": 911,
        "width": 72,
        "height": 20
      },
      "diabetes": {
        "x": 463,
        "y": 1056,
        "width": 72,
        "height": 8
      },
      "other_pharma": {
        "x": 463,
        "y": 1196,
        "width": 72,
        "height": 31
      },
      "pharma": {
        "x": 837,
        "y": 606,
        "width": 72,
        "height": 291
      },
      "animal_health": {
        "x": 837,
        "y": 1156,
        "width": 72,
        "height": 35
      },
      "other_revenue": {
        "x": 838,
        "y": 1378,
        "width": 70,
        "height": 1
      },
      "revenue": {
        "x": 1210,
        "y": 704,
        "width": 72,
        "height": 327
      },
      "gross_profit": {
        "x": 1585,
        "y": 602,
        "width": 71,
        "height": 240
      },
      "cost_of_sales": {
        "x": 1585,
        "y": 1033,
        "width": 71,
        "height": 85
      },
      "operating_loss": {
        "x": 1763,
        "y": 1049,
        "width": 71,
        "height": 12
      },
      "operating_expenses": {
        "x": 1958,
        "y": 703,
        "width": 72,
        "height": 253
      },
      "rnd": {
        "x": 2332,
        "y": 548,
        "width": 72,
        "height": 191
      },
      "sga": {
        "x": 2332,
        "y": 900,
        "width": 72,
        "height": 56
      },
      "other_opex": {
        "x": 2332,
        "y": 1130,
        "width": 72,
        "height": 3
      }
    },
    "labels": {
      "oncology": {
        "blocks": [
          {
            "x": 500.5,
            "top": 353,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "+6% Y/Y",
                "size": 26,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 416,
            "top": 501.5,
            "anchor": "end",
            "lineGap": 8,
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
            "x": 498.5,
            "top": 663,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "(1%) Y/Y",
                "size": 26,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 415,
            "top": 743,
            "anchor": "end",
            "lineGap": 8,
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
      "infectious_diseases": {
        "blocks": [
          {
            "x": 499,
            "top": 827,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 26,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 421,
            "top": 872.5,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Infectious",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Diseases",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "diabetes": {
        "blocks": [
          {
            "x": 497.5,
            "top": 970,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "(31%) Y/Y",
                "size": 26,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 416,
            "top": 1035.5,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Diabetes",
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
            "x": 499,
            "top": 1110,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 34,
                "weight": 400
              },
              {
                "text": "+27% Y/Y",
                "size": 26,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 382,
            "top": 1187,
            "anchor": "end",
            "lineGap": 8,
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
            "x": 869.5,
            "top": 464,
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
                "text": "+5% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "animal_health": {
        "blocks": [
          {
            "x": 865,
            "top": 1010,
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
                "text": "+8% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 869.5,
            "top": 1232,
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
                "text": "(35%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1241,
            "top": 560,
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
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1617,
            "top": 420,
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
                "text": "74% margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1617.5,
            "top": 1141,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of",
                "size": 35,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "sales",
                "size": 35,
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1992,
            "top": 561,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 35,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 35,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 35,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1802.5,
            "top": 1090.5,
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
                "text": "loss",
                "size": 40,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "(4%) margin",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(36pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2525.5,
            "top": 579,
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
                "text": "59% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+33pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2526,
            "top": 894,
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
                "text": "17% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+1pp Y/Y",
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
            "x": 2525,
            "top": 1095,
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
                "text": "2% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
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
  "nodes": [
    {
      "id": "oncology",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Oncology",
      "value": 9.4,
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "vaccines",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Vaccines",
      "value": 2.2,
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "infectious_diseases",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": [
        "Infectious",
        "Diseases"
      ],
      "value": 1.1,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "diabetes",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Diabetes",
      "value": 0.4,
      "notes": [
        "(31%) Y/Y"
      ]
    },
    {
      "id": "other_pharma",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Other",
      "value": 1.6,
      "notes": [
        "+27% Y/Y"
      ]
    },
    {
      "id": "pharma",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "Pharma",
      "value": 14.8,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "animal_health",
      "col": 1,
      "order": 1,
      "type": "source",
      "label": "Animal Health",
      "value": 1.8,
      "notes": [
        "+8% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "col": 1,
      "order": 2,
      "type": "source",
      "label": "Other",
      "value": 0.1,
      "notes": [
        "(35%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 16.6,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 12.2,
      "notes": [
        "74% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 4.4,
      "notes": []
    },
    {
      "id": "operating_loss",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "loss"
      ],
      "value": -0.7,
      "notes": [
        "(4%) margin",
        "(36pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 5,
      "order": 0,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 12.9,
      "notes": []
    },
    {
      "id": "rnd",
      "col": 6,
      "order": 0,
      "type": "cost",
      "label": "R&D",
      "value": 9.7,
      "notes": [
        "59% of revenue",
        "+33pp Y/Y"
      ]
    },
    {
      "id": "sga",
      "col": 6,
      "order": 1,
      "type": "cost",
      "label": "SG&A",
      "value": 2.9,
      "notes": [
        "17% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "other_opex",
      "col": 6,
      "order": 2,
      "type": "cost",
      "label": "Other",
      "value": 0.3,
      "notes": [
        "2% of revenue",
        "(2pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "oncology",
      "target": "pharma",
      "value": 9.4,
      "sourceWidth": 184,
      "targetWidth": 184,
      "y0": 526,
      "y1": 698,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85bcb8"
    },
    {
      "source": "vaccines",
      "target": "pharma",
      "value": 2.2,
      "sourceWidth": 43,
      "targetWidth": 43,
      "y0": 767.5,
      "y1": 811.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85bcb8"
    },
    {
      "source": "infectious_diseases",
      "target": "pharma",
      "value": 1.1,
      "sourceWidth": 20,
      "targetWidth": 21,
      "y0": 921,
      "y1": 843.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85bcb8"
    },
    {
      "source": "diabetes",
      "target": "pharma",
      "value": 0.4,
      "sourceWidth": 8,
      "targetWidth": 8,
      "y0": 1060,
      "y1": 858,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#85bcb8"
    },
    {
      "source": "other_pharma",
      "target": "pharma",
      "value": 1.6,
      "sourceWidth": 31,
      "targetWidth": 35,
      "y0": 1211.5,
      "y1": 879.5,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#85bcb8"
    },
    {
      "source": "pharma",
      "target": "revenue",
      "value": 14.8,
      "sourceWidth": 291,
      "targetWidth": 291,
      "y0": 751.5,
      "y1": 849.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85bcb8"
    },
    {
      "source": "animal_health",
      "target": "revenue",
      "value": 1.8,
      "sourceWidth": 35,
      "targetWidth": 35,
      "y0": 1173.5,
      "y1": 1012.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85bcb8"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.1,
      "sourceWidth": 1,
      "targetWidth": 1,
      "y0": 1378.5,
      "y1": 1030.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85bcb8"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 12.2,
      "sourceWidth": 241,
      "targetWidth": 240,
      "y0": 824.5,
      "y1": 722,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 4.4,
      "sourceWidth": 86,
      "targetWidth": 85,
      "y0": 988,
      "y1": 1075.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 12.2,
      "sourceWidth": 240,
      "targetWidth": 241,
      "y0": 722,
      "y1": 823.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.7,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 1055,
      "y1": 950,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 9.7,
      "sourceWidth": 192,
      "targetWidth": 191,
      "y0": 799,
      "y1": 643.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.9,
      "sourceWidth": 57,
      "targetWidth": 56,
      "y0": 923.5,
      "y1": 928,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.3,
      "sourceWidth": 4,
      "targetWidth": 3,
      "y0": 954,
      "y1": 1131.5,
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
      "name": "默沙东 · 2026 财年第二季度",
      "meta": {
        "title": "默沙东 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "截至 2026 年 6 月 30 日的季度"
      },
      "nodes": {
        "oncology": {
          "label": "肿瘤",
          "notes": [
            "同比 +6%"
          ]
        },
        "vaccines": {
          "label": "疫苗",
          "notes": [
            "同比 (1%)"
          ]
        },
        "infectious_diseases": {
          "label": "传染病",
          "notes": [
            "同比 +3%"
          ]
        },
        "diabetes": {
          "label": "糖尿病",
          "notes": [
            "同比 (31%)"
          ]
        },
        "other_pharma": {
          "label": "其他",
          "notes": [
            "同比 +27%"
          ]
        },
        "pharma": {
          "label": "制药业务",
          "notes": [
            "同比 +5%"
          ]
        },
        "animal_health": {
          "label": "动物保健",
          "notes": [
            "同比 +8%"
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
            "利润率 74%",
            "同比 (4 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (4%)",
            "同比 (36 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 59%",
            "同比 +33 个百分点"
          ]
        },
        "sga": {
          "label": "销售、一般及管理费用",
          "notes": [
            "占收入 17%",
            "同比 +1 个百分点"
          ]
        },
        "other_opex": {
          "label": "其他",
          "notes": [
            "占收入 2%",
            "同比 (2 个百分点)"
          ]
        },
        "other_revenue": {
          "notes": [
            "同比 (35%)"
          ],
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "oncology": {
            "blocks": [
              {
                "x": 500.5,
                "top": 353,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "同比 +6%",
                    "size": 26,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 416,
                "top": 501.5,
                "anchor": "end",
                "lineGap": 8,
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
                "x": 498.5,
                "top": 663,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 26,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 415,
                "top": 743,
                "anchor": "end",
                "lineGap": 8,
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
          "infectious_diseases": {
            "blocks": [
              {
                "x": 499,
                "top": 827,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 26,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 421,
                "top": 896.5,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "传染病",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "diabetes": {
            "blocks": [
              {
                "x": 497.5,
                "top": 970,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "同比 (31%)",
                    "size": 26,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 416,
                "top": 1035.5,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "糖尿病",
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
                "x": 499,
                "top": 1110,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400
                  },
                  {
                    "text": "同比 +27%",
                    "size": 26,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 382,
                "top": 1187,
                "anchor": "end",
                "lineGap": 8,
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
                "x": 869.5,
                "top": 464,
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
                    "text": "同比 +5%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "animal_health": {
            "blocks": [
              {
                "x": 865,
                "top": 1010,
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
                    "text": "同比 +8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 869.5,
                "top": 1232,
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
                    "text": "同比 (35%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1241,
                "top": 560,
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
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1617,
                "top": 420,
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
                    "text": "利润率 74%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1617.5,
                "top": 1141,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售",
                    "size": 35,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 35,
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1992,
                "top": 562,
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1802.5,
                "top": 1090.5,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 40,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "利润率 (4%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (36 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2525.5,
                "top": 579,
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
                    "text": "占收入 59%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +33 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2526,
                "top": 889,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售、一般及",
                    "size": 26,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "管理费用",
                    "size": 26,
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
                    "text": "占收入 17%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "x": 2525,
                "top": 1095,
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
                    "text": "占收入 2%",
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
          }
        }
      }
    }
  }
});
