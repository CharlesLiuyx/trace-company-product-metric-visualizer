(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "gm-q2-fy23",
  "name": "GM · Q2 FY23",
  "company": "GM",
  "meta": {
    "company": "GM",
    "title": "GM Q2 FY23 Income Statement",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processing/gm-q2-fy23.png",
      "width": 2667.0,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 197.94140625,
    "titleSize": 122.4111328125,
    "titleWeight": 800
  },
  "render": {
    "width": 2667.0,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "titleColor": "#155077",
    "noteColor": "#777777",
    "allowRasterAnnotations": true,
    "palette": {
      "source": {
        "node": "#09a7db",
        "label": "#09a7db"
      },
      "hub": {
        "node": "#09a7db",
        "label": "#09a7db"
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
      "source": "#89cfe8",
      "hub": "#89cfe8",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "interfaceAudit": {
      "mode": "error"
    }
  },
  "nodes": [
    {
      "id": "gm_north_america",
      "col": 0,
      "order": 0,
      "type": "source",
      "label": "GM North America",
      "value": 37.2,
      "valueText": "$37.2B",
      "notes": [
        "+29% Y/Y"
      ]
    },
    {
      "id": "gm_international",
      "col": 0,
      "order": 1,
      "type": "source",
      "label": "GM International",
      "value": 4.0,
      "valueText": "$4.0B",
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "corporate",
      "col": 0,
      "order": 2,
      "type": "source",
      "label": "Corporate",
      "value": 0.1,
      "valueText": "$0.1B",
      "notes": [
        "+68% Y/Y"
      ]
    },
    {
      "id": "auto",
      "col": 0,
      "order": 3,
      "type": "source",
      "label": "Auto",
      "value": 41.3,
      "valueText": "$41.3B",
      "notes": [
        "+26% Y/Y"
      ]
    },
    {
      "id": "cruise",
      "col": 0,
      "order": 4,
      "type": "source",
      "label": "Cruise",
      "value": 0.026,
      "valueText": "$26M",
      "notes": [
        "+4% Y/Y"
      ]
    },
    {
      "id": "gm_financial",
      "col": 0,
      "order": 5,
      "type": "source",
      "label": "GM Financial",
      "value": 3.4,
      "valueText": "$3.4B",
      "notes": [
        "+11% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "col": 0,
      "order": 6,
      "type": "hub",
      "label": "Revenue",
      "value": 44.7,
      "valueText": "$44.7B",
      "notes": [
        "+25% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "col": 0,
      "order": 7,
      "type": "profit",
      "label": "Gross profit",
      "value": 8.1,
      "valueText": "$8.1B",
      "notes": [
        "18% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "cost_of_sales",
      "col": 0,
      "order": 8,
      "type": "cost",
      "label": "Cost of sales",
      "value": 36.6,
      "valueText": "($36.6B)"
    },
    {
      "id": "operating_profit",
      "col": 0,
      "order": 9,
      "type": "profit",
      "label": "Operating profit",
      "value": 2.8,
      "valueText": "$2.8B",
      "notes": [
        "6% margin",
        "+0pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "col": 0,
      "order": 10,
      "type": "cost",
      "label": [
        "Operating",
        "Expenses",
        "$value"
      ],
      "value": 5.3,
      "valueText": "($5.3B)"
    },
    {
      "id": "other_income",
      "col": 0,
      "order": 11,
      "type": "profit",
      "label": "Other",
      "value": 0.2,
      "valueText": "$0.2B"
    },
    {
      "id": "net_profit",
      "col": 0,
      "order": 12,
      "type": "profit",
      "label": "Net profit",
      "value": 2.5,
      "valueText": "$2.5B",
      "notes": [
        "6% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "col": 0,
      "order": 13,
      "type": "cost",
      "label": "Tax",
      "value": 0.5,
      "valueText": "($0.5B)"
    },
    {
      "id": "sga",
      "col": 0,
      "order": 14,
      "type": "cost",
      "label": "SG&A",
      "value": 2.6,
      "valueText": "($2.6B)"
    },
    {
      "id": "other",
      "col": 0,
      "order": 15,
      "type": "cost",
      "label": "Other",
      "value": 2.8,
      "valueText": "($2.8B)"
    }
  ],
  "links": [
    {
      "source": "gm_north_america",
      "target": "auto",
      "value": 37.2,
      "sourceWidth": 355.51318359375,
      "targetWidth": 355.51318359375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gm_international",
      "target": "auto",
      "value": 4.0,
      "sourceWidth": 37.76513671875,
      "targetWidth": 37.76513671875,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "corporate",
      "target": "auto",
      "value": 0.1,
      "sourceWidth": 1.30224609375,
      "targetWidth": 0.130224609375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "auto",
      "target": "revenue",
      "value": 41.3,
      "sourceWidth": 393.2783203125,
      "targetWidth": 393.2783203125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "cruise",
      "target": "revenue",
      "value": 0.026,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 1
    },
    {
      "source": "gm_financial",
      "target": "revenue",
      "value": 3.4,
      "sourceWidth": 33.8583984375,
      "targetWidth": 33.8583984375,
      "sourceOrder": 0,
      "targetOrder": 2
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 8.1,
      "sourceWidth": 78.134765625,
      "targetWidth": 78.134765625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_sales",
      "value": 36.6,
      "sourceWidth": 350.30419921875,
      "targetWidth": 350.30419921875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_profit",
      "value": 2.8,
      "sourceWidth": 27.34716796875,
      "targetWidth": 27.34716796875,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 5.3,
      "sourceWidth": 50.78759765625,
      "targetWidth": 50.78759765625,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "net_profit",
      "value": 2.3,
      "sourceWidth": 22.13818359375,
      "targetWidth": 22.13818359375,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_profit",
      "target": "tax",
      "value": 0.5,
      "sourceWidth": 5.208984375,
      "targetWidth": 5.208984375,
      "sourceOrder": 1,
      "targetOrder": 0
    },
    {
      "source": "other_income",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 1.30224609375,
      "targetWidth": 1.30224609375,
      "sourceOrder": 0,
      "targetOrder": 1,
      "curve": {
        "c1x": 2280.23291015625,
        "c2x": 2278.9306640625
      }
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 2.6,
      "sourceWidth": 24.74267578125,
      "targetWidth": 24.74267578125,
      "sourceOrder": 0,
      "targetOrder": 0
    },
    {
      "source": "operating_expenses",
      "target": "other",
      "value": 2.8,
      "sourceWidth": 26.044921875,
      "targetWidth": 26.044921875,
      "sourceOrder": 1,
      "targetOrder": 0
    }
  ],
  "layout": {
    "nodes": {
      "gm_north_america": {
        "x": 445.3681640625,
        "y": 444.06591796875,
        "width": 72.92578125,
        "height": 355.51318359375
      },
      "gm_international": {
        "x": 445.3681640625,
        "y": 915.47900390625,
        "width": 72.92578125,
        "height": 37.76513671875
      },
      "corporate": {
        "x": 445.3681640625,
        "y": 1096.4912109375,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "auto": {
        "x": 819.11279296875,
        "y": 527.40966796875,
        "width": 72.92578125,
        "height": 393.2783203125
      },
      "cruise": {
        "x": 817.810546875,
        "y": 1149.88330078125,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "gm_financial": {
        "x": 817.810546875,
        "y": 1302.24609375,
        "width": 72.92578125,
        "height": 33.8583984375
      },
      "revenue": {
        "x": 1192.857421875,
        "y": 636.79833984375,
        "width": 72.92578125,
        "height": 428.43896484375
      },
      "gross_profit": {
        "x": 1562.6953125,
        "y": 539.1298828125,
        "width": 72.92578125,
        "height": 78.134765625
      },
      "cost_of_sales": {
        "x": 1566.60205078125,
        "y": 767.02294921875,
        "width": 72.92578125,
        "height": 350.30419921875
      },
      "operating_profit": {
        "x": 1933.83544921875,
        "y": 484.435546875,
        "width": 72.92578125,
        "height": 27.34716796875
      },
      "operating_expenses": {
        "x": 1933.83544921875,
        "y": 661.541015625,
        "width": 72.92578125,
        "height": 50.78759765625
      },
      "other_income": {
        "x": 2187.7734375,
        "y": 506.57373046875,
        "width": 72.92578125,
        "height": 1.30224609375
      },
      "net_profit": {
        "x": 2314.09130859375,
        "y": 433.64794921875,
        "width": 72.92578125,
        "height": 23.4404296875
      },
      "tax": {
        "x": 2314.09130859375,
        "y": 656.33203125,
        "width": 72.92578125,
        "height": 5.208984375
      },
      "sga": {
        "x": 2314.09130859375,
        "y": 925.89697265625,
        "width": 72.92578125,
        "height": 24.74267578125
      },
      "other": {
        "x": 2314.09130859375,
        "y": 1140.767578125,
        "width": 72.92578125,
        "height": 26.044921875
      }
    },
    "labels": {
      "gm_north_america": {
        "blocks": [
          {
            "x": 481.8310546875,
            "top": 351.6064453125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+29% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gm_international": {
        "blocks": [
          {
            "x": 481.8310546875,
            "top": 824.32177734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+4% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.4873046875,
            "top": 908.316650390625,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "GM International",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "corporate": {
        "blocks": [
          {
            "x": 481.8310546875,
            "top": 1002.7294921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+68% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 398.4873046875,
            "top": 1071.097412109375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Corporate",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "auto": {
        "blocks": [
          {
            "x": 850.36669921875,
            "top": 381.55810546875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Auto",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+26% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cruise": {
        "blocks": [
          {
            "x": 852.97119140625,
            "top": 1054.8193359375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+4% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 770.9296875,
            "top": 1124.489501953125,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cruise",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "gm_financial": {
        "blocks": [
          {
            "x": 854.2734375,
            "top": 1209.78662109375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+11% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 770.9296875,
            "top": 1293.13037109375,
            "anchor": "end",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "GM Financial",
                "size": 39.0673828125,
                "weight": 800
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 1229.3203125,
            "top": 490.94677734375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "+25% Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1597.85595703125,
            "top": 359.419921875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "18% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "cost_of_sales": {
        "blocks": [
          {
            "x": 1599.158203125,
            "top": 1136.86083984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Cost of sales",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625
              }
            ]
          }
        ]
      },
      "operating_profit": {
        "blocks": [
          {
            "x": 1970.29833984375,
            "top": 303.42333984375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "6% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "+0pp Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1970.29833984375,
            "top": 733.16455078125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Operating",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "Expenses",
                "size": 36.462890625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 36.462890625
              }
            ]
          }
        ]
      },
      "other_income": {
        "blocks": [
          {
            "x": 2224.236328125,
            "top": 523.5029296875,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2497.7080078125,
            "top": 397.18505859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Net profit",
                "size": 39.0673828125,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 39.0673828125
              },
              {
                "text": "6% margin",
                "size": 27.34716796875,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 27.34716796875,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2488.59228515625,
            "top": 622.4736328125,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2487.2900390625,
            "top": 897.24755859375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "SG&A",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625
              }
            ]
          }
        ]
      },
      "other": {
        "blocks": [
          {
            "x": 2488.59228515625,
            "top": 1116.02490234375,
            "anchor": "middle",
            "lineGap": 10.41796875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 800
              },
              {
                "text": "$value",
                "size": 31.25390625
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44.2763671875\" y=\"530.01416015625\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#09a7db\">GM North America</text></g>",
  "rasterAnnotations": [
    {
      "href": "data/assets/raster-annotations/gm/company-logo.png",
      "x": 1127.7451171875,
      "y": 246.12451171875,
      "width": 205.7548828125,
      "height": 204.45263671875
    },
    {
      "href": "data/assets/raster-annotations/gm/gm-north-america-brand-cluster.png",
      "x": 36.462890625,
      "y": 565.1748046875,
      "width": 362.0244140625,
      "height": 196.63916015625
    }
  ],
  "i18n": {
    "zh": {
      "name": "GM · 2023 财年第二季度",
      "meta": {
        "title": "GM 2023 财年第二季度利润表",
        "titleSize": 111.9931640625
      },
      "nodes": {
        "gm_north_america": {
          "label": "通用北美",
          "notes": [
            "同比 +29%"
          ]
        },
        "gm_international": {
          "label": "通用国际",
          "notes": [
            "同比 +4%"
          ]
        },
        "corporate": {
          "label": "公司及其他",
          "notes": [
            "同比 +68%"
          ]
        },
        "auto": {
          "label": "汽车业务",
          "notes": [
            "同比 +26%"
          ]
        },
        "cruise": {
          "label": "Cruise 自动驾驶",
          "notes": [
            "同比 +4%"
          ]
        },
        "gm_financial": {
          "label": "通用金融",
          "notes": [
            "同比 +11%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +25%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 18%",
            "同比 +0 个百分点"
          ]
        },
        "cost_of_sales": {
          "label": "销售成本"
        },
        "operating_profit": {
          "label": "营业利润",
          "notes": [
            "利润率 6%",
            "同比 +0 个百分点"
          ]
        },
        "operating_expenses": {
          "label": [
            "营业",
            "费用"
          ]
        },
        "other_income": {
          "label": "其他"
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 6%",
            "同比 +1 个百分点"
          ]
        },
        "tax": {
          "label": "税费"
        },
        "sga": {
          "label": "销售及管理（SG&A）"
        },
        "other": {
          "label": "其他"
        }
      },
      "layout": {
        "labels": {
          "gm_north_america": {
            "blocks": [
              {
                "x": 481.8310546875,
                "top": 351.6064453125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +29%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gm_international": {
            "blocks": [
              {
                "x": 481.8310546875,
                "top": 824.32177734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.4873046875,
                "top": 908.316650390625,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "通用国际",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "corporate": {
            "blocks": [
              {
                "x": 481.8310546875,
                "top": 1002.7294921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +68%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 398.4873046875,
                "top": 1071.097412109375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "公司及其他",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "auto": {
            "blocks": [
              {
                "x": 850.36669921875,
                "top": 381.55810546875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "汽车业务",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +26%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cruise": {
            "blocks": [
              {
                "x": 852.97119140625,
                "top": 1054.8193359375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 770.9296875,
                "top": 1129.289501953125,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "Cruise 自动驾驶",
                    "size": 35.16064453125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "gm_financial": {
            "blocks": [
              {
                "x": 854.2734375,
                "top": 1209.78662109375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +11%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 770.9296875,
                "top": 1293.13037109375,
                "anchor": "end",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "通用金融",
                    "size": 39.0673828125,
                    "weight": 800
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 1229.3203125,
                "top": 490.94677734375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "同比 +25%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1597.85595703125,
                "top": 359.419921875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "利润率 18%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "cost_of_sales": {
            "blocks": [
              {
                "x": 1599.158203125,
                "top": 1136.86083984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售成本",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625
                  }
                ]
              }
            ]
          },
          "operating_profit": {
            "blocks": [
              {
                "x": 1970.29833984375,
                "top": 303.42333984375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "利润率 6%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +0 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1970.29833984375,
                "top": 733.16455078125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "营业",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625
                  }
                ]
              }
            ]
          },
          "other_income": {
            "blocks": [
              {
                "x": 2224.236328125,
                "top": 523.5029296875,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2497.7080078125,
                "top": 397.18505859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125
                  },
                  {
                    "text": "利润率 6%",
                    "size": 27.34716796875,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 27.34716796875,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2488.59228515625,
                "top": 622.4736328125,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2487.2900390625,
                "top": 897.24755859375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "销售及管理（SG&A）",
                    "size": 18,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625
                  }
                ]
              }
            ]
          },
          "other": {
            "blocks": [
              {
                "x": 2488.59228515625,
                "top": 1116.02490234375,
                "anchor": "middle",
                "lineGap": 10.41796875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 800
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g class=\"sankey-interactive-annotation\" data-node=\"gm_north_america\"><text x=\"44.2763671875\" y=\"530.01416015625\" font-size=\"39.0673828125\" font-weight=\"800\" fill=\"#09a7db\">通用北美</text></g>"
    }
  }
});})();
