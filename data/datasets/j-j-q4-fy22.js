window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "j-j-q4-fy22",
  "name": "J&J · Q4 FY22",
  "company": "Johnson & Johnson",
  "meta": {
    "company": "Johnson & Johnson",
    "title": "J&J Q4 FY22 Income Statement",
    "period": "Q4 FY22",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/j-j-q4-fy22.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 196.61458333333331,
    "titleSize": 122.39583333333333,
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
  "layout": {
    "nodes": {
      "consumer_health": {
        "x": 468.80859375,
        "y": 428.38541666666663,
        "width": 72.92578125,
        "height": 76.82291666666666
      },
      "pharmaceutical": {
        "x": 468.80859375,
        "y": 696.6145833333333,
        "width": 72.92578125,
        "height": 264.32291666666663
      },
      "medtech": {
        "x": 468.80859375,
        "y": 1165.3645833333333,
        "width": 72.92578125,
        "height": 136.71875
      },
      "revenue": {
        "x": 941.52392578125,
        "y": 654.9479166666666,
        "width": 72.92578125,
        "height": 477.8645833333333
      },
      "gross_profit": {
        "x": 1398.6123046875,
        "y": 583.3333333333333,
        "width": 72.92578125,
        "height": 321.6145833333333
      },
      "cost_of_products_sold": {
        "x": 1406.42578125,
        "y": 1050.78125,
        "width": 72.92578125,
        "height": 156.25
      },
      "pretax_income": {
        "x": 2015.876953125,
        "y": 518.2291666666666,
        "width": 72.92578125,
        "height": 84.63541666666666
      },
      "net_profit": {
        "x": 2337.53173828125,
        "y": 484.375,
        "width": 72.92578125,
        "height": 70.3125
      },
      "tax": {
        "x": 2337.53173828125,
        "y": 647.1354166666666,
        "width": 72.92578125,
        "height": 13.020833333333332
      },
      "sga": {
        "x": 2023.6904296875,
        "y": 717.4479166666666,
        "width": 72.92578125,
        "height": 131.51041666666666
      },
      "rnd": {
        "x": 2024.99267578125,
        "y": 919.2708333333333,
        "width": 72.92578125,
        "height": 76.82291666666666
      },
      "in_process_rnd": {
        "x": 2023.6904296875,
        "y": 1087.2395833333333,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "restructuring": {
        "x": 2023.6904296875,
        "y": 1190.1041666666665,
        "width": 72.92578125,
        "height": 1.953125
      },
      "other_opex": {
        "x": 2024.99267578125,
        "y": 1282.5520833333333,
        "width": 72.92578125,
        "height": 22.135416666666664
      }
    },
    "labels": {
      "consumer_health": {
        "blocks": [
          {
            "x": 505.271484375,
            "top": 330.72916666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+1% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 239.61328125,
            "top": 403.6458333333333,
            "anchor": "middle",
            "lineGap": 6.510416666666666,
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
            "x": 505.271484375,
            "top": 598.9583333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(7%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 239.61328125,
            "top": 735.6770833333333,
            "anchor": "middle",
            "lineGap": 6.510416666666666,
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
            "x": 505.271484375,
            "top": 1067.7083333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(1%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 977.98681640625,
            "top": 506.51041666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "text": "(4%) Y/Y",
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
            "x": 1435.0751953125,
            "top": 393.22916666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "text": "67% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
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
            "x": 1435.0751953125,
            "top": 1222.65625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Cost of",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "products sold",
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
      "pretax_income": {
        "blocks": [
          {
            "x": 2052.33984375,
            "top": 330.72916666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
                "text": "% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
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
            "x": 2530.26416015625,
            "top": 416.66666666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Net profit",
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
                "text": "15% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34375,
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
            "x": 2530.26416015625,
            "top": 615.8854166666666,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
            "x": 2272.41943359375,
            "top": 727.8645833333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Sales, marketing &",
                "size": 31.25,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "administrative",
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
      "rnd": {
        "blocks": [
          {
            "x": 2272.41943359375,
            "top": 919.2708333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
      "in_process_rnd": {
        "blocks": [
          {
            "x": 2272.41943359375,
            "top": 1044.2708333333333,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "In-process R&D",
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
            "x": 2272.41943359375,
            "top": 1158.8541666666665,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
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
      },
      "other_opex": {
        "blocks": [
          {
            "x": 2272.41943359375,
            "top": 1265.625,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "Other",
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
  "nodes": [
    {
      "id": "consumer_health",
      "label": "Consumer Health",
      "value": 3.7,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+1% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$3.7B"
    },
    {
      "id": "pharmaceutical",
      "label": "Pharmaceutical",
      "value": 13.1,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "(7%) Y/Y"
      ],
      "color": "#666666",
      "valueText": "$13.1B"
    },
    {
      "id": "medtech",
      "label": "MedTech",
      "value": 6.8,
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "(1%) Y/Y"
      ],
      "color": "#666666",
      "valueText": "$6.8B"
    },
    {
      "id": "revenue",
      "label": "Sales",
      "value": 23.7,
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "(4%) Y/Y"
      ],
      "color": "#666666",
      "valueText": "$23.7B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 15.9,
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "67% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$15.9B"
    },
    {
      "id": "cost_of_products_sold",
      "label": "Cost of products sold",
      "value": 7.8,
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($7.8B)"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 4.2,
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$4.2B"
    },
    {
      "id": "net_profit",
      "label": "Net profit",
      "value": 3.5,
      "type": "profit",
      "col": 4,
      "order": 7,
      "notes": [
        "15% margin",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$3.5B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.7,
      "type": "cost",
      "col": 4,
      "order": 8,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($0.7B)"
    },
    {
      "id": "sga",
      "label": "Sales, marketing & administrative",
      "value": 6.5,
      "type": "cost",
      "col": 3,
      "order": 9,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($6.5B)"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 3.8,
      "type": "cost",
      "col": 3,
      "order": 10,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($3.8B)"
    },
    {
      "id": "in_process_rnd",
      "label": "In-process R&D",
      "value": 0.2,
      "type": "cost",
      "col": 3,
      "order": 11,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($0.2B)"
    },
    {
      "id": "restructuring",
      "label": "Restructuring",
      "value": 0.1,
      "type": "cost",
      "col": 3,
      "order": 12,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($0.1B)"
    },
    {
      "id": "other_opex",
      "label": "Other",
      "value": 1.1,
      "type": "cost",
      "col": 3,
      "order": 13,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($1.1B)"
    }
  ],
  "links": [
    {
      "source": "consumer_health",
      "target": "revenue",
      "value": 3.7,
      "sourceWidth": 76.82291666666666,
      "targetWidth": 76.82291666666666,
      "y0": 466.796875,
      "y1": 693.359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#b2b2b2"
    },
    {
      "source": "pharmaceutical",
      "target": "revenue",
      "value": 13.1,
      "sourceWidth": 264.32291666666663,
      "targetWidth": 264.32291666666663,
      "y0": 828.7760416666666,
      "y1": 863.9322916666666,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#b2b2b2"
    },
    {
      "source": "medtech",
      "target": "revenue",
      "value": 6.8,
      "sourceWidth": 136.71875,
      "targetWidth": 136.71875,
      "y0": 1233.7239583333333,
      "y1": 1064.453125,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#b2b2b2"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 15.9,
      "sourceWidth": 321.6145833333333,
      "targetWidth": 321.6145833333333,
      "y0": 815.7552083333333,
      "y1": 744.140625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cc98"
    },
    {
      "source": "revenue",
      "target": "cost_of_products_sold",
      "value": 7.8,
      "sourceWidth": 156.25,
      "targetWidth": 156.25,
      "y0": 1054.6875,
      "y1": 1128.90625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "pretax_income",
      "value": 4.2,
      "sourceWidth": 84.63541666666666,
      "targetWidth": 84.63541666666666,
      "y0": 625.6510416666666,
      "y1": 560.546875,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cc98"
    },
    {
      "source": "gross_profit",
      "target": "sga",
      "value": 6.5,
      "sourceWidth": 131.51041666666666,
      "targetWidth": 131.51041666666666,
      "y0": 733.7239583333333,
      "y1": 783.203125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "rnd",
      "value": 3.8,
      "sourceWidth": 76.82291666666666,
      "targetWidth": 76.82291666666666,
      "y0": 837.890625,
      "y1": 957.6822916666666,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "in_process_rnd",
      "value": 0.2,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 2.6041666666666665,
      "y0": 877.6041666666666,
      "y1": 1088.5416666666665,
      "sourceOrder": 3,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "restructuring",
      "value": 0.1,
      "sourceWidth": 1.953125,
      "targetWidth": 1.953125,
      "y0": 879.8828125,
      "y1": 1191.0807291666665,
      "sourceOrder": 4,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "other_opex",
      "value": 1.1,
      "sourceWidth": 24.088541666666664,
      "targetWidth": 22.135416666666664,
      "y0": 892.9036458333333,
      "y1": 1293.6197916666665,
      "sourceOrder": 5,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "pretax_income",
      "target": "net_profit",
      "value": 3.5,
      "sourceWidth": 70.3125,
      "targetWidth": 70.3125,
      "y0": 553.3854166666666,
      "y1": 519.53125,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#98cc98"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.7,
      "sourceWidth": 14.322916666666666,
      "targetWidth": 13.020833333333332,
      "y0": 595.703125,
      "y1": 653.6458333333333,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-company-logo.png",
      "x": 846.4599609375,
      "y": 244.79166666666666,
      "width": 266.96044921875,
      "height": 247.39583333333331
    },
    {
      "key": "medicine-icon",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-medicine-icon.png",
      "x": 156.26953125,
      "y": 777.34375,
      "width": 162.78076171875,
      "height": 184.89583333333331
    },
    {
      "key": "medtech-wordmark",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-medtech-wordmark.png",
      "x": 75.5302734375,
      "y": 1148.4375,
      "width": 332.07275390625,
      "height": 126.30208333333333
    },
    {
      "key": "consumer-brands",
      "href": "data/assets/raster-annotations/j-j/q4-fy22-consumer-brands.png",
      "x": 32.55615234375,
      "y": 453.125,
      "width": 416.71875,
      "height": 126.30208333333333
    }
  ],
  "annotationsSvg": "<text x=\"169\" y=\"1437.5\" font-size=\"39\" font-weight=\"700\" fill=\"#000000\">Source: Quarterly results</text>",
  "i18n": {
    "zh": {
      "name": "强生 · 2022 财年第四季度",
      "meta": {
        "title": "强生 2022 财年第四季度利润表",
        "period": "2022 财年第四季度"
      },
      "nodes": {
        "consumer_health": {
          "label": "消费者健康",
          "notes": [
            "同比 +1%"
          ]
        },
        "pharmaceutical": {
          "label": "制药",
          "notes": [
            "同比 (7%)"
          ]
        },
        "medtech": {
          "label": "医疗科技",
          "notes": [
            "同比 (1%)"
          ]
        },
        "revenue": {
          "label": "销售额",
          "notes": [
            "同比 (4%)"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 67%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_products_sold": {
          "label": "产品销售成本",
          "notes": []
        },
        "pretax_income": {
          "label": "税前利润",
          "notes": [
            "利润率 %",
            "同比 (1 个百分点)"
          ]
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 15%",
            "同比 (4 个百分点)"
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
        "in_process_rnd": {
          "label": "在研研发",
          "notes": []
        },
        "restructuring": {
          "label": "重组费用",
          "notes": []
        },
        "other_opex": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "consumer_health": {
            "blocks": [
              {
                "x": 505.271484375,
                "top": 330.72916666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +1%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 239.61328125,
                "top": 403.6458333333333,
                "anchor": "middle",
                "lineGap": 6.510416666666666,
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
                "x": 505.271484375,
                "top": 598.9583333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (7%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 239.61328125,
                "top": 735.6770833333333,
                "anchor": "middle",
                "lineGap": 6.510416666666666,
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
                "x": 505.271484375,
                "top": 1067.7083333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 977.98681640625,
                "top": 506.51041666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "销售额",
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
                    "text": "同比 (4%)",
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
                "x": 1435.0751953125,
                "top": 393.22916666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                    "text": "利润率 67%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 1435.0751953125,
                "top": 1222.65625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "产品销售",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
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
          "pretax_income": {
            "blocks": [
              {
                "x": 2052.33984375,
                "top": 330.72916666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                    "text": "利润率 %",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
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
                "x": 2530.26416015625,
                "top": 416.66666666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "净利润",
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
                    "text": "利润率 15%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34375,
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
                "x": 2530.26416015625,
                "top": 615.8854166666666,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
                "x": 2272.41943359375,
                "top": 727.8645833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "销售、市场及",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
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
          "rnd": {
            "blocks": [
              {
                "x": 2272.41943359375,
                "top": 919.2708333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
          "in_process_rnd": {
            "blocks": [
              {
                "x": 2272.41943359375,
                "top": 1044.2708333333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "在研研发",
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
                "x": 2272.41943359375,
                "top": 1158.8541666666665,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
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
          },
          "other_opex": {
            "blocks": [
              {
                "x": 2272.41943359375,
                "top": 1265.625,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "其他",
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
      "annotationsSvg": "<text x=\"169\" y=\"1437.5\" font-size=\"39\" font-weight=\"700\" fill=\"#000000\">来源：季度业绩</text>",
      "nonNodeMetrics": {
        "operating_expenses": {
          "label": "营业费用"
        }
      }
    }
  },
  "nonNodeMetrics": [
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 11.7,
      "type": "cost",
      "representation": "data-only",
      "reason": "Calculated total; the source shows individual expenses directly from gross profit and no aggregate expense face."
    }
  ]
});
