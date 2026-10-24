window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "j-j-q3-fy25",
  "name": "J&J · Q3 FY25",
  "company": "Johnson & Johnson",
  "meta": {
    "company": "Johnson & Johnson",
    "title": "J&J Q3 FY25 Income Statement",
    "period": "Q3 FY25",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/j-j-q3-fy25.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 199.244,
    "titleSize": 127.62,
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
  "rasterAnnotations": [
    {
      "key": "company-logo",
      "href": "data/assets/raster-annotations/j-j/company-wordmark.png",
      "x": 742.28,
      "y": 306.028,
      "width": 429.741,
      "height": 208.359
    },
    {
      "key": "medicine-icon",
      "href": "data/assets/raster-annotations/j-j/innovative-medicine-icon.png",
      "x": 208.359,
      "y": 526.107,
      "width": 136.736,
      "height": 130.225
    },
    {
      "key": "medtech-icon",
      "href": "data/assets/raster-annotations/j-j/medtech-icon.png",
      "x": 208.359,
      "y": 907.666,
      "width": 136.736,
      "height": 188.826
    }
  ],
  "layout": {
    "nodes": {
      "innovative_medicine": {
        "x": 457.088,
        "y": 578.197,
        "width": 72.926,
        "height": 239.613
      },
      "medtech": {
        "x": 457.088,
        "y": 1088.678,
        "width": 72.926,
        "height": 128.922
      },
      "revenue": {
        "x": 925.897,
        "y": 708.422,
        "width": 71.624,
        "height": 368.536
      },
      "gross_profit": {
        "x": 1392.101,
        "y": 578.197,
        "width": 72.926,
        "height": 253.938
      },
      "cost_of_products_sold": {
        "x": 1392.101,
        "y": 1109.514,
        "width": 72.926,
        "height": 111.993
      },
      "pretax_income": {
        "x": 1859.607,
        "y": 467.506,
        "width": 72.926,
        "height": 114.598
      },
      "operating_expenses": {
        "x": 1857.003,
        "y": 834.74,
        "width": 72.926,
        "height": 147.154
      },
      "other_income": {
        "x": 1603.065,
        "y": 988.405,
        "width": 72.926,
        "height": 6.511
      },
      "net_profit": {
        "x": 2327.114,
        "y": 341.188,
        "width": 71.624,
        "height": 78.135
      },
      "tax": {
        "x": 2327.114,
        "y": 653.728,
        "width": 71.624,
        "height": 36.463
      },
      "sga": {
        "x": 2327.114,
        "y": 923.292,
        "width": 71.624,
        "height": 89.855
      },
      "rnd": {
        "x": 2327.114,
        "y": 1122.536,
        "width": 71.624,
        "height": 55.997
      },
      "other_opex": {
        "x": 2327.114,
        "y": 1297.037,
        "width": 71.624,
        "height": 2.604
      }
    },
    "labels": {
      "innovative_medicine": {
        "blocks": [
          {
            "x": 493.551,
            "top": 473.842,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 35.161,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+7% Y/Y",
                "size": 35.161,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 273.472,
            "top": 620.059,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Innovative",
                "size": 67.717,
                "weight": 700,
                "color": "#eb1700"
              },
              {
                "text": "Medicine",
                "size": 67.717,
                "weight": 400,
                "color": "#eb1700"
              }
            ]
          }
        ]
      },
      "medtech": {
        "blocks": [
          {
            "x": 493.551,
            "top": 982.823,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "$value",
                "size": 35.161,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+7% Y/Y",
                "size": 35.161,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 273.472,
            "top": 1111.352,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "MedTech",
                "size": 67.717,
                "weight": 700,
                "color": "#eb1700"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 962.36,
            "top": 547.175,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Sales",
                "size": 39.067,
                "weight": 700,
                "color": "#666666"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+7% Y/Y",
                "size": 39.067,
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
            "x": 1428.564,
            "top": 378.285,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "70% margin",
                "size": 39.067,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+1pp Y/Y",
                "size": 39.067,
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
            "x": 1428.564,
            "top": 1242.343,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Cost of",
                "size": 35.161,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "products sold",
                "size": 35.161,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 35.161,
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
            "x": 1896.07,
            "top": 267.294,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39.067,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "31% margin",
                "size": 39.067,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+16pp Y/Y",
                "size": 39.067,
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
            "x": 1896.07,
            "top": 1005.334,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Expenses",
                "size": 35.161,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 35.161,
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
            "x": 1639.528,
            "top": 1011.845,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "income",
                "size": 31.254,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31.254,
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
            "x": 2526.357,
            "top": 332.073,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Net income",
                "size": 39.067,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "21% margin",
                "size": 39.067,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "+9pp Y/Y",
                "size": 39.067,
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
            "x": 2526.357,
            "top": 638.101,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Tax",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
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
            "x": 2526.357,
            "top": 898.55,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Sales,",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "marketing &",
                "size": 31.254,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "administrative",
                "size": 31.254,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "$value",
                "size": 31.254,
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
            "x": 2526.357,
            "top": 1118.629,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "R&D",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
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
            "x": 2526.357,
            "top": 1264.481,
            "anchor": "middle",
            "lineGap": 7.813,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.254,
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
      "id": "innovative_medicine",
      "label": "Innovative Medicine",
      "value": 15.6,
      "valueText": "$15.6B",
      "type": "source",
      "col": 0,
      "order": 0,
      "color": "#666666",
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "medtech",
      "label": "MedTech",
      "value": 8.4,
      "valueText": "$8.4B",
      "type": "source",
      "col": 0,
      "order": 1,
      "color": "#666666",
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "revenue",
      "label": "Sales",
      "value": 24.0,
      "valueText": "$24.0B",
      "type": "hub",
      "col": 1,
      "order": 2,
      "color": "#666666",
      "notes": [
        "+7% Y/Y"
      ]
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 16.7,
      "valueText": "$16.7B",
      "type": "profit",
      "col": 2,
      "order": 3,
      "color": "#2ca02c",
      "notes": [
        "70% margin",
        "+1pp Y/Y"
      ]
    },
    {
      "id": "cost_of_products_sold",
      "label": "Cost of products sold",
      "value": 7.3,
      "valueText": "($7.3B)",
      "type": "cost",
      "col": 2,
      "order": 4,
      "color": "#cc0000",
      "notes": []
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 7.5,
      "valueText": "$7.5B",
      "type": "profit",
      "col": 3,
      "order": 5,
      "color": "#2ca02c",
      "notes": [
        "31% margin",
        "+16pp Y/Y"
      ]
    },
    {
      "id": "operating_expenses",
      "label": "Expenses",
      "value": 9.7,
      "valueText": "($9.2B)",
      "type": "cost",
      "col": 3,
      "order": 6,
      "color": "#cc0000",
      "notes": []
    },
    {
      "id": "other_income",
      "label": "Other income",
      "value": 0.5,
      "valueText": "$0.5B",
      "type": "profit",
      "col": 3,
      "order": 7,
      "color": "#2ca02c",
      "notes": []
    },
    {
      "id": "net_profit",
      "label": "Net income",
      "value": 5.2,
      "valueText": "$5.2B",
      "type": "profit",
      "col": 4,
      "order": 8,
      "color": "#2ca02c",
      "notes": [
        "21% margin",
        "+9pp Y/Y"
      ]
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 2.3,
      "valueText": "($2.3B)",
      "type": "cost",
      "col": 4,
      "order": 9,
      "color": "#cc0000",
      "notes": []
    },
    {
      "id": "sga",
      "label": "Sales, marketing & administrative",
      "value": 5.9,
      "valueText": "($5.9B)",
      "type": "cost",
      "col": 4,
      "order": 10,
      "color": "#cc0000",
      "notes": []
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 3.7,
      "valueText": "($3.7B)",
      "type": "cost",
      "col": 4,
      "order": 11,
      "color": "#cc0000",
      "notes": []
    },
    {
      "id": "other_opex",
      "label": "Other",
      "value": 0.1,
      "valueText": "($0.1B)",
      "type": "cost",
      "col": 4,
      "order": 12,
      "color": "#c3a3b9",
      "notes": []
    }
  ],
  "links": [
    {
      "source": "innovative_medicine",
      "target": "revenue",
      "value": 15.6,
      "sourceWidth": 239.613,
      "targetWidth": 239.613,
      "y0": 698.004,
      "y1": 828.229,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "medtech",
      "target": "revenue",
      "value": 8.4,
      "sourceWidth": 128.922,
      "targetWidth": 128.922,
      "y0": 1153.139,
      "y1": 1012.496,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 16.7,
      "sourceWidth": 256.542,
      "targetWidth": 253.938,
      "y0": 836.693,
      "y1": 705.166,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_products_sold",
      "value": 7.3,
      "sourceWidth": 111.993,
      "targetWidth": 111.993,
      "y0": 1020.961,
      "y1": 1165.51,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "pretax_income",
      "value": 7.5,
      "sourceWidth": 114.598,
      "targetWidth": 114.598,
      "y0": 635.496,
      "y1": 524.805,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 9.2,
      "sourceWidth": 140.643,
      "targetWidth": 140.643,
      "y0": 761.814,
      "y1": 905.061,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "other_income",
      "target": "operating_expenses",
      "value": 0.5,
      "sourceWidth": 6.511,
      "targetWidth": 6.511,
      "y0": 991.66,
      "y1": 978.638,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "pretax_income",
      "target": "net_profit",
      "value": 5.2,
      "sourceWidth": 79.437,
      "targetWidth": 78.135,
      "y0": 507.225,
      "y1": 380.256,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 2.3,
      "sourceWidth": 35.161,
      "targetWidth": 36.463,
      "y0": 564.524,
      "y1": 671.959,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 5.9,
      "sourceWidth": 89.855,
      "targetWidth": 89.855,
      "y0": 879.667,
      "y1": 968.22,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.7,
      "sourceWidth": 55.997,
      "targetWidth": 55.997,
      "y0": 952.593,
      "y1": 1150.534,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.1,
      "sourceWidth": 1.302,
      "targetWidth": 2.604,
      "y0": 981.242,
      "y1": 1298.339,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "强生 · 2025 财年第三季度",
      "meta": {
        "title": "强生 2025 财年第三季度利润表",
        "period": "2025 财年第三季度",
        "titleSize": 114.598
      },
      "nodes": {
        "innovative_medicine": {
          "label": "创新制药",
          "notes": [
            "同比 +7%"
          ]
        },
        "medtech": {
          "label": "医疗科技",
          "notes": [
            "同比 +7%"
          ]
        },
        "revenue": {
          "label": "销售额",
          "notes": [
            "同比 +7%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 70%",
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
            "利润率 31%",
            "同比 +16 个百分点"
          ]
        },
        "operating_expenses": {
          "label": "费用",
          "notes": []
        },
        "other_income": {
          "label": "其他收入",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 21%",
            "同比 +9 个百分点"
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
        "other_opex": {
          "label": "其他",
          "notes": []
        }
      },
      "layout": {
        "labels": {
          "innovative_medicine": {
            "blocks": [
              {
                "x": 493.551,
                "top": 473.842,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 35.161,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 35.161,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 273.472,
                "top": 666.459,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "创新制药",
                    "size": 52.09,
                    "weight": 700,
                    "color": "#eb1700"
                  }
                ]
              }
            ]
          },
          "medtech": {
            "blocks": [
              {
                "x": 493.551,
                "top": 982.823,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "$value",
                    "size": 35.161,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 35.161,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 273.472,
                "top": 1121.552,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "医疗科技",
                    "size": 52.09,
                    "weight": 700,
                    "color": "#eb1700"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 962.36,
                "top": 547.175,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "销售额",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#666666"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +7%",
                    "size": 39.067,
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
                "x": 1428.564,
                "top": 378.285,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 70%",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +1 个百分点",
                    "size": 39.067,
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
                "x": 1428.564,
                "top": 1242.343,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "产品销售",
                    "size": 35.161,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 35.161,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 35.161,
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
                "x": 1896.07,
                "top": 267.294,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39.067,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 31%",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +16 个百分点",
                    "size": 39.067,
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
                "x": 1896.07,
                "top": 1005.334,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "费用",
                    "size": 35.161,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 35.161,
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
                "x": 1639.528,
                "top": 1011.845,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "其他收入",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2415,
                "top": 332.073,
                "anchor": "start",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 21%",
                    "size": 27.35,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 +9 个百分点",
                    "size": 27.35,
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
                "x": 2526.357,
                "top": 638.101,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
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
                "x": 2526.357,
                "top": 898.55,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "销售、市场及",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
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
                "x": 2526.357,
                "top": 1118.629,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
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
                "x": 2526.357,
                "top": 1264.481,
                "anchor": "middle",
                "lineGap": 7.813,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.254,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
});
