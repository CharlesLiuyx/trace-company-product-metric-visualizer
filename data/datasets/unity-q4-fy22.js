(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "unity-q4-fy22",
  "name": "Unity · Q4 FY22",
  "company": "Unity",
  "meta": {
    "company": "Unity",
    "title": "Unity Q4 FY22 Income Statement",
    "period": "Q4 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/unity-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.24365234375,
    "titleSize": 125.015625,
    "titleWeight": 800,
    "titleTextLength": 2070.5712890625,
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
    "titleColor": "#155077",
    "noteColor": "#7b7b7b",
    "palette": {
      "source": {
        "node": "#666666",
        "label": "#000000"
      },
      "hub": {
        "node": "#666666",
        "label": "#0d2b36"
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
      "source": "#b3b3b3",
      "hub": "#b3b3b3",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "create",
      "label": "Create Solutions",
      "value": 198,
      "type": "source",
      "notes": [
        "+34% Y/Y"
      ]
    },
    {
      "id": "grow",
      "label": "Grow Solutions",
      "value": 253,
      "type": "source",
      "notes": [
        "+51% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 451,
      "type": "hub",
      "notes": [
        "+43% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 311,
      "type": "profit",
      "notes": [
        "69% margin",
        "(8pp) Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 140,
      "type": "cost",
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 274,
      "type": "cost",
      "notes": [
        "(61%) margin",
        "(15pp) Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 585,
      "type": "cost",
      "notes": []
    },
    {
      "id": "rnd",
      "label": "Research & development",
      "value": 274,
      "type": "cost",
      "notes": [
        "61% of revenue",
        "(5pp) Y/Y"
      ]
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 183,
      "type": "cost",
      "notes": [
        "41% of revenue",
        "+8pp Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 127,
      "type": "cost",
      "notes": [
        "28% of revenue",
        "+4pp Y/Y"
      ]
    }
  ],
  "links": [
    {
      "source": "create",
      "target": "revenue",
      "value": 198,
      "sourceWidth": 106.7841796875,
      "targetWidth": 105.48193359375,
      "y0": 510.48046875,
      "y1": 660.889892578125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "grow",
      "target": "revenue",
      "value": 253,
      "sourceWidth": 135.43359375,
      "targetWidth": 134.13134765625,
      "y0": 936.31494140625,
      "y1": 780.696533203125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 311,
      "sourceWidth": 165.38525390625,
      "targetWidth": 165.38525390625,
      "y0": 690.841552734375,
      "y1": 589.266357421875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 140,
      "sourceWidth": 74.22802734375,
      "targetWidth": 75.5302734375,
      "y0": 810.648193359375,
      "y1": 905.06103515625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 311,
      "sourceWidth": 165.38525390625,
      "targetWidth": 165.38525390625,
      "y0": 589.266357421875,
      "y1": 707.770751953125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 274,
      "sourceWidth": 145.8515625,
      "targetWidth": 145.8515625,
      "y0": 1097.79345703125,
      "y1": 863.38916015625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 274,
      "sourceWidth": 145.8515625,
      "targetWidth": 147.15380859375,
      "y0": 698.00390625,
      "y1": 568.430419921875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 183,
      "sourceWidth": 97.66845703125,
      "targetWidth": 97.66845703125,
      "y0": 819.763916015625,
      "y1": 908.316650390625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 127,
      "sourceWidth": 67.716796875,
      "targetWidth": 67.716796875,
      "y0": 902.45654296875,
      "y1": 1162.90576171875,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.53131640625,
    "nodes": {
      "create": {
        "x": 431.04345703125,
        "y": 457.08837890625,
        "width": 74.22802734375,
        "height": 106.7841796875
      },
      "grow": {
        "x": 431.04345703125,
        "y": 868.59814453125,
        "width": 74.22802734375,
        "height": 135.43359375
      },
      "revenue": {
        "x": 898.5498046875,
        "y": 608.14892578125,
        "width": 72.92578125,
        "height": 239.61328125
      },
      "gross_profit": {
        "x": 1423.35498046875,
        "y": 506.57373046875,
        "width": 72.92578125,
        "height": 165.38525390625
      },
      "cost_of_revenue": {
        "x": 1425.95947265625,
        "y": 867.2958984375,
        "width": 72.92578125,
        "height": 75.5302734375
      },
      "operating_loss": {
        "x": 1668.17724609375,
        "y": 1024.86767578125,
        "width": 72.92578125,
        "height": 145.8515625
      },
      "operating_expenses": {
        "x": 1955.9736328125,
        "y": 625.078125,
        "width": 72.92578125,
        "height": 311.23681640625
      },
      "rnd": {
        "x": 2299.7666015625,
        "y": 494.853515625,
        "width": 72.92578125,
        "height": 147.15380859375
      },
      "sm": {
        "x": 2299.7666015625,
        "y": 859.482421875,
        "width": 72.92578125,
        "height": 97.66845703125
      },
      "ga": {
        "x": 2299.7666015625,
        "y": 1129.04736328125,
        "width": 72.92578125,
        "height": 67.716796875
      }
    },
    "labels": {
      "create": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 362.0244140625,
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
                "text": "+34% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              }
            ]
          },
          {
            "x": 414.1142578125,
            "top": 462.29736328125,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Create",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Solutions",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "grow": {
        "blocks": [
          {
            "x": 467.50634765625,
            "top": 773.5341796875,
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
                "text": "+51% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              }
            ]
          },
          {
            "x": 414.1142578125,
            "top": 888.1318359375,
            "anchor": "end",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Grow",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "Solutions",
                "size": 39.0673828125,
                "weight": 400
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 935.0126953125,
            "top": 457.08837890625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#0d2b36"
              },
              {
                "text": "+43% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1459.81787109375,
            "top": 319.05029296875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "69% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              },
              {
                "text": "(8pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1462.42236328125,
            "top": 958.453125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 39.0673828125,
                "weight": 400
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
      "operating_loss": {
        "blocks": [
          {
            "x": 1704.64013671875,
            "top": 1183.74169921875,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "(61%) margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              },
              {
                "text": "(15pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1992.4365234375,
            "top": 474.017578125,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 39.0673828125,
                "weight": 400
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
      "rnd": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 509.17822265625,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Research &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "61% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              },
              {
                "text": "(5pp) Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 865.99365234375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "41% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              },
              {
                "text": "+8pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 1130.349609375,
            "anchor": "middle",
            "lineGap": 9.11572265625,
            "lines": [
              {
                "text": "General &",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "admin",
                "size": 31.25390625,
                "weight": 400
              },
              {
                "text": "$value",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "28% of revenue",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              },
              {
                "text": "+4pp Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#7b7b7b"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "dbne",
      "value": "116",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "116%"
    },
    {
      "id": "customers",
      "value": "1340",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1,340"
    }
  ],
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/unity/company-logo.png",
      "x": 589,
      "y": 230,
      "width": 576,
      "height": 217
    },
    {
      "src": "data/assets/raster-annotations/unity/weta-digital.png",
      "x": 40,
      "y": 432,
      "width": 141,
      "height": 57
    },
    {
      "src": "data/assets/raster-annotations/unity/ziva.png",
      "x": 44,
      "y": 488,
      "width": 129,
      "height": 42
    },
    {
      "src": "data/assets/raster-annotations/unity/speedtree.png",
      "x": 22,
      "y": 533,
      "width": 176,
      "height": 36
    },
    {
      "src": "data/assets/raster-annotations/unity/syncsketch.png",
      "x": 44,
      "y": 570,
      "width": 129,
      "height": 40
    },
    {
      "src": "data/assets/raster-annotations/unity/unity-pro.png",
      "x": 10,
      "y": 844,
      "width": 141,
      "height": 53
    },
    {
      "src": "data/assets/raster-annotations/unity/unity-enterprise.png",
      "x": 10,
      "y": 915,
      "width": 199,
      "height": 53
    },
    {
      "src": "data/assets/raster-annotations/unity/ironsource.png",
      "x": 9,
      "y": 986,
      "width": 197,
      "height": 60
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><rect x=\"107\" y=\"902\" width=\"124\" height=\"126\" rx=\"28\" fill=\"#b3b3b3\"/><text x=\"169.0\" y=\"942\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\">DBNE</text><text data-operating-metric=\"dbne\" x=\"169.0\" y=\"974\" text-anchor=\"middle\" font-size=\"24\">116%</text><text x=\"169.0\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\">(24pp) Y/Y</text><rect x=\"235\" y=\"900\" width=\"317\" height=\"128\" rx=\"28\" fill=\"#b3b3b3\"/><text x=\"393.5\" y=\"942\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\">Customers &gt; $100K</text><text data-operating-metric=\"customers\" x=\"393.5\" y=\"974\" text-anchor=\"middle\" font-size=\"24\">1,340</text><text x=\"393.5\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\">+27% Y/Y and +25% Q/Q</text><text x=\"330\" y=\"1062\" text-anchor=\"middle\" font-size=\"21\" fill=\"#7b7b7b\">DBNR = Dollar Based Net Expansion</text><text x=\"130\" y=\"1103\" font-size=\"30\" font-weight=\"800\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "Unity · 2022 财年第四季度",
      "meta": {
        "title": "Unity 2022 财年第四季度利润表",
        "period": "2022 财年第四季度"
      },
      "nodes": {
        "create": {
          "label": "创作解决方案",
          "notes": [
            "同比 +34%"
          ]
        },
        "grow": {
          "label": "增长解决方案",
          "notes": [
            "同比 +51%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +43%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 69%",
            "同比 (8 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (61%)",
            "同比 (15 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 61%",
            "同比 (5 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 41%",
            "同比 +8 个百分点"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 28%",
            "同比 +4 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "create": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 362.0244140625,
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
                    "text": "同比 +34%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  }
                ]
              },
              {
                "x": 414.1142578125,
                "top": 462.29736328125,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "创作",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "grow": {
            "blocks": [
              {
                "x": 467.50634765625,
                "top": 773.5341796875,
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
                    "text": "同比 +51%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  }
                ]
              },
              {
                "x": 414.1142578125,
                "top": 888.1318359375,
                "anchor": "end",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "增长",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 39.0673828125,
                    "weight": 400
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 935.0126953125,
                "top": 457.08837890625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#0d2b36"
                  },
                  {
                    "text": "同比 +43%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1459.81787109375,
                "top": 319.05029296875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 69%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  },
                  {
                    "text": "同比 (8 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1462.42236328125,
                "top": 958.453125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 39.0673828125,
                    "weight": 400
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
          "operating_loss": {
            "blocks": [
              {
                "x": 1704.64013671875,
                "top": 1183.74169921875,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "利润率 (61%)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  },
                  {
                    "text": "同比 (15 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1992.4365234375,
                "top": 474.017578125,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "运营",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 39.0673828125,
                    "weight": 400
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
          "rnd": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 509.17822265625,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 61%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  },
                  {
                    "text": "同比 (5 个百分点)",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 865.99365234375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "市场",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 41%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  },
                  {
                    "text": "同比 +8 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 1130.349609375,
                "anchor": "middle",
                "lineGap": 9.11572265625,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "管理",
                    "size": 31.25390625,
                    "weight": 400
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "占收入 28%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  },
                  {
                    "text": "同比 +4 个百分点",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#7b7b7b"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375)\"><rect x=\"107\" y=\"902\" width=\"124\" height=\"126\" rx=\"28\" fill=\"#b3b3b3\"/><text x=\"169.0\" y=\"942\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\">DBNE</text><text data-operating-metric=\"dbne\" x=\"169.0\" y=\"974\" text-anchor=\"middle\" font-size=\"24\">116%</text><text x=\"169.0\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\">同比 (24 个百分点)</text><rect x=\"235\" y=\"900\" width=\"317\" height=\"128\" rx=\"28\" fill=\"#b3b3b3\"/><text x=\"393.5\" y=\"942\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\">客户年收入贡献 &gt; $100K</text><text data-operating-metric=\"customers\" x=\"393.5\" y=\"974\" text-anchor=\"middle\" font-size=\"24\">1,340</text><text x=\"393.5\" y=\"1005\" text-anchor=\"middle\" font-size=\"21\">同比 +27%；环比 +25%</text><text x=\"330\" y=\"1062\" text-anchor=\"middle\" font-size=\"21\" fill=\"#7b7b7b\">DBNR = 美元净扩张率</text><text x=\"130\" y=\"1103\" font-size=\"30\" font-weight=\"800\">来源：季度业绩</text></g>"
    }
  }
});})();