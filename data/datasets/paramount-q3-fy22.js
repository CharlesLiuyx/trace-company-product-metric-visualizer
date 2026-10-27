(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "paramount-q3-fy22",
  "name": "Paramount · Q3 FY22",
  "company": "Paramount",
  "meta": {
    "company": "Paramount",
    "title": "Paramount Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/paramount-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.244,
    "titleSize": 125.016,
    "titleWeight": 800,
    "titleTextLength": 2435.2,
    "hidePeriodStamp": true
  },
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
    "palette": {
      "source": {
        "node": "#0066ff",
        "label": "#0066ff"
      },
      "hub": {
        "node": "#0066ff",
        "label": "#0066ff"
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
      "source": "#86b1f5",
      "hub": "#86b1f5",
      "profit": "#99cd99",
      "cost": "#e18585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 30,
      "value": 30,
      "note": 21,
      "lineGap": 9.116
    }
  },
  "nodes": [
    {
      "id": "filmed_entertainment",
      "label": "Filmed Entertainment",
      "value": 0.8,
      "valueText": "$0.8B",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+48% Y/Y",
        "5% adj. margin"
      ]
    },
    {
      "id": "tv_media",
      "label": "TV Media",
      "value": 4.9,
      "valueText": "$4.9B",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(5%) Y/Y",
        "25% adj. margin"
      ]
    },
    {
      "id": "direct_to_consumer",
      "label": "Direct to consumer",
      "value": 1.2,
      "valueText": "$1.2B",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+38% Y/Y",
        "(28%) adj. margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 6.9,
      "valueText": "$6.9B",
      "type": "hub",
      "col": 0,
      "order": 3,
      "notes": [
        "+5% Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": -0.041,
      "valueText": "($41M)",
      "type": "cost",
      "col": 0,
      "order": 4,
      "notes": []
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 2.5,
      "valueText": "$2.5B",
      "type": "profit",
      "col": 0,
      "order": 5,
      "notes": [
        "36% margin",
        "(3pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 4.5,
      "valueText": "($4.5B)",
      "type": "cost",
      "col": 0,
      "order": 6,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 0.6,
      "valueText": "$0.6B",
      "type": "profit",
      "col": 0,
      "order": 7,
      "notes": [
        "8% margin",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "other_gains",
      "label": "Other gains",
      "value": 0.041,
      "valueText": "$41M",
      "type": "profit",
      "col": 0,
      "order": 8,
      "notes": []
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 1.9,
      "valueText": "($1.9B)",
      "type": "cost",
      "col": 0,
      "order": 9,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 0.2,
      "valueText": "$0.2B",
      "type": "profit",
      "col": 0,
      "order": 10,
      "notes": [
        "2% margin",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 0.3,
      "valueText": "($0.3B)",
      "type": "cost",
      "col": 0,
      "order": 11,
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 0,
      "order": 12,
      "notes": []
    },
    {
      "id": "sga",
      "label": "SG&A",
      "value": 1.7,
      "valueText": "($1.7B)",
      "type": "cost",
      "col": 0,
      "order": 13,
      "notes": [
        "24% of revenue"
      ]
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.2,
      "valueText": "($0.2B)",
      "type": "cost",
      "col": 0,
      "order": 14,
      "notes": [
        "2% of revenue"
      ]
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 0,
      "order": 15,
      "notes": [
        "1% of revenue"
      ]
    },
    {
      "id": "segment_revenue",
      "label": "",
      "value": 6.9,
      "type": "hub",
      "col": 1
    }
  ],
  "links": [
    {
      "source": "filmed_entertainment",
      "target": "segment_revenue",
      "value": 0.8,
      "sourceWidth": 40.37,
      "targetWidth": 40.37,
      "y0": 449.926,
      "y1": 643.961,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "tv_media",
      "target": "segment_revenue",
      "value": 4.9,
      "sourceWidth": 252.636,
      "targetWidth": 252.636,
      "y0": 768.325,
      "y1": 790.463,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "direct_to_consumer",
      "target": "segment_revenue",
      "value": 1.2,
      "sourceWidth": 62.508,
      "targetWidth": 63.81,
      "y0": 1105.607,
      "y1": 948.686,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "segment_revenue",
      "target": "revenue",
      "value": 6.9,
      "sourceWidth": 354.211,
      "targetWidth": 354.211,
      "y0": 800.881,
      "y1": 847.762,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "segment_revenue",
      "target": "eliminations",
      "value": 0.041,
      "sourceWidth": 2.604,
      "targetWidth": 2.604,
      "y0": 979.289,
      "y1": 1117.327,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 2.5,
      "sourceWidth": 126.318,
      "targetWidth": 126.318,
      "y0": 733.816,
      "y1": 670.006,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 4.5,
      "sourceWidth": 227.893,
      "targetWidth": 229.195,
      "y0": 910.921,
      "y1": 994.916,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 0.6,
      "sourceWidth": 27.347,
      "targetWidth": 27.347,
      "y0": 620.52,
      "y1": 531.968,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 1.9,
      "sourceWidth": 98.971,
      "targetWidth": 98.971,
      "y0": 683.679,
      "y1": 875.109,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_gains",
      "target": "operating_profit",
      "value": 0.041,
      "sourceWidth": 2.604,
      "targetWidth": 2.604,
      "y0": 625.078,
      "y1": 546.943,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 9.116,
      "targetWidth": 9.116,
      "y0": 522.852,
      "y1": 479.878,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "other",
      "value": 0.3,
      "sourceWidth": 15.627,
      "targetWidth": 15.627,
      "y0": 535.223,
      "y1": 661.541,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.1,
      "sourceWidth": 5.209,
      "targetWidth": 3.907,
      "y0": 545.641,
      "y1": 765.07,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 1.7,
      "sourceWidth": 85.948,
      "targetWidth": 85.948,
      "y0": 868.598,
      "y1": 975.382,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.2,
      "sourceWidth": 7.813,
      "targetWidth": 7.813,
      "y0": 915.479,
      "y1": 1123.838,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 0.1,
      "sourceWidth": 5.209,
      "targetWidth": 3.907,
      "y0": 921.99,
      "y1": 1248.203,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "filmed_entertainment": {
        "x": 434.95,
        "y": 429.741,
        "width": 72.926,
        "height": 40.37
      },
      "tv_media": {
        "x": 434.95,
        "y": 642.007,
        "width": 72.926,
        "height": 252.636
      },
      "direct_to_consumer": {
        "x": 434.95,
        "y": 1074.353,
        "width": 72.926,
        "height": 62.508
      },
      "segment_revenue": {
        "x": 825.624,
        "y": 623.776,
        "width": 71.624,
        "height": 356.815
      },
      "revenue": {
        "x": 1198.066,
        "y": 670.657,
        "width": 72.926,
        "height": 354.211
      },
      "eliminations": {
        "x": 1198.066,
        "y": 1116.025,
        "width": 72.926,
        "height": 2.604
      },
      "gross_profit": {
        "x": 1593.949,
        "y": 606.847,
        "width": 72.926,
        "height": 126.318
      },
      "cost_of_revenue": {
        "x": 1591.345,
        "y": 880.318,
        "width": 72.926,
        "height": 229.195
      },
      "other_gains": {
        "x": 1802.309,
        "y": 623.776,
        "width": 72.926,
        "height": 2.604
      },
      "operating_profit": {
        "x": 1970.298,
        "y": 518.294,
        "width": 72.926,
        "height": 29.952
      },
      "operating_expenses": {
        "x": 1970.298,
        "y": 825.624,
        "width": 72.926,
        "height": 98.971
      },
      "net_profit": {
        "x": 2288.046,
        "y": 475.32,
        "width": 72.926,
        "height": 9.116
      },
      "other": {
        "x": 2288.046,
        "y": 653.728,
        "width": 72.926,
        "height": 15.627
      },
      "tax": {
        "x": 2288.046,
        "y": 763.116,
        "width": 72.926,
        "height": 3.907
      },
      "sga": {
        "x": 2288.046,
        "y": 932.408,
        "width": 72.926,
        "height": 85.948
      },
      "restructuring": {
        "x": 2288.046,
        "y": 1119.932,
        "width": 72.926,
        "height": 7.813
      },
      "amortization": {
        "x": 2288.046,
        "y": 1246.25,
        "width": 72.926,
        "height": 3.907
      }
    },
    "labels": {
      "segment_revenue": {
        "blocks": []
      },
      "revenue": {
        "blocks": [
          {
            "x": 1234.529,
            "top": 522.201,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+5% Y/Y",
                "size": 27.347,
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
            "x": 1630.412,
            "top": 418.021,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "36% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 27.347,
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
            "x": 2006.761,
            "top": 329.468,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "8% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.347,
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
            "x": 2492.499,
            "top": 419.323,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "2% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.347,
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
            "x": 1234.529,
            "top": 1131.652,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Eliminations",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1627.808,
            "top": 1118.629,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 2006.761,
            "top": 938.919,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Operating",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2461.245,
            "top": 622.474,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2461.245,
            "top": 727.956,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Tax",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2500.312,
            "top": 916.781,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "24% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2500.312,
            "top": 1058.726,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "2% of revenue",
                "size": 27.347,
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
            "x": 2500.312,
            "top": 1196.764,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Amortization",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              },
              {
                "text": "1% of revenue",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_gains": {
        "blocks": [
          {
            "x": 1838.772,
            "top": 632.892,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other gains",
                "size": 31.254,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.254,
                "weight": 400
              }
            ]
          }
        ]
      },
      "filmed_entertainment": {
        "blocks": [
          {
            "x": 470.111,
            "top": 330.771,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+48% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 408.905,
            "top": 382.86,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Filmed",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "Entertainment",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "5% adj. margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tv_media": {
        "blocks": [
          {
            "x": 470.111,
            "top": 546.943,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 408.905,
            "top": 713.631,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "TV Media",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "25% adj. margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "direct_to_consumer": {
        "blocks": [
          {
            "x": 470.111,
            "top": 977.987,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400
              },
              {
                "text": "+38% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 408.905,
            "top": 1050.913,
            "anchor": "end",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Direct to",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "consumer",
                "size": 39.067,
                "weight": 700
              },
              {
                "text": "(28%) adj. margin",
                "size": 27.347,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "dtc_subscribers",
      "label": "DTC subscribers",
      "value": "67000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "67M",
      "basis": "unspecified",
      "quote": "DTC subscribers 67M",
      "anchor": {
        "type": "image-box",
        "box": [
          139,
          1268,
          570,
          121
        ]
      },
      "notes": []
    },
    {
      "id": "paramount_subscribers",
      "label": "Paramount+ subscribers",
      "value": "46000000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "46M",
      "basis": "unspecified",
      "quote": "Paramount+ subscribers 46M",
      "anchor": {
        "type": "image-box",
        "box": [
          139,
          1268,
          570,
          121
        ]
      },
      "notes": []
    }
  ],
  "annotationsSvg": "<g><rect x=\"139.34\" y=\"1269.69\" width=\"569.082\" height=\"119.807\" rx=\"31.254\" fill=\"#0066ff\"/><text x=\"390.674\" y=\"1321.78\" text-anchor=\"end\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">DTC subscribers </text><text data-operating-metric=\"dtc_subscribers\" x=\"403.696\" y=\"1321.78\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">67M</text><text x=\"390.674\" y=\"1362.149\" text-anchor=\"end\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">Paramount+ subscribers </text><text data-operating-metric=\"paramount_subscribers\" x=\"403.696\" y=\"1362.149\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">46M</text><text x=\"169.292\" y=\"1436.377\" font-size=\"39.067\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/paramount/company-wordmark.png",
      "x": 794.37,
      "y": 329.468,
      "width": 572.988,
      "height": 184.919
    },
    {
      "key": "business-filmed-entertainment-cluster",
      "href": "data/assets/raster-annotations/paramount/business-filmed-entertainment-cluster.png",
      "x": 23.44,
      "y": 299.517,
      "width": 179.71,
      "height": 130.225
    },
    {
      "key": "business-tv-media-cluster",
      "href": "data/assets/raster-annotations/paramount/business-tv-media-cluster.png",
      "x": 13.022,
      "y": 671.959,
      "width": 177.105,
      "height": 149.758
    },
    {
      "key": "business-direct-to-consumer-cluster",
      "href": "data/assets/raster-annotations/paramount/business-direct-to-consumer-cluster.png",
      "x": 22.138,
      "y": 957.151,
      "width": 186.221,
      "height": 194.035
    }
  ],
  "i18n": {
    "zh": {
      "name": "Paramount · 2022 财年第三季度",
      "meta": {
        "title": "Paramount 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "titleTextLength": 2239.863
      },
      "nodes": {
        "filmed_entertainment": {
          "label": "影视娱乐",
          "notes": [
            "同比 +48%",
            "调整后利润率 5%"
          ]
        },
        "tv_media": {
          "label": "电视媒体",
          "notes": [
            "同比 (5%)",
            "调整后利润率 25%"
          ]
        },
        "direct_to_consumer": {
          "label": "直接面向消费者",
          "notes": [
            "同比 +38%",
            "调整后利润率 (28%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +5%"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 36%",
            "同比 (3 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 8%",
            "同比 (5 个百分点)"
          ]
        },
        "other_gains": {
          "label": "其他收益",
          "notes": []
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 2%",
            "同比 (5 个百分点)"
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
        "sga": {
          "label": "销售、一般及行政",
          "notes": [
            "占收入 24%"
          ]
        },
        "restructuring": {
          "label": "重组",
          "notes": [
            "占收入 2%"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 1%"
          ]
        }
      },
      "layout": {
        "labels": {
          "segment_revenue": {
            "blocks": []
          },
          "revenue": {
            "blocks": [
              {
                "x": 1234.529,
                "top": 522.201,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.347,
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
                "x": 1630.412,
                "top": 418.021,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 36%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 27.347,
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
                "x": 2006.761,
                "top": 329.468,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 8%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 27.347,
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
                "x": 2492.499,
                "top": 419.323,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "利润率 2%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 27.347,
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
                "x": 1234.529,
                "top": 1131.652,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1627.808,
                "top": 1118.629,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 2006.761,
                "top": 938.919,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2461.245,
                "top": 622.474,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2461.245,
                "top": 727.956,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2500.312,
                "top": 916.781,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "销售、一般及行政",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 24%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2500.312,
                "top": 1058.726,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "重组",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 2%",
                    "size": 27.347,
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
                "x": 2500.312,
                "top": 1196.764,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "摊销",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  },
                  {
                    "text": "占收入 1%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_gains": {
            "blocks": [
              {
                "x": 1838.772,
                "top": 632.892,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他收益",
                    "size": 31.254,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "filmed_entertainment": {
            "blocks": [
              {
                "x": 470.111,
                "top": 330.771,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +48%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 408.905,
                "top": 382.86,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "影视娱乐",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "调整后利润率 5%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tv_media": {
            "blocks": [
              {
                "x": 470.111,
                "top": 546.943,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 (5%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 408.905,
                "top": 713.631,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "电视媒体",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "调整后利润率 25%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "direct_to_consumer": {
            "blocks": [
              {
                "x": 470.111,
                "top": 977.987,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400
                  },
                  {
                    "text": "同比 +38%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 408.905,
                "top": 1050.913,
                "anchor": "end",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "直接面向消费者",
                    "size": 39.067,
                    "weight": 700
                  },
                  {
                    "text": "调整后利润率 (28%)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g><rect x=\"139.34\" y=\"1269.69\" width=\"569.082\" height=\"119.807\" rx=\"31.254\" fill=\"#0066ff\"/><text x=\"390.674\" y=\"1321.78\" text-anchor=\"end\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">DTC 订阅用户 </text><text data-operating-metric=\"dtc_subscribers\" x=\"403.696\" y=\"1321.78\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">67M</text><text x=\"390.674\" y=\"1362.149\" text-anchor=\"end\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">Paramount+ 订阅用户 </text><text data-operating-metric=\"paramount_subscribers\" x=\"403.696\" y=\"1362.149\" font-size=\"31.254\" font-weight=\"700\" fill=\"white\">46M</text><text x=\"169.292\" y=\"1436.377\" font-size=\"39.067\" font-weight=\"700\">来源：季度业绩</text></g>"
    }
  }
});})();
