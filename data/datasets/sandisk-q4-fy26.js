(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "sandisk-q4-fy26",
  "name": "Sandisk \u00b7 Q4 FY26",
  "company": "Sandisk",
  "meta": {
    "company": "Sandisk",
    "title": "Sandisk Q4 FY26 Income Statement",
    "period": "Q4 FY26",
    "periodNote": "Ending June 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sandisk-q4-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2210,
    "periodX": 2458,
    "periodY": 286,
    "periodNoteY": 328,
    "periodAnchor": "middle"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#000000",
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
        "node": "#cc0000",
        "label": "#941100"
      }
    },
    "linkTint": {
      "source": "#d9d9d9",
      "hub": "#d9d9d9",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39,
      "value": 39,
      "note": 27,
      "lineGap": 9
    }
  },
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/sandisk/company-wordmark.png",
      "x": 576.89501953125,
      "y": 290.40087890625,
      "width": 631.58935546875,
      "height": 71.62353515625
    },
    {
      "href": "data/assets/raster-annotations/sandisk/datacenter-storage-cluster.png",
      "x": 200.5458984375,
      "y": 433.64794921875,
      "width": 114.59765625,
      "height": 101.5751953125
    },
    {
      "href": "data/assets/raster-annotations/sandisk/edge-storage-cluster.png",
      "x": 182.314453125,
      "y": 765.720703125,
      "width": 147.15380859375,
      "height": 127.6201171875
    },
    {
      "href": "data/assets/raster-annotations/sandisk/consumer-storage-cluster.png",
      "x": 200.5458984375,
      "y": 1010.54296875,
      "width": 114.59765625,
      "height": 97.66845703125
    }
  ],
  "nodes": [
    {
      "id": "datacenter",
      "type": "source",
      "col": 0,
      "label": "Datacenter",
      "value": 3,
      "notes": [
        "+1,298% Y/Y"
      ]
    },
    {
      "id": "edge",
      "type": "source",
      "col": 0,
      "label": "Edge",
      "value": 5.4,
      "notes": [
        "+392% Y/Y"
      ]
    },
    {
      "id": "consumer",
      "type": "source",
      "col": 0,
      "label": "Consumer",
      "value": 0.6,
      "notes": [
        "(5%) Y/Y"
      ]
    },
    {
      "id": "revenue",
      "type": "hub",
      "col": 1,
      "label": "Revenue",
      "value": 9,
      "valueText": "$9.0B",
      "notes": [
        "+372% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "col": 2,
      "label": "Gross profit",
      "value": 7.6,
      "notes": [
        "85% margin",
        "+58pp Y/Y"
      ],
      "valueText": "$7.6B"
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "col": 3,
      "label": "Operating profit",
      "value": 7,
      "notes": [
        "78% margin",
        "+78pp Y/Y"
      ],
      "valueText": "$7.0B"
    },
    {
      "id": "net_profit",
      "type": "profit",
      "col": 4,
      "label": "Net profit",
      "value": 6.9,
      "notes": [
        "77% margin",
        "+78pp Y/Y"
      ],
      "valueText": "$6.9B"
    },
    {
      "id": "cost_of_revenue",
      "type": "cost",
      "col": 2,
      "label": "Cost of revenue",
      "value": 1.4
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "col": 3,
      "label": "Operating expenses",
      "value": 0.5
    },
    {
      "id": "tax",
      "type": "cost",
      "col": 4,
      "label": "Tax",
      "value": 0.9
    },
    {
      "id": "rnd",
      "type": "cost",
      "col": 4,
      "label": "R&D",
      "value": 0.3
    },
    {
      "id": "sga",
      "type": "cost",
      "col": 4,
      "label": "SG&A",
      "value": 0.2
    },
    {
      "id": "other",
      "type": "profit",
      "col": 3,
      "label": "Other",
      "value": 0.8,
      "color": "#2ca02c",
      "labelColor": "#009900"
    }
  ],
  "links": [
    {
      "source": "datacenter",
      "target": "revenue",
      "value": 3,
      "sourceWidth": 140,
      "targetWidth": 140,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "edge",
      "target": "revenue",
      "value": 5.4,
      "sourceWidth": 255,
      "targetWidth": 255,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "consumer",
      "target": "revenue",
      "value": 0.6,
      "sourceWidth": 27,
      "targetWidth": 25,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 7.6,
      "sourceWidth": 354,
      "targetWidth": 354,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 1.4,
      "sourceWidth": 66,
      "targetWidth": 65,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 7,
      "sourceWidth": 328,
      "targetWidth": 330,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.5,
      "sourceWidth": 26,
      "targetWidth": 26,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 6.9,
      "sourceWidth": 285,
      "targetWidth": 285,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.9,
      "sourceWidth": 45,
      "targetWidth": 45,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.8,
      "sourceWidth": 39,
      "targetWidth": 39,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.3,
      "sourceWidth": 17,
      "targetWidth": 17,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.2,
      "sourceWidth": 9,
      "targetWidth": 9,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "datacenter": {
        "x": 407,
        "y": 446,
        "width": 72,
        "height": 140
      },
      "edge": {
        "x": 407,
        "y": 729,
        "width": 72,
        "height": 255
      },
      "consumer": {
        "x": 407,
        "y": 1133,
        "width": 72,
        "height": 27
      },
      "revenue": {
        "x": 874,
        "y": 608,
        "width": 72,
        "height": 420
      },
      "gross_profit": {
        "x": 1341,
        "y": 498,
        "width": 72,
        "height": 354
      },
      "cost_of_revenue": {
        "x": 1341,
        "y": 1073,
        "width": 72,
        "height": 65
      },
      "operating_profit": {
        "x": 1808,
        "y": 434,
        "width": 72,
        "height": 330
      },
      "operating_expenses": {
        "x": 1808,
        "y": 949,
        "width": 72,
        "height": 26
      },
      "net_profit": {
        "x": 2275,
        "y": 351,
        "width": 72,
        "height": 324
      },
      "other": {
        "x": 2143,
        "y": 690,
        "width": 72,
        "height": 39
      },
      "tax": {
        "x": 2275,
        "y": 934,
        "width": 72,
        "height": 45
      },
      "rnd": {
        "x": 2275,
        "y": 1159,
        "width": 72,
        "height": 17
      },
      "sga": {
        "x": 2275,
        "y": 1325,
        "width": 72,
        "height": 9
      }
    },
    "labels": {
      "datacenter": {
        "blocks": [
          {
            "x": 436.25,
            "top": 351.61,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+1,298% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 257.84,
            "top": 541.73,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Datacenter",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#000000"
              }
            ],
            "semanticRole": "icon-caption"
          }
        ]
      },
      "edge": {
        "blocks": [
          {
            "x": 436.25,
            "top": 635.5,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+392% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 257.84,
            "top": 903.76,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Edge",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#000000"
              }
            ],
            "semanticRole": "icon-caption"
          }
        ]
      },
      "consumer": {
        "blocks": [
          {
            "x": 436.25,
            "top": 1037.89,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "(5%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 257.84,
            "top": 1125.14,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Consumer",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#000000"
              }
            ],
            "semanticRole": "icon-caption"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 908.97,
            "top": 459.69,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#000000"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#000000"
              },
              {
                "text": "+372% Y/Y",
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
            "x": 1375.17,
            "top": 311.24,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "85% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+58pp Y/Y",
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
            "x": 1846.58,
            "top": 246.12,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "78% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+78pp Y/Y",
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
            "x": 2458.64,
            "top": 427.14,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "77% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+78pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1375.17,
            "top": 1153.79,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "revenue",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1846.58,
            "top": 991.01,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "expenses",
                "size": 32.55615234375,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 32.55615234375,
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
            "x": 2182.56,
            "top": 739.68,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Other",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#009900"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#009900"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2458.64,
            "top": 915.48,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Tax",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2458.64,
            "top": 1127.75,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "R&D",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2458.64,
            "top": 1287.92,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "SG&A",
                "size": 29.95166015625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 29.95166015625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "i18n": {
    "zh": {
      "name": "Sandisk \u00b7 2026 \u8d22\u5e74\u7b2c\u56db\u5b63\u5ea6",
      "meta": {
        "title": "Sandisk 2026 \u8d22\u5e74\u7b2c\u56db\u5b63\u5ea6\u5229\u6da6\u8868",
        "titleTextLength": 1750,
        "period": "2026 \u8d22\u5e74\u7b2c\u56db\u5b63\u5ea6",
        "periodNote": "\u622a\u81f3 2026 \u5e74 6 \u6708"
      },
      "nodes": {
        "datacenter": {
          "label": "\u6570\u636e\u4e2d\u5fc3",
          "notes": [
            "\u540c\u6bd4 +1,298%"
          ]
        },
        "edge": {
          "label": "\u8fb9\u7f18",
          "notes": [
            "\u540c\u6bd4 +392%"
          ]
        },
        "consumer": {
          "label": "\u6d88\u8d39\u7ea7",
          "notes": [
            "\u540c\u6bd4 (5%)"
          ]
        },
        "revenue": {
          "label": "\u6536\u5165",
          "notes": [
            "\u540c\u6bd4 +372%"
          ]
        },
        "gross_profit": {
          "label": "\u6bdb\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 85%",
            "\u540c\u6bd4 +58 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "operating_profit": {
          "label": "\u8425\u4e1a\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 78%",
            "\u540c\u6bd4 +78 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "net_profit": {
          "label": "\u51c0\u5229\u6da6",
          "notes": [
            "\u5229\u6da6\u7387 77%",
            "\u540c\u6bd4 +78 \u4e2a\u767e\u5206\u70b9"
          ]
        },
        "cost_of_revenue": {
          "label": "\u6536\u5165\u6210\u672c"
        },
        "operating_expenses": {
          "label": "\u8425\u4e1a\u8d39\u7528"
        },
        "tax": {
          "label": "\u7a0e\u8d39"
        },
        "rnd": {
          "label": "\u7814\u53d1"
        },
        "sga": {
          "label": "\u9500\u552e\u53ca\u884c\u653f"
        },
        "other": {
          "label": "\u5176\u4ed6"
        }
      },
      "layout": {
        "labels": {
          "datacenter": {
            "blocks": [
              {
                "x": 436.25,
                "top": 351.61,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "\u540c\u6bd4 +1,298%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 257.84,
                "top": 541.73,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u6570\u636e\u4e2d\u5fc3",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#000000"
                  }
                ],
                "semanticRole": "icon-caption"
              }
            ]
          },
          "edge": {
            "blocks": [
              {
                "x": 436.25,
                "top": 635.5,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "\u540c\u6bd4 +392%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 257.84,
                "top": 903.76,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u8fb9\u7f18",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#000000"
                  }
                ],
                "semanticRole": "icon-caption"
              }
            ]
          },
          "consumer": {
            "blocks": [
              {
                "x": 436.25,
                "top": 1037.89,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "\u540c\u6bd4 (5%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 257.84,
                "top": 1125.14,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u6d88\u8d39\u7ea7",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#000000"
                  }
                ],
                "semanticRole": "icon-caption"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 908.97,
                "top": 459.69,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u6536\u5165",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#000000"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#000000"
                  },
                  {
                    "text": "\u540c\u6bd4 +372%",
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
                "x": 1375.17,
                "top": 311.24,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u6bdb\u5229\u6da6",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "\u5229\u6da6\u7387 85%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 +58 \u4e2a\u767e\u5206\u70b9",
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
                "x": 1846.58,
                "top": 246.12,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u8425\u4e1a\u5229\u6da6",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "\u5229\u6da6\u7387 78%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 +78 \u4e2a\u767e\u5206\u70b9",
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
                "x": 2458.64,
                "top": 427.14,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u51c0\u5229\u6da6",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "\u5229\u6da6\u7387 77%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "\u540c\u6bd4 +78 \u4e2a\u767e\u5206\u70b9",
                    "size": 23,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1375.17,
                "top": 1153.79,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u6536\u5165",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "\u6210\u672c",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1846.58,
                "top": 991.01,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u8425\u4e1a",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "\u8d39\u7528",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 32.55615234375,
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
                "x": 2182.56,
                "top": 739.68,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u5176\u4ed6",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#009900"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#009900"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2458.64,
                "top": 915.48,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u7a0e\u8d39",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2458.64,
                "top": 1127.75,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u7814\u53d1",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2458.64,
                "top": 1287.92,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "\u9500\u552e\u53ca\u884c\u653f",
                    "size": 29.95166015625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 29.95166015625,
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
