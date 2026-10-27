window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "tripadvisor-q2-fy24",
  "name": "Tripadvisor · Q2 FY24",
  "company": "Tripadvisor",
  "meta": {
    "company": "Tripadvisor",
    "title": "Tripadvisor Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Quarter ended Jun. 30, 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/tripadvisor-q2-fy24.png",
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
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#2ddaa0",
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
      "name": 40,
      "value": 39,
      "note": 27,
      "lineGap": 9
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/tripadvisor/company-logo.png",
      "x": 604.24,
      "y": 321.65,
      "width": 748.79,
      "height": 160.18
    },
    {
      "key": "tripadvisor-icon",
      "href": "data/assets/raster-annotations/tripadvisor/hotel-other-icon.png",
      "x": 22.14,
      "y": 440.16,
      "width": 111.99,
      "height": 109.39
    },
    {
      "key": "viator-icon",
      "href": "data/assets/raster-annotations/tripadvisor/experiences-icon.png",
      "x": 16.93,
      "y": 773.53,
      "width": 111.99,
      "height": 109.39
    },
    {
      "key": "thefork-icon",
      "href": "data/assets/raster-annotations/tripadvisor/thefork-icon.png",
      "x": 16.93,
      "y": 1076.96,
      "width": 111.99,
      "height": 110.69
    }
  ],
  "layout": {
    "scale": 0.635,
    "nodes": {
      "tripadvisor": {
        "x": 386.77,
        "y": 475.32,
        "width": 72.93,
        "height": 158.87
      },
      "viator": {
        "x": 386.77,
        "y": 802.18,
        "width": 72.93,
        "height": 154.97
      },
      "thefork": {
        "x": 386.77,
        "y": 1125.14,
        "width": 72.93,
        "height": 26.04
      },
      "gross_segment_revenue": {
        "x": 760.51,
        "y": 579.5,
        "width": 72.93,
        "height": 339.89
      },
      "revenue": {
        "x": 1136.86,
        "y": 666.75,
        "width": 72.93,
        "height": 315.14
      },
      "eliminations": {
        "x": 1136.86,
        "y": 1099.1,
        "width": 72.93,
        "height": 24.74
      },
      "gross_profit": {
        "x": 1513.21,
        "y": 579.5,
        "width": 72.93,
        "height": 283.89
      },
      "cost_of_revenue": {
        "x": 1513.21,
        "y": 1044.4,
        "width": 72.93,
        "height": 28.65
      },
      "operating_profit": {
        "x": 1879.14,
        "y": 487.04,
        "width": 72.93,
        "height": 22.14
      },
      "operating_expenses": {
        "x": 1879.14,
        "y": 670.66,
        "width": 72.93,
        "height": 261.75
      },
      "net_profit": {
        "x": 2255.49,
        "y": 389.37,
        "width": 72.93,
        "height": 14.32
      },
      "tax": {
        "x": 2255.49,
        "y": 599.03,
        "width": 72.93,
        "height": 9.12
      },
      "other": {
        "x": 2134.38,
        "y": 462.95,
        "width": 72.93,
        "height": 1.3
      },
      "sm": {
        "x": 2255.49,
        "y": 725.35,
        "width": 72.93,
        "height": 166.69
      },
      "technology": {
        "x": 2255.49,
        "y": 963.66,
        "width": 72.93,
        "height": 46.88
      },
      "ga": {
        "x": 2255.49,
        "y": 1096.49,
        "width": 72.93,
        "height": 35.16
      },
      "amortization": {
        "x": 2255.49,
        "y": 1221.51,
        "width": 72.93,
        "height": 13.02
      }
    },
    "labels": {
      "gross_segment_revenue": {
        "blocks": []
      },
      "tripadvisor": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 372.0693359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "(10%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 358.11767578125,
            "top": 477.92431640625,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tripadvisor",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 358.11767578125,
            "top": 532.61865234375,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Branded hotels,",
                "size": 27.34716796875,
                "weight": 400
              },
              {
                "text": "display & platform,",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "experiences & dining",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "34% adjusted margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "viator": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 711.0263671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 358.11767578125,
            "top": 815.2060546875,
            "anchor": "end",
            "lineGap": 10.41796875,
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
            "x": 358.11767578125,
            "top": 869.900390625,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tours, activities",
                "size": 27.34716796875,
                "weight": 400
              },
              {
                "text": "& attractions",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "4% adjusted margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "thefork": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 1033.9833984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 358.11767578125,
            "top": 1114.72265625,
            "anchor": "end",
            "lineGap": 10.41796875,
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
            "x": 358.11767578125,
            "top": 1169.4169921875,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Restaurant",
                "size": 27.34716796875,
                "weight": 400
              },
              {
                "text": "reservations",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "7% adjusted margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1174.6259765625,
            "top": 520.8984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "+1% Y/Y",
                "size": 27.34716796875,
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
            "x": 1549.6728515625,
            "top": 397.18505859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "91% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 1915.60400390625,
            "top": 309.9345703125,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "text": "7% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2466.4541015625,
            "top": 338.583984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
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
            "x": 1174.6259765625,
            "top": 1144.67431640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
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
            "x": 1549.6728515625,
            "top": 1093.88671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
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
            "x": 1915.60400390625,
            "top": 951.94189453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
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
            "x": 2467.75634765625,
            "top": 567.779296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
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
      "other": {
        "blocks": [
          {
            "x": 2172.146484375,
            "top": 481.8310546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
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
      "sm": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 754.00048828125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M ($263M)",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "53% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2492.4990234375,
            "top": 925.89697265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Technology ($75M)",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "15% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2492.4990234375,
            "top": 1080.8642578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A ($56M)",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "11% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34716796875,
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
            "x": 2492.4990234375,
            "top": 1212.39111328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Amortization ($21M)",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "4% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34716796875,
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
      "id": "tripadvisor",
      "label": "Tripadvisor",
      "value": 250,
      "type": "source",
      "col": 0,
      "order": 0,
      "valueText": "$250M",
      "notes": [
        "(10%) Y/Y",
        "Branded hotels, display & platform, experiences & dining",
        "34% adjusted margin"
      ]
    },
    {
      "id": "viator",
      "label": "Viator",
      "value": 244,
      "type": "source",
      "col": 0,
      "order": 1,
      "valueText": "$244M",
      "notes": [
        "+13% Y/Y",
        "Tours, activities & attractions",
        "4% adjusted margin"
      ]
    },
    {
      "id": "thefork",
      "label": "TheFork",
      "value": 42,
      "type": "source",
      "col": 0,
      "order": 2,
      "valueText": "$42M",
      "notes": [
        "+11% Y/Y",
        "Restaurant reservations",
        "7% adjusted margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 497,
      "type": "hub",
      "col": 2,
      "order": 4,
      "valueText": "$497M",
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": -39,
      "type": "cost",
      "col": 2,
      "order": 5,
      "valueText": "($39M)"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 451,
      "type": "profit",
      "col": 3,
      "order": 6,
      "valueText": "$451M",
      "notes": [
        "91% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 46,
      "type": "cost",
      "col": 3,
      "order": 7,
      "valueText": "($46M)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 36,
      "type": "profit",
      "col": 4,
      "order": 8,
      "valueText": "$36M",
      "notes": [
        "7% margin",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 415,
      "type": "cost",
      "col": 4,
      "order": 9,
      "valueText": "($415M)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 24,
      "type": "profit",
      "col": 6,
      "order": 10,
      "valueText": "$24M",
      "notes": [
        "5% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 14,
      "type": "cost",
      "col": 6,
      "order": 11,
      "valueText": "($14M)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 2,
      "type": "profit",
      "col": 5,
      "order": 12,
      "valueText": "$2M"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 263,
      "type": "cost",
      "col": 6,
      "order": 13,
      "valueText": "($263M)",
      "notes": [
        "53% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "technology",
      "label": "Technology",
      "value": 75,
      "type": "cost",
      "col": 6,
      "order": 14,
      "valueText": "($75M)",
      "notes": [
        "15% of revenue",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 56,
      "type": "cost",
      "col": 6,
      "order": 15,
      "valueText": "($56M)",
      "notes": [
        "11% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 21,
      "type": "cost",
      "col": 6,
      "order": 16,
      "valueText": "($21M)",
      "notes": [
        "4% of revenue",
        "(0pp) Y/Y"
      ]
    },
    {
      "id": "gross_segment_revenue",
      "label": "Company revenue before eliminations",
      "value": 536,
      "type": "source",
      "col": 1,
      "order": 0
    }
  ],
  "links": [
    {
      "source": "tripadvisor",
      "target": "gross_segment_revenue",
      "value": 250,
      "y0": 554.7568359375,
      "y1": 658.9365234375,
      "sourceWidth": 158.8740234375,
      "targetWidth": 158.8740234375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "viator",
      "target": "gross_segment_revenue",
      "value": 244,
      "y0": 879.667236328125,
      "y1": 815.857177734375,
      "sourceWidth": 154.96728515625,
      "targetWidth": 154.96728515625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "thefork",
      "target": "gross_segment_revenue",
      "value": 42,
      "y0": 1138.1630859375,
      "y1": 906.36328125,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "gross_segment_revenue",
      "target": "revenue",
      "value": 497,
      "y0": 737.0712890625,
      "y1": 824.32177734375,
      "sourceWidth": 315.1435546875,
      "targetWidth": 315.1435546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9ee6cf"
    },
    {
      "source": "gross_segment_revenue",
      "target": "eliminations",
      "value": 39,
      "y0": 907.014404296875,
      "y1": 1111.467041015625,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 451,
      "y0": 809.9970703125,
      "y1": 721.4443359375,
      "sourceWidth": 286.494140625,
      "targetWidth": 283.8896484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cb93"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 46,
      "y0": 967.56884765625,
      "y1": 1058.72607421875,
      "sourceWidth": 28.6494140625,
      "targetWidth": 28.6494140625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 36,
      "y0": 590.568603515625,
      "y1": 498.109130859375,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cb93"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 415,
      "y0": 732.513427734375,
      "y1": 801.532470703125,
      "sourceWidth": 261.75146484375,
      "targetWidth": 261.75146484375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 22,
      "y0": 494.202392578125,
      "y1": 395.8828125,
      "sourceWidth": 14.32470703125,
      "targetWidth": 13.0224609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cb93"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 14,
      "y0": 505.271484375,
      "y1": 603.591064453125,
      "sourceWidth": 7.8134765625,
      "targetWidth": 9.11572265625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 2,
      "y0": 463.599609375,
      "y1": 403.045166015625,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#98cb93"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 263,
      "y0": 754.00048828125,
      "y1": 808.69482421875,
      "sourceWidth": 166.6875,
      "targetWidth": 166.6875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "technology",
      "value": 75,
      "y0": 860.78466796875,
      "y1": 987.1025390625,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 56,
      "y0": 901.805419921875,
      "y1": 1114.071533203125,
      "sourceWidth": 35.16064453125,
      "targetWidth": 35.16064453125,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e18484"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 21,
      "y0": 925.89697265625,
      "y1": 1228.01806640625,
      "sourceWidth": 13.0224609375,
      "targetWidth": 13.0224609375,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e18484"
    }
  ],
  "i18n": {
    "zh": {
      "name": "猫途鹰 · 2024 财年第二季度",
      "meta": {
        "title": "猫途鹰 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2024 年 6 月 30 日的季度",
        "titleTextLength": 2120
      },
      "nodes": {
        "tripadvisor": {
          "label": "猫途鹰",
          "notes": [
            "同比 (10%)",
            "品牌酒店、展示及平台、体验活动与餐饮",
            "调整后利润率 34%"
          ]
        },
        "viator": {
          "label": "体验业务",
          "notes": [
            "同比 +13%",
            "观光、活动及景点",
            "调整后利润率 4%"
          ]
        },
        "thefork": {
          "label": "餐厅预订",
          "notes": [
            "同比 +11%",
            "餐厅预订",
            "调整后利润率 7%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "eliminations": {
          "label": "抵销"
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 91%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": [
            "收入",
            "成本"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 7%",
            "同比 (2 个百分点)"
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
            "利润率 5%",
            "同比 +0 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "other": {
          "label": "其他"
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 53%",
            "同比 (2 个百分点)"
          ]
        },
        "technology": {
          "label": "技术",
          "notes": [
            "占收入 15%",
            "同比 +1 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 11%",
            "同比 +2 个百分点"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 4%",
            "同比 (0 个百分点)"
          ]
        },
        "gross_segment_revenue": {
          "label": "抵销前公司收入"
        }
      },
      "layout": {
        "labels": {
          "gross_segment_revenue": {
            "blocks": []
          },
          "tripadvisor": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 372.0693359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 (10%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 358.11767578125,
                "top": 477.92431640625,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "猫途鹰",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 358.11767578125,
                "top": 532.61865234375,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "品牌酒店、",
                    "size": 27.34716796875,
                    "weight": 400
                  },
                  {
                    "text": "展示及平台、",
                    "size": 27.34716796875,
                    "weight": 400
                  },
                  {
                    "text": "体验活动与餐饮",
                    "size": 27.34716796875,
                    "weight": 400
                  },
                  {
                    "text": "调整后利润率 34%",
                    "size": 27.34716796875,
                    "weight": 400
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "viator": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 711.0263671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +13%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 358.11767578125,
                "top": 815.2060546875,
                "anchor": "end",
                "lineGap": 10.41796875,
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
                "x": 358.11767578125,
                "top": 869.900390625,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "观光、活动及景点",
                    "size": 27.34716796875,
                    "weight": 400
                  },
                  {
                    "text": "调整后利润率 4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "thefork": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 1033.9833984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 358.11767578125,
                "top": 1114.72265625,
                "anchor": "end",
                "lineGap": 10.41796875,
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
                "x": 358.11767578125,
                "top": 1169.4169921875,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 27.34716796875,
                    "weight": 400
                  },
                  {
                    "text": "调整后利润率 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1174.6259765625,
                "top": 520.8984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "同比 +1%",
                    "size": 27.34716796875,
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
                "x": 1549.6728515625,
                "top": 397.18505859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "利润率 91%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
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
                "x": 1915.60400390625,
                "top": 309.9345703125,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "text": "利润率 7%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2466.4541015625,
                "top": 338.583984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
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
                "x": 1174.6259765625,
                "top": 1144.67431640625,
                "anchor": "middle",
                "lineGap": 10.41796875,
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
                "x": 1549.6728515625,
                "top": 1093.88671875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
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
                "x": 1915.60400390625,
                "top": 951.94189453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
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
                "x": 2467.75634765625,
                "top": 567.779296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
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
          "other": {
            "blocks": [
              {
                "x": 2172.146484375,
                "top": 481.8310546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
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
          "sm": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 754.00048828125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与营销 ($263M)",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 53%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2492.4990234375,
                "top": 925.89697265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "技术 ($75M)",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 15%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
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
                "x": 2492.4990234375,
                "top": 1080.8642578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用 ($56M)",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 11%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34716796875,
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
                "x": 2492.4990234375,
                "top": 1212.39111328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "摊销 ($21M)",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "占收入 4%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"170\" y=\"1436\" font-size=\"40\" font-weight=\"700\" fill=\"#000000\">来源：季度业绩</text>"
    }
  },
  "annotationsSvg": "<text x=\"170\" y=\"1436\" font-size=\"40\" font-weight=\"700\" fill=\"#000000\">Source: Quarterly results</text>"
});
