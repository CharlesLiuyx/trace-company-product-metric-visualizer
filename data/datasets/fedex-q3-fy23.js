(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "fedex-q3-fy23",
  "name": "FedEx · Q3 FY23",
  "company": "FedEx",
  "meta": {
    "company": "FedEx",
    "title": "FedEx Q3 FY23 Income Statement",
    "period": "Q3 FY23",
    "periodNote": "Ending Feb. 2023",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/fedex-q3-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.21875,
    "titleSize": 125,
    "titleWeight": 800,
    "titleTextLength": 2096.6162109375,
    "periodX": 418.02099609375,
    "periodY": 1335.9375,
    "periodNoteY": 1378.90625
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#4d148c",
        "label": "#4d148c"
      },
      "hub": {
        "node": "#4d148c",
        "label": "#4d148c"
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
      "source": "#a88ec4",
      "hub": "#a88ec4",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 36.45833333333333,
      "value": 36.45833333333333,
      "note": 26.041666666666664,
      "lineGap": 9.114583333333332
    },
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "express",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "FedEx Express",
      "value": 10.3,
      "notes": [
        "(8%) Y/Y",
        "1% operating margin"
      ]
    },
    {
      "id": "ground",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "FedEx Ground",
      "value": 8.7,
      "notes": [
        "(2%) Y/Y",
        "10% operating margin"
      ]
    },
    {
      "id": "freight",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "FedEx Freight",
      "value": 2.2,
      "notes": [
        "(3%) Y/Y",
        "18% operating margin"
      ]
    },
    {
      "id": "services",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Services",
      "value": 0.1,
      "notes": [
        "+34% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Other",
      "value": 0.9,
      "notes": [
        "(6%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 1,
      "order": 5,
      "type": "hub",
      "label": "Revenue",
      "value": 22.2,
      "notes": [
        "(6%) Y/Y"
      ]
    },
    {
      "id": "operating_profit",
      "col": 2,
      "order": 6,
      "type": "profit",
      "label": "Operating profit",
      "value": 1,
      "notes": [
        "5% margin",
        "(1pp) Y/Y"
      ],
      "valueText": "$1.0B"
    },
    {
      "id": "operating_expenses",
      "col": 2,
      "order": 7,
      "type": "cost",
      "label": "Operating expenses",
      "value": 21.1,
      "notes": []
    },
    {
      "id": "net_profit",
      "col": 3,
      "order": 8,
      "type": "profit",
      "label": "Net profit",
      "value": 0.8,
      "notes": [
        "3% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 3,
      "order": 9,
      "type": "cost",
      "label": "Tax",
      "value": 0.3,
      "notes": []
    },
    {
      "id": "interest",
      "col": 3,
      "order": 10,
      "type": "cost",
      "label": "Interest",
      "value": 0.1,
      "notes": []
    },
    {
      "id": "salaries_benefits",
      "col": 3,
      "order": 11,
      "type": "cost",
      "label": "Salaries & benefits",
      "value": 7.8,
      "notes": []
    },
    {
      "id": "purchased_transportation",
      "col": 3,
      "order": 12,
      "type": "cost",
      "label": "Purchased transportation",
      "value": 5.4,
      "notes": []
    },
    {
      "id": "rentals",
      "col": 3,
      "order": 13,
      "type": "cost",
      "label": "Rentals",
      "value": 1.2,
      "notes": []
    },
    {
      "id": "depreciation_amortization",
      "col": 3,
      "order": 14,
      "type": "cost",
      "label": "Depreciation & Amortization",
      "value": 1,
      "notes": [],
      "valueText": "($1.0B)"
    },
    {
      "id": "fuel",
      "col": 3,
      "order": 15,
      "type": "cost",
      "label": "Fuel",
      "value": 1.4,
      "notes": []
    },
    {
      "id": "maintenance",
      "col": 3,
      "order": 16,
      "type": "cost",
      "label": "Maintenance",
      "value": 0.8,
      "notes": []
    },
    {
      "id": "business_realignment",
      "col": 3,
      "order": 17,
      "type": "cost",
      "label": "Business realignment",
      "value": 0.1,
      "notes": []
    },
    {
      "id": "other_operating",
      "col": 3,
      "order": 18,
      "type": "cost",
      "label": "Other",
      "value": 3.4,
      "notes": []
    },
    {
      "id": "other_income",
      "col": 2,
      "order": 2,
      "type": "profit",
      "label": "Other",
      "value": 0.1,
      "color": "#2ca02c",
      "labelColor": "#008f51",
      "linkTint": "#99cd99"
    }
  ],
  "links": [
    {
      "source": "express",
      "target": "revenue",
      "value": 10.3,
      "sourceWidth": 122.39583333333333,
      "targetWidth": 122.39583333333333,
      "y0": 455.72916666666663,
      "y1": 679.6875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#a88ec4"
    },
    {
      "source": "ground",
      "target": "revenue",
      "value": 8.7,
      "sourceWidth": 101.5625,
      "targetWidth": 101.5625,
      "y0": 714.84375,
      "y1": 791.6666666666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#a88ec4"
    },
    {
      "source": "freight",
      "target": "revenue",
      "value": 2.2,
      "sourceWidth": 24.739583333333332,
      "targetWidth": 24.739583333333332,
      "y0": 913.4114583333333,
      "y1": 854.8177083333333,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#a88ec4"
    },
    {
      "source": "services",
      "target": "revenue",
      "value": 0.1,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "y0": 1063.8020833333333,
      "y1": 868.4895833333333,
      "sourceOrder": 0,
      "targetOrder": 3,
      "linkTint": "#a88ec4"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 0.9,
      "sourceWidth": 10.416666666666666,
      "targetWidth": 10.416666666666666,
      "y0": 1191.40625,
      "y1": 875,
      "sourceOrder": 0,
      "targetOrder": 4,
      "linkTint": "#a88ec4"
    },
    {
      "source": "revenue",
      "target": "operating_profit",
      "value": 1,
      "sourceWidth": 13.020833333333332,
      "targetWidth": 11.71875,
      "y0": 625,
      "y1": 511.0677083333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "operating_expenses",
      "value": 21.1,
      "sourceWidth": 248.69791666666666,
      "targetWidth": 247.39583333333331,
      "y0": 755.859375,
      "y1": 902.34375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 0.7,
      "sourceWidth": 6.510416666666666,
      "targetWidth": 6.510416666666666,
      "y0": 508.46354166666663,
      "y1": 384.765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.3,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "y0": 513.0208333333333,
      "y1": 516.9270833333333,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "interest",
      "value": 0.1,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "y0": 515.625,
      "y1": 572.9166666666666,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "salaries_benefits",
      "value": 7.8,
      "sourceWidth": 91.45438388625591,
      "targetWidth": 91.14583333333333,
      "y0": 824.3730252764612,
      "y1": 674.4791666666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "purchased_transportation",
      "value": 5.4,
      "sourceWidth": 63.31457345971564,
      "targetWidth": 62.5,
      "y0": 901.757503949447,
      "y1": 799.4791666666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rentals",
      "value": 1.2,
      "sourceWidth": 14.06990521327014,
      "targetWidth": 14.322916666666666,
      "y0": 940.4497432859399,
      "y1": 900.390625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "depreciation_amortization",
      "value": 1,
      "sourceWidth": 11.724921011058452,
      "targetWidth": 10.416666666666666,
      "y0": 953.3471563981043,
      "y1": 988.28125,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "fuel",
      "value": 1.4,
      "sourceWidth": 16.41488941548183,
      "targetWidth": 15.625,
      "y0": 967.4170616113744,
      "y1": 1069.0104166666665,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "maintenance",
      "value": 0.8,
      "sourceWidth": 9.379936808846761,
      "targetWidth": 9.114583333333332,
      "y0": 980.3144747235388,
      "y1": 1154.296875,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "business_realignment",
      "value": 0.1,
      "sourceWidth": 1.1724921011058451,
      "targetWidth": 2.6041666666666665,
      "y0": 985.5906891785149,
      "y1": 1231.7708333333333,
      "sourceOrder": 6,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_operating",
      "value": 3.4,
      "sourceWidth": 39.864731437598735,
      "targetWidth": 40.36458333333333,
      "y0": 1006.1093009478674,
      "y1": 1323.5677083333333,
      "sourceOrder": 7,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.1,
      "width": 2.6041666666666665,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": {
        "left": "#99cd99",
        "right": "#99cd99"
      },
      "y0": 430.9895833333333,
      "y1": 389.32291666666663,
      "curve": {
        "x0": 2157.82177734375,
        "x1": 2222.93408203125,
        "c1x": 2195.5869140625,
        "c1y": 430.9895833333333,
        "c2x": 2183.86669921875,
        "c2y": 389.32291666666663
      }
    }
  ],
  "nonNodeMetrics": [
    {
      "id": "cost_of_revenue",
      "representation": "data-only"
    },
    {
      "id": "gross_profit",
      "representation": "data-only"
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "express": {
        "x": 354.2109375,
        "y": 394.53125,
        "width": 72.92578125,
        "height": 122.39583333333333
      },
      "ground": {
        "x": 354.2109375,
        "y": 664.0625,
        "width": 72.92578125,
        "height": 101.5625
      },
      "freight": {
        "x": 354.2109375,
        "y": 901.0416666666666,
        "width": 72.92578125,
        "height": 24.739583333333332
      },
      "services": {
        "x": 356.8154296875,
        "y": 1062.5,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "other_revenue": {
        "x": 354.2109375,
        "y": 1186.1979166666665,
        "width": 72.92578125,
        "height": 10.416666666666666
      },
      "revenue": {
        "x": 977.98681640625,
        "y": 618.4895833333333,
        "width": 72.92578125,
        "height": 261.71875
      },
      "operating_profit": {
        "x": 1600.46044921875,
        "y": 505.2083333333333,
        "width": 72.92578125,
        "height": 11.71875
      },
      "operating_expenses": {
        "x": 1603.06494140625,
        "y": 778.6458333333333,
        "width": 72.92578125,
        "height": 247.39583333333331
      },
      "net_profit": {
        "x": 2222.93408203125,
        "y": 381.51041666666663,
        "width": 72.92578125,
        "height": 9.114583333333332
      },
      "tax": {
        "x": 2222.93408203125,
        "y": 515.625,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "interest": {
        "x": 2222.93408203125,
        "y": 571.6145833333333,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "salaries_benefits": {
        "x": 2222.93408203125,
        "y": 628.90625,
        "width": 72.92578125,
        "height": 91.14583333333333
      },
      "purchased_transportation": {
        "x": 2222.93408203125,
        "y": 768.2291666666666,
        "width": 72.92578125,
        "height": 62.5
      },
      "rentals": {
        "x": 2222.93408203125,
        "y": 893.2291666666666,
        "width": 72.92578125,
        "height": 14.322916666666666
      },
      "depreciation_amortization": {
        "x": 2222.93408203125,
        "y": 983.0729166666666,
        "width": 72.92578125,
        "height": 10.416666666666666
      },
      "fuel": {
        "x": 2222.93408203125,
        "y": 1061.1979166666665,
        "width": 72.92578125,
        "height": 15.625
      },
      "maintenance": {
        "x": 2222.93408203125,
        "y": 1149.7395833333333,
        "width": 72.92578125,
        "height": 9.114583333333332
      },
      "business_realignment": {
        "x": 2222.93408203125,
        "y": 1230.46875,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "other_operating": {
        "x": 2222.93408203125,
        "y": 1303.3854166666665,
        "width": 72.92578125,
        "height": 40.36458333333333
      },
      "other_income": {
        "x": 2095.31396484375,
        "y": 429.6875,
        "width": 62.5078125,
        "height": 2.6041666666666665
      }
    },
    "labels": {
      "express": {
        "blocks": [
          {
            "x": 390.673828125,
            "top": 296.875,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "(8%) Y/Y",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 175.80322265625,
            "top": 518.2291666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "1% operating margin",
                "size": 26.041666666666664,
                "weight": 800,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ground": {
        "blocks": [
          {
            "x": 390.673828125,
            "top": 566.40625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "(2%) Y/Y",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 175.80322265625,
            "top": 776.0416666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "10% operating margin",
                "size": 24.739583333333332,
                "weight": 800,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "freight": {
        "blocks": [
          {
            "x": 390.673828125,
            "top": 803.3854166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 175.80322265625,
            "top": 947.9166666666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "18% operating margin",
                "size": 26.041666666666664,
                "weight": 800,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "services": {
        "blocks": [
          {
            "x": 390.673828125,
            "top": 964.84375,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "+34% Y/Y",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 312.5390625,
            "top": 1039.0625,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Services",
                "size": 36.45833333333333,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 390.673828125,
            "top": 1088.5416666666665,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "(6%) Y/Y",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 312.5390625,
            "top": 1168.9375,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Other",
                "size": 36.45833333333333,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1014.44970703125,
            "top": 468.75,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Revenue",
                "size": 36.45833333333333,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "(6%) Y/Y",
                "size": 26.041666666666664,
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
            "x": 1636.92333984375,
            "top": 312.5,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating profit",
                "size": 36.45833333333333,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "5% margin",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 26.041666666666664,
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
            "x": 1639.52783203125,
            "top": 1041.6666666666665,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Operating",
                "size": 36.45833333333333,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2428.68896484375,
            "top": 264.32291666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Net profit",
                "size": 36.45833333333333,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400
              },
              {
                "text": "3% margin",
                "size": 26.041666666666664,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 26.041666666666664,
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
            "x": 2428.68896484375,
            "top": 459.63541666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Tax",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 2428.68896484375,
            "top": 546.875,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Interest",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              }
            ]
          }
        ]
      },
      "salaries_benefits": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 660.15625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Salaries & benefits",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              }
            ]
          }
        ]
      },
      "purchased_transportation": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 763.0208333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Purchased",
                "size": 29.947916666666664,
                "weight": 800
              },
              {
                "text": "transportation",
                "size": 29.947916666666664,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 29.947916666666664,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rentals": {
        "blocks": [
          {
            "x": 2324.50927734375,
            "top": 906.25,
            "anchor": "start",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Rentals",
                "size": 28.645833333333332,
                "weight": 800
              }
            ]
          },
          {
            "x": 2637.04833984375,
            "top": 906.25,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 28.645833333333332,
                "weight": 400
              }
            ]
          }
        ]
      },
      "depreciation_amortization": {
        "blocks": [
          {
            "x": 2324.50927734375,
            "top": 959.6354166666666,
            "anchor": "start",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Depreciation &",
                "size": 28.645833333333332,
                "weight": 800
              },
              {
                "text": "Amortization",
                "size": 28.645833333333332,
                "weight": 400
              }
            ]
          },
          {
            "x": 2637.04833984375,
            "top": 998.6979166666666,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 28.645833333333332,
                "weight": 400
              }
            ]
          }
        ]
      },
      "fuel": {
        "blocks": [
          {
            "x": 2324.50927734375,
            "top": 1061.1979166666665,
            "anchor": "start",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Fuel",
                "size": 28.645833333333332,
                "weight": 800
              }
            ]
          },
          {
            "x": 2637.04833984375,
            "top": 1061.1979166666665,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 28.645833333333332,
                "weight": 400
              }
            ]
          }
        ]
      },
      "maintenance": {
        "blocks": [
          {
            "x": 2324.50927734375,
            "top": 1144.53125,
            "anchor": "start",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Maintenance",
                "size": 28.645833333333332,
                "weight": 800
              }
            ]
          },
          {
            "x": 2637.04833984375,
            "top": 1144.53125,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 28.645833333333332,
                "weight": 400
              }
            ]
          }
        ]
      },
      "business_realignment": {
        "blocks": [
          {
            "x": 2324.50927734375,
            "top": 1199.21875,
            "anchor": "start",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Business",
                "size": 28.645833333333332,
                "weight": 800
              },
              {
                "text": "realignment",
                "size": 28.645833333333332,
                "weight": 400
              }
            ]
          },
          {
            "x": 2637.04833984375,
            "top": 1238.28125,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 28.645833333333332,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_operating": {
        "blocks": [
          {
            "x": 2324.50927734375,
            "top": 1308.59375,
            "anchor": "start",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Other",
                "size": 28.645833333333332,
                "weight": 800
              }
            ]
          },
          {
            "x": 2637.04833984375,
            "top": 1308.59375,
            "anchor": "end",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 28.645833333333332,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": []
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-3\"><text x=\"610\" y=\"315\" font-size=\"114\" fill=\"#4d148c\">Fed</text><text x=\"803.8\" y=\"315\" font-size=\"114\" fill=\"#ff6600\">Ex</text></g><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-3\"><text x=\"60\" y=\"366\" font-size=\"62\" fill=\"#4d148c\">Fed</text><text x=\"165.39999999999998\" y=\"366\" font-size=\"62\" fill=\"#ff6600\">Ex</text><text x=\"165.39999999999998\" y=\"389\" font-size=\"20\" letter-spacing=\"0\" font-weight=\"400\" fill=\"#4d148c\">Express</text></g><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-3\"><text x=\"60\" y=\"563\" font-size=\"62\" fill=\"#4d148c\">Fed</text><text x=\"165.39999999999998\" y=\"563\" font-size=\"62\" fill=\"#71b45a\">Ex</text><text x=\"165.39999999999998\" y=\"586\" font-size=\"20\" letter-spacing=\"0\" font-weight=\"400\" fill=\"#4d148c\">Ground</text></g><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-3\"><text x=\"60\" y=\"691\" font-size=\"62\" fill=\"#4d148c\">Fed</text><text x=\"165.39999999999998\" y=\"691\" font-size=\"62\" fill=\"#cc1744\">Ex</text><text x=\"165.39999999999998\" y=\"714\" font-size=\"20\" letter-spacing=\"0\" font-weight=\"400\" fill=\"#4d148c\">Freight</text></g><g class=\"sankey-interactive-annotation\" data-node=\"other_income\" data-link-numerator=\"other_income\" data-link-denominator=\"net_profit\" fill=\"#008f51\" font-size=\"23\"><text x=\"1566\" y=\"362\"><tspan font-weight=\"800\">Other</tspan> $0.1B</text></g><text x=\"130\" y=\"1104\" font-size=\"28\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "i18n": {
    "preservedAnnotationText": [
      "Fed",
      "Ex",
      "Express",
      "Ground",
      "Freight"
    ],
    "zh": {
      "name": "联邦快递 · 2023 财年第三季度",
      "meta": {
        "title": "联邦快递 2023 财年第三季度利润表",
        "period": "2023 财年第三季度",
        "periodNote": "截至 2023 年 2 月",
        "titleTextLength": 1849.189453125
      },
      "nodes": {
        "express": {
          "label": "联邦快递航空",
          "notes": [
            "同比下降 8%",
            "营业利润率 1%"
          ]
        },
        "ground": {
          "label": "联邦快递陆运",
          "notes": [
            "同比下降 2%",
            "营业利润率 10%"
          ]
        },
        "freight": {
          "label": "联邦快递货运",
          "notes": [
            "同比下降 3%",
            "营业利润率 18%"
          ]
        },
        "services": {
          "label": "服务",
          "notes": [
            "同比增长 34%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比下降 6%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比下降 6%"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 5%",
            "同比下降 1 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 3%",
            "同比下降 1 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "salaries_benefits": {
          "label": "薪酬与福利",
          "notes": []
        },
        "purchased_transportation": {
          "label": "外购运输",
          "notes": []
        },
        "rentals": {
          "label": "租赁费用",
          "notes": []
        },
        "depreciation_amortization": {
          "label": "折旧与摊销",
          "notes": []
        },
        "fuel": {
          "label": "燃油",
          "notes": []
        },
        "maintenance": {
          "label": "维修",
          "notes": []
        },
        "business_realignment": {
          "label": "业务重组",
          "notes": []
        },
        "other_operating": {
          "label": "其他",
          "notes": []
        },
        "other_income": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "express": {
            "blocks": [
              {
                "x": 390.673828125,
                "top": 296.875,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "同比下降 8%",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 175.80322265625,
                "top": 518.2291666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "营业利润率 1%",
                    "size": 26.041666666666664,
                    "weight": 800,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ground": {
            "blocks": [
              {
                "x": 390.673828125,
                "top": 566.40625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "同比下降 2%",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 175.80322265625,
                "top": 776.0416666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "营业利润率 10%",
                    "size": 24.739583333333332,
                    "weight": 800,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "freight": {
            "blocks": [
              {
                "x": 390.673828125,
                "top": 803.3854166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "同比下降 3%",
                    "size": 23.5,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 175.80322265625,
                "top": 947.9166666666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "营业利润率 18%",
                    "size": 26.041666666666664,
                    "weight": 800,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "services": {
            "blocks": [
              {
                "x": 390.673828125,
                "top": 964.84375,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "同比增长 34%",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 312.5390625,
                "top": 1039.0625,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "服务",
                    "size": 36.45833333333333,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 390.673828125,
                "top": 1088.5416666666665,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "同比下降 6%",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 312.5390625,
                "top": 1168.9375,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "其他",
                    "size": 36.45833333333333,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1014.44970703125,
                "top": 468.75,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "收入",
                    "size": 36.45833333333333,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "同比下降 6%",
                    "size": 26.041666666666664,
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
                "x": 1636.92333984375,
                "top": 312.5,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 36.45833333333333,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "利润率 5%",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比下降 1 个百分点",
                    "size": 26.041666666666664,
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
                "x": 1639.52783203125,
                "top": 1041.6666666666665,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.45833333333333,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2428.68896484375,
                "top": 264.32291666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 36.45833333333333,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400
                  },
                  {
                    "text": "利润率 3%",
                    "size": 26.041666666666664,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比下降 1 个百分点",
                    "size": 26.041666666666664,
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
                "x": 2428.68896484375,
                "top": 459.63541666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "税费",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 2428.68896484375,
                "top": 546.875,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "利息",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "salaries_benefits": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 660.15625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "薪酬与福利",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "purchased_transportation": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 763.0208333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "外购",
                    "size": 29.947916666666664,
                    "weight": 800
                  },
                  {
                    "text": "运输",
                    "size": 29.947916666666664,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 29.947916666666664,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rentals": {
            "blocks": [
              {
                "x": 2324.50927734375,
                "top": 906.25,
                "anchor": "start",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "租赁费用",
                    "size": 28.645833333333332,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2637.04833984375,
                "top": 906.25,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 28.645833333333332,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "depreciation_amortization": {
            "blocks": [
              {
                "x": 2324.50927734375,
                "top": 959.6354166666666,
                "anchor": "start",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "折旧与",
                    "size": 28.645833333333332,
                    "weight": 800
                  },
                  {
                    "text": "摊销",
                    "size": 28.645833333333332,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2637.04833984375,
                "top": 998.6979166666666,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 28.645833333333332,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "fuel": {
            "blocks": [
              {
                "x": 2324.50927734375,
                "top": 1061.1979166666665,
                "anchor": "start",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "燃油",
                    "size": 28.645833333333332,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2637.04833984375,
                "top": 1061.1979166666665,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 28.645833333333332,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "maintenance": {
            "blocks": [
              {
                "x": 2324.50927734375,
                "top": 1144.53125,
                "anchor": "start",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "维修",
                    "size": 28.645833333333332,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2637.04833984375,
                "top": 1144.53125,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 28.645833333333332,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "business_realignment": {
            "blocks": [
              {
                "x": 2324.50927734375,
                "top": 1199.21875,
                "anchor": "start",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "业务",
                    "size": 28.645833333333332,
                    "weight": 800
                  },
                  {
                    "text": "重组",
                    "size": 28.645833333333332,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2637.04833984375,
                "top": 1238.28125,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 28.645833333333332,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_operating": {
            "blocks": [
              {
                "x": 2324.50927734375,
                "top": 1308.59375,
                "anchor": "start",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "其他",
                    "size": 28.645833333333332,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2637.04833984375,
                "top": 1308.59375,
                "anchor": "end",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 28.645833333333332,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": []
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-3\"><text x=\"610\" y=\"315\" font-size=\"114\" fill=\"#4d148c\">Fed</text><text x=\"803.8\" y=\"315\" font-size=\"114\" fill=\"#ff6600\">Ex</text></g><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-3\"><text x=\"60\" y=\"366\" font-size=\"62\" fill=\"#4d148c\">Fed</text><text x=\"165.39999999999998\" y=\"366\" font-size=\"62\" fill=\"#ff6600\">Ex</text><text x=\"165.39999999999998\" y=\"389\" font-size=\"20\" letter-spacing=\"0\" font-weight=\"400\" fill=\"#4d148c\">Express</text></g><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-3\"><text x=\"60\" y=\"563\" font-size=\"62\" fill=\"#4d148c\">Fed</text><text x=\"165.39999999999998\" y=\"563\" font-size=\"62\" fill=\"#71b45a\">Ex</text><text x=\"165.39999999999998\" y=\"586\" font-size=\"20\" letter-spacing=\"0\" font-weight=\"400\" fill=\"#4d148c\">Ground</text></g><g data-typography-role=\"brand\" font-family=\"Arial Black,Arial,sans-serif\" font-weight=\"900\" letter-spacing=\"-3\"><text x=\"60\" y=\"691\" font-size=\"62\" fill=\"#4d148c\">Fed</text><text x=\"165.39999999999998\" y=\"691\" font-size=\"62\" fill=\"#cc1744\">Ex</text><text x=\"165.39999999999998\" y=\"714\" font-size=\"20\" letter-spacing=\"0\" font-weight=\"400\" fill=\"#4d148c\">Freight</text></g><g class=\"sankey-interactive-annotation\" data-node=\"other_income\" data-link-numerator=\"other_income\" data-link-denominator=\"net_profit\" fill=\"#008f51\" font-size=\"23\"><text x=\"1566\" y=\"362\"><tspan font-weight=\"800\">其他</tspan> $0.1B</text></g><text x=\"130\" y=\"1104\" font-size=\"28\" font-weight=\"700\">来源：季度业绩</text></g>",
      "nonNodeMetrics": {}
    }
  }
});})();
