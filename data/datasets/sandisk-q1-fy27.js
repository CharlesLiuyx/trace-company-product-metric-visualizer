(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "sandisk-q1-fy27",
  "name": "Sandisk · Q1 FY27",
  "company": "Sandisk",
  "meta": {
    "company": "Sandisk",
    "title": "Sandisk Q1 FY27 Income Statement",
    "period": "Q1 FY27",
    "periodNote": "Ending Sep. 2026",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sandisk-q1-fy27.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 199,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 2210,
    "periodX": 1840,
    "periodY": 1228,
    "periodNoteY": 1270,
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
      "x": 576.9,
      "y": 290.4,
      "width": 631.58935546875,
      "height": 71.62353515625
    },
    {
      "href": "data/assets/raster-annotations/sandisk/datacenter-storage-cluster.png",
      "x": 200.55,
      "y": 450.5,
      "width": 114.59765625,
      "height": 101.5751953125
    },
    {
      "href": "data/assets/raster-annotations/sandisk/edge-storage-cluster.png",
      "x": 182.31,
      "y": 777,
      "width": 147.15380859375,
      "height": 127.6201171875
    },
    {
      "href": "data/assets/raster-annotations/sandisk/consumer-storage-cluster.png",
      "x": 200.55,
      "y": 1010.54,
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
      "value": 4.8,
      "notes": [
        "+1,685% Y/Y"
      ],
      "valueText": "$4.8B"
    },
    {
      "id": "edge",
      "type": "source",
      "col": 0,
      "label": "Edge",
      "value": 5.8,
      "notes": [
        "+320% Y/Y"
      ],
      "valueText": "$5.8B"
    },
    {
      "id": "consumer",
      "type": "source",
      "col": 0,
      "label": "Consumer",
      "value": 0.4,
      "notes": [
        "(39%) Y/Y"
      ],
      "valueText": "$0.4B"
    },
    {
      "id": "revenue",
      "type": "hub",
      "col": 1,
      "label": "Revenue",
      "value": 11,
      "valueText": "$11.0B",
      "notes": [
        "+378% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "type": "profit",
      "col": 2,
      "label": "Gross profit",
      "value": 9.4,
      "notes": [
        "85% margin",
        "+55pp Y/Y"
      ],
      "valueText": "$9.4B"
    },
    {
      "id": "operating_profit",
      "type": "profit",
      "col": 3,
      "label": "Operating profit",
      "value": 8.8,
      "notes": [
        "80% margin",
        "+72pp Y/Y"
      ],
      "valueText": "$8.8B"
    },
    {
      "id": "net_profit",
      "type": "profit",
      "col": 4,
      "label": "Net profit",
      "value": 8.1,
      "notes": [
        "73% margin",
        "+69pp Y/Y"
      ],
      "valueText": "$8.1B"
    },
    {
      "id": "cost_of_revenue",
      "type": "cost",
      "col": 2,
      "label": "Cost of revenue",
      "value": 1.7,
      "valueText": "($1.7B)"
    },
    {
      "id": "operating_expenses",
      "type": "cost",
      "col": 3,
      "label": "Operating expenses",
      "value": 0.6,
      "valueText": "($0.6B)"
    },
    {
      "id": "tax",
      "type": "cost",
      "col": 4,
      "label": "Tax",
      "value": 1.2,
      "valueText": "($1.2B)"
    },
    {
      "id": "rnd",
      "type": "cost",
      "col": 4,
      "label": "R&D",
      "value": 0.4,
      "valueText": "($0.4B)"
    },
    {
      "id": "sga",
      "type": "cost",
      "col": 4,
      "label": "SG&A",
      "value": 0.2,
      "valueText": "($0.2B)"
    },
    {
      "id": "other",
      "type": "profit",
      "col": 3,
      "label": "Other",
      "value": 0.5,
      "color": "#2ca02c",
      "labelColor": "#009900",
      "valueText": "$0.5B"
    }
  ],
  "links": [
    {
      "source": "datacenter",
      "target": "revenue",
      "value": 4.8,
      "sourceWidth": 175,
      "targetWidth": 175,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "edge",
      "target": "revenue",
      "value": 5.8,
      "sourceWidth": 213,
      "targetWidth": 213,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "consumer",
      "target": "revenue",
      "value": 0.4,
      "sourceWidth": 15,
      "targetWidth": 15,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 9.4,
      "sourceWidth": 343,
      "targetWidth": 343,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 1.7,
      "sourceWidth": 60,
      "targetWidth": 60,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 8.8,
      "sourceWidth": 322,
      "targetWidth": 322,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 0.6,
      "sourceWidth": 21,
      "targetWidth": 21,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 7.6,
      "sourceWidth": 278,
      "targetWidth": 278,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 1.2,
      "sourceWidth": 44,
      "targetWidth": 44,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other",
      "target": "net_profit",
      "value": 0.5,
      "sourceWidth": 19,
      "targetWidth": 19,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 0.4,
      "sourceWidth": 13,
      "targetWidth": 13,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 0.2,
      "sourceWidth": 8,
      "targetWidth": 8,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "datacenter": {
        "x": 407,
        "y": 445,
        "width": 72,
        "height": 175
      },
      "edge": {
        "x": 407,
        "y": 759,
        "width": 72,
        "height": 213
      },
      "consumer": {
        "x": 407,
        "y": 1135,
        "width": 72,
        "height": 15
      },
      "revenue": {
        "x": 872,
        "y": 621,
        "width": 72,
        "height": 403
      },
      "gross_profit": {
        "x": 1341,
        "y": 533,
        "width": 72,
        "height": 343
      },
      "cost_of_revenue": {
        "x": 1341,
        "y": 1079,
        "width": 72,
        "height": 60
      },
      "operating_profit": {
        "x": 1808,
        "y": 437,
        "width": 72,
        "height": 322
      },
      "operating_expenses": {
        "x": 1808,
        "y": 964,
        "width": 72,
        "height": 21
      },
      "net_profit": {
        "x": 2275,
        "y": 319,
        "width": 72,
        "height": 297
      },
      "other": {
        "x": 2169,
        "y": 653,
        "width": 72,
        "height": 19
      },
      "tax": {
        "x": 2275,
        "y": 832,
        "width": 72,
        "height": 44
      },
      "rnd": {
        "x": 2275,
        "y": 1121,
        "width": 72,
        "height": 13
      },
      "sga": {
        "x": 2275,
        "y": 1285,
        "width": 72,
        "height": 8
      }
    },
    "labels": {
      "datacenter": {
        "blocks": [
          {
            "x": 436.25,
            "top": 351.6,
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
                "text": "+1,685% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 257.84,
            "top": 563,
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
            "top": 662,
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
                "text": "+320% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 257.84,
            "top": 905,
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
            "top": 1038,
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
                "text": "(39%) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 257.84,
            "top": 1125,
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
            "top": 475,
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
                "text": "+378% Y/Y",
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
            "top": 348,
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
                "text": "+55pp Y/Y",
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
            "top": 251,
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
                "text": "80% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+72pp Y/Y",
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
            "top": 380,
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
                "text": "73% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+69pp Y/Y",
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
            "top": 1155,
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
            "top": 1000,
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
            "x": 2200,
            "top": 687,
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
            "top": 817,
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
            "top": 1087,
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
            "top": 1248,
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
      "name": "Sandisk · 2027 财年第一季度",
      "meta": {
        "title": "Sandisk 2027 财年第一季度利润表",
        "titleTextLength": 1750,
        "period": "2027 财年第一季度",
        "periodNote": "截至 2026 年 9 月"
      },
      "nodes": {
        "datacenter": {
          "label": "数据中心",
          "notes": [
            "同比 +1,685%"
          ]
        },
        "edge": {
          "label": "边缘",
          "notes": [
            "同比 +320%"
          ]
        },
        "consumer": {
          "label": "消费级",
          "notes": [
            "同比 (39%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +378%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 85%",
            "同比 +55 个百分点"
          ]
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 80%",
            "同比 +72 个百分点"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 73%",
            "同比 +69 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本"
        },
        "operating_expenses": {
          "label": "营业费用"
        },
        "tax": {
          "label": "税费"
        },
        "rnd": {
          "label": "研发"
        },
        "sga": {
          "label": "销售及行政"
        },
        "other": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "datacenter": {
            "blocks": [
              {
                "x": 436.25,
                "top": 351.6,
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
                    "text": "同比 +1,685%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 257.84,
                "top": 563,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "数据中心",
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
                "top": 662,
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
                    "text": "同比 +320%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 257.84,
                "top": 905,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "边缘",
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
                "top": 1038,
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
                    "text": "同比 (39%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 257.84,
                "top": 1125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "消费级",
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
                "top": 475,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
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
                    "text": "同比 +378%",
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
                "top": 348,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
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
                    "text": "利润率 85%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +55 个百分点",
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
                "top": 251,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业利润",
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
                    "text": "利润率 80%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +72 个百分点",
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
                "top": 380,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "净利润",
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
                    "text": "利润率 73%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +69 个百分点",
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
                "top": 1155,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
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
                "top": 1000,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业",
                    "size": 32.55615234375,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "费用",
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
                "x": 2200,
                "top": 687,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "其他",
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
                "top": 817,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "税费",
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
                "top": 1087,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
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
                "top": 1248,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售及行政",
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
