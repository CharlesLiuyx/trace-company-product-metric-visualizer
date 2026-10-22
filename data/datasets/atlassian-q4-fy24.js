(function(){window.DATASETS=window.DATASETS||[];window.DATASETS.push({
  "key": "atlassian-q4-fy24",
  "name": "Atlassian · Q4 FY24",
  "company": "Atlassian",
  "meta": {
    "company": "Atlassian",
    "title": "Atlassian Q4 FY24 Income Statement",
    "period": "Q4 FY24",
    "periodNote": "Ending Jun. 2024",
    "currency": "$",
    "unit": "M",
    "decimals": 0,
    "referenceImage": {
      "src": "input/processed/atlassian-q4-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 204.427,
    "titleSize": 127.604,
    "titleWeight": 1041.667,
    "titleTextLength": 2304.976,
    "periodX": 2452.129,
    "periodY": 274.74,
    "periodNoteY": 316.406,
    "logoX": 774.836,
    "logoY": 244.792,
    "logoWidth": 223.986,
    "logoHeight": 250.0,
    "logoViewBox": "20 0 233 240",
    "logoSvg": "<g><path fill=\"#2681ff\" d=\"M149 10c5-10 20-10 25 0l79 160c4 8-2 17-11 17h-74c-6 0-11-3-14-8l-43-88c-3-6-3-13 0-19z\"/><path fill=\"#0052cc\" d=\"M91 78c6-10 20-10 25 0l38 91c4 9-2 18-12 18H31c-10 0-16-11-11-19z\"/><text x=\"136\" y=\"230\" text-anchor=\"middle\" font-family=\"Arial,sans-serif\" font-size=\"31\" font-weight=\"800\" fill=\"#0052cc\">ATLASSIAN</text></g>"
  },
  "render": {
    "width": 2667,
    "height": 1500,
    "background": "#f2f2f2",
    "nodeRadius": 0,
    "interfaceAudit": {
      "mode": "error"
    },
    "titleColor": "#155277",
    "subtitleColor": "#666666",
    "noteColor": "#777777",
    "linkOpacity": 1,
    "type": {
      "name": 39.0625,
      "value": 39.0625,
      "note": 27.34375,
      "lineGap": 10.416666666666666
    }
  },
  "nodes": [
    {
      "id": "cloud",
      "label": "Cloud",
      "value": 738,
      "valueText": "$738M",
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+31% Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc"
    },
    {
      "id": "data_center",
      "label": "Data Center",
      "value": 327,
      "valueText": "$327M",
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+41% Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc"
    },
    {
      "id": "marketplace_services",
      "label": "Marketplace & Services",
      "value": 67,
      "valueText": "$67M",
      "type": "source",
      "col": 0,
      "order": 2,
      "notes": [
        "+16% Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 1132,
      "valueText": "$1,132M",
      "type": "hub",
      "col": 1,
      "order": 3,
      "notes": [
        "+20% Y/Y"
      ],
      "color": "#0052cc",
      "labelColor": "#0052cc"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 914,
      "valueText": "$914M",
      "type": "profit",
      "col": 2,
      "order": 4,
      "notes": [
        "81% margin",
        "(1pp) Y/Y"
      ],
      "color": "#26a126",
      "labelColor": "#009451"
    },
    {
      "id": "cost_of_revenue",
      "label": "Cost of revenue",
      "value": 218,
      "valueText": "($218M)",
      "type": "cost",
      "col": 2,
      "order": 5,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a01b06"
    },
    {
      "id": "operating_loss",
      "label": "Operating loss",
      "value": 67,
      "valueText": "($67M)",
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": [
        "(6%) margin",
        "(1pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a01b06"
    },
    {
      "id": "operating_expenses",
      "label": "Operating expenses",
      "value": 981,
      "valueText": "($981M)",
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [],
      "color": "#cc0000",
      "labelColor": "#a01b06"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 589,
      "valueText": "($589M)",
      "type": "cost",
      "col": 4,
      "order": 8,
      "notes": [
        "52% of revenue",
        "+1pp Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a01b06"
    },
    {
      "id": "sm",
      "label": "S&M",
      "value": 240,
      "valueText": "($240M)",
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": [
        "21% of revenue",
        "(0pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a01b06"
    },
    {
      "id": "ga",
      "label": "G&A",
      "value": 152,
      "valueText": "($152M)",
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": [
        "13% of revenue",
        "(2pp) Y/Y"
      ],
      "color": "#cc0000",
      "labelColor": "#a01b06"
    }
  ],
  "links": [
    {
      "source": "cloud",
      "target": "revenue",
      "value": 738,
      "y0": 637.37,
      "y1": 780.599,
      "width": 188.802,
      "sourceWidth": 188.802,
      "targetWidth": 188.802,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#85aae0"
    },
    {
      "source": "data_center",
      "target": "revenue",
      "value": 327,
      "y0": 924.479,
      "y1": 915.365,
      "width": 83.333,
      "sourceWidth": 83.333,
      "targetWidth": 83.333,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#85aae0"
    },
    {
      "source": "marketplace_services",
      "target": "revenue",
      "value": 67,
      "y0": 1121.745,
      "y1": 966.146,
      "width": 16.927,
      "sourceWidth": 16.927,
      "targetWidth": 18.229,
      "sourceOrder": 0,
      "targetOrder": 2,
      "linkTint": "#85aae0"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 914,
      "y0": 803.385,
      "y1": 660.156,
      "width": 234.375,
      "sourceWidth": 234.375,
      "targetWidth": 234.375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_revenue",
      "value": 218,
      "y0": 947.917,
      "y1": 1093.099,
      "width": 54.688,
      "sourceWidth": 54.688,
      "targetWidth": 55.99,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 914,
      "y0": 660.156,
      "y1": 802.083,
      "width": 234.375,
      "sourceWidth": 234.375,
      "targetWidth": 234.375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_loss",
      "target": "operating_expenses",
      "value": 67,
      "y0": 985.026,
      "y1": 927.083,
      "width": 16.927,
      "sourceWidth": 16.927,
      "targetWidth": 15.625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 589,
      "y0": 760.417,
      "y1": 572.917,
      "width": 151.042,
      "sourceWidth": 151.042,
      "targetWidth": 151.042,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sm",
      "value": 240,
      "y0": 866.536,
      "y1": 865.234,
      "width": 61.198,
      "sourceWidth": 61.198,
      "targetWidth": 61.198,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "ga",
      "value": 152,
      "y0": 916.016,
      "y1": 1106.771,
      "width": 37.76,
      "sourceWidth": 37.76,
      "targetWidth": 39.062,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "layout": {
    "scale": 0.2565104166666667,
    "nodes": {
      "cloud": {
        "x": 384.163,
        "y": 542.969,
        "width": 72.926,
        "height": 188.802
      },
      "data_center": {
        "x": 384.163,
        "y": 882.812,
        "width": 72.926,
        "height": 83.333
      },
      "marketplace_services": {
        "x": 384.163,
        "y": 1113.281,
        "width": 72.926,
        "height": 16.927
      },
      "revenue": {
        "x": 851.669,
        "y": 686.198,
        "width": 72.926,
        "height": 289.062
      },
      "gross_profit": {
        "x": 1315.269,
        "y": 542.969,
        "width": 72.926,
        "height": 234.375
      },
      "cost_of_revenue": {
        "x": 1323.082,
        "y": 1065.104,
        "width": 72.926,
        "height": 55.99
      },
      "operating_loss": {
        "x": 1596.554,
        "y": 976.562,
        "width": 72.926,
        "height": 16.927
      },
      "operating_expenses": {
        "x": 1787.984,
        "y": 684.896,
        "width": 72.926,
        "height": 250.0
      },
      "rnd": {
        "x": 2252.886,
        "y": 497.396,
        "width": 72.926,
        "height": 151.042
      },
      "sm": {
        "x": 2252.886,
        "y": 834.635,
        "width": 72.926,
        "height": 61.198
      },
      "ga": {
        "x": 2252.886,
        "y": 1087.24,
        "width": 72.926,
        "height": 39.062
      }
    },
    "labels": {
      "cloud": {
        "blocks": [
          {
            "x": 423.22998046875,
            "top": 447.91666666666663,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#0052cc"
              },
              {
                "text": "+31% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 220.07958984375,
            "top": 613.79375,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Cloud",
                "size": 39.0625,
                "weight": 700,
                "color": "#0052cc"
              }
            ]
          }
        ]
      },
      "data_center": {
        "blocks": [
          {
            "x": 423.22998046875,
            "top": 792.96875,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#0052cc"
              },
              {
                "text": "+41% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 220.07958984375,
            "top": 899.7395833333333,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Data Center",
                "size": 39.0625,
                "weight": 700,
                "color": "#0052cc"
              }
            ]
          }
        ]
      },
      "marketplace_services": {
        "blocks": [
          {
            "x": 423.22998046875,
            "top": 1015.6249999999999,
            "anchor": "middle",
            "lineGap": 9.114583333333332,
            "lines": [
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#0052cc"
              },
              {
                "text": "+16% Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 220.07958984375,
            "top": 1072.74375,
            "anchor": "middle",
            "lineGap": 11.71875,
            "lines": [
              {
                "text": "Marketplace",
                "size": 39.0625,
                "weight": 700,
                "color": "#0052cc"
              },
              {
                "text": "& Services",
                "size": 39.0625,
                "weight": 700,
                "color": "#0052cc"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 888.1318359375,
            "top": 535.15625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Revenue",
                "size": 39.0625,
                "weight": 700,
                "color": "#0052cc"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#0052cc"
              },
              {
                "text": "+20% Y/Y",
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
            "x": 1351.7314453125,
            "top": 358.07291666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0625,
                "weight": 700,
                "color": "#009451"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#009451"
              },
              {
                "text": "81% margin",
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
      "cost_of_revenue": {
        "blocks": [
          {
            "x": 1359.544921875,
            "top": 1136.71875,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Cost of",
                "size": 39.0625,
                "weight": 700,
                "color": "#a01b06"
              },
              {
                "text": "revenue",
                "size": 39.0625,
                "weight": 700,
                "color": "#a01b06"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#a01b06"
              }
            ]
          }
        ]
      },
      "operating_loss": {
        "blocks": [
          {
            "x": 1633.0166015625,
            "top": 1013.0208333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 700,
                "color": "#a01b06"
              },
              {
                "text": "loss",
                "size": 39.0625,
                "weight": 700,
                "color": "#a01b06"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#a01b06"
              },
              {
                "text": "(6%) margin",
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
      "operating_expenses": {
        "blocks": [
          {
            "x": 1824.44677734375,
            "top": 519.53125,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "Operating",
                "size": 39.0625,
                "weight": 700,
                "color": "#a01b06"
              },
              {
                "text": "expenses",
                "size": 39.0625,
                "weight": 700,
                "color": "#a01b06"
              },
              {
                "text": "$value",
                "size": 39.0625,
                "weight": 400,
                "color": "#a01b06"
              }
            ]
          }
        ]
      },
      "rnd": {
        "blocks": [
          {
            "x": 2448.22265625,
            "top": 510.41666666666663,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25,
                "weight": 700,
                "color": "#a01b06"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#a01b06"
              },
              {
                "text": "52% of revenue",
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
      "sm": {
        "blocks": [
          {
            "x": 2448.22265625,
            "top": 809.8958333333333,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "S&M",
                "size": 31.25,
                "weight": 700,
                "color": "#a01b06"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#a01b06"
              },
              {
                "text": "21% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 27.34375,
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
            "x": 2448.22265625,
            "top": 1066.40625,
            "anchor": "middle",
            "lineGap": 10.416666666666666,
            "lines": [
              {
                "text": "G&A",
                "size": 31.25,
                "weight": 700,
                "color": "#a01b06"
              },
              {
                "text": "$value",
                "size": 31.25,
                "weight": 400,
                "color": "#a01b06"
              },
              {
                "text": "13% of revenue",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(2pp) Y/Y",
                "size": 27.34375,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      }
    }
  },
  "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g><rect x=\"121\" y=\"942\" width=\"417\" height=\"125\" rx=\"32\" fill=\"#0052cc\"/><text x=\"329\" y=\"982\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">Customers &gt; $10K Cloud ARR</text><text data-operating-metric=\"cloud_customers\" x=\"329\" y=\"1014\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">46K</text><text x=\"329\" y=\"1046\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">+18% Y/Y</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"700\">Source: Quarterly results</text></g></g>",
  "operatingMetrics": [
    {
      "id": "cloud_customers",
      "value": "46000",
      "unit": "count",
      "currency": null,
      "comparison": "eq",
      "literal": "46K"
    }
  ],
  "i18n": {
    "zh": {
      "name": "Atlassian · 2024 财年第四季度",
      "meta": {
        "title": "Atlassian 2024 财年第四季度利润表",
        "period": "2024 财年第四季度",
        "periodNote": "截至 2024 年 6 月"
      },
      "nodes": {
        "cloud": {
          "label": "云",
          "notes": [
            "同比 +31%"
          ]
        },
        "data_center": {
          "label": "数据中心",
          "notes": [
            "同比 +41%"
          ]
        },
        "marketplace_services": {
          "label": "市场与服务",
          "notes": [
            "同比 +16%"
          ]
        },
        "revenue": {
          "label": "收入",
          "notes": [
            "同比 +20%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 81%",
            "同比 (1 个百分点)"
          ]
        },
        "cost_of_revenue": {
          "label": "收入成本",
          "notes": []
        },
        "operating_loss": {
          "label": "营业亏损",
          "notes": [
            "利润率 (6%)",
            "同比 (1 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "运营费用",
          "notes": []
        },
        "rnd": {
          "label": "研发",
          "notes": [
            "占收入 52%",
            "同比 +1 个百分点"
          ]
        },
        "sm": {
          "label": "销售与市场",
          "notes": [
            "占收入 21%",
            "同比 (0 个百分点)"
          ]
        },
        "ga": {
          "label": "管理费用",
          "notes": [
            "占收入 13%",
            "同比 (2 个百分点)"
          ]
        }
      },
      "layout": {
        "labels": {
          "cloud": {
            "blocks": [
              {
                "x": 423.22998046875,
                "top": 447.91666666666663,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#0052cc"
                  },
                  {
                    "text": "同比 +31%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 220.07958984375,
                "top": 615.3645833333334,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "云",
                    "size": 36.45833333333333,
                    "weight": 700,
                    "color": "#0052cc"
                  }
                ]
              }
            ]
          },
          "data_center": {
            "blocks": [
              {
                "x": 423.22998046875,
                "top": 792.96875,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#0052cc"
                  },
                  {
                    "text": "同比 +41%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 220.07958984375,
                "top": 899.7395833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "数据中心",
                    "size": 36.45833333333333,
                    "weight": 700,
                    "color": "#0052cc"
                  }
                ]
              }
            ]
          },
          "marketplace_services": {
            "blocks": [
              {
                "x": 423.22998046875,
                "top": 1015.6249999999999,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#0052cc"
                  },
                  {
                    "text": "同比 +16%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 220.07958984375,
                "top": 1099.7395833333333,
                "anchor": "middle",
                "lineGap": 9.114583333333332,
                "lines": [
                  {
                    "text": "市场与服务",
                    "size": 36.45833333333333,
                    "weight": 700,
                    "color": "#0052cc"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 888.1318359375,
                "top": 535.15625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#0052cc"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#0052cc"
                  },
                  {
                    "text": "同比 +20%",
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
                "x": 1351.7314453125,
                "top": 358.07291666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#009451"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#009451"
                  },
                  {
                    "text": "利润率 81%",
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
          "cost_of_revenue": {
            "blocks": [
              {
                "x": 1359.544921875,
                "top": 1136.71875,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "收入",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#a01b06"
                  },
                  {
                    "text": "成本",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#a01b06"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#a01b06"
                  }
                ]
              }
            ]
          },
          "operating_loss": {
            "blocks": [
              {
                "x": 1633.0166015625,
                "top": 1013.0208333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "营业亏损",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#a01b06"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#a01b06"
                  },
                  {
                    "text": "利润率 (6%)",
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
          "operating_expenses": {
            "blocks": [
              {
                "x": 1824.44677734375,
                "top": 519.53125,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "运营费用",
                    "size": 39.0625,
                    "weight": 700,
                    "color": "#a01b06"
                  },
                  {
                    "text": "$value",
                    "size": 39.0625,
                    "weight": 400,
                    "color": "#a01b06"
                  }
                ]
              }
            ]
          },
          "rnd": {
            "blocks": [
              {
                "x": 2448.22265625,
                "top": 510.41666666666663,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#a01b06"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#a01b06"
                  },
                  {
                    "text": "占收入 52%",
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
          "sm": {
            "blocks": [
              {
                "x": 2448.22265625,
                "top": 809.8958333333333,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "销售与市场",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#a01b06"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#a01b06"
                  },
                  {
                    "text": "占收入 21%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 27.34375,
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
                "x": 2448.22265625,
                "top": 1066.40625,
                "anchor": "middle",
                "lineGap": 10.416666666666666,
                "lines": [
                  {
                    "text": "管理费用",
                    "size": 31.25,
                    "weight": 700,
                    "color": "#a01b06"
                  },
                  {
                    "text": "$value",
                    "size": 31.25,
                    "weight": 400,
                    "color": "#a01b06"
                  },
                  {
                    "text": "占收入 13%",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (2 个百分点)",
                    "size": 27.34375,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          }
        }
      },
      "annotationsSvg": "<g transform=\"scale(1.30224609375 1.3020833333333333)\"><g><rect x=\"121\" y=\"942\" width=\"417\" height=\"125\" rx=\"32\" fill=\"#0052cc\"/><text x=\"329\" y=\"982\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"700\" fill=\"white\">云 ARR &gt; $10K 的客户数</text><text data-operating-metric=\"cloud_customers\" x=\"329\" y=\"1014\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">46K</text><text x=\"329\" y=\"1046\" text-anchor=\"middle\" font-size=\"24\" fill=\"white\">同比 +18%</text><text x=\"130\" y=\"1104\" font-size=\"30\" font-weight=\"700\">来源：季度业绩</text></g></g>"
    }
  }
});})();
