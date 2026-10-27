window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "tripadvisor-q4-fy23",
  "name": "Tripadvisor · Q4 FY23",
  "company": "Tripadvisor",
  "meta": {
    "company": "Tripadvisor",
    "title": "Tripadvisor Q4 FY23 Income Statement",
    "period": "Q4 FY23",
    "periodNote": "Q4 FY23",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/tripadvisor-q4-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2450,
    "periodX": -1000,
    "periodY": -1000,
    "periodNoteY": -950,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "palette": {
      "source": {
        "node": "#2cd9a0",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#000000"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#008f51"
      },
      "cost": {
        "node": "#d90000",
        "label": "#941100"
      }
    },
    "linkOpacity": 1,
    "type": {
      "name": 39,
      "value": 38,
      "note": 26,
      "lineGap": 9
    }
  },
  "layout": {
    "scale": 0.7683251953125,
    "nodes": {
      "core": {
        "x": 389.37158203125,
        "y": 481.8310546875,
        "width": 72.92578125,
        "height": 167.98974609375
      },
      "viator": {
        "x": 389.37158203125,
        "y": 806.09033203125,
        "width": 72.92578125,
        "height": 123.71337890625
      },
      "thefork": {
        "x": 389.37158203125,
        "y": 1097.79345703125,
        "width": 72.92578125,
        "height": 29.95166015625
      },
      "gross_segment_revenue": {
        "x": 763.1162109375,
        "y": 578.197265625,
        "width": 72.92578125,
        "height": 322.95703125
      },
      "revenue": {
        "x": 1136.86083984375,
        "y": 612.0556640625,
        "width": 72.92578125,
        "height": 299.5166015625
      },
      "eliminations": {
        "x": 1142.06982421875,
        "y": 1078.259765625,
        "width": 72.92578125,
        "height": 20.8359375
      },
      "gross_profit": {
        "x": 1501.48974609375,
        "y": 544.3388671875,
        "width": 72.92578125,
        "height": 273.4716796875
      },
      "cost_of_revenue": {
        "x": 1502.7919921875,
        "y": 985.80029296875,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "operating_profit": {
        "x": 1883.0478515625,
        "y": 450.5771484375,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "operating_expenses": {
        "x": 1885.65234375,
        "y": 664.1455078125,
        "width": 72.92578125,
        "height": 247.4267578125
      },
      "net_profit": {
        "x": 2258.0947265625,
        "y": 363.32666015625,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "other_income": {
        "x": 2135.68359375,
        "y": 462.29736328125,
        "width": 72.92578125,
        "height": 2.6044921875
      },
      "sm": {
        "x": 2258.0947265625,
        "y": 709.72412109375,
        "width": 72.92578125,
        "height": 136.73583984375
      },
      "technology": {
        "x": 2258.0947265625,
        "y": 944.12841796875,
        "width": 72.92578125,
        "height": 52.08984375
      },
      "ga": {
        "x": 2258.0947265625,
        "y": 1065.2373046875,
        "width": 72.92578125,
        "height": 36.462890625
      },
      "amortization": {
        "x": 2258.0947265625,
        "y": 1190.2529296875,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "impairment": {
        "x": 2258.0947265625,
        "y": 1304.8505859375,
        "width": 72.92578125,
        "height": 2.6044921875
      }
    },
    "labels": {
      "gross_segment_revenue": {
        "blocks": []
      },
      "core": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 390.673828125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+0% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 247.4267578125,
            "top": 488.34228515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Core",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 247.4267578125,
            "top": 540.43212890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Branded hotels,",
                "size": 24.74267578125,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "display & platform,",
                "size": 24.74267578125,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "experiences & dining",
                "size": 24.74267578125,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "39% adjusted margin",
                "size": 24.74267578125,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "viator": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 713.630859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+27% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 247.4267578125,
            "top": 821.71728515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Viator",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 247.4267578125,
            "top": 869.900390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tours, activities",
                "size": 24.74267578125,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "& attractions",
                "size": 24.74267578125,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "5% adjusted margin",
                "size": 24.74267578125,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "thefork": {
        "blocks": [
          {
            "x": 427.13671875,
            "top": 1005.333984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              },
              {
                "text": "+18% Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "amount"
          },
          {
            "x": 247.4267578125,
            "top": 1079.56201171875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "TheFork",
                "size": 39.0673828125,
                "weight": 800
              }
            ],
            "semanticRole": "top-aligned-side-label"
          },
          {
            "x": 247.4267578125,
            "top": 1129.04736328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Restaurant",
                "size": 24.74267578125,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "reservations",
                "size": 24.74267578125,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(21%) adjusted margin",
                "size": 24.74267578125,
                "weight": 400,
                "color": "#777777"
              }
            ],
            "semanticRole": "note"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1178.53271484375,
            "top": 466.2041015625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1178.53271484375,
            "top": 513.0849609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 1178.53271484375,
            "top": 563.87255859375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "+10% Y/Y",
                "size": 26.044921875,
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
            "x": 1543.16162109375,
            "top": 360.72216796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1543.16162109375,
            "top": 407.60302734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 1543.16162109375,
            "top": 458.390625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "91% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 26.044921875,
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
            "x": 1926.02197265625,
            "top": 269.56494140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1926.02197265625,
            "top": 316.44580078125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 1926.02197265625,
            "top": 367.2333984375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "8% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+12pp Y/Y",
                "size": 26.044921875,
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
            "x": 2474.267578125,
            "top": 319.05029296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 365.93115234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          },
          {
            "x": 2474.267578125,
            "top": 416.71875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "8% margin",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+9pp Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2172.146484375,
            "top": 484.435546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2172.146484375,
            "top": 531.31640625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1541.859375,
            "top": 1035.28564453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "of revenue",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1541.859375,
            "top": 1129.04736328125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "eliminations": {
        "blocks": [
          {
            "x": 1177.23046875,
            "top": 1110.81591796875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Eliminations",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1177.23046875,
            "top": 1157.69677734375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1922.115234375,
            "top": 935.0126953125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 37.76513671875,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37.76513671875,
                "weight": 800
              }
            ]
          },
          {
            "x": 1922.115234375,
            "top": 1028.7744140625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2499.01025390625,
            "top": 738.37353515625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "S&M ($179M)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2499.01025390625,
            "top": 781.34765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "46% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(9pp) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "technology": {
        "blocks": [
          {
            "x": 2499.01025390625,
            "top": 889.43408203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Technology ($68M)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2499.01025390625,
            "top": 932.408203125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "17% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2499.01025390625,
            "top": 1035.28564453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "G&A ($47M)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2499.01025390625,
            "top": 1078.259765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "12% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 26.044921875,
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
            "x": 2499.01025390625,
            "top": 1166.8125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Amortization ($25M)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2499.01025390625,
            "top": 1209.78662109375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "6% of revenue",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 26.044921875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "impairment": {
        "blocks": [
          {
            "x": 2499.01025390625,
            "top": 1298.33935546875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Impairment ($4M)",
                "size": 29.95166015625,
                "weight": 800
              }
            ]
          },
          {
            "x": 2499.01025390625,
            "top": 1341.3134765625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "1% of revenue",
                "size": 26.044921875,
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
      "id": "core",
      "label": "Core",
      "value": 218,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+0% Y/Y",
        "Branded hotels, display & platform, experiences & dining",
        "39% adjusted margin"
      ]
    },
    {
      "id": "viator",
      "label": "Viator",
      "value": 161,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+27% Y/Y",
        "Tours, activities & attractions",
        "5% adjusted margin"
      ]
    },
    {
      "id": "thefork",
      "label": "TheFork",
      "value": 39,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+18% Y/Y",
        "Restaurant reservations",
        "(21%) adjusted margin"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 390,
      "type": "hub",
      "col": 2,
      "order": 3,
      "notes": [
        "+10% Y/Y"
      ]
    },
    {
      "id": "eliminations",
      "label": "Eliminations",
      "value": 28,
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": []
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 354,
      "type": "profit",
      "col": 3,
      "order": 5,
      "notes": [
        "91% margin",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 36,
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": "Operating profit",
      "value": 31,
      "type": "profit",
      "col": 4,
      "order": 7,
      "notes": [
        "8% margin",
        "+12pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 323,
      "type": "cost",
      "col": 4,
      "order": 8,
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 32,
      "type": "profit",
      "col": 5,
      "order": 9,
      "notes": [
        "8% margin",
        "+9pp Y/Y"
      ]
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 1,
      "type": "profit",
      "col": 5,
      "order": 10,
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 179,
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": [
        "46% of revenue",
        "(9pp) Y/Y"
      ]
    },
    {
      "id": "technology",
      "label": "Technology",
      "value": 68,
      "type": "cost",
      "col": 5,
      "order": 12,
      "notes": [
        "17% of revenue",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 47,
      "type": "cost",
      "col": 5,
      "order": 13,
      "notes": [
        "12% of revenue",
        "(4pp) Y/Y"
      ]
    },
    {
      "id": "amortization",
      "label": "Amortization",
      "value": 25,
      "type": "cost",
      "col": 5,
      "order": 14,
      "notes": [
        "6% of revenue",
        "(1pp) Y/Y"
      ]
    },
    {
      "id": "impairment",
      "label": "Impairment",
      "value": 4,
      "type": "cost",
      "col": 5,
      "order": 15,
      "notes": [
        "1% of revenue"
      ]
    },
    {
      "id": "gross_segment_revenue",
      "label": "Revenue before eliminations",
      "value": 418,
      "type": "source",
      "col": 1,
      "order": 0
    }
  ],
  "links": [
    {
      "source": "core",
      "target": "gross_segment_revenue",
      "value": 218,
      "sourceWidth": 167.98974609375,
      "targetWidth": 167.98974609375,
      "y0": 565.825927734375,
      "y1": 662.192138671875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9fe8d2"
    },
    {
      "source": "viator",
      "target": "gross_segment_revenue",
      "value": 161,
      "sourceWidth": 123.71337890625,
      "targetWidth": 123.71337890625,
      "y0": 867.947021484375,
      "y1": 808.043701171875,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9fe8d2"
    },
    {
      "source": "thefork",
      "target": "gross_segment_revenue",
      "value": 39,
      "sourceWidth": 29.95166015625,
      "targetWidth": 29.95166015625,
      "y0": 1112.769287109375,
      "y1": 884.876220703125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#9fe8d2"
    },
    {
      "source": "gross_segment_revenue",
      "target": "revenue",
      "value": 390,
      "sourceWidth": 300.81884765625,
      "targetWidth": 299.5166015625,
      "y0": 728.606689453125,
      "y1": 761.81396484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9fe8d2"
    },
    {
      "source": "gross_segment_revenue",
      "target": "eliminations",
      "value": 28,
      "sourceWidth": 22.13818359375,
      "targetWidth": 20.8359375,
      "y0": 890.085205078125,
      "y1": 1088.677734375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 354,
      "sourceWidth": 272.16943359375,
      "targetWidth": 273.4716796875,
      "y0": 748.140380859375,
      "y1": 681.07470703125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acb94"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 36,
      "sourceWidth": 27.34716796875,
      "targetWidth": 27.34716796875,
      "y0": 897.898681640625,
      "y1": 999.473876953125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 31,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "y0": 556.05908203125,
      "y1": 462.29736328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acb94"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 323,
      "sourceWidth": 250.03125,
      "targetWidth": 247.4267578125,
      "y0": 692.794921875,
      "y1": 787.85888671875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 31,
      "sourceWidth": 23.4404296875,
      "targetWidth": 23.4404296875,
      "y0": 462.29736328125,
      "y1": 375.046875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#9acb94"
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 1,
      "sourceWidth": 2.6044921875,
      "targetWidth": 1.30224609375,
      "y0": 463.599609375,
      "y1": 387.418212890625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#9acb94"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 179,
      "sourceWidth": 136.73583984375,
      "targetWidth": 136.73583984375,
      "y0": 732.513427734375,
      "y1": 778.092041015625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "technology",
      "value": 68,
      "sourceWidth": 52.08984375,
      "targetWidth": 52.08984375,
      "y0": 826.92626953125,
      "y1": 970.17333984375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 47,
      "sourceWidth": 36.462890625,
      "targetWidth": 36.462890625,
      "y0": 871.20263671875,
      "y1": 1083.46875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "amortization",
      "value": 25,
      "sourceWidth": 19.53369140625,
      "targetWidth": 19.53369140625,
      "y0": 899.200927734375,
      "y1": 1200.019775390625,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "impairment",
      "value": 4,
      "sourceWidth": 2.6044921875,
      "targetWidth": 2.6044921875,
      "y0": 910.27001953125,
      "y1": 1306.15283203125,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "tripadvisor-company-logo",
      "href": "data/assets/raster-annotations/tripadvisor/company-logo.png",
      "x": 602.93994140625,
      "y": 270.8671875,
      "width": 751.39599609375,
      "height": 160.17626953125
    },
    {
      "key": "tripadvisor-hotel-other-icon",
      "href": "data/assets/raster-annotations/tripadvisor/hotel-other-icon.png",
      "x": 3.90673828125,
      "y": 431.04345703125,
      "width": 145.8515625,
      "height": 136.73583984375
    },
    {
      "key": "tripadvisor-experiences-icon",
      "href": "data/assets/raster-annotations/tripadvisor/experiences-icon.png",
      "x": 0.0,
      "y": 767.02294921875,
      "width": 131.52685546875,
      "height": 140.642578125
    },
    {
      "key": "tripadvisor-thefork-icon",
      "href": "data/assets/raster-annotations/tripadvisor/thefork-icon.png",
      "x": 0.0,
      "y": 1028.7744140625,
      "width": 148.4560546875,
      "height": 140.642578125
    }
  ],
  "i18n": {
    "zh": {
      "name": "猫途鹰 · 2023 财年第四季度",
      "meta": {
        "title": "猫途鹰 2023 财年第四季度利润表",
        "period": "2023 财年第四季度",
        "periodNote": "2023 财年第四季度",
        "titleTextLength": 2120
      },
      "nodes": {
        "core": {
          "label": "核心业务",
          "notes": [
            "同比 +0%",
            "品牌酒店、展示及平台、体验活动与餐饮",
            "调整后利润率 39%"
          ]
        },
        "viator": {
          "label": "Viator（体验活动）",
          "notes": [
            "同比 +27%",
            "观光、活动及景点",
            "调整后利润率 5%"
          ]
        },
        "thefork": {
          "label": "餐厅预订",
          "notes": [
            "同比 +18%",
            "餐厅预订",
            "调整后利润率 (21%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +10%"
          ]
        },
        "eliminations": {
          "label": "抵销",
          "notes": []
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 91%",
            "同比 (1 个百分点)"
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
            "同比 +12 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 8%",
            "同比 +9 个百分点"
          ]
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 46%",
            "同比 (9 个百分点)"
          ]
        },
        "technology": {
          "label": "技术",
          "notes": [
            "占收入 17%",
            "同比 +0 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 12%",
            "同比 (4 个百分点)"
          ]
        },
        "amortization": {
          "label": "摊销",
          "notes": [
            "占收入 6%",
            "同比 (1 个百分点)"
          ]
        },
        "impairment": {
          "label": "减值",
          "notes": [
            "占收入 1%"
          ]
        },
        "gross_segment_revenue": {
          "label": "抵销前收入"
        }
      },
      "layout": {
        "labels": {
          "gross_segment_revenue": {
            "blocks": []
          },
          "core": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 390.673828125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +0%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 247.4267578125,
                "top": 488.34228515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "核心业务",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 247.4267578125,
                "top": 540.43212890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "品牌酒店、",
                    "size": 24.74267578125,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "展示及平台、",
                    "size": 24.74267578125,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "体验活动与餐饮",
                    "size": 24.74267578125,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "调整后利润率 39%",
                    "size": 24.74267578125,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "viator": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 713.630859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +27%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 247.4267578125,
                "top": 821.71728515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "体验活动",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 247.4267578125,
                "top": 869.900390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "观光、活动",
                    "size": 24.74267578125,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "及景点",
                    "size": 24.74267578125,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "调整后利润率 5%",
                    "size": 24.74267578125,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "thefork": {
            "blocks": [
              {
                "x": 427.13671875,
                "top": 1005.333984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +18%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "amount"
              },
              {
                "x": 247.4267578125,
                "top": 1079.56201171875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              },
              {
                "x": 247.4267578125,
                "top": 1129.04736328125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "餐厅预订",
                    "size": 24.74267578125,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "调整后利润率 (21%)",
                    "size": 24.74267578125,
                    "weight": 400,
                    "color": "#777777"
                  }
                ],
                "semanticRole": "note"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1178.53271484375,
                "top": 466.2041015625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1178.53271484375,
                "top": 513.0849609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1178.53271484375,
                "top": 563.87255859375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "同比 +10%",
                    "size": 26.044921875,
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
                "x": 1543.16162109375,
                "top": 360.72216796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1543.16162109375,
                "top": 407.60302734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1543.16162109375,
                "top": 458.390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利润率 91%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 26.044921875,
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
                "x": 1926.02197265625,
                "top": 269.56494140625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1926.02197265625,
                "top": 316.44580078125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 1926.02197265625,
                "top": 367.2333984375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利润率 8%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +12 个百分点",
                    "size": 26.044921875,
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
                "x": 2474.267578125,
                "top": 319.05029296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 365.93115234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              },
              {
                "x": 2474.267578125,
                "top": 416.71875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "利润率 8%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +9 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2172.146484375,
                "top": 484.435546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2172.146484375,
                "top": 531.31640625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1541.859375,
                "top": 1035.28564453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入成本",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1541.859375,
                "top": 1082.16650390625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "eliminations": {
            "blocks": [
              {
                "x": 1177.23046875,
                "top": 1110.81591796875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "抵销",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1177.23046875,
                "top": 1157.69677734375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1922.115234375,
                "top": 935.0126953125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 37.76513671875,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 1922.115234375,
                "top": 981.8935546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2499.01025390625,
                "top": 738.37353515625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与营销 ($179M)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2499.01025390625,
                "top": 781.34765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 46%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (9 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "technology": {
            "blocks": [
              {
                "x": 2499.01025390625,
                "top": 889.43408203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "技术 ($68M)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2499.01025390625,
                "top": 932.408203125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 17%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2499.01025390625,
                "top": 1035.28564453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "管理费用 ($47M)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2499.01025390625,
                "top": 1078.259765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 12%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 26.044921875,
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
                "x": 2499.01025390625,
                "top": 1166.8125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "摊销 ($25M)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2499.01025390625,
                "top": 1209.78662109375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 6%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "impairment": {
            "blocks": [
              {
                "x": 2499.01025390625,
                "top": 1298.33935546875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "减值 ($4M)",
                    "size": 29.95166015625,
                    "weight": 800
                  }
                ]
              },
              {
                "x": 2499.01025390625,
                "top": 1341.3134765625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "占收入 1%",
                    "size": 26.044921875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});
