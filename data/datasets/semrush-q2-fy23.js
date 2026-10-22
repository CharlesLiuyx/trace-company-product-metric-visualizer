window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "semrush-q2-fy23",
  "name": "Semrush · Q2 FY23",
  "company": "Semrush",
  "meta": {
    "company": "Semrush",
    "title": "Semrush Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "periodNote": "",
    "currency": "$",
    "unit": "M",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/semrush-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.21875,
    "titleSize": 125.0,
    "titleWeight": 800,
    "titleTextLength": 2278.9306640625,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "titleColor": "#155077",
    "noteColor": "#777777",
    "subtitleColor": "#777777",
    "interfaceAudit": {
      "mode": "error"
    },
    "palette": {
      "source": {
        "node": "#ff6025",
        "label": "#ff6025"
      },
      "hub": {
        "node": "#ff6025",
        "label": "#ff6025"
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
      "source": "#f8b199",
      "hub": null,
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "allowRasterAnnotations": true
  },
  "nodes": [
    {
      "id": "united_states",
      "label": "United States",
      "value": 35,
      "valueText": "$35M",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+21% Y/Y"
      ]
    },
    {
      "id": "united_kingdom",
      "label": "United Kingdom",
      "value": 7,
      "valueText": "$7M",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+15% Y/Y"
      ]
    },
    {
      "id": "other",
      "label": "Other",
      "value": 33,
      "valueText": "$33M",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+19% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 75,
      "valueText": "$75M",
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+19% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 62,
      "valueText": "$62M",
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "83% margin",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 13,
      "valueText": "($13M)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": []
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": -2,
      "valueText": "($2M)",
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": [
        "(3%) margin",
        "+10pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 64,
      "valueText": "($64M)",
      "type": "cost",
      "col": 4,
      "order": 7,
      "notes": []
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 30,
      "valueText": "($30M)",
      "type": "cost",
      "col": 5,
      "order": 8,
      "notes": [
        "40% of revenue",
        "(9pp) Y/Y"
      ]
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 19,
      "valueText": "($19M)",
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [
        "26% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 14,
      "valueText": "($14M)",
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [
        "19% of revenue",
        "+3pp Y/Y"
      ]
    },
    {
      "id": "exit_costs",
      "label": "Exit costs",
      "value": 0.3,
      "valueText": "($0.3M)",
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": [
        "Non-recurring",
        "(5pp Y/Y)"
      ]
    }
  ],
  "links": [
    {
      "source": "united_states",
      "target": "revenue",
      "value": 35,
      "sourceWidth": 149.73958333333331,
      "targetWidth": 149.73958333333331,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "united_kingdom",
      "target": "revenue",
      "value": 7,
      "sourceWidth": 32.55208333333333,
      "targetWidth": 31.25,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "other",
      "target": "revenue",
      "value": 33,
      "sourceWidth": 140.625,
      "targetWidth": 139.32291666666666,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 62,
      "sourceWidth": 265.625,
      "targetWidth": 265.625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 13,
      "sourceWidth": 54.6875,
      "targetWidth": 55.98958333333333,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 62,
      "sourceWidth": 265.625,
      "targetWidth": 264.32291666666663,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 2,
      "sourceWidth": 10.416666666666666,
      "targetWidth": 10.416666666666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "y0": 1027.34375,
      "y1": 848.9583333333333,
      "curve": {
        "x0": 1652.55029296875,
        "x1": 1797.099609375,
        "c1x": 1724.173828125,
        "c1y": 1027.34375,
        "c2x": 1726.7783203125,
        "c2y": 848.9583333333333
      }
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 30,
      "sourceWidth": 61.197916666666664,
      "targetWidth": 61.197916666666664,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 19,
      "sourceWidth": 130.20833333333331,
      "targetWidth": 130.20833333333331,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 14,
      "sourceWidth": 82.03125,
      "targetWidth": 83.33333333333333,
      "sourceOrder": 2,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "exit_costs",
      "value": 0.3,
      "sourceWidth": 1.3020833333333333,
      "targetWidth": 2.6041666666666665,
      "sourceOrder": 3,
      "targetOrder": 0
    }
  ],
  "operatingMetrics": [
    {
      "id": "arr",
      "value": "302",
      "unit": "M",
      "currency": "USD",
      "comparison": "eq",
      "literal": "$302M"
    },
    {
      "id": "dbnr",
      "value": "112",
      "unit": "%",
      "currency": null,
      "comparison": "eq",
      "literal": "112%"
    },
    {
      "id": "customers",
      "value": "104000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "104,000"
    }
  ],
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g font-family=\"Arial,sans-serif\"><rect x=\"101\" y=\"885\" width=\"127\" height=\"127\" rx=\"28\" fill=\"#ff6025\"/><text x=\"164.5\" y=\"928\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">ARR</text><text data-operating-metric=\"arr\" x=\"164.5\" y=\"959\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">$302M</text><text x=\"164.5\" y=\"991\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+20% Y/Y</text><rect x=\"233\" y=\"885\" width=\"126\" height=\"127\" rx=\"28\" fill=\"#ff6025\"/><text x=\"296.0\" y=\"928\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">DBNR</text><text data-operating-metric=\"dbnr\" x=\"296.0\" y=\"959\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">112%</text><text x=\"296.0\" y=\"991\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">(4pp) Q/Q</text><rect x=\"366\" y=\"885\" width=\"231\" height=\"127\" rx=\"28\" fill=\"#ff6025\"/><text x=\"481.5\" y=\"928\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Customers</text><text data-operating-metric=\"customers\" x=\"481.5\" y=\"959\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">104,000</text><text x=\"481.5\" y=\"991\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">+14% Y/Y</text><text x=\"340\" y=\"1038\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">ARR = Annual Recurring Revenue</text><text x=\"340\" y=\"1067\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">DBNR = Dollar Based Net Retention</text><text x=\"130\" y=\"1105\" font-size=\"30\" font-weight=\"700\">Source: Quarterly results</text></g></g>",
  "layout": {
    "nodes": {
      "united_states": {
        "x": 367.2333984375,
        "y": 388.0208333333333,
        "width": 72.92578125,
        "height": 149.73958333333331
      },
      "united_kingdom": {
        "x": 367.2333984375,
        "y": 742.1875,
        "width": 72.92578125,
        "height": 32.55208333333333
      },
      "other": {
        "x": 367.2333984375,
        "y": 975.2604166666666,
        "width": 72.92578125,
        "height": 140.625
      },
      "revenue": {
        "x": 834.73974609375,
        "y": 584.6354166666666,
        "width": 72.92578125,
        "height": 320.3125
      },
      "gross_profit": {
        "x": 1299.6416015625,
        "y": 498.69791666666663,
        "width": 72.92578125,
        "height": 265.625
      },
      "cost_of_revenue": {
        "x": 1297.037109375,
        "y": 951.8229166666666,
        "width": 72.92578125,
        "height": 55.98958333333333
      },
      "operating_loss": {
        "x": 1579.62451171875,
        "y": 1022.1354166666666,
        "width": 72.92578125,
        "height": 10.416666666666666
      },
      "operating_expenses": {
        "x": 1797.099609375,
        "y": 579.4270833333333,
        "width": 72.92578125,
        "height": 274.7395833333333
      },
      "sm": {
        "x": 2235.95654296875,
        "y": 372.3958333333333,
        "width": 72.92578125,
        "height": 61.197916666666664
      },
      "ga": {
        "x": 2235.95654296875,
        "y": 602.8645833333333,
        "width": 72.92578125,
        "height": 130.20833333333331
      },
      "rnd": {
        "x": 2235.95654296875,
        "y": 889.3229166666666,
        "width": 72.92578125,
        "height": 83.33333333333333
      },
      "exit_costs": {
        "x": 2235.95654296875,
        "y": 1157.5520833333333,
        "width": 72.92578125,
        "height": 2.6041666666666665
      }
    },
    "labels": {
      "united_states": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 296.875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+21% Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 229.1953125,
            "top": 414.62083333333334,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "United",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "States",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "united_kingdom": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 651.0416666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+15% Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 229.1953125,
            "top": 710.2458333333334,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "United",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "Kingdom",
                "size": 39.0625,
                "weight": 700
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 403.6962890625,
            "top": 884.1145833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 229.1953125,
            "top": 1026.0416666666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Other",
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
            "x": 871.20263671875,
            "top": 438.8020833333333,
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
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+19% Y/Y",
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
            "x": 1336.1044921875,
            "top": 315.10416666666663,
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
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "83% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1334.80224609375,
            "top": 1029.9479166666665,
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
            "x": 1614.78515625,
            "top": 1054.6875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "loss",
                "size": 39.0625,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "(3%) margin",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+10pp Y/Y",
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
            "x": 1833.5625,
            "top": 420.57291666666663,
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
                "size": 37.760416666666664,
                "weight": 400
              }
            ]
          }
        ]
      },
      "sm": {
        "blocks": [
          {
            "x": 2428.68896484375,
            "top": 369.79166666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "40% of revenue",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(9pp) Y/Y",
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
            "x": 2428.68896484375,
            "top": 621.09375,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "26% of revenue",
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
      "rnd": {
        "blocks": [
          {
            "x": 2428.68896484375,
            "top": 897.1354166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
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
                "text": "+3pp Y/Y",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "exit_costs": {
        "blocks": [
          {
            "x": 2428.68896484375,
            "top": 1117.1875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Exit costs",
                "size": 31.25,
                "weight": 700
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              },
              {
                "text": "Non-recurring",
                "size": 28.645833333333332,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(5pp Y/Y)",
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
  "i18n": {
    "zh": {
      "name": "Semrush · 2023 财年第二季度",
      "meta": {
        "title": "Semrush 2023 财年第二季度利润表",
        "period": "2023 财年第二季度"
      },
      "nodes": {
        "united_states": {
          "label": "美国",
          "notes": [
            "同比 +21%"
          ]
        },
        "united_kingdom": {
          "label": "英国",
          "notes": [
            "同比 +15%"
          ]
        },
        "other": {
          "label": "其他",
          "notes": [
            "同比 +19%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +19%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "毛利率 83%",
            "同比 +3 个百分点"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (3%)",
            "同比 +10 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "sm": {
          "label": "销售及营销",
          "notes": [
            "占收入 40%",
            "同比 (9 个百分点)"
          ]
        },
        "ga": {
          "label": "一般及行政",
          "notes": [
            "占收入 26%",
            "同比 +3 个百分点"
          ]
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 19%",
            "同比 +3 个百分点"
          ]
        },
        "exit_costs": {
          "label": "退出成本",
          "notes": [
            "非经常性",
            "同比 (5 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "united_states": {
            "blocks": [
              {
                "x": 403.6962890625,
                "top": 296.875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +21%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 229.1953125,
                "top": 443.359375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "美国",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "united_kingdom": {
            "blocks": [
              {
                "x": 403.6962890625,
                "top": 651.0416666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +15%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 229.1953125,
                "top": 738.9322916666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "英国",
                    "size": 39.0625,
                    "weight": 700
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 403.6962890625,
                "top": 884.1145833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 229.1953125,
                "top": 1026.0416666666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "其他",
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
                "x": 871.20263671875,
                "top": 438.8020833333333,
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
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +19%",
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
                "x": 1336.1044921875,
                "top": 315.10416666666663,
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
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "毛利率 83%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1334.80224609375,
                "top": 1029.9479166666665,
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
                "x": 1614.78515625,
                "top": 1054.6875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "亏损",
                    "size": 39.0625,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (3%)",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +10 个百分点",
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
                "x": 1833.5625,
                "top": 420.57291666666663,
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
                    "size": 37.760416666666664,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "sm": {
            "blocks": [
              {
                "x": 2428.68896484375,
                "top": 369.79166666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售及营销",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 40%",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (9 个百分点)",
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
                "x": 2428.68896484375,
                "top": 621.09375,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "一般及行政",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "占收入 26%",
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
          "rnd": {
            "blocks": [
              {
                "x": 2428.68896484375,
                "top": 897.1354166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发",
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
                    "text": "同比 +3 个百分点",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "exit_costs": {
            "blocks": [
              {
                "x": 2428.68896484375,
                "top": 1117.1875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "退出成本",
                    "size": 31.25,
                    "weight": 700
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  },
                  {
                    "text": "非经常性",
                    "size": 28.645833333333332,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (5 个百分点)",
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
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g font-family=\"Arial,sans-serif\"><rect x=\"101\" y=\"885\" width=\"127\" height=\"127\" rx=\"28\" fill=\"#ff6025\"/><text x=\"164.5\" y=\"928\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">ARR</text><text data-operating-metric=\"arr\" x=\"164.5\" y=\"959\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">$302M</text><text x=\"164.5\" y=\"991\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +20%</text><rect x=\"233\" y=\"885\" width=\"126\" height=\"127\" rx=\"28\" fill=\"#ff6025\"/><text x=\"296.0\" y=\"928\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">DBNR</text><text data-operating-metric=\"dbnr\" x=\"296.0\" y=\"959\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">112%</text><text x=\"296.0\" y=\"991\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">环比 (4 个百分点)</text><rect x=\"366\" y=\"885\" width=\"231\" height=\"127\" rx=\"28\" fill=\"#ff6025\"/><text x=\"481.5\" y=\"928\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">客户数</text><text data-operating-metric=\"customers\" x=\"481.5\" y=\"959\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">104,000</text><text x=\"481.5\" y=\"991\" text-anchor=\"middle\" font-size=\"21\" fill=\"white\">同比 +14%</text><text x=\"340\" y=\"1038\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">ARR = 年度经常性收入</text><text x=\"340\" y=\"1067\" text-anchor=\"middle\" font-size=\"21\" fill=\"#777777\">DBNR = 基于金额的净留存率</text><text x=\"130\" y=\"1105\" font-size=\"30\" font-weight=\"700\">来源：季度业绩</text></g></g>"
    }
  },
  "rasterAnnotations": [
    {
      "src": "data/assets/raster-annotations/semrush/company-logo.png",
      "x": 685,
      "y": 236,
      "width": 378,
      "height": 172
    }
  ]
});
