/* Source-measured Tripadvisor Q2 FY26 Sankey View Adapter. */
window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "tripadvisor-q2-fy26",
  "name": "Tripadvisor · Q2 FY26",
  "company": "Tripadvisor",
  "meta": {
    "company": "Tripadvisor",
    "title": "Tripadvisor Q2 FY26 Income Statement",
    "period": "Q2 FY26",
    "periodNote": "Q2 FY26",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/tripadvisor-q2-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2430,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#34e0a1",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
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
      "source": "#9ce9cd",
      "hub": "#9ce9cd",
      "profit": "#9acc95",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 27,
      "lineGap": 9
    }
  },
  "rasterAnnotations": [
    {
      "key": "tripadvisor-company-logo",
      "href": "data/assets/raster-annotations/tripadvisor/company-logo.png",
      "x": 600,
      "y": 217,
      "width": 755,
      "height": 184
    },
    {
      "key": "tripadvisor-hotel-other-icon",
      "href": "data/assets/raster-annotations/tripadvisor/hotel-other-icon.png",
      "x": 456,
      "y": 516,
      "width": 146,
      "height": 137
    },
    {
      "key": "tripadvisor-experiences-icon",
      "href": "data/assets/raster-annotations/tripadvisor/experiences-icon.png",
      "x": 593,
      "y": 512,
      "width": 132,
      "height": 140
    }
  ],
  "annotationsSvg": "<g data-annotation-clearance=\"tripadvisor-raster-0\"><rect x=\"604\" y=\"242\" width=\"742\" height=\"159\" fill=\"transparent\" /></g><g data-annotation-clearance=\"tripadvisor-raster-1\"><rect x=\"456\" y=\"516\" width=\"146\" height=\"137\" fill=\"transparent\" /></g><g data-annotation-clearance=\"tripadvisor-raster-2\"><rect x=\"593\" y=\"512\" width=\"132\" height=\"140\" fill=\"transparent\" /></g>",
  "layout": {
    "scale": 0.9615384615384616,
    "nodes": {
      "hotels": {
        "x": 388,
        "y": 868,
        "width": 71,
        "height": 114
      },
      "media": {
        "x": 388,
        "y": 1104,
        "width": 71,
        "height": 31
      },
      "other_revenue": {
        "x": 388,
        "y": 1262,
        "width": 71,
        "height": 13
      },
      "experiences": {
        "x": 762,
        "y": 530,
        "width": 70,
        "height": 269
      },
      "hotels_other": {
        "x": 762,
        "y": 930,
        "width": 70,
        "height": 158
      },
      "revenue": {
        "x": 1135,
        "y": 600,
        "width": 71,
        "height": 425
      },
      "gross_profit": {
        "x": 1509,
        "y": 530,
        "width": 71,
        "height": 396
      },
      "cost_of_revenue": {
        "x": 1509,
        "y": 1062,
        "width": 71,
        "height": 30
      },
      "operating_profit": {
        "x": 1883,
        "y": 445,
        "width": 71,
        "height": 37
      },
      "operating_expenses": {
        "x": 1883,
        "y": 635,
        "width": 71,
        "height": 360
      },
      "net_profit": {
        "x": 2256,
        "y": 360,
        "width": 72,
        "height": 23
      },
      "other_expense": {
        "x": 2256,
        "y": 529,
        "width": 72,
        "height": 9
      },
      "tax": {
        "x": 2256,
        "y": 629,
        "width": 72,
        "height": 6
      },
      "sm": {
        "x": 2256,
        "y": 697,
        "width": 72,
        "height": 208
      },
      "personnel": {
        "x": 2256,
        "y": 960,
        "width": 72,
        "height": 96
      },
      "technology": {
        "x": 2256,
        "y": 1129,
        "width": 72,
        "height": 21
      },
      "da": {
        "x": 2256,
        "y": 1210,
        "width": 72,
        "height": 18
      },
      "ga": {
        "x": 2256,
        "y": 1292,
        "width": 72,
        "height": 14
      },
      "restructuring": {
        "x": 2256,
        "y": 1365,
        "width": 72,
        "height": 4
      }
    },
    "labels": {
      "hotels": {
        "blocks": [
          {
            "x": 423,
            "top": 779,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(23%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 237,
            "top": 900.5,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Hotels",
                "size": 40,
                "weight": 800
              }
            ]
          }
        ]
      },
      "media": {
        "blocks": [
          {
            "x": 423,
            "top": 1015,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(12%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 226,
            "top": 1070.5,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Media &",
                "size": 40,
                "weight": 800
              },
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
            "x": 423,
            "top": 1173,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(20%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 237,
            "top": 1244,
            "anchor": "middle",
            "lineGap": 9,
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
      "experiences": {
        "blocks": [
          {
            "x": 797,
            "top": 440,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 621,
            "top": 665,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Experiences",
                "size": 40,
                "weight": 800
              },
              {
                "text": "Tours and activities",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "marketplace",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "brand-description-below-icons"
          }
        ]
      },
      "hotels_other": {
        "blocks": [
          {
            "x": 784,
            "top": 1109,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Hotels",
                "size": 40,
                "weight": 800
              },
              {
                "text": "& Other",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(21%) Y/Y",
                "size": 27,
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
            "x": 1173,
            "top": 457,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(7%) Y/Y",
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
            "x": 1553,
            "top": 350,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Gross profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "93% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
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
            "x": 1918,
            "top": 266,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "9% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
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
            "x": 2492,
            "top": 310,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Net profit",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "5% margin",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27,
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
            "x": 1546,
            "top": 1115,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Cost of",
                "size": 36,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1918,
            "top": 1016,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2492,
            "top": 499,
            "anchor": "middle",
            "lineGap": 9,
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
      "tax": {
        "blocks": [
          {
            "x": 2492,
            "top": 600,
            "anchor": "middle",
            "lineGap": 9,
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
      "sm": {
        "blocks": [
          {
            "x": 2393.671875,
            "top": 752,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "S&M",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2472.671875,
            "top": 752,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "($215M)",
                "size": 31,
                "weight": 400
              }
            ]
          },
          {
            "x": 2492,
            "top": 792,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "49% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2359.5625,
            "top": 959,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Personnel",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2524.515625,
            "top": 959,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "($99M)",
                "size": 31,
                "weight": 400
              }
            ]
          },
          {
            "x": 2492,
            "top": 999,
            "anchor": "middle",
            "lineGap": 9,
            "lines": [
              {
                "text": "22% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 2348.7421875,
            "top": 1124,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Technology",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2535.3359375,
            "top": 1124,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "($22M)",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2403.71875,
            "top": 1207,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "D&A",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2480.359375,
            "top": 1207,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "($19M)",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2403.75,
            "top": 1286,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "G&A",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2480.328125,
            "top": 1286,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "($15M)",
                "size": 31,
                "weight": 400
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2337.796875,
            "top": 1352,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31,
                "weight": 800
              }
            ]
          },
          {
            "x": 2564.015625,
            "top": 1352,
            "anchor": "start",
            "lineGap": 9,
            "lines": [
              {
                "text": "($4M)",
                "size": 31,
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
      "id": "hotels",
      "label": "Hotels",
      "value": 118,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(23%) Y/Y"
      ]
    },
    {
      "id": "media",
      "label": "Media & Advertising",
      "value": 31,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(12%) Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 14,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(20%) Y/Y"
      ]
    },
    {
      "id": "experiences",
      "label": "Experiences",
      "value": 279,
      "type": "source",
      "col": 1,
      "order": 0,
      "notes": [
        "+3% Y/Y",
        "Tours and activities marketplace"
      ]
    },
    {
      "id": "hotels_other",
      "label": "Hotels & Other",
      "value": 163,
      "type": "source",
      "col": 1,
      "order": 1,
      "notes": [
        "(21%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 442,
      "type": "hub",
      "col": 2,
      "order": 0,
      "notes": [
        "(7%) Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 411,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "93% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 31,
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 38,
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": [
        "9% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 373,
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 23,
      "type": "profit",
      "col": 5,
      "order": 0,
      "notes": [
        "5% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "other_expense",
      "label": "Other",
      "value": 10,
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 5,
      "type": "cost",
      "col": 5,
      "order": 2,
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 215,
      "type": "cost",
      "col": 5,
      "order": 3,
      "notes": [
        "49% of revenue",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "personnel",
      "label": "Personnel",
      "value": 99,
      "type": "cost",
      "col": 5,
      "order": 4,
      "notes": [
        "22% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "technology",
      "label": "Technology",
      "value": 22,
      "type": "cost",
      "col": 5,
      "order": 5,
      "notes": []
    },
    {
      "id": "da",
      "label": "D&A",
      "value": 19,
      "type": "cost",
      "col": 5,
      "order": 6,
      "notes": []
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 15,
      "type": "cost",
      "col": 5,
      "order": 7,
      "notes": []
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 4,
      "type": "cost",
      "col": 5,
      "order": 8,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "hotels",
      "target": "hotels_other",
      "value": 118,
      "sourceWidth": 114,
      "targetWidth": 114,
      "y0": 925,
      "y1": 987,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "media",
      "target": "hotels_other",
      "value": 31,
      "sourceWidth": 31,
      "targetWidth": 31,
      "y0": 1119.5,
      "y1": 1059.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "other_revenue",
      "target": "hotels_other",
      "value": 14,
      "sourceWidth": 13,
      "targetWidth": 13,
      "y0": 1268.5,
      "y1": 1081.5,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "experiences",
      "target": "revenue",
      "value": 279,
      "sourceWidth": 269,
      "targetWidth": 269,
      "y0": 664.5,
      "y1": 734.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "hotels_other",
      "target": "revenue",
      "value": 163,
      "sourceWidth": 158,
      "targetWidth": 156,
      "y0": 1009,
      "y1": 947,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 411,
      "sourceWidth": 395,
      "targetWidth": 396,
      "y0": 797.5,
      "y1": 728,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acc95"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 31,
      "sourceWidth": 30,
      "targetWidth": 30,
      "y0": 1010,
      "y1": 1077,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 38,
      "sourceWidth": 37,
      "targetWidth": 37,
      "y0": 548.5,
      "y1": 463.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acc95"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 373,
      "sourceWidth": 359,
      "targetWidth": 360,
      "y0": 746.5,
      "y1": 815,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 23,
      "sourceWidth": 23,
      "targetWidth": 23,
      "y0": 456.5,
      "y1": 371.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acc95"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 10,
      "sourceWidth": 9,
      "targetWidth": 9,
      "y0": 472.5,
      "y1": 533.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 5,
      "sourceWidth": 5,
      "targetWidth": 6,
      "y0": 479.5,
      "y1": 632,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 215,
      "sourceWidth": 207,
      "targetWidth": 208,
      "y0": 738.5,
      "y1": 801,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 99,
      "sourceWidth": 96,
      "targetWidth": 96,
      "y0": 890,
      "y1": 1008,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology",
      "value": 22,
      "sourceWidth": 21,
      "targetWidth": 21,
      "y0": 948.5,
      "y1": 1139.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 19,
      "sourceWidth": 18,
      "targetWidth": 18,
      "y0": 968,
      "y1": 1219,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 15,
      "sourceWidth": 14,
      "targetWidth": 14,
      "y0": 984,
      "y1": 1299,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 4,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 993,
      "y1": 1367,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "猫途鹰 · 2026 财年第二季度",
      "meta": {
        "title": "猫途鹰 2026 财年第二季度利润表",
        "period": "2026 财年第二季度",
        "periodNote": "2026 财年第二季度",
        "titleTextLength": 2120
      },
      "nodes": {
        "hotels": {
          "label": "酒店",
          "notes": [
            "同比 (23%)"
          ]
        },
        "media": {
          "label": "媒体与广告",
          "notes": [
            "同比 (12%)"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 (20%)"
          ]
        },
        "experiences": {
          "label": "体验业务",
          "notes": [
            "同比 +3%",
            "观光与活动市场"
          ]
        },
        "hotels_other": {
          "label": "酒店及其他",
          "notes": [
            "同比 (21%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (7%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 93%",
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
            "利润率 9%",
            "同比 (4 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 5%",
            "同比 (3 个百分点)"
          ]
        },
        "other_expense": {
          "label": "其他",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 49%",
            "同比 +5 个百分点"
          ]
        },
        "personnel": {
          "label": "人员",
          "notes": [
            "占收入 22%",
            "同比 (4 个百分点)"
          ]
        },
        "technology": {
          "label": "技术",
          "notes": []
        },
        "da": {
          "label": "折旧与摊销",
          "notes": []
        },
        "ga": {
          "label": "管理费用",
          "notes": []
        },
        "restructuring": {
          "label": "重组",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "hotels": {
            "blocks": [
              {
                "x": 423,
                "top": 779,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (23%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 237,
                "top": 900.5,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "酒店",
                    "size": 40,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "media": {
            "blocks": [
              {
                "x": 423,
                "top": 1015,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (12%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 226,
                "top": 1070.5,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "媒体与",
                    "size": 40,
                    "weight": 800
                  },
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
                "x": 423,
                "top": 1173,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (20%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 237,
                "top": 1244,
                "anchor": "middle",
                "lineGap": 9,
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
          "experiences": {
            "blocks": [
              {
                "x": 797,
                "top": 440,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 621,
                "top": 665,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "体验业务",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "观光与活动市场",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "brand-description-below-icons"
              }
            ]
          },
          "hotels_other": {
            "blocks": [
              {
                "x": 784,
                "top": 1109,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "酒店",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "及其他",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (21%)",
                    "size": 27,
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
                "x": 1173,
                "top": 457,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7%)",
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
                "x": 1553,
                "top": 350,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 93%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
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
                "x": 1918,
                "top": 266,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 9%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
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
                "x": 2492,
                "top": 310,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "利润率 5%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27,
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
                "x": 1546,
                "top": 1115,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1918,
                "top": 1016,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2492,
                "top": 499,
                "anchor": "middle",
                "lineGap": 9,
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
          "tax": {
            "blocks": [
              {
                "x": 2492,
                "top": 600,
                "anchor": "middle",
                "lineGap": 9,
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
          "sm": {
            "blocks": [
              {
                "x": 2351.671875,
                "top": 752,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2514.671875,
                "top": 752,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "($215M)",
                    "size": 31,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2492,
                "top": 792,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "占收入 49%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2407.0390625,
                "top": 959,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "人员",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2477.0390625,
                "top": 959,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "($99M)",
                    "size": 31,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2492,
                "top": 999,
                "anchor": "middle",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "占收入 22%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 2407.0390625,
                "top": 1124,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "技术",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2477.0390625,
                "top": 1124,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "($22M)",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2360.5390625,
                "top": 1207,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "折旧与摊销",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2523.5390625,
                "top": 1207,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "($19M)",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2376.0390625,
                "top": 1286,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2508.0390625,
                "top": 1286,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "($15M)",
                    "size": 31,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2415.90625,
                "top": 1352,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2485.90625,
                "top": 1352,
                "anchor": "start",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "($4M)",
                    "size": 31,
                    "weight": 400
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
