window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "j-j-q2-fy23",
  "name": "J&J · Q2 FY23",
  "company": "Johnson & Johnson",
  "meta": {
    "company": "Johnson & Johnson",
    "title": "J&J Q2 FY23 Income Statement",
    "period": "Q2 FY23",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/j-j-q2-fy23.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.91666666666666,
    "titleSize": 125.0,
    "titleWeight": 800,
    "hidePeriodStamp": true
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155077",
    "linkOpacity": 1
  },
  "nodes": [
    {
      "id": "consumer_health",
      "label": "Consumer Health",
      "value": 4,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$4.0B"
    },
    {
      "id": "pharmaceutical",
      "label": "Pharmaceutical",
      "value": 13.7,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+3% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$13.7B"
    },
    {
      "id": "medtech",
      "label": "MedTech",
      "value": 7.8,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+13% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$7.8B"
    },
    {
      "id": "revenue",
      "label": "Sales",
      "value": 25.5,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$25.5B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 17.3,
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "68% margin",
        "+1pp Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$17.3B"
    },
    {
      "id": "cost_of_products_sold",
      "label": "Cost of products sold",
      "value": 8.2,
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($8.2B)"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 6.7,
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "26% margin",
        "+2pp Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$6.7B"
    },
    {
      "id": "operating_expenses",
      "label": "Expenses",
      "value": 10.6,
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($10.6B)"
    },
    {
      "id": "other_income",
      "label": "Other",
      "value": 0.1,
      "type": "profit",
      "col": 3,
      "order": 8,
      "notes": [],
      "color": "#2ca02c",
      "valueText": "$0.1B"
    },
    {
      "id": "net_profit",
      "label": "Net income",
      "value": 5.1,
      "type": "profit",
      "col": 4,
      "order": 9,
      "notes": [
        "20% margin",
        "+0pp Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$5.1B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.6,
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($1.6B)"
    },
    {
      "id": "sga",
      "label": "Sales, marketing & administrative",
      "value": 6.7,
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($6.7B)"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 3.8,
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($3.8B)"
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.1,
      "type": "cost",
      "col": 4,
      "order": 13,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($0.1B)"
    }
  ],
  "links": [
    {
      "source": "consumer_health",
      "target": "revenue",
      "value": 4,
      "sourceWidth": 71.61458333333333,
      "targetWidth": 71.61458333333333,
      "y0": 466.796875,
      "y1": 736.328125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "pharmaceutical",
      "target": "revenue",
      "value": 13.7,
      "sourceWidth": 242.1875,
      "targetWidth": 242.1875,
      "y0": 856.7708333333333,
      "y1": 893.2291666666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "medtech",
      "target": "revenue",
      "value": 7.8,
      "sourceWidth": 136.71875,
      "targetWidth": 134.11458333333331,
      "y0": 1279.296875,
      "y1": 1081.3802083333333,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 17.3,
      "sourceWidth": 303.38541666666663,
      "targetWidth": 303.38541666666663,
      "y0": 852.2135416666666,
      "y1": 774.0885416666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_products_sold",
      "value": 8.2,
      "sourceWidth": 144.53125,
      "targetWidth": 144.53125,
      "y0": 1076.171875,
      "y1": 1152.9947916666665,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de8585"
    },
    {
      "source": "gross_profit",
      "target": "pretax_income",
      "value": 6.7,
      "sourceWidth": 117.1875,
      "targetWidth": 115.88541666666666,
      "y0": 680.9895833333333,
      "y1": 560.546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 10.6,
      "sourceWidth": 186.19791666666666,
      "targetWidth": 187.5,
      "y0": 832.6822916666666,
      "y1": 932.2916666666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de8585"
    },
    {
      "source": "other_income",
      "target": "pretax_income",
      "value": 0.1,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "y0": 694.0104166666666,
      "y1": 619.7916666666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cc99"
    },
    {
      "source": "pretax_income",
      "target": "net_profit",
      "value": 5.1,
      "sourceWidth": 89.84375,
      "targetWidth": 89.84375,
      "y0": 547.5260416666666,
      "y1": 440.7552083333333,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.6,
      "sourceWidth": 28.645833333333332,
      "targetWidth": 27.34375,
      "y0": 606.7708333333333,
      "y1": 703.7760416666666,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de8585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 6.7,
      "sourceWidth": 117.1875,
      "targetWidth": 117.1875,
      "y0": 897.1354166666666,
      "y1": 979.1666666666666,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#de8585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.8,
      "sourceWidth": 67.70833333333333,
      "targetWidth": 66.40625,
      "y0": 989.5833333333333,
      "y1": 1177.734375,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de8585"
    },
    {
      "source": "operating_expenses",
      "target": "restructuring",
      "value": 0.1,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "y0": 1024.7395833333333,
      "y1": 1329.4270833333333,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#de8585"
    }
  ],
  "layout": {
    "nodes": {
      "consumer_health": {
        "x": 460.9951171875,
        "y": 430.9895833333333,
        "width": 72.92578125,
        "height": 71.61458333333333
      },
      "pharmaceutical": {
        "x": 460.9951171875,
        "y": 735.6770833333333,
        "width": 72.92578125,
        "height": 242.1875
      },
      "medtech": {
        "x": 460.9951171875,
        "y": 1210.9375,
        "width": 72.92578125,
        "height": 136.71875
      },
      "revenue": {
        "x": 927.19921875,
        "y": 700.5208333333333,
        "width": 72.92578125,
        "height": 447.91666666666663
      },
      "gross_profit": {
        "x": 1397.31005859375,
        "y": 622.3958333333333,
        "width": 72.92578125,
        "height": 303.38541666666663
      },
      "cost_of_products_sold": {
        "x": 1394.70556640625,
        "y": 1080.7291666666665,
        "width": 72.92578125,
        "height": 144.53125
      },
      "pretax_income": {
        "x": 1862.2119140625,
        "y": 502.60416666666663,
        "width": 72.92578125,
        "height": 118.48958333333333
      },
      "operating_expenses": {
        "x": 1857.0029296875,
        "y": 838.5416666666666,
        "width": 72.92578125,
        "height": 187.5
      },
      "other_income": {
        "x": 1720.26708984375,
        "y": 692.7083333333333,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "net_profit": {
        "x": 2329.71826171875,
        "y": 395.8333333333333,
        "width": 72.92578125,
        "height": 89.84375
      },
      "tax": {
        "x": 2329.71826171875,
        "y": 690.1041666666666,
        "width": 72.92578125,
        "height": 27.34375
      },
      "sga": {
        "x": 2329.71826171875,
        "y": 920.5729166666666,
        "width": 72.92578125,
        "height": 117.1875
      },
      "rnd": {
        "x": 2329.71826171875,
        "y": 1144.53125,
        "width": 72.92578125,
        "height": 66.40625
      },
      "restructuring": {
        "x": 2329.71826171875,
        "y": 1328.125,
        "width": 72.92578125,
        "height": 2.6041666666666665
      }
    },
    "labels": {
      "consumer_health": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 334.63541666666663,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 239.61328125,
            "top": 407.5520833333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Consumer Health",
                "size": 39.0625,
                "weight": 700,
                "color": "#666666"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "pharmaceutical": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 638.0208333333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 252.6357421875,
            "top": 755.2083333333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Pharmaceutical",
                "size": 39.0625,
                "weight": 700,
                "color": "#666666"
              }
            ],
            "semanticRole": "top-aligned-side-label"
          }
        ]
      },
      "medtech": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 1110.6770833333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+13% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 963.662109375,
            "top": 548.1770833333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Sales",
                "size": 39.0625,
                "weight": 700,
                "color": "#666666"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34375,
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
            "x": 1433.77294921875,
            "top": 433.59375,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "68% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "pretax_income": {
        "blocks": [
          {
            "x": 1898.6748046875,
            "top": 313.8020833333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39.0625,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "26% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+2pp Y/Y",
                "size": 27.34375,
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
            "x": 2518.5439453125,
            "top": 348.9583333333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Net",
                "size": 39.0625,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "income",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "20% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_products_sold": {
        "blocks": [
          {
            "x": 1433.77294921875,
            "top": 1238.28125,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.45833333333333,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "products sold",
                "size": 36.45833333333333,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
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
            "x": 1894.76806640625,
            "top": 1039.0625,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Expenses",
                "size": 36.45833333333333,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.45833333333333,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 1758.0322265625,
            "top": 707.03125,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2518.5439453125,
            "top": 669.2708333333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
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
            "x": 2530.26416015625,
            "top": 928.3854166666666,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Sales,",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "marketing &",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "administrative",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
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
            "x": 2530.26416015625,
            "top": 1148.4375,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "restructuring": {
        "blocks": [
          {
            "x": 2530.26416015625,
            "top": 1286.4583333333333,
            "anchor": "middle",
            "lineGap": 7.8125,
            "lines": [
              {
                "text": "Restructuring",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      }
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-company-logo.png",
      "x": 843.85546875,
      "y": 272.13541666666663,
      "width": 251.33349609375,
      "height": 227.86458333333331
    },
    {
      "key": "medicine-icon",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-medicine-icon.png",
      "x": 165.38525390625,
      "y": 803.3854166666666,
      "width": 141.94482421875,
      "height": 171.875
    },
    {
      "key": "medtech-wordmark",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-medtech-wordmark.png",
      "x": 82.04150390625,
      "y": 1213.5416666666665,
      "width": 321.65478515625,
      "height": 113.28125
    },
    {
      "key": "consumer-health-brands",
      "href": "data/assets/raster-annotations/j-j/q2-fy23-consumer-health.png",
      "x": 36.462890625,
      "y": 457.03125,
      "width": 410.20751953125,
      "height": 125.0
    }
  ],
  "annotationsSvg": "<text x=\"172\" y=\"1439\" font-size=\"39\" font-weight=\"700\" fill=\"#000000\">Source: Quarterly results</text>",
  "i18n": {
    "zh": {
      "name": "强生 · 2023 财年第二季度",
      "meta": {
        "title": "强生 2023 财年第二季度利润表",
        "period": "2023 财年第二季度"
      },
      "nodes": {
        "consumer_health": {
          "label": "消费者健康",
          "notes": [
            "同比 +5%"
          ]
        },
        "pharmaceutical": {
          "label": "制药",
          "notes": [
            "同比 +3%"
          ]
        },
        "medtech": {
          "label": "医疗科技",
          "notes": [
            "同比 +13%"
          ]
        },
        "revenue": {
          "label": "销售收入",
          "notes": [
            "同比 +6%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 68%",
            "同比 +1 个百分点"
          ]
        },
        "cost_of_products_sold": {
          "label": "产品销售成本",
          "notes": []
        },
        "pretax_income": {
          "label": "税前利润",
          "notes": [
            "利润率 26%",
            "同比 +2 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "费用",
          "notes": []
        },
        "other_income": {
          "label": "其他",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 20%",
            "同比 +0 个百分点"
          ]
        },
        "tax": {
          "label": "税费",
          "notes": []
        },
        "sga": {
          "label": "销售、市场及行政费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": []
        },
        "restructuring": {
          "label": "重组费用",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "consumer_health": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 334.63541666666663,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 239.61328125,
                "top": 407.5520833333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "消费者健康",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#666666"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "pharmaceutical": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 638.0208333333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 252.6357421875,
                "top": 755.2083333333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "制药",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#666666"
                  }
                ],
                "semanticRole": "top-aligned-side-label"
              }
            ]
          },
          "medtech": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 1110.6770833333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +13%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 963.662109375,
                "top": 548.1770833333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "销售收入",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#666666"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34375,
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
                "x": 1433.77294921875,
                "top": 433.59375,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 68%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "pretax_income": {
            "blocks": [
              {
                "x": 1898.6748046875,
                "top": 313.8020833333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 26%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +2 个百分点",
                    "size": 27.34375,
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
                "x": 2518.5439453125,
                "top": 348.9583333333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "净",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 20%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_products_sold": {
            "blocks": [
              {
                "x": 1433.77294921875,
                "top": 1238.28125,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "产品销售",
                    "size": 36.45833333333333,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 36.45833333333333,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
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
                "x": 1894.76806640625,
                "top": 1039.0625,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "费用",
                    "size": 36.45833333333333,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.45833333333333,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 1758.0322265625,
                "top": 707.03125,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2518.5439453125,
                "top": 669.2708333333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
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
                "x": 2530.26416015625,
                "top": 928.3854166666666,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "销售、",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "市场及",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
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
                "x": 2530.26416015625,
                "top": 1148.4375,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "restructuring": {
            "blocks": [
              {
                "x": 2530.26416015625,
                "top": 1286.4583333333333,
                "anchor": "middle",
                "lineGap": 7.8125,
                "lines": [
                  {
                    "text": "重组费用",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<text x=\"172\" y=\"1439\" font-size=\"39\" font-weight=\"700\" fill=\"#000000\">来源：季度业绩</text>"
    }
  }
});
