window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "j-j-q3-fy26",
  "name": "J&J · Q3 FY26",
  "company": "Johnson & Johnson",
  "meta": {
    "company": "Johnson & Johnson",
    "title": "J&J Q3 FY26 Income Statement",
    "period": "Q3 FY26",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/j-j-q3-fy26.png",
      "width": 2667,
      "height": 1500
    },
    "titleX": 1333.5,
    "titleY": 198,
    "titleSize": 128,
    "titleWeight": 800,
    "titleTextLength": 1920,
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
    "subtitleColor": "#666666",
    "noteColor": "#666666",
    "palette": {
      "source": {
        "node": "#666666",
        "label": "#eb1700"
      },
      "hub": {
        "node": "#666666",
        "label": "#666666"
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
      "source": "#b3b3b3",
      "hub": "#b3b3b3",
      "profit": "#99cd99",
      "cost": "#e08585"
    },
    "linkOpacity": 1,
    "type": {
      "name": 40,
      "value": 39,
      "note": 28,
      "lineGap": 8
    }
  },
  "rasterAnnotations": [
    {
      "key": "company-wordmark",
      "href": "data/assets/raster-annotations/j-j/company-wordmark.png",
      "x": 727.956,
      "y": 311.237,
      "width": 433.648,
      "height": 181.012
    },
    {
      "key": "medicine-icon",
      "href": "data/assets/raster-annotations/j-j/innovative-medicine-icon.png",
      "x": 183.617,
      "y": 507.876,
      "width": 122.411,
      "height": 117.202
    },
    {
      "key": "medtech-icon",
      "href": "data/assets/raster-annotations/j-j/medtech-icon.png",
      "x": 179.71,
      "y": 871.203,
      "width": 125.016,
      "height": 173.199
    }
  ],
  "layout": {
    "scale": 1,
    "nodes": {
      "innovative_medicine": {
        "x": 457.088,
        "y": 586.011,
        "width": 72.926,
        "height": 273.472
      },
      "medtech": {
        "x": 457.088,
        "y": 1044.401,
        "width": 72.926,
        "height": 140.643
      },
      "revenue": {
        "x": 924.595,
        "y": 684.981,
        "width": 72.926,
        "height": 414.114
      },
      "gross_profit": {
        "x": 1392.101,
        "y": 584.708,
        "width": 72.926,
        "height": 281.285
      },
      "cost_of_products_sold": {
        "x": 1392.101,
        "y": 1054.819,
        "width": 72.926,
        "height": 131.527
      },
      "pretax_income": {
        "x": 1859.607,
        "y": 492.249,
        "width": 72.926,
        "height": 0.716
      },
      "operating_expenses": {
        "x": 1859.607,
        "y": 687.586,
        "width": 72.926,
        "height": 281.285
      },
      "tax_benefit": {
        "x": 2215.121,
        "y": 450.577,
        "width": 72.926,
        "height": 2.604
      },
      "net_profit": {
        "x": 2325.812,
        "y": 377.651,
        "width": 72.926,
        "height": 3.256
      },
      "sga": {
        "x": 2325.812,
        "y": 778.743,
        "width": 72.926,
        "height": 102.877
      },
      "rnd": {
        "x": 2325.812,
        "y": 974.08,
        "width": 72.926,
        "height": 75.53
      },
      "other_opex": {
        "x": 2325.812,
        "y": 1153.79,
        "width": 72.926,
        "height": 102.877
      }
    },
    "labels": {
      "innovative_medicine": {
        "blocks": [
          {
            "x": 493.551,
            "top": 494.854,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+8% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 247.427,
            "top": 649.821,
            "anchor": "middle",
            "lineGap": 5.209,
            "semanticRole": "reference-offset-side-label",
            "lines": [
              {
                "text": "Innovative",
                "size": 67.717,
                "weight": 400,
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
            "top": 954.546,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+3% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#666666"
              }
            ]
          },
          {
            "x": 240.916,
            "top": 1084.771,
            "anchor": "middle",
            "lineGap": 5.209,
            "semanticRole": "reference-offset-side-label",
            "lines": [
              {
                "text": "MedTech",
                "size": 67.717,
                "weight": 400,
                "color": "#eb1700"
              }
            ]
          }
        ]
      },
      "revenue": {
        "blocks": [
          {
            "x": 955.849,
            "top": 540.432,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Sales",
                "size": 39.067,
                "weight": 800,
                "color": "#666666"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+6% Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "gross_profit": {
        "blocks": [
          {
            "x": 1428.564,
            "top": 403.696,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Gross profit",
                "size": 39.067,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "68% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(1pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "cost_of_products_sold": {
        "blocks": [
          {
            "x": 1428.564,
            "top": 1209.787,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Cost of",
                "size": 33.858,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "products sold",
                "size": 33.858,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33.858,
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
            "x": 1894.768,
            "top": 312.539,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Pretax income",
                "size": 39.067,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "0% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(31pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1894.768,
            "top": 993.614,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Expenses",
                "size": 33.858,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 33.858,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "tax_benefit": {
        "blocks": [
          {
            "x": 2251.583,
            "top": 474.018,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Tax benefit",
                "size": 31.254,
                "weight": 800,
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
            "x": 2526.357,
            "top": 322.957,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Net income",
                "size": 39.067,
                "weight": 800,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 39.067,
                "weight": 400,
                "color": "#008f51"
              },
              {
                "text": "1% margin",
                "size": 27.347,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "(21pp) Y/Y",
                "size": 27.347,
                "weight": 400,
                "color": "#666666"
              }
            ]
          }
        ]
      },
      "sga": {
        "blocks": [
          {
            "x": 2526.357,
            "top": 755.303,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Sales,",
                "size": 31.254,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "marketing &",
                "size": 31.254,
                "weight": 800,
                "color": "#941100"
              },
              {
                "text": "administrative",
                "size": 31.254,
                "weight": 800,
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
      "rnd": {
        "blocks": [
          {
            "x": 2526.357,
            "top": 979.289,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "R&D",
                "size": 31.254,
                "weight": 800,
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
            "top": 1170.719,
            "anchor": "middle",
            "lineGap": 9.116,
            "lines": [
              {
                "text": "Other",
                "size": 31.254,
                "weight": 800,
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
      "value": 16.8,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+8% Y/Y"
      ],
      "valueText": "$16.8B"
    },
    {
      "id": "medtech",
      "label": "MedTech",
      "value": 8.6,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+3% Y/Y"
      ],
      "valueText": "$8.6B"
    },
    {
      "id": "revenue",
      "label": "Sales",
      "value": 25.4,
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+6% Y/Y"
      ],
      "valueText": "$25.4B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 17.3,
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "68% margin",
        "(1pp) Y/Y"
      ],
      "valueText": "$17.3B"
    },
    {
      "id": "cost_of_products_sold",
      "label": "Cost of products sold",
      "value": 8.1,
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": [],
      "valueText": "($8.1B)"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 0.034,
      "type": "profit",
      "col": 3,
      "order": 5,
      "notes": [
        "0% margin",
        "(31pp) Y/Y"
      ],
      "valueText": "$34M"
    },
    {
      "id": "operating_expenses",
      "label": "Expenses",
      "value": 17.3,
      "type": "cost",
      "col": 3,
      "order": 6,
      "notes": [],
      "valueText": "($17.3B)"
    },
    {
      "id": "tax_benefit",
      "label": "Tax benefit",
      "value": 0.2,
      "type": "profit",
      "col": 4,
      "order": 7,
      "notes": [],
      "valueText": "$0.2B"
    },
    {
      "id": "net_profit",
      "label": "Net income",
      "value": 0.2,
      "type": "profit",
      "col": 5,
      "order": 8,
      "notes": [
        "1% margin",
        "(21pp) Y/Y"
      ],
      "valueText": "$0.2B"
    },
    {
      "id": "sga",
      "label": "Sales, marketing & administrative",
      "value": 6.3,
      "type": "cost",
      "col": 5,
      "order": 9,
      "notes": [],
      "valueText": "($6.3B)"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 4.7,
      "type": "cost",
      "col": 5,
      "order": 10,
      "notes": [],
      "valueText": "($4.7B)"
    },
    {
      "id": "other_opex",
      "label": "Other",
      "value": 6.2,
      "type": "cost",
      "col": 5,
      "order": 11,
      "notes": [],
      "valueText": "($6.2B)"
    }
  ],
  "links": [
    {
      "source": "innovative_medicine",
      "target": "revenue",
      "value": 16.8,
      "sourceWidth": 273.472,
      "targetWidth": 273.472,
      "y0": 722.747,
      "y1": 821.717,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "medtech",
      "target": "revenue",
      "value": 8.6,
      "sourceWidth": 140.643,
      "targetWidth": 140.643,
      "y0": 1114.723,
      "y1": 1028.774,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#b3b3b3"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 17.3,
      "sourceWidth": 282.587,
      "targetWidth": 281.285,
      "y0": 826.275,
      "y1": 725.351,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "revenue",
      "target": "cost_of_products_sold",
      "value": 8.1,
      "sourceWidth": 131.527,
      "targetWidth": 131.527,
      "y0": 1033.332,
      "y1": 1120.583,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "gross_profit",
      "target": "pretax_income",
      "value": 0.034,
      "sourceWidth": 0.716,
      "targetWidth": 0.716,
      "y0": 585.067,
      "y1": 492.607,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 17.3,
      "sourceWidth": 280.569,
      "targetWidth": 281.285,
      "y0": 725.709,
      "y1": 828.229,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "pretax_income",
      "target": "net_profit",
      "value": 0.034,
      "sourceWidth": 0.716,
      "targetWidth": 0.716,
      "y0": 492.607,
      "y1": 378.009,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#99cd99"
    },
    {
      "source": "tax_benefit",
      "target": "net_profit",
      "value": 0.2,
      "sourceWidth": 2.604,
      "targetWidth": 2.539,
      "y0": 451.879,
      "y1": 379.637,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#99cd99"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 6.3,
      "sourceWidth": 102.877,
      "targetWidth": 102.877,
      "y0": 739.025,
      "y1": 830.182,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 4.7,
      "sourceWidth": 75.53,
      "targetWidth": 75.53,
      "y0": 828.229,
      "y1": 1011.845,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#e08585"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 6.2,
      "sourceWidth": 102.877,
      "targetWidth": 102.877,
      "y0": 917.432,
      "y1": 1205.229,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#e08585"
    }
  ],
  "i18n": {
    "zh": {
      "name": "强生 · 2026 财年第三季度",
      "meta": {
        "title": "强生 2026 财年第三季度利润表",
        "period": "2026 财年第三季度",
        "titleSize": 116,
        "titleTextLength": 1850
      },
      "nodes": {
        "innovative_medicine": {
          "label": "创新制药",
          "notes": [
            "同比 +8%"
          ]
        },
        "medtech": {
          "label": "医疗科技",
          "notes": [
            "同比 +3%"
          ]
        },
        "revenue": {
          "label": "销售额",
          "notes": [
            "同比 +6%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 68%",
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
            "利润率 0%",
            "同比 (31 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "费用",
          "notes": []
        },
        "tax_benefit": {
          "label": "税收收益",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 1%",
            "同比 (21 个百分点)"
          ]
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
                "top": 494.854,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +8%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 247.427,
                "top": 649.821,
                "anchor": "middle",
                "lineGap": 5.209,
                "semanticRole": "reference-offset-side-label",
                "lines": [
                  {
                    "text": "创新",
                    "size": 52,
                    "weight": 400,
                    "color": "#eb1700"
                  },
                  {
                    "text": "制药",
                    "size": 52,
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
                "top": 954.546,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +3%",
                    "size": 28,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              },
              {
                "x": 240.916,
                "top": 1084.771,
                "anchor": "middle",
                "lineGap": 5.209,
                "semanticRole": "reference-offset-side-label",
                "lines": [
                  {
                    "text": "医疗科技",
                    "size": 52,
                    "weight": 400,
                    "color": "#eb1700"
                  }
                ]
              }
            ]
          },
          "revenue": {
            "blocks": [
              {
                "x": 955.849,
                "top": 540.432,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "销售额",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#666666"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "gross_profit": {
            "blocks": [
              {
                "x": 1428.564,
                "top": 403.696,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "毛利润",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 68%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (1 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "cost_of_products_sold": {
            "blocks": [
              {
                "x": 1428.564,
                "top": 1209.787,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "产品销售",
                    "size": 33.858,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 33.858,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33.858,
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
                "x": 1894.768,
                "top": 312.539,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "税前利润",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 0%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (31 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1894.768,
                "top": 993.614,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "费用",
                    "size": 33.858,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 33.858,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "tax_benefit": {
            "blocks": [
              {
                "x": 2251.583,
                "top": 474.018,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "税收收益",
                    "size": 31.254,
                    "weight": 800,
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
                "x": 2526.357,
                "top": 322.957,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "净利润",
                    "size": 39.067,
                    "weight": 800,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 39.067,
                    "weight": 400,
                    "color": "#008f51"
                  },
                  {
                    "text": "利润率 1%",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 (21 个百分点)",
                    "size": 27.347,
                    "weight": 400,
                    "color": "#666666"
                  }
                ]
              }
            ]
          },
          "sga": {
            "blocks": [
              {
                "x": 2526.357,
                "top": 755.303,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "销售、",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "市场及",
                    "size": 31.254,
                    "weight": 800,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 31.254,
                    "weight": 800,
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
          "rnd": {
            "blocks": [
              {
                "x": 2526.357,
                "top": 979.289,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31.254,
                    "weight": 800,
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
                "top": 1170.719,
                "anchor": "middle",
                "lineGap": 9.116,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31.254,
                    "weight": 800,
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
