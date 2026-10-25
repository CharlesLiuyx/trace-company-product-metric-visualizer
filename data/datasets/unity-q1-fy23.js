(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "unity-q1-fy23",
  "name": "Unity · Q1 FY23",
  "company": "Unity",
  "meta": {
    "company": "Unity",
    "title": "Unity Q1 FY23 Income Statement",
    "period": "Q1 FY23",
    "periodNote": "Ending Mar. 2023",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/unity-q1-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.3333333333333,
    "titleY": 199.21875,
    "titleSize": 125.0,
    "titleWeight": 800,
    "titleTextLength": 2076.8229166666665,
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
    "palette": {
      "source": {
        "node": "#000000",
        "label": "#000000"
      },
      "hub": {
        "node": "#000000",
        "label": "#082c39"
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
      "source": "#888888",
      "hub": "#888888",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "labelYOffset": 0,
    "type": {
      "name": 30,
      "value": 30,
      "note": 22,
      "lineGap": 10.416666666666666
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "create",
      "label": "Create Solutions",
      "value": 187,
      "notes": [
        "+14% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 0
    },
    {
      "id": "grow",
      "label": "Grow Solutions",
      "value": 313,
      "notes": [
        "+101% Y/Y"
      ],
      "type": "source",
      "col": 0,
      "order": 1
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 500,
      "notes": [
        "+56% Y/Y"
      ],
      "type": "hub",
      "col": 1,
      "order": 2
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 338,
      "notes": [
        "68% margin",
        "(3pp) Y/Y"
      ],
      "type": "profit",
      "col": 2,
      "order": 3
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 161,
      "notes": [],
      "type": "cost",
      "col": 2,
      "order": 4
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -254,
      "notes": [
        "(51%) margin",
        "+3pp Y/Y"
      ],
      "type": "cost",
      "col": 3,
      "order": 5
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 593,
      "notes": [],
      "type": "cost",
      "col": 4,
      "order": 6
    },
    {
      "id": "rnd",
      "label": "Research & development",
      "value": 280,
      "notes": [
        "56% of revenue",
        "(13pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 7
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 216,
      "notes": [
        "43% of revenue",
        "+11pp Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 8
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 97,
      "notes": [
        "19% of revenue",
        "(3pp) Y/Y"
      ],
      "type": "cost",
      "col": 5,
      "order": 9
    }
  ],
  "links": [
    {
      "source": "create",
      "target": "revenue",
      "value": 187,
      "sourceWidth": 78.125,
      "targetWidth": 78.125,
      "y0": 510.41666666666663,
      "y1": 661.4583333333333,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "grow",
      "target": "revenue",
      "value": 313,
      "sourceWidth": 130.20833333333331,
      "targetWidth": 130.20833333333331,
      "y0": 923.1770833333333,
      "y1": 765.625,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 338,
      "sourceWidth": 141.92708333333331,
      "targetWidth": 141.92708333333331,
      "y0": 693.359375,
      "y1": 634.765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 161,
      "sourceWidth": 66.40625,
      "targetWidth": 67.70833333333333,
      "y0": 797.5260416666666,
      "y1": 863.28125,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 338,
      "sourceWidth": 141.92708333333331,
      "targetWidth": 141.92708333333331,
      "y0": 634.765625,
      "y1": 707.6822916666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 254,
      "sourceWidth": 106.77083333333333,
      "targetWidth": 106.77083333333333,
      "y0": 1052.0833333333333,
      "y1": 832.03125,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 280,
      "sourceWidth": 117.1875,
      "targetWidth": 117.1875,
      "y0": 695.3125,
      "y1": 553.3854166666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 216,
      "sourceWidth": 91.14583333333333,
      "targetWidth": 89.84375,
      "y0": 799.4791666666666,
      "y1": 822.265625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 97,
      "sourceWidth": 40.36458333333333,
      "targetWidth": 40.36458333333333,
      "y0": 865.234375,
      "y1": 1073.5677083333333,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.41666666666666663,
    "nodes": {
      "create": {
        "x": 429.6875,
        "y": 471.35416666666663,
        "width": 72.91666666666666,
        "height": 78.125
      },
      "grow": {
        "x": 429.6875,
        "y": 858.0729166666666,
        "width": 72.91666666666666,
        "height": 130.20833333333331
      },
      "revenue": {
        "x": 897.1354166666666,
        "y": 622.3958333333333,
        "width": 72.91666666666666,
        "height": 208.33333333333331
      },
      "gross_profit": {
        "x": 1351.5625,
        "y": 563.8020833333333,
        "width": 72.91666666666666,
        "height": 141.92708333333331
      },
      "cost_of_revenue": {
        "x": 1351.5625,
        "y": 829.4270833333333,
        "width": 72.91666666666666,
        "height": 67.70833333333333
      },
      "operating_loss": {
        "x": 1571.6145833333333,
        "y": 998.6979166666666,
        "width": 72.91666666666666,
        "height": 106.77083333333333
      },
      "operating_expenses": {
        "x": 1838.5416666666665,
        "y": 636.71875,
        "width": 72.91666666666666,
        "height": 248.69791666666666
      },
      "rnd": {
        "x": 2298.177083333333,
        "y": 494.79166666666663,
        "width": 72.91666666666666,
        "height": 117.1875
      },
      "sm": {
        "x": 2298.177083333333,
        "y": 777.34375,
        "width": 72.91666666666666,
        "height": 89.84375
      },
      "ga": {
        "x": 2298.177083333333,
        "y": 1053.3854166666665,
        "width": 72.91666666666666,
        "height": 40.36458333333333
      }
    },
    "labels": {
      "create": {
        "blocks": [
          {
            "x": 468.75,
            "top": 375.0,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+14% Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 410.15625,
            "top": 463.54166666666663,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Create",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "Solutions",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "grow": {
        "blocks": [
          {
            "x": 466.1458333333333,
            "top": 760.4166666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+101% Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 410.15625,
            "top": 874.9229166666667,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Grow",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "Solutions",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 932.2916666666666,
            "top": 475.26041666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "+56% Y/Y",
                "size": 28.645833333333332,
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
            "x": 1388.0208333333333,
            "top": 377.60416666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "68% margin",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.645833333333332,
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
            "x": 1388.0208333333333,
            "top": 920.5729166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "revenue",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1608.0729166666665,
            "top": 1123.6979166666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating loss",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              },
              {
                "text": "(51%) margin",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 28.645833333333332,
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
            "x": 1875.0,
            "top": 474.375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2492.1875,
            "top": 509.1145833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Research &",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "development",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "56% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(13pp) Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2492.1875,
            "top": 786.4583333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "marketing",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "43% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+11pp Y/Y",
                "size": 28.645833333333332,
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
            "x": 2492.1875,
            "top": 1052.0833333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "General &",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "admin",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "19% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(3pp) Y/Y",
                "size": 28.645833333333332,
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
      "id": "dbne",
      "label": "DBNE",
      "value": "107",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "107%",
      "basis": "unspecified",
      "notes": [
        "(9pp) Q/Q"
      ],
      "quote": "DBNE\n107%\n(9pp) Q/Q",
      "anchor": {
        "type": "image-box",
        "box": [
          138,
          1172,
          164,
          168
        ]
      }
    },
    {
      "id": "customers",
      "label": "Customers > $100K",
      "value": "1322",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1,322",
      "basis": "unspecified",
      "notes": [
        "+22% Y/Y and -1% Q/Q"
      ],
      "quote": "Customers > $100K\n1,322\n+22% Y/Y and -1% Q/Q",
      "anchor": {
        "type": "image-box",
        "box": [
          305,
          1171,
          415,
          171
        ]
      }
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g><rect x=\"107\" y=\"902\" width=\"124\" height=\"126\" rx=\"25\" fill=\"#b3b3b3\"/><rect x=\"235\" y=\"900\" width=\"317\" height=\"128\" rx=\"28\" fill=\"#b3b3b3\"/><text x=\"169\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\">DBNE</text><text data-operating-metric=\"dbne\" x=\"169\" y=\"975\" text-anchor=\"middle\" font-size=\"24\">107%</text><text x=\"169\" y=\"1007\" text-anchor=\"middle\" font-size=\"22\">(9pp) Q/Q</text><text x=\"393\" y=\"942\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\">Customers &gt; $100K</text><text data-operating-metric=\"customers\" x=\"393\" y=\"974\" text-anchor=\"middle\" font-size=\"24\">1,322</text><text x=\"393\" y=\"1005\" text-anchor=\"middle\" font-size=\"22\">+22% Y/Y and -1% Q/Q</text><text x=\"330\" y=\"1062\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">DBNR = Dollar Based Net Expansion</text><text x=\"130\" y=\"1105\" font-size=\"30\" font-weight=\"700\">Source: Quarterly results</text></g></g>",
  "i18n": {
    "zh": {
      "name": "Unity · 2023 财年第一季度",
      "meta": {
        "title": "Unity 2023 财年第一季度利润表",
        "period": "2023 财年第一季度",
        "periodNote": "截至 2023 年 3 月"
      },
      "nodes": {
        "create": {
          "label": "创作解决方案",
          "notes": [
            "同比 +14%"
          ]
        },
        "grow": {
          "label": "增长解决方案",
          "notes": [
            "同比 +101%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +56%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 68%",
            "同比 (3 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (51%)",
            "同比 +3 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 56%",
            "同比 (13 个百分点)"
          ]
        },
        "sm": {
          "label": "销售与营销",
          "notes": [
            "占收入 43%",
            "同比 +11 个百分点"
          ]
        },
        "ga": {
          "label": "一般及行政费用",
          "notes": [
            "占收入 19%",
            "同比 (3 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "create": {
            "blocks": [
              {
                "x": 468.75,
                "top": 375.0,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +14%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 410.15625,
                "top": 463.54166666666663,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "创作",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "解决方案",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "grow": {
            "blocks": [
              {
                "x": 466.1458333333333,
                "top": 760.4166666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +101%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 410.15625,
                "top": 874.9229166666667,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "增长",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "解决方案",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 932.2916666666666,
                "top": 475.26041666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "同比 +56%",
                    "size": 28.645833333333332,
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
                "x": 1388.0208333333333,
                "top": 377.60416666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 68%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28.645833333333332,
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
                "x": 1388.0208333333333,
                "top": 920.5729166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "成本",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1608.0729166666665,
                "top": 1123.6979166666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (51%)",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 28.645833333333332,
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
                "x": 1875.0,
                "top": 474.375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "费用",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2492.1875,
                "top": 509.1145833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "开发",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 56%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (13 个百分点)",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2492.1875,
                "top": 786.4583333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "营销",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 43%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +11 个百分点",
                    "size": 28.645833333333332,
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
                "x": 2492.1875,
                "top": 1052.0833333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "行政费用",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 19%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (3 个百分点)",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.3020833333333333)\"><g><rect x=\"107\" y=\"902\" width=\"124\" height=\"126\" rx=\"25\" fill=\"#b3b3b3\"/><rect x=\"235\" y=\"900\" width=\"317\" height=\"128\" rx=\"28\" fill=\"#b3b3b3\"/><text x=\"169\" y=\"943\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\">DBNE</text><text data-operating-metric=\"dbne\" x=\"169\" y=\"975\" text-anchor=\"middle\" font-size=\"24\">107%</text><text x=\"169\" y=\"1007\" text-anchor=\"middle\" font-size=\"22\">环比 (9 个百分点)</text><text x=\"393\" y=\"942\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\">年收入贡献 &gt; $100K 的客户</text><text data-operating-metric=\"customers\" x=\"393\" y=\"974\" text-anchor=\"middle\" font-size=\"24\">1,322</text><text x=\"393\" y=\"1005\" text-anchor=\"middle\" font-size=\"22\">同比 +22%，环比 -1%</text><text x=\"330\" y=\"1062\" text-anchor=\"middle\" font-size=\"22\" fill=\"#777777\">DBNR = 以美元计的净扩张率</text><text x=\"130\" y=\"1105\" font-size=\"30\" font-weight=\"700\">来源：季度业绩</text></g></g>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "unity-company-logo",
      "href": "data/assets/raster-annotations/unity/company-logo.png",
      "x": 593.75,
      "y": 234.375,
      "width": 562.5,
      "height": 208.33333333333331
    },
    {
      "key": "unity-weta-digital",
      "href": "data/assets/raster-annotations/unity/weta-digital.png",
      "x": 44.27083333333333,
      "y": 438.8020833333333,
      "width": 135.41666666666666,
      "height": 49.479166666666664
    },
    {
      "key": "unity-ziva",
      "href": "data/assets/raster-annotations/unity/ziva.png",
      "x": 49.479166666666664,
      "y": 490.88541666666663,
      "width": 122.39583333333333,
      "height": 36.45833333333333
    },
    {
      "key": "unity-speedtree",
      "href": "data/assets/raster-annotations/unity/speedtree.png",
      "x": 28.645833333333332,
      "y": 533.8541666666666,
      "width": 164.0625,
      "height": 32.55208333333333
    },
    {
      "key": "unity-syncsketch",
      "href": "data/assets/raster-annotations/unity/syncsketch.png",
      "x": 49.479166666666664,
      "y": 575.5208333333333,
      "width": 126.30208333333333,
      "height": 32.55208333333333
    },
    {
      "key": "unity-unity-pro",
      "href": "data/assets/raster-annotations/unity/unity-pro.png",
      "x": 15.625,
      "y": 850.2604166666666,
      "width": 131.51041666666666,
      "height": 42.96875
    },
    {
      "key": "unity-unity-enterprise",
      "href": "data/assets/raster-annotations/unity/unity-enterprise.png",
      "x": 15.625,
      "y": 921.875,
      "width": 190.10416666666666,
      "height": 42.96875
    },
    {
      "key": "unity-ironsource",
      "href": "data/assets/raster-annotations/unity/ironsource.png",
      "x": 15.625,
      "y": 994.7916666666666,
      "width": 186.19791666666666,
      "height": 44.27083333333333
    }
  ]
});})();
