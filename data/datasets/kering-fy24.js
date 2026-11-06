(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "kering-fy24",
  "name": "Kering · FY24",
  "company": "Kering",
  "meta": {
    "company": "Kering",
    "title": "Kering FY24 Income Statement",
    "period": "",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/kering-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 1950
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "nodeRadius": 0,
    "palette": {
      "source": {
        "node": "#2e6065",
        "label": "#2e6065"
      },
      "hub": {
        "node": "#2e6065",
        "label": "#2e6065"
      },
      "profit": {
        "node": "#28a329",
        "label": "#008f51"
      },
      "cost": {
        "node": "#d40000",
        "label": "#981500"
      }
    },
    "linkTint": {
      "source": "#9dafb3",
      "hub": "#9dafb3",
      "profit": "#99cd99",
      "cost": "#df7f7f"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    },
    "allowRasterAnnotations": true
  },
  "layout": {
    "scale": 26.5,
    "nodes": {
      "gucci": {
        "x": 447,
        "y": 426,
        "width": 73,
        "height": 164
      },
      "saint_laurent": {
        "x": 447,
        "y": 702,
        "width": 73,
        "height": 61
      },
      "bottega_veneta": {
        "x": 447,
        "y": 863,
        "width": 73,
        "height": 36
      },
      "other_houses": {
        "x": 447,
        "y": 1001,
        "width": 73,
        "height": 69
      },
      "eyewear_corporate": {
        "x": 447,
        "y": 1166,
        "width": 73,
        "height": 41
      },
      "segment_hub": {
        "x": 818,
        "y": 570,
        "width": 73,
        "height": 375
      },
      "revenue": {
        "x": 1197,
        "y": 655,
        "width": 73,
        "height": 369
      },
      "eliminations": {
        "x": 1197,
        "y": 1130,
        "width": 73,
        "height": 4
      },
      "gross_profit": {
        "x": 1568,
        "y": 575,
        "width": 73,
        "height": 272
      },
      "cost_of_sales": {
        "x": 1568,
        "y": 1028,
        "width": 73,
        "height": 97
      },
      "operating_profit": {
        "x": 1945,
        "y": 476,
        "width": 73,
        "height": 54
      },
      "operating_expenses": {
        "x": 1945,
        "y": 710,
        "width": 73,
        "height": 218
      },
      "net_profit": {
        "x": 2316,
        "y": 385,
        "width": 73,
        "height": 26
      },
      "other": {
        "x": 2316,
        "y": 570,
        "width": 73,
        "height": 19
      },
      "tax": {
        "x": 2316,
        "y": 667,
        "width": 73,
        "height": 10
      },
      "other_opex": {
        "x": 2316,
        "y": 804,
        "width": 73,
        "height": 153
      },
      "personnel_expenses": {
        "x": 2316,
        "y": 1131,
        "width": 73,
        "height": 65
      }
    },
    "labels": {
      "gucci": {
        "blocks": [
          {
            "x": 483,
            "top": 330,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#2e6065"
              },
              {
                "text": "(23%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "saint_laurent": {
        "blocks": [
          {
            "x": 483,
            "top": 605,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#2e6065"
              },
              {
                "text": "(9%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "bottega_veneta": {
        "blocks": [
          {
            "x": 483,
            "top": 767,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#2e6065"
              },
              {
                "text": "+4% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other_houses": {
        "blocks": [
          {
            "x": 483,
            "top": 902,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#2e6065"
              },
              {
                "text": "(8%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 365,
            "top": 1008,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other Houses",
                "size": 39,
                "weight": 800,
                "color": "#2e6065"
              }
            ]
          }
        ]
      },
      "eyewear_corporate": {
        "blocks": [
          {
            "x": 483,
            "top": 1068,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 40,
                "weight": 400,
                "color": "#2e6065"
              },
              {
                "text": "+24% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 380,
            "top": 1142,
            "anchor": "end",
            "lineGap": 8,
            "lines": [
              {
                "text": "Kering Eyewear",
                "size": 36,
                "weight": 800,
                "color": "#2e6065"
              },
              {
                "text": "& Corporate",
                "size": 36,
                "weight": 800,
                "color": "#2e6065"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1233,
            "top": 500,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 40,
                "weight": 800,
                "color": "#2e6065"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#2e6065"
              },
              {
                "text": "(12%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "segment_hub": {
        "blocks": []
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1233,
            "top": 1150,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 34,
                "weight": 800,
                "color": "#981500"
              },
              {
                "text": "($0.2B)",
                "size": 34,
                "weight": 400,
                "color": "#981500"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1604,
            "top": 382,
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
                "text": "74% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(3pp) Y/Y",
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
            "x": 1604,
            "top": 1140,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 35,
                "weight": 800,
                "color": "#981500"
              },
              {
                "text": "$value",
                "size": 35,
                "weight": 400,
                "color": "#981500"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1982,
            "top": 284,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
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
                "text": "15% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(9pp) Y/Y",
                "size": 28,
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
            "x": 1982,
            "top": 944,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 35,
                "weight": 800,
                "color": "#981500"
              },
              {
                "text": "expenses",
                "size": 35,
                "weight": 800,
                "color": "#981500"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#981500"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2428,
            "top": 328,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
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
                "text": "7% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(9pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2440,
            "top": 529,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 32,
                "weight": 800,
                "color": "#981500"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#981500"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2440,
            "top": 632,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 32,
                "weight": 800,
                "color": "#981500"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#981500"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2440,
            "top": 798,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other opex",
                "size": 32,
                "weight": 800,
                "color": "#981500"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#981500"
              },
              {
                "text": "41% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5pp Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "personnel_expenses": {
        "blocks": [
          {
            "x": 2440,
            "top": 1096,
            "anchor": "start",
            "lineGap": 8,
            "lines": [
              {
                "text": "Personnel",
                "size": 32,
                "weight": 800,
                "color": "#981500"
              },
              {
                "text": "expenses",
                "size": 32,
                "weight": 800,
                "color": "#981500"
              },
              {
                "text": "$value",
                "size": 32,
                "weight": 400,
                "color": "#981500"
              },
              {
                "text": "18% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2pp Y/Y",
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
      "id": "gucci",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Gucci",
      "value": 7.7,
      "valueText": "€7.7B",
      "notes": [
        "(23%) Y/Y"
      ],
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "saint_laurent",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Saint Laurent",
      "value": 2.9,
      "valueText": "€2.9B",
      "notes": [
        "(9%) Y/Y"
      ],
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "bottega_veneta",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Bottega Veneta",
      "value": 1.7,
      "valueText": "€1.7B",
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "other_houses",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Other Houses",
      "value": 3.2,
      "valueText": "€3.2B",
      "notes": [
        "(8%) Y/Y"
      ],
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "eyewear_corporate",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": [
        "Kering Eyewear",
        "& Corporate"
      ],
      "value": 1.9,
      "valueText": "€1.9B",
      "notes": [
        "+24% Y/Y"
      ],
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "segment_hub",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 17.4,
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 17.2,
      "valueText": "€17.2B",
      "notes": [
        "(12%) Y/Y"
      ],
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Eliminations",
      "value": 0.2,
      "valueText": "($0.2B)",
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 12.7,
      "valueText": "€12.7B",
      "notes": [
        "74% of revenue",
        "(3pp) Y/Y"
      ],
      "color": "#28a329",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_sales",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 4.5,
      "valueText": "(€4.5B)",
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 2.6,
      "valueText": "€2.6B",
      "notes": [
        "15% of revenue",
        "(9pp) Y/Y"
      ],
      "color": "#28a329",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "operating_expenses",
      "col": 4,
      "order": 1,
      "type": "cost",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 10.1,
      "valueText": "(€10.1B)",
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 1.2,
      "valueText": "€1.2B",
      "notes": [
        "7% of revenue",
        "(9pp) Y/Y"
      ],
      "color": "#28a329",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "other",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Other",
      "value": 0.9,
      "valueText": "(€0.9B)",
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Tax",
      "value": 0.5,
      "valueText": "(€0.5B)",
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    },
    {
      "id": "other_opex",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "Other opex",
      "value": 7.1,
      "valueText": "(€7.1B)",
      "notes": [
        "41% of revenue",
        "+5pp Y/Y"
      ],
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    },
    {
      "id": "personnel_expenses",
      "col": 5,
      "order": 4,
      "type": "cost",
      "label": [
        "Personnel",
        "expenses"
      ],
      "value": 3,
      "valueText": "(€3.0B)",
      "notes": [
        "18% of revenue",
        "+2pp Y/Y"
      ],
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    }
  ],
  "links": [
    {
      "source": "gucci",
      "target": "segment_hub",
      "value": 7.7,
      "sourceWidth": 164,
      "targetWidth": 164,
      "y0": 508,
      "y1": 652,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9dafb3"
    },
    {
      "source": "saint_laurent",
      "target": "segment_hub",
      "value": 2.9,
      "sourceWidth": 61,
      "targetWidth": 61,
      "y0": 732.5,
      "y1": 764.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9dafb3"
    },
    {
      "source": "bottega_veneta",
      "target": "segment_hub",
      "value": 1.7,
      "sourceWidth": 36,
      "targetWidth": 36,
      "y0": 881,
      "y1": 813,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9dafb3"
    },
    {
      "source": "other_houses",
      "target": "segment_hub",
      "value": 3.2,
      "sourceWidth": 69,
      "targetWidth": 69,
      "y0": 1035.5,
      "y1": 865.5,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#9dafb3"
    },
    {
      "source": "eyewear_corporate",
      "target": "segment_hub",
      "value": 1.9,
      "sourceWidth": 41,
      "targetWidth": 45,
      "y0": 1186.5,
      "y1": 922.5,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#9dafb3"
    },
    {
      "source": "segment_hub",
      "target": "revenue",
      "value": 17.2,
      "sourceWidth": 371,
      "targetWidth": 369,
      "y0": 755.5,
      "y1": 839.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9dafb3"
    },
    {
      "source": "segment_hub",
      "target": "eliminations",
      "value": 0.2,
      "sourceWidth": 4,
      "targetWidth": 4,
      "y0": 943,
      "y1": 1132,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 12.7,
      "sourceWidth": 272,
      "targetWidth": 272,
      "y0": 791,
      "y1": 711,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 4.5,
      "sourceWidth": 97,
      "targetWidth": 97,
      "y0": 975.5,
      "y1": 1076.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.6,
      "sourceWidth": 54,
      "targetWidth": 54,
      "y0": 602,
      "y1": 503,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 10.1,
      "sourceWidth": 218,
      "targetWidth": 218,
      "y0": 738,
      "y1": 819,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.2,
      "sourceWidth": 26,
      "targetWidth": 26,
      "y0": 489,
      "y1": 398,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.9,
      "sourceWidth": 19,
      "targetWidth": 19,
      "y0": 511.5,
      "y1": 579.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "sourceWidth": 9,
      "targetWidth": 10,
      "y0": 525.5,
      "y1": 672,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 7.1,
      "sourceWidth": 153,
      "targetWidth": 153,
      "y0": 786.5,
      "y1": 880.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "operating_expenses",
      "target": "personnel_expenses",
      "value": 3,
      "sourceWidth": 65,
      "targetWidth": 65,
      "y0": 895.5,
      "y1": 1163.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    }
  ],
  "i18n": {
    "zh": {
      "name": "开云集团 · 2024 财年",
      "meta": {
        "title": "开云集团 2024 财年利润表",
        "titleTextLength": 1750
      },
      "nodes": {
        "gucci": {
          "label": "Gucci",
          "notes": [
            "同比 (23%)"
          ]
        },
        "saint_laurent": {
          "label": "Saint Laurent",
          "notes": [
            "同比 (9%)"
          ]
        },
        "bottega_veneta": {
          "label": "Bottega Veneta",
          "notes": [
            "同比 +4%"
          ]
        },
        "other_houses": {
          "label": "其他品牌",
          "notes": [
            "同比 (8%)"
          ]
        },
        "eyewear_corporate": {
          "label": [
            "开云眼镜",
            "及公司业务"
          ],
          "notes": [
            "同比 +24%"
          ]
        },
        "segment_hub": {
          "label": ""
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (12%)"
          ]
        },
        "eliminations": {
          "label": "抵销项"
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "占收入 74%",
            "同比 (3 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "占收入 15%",
            "同比 (9 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "占收入 7%",
            "同比 (9 个百分点)"
          ]
        },
        "other": {
          "label": "其他"
        },
        "tax": {
          "label": "税费"
        },
        "other_opex": {
          "label": "其他运营费用",
          "notes": [
            "占收入 41%",
            "同比 +5 个百分点"
          ]
        },
        "personnel_expenses": {
          "label": [
            "人员",
            "费用"
          ],
          "notes": [
            "占收入 18%",
            "同比 +2 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "gucci": {
            "blocks": [
              {
                "x": 483,
                "top": 330,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#2e6065"
                  },
                  {
                    "text": "同比 (23%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "saint_laurent": {
            "blocks": [
              {
                "x": 483,
                "top": 605,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#2e6065"
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "bottega_veneta": {
            "blocks": [
              {
                "x": 483,
                "top": 767,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#2e6065"
                  },
                  {
                    "text": "同比 +4%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other_houses": {
            "blocks": [
              {
                "x": 483,
                "top": 902,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#2e6065"
                  },
                  {
                    "text": "同比 (8%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 365,
                "top": 1008,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他品牌",
                    "size": 39,
                    "weight": 800,
                    "color": "#2e6065"
                  }
                ]
              }
            ]
          },
          "eyewear_corporate": {
            "blocks": [
              {
                "x": 483,
                "top": 1068,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 40,
                    "weight": 400,
                    "color": "#2e6065"
                  },
                  {
                    "text": "同比 +24%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 380,
                "top": 1142,
                "anchor": "end",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "开云眼镜",
                    "size": 36,
                    "weight": 800,
                    "color": "#2e6065"
                  },
                  {
                    "text": "及公司业务",
                    "size": 36,
                    "weight": 800,
                    "color": "#2e6065"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1233,
                "top": 500,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 40,
                    "weight": 800,
                    "color": "#2e6065"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#2e6065"
                  },
                  {
                    "text": "同比 (12%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "segment_hub": {
            "blocks": []
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1233,
                "top": 1150,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销项",
                    "size": 34,
                    "weight": 800,
                    "color": "#981500"
                  },
                  {
                    "text": "($0.2B)",
                    "size": 34,
                    "weight": 400,
                    "color": "#981500"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1604,
                "top": 382,
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
                    "text": "占收入 74%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (3 个百分点)",
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
                "x": 1604,
                "top": 1140,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 35,
                    "weight": 800,
                    "color": "#981500"
                  },
                  {
                    "text": "$value",
                    "size": 35,
                    "weight": 400,
                    "color": "#981500"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1982,
                "top": 284,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
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
                    "text": "占收入 15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (9 个百分点)",
                    "size": 28,
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
                "x": 1982,
                "top": 944,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 35,
                    "weight": 800,
                    "color": "#981500"
                  },
                  {
                    "text": "费用",
                    "size": 35,
                    "weight": 800,
                    "color": "#981500"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#981500"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2428,
                "top": 328,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
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
                    "text": "占收入 7%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (9 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2440,
                "top": 529,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 32,
                    "weight": 800,
                    "color": "#981500"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#981500"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2440,
                "top": 632,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 32,
                    "weight": 800,
                    "color": "#981500"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#981500"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2440,
                "top": 798,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 32,
                    "weight": 800,
                    "color": "#981500"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#981500"
                  },
                  {
                    "text": "占收入 41%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5 个百分点",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "personnel_expenses": {
            "blocks": [
              {
                "x": 2440,
                "top": 1096,
                "anchor": "start",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "人员",
                    "size": 32,
                    "weight": 800,
                    "color": "#981500"
                  },
                  {
                    "text": "费用",
                    "size": 32,
                    "weight": 800,
                    "color": "#981500"
                  },
                  {
                    "text": "$value",
                    "size": 32,
                    "weight": 400,
                    "color": "#981500"
                  },
                  {
                    "text": "占收入 18%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2 个百分点",
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
  },
  "rasterAnnotations": [
    {
      "key": "gucci-fy24",
      "href": "data/assets/raster-annotations/kering/gucci-fy24.png",
      "x": 54,
      "y": 460,
      "width": 340,
      "height": 77,
      "clearance": true
    },
    {
      "key": "saint_laurent-fy24",
      "href": "data/assets/raster-annotations/kering/saint_laurent-fy24.png",
      "x": 23,
      "y": 700,
      "width": 400,
      "height": 58,
      "clearance": true
    },
    {
      "key": "bottega_veneta-fy24",
      "href": "data/assets/raster-annotations/kering/bottega_veneta-fy24.png",
      "x": 46,
      "y": 852,
      "width": 358,
      "height": 55,
      "clearance": true
    },
    {
      "key": "kering-wordmark-fy24",
      "href": "data/assets/raster-annotations/kering/kering-wordmark-fy24.png",
      "x": 675,
      "y": 310,
      "width": 630,
      "height": 85,
      "clearance": true
    },
    {
      "key": "kering-owl-fy24",
      "href": "data/assets/raster-annotations/kering/kering-owl-fy24.png",
      "x": 897,
      "y": 413,
      "width": 198,
      "height": 116,
      "clearance": true
    }
  ]
});})();
