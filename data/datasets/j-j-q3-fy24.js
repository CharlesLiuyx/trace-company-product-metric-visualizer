window.DATASETS = window.DATASETS || [];
window.DATASETS.push({
  "key": "j-j-q3-fy24",
  "name": "J&J · Q3 FY24",
  "company": "Johnson & Johnson",
  "meta": {
    "company": "Johnson & Johnson",
    "title": "J&J Q3 FY24 Income Statement",
    "period": "Q3 FY24",
    "currency": "$",
    "unit": "B",
    "decimals": 1,
    "referenceImage": {
      "src": "input/processed/j-j-q3-fy24.png",
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
      "x": 840,
      "y": 294,
      "width": 255,
      "height": 237
    },
    {
      "key": "medicine-icon",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-medicine-icon.png",
      "x": 20,
      "y": 620,
      "width": 155,
      "height": 176
    },
    {
      "key": "medtech-wordmark",
      "href": "data/assets/raster-annotations/j-j/q1-fy25-medtech-wordmark.png",
      "x": 91,
      "y": 1057,
      "width": 330,
      "height": 125
    }
  ],
  "layout": {
    "nodes": {
      "innovative_medicine": {
        "x": 458,
        "y": 601,
        "width": 73,
        "height": 254
      },
      "medtech": {
        "x": 458,
        "y": 1045,
        "width": 73,
        "height": 138
      },
      "revenue": {
        "x": 925,
        "y": 709,
        "width": 72,
        "height": 391
      },
      "gross_profit": {
        "x": 1392,
        "y": 606,
        "width": 73,
        "height": 269
      },
      "cost_of_products_sold": {
        "x": 1392,
        "y": 1065,
        "width": 73,
        "height": 122
      },
      "interest": {
        "x": 1675,
        "y": 460,
        "width": 73,
        "height": 2
      },
      "pretax_income": {
        "x": 1865,
        "y": 482,
        "width": 72,
        "height": 58
      },
      "operating_expenses": {
        "x": 1865,
        "y": 754,
        "width": 72,
        "height": 214
      },
      "net_profit": {
        "x": 2326,
        "y": 389,
        "width": 73,
        "height": 47
      },
      "tax": {
        "x": 2326,
        "y": 653,
        "width": 73,
        "height": 11
      },
      "sga": {
        "x": 2326,
        "y": 854,
        "width": 73,
        "height": 96
      },
      "rnd": {
        "x": 2326,
        "y": 1052,
        "width": 73,
        "height": 87
      },
      "other_opex": {
        "x": 2326,
        "y": 1260,
        "width": 73,
        "height": 31
      }
    },
    "labels": {
      "innovative_medicine": {
        "blocks": [
          {
            "x": 494.5,
            "top": 507,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5% Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          },
          {
            "x": 310,
            "top": 684,
            "anchor": "middle",
            "lineGap": 6,
            "lines": [
              {
                "text": "Innovative",
                "size": 40,
                "weight": 700,
                "color": "#666666"
              },
              {
                "text": "Medicine",
                "size": 40,
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
            "x": 494.5,
            "top": 952,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+6% Y/Y",
                "size": 28,
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
            "x": 961,
            "top": 566,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Sales",
                "size": 39,
                "weight": 700,
                "color": "#666666"
              },
              {
                "text": "$value",
                "size": 39,
                "weight": 400,
                "color": "#666666"
              },
              {
                "text": "+5% Y/Y",
                "size": 28,
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
            "x": 1428.5,
            "top": 419,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Gross profit",
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
                "text": "69% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(0pp) Y/Y",
                "size": 28,
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
            "x": 1901,
            "top": 300,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Pretax income",
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
                "text": "15% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(10pp) Y/Y",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              }
            ]
          }
        ]
      },
      "interest": {
        "blocks": [
          {
            "x": 1711.5,
            "top": 373,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Interest",
                "size": 31,
                "weight": 700,
                "color": "#008f51"
              },
              {
                "text": "$value",
                "size": 31,
                "weight": 400,
                "color": "#008f51"
              }
            ]
          }
        ]
      },
      "operating_expenses": {
        "blocks": [
          {
            "x": 1901,
            "top": 990,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Expenses",
                "size": 34,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              }
            ]
          }
        ]
      },
      "net_profit": {
        "blocks": [
          {
            "x": 2526,
            "top": 352,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Net income",
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
                "text": "12% margin",
                "size": 28,
                "weight": 400,
                "color": "#777777"
              },
              {
                "text": "(8pp) Y/Y",
                "size": 28,
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
            "x": 2526,
            "top": 626,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Tax",
                "size": 31,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
            "x": 2526,
            "top": 1063,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "R&D",
                "size": 31,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
            "x": 2526,
            "top": 1241,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Other",
                "size": 31,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
            "x": 1428.5,
            "top": 1210,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Cost of",
                "size": 34,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "products sold",
                "size": 34,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 34,
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
            "x": 2526,
            "top": 833,
            "anchor": "middle",
            "lineGap": 7,
            "lines": [
              {
                "text": "Sales,",
                "size": 31,
                "weight": 700,
                "color": "#941100"
              },
              {
                "text": "marketing &",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "administrative",
                "size": 31,
                "weight": 400,
                "color": "#941100"
              },
              {
                "text": "$value",
                "size": 31,
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
      "value": 14.6,
      "type": "source",
      "col": 0,
      "order": 0,
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$14.6B"
    },
    {
      "id": "medtech",
      "label": "MedTech",
      "value": 7.9,
      "type": "source",
      "col": 0,
      "order": 1,
      "notes": [
        "+6% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$7.9B"
    },
    {
      "id": "revenue",
      "label": "Sales",
      "value": 22.5,
      "type": "hub",
      "col": 1,
      "order": 2,
      "notes": [
        "+5% Y/Y"
      ],
      "color": "#666666",
      "valueText": "$22.5B"
    },
    {
      "id": "gross_profit",
      "label": "Gross profit",
      "value": 15.5,
      "type": "profit",
      "col": 2,
      "order": 3,
      "notes": [
        "69% margin",
        "(0pp) Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$15.5B"
    },
    {
      "id": "cost_of_products_sold",
      "label": "Cost of products sold",
      "value": 7,
      "type": "cost",
      "col": 2,
      "order": 4,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($7.0B)"
    },
    {
      "id": "pretax_income",
      "label": "Pretax income",
      "value": 3.3,
      "type": "profit",
      "col": 3,
      "order": 6,
      "notes": [
        "15% margin",
        "(10pp) Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$3.3B"
    },
    {
      "id": "operating_expenses",
      "label": "Expenses",
      "value": 12.3,
      "type": "cost",
      "col": 3,
      "order": 7,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($12.3B)"
    },
    {
      "id": "interest",
      "label": "Interest",
      "value": 0.1,
      "type": "profit",
      "col": 3,
      "order": 5,
      "notes": [],
      "color": "#2ca02c",
      "valueText": "$0.1B"
    },
    {
      "id": "net_profit",
      "label": "Net income",
      "value": 2.7,
      "type": "profit",
      "col": 4,
      "order": 8,
      "notes": [
        "12% margin",
        "(8pp) Y/Y"
      ],
      "color": "#2ca02c",
      "valueText": "$2.7B"
    },
    {
      "id": "tax",
      "label": "Tax",
      "value": 0.6,
      "type": "cost",
      "col": 4,
      "order": 9,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($0.6B)"
    },
    {
      "id": "sga",
      "label": "Sales, marketing & administrative",
      "value": 5.5,
      "type": "cost",
      "col": 4,
      "order": 10,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($5.5B)"
    },
    {
      "id": "rnd",
      "label": "R&D",
      "value": 5,
      "type": "cost",
      "col": 4,
      "order": 11,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($5.0B)"
    },
    {
      "id": "other_opex",
      "label": "Other",
      "value": 1.8,
      "type": "cost",
      "col": 4,
      "order": 12,
      "notes": [],
      "color": "#cc0000",
      "valueText": "($1.8B)"
    }
  ],
  "links": [
    {
      "source": "innovative_medicine",
      "target": "revenue",
      "value": 14.6,
      "sourceWidth": 254,
      "targetWidth": 254,
      "y0": 728,
      "y1": 836,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#ababab"
    },
    {
      "source": "medtech",
      "target": "revenue",
      "value": 7.9,
      "sourceWidth": 138,
      "targetWidth": 137,
      "y0": 1114,
      "y1": 1031.5,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#ababab"
    },
    {
      "source": "revenue",
      "target": "gross_profit",
      "value": 15.5,
      "sourceWidth": 269,
      "targetWidth": 269,
      "y0": 843.5,
      "y1": 740.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8ec88e"
    },
    {
      "source": "revenue",
      "target": "cost_of_products_sold",
      "value": 7,
      "sourceWidth": 122,
      "targetWidth": 122,
      "y0": 1039,
      "y1": 1126,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de7878"
    },
    {
      "source": "gross_profit",
      "target": "pretax_income",
      "value": 3.3,
      "sourceWidth": 56,
      "targetWidth": 56,
      "y0": 634,
      "y1": 512,
      "sourceOrder": 0,
      "targetOrder": 1,
      "linkTint": "#8ec88e"
    },
    {
      "source": "gross_profit",
      "target": "operating_expenses",
      "value": 12.3,
      "sourceWidth": 213,
      "targetWidth": 214,
      "y0": 768.5,
      "y1": 861,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de7878"
    },
    {
      "source": "interest",
      "target": "pretax_income",
      "value": 0.1,
      "sourceWidth": 2,
      "targetWidth": 2,
      "y0": 461,
      "y1": 483,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8ec88e"
    },
    {
      "source": "pretax_income",
      "target": "net_profit",
      "value": 2.7,
      "sourceWidth": 47,
      "targetWidth": 47,
      "y0": 505.5,
      "y1": 412.5,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#8ec88e"
    },
    {
      "source": "pretax_income",
      "target": "tax",
      "value": 0.6,
      "sourceWidth": 11,
      "targetWidth": 11,
      "y0": 534.5,
      "y1": 658.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de7878"
    },
    {
      "source": "operating_expenses",
      "target": "sga",
      "value": 5.5,
      "sourceWidth": 96,
      "targetWidth": 96,
      "y0": 802,
      "y1": 902,
      "sourceOrder": 0,
      "targetOrder": 0,
      "linkTint": "#de7878"
    },
    {
      "source": "operating_expenses",
      "target": "rnd",
      "value": 5,
      "sourceWidth": 87,
      "targetWidth": 87,
      "y0": 893.5,
      "y1": 1095.5,
      "sourceOrder": 1,
      "targetOrder": 0,
      "linkTint": "#de7878"
    },
    {
      "source": "operating_expenses",
      "target": "other_opex",
      "value": 1.8,
      "sourceWidth": 31,
      "targetWidth": 31,
      "y0": 952.5,
      "y1": 1275.5,
      "sourceOrder": 2,
      "targetOrder": 0,
      "linkTint": "#de7878"
    }
  ],
  "i18n": {
    "zh": {
      "name": "强生 · 2024 财年第三季度",
      "meta": {
        "title": "强生 2024 财年第三季度利润表",
        "period": "2024 财年第三季度",
        "titleSize": 112
      },
      "nodes": {
        "innovative_medicine": {
          "label": "创新制药",
          "notes": [
            "同比 +5%"
          ]
        },
        "medtech": {
          "label": "医疗科技",
          "notes": [
            "同比 +6%"
          ]
        },
        "revenue": {
          "label": "销售额",
          "notes": [
            "同比 +5%"
          ]
        },
        "gross_profit": {
          "label": "毛利润",
          "notes": [
            "利润率 69%",
            "同比 (0 个百分点)"
          ]
        },
        "cost_of_products_sold": {
          "label": "产品销售成本",
          "notes": []
        },
        "pretax_income": {
          "label": "税前利润",
          "notes": [
            "利润率 15%",
            "同比 (10 个百分点)"
          ]
        },
        "operating_expenses": {
          "label": "费用",
          "notes": []
        },
        "interest": {
          "label": "利息",
          "notes": []
        },
        "net_profit": {
          "label": "净利润",
          "notes": [
            "利润率 12%",
            "同比 (8 个百分点)"
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
                "x": 494.5,
                "top": 507,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              },
              {
                "x": 310,
                "top": 684,
                "anchor": "middle",
                "lineGap": 6,
                "lines": [
                  {
                    "text": "创新",
                    "size": 40,
                    "weight": 700,
                    "color": "#666666"
                  },
                  {
                    "text": "制药",
                    "size": 40,
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
                "x": 494.5,
                "top": 952,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +6%",
                    "size": 28,
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
                "x": 961,
                "top": 566,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "销售额",
                    "size": 39,
                    "weight": 700,
                    "color": "#666666"
                  },
                  {
                    "text": "$value",
                    "size": 39,
                    "weight": 400,
                    "color": "#666666"
                  },
                  {
                    "text": "同比 +5%",
                    "size": 28,
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
                "x": 1428.5,
                "top": 419,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "毛利润",
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
                    "text": "利润率 69%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (0 个百分点)",
                    "size": 28,
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
                "x": 1901,
                "top": 300,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "税前利润",
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
                    "text": "利润率 15%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (10 个百分点)",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  }
                ]
              }
            ]
          },
          "interest": {
            "blocks": [
              {
                "x": 1711.5,
                "top": 373,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "利息",
                    "size": 31,
                    "weight": 700,
                    "color": "#008f51"
                  },
                  {
                    "text": "$value",
                    "size": 31,
                    "weight": 400,
                    "color": "#008f51"
                  }
                ]
              }
            ]
          },
          "operating_expenses": {
            "blocks": [
              {
                "x": 1901,
                "top": 990,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "费用",
                    "size": 34,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 34,
                    "weight": 400,
                    "color": "#941100"
                  }
                ]
              }
            ]
          },
          "net_profit": {
            "blocks": [
              {
                "x": 2526,
                "top": 352,
                "anchor": "middle",
                "lineGap": 7,
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
                    "text": "利润率 12%",
                    "size": 28,
                    "weight": 400,
                    "color": "#777777"
                  },
                  {
                    "text": "同比 (8 个百分点)",
                    "size": 28,
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
                "x": 2526,
                "top": 626,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "税费",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "x": 2526,
                "top": 1063,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "研发",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "x": 2526,
                "top": 1241,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "其他",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "x": 1428.5,
                "top": 1210,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "产品销售",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "成本",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
                "x": 2526,
                "top": 833,
                "anchor": "middle",
                "lineGap": 7,
                "lines": [
                  {
                    "text": "销售、市场及",
                    "size": 31,
                    "weight": 700,
                    "color": "#941100"
                  },
                  {
                    "text": "行政费用",
                    "size": 31,
                    "weight": 400,
                    "color": "#941100"
                  },
                  {
                    "text": "$value",
                    "size": 31,
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
