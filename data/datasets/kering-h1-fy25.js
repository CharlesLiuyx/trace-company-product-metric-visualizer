(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "kering-h1-fy25",
  "name": "Kering · H1 FY25",
  "company": "Kering",
  "meta": {
    "company": "Kering",
    "title": "Kering H1 FY25 Income Statement",
    "period": "H1 FY25",
    "periodNote": "Ending June 2025",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/kering-h1-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 2150,
    "hidePeriodStamp": true
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
        "node": "#2d575e",
        "label": "#2e6065"
      },
      "hub": {
        "node": "#2d575e",
        "label": "#2e6065"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#cc0000",
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
    "scale": 50,
    "nodes": {
      "gucci": {
        "x": 447,
        "y": 435,
        "width": 73,
        "height": 153
      },
      "saint_laurent": {
        "x": 447,
        "y": 708,
        "width": 73,
        "height": 65
      },
      "bottega_veneta": {
        "x": 447,
        "y": 874,
        "width": 73,
        "height": 42
      },
      "other_houses": {
        "x": 447,
        "y": 1019,
        "width": 73,
        "height": 75
      },
      "eyewear_corporate": {
        "x": 447,
        "y": 1199,
        "width": 73,
        "height": 56
      },
      "segment_hub": {
        "x": 820,
        "y": 562,
        "width": 73,
        "height": 389
      },
      "revenue": {
        "x": 1194,
        "y": 658,
        "width": 73,
        "height": 382
      },
      "eliminations": {
        "x": 1194,
        "y": 1172,
        "width": 73,
        "height": 6
      },
      "gross_profit": {
        "x": 1567,
        "y": 566,
        "width": 73,
        "height": 280
      },
      "cost_of_sales": {
        "x": 1567,
        "y": 1022,
        "width": 73,
        "height": 103
      },
      "operating_profit": {
        "x": 1941,
        "y": 479,
        "width": 73,
        "height": 50
      },
      "operating_expenses": {
        "x": 1941,
        "y": 706,
        "width": 73,
        "height": 230
      },
      "net_profit": {
        "x": 2315,
        "y": 374,
        "width": 73,
        "height": 27
      },
      "other": {
        "x": 2315,
        "y": 579,
        "width": 73,
        "height": 14
      },
      "tax": {
        "x": 2315,
        "y": 669,
        "width": 73,
        "height": 10
      },
      "other_opex": {
        "x": 2315,
        "y": 811,
        "width": 73,
        "height": 156
      },
      "personnel_expenses": {
        "x": 2315,
        "y": 1118,
        "width": 73,
        "height": 74
      }
    },
    "labels": {
      "gucci": {
        "blocks": [
          {
            "x": 483,
            "top": 344,
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
                "text": "(26%) Y/Y",
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
            "top": 617,
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
                "text": "(11%) Y/Y",
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
            "top": 783,
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
                "text": "+1% Y/Y",
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
            "top": 930,
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
                "text": "(15%) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 392,
            "top": 1031,
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
            "top": 1108,
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
                "text": "+2% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 392,
            "top": 1182.5,
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
            "x": 1231,
            "top": 513,
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
                "text": "(16%) Y/Y",
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
            "x": 1231,
            "top": 1199,
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
                "text": "($0.1B)",
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
            "x": 1603,
            "top": 386,
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
                "text": "73% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(1pp) Y/Y",
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
            "x": 1603,
            "top": 1143,
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
            "x": 1978,
            "top": 296,
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
                "text": "13% of revenue",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(4pp) Y/Y",
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
            "x": 1978,
            "top": 957,
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
            "x": 2523,
            "top": 335,
            "anchor": "middle",
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
                "text": "(4pp) Y/Y",
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
            "x": 2523,
            "top": 551,
            "anchor": "middle",
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
            "x": 2523,
            "top": 641,
            "anchor": "middle",
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
            "x": 2523,
            "top": 813,
            "anchor": "middle",
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
                "text": "+1pp Y/Y",
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
            "x": 2523,
            "top": 1107,
            "anchor": "middle",
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
                "text": "19% of revenue",
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
      "value": 3,
      "valueText": "€3.0B",
      "notes": [
        "(26%) Y/Y"
      ],
      "color": "#2d575e",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "saint_laurent",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Saint Laurent",
      "value": 1.3,
      "valueText": "€1.3B",
      "notes": [
        "(11%) Y/Y"
      ],
      "color": "#2d575e",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "bottega_veneta",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Bottega Veneta",
      "value": 0.8,
      "valueText": "€0.8B",
      "notes": [
        "+1% Y/Y"
      ],
      "color": "#2d575e",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "other_houses",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Other Houses",
      "value": 1.5,
      "valueText": "€1.5B",
      "notes": [
        "(15%) Y/Y"
      ],
      "color": "#2d575e",
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
      "value": 1.1,
      "valueText": "€1.1B",
      "notes": [
        "+2% Y/Y"
      ],
      "color": "#2d575e",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "segment_hub",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 7.7,
      "color": "#2d575e",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "revenue",
      "col": 2,
      "order": 0,
      "type": "hub",
      "label": "Revenue",
      "value": 7.6,
      "valueText": "€7.6B",
      "notes": [
        "(16%) Y/Y"
      ],
      "color": "#2d575e",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3"
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Eliminations",
      "value": 0.1,
      "valueText": "($0.1B)",
      "color": "#cc0000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 5.5,
      "valueText": "€5.5B",
      "notes": [
        "73% of revenue",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "cost_of_sales",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 2,
      "valueText": "(€2.0B)",
      "color": "#cc0000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 1,
      "valueText": "€1.0B",
      "notes": [
        "13% of revenue",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
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
      "value": 4.5,
      "valueText": "(€4.5B)",
      "color": "#cc0000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 0.5,
      "valueText": "€0.5B",
      "notes": [
        "7% of revenue",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    },
    {
      "id": "other",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Other",
      "value": 0.3,
      "valueText": "(€0.3B)",
      "color": "#cc0000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Tax",
      "value": 0.2,
      "valueText": "(€0.2B)",
      "color": "#cc0000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    },
    {
      "id": "other_opex",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "Other opex",
      "value": 3.1,
      "valueText": "(€3.1B)",
      "notes": [
        "41% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
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
      "value": 1.5,
      "valueText": "(€1.5B)",
      "notes": [
        "19% of revenue",
        "+2pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f"
    }
  ],
  "links": [
    {
      "source": "gucci",
      "target": "segment_hub",
      "value": 3,
      "sourceWidth": 153,
      "targetWidth": 153,
      "y0": 511.5,
      "y1": 638.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9dafb3"
    },
    {
      "source": "saint_laurent",
      "target": "segment_hub",
      "value": 1.3,
      "sourceWidth": 65,
      "targetWidth": 65,
      "y0": 740.5,
      "y1": 747.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9dafb3"
    },
    {
      "source": "bottega_veneta",
      "target": "segment_hub",
      "value": 0.8,
      "sourceWidth": 42,
      "targetWidth": 42,
      "y0": 895,
      "y1": 801,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9dafb3"
    },
    {
      "source": "other_houses",
      "target": "segment_hub",
      "value": 1.5,
      "sourceWidth": 75,
      "targetWidth": 75,
      "y0": 1056.5,
      "y1": 859.5,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#9dafb3"
    },
    {
      "source": "eyewear_corporate",
      "target": "segment_hub",
      "value": 1.1,
      "sourceWidth": 56,
      "targetWidth": 54,
      "y0": 1227,
      "y1": 924,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#9dafb3"
    },
    {
      "source": "segment_hub",
      "target": "revenue",
      "value": 7.6,
      "sourceWidth": 383,
      "targetWidth": 382,
      "y0": 753.5,
      "y1": 849,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9dafb3"
    },
    {
      "source": "segment_hub",
      "target": "eliminations",
      "value": 0.1,
      "sourceWidth": 6,
      "targetWidth": 6,
      "y0": 948,
      "y1": 1175,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 5.5,
      "sourceWidth": 280,
      "targetWidth": 280,
      "y0": 798,
      "y1": 706,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 2,
      "sourceWidth": 102,
      "targetWidth": 103,
      "y0": 989,
      "y1": 1073.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 1,
      "sourceWidth": 50,
      "targetWidth": 50,
      "y0": 591,
      "y1": 504,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.5,
      "sourceWidth": 230,
      "targetWidth": 230,
      "y0": 731,
      "y1": 821,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.5,
      "sourceWidth": 27,
      "targetWidth": 27,
      "y0": 492.5,
      "y1": 387.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.3,
      "sourceWidth": 14,
      "targetWidth": 14,
      "y0": 513,
      "y1": 586,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.2,
      "sourceWidth": 9,
      "targetWidth": 10,
      "y0": 524.5,
      "y1": 674,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 3.1,
      "sourceWidth": 156,
      "targetWidth": 156,
      "y0": 784,
      "y1": 889,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    },
    {
      "source": "operating_expenses",
      "target": "personnel_expenses",
      "value": 1.5,
      "sourceWidth": 74,
      "targetWidth": 74,
      "y0": 899,
      "y1": 1155,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df7f7f"
    }
  ],
  "i18n": {
    "zh": {
      "name": "开云集团 · 2025 财年上半年",
      "meta": {
        "title": "开云集团 2025 财年上半年利润表",
        "titleTextLength": 1840,
        "period": "2025 财年上半年",
        "periodNote": "截至 2025 年 6 月",
        "hidePeriodStamp": true
      },
      "nodes": {
        "gucci": {
          "label": "Gucci",
          "notes": [
            "同比 (26%)"
          ]
        },
        "saint_laurent": {
          "label": "Saint Laurent",
          "notes": [
            "同比 (11%)"
          ]
        },
        "bottega_veneta": {
          "label": "Bottega Veneta",
          "notes": [
            "同比 +1%"
          ]
        },
        "other_houses": {
          "label": "其他品牌",
          "notes": [
            "同比 (15%)"
          ]
        },
        "eyewear_corporate": {
          "label": [
            "开云眼镜",
            "及公司业务"
          ],
          "notes": [
            "同比 +2%"
          ]
        },
        "segment_hub": {
          "label": ""
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (16%)"
          ]
        },
        "eliminations": {
          "label": "抵销项"
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "占收入 73%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "占收入 13%",
            "同比 (4 个百分点)"
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
            "同比 (4 个百分点)"
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
            "同比 +1 个百分点"
          ]
        },
        "personnel_expenses": {
          "label": [
            "人员",
            "费用"
          ],
          "notes": [
            "占收入 19%",
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
                "top": 344,
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
                    "text": "同比 (26%)",
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
                "top": 617,
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
                    "text": "同比 (11%)",
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
                "top": 783,
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
                    "text": "同比 +1%",
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
                "top": 930,
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
                    "text": "同比 (15%)",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 392,
                "top": 1031,
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
                "top": 1108,
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
                    "text": "同比 +2%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 392,
                "top": 1182.5,
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
                "x": 1231,
                "top": 513,
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
                    "text": "同比 (16%)",
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
                "x": 1231,
                "top": 1199,
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
                    "text": "($0.1B)",
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
                "x": 1603,
                "top": 386,
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
                    "text": "占收入 73%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 1603,
                "top": 1143,
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
                "x": 1978,
                "top": 296,
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
                    "text": "占收入 13%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (4 个百分点)",
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
                "x": 1978,
                "top": 957,
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
                "x": 2523,
                "top": 335,
                "anchor": "middle",
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
                    "text": "同比 (4 个百分点)",
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
                "x": 2523,
                "top": 551,
                "anchor": "middle",
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
                "x": 2523,
                "top": 641,
                "anchor": "middle",
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
                "x": 2523,
                "top": 813,
                "anchor": "middle",
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
                    "text": "同比 +1 个百分点",
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
                "x": 2523,
                "top": 1107,
                "anchor": "middle",
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
                    "text": "占收入 19%",
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
      "key": "kering-h1-fy25",
      "href": "data/assets/raster-annotations/kering/kering-h1-fy25.png",
      "x": 687,
      "y": 313,
      "width": 613,
      "height": 79
    },
    {
      "key": "kering-owl-h1-fy25",
      "href": "data/assets/raster-annotations/kering/kering-owl-h1-fy25.png",
      "x": 898,
      "y": 415,
      "width": 195,
      "height": 113
    },
    {
      "key": "gucci-h1-fy25",
      "href": "data/assets/raster-annotations/kering/gucci-h1-fy25.png",
      "x": 59,
      "y": 474,
      "width": 329,
      "height": 64
    },
    {
      "key": "saint-laurent-h1-fy25",
      "href": "data/assets/raster-annotations/kering/saint-laurent-h1-fy25.png",
      "x": 24,
      "y": 713,
      "width": 399,
      "height": 53
    },
    {
      "key": "bottega-veneta-h1-fy25",
      "href": "data/assets/raster-annotations/kering/bottega-veneta-h1-fy25.png",
      "x": 46,
      "y": 870,
      "width": 357,
      "height": 46
    }
  ]
});})();
