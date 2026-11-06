(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "kering-h1-fy23",
  "name": "Kering · H1 FY23",
  "company": "Kering",
  "meta": {
    "company": "Kering",
    "title": "Kering H1 FY23 Income Statement",
    "period": "",
    "periodNote": "",
    "hidePeriodStamp": true,
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/kering-h1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.63916015625,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2129.17236328125
  },
  "nodes": [
    {
      "id": "gucci",
      "label": "Gucci",
      "value": 5.1,
      "valueText": "€5.1B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "(1%) Y/Y"
      ]
    },
    {
      "id": "saint_laurent",
      "label": "Saint Laurent",
      "value": 1.6,
      "valueText": "€1.6B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+6% Y/Y"
      ]
    },
    {
      "id": "bottega_veneta",
      "label": "Bottega Veneta",
      "value": 0.8,
      "valueText": "€0.8B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+0% Y/Y"
      ]
    },
    {
      "id": "other_houses",
      "label": "Other Houses",
      "value": 1.9,
      "valueText": "€1.9B",
      "type": "source",
      "col": 0,
      "order": 3,
      "notes": [
        "(5%) Y/Y"
      ]
    },
    {
      "id": "eyewear_corporate",
      "label": [
        "Kering Eyewear",
        "& Corporate"
      ],
      "value": 0.9,
      "valueText": "€0.9B",
      "type": "source",
      "col": 0,
      "order": 4,
      "notes": [
        "+47% Y/Y"
      ]
    },
    {
      "id": "segment_hub",
      "label": "",
      "value": 10.3,
      "type": "hub",
      "col": 1,
      "order": 0
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 10.1,
      "valueText": "€10.1B",
      "type": "hub",
      "col": 2,
      "order": 5,
      "notes": [
        "+2% Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 2,
      "order": 6,
      "notes": []
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 7.7,
      "valueText": "€7.7B",
      "type": "profit",
      "col": 2,
      "order": 7,
      "notes": [
        "76% of revenue",
        "+2pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 2.4,
      "valueText": "(€2.4B)",
      "type": "cost",
      "col": 2,
      "order": 8,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 2.7,
      "valueText": "€2.7B",
      "type": "profit",
      "col": 2,
      "order": 9,
      "notes": [
        "27% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 5,
      "valueText": "(€5.0B)",
      "type": "cost",
      "col": 2,
      "order": 10,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 1.8,
      "valueText": "€1.8B",
      "type": "profit",
      "col": 2,
      "order": 11,
      "notes": [
        "18% of revenue",
        "(2pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.7,
      "valueText": "(€0.7B)",
      "type": "cost",
      "col": 2,
      "order": 12,
      "notes": []
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.2,
      "valueText": "(€0.2B)",
      "type": "cost",
      "col": 2,
      "order": 13,
      "notes": []
    },
    {
      "id": "personnel_expenses",
      "label": [
        "Personnel",
        "expenses"
      ],
      "value": 1.5,
      "valueText": "(€1.5B)",
      "type": "cost",
      "col": 2,
      "order": 14,
      "notes": [
        "15% of revenue"
      ]
    },
    {
      "id": "other_opex",
      "label": "Other opex",
      "value": 3.5,
      "valueText": "(€3.5B)",
      "type": "cost",
      "col": 2,
      "order": 15,
      "notes": [
        "34% of revenue"
      ]
    }
  ],
  "links": [
    {
      "source": "gucci",
      "target": "segment_hub",
      "value": 5.1,
      "sourceWidth": 139,
      "targetWidth": 139,
      "y0": 477.5,
      "y1": 667.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99abaf"
    },
    {
      "source": "saint_laurent",
      "target": "segment_hub",
      "value": 1.6,
      "sourceWidth": 43,
      "targetWidth": 43,
      "y0": 710.5,
      "y1": 758.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99abaf"
    },
    {
      "source": "bottega_veneta",
      "target": "segment_hub",
      "value": 0.8,
      "sourceWidth": 22,
      "targetWidth": 22,
      "y0": 882,
      "y1": 791,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#99abaf"
    },
    {
      "source": "other_houses",
      "target": "segment_hub",
      "value": 1.9,
      "sourceWidth": 51,
      "targetWidth": 51,
      "y0": 1068.5,
      "y1": 827.5,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#99abaf"
    },
    {
      "source": "eyewear_corporate",
      "target": "segment_hub",
      "value": 0.9,
      "sourceWidth": 23,
      "targetWidth": 21,
      "y0": 1257.5,
      "y1": 863.5,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#99abaf"
    },
    {
      "source": "segment_hub",
      "target": "revenue",
      "value": 10.1,
      "sourceWidth": 273,
      "targetWidth": 275,
      "y0": 734.5,
      "y1": 759.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99abaf"
    },
    {
      "source": "segment_hub",
      "target": "eliminations",
      "value": 0.1,
      "sourceWidth": 3,
      "targetWidth": 3,
      "y0": 872.5,
      "y1": 1021.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.7,
      "sourceWidth": 210,
      "targetWidth": 208,
      "y0": 727,
      "y1": 648,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 2.4,
      "sourceWidth": 65,
      "targetWidth": 65,
      "y0": 864.5,
      "y1": 954.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.7,
      "sourceWidth": 75,
      "targetWidth": 74,
      "y0": 581.5,
      "y1": 502,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5,
      "sourceWidth": 133,
      "targetWidth": 135,
      "y0": 685.5,
      "y1": 775.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 1.8,
      "sourceWidth": 51,
      "targetWidth": 49,
      "y0": 490.5,
      "y1": 373.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.7,
      "sourceWidth": 18,
      "targetWidth": 18,
      "y0": 525,
      "y1": 630,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.2,
      "sourceWidth": 5,
      "targetWidth": 5,
      "y0": 536.5,
      "y1": 739.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "personnel_expenses",
      "value": 1.5,
      "sourceWidth": 95,
      "targetWidth": 95,
      "y0": 755.5,
      "y1": 903.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 3.5,
      "sourceWidth": 40,
      "targetWidth": 40,
      "y0": 823,
      "y1": 1163,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 27.34716796875,
    "nodes": {
      "gucci": {
        "x": 440,
        "y": 408,
        "width": 73,
        "height": 139
      },
      "saint_laurent": {
        "x": 440,
        "y": 689,
        "width": 73,
        "height": 43
      },
      "bottega_veneta": {
        "x": 440,
        "y": 871,
        "width": 73,
        "height": 22
      },
      "other_houses": {
        "x": 440,
        "y": 1043,
        "width": 73,
        "height": 51
      },
      "eyewear_corporate": {
        "x": 440,
        "y": 1246,
        "width": 73,
        "height": 23
      },
      "segment_hub": {
        "x": 814,
        "y": 598,
        "width": 73,
        "height": 276
      },
      "revenue": {
        "x": 1188,
        "y": 622,
        "width": 73,
        "height": 275
      },
      "eliminations": {
        "x": 1188,
        "y": 1020,
        "width": 73,
        "height": 3
      },
      "gross_profit": {
        "x": 1561,
        "y": 544,
        "width": 73,
        "height": 208
      },
      "cost_of_sales": {
        "x": 1572,
        "y": 922,
        "width": 73,
        "height": 65
      },
      "operating_profit": {
        "x": 1923,
        "y": 465,
        "width": 73,
        "height": 74
      },
      "operating_expenses": {
        "x": 1926,
        "y": 708,
        "width": 73,
        "height": 135
      },
      "net_profit": {
        "x": 2309,
        "y": 349,
        "width": 73,
        "height": 49
      },
      "tax": {
        "x": 2309,
        "y": 621,
        "width": 73,
        "height": 18
      },
      "other": {
        "x": 2309,
        "y": 737,
        "width": 73,
        "height": 5
      },
      "personnel_expenses": {
        "x": 2309,
        "y": 856,
        "width": 73,
        "height": 95
      },
      "other_opex": {
        "x": 2309,
        "y": 1143,
        "width": 73,
        "height": 40
      }
    },
    "labels": {
      "segment_hub": {
        "blocks": []
      },
      "gucci": {
        "blocks": [
          {
            "x": 476.6220703125,
            "top": 313.84130859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "(1%) Y/Y",
                "size": 28.6494140625,
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
            "x": 476.6220703125,
            "top": 595.12646484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+6% Y/Y",
                "size": 28.6494140625,
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
            "x": 476.6220703125,
            "top": 777.44091796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+0% Y/Y",
                "size": 28.6494140625,
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
            "x": 476.6220703125,
            "top": 950.6396484375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "(5%) Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 229.1953125,
            "top": 1044.91259765625,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Other Houses",
                "size": 39.0673828125,
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
            "x": 476.6220703125,
            "top": 1147.27880859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#2d575e"
              },
              {
                "text": "+47% Y/Y",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 229.1953125,
            "top": 1212.39111328125,
            "anchor": "middle",
            "lineGap": 7.8134765625,
            "lines": [
              {
                "text": "Kering Eyewear",
                "size": 39.0673828125,
                "weight": 800,
                "color": "#2d575e"
              },
              {
                "text": "& Corporate",
                "size": 39.0673828125,
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
            "x": 1224.111328125,
            "top": 474.017578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
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
                "text": "+2% Y/Y",
                "size": 28.6494140625,
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
            "x": 1224.111328125,
            "top": 1036.587890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Eliminations",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "x": 1597.85595703125,
            "top": 355.51318359375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
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
                "text": "76% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 28.6494140625,
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
            "x": 1608.27392578125,
            "top": 1002.7294921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "x": 1959.88037109375,
            "top": 279.98291015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
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
                "text": "27% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 28.6494140625,
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
            "x": 1962.48486328125,
            "top": 859.482421875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
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
            "x": 2519.84619140625,
            "top": 302.12109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
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
                "text": "18% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 28.6494140625,
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
            "x": 2519.84619140625,
            "top": 591.2197265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 2519.84619140625,
            "top": 704.51513671875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
            "x": 2519.84619140625,
            "top": 843.85546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "15% of revenue",
                "size": 28.6494140625,
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
            "x": 2519.84619140625,
            "top": 1101.7001953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
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
                "text": "34% of revenue",
                "size": 28.6494140625,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "kering-wordmark-h1-fy23",
      "href": "data/assets/raster-annotations/kering/kering-wordmark-h1-fy23.png",
      "x": 684,
      "y": 311,
      "width": 621,
      "height": 83
    },
    {
      "key": "kering-owl-h1-fy23",
      "href": "data/assets/raster-annotations/kering/kering-owl-h1-fy23.png",
      "x": 899,
      "y": 414,
      "width": 195,
      "height": 112
    },
    {
      "key": "gucci-h1-fy23",
      "href": "data/assets/raster-annotations/kering/gucci-h1-fy23.png",
      "x": 60,
      "y": 439,
      "width": 335,
      "height": 69,
      "pairedNode": "gucci"
    },
    {
      "key": "saint-laurent-h1-fy23",
      "href": "data/assets/raster-annotations/kering/saint-laurent-h1-fy23.png",
      "x": 23,
      "y": 682,
      "width": 397,
      "height": 57,
      "pairedNode": "saint_laurent"
    },
    {
      "key": "bottega-veneta-h1-fy23",
      "href": "data/assets/raster-annotations/kering/bottega-veneta-h1-fy23.png",
      "x": 47,
      "y": 860,
      "width": 356,
      "height": 44,
      "pairedNode": "bottega_veneta"
    }
  ],
  "annotationsSvg": "<text x=\"277.37841796875\" y=\"280\" fill=\"#155077\" font-size=\"39.0673828125\" font-weight=\"700\">in euros</text>",
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "noteColor": "#777777",
    "nodeRadius": 0,
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
    "linkOpacity": 1,
    "type": {
      "name": 29,
      "value": 30,
      "note": 22,
      "lineGap": 7
    }
  },
  "i18n": {
    "zh": {
      "name": "开云集团 · 2023 财年上半年",
      "meta": {
        "title": "开云集团 2023 财年上半年利润表",
        "titleTextLength": 1888.2568359375
      },
      "nodes": {
        "gucci": {
          "label": "Gucci",
          "notes": [
            "同比 (1%)"
          ]
        },
        "saint_laurent": {
          "label": "Saint Laurent",
          "notes": [
            "同比 +6%"
          ]
        },
        "bottega_veneta": {
          "label": "Bottega Veneta",
          "notes": [
            "同比 +0%"
          ]
        },
        "other_houses": {
          "label": "其他品牌",
          "notes": [
            "同比 (5%)"
          ]
        },
        "eyewear_corporate": {
          "label": [
            "开云眼镜",
            "及公司业务"
          ],
          "notes": [
            "同比 +47%"
          ]
        },
        "segment_hub": {
          "label": "",
          "notes": []
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +2%"
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
            "占收入 27%",
            "同比 (1 个百分点)"
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
            "占收入 18%",
            "同比 (2 个百分点)"
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
            "占收入 15%"
          ]
        },
        "other_opex": {
          "label": "其他运营费用",
          "notes": [
            "占收入 34%"
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
                "x": 476.6220703125,
                "top": 313.84130859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 28.6494140625,
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
                "x": 476.6220703125,
                "top": 595.12646484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 28.6494140625,
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
                "x": 476.6220703125,
                "top": 777.44091796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +0%",
                    "size": 28.6494140625,
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
                "x": 476.6220703125,
                "top": 950.6396484375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 229.1953125,
                "top": 1044.91259765625,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "其他品牌",
                    "size": 39.0673828125,
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
                "x": 476.6220703125,
                "top": 1147.27880859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#2d575e"
                  },
                  {
                    "text": "同比 +47%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 229.1953125,
                "top": 1212.39111328125,
                "anchor": "middle",
                "lineGap": 7.8134765625,
                "lines": [
                  {
                    "text": "开云眼镜",
                    "size": 39.0673828125,
                    "weight": 800,
                    "color": "#2d575e"
                  },
                  {
                    "text": "及公司业务",
                    "size": 39.0673828125,
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
                "x": 1224.111328125,
                "top": 474.017578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
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
                    "text": "同比 +2%",
                    "size": 28.6494140625,
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
                "x": 1224.111328125,
                "top": 1036.587890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "抵销项",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "x": 1597.85595703125,
                "top": 355.51318359375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
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
                    "text": "占收入 76%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 28.6494140625,
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
                "x": 1608.27392578125,
                "top": 1002.7294921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "x": 1959.88037109375,
                "top": 279.98291015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
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
                    "text": "占收入 27%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 28.6494140625,
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
                "x": 1962.48486328125,
                "top": 859.482421875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
                    "size": 37.76513671875,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
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
                "x": 2519.84619140625,
                "top": 302.12109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
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
                    "text": "占收入 18%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 28.6494140625,
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
                "x": 2519.84619140625,
                "top": 591.2197265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                "x": 2519.84619140625,
                "top": 704.51513671875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                "x": 2519.84619140625,
                "top": 843.85546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "占收入 15%",
                    "size": 28.6494140625,
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
                "x": 2519.84619140625,
                "top": 1101.7001953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
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
                    "text": "占收入 34%",
                    "size": 28.6494140625,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"277.37841796875\" y=\"280\" fill=\"#155077\" font-size=\"39.0673828125\" font-weight=\"700\">单位：欧元</text>"
    }
  }
});})();
