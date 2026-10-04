(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "walmart-q2-fy24",
  "name": "Walmart · Q2 FY24",
  "company": "Walmart",
  "meta": {
    "company": "Walmart",
    "title": "Walmart Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "periodNote": "Ending July 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/walmart-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "periodX": 2383.1103515625,
    "periodY": 253.93798828125,
    "periodNoteY": 298.21435546875
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#15527a",
    "subtitleColor": "#777777",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#0071ce",
        "label": "#777777"
      },
      "hub": {
        "node": "#0071ce",
        "label": "#0071ce"
      },
      "profit": {
        "node": "#29a12a",
        "label": "#009852"
      },
      "cost": {
        "node": "#d50000",
        "label": "#9d1600"
      }
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 10.41796875
    }
  },
  "layout": {
    "nodes": {
      "walmart_us": {
        "x": 395.8828125,
        "y": 497.4580078125,
        "width": 72.92578125,
        "height": 315.1435546875
      },
      "walmart_international": {
        "x": 395.8828125,
        "y": 949.33740234375,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "sams_club": {
        "x": 395.8828125,
        "y": 1153.7900390625,
        "width": 72.92578125,
        "height": 62.5078125
      },
      "net_sales": {
        "x": 769.62744140625,
        "y": 612.0556640625,
        "width": 72.92578125,
        "height": 455.7861328125
      },
      "membership": {
        "x": 774.83642578125,
        "y": 1311.36181640625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "revenue": {
        "x": 1143.3720703125,
        "y": 642.00732421875,
        "width": 72.92578125,
        "height": 459.69287109375
      },
      "gross_profit": {
        "x": 1511.90771484375,
        "y": 570.3837890625,
        "width": 72.92578125,
        "height": 113.29541015625
      },
      "cost_of_sales": {
        "x": 1514.51220703125,
        "y": 823.01953125,
        "width": 72.92578125,
        "height": 346.3974609375
      },
      "operating_profit": {
        "x": 1884.35009765625,
        "y": 490.94677734375,
        "width": 72.92578125,
        "height": 20.8359375
      },
      "operating_expenses": {
        "x": 1885.65234375,
        "y": 675.86572265625,
        "width": 72.92578125,
        "height": 92.45947265625
      },
      "net_profit": {
        "x": 2264.60595703125,
        "y": 377.6513671875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "tax": {
        "x": 2264.60595703125,
        "y": 660.23876953125,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "other": {
        "x": 2151.310546875,
        "y": 454.48388671875,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "interest": {
        "x": 2264.60595703125,
        "y": 820.4150390625,
        "width": 72.92578125,
        "height": 2.6044921875
      }
    },
    "labels": {
      "net_sales": {
        "blocks": [
          {
            "x": 806.09033203125,
            "top": 459.69287109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net Sales",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#0071ce"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0071ce"
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
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
            "x": 1179.8349609375,
            "top": 489.64453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#0071ce"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0071ce"
              },
              {
                "text": "+6% Y/Y",
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
            "x": 1548.37060546875,
            "top": 380.255859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#009852"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#009852"
              },
              {
                "text": "25% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0.4pp Y/Y",
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
            "x": 1920.81298828125,
            "top": 296.912109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#009852"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#009852"
              },
              {
                "text": "5% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0.1pp Y/Y",
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
            "x": 2461.2451171875,
            "top": 335.9794921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#009852"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#009852"
              },
              {
                "text": "5% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1.6pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "membership": {
        "blocks": [
          {
            "x": 807.392578125,
            "top": 1161.603515625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Membership",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#606060"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#ff852d"
              },
              {
                "text": "(9%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2187.7734375,
            "top": 475.31982421875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#009000"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#009000"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1549.6728515625,
            "top": 1182.439453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#9d1600"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1922.115234375,
            "top": 778.7431640625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#9d1600"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 625.078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#9d1600"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 782.64990234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Interest",
                "size": 31.25390625,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#9d1600"
              }
            ]
          }
        ]
      },
      "walmart_us": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 397.18505859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0071ce"
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 223.986328125,
            "top": 625.078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Walmart US",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#606060"
              },
              {
                "text": "6% operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "walmart_international": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 850.36669921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#ffc220"
              },
              {
                "text": "+13% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 223.986328125,
            "top": 925.89697265625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Walmart",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#606060"
              },
              {
                "text": "International",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#606060"
              },
              {
                "text": "4% operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sams_club": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 1054.8193359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0084bd"
              },
              {
                "text": "(0%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 223.986328125,
            "top": 1174.6259765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "2% operating margin",
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
      "id": "walmart_us",
      "label": "Walmart US",
      "value": 110.9,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+5% Y/Y",
        "6% operating margin"
      ],
      "color": "#0071ce",
      "labelColor": "#777777",
      "linkTint": "#85b7dd",
      "valueText": "$110.9B"
    },
    {
      "id": "walmart_international",
      "label": "Walmart International",
      "value": 27.6,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+13% Y/Y",
        "4% operating margin"
      ],
      "color": "#ffc220",
      "labelColor": "#777777",
      "linkTint": "#f6dc92",
      "valueText": "$27.6B"
    },
    {
      "id": "sams_club",
      "label": "Sam's Club",
      "value": 21.8,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(0%) Y/Y",
        "2% operating margin"
      ],
      "color": "#0084bd",
      "labelColor": "#777777",
      "linkTint": "#83bfd8",
      "valueText": "$21.8B"
    },
    {
      "id": "net_sales",
      "label": "Net Sales",
      "value": 160.3,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#0071ce",
      "labelColor": "#0071ce",
      "linkTint": "#85b7dd",
      "valueText": "$160.3B"
    },
    {
      "id": "membership",
      "label": "Membership",
      "value": 1.4,
      "type": "source",
      "col": 1,
      "order": 1,
      "notes": [
        "(9%) Y/Y"
      ],
      "color": "#ff852d",
      "labelColor": "#777777",
      "linkTint": "#ffc397",
      "valueText": "$1.4B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 161.6,
      "type": "hub",
      "col": 2,
      "order": 0,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#0071ce",
      "labelColor": "#0071ce",
      "linkTint": "#85b7dd",
      "valueText": "$161.6B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 39.8,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "25% margin",
        "+0.4pp Y/Y"
      ],
      "color": "#29a12a",
      "labelColor": "#009852",
      "linkTint": "#99cd99",
      "valueText": "$39.8B"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 121.9,
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($121.9B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 7.4,
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": [
        "5% margin",
        "+0.1pp Y/Y"
      ],
      "color": "#29a12a",
      "labelColor": "#009852",
      "linkTint": "#99cd99",
      "valueText": "$7.4B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 32.5,
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($32.5B)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 8.1,
      "type": "profit",
      "col": 5,
      "order": 0,
      "notes": [
        "5% margin",
        "+1.6pp Y/Y"
      ],
      "color": "#29a12a",
      "labelColor": "#009852",
      "linkTint": "#99cd99",
      "valueText": "$8.1B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 2.7,
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($2.7B)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 3.9,
      "type": "profit",
      "col": 4,
      "order": 2,
      "notes": [],
      "color": "#29a12a",
      "labelColor": "#009000",
      "linkTint": "#99cd99",
      "valueText": "$3.9B"
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 0.5,
      "type": "cost",
      "col": 5,
      "order": 3,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($0.5B)"
    }
  ],
  "links": [
    {
      "source": "walmart_us",
      "target": "net_sales",
      "value": 110.9,
      "sourceWidth": 315.1435546875,
      "targetWidth": 315.1435546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#85b7dd",
        "right": "#85b7dd"
      }
    },
    {
      "source": "walmart_international",
      "target": "net_sales",
      "value": 27.6,
      "sourceWidth": 78.134765625,
      "targetWidth": 78.134765625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": {
        "left": "#f6dc92",
        "right": "#f6dc92"
      }
    },
    {
      "source": "sams_club",
      "target": "net_sales",
      "value": 21.8,
      "sourceWidth": 62.5078125,
      "targetWidth": 62.5078125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": {
        "left": "#83bfd8",
        "right": "#83bfd8"
      }
    },
    {
      "source": "net_sales",
      "target": "revenue",
      "value": 160.3,
      "sourceWidth": 455.7861328125,
      "targetWidth": 455.7861328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#85b7dd",
        "right": "#85b7dd"
      }
    },
    {
      "source": "membership",
      "target": "revenue",
      "value": 1.4,
      "sourceWidth": 2.6044921875,
      "targetWidth": 3.90673828125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": {
        "left": "#ffc397",
        "right": "#ffc397"
      }
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 39.8,
      "sourceWidth": 113.29541015625,
      "targetWidth": 113.29541015625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#99cd99",
        "right": "#99cd99"
      }
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 121.9,
      "sourceWidth": 346.3974609375,
      "targetWidth": 346.3974609375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": {
        "left": "#df8585",
        "right": "#df8585"
      }
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 7.4,
      "sourceWidth": 20.8359375,
      "targetWidth": 20.8359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#99cd99",
        "right": "#99cd99"
      }
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 32.5,
      "sourceWidth": 92.45947265625,
      "targetWidth": 92.45947265625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": {
        "left": "#df8585",
        "right": "#df8585"
      }
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 4.2,
      "sourceWidth": 10.41796875,
      "targetWidth": 13.0224609375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#99cd99",
        "right": "#99cd99"
      }
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 2.7,
      "sourceWidth": 7.8134765625,
      "targetWidth": 7.8134765625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": {
        "left": "#df8585",
        "right": "#df8585"
      }
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.5,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": {
        "left": "#df8585",
        "right": "#df8585"
      }
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 3.9,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": {
        "left": "#99cd99",
        "right": "#99cd99"
      }
    }
  ],
  "operatingMetrics": [
    {
      "id": "us_comp_sales",
      "value": "6.4",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+6.4%"
    },
    {
      "id": "ecommerce",
      "value": "24",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+24%"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\" transform=\"translate(462 196) scale(0.77)\">\n    <g>\n      <text x=\"0\" y=\"104\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"104\" font-weight=\"800\" fill=\"#0071ce\"\n        textLength=\"430\" lengthAdjust=\"spacingAndGlyphs\">Walmart</text>\n      <g transform=\"translate(490 62)\" fill=\"#ffc220\">\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"11\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(60)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(120)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(240)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(300)\"/>\n      </g>\n    </g>\n  </g><g data-typography-role=\"brand\" transform=\"translate(72 856) scale(0.77)\">\n    <g>\n      <text x=\"0\" y=\"51\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"50\" font-weight=\"800\" fill=\"#0067a0\"\n        textLength=\"205\" lengthAdjust=\"spacingAndGlyphs\">sam's club</text>\n      <g transform=\"translate(225 4) scale(0.78)\">\n        <path d=\"M31 0L62 31L31 62L20 51L40 31L20 11Z\" fill=\"#0067a0\"/>\n        <path d=\"M31 0L0 31L31 62L42 51L22 31L42 11Z\" fill=\"#0086c8\"/>\n      </g>\n    </g>\n  </g><rect x=\"26\" y=\"948\" width=\"210\" height=\"114\" rx=\"24\" fill=\"#0071ce\"/><text x=\"131\" y=\"1003\" font-size=\"21\" font-weight=\"700\" fill=\"white\" text-anchor=\"middle\">US comp sales</text><text x=\"111\" y=\"1030\" font-size=\"18\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"us_comp_sales\">+6.4%</text><text x=\"166\" y=\"1030\" font-size=\"18\" fill=\"white\" text-anchor=\"middle\">Y/Y</text><rect x=\"250\" y=\"948\" width=\"210\" height=\"114\" rx=\"24\" fill=\"#0071ce\"/><text x=\"355\" y=\"1003\" font-size=\"21\" font-weight=\"700\" fill=\"white\" text-anchor=\"middle\">E-commerce</text><text x=\"335\" y=\"1030\" font-size=\"18\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"ecommerce\">+24%</text><text x=\"390\" y=\"1030\" font-size=\"18\" fill=\"white\" text-anchor=\"middle\">Y/Y</text><text x=\"130\" y=\"1103\" font-size=\"30\" font-weight=\"700\" fill=\"black\">Source: Quarterly results</text></g></g>",
  "i18n": {
    "preservedAnnotationText": [
      "Sam's Club"
    ],
    "zh": {
      "name": "沃尔玛 · 2024 财年第二季度",
      "meta": {
        "title": "沃尔玛 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "periodNote": "截至 2023 年 7 月"
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><g font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\" transform=\"translate(462 196) scale(0.77)\">\n    <g>\n      <text x=\"0\" y=\"104\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"104\" font-weight=\"800\" fill=\"#0071ce\"\n        textLength=\"430\" lengthAdjust=\"spacingAndGlyphs\">Walmart</text>\n      <g transform=\"translate(490 62)\" fill=\"#ffc220\">\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"11\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(60)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(120)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(240)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(300)\"/>\n      </g>\n    </g>\n  </g><g data-typography-role=\"brand\" transform=\"translate(72 856) scale(0.77)\">\n    <g>\n      <text x=\"0\" y=\"51\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"50\" font-weight=\"800\" fill=\"#0067a0\"\n        textLength=\"205\" lengthAdjust=\"spacingAndGlyphs\">sam's club</text>\n      <g transform=\"translate(225 4) scale(0.78)\">\n        <path d=\"M31 0L62 31L31 62L20 51L40 31L20 11Z\" fill=\"#0067a0\"/>\n        <path d=\"M31 0L0 31L31 62L42 51L22 31L42 11Z\" fill=\"#0086c8\"/>\n      </g>\n    </g>\n  </g><rect x=\"26\" y=\"948\" width=\"210\" height=\"114\" rx=\"24\" fill=\"#0071ce\"/><text x=\"131\" y=\"1003\" font-size=\"21\" font-weight=\"700\" fill=\"white\" text-anchor=\"middle\">美国可比销售额</text><text x=\"111\" y=\"1030\" font-size=\"18\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"us_comp_sales\">+6.4%</text><text x=\"166\" y=\"1030\" font-size=\"18\" fill=\"white\" text-anchor=\"middle\">同比</text><rect x=\"250\" y=\"948\" width=\"210\" height=\"114\" rx=\"24\" fill=\"#0071ce\"/><text x=\"355\" y=\"1003\" font-size=\"21\" font-weight=\"700\" fill=\"white\" text-anchor=\"middle\">电商</text><text x=\"335\" y=\"1030\" font-size=\"18\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"ecommerce\">+24%</text><text x=\"390\" y=\"1030\" font-size=\"18\" fill=\"white\" text-anchor=\"middle\">同比</text><text x=\"130\" y=\"1103\" font-size=\"30\" font-weight=\"700\" fill=\"black\">来源：季度业绩</text></g></g>",
      "nodes": {
        "walmart_us": {
          "label": "沃尔玛美国",
          "notes": []
        },
        "walmart_international": {
          "label": "沃尔玛国际",
          "notes": []
        },
        "sams_club": {
          "label": "山姆会员店",
          "notes": []
        },
        "net_sales": {
          "label": "净销售额",
          "notes": []
        },
        "membership": {
          "label": "会员收入",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": []
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": []
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        }
      }
    }
  }
});})();
