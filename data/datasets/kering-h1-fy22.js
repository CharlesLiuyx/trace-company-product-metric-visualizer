(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "kering-h1-fy22",
  "name": "Kering · H1 FY22",
  "company": "Kering",
  "meta": {
    "company": "Kering",
    "title": "Kering H1 FY22 Income Statement",
    "period": "H1 FY22",
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/kering-h1-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 123,
    "titleWeight": 800,
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
    "noteColor": "#777777",
    "nodeRadius": 0,
    "nodeWidth": 72,
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#2d575e",
        "label": "#2d575e"
      },
      "hub": {
        "node": "#2d575e",
        "label": "#2d575e"
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
      "source": "#99abaf",
      "hub": "#99abaf",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "nodes": [
    {
      "id": "gucci",
      "value": 5.2,
      "label": "Gucci",
      "type": "source",
      "valueText": "€5.2B",
      "notes": [
        "+15% Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "saint_laurent",
      "value": 1.5,
      "label": "Saint Laurent",
      "type": "source",
      "valueText": "€1.5B",
      "notes": [
        "+42% Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "bottega_veneta",
      "value": 0.8,
      "label": "Bottega Veneta",
      "type": "source",
      "valueText": "€0.8B",
      "notes": [
        "+18% Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "other_houses",
      "value": 2,
      "label": "Other Houses",
      "type": "source",
      "valueText": "€2.0B",
      "notes": [
        "+32% Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "eyewear_corporate",
      "value": 0.6,
      "label": [
        "Kering Eyewear",
        "& Corporate"
      ],
      "type": "source",
      "valueText": "€0.6B",
      "notes": [
        "+49% Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "revenue",
      "value": 9.9,
      "label": "Revenue",
      "type": "hub",
      "valueText": "€9.9B",
      "notes": [
        "+23% Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "gross_profit",
      "value": 7.4,
      "label": "Gross profit",
      "type": "profit",
      "valueText": "€7.4B",
      "notes": [
        "74% of revenue",
        "+0.5pp Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "cost_of_sales",
      "value": 2.6,
      "label": "Cost of sales",
      "type": "cost",
      "valueText": "(€2.6B)",
      "notes": [],
      "col": 0,
      "order": 0
    },
    {
      "id": "operating_profit",
      "value": 2.8,
      "label": "Operating profit",
      "type": "profit",
      "valueText": "€2.8B",
      "notes": [
        "28% of revenue",
        "+1pp Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "operating_expenses",
      "value": 4.6,
      "label": [
        "Operating",
        "expenses"
      ],
      "type": "cost",
      "valueText": "(€4.6B)",
      "notes": [],
      "col": 0,
      "order": 0
    },
    {
      "id": "net_profit",
      "value": 2,
      "label": "Net profit",
      "type": "profit",
      "valueText": "€2.0B",
      "notes": [
        "21% of revenue",
        "+2pp Y/Y"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "tax",
      "value": 0.7,
      "label": "Tax",
      "type": "cost",
      "valueText": "(€0.7B)",
      "notes": [],
      "col": 0,
      "order": 0
    },
    {
      "id": "other",
      "value": 0.017,
      "label": "Other",
      "type": "cost",
      "valueText": "(€17M)",
      "notes": [],
      "col": 0,
      "order": 0
    },
    {
      "id": "personnel_expenses",
      "value": 1.4,
      "label": [
        "Personnel",
        "expenses"
      ],
      "type": "cost",
      "valueText": "(€1.4B)",
      "notes": [
        "14% of revenue"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "other_opex",
      "value": 3.2,
      "label": "Other opex",
      "type": "cost",
      "valueText": "(€3.2B)",
      "notes": [
        "32% of revenue"
      ],
      "col": 0,
      "order": 0
    },
    {
      "id": "eliminations",
      "value": 0.1,
      "label": "Eliminations",
      "type": "cost",
      "valueText": "($0.1B)",
      "notes": [],
      "col": 0,
      "order": 0
    },
    {
      "id": "segment_hub",
      "value": 10.1,
      "label": "",
      "type": "hub",
      "col": 1,
      "order": 0
    }
  ],
  "links": [
    {
      "source": "gucci",
      "target": "segment_hub",
      "value": 5.2,
      "sourceWidth": 165,
      "targetWidth": 165,
      "y0": 483.5,
      "y1": 658.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "saint_laurent",
      "target": "segment_hub",
      "value": 1.5,
      "sourceWidth": 46,
      "targetWidth": 46,
      "y0": 723.0,
      "y1": 764.0,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "bottega_veneta",
      "target": "segment_hub",
      "value": 0.8,
      "sourceWidth": 27,
      "targetWidth": 27,
      "y0": 918.5,
      "y1": 800.5,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "other_houses",
      "target": "segment_hub",
      "value": 2,
      "sourceWidth": 62,
      "targetWidth": 62,
      "y0": 1099.0,
      "y1": 845.0,
      "sourceOrder": 0,
      "targetOrder": 3
    },
    {
      "source": "eyewear_corporate",
      "target": "segment_hub",
      "value": 0.6,
      "sourceWidth": 19,
      "targetWidth": 20,
      "y0": 1298.5,
      "y1": 886,
      "sourceOrder": 0,
      "targetOrder": 4
    },
    {
      "source": "segment_hub",
      "target": "revenue",
      "value": 9.9,
      "sourceWidth": 317,
      "targetWidth": 317,
      "y0": 734.5,
      "y1": 762.5,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "segment_hub",
      "target": "eliminations",
      "value": 0.1,
      "sourceWidth": 3,
      "targetWidth": 4,
      "y0": 894.5,
      "y1": 1031.0,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.4,
      "sourceWidth": 235,
      "targetWidth": 235,
      "y0": 721.5,
      "y1": 672.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 2.6,
      "sourceWidth": 82,
      "targetWidth": 81,
      "y0": 880.0,
      "y1": 939.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.8,
      "sourceWidth": 89,
      "targetWidth": 89,
      "y0": 599.5,
      "y1": 529.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 4.6,
      "sourceWidth": 146,
      "targetWidth": 145,
      "y0": 717.0,
      "y1": 802.5,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2,
      "sourceWidth": 65,
      "targetWidth": 65,
      "y0": 517.5,
      "y1": 435.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.7,
      "sourceWidth": 22,
      "targetWidth": 24,
      "y0": 561.0,
      "y1": 634.0,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.017,
      "sourceWidth": 2,
      "targetWidth": 3,
      "y0": 573.0,
      "y1": 725.5,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "personnel_expenses",
      "value": 1.4,
      "sourceWidth": 44,
      "targetWidth": 44,
      "y0": 752.0,
      "y1": 868.0,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 3.2,
      "sourceWidth": 101,
      "targetWidth": 102,
      "y0": 824.5,
      "y1": 1027.0,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 32,
    "nodes": {
      "gucci": {
        "x": 448,
        "y": 401,
        "width": 72,
        "height": 165
      },
      "saint_laurent": {
        "x": 448,
        "y": 700,
        "width": 72,
        "height": 46
      },
      "bottega_veneta": {
        "x": 448,
        "y": 905,
        "width": 72,
        "height": 27
      },
      "other_houses": {
        "x": 448,
        "y": 1068,
        "width": 72,
        "height": 62
      },
      "eyewear_corporate": {
        "x": 448,
        "y": 1289,
        "width": 72,
        "height": 19
      },
      "segment_hub": {
        "x": 822,
        "y": 576,
        "width": 72,
        "height": 320
      },
      "revenue": {
        "x": 1268,
        "y": 604,
        "width": 72,
        "height": 317
      },
      "gross_profit": {
        "x": 1652,
        "y": 555,
        "width": 72,
        "height": 235
      },
      "cost_of_sales": {
        "x": 1655,
        "y": 899,
        "width": 72,
        "height": 81
      },
      "operating_profit": {
        "x": 1988,
        "y": 485,
        "width": 72,
        "height": 89
      },
      "operating_expenses": {
        "x": 1995,
        "y": 730,
        "width": 72,
        "height": 145
      },
      "net_profit": {
        "x": 2316,
        "y": 403,
        "width": 72,
        "height": 65
      },
      "tax": {
        "x": 2316,
        "y": 622,
        "width": 72,
        "height": 24
      },
      "other": {
        "x": 2316,
        "y": 724,
        "width": 72,
        "height": 3
      },
      "personnel_expenses": {
        "x": 2316,
        "y": 846,
        "width": 72,
        "height": 44
      },
      "other_opex": {
        "x": 2316,
        "y": 976,
        "width": 72,
        "height": 102
      },
      "eliminations": {
        "x": 1268,
        "y": 1029,
        "width": 72,
        "height": 4
      }
    },
    "labels": {
      "segment_hub": {
        "blocks": []
      },
      "gucci": {
        "blocks": [
          {
            "x": 484.435546875,
            "top": 306.02783203125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+15% Y/Y",
                "size": 27.34716796875,
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
            "x": 484.435546875,
            "top": 601.6376953125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+42% Y/Y",
                "size": 27.34716796875,
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
            "x": 484.435546875,
            "top": 811.29931640625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+18% Y/Y",
                "size": 27.34716796875,
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
            "x": 484.435546875,
            "top": 975.38232421875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+32% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 231.7998046875,
            "top": 1075.6552734375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other Houses",
                "size": 37.76513671875,
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
            "x": 484.435546875,
            "top": 1195.4619140625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+49% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 231.7998046875,
            "top": 1248.85400390625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Kering Eyewear",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#2d575e"
              },
              {
                "text": "& Corporate",
                "size": 37.76513671875,
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
            "x": 1303.54833984375,
            "top": 454.48388671875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#2d575e"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+23% Y/Y",
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
            "x": 1686.40869140625,
            "top": 365.93115234375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "74% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0.5pp Y/Y",
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
            "x": 1690.3154296875,
            "top": 993.61376953125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2022.38818359375,
            "top": 293.00537109375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "28% of revenue",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 2028.8994140625,
            "top": 888.1318359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2513.3349609375,
            "top": 355.51318359375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "21% of revenue",
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
      "tax": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 584.70849609375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 679.7724609375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "personnel_expenses": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 794.3701171875,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Personnel",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "14% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2513.3349609375,
            "top": 974.080078125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other opex",
                "size": 31.25390625,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "32% of revenue",
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
            "x": 1303.54833984375,
            "top": 1047.005859375,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Eliminations",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "gucci",
      "href": "data/assets/raster-annotations/kering/gucci-h1-fy22.png",
      "x": 52,
      "y": 454,
      "width": 350,
      "height": 69
    },
    {
      "key": "saint-laurent",
      "href": "data/assets/raster-annotations/kering/saint-laurent-h1-fy22.png",
      "x": 21,
      "y": 690,
      "width": 404,
      "height": 63
    },
    {
      "key": "bottega-veneta",
      "href": "data/assets/raster-annotations/kering/bottega-veneta-h1-fy22.png",
      "x": 44,
      "y": 893,
      "width": 358,
      "height": 55
    },
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/kering/company-wordmark-h1-fy22.png",
      "x": 677,
      "y": 307,
      "width": 638,
      "height": 91
    },
    {
      "key": "company-emblem",
      "href": "data/assets/raster-annotations/kering/company-emblem-h1-fy22.png",
      "x": 893,
      "y": 410,
      "width": 206,
      "height": 120
    }
  ],
  "i18n": {
    "zh": {
      "name": "开云集团 · 2022 财年上半年",
      "meta": {
        "title": "开云集团 2022 财年上半年利润表",
        "period": "2022 财年上半年"
      },
      "nodes": {
        "gucci": {
          "label": "Gucci",
          "notes": [
            "同比 +15%"
          ]
        },
        "saint_laurent": {
          "label": "Saint Laurent",
          "notes": [
            "同比 +42%"
          ]
        },
        "bottega_veneta": {
          "label": "Bottega Veneta",
          "notes": [
            "同比 +18%"
          ]
        },
        "other_houses": {
          "label": "其他品牌",
          "notes": [
            "同比 +32%"
          ]
        },
        "eyewear_corporate": {
          "label": [
            "开云眼镜",
            "及公司业务"
          ],
          "notes": [
            "同比 +49%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +23%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "占收入 74%",
            "同比 +0.5 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "占收入 28%",
            "同比 +1 个百分点"
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
            "占收入 21%",
            "同比 +2 个百分点"
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
        "personnel_expenses": {
          "label": [
            "人员",
            "费用"
          ],
          "notes": [
            "占收入 14%"
          ]
        },
        "other_opex": {
          "label": "其他运营费用",
          "notes": [
            "占收入 32%"
          ]
        },
        "eliminations": {
          "label": "抵销项",
          "notes": []
        },
        "segment_hub": {
          "label": ""
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
                "x": 484.435546875,
                "top": 306.02783203125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +15%",
                    "size": 27.34716796875,
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
                "x": 484.435546875,
                "top": 601.6376953125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +42%",
                    "size": 27.34716796875,
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
                "x": 484.435546875,
                "top": 811.29931640625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +18%",
                    "size": 27.34716796875,
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
                "x": 484.435546875,
                "top": 975.38232421875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +32%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 231.7998046875,
                "top": 1075.6552734375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他品牌",
                    "size": 37.76513671875,
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
                "x": 484.435546875,
                "top": 1195.4619140625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +49%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 231.7998046875,
                "top": 1248.85400390625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "开云眼镜",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#2d575e"
                  },
                  {
                    "text": "及公司业务",
                    "size": 37.76513671875,
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
                "x": 1303.54833984375,
                "top": 454.48388671875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#2d575e"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +23%",
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
                "x": 1686.40869140625,
                "top": 365.93115234375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 74%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0.5 个百分点",
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
                "x": 1690.3154296875,
                "top": 993.61376953125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2022.38818359375,
                "top": 293.00537109375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 28%",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 2028.8994140625,
                "top": 888.1318359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2513.3349609375,
                "top": 355.51318359375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "占收入 21%",
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
          "tax": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 584.70849609375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 679.7724609375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "personnel_expenses": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 794.3701171875,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "人员",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 14%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2513.3349609375,
                "top": 974.080078125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他运营费用",
                    "size": 31.25390625,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 32%",
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
                "x": 1303.54833984375,
                "top": 1047.005859375,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "抵销项",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
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
