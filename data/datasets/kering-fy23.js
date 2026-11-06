(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "kering-fy23",
  "name": "Kering · FY23",
  "company": "Kering",
  "meta": {
    "company": "Kering",
    "title": "Kering FY23 Income Statement",
    "period": "FY23",
    "periodNote": "",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/kering-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 197,
    "titleSize": 126,
    "titleWeight": 800,
    "titleTextLength": 1930,
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
    "scale": 14.7,
    "nodes": {
      "gucci": {
        "x": 441,
        "y": 428,
        "width": 73,
        "height": 145
      },
      "saint_laurent": {
        "x": 441,
        "y": 727,
        "width": 73,
        "height": 47
      },
      "bottega_veneta": {
        "x": 441,
        "y": 930,
        "width": 73,
        "height": 24
      },
      "other_houses": {
        "x": 441,
        "y": 1083,
        "width": 73,
        "height": 52
      },
      "eyewear_corporate": {
        "x": 441,
        "y": 1284,
        "width": 73,
        "height": 24
      },
      "segment_hub": {
        "x": 814,
        "y": 649,
        "width": 73,
        "height": 291
      },
      "revenue": {
        "x": 1186,
        "y": 690,
        "width": 73,
        "height": 289
      },
      "eliminations": {
        "x": 1186,
        "y": 1161,
        "width": 73,
        "height": 3
      },
      "gross_profit": {
        "x": 1560,
        "y": 591,
        "width": 73,
        "height": 221
      },
      "cost_of_sales": {
        "x": 1562,
        "y": 1005,
        "width": 73,
        "height": 69
      },
      "operating_profit": {
        "x": 1938,
        "y": 479,
        "width": 73,
        "height": 70
      },
      "operating_expenses": {
        "x": 1938,
        "y": 778,
        "width": 73,
        "height": 151
      },
      "net_profit": {
        "x": 2309,
        "y": 363,
        "width": 73,
        "height": 46
      },
      "tax": {
        "x": 2309,
        "y": 601,
        "width": 73,
        "height": 18
      },
      "other": {
        "x": 2309,
        "y": 695,
        "width": 73,
        "height": 8
      },
      "personnel_expenses": {
        "x": 2309,
        "y": 898,
        "width": 73,
        "height": 107
      },
      "other_opex": {
        "x": 2309,
        "y": 1148,
        "width": 73,
        "height": 44
      }
    },
    "labels": {
      "segment_hub": {
        "blocks": []
      },
      "gucci": {
        "blocks": [
          {
            "x": 478,
            "top": 334,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "(6%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "saint_laurent": {
        "blocks": [
          {
            "x": 478,
            "top": 634,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "(4%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "bottega_veneta": {
        "blocks": [
          {
            "x": 478,
            "top": 839,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "(5%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_houses": {
        "blocks": [
          {
            "x": 478,
            "top": 989,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "(9%) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 380,
            "top": 1085,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Other Houses",
                "size": 38,
                "weight": 800,
                "color": "#2d575e"
              }
            ]
          }
        ]
      },
      "eyewear_corporate": {
        "blocks": [
          {
            "x": 478,
            "top": 1192,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+38% Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 380,
            "top": 1249.5,
            "anchor": "end",
            "lineGap": 9,
            "lines": [
              {
                "text": "Kering Eyewear",
                "size": 38,
                "weight": 800,
                "color": "#2d575e"
              },
              {
                "text": "& Corporate",
                "size": 38,
                "weight": 800,
                "color": "#2d575e"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1216,
            "top": 543,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Revenue",
                "size": 36,
                "weight": 800,
                "color": "#2d575e"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "(4%) Y/Y",
                "size": 27,
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
            "x": 1220,
            "top": 1183,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Eliminations",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1596,
            "top": 405,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Gross profit",
                "size": 36,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "76% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27,
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
            "x": 1602,
            "top": 1090,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1970,
            "top": 294,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating profit",
                "size": 36,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "24% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1974,
            "top": 944,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Operating",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2515,
            "top": 333,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Net profit",
                "size": 36,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "16% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27,
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
            "x": 2515,
            "top": 663,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
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
            "x": 2515,
            "top": 561,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Tax",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2515,
            "top": 1135,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Other opex",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "37% of revenue",
                "size": 27,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "personnel_expenses": {
        "blocks": [
          {
            "x": 2515,
            "top": 905,
            "anchor": "middle",
            "lineGap": 8,
            "lines": [
              {
                "text": "Personnel",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 36,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 38,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "15% of revenue",
                "size": 27,
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
      "id": "gucci",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "Gucci",
      "value": 9.9,
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3",
      "valueText": "€9.9B",
      "notes": [
        "(6%) Y/Y"
      ]
    },
    {
      "id": "saint_laurent",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "Saint Laurent",
      "value": 3.2,
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3",
      "valueText": "€3.2B",
      "notes": [
        "(4%) Y/Y"
      ]
    },
    {
      "id": "bottega_veneta",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Bottega Veneta",
      "value": 1.6,
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3",
      "valueText": "€1.6B",
      "notes": [
        "(5%) Y/Y"
      ]
    },
    {
      "id": "other_houses",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Other Houses",
      "value": 3.5,
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3",
      "valueText": "€3.5B",
      "notes": [
        "(9%) Y/Y"
      ]
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
      "value": 1.6,
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3",
      "valueText": "€1.6B",
      "notes": [
        "+38% Y/Y"
      ]
    },
    {
      "id": "segment_hub",
      "col": 1,
      "order": 0,
      "type": "hub",
      "label": "",
      "value": 19.8,
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
      "value": 19.6,
      "color": "#2e6065",
      "labelColor": "#2e6065",
      "linkTint": "#9dafb3",
      "valueText": "€19.6B",
      "notes": [
        "(4%) Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "col": 2,
      "order": 1,
      "type": "cost",
      "label": "Eliminations",
      "value": 0.2,
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f",
      "valueText": "($0.2B)"
    },
    {
      "id": "gross_profit",
      "col": 3,
      "order": 0,
      "type": "profit",
      "label": "Gross profit",
      "value": 14.9,
      "color": "#28a329",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "€14.9B",
      "notes": [
        "76% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 3,
      "order": 1,
      "type": "cost",
      "label": "Cost of sales",
      "value": 4.6,
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f",
      "valueText": "(€4.6B)"
    },
    {
      "id": "operating_profit",
      "col": 4,
      "order": 0,
      "type": "profit",
      "label": "Operating profit",
      "value": 4.7,
      "color": "#28a329",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "€4.7B",
      "notes": [
        "24% of revenue",
        "(3pp) Y/Y"
      ]
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
      "value": 10.2,
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f",
      "valueText": "(€10.2B)"
    },
    {
      "id": "net_profit",
      "col": 5,
      "order": 0,
      "type": "profit",
      "label": "Net profit",
      "value": 3.1,
      "color": "#28a329",
      "labelColor": "#008f51",
      "linkTint": "#99cd99",
      "valueText": "€3.1B",
      "notes": [
        "16% of revenue",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "other",
      "col": 5,
      "order": 1,
      "type": "cost",
      "label": "Other",
      "value": 0.5,
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f",
      "valueText": "(€0.5B)"
    },
    {
      "id": "tax",
      "col": 5,
      "order": 2,
      "type": "cost",
      "label": "Tax",
      "value": 1.2,
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f",
      "valueText": "(€1.2B)"
    },
    {
      "id": "other_opex",
      "col": 5,
      "order": 3,
      "type": "cost",
      "label": "Other opex",
      "value": 7.2,
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f",
      "valueText": "(€7.2B)",
      "notes": [
        "37% of revenue"
      ]
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
      "color": "#d40000",
      "labelColor": "#981500",
      "linkTint": "#df7f7f",
      "valueText": "(€3.0B)",
      "notes": [
        "15% of revenue"
      ]
    }
  ],
  "links": [
    {
      "source": "gucci",
      "target": "segment_hub",
      "value": 9.9,
      "sourceWidth": 145,
      "targetWidth": 145,
      "y0": 500.5,
      "y1": 721.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99abaf"
    },
    {
      "source": "saint_laurent",
      "target": "segment_hub",
      "value": 3.2,
      "sourceWidth": 47,
      "targetWidth": 47,
      "y0": 750.5,
      "y1": 817.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99abaf"
    },
    {
      "source": "bottega_veneta",
      "target": "segment_hub",
      "value": 1.6,
      "sourceWidth": 24,
      "targetWidth": 24,
      "y0": 942,
      "y1": 853,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#99abaf"
    },
    {
      "source": "other_houses",
      "target": "segment_hub",
      "value": 3.5,
      "sourceWidth": 52,
      "targetWidth": 52,
      "y0": 1109,
      "y1": 891,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#99abaf"
    },
    {
      "source": "eyewear_corporate",
      "target": "segment_hub",
      "value": 1.6,
      "sourceWidth": 24,
      "targetWidth": 23,
      "y0": 1296,
      "y1": 928.5,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#99abaf"
    },
    {
      "source": "segment_hub",
      "target": "revenue",
      "value": 19.6,
      "sourceWidth": 288,
      "targetWidth": 289,
      "y0": 793,
      "y1": 834.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99abaf"
    },
    {
      "source": "segment_hub",
      "target": "eliminations",
      "value": 0.2,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 938.5,
      "y1": 1162.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 14.9,
      "sourceWidth": 220,
      "targetWidth": 221,
      "y0": 800,
      "y1": 701.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 4.6,
      "sourceWidth": 69,
      "targetWidth": 69,
      "y0": 944.5,
      "y1": 1039.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 4.7,
      "sourceWidth": 70,
      "targetWidth": 70,
      "y0": 626,
      "y1": 514,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 10.2,
      "sourceWidth": 151,
      "targetWidth": 151,
      "y0": 736.5,
      "y1": 853.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 3.1,
      "sourceWidth": 46,
      "targetWidth": 46,
      "y0": 502,
      "y1": 386,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.2,
      "sourceWidth": 17,
      "targetWidth": 18,
      "y0": 533.5,
      "y1": 610,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.5,
      "sourceWidth": 7,
      "targetWidth": 8,
      "y0": 545.5,
      "y1": 699,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel_expenses",
      "value": 3,
      "sourceWidth": 107,
      "targetWidth": 107,
      "y0": 831.5,
      "y1": 951.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 7.2,
      "sourceWidth": 44,
      "targetWidth": 44,
      "y0": 907,
      "y1": 1170,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "开云集团 · 2023 财年",
      "meta": {
        "title": "开云集团 2023 财年利润表",
        "period": "2023 财年",
        "hidePeriodStamp": true,
        "titleTextLength": 1750
      },
      "nodes": {
        "gucci": {
          "label": "Gucci",
          "notes": [
            "同比 (6%)"
          ]
        },
        "saint_laurent": {
          "label": "Saint Laurent",
          "notes": [
            "同比 (4%)"
          ]
        },
        "bottega_veneta": {
          "label": "Bottega Veneta",
          "notes": [
            "同比 (5%)"
          ]
        },
        "other_houses": {
          "label": "其他品牌",
          "notes": [
            "同比 (9%)"
          ]
        },
        "eyewear_corporate": {
          "label": [
            "开云眼镜",
            "及公司业务"
          ],
          "notes": [
            "同比 +38%"
          ]
        },
        "segment_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 (4%)"
          ]
        },
        "eliminations": {
          "label": "抵销项",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "占收入 76%",
            "同比 +2 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "占收入 24%",
            "同比 (3 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ],
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "占收入 16%",
            "同比 (3 个百分点)"
          ]
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "other_opex": {
          "label": "其他运营费用",
          "notes": [
            "占收入 37%"
          ]
        },
        "personnel_expenses": {
          "label": [
            "人员",
            "费用"
          ],
          "notes": [
            "占收入 15%"
          ]
        }
      },
      "layout": {
        "labels": {
          "segment_hub": {
            "blocks": []
          },
          "gucci": {
            "blocks": [
              {
                "x": 478,
                "top": 334,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 (6%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "saint_laurent": {
            "blocks": [
              {
                "x": 478,
                "top": 634,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "bottega_veneta": {
            "blocks": [
              {
                "x": 478,
                "top": 839,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_houses": {
            "blocks": [
              {
                "x": 478,
                "top": 989,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 (9%)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 380,
                "top": 1085,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "其他品牌",
                    "size": 38,
                    "weight": 800,
                    "color": "#2d575e"
                  }
                ]
              }
            ]
          },
          "eyewear_corporate": {
            "blocks": [
              {
                "x": 478,
                "top": 1192,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +38%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 380,
                "top": 1249.5,
                "anchor": "end",
                "lineGap": 9,
                "lines": [
                  {
                    "text": "开云眼镜",
                    "size": 38,
                    "weight": 800,
                    "color": "#2d575e"
                  },
                  {
                    "text": "及公司业务",
                    "size": 38,
                    "weight": 800,
                    "color": "#2d575e"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1216,
                "top": 543,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36,
                    "weight": 800,
                    "color": "#2d575e"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 (4%)",
                    "size": 27,
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
                "x": 1220,
                "top": 1183,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "抵销项",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1596,
                "top": 405,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 36,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 76%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27,
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
                "x": 1602,
                "top": 1090,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1970,
                "top": 294,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 36,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 24%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1974,
                "top": 944,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2515,
                "top": 333,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 16%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27,
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
                "x": 2515,
                "top": 663,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
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
                "x": 2515,
                "top": 561,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "税费",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2515,
                "top": 1135,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 37%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "personnel_expenses": {
            "blocks": [
              {
                "x": 2515,
                "top": 905,
                "anchor": "middle",
                "lineGap": 8,
                "lines": [
                  {
                    "text": "人员",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 36,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 38,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 15%",
                    "size": 27,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"278\" y=\"255\" fill=\"#155077\" font-size=\"38\" font-weight=\"700\">单位：欧元</text><text x=\"170\" y=\"1438\" font-size=\"40\" font-weight=\"700\">来源：财务业绩</text>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "kering-fy23",
      "href": "data/assets/raster-annotations/kering/kering-fy23.png",
      "x": 677,
      "y": 309,
      "width": 618,
      "height": 201
    },
    {
      "key": "gucci-fy23",
      "href": "data/assets/raster-annotations/kering/gucci-fy23.png",
      "x": 59,
      "y": 476,
      "width": 329,
      "height": 56
    },
    {
      "key": "saint-fy23",
      "href": "data/assets/raster-annotations/kering/saint-fy23.png",
      "x": 27,
      "y": 722,
      "width": 392,
      "height": 49
    },
    {
      "key": "bottega-fy23",
      "href": "data/assets/raster-annotations/kering/bottega-fy23.png",
      "x": 49,
      "y": 918,
      "width": 350,
      "height": 42
    }
  ],
  "annotationsSvg": "<text x=\"278\" y=\"255\" fill=\"#155077\" font-size=\"38\" font-weight=\"700\">in euros</text><text x=\"170\" y=\"1438\" font-size=\"40\" font-weight=\"700\">Source: Financial results</text>"
});})();
