(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "walmart-q4-fy23",
  "name": "Walmart · Q4 FY23",
  "company": "Walmart",
  "meta": {
    "company": "Walmart",
    "title": "Walmart Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Ending Jan. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/walmart-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 119,
    "titleWeight": 800,
    "periodX": 2380,
    "periodY": 255,
    "periodNoteY": 300
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
        "x": 395.8828125,
        "y": 532.61865234375,
        "width": 72.92578125,
        "height": 221.3818359375
      },
      "walmart_international": {
        "x": 395.8828125,
        "y": 953.244140625,
        "width": 72.92578125,
        "height": 54.6943359375
      },
      "sams_club": {
        "x": 395.8828125,
        "y": 1190.2529296875,
        "width": 72.92578125,
        "height": 41.671875
      },
      "net_sales": {
        "x": 820.4150390625,
        "y": 668.05224609375,
        "width": 72.92578125,
        "height": 315.1435546875
      },
      "membership": {
        "x": 821.71728515625,
        "y": 1311.36181640625,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "revenue": {
        "x": 1213.693359375,
        "y": 692.794921875,
        "width": 72.92578125,
        "height": 317.748046875
      },
      "gross_profit": {
        "x": 1599.158203125,
        "y": 586.0107421875,
        "width": 72.92578125,
        "height": 74.22802734375
      },
      "cost_of_sales": {
        "x": 1606.9716796875,
        "y": 836.0419921875,
        "width": 72.92578125,
        "height": 243.52001953125
      },
      "operating_profit": {
        "x": 1937.7421875,
        "y": 515.689453125,
        "width": 72.92578125,
        "height": 10.41796875
      },
      "operating_expenses": {
        "x": 1942.951171875,
        "y": 704.51513671875,
        "width": 72.92578125,
        "height": 63.81005859375
      },
      "net_profit": {
        "x": 2264.60595703125,
        "y": 412.81201171875,
        "width": 72.92578125,
        "height": 7.8134765625
      },
      "tax": {
        "x": 2264.60595703125,
        "y": 647.21630859375,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "interest": {
        "x": 2264.60595703125,
        "y": 796.974609375,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "other": {
        "x": 2155.21728515625,
        "y": 501.36474609375,
        "width": 74.22802734375,
        "height": 2.6044921875
      }
    },
    "labels": {
      "net_sales": {
        "blocks": [
          {
            "x": 858.18017578125,
            "top": 516.99169921875,
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
                "text": "+7% Y/Y",
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
            "x": 1248.85400390625,
            "top": 539.1298828125,
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
                "text": "+7% Y/Y",
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
            "x": 1635.62109375,
            "top": 394.58056640625,
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
                "text": "24% margin",
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
            "x": 1974.205078125,
            "top": 326.86376953125,
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
                "text": "3% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0.5pp) Y/Y",
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
            "top": 380.255859375,
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
                "text": "4% margin",
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
      "walmart_us": {
        "blocks": [
          {
            "x": 432.345703125,
            "top": 433.64794921875,
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
                "text": "+8% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 234.404296875,
            "top": 596.4287109375,
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
            "x": 432.345703125,
            "top": 854.2734375,
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
                "text": "+2% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 230.49755859375,
            "top": 899.85205078125,
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
            "top": 1091.2822265625,
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
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 216.1728515625,
            "top": 1220.20458984375,
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
      },
      "membership": {
        "blocks": [
          {
            "x": 859.482421875,
            "top": 1211.0888671875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#ff852d"
              },
              {
                "text": "(3%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 657.63427734375,
            "top": 1288.4146484375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Membership",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#606060"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1643.4345703125,
            "top": 1089.97998046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 36.462890625,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 1979.4140625,
            "top": 781.34765625,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "expenses",
                "size": 36.462890625,
                "weight": 700,
                "color": "#9d1600"
              },
              {
                "text": "$value",
                "size": 36.462890625,
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
            "x": 2474.267578125,
            "top": 621.17138671875,
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
            "x": 2474.267578125,
            "top": 761.81396484375,
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
      "other": {
        "blocks": [
          {
            "x": 2194.28466796875,
            "top": 510.48046875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#009900"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#009900"
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
      "value": 113.7,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+8% Y/Y",
        "5% operating margin"
      ],
      "color": "#0071ce",
      "labelColor": "#777777",
      "linkTint": "#85b7dd",
      "valueText": "$113.7B"
    },
    {
      "id": "walmart_international",
      "label": "Walmart International",
      "value": 27.6,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+2% Y/Y",
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
      "value": 21.4,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+11% Y/Y",
        "2% operating margin"
      ],
      "color": "#0084bd",
      "labelColor": "#777777",
      "linkTint": "#83bfd8",
      "valueText": "$21.4B"
    },
    {
      "id": "net_sales",
      "label": "Net Sales",
      "value": 162.7,
      "type": "hub",
      "col": 1,
      "order": 0,
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#0071ce",
      "labelColor": "#0071ce",
      "linkTint": "#85b7dd",
      "valueText": "$162.7B"
    },
    {
      "id": "membership",
      "label": "Membership",
      "value": 1.3,
      "type": "source",
      "col": 1,
      "order": 1,
      "notes": [
        "(3%) Y/Y"
      ],
      "color": "#ff852d",
      "labelColor": "#777777",
      "linkTint": "#ffc397",
      "valueText": "$1.3B"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 164,
      "type": "hub",
      "col": 2,
      "order": 0,
      "notes": [
        "+7% Y/Y"
      ],
      "color": "#0071ce",
      "labelColor": "#0071ce",
      "linkTint": "#85b7dd",
      "valueText": "$164.0B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 38.6,
      "type": "profit",
      "col": 3,
      "order": 0,
      "notes": [
        "24% margin",
        "(1pp) Y/Y"
      ],
      "color": "#29a12a",
      "labelColor": "#009852",
      "linkTint": "#99cd99",
      "valueText": "$38.6B"
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 125.4,
      "type": "cost",
      "col": 3,
      "order": 1,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($125.4B)"
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 5.6,
      "type": "profit",
      "col": 4,
      "order": 0,
      "notes": [
        "3% margin",
        "(0.5pp) Y/Y"
      ],
      "color": "#29a12a",
      "labelColor": "#009852",
      "linkTint": "#99cd99",
      "valueText": "$5.6B"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 33.1,
      "type": "cost",
      "col": 4,
      "order": 1,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($33.1B)"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 5.8,
      "type": "profit",
      "col": 5,
      "order": 0,
      "notes": [
        "4% margin",
        "+1pp Y/Y"
      ],
      "color": "#29a12a",
      "labelColor": "#009852",
      "linkTint": "#99cd99",
      "valueText": "$5.8B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 3.1,
      "type": "cost",
      "col": 5,
      "order": 1,
      "notes": [],
      "color": "#d50000",
      "labelColor": "#9d1600",
      "linkTint": "#df8585",
      "valueText": "($3.1B)"
    },
    {
      "id": "other",
      "label": "Other",
      "value": 3.8,
      "type": "profit",
      "col": 4,
      "order": 2,
      "notes": [],
      "color": "#009900",
      "labelColor": "#009900",
      "linkTint": "#99cd99",
      "valueText": "$3.8B"
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
      "value": 113.7,
      "sourceWidth": 221.3818359375,
      "targetWidth": 220.07958984375,
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
      "sourceWidth": 54.6943359375,
      "targetWidth": 53.39208984375,
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
      "value": 21.4,
      "sourceWidth": 41.671875,
      "targetWidth": 41.671875,
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
      "value": 162.7,
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
      "source": "membership",
      "target": "revenue",
      "value": 1.3,
      "sourceWidth": 1.30224609375,
      "targetWidth": 2.6044921875,
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
      "value": 38.6,
      "sourceWidth": 75.5302734375,
      "targetWidth": 74.22802734375,
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
      "value": 125.4,
      "sourceWidth": 242.2177734375,
      "targetWidth": 243.52001953125,
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
      "value": 5.6,
      "sourceWidth": 10.41796875,
      "targetWidth": 10.41796875,
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
      "value": 33.1,
      "sourceWidth": 63.81005859375,
      "targetWidth": 63.81005859375,
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
      "value": 5.8,
      "sourceWidth": 3.90673828125,
      "targetWidth": 5.208984375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": {
        "left": "#99cd99",
        "right": "#99cd99"
      }
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 3.8,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": {
        "left": "#99cd99",
        "right": "#99cd99"
      }
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 3.1,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
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
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": {
        "left": "#df8585",
        "right": "#df8585"
      }
    }
  ],
  "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\" transform=\"translate(599 299) scale(1.05)\">\n    <g>\n      <text x=\"0\" y=\"104\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"104\" font-weight=\"800\" fill=\"#0071ce\"\n        textLength=\"430\" lengthAdjust=\"spacingAndGlyphs\">Walmart</text>\n      <g transform=\"translate(490 62)\" fill=\"#ffc220\">\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"11\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(60)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(120)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(240)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(300)\"/>\n      </g>\n    </g>\n  </g><g data-typography-role=\"brand\" transform=\"translate(89 1158) scale(1)\">\n    <g>\n      <text x=\"0\" y=\"51\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"50\" font-weight=\"800\" fill=\"#0067a0\"\n        textLength=\"205\" lengthAdjust=\"spacingAndGlyphs\">sam's club</text>\n      <g transform=\"translate(225 4) scale(0.78)\">\n        <path d=\"M31 0L62 31L31 62L20 51L40 31L20 11Z\" fill=\"#0067a0\"/>\n        <path d=\"M31 0L0 31L31 62L42 51L22 31L42 11Z\" fill=\"#0086c8\"/>\n      </g>\n    </g>\n  </g><text x=\"170\" y=\"1438\" font-family=\"Noto Sans,Arial,sans-serif\" font-size=\"40\" font-weight=\"700\" fill=\"#000000\">Source: Quarterly results</text></g>",
  "i18n": {
    "preservedAnnotationText": [
      "Sam's Club"
    ],
    "zh": {
      "name": "沃尔玛 · 2023 财年第四季度",
      "meta": {
        "title": "沃尔玛 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "截至 2023 年 1 月",
        "titleSize": 104
      },
      "nodes": {
        "walmart_us": {
          "label": "沃尔玛美国",
          "notes": [
            "同比 +8%",
            "营业利润率 5%"
          ]
        },
        "walmart_international": {
          "label": "沃尔玛国际",
          "notes": [
            "同比 +2%",
            "营业利润率 4%"
          ]
        },
        "sams_club": {
          "label": "山姆会员店",
          "notes": [
            "同比 +11%",
            "营业利润率 2%"
          ]
        },
        "net_sales": {
          "label": "净销售额",
          "notes": [
            "同比 +7%"
          ]
        },
        "membership": {
          "label": "会员收入",
          "notes": [
            "同比 (3%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +7%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 24%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 3%",
            "同比 (0.5 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 4%",
            "同比 +1 个百分点"
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
      },
      "annotationsSvg": "<g font-family=\"Noto Sans,Arial,sans-serif\"><g data-typography-role=\"brand\" transform=\"translate(599 299) scale(1.05)\">\n    <g>\n      <text x=\"0\" y=\"104\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"104\" font-weight=\"800\" fill=\"#0071ce\"\n        textLength=\"430\" lengthAdjust=\"spacingAndGlyphs\">Walmart</text>\n      <g transform=\"translate(490 62)\" fill=\"#ffc220\">\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"11\" width=\"18\" height=\"50\" rx=\"9\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(60)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(120)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(240)\"/>\n        <rect x=\"-9\" y=\"-61\" width=\"18\" height=\"50\" rx=\"9\" transform=\"rotate(300)\"/>\n      </g>\n    </g>\n  </g><g data-typography-role=\"brand\" transform=\"translate(89 1158) scale(1)\">\n    <g>\n      <text x=\"0\" y=\"51\" font-family=\"Arial Rounded MT Bold, Arial, sans-serif\" font-size=\"50\" font-weight=\"800\" fill=\"#0067a0\"\n        textLength=\"205\" lengthAdjust=\"spacingAndGlyphs\">sam's club</text>\n      <g transform=\"translate(225 4) scale(0.78)\">\n        <path d=\"M31 0L62 31L31 62L20 51L40 31L20 11Z\" fill=\"#0067a0\"/>\n        <path d=\"M31 0L0 31L31 62L42 51L22 31L42 11Z\" fill=\"#0086c8\"/>\n      </g>\n    </g>\n  </g><text x=\"170\" y=\"1438\" font-family=\"Noto Sans,Arial,sans-serif\" font-size=\"40\" font-weight=\"700\" fill=\"#000000\">来源：季度财报</text></g>"
    }
  }
});})();
