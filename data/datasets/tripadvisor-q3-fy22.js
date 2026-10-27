window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "tripadvisor-q3-fy22",
  "name": "Tripadvisor · Q3 FY22",
  "company": "Tripadvisor",
  "meta": {
    "company": "Tripadvisor",
    "title": "Tripadvisor Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "periodNote": "Quarter ended Sep. 30, 2022",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/tripadvisor-q3-fy22.png",
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
    "noteColor": "#797979",
    "palette": {
      "source": {
        "node": "#2bd7a2",
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
        "node": "#d00000",
        "label": "#941100"
      }
    },
    "linkOpacity": 1,
    "type": {
      "name": 39,
      "value": 39,
      "note": 27,
      "lineGap": 8
    }
  },
  "rasterAnnotations": [
    {
      "key": "tripadvisor-company-logo",
      "href": "data/assets/raster-annotations/tripadvisor/company-logo.png",
      "x": 630.287109375,
      "y": 270.8671875,
      "width": 747.4892578125,
      "height": 158.8740234375
    },
    {
      "key": "tripadvisor-hotel-other-icon",
      "href": "data/assets/raster-annotations/tripadvisor/hotel-other-icon.png",
      "x": 67.716796875,
      "y": 489.64453125,
      "width": 110.69091796875,
      "height": 110.69091796875
    },
    {
      "key": "tripadvisor-experiences-icon",
      "href": "data/assets/raster-annotations/tripadvisor/experiences-icon.png",
      "x": 61.20556640625,
      "y": 821.71728515625,
      "width": 113.29541015625,
      "height": 113.29541015625
    },
    {
      "key": "tripadvisor-thefork-icon",
      "href": "data/assets/raster-annotations/tripadvisor/thefork-icon.png",
      "x": 62.5078125,
      "y": 1066.53955078125,
      "width": 110.69091796875,
      "height": 110.69091796875
    }
  ],
  "annotationsSvg": "<rect x=\"211\" y=\"1235\" width=\"401\" height=\"147\" rx=\"28\" fill=\"white\"/><text x=\"412\" y=\"1288\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#205b60\">Viator gross bookings</text><text data-operating-metric=\"viator_gross_bookings\" x=\"412\" y=\"1326\" text-anchor=\"middle\" font-size=\"27\" fill=\"#205b60\">$800M</text><text x=\"412\" y=\"1358\" text-anchor=\"middle\" font-size=\"21\" fill=\"#205b60\">+113% Y/Y</text><text x=\"171\" y=\"1435\" font-size=\"39\" font-weight=\"700\">Source: Quarterly results</text>",
  "operatingMetrics": [
    {
      "id": "viator_gross_bookings",
      "label": "Viator gross bookings",
      "value": "800",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$800M",
      "basis": "unspecified",
      "notes": [
        "+113% Y/Y"
      ],
      "quote": "Viator gross bookings\n$800M\n+113% Y/Y",
      "anchor": {
        "type": "image-box",
        "box": [
          211,
          1235,
          401,
          147
        ]
      }
    }
  ],
  "layout": {
    "scale": 0.776138671875,
    "nodes": {
      "core": {
        "x": 433.65,
        "y": 524.81,
        "width": 72.93,
        "height": 169.29
      },
      "viator": {
        "x": 433.65,
        "y": 845.16,
        "width": 72.93,
        "height": 104.18
      },
      "thefork": {
        "x": 433.65,
        "y": 1121.23,
        "width": 72.93,
        "height": 20.84
      },
      "gross_segment_revenue": {
        "x": 807.39,
        "y": 591.22,
        "width": 72.93,
        "height": 293.01
      },
      "revenue": {
        "x": 1181.14,
        "y": 617.26,
        "width": 72.93,
        "height": 273.47
      },
      "eliminations": {
        "x": 1175.93,
        "y": 983.2,
        "width": 72.93,
        "height": 20.84
      },
      "gross_profit": {
        "x": 1557.49,
        "y": 558.66,
        "width": 72.93,
        "height": 255.24
      },
      "cost_of_revenue": {
        "x": 1557.49,
        "y": 970.17,
        "width": 72.93,
        "height": 18.23
      },
      "operating_profit": {
        "x": 1931.23,
        "y": 479.23,
        "width": 72.93,
        "height": 41.67
      },
      "operating_expenses": {
        "x": 1931.23,
        "y": 707.12,
        "width": 72.93,
        "height": 212.27
      },
      "net_profit": {
        "x": 2302.37,
        "y": 418.02,
        "width": 72.93,
        "height": 14.84560546875
      },
      "tax": {
        "x": 2302.37,
        "y": 638.1,
        "width": 72.93,
        "height": 22.14
      },
      "other": {
        "x": 2302.37,
        "y": 740.98,
        "width": 72.93,
        "height": 4.69
      },
      "sm": {
        "x": 2302.37,
        "y": 826.93,
        "width": 72.93,
        "height": 139.34
      },
      "technology": {
        "x": 2302.37,
        "y": 1065.24,
        "width": 72.93,
        "height": 32.56
      },
      "ga": {
        "x": 2302.37,
        "y": 1213.69,
        "width": 72.93,
        "height": 26.7
      },
      "amortization": {
        "x": 2302.37,
        "y": 1341.31,
        "width": 72.93,
        "height": 13.67
      }
    },
    "labels": {
      "gross_segment_revenue": {
        "blocks": []
      },
      "core": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 429.7412109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+34% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 416.71875,
            "top": 524.80517578125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Core",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 416.71875,
            "top": 580.8017578125,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Branded hotels,",
                "size": 26.044921875,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "display & platform,",
                "size": 26.044921875,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "experiences & dining",
                "size": 26.044921875,
                "weight": 400,
                "color": "#797979"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "viator": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 750.09375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+138% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 416.71875,
            "top": 858.18017578125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Viator",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 416.71875,
            "top": 914.1767578125,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tours, activities",
                "size": 26.044921875,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "& attractions",
                "size": 26.044921875,
                "weight": 400,
                "color": "#797979"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "thefork": {
        "blocks": [
          {
            "x": 472.71533203125,
            "top": 1027.47216796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+17% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 416.71875,
            "top": 1097.79345703125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "TheFork",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 416.71875,
            "top": 1153.7900390625,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Restaurant",
                "size": 26.044921875,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "reservations",
                "size": 26.044921875,
                "weight": 400,
                "color": "#797979"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1212.39111328125,
            "top": 468.80859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+51% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1593.94921875,
            "top": 371.14013671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "93% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1966.3916015625,
            "top": 291.703125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "15% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "+5pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2499.01025390625,
            "top": 369.837890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "5% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              },
              {
                "text": "Unchanged",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#797979"
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1212.39111328125,
            "top": 1018.3564453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Eliminations",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1593.94921875,
            "top": 1005.333984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1966.3916015625,
            "top": 940.2216796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2484.685546875,
            "top": 610.75341796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2484.685546875,
            "top": 714.93310546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2484.685546875,
            "top": 859.482421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 2484.685546875,
            "top": 1048.30810546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Technology",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2484.685546875,
            "top": 1187.6484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "amortization": {
        "blocks": [
          {
            "x": 2484.685546875,
            "top": 1304.8505859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.95166015625,
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
      "id": "core",
      "label": "Core",
      "value": 284,
      "col": 0,
      "order": 0,
      "type": "source",
      "notes": [
        "+34% Y/Y",
        "Branded hotels, display & platform, experiences & dining"
      ]
    },
    {
      "id": "viator",
      "label": "Viator",
      "value": 174,
      "col": 0,
      "order": 1,
      "type": "source",
      "notes": [
        "+138% Y/Y",
        "Tours, activities & attractions"
      ]
    },
    {
      "id": "thefork",
      "label": "TheFork",
      "value": 35,
      "col": 0,
      "order": 2,
      "type": "source",
      "notes": [
        "+17% Y/Y",
        "Restaurant reservations"
      ]
    },
    {
      "id": "gross_segment_revenue",
      "label": "Revenue before eliminations",
      "value": 493,
      "col": 1,
      "order": 0,
      "type": "source"
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": 34,
      "col": 2,
      "order": 5,
      "type": "cost",
      "notes": []
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 459,
      "col": 2,
      "order": 4,
      "type": "hub",
      "notes": [
        "+51% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 427,
      "col": 3,
      "order": 6,
      "type": "profit",
      "notes": [
        "93% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 32,
      "col": 3,
      "order": 7,
      "type": "cost",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 70,
      "col": 4,
      "order": 8,
      "type": "profit",
      "notes": [
        "15% margin",
        "+5pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 357,
      "col": 4,
      "order": 9,
      "type": "cost",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 25,
      "col": 5,
      "order": 10,
      "type": "profit",
      "notes": [
        "5% margin",
        "Unchanged"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 37,
      "col": 5,
      "order": 11,
      "type": "cost",
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 8,
      "col": 5,
      "order": 12,
      "type": "cost",
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 234,
      "col": 5,
      "order": 13,
      "type": "cost",
      "notes": []
    },
    {
      "id": "technology",
      "label": "Technology",
      "value": 55,
      "col": 5,
      "order": 14,
      "type": "cost",
      "notes": []
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 45,
      "col": 5,
      "order": 15,
      "type": "cost",
      "notes": []
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 23,
      "col": 5,
      "order": 16,
      "type": "cost",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "core",
      "target": "gross_segment_revenue",
      "value": 284,
      "sourceWidth": 169.2919921875,
      "targetWidth": 169.2919921875,
      "y0": 609.451171875,
      "y1": 675.86572265625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "viator",
      "target": "gross_segment_revenue",
      "value": 174,
      "sourceWidth": 104.1796875,
      "targetWidth": 104.1796875,
      "y0": 897.24755859375,
      "y1": 812.6015625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "thefork",
      "target": "gross_segment_revenue",
      "value": 35,
      "sourceWidth": 20.8359375,
      "targetWidth": 19.53369140625,
      "y0": 1131.65185546875,
      "y1": 874.458251953125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "gross_segment_revenue",
      "target": "revenue",
      "value": 459,
      "sourceWidth": 272.16943359375,
      "targetWidth": 273.4716796875,
      "y0": 727.304443359375,
      "y1": 754.00048828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "gross_segment_revenue",
      "target": "eliminations",
      "value": 34,
      "sourceWidth": 20.8359375,
      "targetWidth": 20.8359375,
      "y0": 873.80712890625,
      "y1": 993.61376953125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 427,
      "sourceWidth": 255.240234375,
      "targetWidth": 255.240234375,
      "y0": 744.884765625,
      "y1": 686.28369140625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cb93"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 32,
      "sourceWidth": 18.2314453125,
      "targetWidth": 18.2314453125,
      "y0": 881.62060546875,
      "y1": 979.2890625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 70,
      "sourceWidth": 41.671875,
      "targetWidth": 41.671875,
      "y0": 579.49951171875,
      "y1": 500.0625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cb93"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 357,
      "sourceWidth": 213.568359375,
      "targetWidth": 212.26611328125,
      "y0": 707.11962890625,
      "y1": 813.252685546875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 25,
      "sourceWidth": 14.84560546875,
      "targetWidth": 14.84560546875,
      "y0": 486.649365234375,
      "y1": 425.443798828125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cb93"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 37,
      "sourceWidth": 22.007958984374998,
      "targetWidth": 22.007958984374998,
      "y0": 505.0761474609375,
      "y1": 649.1045654296875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 8,
      "sourceWidth": 4.818310546875,
      "targetWidth": 4.6880859375,
      "y0": 518.4892822265625,
      "y1": 743.3220703124999,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 234,
      "sourceWidth": 139.34033203125,
      "targetWidth": 139.34033203125,
      "y0": 776.789794921875,
      "y1": 896.596435546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "technology",
      "value": 55,
      "sourceWidth": 32.686376953125,
      "targetWidth": 32.55615234375,
      "y0": 862.8031494140624,
      "y1": 1081.515380859375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 45,
      "sourceWidth": 26.696044921875,
      "targetWidth": 26.696044921875,
      "y0": 892.4943603515625,
      "y1": 1227.0413818359375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 23,
      "sourceWidth": 13.673583984375,
      "targetWidth": 13.673583984375,
      "y0": 912.6791748046875,
      "y1": 1348.1502685546875,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e18484"
    }
  ],
  "i18n": {
    "zh": {
      "name": "猫途鹰 · 2022 财年第三季度",
      "meta": {
        "title": "猫途鹰 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "periodNote": "截至 2022 年 9 月 30 日的季度",
        "titleTextLength": 2120
      },
      "nodes": {
        "core": {
          "label": "核心业务",
          "notes": [
            "同比 +34%",
            "品牌酒店、展示与平台、体验活动及餐饮"
          ]
        },
        "viator": {
          "label": "Viator（体验预订）",
          "notes": [
            "同比 +138%",
            "观光、活动及景点"
          ]
        },
        "thefork": {
          "label": "TheFork（餐厅预订）",
          "notes": [
            "同比 +17%",
            "餐厅预订"
          ]
        },
        "gross_segment_revenue": {
          "label": "抵销前公司收入",
          "notes": []
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +51%"
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
            "利润率 15%",
            "同比 +5 个百分点"
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
            "未变"
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
          "label": "销售与营销",
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
                "x": 472.71533203125,
                "top": 429.7412109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +34%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 416.71875,
                "top": 524.80517578125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "核心业务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 416.71875,
                "top": 580.8017578125,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "品牌酒店、",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "展示与平台、",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "体验活动及餐饮",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "viator": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 750.09375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +138%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 416.71875,
                "top": 858.18017578125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "体验业务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 416.71875,
                "top": 914.1767578125,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "观光、活动",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "及景点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "thefork": {
            "blocks": [
              {
                "x": 472.71533203125,
                "top": 1027.47216796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +17%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 416.71875,
                "top": 1097.79345703125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 416.71875,
                "top": 1153.7900390625,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "餐厅",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "预订",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1212.39111328125,
                "top": 468.80859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +51%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1593.94921875,
                "top": 371.14013671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 93%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1966.3916015625,
                "top": 291.703125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2499.01025390625,
                "top": 369.837890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "利润率 5%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  },
                  {
                    "text": "未变",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#797979"
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1212.39111328125,
                "top": 1018.3564453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1593.94921875,
                "top": 1005.333984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1966.3916015625,
                "top": 940.2216796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2484.685546875,
                "top": 610.75341796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2484.685546875,
                "top": 714.93310546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2484.685546875,
                "top": 859.482421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与营销",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 2484.685546875,
                "top": 1048.30810546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "技术",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2484.685546875,
                "top": 1187.6484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "amortization": {
            "blocks": [
              {
                "x": 2484.685546875,
                "top": 1304.8505859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<rect x=\"211\" y=\"1235\" width=\"401\" height=\"147\" rx=\"28\" fill=\"white\"/><text x=\"412\" y=\"1288\" text-anchor=\"middle\" font-size=\"28\" font-weight=\"700\" fill=\"#205b60\">Viator 总预订额</text><text data-operating-metric=\"viator_gross_bookings\" x=\"412\" y=\"1326\" text-anchor=\"middle\" font-size=\"27\" fill=\"#205b60\">$800M</text><text x=\"412\" y=\"1358\" text-anchor=\"middle\" font-size=\"21\" fill=\"#205b60\">同比 +113%</text><text x=\"171\" y=\"1435\" font-size=\"39\" font-weight=\"700\">来源：季度业绩</text>"
    }
  }
});
