(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "unity-q3-fy22",
  "name": "Unity · Q3 FY22",
  "company": "Unity",
  "meta": {
    "company": "Unity",
    "title": "Unity Q3 FY22 Income Statement",
    "period": "Q3 FY22",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/unity-q3-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.61458333333331,
    "titleSize": 125.0,
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
    "titleColor": "#155477",
    "noteColor": "#777",
    "linkOpacity": 1,
    "linkTint": {
      "source": "#b2b2b2",
      "hub": "#b2b2b2",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "type": {
      "name": 29,
      "value": 29,
      "note": 21,
      "lineGap": 7
    },
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "create",
      "label": "Create Solutions",
      "value": 129,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+54% Y/Y"
      ],
      "color": "#666666",
      "labelColor": "#000000"
    },
    {
      "id": "operate",
      "label": "Operate Solutions",
      "value": 172,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(7%) Y/Y"
      ],
      "color": "#666666",
      "labelColor": "#000000"
    },
    {
      "id": "strategic",
      "label": "Strategic Partnerships",
      "value": 23,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(28%) Y/Y"
      ],
      "color": "#666666",
      "labelColor": "#000000"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 323,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+13% Y/Y"
      ],
      "color": "#666666",
      "labelColor": "#0c2936"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 211,
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "65% margin",
        "(12pp) Y/Y"
      ],
      "color": "#279d27",
      "labelColor": "#009653"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 112,
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": [],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -240,
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": [
        "(74%) margin",
        "(30pp) Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 451,
      "type": "cost",
      "col": 4,
      "order": 7,
      "notes": [],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "rnd",
      "label": "Research & development",
      "value": 248,
      "type": "cost",
      "col": 5,
      "order": 8,
      "notes": [
        "77% of revenue",
        "+15pp Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "sm",
      "label": "Sales & marketing",
      "value": 110,
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [
        "34% of revenue",
        "Unchanged"
      ],
      "color": "#d00000",
      "labelColor": "#a31900"
    },
    {
      "id": "ga",
      "label": "General & admin",
      "value": 93,
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [
        "29% of revenue",
        "+3pp Y/Y"
      ],
      "color": "#d00000",
      "labelColor": "#a31900"
    }
  ],
  "links": [
    {
      "source": "create",
      "target": "revenue",
      "value": 129,
      "sourceWidth": 91.14583333333333,
      "targetWidth": 91.14583333333333,
      "y0": 528.6458333333333,
      "y1": 639.3229166666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operate",
      "target": "revenue",
      "value": 172,
      "sourceWidth": 122.39583333333333,
      "targetWidth": 122.39583333333333,
      "y0": 802.0833333333333,
      "y1": 746.09375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "strategic",
      "target": "revenue",
      "value": 23,
      "sourceWidth": 15.625,
      "targetWidth": 16.927083333333332,
      "y0": 1036.4583333333333,
      "y1": 815.7552083333333,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 211,
      "sourceWidth": 151.04166666666666,
      "targetWidth": 149.73958333333331,
      "y0": 669.2708333333333,
      "y1": 593.0989583333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 112,
      "sourceWidth": 79.42708333333333,
      "targetWidth": 79.42708333333333,
      "y0": 784.5052083333333,
      "y1": 901.6927083333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 211,
      "sourceWidth": 149.73958333333331,
      "targetWidth": 149.73958333333331,
      "y0": 593.0989583333333,
      "y1": 805.3385416666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 240,
      "sourceWidth": 170.57291666666666,
      "targetWidth": 170.57291666666666,
      "y0": 1115.234375,
      "y1": 965.4947916666666,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 248,
      "sourceWidth": 175.78125,
      "targetWidth": 175.78125,
      "y0": 818.359375,
      "y1": 699.8697916666666,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 110,
      "sourceWidth": 78.125,
      "targetWidth": 78.125,
      "y0": 945.3125,
      "y1": 997.3958333333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 93,
      "sourceWidth": 66.40625,
      "targetWidth": 65.10416666666666,
      "y0": 1017.5781249999999,
      "y1": 1225.2604166666665,
      "sourceOrder": 2,
      "targetOrder": 0
    }
  ],
  "layout": {
    "scale": 0.7122395833333334,
    "nodes": {
      "create": {
        "x": 432.345703125,
        "y": 483.07291666666663,
        "width": 72.92578125,
        "height": 91.14583333333333
      },
      "operate": {
        "x": 432.345703125,
        "y": 740.8854166666666,
        "width": 72.92578125,
        "height": 122.39583333333333
      },
      "strategic": {
        "x": 432.345703125,
        "y": 1028.6458333333333,
        "width": 72.92578125,
        "height": 15.625
      },
      "revenue": {
        "x": 899.85205078125,
        "y": 593.75,
        "width": 72.92578125,
        "height": 230.46875
      },
      "gross_profit": {
        "x": 1366.05615234375,
        "y": 518.2291666666666,
        "width": 72.92578125,
        "height": 149.73958333333331
      },
      "cost_of_revenue": {
        "x": 1366.05615234375,
        "y": 861.9791666666666,
        "width": 72.92578125,
        "height": 79.42708333333333
      },
      "operating_loss": {
        "x": 1593.94921875,
        "y": 1029.9479166666665,
        "width": 72.92578125,
        "height": 170.57291666666666
      },
      "operating_expenses": {
        "x": 1879.14111328125,
        "y": 730.46875,
        "width": 71.62353515625,
        "height": 320.3125
      },
      "rnd": {
        "x": 2301.06884765625,
        "y": 611.9791666666666,
        "width": 72.92578125,
        "height": 175.78125
      },
      "sm": {
        "x": 2301.06884765625,
        "y": 958.3333333333333,
        "width": 72.92578125,
        "height": 78.125
      },
      "ga": {
        "x": 2301.06884765625,
        "y": 1192.7083333333333,
        "width": 72.92578125,
        "height": 65.10416666666666
      }
    },
    "labels": {
      "create": {
        "blocks": [
          {
            "x": 474.017578125,
            "top": 391.9270833333333,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+54% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 412.81201171875,
            "top": 483.07291666666663,
            "anchor": "end",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Create",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "Solutions",
                "size": 37.760416666666664,
                "weight": 800
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "operate": {
        "blocks": [
          {
            "x": 474.017578125,
            "top": 649.7395833333333,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "(7%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 412.81201171875,
            "top": 756.5104166666666,
            "anchor": "end",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Operate",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "Solutions",
                "size": 37.760416666666664,
                "weight": 800
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "strategic": {
        "blocks": [
          {
            "x": 474.017578125,
            "top": 937.5,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "(28%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 412.81201171875,
            "top": 990.8854166666666,
            "anchor": "end",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Strategic",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "Partnerships",
                "size": 37.760416666666664,
                "weight": 800
              }
            ],
            "semanticRole": "name"
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 936.31494140625,
            "top": 446.6145833333333,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Revenue",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+13% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1402.51904296875,
            "top": 329.4270833333333,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "65% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(12pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1402.51904296875,
            "top": 955.7291666666666,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Cost of",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "revenue",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1630.412109375,
            "top": 1217.4479166666665,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Operating loss",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "(74%) margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "(30pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1914.952880859375,
            "top": 575.5208333333333,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Operating",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "expenses",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 600.2604166666666,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Research &",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "development",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "77% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+15pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 946.6145833333333,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Sales &",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "marketing",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "34% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          },
          {
            "x": 2492.4990234375,
            "top": 1114.5833333333333,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Unchanged",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      },
      "ga": {
        "blocks": [
          {
            "x": 2492.4990234375,
            "top": 1180.9895833333333,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "General &",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "admin",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "29% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              },
              {
                "text": "+3pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777"
              }
            ]
          }
        ]
      }
    }
  },
  "operatingMetrics": [
    {
      "id": "dbnr",
      "value": "111",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "111%"
    },
    {
      "id": "customers_gt_100k",
      "value": "1075",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "1,075"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g><g><rect x=\"107\" y=\"900\" width=\"124\" height=\"129\" rx=\"29\" fill=\"#b2b2b2\"/><text x=\"169.0\" y=\"943\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\">DBNR</text><text x=\"169.0\" y=\"975\" text-anchor=\"middle\" font-size=\"23\" data-operating-metric=\"dbnr\">111%</text><text x=\"169.0\" y=\"1006\" text-anchor=\"middle\" font-size=\"21\">(31pp) Y/Y</text></g><g><rect x=\"236\" y=\"900\" width=\"316\" height=\"129\" rx=\"29\" fill=\"#b2b2b2\"/><text x=\"394.0\" y=\"943\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\">Customers &gt; $100K</text><text x=\"394.0\" y=\"975\" text-anchor=\"middle\" font-size=\"23\" data-operating-metric=\"customers_gt_100k\">1,075</text><text x=\"394.0\" y=\"1006\" text-anchor=\"middle\" font-size=\"21\">+10% Y/Y and (1%) Q/Q</text></g><text x=\"325\" y=\"1062\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777\">DBNR = Dollar Based Net Retention</text></g><text x=\"130\" y=\"1105\" font-size=\"29\" font-weight=\"700\">Source: Quarterly results</text></g>",
  "i18n": {
    "zh": {
      "name": "Unity · 2022 财年第三季度",
      "meta": {
        "title": "Unity 2022 财年第三季度利润表",
        "period": "2022 财年第三季度",
        "titleTextLength": 2070.5712890625
      },
      "nodes": {
        "create": {
          "label": "创作解决方案",
          "notes": [
            "同比 +54%"
          ]
        },
        "operate": {
          "label": "运营解决方案",
          "notes": [
            "同比 (7%)"
          ]
        },
        "strategic": {
          "label": "战略合作",
          "notes": [
            "同比 (28%)"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +13%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 65%",
            "同比 (12 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (74%)",
            "同比 (30 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "营业费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 77%",
            "同比 +15 个百分点"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 34%",
            "保持不变"
          ]
        },
        "ga": {
          "label": "一般及行政费用",
          "notes": [
            "占收入 29%",
            "同比 +3 个百分点"
          ]
        }
      },
      "layout": {
        "labels": {
          "create": {
            "blocks": [
              {
                "x": 474.017578125,
                "top": 391.9270833333333,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +54%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 412.81201171875,
                "top": 483.07291666666663,
                "anchor": "end",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "创作",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 37.760416666666664,
                    "weight": 800
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "operate": {
            "blocks": [
              {
                "x": 474.017578125,
                "top": 649.7395833333333,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 412.81201171875,
                "top": 756.5104166666666,
                "anchor": "end",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "运营",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "解决方案",
                    "size": 37.760416666666664,
                    "weight": 800
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "strategic": {
            "blocks": [
              {
                "x": 474.017578125,
                "top": 937.5,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 (28%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 412.81201171875,
                "top": 990.8854166666666,
                "anchor": "end",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "战略",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "合作",
                    "size": 37.760416666666664,
                    "weight": 800
                  }
                ],
                "semanticRole": "name"
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 936.31494140625,
                "top": 446.6145833333333,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +13%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1402.51904296875,
                "top": 329.4270833333333,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 65%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (12 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1402.51904296875,
                "top": 955.7291666666666,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "成本",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1630.412109375,
                "top": 1217.4479166666665,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (74%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 (30 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1914.952880859375,
                "top": 575.5208333333333,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 600.2604166666666,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "研究与",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "开发",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 77%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +15 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 946.6145833333333,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "销售与",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "市场",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 34%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              },
              {
                "x": 2492.4990234375,
                "top": 1114.5833333333333,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "保持不变",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          },
          "ga": {
            "blocks": [
              {
                "x": 2492.4990234375,
                "top": 1180.9895833333333,
                "anchor": "middle",
                "lineGap": 11.71875,
                "lines": [
                  {
                    "text": "一般及",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "行政",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 29%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  },
                  {
                    "text": "同比 +3 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g><g><rect x=\"107\" y=\"900\" width=\"124\" height=\"129\" rx=\"29\" fill=\"#b2b2b2\"/><text x=\"169.0\" y=\"943\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\">净收入留存率</text><text x=\"169.0\" y=\"975\" text-anchor=\"middle\" font-size=\"23\" data-operating-metric=\"dbnr\">111%</text><text x=\"169.0\" y=\"1006\" text-anchor=\"middle\" font-size=\"21\">同比 (31 个百分点)</text></g><g><rect x=\"236\" y=\"900\" width=\"316\" height=\"129\" rx=\"29\" fill=\"#b2b2b2\"/><text x=\"394.0\" y=\"943\" text-anchor=\"middle\" font-size=\"23\" font-weight=\"700\">年收入贡献 &gt; $100K 的客户</text><text x=\"394.0\" y=\"975\" text-anchor=\"middle\" font-size=\"23\" data-operating-metric=\"customers_gt_100k\">1,075</text><text x=\"394.0\" y=\"1006\" text-anchor=\"middle\" font-size=\"21\">同比 +10%，环比 (1%)</text></g><text x=\"325\" y=\"1062\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777\">DBNR = 净收入留存率</text></g><text x=\"130\" y=\"1105\" font-size=\"29\" font-weight=\"700\">来源：季度财报</text></g>"
    }
  },
  "rasterAnnotations": [
    {
      "key": "unity-company-logo",
      "href": "data/assets/raster-annotations/unity/company-logo.png",
      "x": 592.52197265625,
      "y": 231.77083333333331,
      "width": 570.3837890625,
      "height": 214.84375
    },
    {
      "key": "unity-weta-digital",
      "href": "data/assets/raster-annotations/unity/weta-digital.png",
      "x": 42.97412109375,
      "y": 449.21875,
      "width": 134.13134765625,
      "height": 54.6875
    },
    {
      "key": "unity-ziva",
      "href": "data/assets/raster-annotations/unity/ziva.png",
      "x": 48.18310546875,
      "y": 502.60416666666663,
      "width": 119.806640625,
      "height": 39.0625
    },
    {
      "key": "unity-speedtree",
      "href": "data/assets/raster-annotations/unity/speedtree.png",
      "x": 24.74267578125,
      "y": 546.875,
      "width": 169.2919921875,
      "height": 35.15625
    },
    {
      "key": "unity-syncsketch",
      "href": "data/assets/raster-annotations/unity/syncsketch.png",
      "x": 48.18310546875,
      "y": 585.9375,
      "width": 121.10888671875,
      "height": 37.760416666666664
    },
    {
      "key": "unity-unity-pro",
      "href": "data/assets/raster-annotations/unity/unity-pro.png",
      "x": 23.4404296875,
      "y": 759.1145833333333,
      "width": 138.0380859375,
      "height": 52.08333333333333
    },
    {
      "key": "unity-unity-enterprise",
      "href": "data/assets/raster-annotations/unity/unity-enterprise.png",
      "x": 23.4404296875,
      "y": 805.9895833333333,
      "width": 195.3369140625,
      "height": 52.08333333333333
    }
  ]
});})();