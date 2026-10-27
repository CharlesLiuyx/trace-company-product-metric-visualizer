window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "tripadvisor-q2-fy23",
  "name": "Tripadvisor · Q2 FY23",
  "company": "Tripadvisor",
  "meta": {
    "company": "Tripadvisor",
    "title": "Tripadvisor Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "Quarter ended Jun. 30, 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/tripadvisor-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.917,
    "titleSize": 125.0,
    "titleWeight": 800,
    "titleTextLength": 2440.409,
    "periodX": -1302.246,
    "periodY": -1302.083,
    "periodNoteY": -1236.979,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667.0,
    "height": 1500.0,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#2bd9a0",
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
    "linkOpacity": 1,
    "type": {
      "name": 39.062,
      "value": 39.062,
      "note": 27.344,
      "lineGap": 9.115
    }
  },
  "rasterAnnotations": [
    {
      "key": "tripadvisor-company-logo",
      "href": "data/assets/raster-annotations/tripadvisor/company-logo.png",
      "x": 626.38,
      "y": 244.792,
      "width": 763.116,
      "height": 186.198
    },
    {
      "key": "tripadvisor-core-icon",
      "href": "data/assets/raster-annotations/tripadvisor/hotel-other-icon.png",
      "x": 28.649,
      "y": 376.302,
      "width": 145.852,
      "height": 136.719
    },
    {
      "key": "tripadvisor-viator-icon",
      "href": "data/assets/raster-annotations/tripadvisor/experiences-icon.png",
      "x": 7.813,
      "y": 723.958,
      "width": 132.829,
      "height": 140.625
    },
    {
      "key": "tripadvisor-thefork-icon",
      "href": "data/assets/raster-annotations/tripadvisor/thefork-icon.png",
      "x": 27.347,
      "y": 1033.854,
      "width": 148.456,
      "height": 140.625
    }
  ],
  "annotationsSvg": "<rect x=\"210.964\" y=\"1235.677\" width=\"401.092\" height=\"147.135\" rx=\"31.25\" fill=\"white\"/><text x=\"411.51\" y=\"1287.76\" text-anchor=\"middle\" fill=\"#20575d\" font-size=\"28.646\" font-weight=\"700\">Viator gross bookings</text><text data-operating-metric=\"viator_gross_bookings\" x=\"411.51\" y=\"1326.823\" text-anchor=\"middle\" fill=\"#20575d\" font-size=\"28.646\">$1.1B</text><text x=\"411.51\" y=\"1358.073\" text-anchor=\"middle\" fill=\"#20575d\" font-size=\"23.438\">+40% Y/Y</text>",
  "operatingMetrics": [
    {
      "id": "viator_gross_bookings",
      "label": "Viator gross bookings",
      "value": "1.1",
      "unit": "B",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$1.1B",
      "basis": "unspecified",
      "notes": [
        "+40% Y/Y"
      ],
      "quote": "Viator gross bookings\n$1.1B\n+40% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          211,
          1236,
          401,
          147
        ]
      }
    }
  ],
  "layout": {
    "scale": 0.651,
    "nodes": {
      "core": {
        "x": 421.928,
        "y": 415.365,
        "width": 71.624,
        "height": 180.99
      },
      "viator": {
        "x": 421.928,
        "y": 785.156,
        "width": 71.624,
        "height": 140.625
      },
      "thefork": {
        "x": 421.928,
        "y": 1114.583,
        "width": 71.624,
        "height": 24.74
      },
      "gross_segment_revenue": {
        "x": 795.672,
        "y": 519.531,
        "width": 71.624,
        "height": 345.052
      },
      "revenue": {
        "x": 1169.417,
        "y": 558.594,
        "width": 71.624,
        "height": 320.312
      },
      "eliminations": {
        "x": 1169.417,
        "y": 1009.115,
        "width": 71.624,
        "height": 26.042
      },
      "gross_profit": {
        "x": 1540.557,
        "y": 507.812,
        "width": 72.926,
        "height": 294.271
      },
      "cost_of_revenue": {
        "x": 1548.371,
        "y": 960.938,
        "width": 71.624,
        "height": 27.344
      },
      "operating_profit": {
        "x": 1911.697,
        "y": 459.635,
        "width": 72.926,
        "height": 28.646
      },
      "operating_expenses": {
        "x": 1914.302,
        "y": 627.604,
        "width": 71.624,
        "height": 265.625
      },
      "net_profit": {
        "x": 2288.046,
        "y": 395.833,
        "width": 72.926,
        "height": 15.625
      },
      "tax": {
        "x": 2290.651,
        "y": 587.24,
        "width": 71.624,
        "height": 13.021
      },
      "sm": {
        "x": 2290.651,
        "y": 717.448,
        "width": 71.624,
        "height": 175.781
      },
      "technology": {
        "x": 2290.651,
        "y": 1006.51,
        "width": 71.624,
        "height": 45.573
      },
      "ga": {
        "x": 2290.651,
        "y": 1175.781,
        "width": 71.624,
        "height": 29.948
      },
      "amortization": {
        "x": 2290.651,
        "y": 1361.979,
        "width": 71.624,
        "height": 14.323
      }
    },
    "labels": {
      "gross_segment_revenue": {
        "blocks": []
      },
      "core": {
        "blocks": [
          {
            "x": 458.391,
            "top": 319.01,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+2% Y/Y",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 272.169,
            "top": 427.083,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Core",
                "size": 39.062,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 273.472,
            "top": 481.771,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Branded hotels,",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "display & platform,",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "experiences & dining",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "34% adjusted margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "viator": {
        "blocks": [
          {
            "x": 458.391,
            "top": 688.802,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+59% Y/Y",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 272.169,
            "top": 794.271,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Viator",
                "size": 39.062,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 273.472,
            "top": 846.354,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Tours, activities",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "& attractions",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1%) adjusted margin",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "thefork": {
        "blocks": [
          {
            "x": 458.391,
            "top": 1019.531,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+19% Y/Y",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 272.169,
            "top": 1082.031,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "TheFork",
                "size": 39.062,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 273.472,
            "top": 1132.812,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Restaurant",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "reservations",
                "size": 26.042,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(11%) adjusted margin",
                "size": 26.042,
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
            "x": 1209.787,
            "top": 410.156,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.062,
                "weight": 800,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+18% Y/Y",
                "size": 27.344,
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
            "x": 1571.811,
            "top": 320.312,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.062,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "92% margin",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.344,
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
            "x": 1953.369,
            "top": 272.135,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.062,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "9% margin",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(6pp) Y/Y",
                "size": 27.344,
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
            "x": 2482.081,
            "top": 313.802,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.062,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.062,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "5% margin",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.344,
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
            "x": 1199.369,
            "top": 1053.385,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Eliminations",
                "size": 36.458,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.458,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1584.833,
            "top": 1005.208,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.458,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 36.458,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.458,
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
            "x": 1948.16,
            "top": 917.969,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Operating",
                "size": 36.458,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36.458,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.458,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2483.383,
            "top": 562.5,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Tax",
                "size": 36.458,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.458,
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
            "x": 2488.592,
            "top": 723.958,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "S&M",
                "size": 36.458,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.458,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "55% of revenue",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.344,
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
            "x": 2488.592,
            "top": 901.042,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Technology",
                "size": 36.458,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.458,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "14% of revenue",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.344,
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
            "x": 2488.592,
            "top": 1070.312,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "G&A",
                "size": 36.458,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.458,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "10% of revenue",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.344,
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
            "x": 2488.592,
            "top": 1235.677,
            "anchor": "middle",
            "lineGap": 9.115,
            "lines": [
              {
                "text": "Amortization",
                "size": 36.458,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.458,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "4% of revenue",
                "size": 27.344,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.344,
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
      "id": "core",
      "value": 279,
      "label": "Core",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+2% Y/Y",
        "Branded hotels, display & platform, experiences & dining",
        "34% adjusted margin"
      ]
    },
    {
      "id": "viator",
      "value": 216,
      "label": "Viator",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+59% Y/Y",
        "Tours, activities & attractions",
        "(1%) adjusted margin"
      ]
    },
    {
      "id": "thefork",
      "value": 38,
      "label": "TheFork",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+19% Y/Y",
        "Restaurant reservations",
        "(11%) adjusted margin"
      ]
    },
    {
      "id": "eliminations",
      "value": 39,
      "label": "Eliminations",
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "revenue",
      "value": 494,
      "label": "Revenue",
      "type": "hub",
      "col": 2,
      "order": 4,
      "notes": [
        "+18% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "value": 453,
      "label": "Gross profit",
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "92% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "value": 41,
      "label": "Cost of revenue",
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": []
    },
    {
      "id": "operating_profit",
      "value": 44,
      "label": "Operating profit",
      "type": "profit",
      "col": 4,
      "order": 8,
      "notes": [
        "9% margin",
        "(6pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "value": 409,
      "label": "Operating expenses",
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": []
    },
    {
      "id": "net_profit",
      "value": 24,
      "label": "Net profit",
      "type": "profit",
      "col": 5,
      "order": 10,
      "notes": [
        "5% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "value": 20,
      "label": "Tax",
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": []
    },
    {
      "id": "sm",
      "value": 270,
      "label": "S&M",
      "type": "cost",
      "col": 5,
      "order": 12,
      "notes": [
        "55% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "technology",
      "value": 71,
      "label": "Technology",
      "type": "cost",
      "col": 5,
      "order": 13,
      "notes": [
        "14% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "value": 47,
      "label": "G&A",
      "type": "cost",
      "col": 5,
      "order": 14,
      "notes": [
        "10% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "amortization",
      "value": 21,
      "label": "Amortization",
      "type": "cost",
      "col": 5,
      "order": 15,
      "notes": [
        "4% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "gross_segment_revenue",
      "value": 533,
      "label": "Company revenue before eliminations",
      "type": "source",
      "col": 1,
      "order": 3,
      "notes": []
    }
  ],
  "links": [
    {
      "source": "core",
      "target": "gross_segment_revenue",
      "value": 279,
      "y0": 505.859,
      "y1": 610.026,
      "sourceWidth": 180.99,
      "targetWidth": 180.99,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "viator",
      "target": "gross_segment_revenue",
      "value": 216,
      "y0": 855.469,
      "y1": 770.182,
      "sourceWidth": 140.625,
      "targetWidth": 139.323,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "thefork",
      "target": "gross_segment_revenue",
      "value": 38,
      "y0": 1126.953,
      "y1": 852.214,
      "sourceWidth": 24.74,
      "targetWidth": 24.74,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "gross_segment_revenue",
      "target": "revenue",
      "value": 494,
      "y0": 679.688,
      "y1": 718.75,
      "sourceWidth": 320.312,
      "targetWidth": 320.312,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ce9cd"
    },
    {
      "source": "gross_segment_revenue",
      "target": "eliminations",
      "value": 39,
      "y0": 852.214,
      "y1": 1022.135,
      "sourceWidth": 24.74,
      "targetWidth": 26.042,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 453,
      "y0": 705.729,
      "y1": 654.948,
      "sourceWidth": 294.271,
      "targetWidth": 294.271,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acc95"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 41,
      "y0": 865.885,
      "y1": 974.609,
      "sourceWidth": 26.042,
      "targetWidth": 27.344,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 44,
      "y0": 522.135,
      "y1": 473.958,
      "sourceWidth": 28.646,
      "targetWidth": 28.646,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acc95"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 409,
      "y0": 669.271,
      "y1": 760.417,
      "sourceWidth": 265.625,
      "targetWidth": 265.625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 24,
      "y0": 467.448,
      "y1": 403.646,
      "sourceWidth": 15.625,
      "targetWidth": 15.625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acc95"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 20,
      "y0": 481.771,
      "y1": 593.75,
      "sourceWidth": 13.021,
      "targetWidth": 13.021,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 270,
      "y0": 715.495,
      "y1": 805.339,
      "sourceWidth": 175.781,
      "targetWidth": 175.781,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "technology",
      "value": 71,
      "y0": 826.172,
      "y1": 1029.297,
      "sourceWidth": 45.573,
      "targetWidth": 45.573,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 47,
      "y0": 863.932,
      "y1": 1190.755,
      "sourceWidth": 29.948,
      "targetWidth": 29.948,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 21,
      "y0": 886.068,
      "y1": 1369.141,
      "sourceWidth": 14.323,
      "targetWidth": 14.323,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "猫途鹰 · 2023 财年第二季度",
      "meta": {
        "title": "猫途鹰 2023 财年第二季度利润表",
        "period": "2023 财年第二季度",
        "periodNote": "截至 2023 年 6 月 30 日的季度",
        "titleTextLength": 2148.706
      },
      "nodes": {
        "core": {
          "label": "核心业务",
          "notes": [
            "同比 +2%",
            "品牌酒店、展示平台、体验活动及餐饮",
            "调整后利润率 34%"
          ]
        },
        "viator": {
          "label": "Viator（体验预订）",
          "notes": [
            "同比 +59%",
            "观光、活动及景点",
            "调整后利润率 (1%)"
          ]
        },
        "thefork": {
          "label": "TheFork（餐厅预订）",
          "notes": [
            "同比 +19%",
            "餐厅预订",
            "调整后利润率 (11%)"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +18%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 92%",
            "同比 (1 个百分点)"
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
            "同比 (6 个百分点)"
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
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 55%",
            "同比 +2 个百分点"
          ]
        },
        "technology": {
          "label": "技术",
          "notes": [
            "占收入 14%",
            "同比 +3 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 10%",
            "同比 +3 个百分点"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 4%",
            "同比 +1 个百分点"
          ]
        },
        "gross_segment_revenue": {
          "label": "抵销前收入",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "gross_segment_revenue": {
            "blocks": []
          },
          "core": {
            "blocks": [
              {
                "x": 458.391,
                "top": 319.01,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 272.169,
                "top": 427.083,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "核心业务",
                    "size": 39.062,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 273.472,
                "top": 481.771,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "品牌酒店、展示平台",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "体验活动及餐饮",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "调整后利润率 34%",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "viator": {
            "blocks": [
              {
                "x": 458.391,
                "top": 688.802,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +59%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 272.169,
                "top": 794.271,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "体验预订",
                    "size": 39.062,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 273.472,
                "top": 846.354,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "观光、活动及景点",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "调整后利润率 (1%)",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "thefork": {
            "blocks": [
              {
                "x": 458.391,
                "top": 1019.531,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +19%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 272.169,
                "top": 1082.031,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 39.062,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 273.472,
                "top": 1132.812,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 26.042,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "调整后利润率 (11%)",
                    "size": 26.042,
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
                "x": 1209.787,
                "top": 410.156,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.062,
                    "weight": 800,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "同比 +18%",
                    "size": 27.344,
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
                "x": 1571.811,
                "top": 320.312,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.062,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 92%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.344,
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
                "x": 1953.369,
                "top": 272.135,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.062,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 9%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (6 个百分点)",
                    "size": 27.344,
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
                "x": 2482.081,
                "top": 313.802,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.062,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.062,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 5%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.344,
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
                "x": 1199.369,
                "top": 1053.385,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.458,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1584.833,
                "top": 1005.208,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.458,
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
                "x": 1948.16,
                "top": 917.969,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "运营",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.458,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2483.383,
                "top": 562.5,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "税费",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.458,
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
                "x": 2488.592,
                "top": 723.958,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.458,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 55%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.344,
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
                "x": 2488.592,
                "top": 901.042,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "技术",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.458,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.344,
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
                "x": 2488.592,
                "top": 1070.312,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.458,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 10%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.344,
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
                "x": 2488.592,
                "top": 1235.677,
                "anchor": "middle",
                "lineGap": 9.115,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 36.458,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.458,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 4%",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.344,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<rect x=\"210.964\" y=\"1235.677\" width=\"401.092\" height=\"147.135\" rx=\"31.25\" fill=\"white\"/><text x=\"411.51\" y=\"1287.76\" text-anchor=\"middle\" fill=\"#20575d\" font-size=\"28.646\" font-weight=\"700\">Viator 总预订额</text><text data-operating-metric=\"viator_gross_bookings\" x=\"411.51\" y=\"1326.823\" text-anchor=\"middle\" fill=\"#20575d\" font-size=\"28.646\">$1.1B</text><text x=\"411.51\" y=\"1358.073\" text-anchor=\"middle\" fill=\"#20575d\" font-size=\"23.438\">同比 +40%</text>"
    }
  }
});
