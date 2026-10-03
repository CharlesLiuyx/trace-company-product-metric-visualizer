/* Source-faithful Chevron Q1 FY25 Sankey View Adapter. */
(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "chevron-q1-fy25",
  "name": "Chevron · Q1 FY25",
  "company": "Chevron",
  "meta": {
    "company": "Chevron",
    "title": "Chevron Q1 FY25 Income Statement",
    "period": "Q1 FY25",
    "periodNote": "Ending Mar. 2025",
    "hidePeriodStamp": true,
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/chevron-q1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "logoSvg": "\n    <g>\n      <text x=\"141\" y=\"58\" text-anchor=\"middle\" font-family=\"Arial, sans-serif\" font-size=\"56\" font-weight=\"800\" fill=\"#075dad\"\n        textLength=\"224\" lengthAdjust=\"spacingAndGlyphs\">Chevron</text>\n      <path d=\"M30 76L141 116L252 76V151L141 191L30 151Z\" fill=\"#159ad0\"/>\n      <path d=\"M30 76L141 116L108 129L30 103Z\" fill=\"#0c70b8\"/>\n      <path d=\"M252 76V151L141 191V166L222 136V96Z\" fill=\"#0e76ba\"/>\n      <path d=\"M30 162L141 202L252 162V236L141 271L30 236Z\" fill=\"#ed1631\"/>\n      <path d=\"M30 162L141 202L108 215L30 190Z\" fill=\"#d8122b\"/>\n      <path d=\"M252 162V236L141 271V246L222 216V182Z\" fill=\"#cc1028\"/>\n      <path d=\"M30 151L141 191L252 151V162L141 202L30 162Z\" fill=\"#ffffff\"/>\n    </g>",
    "logoViewBox": "0 0 282 271",
    "logoWidth": 282,
    "logoHeight": 260,
    "logoY": 252
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#0b5da5",
        "label": "#0b5da5"
      },
      "hub": {
        "node": "#0b5da5",
        "label": "#0b5da5"
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
      "source": "#8aafce",
      "hub": "#8aafce",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 40,
      "note": 29,
      "lineGap": 8
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "annotationsSvg": "<g>\n    <g transform=\"translate(86 355)\" fill=\"none\" stroke=\"#102f78\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <path d=\"M4 109C43 101 92 101 132 109\"/>\n      <path d=\"M18 49L105 18L111 35L26 62Z\"/>\n      <path d=\"M22 58L7 61L4 52L19 48Z\" fill=\"#4db5e5\"/>\n      <path d=\"M105 18L119 5L129 8L134 35L120 43L111 35Z\" fill=\"#f2f2f2\"/>\n      <path d=\"M42 61V100M84 48L99 100M50 100L76 46M58 75H92M52 93H98M28 100V89H47V101\"/>\n      <path d=\"M118 43V59M118 74V106\"/>\n      <rect x=\"112\" y=\"59\" width=\"13\" height=\"17\" rx=\"3\" fill=\"#f2f2f2\"/>\n    </g>\n    <g transform=\"translate(79 727)\" fill=\"none\" stroke=\"#1f3a80\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <path d=\"M2 106C36 101 93 101 132 106\"/>\n      <path d=\"M28 96V10H88V96M24 96H93V106H21Z\" fill=\"#f2f2f2\"/>\n      <rect x=\"36\" y=\"20\" width=\"44\" height=\"31\" rx=\"3\" fill=\"#2b3f85\"/>\n      <path d=\"M41 26H74L41 45Z\" fill=\"#49aee2\" stroke=\"none\"/>\n      <path d=\"M39 61H47M58 61H66M77 61H85\" stroke=\"#1685c7\" stroke-width=\"8\"/>\n      <circle cx=\"59\" cy=\"79\" r=\"11\" fill=\"#f2f2f2\"/>\n      <path d=\"M54 81L63 74L60 83\" stroke=\"#273c82\" stroke-width=\"4\"/>\n      <path d=\"M88 42H100L110 52V87C110 96 123 96 123 87V59\"/>\n      <path d=\"M104 51L116 57V77L108 76Z\" fill=\"#48aede\"/>\n    </g></g>",
  "layout": {
    "scale": 5.81,
    "nodes": {
      "upstream": {
        "x": 322,
        "y": 481,
        "width": 72,
        "height": 72
      },
      "downstream": {
        "x": 322,
        "y": 744,
        "width": 72,
        "height": 196
      },
      "all_other": {
        "x": 322,
        "y": 1163,
        "width": 72,
        "height": 1
      },
      "sales_and_other_operating_revenues": {
        "x": 792,
        "y": 604,
        "width": 72,
        "height": 268
      },
      "income_from_equity_affiliates": {
        "x": 789,
        "y": 1123,
        "width": 72,
        "height": 5
      },
      "other_income": {
        "x": 789,
        "y": 1334,
        "width": 72,
        "height": 4
      },
      "revenue": {
        "x": 1256,
        "y": 687,
        "width": 72,
        "height": 277
      },
      "pretax_income": {
        "x": 1725,
        "y": 522,
        "width": 72,
        "height": 32
      },
      "operating_expenses": {
        "x": 1724,
        "y": 835,
        "width": 72,
        "height": 244
      },
      "net_income": {
        "x": 2190,
        "y": 348,
        "width": 72,
        "height": 20
      },
      "tax": {
        "x": 2190,
        "y": 504,
        "width": 72,
        "height": 12
      },
      "purchased_crude_oil_and_products": {
        "x": 2190,
        "y": 597,
        "width": 72,
        "height": 166
      },
      "opex": {
        "x": 2190,
        "y": 856,
        "width": 72,
        "height": 44
      },
      "depreciation_depletion_amortization": {
        "x": 2190,
        "y": 996,
        "width": 72,
        "height": 24
      },
      "taxes_non_income": {
        "x": 2190,
        "y": 1118,
        "width": 72,
        "height": 7
      },
      "exploration": {
        "x": 2190,
        "y": 1237,
        "width": 72,
        "height": 1
      },
      "other_costs": {
        "x": 2190,
        "y": 1347,
        "width": 72,
        "height": 1
      }
    },
    "labels": {
      "upstream": {
        "blocks": [
          {
            "x": 152.36279296875,
            "top": 481.8310546875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Upstream",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 800
              },
              {
                "text": "30% net margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 360.72216796875,
            "top": 382.8603515625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$12.4B",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 400
              },
              {
                "text": "+9% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "downstream": {
        "blocks": [
          {
            "x": 156.26953125,
            "top": 855.57568359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Downstream",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 800
              },
              {
                "text": "1% net margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          },
          {
            "x": 365.93115234375,
            "top": 645.9140625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$33.7B",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 400
              },
              {
                "text": "(4%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "all_other": {
        "blocks": [
          {
            "x": 152.36279296875,
            "top": 1140.767578125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "All other",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 800
              }
            ]
          },
          {
            "x": 358,
            "top": 1062.6328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$19M",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 400
              },
              {
                "text": "(30%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "sales_and_other_operating_revenues": {
        "blocks": [
          {
            "x": 826.92626953125,
            "top": 401.091796875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Sales & other",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 800
              },
              {
                "text": "operating revenues",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 800
              }
            ]
          },
          {
            "x": 826.92626953125,
            "top": 506.57373046875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$46.1B",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 400
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "income_from_equity_affiliates": {
        "blocks": [
          {
            "x": 742.2802734375,
            "top": 1031.5654296875,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Income",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 800
              },
              {
                "text": "from",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 800
              },
              {
                "text": "equity",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 800
              },
              {
                "text": "affiliates",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 800
              }
            ]
          },
          {
            "x": 826.92626953125,
            "top": 1023.5654296875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$0.8B",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 400
              },
              {
                "text": "(43%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 729.2578125,
            "top": 1311.36181640625,
            "anchor": "end",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 800
              }
            ]
          },
          {
            "x": 826.92626953125,
            "top": 1234.529296875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$0.7B",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 400
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1293.13037109375,
            "top": 533.9208984375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 800
              },
              {
                "text": "$47.6B",
                "size": 39.0673828125,
                "color": "#0b5da5",
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1761.93896484375,
            "top": 330.7705078125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$5.6B",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "12% margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_income": {
        "blocks": [
          {
            "x": 2426.08447265625,
            "top": 272.16943359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net income",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$3.5B",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "7% margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2426.08447265625,
            "top": 474.017578125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "($2.1B)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1761.93896484375,
            "top": 1093.88671875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Costs and",
                "size": 33.8583984375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "other deductions",
                "size": 33.8583984375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "($42.0B)",
                "size": 33.8583984375,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "purchased_crude_oil_and_products": {
        "blocks": [
          {
            "x": 2431.29345703125,
            "top": 621.17138671875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Crude Oil",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "& Products",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "($28.6B)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ]
          }
        ]
      },
      "opex": {
        "blocks": [
          {
            "x": 2426.08447265625,
            "top": 862.0869140625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Opex ($7.6B)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              }
            ]
          }
        ]
      },
      "depreciation_depletion_amortization": {
        "blocks": [
          {
            "x": 2426.08447265625,
            "top": 991.00927734375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "D&A ($4.1B)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              }
            ]
          }
        ]
      },
      "exploration": {
        "blocks": [
          {
            "x": 2431.29345703125,
            "top": 1217.60009765625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Exploration ($0.2B)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_costs": {
        "blocks": [
          {
            "x": 2435.2001953125,
            "top": 1328.291015625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other ($0.2B)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              }
            ]
          }
        ]
      },
      "taxes_non_income": {
        "blocks": [
          {
            "x": 2426.08447265625,
            "top": 1083.46875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Taxes (non income)",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "($1.3B)",
                "size": 31.25390625,
                "color": "#941100",
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
      "id": "upstream",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Upstream",
      "value": 12.4,
      "notes": [
        "+9% Y/Y",
        "30% net margin"
      ]
    },
    {
      "id": "downstream",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Downstream",
      "value": 33.7,
      "notes": [
        "(4%) Y/Y",
        "1% net margin"
      ]
    },
    {
      "id": "all_other",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "All other",
      "value": 0.019,
      "notes": [
        "(30%) Y/Y"
      ],
      "valueText": "$19M",
      "color": "#c3d0db"
    },
    {
      "id": "sales_and_other_operating_revenues",
      "col": 1,
      "order": 0,
      "type": "source",
      "label": [
        "Sales & other",
        "operating revenues"
      ],
      "value": 46.1,
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "income_from_equity_affiliates",
      "col": 1,
      "order": 1,
      "type": "source",
      "label": [
        "Income",
        "from",
        "equity",
        "affiliates"
      ],
      "value": 0.8,
      "notes": [
        "(43%) Y/Y"
      ]
    },
    {
      "id": "other_income",
      "col": 1,
      "order": 2,
      "type": "source",
      "label": "Other",
      "value": 0.7,
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 47.6,
      "notes": [
        "(2%) Y/Y"
      ]
    },
    {
      "id": "pretax_income",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Pretax income",
      "value": 5.6,
      "notes": [
        "12% margin",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": [
        "Costs and",
        "other deductions"
      ],
      "value": 42,
      "notes": []
    },
    {
      "id": "net_income",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Net income",
      "value": 3.5,
      "notes": [
        "7% margin",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": "Tax",
      "value": 2.1,
      "notes": []
    },
    {
      "id": "purchased_crude_oil_and_products",
      "col": 4,
      "order": 2,
      "type": "cost",
      "label": [
        "Crude Oil",
        "& Products"
      ],
      "value": 28.6,
      "notes": []
    },
    {
      "id": "opex",
      "col": 4,
      "order": 4,
      "type": "cost",
      "label": "Opex",
      "value": 7.6,
      "notes": []
    },
    {
      "id": "depreciation_depletion_amortization",
      "col": 4,
      "order": 5,
      "type": "cost",
      "label": "D&A",
      "value": 4.1,
      "notes": []
    },
    {
      "id": "taxes_non_income",
      "col": 4,
      "order": 6,
      "type": "cost",
      "label": "Taxes (non income)",
      "value": 1.3,
      "notes": []
    },
    {
      "id": "exploration",
      "col": 4,
      "order": 8,
      "type": "cost",
      "label": "Exploration",
      "value": 0.2,
      "notes": [],
      "color": "#e08585"
    },
    {
      "id": "other_costs",
      "col": 4,
      "order": 9,
      "type": "cost",
      "label": "Other",
      "value": 0.2,
      "notes": [],
      "color": "#e08585"
    }
  ],
  "links": [
    {
      "source": "upstream",
      "target": "sales_and_other_operating_revenues",
      "value": 12.4,
      "sourceWidth": 72,
      "targetWidth": 72,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "downstream",
      "target": "sales_and_other_operating_revenues",
      "value": 33.7,
      "sourceWidth": 196,
      "targetWidth": 195,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "all_other",
      "target": "sales_and_other_operating_revenues",
      "value": 0.019,
      "sourceWidth": 1,
      "targetWidth": 1,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "sales_and_other_operating_revenues",
      "target": "revenue",
      "value": 46.1,
      "sourceWidth": 268,
      "targetWidth": 268,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "income_from_equity_affiliates",
      "target": "revenue",
      "value": 0.8,
      "sourceWidth": 5,
      "targetWidth": 5,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other_income",
      "target": "revenue",
      "value": 0.7,
      "sourceWidth": 4,
      "targetWidth": 4,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "pretax_income",
      "value": 5.6,
      "sourceWidth": 32,
      "targetWidth": 32,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 42,
      "sourceWidth": 245,
      "targetWidth": 244,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "pretax_income",
      "target": "net_income",
      "value": 3.5,
      "sourceWidth": 20,
      "targetWidth": 20,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 2.1,
      "sourceWidth": 12,
      "targetWidth": 12,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "purchased_crude_oil_and_products",
      "value": 28.6,
      "sourceWidth": 166,
      "targetWidth": 166,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "opex",
      "value": 7.6,
      "sourceWidth": 44,
      "targetWidth": 44,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_depletion_amortization",
      "value": 4.1,
      "sourceWidth": 24,
      "targetWidth": 24,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "taxes_non_income",
      "value": 1.3,
      "sourceWidth": 7,
      "targetWidth": 7,
      "sourceOrder": 3,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "exploration",
      "value": 0.2,
      "sourceWidth": 1.5,
      "targetWidth": 1,
      "sourceOrder": 4,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_costs",
      "value": 0.2,
      "sourceWidth": 1.5,
      "targetWidth": 1,
      "sourceOrder": 5,
      "targetOrder": 0
    }
  ],
  "i18n": {
    "zh": {
      "name": "雪佛龙 · 2025 财年第一季度",
      "meta": {
        "title": "雪佛龙 2025 财年第一季度利润表",
        "period": "2025 财年第一季度",
        "periodNote": "截至 2025 年 3 月"
      },
      "nodes": {
        "upstream": {
          "label": "上游业务",
          "notes": [
            "同比 +9%",
            "净利率 30%"
          ]
        },
        "downstream": {
          "label": "下游业务",
          "notes": [
            "同比 (4%)",
            "净利率 1%"
          ]
        },
        "all_other": {
          "label": "其他",
          "notes": [
            "同比 (30%)"
          ]
        },
        "sales_and_other_operating_revenues": {
          "label": [
            "销售及其他",
            "营业收入"
          ],
          "notes": [
            "同比 (1%)"
          ]
        },
        "income_from_equity_affiliates": {
          "label": [
            "权益法",
            "被投资单位",
            "收益"
          ],
          "notes": [
            "同比 (43%)"
          ]
        },
        "other_income": {
          "label": "其他收入",
          "notes": [
            "同比 (1%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (2%)"
          ]
        },
        "pretax_income": {
          "label": "所得税前利润",
          "notes": [
            "利润率 12%",
            "同比 (5 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "成本及其他",
            "扣除项"
          ],
          "notes": []
        },
        "net_income": {
          "label": "净利润",
          "notes": [
            "利润率 7%",
            "同比 (4 个百分点)"
          ]
        },
        "tax": {
          "label": "所得税",
          "notes": []
        },
        "purchased_crude_oil_and_products": {
          "label": [
            "原油及产品",
            "采购成本"
          ],
          "notes": []
        },
        "opex": {
          "label": "运营费用",
          "notes": []
        },
        "depreciation_depletion_amortization": {
          "label": "折旧、耗竭及摊销",
          "notes": []
        },
        "taxes_non_income": {
          "label": "非所得税税费",
          "notes": []
        },
        "exploration": {
          "label": "勘探费用",
          "notes": []
        },
        "other_costs": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "upstream": {
            "blocks": [
              {
                "x": 152.36279296875,
                "top": 481.8310546875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "上游业务",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 800
                  },
                  {
                    "text": "净利率 30%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 360.72216796875,
                "top": 382.8603515625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$12.4B",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 400
                  },
                  {
                    "text": "同比 +9%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "downstream": {
            "blocks": [
              {
                "x": 156.26953125,
                "top": 855.57568359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "下游业务",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 800
                  },
                  {
                    "text": "净利率 1%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              },
              {
                "x": 365.93115234375,
                "top": 645.9140625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$33.7B",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 400
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "all_other": {
            "blocks": [
              {
                "x": 152.36279296875,
                "top": 1140.767578125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 358,
                "top": 1062.6328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$19M",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 400
                  },
                  {
                    "text": "同比 (30%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sales_and_other_operating_revenues": {
            "blocks": [
              {
                "x": 826.92626953125,
                "top": 401.091796875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售及其他",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 800
                  },
                  {
                    "text": "营业收入",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 826.92626953125,
                "top": 506.57373046875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$46.1B",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 400
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "income_from_equity_affiliates": {
            "blocks": [
              {
                "x": 742.2802734375,
                "top": 1031.5654296875,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "权益法",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 800
                  },
                  {
                    "text": "被投资",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 800
                  },
                  {
                    "text": "单位",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 800
                  },
                  {
                    "text": "收益",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 826.92626953125,
                "top": 1023.5654296875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$0.8B",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 400
                  },
                  {
                    "text": "同比 (43%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 729.2578125,
                "top": 1311.36181640625,
                "anchor": "end",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他收入",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 800
                  }
                ]
              },
              {
                "x": 826.92626953125,
                "top": 1234.529296875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$0.7B",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 400
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1293.13037109375,
                "top": 533.9208984375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 800
                  },
                  {
                    "text": "$47.6B",
                    "size": 39.0673828125,
                    "color": "#0b5da5",
                    "weight": 400
                  },
                  {
                    "text": "同比 (2%)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1761.93896484375,
                "top": 330.7705078125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "所得税前利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$5.6B",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 12%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_income": {
            "blocks": [
              {
                "x": 2426.08447265625,
                "top": 272.16943359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$3.5B",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 7%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2426.08447265625,
                "top": 474.017578125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "所得税",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "($2.1B)",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1761.93896484375,
                "top": 1093.88671875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "成本及其他",
                    "size": 33.8583984375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "扣除项",
                    "size": 33.8583984375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "($42.0B)",
                    "size": 33.8583984375,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "purchased_crude_oil_and_products": {
            "blocks": [
              {
                "x": 2431.29345703125,
                "top": 621.17138671875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "原油及产品",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "采购成本",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "($28.6B)",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "opex": {
            "blocks": [
              {
                "x": 2426.08447265625,
                "top": 862.0869140625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "运营费用 ($7.6B)",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "depreciation_depletion_amortization": {
            "blocks": [
              {
                "x": 2426.08447265625,
                "top": 991.00927734375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "折旧、耗竭及摊销 ($4.1B)",
                    "size": 27.34716796875,
                    "color": "#941100",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "exploration": {
            "blocks": [
              {
                "x": 2431.29345703125,
                "top": 1217.60009765625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "勘探费用 ($0.2B)",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_costs": {
            "blocks": [
              {
                "x": 2435.2001953125,
                "top": 1328.291015625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他 ($0.2B)",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "taxes_non_income": {
            "blocks": [
              {
                "x": 2426.08447265625,
                "top": 1083.46875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "非所得税税费",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "($1.3B)",
                    "size": 31.25390625,
                    "color": "#941100",
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
});})();
