(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "walmart-q4-fy25",
  "name": "Walmart · Q4 FY25",
  "company": "Walmart",
  "meta": {
    "company": "Walmart",
    "title": "Walmart Q4 FY25 Income Statement",
    "period": "Q4 FY25",
    "periodNote": "Ending Jan. 2025",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/walmart-q4-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 122.4111328125,
    "titleWeight": 800,
    "titleTextLength": 2275.02392578125,
    "periodX": 2461.2451171875,
    "periodY": 1221.5068359375,
    "periodNoteY": 1265.783203125
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
      "name": 39.0673828125,
      "value": 39.0673828125,
      "note": 27.34716796875,
      "lineGap": 11.72021484375
    }
  },
  "layout": {
    "nodes": {
      "walmart_us": {
        "x": 398.4873046875,
        "y": 477.92431640625,
        "width": 72.92578125,
        "height": 266.96044921875
      },
      "walmart_international": {
        "x": 398.4873046875,
        "y": 879.01611328125,
        "width": 72.92578125,
        "height": 70.3212890625
      },
      "sams_club": {
        "x": 398.4873046875,
        "y": 1074.35302734375,
        "width": 72.92578125,
        "height": 50.78759765625
      },
      "net_sales": {
        "x": 774.83642578125,
        "y": 565.1748046875,
        "width": 72.92578125,
        "height": 386.76708984375
      },
      "membership": {
        "x": 769.62744140625,
        "y": 1257.9697265625,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "revenue": {
        "x": 1145.9765625,
        "y": 660.23876953125,
        "width": 72.92578125,
        "height": 390.673828125
      },
      "gross_profit": {
        "x": 1522.32568359375,
        "y": 553.45458984375,
        "width": 72.92578125,
        "height": 97.66845703125
      },
      "cost_of_sales": {
        "x": 1522.32568359375,
        "y": 849.064453125,
        "width": 72.92578125,
        "height": 294.3076171875
      },
      "operating_profit": {
        "x": 1893.4658203125,
        "y": 472.71533203125,
        "width": 72.92578125,
        "height": 18.2314453125
      },
      "operating_expenses": {
        "x": 1893.4658203125,
        "y": 649.82080078125,
        "width": 72.92578125,
        "height": 79.43701171875
      },
      "net_profit": {
        "x": 2267.21044921875,
        "y": 373.74462890625,
        "width": 72.92578125,
        "height": 13.0224609375
      },
      "tax": {
        "x": 2267.21044921875,
        "y": 574.29052734375,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "other": {
        "x": 2267.21044921875,
        "y": 881.62060546875,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "interest": {
        "x": 2267.21044921875,
        "y": 735.76904296875,
        "width": 72.92578125,
        "height": 1.30224609375
      }
    },
    "labels": {
      "walmart_us": {
        "blocks": [
          {
            "x": 433.64794921875,
            "top": 380.255859375,
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
            "x": 227.89306640625,
            "top": 558.66357421875,
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
                "text": "5% operating margin",
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
            "x": 433.64794921875,
            "top": 781.34765625,
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
                "text": "(1%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 227.89306640625,
            "top": 837.34423828125,
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
            "x": 433.64794921875,
            "top": 979.2890625,
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
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 226.5908203125,
            "top": 1135.55859375,
            "anchor": "middle",
            "lineGap": 11.72021484375,
            "lines": [
              {
                "text": "3% operating margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "net_sales": {
        "blocks": [
          {
            "x": 808.69482421875,
            "top": 411.509765625,
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
                "text": "+4% Y/Y",
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
            "x": 1181.13720703125,
            "top": 509.17822265625,
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
                "text": "+4% Y/Y",
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
            "x": 1558.78857421875,
            "top": 364.62890625,
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
                "text": "+0.6pp Y/Y",
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
            "x": 1929.9287109375,
            "top": 279.98291015625,
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
                "text": "4% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0.2pp Y/Y",
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
            "top": 320.3525390625,
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
                "text": "3% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0.3pp) Y/Y",
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
            "x": 806.09033203125,
            "top": 1101.7001953125,
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
                "text": "+17% Y/Y",
                "size": 27.34716796875,
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
            "x": 1558.78857421875,
            "top": 1153.7900390625,
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
            "x": 1929.9287109375,
            "top": 740.97802734375,
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
            "top": 535.22314453125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Tax",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#9d1600"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2461.2451171875,
            "top": 834.73974609375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
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
            "top": 690.1904296875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Interest",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#9d1600"
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
      "value": 123.5,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+5% Y/Y",
        "5% operating margin"
      ],
      "color": "#0071ce",
      "labelColor": "#777777",
      "linkTint": "#85b7dd",
      "valueText": "$123.5B"
    },
    {
      "id": "walmart_international",
      "label": "Walmart International",
      "value": 32.2,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(1%) Y/Y",
        "4% operating margin"
      ],
      "color": "#ffc220",
      "labelColor": "#777777",
      "linkTint": "#f6dc92",
      "valueText": "$32.2B"
    },
    {
      "id": "sams_club",
      "label": "Sam's Club",
      "value": 23.1,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+6% Y/Y",
        "3% operating margin"
      ],
      "color": "#0084bd",
      "labelColor": "#777777",
      "linkTint": "#83bfd8",
      "valueText": "$23.1B"
    },
    {
      "id": "net_sales",
      "label": "Net Sales",
      "value": 178.8,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#0071ce",
      "labelColor": "#0071ce",
      "linkTint": "#85b7dd",
      "valueText": "$178.8B"
    },
    {
      "id": "membership",
      "label": "Membership",
      "value": 1.7,
      "type": "source",
      "col": 1,
      "order": 1,
      "notes": [
        "+17% Y/Y"
      ],
      "color": "#ff852d",
      "labelColor": "#777777",
      "linkTint": "#ffc397",
      "valueText": "$1.7B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 180.6,
      "type": "hub",
      "col": 2,
      "order": 0,
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#0071ce",
      "labelColor": "#0071ce",
      "linkTint": "#85b7dd",
      "valueText": "$180.6B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 44.4,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "25% margin",
        "+0.6pp Y/Y"
      ],
      "color": "#29a12a",
      "labelColor": "#009852",
      "linkTint": "#99cd99",
      "valueText": "$44.4B"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 136.2,
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($136.2B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 7.9,
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": [
        "4% margin",
        "+0.2pp Y/Y"
      ],
      "color": "#29a12a",
      "labelColor": "#009852",
      "linkTint": "#99cd99",
      "valueText": "$7.9B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 36.5,
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($36.5B)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 5.4,
      "type": "profit",
      "col": 5,
      "order": 0,
      "notes": [
        "3% margin",
        "(0.3pp) Y/Y"
      ],
      "color": "#29a12a",
      "labelColor": "#009852",
      "linkTint": "#99cd99",
      "valueText": "$5.4B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.5,
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($1.5B)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.3,
      "type": "cost",
      "col": 5,
      "order": 2,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($0.3B)"
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 0.6,
      "type": "cost",
      "col": 5,
      "order": 3,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($0.6B)"
    }
  ],
  "links": [
    {
      "source": "walmart_us",
      "target": "net_sales",
      "value": 123.5,
      "sourceWidth": 266.96044921875,
      "targetWidth": 267.1461722354761,
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
      "value": 32.2,
      "sourceWidth": 70.3212890625,
      "targetWidth": 69.65268620228608,
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
      "value": 23.1,
      "sourceWidth": 50.78759765625,
      "targetWidth": 49.968231405987844,
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
      "value": 178.8,
      "sourceWidth": 386.76708984375,
      "targetWidth": 386.99435162742384,
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
      "value": 1.7,
      "sourceWidth": 2.6044921875,
      "targetWidth": 3.6794764975761773,
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
      "value": 44.4,
      "sourceWidth": 96.0460574127907,
      "targetWidth": 97.66845703125,
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
      "value": 136.2,
      "sourceWidth": 294.62777071220927,
      "targetWidth": 294.3076171875,
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
      "value": 7.9,
      "sourceWidth": 17.377946183488177,
      "targetWidth": 18.2314453125,
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
      "value": 36.5,
      "sourceWidth": 80.29051084776182,
      "targetWidth": 79.43701171875,
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
      "value": 5.4,
      "sourceWidth": 13.0224609375,
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
      "value": 1.5,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
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
      "value": 0.6,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": {
        "left": "#df8585",
        "right": "#df8585"
      }
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.3,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": {
        "left": "#df8585",
        "right": "#df8585"
      }
    }
  ],
  "operatingMetrics": [
    {
      "id": "us_comp_sales",
      "value": "5",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+5%"
    },
    {
      "id": "ecommerce",
      "value": "16",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+16%"
    },
    {
      "id": "advertising",
      "value": "29",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "+29%"
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\" transform=\"translate(602 258) scale(1)\">\n    <g>\n      <text x=\"0\" y=\"104\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"104\" font-weight=\"800\" fill=\"#0071ce\"\n        textLength=\"430\" lengthAdjust=\"spacingAndGlyphs\">Walmart</text>\n      <g transform=\"translate(490 62)\" fill=\"#ffc220\">\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"11\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(60)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(120)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(240)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(300)\"/>\n      </g>\n    </g>\n  </g><g data-typography-role=\"brand\" transform=\"translate(93 1080) scale(1)\">\n    <g>\n      <text x=\"0\" y=\"51\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"50\" font-weight=\"800\" fill=\"#0067a0\"\n        textLength=\"205\" lengthAdjust=\"spacingAndGlyphs\">sam's club</text>\n      <g transform=\"translate(225 4) scale(0.78)\">\n        <path d=\"M31 0L62 31L31 62L20 51L40 31L20 11Z\" fill=\"#0067a0\"/>\n        <path d=\"M31 0L0 31L31 62L42 51L22 31L42 11Z\" fill=\"#0086c8\"/>\n      </g>\n    </g>\n  </g><rect x=\"32.55615234375\" y=\"1194.15966796875\" width=\"274.77392578125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#0071ce\"/><rect x=\"324.25927734375\" y=\"1194.15966796875\" width=\"354.2109375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#0071ce\"/><text x=\"169.2919921875\" y=\"1263.1787109375\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\" text-anchor=\"middle\" >US comp sales</text><text x=\"145.8515625\" y=\"1299.6416015625\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"us_comp_sales\">+5%</text><text x=\"218.77734375\" y=\"1299.6416015625\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >Y/Y</text><text x=\"438.85693359375\" y=\"1263.1787109375\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\" text-anchor=\"middle\" >E-commerce</text><text x=\"559.9658203125\" y=\"1263.1787109375\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"ecommerce\">+16%</text><text x=\"635.49609375\" y=\"1263.1787109375\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >Y/Y</text><text x=\"438.85693359375\" y=\"1299.6416015625\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\" text-anchor=\"middle\" >Advertising</text><text x=\"559.9658203125\" y=\"1299.6416015625\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"advertising\">+29%</text><text x=\"635.49609375\" y=\"1299.6416015625\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >Y/Y</text></g>",
  "i18n": {
    "preservedAnnotationText": [
      "Sam's Club"
    ],
    "zh": {
      "name": "沃尔玛 · 2025 财年第四季度",
      "meta": {
        "title": "沃尔玛 2025 财年第四季度利润表",
        "period": "2025 财年第四季度",
        "periodNote": "截至 2025 年 1 月",
        "titleTextLength": 2187.7734375
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\" transform=\"translate(602 258) scale(1)\">\n    <g>\n      <text x=\"0\" y=\"104\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"104\" font-weight=\"800\" fill=\"#0071ce\"\n        textLength=\"430\" lengthAdjust=\"spacingAndGlyphs\">Walmart</text>\n      <g transform=\"translate(490 62)\" fill=\"#ffc220\">\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"11\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(60)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(120)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(240)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(300)\"/>\n      </g>\n    </g>\n  </g><g data-typography-role=\"brand\" transform=\"translate(93 1080) scale(1)\">\n    <g>\n      <text x=\"0\" y=\"51\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"50\" font-weight=\"800\" fill=\"#0067a0\"\n        textLength=\"205\" lengthAdjust=\"spacingAndGlyphs\">sam's club</text>\n      <g transform=\"translate(225 4) scale(0.78)\">\n        <path d=\"M31 0L62 31L31 62L20 51L40 31L20 11Z\" fill=\"#0067a0\"/>\n        <path d=\"M31 0L0 31L31 62L42 51L22 31L42 11Z\" fill=\"#0086c8\"/>\n      </g>\n    </g>\n  </g><rect x=\"32.55615234375\" y=\"1194.15966796875\" width=\"274.77392578125\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#0071ce\"/><rect x=\"324.25927734375\" y=\"1194.15966796875\" width=\"354.2109375\" height=\"149.75830078125\" rx=\"31.25390625\" fill=\"#0071ce\"/><text x=\"169.2919921875\" y=\"1263.1787109375\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\" text-anchor=\"middle\" >美国可比销售额</text><text x=\"145.8515625\" y=\"1299.6416015625\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"us_comp_sales\">+5%</text><text x=\"218.77734375\" y=\"1299.6416015625\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >同比</text><text x=\"438.85693359375\" y=\"1263.1787109375\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\" text-anchor=\"middle\" >电商</text><text x=\"559.9658203125\" y=\"1263.1787109375\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"ecommerce\">+16%</text><text x=\"635.49609375\" y=\"1263.1787109375\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >同比</text><text x=\"438.85693359375\" y=\"1299.6416015625\" font-size=\"27.34716796875\" font-weight=\"700\" fill=\"white\" text-anchor=\"middle\" >广告</text><text x=\"559.9658203125\" y=\"1299.6416015625\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" data-operating-metric=\"advertising\">+29%</text><text x=\"635.49609375\" y=\"1299.6416015625\" font-size=\"27.34716796875\" font-weight=\"500\" fill=\"white\" text-anchor=\"middle\" >同比</text></g>",
      "nodes": {
        "walmart_us": {
          "label": "沃尔玛美国",
          "notes": [
            "同比 +5%",
            "营业利润率 5%"
          ]
        },
        "walmart_international": {
          "label": "沃尔玛国际",
          "notes": [
            "同比 (1%)",
            "营业利润率 4%"
          ]
        },
        "sams_club": {
          "label": "山姆会员店",
          "notes": [
            "同比 +6%",
            "营业利润率 3%"
          ]
        },
        "net_sales": {
          "label": "净销售额",
          "notes": [
            "同比 +4%"
          ]
        },
        "membership": {
          "label": "会员收入",
          "notes": [
            "同比 +17%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +4%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 25%",
            "同比 +0.6 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 4%",
            "同比 +0.2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 3%",
            "同比 (0.3 个百分点)"
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
        "interest": {
          "label": "利息",
          "notes": []
        }
      }
    }
  }
});})();
