(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "stellantis-q3-fy26",
  "company": "Stellantis",
  "name": "Stellantis · Q3 FY26",
  "meta": {
    "company": "Stellantis",
    "title": "Stellantis Q3 FY26 Income Statement",
    "titleX": 1333.5,
    "titleY": 199.21875,
    "titleSize": 125.0,
    "titleWeight": 800,
    "hidePeriodStamp": true,
    "currency": "€",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/stellantis-q3-fy26.png",
      "width": 2667,
      "height": 1500
    }
  },
  "nodes": [
    {
      "id": "north_america",
      "label": "North America",
      "type": "source",
      "value": 15.6,
      "col": 0,
      "order": 0,
      "notes": [
        "(3%) Y/Y"
      ]
    },
    {
      "id": "enlarged_europe",
      "label": "Enlarged Europe",
      "type": "source",
      "value": 14.1,
      "col": 0,
      "order": 1,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "middle_east_africa",
      "label": "Middle East Africa",
      "type": "source",
      "value": 1.7,
      "col": 0,
      "order": 2,
      "notes": [
        "(19%) Y/Y"
      ]
    },
    {
      "id": "south_america",
      "label": "South America",
      "type": "source",
      "value": 4.1,
      "col": 0,
      "order": 3,
      "notes": [
        "+3% Y/Y"
      ]
    },
    {
      "id": "china_india_apac",
      "label": "China India APAC",
      "type": "source",
      "value": 0.4,
      "col": 0,
      "order": 4,
      "notes": [
        "(7%) Y/Y"
      ]
    },
    {
      "id": "other_revenue",
      "label": "Other",
      "type": "source",
      "value": 1.7,
      "col": 0,
      "order": 5,
      "notes": [
        "+79% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "type": "hub",
      "value": 37.6,
      "col": 2,
      "order": 6,
      "notes": [
        "+1% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "type": "profit",
      "value": 3.4,
      "col": 3,
      "order": 7,
      "notes": [
        "9% margin",
        "+12pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "label": "Cost of sales",
      "type": "cost",
      "value": 34.2,
      "col": 3,
      "order": 8
    },
    {
      "id": "operating_loss",
      "label": "Operating Loss",
      "type": "cost",
      "value": 0.3,
      "col": 4,
      "order": 9,
      "notes": [
        "(1%) margin",
        "+14pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Operating Expenses",
      "type": "cost",
      "value": 3.8,
      "col": 4,
      "order": 10
    },
    {
      "id": "sga",
      "label": "SG&A",
      "type": "cost",
      "value": 2.3,
      "col": 5,
      "order": 11
    },
    {
      "id": "rd",
      "label": "R&D",
      "type": "cost",
      "value": 1.3,
      "col": 5,
      "order": 12
    },
    {
      "id": "other",
      "label": "Other",
      "type": "cost",
      "value": 0.1,
      "col": 5,
      "order": 13
    },
    {
      "id": "segment_hub",
      "label": "",
      "value": 37.6,
      "type": "hub",
      "col": 1,
      "order": 0
    }
  ],
  "links": [
    {
      "source": "north_america",
      "target": "segment_hub",
      "value": 15.6,
      "y0": 486.97916666666663,
      "y1": 630.2083333333333,
      "sourceWidth": 138.02083333333331,
      "targetWidth": 138.02083333333331,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "enlarged_europe",
      "target": "segment_hub",
      "value": 14.1,
      "y0": 734.375,
      "y1": 761.71875,
      "sourceWidth": 125.0,
      "targetWidth": 125.0,
      "sourceOrder": 1,
      "targetOrder": 1
    },
    {
      "source": "middle_east_africa",
      "target": "segment_hub",
      "value": 1.7,
      "y0": 914.0625,
      "y1": 832.03125,
      "sourceWidth": 15.625,
      "targetWidth": 15.625,
      "sourceOrder": 2,
      "targetOrder": 2
    },
    {
      "source": "south_america",
      "target": "segment_hub",
      "value": 4.1,
      "y0": 1035.15625,
      "y1": 858.0729166666666,
      "sourceWidth": 36.45833333333333,
      "targetWidth": 36.45833333333333,
      "sourceOrder": 3,
      "targetOrder": 3
    },
    {
      "source": "china_india_apac",
      "target": "segment_hub",
      "value": 0.4,
      "y0": 1166.015625,
      "y1": 878.2552083333333,
      "sourceWidth": 3.90625,
      "targetWidth": 3.90625,
      "sourceOrder": 4,
      "targetOrder": 4
    },
    {
      "source": "other_revenue",
      "target": "segment_hub",
      "value": 1.7,
      "y0": 1281.9010416666665,
      "y1": 887.3697916666666,
      "sourceWidth": 14.322916666666666,
      "targetWidth": 14.322916666666666,
      "sourceOrder": 5,
      "targetOrder": 5
    },
    {
      "source": "segment_hub",
      "target": "revenue",
      "value": 37.6,
      "y0": 727.8645833333333,
      "y1": 819.0104166666666,
      "sourceWidth": 333.3333333333333,
      "targetWidth": 333.3333333333333,
      "sourceOrder": 6,
      "targetOrder": 6
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 3.4,
      "y0": 667.96875,
      "y1": 586.5885416666666,
      "sourceWidth": 31.25,
      "targetWidth": 29.947916666666664,
      "sourceOrder": 7,
      "targetOrder": 7,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 34.2,
      "y0": 834.6354166666666,
      "y1": 963.5416666666666,
      "sourceWidth": 302.0833333333333,
      "targetWidth": 302.0833333333333,
      "sourceOrder": 8,
      "targetOrder": 8
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 3.4,
      "y0": 586.5885416666666,
      "y1": 658.8541666666666,
      "sourceWidth": 29.947916666666664,
      "targetWidth": 28.645833333333332,
      "sourceOrder": 9,
      "targetOrder": 9
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 0.3,
      "y0": 748.6979166666666,
      "y1": 675.1302083333333,
      "sourceWidth": 2.6041666666666665,
      "targetWidth": 3.90625,
      "sourceOrder": 10,
      "targetOrder": 10
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.3,
      "y0": 654.9479166666666,
      "y1": 480.46875,
      "sourceWidth": 20.833333333333332,
      "targetWidth": 20.833333333333332,
      "sourceOrder": 11,
      "targetOrder": 11
    },
    {
      "source": "operating_expenses",
      "target": "rd",
      "value": 1.3,
      "y0": 670.5729166666666,
      "y1": 795.5729166666666,
      "sourceWidth": 10.416666666666666,
      "targetWidth": 10.416666666666666,
      "sourceOrder": 12,
      "targetOrder": 12
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 0.1,
      "y0": 676.4322916666666,
      "y1": 1068.359375,
      "sourceWidth": 1.3020833333333333,
      "targetWidth": 1.3020833333333333,
      "sourceOrder": 13,
      "targetOrder": 13
    }
  ],
  "layout": {
    "nodes": {
      "north_america": {
        "x": 453.181640625,
        "y": 417.96875,
        "width": 72.92578125,
        "height": 138.02083333333331
      },
      "enlarged_europe": {
        "x": 453.181640625,
        "y": 671.875,
        "width": 72.92578125,
        "height": 125.0
      },
      "middle_east_africa": {
        "x": 453.181640625,
        "y": 906.25,
        "width": 72.92578125,
        "height": 15.625
      },
      "south_america": {
        "x": 453.181640625,
        "y": 1016.9270833333333,
        "width": 72.92578125,
        "height": 36.45833333333333
      },
      "china_india_apac": {
        "x": 453.181640625,
        "y": 1164.0625,
        "width": 72.92578125,
        "height": 3.90625
      },
      "other_revenue": {
        "x": 453.181640625,
        "y": 1274.7395833333333,
        "width": 72.92578125,
        "height": 14.322916666666666
      },
      "segment_hub": {
        "x": 826.92626953125,
        "y": 561.1979166666666,
        "width": 72.92578125,
        "height": 333.3333333333333
      },
      "revenue": {
        "x": 1199.36865234375,
        "y": 652.34375,
        "width": 72.92578125,
        "height": 333.3333333333333
      },
      "gross_profit": {
        "x": 1574.41552734375,
        "y": 571.6145833333333,
        "width": 72.92578125,
        "height": 29.947916666666664
      },
      "cost_of_sales": {
        "x": 1574.41552734375,
        "y": 812.5,
        "width": 72.92578125,
        "height": 302.0833333333333
      },
      "operating_expenses": {
        "x": 1948.16015625,
        "y": 644.53125,
        "width": 72.92578125,
        "height": 32.55208333333333
      },
      "operating_loss": {
        "x": 1781.47265625,
        "y": 747.3958333333333,
        "width": 72.92578125,
        "height": 2.6041666666666665
      },
      "sga": {
        "x": 2319.30029296875,
        "y": 470.0520833333333,
        "width": 72.92578125,
        "height": 20.833333333333332
      },
      "rd": {
        "x": 2320.6025390625,
        "y": 790.3645833333333,
        "width": 72.92578125,
        "height": 10.416666666666666
      },
      "other": {
        "x": 2320.6025390625,
        "y": 1067.7083333333333,
        "width": 72.92578125,
        "height": 1.3020833333333333
      }
    },
    "labels": {
      "segment_hub": {
        "blocks": []
      },
      "north_america": {
        "blocks": [
          {
            "x": 489.64453125,
            "top": 321.6145833333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "(3%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 439.61875,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "North",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "America",
                "size": 37.760416666666664,
                "weight": 800
              }
            ]
          }
        ]
      },
      "enlarged_europe": {
        "blocks": [
          {
            "x": 489.64453125,
            "top": 576.8229166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 683.59375,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Enlarged",
                "size": 37.760416666666664,
                "weight": 800
              },
              {
                "text": "Europe",
                "size": 37.760416666666664,
                "weight": 800
              }
            ]
          }
        ]
      },
      "middle_east_africa": {
        "blocks": [
          {
            "x": 489.64453125,
            "top": 811.1979166666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "(19%) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 889.3229166666666,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Middle East Africa",
                "size": 37.760416666666664,
                "weight": 800
              }
            ]
          }
        ]
      },
      "south_america": {
        "blocks": [
          {
            "x": 489.64453125,
            "top": 924.4791666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+3% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 1011.8979166666667,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "South America",
                "size": 37.760416666666664,
                "weight": 800
              }
            ]
          }
        ]
      },
      "china_india_apac": {
        "blocks": [
          {
            "x": 489.64453125,
            "top": 1067.7083333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
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
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 1142.7208333333333,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "China India APAC",
                "size": 37.760416666666664,
                "weight": 800
              }
            ]
          }
        ]
      },
      "other_revenue": {
        "blocks": [
          {
            "x": 489.64453125,
            "top": 1179.6875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "$value",
                "size": 37.760416666666664,
                "weight": 400
              },
              {
                "text": "+79% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 421.927734375,
            "top": 1258.6041666666665,
            "anchor": "end",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Other",
                "size": 37.760416666666664,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1235.83154296875,
            "top": 506.51041666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
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
                "text": "+1% Y/Y",
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
            "x": 1610.87841796875,
            "top": 385.41666666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
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
                "text": "9% margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+12pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1610.87841796875,
            "top": 1135.4166666666665,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1984.623046875,
            "top": 490.88541666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55208333333333,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 32.55208333333333,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55208333333333,
                "weight": 400
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1817.935546875,
            "top": 768.2291666666666,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 32.55208333333333,
                "weight": 800
              },
              {
                "text": "Loss",
                "size": 32.55208333333333,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 32.55208333333333,
                "weight": 400
              },
              {
                "text": "(1%) margin",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+14pp Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2485.98779296875,
            "top": 455.72916666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "rd": {
        "blocks": [
          {
            "x": 2485.98779296875,
            "top": 755.2083333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2485.98779296875,
            "top": 1028.6458333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Other",
                "size": 31.25,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400
              }
            ]
          }
        ]
      }
    },
    "scale": 8.865248226950355
  },
  "rasterAnnotations": [
    {
      "id": "company-logo",
      "src": "data/assets/raster-annotations/stellantis/company-logo.png",
      "x": 669.3544921875,
      "y": 260.41666666666663,
      "width": 739.67578125,
      "height": 169.27083333333331
    },
    {
      "id": "brands-north-america",
      "src": "data/assets/raster-annotations/stellantis/brands-north-america.png",
      "x": 28.6494140625,
      "y": 252.60416666666666,
      "width": 216.1728515625,
      "height": 273.4375
    },
    {
      "id": "brands-europe",
      "src": "data/assets/raster-annotations/stellantis/brands-europe.png",
      "x": 19.53369140625,
      "y": 546.875,
      "width": 216.1728515625,
      "height": 272.13541666666663
    }
  ],
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "allowRasterAnnotations": true,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155578",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "palette": {
      "source": {
        "node": "#283780",
        "label": "#283780"
      },
      "hub": {
        "node": "#283780",
        "label": "#283780"
      },
      "profit": {
        "node": "#2ca02c",
        "label": "#009655"
      },
      "cost": {
        "node": "#cc0000",
        "label": "#a51b00"
      }
    },
    "linkTint": {
      "source": "#969dbc",
      "hub": "#969dbc",
      "profit": "#99cd99",
      "cost": "#df8585"
    }
  },
  "i18n": {
    "zh": {
      "name": "Stellantis · 2026 财年第三季度",
      "meta": {
        "title": "Stellantis 2026 财年第三季度利润表",
        "titleSize": 117.1875
      },
      "nodes": {
        "north_america": {
          "label": "北美",
          "notes": [
            "同比 (3%)"
          ]
        },
        "enlarged_europe": {
          "label": "扩大欧洲",
          "notes": [
            "同比 +3%"
          ]
        },
        "middle_east_africa": {
          "label": "中东与非洲",
          "notes": [
            "同比 (19%)"
          ]
        },
        "south_america": {
          "label": "南美洲",
          "notes": [
            "同比 +3%"
          ]
        },
        "china_india_apac": {
          "label": "中国、印度及亚太",
          "notes": [
            "同比 (7%)"
          ]
        },
        "other_revenue": {
          "label": "其他",
          "notes": [
            "同比 +79%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +1%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 9%",
            "同比 +12 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本",
          "notes": []
        },
        "operating_loss": {
          "label": "经营亏损",
          "notes": [
            "利润率 (1%)",
            "同比 +14 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "经营费用",
          "notes": []
        },
        "sga": {
          "label": "销售及管理费用",
          "notes": []
        },
        "rd": {
          "label": "研发费用",
          "notes": []
        },
        "other": {
          "label": "其他",
          "notes": []
        },
        "segment_hub": {
          "label": "",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "segment_hub": {
            "blocks": []
          },
          "north_america": {
            "blocks": [
              {
                "x": 489.64453125,
                "top": 321.6145833333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 (3%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 439.61875,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "北美",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "地区",
                    "size": 37.760416666666664,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "enlarged_europe": {
            "blocks": [
              {
                "x": 489.64453125,
                "top": 576.8229166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 683.59375,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "扩大欧洲",
                    "size": 37.760416666666664,
                    "weight": 800
                  },
                  {
                    "text": "地区",
                    "size": 37.760416666666664,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "middle_east_africa": {
            "blocks": [
              {
                "x": 489.64453125,
                "top": 811.1979166666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 (19%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 889.3229166666666,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "中东与非洲",
                    "size": 37.760416666666664,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "south_america": {
            "blocks": [
              {
                "x": 489.64453125,
                "top": 924.4791666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +3%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 1011.8979166666667,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "南美洲",
                    "size": 37.760416666666664,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "china_india_apac": {
            "blocks": [
              {
                "x": 489.64453125,
                "top": 1067.7083333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
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
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 1142.7208333333333,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "中国、印度及亚太",
                    "size": 37.760416666666664,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "other_revenue": {
            "blocks": [
              {
                "x": 489.64453125,
                "top": 1179.6875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "$value",
                    "size": 37.760416666666664,
                    "weight": 400
                  },
                  {
                    "text": "同比 +79%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 421.927734375,
                "top": 1258.6041666666665,
                "anchor": "end",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "其他",
                    "size": 37.760416666666664,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1235.83154296875,
                "top": 506.51041666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
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
                    "text": "同比 +1%",
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
                "x": 1610.87841796875,
                "top": 385.41666666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
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
                    "text": "利润率 9%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +12 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1610.87841796875,
                "top": 1135.4166666666665,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1984.623046875,
                "top": 490.88541666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "经营",
                    "size": 32.55208333333333,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 32.55208333333333,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55208333333333,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1817.935546875,
                "top": 768.2291666666666,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "经营",
                    "size": 32.55208333333333,
                    "weight": 800
                  },
                  {
                    "text": "亏损",
                    "size": 32.55208333333333,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 32.55208333333333,
                    "weight": 400
                  },
                  {
                    "text": "利润率 (1%)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +14 个百分点",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2485.98779296875,
                "top": 434.72916666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售及",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "管理费用",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "rd": {
            "blocks": [
              {
                "x": 2485.98779296875,
                "top": 755.2083333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发费用",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2485.98779296875,
                "top": 1028.6458333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400
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
