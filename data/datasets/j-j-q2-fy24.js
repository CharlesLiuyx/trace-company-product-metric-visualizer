window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "j-j-q2-fy24",
  "name": "J&J · Q2 FY24",
  "company": "Johnson & Johnson",
  "meta": {
    "company": "Johnson & Johnson",
    "title": "J&J Q2 FY24 Income Statement",
    "period": "Q2 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/j-j-q2-fy24.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1334,
    "titleY": 198,
    "titleSize": 124,
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
      "href": "data/assets/raster-annotations/j-j/q1-fy25-company-logo.png",
      "x": 839.94873046875,
      "y": 248.72900390625,
      "width": 253.93798828125,
      "height": 231.7998046875
    },
    {
      "key": "medicine-icon",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-medicine-icon.png",
      "x": 19.53369140625,
      "y": 579.49951171875,
      "width": 151.060546875,
      "height": 173.19873046875
    },
    {
      "key": "medtech-wordmark",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-medtech-wordmark.png",
      "x": 89.85498046875,
      "y": 1037.89013671875,
      "width": 325.5615234375,
      "height": 123.71337890625
    }
  ],
  "layout": {
    "nodes": {
      "innovative_medicine": {
        "x": 457.08837890625,
        "y": 549.5478515625,
        "width": 72.92578125,
        "height": 270.8671875
      },
      "medtech": {
        "x": 457.08837890625,
        "y": 1030.07666015625,
        "width": 72.92578125,
        "height": 148.4560546875
      },
      "revenue": {
        "x": 921.990234375,
        "y": 664.1455078125,
        "width": 72.92578125,
        "height": 419.3232421875
      },
      "gross_profit": {
        "x": 1392.10107421875,
        "y": 549.5478515625,
        "width": 72.92578125,
        "height": 291.703125
      },
      "cost_of_products_sold": {
        "x": 1386.89208984375,
        "y": 1054.8193359375,
        "width": 72.92578125,
        "height": 127.6201171875
      },
      "pretax_income": {
        "x": 1859.607421875,
        "y": 455.7861328125,
        "width": 71.62353515625,
        "height": 106.7841796875
      },
      "operating_expenses": {
        "x": 1859.607421875,
        "y": 754.00048828125,
        "width": 71.62353515625,
        "height": 183.61669921875
      },
      "net_profit": {
        "x": 2325.8115234375,
        "y": 365.93115234375,
        "width": 72.92578125,
        "height": 87.25048828125
      },
      "tax": {
        "x": 2325.8115234375,
        "y": 673.26123046875,
        "width": 72.92578125,
        "height": 19.53369140625
      },
      "sga": {
        "x": 2325.8115234375,
        "y": 841.2509765625,
        "width": 72.92578125,
        "height": 105.48193359375
      },
      "rnd": {
        "x": 2325.8115234375,
        "y": 1106.9091796875,
        "width": 72.92578125,
        "height": 66.41455078125
      },
      "other_opex": {
        "x": 2325.8115234375,
        "y": 1272.29443359375,
        "width": 72.92578125,
        "height": 9.11572265625
      }
    },
    "labels": {
      "innovative_medicine": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 455.7861328125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+6% Y/Y",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 312.5390625,
            "top": 639.40283203125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Innovative",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#666666"
              },
              {
                "text": "Medicine",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "medtech": {
        "blocks": [
          {
            "x": 497.4580078125,
            "top": 937.6171875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+2% Y/Y",
                "size": 27.34716796875,
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
            "x": 959.75537109375,
            "top": 518.2939453125,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Sales",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#666666"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+4% Y/Y",
                "size": 27.34716796875,
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
            "x": 1428.56396484375,
            "top": 364.62890625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f51"
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
                "color": "#777777"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 1897.37255859375,
            "top": 269.56494140625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "26% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 2525.05517578125,
            "top": 332.07275390625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Net income",
                "size": 39.0673828125,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.0673828125,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "21% margin",
                "size": 27.34716796875,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(4pp) Y/Y",
                "size": 27.34716796875,
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
            "x": 1897.37255859375,
            "top": 954.54638671875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Expenses",
                "size": 36.462890625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "cost_of_products_sold": {
        "blocks": [
          {
            "x": 1424.6572265625,
            "top": 1203.275390625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Cost of",
                "size": 36.462890625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "products sold",
                "size": 36.462890625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 36.462890625,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "tax": {
        "blocks": [
          {
            "x": 2525.05517578125,
            "top": 653.7275390625,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Tax",
                "size": 31.25390625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2525.05517578125,
            "top": 839.94873046875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Sales,",
                "size": 31.25390625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "marketing &",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "administrative",
                "size": 31.25390625,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2525.05517578125,
            "top": 1105.60693359375,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "R&D",
                "size": 31.25390625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
            "x": 2525.05517578125,
            "top": 1246.24951171875,
            "anchor": "middle",
            "lineGap": 6.51123046875,
            "lines": [
              {
                "text": "Other",
                "size": 31.25390625,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31.25390625,
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
      "value": 14.5,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$14.5B"
    },
    {
      "id": "medtech",
      "label": "MedTech",
      "value": 8,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+2% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$8.0B"
    },
    {
      "id": "revenue",
      "label": "Sales",
      "value": 22.4,
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+4% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$22.4B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 15.6,
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "69% margin",
        "(1pp) Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$15.6B"
    },
    {
      "id": "cost_of_products_sold",
      "label": "Cost of products sold",
      "value": 6.9,
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($6.9B)"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 5.7,
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "26% margin",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$5.7B"
    },
    {
      "id": "operating_expenses",
      "label": "Expenses",
      "value": 9.8,
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($9.8B)"
    },
    {
      "id": "net_profit",
      "label": "Net income",
      "value": 4.7,
      "type": "profit",
      "col": 4,
      "order": 8,
      "notes": [
        "21% margin",
        "(4pp) Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$4.7B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 1.1,
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($1.1B)"
    },
    {
      "id": "sga",
      "label": "Sales, marketing & administrative",
      "value": 5.7,
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($5.7B)"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 3.6,
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($3.6B)"
    },
    {
      "id": "other_opex",
      "label": "Other",
      "value": 0.5,
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($0.5B)"
    }
  ],
  "links": [
    {
      "source": "innovative_medicine",
      "target": "revenue",
      "value": 14.5,
      "sourceWidth": 270.8671875,
      "targetWidth": 270.8671875,
      "y0": 684.9814453125,
      "y1": 799.5791015625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#b2b2b2"
    },
    {
      "source": "medtech",
      "target": "revenue",
      "value": 8,
      "sourceWidth": 148.4560546875,
      "targetWidth": 148.4560546875,
      "y0": 1104.3046875,
      "y1": 1009.24072265625,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#b2b2b2"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 15.6,
      "sourceWidth": 291.703125,
      "targetWidth": 291.703125,
      "y0": 809.9970703125,
      "y1": 695.3994140625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "revenue",
      "target": "cost_of_products_sold",
      "value": 6.9,
      "sourceWidth": 127.6201171875,
      "targetWidth": 127.6201171875,
      "y0": 1019.65869140625,
      "y1": 1118.62939453125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "gross_profit",
      "target": "pretax_income",
      "value": 5.7,
      "sourceWidth": 108.08642578125,
      "targetWidth": 106.7841796875,
      "y0": 603.591064453125,
      "y1": 509.17822265625,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 9.8,
      "sourceWidth": 183.61669921875,
      "targetWidth": 183.61669921875,
      "y0": 749.442626953125,
      "y1": 845.808837890625,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "pretax_income",
      "target": "net_profit",
      "value": 4.7,
      "sourceWidth": 87.25048828125,
      "targetWidth": 87.25048828125,
      "y0": 499.411376953125,
      "y1": 409.556396484375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cc99"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 1.1,
      "sourceWidth": 19.53369140625,
      "targetWidth": 19.53369140625,
      "y0": 552.803466796875,
      "y1": 683.028076171875,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 5.7,
      "sourceWidth": 105.48193359375,
      "targetWidth": 105.48193359375,
      "y0": 806.741455078125,
      "y1": 893.991943359375,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 3.6,
      "sourceWidth": 69.01904296875,
      "targetWidth": 66.41455078125,
      "y0": 893.991943359375,
      "y1": 1140.116455078125,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#df8585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 0.5,
      "sourceWidth": 9.11572265625,
      "targetWidth": 9.11572265625,
      "y0": 933.059326171875,
      "y1": 1276.852294921875,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#df8585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "强生 · 2024 财年第二季度",
      "meta": {
        "title": "强生 2024 财年第二季度利润表",
        "period": "2024 财年第二季度",
        "titleSize": 112
      },
      "nodes": {
        "innovative_medicine": {
          "label": "创新制药",
          "notes": [
            "同比 +6%"
          ]
        },
        "medtech": {
          "label": "医疗科技",
          "notes": [
            "同比 +2%"
          ]
        },
        "revenue": {
          "label": "销售收入",
          "notes": [
            "同比 +4%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 69%",
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
            "利润率 26%",
            "同比 (4 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "费用",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 21%",
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
                "x": 497.4580078125,
                "top": 455.7861328125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 312.5390625,
                "top": 639.40283203125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "创新",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#666666"
                  },
                  {
                    "text": "制药",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "medtech": {
            "blocks": [
              {
                "x": 497.4580078125,
                "top": 937.6171875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +2%",
                    "size": 27.34716796875,
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
                "x": 959.75537109375,
                "top": 518.2939453125,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "销售收入",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#666666"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +4%",
                    "size": 27.34716796875,
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
                "x": 1428.56396484375,
                "top": 364.62890625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f51"
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
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.34716796875,
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
                "x": 1897.37255859375,
                "top": 269.56494140625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 26%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34716796875,
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
                "x": 2525.05517578125,
                "top": 332.07275390625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.0673828125,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.0673828125,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 21%",
                    "size": 27.34716796875,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (4 个百分点)",
                    "size": 27.34716796875,
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
                "x": 1897.37255859375,
                "top": 954.54638671875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "费用",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "cost_of_products_sold": {
            "blocks": [
              {
                "x": 1424.6572265625,
                "top": 1203.275390625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "产品销售",
                    "size": 36.462890625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 36.462890625,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "tax": {
            "blocks": [
              {
                "x": 2525.05517578125,
                "top": 653.7275390625,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2525.05517578125,
                "top": 839.94873046875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "销售、",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "市场及",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 31.25390625,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2525.05517578125,
                "top": 1105.60693359375,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
                "x": 2525.05517578125,
                "top": 1246.24951171875,
                "anchor": "middle",
                "lineGap": 6.51123046875,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.25390625,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31.25390625,
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
