window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "tripadvisor-q2-fy25",
  "name": "Tripadvisor · Q2 FY25",
  "company": "Tripadvisor",
  "meta": {
    "company": "Tripadvisor",
    "title": "Tripadvisor Q2 FY25 Income Statement",
    "period": "Q2 FY25",
    "periodNote": "Quarter ended Jun. 30, 2025",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/tripadvisor-q2-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2450,
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
    "subtitleColor": "#666666",
    "noteColor": "#666666",
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
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 27,
      "lineGap": 8
    }
  },
  "rasterAnnotations": [
    {
      "key": "tripadvisor-company-logo",
      "href": "data/assets/raster-annotations/tripadvisor/company-logo.png",
      "x": 602,
      "y": 293,
      "width": 763,
      "height": 164
    },
    {
      "key": "tripadvisor-hotel-other-icon",
      "href": "data/assets/raster-annotations/tripadvisor/hotel-other-icon.png",
      "x": 13,
      "y": 419,
      "width": 124,
      "height": 128
    },
    {
      "key": "tripadvisor-experiences-icon",
      "href": "data/assets/raster-annotations/tripadvisor/experiences-icon.png",
      "x": 12,
      "y": 744,
      "width": 118,
      "height": 125
    },
    {
      "key": "tripadvisor-thefork-icon",
      "href": "data/assets/raster-annotations/tripadvisor/thefork-icon.png",
      "x": 12,
      "y": 1025,
      "width": 124,
      "height": 125
    }
  ],
  "layout": {
    "scale": 0.56,
    "nodes": {
      "tripadvisor": {
        "x": 387,
        "y": 466,
        "width": 72,
        "height": 130
      },
      "viator": {
        "x": 387,
        "y": 776,
        "width": 72,
        "height": 145
      },
      "thefork": {
        "x": 387,
        "y": 1071,
        "width": 72,
        "height": 29
      },
      "gross_segment_revenue": {
        "x": 761,
        "y": 559,
        "width": 72,
        "height": 303
      },
      "revenue": {
        "x": 1135,
        "y": 633,
        "width": 72,
        "height": 283
      },
      "eliminations": {
        "x": 1135,
        "y": 1028,
        "width": 72,
        "height": 20
      },
      "gross_profit": {
        "x": 1508,
        "y": 561,
        "width": 72,
        "height": 261
      },
      "cost_of_revenue": {
        "x": 1508,
        "y": 1023,
        "width": 72,
        "height": 23
      },
      "operating_profit": {
        "x": 1880,
        "y": 472,
        "width": 72,
        "height": 32
      },
      "operating_expenses": {
        "x": 1878,
        "y": 671,
        "width": 72,
        "height": 229
      },
      "net_profit": {
        "x": 2255,
        "y": 379,
        "width": 72,
        "height": 20
      },
      "tax_other": {
        "x": 2255,
        "y": 558,
        "width": 72,
        "height": 12
      },
      "sm": {
        "x": 2255,
        "y": 720,
        "width": 72,
        "height": 116
      },
      "personnel": {
        "x": 2255,
        "y": 898,
        "width": 72,
        "height": 79
      },
      "technology": {
        "x": 2255,
        "y": 1052,
        "width": 72,
        "height": 13
      },
      "da": {
        "x": 2255,
        "y": 1170,
        "width": 72,
        "height": 12
      },
      "ga": {
        "x": 2255,
        "y": 1286,
        "width": 72,
        "height": 7
      }
    },
    "labels": {
      "tripadvisor": {
        "blocks": [
          {
            "x": 424,
            "top": 374,
            "anchor": "middle",
            "lineGap": 14,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 353,
            "top": 462,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tripadvisor",
                "size": 39,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 370,
            "top": 514,
            "anchor": "end",
            "lineGap": 11,
            "lines": [
              {
                "text": "Branded hotels,",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "display & platform,",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "experiences & dining",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "27% adjusted margin",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "viator": {
        "blocks": [
          {
            "x": 424,
            "top": 683,
            "anchor": "middle",
            "lineGap": 14,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 306,
            "top": 785,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Viator",
                "size": 39,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 380,
            "top": 836,
            "anchor": "end",
            "lineGap": 11,
            "lines": [
              {
                "text": "Tours, activities",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "& attractions",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "12% adjusted margin",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "thefork": {
        "blocks": [
          {
            "x": 424,
            "top": 980,
            "anchor": "middle",
            "lineGap": 14,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              },
              {
                "text": "+28% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 318,
            "top": 1068,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "TheFork",
                "size": 39,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 370,
            "top": 1119,
            "anchor": "end",
            "lineGap": 11,
            "lines": [
              {
                "text": "Restaurant",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "reservations",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "17% adjusted margin",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_segment_revenue": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1168,
            "top": 489,
            "anchor": "middle",
            "lineGap": 13,
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
                "text": "+7% Y/Y",
                "size": 27,
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
            "x": 1547,
            "top": 376,
            "anchor": "middle",
            "lineGap": 13,
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
                "text": "92% margin",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
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
            "x": 1547,
            "top": 1064,
            "anchor": "middle",
            "lineGap": 11,
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
      "operating_profit": {
        "blocks": [
          {
            "x": 1918,
            "top": 289,
            "anchor": "middle",
            "lineGap": 13,
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
                "text": "11% margin",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27,
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
            "x": 1918,
            "top": 918,
            "anchor": "middle",
            "lineGap": 5,
            "lines": [
              {
                "text": "Operating",
                "size": 40,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 40,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2492,
            "top": 329,
            "anchor": "middle",
            "lineGap": 13,
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
                "text": "7% margin",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27,
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
            "x": 2491,
            "top": 530,
            "anchor": "middle",
            "lineGap": 7,
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
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1168,
            "top": 1067,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
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
      "sm": {
        "blocks": [
          {
            "x": 2491,
            "top": 730,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "S&M ($218M)",
                "size": 31,
                "weight": 800
              },
              {
                "text": "41% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "personnel": {
        "blocks": [
          {
            "x": 2491,
            "top": 893,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Personnel ($149M)",
                "size": 31,
                "weight": 800
              },
              {
                "text": "28% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 2491,
            "top": 1035,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "Technology ($25M)",
                "size": 31,
                "weight": 800
              },
              {
                "text": "5% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "da": {
        "blocks": [
          {
            "x": 2491,
            "top": 1154,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "D&A ($23M)",
                "size": 31,
                "weight": 800
              },
              {
                "text": "4% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27,
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
            "x": 2491,
            "top": 1272,
            "anchor": "middle",
            "lineGap": 13,
            "lines": [
              {
                "text": "G&A ($13M)",
                "size": 31,
                "weight": 800
              },
              {
                "text": "2% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27,
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
      "id": "tripadvisor",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Tripadvisor",
      "value": 242,
      "notes": [
        "(3%) Y/Y",
        "Branded hotels, display & platform, experiences & dining",
        "27% adjusted margin"
      ]
    },
    {
      "id": "viator",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Viator",
      "value": 270,
      "notes": [
        "+11% Y/Y",
        "Tours, activities & attractions",
        "12% adjusted margin"
      ]
    },
    {
      "id": "thefork",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "TheFork",
      "value": 54,
      "notes": [
        "+28% Y/Y",
        "Restaurant reservations",
        "17% adjusted margin"
      ]
    },
    {
      "id": "gross_segment_revenue",
      "col": 1,
      "order": 0,
      "type": "source",
      "label": "Company revenue before eliminations",
      "value": 566
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 529,
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Eliminations",
      "value": -37
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 487,
      "notes": [
        "92% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Cost of",
        "revenue"
      ],
      "value": 42
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 59,
      "notes": [
        "11% margin",
        "+4pp Y/Y"
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
      "value": 428
    },
    {
      "id": "net_profit",
      "col": 6,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 36,
      "notes": [
        "7% margin",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "tax_other",
      "col": 6,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 23
    },
    {
      "id": "sm",
      "col": 6,
      "order": 2,
      "type": "cost",
      "label": "S&M",
      "value": 218,
      "notes": [
        "41% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "personnel",
      "col": 6,
      "order": 3,
      "type": "cost",
      "label": "Personnel",
      "value": 149,
      "notes": [
        "28% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "technology",
      "col": 6,
      "order": 4,
      "type": "cost",
      "label": "Technology",
      "value": 25,
      "notes": [
        "5% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "da",
      "col": 6,
      "order": 5,
      "type": "cost",
      "label": "D&A",
      "value": 23,
      "notes": [
        "4% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "col": 6,
      "order": 6,
      "type": "cost",
      "label": "G&A",
      "value": 13,
      "notes": [
        "2% of revenue",
        "(2pp) Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "tripadvisor",
      "target": "gross_segment_revenue",
      "value": 242,
      "sourceWidth": 130,
      "targetWidth": 130,
      "y0": 531,
      "y1": 624,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "viator",
      "target": "gross_segment_revenue",
      "value": 270,
      "sourceWidth": 145,
      "targetWidth": 145,
      "y0": 848.5,
      "y1": 761.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "thefork",
      "target": "gross_segment_revenue",
      "value": 54,
      "sourceWidth": 29,
      "targetWidth": 28,
      "y0": 1085.5,
      "y1": 848,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "gross_segment_revenue",
      "target": "revenue",
      "value": 529,
      "sourceWidth": 283,
      "targetWidth": 283,
      "y0": 700.5,
      "y1": 774.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "gross_segment_revenue",
      "target": "eliminations",
      "value": 37,
      "sourceWidth": 20,
      "targetWidth": 20,
      "y0": 852,
      "y1": 1038,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 487,
      "sourceWidth": 261,
      "targetWidth": 261,
      "y0": 763.5,
      "y1": 691.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 42,
      "sourceWidth": 22,
      "targetWidth": 23,
      "y0": 905,
      "y1": 1034.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 59,
      "sourceWidth": 32,
      "targetWidth": 32,
      "y0": 577,
      "y1": 488,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 428,
      "sourceWidth": 229,
      "targetWidth": 229,
      "y0": 707.5,
      "y1": 785.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 36,
      "sourceWidth": 20,
      "targetWidth": 20,
      "y0": 482,
      "y1": 389,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax_other",
      "value": 23,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 498,
      "y1": 564,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 218,
      "sourceWidth": 116,
      "targetWidth": 116,
      "y0": 729,
      "y1": 778,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel",
      "value": 149,
      "sourceWidth": 79,
      "targetWidth": 79,
      "y0": 826.5,
      "y1": 937.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology",
      "value": 25,
      "sourceWidth": 13,
      "targetWidth": 13,
      "y0": 872.5,
      "y1": 1058.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "da",
      "value": 23,
      "sourceWidth": 12,
      "targetWidth": 12,
      "y0": 885,
      "y1": 1176,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 13,
      "sourceWidth": 9,
      "targetWidth": 7,
      "y0": 895.5,
      "y1": 1289.5,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "猫途鹰 · 2025 财年第二季度",
      "meta": {
        "title": "猫途鹰 2025 财年第二季度利润表",
        "period": "2025 财年第二季度",
        "periodNote": "截至 2025 年 6 月 30 日的季度",
        "titleTextLength": 2120,
        "hidePeriodStamp": true
      },
      "nodes": {
        "tripadvisor": {
          "label": "猫途鹰",
          "notes": [
            "同比 (3%)",
            "品牌酒店、展示平台、体验活动及餐饮",
            "调整后利润率 27%"
          ]
        },
        "viator": {
          "label": "体验业务",
          "notes": [
            "同比 +11%",
            "观光、活动及景点",
            "调整后利润率 12%"
          ]
        },
        "thefork": {
          "label": "餐厅预订",
          "notes": [
            "同比 +28%",
            "餐厅预订",
            "调整后利润率 17%"
          ]
        },
        "gross_segment_revenue": {
          "label": "抵销前公司收入"
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +7%"
          ]
        },
        "eliminations": {
          "label": "抵销"
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 92%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 11%",
            "同比 +4 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "运营",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
            "同比 +2 个百分点"
          ]
        },
        "tax_other": {
          "label": "税费"
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 41%",
            "同比 +0 个百分点"
          ]
        },
        "personnel": {
          "label": "人员",
          "notes": [
            "占收入 28%",
            "同比 (3 个百分点)"
          ]
        },
        "technology": {
          "label": "技术",
          "notes": [
            "占收入 5%",
            "同比 +0 个百分点"
          ]
        },
        "da": {
          "label": "折旧与摊销",
          "notes": [
            "占收入 4%",
            "同比 +0 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 2%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "tripadvisor": {
            "blocks": [
              {
                "x": 424,
                "top": 374,
                "anchor": "middle",
                "lineGap": 14,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 353,
                "top": 462,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "猫途鹰",
                    "size": 39,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 370,
                "top": 514,
                "anchor": "end",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "品牌酒店、展示平台",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "体验活动及餐饮",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "调整后利润率 27%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "viator": {
            "blocks": [
              {
                "x": 424,
                "top": 683,
                "anchor": "middle",
                "lineGap": 14,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 306,
                "top": 785,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "体验业务",
                    "size": 39,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 380,
                "top": 836,
                "anchor": "end",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "观光、活动及景点",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "调整后利润率 12%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "thefork": {
            "blocks": [
              {
                "x": 424,
                "top": 980,
                "anchor": "middle",
                "lineGap": 14,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  },
                  {
                    "text": "同比 +28%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 318,
                "top": 1068,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 39,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 370,
                "top": 1119,
                "anchor": "end",
                "lineGap": 11,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "调整后利润率 17%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_segment_revenue": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1168,
                "top": 489,
                "anchor": "middle",
                "lineGap": 13,
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
                    "text": "同比 +7%",
                    "size": 27,
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
                "x": 1547,
                "top": 376,
                "anchor": "middle",
                "lineGap": 13,
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
                    "text": "利润率 92%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
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
                "x": 1547,
                "top": 1064,
                "anchor": "middle",
                "lineGap": 11,
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
          "operating_profit": {
            "blocks": [
              {
                "x": 1918,
                "top": 289,
                "anchor": "middle",
                "lineGap": 13,
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
                    "text": "利润率 11%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27,
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
                "x": 1918,
                "top": 918,
                "anchor": "middle",
                "lineGap": 5,
                "lines": [
                  {
                    "text": "运营",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 40,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2492,
                "top": 329,
                "anchor": "middle",
                "lineGap": 13,
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
                    "text": "利润率 7%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27,
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
                "x": 2491,
                "top": 530,
                "anchor": "middle",
                "lineGap": 7,
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
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1168,
                "top": 1067,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销",
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
          "sm": {
            "blocks": [
              {
                "x": 2491,
                "top": 730,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "销售与营销（$218M）",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "占收入 41%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "personnel": {
            "blocks": [
              {
                "x": 2491,
                "top": 893,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "人员（$149M）",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "占收入 28%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 2491,
                "top": 1035,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "技术（$25M）",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "占收入 5%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "da": {
            "blocks": [
              {
                "x": 2491,
                "top": 1154,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "折旧与摊销（$23M）",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "占收入 4%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27,
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
                "x": 2491,
                "top": 1272,
                "anchor": "middle",
                "lineGap": 13,
                "lines": [
                  {
                    "text": "管理费用（$13M）",
                    "size": 31,
                    "weight": 800
                  },
                  {
                    "text": "占收入 2%",
                    "size": 27,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27,
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
