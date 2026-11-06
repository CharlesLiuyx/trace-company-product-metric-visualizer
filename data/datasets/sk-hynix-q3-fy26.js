(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "sk-hynix-q3-fy26",
  "name": "SK hynix · Q3 FY26",
  "company": "SK hynix",
  "meta": {
    "company": "SK hynix",
    "title": "SK hynix Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "hidePeriodStamp": true,
    "currency": "₩",
    "unit": "T",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/sk-hynix-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 196,
    "titleSize": 124,
    "titleWeight": 800,
    "titleTextLength": 2260
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#777777",
    "interfaceAudit": {
      "mode": "error"
    },
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#e6863e",
        "label": "#eb1239"
      },
      "hub": {
        "node": "#e6863e",
        "label": "#eb1239"
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
      "source": "#edc1a1",
      "hub": "#edc1a1",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 39,
      "value": 39,
      "note": 28,
      "lineGap": 9
    }
  },
  "nodes": [
    {
      "id": "dram",
      "label": "DRAM",
      "value": 78.5,
      "valueText": "₩78.5T",
      "type": "source",
      "notes": [
        "+311% Y/Y"
      ]
    },
    {
      "id": "nand_flash",
      "label": "NAND Flash",
      "value": 25.1,
      "valueText": "₩25.1T",
      "type": "source",
      "notes": [
        "+413% Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "value": 1.0,
      "valueText": "₩1.0T",
      "type": "source",
      "notes": [
        "+114% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 104.6,
      "valueText": "₩104.6T",
      "type": "hub",
      "notes": [
        "+328% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": [
        "Gross",
        "profit"
      ],
      "value": 89.7,
      "valueText": "₩89.7T",
      "type": "profit",
      "notes": [
        "86% margin",
        "(38pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "value": 15.0,
      "valueText": "(₩15.0T)",
      "type": "cost",
      "notes": []
    },
    {
      "id": "operating_profit",
      "label": [
        "Operating",
        "profit"
      ],
      "value": 83.3,
      "valueText": "₩83.3T",
      "type": "profit",
      "notes": [
        "80% margin",
        "+33pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": [
        "Operating",
        "expenses"
      ],
      "value": 6.3,
      "valueText": "(₩6.3T)",
      "type": "cost",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 39.8,
      "valueText": "₩39.8T",
      "type": "profit",
      "notes": [
        "38% margin",
        "(14pp) Y/Y"
      ]
    },
    {
      "id": "other_expense",
      "label": "Other",
      "value": 21.0,
      "valueText": "(₩21.0T)",
      "type": "cost",
      "notes": []
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 10.9,
      "valueText": "(₩10.9T)",
      "type": "cost",
      "notes": []
    },
    {
      "id": "finance",
      "label": "Finance",
      "value": 11.6,
      "valueText": "(₩11.6T)",
      "type": "cost",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "dram",
      "target": "revenue",
      "value": 78.5,
      "sourceWidth": 243.52001953125,
      "targetWidth": 244.822265625,
      "y0": 720.793212890625,
      "y1": 821.71728515625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#edc1a1"
    },
    {
      "source": "nand_flash",
      "target": "revenue",
      "value": 25.1,
      "sourceWidth": 76.83251953125,
      "targetWidth": 78.134765625,
      "y0": 1055.470458984375,
      "y1": 983.19580078125,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#edc1a1"
    },
    {
      "source": "other_revenue",
      "target": "revenue",
      "value": 1.0,
      "sourceWidth": 3.90673828125,
      "targetWidth": 2.6044921875,
      "y0": 1266.434326171875,
      "y1": 1023.5654296875,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#edc1a1"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 89.7,
      "sourceWidth": 278.6806640625,
      "targetWidth": 278.6806640625,
      "y0": 838.646484375,
      "y1": 740.97802734375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 15,
      "sourceWidth": 46.880859375,
      "targetWidth": 46.880859375,
      "y0": 1001.42724609375,
      "y1": 1134.25634765625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 83.3,
      "sourceWidth": 259.14697265625,
      "targetWidth": 257.8447265625,
      "y0": 731.211181640625,
      "y1": 636.79833984375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 6.3,
      "sourceWidth": 19.53369140625,
      "targetWidth": 19.53369140625,
      "y0": 870.551513671875,
      "y1": 976.033447265625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 39.8,
      "sourceWidth": 123.71337890625,
      "targetWidth": 123.71337890625,
      "y0": 569.732666015625,
      "y1": 486.388916015625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_profit",
      "target": "other_expense",
      "value": 21,
      "sourceWidth": 65.1123046875,
      "targetWidth": 65.1123046875,
      "y0": 663.494384765625,
      "y1": 867.2958984375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 10.9,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "y0": 712.979736328125,
      "y1": 1036.587890625,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_profit",
      "target": "finance",
      "value": 11.6,
      "sourceWidth": 35.811767578125,
      "targetWidth": 36.462890625,
      "y0": 747.8148193359375,
      "y1": 1192.857421875,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 3.12,
    "nodes": {
      "dram": {
        "x": 402.394,
        "y": 599.033,
        "width": 72.926,
        "height": 243.52
      },
      "nand_flash": {
        "x": 402.394,
        "y": 1017.054,
        "width": 72.926,
        "height": 76.833
      },
      "other_revenue": {
        "x": 402.394,
        "y": 1264.481,
        "width": 72.926,
        "height": 3.907
      },
      "revenue": {
        "x": 869.9,
        "y": 699.306,
        "width": 72.926,
        "height": 325.562
      },
      "gross_profit": {
        "x": 1337.407,
        "y": 601.638,
        "width": 72.926,
        "height": 278.681
      },
      "cost_of_sales": {
        "x": 1337.407,
        "y": 1110.816,
        "width": 72.926,
        "height": 46.881
      },
      "operating_profit": {
        "x": 1803.611,
        "y": 507.876,
        "width": 72.926,
        "height": 257.845
      },
      "operating_expenses": {
        "x": 1803.611,
        "y": 966.267,
        "width": 72.926,
        "height": 19.534
      },
      "net_profit": {
        "x": 2271.117,
        "y": 424.532,
        "width": 72.926,
        "height": 123.713
      },
      "other_expense": {
        "x": 2271.117,
        "y": 834.74,
        "width": 72.926,
        "height": 65.112
      },
      "tax": {
        "x": 2271.117,
        "y": 1019.659,
        "width": 72.926,
        "height": 33.858
      },
      "finance": {
        "x": 2271.117,
        "y": 1174.626,
        "width": 72.926,
        "height": 36.463
      }
    },
    "labels": {
      "dram": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 507.8759765625,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#eb1239",
                "weight": 400
              },
              {
                "text": "+311% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          },
          {
            "x": 210.9638671875,
            "top": 700.6083984375,
            "anchor": "middle",
            "lines": [
              {
                "text": "DRAM",
                "size": 39.0673828125,
                "color": "#eb1239",
                "weight": 800
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      },
      "nand_flash": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 927.19921875,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#eb1239",
                "weight": 400
              },
              {
                "text": "+413% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          },
          {
            "x": 210.9638671875,
            "top": 1031.8923828125,
            "anchor": "middle",
            "lines": [
              {
                "text": "NAND Flash",
                "size": 39.0673828125,
                "color": "#eb1239",
                "weight": 800
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 438.85693359375,
            "top": 1174.6259765625,
            "anchor": "middle",
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#eb1239",
                "weight": 400
              },
              {
                "text": "+114% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          },
          {
            "x": 210.9638671875,
            "top": 1242.87197265625,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other",
                "size": 39.0673828125,
                "color": "#eb1239",
                "weight": 800
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 906.36328125,
            "top": 557.361328125,
            "anchor": "middle",
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "color": "#eb1239",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#eb1239",
                "weight": 400
              },
              {
                "text": "+328% Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1373.86962890625,
            "top": 367.2333984375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Gross",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "86% margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(38pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1373.86962890625,
            "top": 1179.8349609375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Cost of sales",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1845.28271484375,
            "top": 270.8671875,
            "anchor": "middle",
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "80% margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "+33pp Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1845.28271484375,
            "top": 1006.63623046875,
            "anchor": "middle",
            "lines": [
              {
                "text": "Operating",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 420.62548828125,
            "anchor": "middle",
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "color": "#008f51",
                "weight": 400
              },
              {
                "text": "38% margin",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              },
              {
                "text": "(14pp) Y/Y",
                "size": 27.34716796875,
                "color": "#777777",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      },
      "other_expense": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 829.53076171875,
            "anchor": "middle",
            "lines": [
              {
                "text": "Other",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 985.80029296875,
            "anchor": "middle",
            "lines": [
              {
                "text": "Tax",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      },
      "finance": {
        "blocks": [
          {
            "x": 2458.640625,
            "top": 1158.9990234375,
            "anchor": "middle",
            "lines": [
              {
                "text": "Finance",
                "size": 32.55615234375,
                "color": "#941100",
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "color": "#941100",
                "weight": 400
              }
            ],
            "lineGap": 9.11572265625
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-logo-q3-fy26",
      "href": "data/assets/raster-annotations/sk-hynix/company-logo-q3-fy26.png",
      "x": 625,
      "y": 234,
      "width": 599,
      "height": 317,
      "clearance": true
    }
  ],
  "annotationsSvg": "<text x=\"82\" y=\"282\" fill=\"#155077\" font-size=\"38\" font-weight=\"800\">In KRW</text><text x=\"85\" y=\"335\" fill=\"#155077\" font-size=\"38\" font-weight=\"800\">trillion</text>",
  "i18n": {
    "preservedAnnotationText": [
      "SK",
      "hynix",
      "DRAM",
      "NAND"
    ],
    "zh": {
      "name": "SK 海力士 · 2026 财年第三季度",
      "meta": {
        "title": "SK 海力士 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "titleTextLength": 2100
      },
      "nodes": {
        "dram": {
          "label": "DRAM",
          "notes": [
            "同比 +311%"
          ]
        },
        "nand_flash": {
          "label": "NAND 闪存",
          "notes": [
            "同比 +413%"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +114%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +328%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 86%",
            "同比下降 38 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 80%",
            "同比 +33 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 38%",
            "同比下降 14 个百分点"
          ]
        },
        "other_expense": {
          "label": "其他费用",
          "notes": []
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "finance": {
          "label": "财务费用",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "dram": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 507.8759765625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#eb1239",
                    "weight": 400
                  },
                  {
                    "text": "同比 +311%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              },
              {
                "x": 210.9638671875,
                "top": 700.6083984375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "DRAM",
                    "size": 39.0673828125,
                    "color": "#eb1239",
                    "weight": 800
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          },
          "nand_flash": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 927.19921875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#eb1239",
                    "weight": 400
                  },
                  {
                    "text": "同比 +413%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              },
              {
                "x": 210.9638671875,
                "top": 1031.8923828125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "NAND 闪存",
                    "size": 39.0673828125,
                    "color": "#eb1239",
                    "weight": 800
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 438.85693359375,
                "top": 1174.6259765625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#eb1239",
                    "weight": 400
                  },
                  {
                    "text": "同比 +114%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              },
              {
                "x": 210.9638671875,
                "top": 1242.87197265625,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他",
                    "size": 39.0673828125,
                    "color": "#eb1239",
                    "weight": 800
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 906.36328125,
                "top": 557.361328125,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "color": "#eb1239",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#eb1239",
                    "weight": 400
                  },
                  {
                    "text": "同比 +328%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1373.86962890625,
                "top": 367.2333984375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 86%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比下降 38 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1373.86962890625,
                "top": 1179.8349609375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1845.28271484375,
                "top": 270.8671875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 80%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比 +33 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1845.28271484375,
                "top": 1006.63623046875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "营业费用",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2363.57666015625,
                "top": 420.62548828125,
                "anchor": "start",
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "color": "#008f51",
                    "weight": 400
                  },
                  {
                    "text": "利润率 38%",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  },
                  {
                    "text": "同比下降 14 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          },
          "other_expense": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 829.53076171875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "其他费用",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 985.80029296875,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "税费",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          },
          "finance": {
            "blocks": [
              {
                "x": 2458.640625,
                "top": 1158.9990234375,
                "anchor": "middle",
                "lines": [
                  {
                    "text": "财务费用",
                    "size": 32.55615234375,
                    "color": "#941100",
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "color": "#941100",
                    "weight": 400
                  }
                ],
                "lineGap": 9.11572265625
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"82\" y=\"282\" fill=\"#155077\" font-size=\"38\" font-weight=\"800\">单位：万亿</text><text x=\"85\" y=\"335\" fill=\"#155077\" font-size=\"38\" font-weight=\"800\">韩元</text>"
    }
  }
});})();
